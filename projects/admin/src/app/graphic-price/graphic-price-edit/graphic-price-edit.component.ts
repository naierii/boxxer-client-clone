import { GraphicPrice, GraphicPriceSize } from '@global/models/graphic-price';
import { StateService } from '@admin/core/services/state.service';
import { BaseEditComponent } from '@admin/shared/components/base-edit/base-edit.component';
import { SocketService } from '@admin/shared/services/socket.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bx-graphic-price-edit',
  templateUrl: './graphic-price-edit.component.html',
  styles: [],
  providers: [
    {
      provide: 'GraphicPriceService',
      useClass: SocketService
    }
  ]
})
export class GraphicPriceEditComponent extends BaseEditComponent
  implements OnInit {
  item: GraphicPrice;
  constructor(
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    @Inject('GraphicPriceService') protected service: SocketService,
    protected router: Router,
    protected state: StateService
  ) {
    super(fb, route, service, router, state);
    service.setup('graphic-price');
  }

  ngOnInit() {
    super.ngOnInit();
  }

  createForm() {
    this.editForm = this.fb.group({
      title: [this.item.title, [Validators.required]],
      description: [this.item ? this.item.description : null],
      type: [this.item.type, [Validators.required]],
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

  initSize(size?: GraphicPriceSize) {
    return this.fb.group({
      title: [size ? size.title : null, Validators.required],
      description: [size ? size.description : null, Validators.required],
      price: [size ? size.price : 0, Validators.required]
    });
  }

  addSize(size?: GraphicPriceSize) {
    const control = this.editForm.controls['sizes'] as FormArray;
    const addrCtrl = this.initSize(size);
    control.push(addrCtrl);
  }

  removeSize(i: number) {
    const control = this.editForm.controls['sizes'] as FormArray;
    control.removeAt(i);
    return false;
  }
}
