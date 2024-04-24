import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DecimalPricePipe } from './pipes/decimal-price.pipe';
import { NgSelectApiComponent } from './components/ng-select-api/ng-select-api.component';
import { CategorySelectComponent } from '@admin/shared/components/category-select/category-select.component';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { TinyMceModule } from 'angular-tinymce';
import { DragulaModule } from 'ng2-dragula';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DropzoneModule } from 'ngx-dropzone-wrapper';

import { BaseEditComponent } from './components/base-edit/base-edit.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { ListEditBtnComponent } from './components/list-edit-btn/list-edit-btn.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { PublishingFormComponent } from './components/publishing-form/publishing-form.component';
import { SeoFormComponent } from './components/seo-form/seo-form.component';

import {
  FeathersService,
  FeathersSocketService,
} from './services/feathers.service';
import { SocketService } from './services/socket.service';
import { HasKeyPipe } from '@global/pipes/has-key.pipe';
import { OfferFormComponent } from './components/offer-form/offer-form.component';
import { ImageThumbComponent } from './components/image-thumb/image-thumb.component';
import { ProductionSelectComponent } from './components/production-select/production-select.component';
import { DpMobileComponent } from './components/dp-mobile/dp-mobile.component';
import { LazysizesDirective } from './directives/lazysizes.directive';
import { ImageItemComponent } from './components/multi-image-upload/image-item.component';
import { ImageListComponent } from './components/multi-image-upload/image-list.component';
import { MultiImageUploadComponent } from './components/multi-image-upload/multi-image-upload.component';
import { SingleImageUploadComponent } from './components/single-image-upload/single-image-upload.component';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';

// Bootrap
const MODULES = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  BsDropdownModule,
  PaginationModule,
  BsDatepickerModule,
  ModalModule,
  TabsModule,
  AccordionModule,
  TinyMceModule,
  DragulaModule,
  NgSelectModule,
  DropzoneModule,
  ButtonsModule,
];

const COMPONENTS = [
  ListViewComponent,
  ConfirmModalComponent,
  FormFieldComponent,
  PublishingFormComponent,
  SeoFormComponent,
  BaseEditComponent,
  ListEditBtnComponent,
  CategorySelectComponent,
  NgSelectApiComponent,
  DecimalPricePipe,
  OfferFormComponent,
  ImageThumbComponent,
  ProductionSelectComponent,
  DpMobileComponent,
  MultiImageUploadComponent,
  SingleImageUploadComponent,
];

const DIRECTIVES = [LazysizesDirective];

const PROVIDERS = [FeathersService, FeathersSocketService, SocketService, ApiService, AuthService];

const PIPES = [HasKeyPipe];

@NgModule({
  imports: [...MODULES, TranslateModule.forChild()],
  declarations: [
    ...COMPONENTS,
    ...PIPES,
    ...DIRECTIVES,
    ImageListComponent,
    ImageItemComponent,
  ],
  exports: [...MODULES, ...COMPONENTS, ...PIPES, ...DIRECTIVES],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [...PROVIDERS],
    };
  }
}
