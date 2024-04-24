import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnDestroy, Input } from '@angular/core';
import { TawkService } from '@app/core/services/tawk.service';
import { AuthService } from '@app/core/services/auth.service';
import * as fromRoot from '@app/reducers';
import * as fromCart from '@app/cart/reducers';
import { Order } from '@global/models/order';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { environment } from '@env/environment';
import { SetCurrency } from '@app/core/actions/state';
import { CookieService } from '@gorniv/ngx-universal';

@Component({
  selector: 'bx-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent implements OnDestroy {
  order$: Observable<Order> = this.store.pipe(select(fromCart.getOrder));
  currency$: Observable<string> = this.store.pipe(select(fromRoot.getCurrency));
  currencies = ['GBP', 'EUR', 'USD', 'AUD', 'NZD', 'THB'];
  @Input()
  checkout = false;
  private order: Order;
  constructor(
    public tawk: TawkService,
    public authService: AuthService,
    private store: Store<fromRoot.State>,
    private cookieService: CookieService
  ) {
    this.order$
      .pipe(untilComponentDestroyed(this))
      .subscribe((order: Order) => {
        this.order = order;
      });
  }

  openChat() {
    if (this.checkout && this.order) {
      this.tawk.setAttributes({
        order: `${this.order.orderid}`,
        'view-order': `${environment.admin}/orders/${this.order.orderid}`
      });
    }
    this.tawk.toggle();
  }

  setCurrency(code: string) {
    this.cookieService.put('currency', code, {
      expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
    });
    this.store.dispatch(new SetCurrency(code));
  }

  ngOnDestroy() {}
}
