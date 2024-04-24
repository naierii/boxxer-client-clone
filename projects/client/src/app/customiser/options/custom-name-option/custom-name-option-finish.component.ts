import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NameType, NameFinish } from '@global/models/custom-setting';
import { Material } from '@global/models/material';
import * as fromCustomiser from './../../reducers';
import { Store, select } from '@ngrx/store';
import { CustomSetting } from '@global/models/custom-setting';
import { Observable } from 'rxjs';
import { MatStep } from '@angular/material/stepper';

@Component({
  selector: 'bx-custom-name-option-finish',
  templateUrl: './custom-name-option-finish.component.html',
  styleUrls: ['./custom-name-option-finish.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomNameOptionFinishComponent {
  @Input()
  form: FormGroup;
  @Input()
  step: MatStep;
  @Input()
  type: NameType;
  @Input()
  selectedFinish: NameFinish;
  @Input()
  selectedCrystal: Material;
  @Output()
  nameColourCrystalSelected: EventEmitter<Material> = new EventEmitter<
    Material
  >();
  @Output()
  nameFinishSelected: EventEmitter<NameFinish> = new EventEmitter<NameFinish>();
  customSettings$: Observable<CustomSetting>;
  constructor(store: Store<fromCustomiser.State>) {
    this.customSettings$ = store.pipe(select(fromCustomiser.getCustomSettings));
  }

  finishSelected(finish: NameFinish) {
    this.form.get('finish').setValue(finish._id);
    this.nameFinishSelected.emit(finish);
  }

  colourCrystalSelected(material: Material) {
    this.nameColourCrystalSelected.emit(material);
  }
}
