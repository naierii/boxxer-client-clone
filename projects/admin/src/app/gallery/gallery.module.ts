import { ImageService } from '@admin/core/services/image.service';
import { SocketService } from '@admin/shared/services/socket.service';
import { ApiSearchService } from '@admin/shared/services/api-search.service';
import { SharedModule } from '@admin/shared/shared.module';
import { NgModule } from '@angular/core';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { GalleryEditComponent } from './gallery-edit/gallery-edit.component';
import { GalleryItemComponent } from './gallery-list/gallery-item.component';

@NgModule({
  imports: [SharedModule, GalleryRoutingModule],
  declarations: [
    GalleryListComponent,
    GalleryEditComponent,
    GalleryItemComponent,
  ],
  providers: [ApiSearchService, ImageService, SocketService],
})
export class GalleryModule {}
