import { CustomDesign } from '@global/models/custom-design';
import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'bx-order-custom-item',
  templateUrl: './order-custom-item.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderCustomItemComponent implements OnInit {
  @Input() design: any;
  constructor() {}

  ngOnInit() {}
}
