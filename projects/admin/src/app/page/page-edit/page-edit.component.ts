import { TINY_RICHTEXT } from '@admin/tinymce';
import { StateService } from '@admin/core/services/state.service';
import { SocketService } from '@admin/shared/services/socket.service';
import { BaseEditComponent } from '@admin/shared/components/base-edit/base-edit.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from './../page';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bx-page-edit',
  templateUrl: './page-edit.component.html'
})
export class PageEditComponent extends BaseEditComponent implements OnInit {
  item: Page;
  tinymce = TINY_RICHTEXT;
  constructor(
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    protected service: SocketService,
    protected router: Router,
    protected state: StateService
  ) {
    super(fb, route, service, router, state);
    service.setup('page');
  }

  ngOnInit() {
    super.ngOnInit();
  }

  createForm() {
    this.editForm = this.fb.group({
      title: [this.item.title, [Validators.required]],
      description: [this.item.description, [Validators.required]]
    });
    if (this.item) {
      this.id = this.item._id;
    }
  }
}
