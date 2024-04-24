import { Action } from '@ngrx/store';

export default interface ActionWithPayload<T> extends Action {
  payload: T;
  // tslint:disable-next-line:semicolon
};
