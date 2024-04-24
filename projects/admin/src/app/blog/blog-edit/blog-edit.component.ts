import { SocketService } from '@admin/shared/services/socket.service';
import { StateService } from '@admin/core/services/state.service';
import { BaseEditComponent } from '@admin/shared/components/base-edit/base-edit.component';
import { Image } from '@global/models/image';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { Blog } from '../blog';
import { TINY_RICHTEXT } from '@admin/tinymce';

@Component({
  selector: 'bx-blog-edit',
  templateUrl: './blog-edit.component.html',
  providers: [
    {
      provide: 'BlogService',
      useClass: SocketService
    }
  ]
})
export class BlogEditComponent extends BaseEditComponent implements OnInit {
  item: Blog;
  dropzone_config: any;
  tinymce = TINY_RICHTEXT;
  constructor(
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    @Inject('BlogService') protected service: SocketService,
    protected router: Router,
    protected state: StateService
  ) {
    super(fb, route, service, router, state);
    service.setup('blog');
    this.dropzone_config = {
      params: {
        folder: 'blog'
      }
    };
  }

  ngOnInit() {
    super.ngOnInit();
  }

  createForm() {
    this.editForm = this.fb.group({
      title: [this.item.title, [Validators.required]],
      description: [this.item.description]
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
