import { StateService } from '@admin/core/services/state.service';
import { BaseEditComponent } from '@admin/shared/components/base-edit/base-edit.component';
import { SocketService } from '@admin/shared/services/socket.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CustomProductSize,
  CustomSize
} from '@global/models/custom-product-size';

@Component({
  selector: 'bx-custom-sizing-edit',
  templateUrl: './custom-sizing-edit.component.html',
  providers: [
    {
      provide: 'CustomSizeService',
      useClass: SocketService
    }
  ]
})
export class CustomSizingEditComponent extends BaseEditComponent
  implements OnInit {
  item: CustomProductSize;
  constructor(
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    @Inject('CustomSizeService') protected service: SocketService,
    protected router: Router,
    protected state: StateService
  ) {
    super(fb, route, service, router, state);
    service.setup('custom-product-size');
  }

  ngOnInit() {
    super.ngOnInit();
  }

  createForm() {
    this.editForm = this.fb.group({
      title: [this.item.title, [Validators.required]],
      categories: [this.item.categories, [Validators.required]],
      sizes: this.fb.array([])
    });
    if (this.item) {
      this.id = this.item._id;
      if (this.item.sizes) {
        this.item.sizes.forEach(size => {
          this.addSize(size);
        });
      }
    }
  }

  initSize(size?: CustomSize) {
    return this.fb.group({
      title: [size ? size.title : null, Validators.required],
      price_adjust: [size ? size.price_adjust : 0, Validators.required]
    });
  }

  addSize(size?: CustomSize) {
    const control = this.editForm.controls['sizes'] as FormArray;
    const addrCtrl = this.initSize(size);
    control.push(addrCtrl);
  }

  removeSize(i: number) {
    const control = this.editForm.controls['sizes'] as FormArray;
    control.removeAt(i);
    return false;
  }

  groupCategories(items: any[]) {
    return items.map(p => {
      p.group = p.parent.title;
      return p;
    });
  }
}
