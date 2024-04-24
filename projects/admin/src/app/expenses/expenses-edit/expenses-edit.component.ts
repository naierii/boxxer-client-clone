import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { SocketService } from '@admin/shared/services/socket.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseEditComponent } from '@admin/shared/components/base-edit/base-edit.component';
import { StateService } from '@admin/core/services/state.service';
import { ImageService } from '@admin/core/services/image.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import * as moment from 'moment';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { enGbLocale } from 'ngx-bootstrap/locale';
import { TINY_RICHTEXT } from '@admin/tinymce';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { take, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'bx-expenses-edit',
  templateUrl: './expenses-edit.component.html',
  providers: [
    {
      provide: 'ExpenseService',
      useClass: SocketService,
    },
  ],
})
export class ExpensesEditComponent extends BaseEditComponent implements OnInit {
  item: any;
  dropzone_config: any;
  bsConfig: Partial<BsDatepickerConfig>;
  tinymce = TINY_RICHTEXT;
  category: string;
  parentCategory: string;
  company: string;
  payers: string[];
  sources: string[];
  properties: string[];
  duplicateForm: FormGroup;
  constructor(
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    @Inject('ExpenseService') protected service: SocketService,
    protected router: Router,
    protected state: StateService,
    private imageService: ImageService
  ) {
    super(fb, route, service, router, state);
    service.setup('expense');
    this.dropzone_config = {
      resizeWidth: 1200,
      acceptedFiles: 'image/*, application/pdf',
      params: {
        folder: 'expense',
      },
    };
    defineLocale(enGbLocale.abbr, enGbLocale);
    this.bsConfig = Object.assign(
      {},
      {
        containerClass: 'theme-blue',
        showWeekNumbers: false,
        locale: enGbLocale.abbr,
        dateInputFormat: 'DD/MM/YY',
      }
    );
  }

  ngOnInit() {
    this.getItem();
  }

  getItem() {
    this.route.data
      .pipe(
        switchMap((data) => {
          this.company = data.company;
          this.parentCategory = data.category;
          return this.route.params;
        }),
        switchMap((params: any) => {
          if (params['id']) {
            return this.service.findOne(params['id']);
          } else {
            this.isNew = true;
            return of({});
          }
        }),
        untilComponentDestroyed(this)
      )
      .subscribe((resp: any) => {
        this.item = resp;
        this.loading = false;
        if (!this.loaded) {
          this.createForm();
        }
        this.loaded = true;
      });
  }

  createForm() {
    if (this.company === 'Boxxerworld') {
      this.payers = [
        'Thatiya Pungpol',
        'Laura Saperstein',
        'Diane Malin',
        'Tik Suwan',
      ];
      this.sources = [
        'Cash',
        'Stripe',
        'Paypal',
        'Boxxer UK',
        'Transferwise',
        'Skrill',
        'Thai Bank',
        'UK Bank',
        'Bank T-fer',
        'Credit Card',
      ];
    } else {
      this.payers = [
        'Aga Brzeska',
        'Vanessa Gills',
        'Laura Saperstein',
        'Diane Malin',
      ];
      this.sources = ['Bank', 'Cash', 'Credit Card'];
      this.properties = [
        'None',
        'Greatfield Cl',
        'Rowstock Gdns',
        'Buxton Cl',
        'Levison Way',
        'Victoria Cres',
        'Weymarks',
        'Saltram Cl',
        'Erskine Cres',
        'Morrison Ave',
        '84 Hamilton Cls  9HW',
        '19 Armadale Cl',
        '71 Armadale Cl',
        '89 Hamilon',
        '122 Arnold',
      ];
    }

    this.editForm = this.fb.group({
      date: [this.item.date, [Validators.required]],
      details: [this.item.details],
      receipt: [
        this.item && this.item.receipt ? this.item.receipt : 'Entered',
        [Validators.required],
      ],
      claimed: [
        this.item && this.item.claimed ? this.item.claimed : 100,
        [Validators.required],
      ],
      payer: [
        this.item && this.item.payer ? this.item.payer : this.payers[0],
        [Validators.required],
      ],
      source: [
        this.item && this.item.source ? this.item.source : this.sources[0],
        [Validators.required],
      ],
      currency: [this.item && this.item.currency ? this.item.currency : 'THB'],
      amount: [this.item.amount, [Validators.required]],
      category: [
        this.item && this.item.term ? this.item.term.parent._id : null,
        [Validators.required],
      ],
      term: [
        this.item && this.item.term ? this.item.term._id : null,
        [Validators.required],
      ],
      country: [
        this.item && this.item.country ? this.item.country : null,
        [Validators.required],
      ],
      property: [this.item && this.item.property ? this.item.property : null],
      company: [this.company],
    });

    this.duplicateForm = this.fb.group({
      date: [this.editForm.get('date').value, [Validators.required]],
      amount: [this.editForm.get('amount').value, [Validators.required]],
    });

    if (this.company !== 'Boxxerworld' && this.isNew) {
      this.editForm.get('currency').setValue('GBP');
      this.editForm.get('currency').setValue('GBP');
      this.editForm.get('country').setValue('UK');
      this.editForm.get('date').setValue(new Date());
    }

    if (this.item) {
      this.id = this.item._id;
    }
  }

  get extraData() {
    const data: any = {};
    data.images = this.imageService.images.map((i) => i._id);
    return data;
  }

  updateItem(data: any) {
    if (data.slug && data.slug !== this.item.slug) {
      data.update_slug = true;
    }
    data = this.removeEmptyValues(data);
    Object.assign(data, this.extraData);
    data.date = moment(this.fixDate(new Date(data.date)))
      .utc()
      .toISOString();
    if (this.isNew) {
      this.service
        .create(data)
        .pipe(untilComponentDestroyed(this))
        .subscribe((resp) => {
          if (resp) {
            this.router.navigate(['../', resp._id], { relativeTo: this.route });
          }
        });
    } else {
      this.service
        .update(this.id || this.item._id, data)
        .pipe(take(1), untilComponentDestroyed(this))
        .subscribe((resp) => {
          if (resp) {
            this.router.navigate(['../'], { relativeTo: this.route });
          }
        });
    }
  }

  fixDate(d: Date): Date {
    d.setHours(d.getHours() - d.getTimezoneOffset() / 60);
    return d;
  }

  duplicateExpense(data: any) {
    let newData = Object.assign(this.editForm.value, data);

    newData.date = moment(this.fixDate(new Date(newData.date)))
      .utc()
      .toISOString();
    newData = this.removeEmptyValues(newData);
    Object.assign(newData, this.extraData);

    this.service
      .create(newData)
      .pipe(untilComponentDestroyed(this))
      .subscribe((resp) => {
        if (resp) {
          this.router.navigate(['../../', resp._id], {
            relativeTo: this.route,
          });
        }
      });
  }
}
