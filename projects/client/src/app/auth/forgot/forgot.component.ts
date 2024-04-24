import { Component, OnDestroy } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { MyErrorStateMatcher } from '@app/form-error-state';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'bx-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnDestroy {
  forgotForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private api: ApiService
  ) {
    this.forgotForm = this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])]
    });
  }

  reset(data: any) {
    const reset = {
      action: 'sendResetPwd',
      value: data
    };
    this.api
      .create('authManagement', reset, true, 'Requesting password reset')
      .pipe(untilComponentDestroyed(this))
      .subscribe(() => {
        this.toastr.success(
          'Please check your email account for your password reset link.',
          'Success'
        );
        this.forgotForm.reset();
      });
  }

  ngOnDestroy() {}
}
