import { CartReadyMade, CartResponse, CartCustom } from './../models/index';
import { Action } from '@ngrx/store';
import { Order } from '@global/models/order';

export enum CartActionTypes {
  AddReadyMade = '[Cart] Add Ready Made',
  AddCustom = '[Cart] Add Custom',
  CustomSuccess = '[Cart] Custom Success',
  AdminOrderSuccess = '[Cart] Admin Order Success',
  AddToCart = '[Cart] Add To Cart',
  UpdateItem = '[Cart] Update Item',
  UpdateItemSilent = '[Cart] Update Item Silent',
  UpdateItemAdmin = '[Cart] Update Item Admin',
  UpdateCart = '[Cart] Update Cart',
  RemoveItem = '[Cart] Remove Item',
  RemoveFromCart = '[Cart] Remove From Cart',
  Load = '[Cart] Load',
  Clear = '[Cart] Clear',
  LoadOrder = '[Cart] LoadOrder',
  Email = '[Cart] Email',
  CartError = '[Cart] Error'
}

export class AddReadyMade implements Action {
  readonly type = CartActionTypes.AddReadyMade;
  constructor(public payload: CartReadyMade) {}
}

export class AddCustom implements Action {
  readonly type = CartActionTypes.AddCustom;
  constructor(public payload: CartCustom) {}
}

export class CustomSuccess implements Action {
  readonly type = CartActionTypes.CustomSuccess;
}

export class AdminOrderSuccess implements Action {
  readonly type = CartActionTypes.AdminOrderSuccess;
}

export class AddToCart implements Action {
  readonly type = CartActionTypes.AddToCart;
  constructor(public payload: CartResponse) {}
}

export class UpdateItem implements Action {
  readonly type = CartActionTypes.UpdateItem;
  constructor(public id: string, public payload: any) {}
}

export class UpdateItemSilent implements Action {
  readonly type = CartActionTypes.UpdateItemSilent;
  constructor(public id: string, public payload: any) {}
}

export class UpdateItemAdmin implements Action {
  readonly type = CartActionTypes.UpdateItemAdmin;
  constructor(public id: string, public payload: any) {}
}

export class UpdateCart implements Action {
  readonly type = CartActionTypes.UpdateCart;
  constructor(public payload: CartResponse) {}
}

export class RemoveItem implements Action {
  readonly type = CartActionTypes.RemoveItem;
  constructor(public id: string) {}
}

export class RemoveFromCart implements Action {
  readonly type = CartActionTypes.RemoveFromCart;
  constructor(public payload: CartResponse) {}
}

export class Load implements Action {
  readonly type = CartActionTypes.Load;
  constructor() {}
}

export class Clear implements Action {
  readonly type = CartActionTypes.Clear;
}

export class LoadOrder implements Action {
  readonly type = CartActionTypes.LoadOrder;
  constructor(public payload: Order) {}
}

export class Email implements Action {
  readonly type = CartActionTypes.Email;
  constructor(public payload: string) {}
}

export class CartError implements Action {
  readonly type = CartActionTypes.CartError;
  constructor(public payload: any) {}
}

export type CartActions =
  | AddReadyMade
  | AddCustom
  | CustomSuccess
  | AdminOrderSuccess
  | AddToCart
  | UpdateItem
  | UpdateItemSilent
  | UpdateItemAdmin
  | UpdateCart
  | RemoveItem
  | RemoveFromCart
  | Load
  | Clear
  | LoadOrder
  | Email
  | CartError;
