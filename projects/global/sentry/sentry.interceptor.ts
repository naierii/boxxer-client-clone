import { Injectable, Inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse
} from '@angular/common/http';
import { captureMessage, showReportDialog } from '@sentry/browser';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ModuleOptions, OPTIONS } from './tokens';

/**
 * Injectable HTTP interceptor for Sentry.
 */
@Injectable()
export class SentryErrorInterceptor implements HttpInterceptor {
  /**
   * Initializes the sentry connected HTTP interceptor.
   *
   * @param - The module options.
   */
  public constructor(@Inject(OPTIONS) private options: ModuleOptions) {}

  /**
   * Intercepts HTTP requests and handles any HTTP errors.
   *
   * @param - The intercepted request.
   * @returns - An observable with the request
   */
  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<any> {
    return next.handle(request).pipe(
      catchError(response => {
        // log to Sentry
        if (response instanceof HttpErrorResponse && this.filter(response)) {
          captureMessage(this.getMessage(request, response));
        }

        // show report dialog
        if (this.options.dialog) {
          showReportDialog(
            typeof this.options.dialog === 'object' ? this.options.dialog : null
          );
        }

        // re-throw error
        return throwError(response);
      })
    );
  }

  /**
   * Checks if the response should be sent to Sentry.
   *
   * @param - The HttpErrorResponse
   * @returns - An boolean describing if the response should be handled
   */
  private filter(response: HttpErrorResponse): boolean {
    if (
      !this.options.enabled ||
      (this.options.http && this.options.http.enabled === false)
    ) {
      return false;
    }

    // apply whitelist
    if (this.options.http.whitelist && this.options.http.whitelist.length > 0) {
      return this.options.http.whitelist.includes(response.status);
    }

    // apply blacklist
    if (this.options.http.blacklist && this.options.http.blacklist.length > 0) {
      return !this.options.http.blacklist.includes(response.status);
    }

    return true;
  }

  /**
   * Builds the message for capturing.
   *
   * @param - The HTTP request object
   * @param - The HTTP response object
   * @returns - The built message to capture
   */
  private getMessage(
    request: HttpRequest<any>,
    response: HttpErrorResponse
  ): string {
    const defaultMessage = 'Http request failed. ({method}, {status}, {url})';
    const replace = (msg: string) => {
      const map = {
        method: request.method,
        url: request.url,
        status: response.status,
        message: response.message
      };

      // replace all keys with their values
      Object.keys(map).forEach(key => {
        msg = msg.replace(new RegExp(`${key}`, 'g'), map[key]);
      });
      return msg;
    };

    // use custom message
    if (this.options.http && this.options.http.message) {
      return replace(this.options.http.message);
    }

    // use default message
    return replace(defaultMessage);
  }
}