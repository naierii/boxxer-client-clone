import {
  LOAD_DESIGN,
  LoadDesign,
  DESIGN_ERROR,
  DesignError
} from './../actions/design';
import { AuthService } from '@app/core/services/auth.service';
import { CustomiserOptionsService } from './customiser-options.service';
import { DesignService } from './design.service';
import { Observable, of, race } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve
} from '@angular/router';
import { ApiService } from '@app/core/services/api.service';
import { switchMap, catchError, take, map, concatMap } from 'rxjs/operators';
import { LoadingService } from '@app/core/modules/loading/loading.service';
import { Store } from '@ngrx/store';
import * as fromCustomiser from '../reducers';
import * as options from '../actions/options';
import * as design from '../actions/design';
import { CustomProduct } from '@global/models/custom-product';
import { Actions, ofType } from '@ngrx/effects';

@Injectable()
export class ResolverService implements Resolve<any> {
  private roles = ['admin', 'staff', 'accounts'];
  constructor(
    private auth: AuthService,
    private api: ApiService,
    private optionsService: CustomiserOptionsService,
    private designService: DesignService,
    private loading: LoadingService,
    private store: Store<fromCustomiser.State>,
    private action$: Actions
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    this.loading.show('Starting customiser...', '0px');
    const id = route.params.id;
    const isAdmin = this.auth.checkRoles(this.roles);
    if (route.queryParams.admin && route.queryParams.order && isAdmin) {
      this.designService.adminToken = route.queryParams.admin;
      this.designService.orderItemId = route.queryParams.item;
      this.designService.orderId = route.queryParams.order;
    } else if (route.queryParams.chat_help && isAdmin) {
      this.designService.chatToken = route.queryParams.chat_help;
    } else {
      this.designService.adminToken = null;
      this.designService.orderItemId = null;
      this.designService.orderId = null;
      this.designService.chatToken = null;
    }

    return this.api.get('custom-product-customiser', id, null, false).pipe(
      switchMap((product: CustomProduct) => {
        this.optionsService.product = product;
        this.store.dispatch(new options.LoadOptions(product));
        const decodeToken = this.designService.decodeToken();
        if (decodeToken) {
          this.store.dispatch(new design.FetchDesign(decodeToken._id));
          const responseOK = this.action$.pipe(
            ofType<LoadDesign>(LOAD_DESIGN),
            map((resp: any) => resp.payload),
            take(1)
          );
          const responseError = this.action$.pipe(
            ofType<DesignError>(DESIGN_ERROR),
            concatMap(() => {
              this.store.dispatch(
                new design.ResetDesign(this.optionsService.getLogo())
              );
              return of({});
            }),
            take(1)
          );
          return race(responseOK, responseError);
        } else {
          this.store.dispatch(
            new design.ResetDesign(this.optionsService.getLogo())
          );
          return of({});
        }
      }),
      catchError(err => {
        return of({});
      })
    );
  }
}
