import { Order } from '@global/models/order';
import { Payment } from '@global/models/payment';
import { OrderPaymentsAddComponent } from './order-payments-add.component';
import { Component, OnInit, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from '@admin/core/services/auth.service';

@Component({
  selector: 'bx-order-payments',
  templateUrl: './order-payments.component.html'
})
export class OrderPaymentsComponent {
  @Input() payments: Payment[];
  @Input() order: Order;
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService,
    private auth: AuthService
  ) {}

  addPayment() {
    this.bsModalRef = this.modalService.show(OrderPaymentsAddComponent, {
      class: 'modal-lg'
    });
    this.bsModalRef.content.order = this.order;
    this.bsModalRef.content.setUp();
  }
  get isOrderCommenter() {
    return this.auth.checkRoles(['order_commenter']);
  }
}
