import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { AuthService } from '@admin/core/services/auth.service';

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Image } from '@global/models/image';

@Component({
  selector: 'bx-single-image-upload',
  templateUrl: './single-image-upload.component.html'
})
export class SingleImageUploadComponent implements OnInit {
  @Input()
  image: Image;
  @Input()
  config: DropzoneConfigInterface;
  @Input()
  title: string;
  @Input()
  template = true;
  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  imageAdded = new EventEmitter<Image>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  imageRemoved = new EventEmitter<Image>();
  dropzone_config: DropzoneConfigInterface;
  default_title = 'Featured Image';
  message =
    '<i class="icon-cloud-upload icons font-2xl d-block mb-2"></i><h5>Click or drag images here to upload</h5>';
  constructor(private authService: AuthService) {
    this.dropzone_config = {
      headers: {
        Authorization: authService.token
      },
      uploadMultiple: false,
      maxFiles: 1
    };
  }

  ngOnInit() {
    this.dropzone_config = Object.assign(this.dropzone_config, this.config);
    if (this.title) {
      this.default_title = this.title;
    }
  }

  removeImage() {
    this.image = null;
    this.imageRemoved.emit(this.image);
  }

  onUploadSuccess(resp: any) {
    this.image = resp[1];
    this.imageAdded.emit(this.image);
  }
}
