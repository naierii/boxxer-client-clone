import { SharedModule } from '@app/shared/shared.module';
import { CartService } from './cart.service';
import { CartEffects } from './effects/cart';
import { reducers } from './reducers';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CartItemComponent } from './components/cart-item.component';
import { CartComponent } from './components/cart.component';
import { InlineSVGModule } from 'ng-inline-svg';

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forFeature('cart', reducers),
    EffectsModule.forFeature([CartEffects]),
    InlineSVGModule.forRoot({
      baseUrl: 'https://boxxer-images.ams3.cdn.digitaloceanspaces.com/',
    }),
  ],
  declarations: [CartComponent, CartItemComponent],
  exports: [CartComponent, CartItemComponent]
})
export class CartModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CartModule,
      providers: [CartService]
    };
  }
}
