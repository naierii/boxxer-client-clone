import { EmailContent } from '@global/models/email-content';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bx-email-item, [bx-email-item]',
  templateUrl: './email-item.component.html',
  styles: []
})
export class EmailItemComponent {
  @Input() item: EmailContent;
  @Output() onDeleted = new EventEmitter<string>();
  delete(id: string) {
    this.onDeleted.emit(id);
  }
}
