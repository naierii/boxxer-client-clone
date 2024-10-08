import { Component, Input } from '@angular/core';
import { footerNav } from './../../_menu-footer';
import { footerNav2 } from './../../_menu-footer2';
import { footerNav3 } from './../../_menu-footer3';

@Component({
  selector: 'bx-footer, [bx-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input()
  checkout = false;
  public footerNav = footerNav;
  public footerNav2 = footerNav2;
  public footerNav3 = footerNav3;

  constructor() {}
  shareViaEmail() {
    window.open(
      'mailto:?subject=Check%20this%20QR%20Code&body=Here%20is%20a%20QR%20code%20you%20might%20need:%20[<img src="https://res.cloudinary.com/dot-to-dot-design/w_868,f_auto,q_auto/box-img/content/1545046342086/boxxerworld-christmas-gift.jpg" />]',
      '_blank'
    );
  }
}
