import { Injectable } from '@angular/core';
import {
  addBreadcrumb,
  captureMessage,
  captureException,
  captureEvent,
  configureScope,
  Breadcrumb,
  Severity,
  Scope
} from '@sentry/browser';

import { SentryService } from '../sentry.service';

@Injectable()
export class BrowserSentryService extends SentryService {
  public setExtra(key: string, value: any): void {
    return configureScope((scope: Scope) => {
      scope.setExtra(key, value);
    });
  }

  /**
   * Add an {@link Breadcrumb} to Sentry.
   *
   * @param - The breadcrumb to add
   * @returns - Returns nothing
   */
  public addBreadcrumb(breadcrumb: Breadcrumb): void {
    return addBreadcrumb(breadcrumb);
  }

  /**
   * Capture a message.
   *
   * @param - The message to report
   * @param - The severity level of the message
   * @returns - Returns the generated event id
   */
  public captureMessage(message: string, level: Severity): string {
    return captureMessage(message, level);
  }

  /**
   * Capture an exception.
   *
   * @param - The exception to report
   * @returns - Returns the generated event id
   */
  public captureException(exception: any): string {
    return captureException(exception);
  }

  /**
   * Capture an {@link SentryEvent}.
   *
   * @param - The event to report
   * @returns - Returns the generated event id
   */
  public captureEvent(event: any): string {
    return captureEvent(event);
  }
}
