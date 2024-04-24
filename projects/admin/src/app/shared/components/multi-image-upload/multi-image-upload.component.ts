import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { Image } from '@global/models/image';
import { AuthService } from '@admin/core/services/auth.service';
import { ImageService } from '../../../core/services/image.service';

@Component({
  selector: 'bx-multi-image-upload',
  templateUrl: './multi-image-upload.component.html',
})
export class MultiImageUploadComponent implements OnInit, OnDestroy {
  @Input() images: Image[];
  @Input() config: DropzoneConfigInterface;
  @Input() title: string;
  @Input() maxFiles: number;
  @Output() imageAdded = new EventEmitter<Image[]>();
  @Output() imageRemoved = new EventEmitter<Image[]>();

  dropzone_config: DropzoneConfigInterface;

  default_title = 'Featured Image';
  message =
    '<i class="icon-cloud-upload icons font-5xl d-block mb-2"></i><h3>Click or drag images here to upload</h3>';

  constructor(private auth: AuthService, public imageService: ImageService) {
    this.dropzone_config = {
      headers: {
        Authorization: auth.token,
      },
      uploadMultiple: false,
      autoReset: 2000,
    };
    if (this.maxFiles) {
      this.dropzone_config.maxFiles = this.maxFiles;
    }
  }

  ngOnInit() {
    if (this.images) {
      this.imageService.images = this.images.filter((i) => i !== null);
    }
    this.dropzone_config = Object.assign(this.dropzone_config, this.config);
    if (this.title) {
      this.default_title = this.title;
    }
  }

  onUploadSuccess(resp: any) {
    this.imageService.addImage(resp[1]);
  }

  ngOnDestroy() {
    this.imageService.images = [];
  }
}
