import { Size } from '@global/models/size';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bx-sizing-item, [bx-sizing-item]',
  templateUrl: './sizing-item.component.html'
})
export class SizingItemComponent {
  @Input() item: Size;
  @Output() onDeleted = new EventEmitter<string>();
  delete(id: string) {
    this.onDeleted.emit(id);
  }
}
