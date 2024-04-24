import * as fromCart from './cart';
import * as fromRoot from '@app/reducers';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

export interface CartState {
  cart: fromCart.State;
}

export interface State extends fromRoot.State {
  cart: CartState;
}

export const reducers: ActionReducerMap<CartState> = {
  cart: fromCart.reducer
};

export const getCartState = createFeatureSelector<CartState>('cart');
export const getCartEntitiesState = createSelector(
  getCartState,
  state => state.cart
);

export const getCartQty = createSelector(
  getCartEntitiesState,
  fromCart.getCartQty
);
export const getCarts = createSelector(getCartEntitiesState, fromCart.getCarts);
export const getOrder = createSelector(getCartEntitiesState, fromCart.getOrder);
export const getOrderEmail = createSelector(
  getCartEntitiesState,
  fromCart.getOrderEmail
);
