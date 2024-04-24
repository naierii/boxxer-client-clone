import { StateService } from '@admin/core/services/state.service';
import { BaseEditComponent } from '@admin/shared/components/base-edit/base-edit.component';
import { SocketService } from '@admin/shared/services/socket.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NameOption } from '@global/models/name-option';

@Component({
  selector: 'bx-custom-names-edit',
  templateUrl: './custom-names-edit.component.html'
})
export class CustomNamesEditComponent extends BaseEditComponent
  implements OnInit {
  item: NameOption;
  constructor(
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    protected service: SocketService,
    protected router: Router,
    protected state: StateService
  ) {
    super(fb, route, service, router, state);
    service.setup('name-option');
  }

  ngOnInit() {
    super.ngOnInit();
  }

  createForm() {
    this.editForm = this.fb.group({
      title: [this.item.title, [Validators.required]],
      price: [this.item.price, [Validators.required]],
      nameId: [this.item.nameId],
      type: [this.item.type, [Validators.required]],
      limit: [this.item.limit]
    });
    if (this.item) {
      this.id = this.item._id;
    }
  }
}
