import { SharedModule } from '@admin/shared/shared.module';
import { NgModule } from '@angular/core';

import { CustomSettingsRoutingModule } from './custom-settings-routing.module';
import { CustomSettingsComponent } from './custom-settings.component';

@NgModule({
  imports: [SharedModule, CustomSettingsRoutingModule],
  declarations: [CustomSettingsComponent]
})
export class CustomSettingsModule {}
