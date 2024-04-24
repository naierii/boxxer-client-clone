import { OrderEditService } from './../order-edit.service';
import { Order } from '@global/models/order';
import {
  Component,
  OnInit,
  Input,
  Inject,
  OnDestroy,
  Output,
  EventEmitter
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SocketService } from '@admin/shared/services/socket.service';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { take } from 'rxjs/operators';
import { ToastService } from '@admin/core/services/toast.service';
import { statuses } from '../order-status';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { defineLocale } from 'ngx-bootstrap/chronos';
import { enGbLocale } from 'ngx-bootstrap/locale';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'bx-order-actions',
  templateUrl: './order-actions.component.html',
  providers: [
    {
      provide: 'OrderService',
      useClass: SocketService
    },
    {
      provide: 'ActionService',
      useClass: SocketService
    }
  ]
})
export class OrderActionsComponent implements OnInit, OnDestroy {
  @Input()
  order: Order;
  @Output()
  onUpdate = new EventEmitter<Order>();
  public orderForm: FormGroup;
  statuses = statuses;
  minDate: Date;
  bsConfig: Partial<BsDatepickerConfig>;
  actionsForm: FormGroup;
  actions = [
    {
      id: 'resend-order-confirmation',
      title: 'Resend Order Confirmation'
    }
  ];
  constructor(
    private fb: FormBuilder,
    @Inject('OrderService') private orderService: SocketService,
    @Inject('ActionService') private actionService: SocketService,
    private editService: OrderEditService,
    private toast: ToastService
  ) {
    orderService.setup('order');
    actionService.setup('order/action');
    this.minDate = new Date();
    defineLocale(enGbLocale.abbr, enGbLocale);
    this.bsConfig = Object.assign(
      {},
      {
        containerClass: 'theme-blue',
        showWeekNumbers: false,
        locale: enGbLocale.abbr,
        dateInputFormat: 'DD/MM/YY'
      }
    );
    fromEvent(orderService.service, 'patched').subscribe((resp: any) => {
      if (this.order._id === resp._id) {
        this.order = resp;
        this.formSetup();
      }
    });
  }

  ngOnInit() {
    this.formSetup();
  }

  formSetup() {
    this.orderForm = this.fb.group({
      tracking: [this.order.tracking],
      courier: [this.order.courier],
      status: [this.order.status],
      dueDate: [this.order.dueDate ? new Date(this.order.dueDate) : null],
      sendByDate: [
        this.order.sendByDate ? new Date(this.order.sendByDate) : null
      ],
      dueDateConfirmed: [this.order.dueDateConfirmed ? true : false]
    });
    this.actionsForm = this.fb.group({
      action: [],
      orderid: [this.order.orderid]
    });
  }

  updateOrder(data: any) {
    this.orderService
      .update(this.order.orderid, data)
      .pipe(
        take(1),
        untilComponentDestroyed(this)
      )
      .subscribe((resp: any) => {
        this.editService.order = resp;
        this.toast.showToast(
          'success',
          'Updated',
          `Order #${this.editService.order.orderid} have been updated`
        );
        this.onUpdate.emit(resp);
      });
  }

  applyAction(data: any) {
    if (!data.orderid) {
      return;
    }
    this.actionService.create(data).subscribe(resp => {
      const action = this.actions.find(a => a.id === data.action);
      this.toast.showToast('success', 'Complete', action.title);
      this.actionsForm.get('action').setValue(null);
    });
  }

  ngOnDestroy() {}
}
