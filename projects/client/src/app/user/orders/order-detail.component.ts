import { Component } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { Observable, of } from 'rxjs';
import { Order } from '@global/models/order';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Product } from '@global/models/product';

@Component({
  selector: 'bx-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent {
  order$: Observable<Order>;
  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.order$ = route.params.pipe(
      switchMap((params) =>
        params.orderid ? this.api.get('users/orders', params.orderid) : of(null)
      )
    );
  }

  getReadyMadeImage(variation: Product) {
    if (!variation) {
      return null;
    }
    if (variation.image) {
      return variation.image.key;
    } else if (variation.product_display.image) {
      return variation.product_display.image.key;
    } else if (variation.product_display.images.length) {
      return variation.product_display.images[0].key;
    } else {
      return null;
    }
  }
}
