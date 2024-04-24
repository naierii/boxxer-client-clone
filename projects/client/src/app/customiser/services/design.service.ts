import { Injectable } from '@angular/core';
import { LoadingService } from '@app/core/modules/loading/loading.service';
import {
  CustomDesign,
  CustomDesignFlag,
  CustomDesignImage,
  CustomDesignLogo,
  CustomName
} from '@global/models/custom-design';
import { CustomProductStyle } from '@global/models/custom-product-style';
import * as decode from 'jwt-decode';
import { Observable, Subject, of } from 'rxjs';

import { CustomiserOptionsService } from './customiser-options.service';
import { SvgService } from './svg.service';
import { CustomProductSetting } from '@global/models/custom-product-setting';
import * as fromCustomiser from './../reducers';
import { Store, select } from '@ngrx/store';
import * as designActions from '../actions/design';
import { CustomProduct } from '@global/models/custom-product';
import { CookieService } from '@gorniv/ngx-universal';

interface SelectedObject {
  type: string;
  _id: string;
  object: CustomDesignFlag | CustomDesignLogo | CustomDesignImage | CustomName;
}

@Injectable()
export class DesignService {
  adminToken: string;
  chatToken: string;
  orderId: number;
  orderItemId: string;
  navSelected: string;
  private addToCartSource = new Subject<any>();
  addToCartEmitted$ = this.addToCartSource.asObservable();
  private updateCartSource = new Subject<any>();
  updateCartEmitted$ = this.updateCartSource.asObservable();
  private updateOrderAdminSource = new Subject<any>();
  updateOrderAdminEmitted$ = this.updateOrderAdminSource.asObservable();
  design$: Observable<CustomDesign>;
  product$: Observable<CustomProduct>;
  styles$: Observable<CustomProductStyle[]>;
  panels$: Observable<CustomProductSetting[]>;
  private _selectedObject: SelectedObject;
  private _product: CustomProduct;

  constructor(
    private cookieService: CookieService,
    public svgService: SvgService,
    private optionsService: CustomiserOptionsService,
    private loading: LoadingService,
    private store: Store<fromCustomiser.State>
  ) {
    this.design$ = store.pipe(select(fromCustomiser.getDesign));
    this.styles$ = store.pipe(select(fromCustomiser.getStyles));
    this.panels$ = store.pipe(select(fromCustomiser.getPanels));
    this.product$ = store.pipe(select(fromCustomiser.getProduct));
    store
      .pipe(select(fromCustomiser.getProduct))
      .subscribe(product => (this._product = product));
  }

  get product() {
    return this._product;
  }

  get cartId() {
    return this.cookieService.get('custom-design-cart');
  }

  get editDesign() {
    return this.cartId ? true : false;
  }

  get editOrder() {
    return this.orderId ? true : false;
  }

  get chatHelp() {
    return this.chatToken ? true : false;
  }

  get tokenPrefix() {
    return this.editDesign ? 'custom-design-edit-' : 'custom-design-';
  }

  decodeToken(): any {
    if (!this.token) {
      return null;
    }
    const payload = decode(this.token);
    if (this.payloadIsValid(payload)) {
      return payload;
    }
    return null;
  }

  deleteToken() {
    this.cookieService.remove(`${this.tokenPrefix}${this.product._id}`);
    this.cookieService.remove('custom-design-cart');
  }

  get cookieId() {
    return `${this.tokenPrefix}${this.product._id}`;
  }

  get token() {
    if (this.editOrder) {
      return this.adminToken;
    }
    if (this.chatHelp) {
      return this.chatToken;
    }
    return this.cookieService.get(this.cookieId);
  }

  get selectedObject(): SelectedObject {
    return this._selectedObject;
  }

  set selectedObject(object: SelectedObject) {
    this._selectedObject = object;
  }

  setSelectedObject(
    object: CustomDesignFlag | CustomDesignLogo | CustomDesignImage | CustomName
  ) {
    this.selectedObject = {
      type: `${object.type}s`,
      _id: object._id,
      object
    };

    this.cookieService.put('custom-dragged', 'true', {
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    });
  }

  get dragObject():
    | any
    | CustomDesignFlag
    | CustomDesignLogo
    | CustomDesignImage
    | CustomName {
    if (!this.selectedObject) {
      return of(null);
    }
    return this.store.pipe(
      select(
        fromCustomiser.getDragObject(
          this.selectedObject.type,
          this.selectedObject._id
        )
      )
    );
  }

  saveOption(loader = true, data?: any) {
    if (loader) {
      this.loading.show('Updating Design', '0px');
    }
    if (this.editOrder) {
      data.admin = true;
    }

    if (this.decodeToken()) {
      this.store.dispatch(
        new designActions.UpdateDesign(this.decodeToken()._id, data)
      );
    } else {
      this.store.dispatch(new designActions.CreateDesign(data));
    }
  }

  updateSub(loader = true, data?: any, query?: any) {
    if (!this.decodeToken()) {
      this.store.dispatch(new designActions.RecreateDesign());
      return;
    }
    if (loader) {
      this.loading.show('Updating Design', '0px');
    }
    query._id = this.decodeToken()._id;
    if (this.editOrder) {
      data.admin = true;
    }
    this.store.dispatch(new designActions.UpdateDesign(null, data, query));
  }

  updateObject(object: any, type: string) {
    if (!this.decodeToken()) {
      this.store.dispatch(new designActions.RecreateDesign());
      return;
    }

    this.store.dispatch(
      new designActions.UpdateObject(
        object,
        type,
        this.decodeToken()._id,
        this.editOrder
      )
    );
  }

  saveToAccount(loader = true, data?: any) {
    if (!this.decodeToken()) {
      return;
    }
    if (loader) {
      this.loading.show('Saving Design', '0px');
    }
    this.store.dispatch(
      new designActions.SaveDesignToAccount(this.decodeToken()._id, data)
    );
  }

  clearDesign() {
    this.store.dispatch(
      new designActions.ClearDesign(this.optionsService.getLogo())
    );
    this.deleteToken();
  }

  addToCart() {
    this.addToCartSource.next();
  }

  updateCart() {
    this.updateCartSource.next();
  }

  updateOrderAdmin() {
    this.updateOrderAdminSource.next();
  }

  backToMenu() {
    this.optionsService.backToMenu();
  }

  private payloadIsValid(payload) {
    return (
      payload && (!payload.exp || payload.exp * 1000 > new Date().getTime())
    );
  }
}
