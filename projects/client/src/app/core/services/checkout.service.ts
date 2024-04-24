import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '@app/core/modules/loading/loading.service';
import { CartService } from '@app/cart/cart.service';
import { OpenCart } from '@app/core/actions/state';
import * as fromRoot from '@app/reducers';
import * as fromCart from '@app/cart/reducers';
import { environment } from '@env/environment';
import { Order } from '@global/models/order';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import * as cart from '@app/cart/actions/cart';
import { DataLayerService } from './data-layer.service';

@Injectable()
export class CheckoutService {
  order$: Observable<Order>;
  private endpoint: string;
  private host: string = environment.host;
  didPaypalScriptLoad = false;
  private order: Order;
  constructor(
    private loading: LoadingService,
    private cartService: CartService,
    private http: HttpClient,
    private router: Router,
    private store: Store<fromRoot.State>,
    private dataLayer: DataLayerService
  ) {
    this.endpoint = 'cart';
    this.order$ = this.store.pipe(
      select(fromCart.getOrder)
    );
  }

  get url() {
    return `${this.host}/${this.endpoint}`;
  }

  clubKitMinCheck(order: Order) {

    const clubKitItems = order.items.filter(
      (i) => i.product_variation && i.product_variation.product_display && i.product_variation.product_display.club_kit
    );

    if (!clubKitItems.length) {
      return true;
    }

    const clubKitTotalQty = clubKitItems.reduce((sum, current) => {
      return sum + current.qty;
    }, 0);

    if (clubKitTotalQty < 10) {
      return false;
    }

    return true;
  }

  updateCart(data: any, loading = true) {
    if (loading) {
      this.loading.show('Please wait...', '0px');
    }
    return this.order$.pipe(
      take(1),
      switchMap((order: Order) => {
        return this.http.patch<any>(`${this.url}/${order.orderid}`, data);
      }),
      tap((order: Order) => {
        this.loading.hide();
        this.store.dispatch(new cart.LoadOrder(order));
      })
    );
  }

  makePayment(data: any) {
    return this.http.post<any>(`${this.url}/payment`, data).pipe(
      take(1),
      tap((order: Order) => {
        this.paymentComplete(order);
      })
    );
  }

  completeOrder(data: any) {
    return this.http.post(`${this.host}/${this.endpoint}/complete`, data).pipe(
      take(1),
      tap((order: Order) => {
        this.paymentComplete(order);
      })
    );
  }

  paymentComplete(order: Order) {
    if (!order.owner) {
      this.store.dispatch(new cart.Email(order.email));
    }

    if (order && order.items) {
      this.dataLayer.purchase(order, order.items);
    }

    this.router.navigate(['/checkout/success']);
    this.cartService.removeToken();
    this.store.dispatch(new OpenCart(false));
    this.loading.hide();
  }
}
