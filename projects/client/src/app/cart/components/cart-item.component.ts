import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '@app/cart/cart.service';
import { LineItem } from '@global/models/line-item';
import { Product } from '@global/models/product';
import { CookieService } from '@gorniv/ngx-universal';

@Component({
  selector: 'bx-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input()
  cart: LineItem;
  public custom = false;
  public qty: number;
  constructor(
    private cartService: CartService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  get updated(): boolean {
    if (this.qty !== this.cart.qty) {
      return true;
    }
    return false;
  }

  ngOnInit() {
    this.qty = this.cart.qty;
  }

  decreaseQty() {
    if (this.qty > 1) {
      this.qty -= 1;
    }
  }

  increaseQty() {
    this.qty += 1;
  }

  updateItem() {
    this.cartService.updateCart(this.cart._id, { qty: this.qty });
  }

  removeItem() {
    const customDesignCart = this.cookieService.get(`custom-design-cart`);
    if (customDesignCart && customDesignCart === this.cart._id) {
      this.cookieService.remove(`custom-design-cart`);
    }
    this.cartService.removeItem(this.cart._id);
  }

  editDesign(cart: LineItem) {
    if (!cart.custom_product || !cart.custom_design) {
      return;
    }

    this.cookieService.put(
      `custom-design-edit-${cart.custom_product._id}`,
      cart.custom_design.token,
      {
        expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
      }
    );
    this.cookieService.put(`custom-design-cart`, this.cart._id, {
      expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
    });
    this.router.navigate(['/customiser', cart.custom_product._id]);
  }

  getReadyMadeImage(variation: Product) {
    if (!variation) {
      return null;
    }
    
    if (variation.image) {
      return variation.image.key;
    } else if (variation.product_display.image) {
      return variation.product_display.image.key;
    } else if (variation.product_display.images.length) {
      return variation.product_display.images[0].key;
    } else {
      return null;
    }
  }
}
