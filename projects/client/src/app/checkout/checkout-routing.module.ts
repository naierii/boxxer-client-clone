import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';
import { CheckoutShippingComponent } from './checkout-shipping/checkout-shipping.component';
import { CheckoutSuccessComponent } from './checkout-success/checkout-success.component';
import { CheckoutComponent } from './checkout.component';
import { CheckoutGuard } from './checkout.guard';

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
    canActivate: [CheckoutGuard],
    children: [
      {
        path: '',
        redirectTo: 'shipping',
        pathMatch: 'full'
      },
      {
        path: 'shipping',
        component: CheckoutShippingComponent
      },
      {
        path: 'payment',
        component: CheckoutPaymentComponent
      }
    ]
  },
  {
    path: 'success',
    component: CheckoutSuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CheckoutRoutingModule {}
