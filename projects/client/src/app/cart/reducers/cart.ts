import { CartActions, CartActionTypes } from './../actions/cart';
import { Order } from '@global/models/order';
import { LineItem } from '@global/models/line-item';

export interface State {
  order: Order;
  carts: LineItem[];
  cartQty: number;
  order_email: string;
}

const initialState: State = {
  order: null,
  carts: [],
  cartQty: 0,
  order_email: null
};

function updateQty(state: State) {
  let cartQty = 0;
  cartQty = state.carts.reduce((sum, option) => {
    return (sum += option.qty), sum;
  }, 0);
  return { ...state, cartQty };
}

export function reducer(state = initialState, action: CartActions): State {
  switch (action.type) {
    case CartActionTypes.AddCustom:
    case CartActionTypes.AddReadyMade:
    case CartActionTypes.Load:
      return {
        ...state
      };
    case CartActionTypes.LoadOrder:
      state = {
        ...state,
        order: action.payload,
        carts: action.payload.items || []
      };
      return updateQty(state);
    case CartActionTypes.Email:
      return {
        ...state,
        order_email: action.payload
      };
    case CartActionTypes.AddToCart:
      state = {
        ...state,
        carts: [...state.carts, action.payload.item],
        order: action.payload.order
      };
      return updateQty(state);
    case CartActionTypes.UpdateCart:
      state = {
        ...state,
        carts: action.payload.item
          ? state.carts.map(c => {
              if (c._id === action.payload.item._id) {
                c = action.payload.item;
              }
              return c;
            })
          : state.carts,
        order: action.payload.order ? action.payload.order : state.order
      };
      return updateQty(state);
    case CartActionTypes.RemoveFromCart:
      state = {
        ...state,
        carts: action.payload.item
          ? state.carts.filter(t => t._id !== action.payload.item._id)
          : state.carts,
        order: action.payload.order ? action.payload.order : state.order
      };
      return updateQty(state);
    case CartActionTypes.Clear:
      return {
        ...state,
        carts: [],
        order: null,
        cartQty: 0
      };
    default: {
      return state;
    }
  }
}

export const getCartQty = (state: State) => state.cartQty;
export const getCarts = (state: State) => state.carts;
export const getOrder = (state: State) => state.order;
export const getOrderEmail = (state: State) => state.order_email;
