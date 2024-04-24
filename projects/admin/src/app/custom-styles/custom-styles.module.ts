import { SharedModule } from '@admin/shared/shared.module';
import { NgModule } from '@angular/core';

import { CustomStylesRoutingModule } from './custom-styles-routing.module';
import { CustomStylesListComponent } from './custom-styles-list/custom-styles-list.component';
import { CustomStylesEditComponent } from './custom-styles-edit/custom-styles-edit.component';
import { CustomStylesItemComponent } from './custom-styles-list/custom-styles-item.component';
import { CustomStylesOptionComponent } from './custom-styles-edit/custom-styles-option.component';

@NgModule({
  imports: [SharedModule, CustomStylesRoutingModule],
  declarations: [CustomStylesListComponent, CustomStylesEditComponent, CustomStylesItemComponent, CustomStylesOptionComponent]
})
export class CustomStylesModule {}
