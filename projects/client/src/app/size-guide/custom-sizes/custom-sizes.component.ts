import { Term } from '@global/models/term';
import { Size } from '@global/models/size';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { Page } from '@global/models/page';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'bx-custom-sizes',
  templateUrl: './custom-sizes.component.html',
  styleUrls: ['./custom-sizes.component.scss']
})
export class CustomSizesComponent implements OnInit {
  sizes$: Observable<Size[]>;
  page$: Observable<Page>;
  terms$: Observable<Term[]>;
  sizes: string[];
  selectedSize: string;
  selectedType: string;
  constructor(private api: ApiService) {
    this.page$ = api.get('page', 'size-guide');
    this.terms$ = api
      .find('term', {
        category: '58ac1318dc142c612ab61fad',
        parent: '58ac1329dc142c612ab61fae',
        $sort: { weight: 1 }
      })
      .pipe(map((resp: any) => resp.data));
  }

  ngOnInit() {}

  getSizes(category: string, size = false) {
    const query: any = {
      category
    };
    if (this.selectedSize) {
      query.size = this.selectedSize;
    }

    this.sizes$ = this.api
      .find('size', {
        ...query,
        $limit: 48,
        $sort: { weight: 1 }
      })
      .pipe(
        map((resp: any) => resp.data),
        tap((resp: any) => {
          if (!size) {
            this.sizes = resp
              .map((s: any) => s.size)
              .filter((v, i, a) => a.indexOf(v) === i);
          }
        })
      );
  }

  filterByType(id: string) {
    this.selectedType = id;
    this.selectedSize = null;
    this.getSizes(id, false);
  }

  filterBySize(size: string) {
    this.selectedSize = size;
    this.getSizes(this.selectedType, true);
  }
}
