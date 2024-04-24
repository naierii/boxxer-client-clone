import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';

export interface IPlatformService {
  isBrowser: boolean;
  isServer: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  public get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  public get isServer(): boolean {
    return isPlatformServer(this.platformId);
  }

  public getNativeDocument(): Document {
    if (this.isBrowser) {
      return document;
    }
    return {} as Document;
  }

  public getNativeWindow(): Window {
    if (this.isBrowser) {
      return window;
    }
    return {} as Window;
  }
}
