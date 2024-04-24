import { NgModule } from '@angular/core';

import { GraphicPriceRoutingModule } from './graphic-price-routing.module';
import { GraphicPriceListComponent } from './graphic-price-list/graphic-price-list.component';
import { GraphicPriceEditComponent } from './graphic-price-edit/graphic-price-edit.component';
import { GraphicPriceItemComponent } from './graphic-price-list/graphic-price-item.component';
import { SharedModule } from '@admin/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    GraphicPriceRoutingModule
  ],
  declarations: [GraphicPriceListComponent, GraphicPriceEditComponent, GraphicPriceItemComponent]
})
export class GraphicPriceModule { }
