import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CustomProductStyle } from '@global/models/custom-product-style';

@Component({
  selector: 'bx-custom-styles-item, [bx-custom-styles-item]',
  templateUrl: './custom-styles-item.component.html'
})
export class CustomStylesItemComponent {
  @Input() item: CustomProductStyle;
  @Output() onDeleted = new EventEmitter<string>();

  delete(id: string) {
    this.onDeleted.emit(id);
  }
}
