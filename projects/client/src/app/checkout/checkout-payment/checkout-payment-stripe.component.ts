import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { LoadingService } from '@app/core/modules/loading/loading.service';
import { Order } from '@global/models/order';
import {
  untilComponentDestroyed,
  componentDestroyed
} from '@global/untilDestroy';
import { of, combineLatest, forkJoin } from 'rxjs';
import { take, switchMap, map, takeUntil } from 'rxjs/operators';

import {
  StripeService,
  Elements,
  Element as StripeElement,
  ConfirmPaymentIntentOptions
} from 'ngx-stripe';
import { CheckoutService } from '@app/core/services/checkout.service';
import { ApiService } from '@app/core/services/api.service';
import { AuthService } from '@app/core/services/auth.service';

import { ToastrService } from 'ngx-toastr';
import { SentryService } from '@global/sentry/sentry.service';

@Component({
  selector: 'bx-checkout-payment-stripe',
  templateUrl: './checkout-payment-stripe.component.html',
  styleUrls: ['./checkout-payment-stripe.component.scss']
})
export class CheckoutPaymentStripeComponent implements OnInit, OnDestroy {
  @Input()
  order: Order;
  @Input()
  parentForm: FormGroup;
  isFocused = false;
  elements: Elements;
  card: StripeElement;
  @ViewChild('card', { static: true })
  cardRef: ElementRef;
  cards: any[];
  addCard = false;
  cardError: string;
  constructor(
    private api: ApiService,
    private auth: AuthService,
    private stripeService: StripeService,
    private loading: LoadingService,
    private checkout: CheckoutService,
    private toastr: ToastrService,
    private sentryService: SentryService
  ) {}

  @HostBinding('class.checkout-box')
  isCheckout() {
    return true;
  }

  formatCardName(brand: string) {
    const formatted = brand.replace(' ', '-').toLowerCase();
    if (formatted === 'american-express') {
      return 'cc-amex';
    } else {
      return `cc-${formatted}`;
    }
  }

  ngOnInit() {
    const getCards = this.auth.loggedIn()
      ? this.api.find('users/cards')
      : of({ data: [] });
    forkJoin([this.stripeService.elements().pipe(take(1)), getCards])
      .pipe(untilComponentDestroyed(this))
      .subscribe((resp: any) => {
        this.elements = resp[0];
        this.cards = resp[1].data;
        if (this.cards && this.cards.length) {
          this.parentForm.controls['card'].setValue(this.cards[0].id);
          this.parentForm.controls['complete'].setValue(true);
          this.parentForm.controls['name'].setValidators(null);
          this.parentForm.controls['name'].updateValueAndValidity();
        } else {
          this.addCard = true;
        }
        this.setUpCard();
      });
  }

  addNewCard() {
    this.parentForm.controls['card'].setValue(null);
    this.parentForm.controls['complete'].setValue(false);
    this.parentForm.controls['name'].setValidators(Validators.required);
    this.parentForm.controls['name'].updateValueAndValidity();
    this.parentForm.updateValueAndValidity();
    this.addCard = true;
  }

  setUpCard() {
    const elementStyles = {
      base: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',
        iconColor: '#363636',
        color: '#363636',
        '::placeholder': {
          color: '#9e9e9e'
        }
      },
      empty: {
        color: '#f44336',
        '::placeholder': {
          color: '#f44336'
        },
        iconColor: '#f44336'
      },
      invalid: {
        color: '#f44336',
        ':focus': {
          color: '#f44336'
        },
        iconColor: '#f44336'
      },
      complete: {
        color: '#363636',
        ':focus': {
          color: '#363636'
        },
        iconColor: '#63b20b'
      }
    };

    if (!this.card) {
      this.card = this.elements.create('card', {
        hidePostalCode: true,
        iconStyle: 'solid',
        style: elementStyles
      });
      this.card.mount(this.cardRef.nativeElement);
      this.card.on('change', this.onChange.bind(this));
    }
  }

  onChange(event) {
    if (event.complete === false) {
      this.parentForm.controls['complete'].setValue(false);
    } else if (event.complete) {
      this.parentForm.controls['complete'].setValue(true);
    }
    if (event && event.error) {
      this.cardError = event.error.message;
    } else {
      this.cardError = null;
    }
  }

  closeKeyboard() {
    this.card.focus();
    setTimeout(() => {
      this.card.blur();
    });
  }

  getToken(values: any) {
    this.closeKeyboard();

    let billing =
      this.parentForm.get('billing') && this.parentForm.get('billing').value
        ? this.parentForm.get('billing').value
        : null;

    if (
      this.parentForm.get('saved_billing') &&
      this.parentForm.get('saved_billing').value
    ) {
      billing = this.parentForm.get('saved_billing').value;
    }

    this.loading.show(
      'Checking payment details... Do not refresh or press back',
      '0px'
    );

    let intent_data: ConfirmPaymentIntentOptions = {
      payment_method_data: {
        billing_details: {
          name: this.parentForm.get('name').value,
          address: {
            line1: billing ? billing.address1 : this.order.shipping.address1,
            line2: '',
            city: billing ? billing.city : this.order.shipping.city,
            postal_code: billing
              ? billing.postcode
              : this.order.shipping.postcode,
            country: billing
              ? billing.country_code
              : this.order.shipping.country_code,
            state: ''
          }
        }
      }
    };

    if (billing && billing.address2) {
      intent_data.payment_method_data.billing_details.address.line2 =
        billing.address2;
    } else if (this.order.shipping.address2) {
      intent_data.payment_method_data.billing_details.address.line2 = this.order.shipping.address2;
    }

    if (billing && billing.region) {
      intent_data.payment_method_data.billing_details.address.state =
        billing.region;
    } else if (this.order.shipping.region) {
      intent_data.payment_method_data.billing_details.address.state = this.order.shipping.region;
    }

    const createIntentData: any = {
      billing,
      save_card: this.parentForm.get('save_card').value,
      email: this.order.email
    };

    if (values.card) {
      createIntentData.payment_method = values.card;
      intent_data = {
        payment_method: values.card,
        use_stripe_sdk: true
      };
    } else {
      intent_data.save_payment_method = this.parentForm.get('save_card').value;
    }

    this.api
      .create('stripe/intent', createIntentData, false)
      .pipe(
        switchMap(resp => {
          this.loading.show(
            'Confirming payment details... Do not refresh or press back',
            '0px'
          );
          if (values.card) {
            return this.stripeService.handleCardPayment(
              resp.client_secret,
              intent_data
            );
          } else {
            return this.stripeService.handleCardPayment(
              resp.client_secret,
              this.card,
              intent_data
            );
          }
        }),
        switchMap((resp: any) => {
          if (resp.error) {
            return of(resp);
          } else {
            if (resp.paymentIntent.status === 'succeeded') {
              return of(resp);
            } else {
              return this.stripeService.handleCardPayment(
                resp.paymentIntent.client_secret
              );
            }
          }
        }),
        takeUntil(componentDestroyed(this))
      )
      .subscribe(resp => {
        if (resp.error) {
          this.toastr.error(resp.error.message, 'Payment Failed');
          this.loading.hide();
          this.handleError(resp.error);
        } else {
          this.loading.show('Completing order...', '0px');
          this.checkout.paymentComplete(this.order);
        }
      });
  }

  handleError(err) {
    if (err.status && err.status !== 402) {
      this.sentryService.setExtra('orderid', this.order.orderid);
      this.sentryService.captureEvent(err.error ? err.error : err);
    }
  }

  ngOnDestroy() {
    if (this.card) {
      this.card.unmount();
    }
  }
}
