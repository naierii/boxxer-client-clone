import { BoxxerLogo } from '@global/models/custom-design';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'bx-svg-logo, [bx-svg-logo]',
  templateUrl: './svg-logo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgLogoComponent {
  @Input() logo: BoxxerLogo;
  constructor() {}
}
