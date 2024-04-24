import { OrderEditService } from './../order-edit.service';
import { Payment } from '@global/models/payment';
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Output,
  EventEmitter,
  AfterViewInit,
  Inject,
  OnDestroy,
  ElementRef
} from '@angular/core';
import { Order } from '@global/models/order';
import { ModalDirective, BsModalRef } from 'ngx-bootstrap/modal';
import { SocketService } from '@admin/shared/services/socket.service';
import { takeUntil, switchMap, take, catchError } from 'rxjs/operators';
import {
  untilComponentDestroyed,
  componentDestroyed
} from '@global/untilDestroy';
import { Element as StripeElement, Elements, StripeService } from 'ngx-stripe';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@admin/core/services/auth.service';
import { of } from 'rxjs';
import { ToastService } from '@admin/core/services/toast.service';

@Component({
  selector: 'bx-order-payments-add',
  templateUrl: './order-payments-add.component.html',
  styles: [],
  providers: [
    {
      provide: 'PaymentService',
      useClass: SocketService
    },
    {
      provide: 'StripeService',
      useClass: SocketService
    }
  ]
})
export class OrderPaymentsAddComponent
  implements OnInit, AfterViewInit, OnDestroy {
  paymentForm: FormGroup;
  public paymentType = 'Card';
  public amount: number;
  elements: Elements;
  card: StripeElement;
  @ViewChild('card', { static: false }) cardRef: ElementRef;
  public order: Order;
  public saving = false;
  constructor(
    @Inject('PaymentService') private paymentService: SocketService,
    @Inject('StripeService') private stripeService: SocketService,
    private fb: FormBuilder,
    private stripe: StripeService,
    public editService: OrderEditService,
    public bsModalRef: BsModalRef,
    private auth: AuthService,
    private toastr: ToastService
  ) {
    paymentService.setup('payment');
    stripeService.setup('stripe/moto');
  }

  get isAdmin() {
    return this.auth.checkRoles(['admin']);
  }

  ngOnInit() {
    if (this.order) {
      this.amount = this.order.balance;
    }
    this.paymentForm = this.fb.group({
      name: [null, Validators.required]
    });
  }

  ngAfterViewInit() {
    this.stripe
      .elements()
      .pipe(untilComponentDestroyed(this))
      .subscribe(elements => {
        this.elements = elements;
        this.setUpCard();
      });
  }

  typeChanged(type: string) {
    if (type === 'Card') {
      setTimeout(() => this.card.mount(this.cardRef.nativeElement), 0);
    }
  }

  setUp() {
    if (this.order) {
      this.amount = this.order.balance;
    }
  }

  setUpCard() {
    const elementStyles = {
      base: {
        fontFamily: 'Arial',
        fontSize: '18px',
        iconColor: '#3e3935',
        color: '#3e3935'
      },
      invalid: {
        color: '#a6192e',
        ':focus': {
          color: '#a6192e'
        },
        iconColor: '#a6192e'
      },
      complete: {
        color: '#19a449',
        ':focus': {
          color: '#19a449'
        },
        iconColor: '#19a449'
      }
    };

    if (!this.card) {
      this.card = this.elements.create('card', {
        iconStyle: 'solid',
        hidePostalCode: true,
        style: elementStyles
      });
      this.card.mount(this.cardRef.nativeElement);
    }
  }

  addCardPayment() {
    const data = this.paymentForm.value;
    const order = this.order;
    const address = order.billing ? order.billing : order.shipping;

    const payment_method_data: any = {
      billing_details: {
        name: `${data.name}`,
        address: {
          line1: `${address.address1}`,
          line2: address.address2 ? `${address.address2}` : '',
          city: `${address.city}`,
          postal_code: `${address.postcode}`,
          country: `${address.country_code}`,
          state: address.region ? `${address.region}` : ''
        }
      }
    };

    // const extra_data = {
    //   name: `${data.name}`,
    //   address_line1: `${address.address1}`,
    //   address_line2: address.address2 ? `${address.address2}` : '',
    //   address_city: `${address.city}`,
    //   address_state: address.region ? `${address.region}` : '',
    //   address_zip: `${address.postcode}`,
    //   address_country: `${address.country_code}`
    // };
    this.saving = true;

    this.stripe
      .createPaymentMethod('card', this.card, payment_method_data)
      .pipe(
        switchMap((resp: any) => {
          const createIntentData: any = {
            address,
            amount: this.amount,
            orderid: this.order.orderid,
            email: this.order.email,
            payment_method: resp.paymentMethod.id
          };
          return this.stripeService.create(createIntentData);
        }),
        catchError((err: any) => {
          return of(err);
        }),
        takeUntil(componentDestroyed(this))
      )
      .subscribe(resp => {
        if (resp.error) {
          this.toastr.showToast('error', 'Payment Failed', resp.error.message);
          this.saving = false;
        } else {
          this.saving = false;
          this.card.clear();
          this.hidePaymentModal();
        }
      });

    // this.stripe
    //   .createToken(this.card, extra_data)
    //   .pipe(
    //     take(1),
    //     untilComponentDestroyed(this),
    //     switchMap((resp: any) => {
    //       return this.stripeService.create({
    //         token: resp.token.id,
    //         amount: this.amount,
    //         order: this.order._id,
    //         orderid: this.order.orderid
    //       });
    //     })
    //   )
    //   .subscribe(
    //     (payment: Payment) => {
    //       this.editService.payments.push(payment);
    //       this.card.clear();
    //       this.hidePaymentModal();
    //     },
    //     err => {
    //       this.saving = false;
    //     }
    //   );
  }

  addMiscPayment(type: string) {
    this.saving = true;
    const data = {
      order: this.order._id,
      orderid: this.order.orderid,
      type,
      action: 'Payment',
      amount: this.amount
    };
    this.paymentService
      .create(data)
      .pipe(
        untilComponentDestroyed(this),
        take(1)
      )
      .subscribe(
        (payment: Payment) => {
          this.editService.payments.push(payment);
          this.hidePaymentModal();
        },
        err => {
          this.saving = false;
        }
      );
  }

  hidePaymentModal() {
    this.bsModalRef.hide();
  }

  ngOnDestroy() {
    if (this.card) {
      this.card.unmount();
    }
  }
}
