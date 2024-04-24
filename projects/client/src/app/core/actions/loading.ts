import { Action } from '@ngrx/store';

export enum LoadingActionTypes {
  Show = '[Loading] Show',
  Hide = '[Loading] Hide'
}

export class Show implements Action {
  readonly type = LoadingActionTypes.Show;
  constructor(
    public message?: string,
    public subMessage?: string,
    public offset?: string
  ) {}
}

export class Hide implements Action {
  readonly type = LoadingActionTypes.Hide;
}

export type LoadingActions = Show | Hide;
