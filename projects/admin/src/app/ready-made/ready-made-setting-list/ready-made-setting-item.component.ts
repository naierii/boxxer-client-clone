import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bx-ready-made-setting-item, [bx-ready-made-setting-item]',
  templateUrl: './ready-made-setting-item.component.html'
})
export class ReadyMadeSettingItemComponent {
  @Input() item: any;
  @Output() onDeleted = new EventEmitter<string>();
  delete(id: string) {
    this.onDeleted.emit(id);
  }
}
