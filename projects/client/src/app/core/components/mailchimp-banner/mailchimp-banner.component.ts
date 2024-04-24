import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from '@gorniv/ngx-universal';

@Component({
  selector: 'bx-mailchimp-banner',
  templateUrl: './mailchimp-banner.component.html',
  styleUrls: ['./mailchimp-banner.component.scss']
})
export class MailchimpBannerComponent implements OnInit {
  constructor(private cookieService: CookieService, private router: Router) {}

  ngOnInit() {}

  closePopup() {
    this.cookieService.put('bx-mailchimp-sticky', 'true', {
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    });
  }

  goToSignUp() {
    this.closePopup();
    this.router.navigate(['/', 'newsletter']);
  }
}
