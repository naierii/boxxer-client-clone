import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
  Injector
} from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import {
  StripeService,
  Elements,
  Element as StripeElement,
  ElementsOptions
} from 'ngx-stripe';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { switchMap } from 'rxjs/operators';
import { LoadingService } from '@app/core/modules/loading/loading.service';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { SentryService } from '@global/sentry/sentry.service';

@Component({
  selector: 'bx-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.scss']
})
export class CardAddComponent implements OnInit, OnDestroy {
  form: FormGroup;
  elements: Elements;
  card: StripeElement;
  @ViewChild('card', { static: true })
  cardRef: ElementRef;
  constructor(
    private api: ApiService,
    private stripeService: StripeService,
    private fb: FormBuilder,
    private loading: LoadingService,
    private injector: Injector,
    private router: Router,
    private toastr: ToastrService,
    private sentryService: SentryService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      complete: [null, Validators.required],
      name: [null, Validators.required]
    });
    this.stripeService
      .elements()
      .pipe(untilComponentDestroyed(this))
      .subscribe(elements => {
        this.elements = elements;
        this.setUpCard();
      });
  }

  setUpCard() {
    const elementStyles = {
      base: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',
        iconColor: '#3e3935',
        color: '#3e3935',
        '::placeholder': {
          color: '#9e9e9e'
        },
        ':-webkit-autofill': {
          color: '#9e9e9e'
        }
      },
      invalid: {
        color: '#f44336',
        ':focus': {
          color: '#f44336'
        },
        iconColor: '#f44336'
      },
      complete: {
        color: '#19a449',
        ':focus': {
          color: '#19a449'
        },
        iconColor: '#19a449'
      }
    };

    if (!this.card) {
      this.card = this.elements.create('card', {
        hidePostalCode: true,
        iconStyle: 'solid',
        style: elementStyles
      });
      this.card.mount(this.cardRef.nativeElement);
      this.card.on('change', this.onChange.bind(this));
    }
  }

  onChange(event) {
    if (event.complete === false) {
      this.form.controls['complete'].setValue(null);
    } else if (event.complete) {
      this.form.controls['complete'].setValue(true);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  closeKeyboard() {
    this.card.focus();
    setTimeout(() => {
      this.card.blur();
    });
  }

  addCard() {
    if (this.form.valid) {
      this.loading.show();
      const data = this.form.value;
      this.closeKeyboard();
      const extra_data = {
        name: `${data.name}`
      };
      this.stripeService
        .createToken(this.card, extra_data)
        .pipe(
          switchMap((resp: any) => {
            if (resp.error) {
              this.toastr.error(resp.error.message, 'Card failed');
              this.loading.hide();
              this.handleError(resp.error);
              return of({});
            }

            return this.api.create('users/cards', resp.token);
          }),
          untilComponentDestroyed(this)
        )
        .subscribe(
          resp => {
            this.loading.hide();
            this.router.navigate(['/account/cards']);
          },
          err => {
            this.loading.hide();
            if (err) {
              this.handleError(err);
            }
          }
        );
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  handleError(err) {
    this.sentryService.captureEvent(err.error ? err.error : err);
  }

  ngOnDestroy() {
    if (this.card) {
      this.card.unmount();
    }
  }
}
