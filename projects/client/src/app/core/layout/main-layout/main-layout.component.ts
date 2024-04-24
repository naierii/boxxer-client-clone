import { Component } from '@angular/core';
import { AuthService } from '@app/core/services/auth.service';
import { CookieService } from '@gorniv/ngx-universal';

@Component({
  selector: 'bx-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  constructor(
    private cookieService: CookieService,
    private auth: AuthService
  ) {}
  get showMailchimp() {
    const cookie = this.cookieService.get('bx-mailchimp-sticky');
    return (
      (!this.auth.loggedIn() && !cookie) ||
      (this.auth.user && !this.auth.user.mailchimp && !cookie)
    );
  }
}
