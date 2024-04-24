import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SharedModule } from '@admin/shared/shared.module';

@NgModule({
  imports: [SharedModule, AuthRoutingModule],
  declarations: [LoginComponent, ForgotComponent]
})
export class AuthModule {}
