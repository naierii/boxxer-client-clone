import { TINY_RICHTEXT } from '@admin/tinymce';
import { StateService } from '@admin/core/services/state.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from './../category.service';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseEditComponent } from '@admin/shared/components/base-edit/base-edit.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bx-category-edit',
  templateUrl: './category-edit.component.html'
})
export class CategoryEditComponent extends BaseEditComponent implements OnInit {
  item: any;
  tinymce = TINY_RICHTEXT;
  constructor(
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    protected service: CategoryService,
    protected router: Router,
    protected state: StateService
  ) {
    super(fb, route, service, router, state);
    service.setup('category');
  }

  ngOnInit() {
    super.ngOnInit();
  }

  createForm() {
    this.editForm = this.fb.group({
      title: [this.item.title, [Validators.required]],
      body: [this.item.body],
      product_attribute: [
        this.route.snapshot.data &&
        this.route.snapshot.data.query &&
        this.route.snapshot.data.query.product_attribute
          ? true
          : false
      ]
    });
    if (this.item) {
      this.id = this.item._id;
    }
  }
}
