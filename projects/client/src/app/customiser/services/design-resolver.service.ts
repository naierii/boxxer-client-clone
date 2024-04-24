import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve
} from '@angular/router';
import { take } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import * as fromCustomiser from '@app/customiser/reducers';

@Injectable({
  providedIn: 'root'
})
export class DesignResolverService implements Resolve<any> {
  constructor(private store: Store<fromCustomiser.State>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      select(fromCustomiser.getDesign),
      take(1)
    );
  }
}
