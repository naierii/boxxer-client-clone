import { WindowRefService } from './window-ref.service';
import { SharedModule } from '@admin/shared/shared.module';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieStorage } from '@global/forStorage/browser.storage';
import { AppStorage } from '@global/forStorage/universal.inject';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CustomErrorService } from './custom-error.service';
import { NgxStripeModule } from 'ngx-stripe';
import { environment } from '@env/environment';
import { CookieModule } from 'ngx-cookie';
import {
  AppInitService,
  appInitServiceInitProvider,
} from '@admin/core/services/app-init.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { DragulaModule } from 'ng2-dragula';
import { BrowserSentryModule } from '@global/sentry/browser';
import { VERSION } from '@env/version';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    CookieModule.forRoot(),
    CoreModule.forRoot(),
    DragulaModule.forRoot(),
    NgxStripeModule.forRoot(environment.stripe_key),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    BrowserSentryModule.forRoot({
      enabled: true,
      sentry: {
        dsn: 'https://43198e7419aa42da9a6915f2d65d2fd5@sentry.io/1365155',
        environment: environment.production ? 'production' : 'development',
        release: VERSION.version,
      },
    }),
  ],
  declarations: [AppComponent],
  providers: [
    AppInitService,
    appInitServiceInitProvider,
    { provide: ErrorHandler, useClass: CustomErrorService },
    { provide: AppStorage, useClass: CookieStorage },
    WindowRefService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
