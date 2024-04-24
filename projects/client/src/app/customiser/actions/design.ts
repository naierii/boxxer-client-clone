import { CustomDesign } from '@global/models/custom-design';
import { Action } from '@ngrx/store';
import { createActionType } from '@app/util';

export const FETCH_DESIGN = createActionType('FETCH_DESIGN');
export const LOAD_DESIGN = createActionType('LOAD_DESIGN');
export const CREATE_DESIGN = createActionType('CREATE_DESIGN');
export const UPDATE_DESIGN = createActionType('UPDATE_DESIGN');
export const UPDATE_OBJECT = createActionType('UPDATE_OBJECT');
export const SAVE_DESIGN_TO_ACCOUNT = createActionType(
  'SAVE_DESIGN_TO_ACCOUNT'
);
export const CLEAR_DESIGN = createActionType('CLEAR_DESIGN');
export const RESET_DESIGN = createActionType('RESET_DESIGN');
export const DESIGN_ERROR = createActionType('DESIGN_ERROR');
export const RECREATE_DESIGN = createActionType('RECREATE_DESIGN');
export const DESIGN_COMPLETE = createActionType('DESIGN_COMPLETE');

export class DesignError implements Action {
  readonly type = DESIGN_ERROR;
  constructor(public err: any) {}
}

export class DesignComplete implements Action {
  readonly type = DESIGN_COMPLETE;
  constructor(public complete: boolean) {}
}

export class ClearDesign implements Action {
  readonly type = CLEAR_DESIGN;
  constructor(public position: any) {}
}

export class ResetDesign implements Action {
  readonly type = RESET_DESIGN;
  constructor(public position: any) {}
}

export class FetchDesign implements Action {
  readonly type = FETCH_DESIGN;
  constructor(public id: string) {}
}

export class LoadDesign implements Action {
  readonly type = LOAD_DESIGN;
  constructor(public payload: CustomDesign) {}
}

export class CreateDesign implements Action {
  readonly type = CREATE_DESIGN;
  constructor(public payload: any) {}
}

export class RecreateDesign implements Action {
  readonly type = RECREATE_DESIGN;
  constructor() {}
}

export class UpdateDesign implements Action {
  readonly type = UPDATE_DESIGN;
  constructor(public id: string, public payload: any, public query?: any) {}
}

export class UpdateObject implements Action {
  readonly type = UPDATE_OBJECT;
  constructor(
    public payload: any,
    public selector: string,
    public id?: string,
    public admin?: boolean
  ) {}
}

export class SaveDesignToAccount implements Action {
  readonly type = SAVE_DESIGN_TO_ACCOUNT;
  constructor(public id: string, public payload: any, public query?: any) {}
}

export type DesignActions =
  | DesignComplete
  | RecreateDesign
  | ClearDesign
  | ResetDesign
  | FetchDesign
  | LoadDesign
  | CreateDesign
  | UpdateDesign
  | UpdateObject
  | SaveDesignToAccount;
