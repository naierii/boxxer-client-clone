import { Size } from '@global/models/size';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'bx-custom-sizes-item, [bx-custom-sizes-item]',
  templateUrl: './custom-sizes-item.component.html',
  styleUrls: ['./custom-sizes-item.component.scss'],
})
export class CustomSizesItemComponent {
  @Input()
  item: Size;
}
