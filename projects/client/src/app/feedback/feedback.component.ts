import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HelperService } from '../shared/services/helper.service';
import { ApiService } from '@app/core/services/api.service';
import { LoadingService } from '@app/core/modules/loading/loading.service';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'bx-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit, OnDestroy {
  feedbackForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private toastr: ToastrService,
    private loading: LoadingService
  ) {}

  ngOnInit() {
    this.feedbackForm = this.formBuilder.group({
      email: [
        null,
        Validators.compose([Validators.required, Validators.email])
      ],
      details: [null, Validators.required]
    });
  }

  save(data: any) {
    this.loading.show('Sending...');
    data.details = HelperService.textToHtml(data.details);
    this.api
      .create('feedback', data)
      .pipe(untilComponentDestroyed(this))
      .subscribe(
        resp => {
          this.toastr.success(
            'If necessary we will get back to you as soon as possible.',
            'Thanks for your feedback'
          );
          this.feedbackForm.reset();
          this.loading.hide();
        },
        err => {
          this.toastr.error(
            'Sorry an error occured please try again.',
            'Error'
          );
          this.loading.hide();
        }
      );
  }

  ngOnDestroy() {}
}
