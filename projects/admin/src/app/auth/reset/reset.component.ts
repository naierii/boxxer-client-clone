import { ApiService } from '../../shared/services/api.service';
import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordValidation } from '@app/shared/validators/register-validation';
import { ToastService } from '@admin/core/services/toast.service';
@Component({
  selector: 'bx-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnDestroy {
  resetForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private toast: ToastService,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {
    this.resetForm = this.fb.group(
        {
          password: [null, [Validators.required]],
          confirmPassword: [null, [Validators.required]]
        },
        {
          validator: PasswordValidation.MatchPassword
        }
    );
  }

  reset(data: any) {
    const reset = {
      action: 'resetPwdLong',
      value: {
        token: this.route.snapshot.params.token,
        password: data.password
      }
    };
    console.log(reset)
    this.api
      .create('authManagement', reset, true, 'Updating password')
      .subscribe(() => {
        this.toast.showToast('success', 'Success',
          'Your password has been reset you may now login.'
        );
        this.router.navigate(['/auth/login']);
      });
  }

  ngOnDestroy() {}
}
