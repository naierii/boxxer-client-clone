import { Component, OnInit, Input } from '@angular/core';
import { Order } from '@global/models/order';

@Component({
  selector: 'bx-order-item, [bx-order-item]',
  templateUrl: './order-item.component.html'
})
export class OrderItemComponent implements OnInit {
  @Input() order: Order;
  constructor() {}

  ngOnInit() {}
}
