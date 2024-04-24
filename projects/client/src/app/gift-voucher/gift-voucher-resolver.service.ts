import { ProductDisplay } from '@global/models/product-display';
import { Injectable } from '@angular/core';
import {
  Resolve,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { ApiService } from '../core/services/api.service';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiftVoucherResolverService implements Resolve<ProductDisplay> {
  constructor(private api: ApiService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.api.get('product-display', 'voucher', null, false).pipe(
      take(1),
      map(product => {
        if (product) {
          return product;
        } else {
          this.router.navigate(['/']);
          return null;
        }
      })
    );
  }
}
