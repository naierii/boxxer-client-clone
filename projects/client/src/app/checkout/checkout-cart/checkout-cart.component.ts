import { Component, HostBinding, OnInit } from '@angular/core';
import * as fromRoot from '@app/reducers';
import * as fromCart from '@app/cart/reducers';
import { LineItem } from '@global/models/line-item';
import { Order } from '@global/models/order';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'bx-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.scss']
})
export class CheckoutCartComponent implements OnInit {
  carts$: Observable<LineItem[]>;
  order$: Observable<Order>;
  constructor(private store: Store<fromRoot.State>) {
    this.carts$ = this.store.pipe(select(fromCart.getCarts));
    this.order$ = this.store.pipe(select(fromCart.getOrder));
  }

  ngOnInit() {}

  @HostBinding('class.checkout-box')
  isCheckout() {
    return true;
  }
}
