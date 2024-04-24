import { PlatformService } from '@app/shared-main/services/platform.service';
import { Injectable, NgZone } from '@angular/core';

declare var Tawk_API: any;

@Injectable({
  providedIn: 'root'
})
export class TawkService {
  loaded = false;
  constructor(private ps: PlatformService, private zone: NgZone) {}

  get tawkLoaded() {
    return this.ps.isBrowser
      ? this.ps.getNativeWindow().hasOwnProperty('Tawk_API')
      : false;
  }

  toggle() {
    if (this.tawkLoaded) {
      this.zone.runOutsideAngular(() => {
        Tawk_API.toggle();
      });
    }
  }

  setAttributes(values: any) {
    if (this.tawkLoaded) {
      this.zone.runOutsideAngular(() => {
        Tawk_API.setAttributes(values, err => {});
      });
    }
  }

  load() {
    if (this.ps.isServer) {
      return;
    }

    if (!this.ps.getNativeWindow().hasOwnProperty('Tawk_API')) {
      this.zone.runOutsideAngular(() => {
        const script = this.ps.getNativeDocument().createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://embed.tawk.to/5b6ec498f31d0f771d83b2bf/default';
        script.setAttribute('crossorigin', '*');
        this.ps.getNativeDocument().body.appendChild(script);
        this.loaded = true;
      });
    } else {
      this.loaded = true;
    }
  }
}
