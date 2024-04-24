import {
  Component,
  OnDestroy,
  OnInit,
  ViewChildren,
  QueryList,
  ElementRef
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';
import * as fromRoot from '@app/reducers';
import * as fromCart from '@app/cart/reducers';
import { Order } from '@global/models/order';
import { select, Store } from '@ngrx/store';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { CheckoutService } from '@app/core/services/checkout.service';
import { DataLayerService } from '@app/core/services/data-layer.service';

@Component({
  selector: 'bx-checkout-shipping',
  templateUrl: './checkout-shipping.component.html',
  styleUrls: ['./checkout-shipping.component.scss']
})
export class CheckoutShippingComponent implements OnInit, OnDestroy {
  order$: Observable<Order>;
  @ViewChildren('form') rows: QueryList<ElementRef>;
  hasGift = false;
  nonGift = true;
  public shippingForm: FormGroup;
  private order: Order;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public checkout: CheckoutService,
    public auth: AuthService,
    private store: Store<fromRoot.State>,
    private dataLayer: DataLayerService
  ) {
    this.order$ = this.store.pipe(select(fromCart.getOrder));
  }

  ngOnInit() {
    this.order$
      .pipe(take(1), untilComponentDestroyed(this))
      .subscribe((order: Order) => {
        if (order && order.items && order.items.length) {
          this.order = order;
          this.hasGift =
            this.order.items &&
            this.order.items.filter(i => i.gift_voucher_product).length
              ? true
              : false;
          this.nonGift =
            this.order.items &&
            this.order.items.filter(i => !i.gift_voucher_product).length
              ? true
              : false;
          this.formSetup();
        } else {
          this.router.navigate(['/custom-fightwear', 'shorts-trunks']);
        }
      });
  }

  formSetup() {
    this.shippingForm = this.fb.group({
      comments: [
        this.order && this.order.comments ? this.order.comments : null
      ],
      status: 'Checkout',
      shippingmethod: [
        this.order && this.order.shippingmethod
          ? this.order.shippingmethod
          : null,
        Validators.required
      ],
      saved_shipping: [],
      newsletter: [false],
      email: [
        this.order && this.order.email ? this.order.email : null,
        [Validators.required, Validators.email]
      ]
    });
    this.dataLayer.checkoutStep(2, this.order.items, this.order);
  }

  fixEmail() {
    const email = this.shippingForm.get('email').value;
    if (email) {
      this.shippingForm.get('email').setValue(email.replace(/\s/g, ''));
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    this.fixEmail();
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  validatePayPal() {
    this.fixEmail();
    this.shippingForm.get('email').markAsTouched({ onlySelf: true });
    setTimeout(() => {
      const firstInvalid = this.rows.first.nativeElement.querySelector(
        '.mat-form-field-invalid .mat-input-element, .mat-radio-group.ng-invalid .mat-radio-input'
      );

      if (firstInvalid) {
        firstInvalid.focus();
      }
    });
  }

  saveShipping() {
    if (this.shippingForm.valid) {
      const data = this.shippingForm.value;
      if (data.saved_shipping) {
        data.shipping = data.saved_shipping;
      }
      this.checkout
        .updateCart(data)
        .pipe(untilComponentDestroyed(this))
        .subscribe(() => this.router.navigate(['checkout', 'payment']));
    } else {
      this.validateAllFormFields(this.shippingForm);
      setTimeout(() => {
        const firstInvalid = this.rows.first.nativeElement.querySelector(
          '.mat-form-field-invalid .mat-input-element, .mat-radio-group.ng-invalid .mat-radio-input'
        );
        if (firstInvalid) {
          firstInvalid.focus();
        }
      });
    }
  }

  ngOnDestroy() {}
}
