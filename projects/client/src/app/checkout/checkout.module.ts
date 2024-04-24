import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material/material.module';
import { AddressFormModule } from '@app/shared/modules/address-form/address-form.module';
import { AuthFormModule } from '@app/shared/modules/auth-form/auth-form.module';
import { SharedModule } from '@app/shared/shared.module';

import { CheckoutCartItemComponent } from './checkout-cart/checkout-cart-item.component';
import { CheckoutCartComponent } from './checkout-cart/checkout-cart.component';
import { CheckoutPaymentAddressComponent } from './checkout-payment/checkout-payment-address.component';
import { CheckoutPaymentStripeComponent } from './checkout-payment/checkout-payment-stripe.component';
import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutAccountComponent } from './checkout-shipping/checkout-account.component';
import { CheckoutShippingAddressComponent } from './checkout-shipping/checkout-shipping-address.component';
import { CheckoutShippingOptionsComponent } from './checkout-shipping/checkout-shipping-options.component';
import { CheckoutShippingComponent } from './checkout-shipping/checkout-shipping.component';
import { CheckoutSuccessComponent } from './checkout-success/checkout-success.component';
import { CheckoutComponent } from './checkout.component';
import { CheckoutGuard } from './checkout.guard';
import { AddAddressComponent } from './add-address/add-address.component';
import { CheckoutPaymentPaypalComponent } from './checkout-shipping/checkout-payment-paypal.component';
import { CheckoutDiscountComponent } from './checkout-discount/checkout-discount.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { InlineSVGModule } from 'ng-inline-svg';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    AuthFormModule,
    AddressFormModule,
    CheckoutRoutingModule,
    MaterialModule,
    NgSelectModule,
    InlineSVGModule.forRoot({
      baseUrl: 'https://boxxer-images.ams3.cdn.digitaloceanspaces.com/',
    }),
  ],
  declarations: [
    CheckoutShippingComponent,
    CheckoutPaymentComponent,
    CheckoutComponent,
    CheckoutCartComponent,
    CheckoutCartItemComponent,
    CheckoutShippingAddressComponent,
    CheckoutShippingOptionsComponent,
    CheckoutPaymentStripeComponent,
    CheckoutPaymentAddressComponent,
    CheckoutSuccessComponent,
    CheckoutAccountComponent,
    AddAddressComponent,
    CheckoutPaymentPaypalComponent,
    CheckoutDiscountComponent
  ],
  entryComponents: [AddAddressComponent],
  providers: [CheckoutGuard]
})
export class CheckoutModule {}
