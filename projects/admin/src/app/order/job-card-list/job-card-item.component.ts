import { Component, OnInit, Input } from '@angular/core';
import { environment } from '@env/environment';
import { WindowRefService } from '@admin/window-ref.service';
import { Product } from '@global/models/product';

@Component({
  selector: 'bx-job-card-item, [bx-job-card-item]',
  templateUrl: './job-card-item.component.html'
})
export class JobCardItemComponent implements OnInit {
  @Input() item: any;
  constructor(private winRef: WindowRefService) {}

  ngOnInit() {
    // console.log(this.item);
  }

  get lastestComment() {
    return this.item.order_comments[this.item.order_comments.length - 1];
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

  printJob(e) {
    e.preventDefault();
    e.stopPropagation();
    let popupWinindow;
    popupWinindow = this.winRef.nativeWindow.open(
      `${environment.admin}/orders/job-card/${this.item.orderid}/${
        this.item.item._id
      }?print=true`,
      '_blank',
      'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no'
    );
  }
}
