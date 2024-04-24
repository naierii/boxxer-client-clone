import { Profile } from '@global/models/profile';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap, tap, catchError, concatMap } from 'rxjs/operators';
import {
  ProfileActionTypes,
  LoadSuccess,
  RemoveProfile,
  RemoveProfileSuccess,
  AddProfile,
  AddProfileSuccess,
  UpdateProfileSuccess,
  UpdateProfile
} from './../actions/profile';
import { environment } from '@env/environment';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileEffects {
  private endpoint = 'boxxer-profile';
  private host: string = environment.host;

  @Effect()
  loadProfiles$: Observable<Action> = this.actions$.pipe(
    ofType(ProfileActionTypes.Load),
    concatMap(() =>
      this.http
        .get(this.url)
        .pipe(map((resp: any) => new LoadSuccess(resp.data)))
    ),
    catchError((err, caught) => caught)
  );

  @Effect()
  addProfile$: Observable<Action> = this.actions$.pipe(
    ofType(ProfileActionTypes.AddProfile),
    map((action: AddProfile) => action.payload),
    mergeMap(profile =>
      this.http.post(`${this.url}`, profile).pipe(
        map(() => new AddProfileSuccess(profile)),
        tap((resp: AddProfileSuccess) => {
          this.router.navigate(['/account/profiles']);
        })
      )
    ),
    catchError((err, caught) => caught)
  );

  @Effect()
  updateProfile$: Observable<Action> = this.actions$.pipe(
    ofType(ProfileActionTypes.UpdateProfile),
    mergeMap((action: UpdateProfile) =>
      this.http.patch(`${this.url}/${action.id}`, action.payload).pipe(
        map((resp: Profile) => new UpdateProfileSuccess(resp)),
        tap((resp: UpdateProfileSuccess) => {
          this.router.navigate(['/account/profiles']);
        })
      )
    ),
    catchError((err, caught) => caught)
  );

  @Effect()
  removeProfile$: Observable<Action> = this.actions$.pipe(
    ofType(ProfileActionTypes.RemoveProfile),
    map((action: RemoveProfile) => action.payload),
    mergeMap(profile =>
      this.http
        .delete(`${this.url}/${profile._id}`)
        .pipe(map(() => new RemoveProfileSuccess(profile)))
    ),
    catchError((err, caught) => caught)
  );

  get url() {
    return `${this.host}/${this.endpoint}`;
  }

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router
  ) {}
}
