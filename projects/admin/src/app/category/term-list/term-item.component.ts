import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Term } from '@global/models/term';

@Component({
  selector: 'bx-term-item, [bx-term-item]',
  templateUrl: './term-item.component.html',
  styleUrls: ['./term-item.component.scss']
})
export class TermItemComponent implements OnInit {
  @Input()
  item: Term;
  @Output()
  onDeleted = new EventEmitter<string>();
  ngOnInit() {}
  delete(id: string) {
    this.onDeleted.emit(id);
  }
}
