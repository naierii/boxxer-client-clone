import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SharedModule } from '@admin/shared/shared.module';
import { ResetComponent } from './reset/reset.component';
@NgModule({
  imports: [SharedModule, AuthRoutingModule],
  declarations: [LoginComponent, ForgotComponent,ResetComponent]
})
export class AuthModule {}
