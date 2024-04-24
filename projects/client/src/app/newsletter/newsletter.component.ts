import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '@app/form-error-state';
import { CookieService } from '@gorniv/ngx-universal';
import { ApiService } from '@app/core/services/api.service';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';
import { Angulartics2Facebook } from 'angulartics2/facebook';
import { ToastrService } from 'ngx-toastr';
import { takeUntil } from 'rxjs/operators';
import { componentDestroyed } from '@global/untilDestroy';
import { LoadingService } from '@app/core/modules/loading/loading.service';

interface Mailchimp {
  email: string;
  merge_fields: any;
}

@Component({
  selector: 'bx-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit, OnDestroy {
  public mailchimpForm: FormGroup;
  public mask = [/\d/, /\d/, '/', /\d/, /\d/];
  matcher = new MyErrorStateMatcher();
  constructor(
    private _cookieService: CookieService,
    private fb: FormBuilder,
    private service: ApiService,
    private angulartics2GoogleTagManager: Angulartics2GoogleTagManager,
    private angulartics2Facebook: Angulartics2Facebook,
    private loading: LoadingService,
    private toastr: ToastrService
  ) {
    this.mailchimpForm = this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])]
    });
  }

  ngOnInit() {
    this._cookieService.put('bx-mailchimp-sticky', 'true', {
      expires: new Date(Date.now() + 60 * 86400000)
    });
  }

  signup(subscriber: Mailchimp) {
    this.loading.show();
    subscriber.merge_fields = {
      TYPE: 'website'
    };
    this.service
      .create('mailchimp/subscribe', subscriber, false)
      .pipe(takeUntil(componentDestroyed(this)))
      .subscribe(resp => {
        this.loading.hide();
        if (resp && resp.status === 400) {
          this.toastr.error(resp.detail, 'Signup Failed');
          return;
        }
        if (resp) {
          this.angulartics2Facebook.eventTrack('Lead', {
            content_name: 'Newsletter Sign Up',
            content_category: 'Acquisition'
          });
          this.angulartics2GoogleTagManager.eventTrack('Newsletter Sign Up', {
            category: 'Acquisition'
          });
          this.toastr.success(
            'Thanks for signing up to the Boxxerworld Newsletter.',
            'Success'
          );
          this.mailchimpForm.reset();
        }
      });
  }

  ngOnDestroy() {}
}
