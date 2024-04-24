import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import * as fromRoot from '@app/reducers';
import * as fromCart from '@app/cart/reducers';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { take } from 'rxjs/operators';
import { OpenCart } from '@app/core/actions/state';
import { Load } from '@app/cart/actions/cart';

@Component({
  selector: 'bx-cart-button, [bx-cart-button]',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss']
})
export class CartButtonComponent implements OnInit, OnDestroy {
  cartOpen$: Observable<boolean>;
  cartQty$: Observable<number>;
  @HostListener('click') onClick() {
    this.toggleCart();
  }
  constructor(private store: Store<fromRoot.State>) {
    this.cartQty$ = store.pipe(select(fromCart.getCartQty));
    this.cartOpen$ = store.pipe(select(fromRoot.getCartOpen));
  }

  ngOnInit() {
    this.store.dispatch(new Load());
  }

  toggleCart() {
    this.cartOpen$
      .pipe(untilComponentDestroyed(this), take(1))
      .subscribe((open: boolean) => {
        this.store.dispatch(new OpenCart(!open));
      });
  }

  ngOnDestroy() {}
}
