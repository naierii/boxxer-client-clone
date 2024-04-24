import { NgModule } from '@angular/core';

import { OfferRoutingModule } from './offer-routing.module';
import { SaleComponent } from './sale/sale.component';
import { SharedModule } from '@admin/shared/shared.module';

@NgModule({
  imports: [SharedModule, OfferRoutingModule],
  declarations: [SaleComponent]
})
export class OfferModule {}
