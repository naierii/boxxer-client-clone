import { SocketService } from '@admin/shared/services/socket.service';
import { SharedModule } from '@admin/shared/shared.module';
import { NgModule } from '@angular/core';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogItemComponent } from './blog-list/blog-item.component';

@NgModule({
  imports: [SharedModule, BlogRoutingModule],
  declarations: [BlogListComponent, BlogEditComponent, BlogItemComponent],
  providers: [SocketService]
})
export class BlogModule {}
