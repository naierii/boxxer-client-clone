import { Gallery } from './../gallery';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'bx-gallery-item, [bx-gallery-item]',
  templateUrl: './gallery-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryItemComponent {
  @Input()
  gallery: Gallery;
  @Output()
  onDeleted = new EventEmitter<string>();

  delete(id: string) {
    this.onDeleted.emit(id);
  }

  checkImage(images: any[]) {
    const filterImages = images.filter(i => i).filter(i => {
      if (i.key) {
        return i;
      }
    });
    return filterImages && filterImages.length && filterImages[0].key
      ? filterImages[0].key
      : false;
  }
}
