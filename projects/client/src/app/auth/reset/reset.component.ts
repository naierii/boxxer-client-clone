import { ApiService } from '../../core/services/api.service';
import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '@app/form-error-state';
import { ActivatedRoute, Router } from '@angular/router';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { PasswordValidation } from '@app/shared/validators/register-validation';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'bx-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnDestroy {
  resetForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {
    this.resetForm = this.fb.group({
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

  reset(data: any) {
    const reset = {
      action: 'resetPwdLong',
      value: {
        token: this.route.snapshot.params.token,
        password: data.passwords.password
      }
    };
    this.api
      .create('authManagement', reset, true, 'Updating password')
      .pipe(untilComponentDestroyed(this))
      .subscribe(() => {
        this.toastr.success(
          'Your password has been reset you may now login.',
          'Success'
        );
        this.router.navigate(['/login']);
      });
  }

  ngOnDestroy() {}
}
