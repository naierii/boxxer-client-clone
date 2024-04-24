import { CustomProduct } from '@global/models/custom-product';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bx-custom-products-item, [bx-custom-products-item]',
  templateUrl: './custom-products-item.component.html'
})
export class CustomProductsItemComponent {
  @Input() item: CustomProduct;
  @Output() onDeleted = new EventEmitter<string>();
  delete(id: string) {
    this.onDeleted.emit(id);
  }
}
