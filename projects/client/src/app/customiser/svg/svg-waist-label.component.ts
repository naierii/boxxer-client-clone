import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bx-svg-waist-label, [bx-svg-waist-label]',
  templateUrl: './svg-waist-label.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgWaistLabelComponent {
  @Input() position: any;
  constructor() {}
}
