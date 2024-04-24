import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '@app/reducers';

@Component({
  selector: 'bx-price-shipping',
  templateUrl: './price-shipping.component.html',
  styleUrls: ['./price-shipping.component.scss']
})
export class PriceShippingComponent {
  currency$: Observable<string>;
  @Input() firstPrice = 0;
  @Input() secondPrice = 0;

  constructor(private stateStore: Store<fromRoot.State>) {
    this.currency$ = this.stateStore.pipe(select(fromRoot.getCurrency));
  }

  get samePrice() {
    return this.firstPrice === this.secondPrice;
  }

  get isFree() {
    return this.firstPrice === 0;
  }
}
