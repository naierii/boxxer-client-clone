import { SharedModule } from '@admin/shared/shared.module';
import { NgModule } from '@angular/core';

import { FlagsRoutingModule } from './flags-routing.module';
import { FlagsListComponent } from './flags-list/flags-list.component';
import { FlagsEditComponent } from './flags-edit/flags-edit.component';
import { FlagsItemComponent } from './flags-list/flags-item.component';
import { SocketService } from '@admin/shared/services/socket.service';

@NgModule({
  imports: [SharedModule, FlagsRoutingModule],
  declarations: [FlagsListComponent, FlagsEditComponent, FlagsItemComponent],
  providers: [SocketService]
})
export class FlagsModule {}
