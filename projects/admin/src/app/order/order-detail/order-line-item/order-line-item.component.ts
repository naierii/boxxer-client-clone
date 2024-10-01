import { Product } from '@global/models/product';
import { Order } from '@global/models/order';
import { LineItem } from '@global/models/line-item';
import { Component, OnInit, Input, Output, EventEmitter,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'bx-order-line-item, [bx-order-line-item]',
  templateUrl: './order-line-item.component.html',
})
export class OrderLineItemComponent implements OnInit {
  @Input()
  item: LineItem;
  @Input()
  order: Order;
  @Output()
  editItem = new EventEmitter<LineItem>();
  modalRef?: BsModalRef;
  imagelink?: string;
  scaleValue=100
  constructor(
    private modalService: BsModalService,) { }

  ngOnInit() {
    // console.log(this.item);
  }

  openEditLineItem() {
    this.editItem.emit(this.item);
  }

  getReadyMadeImage(variation: Product) {
    if (!variation) {
      return null;
    }
    if (variation.image) {
      return variation.image.key;
    } else if (variation.product_display.image) {
      return variation.product_display.image.key;
    } else if (variation.product_display.images.length) {
      return variation.product_display.images[0].key;
    } else {
      return null;
    }
  }
  openModal(template: TemplateRef<void>,link:string) {
    this.scaleValue=100    
    this.imagelink = `https://img.boxxerworld.com/${link}`;
    this.modalRef = this.modalService.show(template,Object.assign({}, { class: 'modal-lg' }));
  }
  zoomIn() {
    if (this.scaleValue < 250) {
      this.scaleValue += 1; // Increase scale
    }
  }

  zoomOut() {
    if (this.scaleValue > 100) {
      this.scaleValue -= 1;
    }
  }
  onScroll(event: WheelEvent): void {
    event.preventDefault(); // Prevent default scrolling behavior
    if (event.deltaY < 0) {
      // Zoom in
      this.zoomIn()
    } else {
      // Zoom out
      this.zoomOut()
    }
  }
  getScaleStyle() {
    return {
      transform: `scale(${this.scaleValue}%)`,
    };
  }
  removeLineItem() { }
}
