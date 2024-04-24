import { Component, OnInit, Inject } from '@angular/core';
import { SocketService } from '@admin/shared/services/socket.service';
import { MaterialGroup } from '@global/models/material-group';
import { BaseEditComponent } from '@admin/shared/components/base-edit/base-edit.component';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '@admin/core/services/state.service';
import { Image } from '@global/models/image';

@Component({
  selector: 'bx-materials-group-edit',
  templateUrl: './materials-group-edit.component.html',
  styles: [],
  providers: [
    {
      provide: 'MaterialService',
      useClass: SocketService
    }
  ]
})
export class MaterialsGroupEditComponent extends BaseEditComponent
  implements OnInit {
  item: MaterialGroup;
  dropzone_config: any;
  constructor(
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    @Inject('MaterialService') protected service: SocketService,
    protected router: Router,
    protected state: StateService
  ) {
    super(fb, route, service, router, state);
    service.setup('material-group');
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
      hex: [this.item.hex]
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
