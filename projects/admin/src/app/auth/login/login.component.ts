import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from '@admin/shared/services/auth.service';
import { Router } from '@angular/router';
import { FeathersService } from '@admin/shared/services/feathers.service';
import { PlatformService } from '@admin/core/services/platform.service';

interface Credentials {
  email: string;
  password: string;
}

@Component({
  selector: 'bx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public form: FormGroup;
  public loading = false;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private feathers: FeathersService,
    private ps: PlatformService
  ) {
    this.form = this.fb.group({
      email: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
      password: [null, Validators.required],
    });
  }

  get label() {
    return this.loading ? 'Loading' : 'Login'
  }

  login(credentials: Credentials) {
    this.loading = true;
    this.auth
      .login(credentials.email, credentials.password)
      .subscribe((resp) => {
        this.router.navigate([this.auth.redirectUrl]).then(() => {
          this.loading = false;
          if (this.ps.isBrowser) {
            window.location.reload();
          }
        });
      });
  }
}
