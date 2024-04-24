import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Image } from '@global/models/image';

@Component({
  selector: 'bx-expenses-popup',
  templateUrl: './expenses-popup.component.html',
  styles: [],
})
export class ExpensesPopupComponent implements OnInit {
  public images: Image[];
  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {}

  hideModal() {
    this.bsModalRef.hide();
  }
}
