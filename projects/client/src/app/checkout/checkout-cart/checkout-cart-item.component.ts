import { Component, Input } from '@angular/core';
import { LineItem } from '@global/models/line-item';
import { Product } from '@global/models/product';

@Component({
  selector: 'bx-checkout-cart-item',
  templateUrl: './checkout-cart-item.component.html',
  styleUrls: ['./checkout-cart-item.component.scss'],
})
export class CheckoutCartItemComponent {
  @Input()
  cart: LineItem;

  constructor() {}

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
