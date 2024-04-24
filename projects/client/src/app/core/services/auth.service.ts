import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as decode from 'jwt-decode';
import { of, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as intersection from 'lodash.intersection';
import { ApiService } from './api.service';
import { CookieService } from '@gorniv/ngx-universal';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl = '/';
  cookie = 'boxxer-auth-token';
  constructor(
    private router: Router,
    private api: ApiService,
    private cookieService: CookieService
  ) {}

  decodeToken(token: string): any {
    const payload = decode(token);

    if (this.payloadIsValid(payload)) {
      return of(payload);
    }
    return of({});
  }

  get user() {
    if (this.loggedIn()) {
      const decoded = decode(this.getToken());
      return decoded && decoded.userid ? decoded : null;
    }
  }

  getUser() {
    if (this.getToken()) {
      return this.decodeToken(this.getToken());
    } else {
      return of({});
    }
  }

  checkRoles(roles: any) {
    const user = this.user;
    return user ? intersection(roles, user.roles).length > 0 : false;
  }

  getToken() {
    return this.cookieService.get(this.cookie);
  }

  login(email: string, password: string) {
    this.api.showLoader(true, 'Logging in');
    return from(
      this.api.create('authentication', {
        strategy: 'local',
        email,
        password
      })
    ).pipe(
      switchMap((resp: any) => {
        this.api.onEnd();
        return this.getUser();
      })
    );
  }

  logout() {
    this.cookieService.remove(this.cookie);
    this.router.navigateByUrl('/');
  }

  loggedIn() {
    if (this.getToken()) {
      return this.payloadIsValid(decode(this.getToken()));
    }
    return false;
  }

  private payloadIsValid(payload) {
    return (
      payload && (!payload.exp || payload.exp * 1000 > new Date().getTime())
    );
  }
}
