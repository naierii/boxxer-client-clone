import { HelpService } from './help.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './help-routing.module';
import { HelpDetailComponent } from './help-detail.component';

@NgModule({
  imports: [
    CommonModule,
    HelpRoutingModule
  ],
  declarations: [HelpDetailComponent],
  providers: [HelpService]
})
export class HelpModule { }
