import { Component, Input } from '@angular/core';
import { Payment } from '@global/models/payment';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Order } from '@global/models/order';
import { OrderPaymentsRefundComponent } from './order-payments-refund.component';

@Component({
  selector: 'bx-order-payments-item, [bx-order-payments-item]',
  templateUrl: './order-payments-item.component.html'
})
export class OrderPaymentsItemComponent {
  @Input() payment: Payment;
  @Input() order: Order;
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  refundPayment(payment: Payment) {
    this.bsModalRef = this.modalService.show(OrderPaymentsRefundComponent, {
      class: 'modal-lg'
    });
    this.bsModalRef.content.order = this.order;
    this.bsModalRef.content.payment = payment;
    this.bsModalRef.content.setUp();
  }
}
