import { ProductDisplay } from '@global/models/product-display';
import { Component, Input } from '@angular/core';
import { DataLayerService } from '@app/core/services/data-layer.service';

@Component({
  selector: 'bx-product-item, [bx-product-item]',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input()
  item: ProductDisplay;
  @Input()
  position: number;
  constructor(private dataLayer: DataLayerService) {}

  get mainImage() {
    return this.item.image ? this.item.image : this.item.images[0];
  }

  get price() {
    return this.item && this.item.variations.length
      ? this.item.variations[0].price
      : 0;
  }

  get sale_price() {
    return this.item && this.item.variations.length
      ? this.item.variations[0].sale_price
      : 0;
  }

  productClicked() {
    this.dataLayer.productClick(this.item, this.position);
  }
}
