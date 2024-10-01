import { DesignEffects } from './effects/design';
import { reducers } from './reducers';
import { environment } from '@env/environment';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { InlineSVGModule } from 'ng-inline-svg';

import { CustomMaterialGroupComponent } from './components/custom-material-group/custom-material-group.component';
import { CustomiserRoutingModule } from './customiser-routing.module';
import { CustomiserComponent } from './customiser.component';
import { SvgMoveDirective } from './directives/svg-move.directive';
import { ActionsComponent } from './nav/actions.component';
import { EditbarComponent } from './nav/editbar.component';
import { NavItemComponent } from './nav/nav-item.component';
import { NavComponent } from './nav/nav.component';
import { ToolbarComponent } from './nav/toolbar.component';
import { CustomFlagOptionComponent } from './options/custom-flag-option/custom-flag-option.component';
import { CustomImageOptionComponent } from './options/custom-image-option/custom-image-option.component';
import { CustomNameDecorativeComponent } from './options/custom-name-option/custom-name-decorative.component';
import { CustomNameOptionComponent } from './options/custom-name-option/custom-name-option.component';
import { CustomPanelOptionComponent } from './options/custom-panel-option/custom-panel-option.component';
import { CustomSizeOptionComponent } from './options/custom-size-option/custom-size-option.component';
import { CustomStyleOptionComponent } from './options/custom-style-option/custom-style-option.component';
import { CustomUploadOptionComponent } from './options/custom-upload-option/custom-upload-option.component';
import { CustomiserOptionsService } from './services/customiser-options.service';
import { DesignService } from './services/design.service';
import { ResolverService } from './services/resolver.service';
import { SizingService } from './services/sizing.service';
import { SvgService } from './services/svg.service';
import { SvgImageComponent } from './svg/svg-image.component';
import { SvgTextComponent } from './svg/svg-text.component';
import { TemplateComponent } from './template/template.component';
import { MaterialModule } from '@app/material/material.module';
import { CustomMuayThaiComponent } from './options/custom-muay-thai/custom-muay-thai.component';
import {
  DropzoneModule,
  DropzoneConfigInterface,
  DROPZONE_CONFIG,
} from 'ngx-dropzone-wrapper';
import { CustomNameOptionFinishComponent } from './options/custom-name-option/custom-name-option-finish.component';
import { CustomNameOptionPatchComponent } from './options/custom-name-option/custom-name-option-patch.component';
import { SvgBubbleDirective } from './directives/svg-bubble.directive';
import { CustomScrollContainerComponent } from './components/custom-scroll-container/custom-scroll-container.component';
import { StoreModule } from '@ngrx/store';
import { TourMatMenuModule } from 'ngx-tour-md-menu';
import { CardModule } from '@app/shared/modules/card/card.module';
import { SvgWaistLabelComponent } from './svg/svg-waist-label.component';
import { SvgLogoComponent } from './svg/svg-logo.component';
import { BoxxerLogoDirective } from './directives/boxxer-logo.directive';
import { EffectsModule } from '@ngrx/effects';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: `${environment.host}/upload`,
  maxFilesize: 50,
  acceptedFiles: 'image/*',
};

import { CustomMaterialColourComponent } from './components/custom-material-colour/custom-material-colour.component';
import { UploadSizingInfoComponent } from './components/upload-sizing-info/upload-sizing-info.component';

@NgModule({
  imports: [
    StoreModule.forFeature('customiser', reducers),
    EffectsModule.forFeature([DesignEffects]),
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CustomiserRoutingModule,
    InlineSVGModule.forRoot({
      baseUrl: 'https://boxxer-images.ams3.cdn.digitaloceanspaces.com/',
    }),
    MaterialModule,
    DropzoneModule,
    TourMatMenuModule,
    CardModule,
  ],
  declarations: [
    CustomiserComponent,
    NavComponent,
    TemplateComponent,
    ActionsComponent,
    SvgTextComponent,
    SvgImageComponent,
    SvgMoveDirective,
    CustomNameOptionComponent,
    CustomFlagOptionComponent,
    CustomImageOptionComponent,
    CustomPanelOptionComponent,
    CustomSizeOptionComponent,
    CustomStyleOptionComponent,
    CustomUploadOptionComponent,
    ToolbarComponent,
    CustomNameDecorativeComponent,
    CustomMaterialGroupComponent,
    EditbarComponent,
    NavItemComponent,
    CustomMuayThaiComponent,
    CustomNameOptionFinishComponent,
    CustomNameOptionPatchComponent,
    SvgBubbleDirective,
    CustomScrollContainerComponent,
    SvgWaistLabelComponent,
    SvgLogoComponent,
    BoxxerLogoDirective,
    CustomMaterialColourComponent,
    UploadSizingInfoComponent
  ],
  entryComponents: [UploadSizingInfoComponent],
  providers: [
    CustomiserOptionsService,
    SvgService,
    ResolverService,
    DesignService,
    SizingService,
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG,
    },
  ],
})
export class CustomiserModule {}