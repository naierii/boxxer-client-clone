import { Order } from '@global/models/order';
import { Component } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'bx-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  orders$: Observable<Order[]>;
  constructor(private orderService: ApiService) {
    this.orders$ = this.orderService
      .find('users/orders', { $sort: { createdAt: -1 } })
      .pipe(map((resp: any) => resp.data));
  }
}
