import { Component, Input } from '@angular/core';

@Component({
  selector: 'bx-sales-item, [bx-sales-item]',
  templateUrl: './sales-item.component.html'
})
export class SalesItemComponent {
  @Input() sale: any;
  get average() {
    return this.sale.total / this.sale.transactions;
  }
}
