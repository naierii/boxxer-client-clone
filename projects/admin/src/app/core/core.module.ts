import { LoadingIndicatorComponent } from './components/app-loading-indicator/loading-indicator.component';
import { AuthGuard } from '@admin/core/guards/auth.guard';
import { NotAuthGuard } from '@admin/core/guards/not-auth.guard';
import { RoleGuard } from '@admin/core/guards/role.guard';
import { AuthService } from '@admin/core/services/auth.service';
import { LoadingService } from '@admin/core/services/loading.service';
import { StateService } from '@admin/core/services/state.service';
import { ToastService } from '@admin/core/services/toast.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { tinymceDefaultSettings, TinyMceModule } from 'angular-tinymce';
import { ToasterModule } from 'angular2-toaster';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import {
  APP_SIDEBAR_NAV,
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
} from './components';
import { FullLayoutComponent, SimpleLayoutComponent } from './containers';
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES,
} from './directives';
import { SharedModule } from '@admin/shared/shared.module';
import { environment } from '@env/environment';
import {
  DropzoneConfigInterface,
  DropzoneModule,
  DROPZONE_CONFIG,
} from 'ngx-dropzone-wrapper';
import { DragulaModule } from 'ng2-dragula';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: `${environment.host}/upload`,
  maxFilesize: 50,
  acceptedFiles: 'image/*, video/*',
};

const APP_CONTAINERS = [FullLayoutComponent, SimpleLayoutComponent];

const APP_COMPONENTS = [
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  LoadingIndicatorComponent,
  APP_SIDEBAR_NAV,
];

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES,
];

const PROVIDERS = [
  AuthService,
  AuthGuard,
  NotAuthGuard,
  RoleGuard,
  ToastService,
  LoadingService,
  StateService,
];

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ToasterModule.forRoot(),
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TinyMceModule.forRoot(tinymceDefaultSettings()),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgSelectModule,
    SharedModule,
    DropzoneModule,
    DragulaModule,
  ],
  declarations: [...APP_CONTAINERS, ...APP_COMPONENTS, ...APP_DIRECTIVES],
  exports: [...APP_CONTAINERS, ...APP_COMPONENTS, ...APP_DIRECTIVES],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ...PROVIDERS,
        {
          provide: DROPZONE_CONFIG,
          useValue: DEFAULT_DROPZONE_CONFIG,
        },
      ],
    };
  }
}
