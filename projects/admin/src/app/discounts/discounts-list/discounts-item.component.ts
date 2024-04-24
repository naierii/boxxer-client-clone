import { Discount } from './../discount';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bx-discounts-item, [bx-discounts-item]',
  templateUrl: './discounts-item.component.html'
})
export class DiscountsItemComponent {
  @Input() discount: Discount;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDeleted = new EventEmitter<string>();
  delete(id: string) {
    this.onDeleted.emit(id);
  }
}
