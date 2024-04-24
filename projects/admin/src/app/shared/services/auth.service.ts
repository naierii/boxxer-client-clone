import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppStorage } from '@global/forStorage/universal.inject';
import * as decode from 'jwt-decode';
import * as intersection from 'lodash.intersection';
import { from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl = '/';
  cookie = 'boxxer-auth-token';
  constructor(
    @Inject(AppStorage) private appStorage: Storage,
    private router: Router,
    private api: ApiService
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
    return this.appStorage.getItem('boxxer-auth-token');
  }

  login(email: string, password: string) {
    return from(
      this.api.create('authentication', {
        strategy: 'local',
        email,
        password
      })
    ).pipe(
      switchMap((resp: any) => {
        this.appStorage.setItem('boxxer-auth-token', resp.accessToken);
        this.api.onEnd();
        return this.getUser();
      })
    );
  }

  logout() {
    this.appStorage.removeItem('boxxer-auth-token');
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
