import { MaterialModule } from '@app/material/material.module';
import { SharedModule } from '@app/shared/shared.module';
import { NgModule } from '@angular/core';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackComponent } from './feedback.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [SharedModule, ReactiveFormsModule, FeedbackRoutingModule, MaterialModule],
  declarations: [FeedbackComponent],
  providers: []
})
export class FeedbackModule {}
