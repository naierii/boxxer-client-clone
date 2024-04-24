import { BrowserSentryService } from './browser-sentry.service';
import { NgModule, ModuleWithProviders, ErrorHandler } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { init } from '@sentry/browser';
import { SentryErrorHandler } from '../sentry.handler';
import { SentryErrorInterceptor } from '../sentry.interceptor';
import { ModuleOptions, OPTIONS, INITIALIZER } from './../tokens';
import { SentryService } from '../sentry.service';

/**
 * Initializer function to setup sentry logging.
 *
 * @param - The module options
 * @returns - A promise for waiting to be resolved
 */
export function initializer(options: ModuleOptions): void {
  // configure sentry's browser library
  if (options.enabled) {
    init(options.sentry);
  }
}

@NgModule({
  declarations: [],
  imports: []
})
export class BrowserSentryModule {
  public static forRoot(options: ModuleOptions): ModuleWithProviders {
    return {
      ngModule: BrowserSentryModule,
      providers: [
        {
          provide: OPTIONS,
          useValue: options
        },
        {
          provide: SentryService,
          useClass: BrowserSentryService,
          deps: [OPTIONS, INITIALIZER]
        },
        {
          provide: INITIALIZER,
          useFactory: initializer,
          deps: [OPTIONS]
        },
        {
          provide: ErrorHandler,
          useClass: SentryErrorHandler,
          deps: [OPTIONS, INITIALIZER]
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: SentryErrorInterceptor,
          deps: [OPTIONS, INITIALIZER],
          multi: true
        }
      ]
    };
  }
}
