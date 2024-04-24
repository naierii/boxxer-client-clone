import { StateService } from '@admin/core/services/state.service';
import { BaseEditComponent } from '@admin/shared/components/base-edit/base-edit.component';
import { TINY_RICHTEXT } from '@admin/tinymce';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TermService } from './../term.service';
import { Term } from '@global/models/term';

@Component({
  selector: 'bx-term-edit',
  templateUrl: './term-edit.component.html'
})
export class TermEditComponent extends BaseEditComponent implements OnInit {
  item: Term;
  dropzone_config: any;
  tinymce = TINY_RICHTEXT;
  currentCategory: string;
  constructor(
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    protected service: TermService,
    protected router: Router,
    protected state: StateService
  ) {
    super(fb, route, service, router, state);
    service.setup('term');
    this.dropzone_config = {
      params: {
        folder: 'term'
      }
    };
  }

  ngOnInit() {
    super.ngOnInit();
  }

  createForm() {
    this.currentCategory = this.route.snapshot.params['catid'];
    this.editForm = this.fb.group({
      title: [this.item ? this.item.title : null, [Validators.required]],
      admin_title: [this.item ? this.item.admin_title : null],
      description: [this.item ? this.item.description : null],
      category: [this.route.snapshot.params['catid']],
      parent: [this.item && this.item.parent ? this.item.parent._id : 'None'],
      aspect_ratio: [this.item ? this.item.aspect_ratio : null]
    });
    if (this.item) {
      this.id = this.item._id;
    }
  }
}
