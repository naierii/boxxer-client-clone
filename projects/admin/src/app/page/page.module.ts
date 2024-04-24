import { SocketService } from '@admin/shared/services/socket.service';
import { SharedModule } from '@admin/shared/shared.module';
import { NgModule } from '@angular/core';

import { PageRoutingModule } from './page-routing.module';
import { PageListComponent } from './page-list/page-list.component';
import { PageEditComponent } from './page-edit/page-edit.component';
import { PageItemComponent } from './page-list/page-item.component';

@NgModule({
  imports: [SharedModule, PageRoutingModule],
  declarations: [PageListComponent, PageEditComponent, PageItemComponent],
  providers: [SocketService]
})
export class PageModule {}
