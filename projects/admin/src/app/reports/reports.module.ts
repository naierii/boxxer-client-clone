import { SocketService } from '@admin/shared/services/socket.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SharedModule } from '@admin/shared/shared.module';
import { NgModule } from '@angular/core';

import { ReportsRoutingModule } from './reports-routing.module';
import { SalesComponent } from './sales/sales.component';
import { SalesItemComponent } from './sales/sales-item.component';
import { CustomComponent } from './custom/custom.component';
import { CustomItemComponent } from './custom/custom-item.component';

@NgModule({
  imports: [
    SharedModule,
    ReportsRoutingModule,
    ChartsModule,
    BsDatepickerModule
  ],
  declarations: [SalesComponent, SalesItemComponent, CustomComponent, CustomItemComponent],
  providers: [SocketService]
})
export class ReportsModule {}
