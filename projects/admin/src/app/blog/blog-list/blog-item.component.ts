import { Blog } from './../blog';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bx-blog-item, [bx-blog-item]',
  templateUrl: './blog-item.component.html'
})
export class BlogItemComponent {
  @Input() item: Blog;
  @Output() onDeleted = new EventEmitter<string>();

  delete(id: string) {
    this.onDeleted.emit(id);
  }
}
