import { Order } from '@global/models/order';
import {
  Component,
  HostBinding,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Shipping } from '@global/models/shipping';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '@app/reducers';
import { CheckoutService } from '@app/core/services/checkout.service';

@Component({
  selector: 'bx-checkout-shipping-options',
  templateUrl: './checkout-shipping-options.component.html',
  styleUrls: ['./checkout-shipping-options.component.scss']
})
export class CheckoutShippingOptionsComponent implements OnInit, OnDestroy {
  shipping$: Observable<Shipping[]>;
  @Input()
  parentForm: FormGroup;
  @Input()
  order: Order;
  constructor(
    private checkout: CheckoutService,
    private stateStore: Store<fromRoot.State>
  ) {
    this.shipping$ = this.stateStore.pipe(select(fromRoot.getShipping));
  }

  ngOnInit() {
    this.parentForm.controls.shippingmethod.valueChanges
      .pipe(
        switchMap(shippingmethod => {
          return this.checkout.updateCart({ shippingmethod });
        }),
        untilComponentDestroyed(this)
      )
      .subscribe();
    if (this.hasExpress()) {
      this.shipping$ = this.shipping$.pipe(
        map(shipping =>
          shipping.filter(s => s.type === 'International Courier')
        )
      );
    }
  }

  hasExpress() {
    const customItems = this.order.items.filter(i => i.custom_design);
    const expressItemsNew = customItems.filter(
      i =>
        i.custom_design.production.production_type &&
        i.custom_design.production.production_type.express_shipping
    );

    if (expressItemsNew && expressItemsNew.length > 0) {
      return true;
    }

    const expressItems = customItems.filter(i => i.custom_design.urgent);
    return expressItems.length > 0;
  }

  @HostBinding('class.checkout-box')
  isCheckout() {
    return true;
  }

  ngOnDestroy() {}
}
