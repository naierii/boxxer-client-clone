import { ConfirmModalComponent } from '@admin/shared/components/confirm-modal/confirm-modal.component';
import {
  Component,
  Input,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'bx-list-view',
  templateUrl: './list-view.component.html'
})
export class ListViewComponent {
  @Input() pageTitle: string;
  @Input() addNew = true;
  @Output() confirmDelete = new EventEmitter();
  @ViewChild('confirmModal', { static: true }) confirmModal: ConfirmModalComponent;
  constructor() {}

  deleteConfirm(id: string) {
    this.confirmModal.show(id);
  }

  deleteItem(id: string) {
    this.confirmDelete.emit(id);
    this.confirmModal.hide();
  }
}
