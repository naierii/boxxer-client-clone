import { DataLayerService } from '@app/core/services/data-layer.service';
import { CustomProduct } from '@global/models/custom-product';
import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'bx-custom-item, [bx-custom-item]',
  templateUrl: './custom-item.component.html',
  styleUrls: ['./custom-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomItemComponent {
  @Input() item: CustomProduct;
  @Input()
  position: number;
  constructor(private dataLayer: DataLayerService) {}

  imageTitle() {
    return `${this.item.title} | Custom ${this.item.category.title} | Boxxerworld`;
  }
  productClicked() {
    this.dataLayer.customClick(this.item, this.position);
  }
}
