import { Component, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Term } from '@global/models/term';
import { MaterialGroup, DesignArea } from '@global/models/custom-setting';

@Component({
  selector: 'bx-custom-products-setting',
  templateUrl: './custom-products-setting.component.html'
})
export class CustomProductsSettingComponent {
  @Input()
  public group: FormGroup;
  @Input()
  public material_types: Term[];
  @Input()
  public material_groups: MaterialGroup[];
  @Input()
  public design_areas: DesignArea[];
  @Input()
  public index: number;
  get formData() {
    return this.group.get('material_types') as FormArray;
  }
}
