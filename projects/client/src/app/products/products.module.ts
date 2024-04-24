import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material/material.module';
import { CardModule } from '@app/shared/modules/card/card.module';
import { SidebarNavModule } from '@app/shared/modules/sidebar-nav/sidebar-nav.module';

import { SharedModule } from './../shared/shared.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductItemComponent } from './product-list/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CardModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    MaterialModule,
    SidebarNavModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductItemComponent
  ],
  providers: []
})
export class ProductsModule {}
