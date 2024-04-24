import { Component, Input } from '@angular/core';

@Component({
  selector: 'bx-image-thumb',
  templateUrl: './image-thumb.component.html',
  styles: [],
})
export class ImageThumbComponent {
  @Input() public_id: string;
  @Input() size = 80;
}
