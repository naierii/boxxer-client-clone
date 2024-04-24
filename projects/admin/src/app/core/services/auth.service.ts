import { FeathersSocketService } from '@admin/shared/services/feathers.service';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppStorage } from '@global/forStorage/universal.inject';
import * as decode from 'jwt-decode';
import * as intersection from 'lodash.intersection';
import { throwError } from 'rxjs';

import { ToastService } from './toast.service';

@Injectable()
export class AuthService {
  public redirectUrl = '/';

  constructor(
    @Inject(AppStorage) private appStorage: Storage,
    private router: Router,
    private feathers: FeathersSocketService,
    private toast: ToastService
  ) {}

  get token() {
    return this.appStorage.getItem('boxxer-auth-token');
  }

  getUser() {
    if (this.loggedIn()) {
      const decoded = decode(this.token);
      return decoded && decoded.userid ? decoded : null;
    }
  }

  checkRoles(roles: any) {
    const user = this.getUser();
    return intersection(roles, user.roles).length > 0;
  }

  login(email: string, password: string) {
    this.feathers
      .authenticate({
        strategy: 'local',
        email,
        password
      })
      .then(resp => {
        this.router.navigate([this.redirectUrl]);
      })
      .catch(err => this.handleError(err));
  }

  logout() {
    this.feathers.logout();
    this.router.navigateByUrl('/auth/login');
  }

  loggedIn() {
    if (this.token) {
      return this.feathers.app.passport.payloadIsValid(this.token);
    }
    return false;
  }

  private handleError(error: any) {
    if (error && error.code === 404) {
      this.router.navigate(['/404']);
    }
    if ((error && error.code === 403) || (error && error.code === 405)) {
      this.router.navigate(['/404']);
    }

    this.toast.showToast('error', 'Error', error.message);
    return throwError(error);
  }
}
