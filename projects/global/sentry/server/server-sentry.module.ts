import { NgModule, ModuleWithProviders, ErrorHandler } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { init } from '@sentry/node';
import { ModuleOptions, OPTIONS, INITIALIZER } from './../tokens';
import { SentryService } from '../sentry.service';
import { ServerSentryService } from './server-sentry.service';
import { SentryErrorHandler } from '../sentry.handler';
import { SentryErrorInterceptor } from '../sentry.interceptor';

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
export class ServerSentryModule {
  public static forRoot(options: ModuleOptions): ModuleWithProviders {
    return {
      ngModule: ServerSentryModule,
      providers: [
        {
          provide: OPTIONS,
          useValue: options
        },
        { provide: SentryService, useClass: ServerSentryService },
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
