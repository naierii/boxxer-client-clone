import { Injectable } from '@angular/core';
import { Angulartics2 } from 'angulartics2';
import { DataLayerService } from '@app/core/services/data-layer.service';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';
import { Angulartics2Facebook } from 'angulartics2/facebook';
import { CookieService } from '@gorniv/ngx-universal';
declare const fbq: any;
@Injectable()
export class CookieLawService {
  cookieName = 'cookie_consent_given';
  EU = [
    'AT',
    'BE',
    'BG',
    'HR',
    'CZ',
    'CY',
    'DK',
    'EE',
    'FI',
    'FR',
    'DE',
    'EL',
    'HU',
    'IE',
    'IT',
    'LV',
    'LT',
    'LU',
    'MT',
    'NL',
    'PL',
    'PT',
    'SK',
    'SI',
    'ES',
    'SE',
    'GB',
    'UK',
    'HR',
    'CY',
    'DK',
    'EE',
    'FR',
    'DE',
    'LV',
    'LT',
    'NL',
    'PT',
    'ES'
  ];
  constructor(
    private cookieService: CookieService,
    private dataLayer: DataLayerService,
    private angulartics2: Angulartics2,
    private angulartics2GoogleTagManager: Angulartics2GoogleTagManager,
    private angulartics2Facebook: Angulartics2Facebook
  ) {}

  public seen(code: string): boolean {
    if (this.EU.indexOf(code) === -1) {
      this.setCookie(this.cookieName, 'allow');
      this.dataLayer.marketingAllowed();
      this.startTracking();
      return true;
    }

    if (
      this.cookieService.get(this.cookieName) &&
      this.cookieService.get(this.cookieName) === 'allow'
    ) {
      this.dataLayer.marketingAllowed();
      this.startTracking();
    }

    return this.cookieExisits(this.cookieName);
  }

  startTracking() {
    this.angulartics2GoogleTagManager.startTracking();
    this.angulartics2Facebook.startTracking();
    if (typeof fbq !== 'undefined') {
      fbq('consent', 'grant');
    }
  }

  public storeCookie(value: string): void {
    return this.setCookie(this.cookieName, value);
  }

  private cookieExisits(name: string): boolean {
    if (this.cookieService.get(name)) {
      return true;
    }

    return false;
  }

  private setCookie(name: string, value: string): void {
    this.cookieService.put(name, value, {
      expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
    });
  }
}
