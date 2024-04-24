import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductDisplay } from '@global/models/product-display';

@Component({
  selector: 'bx-ready-made-item, [bx-ready-made-item]',
  templateUrl: './ready-made-item.component.html'
})
export class ReadyMadeItemComponent {
  @Input() item: ProductDisplay;
  @Output() onDeleted = new EventEmitter<string>();
  deletePage(id: string) {
    this.onDeleted.emit(id);
  }
}
