import { ProductionPicturesAddComponent } from './production-pictures-add.component';
import { Component, OnInit, Input } from '@angular/core';
import { Order } from '@global/models/order';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Production } from '@global/models/production';

@Component({
  selector: 'bx-production-pictures',
  templateUrl: './production-pictures.component.html',
  styles: []
})
export class ProductionPicturesComponent {
  @Input() productions: Production[];
  @Input() order: Order;
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  addProduction() {
    this.bsModalRef = this.modalService.show(ProductionPicturesAddComponent, {
      class: 'modal-lg'
    });
    this.bsModalRef.content.order = this.order;
    this.bsModalRef.content.setUp();
  }
}
