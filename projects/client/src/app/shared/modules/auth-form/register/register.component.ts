import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@app/core/services/api.service';
import { AuthService } from '@app/core/services/auth.service';
import {
  EmailValidation,
  PasswordValidation
} from '@app/shared/validators/register-validation';
import * as fromRoot from '@app/reducers';
import { Store } from '@ngrx/store';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { switchMap } from 'rxjs/operators';
import * as cart from '@app/cart/actions/cart';
import { Router } from '@angular/router';

@Component({
  selector: 'bx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  @Input()
  email: string;
  @Input()
  checkout: boolean;
  public registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private auth: AuthService,
    private store: Store<fromRoot.State>,
    private router: Router
  ) {}
  ngOnInit() {
    this.registerForm = this.fb.group({
      newsletter: [false],
      checkout: [this.checkout],
      emails: this.fb.group(
        {
          email: [
            this.email ? this.email : null,
            Validators.compose([Validators.required, Validators.email])
          ],
          confirmEmail: [
            this.email ? this.email : null,
            Validators.compose([Validators.required, Validators.email])
          ]
        },
        {
          validator: EmailValidation.MatchEmail
        }
      ),
      passwords: this.fb.group(
        {
          password: [null, [Validators.required]],
          confirmPassword: [null, [Validators.required]]
        },
        {
          validator: PasswordValidation.MatchPassword
        }
      )
    });
  }
  onRegister(values: any) {
    this.api
      .create(
        'users',
        {
          email: values.emails.email,
          password: values.passwords.password,
          newsletter: values.newsletter,
          checkout: values.checkout
        },
        true,
        'Creating account'
      )
      .pipe(
        switchMap((resp: any) => {
          return this.auth.login(
            values.emails.email,
            values.passwords.password
          );
        }),
        untilComponentDestroyed(this)
      )
      .subscribe(() => {
        this.router.navigate(['/account']);
        this.store.dispatch(new cart.Email(null));
      });
  }

  ngOnDestroy() {}
}
