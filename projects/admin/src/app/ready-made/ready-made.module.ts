import { SharedModule } from '@admin/shared/shared.module';
import { NgModule } from '@angular/core';

import { ReadyMadeRoutingModule } from './ready-made-routing.module';
import { ReadyMadeListComponent } from './ready-made-list/ready-made-list.component';
import { ReadyMadeEditComponent } from './ready-made-edit/ready-made-edit.component';
import { ReadyMadeItemComponent } from './ready-made-list/ready-made-item.component';
import { SocketService } from '@admin/shared/services/socket.service';
import { ReadyMadeVariationEditComponent } from './ready-made-edit/ready-made-variation-edit.component';
import { ReadyMadeSettingListComponent } from './ready-made-setting-list/ready-made-setting-list.component';
import { ReadyMadeSettingEditComponent } from './ready-made-setting-edit/ready-made-setting-edit.component';
import { ReadyMadeSettingItemComponent } from './ready-made-setting-list/ready-made-setting-item.component';
import { ReadyMadeAttributesComponent } from './ready-made-edit/ready-made-attributes.component';
import { ReadyMadeAttributeItemComponent } from './ready-made-edit/ready-made-attribute-item.component';

@NgModule({
  imports: [SharedModule, ReadyMadeRoutingModule],
  declarations: [
    ReadyMadeListComponent,
    ReadyMadeEditComponent,
    ReadyMadeItemComponent,
    ReadyMadeVariationEditComponent,
    ReadyMadeSettingListComponent,
    ReadyMadeSettingEditComponent,
    ReadyMadeSettingItemComponent,
    ReadyMadeAttributesComponent,
    ReadyMadeAttributeItemComponent
  ],
  providers: [SocketService]
})
export class ReadyMadeModule {}
