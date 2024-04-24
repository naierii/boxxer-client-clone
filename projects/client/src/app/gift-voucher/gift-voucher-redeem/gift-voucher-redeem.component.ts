import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ProductDisplay } from '@global/models/product-display';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'bx-gift-voucher-redeem',
  templateUrl: './gift-voucher-redeem.component.html',
  styleUrls: ['./gift-voucher-redeem.component.scss']
})
export class GiftVoucherRedeemComponent implements OnInit {
  product$: Observable<ProductDisplay>;
  constructor(protected title: Title, protected route: ActivatedRoute) {}

  ngOnInit() {
    this.product$ = this.route.data.pipe(map(data => data.product));
    this.title.setTitle('Gift Voucher Redeem | Boxxerworld');
  }
}
