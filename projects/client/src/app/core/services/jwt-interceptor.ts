import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector, Optional, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '@app/cart/cart.service';
import { PlatformService } from '@app/shared-main/services/platform.service';
import { Observable, throwError, of, concat } from 'rxjs';
import { catchError, retryWhen, flatMap, delay, take } from 'rxjs/operators';
import { LoadingService } from '@app/core/modules/loading/loading.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from '@gorniv/ngx-universal';
import { REQUEST } from '@nguniversal/express-engine/tokens';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  constructor(
    @Optional() @Inject(REQUEST) private httpRequest: any,
    private injector: Injector,
    private ps: PlatformService,
    private toastr: ToastrService,
    private cookieService: CookieService
  ) {}

  public get router(): Router {
    return this.injector.get(Router);
  }

  public get loading(): LoadingService {
    return this.injector.get(LoadingService);
  }

  public get cart(): CartService {
    return this.injector.get(CartService);
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.httpRequest) {
      const ip =
        this.httpRequest.headers['x-forwarded-for'] ||
        (this.httpRequest.connection &&
          this.httpRequest.connection.remoteAddress) ||
        this.httpRequest.socket.remoteAddress ||
        (this.httpRequest.connection.socket &&
          this.httpRequest.connection.socket.remoteAddress);

      if (ip) {
        req = req.clone({
          setHeaders: { 'X-Forwarded-For': ip },
        });
      }
    }

    const matches = req.url.match(
      /^https?\:\/\/(?!(?:www\.)?(?:cloudinary\.com))([^\/:?#]+)(?:[\/:?#]|$)/i
    );
    const domain = matches && matches[1];

    if (
      domain !== 'boxxer-images.ams3.cdn.digitaloceanspaces.com' &&
      domain !== 'img.boxxerworld.com'
    ) {
      req = req.clone({
        withCredentials: true,
      });

      const token: string = this.cookieService.get('boxxer-auth-token');

      if (token) {
        req = req.clone({
          setHeaders: { Authorization: token },
        });
      }

      const cart_token = this.cookieService.get('cart-token');
      if (cart_token) {
        req = req.clone({
          setHeaders: { 'Cart-Token': cart_token },
        });
      }
    }
    return next.handle(req).pipe(
      retryWhen((err) => {
        return err.pipe(
          flatMap((error: any) => {
            if (error.status === 0) {
              return of(error).pipe(delay(1000));
            }
            return throwError(error);
          }),
          take(5),
          (o) => concat(o, throwError('Request failed after 5 retries.'))
        );
      }),
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse && this.ps.isBrowser) {
          let showMessage = true;

          if (err.status === 403 || err.status === 405) {
            this.router.navigate(['/404']);
            showMessage = false;
          }

          if (err.status === 401) {
            if (
              this.router.url === '/login' ||
              this.router.url === '/checkout/shipping'
            ) {
              showMessage = true;
            } else {
              showMessage = false;
              this.router.navigate(['/login']);
            }
          }

          const error = err.error;
          if (
            err.status === 404 &&
            error.data &&
            error.data.reason &&
            error.data.reason === 'cart_expired'
          ) {
            this.cookieService.remove('cart-token');
            showMessage = false;
          }

          if (
            err.status === 404 &&
            error.data &&
            error.data.reason &&
            error.data.reason === 'design_missing'
          ) {
            showMessage = false;
          } else if (
            err.status === 404 &&
            error.data &&
            error.data.reason &&
            error.data.reason === 'cart_expired'
          ) {
            this.cart.removeToken();
            showMessage = false;
          } else if (err.status === 404) {
            this.router.navigate(['/404']);
            showMessage = false;
          }

          if (showMessage) {
            if (err.status === 402) {
              this.toastr.error(
                error ? error.message : err.message,
                'Payment Failed'
              );
            } else {
              this.toastr.error(error ? error.message : err.message);
            }
          }
        }
        this.loading.hide();

        return throwError(err);
      })
    );
  }
}
