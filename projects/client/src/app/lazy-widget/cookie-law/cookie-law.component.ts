import { CookieLawService } from './cookie-law.service';
import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataLayerService } from '@app/core/services/data-layer.service';
import { takeUntil } from 'rxjs/operators';
import { componentDestroyed } from '@w11k/ngx-componentdestroyed';
import { CookieService } from '@gorniv/ngx-universal';

@Component({
  selector: 'bx-cookie-law',
  templateUrl: './cookie-law.component.html',
  styleUrls: ['./cookie-law.component.scss']
})
export class CookieLawComponent implements OnInit, OnDestroy {
  @HostBinding('attr.seen')
  public seen = true;
  countryCode = 'GB';
  public settingsForm: FormGroup;
  showSettings = false;
  marketing = 'allow';
  constructor(
    private _service: CookieLawService,
    private fb: FormBuilder,
    private dataLayer: DataLayerService,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    this.countryCode = this.cookieService.get('country') || 'GB';
    this.settingsForm = this.fb.group({
      analytics: [true]
    });
    this.settingsForm
      .get('analytics')
      .valueChanges.pipe(takeUntil(componentDestroyed(this)))
      .subscribe(allow => {
        this.marketing = allow ? 'allow' : 'dismiss';
      });
    this.seen = this._service.seen(this.countryCode);
  }

  settings() {
    this.showSettings = !this.showSettings;
  }

  dismiss(value: string) {
    if (this.settingsForm.get('analytics').value) {
      this.dataLayer.marketingAllowed();
      this._service.startTracking();
    }
    this._service.storeCookie(value);

    this.seen = true;
  }

  ngOnDestroy() {}
}
