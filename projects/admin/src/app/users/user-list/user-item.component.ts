import { User } from './../user';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bx-user-item, [bx-user-item]',
  templateUrl: './user-item.component.html'
})
export class UserItemComponent {
  @Input()
  user: User;
  @Output()
  onDeleted = new EventEmitter<number>();

  deleteUser(id: number) {
    this.onDeleted.emit(id);
  }
}
