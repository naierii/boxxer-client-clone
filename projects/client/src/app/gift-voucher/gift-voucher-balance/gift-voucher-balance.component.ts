import { Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { GiftVoucher } from '@global/models/gift-voucher';

@Component({
  selector: 'bx-gift-voucher-balance',
  templateUrl: './gift-voucher-balance.component.html',
  styleUrls: ['./gift-voucher-balance.component.scss']
})
export class GiftVoucherBalanceComponent implements OnInit, OnDestroy {
  checkBalanceForm: FormGroup;
  voucher: GiftVoucher;
  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
    private title: Title
  ) {}

  ngOnInit() {
    this.checkBalanceForm = this.formBuilder.group({
      code: [null, Validators.required]
    });
    this.title.setTitle('Gift Voucher Balance | Boxxerworld');
  }

  checkCode(data: any) {
    this.api
      .find('voucher/check', data)
      .pipe(untilComponentDestroyed(this))
      .subscribe((resp: any) => {
        this.voucher = resp;
        this.checkBalanceForm.reset();
      });
  }
  ngOnDestroy() {}
}
