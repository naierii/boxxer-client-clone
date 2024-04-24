import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bx-category-item, [bx-category-item]',
  templateUrl: './category-item.component.html'
})
export class CategoryItemComponent {
  @Input() item: any;
  @Output() onDeleted = new EventEmitter<string>();

  delete(id: string) {
    this.onDeleted.emit(id);
  }
}
