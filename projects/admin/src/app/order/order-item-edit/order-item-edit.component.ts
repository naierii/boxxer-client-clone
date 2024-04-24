import { LineItem } from '@global/models/line-item';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Order } from '@global/models/order';
import { SocketService } from '@admin/shared/services/socket.service';
import { take } from 'rxjs/operators';
import { untilComponentDestroyed } from '@global/untilDestroy';

@Component({
  selector: 'bx-order-item',
  templateUrl: './order-item-edit.component.html',
  styles: [],
  providers: [
    {
      provide: 'ItemService',
      useClass: SocketService
    }
  ]
})
export class OrderItemEditComponent implements OnInit, OnDestroy {
  itemForm: FormGroup;
  public order: Order;
  public item: LineItem;
  public saving = false;
  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    @Inject('ItemService') private itemService: SocketService
  ) {
    itemService.setup('cart-item-admin');
  }

  ngOnInit() {
    this.itemForm = this.fb.group({
      title: [null, Validators.required],
      original_price: [null, Validators.required],
      order: [null, Validators.required],
      code: ['CUSTOM']
    });
  }

  setUp() {
    if (this.order) {
      this.itemForm.get('order').setValue(this.order._id);
    }
    if (this.item) {
      this.itemForm.get('title').setValue(this.item.title);
      this.itemForm.get('original_price').setValue(this.item.original_price);
    }
  }

  saveItem(values) {
    this.saving = true;
    if (this.item) {
      this.itemService
        .update(this.item._id, values)
        .pipe(
          untilComponentDestroyed(this),
          take(1)
        )
        .subscribe(resp => {
          this.hideModal();
          this.saving = false;
        });
    } else {
      this.itemService
        .create(values)
        .pipe(
          untilComponentDestroyed(this),
          take(1)
        )
        .subscribe(resp => {
          this.hideModal();
          this.saving = false;
        });
    }
  }

  hideModal() {
    this.bsModalRef.hide();
  }

  ngOnDestroy() {}
}
