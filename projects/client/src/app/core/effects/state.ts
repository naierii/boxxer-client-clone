import { HttpClient } from '@angular/common/http';
import {
  map,
  catchError,
  concatMap,
  startWith,
  switchMap
} from 'rxjs/operators';
import { environment } from '@env/environment';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import {
  StateActionTypes,
  GetSetting,
  SetRates,
  SetShipping
} from '../actions/state';

@Injectable()
export class StateEffects {
  private host: string = environment.host;

  @Effect()
  getSettings$: Observable<Action> = this.actions$.pipe(
    ofType<GetSetting>(StateActionTypes.GET_SETTING),
    concatMap(() =>
      this.http.get(`${this.host}/setting`).pipe(
        map((resp: any) => resp),
        switchMap((resp: any) => [
          new SetRates(resp.rates),
          new SetShipping(resp.shipping)
        ]),
        catchError((err, caught) => caught)
      )
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
