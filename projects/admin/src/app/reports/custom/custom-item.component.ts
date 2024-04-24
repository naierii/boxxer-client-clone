import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bx-custom-item, [bx-custom-item]',
  templateUrl: './custom-item.component.html',
  styles: []
})
export class CustomItemComponent implements OnInit {
  @Input() sale: any;
  constructor() {}

  ngOnInit() {}
}
