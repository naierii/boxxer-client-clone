import { Message } from '@global/models/message';
import { Action } from '@ngrx/store';
import ActionWithPayload from '@app/core/models/ActionWithPayload';
import { StateActionTypes } from './../actions/state';

export interface State {
  cartOpen: boolean;
  menuOpen: boolean;
  currency: string;
  rates: any;
  shipping: any[];
  messages: Message[];
}

const initialState: State = {
  cartOpen: false,
  menuOpen: false,
  currency: 'GBP',
  rates: null,
  shipping: [],
  messages: []
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case StateActionTypes.OPEN_CART:
      return {
        ...state,
        cartOpen: (action as ActionWithPayload<boolean>).payload,
        menuOpen: false
      };
    case StateActionTypes.OPEN_MENU:
      return {
        ...state,
        cartOpen: false,
        menuOpen: (action as ActionWithPayload<boolean>).payload
      };
    case StateActionTypes.SET_CURRENCY:
      return {
        ...state,
        currency: (action as ActionWithPayload<string>).payload
      };
    case StateActionTypes.SET_RATES:
      return {
        ...state,
        rates: (action as ActionWithPayload<any>).payload
      };
    case StateActionTypes.SET_SHIPPING:
      return {
        ...state,
        shipping: (action as ActionWithPayload<any[]>).payload
      };
    case StateActionTypes.ADD_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat(
          (action as ActionWithPayload<Message[]>).payload
        )
      };
    case StateActionTypes.REMOVE_MESSAGE:
      const index = state.messages.indexOf(
        (action as ActionWithPayload<Message>).payload
      );
      if (index > -1) {
        state.messages.splice(index, 1);
      }

      return {
        ...state,
        messages: state.messages
      };
    default:
      return state;
  }
}

export const getCartOpen = (state: State) => state.cartOpen;
export const getMenuOpen = (state: State) => state.menuOpen;
export const getCurrency = (state: State) => state.currency;
export const getRates = (state: State) => state.rates;
export const getShipping = (state: State) => state.shipping;
export const getMessages = (state: State) => state.messages;
