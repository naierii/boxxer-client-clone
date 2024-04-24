import { InjectionToken } from '@angular/core';
import { BrowserOptions, ReportDialogOptions } from '@sentry/browser';
import { NodeOptions } from '@sentry/node';
/**
 * Injection tokens.
 */
export const INITIALIZER = new InjectionToken<void>('initializer');
export const OPTIONS = new InjectionToken<ModuleOptions>('options');

/**
 * Module options.
 */
export interface ModuleOptions {
  enabled?: boolean;
  sentry?: BrowserOptions | NodeOptions;
  dialog?: true | ReportDialogOptions;
  platform?: string;
  http?: {
    enabled?: boolean;
    message?: string;
    whitelist?: number[];
    blacklist?: number[];
  };
}
