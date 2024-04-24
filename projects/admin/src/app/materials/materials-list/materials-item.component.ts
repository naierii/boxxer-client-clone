import { Material } from '@global/models/material';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'bx-materials-item, [bx-materials-item]',
  templateUrl: './materials-item.component.html'
})
export class MaterialsItemComponent implements OnDestroy {
  @Input() item: Material;
  @Output() onDeleted = new EventEmitter<string>();

  constructor() {}

  delete(id: string) {
    this.onDeleted.emit(id);
  }

  ngOnDestroy() {}
}
