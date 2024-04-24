import { StateService } from '@admin/core/services/state.service';
import { SocketService } from '@admin/shared/services/socket.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Discount } from './../discount';
import { BaseEditComponent } from '@admin/shared/components/base-edit/base-edit.component';
import { Component, OnInit, Inject } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { defineLocale } from 'ngx-bootstrap/chronos';
import { enGbLocale } from 'ngx-bootstrap/locale';

@Component({
  selector: 'bx-discounts-edit',
  templateUrl: './discounts-edit.component.html',
  providers: [
    {
      provide: 'DiscountService',
      useClass: SocketService
    }
  ]
})
export class DiscountsEditComponent extends BaseEditComponent
  implements OnInit {
  item: Discount;
  expiry_date: Date;
  minDate: Date;
  bsConfig: Partial<BsDatepickerConfig>;
  constructor(
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    @Inject('DiscountService') protected service: SocketService,
    protected router: Router,
    protected state: StateService
  ) {
    super(fb, route, service, router, state);
    service.setup('discount');
    this.minDate = new Date();
    defineLocale(enGbLocale.abbr, enGbLocale);
    this.bsConfig = Object.assign(
      {},
      {
        containerClass: 'theme-blue',
        showWeekNumbers: false,
        minDate: this.minDate,
        locale: enGbLocale.abbr
      }
    );
  }

  ngOnInit() {
    super.ngOnInit();
  }

  get expiryDate(): string {
    const date = new Date(this.item.expiry as any);
    return date.toDateString();
  }

  createForm() {
    this.editForm = this.fb.group({
      title: [this.item.title, [Validators.required]],
      code: [this.item.code, [Validators.required]],
      expiry: [this.item.expiry, [Validators.required]],
      percent: [this.item.percent],
      amount: [this.item.amount],
      qty: [this.item.qty]
    });
    if (this.item) {
      this.id = this.item._id;
    }
  }
}
