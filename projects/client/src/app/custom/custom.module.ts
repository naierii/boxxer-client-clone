import { NgModule } from '@angular/core';
import { MaterialModule } from '@app/material/material.module';
import { CardModule } from '@app/shared/modules/card/card.module';
import { SidebarNavModule } from '@app/shared/modules/sidebar-nav/sidebar-nav.module';

import { SharedModule } from './../shared/shared.module';
import { CustomDetailComponent } from './custom-detail/custom-detail.component';
import { CustomItemComponent } from './custom-list/custom-item.component';
import { CustomListComponent } from './custom-list/custom-list.component';
import { CustomRoutingModule } from './custom-routing.module';
import { CustomGalleryComponent } from './custom-gallery/custom-gallery.component';

@NgModule({
  imports: [
    SharedModule,
    CardModule,
    CustomRoutingModule,
    SidebarNavModule,
    MaterialModule
  ],
  declarations: [
    CustomListComponent,
    CustomItemComponent,
    CustomDetailComponent,
    CustomGalleryComponent
  ],
  providers: []
})
export class CustomModule {}
