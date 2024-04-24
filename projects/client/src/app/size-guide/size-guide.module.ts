import { SharedModule } from '@app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SizeGuideRoutingModule } from './size-guide-routing.module';
import { CustomSizesComponent } from './custom-sizes/custom-sizes.component';
import { CustomSizesItemComponent } from './custom-sizes/custom-sizes-item.component';
import { CardModule } from '@app/shared/modules/card/card.module';
import { MaterialModule } from '@app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    SizeGuideRoutingModule,
    CardModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [CustomSizesComponent, CustomSizesItemComponent]
})
export class SizeGuideModule {}
