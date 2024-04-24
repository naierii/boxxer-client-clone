import { CustomProductSetting } from '@global/models/custom-product-setting';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector:
    'bx-custom-products-settings-item, [bx-custom-products-settings-item]',
  templateUrl: './custom-products-settings-item.component.html',
  styles: []
})
export class CustomProductsSettingsItemComponent {
  @Input() item: CustomProductSetting;
  @Output() onDeleted = new EventEmitter<string>();
  delete(id: string) {
    this.onDeleted.emit(id);
  }
}
