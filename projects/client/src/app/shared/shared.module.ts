import { VideoComponent } from './components/video/video.component';
import { MediaMatcher } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { MessageComponent } from './components/message/message.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageInfoComponent } from './components/page-info/page-info.component';
import { DisableControlDirective } from './directives/disable-control.directive';
import { FormValidDirective } from './directives/form-valid.directive';
import { PriceModule } from './modules/price/price.module';
import { FlktyDirective } from './directives/flkty.directive';
import { FlktyCellDirective } from './directives/flkty-cell.directive';
import { Angulartics2Module } from 'angulartics2';
import { AdvertsComponent } from './components/adverts/adverts.component';
import { WindowHeightDirective } from './directives/window-height.directive';
import { HasKeyPipe } from '@global/pipes/has-key.pipe';
import { DebounceClickDirective } from './directives/debounce-click.directive';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { ImageGalleryModule } from '@app/image-gallery/image-gallery.module';
import { IconsModule } from '@app/icons/icons.module';
import { LazyLoadDirective } from './directives/lazy-load.directive';
import { SharedMainModule } from '@app/shared-main/shared-main.module';
import { PagePopupComponent } from './components/page-popup/page-popup.component';
import { MaterialModule } from '@app/material/material.module';
import { ConfirmDesignOverwriteComponent } from './components/confirm-design-overwrite/confirm-design-overwrite.component';
import { DesignCopyService } from './services/design-copy.service';
import { LazysizesDirective } from './directives/lazysizes.directive';
import { ImageWrapperComponent } from './components/image-wrapper/image-wrapper.component';
import { RatioPipe } from './pipes/ratio.pipe';
import { ClubKitWarningComponent } from './components/club-kit-warning/club-kit-warning.component';

const MODULES = [
  SharedMainModule,
  NgxPaginationModule,
  PriceModule,
  IconsModule,
  Angulartics2Module,
  NgxJsonLdModule,
  ImageGalleryModule,
  MaterialModule,
];
const COMPONENTS = [
  DisableControlDirective,
  MessageComponent,
  PageInfoComponent,
  PageHeaderComponent,
  VideoComponent,
  AdvertsComponent,
  PagePopupComponent,
  ConfirmDesignOverwriteComponent,
  ImageWrapperComponent,
ClubKitWarningComponent
];
const DIRECTIVES = [
  FormValidDirective,
  FlktyDirective,
  FlktyCellDirective,
  WindowHeightDirective,
  DebounceClickDirective,
  LazyLoadDirective,
  LazysizesDirective,
];
const PIPES = [HasKeyPipe, RatioPipe];

const PROVIDERS = [MediaMatcher, DesignCopyService];

@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
  exports: [...MODULES, ...COMPONENTS, ...DIRECTIVES, ...PIPES],
  providers: [...PROVIDERS],
  entryComponents: [PagePopupComponent, ConfirmDesignOverwriteComponent],
})
export class SharedModule {}
