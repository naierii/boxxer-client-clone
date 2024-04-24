import { Component, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'bx-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageHeaderComponent {
  @HostBinding('class.title-bar') addClass() {
    return true;
  }
}
