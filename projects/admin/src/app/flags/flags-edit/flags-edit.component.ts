import { Flag } from '@global/models/flag';
import { Component, OnInit, Inject } from '@angular/core';
import { SocketService } from '@admin/shared/services/socket.service';
import { BaseEditComponent } from '@admin/shared/components/base-edit/base-edit.component';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '@admin/core/services/state.service';
import { Image } from '@global/models/image';

@Component({
  selector: 'bx-flags-edit',
  templateUrl: './flags-edit.component.html',
  providers: [
    {
      provide: 'FlagService',
      useClass: SocketService
    }
  ]
})
export class FlagsEditComponent extends BaseEditComponent implements OnInit {
  item: Flag;
  dropzone_config: any;
  constructor(
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    @Inject('FlagService') protected service: SocketService,
    protected router: Router,
    protected state: StateService
  ) {
    super(fb, route, service, router, state);
    service.setup('flag');
    this.dropzone_config = {
      params: {
        folder: 'flag'
      }
    };
  }

  ngOnInit() {
    super.ngOnInit();
  }

  createForm() {
    this.editForm = this.fb.group({
      title: [this.item.title, [Validators.required]]
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
