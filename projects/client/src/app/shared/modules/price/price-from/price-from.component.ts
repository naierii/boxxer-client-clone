import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { shareAsync } from '../price.module';
import { Product } from '@global/models/product';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '@app/reducers';

@Component({
  selector: 'bx-price-from, [bx-price-from]',
  templateUrl: './price-from.component.html',
  styleUrls: ['./price-from.component.scss']
})
export class PriceFromComponent implements OnInit {
  currency$: Observable<string>;
  @Input() variations: Product[];
  on_sale = false;
  is_variable = false;

  constructor(private stateStore: Store<fromRoot.State>) {
    this.currency$ = this.stateStore.pipe(select(fromRoot.getCurrency));
  }

  get minPrice() {
    const prices = this.variations.map(product => product.price);
    return Math.min(...prices);
  }

  get minSalePrice() {
    const prices = this.variations.map(product => product.sale_price || 0);
    return Math.min(...prices);
  }

  get maxPrice() {
    const prices = this.variations.map(product => product.price);
    return Math.max(...prices);
  }

  ngOnInit() {
    if (this.minSalePrice > 0) {
      this.on_sale = true;
    }

    if (this.minPrice !== this.maxPrice) {
      this.is_variable = true;
    }
  }
}
