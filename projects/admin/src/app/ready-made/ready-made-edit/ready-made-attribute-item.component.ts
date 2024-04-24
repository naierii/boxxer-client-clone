import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'bx-ready-made-attribute-item',
  templateUrl: './ready-made-attribute-item.component.html',
  styles: []
})
export class ReadyMadeAttributeItemComponent implements OnInit {
  @Input()
  group: FormGroup;
  constructor() {}

  ngOnInit() {}
}
