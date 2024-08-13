import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '@app/form-error-state';
import { ToastService } from '@admin/core/services/toast.service';
import { ApiService } from '../../shared/services/api.service';
@Component({
  selector: 'bx-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit { 
  forgotForm: FormGroup;
  public loading = false;
  matcher = new MyErrorStateMatcher();
  constructor(
    private fb: FormBuilder,
    private toast: ToastService,
    private api: ApiService
  ) {
    this.forgotForm = this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])]
    });
  }
  ngOnInit() {
  }
  get label() {
    return this.loading ? 'Loading' : 'Send'
  }

  reset(data: any) {
    const reset = {
      action: 'sendResetPwd',
      value: data,
      type:'admin'
    };
    this.api
      .create('authManagement', reset, true, 'Requesting password reset')
      .subscribe(() => {
        this.toast.showToast('success', 'Success', 'Please check your email account for your password reset link.')
        this.forgotForm.reset();
      });
  }

  ngOnDestroy() {}
}
