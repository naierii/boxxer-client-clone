import { Component, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'bx-page-info',
  templateUrl: './page-info.component.html',
  styleUrls: ['./page-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageInfoComponent {
  @HostBinding('class.page-info') addClass() {
    return true;
  }
}
