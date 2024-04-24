import { ActivatedRoute } from '@angular/router';
import { ProductDisplay } from '@global/models/product-display';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataLayerService } from '@app/core/services/data-layer.service';
import { CartService } from '@app/cart/cart.service';
import { SeoService } from '@app/core/services/seo.service';
import { untilComponentDestroyed } from '@global/untilDestroy';

@Component({
  selector: 'bx-gift-voucher-form',
  templateUrl: './gift-voucher-form.component.html',
  styleUrls: ['./gift-voucher-form.component.scss']
})
export class GiftVoucherFormComponent implements OnInit, OnDestroy {
  addToCartForm: FormGroup;
  product: ProductDisplay;
  minDate = new Date();
  constructor(
    private formBuilder: FormBuilder,
    private dataLayer: DataLayerService,
    private cart: CartService,
    private seo: SeoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.route.data
      .pipe(untilComponentDestroyed(this))
      .subscribe((data: { product: ProductDisplay }) => {
        this.setProduct(data.product);
      });
  }

  setProduct(product: any) {
    this.product = product;
    this.seo.setMetaAndLinks(product.title, product.seo, null, null, 'product');
    this.dataLayer.productDetail(product);
    this.setForm();
  }

  setForm() {
    this.addToCartForm = this.formBuilder.group({
      product_display: [this.product._id],
      product_variation: [this.product.variations[0]._id, Validators.required],
      gift_voucher: this.formBuilder.group({
        recipient_name: [null, Validators.required],
        recipient_email: [null, [Validators.required, Validators.email]],
        sender_name: [null, Validators.required],
        sender_email: [null, Validators.required],
        message: [],
        amount: [
          null,
          [Validators.required, Validators.min(1), Validators.max(150)]
        ],
        send_date: [],
        expire_confirm: [false, Validators.requiredTrue],
        non_refund_confirm: [false, Validators.requiredTrue]
      })
    });
  }

  addToCart(data: any) {
    this.cart.addCartReadyMade(data);
    this.setForm();
  }

  ngOnDestroy() {}
}
