import { take, map } from 'rxjs/operators';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Order } from '@global/models/order';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { SocketService } from '@admin/shared/services/socket.service';
import { Observable } from 'rxjs';
import { Shipping } from '@global/models/shipping';
import { OrderEditService } from '@admin/order/order-edit.service';

@Component({
  selector: 'bx-order-shipping',
  templateUrl: './order-shipping.component.html',
  providers: [
    {
      provide: 'OrderService',
      useClass: SocketService
    },
    {
      provide: 'ShippingService',
      useClass: SocketService
    }
  ]
})
export class OrderShippingComponent implements OnInit, OnDestroy {
  public order: Order;
  public saving = false;
  shippingForm: FormGroup;
  shipping$: Observable<Shipping>;
  constructor(
    public bsModalRef: BsModalRef,
    @Inject('OrderService') private orderService: SocketService,
    @Inject('ShippingService') private shippingService: SocketService,
    private fb: FormBuilder,
    public editService: OrderEditService
  ) {
    orderService.setup('order');
    shippingService.setup('shipping');
  }

  ngOnInit() {
    this.shipping$ = this.shippingService
      .find({ shipping_type: 'Flat' })
      .pipe(map((resp: any) => resp.data));
    this.shippingForm = this.fb.group({
      shippingmethod: [],
      update_shipping: [true]
    });
  }

  setUp() {
    if (this.order && this.order.shippingmethod) {
      this.shippingForm
        .get('shippingmethod')
        .setValue(this.order.shippingmethod);
    }
  }

  saveShipping(values: any) {
    this.saving = true;
    this.orderService
      .update(this.order.orderid, values)
      .pipe(
        untilComponentDestroyed(this),
        take(1)
      )
      .subscribe((resp: any) => {
        this.editService.order = resp;
        this.hideModal();
        this.saving = false;
      });
  }

  hideModal() {
    this.bsModalRef.hide();
  }

  ngOnDestroy() {}
}
