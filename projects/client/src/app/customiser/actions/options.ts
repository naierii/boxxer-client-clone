import { Action } from '@ngrx/store';
import { CustomProduct } from '@global/models/custom-product';

export enum OptionsActionTypes {
  Load = '[Options] Load',
  LoadOptions = '[Options] Load Options'
}

export class Load implements Action {
  readonly type = OptionsActionTypes.Load;
  constructor() {}
}

export class LoadOptions implements Action {
  readonly type = OptionsActionTypes.LoadOptions;
  constructor(public payload: CustomProduct) {}
}

export type OptionsActions = Load | LoadOptions;
