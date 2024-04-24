import { PlatformService } from '@app/shared-main/services/platform.service';
import { CustomProduct } from '@global/models/custom-product';
import { Angulartics2Facebook } from 'angulartics2/facebook';
import { Injectable, Inject } from '@angular/core';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';
import { ProductDisplay } from '@global/models/product-display';
import { Product } from '@global/models/product';
import { LineItem } from '@global/models/line-item';
import { Order } from '@global/models/order';
declare var dataLayer: any;

@Injectable({
  providedIn: 'root'
})
export class DataLayerService {
  private brand = 'Boxxerworld';
  cookieName = 'cookie_consent_given';
  private dataLayer: any[] = [];
  constructor(
    ps: PlatformService,
    private gtm: Angulartics2GoogleTagManager,
    private pixel: Angulartics2Facebook
  ) {
    if (typeof dataLayer !== 'undefined' && dataLayer && ps.isBrowser) {
      this.dataLayer = (window as any).dataLayer =
        (window as any).dataLayer || [];
    }
  }

  pushData(data: any) {
    this.dataLayer.push(data);
  }

  marketingAllowed() {
    this.dataLayer.push({ event: 'marketingAllowed' });
  }

  formatCustomVariation(product: CustomProduct, item?: LineItem): any {
    return {
      id: product.code,
      name: product.title,
      category: `Custom ${product.category.title}`,
      price: item ? item.original_price.toString() : product.price.toString(),
      brand: this.brand
    };
  }

  formatVariation(product: ProductDisplay, variation: Product): any {
    return {
      id: variation.sku,
      name: variation.title,
      category: `Ready Made ${product.product_type.title}`,
      variant: variation.option_name,
      price: variation.price.toString(),
      brand: this.brand
    };
  }

  formatPixelCustomVariation(product: CustomProduct, item?: LineItem): any {
    return {
      id: product.code,
      item_price: item
        ? item.original_price.toString()
        : product.price.toString()
    };
  }

  formatPixelVariation(product: ProductDisplay, variation: Product): any {
    return {
      id: variation.sku,
      item_price: variation.price.toString()
    };
  }

  customList(products: CustomProduct[], list_name) {
    const variations: any = [];
    products.forEach((product, index) => {
      const variation_data = this.formatCustomVariation(product);
      variation_data.list = list_name;
      variation_data.position = index;
      variations.push(variation_data);
    });
    const data = {
      event: 'productsImpression',
      gtmCustom: {
        ecommerce: {
          impressions: variations
        }
      }
    };

    this.gtm.eventTrack('Product Impressions', data);
  }

  productList(products: ProductDisplay[], list_name) {
    const variations: any = [];
    products.forEach((product, index) => {
      product.variations.forEach(variation => {
        const variation_data = this.formatVariation(product, variation);
        variation_data.list = list_name;
        variation_data.position = index;
        variations.push(variation_data);
      });
    });
    const data = {
      event: 'productsImpression',
      gtmCustom: {
        ecommerce: {
          impressions: variations
        }
      }
    };

    this.gtm.eventTrack('Product Impressions', data);
  }

  customDetail(product: CustomProduct) {
    const variations: any = [];
    const variation_data = this.formatCustomVariation(product);
    variation_data.dimension1 = 'Custom Product Detail View';
    variations.push(variation_data);
    const data: any = {
      event: 'productDetail',
      gtmCustom: {
        ecomm_totalvalue: variations[0].price,
        ecomm_prodid: variations.map(v => v.id),
        ecommerce: {
          detail: {
            actionField: { list: 'Custom Product List' },
            products: variations
          }
        }
      }
    };
    this.pixel.eventTrack('ViewContent', {
      currency: 'GBP',
      value: product.price.toString(),
      content_ids: product.code,
      content_name: product.title,
      content_category: product.category.title,
      content_type: 'product_group'
    });

    this.gtm.eventTrack('Product Detail', data);
  }

  productDetail(product: ProductDisplay) {
    const variations: any = [];
    product.variations.forEach(variation => {
      const variation_data = this.formatVariation(product, variation);
      variation_data.dimension1 = 'Product Detail View';
      variations.push(variation_data);
    });
    const data: any = {
      event: 'productDetail',
      gtmCustom: {
        ecomm_totalvalue: variations[0].price.toString(),
        ecomm_prodid: variations.map(v => v.id),
        ecommerce: {
          detail: {
            actionField: { list: 'Ready Made Product List' },
            products: variations
          }
        }
      }
    };

    this.pixel.eventTrack('ViewContent', {
      currency: 'GBP',
      value: variations[0].price.toString(),
      content_ids: product.parent_sku,
      content_name: product.title,
      content_category: product.product_type.title,
      content_type: 'product_group'
    });

    this.gtm.eventTrack('Product Detail', data);
  }

  customClick(product: CustomProduct, index: number) {
    const variations: any = this.formatCustomVariation(product);
    const data = {
      event: 'productClick',
      category: 'Ecommerce',
      gtmCustom: {
        ecommerce: {
          click: {
            actionField: { list: 'Custom Product List' },
            products: variations
          }
        }
      }
    };

    this.gtm.eventTrack('Product Click', data);
  }

  productClick(product: ProductDisplay, index: number) {
    const variations: any = [];
    product.variations.forEach(variation => {
      const variation_data = this.formatVariation(product, variation);
      variation_data.position = index;
      variations.push(variation_data);
    });
    const data = {
      event: 'productClick',
      category: 'Ecommerce',
      gtmCustom: {
        ecommerce: {
          click: {
            actionField: { list: 'Ready Made Product List' },
            products: variations
          }
        }
      }
    };

    this.gtm.eventTrack('Product Click', data);
  }

  addToCart(event: string, action: string, item: LineItem, qty?: number) {
    if (!item) {
      return;
    }
    const variations: any = [];
    let variation_pixel_data;
    let variation_data;
    if (item.product_variation) {
      variation_data = this.formatVariation(
        item.product_variation.product_display,
        item.product_variation
      );
      variation_data.quantity = qty || 1;
      variation_pixel_data = this.formatPixelVariation(
        item.product_variation.product_display,
        item.product_variation
      );
      variation_pixel_data.quantity = (qty || 1).toString();
      variations.push(variation_data);
    }
    if (item.custom_product) {
      variation_data = this.formatCustomVariation(item.custom_product, item);
      variation_data.quantity = qty || 1;
      variation_pixel_data = this.formatPixelCustomVariation(
        item.custom_product,
        item
      );
      variation_pixel_data.quantity = (qty || 1).toString();
      variations.push(variation_data);
    }

    const data = {
      event,
      category: 'Ecommerce',
      gtmCustom: {
        ecomm_totalvalue: (
          variation_data.price * variation_data.quantity
        ).toString(),
        ecomm_prodid: variations.map(v => v.id),
        ecommerce: {
          add: {
            products: variations
          }
        }
      }
    };

    this.gtm.eventTrack(action, data);
    this.pixel.eventTrack('AddToCart', {
      value: item.original_price ? item.original_price.toString() : 0,
      currency: 'GBP',
      content_type: 'product',
      contents: [variation_pixel_data]
    });
  }

  checkoutStep(step, line_items: LineItem[], order: Order) {
    const variations: any = [];
    const pixel_variations: any = [];
    const items = line_items ? line_items : [];
    items.forEach(item => {
      let variation_pixel_data;
      if (item && item.product_variation) {
        const variation_data = this.formatVariation(
          item.product_variation.product_display,
          item.product_variation
        );
        variation_data.quantity = item.qty;
        variations.push(variation_data);
        variation_pixel_data = this.formatPixelVariation(
          item.product_variation.product_display,
          item.product_variation
        );
        variation_pixel_data.quantity = item.qty.toString();
        pixel_variations.push(variation_pixel_data);
      }
      if (item && item.custom_product) {
        const variation_data = this.formatCustomVariation(
          item.custom_product,
          item
        );
        variation_data.quantity = item.qty;
        variations.push(variation_data);
        variation_pixel_data = this.formatPixelCustomVariation(
          item.custom_product,
          item
        );
        variation_pixel_data.quantity = item.qty.toString();
        pixel_variations.push(variation_pixel_data);
      }
    });
    const data = {
      event: 'checkout',
      category: 'Ecommerce',
      gtmCustom: {
        ecommerce: {
          checkout: {
            actionField: { step },
            products: variations
          }
        }
      }
    };

    this.gtm.eventTrack('Checkout', data);

    if (step === 2) {
      this.pixel.eventTrack('InitiateCheckout', {
        currency: 'GBP',
        value: order.total.toString(),
        content_type: 'product',
        contents: pixel_variations
      });
    }
    if (step === 3) {
      this.pixel.eventTrack('AddPaymentInfo', {
        currency: 'GBP',
        value: order.total.toString(),
        content_type: 'product',
        contents: pixel_variations
      });
    }
  }

  purchase(order: Order, items) {
    const variations: any = [];
    const pixel_variations: any = [];
    items.forEach(item => {
      let variation_pixel_data;
      if (item && item.product_variation) {
        const variation_data = this.formatVariation(
          item.product_variation.product_display,
          item.product_variation
        );
        variation_data.quantity = item.qty;
        variations.push(variation_data);
        variation_pixel_data = this.formatPixelVariation(
          item.product_variation.product_display,
          item.product_variation
        );
        variation_pixel_data.quantity = item.qty.toString();
        pixel_variations.push(variation_pixel_data);
      }
      if (item && item.custom_product) {
        const variation_data = this.formatCustomVariation(
          item.custom_product,
          item
        );
        variation_data.quantity = item.qty;
        variations.push(variation_data);
        variation_pixel_data = this.formatPixelCustomVariation(
          item.custom_product,
          item
        );
        variation_pixel_data.quantity = item.qty.toString();
        pixel_variations.push(variation_pixel_data);
      }
    });

    const orderData: any = {
      id: order.orderid,
      revenue: order.total.toString(),
      shipping: order.shippingprice.toString()
    };

    if (order.discountCode) {
      orderData.coupon = order.discountCode;
    }

    const data = {
      event: 'purchase',
      gtmCustom: {
        ecomm_orderid: order.orderid.toString(),
        ecomm_totalvalue: order.total.toString(),
        ecomm_prodid: variations.map(v => v.id),
        ecomm_currency: 'GBP',
        ecommerce: {
          purchase: {
            actionField: orderData,
            products: variations
          }
        }
      }
    };

    this.gtm.eventTrack('Purchase', data);

    this.pixel.eventTrack('Purchase', {
      currency: 'GBP',
      value: order.total.toString(),
      content_type: 'product',
      contents: pixel_variations
    });
  }
}
