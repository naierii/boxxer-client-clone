import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '@app/reducers';
import { takeUntil } from 'rxjs/operators';
import { componentDestroyed } from '@w11k/ngx-componentdestroyed';

@Pipe({
  name: 'currConvert'
})
export class CurrConvertPipe implements PipeTransform, OnDestroy {
  private baseRate = 'USD';
  private rates: any;
  constructor(private stateStore: Store<fromRoot.State>) {
    this.stateStore
      .pipe(
        select(fromRoot.getRates),
        takeUntil(componentDestroyed(this))
      )
      .subscribe(rates => (this.rates = rates));
  }

  getRate(to: string, from: string): number {
    this.rates[this.baseRate] = 1;

    if (from === this.baseRate) {
      return this.rates[to];
    }

    if (to === this.baseRate) {
      return 1 / this.rates[from];
    }

    return this.rates[to] * (1 / this.rates[from]);
  }

  transform(value: number, from: string, to: string): number {
    if (!from || !to || !this.rates) {
      return value;
    }
    return value * this.getRate(to, from);
  }

  ngOnDestroy() {}
}
