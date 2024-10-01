import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GraphicPrice } from '@global/models/graphic-price';

@Component({
  selector: 'bx-graphic-price-item, [bx-graphic-price-item]',
  templateUrl: './graphic-price-item.component.html',
  styles: []
})
export class GraphicPriceItemComponent {
  @Input() item: GraphicPrice;
  @Output() onDeleted = new EventEmitter<string>();
  obj={
    'Logo':"Graphic Bank",
    'Upload':"Print Upload",
    'UploadEmbroidery':"Embroidery Upload",
    'Flag':"Flag"
  }
  delete(id: string) {
    this.onDeleted.emit(id);
  }
}