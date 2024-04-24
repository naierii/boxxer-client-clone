import { Message } from '@global/models/message';
import ActionWithPayload from './../models/ActionWithPayload';
import { Action } from '@ngrx/store';

export enum StateActionTypes {
  GET_SETTING = '[State] Get Setting',
  OPEN_CART = '[State] Open Cart',
  OPEN_MENU = '[State] Open Menu',
  SET_CURRENCY = '[State] Set Currency',
  SET_RATES = '[State] Set Rates',
  SET_SHIPPING = '[State] Set Shipping',
  ADD_MESSAGE = '[State] Add Message',
  REMOVE_MESSAGE = '[State] Remove Message'
}

export class GetSetting implements Action {
  readonly type = StateActionTypes.GET_SETTING;

  constructor() {}
}

export class OpenCart implements ActionWithPayload<boolean> {
  readonly type = StateActionTypes.OPEN_CART;
  payload: boolean;

  constructor(payload: boolean) {
    this.payload = payload;
  }
}

export class OpenMenu implements ActionWithPayload<boolean> {
  readonly type = StateActionTypes.OPEN_MENU;
  payload: boolean;

  constructor(payload: boolean) {
    this.payload = payload;
  }
}

export class SetCurrency implements ActionWithPayload<string> {
  readonly type = StateActionTypes.SET_CURRENCY;
  payload: string;

  constructor(payload: string) {
    this.payload = payload;
  }
}

export class SetRates implements ActionWithPayload<any> {
  readonly type = StateActionTypes.SET_RATES;
  payload: any;

  constructor(payload: any) {
    this.payload = payload;
  }
}

export class SetShipping implements ActionWithPayload<any[]> {
  readonly type = StateActionTypes.SET_SHIPPING;
  payload: any[];

  constructor(payload: any[]) {
    this.payload = payload;
  }
}

export class AddMessage implements ActionWithPayload<Message> {
  readonly type = StateActionTypes.ADD_MESSAGE;
  payload: Message;

  constructor(payload: Message) {
    this.payload = payload;
  }
}

export class RemoveMessage implements ActionWithPayload<Message> {
  readonly type = StateActionTypes.REMOVE_MESSAGE;
  payload: Message;

  constructor(payload: Message) {
    this.payload = payload;
  }
}

export type StateActions =
  | GetSetting
  | OpenCart
  | OpenMenu
  | SetCurrency
  | SetRates
  | SetShipping
  | AddMessage
  | RemoveMessage;
