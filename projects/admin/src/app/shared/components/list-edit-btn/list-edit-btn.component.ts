import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bx-list-edit-btn',
  templateUrl: './list-edit-btn.component.html'
})
export class ListEditBtnComponent {
  @Input()
  item: any;
  @Input()
  canDelete = true;
  @Output()
  onDeleted = new EventEmitter<string>();
  constructor() {}

  delete(value: string) {
    this.onDeleted.emit(value);
  }
}
