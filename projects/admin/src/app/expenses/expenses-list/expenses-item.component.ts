import { ExpensesPopupComponent } from './../expenses-popup/expenses-popup.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'bx-expenses-item, [bx-expenses-item]',
  templateUrl: './expenses-item.component.html',
  styles: []
})
export class ExpensesItemComponent {
  @Input() item: any;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDeleted = new EventEmitter<string>();
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
  delete(id: string) {
    this.onDeleted.emit(id);
  }

  showReceipt(images) {
    this.bsModalRef = this.modalService.show(ExpensesPopupComponent, {
      class: 'modal-lg'
    });
    this.bsModalRef.content.images = images;
  }
}
