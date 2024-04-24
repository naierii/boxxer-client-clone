import { SharedModule } from '@admin/shared/shared.module';
import { NgModule } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg';

import { CustomProductsEditComponent } from './custom-products-edit/custom-products-edit.component';
import { CustomProductsSettingComponent } from './custom-products-edit/custom-products-setting.component';
import { CustomProductsItemComponent } from './custom-products-list/custom-products-item.component';
import { CustomProductsListComponent } from './custom-products-list/custom-products-list.component';
import { CustomProductsRoutingModule } from './custom-products-routing.module';
import { CustomProductsSettingsListComponent } from './custom-products-settings-list/custom-products-settings-list.component';
import { CustomProductsSettingsEditComponent } from './custom-products-settings-edit/custom-products-settings-edit.component';
import { CustomProductsSettingsItemComponent } from './custom-products-settings-list/custom-products-settings-item.component';

@NgModule({
  imports: [
    SharedModule,
    CustomProductsRoutingModule,
    InlineSVGModule.forRoot({
      baseUrl: 'https://boxxer-images.ams3.cdn.digitaloceanspaces.com/',
    }),
  ],
  declarations: [
    CustomProductsListComponent,
    CustomProductsEditComponent,
    CustomProductsItemComponent,
    CustomProductsSettingComponent,
    CustomProductsSettingsListComponent,
    CustomProductsSettingsEditComponent,
    CustomProductsSettingsItemComponent,
  ],
})
export class CustomProductsModule {}
