import { EmailContent } from '@global/models/email-content';
import { Component, OnInit, Inject } from '@angular/core';
import { SocketService } from '@admin/shared/services/socket.service';
import { BaseEditComponent } from '@admin/shared/components/base-edit/base-edit.component';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '@admin/core/services/state.service';
import { TINY_RICHTEXT } from '@admin/tinymce';

@Component({
  selector: 'bx-email-edit',
  templateUrl: './email-edit.component.html',
  providers: [
    {
      provide: 'EmailService',
      useClass: SocketService
    }
  ]
})
export class EmailEditComponent extends BaseEditComponent implements OnInit {
  item: EmailContent;
  tinymce = TINY_RICHTEXT;
  types = ['Order', 'Production'];
  constructor(
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    @Inject('EmailService') protected service: SocketService,
    protected router: Router,
    protected state: StateService
  ) {
    super(fb, route, service, router, state);
    service.setup('email-content');
  }

  ngOnInit() {
    super.ngOnInit();
  }

  createForm() {
    this.editForm = this.fb.group({
      title: [this.item.title, [Validators.required]],
      description: [this.item.description, [Validators.required]],
      type: [this.item.type, [Validators.required]]
    });
    if (this.item) {
      this.id = this.item._id;
    }
  }
}
