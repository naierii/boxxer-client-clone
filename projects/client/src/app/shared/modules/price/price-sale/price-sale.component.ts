import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '@app/reducers';

@Component({
  selector: 'bx-price-sale, [bx-price-sale]',
  templateUrl: './price-sale.component.html',
  styleUrls: ['./price-sale.component.scss']
})
export class PriceSaleComponent {
  currency$: Observable<string>;
  @Input() price: number;
  @Input() sale_price: number;
  @Input() prefix: string;
  constructor(private stateStore: Store<fromRoot.State>) {
    this.currency$ = this.stateStore.pipe(select(fromRoot.getCurrency));
  }
}
