import { DesignService } from '@app/customiser/services/design.service';
import { Router } from '@angular/router';
import {
  LoadDesign,
  FetchDesign,
  UpdateDesign,
  CreateDesign,
  UpdateObject,
  SaveDesignToAccount,
  FETCH_DESIGN,
  CREATE_DESIGN,
  UPDATE_DESIGN,
  UPDATE_OBJECT,
  SAVE_DESIGN_TO_ACCOUNT,
  ClearDesign,
  CLEAR_DESIGN,
  DesignError,
  RecreateDesign,
  RECREATE_DESIGN,
  LOAD_DESIGN,
  DesignComplete
} from './../actions/design';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { Observable, combineLatest, of } from 'rxjs';
import {
  map,
  tap,
  concatMap,
  debounceTime,
  withLatestFrom,
  catchError,
  switchMap,
  take
} from 'rxjs/operators';
import { CustomDesign } from '@global/models/custom-design';
import { CustomiserOptionsService } from '@app/customiser/services/customiser-options.service';
import { LoadingService } from '@app/core/modules/loading/loading.service';
import * as fromCustomiser from './../reducers';
import { SvgService } from '@app/customiser/services/svg.service';
import { ApiService } from '@app/core/services/api.service';
import { CookieService } from '@gorniv/ngx-universal';

@Injectable()
export class DesignEffects {
  @Effect({ dispatch: false })
  clearDesign$: Observable<Action> = this.actions$.pipe(
    ofType<ClearDesign>(CLEAR_DESIGN),
    withLatestFrom(this.store.pipe(select(fromCustomiser.getSettings))),
    tap((resp: any) => {
      const settings = resp[1];
      settings.forEach(setting => {
        this.svgService.addColor(null, setting.panel, true);
      });
      this.cookieService.remove('custom-dragged');
    }),
    catchError((err, caught) => caught)
  );

  @Effect()
  loadDesign$: Observable<Action> = this.actions$.pipe(
    ofType<FetchDesign>(FETCH_DESIGN),
    map((action: FetchDesign) => action.id),
    concatMap((id: string) => this.api.get('custom-design-customiser', id)),
    map((design: CustomDesign) => new LoadDesign(design)),
    catchError((err, caught) => {
      this.notFound(err);
      this.store.dispatch(new DesignError(err));
      return caught;
    })
  );

  @Effect()
  designLoaded$: Observable<Action> = this.actions$.pipe(
    ofType<LoadDesign>(LOAD_DESIGN),
    concatMap(() => this.setComplete()),
    map((complete: boolean) => new DesignComplete(complete)),
    catchError((err, caught) => {
      this.store.dispatch(new DesignError(err));
      return caught;
    })
  );

  @Effect()
  createDesign$: Observable<Action> = this.actions$.pipe(
    ofType<CreateDesign>(CREATE_DESIGN),
    withLatestFrom(this.store.pipe(select(fromCustomiser.getProduct))),
    map(([action, product]) => {
      action.payload.product = product._id;
      return action;
    }),
    concatMap((action: CreateDesign) =>
      this.api.create('custom-design-customiser', action.payload, false)
    ),
    map((design: CustomDesign) => new LoadDesign(design)),
    tap((design: LoadDesign) => {
      this.setToken(design.payload);
      this.backToMenu();
    }),
    catchError((err, caught) => caught)
  );

  @Effect()
  recreateDesign$: Observable<Action> = this.actions$.pipe(
    ofType<RecreateDesign>(RECREATE_DESIGN),
    concatMap(() => {
      return this.store.pipe(take(1), select(fromCustomiser.getDesign));
    }),
    concatMap((design: CustomDesign) => {
      delete design._id;
      return this.api.create('custom-design-customiser', design, false);
    }),
    map((design: CustomDesign) => new LoadDesign(design)),
    tap((design: LoadDesign) => {
      this.setToken(design.payload);
      this.backToMenu();
    }),
    catchError((err, caught) => caught)
  );

  @Effect()
  updateDesign$: Observable<Action> = this.actions$.pipe(
    ofType<UpdateDesign>(UPDATE_DESIGN),
    concatMap((action: UpdateDesign) =>
      this.api.update(
        'custom-design-customiser',
        action.id,
        action.payload,
        action.query,
        false
      )
    ),
    map((design: CustomDesign) => new LoadDesign(design)),
    tap(() => this.backToMenu()),
    catchError((err, caught) => {
      this.notFound(err);
      this.store.dispatch(new DesignError(err));
      return caught;
    })
  );

  @Effect()
  saveDesignToAccount$: Observable<Action> = this.actions$.pipe(
    ofType<SaveDesignToAccount>(SAVE_DESIGN_TO_ACCOUNT),
    concatMap((action: SaveDesignToAccount) =>
      this.api.update(
        'custom-design-customiser',
        action.id,
        action.payload,
        action.query,
        false
      )
    ),
    map((design: CustomDesign) => new LoadDesign(design)),
    tap(() => this.goToAccount()),
    catchError((err, caught) => caught)
  );

  @Effect({ dispatch: false })
  updateObject$: Observable<Action> = this.actions$.pipe(
    debounceTime(1000),
    ofType<UpdateObject>(UPDATE_OBJECT),
    concatMap((action: UpdateObject) =>
      this.api.update(
        'custom-design-customiser',
        null,
        {
          [`${action.selector}.$`]: action.payload,
          admin: action.admin
        },
        {
          [`${action.selector}._id`]: action.payload._id,
          _id: action.id
        },
        false
      )
    )
  );

  constructor(
    private cookieService: CookieService,
    private actions$: Actions,
    private api: ApiService,
    private designService: DesignService,
    private optionsService: CustomiserOptionsService,
    private router: Router,
    private loading: LoadingService,
    private store: Store<fromCustomiser.State>,
    private svgService: SvgService
  ) {}

  private setComplete() {
    return combineLatest([
      this.store.pipe(select(fromCustomiser.getDesign)),
      this.store.pipe(select(fromCustomiser.getProduct)),
      this.store.pipe(select(fromCustomiser.getStyles)),
      this.store.pipe(select(fromCustomiser.getPanels))
    ]).pipe(
      take(1),
      switchMap(result => {
        let isComplete = true;
        const design = result[0];
        const product = result[1];
        const styles = result[2];
        const panels = result[3];
        if (
          (product && product.sizes && !design.sizing) ||
          (product && product.sizes && design.sizing && !design.sizing.size) ||
          !design.production
        ) {
          isComplete = false;
        }
        if (styles && isComplete) {
          styles.forEach(style => {
            const hasStyle = design[style.type.toLowerCase()];
            if (!hasStyle) {
              isComplete = false;
            }
          });
        }
        if (isComplete) {
          panels.forEach(panel => {
            const hasPanel = design.panels.find(
              (p: any) => p.panel === panel.panel
            );

            if (
              !hasPanel &&
              !panel.area_size.optional &&
              !panel.default_material
            ) {
              isComplete = false;
            }
          });
        }

        return of(isComplete);
      })
    );
  }

  private backToMenu() {
    this.router.navigate([this.optionsService.menuUrl], {
      skipLocationChange: true
    });
    this.designService.selectedObject = null;
    this.hideLoading();
  }

  private goToAccount() {
    this.router.navigate(['/account/designs']);
    this.designService.deleteToken();
    this.hideLoading();
  }

  private hideLoading() {
    this.loading.hide();
  }

  private setToken(design: CustomDesign) {
    this.cookieService.put(this.designService.cookieId, design.token, {
      expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
    });
  }

  private notFound(err) {
    const product = this.designService.product;
    if (
      product &&
      product._id &&
      err.code === 404 &&
      err.data &&
      err.data.reason &&
      err.data.reason === 'design_missing'
    ) {
      this.cookieService.remove(`custom-design-${product._id}`);
      this.cookieService.remove(`custom-design-edit-${product._id}`);
      this.cookieService.remove(`custom-design-order-${product._id}`);
      this.designService.clearDesign();
    }
  }
}
