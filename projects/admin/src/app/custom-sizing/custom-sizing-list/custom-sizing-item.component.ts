import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CustomProductSize } from '@global/models/custom-product-size';

@Component({
  selector: 'bx-custom-sizing-item, [bx-custom-sizing-item]',
  templateUrl: './custom-sizing-item.component.html'
})
export class CustomSizingItemComponent {
  @Input() item: CustomProductSize;
  @Output() onDeleted = new EventEmitter<string>();
  delete(id: string) {
    this.onDeleted.emit(id);
  }
}
