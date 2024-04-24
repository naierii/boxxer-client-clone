import { GiftVoucherResolverService } from './gift-voucher-resolver.service';
import { GiftVoucherBalanceComponent } from './gift-voucher-balance/gift-voucher-balance.component';
import { GiftVoucherRedeemComponent } from './gift-voucher-redeem/gift-voucher-redeem.component';
import { GiftVoucherFormComponent } from './gift-voucher-form/gift-voucher-form.component';
import { GiftVoucherComponent } from './gift-voucher.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'purchase',
    pathMatch: 'full'
  },
  {
    path: '',
    component: GiftVoucherComponent,
    resolve: {
      product: GiftVoucherResolverService
    },
    children: [
      {
        path: 'purchase',
        component: GiftVoucherFormComponent,
        resolve: {
          product: GiftVoucherResolverService
        }
      },
      {
        path: 'redeem',
        component: GiftVoucherRedeemComponent,
        resolve: {
          product: GiftVoucherResolverService
        }
      },
      {
        path: 'balance',
        component: GiftVoucherBalanceComponent,
        resolve: {
          product: GiftVoucherResolverService
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiftVoucherRoutingModule {}
