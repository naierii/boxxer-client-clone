import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceComponent } from './price/price.component';
import { PriceSaleComponent } from './price-sale/price-sale.component';
import { PriceFromComponent } from './price-from/price-from.component';
import { CurrConvertPipe } from './curr-convert.pipe';
import { share, tap } from 'rxjs/operators';
import { PriceShippingComponent } from './price-shipping/price-shipping.component';

export const shareAsync = obs$ => obs$.pipe(share());

@NgModule({
  imports: [CommonModule],
  declarations: [
    PriceComponent,
    PriceSaleComponent,
    PriceFromComponent,
    CurrConvertPipe,
    PriceShippingComponent
  ],
  exports: [
    PriceComponent,
    PriceSaleComponent,
    PriceFromComponent,
    PriceShippingComponent,
    CurrConvertPipe
  ]
})
export class PriceModule {}
