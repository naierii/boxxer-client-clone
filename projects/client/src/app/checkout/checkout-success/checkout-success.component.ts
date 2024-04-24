import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/services/auth.service';
import * as fromRoot from '@app/reducers';
import * as fromCart from '@app/cart/reducers';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'bx-checkout-success',
  templateUrl: './checkout-success.component.html',
  styleUrls: ['./checkout-success.component.scss']
})
export class CheckoutSuccessComponent implements OnInit {
  order_email$: Observable<string> = this.store.pipe(
    select(fromCart.getOrderEmail)
  );
  constructor(
    public auth: AuthService,
    private store: Store<fromRoot.State>,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle('Checkout | Boxxerworld');
  }
}
