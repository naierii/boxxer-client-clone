import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Gallery } from '@global/models/gallery';
import {
  map,
  switchMap,
  startWith,
  tap,
  distinctUntilChanged,
} from 'rxjs/operators';
import { ApiService } from '@app/core/services/api.service';

@Component({
  selector: 'bx-custom-gallery',
  templateUrl: './custom-gallery.component.html',
  styleUrls: ['./custom-gallery.component.scss'],
})
export class CustomGalleryComponent implements OnInit, OnChanges {
  @Input() page_data: any;
  catUpdate = new Subject<string>();
  galleries$: Observable<Gallery[]>;
  loading = true;
  constructor(private api: ApiService) {}

  get category() {
    const slugParts = this.page_data.slug.split('/').pop();
    return `gallery/${slugParts}`;
  }

  ngOnInit() {
    this.galleries$ = this.catUpdate.pipe(
      distinctUntilChanged(),
      startWith(this.category),
      switchMap(() => {
        return this.api.find(
          'gallery',
          {
            $category: this.category,
            $limit: 8,
            $sort: { createdAt: -1 },
            $select: [
              'title',
              'category',
              'product',
              'list_image',
              'slug',
              'images',
            ],
          },
          false
        );
      }),
      map((r: any) => r.data),
      tap((resp) => {
        this.loading = false;
      })
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.page_data && !changes.page_data.firstChange) {
      this.loading = true;
      this.catUpdate.next(this.category);
    }
  }
}
