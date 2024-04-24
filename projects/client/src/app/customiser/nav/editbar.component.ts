import {
  Component,
  HostBinding,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Router } from '@angular/router';
import { slideUpAnimation } from '@app/route.animation';
import {
  CustomDesignFlag,
  CustomDesignImage,
  CustomDesignLogo,
  CustomName,
} from '@global/models/custom-design';
import { Image } from '@global/models/image';

import { CustomiserOptionsService } from './../services/customiser-options.service';
import { DesignService } from './../services/design.service';

@Component({
  selector: 'bx-editbar',
  templateUrl: './editbar.component.html',
  styleUrls: ['./editbar.component.scss'],
  animations: [slideUpAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditbarComponent {
  @Input()
  logo: CustomDesignLogo;
  @Input()
  flag: CustomDesignFlag;
  @Input()
  name: CustomName;
  @Input()
  upload: CustomDesignImage;
  @HostBinding('@slideUpAnimation')
  get slideUp() {
    return '';
  }
  constructor(
    private router: Router,
    private optionsService: CustomiserOptionsService,
    private designService: DesignService
  ) {}

  get image(): Image {
    if (this.flag) {
      return this.flag.flag.image;
    } else if (this.logo) {
      return this.logo.image.image;
    } else {
      return this.upload.image;
    }
  }

  get item():
    | CustomDesignFlag
    | CustomDesignLogo
    | CustomDesignImage
    | CustomName {
    return this.flag || this.logo || this.name || this.upload;
  }

  saveItem() {
    this.designService.updateObject(this.item, `${this.item.type}s`);
    this.designService.selectedObject = null;
  }

  editItem() {
    this.router.navigate(
      [this.optionsService.menuUrl, this.item.type, this.item._id],
      {
        skipLocationChange: true,
      }
    );
    this.designService.selectedObject = null;
  }

  deleteItem() {
    this.designService.saveOption(true, {
      $pull: {
        [`${this.item.type}s`]: { _id: this.item._id },
      },
    });
    this.optionsService.backToMenu();
  }
}
