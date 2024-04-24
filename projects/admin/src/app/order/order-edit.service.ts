import { Production } from '@global/models/production';
import { LineItem } from '@global/models/line-item';
import { Order } from '@global/models/order';
import { Injectable } from '@angular/core';
import { Payment } from '@global/models/payment';

@Injectable()
export class OrderEditService {
  order: Order;
  items: LineItem[] = [];
  payments: Payment[] = [];
  productions: Production[] = [];
  constructor() {}

  updatedLineItem(data: any) {
    this.items = this.items.map(item => {
      if (item._id === data.item._id) {
        item = data.item;
      }
      return item;
    });
    this.order = data.order;
  }

  newLineItem(data: any) {
    this.items.push(data.item);
    this.order = data.order;
  }

  reset() {
    this.order = null;
    this.items = [];
    this.payments = [];
  }
}
