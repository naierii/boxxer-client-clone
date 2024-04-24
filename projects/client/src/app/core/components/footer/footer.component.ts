import { Component, Input } from '@angular/core';
import { footerNav } from './../../_menu-footer';

@Component({
  selector: 'bx-footer, [bx-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input()
  checkout = false;
  public footerNav = footerNav;

  constructor() {}
}
