import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { shareAsync } from '../price.module';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '@app/reducers';

@Component({
  selector: 'bx-price, [bx-price]',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent {
  currency$: Observable<string>;
  @Input() price: number;
  @Input() sale_price: number;
  constructor(private stateStore: Store<fromRoot.State>) {
    this.currency$ = this.stateStore.pipe(select(fromRoot.getCurrency));
  }
}
