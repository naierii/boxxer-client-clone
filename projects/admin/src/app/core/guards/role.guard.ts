import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs';
@Injectable()
export class RoleGuard implements CanActivate, CanActivateChild {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const data: any = route.data;
    return this.checkRole(data);
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.canActivate(route, state);
  }
  checkRole(data: any) {
    if (data.roles) {
      const hasRole = this.auth.checkRoles(data.roles);
      if (!hasRole && this.auth.loggedIn()) {
        if (this.auth.checkRoles(['seo'])) {
          this.router.navigate(['/custom-products']);
        } else {
          this.router.navigate(['/error/forbidden']);
        }
      }
      return hasRole;
    }
    return true;
  }
}
