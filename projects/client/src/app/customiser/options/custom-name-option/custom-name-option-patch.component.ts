import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NameType } from '@global/models/custom-setting';
import { Material } from '@global/models/material';

@Component({
  selector: 'bx-custom-name-option-patch',
  templateUrl: './custom-name-option-patch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomNameOptionPatchComponent {
  @Input()
  form: FormGroup;
  @Input()
  type: NameType;
  @Input()
  selectedPatch: Material;
  @Output()
  namePatchSelected: EventEmitter<Material> = new EventEmitter<Material>();
  constructor() {}

  patchSelected(material: Material) {
    this.namePatchSelected.emit(material);
  }
}
