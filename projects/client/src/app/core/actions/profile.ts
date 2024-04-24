import { Action } from '@ngrx/store';
import { Profile } from '@global/models/profile';

export enum ProfileActionTypes {
  Selected = '[Profile] Selected',
  AddProfile = '[Profile] Add Profile',
  AddProfileSuccess = '[Profile] Add Profile Success',
  UpdateProfile = '[Profile] Update Profile',
  UpdateProfileSuccess = '[Profile] Update Profile Success',
  RemoveProfile = '[Profile] Remove Profile',
  RemoveProfileSuccess = '[Profile]  Remove Profile Success',
  Load = '[Profile] Load',
  LoadSuccess = '[Profile] Load Success'
}

export class Selected implements Action {
  readonly type = ProfileActionTypes.Selected;
  constructor(public payload: string) {}
}

export class AddProfile implements Action {
  readonly type = ProfileActionTypes.AddProfile;
  constructor(public payload: Profile) {}
}

export class AddProfileSuccess implements Action {
  readonly type = ProfileActionTypes.AddProfileSuccess;
  constructor(public payload: Profile) {}
}

export class UpdateProfile implements Action {
  readonly type = ProfileActionTypes.UpdateProfile;
  constructor(public id: string, public payload: Profile) {}
}

export class UpdateProfileSuccess implements Action {
  readonly type = ProfileActionTypes.UpdateProfileSuccess;
  constructor(public payload: Profile) {}
}

export class RemoveProfile implements Action {
  readonly type = ProfileActionTypes.RemoveProfile;
  constructor(public payload: Profile) {}
}

export class RemoveProfileSuccess implements Action {
  readonly type = ProfileActionTypes.RemoveProfileSuccess;
  constructor(public payload: Profile) {}
}

export class Load implements Action {
  readonly type = ProfileActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = ProfileActionTypes.LoadSuccess;

  constructor(public payload: Profile[]) {}
}

export type ProfileActions =
  | Selected
  | AddProfile
  | AddProfileSuccess
  | UpdateProfile
  | UpdateProfileSuccess
  | RemoveProfile
  | RemoveProfileSuccess
  | Load
  | LoadSuccess;
