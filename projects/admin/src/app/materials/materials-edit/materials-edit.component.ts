import { Component, OnInit, Inject } from '@angular/core';
import { Material } from '@global/models/material';
import { SocketService } from '@admin/shared/services/socket.service';
import { BaseEditComponent } from '@admin/shared/components/base-edit/base-edit.component';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '@admin/core/services/state.service';
import { Image } from '@global/models/image';

@Component({
  selector: 'bx-materials-edit',
  templateUrl: './materials-edit.component.html',
  providers: [
    {
      provide: 'MaterialService',
      useClass: SocketService
    }
  ]
})
export class MaterialsEditComponent extends BaseEditComponent
  implements OnInit {
  item: Material;
  dropzone_config: any;
  constructor(
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    @Inject('MaterialService') protected service: SocketService,
    protected router: Router,
    protected state: StateService
  ) {
    super(fb, route, service, router, state);
    service.setup('material');
    this.dropzone_config = {
      resizeWidth: 1200,
      params: {
        folder: 'material'
      }
    };
  }

  ngOnInit() {
    super.ngOnInit();
  }

  createForm() {
    this.editForm = this.fb.group({
      title: [this.item.title, [Validators.required]],
      thai_name: [this.item.thai_name],
      hex: [this.item.hex],
      data_uri: [this.item.data_uri],
      price: [this.item.price],
      groups: [this.item.groups]
    });
    if (this.item) {
      this.id = this.item._id;
    }
  }

  get extraData() {
    if (this.item.image) {
      return { image: this.item.image._id };
    } else {
      return {};
    }
  }

  imageRemoved() {
    this.item.image = null;
  }

  imageAdded(image: Image) {
    this.item.image = image;
  }
}
