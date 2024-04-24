import {
  AfterViewInit,
  Component,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { fadeInAnimation, slideUpAnimation } from '@app/route.animation';
import { OpenCart } from '@app/core/actions/state';
import * as fromRoot from '@app/reducers';
import * as fromCart from '@app/cart/reducers';
import { LineItem } from '@global/models/line-item';
import { Order } from '@global/models/order';
import { select, Store } from '@ngrx/store';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { Observable, of } from 'rxjs';
import { tap, switchMap, share } from 'rxjs/operators';
import { StripeService } from 'ngx-stripe';
import { CheckoutService } from '@app/core/services/checkout.service';
import { DataLayerService } from '@app/core/services/data-layer.service';
import { ApiService } from '@app/core/services/api.service';

@Component({
  selector: 'bx-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  animations: [slideUpAnimation, fadeInAnimation],
})
export class CartComponent implements AfterViewInit, OnDestroy {
  carts$: Observable<LineItem[]>;
  order$: Observable<Order>;
  cartOpen$: Observable<boolean>;
  paymentBtn = true;
  prButton: any;
  elements: any;
  paymentRequest: any;
  shipping: any[];
  processing = false;
  @ViewChild('card', { static: false })
  cardRef: ElementRef;
  private _order: Order;

  constructor(
    private stripeService: StripeService,
    private store: Store<fromRoot.State>,
    public checkoutService: CheckoutService,
    private dataLayer: DataLayerService,
    private api: ApiService
  ) {
    this.carts$ = this.store.pipe(
      select(fromCart.getCarts),
      share(),
      tap((carts: LineItem[]) => {
        this.dataLayer.checkoutStep(1, carts, this._order);
      })
    );
    this.order$ = this.store.pipe(
      select(fromCart.getOrder),
      tap((order: Order) => {
        this._order = order;
        if (!this.processing) {
          this.updatePayment();
        }
      })
    );
    this.cartOpen$ = this.store.pipe(select(fromRoot.getCartOpen));
    this.store
      .pipe(select(fromRoot.getShipping), untilComponentDestroyed(this))
      .subscribe((shipping) => {
        this.shipping = shipping;
      });
  }

  ngAfterViewInit() {
    if (this._order && this._order.total > 0) {
      this.stripeService
        .elements()
        .pipe(
          switchMap((elements) => {
            this.elements = elements;
            return of(
              this.stripeService.paymentRequest({
                country: 'GB',
                currency: 'gbp',
                total: {
                  label: 'Boxxerworld',
                  amount: this.orderTotal,
                },
                requestPayerName: true,
                requestShipping: true,
                requestPayerPhone: true,
                requestPayerEmail: true,
              })
            );
          }),
          untilComponentDestroyed(this)
        )
        .subscribe((paymentRequest) => {
          this.paymentRequest = paymentRequest;
          this.setupPayment();
        });
    }
  }

  hasExpress() {
    const customItems = this._order.items.filter((i) => i.custom_design);

    const expressItemsNew = customItems.filter(
      (i) =>
        i.custom_design.production.production_type &&
        i.custom_design.production.production_type.express_shipping
    );

    if (expressItemsNew && expressItemsNew.length > 0) {
      return true;
    }

    const expressItems = customItems.filter((i) => i.custom_design.urgent);
    return expressItems.length > 0;
  }

  getShipping() {
    return this.hasExpress()
      ? this.shipping.filter((s) => s.type === 'International Courier')
      : this.shipping;
  }

  get cartQty() {
    return this._order.items.reduce((sum, option) => {
      return (sum += option.qty), sum;
    }, 0);
  }

  get orderTotal() {
    return this._order && this._order.total
      ? Math.round(this._order.total * 100)
      : 0;
  }

  setupPayment() {
    this.prButton = this.elements.create('paymentRequestButton', {
      paymentRequest: this.paymentRequest,
    });

    this.paymentRequest
      .canMakePayment()
      .then((result) => {
        if (result && this.cardRef) {
          this.prButton.mount(this.cardRef.nativeElement);
        } else {
          this.paymentBtn = false;
        }
      })
      .catch((err) => err);

    this.paymentRequest.on('shippingaddresschange', (ev) => {
      ev.updateWith({
        status: 'success',
        total: {
          label: 'Boxxerworld',
          amount: this.orderTotal,
        },
        shippingOptions: this.getShipping().map((s) => {
          return {
            id: s._id,
            label: s.type,
            detail: s.description,
            amount:
              this.cartQty === 1 ? s.firstPrice * 100 : s.secondPrice * 100,
          };
        }),
      });
    });

    this.paymentRequest.on('shippingoptionchange', (ev) => {
      ev.updateWith({
        status: 'success',
        total: {
          label: 'Boxxerworld',
          amount: this.orderTotal + ev.shippingOption.amount,
        },
      });
    });

    this.paymentRequest.on('cancel', () => {
      this.updatePayment();
    });

    this.paymentRequest.on('paymentmethod', (ev) => {
      this.processing = true;
      const data = this.formatData(ev);
      data.shipping_price = data.shipping_price / 100;
      let order: Order;
      this.checkoutService
        .updateCart(data)
        .pipe(
          switchMap((resp) => {
            order = resp;
            return this.api.create('stripe/intent', {}, false);
          }),
          switchMap((resp: any) => {
            return this.stripeService.confirmPaymentIntent(resp.client_secret, {
              payment_method: ev.paymentMethod.id,
              use_stripe_sdk: true,
            });
          }),
          switchMap((resp: any) => {
            if (resp.error) {
              ev.complete('fail');
              return of(resp);
            } else {
              ev.complete('success');
              if (resp.paymentIntent.status === 'succeeded') {
                return of(resp);
              } else {
                return this.stripeService.handleCardPayment(
                  resp.paymentIntent.client_secret
                );
              }
            }
          }),
          untilComponentDestroyed(this)
        )
        .subscribe((resp: any) => {
          if (resp.error) {
            this.processing = false;
          } else {
            this.checkoutService.paymentComplete(order);
            this.processing = false;
          }
        });
    });
  }

  updatePayment() {
    if (this.paymentRequest) {
      this.paymentRequest.update({
        total: {
          label: 'Boxxerworld',
          amount: this.orderTotal,
        },
      });
    }
  }

  formatData(data: any) {
    return {
      email: data.payerEmail,
      shipping: {
        full_name: data.shippingAddress.recipient,
        address1: data.shippingAddress.addressLine[0],
        address2: data.shippingAddress.addressLine[1],
        city: data.shippingAddress.city,
        region: data.shippingAddress.region,
        country_code: data.shippingAddress.country,
        postcode: data.shippingAddress.postalCode,
        phone: data.payerPhone,
      },
      shipping_price: data.shippingOption.amount,
    };
  }

  closeCart() {
    this.store.dispatch(new OpenCart(false));
  }

  trackById(index: number, item: LineItem) {
    return item._id;
  }

  ngOnDestroy() {
    if (this.prButton) {
      this.prButton.unmount();
    }
  }
}
