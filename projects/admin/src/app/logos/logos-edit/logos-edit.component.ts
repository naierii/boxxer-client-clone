import { Component, OnInit, Inject } from '@angular/core';
import { SocketService } from '@admin/shared/services/socket.service';
import { Image } from '@global/models/image';
import { Validators, FormBuilder } from '@angular/forms';
import { Logo } from '@global/models/logo';
import { BaseEditComponent } from '@admin/shared/components/base-edit/base-edit.component';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '@admin/core/services/state.service';

@Component({
  selector: 'bx-logos-edit',
  templateUrl: './logos-edit.component.html',
  providers: [
    {
      provide: 'LogoService',
      useClass: SocketService
    }
  ]
})
export class LogosEditComponent extends BaseEditComponent implements OnInit {
  item: Logo;
  dropzone_config: any;
  constructor(
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    @Inject('LogoService') protected service: SocketService,
    protected router: Router,
    protected state: StateService
  ) {
    super(fb, route, service, router, state);
    service.setup('logo');
    this.dropzone_config = {
      params: {
        folder: 'logo'
      }
    };
  }

  ngOnInit() {
    super.ngOnInit();
  }

  createForm() {
    this.editForm = this.fb.group({
      title: [this.item.title, [Validators.required]],
      type: [this.item.type, [Validators.required]]
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
