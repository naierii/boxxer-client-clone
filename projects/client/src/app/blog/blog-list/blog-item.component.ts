import { Component, Input } from '@angular/core';

@Component({
  selector: 'bx-blog-item, [bx-blog-item]',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss'],
})
export class BlogItemComponent {
  @Input()
  item: any;
}
