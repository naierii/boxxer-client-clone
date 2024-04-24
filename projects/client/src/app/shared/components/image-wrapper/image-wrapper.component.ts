import {
  Component,
  Input,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'bx-image-wrapper, [bxImageWrapper]',
  templateUrl: './image-wrapper.component.html',
  styleUrls: ['./image-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageWrapperComponent {
  @Input() aspect_ratio: number;
  @HostBinding('style.padding-top.%') get padding() {
    return 100 / this.aspect_ratio;
  }
}
