import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon'
import { MatTooltipModule} from '@angular/material/tooltip';
const MAT_MODULES = [
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatMenuModule,
  MatSelectModule,
  MatStepperModule,
  MatSliderModule,
  MatIconModule,
  MatTooltipModule
];

@NgModule({
  imports: [MAT_MODULES],
  exports: [MAT_MODULES]
})
export class MaterialModule {}
