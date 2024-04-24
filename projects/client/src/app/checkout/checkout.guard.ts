import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '@app/cart/cart.service';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '@app/reducers';
import * as fromCart from '@app/cart/reducers';
import { map, take, filter } from 'rxjs/operators';
import { Load } from '@app/cart/actions/cart';

@Injectable()
export class CheckoutGuard implements CanActivate {
  constructor(
    private cart: CartService,
    private router: Router,
    private store: Store<fromRoot.State>
  ) {}

  waitForOrderToLoad(): Observable<boolean> {
    this.store.dispatch(new Load());
    return this.store.pipe(
      select(fromCart.getOrder),
      map(order => order && order.items && order.items.length > 0),
      filter(loaded => loaded),
      take(1)
    );
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    
    if (!this.cart.token) {
      this.router.navigate(['/custom-fightwear', 'shorts-trunks']);
      return false;
    }

    return this.waitForOrderToLoad();
  }
}
