import { Component, Input } from '@angular/core';
import { footerNav } from './../../_menu-footer';
import { footerNav2 } from './../../_menu-footer2';
import { footerNav3 } from './../../_menu-footer3';

@Component({
  selector: 'bx-footer, [bx-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input()
  checkout = false;
  public footerNav = footerNav;
  public footerNav2 = footerNav2;
  public footerNav3 = footerNav3;

  constructor() {}
}
