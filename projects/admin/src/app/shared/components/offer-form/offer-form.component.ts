import { Component, OnInit, Input } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FormGroup, FormControl } from '@angular/forms';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { enGbLocale } from 'ngx-bootstrap/locale';

export interface Offer {
  sale_amount: number;
  sale_percent: number;
  sale_start_date: Date;
  sale_end_date: Date;
}

@Component({
  selector: 'bx-offer-form',
  templateUrl: './offer-form.component.html',
  styles: [],
})
export class OfferFormComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() offer: Offer;
  bsConfig: Partial<BsDatepickerConfig>;
  constructor() {
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
    this.parentForm.addControl(
      'sale_amount',
      new FormControl([this.offer.sale_amount])
    );
    this.parentForm.addControl(
      'sale_percent',
      new FormControl([this.offer.sale_percent])
    );
    this.parentForm.addControl(
      'sale_start_date',
      new FormControl([new Date(this.offer.sale_start_date)])
    );
    this.parentForm.addControl(
      'sale_end_date',
      new FormControl([new Date(this.offer.sale_end_date)])
    );
  }
}
