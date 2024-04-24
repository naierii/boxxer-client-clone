import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material/material.module';

import { AddressFormComponent } from './address-form.component';
import { CountryService } from './country.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  declarations: [AddressFormComponent],
  providers: [CountryService],
  exports: [AddressFormComponent]
})
export class AddressFormModule {}
