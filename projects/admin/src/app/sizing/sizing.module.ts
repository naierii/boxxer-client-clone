import { NgModule } from '@angular/core';
import { SizingRoutingModule } from './sizing-routing.module';
import { SizingListComponent } from './sizing-list/sizing-list.component';
import { SizingEditComponent } from './sizing-edit/sizing-edit.component';
import { SizingItemComponent } from './sizing-list/sizing-item.component';
import { SharedModule } from '@admin/shared/shared.module';

@NgModule({
  imports: [SharedModule, SizingRoutingModule],
  declarations: [SizingListComponent, SizingEditComponent, SizingItemComponent]
})
export class SizingModule {}
