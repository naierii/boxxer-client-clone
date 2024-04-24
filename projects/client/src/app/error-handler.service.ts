import { Injectable, Inject } from '@angular/core';
import { PlatformService } from './shared-main/services/platform.service';
import { SentryErrorHandler } from '@global/sentry/sentry.handler';
import { ModuleOptions, OPTIONS } from '@global/sentry/tokens';

@Injectable()
export class GlobalErrorHandler extends SentryErrorHandler {
  constructor(
    private ps: PlatformService,
    @Inject(OPTIONS) protected options: ModuleOptions
  ) {
    super(options);
  }

  handleError(error: any): void {
    const chunkFailedMessage = /Loading chunk [\d]+ failed/;

    if (chunkFailedMessage.test(error.message)) {
      this.ps.getNativeWindow().location.reload();
    }
    super.handleError(error);
  }
}
