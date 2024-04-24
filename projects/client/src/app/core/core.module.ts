import { CheckoutService } from './services/checkout.service';
import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders
} from '@angular/core';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {
  MainMenuComponent,
  MainMenuDropdownComponent,
  MainMenuLinkComponent,
  MainMenuMegaDropdownComponent,
  MainMenuNavItemComponent
} from './components/header/main-menu/main-menu.component';
import { MenunavItemComponent } from './components/header/menunav-item/menunav-item.component';
import { MenunavComponent } from './components/header/menunav/menunav.component';
import { MenunavService } from './components/header/menunav/menunav.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {
  NavDropdownDirective,
  NavDropdownToggleDirective
} from './directives/nav-dropdown.directive';
import { CheckoutLayoutComponent } from './layout/checkout-layout/checkout-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderToolbarComponent } from './components/header/header-toolbar/header-toolbar.component';

import { MailchimpBannerComponent } from './components/mailchimp-banner/mailchimp-banner.component';
import { IconsModule } from '@app/icons/icons.module';
import { SharedMainModule } from '@app/shared-main/shared-main.module';
import { MatMenuModule } from '@angular/material/menu';
import { CartButtonComponent } from './components/header/cart-button/cart-button.component';
import { SharedModule } from '@app/shared/shared.module';

// Import components
const APP_COMPONENTS = [
  MainLayoutComponent,
  CheckoutLayoutComponent,
  HeaderComponent,
  FooterComponent,
  MenunavComponent,
  MenunavItemComponent,
  MainMenuComponent,
  MainMenuNavItemComponent,
  MainMenuLinkComponent,
  MainMenuDropdownComponent,
  MainMenuMegaDropdownComponent,
  NotFoundComponent,
  HeaderToolbarComponent,
  MailchimpBannerComponent,
  CartButtonComponent
];

// Import directives
const APP_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];

// Import services
const PROVIDERS = [MenunavService, CheckoutService];

@NgModule({
  imports: [SharedModule, SharedMainModule, MatMenuModule, IconsModule],
  declarations: [...APP_DIRECTIVES, ...APP_COMPONENTS],
  exports: [...APP_COMPONENTS, ...APP_DIRECTIVES]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [...PROVIDERS]
    };
  }
}
