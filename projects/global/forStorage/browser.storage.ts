import { environment } from '@env/environment';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class CookieStorage implements Storage {
  [index: number]: string;
  [key: string]: any;
  length: number;

  constructor(private cookieService: CookieService) {}

  get domain() {
    return environment.domain;
  }

  clear(): void {
    this.cookieService.removeAll();
  }

  getItem(key: string): string {
    const result = this.cookieService.get(key);
    return result;
  }

  key(index: number): string {
    const result = this.cookieService.getAll().propertyIsEnumerable[index];
    return result;
  }

  removeItem(key: string): void {
    this.cookieService.remove(key, {
      path: '/',
      domain: this.domain
    });
  }

  setItem(key: string, data: string): void {
    this.cookieService.put(key, data, {
      expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
      path: '/',
      domain: this.domain
    });
  }
}
