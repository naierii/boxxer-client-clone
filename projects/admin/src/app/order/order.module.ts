import { OrderPaymentsAddComponent } from './order-payments/order-payments-add.component';
import { SharedModule } from '@admin/shared/shared.module';
import { NgModule } from '@angular/core';

import { JobCardItemComponent } from './job-card-list/job-card-item.component';
import { JobCardListComponent } from './job-card-list/job-card-list.component';
import { OrderActionsComponent } from './order-actions/order-actions.component';
import { OrderCommentsComponent } from './order-comments/order-comments.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderLineItemComponent } from './order-detail/order-line-item/order-line-item.component';
import { OrderEditService } from './order-edit.service';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { OrderItemComponent } from './order-list/order-item.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderRoutingModule } from './order-routing.module';
import { JobCardDetailComponent } from './job-card-detail/job-card-detail.component';
import { OrderPaymentsComponent } from './order-payments/order-payments.component';
import { OrderPaymentsItemComponent } from './order-payments/order-payments-item.component';
import { OrderCustomItemComponent } from './order-detail/order-custom-item/order-custom-item.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderPaymentsRefundComponent } from './order-payments/order-payments-refund.component';
import { ProductionPicturesComponent } from './production-pictures/production-pictures.component';
import { ProductionPicturesAddComponent } from './production-pictures/production-pictures-add.component';
import { ProductionPicturesItemComponent } from './production-pictures/production-pictures-item.component';
import { DecimalPricePipe } from '@admin/shared/pipes/decimal-price.pipe';
import { OrderShippingComponent } from './order-shipping/order-shipping.component';
import { OrderItemEditComponent } from './order-item-edit/order-item-edit.component';

@NgModule({
  imports: [SharedModule, OrderRoutingModule, ModalModule.forRoot()],
  declarations: [
    OrderListComponent,
    OrderEditComponent,
    OrderDetailComponent,
    OrderItemComponent,
    JobCardListComponent,
    JobCardItemComponent,
    OrderLineItemComponent,
    OrderActionsComponent,
    OrderCommentsComponent,
    JobCardDetailComponent,
    OrderPaymentsComponent,
    OrderPaymentsItemComponent,
    OrderCustomItemComponent,
    OrderPaymentsAddComponent,
    OrderPaymentsRefundComponent,
    ProductionPicturesComponent,
    ProductionPicturesAddComponent,
    ProductionPicturesItemComponent,
    OrderShippingComponent,
    OrderItemEditComponent
  ],
  entryComponents: [
    OrderPaymentsAddComponent,
    OrderPaymentsRefundComponent,
    ProductionPicturesAddComponent,
    OrderShippingComponent,
    OrderItemEditComponent
  ],
  providers: [OrderEditService, DecimalPricePipe]
})
export class OrderModule {}
