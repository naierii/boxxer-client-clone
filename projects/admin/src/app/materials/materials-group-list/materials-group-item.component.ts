import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  Output,
  EventEmitter
} from '@angular/core';
import { MaterialGroup } from '@global/models/material-group';

@Component({
  selector: 'bx-materials-group-item, [bx-materials-group-item]',
  templateUrl: './materials-group-item.component.html',
  styles: []
})
export class MaterialsGroupItemComponent implements OnDestroy {
  @Input() item: MaterialGroup;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDeleted = new EventEmitter<string>();

  constructor() {}

  delete(id: string) {
    this.onDeleted.emit(id);
  }

  ngOnDestroy() {}
}
