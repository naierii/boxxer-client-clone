import { LoadingService } from '@app/core/modules/loading/loading.service';
import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  Injector
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Order } from '@global/models/order';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { CheckoutPaymentStripeComponent } from './checkout-payment-stripe.component';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '@app/reducers';
import * as fromCart from '@app/cart/reducers';
import { CheckoutService } from '@app/core/services/checkout.service';
import { PagePopupComponent } from '@app/shared/components/page-popup/page-popup.component';
import { DataLayerService } from '@app/core/services/data-layer.service';
import { SentryService } from '@global/sentry/sentry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bx-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss']
})
export class CheckoutPaymentComponent implements OnInit, OnDestroy {
  @ViewChild('stripe', { static: false })
  stripeRef: CheckoutPaymentStripeComponent;
  order$: Observable<Order> = this.store.pipe(select(fromCart.getOrder));
  public paymentForm: FormGroup;
  billing: any;

  private order: Order;
  constructor(
    private loading: LoadingService,
    private fb: FormBuilder,
    public checkout: CheckoutService,
    public dialog: MatDialog,
    private store: Store<fromRoot.State>,
    private dataLayer: DataLayerService,
    private injector: Injector,
    private sentryService: SentryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.order$
      .pipe(take(1), untilComponentDestroyed(this))
      .subscribe((order: Order) => {
        if (!order.items || (order.items && !order.items.length)) {
          this.router.navigate(['/custom-fightwear', 'shorts-trunks']);
        }
        this.order = order;
        this.paymentForm = this.fb.group({
          complete: [null, Validators.requiredTrue],
          name: [null, Validators.required],
          addBilling: [true],
          saved_billing: [order.saved_billing ? order.saved_billing : null],
          paymentMethod: ['Card'],
          save_card: [true],
          card: [null]
        });
        this.dataLayer.checkoutStep(3, this.order.items, this.order);
      });
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  makePayment() {
    if (this.paymentForm.valid) {
      const data = this.paymentForm.value;
      this.stripeRef.getToken(data);
    } else {
      this.stripeRef.closeKeyboard();
      this.validateAllFormFields(this.paymentForm);
    }
  }

  completeOrder() {
    this.loading.show('Completing order...', '0px');
    this.checkout
      .completeOrder({})
      .pipe(untilComponentDestroyed(this))
      .subscribe(
        () => {},
        err => {
          this.loading.hide();
          this.handleError(err);
        }
      );
  }

  handleError(err) {
    this.sentryService.setExtra('orderid', this.order.orderid);
    this.sentryService.captureEvent(err.error ? err.error : err);
  }

  showTerms() {
    this.dialog.open(PagePopupComponent, {
      data: { slug: '541299da3fec7a6975dd3691' },
      autoFocus: false,
      maxWidth: '1200px'
    });
  }

  ngOnDestroy() {}
}
