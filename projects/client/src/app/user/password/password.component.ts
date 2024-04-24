import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '@app/form-error-state';
import { ApiService } from '@app/core/services/api.service';
import { AuthService } from '@app/core/services/auth.service';
import { Router } from '@angular/router';
import { PasswordValidation } from '@app/shared/validators/register-validation';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'bx-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnDestroy {
  public editForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) {
    this.editForm = this.fb.group({
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
    this.auth
      .getUser()
      .pipe(untilComponentDestroyed(this))
      .subscribe();
  }

  update(password: string) {
    this.auth
      .getUser()
      .pipe(
        switchMap((user: any) =>
          this.api.update('users', user.userid, {
            password
          })
        ),
        untilComponentDestroyed(this)
      )
      .subscribe(resp => {
        this.router.navigate(['/account']);
      });
  }

  ngOnDestroy() {}
}
