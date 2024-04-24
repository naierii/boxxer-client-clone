import { TranslateModule } from '@ngx-translate/core';
import { SocketService } from '@admin/shared/services/socket.service';
import { SharedModule } from '@admin/shared/shared.module';
import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserItemComponent } from './user-list/user-item.component';

@NgModule({
  imports: [SharedModule, UsersRoutingModule, TranslateModule.forChild()],
  declarations: [UserListComponent, UserEditComponent, UserItemComponent],
  providers: [SocketService]
})
export class UsersModule {}
