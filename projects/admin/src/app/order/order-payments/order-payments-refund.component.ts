import { Component, Inject } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { SocketService } from '@admin/shared/services/socket.service';
import { Order } from '@global/models/order';
import { Payment } from '@global/models/payment';
import { OrderEditService } from '@admin/order/order-edit.service';

@Component({
  selector: 'bx-order-payments-refund',
  templateUrl: './order-payments-refund.component.html',
  styles: [],
  providers: [
    {
      provide: 'StripeRefundService',
      useClass: SocketService
    },
    {
      provide: 'PayPalRefundService',
      useClass: SocketService
    }
  ]
})
export class OrderPaymentsRefundComponent {
  public amount: number;
  public order: Order;
  public payment: Payment;
  public saving = false;
  constructor(
    @Inject('StripeRefundService') private stripeService: SocketService,
    @Inject('PayPalRefundService') private paypalService: SocketService,
    public bsModalRef: BsModalRef,
    public editService: OrderEditService
  ) {
    stripeService.setup('refund-stripe');
    paypalService.setup('refund-paypal');
  }

  setUp() {
    this.amount = this.payment.amount;
  }

  sendRefund() {
    this.saving = true;
    if (this.payment.type === 'Stripe') {
      this.stripeService
        .create({
          order: this.order._id,
          orderid: this.order.orderid,
          charge: this.payment.data.id,
          amount: this.amount
        })
        .subscribe(
          (payment: Payment) => {
            this.editService.payments.push(payment);
            this.saving = false;
            this.hideModal();
          },
          err => {
            this.saving = false;
          }
        );
    }
    if (this.payment.type === 'PayPal') {
      this.paypalService
        .create({
          order: this.order._id,
          orderid: this.order.orderid,
          sale_id: this.payment.data.transactions[0].related_resources[0].sale
            .id,
          amount: this.amount
        })
        .subscribe(
          (payment: Payment) => {
            this.editService.payments.push(payment);
            this.saving = false;
            this.hideModal();
          },
          err => {
            this.saving = false;
          }
        );
    }
  }

  hideModal() {
    this.bsModalRef.hide();
  }
}
