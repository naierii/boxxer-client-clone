import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material/material.module';
import { SharedModule } from '@app/shared/shared.module';
import { NgModule } from '@angular/core';

import { GiftVoucherRoutingModule } from './gift-voucher-routing.module';
import { GiftVoucherComponent } from './gift-voucher.component';
import { GiftVoucherRedeemComponent } from './gift-voucher-redeem/gift-voucher-redeem.component';
import { GiftVoucherBalanceComponent } from './gift-voucher-balance/gift-voucher-balance.component';
import { GiftVoucherFormComponent } from './gift-voucher-form/gift-voucher-form.component';

import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateAdapter
} from '@angular/material-moment-adapter';

import { MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

export const MY_FORMATS = {
  parse: {
    dateInput: 'l'
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    GiftVoucherRoutingModule
  ],
  declarations: [
    GiftVoucherComponent,
    GiftVoucherRedeemComponent,
    GiftVoucherBalanceComponent,
    GiftVoucherFormComponent
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class GiftVoucherModule {}
