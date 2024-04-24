import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bx-gallery-item, [bx-gallery-item]',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryItemComponent {
  @Input()
  item: any;
  constructor() {}
}
