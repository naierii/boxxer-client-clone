import { DesignService } from '@app/customiser/services/design.service';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { environment } from '@env/environment';
import {
  CustomDesignFlag,
  CustomDesignImage,
  CustomDesignLogo,
  CustomName,
} from '@global/models/custom-design';
import { Image } from '@global/models/image';

@Component({
  selector: 'bx-svg-image, [bx-svg-image]',
  templateUrl: './svg-image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgImageComponent {
  @Input()
  object: CustomDesignFlag | CustomDesignLogo | CustomDesignImage | CustomName;
  @Input()
  image: Image;
  selectedObject:
    | CustomDesignFlag
    | CustomDesignLogo
    | CustomDesignImage
    | CustomName;
  constructor(private designService: DesignService) {}

  setObject(isSelect: boolean) {
    if (isSelect) {
      this.selectedObject = this.designService.dragObject;
    }
  }

  get currentObject() {
    return this.selectedObject ? this.selectedObject : this.object;
  }

  get imageUrl() {
    return this.image
      ? `${environment.image_cdn}/${this.image.key}?width=300`
      : null;
  }

  get width() {
    return (
      this.currentObject.position.width * this.currentObject.position.scale
    );
  }

  get height() {
    return (
      this.currentObject.position.height * this.currentObject.position.scale
    );
  }

  get center_x() {
    return this.width / 2;
  }

  get center_y() {
    return this.height / 2;
  }

  get rotation_string() {
    return `translate(${this.currentObject.position.x} ${this.currentObject.position.y}) rotate(${this.currentObject.position.rotate} ${this.center_x} ${this.center_y})`;
  }
}
