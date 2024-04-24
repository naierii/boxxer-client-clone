import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NameOption } from '@global/models/name-option';

@Component({
  selector: 'bx-custom-names-item, [bx-custom-names-item]',
  templateUrl: './custom-names-item.component.html'
})
export class CustomNamesItemComponent {
  @Input() item: NameOption;
  @Output() onDeleted = new EventEmitter<string>();

  delete(id: string) {
    this.onDeleted.emit(id);
  }
}
