import { VERSION } from '@env/version';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  ServerModule,
  ServerTransferStateModule
} from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { ServerSentryModule } from '@global/sentry/server';
import { environment } from '@env/environment';
import { FlickityService } from './shared/services/flickity.service';
import { FlickityServerService } from './shared/services/flickity-server.service';
import { CookieService, CookieBackendService } from '@gorniv/ngx-universal';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule,
    NoopAnimationsModule,
    ServerSentryModule.forRoot({
      enabled: true,
      platform: 'server',
      sentry: {
        dsn: 'https://2440e512aa464f8eb3b3de942a938068@sentry.io/1365154',
        environment: environment.production ? 'production' : 'development',
        release: VERSION.version,
        ignoreErrors: ['NotFound']
      },
      http: {
        enabled: true,
        blacklist: [401, 402, 404, 409]
      }
    })
  ],
  providers: [
    { provide: FlickityService, useClass: FlickityServerService },
    { provide: CookieService, useClass: CookieBackendService }
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
