import { SharedModule } from '@admin/shared/shared.module';
import { NgModule } from '@angular/core';

import { CustomNamesEditComponent } from './custom-names-edit/custom-names-edit.component';
import { CustomNamesItemComponent } from './custom-names-list/custom-names-item.component';
import { CustomNamesListComponent } from './custom-names-list/custom-names-list.component';
import { CustomNamesRoutingModule } from './custom-names-routing.module';

@NgModule({
  imports: [SharedModule, CustomNamesRoutingModule],
  declarations: [
    CustomNamesListComponent,
    CustomNamesEditComponent,
    CustomNamesItemComponent
  ]
})
export class CustomNamesModule {}
