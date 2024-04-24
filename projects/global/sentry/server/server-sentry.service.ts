import { Injectable } from '@angular/core';
import { Breadcrumb, Severity } from '@sentry/browser';
import { SentryService } from '../sentry.service';

@Injectable()
export class ServerSentryService extends SentryService {
  public setExtra(key: string, value: any): void {}
  /**
   * Add an {@link Breadcrumb} to Sentry.
   *
   * @param - The breadcrumb to add
   * @returns - Returns nothing
   */
  public addBreadcrumb(breadcrumb: Breadcrumb): void {}

  /**
   * Capture a message.
   *
   * @param - The message to report
   * @param - The severity level of the message
   * @returns - Returns the generated event id
   */
  public captureMessage(message: string, level: Severity): void {}

  /**
   * Capture an exception.
   *
   * @param - The exception to report
   * @returns - Returns the generated event id
   */
  public captureException(exception: any): void {}

  /**
   * Capture an {@link SentryEvent}.
   *
   * @param - The event to report
   * @returns - Returns the generated event id
   */
  public captureEvent(event: any): void {}
}
