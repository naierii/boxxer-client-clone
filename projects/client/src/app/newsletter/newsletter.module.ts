import { NgModule } from '@angular/core';

import { NewsletterRoutingModule } from './newsletter-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { MaterialModule } from '@app/material/material.module';
import { NewsletterComponent } from './newsletter.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewsletterComponent],
  imports: [
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    NewsletterRoutingModule
  ]
})
export class NewsletterModule {}
