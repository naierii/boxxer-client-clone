import { CookieLawService } from './cookie-law.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieLawComponent } from './cookie-law.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material/material.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  declarations: [CookieLawModule.rootComponent],
  exports: [CookieLawModule.rootComponent],
  providers: [CookieLawService]
})
export class CookieLawModule {
  static rootComponent = CookieLawComponent;
}

export { CookieLawComponent, CookieLawService };
