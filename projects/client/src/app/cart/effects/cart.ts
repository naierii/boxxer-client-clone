import { DataLayerService } from '@app/core/services/data-layer.service';
import { LoadingService } from '@app/core/modules/loading/loading.service';
import { Order } from '@global/models/order';
import {
  CartActionTypes,
  LoadOrder,
  AddReadyMade,
  AddCustom,
  RemoveFromCart,
  AddToCart,
  RemoveItem,
  UpdateItem,
  UpdateCart,
  CustomSuccess,
  UpdateItemAdmin,
  AdminOrderSuccess,
  UpdateItemSilent,
  Load
} from './../actions/cart';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap, tap, catchError, concatMap } from 'rxjs/operators';
import { CartResponse } from './../models';
import * as fromRoot from '@app/reducers';
import { OpenCart } from '@app/core/actions/state';
import { CookieService } from '@gorniv/ngx-universal';

export class EffectError implements Action {
  readonly type = '[Error] Update Error';
  constructor(public err: any) {}
}

@Injectable()
export class CartEffects {
  private endpoint = 'cart-item';
  private host: string = environment.host;

  get url() {
    return `${this.host}/${this.endpoint}`;
  }

  @Effect()
  loadCart$: Observable<Action> = this.actions$.pipe(
    ofType<Load>(CartActionTypes.Load),
    concatMap(() => {
      return this.http
        .get<any>(`${this.url}`)
        .pipe(map((order: Order) => new LoadOrder(order)));
    }),
    catchError((err, caught) => caught)
  );

  @Effect()
  addReadyMadeToCart$: Observable<Action> = this.actions$.pipe(
    ofType(CartActionTypes.AddReadyMade),
    map((action: AddReadyMade) => action.payload),
    mergeMap(data => {
      return this.http.post<CartResponse>(`${this.url}`, data).pipe(
        map((resp: CartResponse) => new AddToCart(resp)),
        tap((resp: AddToCart) => this.itemAdded(resp))
      );
    }),
    catchError((err, caught) => caught)
  );

  @Effect()
  addCustomToCart$: Observable<Action> = this.actions$.pipe(
    ofType(CartActionTypes.AddCustom),
    map((action: AddCustom) => action.payload),
    mergeMap(data => {
      return this.http.post<CartResponse>(`${this.url}`, data).pipe(
        map((resp: CartResponse) => new AddToCart(resp)),
        tap((resp: AddToCart) => this.itemAdded(resp))
      );
    }),
    catchError((err, caught) => caught)
  );

  @Effect()
  updateItemInCart$: Observable<Action> = this.actions$.pipe(
    ofType(CartActionTypes.UpdateItem),
    mergeMap((action: UpdateItem) => {
      return this.http
        .patch<CartResponse>(`${this.url}/${action.id}`, action.payload)
        .pipe(
          catchError(err => {
            return of(new EffectError(err));
          }),
          map((resp: CartResponse) => new UpdateCart(resp)),
          tap((resp: UpdateCart) => this.itemAdded(resp))
        );
    }),
    catchError((err, caught) => caught)
  );

  @Effect()
  updateItemInCartSilent$: Observable<Action> = this.actions$.pipe(
    ofType(CartActionTypes.UpdateItemSilent),
    mergeMap((action: UpdateItemSilent) => {
      return this.http
        .patch<CartResponse>(`${this.url}/${action.id}`, action.payload)
        .pipe(
          map((resp: CartResponse) => new UpdateCart(resp)),
          tap((resp: UpdateCart) => this.itemAddedSilent(resp))
        );
    }),
    catchError((err, caught) => caught)
  );

  @Effect()
  updateItemInAdmin$: Observable<Action> = this.actions$.pipe(
    ofType(CartActionTypes.UpdateItemAdmin),
    mergeMap((action: UpdateItemAdmin) => {
      return this.http
        .patch<CartResponse>(`${this.url}-admin/${action.id}`, action.payload)
        .pipe(
          map((resp: CartResponse) => new AdminOrderSuccess()),
          tap((resp: AdminOrderSuccess) => this.orderUpdateComplete())
        );
    }),
    catchError((err, caught) => caught)
  );

  @Effect()
  removeItemFromCart$: Observable<Action> = this.actions$.pipe(
    ofType(CartActionTypes.RemoveItem),
    map((action: RemoveItem) => action.id),
    mergeMap(id => {
      return this.http.delete<CartResponse>(`${this.url}/${id}`).pipe(
        map((resp: CartResponse) => new RemoveFromCart(resp)),
        tap((resp: RemoveFromCart) => this.itemRemoved(resp))
      );
    }),
    catchError((err, caught) => caught)
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private loading: LoadingService,
    private store: Store<fromRoot.State>,
    private cookieService: CookieService,
    private dataLayer: DataLayerService
  ) {}

  private itemAdded(resp: AddToCart | UpdateCart | any) {
    this.hideLoading();
    if (resp.payload.type && resp.payload.type === '[Error] Effect Error') {
      return;
    }
    this.dataLayer.addToCart('addToCart', 'Add to Cart', resp.payload.item);
    this.store.dispatch(new OpenCart(true));
    if (resp.payload.token) {
      this.setToken(resp.payload.token);
    }
    this.store.dispatch(new CustomSuccess());
  }

  private itemAddedSilent(resp: AddToCart | UpdateCart) {
    this.hideLoading();
    if (resp.payload.token) {
      this.setToken(resp.payload.token);
    }
  }

  private itemRemoved(resp: RemoveFromCart) {
    this.dataLayer.addToCart(
      'removeFromCart',
      'Add to Cart',
      resp.payload.item
    );
    this.hideLoading();
  }

  private orderUpdateComplete() {
    this.hideLoading();
  }

  private setToken(token: string) {
    this.cookieService.put('cart-token', token, {
      expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
    });
  }

  private hideLoading() {
    this.loading.hide();
  }
}
