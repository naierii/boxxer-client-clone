import { Injectable, Inject, ErrorHandler } from '@angular/core';
import {
  captureException,
  showReportDialog,
  configureScope,
  Scope
} from '@sentry/browser';
import { ModuleOptions, OPTIONS } from './tokens';

/**
 * Injectable error handler for Sentry.
 */
@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  /**
   * Initializes the sentry connected error handler.
   *
   * @param - The module options.
   */
  public constructor(@Inject(OPTIONS) protected options: ModuleOptions) {}

  /**
   * Handles any errors.
   *
   * @param - The error to handle.
   */
  public handleError(error: any): void {
    // log to Sentry
    if (this.options.enabled) {
      configureScope((scope: Scope) => {
        scope.addEventProcessor(async (event, hint) => {
          try {
            for (const frame of event.exception.values[0].stacktrace.frames) {
              if (frame.filename.includes('tawk.to')) {
                return null;
              }
            }
            return event;
          } catch (oO) {
            return event;
          }
        });
      });
      captureException(error.originalError || error);
    }

    // show report dialog
    if (this.options.dialog) {
      showReportDialog(
        typeof this.options.dialog === 'object' ? this.options.dialog : null
      );
    }

    // re-throw error
    if (this.options.platform === 'browser') {
      throw error;
    }
  }
}
