import { SocketService } from '@admin/shared/services/socket.service';
import { SharedModule } from '@admin/shared/shared.module';
import { NgModule } from '@angular/core';

import { LogosRoutingModule } from './logos-routing.module';
import { LogosListComponent } from './logos-list/logos-list.component';
import { LogosEditComponent } from './logos-edit/logos-edit.component';
import { LogosItemComponent } from './logos-list/logos-item.component';

@NgModule({
  imports: [SharedModule, LogosRoutingModule],
  declarations: [LogosListComponent, LogosEditComponent, LogosItemComponent],
  providers: [SocketService]
})
export class LogosModule {}
