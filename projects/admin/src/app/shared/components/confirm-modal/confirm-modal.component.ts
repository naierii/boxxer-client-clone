import { ModalDirective } from 'ngx-bootstrap/modal';
import { Component, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bx-confirm-modal',
  templateUrl: './confirm-modal.component.html'
})
export class ConfirmModalComponent {
  id: string;
  @ViewChild('confirmModal', { static: true }) public confirmModal: ModalDirective;
  @Output() confirm = new EventEmitter();

  public continue(): void {
    this.confirm.emit(this.id);
  }

  public show(id: string): void {
    this.id = id;
    this.confirmModal.show();
  }

  public hide(): void {
    this.confirmModal.hide();
  }
}
