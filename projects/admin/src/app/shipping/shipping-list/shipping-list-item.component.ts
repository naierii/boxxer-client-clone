import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Shipping } from '@global/models/shipping';

@Component({
  selector: 'bx-shipping-list-item, [bx-shipping-list-item]',
  templateUrl: './shipping-list-item.component.html',
  styleUrls: ['./shipping-list-item.component.scss']
})
export class ShippingListItemComponent {
  @Input() item: Shipping;
  @Output() onDeleted = new EventEmitter<string>();
  delete(id: string) {
    this.onDeleted.emit(id);
  }
}
