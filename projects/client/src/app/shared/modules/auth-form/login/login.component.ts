import { Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';
import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { untilComponentDestroyed } from '@global/untilDestroy';

interface Credentials {
  email: string;
  password: string;
}

@Component({
  selector: 'bx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  @Output()
  loginComplete = new EventEmitter();
  public loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: [
        null,
        Validators.compose([Validators.required, Validators.email])
      ],
      password: [null, Validators.required]
    });
  }
  onLogin(credentials: Credentials) {
    this.authService
      .login(credentials.email, credentials.password)
      .pipe(untilComponentDestroyed(this))
      .subscribe(resp => {
        this.router.navigate([this.authService.redirectUrl]);
        this.loginComplete.emit();
      });
  }

  ngOnDestroy() {}
}
