import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '@app/cart/cart.service';
import { ApiService } from '@app/core/services/api.service';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { Observable } from 'rxjs';
import { LoadingService } from '@app/core/modules/loading/loading.service';

@Component({
  selector: 'bx-checkout-discount',
  templateUrl: './checkout-discount.component.html',
  styleUrls: ['./checkout-discount.component.scss']
})
export class CheckoutDiscountComponent implements OnInit, OnDestroy {
  public discountForm: FormGroup;
  observableBtn: Observable<any>;
  showForm = false;
  errorMessge: string;
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public cart: CartService,
    private loading: LoadingService
  ) {
    this.discountForm = this.fb.group({
      code: [null, [Validators.required]]
    });
  }

  @HostBinding('class.checkout-box')
  isCheckout() {
    return true;
  }

  ngOnInit() {}

  checkCode() {
    this.loading.show('Checking discount code');
    const values = this.discountForm.value;
    this.api
      .create('discount/check', values)
      .pipe(untilComponentDestroyed(this))
      .subscribe(
        (resp: any) => {
          if (resp) {
            this.loading.show('Updating order');
            this.cart.updateOrder(resp);
            this.loading.hide();
          }
          this.discountForm.reset();
          return;
        },
        err => {
          if (err && err.error) {
            this.errorMessge = err.error.message;
            return;
          }
        }
      );
  }

  ngOnDestroy() {}
}
