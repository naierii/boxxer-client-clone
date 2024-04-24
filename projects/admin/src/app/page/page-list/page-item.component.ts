import { Page } from './../page';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bx-page-item, [bx-page-item]',
  templateUrl: './page-item.component.html'
})
export class PageItemComponent {
  @Input() item: Page;
  @Output() onDeleted = new EventEmitter<string>();
  delete(id: string) {
    this.onDeleted.emit(id);
  }
}
