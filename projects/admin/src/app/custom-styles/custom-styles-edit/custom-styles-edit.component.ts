import { SocketService } from '@admin/shared/services/socket.service';
import { StateService } from '@admin/core/services/state.service';
import { BaseEditComponent } from '@admin/shared/components/base-edit/base-edit.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { TINY_RICHTEXT } from '@admin/tinymce';
import {
  CustomProductStyle,
  CustomStyle
} from '@global/models/custom-product-style';

@Component({
  selector: 'bx-custom-styles-edit',
  templateUrl: './custom-styles-edit.component.html',
  providers: [
    {
      provide: 'StyleService',
      useClass: SocketService
    }
  ]
})
export class CustomStylesEditComponent extends BaseEditComponent
  implements OnInit {
  item: CustomProductStyle;
  dropzone_config: any;
  tinymce = TINY_RICHTEXT;
  public oneAtATime = false;
  constructor(
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    @Inject('StyleService') protected service: SocketService,
    protected router: Router,
    protected state: StateService
  ) {
    super(fb, route, service, router, state);
    service.setup('custom-product-style');
  }

  ngOnInit() {
    super.ngOnInit();
  }

  createForm() {
    this.editForm = this.fb.group({
      title: [this.item.title, [Validators.required]],
      description: [this.item.description],
      type: [this.item.type ? this.item.type : 'Style'],
      options: this.fb.array([])
    });
    if (this.item) {
      this.id = this.item._id;
      if (this.item.options) {
        this.item.options.forEach((option, index) => {
          this.addOption(option, index);
        });
      }
    }
  }

  initOption(option?: CustomStyle, index?: number) {
    return this.fb.group({
      _id: [option ? option._id : null],
      title: [option ? option.title : null, Validators.required],
      subtitle: [option ? option.subtitle : null],
      price: [option ? option.price : 0, Validators.required],
      image: [option && option.image ? option.image._id : null],
      weight: [option && option.weight ? option.weight : index]
    });
  }

  addOption(option?: CustomStyle, index?: number) {
    const control = this.editForm.controls['options'] as FormArray;
    const addrCtrl = this.initOption(option, index);
    control.push(addrCtrl);
  }

  removeOption(i: number) {
    const control = this.editForm.controls['options'] as FormArray;
    control.removeAt(i);
    return false;
  }

  get extraData() {
    return {};
  }
}
