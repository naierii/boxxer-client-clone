import { SharedModule } from '@admin/shared/shared.module';
import { NgModule } from '@angular/core';

import { MaterialsRoutingModule } from './materials-routing.module';
import { MaterialsListComponent } from './materials-list/materials-list.component';
import { MaterialsEditComponent } from './materials-edit/materials-edit.component';
import { MaterialsItemComponent } from './materials-list/materials-item.component';
import { SocketService } from '@admin/shared/services/socket.service';
import { MaterialsGroupListComponent } from './materials-group-list/materials-group-list.component';
import { MaterialsGroupEditComponent } from './materials-group-edit/materials-group-edit.component';
import { MaterialsGroupItemComponent } from './materials-group-list/materials-group-item.component';

@NgModule({
  imports: [SharedModule, MaterialsRoutingModule],
  declarations: [
    MaterialsListComponent,
    MaterialsEditComponent,
    MaterialsItemComponent,
    MaterialsGroupListComponent,
    MaterialsGroupEditComponent,
    MaterialsGroupItemComponent
  ],
  providers: [SocketService]
})
export class MaterialsModule {}
