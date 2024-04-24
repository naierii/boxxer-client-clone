import { SharedModule } from '@admin/shared/shared.module';
import { NgModule } from '@angular/core';

import { ShippingRoutingModule } from './shipping-routing.module';
import { ShippingListComponent } from './shipping-list/shipping-list.component';
import { ShippingEditComponent } from './shipping-edit/shipping-edit.component';
import { ShippingListItemComponent } from './shipping-list/shipping-list-item.component';
import { SocketService } from '@admin/shared/services/socket.service';

@NgModule({
  imports: [SharedModule, ShippingRoutingModule],
  declarations: [
    ShippingListComponent,
    ShippingEditComponent,
    ShippingListItemComponent
  ],
  providers: [SocketService]
})
export class ShippingModule {}
