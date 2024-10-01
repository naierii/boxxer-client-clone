import { Location } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  ChangeDetectionStrategy
} from '@angular/core';
import { DesignService } from '@app/customiser/services/design.service';
import {
  CustomDesignFlag,
  CustomDesignImage,
  CustomDesignLogo,
  CustomName
} from '@global/models/custom-design';

@Component({
  selector: 'bx-svg-text,[bx-svg-text]',
  templateUrl: './svg-text.component.html',
  styleUrls: ['./svg-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgTextComponent {
  @Input()
  name: CustomName;
  @ViewChild('svgText', { static: true })
  svgText: ElementRef;
  selectedObject:
    | CustomDesignFlag
    | CustomDesignLogo
    | CustomDesignImage
    | CustomName;

  constructor(
    public location: Location,
    private designService: DesignService
  ) {}

  setObject(isSelect: boolean) {
    if (isSelect) {
      this.selectedObject = this.designService.dragObject;
    }
  }

  get bBox(): any {
    return this.svgText.nativeElement.getBBox();
  }

  get currentObject() {
    return this.selectedObject ? this.selectedObject : this.name;
  }

  get base() {
    return this.location.path();
  }

  get filterUrl() {
    return `url(${this.base}#Filter${this.name._id})`;
  }

  get fillUrl() {
    if (this.name.fill) {
      return `url(${this.base}#NameFill${this.name._id}Pattern)`;
    } else {
      return ``;
    }
  }

  get outlineUrl() {
    if (this.name.outline) {
      return `url(${this.base}#NameOutline${this.name._id}Pattern)`;
    } else {
    }
  }

  get width() {
    return (
      this.currentObject.position.width * this.currentObject.position.scale
    );
  }

  get height() {
    return (
      this.currentObject.position.height * this.currentObject.position.scale - 6
    );
  }

  get patchX() {
    return this.currentObject.position.x - 4 - this.center_x;
  }

  get correction() {
    let correction = 0;
    switch (this.name.font) {
      case 'Arial':
        correction = 0;
        break;
      case 'college':
        correction = -2;
        break;
      case 'monte':
        correction = 0;
        break;
      case 'oswaldcustom':
        correction = 0;
        break;
      case 'BERRYBOLD':
        correction = 0;
        break;
      case 'anotherdanger':
        correction = 0;
        break;
      case 'gravtrac':
          correction = 0;
          break;
      case 'ballantines':
        correction = 4;
        break;
    }
    return correction;
  }

  get patchY() {
    return this.currentObject.position.y + this.correction - this.center_y;
  }

  get patchWidth() {
    return this.width + 8;
  }

  get fontSize() {
    const fontSize = this.name.font_size ? this.name.font_size : 12;
    return this.name && this.name.position.scale
      ? fontSize * this.name.position.scale
      : fontSize;
  }

  get strokeWidth() {
    const width = this.name.position.scale * 0.6;
    return this.name && this.name.font === 'ballantines' ? width / 2 : width;
  }

  get center_x() {
    return this.width / 2;
  }

  get center_y() {
    return this.height / 2;
  }

  get patch_transform() {
    return `translate(${this.patchX} ${this.patchY}) rotate(${
      this.currentObject.position.rotate
    } ${this.center_x + 4} ${this.center_y - this.correction})`;
  }

  get rotation_string() {
    return `translate(${this.currentObject.position.x} ${
      this.currentObject.position.y
    }) rotate(${this.currentObject.position.rotate})`;
  }
}
