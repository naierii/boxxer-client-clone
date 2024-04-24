import { Order } from '@global/models/order';
import { CartService } from './../../cart/cart.service';
import { PlatformService } from '@app/shared-main/services/platform.service';
import { CheckoutService } from '@app/core/services/checkout.service';
import {
  Component,
  OnInit,
  HostBinding,
  Injector,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { environment } from '@env/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { SentryService } from '@global/sentry/sentry.service';
declare let paypal: any;
@Component({
  selector: 'bx-checkout-payment-paypal',
  templateUrl: './checkout-payment-paypal.component.html',
  styleUrls: ['./checkout-payment-paypal.component.scss']
})
export class CheckoutPaymentPaypalComponent implements OnInit, OnDestroy {
  @Input()
  order: Order;
  @Input()
  parentForm: FormGroup;
  @Output()
  paypalValidate = new EventEmitter();
  ppBtnLoaded = false;
  public paypalConfig: any = {
    env: environment.production ? 'production' : 'sandbox',
    style: {
      size: 'responsive',
      color: 'blue',
      shape: 'rect',
      tagline: false,
      label: 'pay'
    },
    commit: true,
    validate: actions => {
      this.toggleValid(actions);
      this.parentForm
        .get('email')
        .valueChanges.pipe(untilComponentDestroyed(this))
        .subscribe(() => {
          this.toggleValid(actions);
        });
    },
    onClick: () => {
      this.paypalValidate.emit();
    },
    payment: () => {
      const CREATE_PAYMENT_URL = `${environment.host}/cart-paypal-create`;
      return this.httpClient
        .post(CREATE_PAYMENT_URL, {
          headers: new HttpHeaders().set('Cart-Token', this.cart.token)
        })
        .toPromise()
        .then((data: any) => {
          return data.id;
        })
        .catch(err => {
          this.handleError(err);
          return err;
        });
    },
    onAuthorize: data => {
      const EXECUTE_PAYMENT_URL = `${environment.host}/cart-paypal-execute`;
      return this.httpClient
        .post(
          EXECUTE_PAYMENT_URL,
          {
            email: this.parentForm.get('email').value,
            paymentID: data.paymentID,
            payerID: data.payerID
          },
          {
            headers: new HttpHeaders().set('Cart-Token', this.cart.token)
          }
        )
        .toPromise()
        .then((resp: Order) => {
          this.checkout.paymentComplete(resp);
        })
        .catch(err => {
          this.handleError(err);
          return err;
        });
    }
  };
  constructor(
    private checkout: CheckoutService,
    private ps: PlatformService,
    private injector: Injector,
    private httpClient: HttpClient,
    public cart: CartService,
    private sentryService: SentryService
  ) {}

  toggleValid(actions: any) {
    return this.parentForm.get('email').valid
      ? actions.enable()
      : actions.disable();
  }

  ngOnInit() {
    if (!this.checkout.didPaypalScriptLoad && this.ps.isBrowser) {
      this.loadPaypalScript()
        .then(() => {
          paypal.Button.render(this.paypalConfig, '#paypal-button');
          this.ppBtnLoaded = true;
        })
        .catch(err => {
          this.handleError(err);
          return err;
        });
    } else if (this.checkout.didPaypalScriptLoad && !this.ppBtnLoaded) {
      paypal.Button.render(this.paypalConfig, '#paypal-button');
      this.ppBtnLoaded = true;
    }
  }

  @HostBinding('class.checkout-box')
  isCheckout() {
    return true;
  }

  private loadPaypalScript(): Promise<any> {
    this.checkout.didPaypalScriptLoad = true;
    return new Promise((resolve, reject) => {
      const scriptElement = this.ps.getNativeDocument().createElement('script');
      scriptElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scriptElement.onload = resolve;
      this.ps.getNativeDocument().body.appendChild(scriptElement);
    });
  }

  handleError(err) {
    this.sentryService.setExtra('orderid', this.order.orderid);
    this.sentryService.captureEvent(err.error ? err.error : err);
  }

  ngOnDestroy() {}
}
