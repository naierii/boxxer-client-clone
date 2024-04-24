import { SocketService } from './../shared/services/socket.service';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { DiscountsRoutingModule } from './discounts-routing.module';
import { DiscountsListComponent } from './discounts-list/discounts-list.component';
import { DiscountsEditComponent } from './discounts-edit/discounts-edit.component';
import { DiscountsItemComponent } from './discounts-list/discounts-item.component';

@NgModule({
  imports: [SharedModule, DiscountsRoutingModule],
  declarations: [
    DiscountsListComponent,
    DiscountsEditComponent,
    DiscountsItemComponent
  ],
  providers: [SocketService]
})
export class DiscountsModule {}
