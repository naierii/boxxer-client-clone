import { NgModule } from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';

import { faChevronDown } from '@font/pro-light-svg-icons/faChevronDown';
import { faShoppingCart } from '@font/pro-light-svg-icons/faShoppingCart';
import { faTimesCircle } from '@font/pro-light-svg-icons/faTimesCircle';
import { faTimes } from '@font/pro-light-svg-icons/faTimes';
import { faComment } from '@font/pro-light-svg-icons/faComment';
import { faSearch } from '@font/pro-light-svg-icons/faSearch';
import { faCloudUpload } from '@font/pro-light-svg-icons/faCloudUpload';
import { faChevronLeft } from '@font/pro-light-svg-icons/faChevronLeft';
import { faChevronRight } from '@font/pro-light-svg-icons/faChevronRight';
import { faCheck } from '@font/pro-light-svg-icons/faCheck';
import { faPen } from '@font/pro-light-svg-icons/faPen';
import { faInfoCircle } from '@font/pro-light-svg-icons/faInfoCircle';
import { faTrash } from '@font/pro-light-svg-icons/faTrash';
import { faBox } from '@font/pro-light-svg-icons/faBox';
import { faBoxingGlove } from '@font/pro-light-svg-icons/faBoxingGlove';
import { faLockAlt } from '@font/pro-light-svg-icons/faLockAlt';
import { faMapMarker } from '@font/pro-light-svg-icons/faMapMarker';
import { faCreditCardFront } from '@font/pro-light-svg-icons/faCreditCardFront';
import { faPlus } from '@font/pro-light-svg-icons/faPlus';
import { faMinus } from '@font/pro-light-svg-icons/faMinus';

import { faPlayCircle } from '@fortawesome/free-solid-svg-icons/faPlayCircle';

import { faCcStripe } from '@fortawesome/free-brands-svg-icons/faCcStripe';

import { faCcPaypal } from '@fortawesome/free-brands-svg-icons/faCcPaypal';

import { faCcAmex } from '@fortawesome/free-brands-svg-icons/faCcAmex';

import { faCcMastercard } from '@fortawesome/free-brands-svg-icons/faCcMastercard';

import { faCcVisa } from '@fortawesome/free-brands-svg-icons/faCcVisa';

@NgModule({
  declarations: [],
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class IconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faChevronDown,
      faShoppingCart,
      faTimesCircle,
      faTimes,
      faComment,
      faSearch,
      faCloudUpload,
      faChevronLeft,
      faChevronRight,
      faCheck,
      faPen,
      faInfoCircle,
      faTrash,
      faBox,
      faBoxingGlove,
      faLockAlt,
      faMapMarker,
      faCreditCardFront,
      faPlus,
      faPlayCircle,
      faCcStripe,
      faCcPaypal,
      faCcAmex,
      faCcMastercard,
      faCcVisa,
      faMinus
    );
  }
}
