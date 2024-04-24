import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TermMaterial } from '@global/models/custom-setting';
import { Material } from '@global/models/material';

@Component({
  selector: 'bx-custom-material-group',
  templateUrl: './custom-material-group.component.html',
  styleUrls: [
    './custom-material-group.component.scss',
    './../../scss/options.scss',
  ],
})
export class CustomMaterialGroupComponent {
  @Input()
  large: boolean;
  @Input()
  materialGroups: TermMaterial[];
  @Input()
  materials: Material[];
  @Input()
  selectedMaterial: Material;
  @Input()
  basePrice: number;
  @Input()
  materialPrice: boolean;
  @Output()
  materialColourSelected: EventEmitter<Material> = new EventEmitter<Material>();

  constructor() {}

  colourSelected(material: Material) {
    this.materialColourSelected.emit(material);
  }

  getPrice(price) {
    if (this.materialPrice) {
      return price;
    }
    const material_price = price ? price : 0;
    return this.basePrice * material_price;
  }
}
