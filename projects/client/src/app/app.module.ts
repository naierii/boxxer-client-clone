import { VERSION } from '@env/version';
import { CartModule } from './cart/cart.module';
import { reducers } from './reducers';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@app/core/core.module';
import { JWTInterceptor } from '@app/core/services/jwt-interceptor';
import { environment } from '@env/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/guards/auth.guard';

import { NgxStripeModule } from 'ngx-stripe';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BreadcrumbsModule } from '@dottodot/breadcrumbs';
import { ProfileEffects } from '@app/core/effects/profile';
import { StateEffects } from '@app/core/effects/state';
import { TourMatMenuModule } from 'ngx-tour-md-menu';
import { Angulartics2Module } from 'angulartics2';
import { LoadingModule } from '@app/core/modules/loading/loading.module';
import { ToastrModule } from 'ngx-toastr';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { BrowserSentryModule } from '@global/sentry/browser';
import { FlickityService } from './shared/services/flickity.service';
import { FlickityBrowserService } from './shared/services/flickity-browser.service';
import { GlobalErrorHandler } from './error-handler.service';
import { SharedMainModule } from './shared-main/shared-main.module';
import { CookieModule, CookieService } from '@gorniv/ngx-universal';
import { TransferHttpCacheModule } from './core/modules/transfer-http/transfer-http.module';

@NgModule({
  declarations: [AppComponent],
  exports: [],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    TransferHttpCacheModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    CoreModule.forRoot(),
    CartModule.forRoot(),
    SharedMainModule.forRoot(),
    CookieModule.forRoot({
      domain: environment.domain,
      path: '/',
      secure: true,
    }),
    LoadingModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProfileEffects, StateEffects]),
    NgxStripeModule.forRoot(environment.stripe_key),
    BreadcrumbsModule.forRoot(),
    TourMatMenuModule.forRoot(),
    NgxJsonLdModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-full-width',
      preventDuplicates: true,
    }),
    Angulartics2Module.forRoot(),
    BrowserSentryModule.forRoot({
      enabled: true,
      platform: 'browser',
      sentry: {
        dsn: 'https://2440e512aa464f8eb3b3de942a938068@sentry.io/1365154',
        environment: environment.production ? 'production' : 'development',
        ignoreErrors: [
          'Conflict',
          'AbortError',
          'NotAuthenticated',
          'User not found.',
          'NS_ERROR_FAILURE',
          new RegExp(/websocket/, 'i'),
          new RegExp(/xhr post error/, 'i'),
          new RegExp(/User not found/, 'i'),
          new RegExp(/Invalid login/, 'i'),
        ],
        blacklistUrls: ['tawk.to'],
        whitelistUrls: [
          'https://localhost:4200',
          'https://www.boxxerworld.com',
        ],
        attachStacktrace: true,
        release: VERSION.version,
      },
      http: {
        enabled: true,
        blacklist: [401, 402, 404, 406, 409],
      },
    }),
  ],
  providers: [
    CookieService,
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true,
    },
    Meta,
    {
      provide: LOCALE_ID,
      useValue: 'en-GB',
    },
    AuthGuard,
    { provide: FlickityService, useClass: FlickityBrowserService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
