import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProductDisplay } from '@global/models/product-display';
import { map } from 'rxjs/operators';

@Component({
  selector: 'bx-gift-voucher',
  templateUrl: './gift-voucher.component.html',
  styleUrls: ['./gift-voucher.component.scss']
})
export class GiftVoucherComponent implements OnInit {
  product$: Observable<ProductDisplay>;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.product$ = this.route.data.pipe(map(data => data.product));
  }
}
