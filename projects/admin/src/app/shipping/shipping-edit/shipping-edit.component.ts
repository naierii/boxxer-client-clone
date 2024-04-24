import { StateService } from '@admin/core/services/state.service';
import { SocketService } from '@admin/shared/services/socket.service';
import { BaseEditComponent } from '@admin/shared/components/base-edit/base-edit.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Shipping } from '@global/models/shipping';

@Component({
  selector: 'bx-shipping-edit',
  templateUrl: './shipping-edit.component.html',
  styleUrls: ['./shipping-edit.component.scss']
})
export class ShippingEditComponent extends BaseEditComponent implements OnInit {
  item: Shipping;
  constructor(
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    protected service: SocketService,
    protected router: Router,
    protected state: StateService
  ) {
    super(fb, route, service, router, state);
    service.setup('shipping');
  }

  ngOnInit() {
    super.ngOnInit();
  }

  createForm() {
    this.editForm = this.fb.group({
      type: [this.item.type, [Validators.required]],
      shipping_type: [this.item.shipping_type, [Validators.required]],
      description: [this.item.description, [Validators.required]],
      firstPrice: [this.item.firstPrice, [Validators.required]],
      secondPrice: [this.item.secondPrice, [Validators.required]]
    });
    if (this.item && this.item._id) {
      this.id = this.item._id;
      this.editForm.get('type').disable();
    }
  }
}
