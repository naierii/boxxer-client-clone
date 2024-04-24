import { Component, Input } from '@angular/core';
import { Image } from '@global/models/image';
@Component({
  selector: 'bx-image-list',
  templateUrl: './image-list.component.html'
})
export class ImageListComponent {
  @Input() images: Image[];
  constructor() { }
}
