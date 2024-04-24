import { ReactiveFormsModule } from '@angular/forms';
import { AuthFormModule } from '@app/shared/modules/auth-form/auth-form.module';
import { SharedModule } from '@app/shared/shared.module';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetComponent } from './reset/reset.component';
import { MaterialModule } from '@app/material/material.module';

@NgModule({
  imports: [
    SharedModule,
    AuthFormModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [AuthComponent, ForgotComponent, ResetComponent]
})
export class AuthModule {}
