import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from '@admin/core/services/auth.service';
import { FormGroup } from '@angular/forms';
import { Image } from '@global/models/image';

@Component({
  selector: 'bx-custom-styles-option',
  templateUrl: './custom-styles-option.component.html',
})
export class CustomStylesOptionComponent implements OnChanges {
  @Input() public group: FormGroup;
  @Input() image: Image;
  @Input() index: number;
  dropzone_config: any;
  constructor(authService: AuthService) {
    this.dropzone_config = {
      headers: {
        Authorization: authService.token,
      },
      uploadMultiple: false,
      maxFiles: 1,
      params: {
        folder: 'custom-product-style',
      },
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.index && !changes.index.firstChange) {
      this.group.get('weight').setValue(changes.index.currentValue);
    }
  }

  removeImage() {
    this.image = null;
    this.group.controls.image.setValue(null);
  }

  onUploadSuccess(resp: any) {
    this.image = resp[1];
    this.group.controls.image.setValue(this.image._id);
  }
}
