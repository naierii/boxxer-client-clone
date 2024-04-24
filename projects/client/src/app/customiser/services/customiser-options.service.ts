import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { CustomProduct } from '@global/models/custom-product';
import { CustomProductSetting } from '@global/models/custom-product-setting';
import { CustomProductStyle } from '@global/models/custom-product-style';
import * as fromCustomiser from './../reducers';
import { Store, select } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CookieService } from '@gorniv/ngx-universal';

@Injectable()
export class CustomiserOptionsService {
  product: CustomProduct;
  actionBarHeight = new Subject<number>();
  styles$: Observable<CustomProductStyle[]>;
  panels$: Observable<CustomProductSetting[]>;
  constructor(
    private router: Router,
    private store: Store<fromCustomiser.State>,
    private cookieService: CookieService
  ) {
    this.panels$ = store.pipe(select(fromCustomiser.getPanels));
    this.styles$ = store.pipe(select(fromCustomiser.getStyles));
  }

  product$(): Observable<CustomProduct> {
    return this.store.pipe(
      select(fromCustomiser.getProduct),
      tap(product => {
        if (product) {
          this.product = product;
        }
      })
    );
  }

  get showTouchHelp() {
    const helpCookie = this.cookieService.get('touch-help');
    return !helpCookie ? true : false;
  }

  setTouchHelp() {
    this.cookieService.put('touch-help', 'true', {
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    });
  }

  get menuUrl() {
    return `/customiser/${this.product._id}`;
  }

  getFontSize(font?: string): any {
    let fontSize;
    switch (this.product.category._id) {
      case '58ac13a9dc142c612ab61fb1': // Boxing shorts
      case '58ac145cdc142c612ab61fb3': // Gladiator shorts
      case '58ac142bdc142c612ab61fb2': // Thai shorts
      case '58ac14b4dc142c612ab61fb4': // Jackets
      case '58ac16a45d44a5242cc5e4e4': // Corner Jackets
      case '58ac16dc5d44a5242cc5e4e5': // Vests
      case '58ac17675d44a5242cc5e4e6': // Robes
      case '5d567912c3d7d431d3c00b9b': // Club Boxing shorts
      case '5d5c362795a69d3256ae113b': // Club Vests
      case '5d5c393595a69d3256ae11d7': // Club Robes
        fontSize = 12;
        break;
      case '58ac17c95d44a5242cc5e4e7': // Gloves
      case '5961e16b66af8806440e7db9': // Pads
      case '59871a29ecd891d62778dd3a': // Head Guard
      case '5999c0b45eac93573463e436': // Groin Guard
        fontSize = 29;
        break;
    }

    if (font && font === 'ballantines') {
      fontSize = fontSize * 1.8;
    }

    return fontSize;
  }

  getLogo(): any {
    let position;

    switch (this.product.category._id) {
      case '58ac13a9dc142c612ab61fb1': // Boxing shorts
        position = {
          x: 252,
          y: 237,
          width: 20,
          height: 20
        };
        break;
      case '5d567912c3d7d431d3c00b9b': // Club Boxing shorts
        position = {
          x: 354,
          y: 237,
          width: 20,
          height: 20
        };
        break;
      case '58ac145cdc142c612ab61fb3': // Gladiator shorts
        position = {
          x: 262,
          y: 235,
          width: 20,
          height: 20
        };
        break;
      case '58ac142bdc142c612ab61fb2': // Thai shorts
        position = {
          x: 258,
          y: 190,
          width: 20,
          height: 20
        };
        break;
      case '58ac14b4dc142c612ab61fb4': // Jackets
        position = {
          x: 212,
          y: 184,
          width: 20,
          height: 20
        };
        break;
      case '58ac16a45d44a5242cc5e4e4': // Corner Jackets
        position = {
          x: 183,
          y: 99,
          width: 20,
          height: 20
        };
        break;
      case '58ac16dc5d44a5242cc5e4e5': // Vests
        position = {
          x: 118,
          y: 112,
          width: 20,
          height: 20
        };
        break;
      case '5d5c362795a69d3256ae113b': // Club Vests
        position = {
          x: 36,
          y: 106,
          width: 20,
          height: 20
        };
        break;
      case '58ac17675d44a5242cc5e4e6': // Robes
        position = {
          x: 175,
          y: 163,
          width: 20,
          height: 20
        };
        break;
      case '5d5c393595a69d3256ae11d7': // Club Robes
        position = {
          x: 180,
          y: 168,
          width: 20,
          height: 20
        };
        break;
      case '58ac17c95d44a5242cc5e4e7': // Gloves
        position = {
          x: 30,
          y: 245,
          width: 50,
          height: 50
        };
        break;
      case '5961e16b66af8806440e7db9': // Pads
        position = {
          x: 56,
          y: 190,
          width: 50,
          height: 50
        };
        break;
      case '59871a29ecd891d62778dd3a': // Head Guard
        position = {
          x: 141,
          y: 135,
          width: 50,
          height: 50
        };
        break;
      case '5999c0b45eac93573463e436': // Groin Guard
        position = {
          x: 160,
          y: 88,
          width: 50,
          height: 50
        };
        break;
    }

    return position;
  }

  getWaistBadge(): any[] {
    let positions = [];
    switch (this.product.category._id) {
      case '58ac13a9dc142c612ab61fb1': // Boxing shorts
        positions = [
          {
            position: 'left',
            x: 66,
            y: 15,
            width: 11,
            height: 30,
            rotate: 0
          },
          {
            position: 'right',
            x: 235,
            y: 15,
            width: 11,
            height: 30,
            rotate: 180
          }
        ];
        break;
      case '58ac145cdc142c612ab61fb3': // Gladiator shorts
        positions = [
          {
            position: 'left',
            x: 73,
            y: 15,
            width: 11,
            height: 30,
            rotate: 0
          },
          {
            position: 'right',
            x: 232,
            y: 15,
            width: 11,
            height: 30,
            rotate: 180
          }
        ];
        break;
      case '58ac142bdc142c612ab61fb2': // Thai shorts
        positions = [
          {
            position: 'left',
            x: 64,
            y: 42,
            width: 11,
            height: 30,
            rotate: 0
          },
          {
            position: 'right',
            x: 234,
            y: 43,
            width: 11,
            height: 30,
            rotate: 180
          }
        ];
        break;
      default:
        positions = [];
        break;
    }
    return positions;
  }

  getStyle(id: string): Observable<CustomProductStyle> {
    return this.styles$.pipe(
      map((styles: CustomProductStyle[]) =>
        styles.find(style => style._id === id)
      )
    );
  }

  getPanel(id: string): Observable<CustomProductSetting> {
    return this.panels$.pipe(
      map((panels: CustomProductSetting[]) =>
        panels.find(panel => panel._id === id)
      )
    );
  }

  backToMenu() {
    this.router.navigate([this.menuUrl], {
      skipLocationChange: true
    });
  }
}
