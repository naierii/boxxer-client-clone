import { SharedModule } from '@admin/shared/shared.module';
import { NgModule } from '@angular/core';

import { EmailRoutingModule } from './email-routing.module';
import { EmailListComponent } from './email-list/email-list.component';
import { EmailEditComponent } from './email-edit/email-edit.component';
import { EmailItemComponent } from './email-list/email-item.component';

@NgModule({
  imports: [SharedModule, EmailRoutingModule],
  declarations: [EmailListComponent, EmailEditComponent, EmailItemComponent]
})
export class EmailModule {}
