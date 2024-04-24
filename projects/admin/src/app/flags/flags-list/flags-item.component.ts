import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { Flag } from '@global/models/flag';

@Component({
  selector: 'bx-flags-item, [bx-flags-item]',
  templateUrl: './flags-item.component.html'
})
export class FlagsItemComponent implements OnDestroy {
  @Input()
  item: Flag;
  @Output()
  onDeleted = new EventEmitter<string>();

  constructor() {}

  delete(id: string) {
    this.onDeleted.emit(id);
  }

  ngOnDestroy() {}
}
