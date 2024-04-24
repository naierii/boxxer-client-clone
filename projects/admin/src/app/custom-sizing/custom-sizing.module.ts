import { SharedModule } from '@admin/shared/shared.module';
import { NgModule } from '@angular/core';

import { CustomSizingRoutingModule } from './custom-sizing-routing.module';
import { CustomSizingListComponent } from './custom-sizing-list/custom-sizing-list.component';
import { CustomSizingEditComponent } from './custom-sizing-edit/custom-sizing-edit.component';
import { CustomSizingItemComponent } from './custom-sizing-list/custom-sizing-item.component';

@NgModule({
  imports: [SharedModule, CustomSizingRoutingModule],
  declarations: [
    CustomSizingListComponent,
    CustomSizingEditComponent,
    CustomSizingItemComponent
  ]
})
export class CustomSizingModule {}
