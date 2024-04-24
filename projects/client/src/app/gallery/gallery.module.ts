import { NgModule } from '@angular/core';
import { CardModule } from '@app/shared/modules/card/card.module';
import { SidebarNavModule } from '@app/shared/modules/sidebar-nav/sidebar-nav.module';

import { SharedModule } from './../shared/shared.module';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';
import { GalleryItemComponent } from './gallery-list/gallery-item.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    CardModule,
    SidebarNavModule,
    GalleryRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    GalleryListComponent,
    GalleryItemComponent,
    GalleryDetailComponent
  ],
  providers: []
})
export class GalleryModule {}
