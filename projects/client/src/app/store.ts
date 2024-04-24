import { Order } from '@global/models/order';
import { LineItem } from '@global/models/line-item';

import {
  OPEN_CART,
  SET_CART,
  ADD_CART,
  UPDATE_CART,
  REMOVE_CART,
  SET_ORDER,
  OPEN_MENU,
  REMOVE_ALL_CARTS,
  SET_CURRENCY,
  SET_RATES,
  SET_SHIPPING,
  SET_ORDER_EMAIL
} from './actions';

export interface IAppState {
  order: Order;
  carts: LineItem[];
  cartQty: number;
  cartOpen: boolean;
  menuOpen: boolean;
  currency: string;
  rates: any;
  shipping: any[];
  order_email: string;
}

export const INITIAL_STATE: IAppState = {
  order: null,
  carts: [],
  cartQty: 0,
  cartOpen: false,
  menuOpen: false,
  currency: 'GBP',
  rates: null,
  shipping: [],
  order_email: null
};

function updateQty(state: IAppState) {
  let cartQty = 0;
  cartQty = state.carts.reduce((sum, option) => {
    return (sum += option.qty), sum;
  }, 0);
  return { ...state, cartQty };
}

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case SET_ORDER_EMAIL:
      return Object.assign({}, state, {
        order_email: action.order_email
      });
    case SET_CURRENCY:
      return Object.assign({}, state, {
        currency: action.code
      });
    case SET_RATES:
      return Object.assign({}, state, {
        rates: action.rates
      });
    case SET_SHIPPING:
      return Object.assign({}, state, {
        shipping: action.shipping
      });
    case OPEN_CART:
      return Object.assign({}, state, {
        cartOpen: action.open,
        menuOpen: false
      });
    case OPEN_MENU:
      return Object.assign({}, state, {
        cartOpen: false,
        menuOpen: action.open
      });
    case SET_ORDER:
      return Object.assign({}, state, {
        order: action.order
      });

    case SET_CART:
      state = Object.assign({}, state, {
        carts: action.carts
      });
      return updateQty(state);

    case ADD_CART:
      state = Object.assign({}, state, {
        carts: state.carts.concat(Object.assign({}, action.cart)),
        menuOpen: false,
        cartOpen: true
      });
      return updateQty(state);
    case UPDATE_CART:
      state = Object.assign({}, state, {
        carts: state.carts.map(c => {
          if (c._id === action.cart._id) {
            c = action.cart;
          }
          return c;
        }),
        cartOpen: true,
        menuOpen: false
      });
      return updateQty(state);
    case REMOVE_CART:
      state = Object.assign({}, state, {
        carts: state.carts.filter(t => t._id !== action._id)
      });
      return updateQty(state);
    case REMOVE_ALL_CARTS:
      return Object.assign({}, state, {
        carts: [],
        cartQty: 0
      });
  }
  return state;
}
