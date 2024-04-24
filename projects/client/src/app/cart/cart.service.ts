import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import * as cart from '@app/cart/actions/cart';
import { CartCustom, CartReadyMade } from '@app/cart/models';
import { LoadingService } from '@app/core/modules/loading/loading.service';
import * as fromRoot from '@app/reducers';
import { Store } from '@ngrx/store';
import { Order } from '@global/models/order';
import * as decode from 'jwt-decode';
import { CookieService } from '@gorniv/ngx-universal';

@Injectable()
export class CartService {
  constructor(
    private loading: LoadingService,
    private cookieService: CookieService,
    private store: Store<fromRoot.State>
  ) {}

  get token() {
    const token = this.cookieService.get('cart-token');
    return token ? token : null;
  }

  get hasValidToken() {
    if (!this.token) {
      return false;
    }
    const payload = decode(this.token);
    if (this.payloadIsValid(payload)) {
      return true;
    }
    return false;
  }


  decodeToken(token: string): any {
    const payload = decode(token);

    if (this.payloadIsValid(payload)) {
      return of(payload);
    }
    return of({});
  }

  addCartReadyMade(data: CartReadyMade) {
    this.loading.show('Adding to cart..', '0px');
    this.store.dispatch(new cart.AddReadyMade(data));
  }

  addCartCustom(data: CartCustom) {
    this.loading.show('Adding to cart..', '0px', 'This may take a few seconds');
    this.store.dispatch(new cart.AddCustom(data));
  }

  updateCart(id: string, data: any, silent?: boolean) {
    if (silent) {
      this.store.dispatch(new cart.UpdateItemSilent(id, data));
    } else {
      this.loading.show(
        'Updating cart..',
        '0px',
        'This may take a few seconds'
      );
      this.store.dispatch(new cart.UpdateItem(id, data));
    }
  }

  updateOrderAdmin(id: string, data: any) {
    this.loading.show('Updating order..', '0px', 'This may take a few seconds');
    this.store.dispatch(new cart.UpdateItemAdmin(id, data));
  }

  removeItem(id: string) {
    this.loading.show('Removing item...', '0px');
    this.store.dispatch(new cart.RemoveItem(id));
  }

  removeToken() {
    this.cookieService.remove('cart-token');
    this.store.dispatch(new cart.Clear());
    this.loading.hide();
    return;
  }

  public updateOrder(order: Order) {
    this.store.dispatch(new cart.LoadOrder(order));
  }

  private payloadIsValid(payload) {
    return (
      payload && (!payload.exp || payload.exp * 1000 > new Date().getTime())
    );
  }
}
