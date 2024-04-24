import { LineItem } from '@global/models/line-item';
import { OrderShippingComponent } from './../order-shipping/order-shipping.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { OrderEditService } from './../order-edit.service';
import { SocketService } from '@admin/shared/services/socket.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { OrderItemEditComponent } from './../order-item-edit/order-item-edit.component';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'bx-order-detail',
  templateUrl: './order-detail.component.html',
  providers: [
    {
      provide: 'LineItemService',
      useClass: SocketService
    },
    {
      provide: 'OrderService',
      useClass: SocketService
    }
  ]
})
export class OrderDetailComponent implements OnInit, OnDestroy {
  bsModalRef: BsModalRef;
  constructor(
    private route: ActivatedRoute,
    @Inject('OrderService') private orderService: SocketService,
    @Inject('LineItemService') private lineItemService: SocketService,
    public editService: OrderEditService,
    private modalService: BsModalService
  ) {
    lineItemService.setup('cartitemsadmin');
    orderService.setup('order', 'orderid');
    fromEvent(orderService.service, 'patched')
      .pipe(untilComponentDestroyed(this))
      .subscribe((resp: any) => {
        if (
          resp &&
          this.editService.order &&
          this.editService.order._id === resp._id
        ) {
          this.editService.order = resp;
        }
      });
  }

  ngOnInit() {
    this.getOrder();
  }

  getOrder() {
    this.route.params
      .pipe(
        untilComponentDestroyed(this),
        switchMap((params: any) => {
          return this.orderService.findOne(params['id'], null, false);
        })
      )
      .subscribe(
        (resp: any) => {
          this.editService.order = resp;
          this.editService.items = resp.items;
          this.editService.payments = resp.payments;
          this.editService.productions = resp.productions;
        },
        err => {
          console.log(err);
        }
      );
  }

  customItems() {
    return this.editService.items
      ? this.editService.items.filter(i => i.custom_design)
      : null;
  }

  openEditLineItem(item?: LineItem) {
    this.bsModalRef = this.modalService.show(OrderItemEditComponent, {
      class: 'modal-lg'
    });
    this.bsModalRef.content.order = this.editService.order;
    if (item) {
      this.bsModalRef.content.item = item;
    }
    this.bsModalRef.content.setUp();
  }

  openPaymentRequest() {}

  outstandingBalance() {
    return this.editService.order && this.editService.order.balance > 0
      ? true
      : false;
  }

  editShipping() {
    this.bsModalRef = this.modalService.show(OrderShippingComponent, {
      class: 'modal-lg'
    });
    this.bsModalRef.content.order = this.editService.order;
    this.bsModalRef.content.setUp();
  }

  trackByItems(index, item) {
    return item;
  }

  ngOnDestroy() {
    this.editService.reset();
  }
}
