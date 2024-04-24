import { Component, OnInit, Inject } from '@angular/core';
import { SocketService } from '@admin/shared/services/socket.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { enGbLocale } from 'ngx-bootstrap/locale';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'bx-sale',
  templateUrl: './sale.component.html',
  providers: [
    {
      provide: 'CustomProductService',
      useClass: SocketService
    },
    {
      provide: 'TermService',
      useClass: SocketService
    }
  ]
})
export class SaleComponent implements OnInit {
  editForm: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;
  minDate = new Date();
  terms: any[];
  loading = true;
  constructor(
    private fb: FormBuilder,
    @Inject('CustomProductService') private customProductservice: SocketService,
    @Inject('TermService') private termService: SocketService
  ) {
    customProductservice.setup('custom-product');
    termService.setup('term');
    defineLocale(enGbLocale.abbr, enGbLocale);
    this.minDate = new Date();
    this.bsConfig = Object.assign(
      {},
      {
        containerClass: 'theme-blue',
        showWeekNumbers: false,
        locale: enGbLocale.abbr,
        dateInputFormat: 'DD/MM/YYYY'
      }
    );
  }

  ngOnInit() {
    this.termService
      .find({
        published: true,
        category: '58ac1318dc142c612ab61fad',
        parent: {
          $in: ['58ac1329dc142c612ab61fae', '58ac1333dc142c612ab61faf']
        }
      })
      .subscribe((resp: any) => {
        this.terms = resp.data;
        this.createForm();
      });
  }

  createForm() {
    this.editForm = this.fb.group({
      sale_amount: [null],
      sale_percent: [null],
      sale_start_date: [this.minDate, [Validators.required]],
      sale_end_date: [null, [Validators.required]],
      terms: this.buildTerms()
    });
    this.loading = false;
  }

  buildTerms() {
    const arr = this.terms.map(term => {
      return this.fb.group({
        key: this.fb.control(term._id),
        value: this.fb.control(term.title),
        checked: this.fb.control(false)
      });
    });
    return this.fb.array(arr);
  }

  setPricesCustom(data: any) {
    const terms = data.terms
      .filter(term => {
        return term.checked;
      })
      .map(term => term.key);
    delete data.terms;
    this.customProductservice
      .update(null, data, {
        query: { category: { $in: terms } }
      })
      .subscribe(resp => {
        this.clearForm();
      });
  }

  clearForm() {
    this.editForm.controls.sale_amount.setValue(null);
    this.editForm.controls.sale_amount.updateValueAndValidity();
    this.editForm.controls.sale_percent.setValue(null);
    this.editForm.controls.sale_percent.updateValueAndValidity();
    this.editForm.controls.sale_start_date.setValue(this.minDate);
    this.editForm.controls.sale_start_date.updateValueAndValidity();
    this.editForm.controls.sale_end_date.setValue(null);
    this.editForm.controls.sale_end_date.updateValueAndValidity();
  }
}
