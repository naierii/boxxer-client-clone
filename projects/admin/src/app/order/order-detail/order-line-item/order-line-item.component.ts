import { Product } from '@global/models/product';
import { Order } from '@global/models/order';
import { LineItem } from '@global/models/line-item';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bx-order-line-item, [bx-order-line-item]',
  templateUrl: './order-line-item.component.html',
})
export class OrderLineItemComponent implements OnInit {
  @Input()
  item: LineItem;
  @Input()
  order: Order;
  @Output()
  editItem = new EventEmitter<LineItem>();
  constructor() { }

  ngOnInit() {
    // console.log(this.item);
  }

  openEditLineItem() {
    this.editItem.emit(this.item);
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

  removeLineItem() { }
}
