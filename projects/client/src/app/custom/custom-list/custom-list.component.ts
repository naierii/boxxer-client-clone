import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@app/core/services/api.service';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { Observable, Subject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { SeoService } from '@app/core/services/seo.service';
import { DataLayerService } from '@app/core/services/data-layer.service';
import { LoadingService } from '@app/core/modules/loading/loading.service';

@Component({
  selector: 'bx-custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.scss'],
})
export class CustomListComponent implements OnInit, OnDestroy {
  page$ = new Subject<number>();
  products$: Observable<any[]>;
  page_data: any;
  currentPage = 1;
  itemsPerPage = 24;
  total: number;
  category: string;
  sortOptions = [
    {
      title: 'Newest',
      query: 'newest',
      sort: {
        createdAt: -1,
      },
    },
    {
      title: 'Popular',
      query: 'popular',
      sort: {
        sold_count: -1,
      },
    },
    {
      title: 'Price High-Low',
      query: 'high-low',
      sort: {
        price: -1,
      },
    },
    {
      title: 'Price Low-High',
      query: 'low-high',
      sort: {
        price: 1,
      },
    },
    {
      title: 'A to Z',
      query: 'az',
      sort: { title: 1 },
    },
    {
      title: 'Z to A',
      query: 'za',
      sort: { title: -1 },
    },
  ];
  sort = 'popular';
  itemsLength: number;
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private seo: SeoService,
    private dataLayer: DataLayerService,
    private loading: LoadingService
  ) {}

  get pageCount() {
    return Math.ceil(this.total / this.itemsPerPage);
  }

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params: any) => {
          this.category = `${this.route.snapshot.parent.url.toString()}/${
            params['catid']
          }`;
          return this.route.queryParams;
        }),
        tap((params: any) => {
          if (params['sort']) {
            this.sort = params['sort'];
          }
          this.getPage(params['p'] || 1);
        }),
        untilComponentDestroyed(this)
      )
      .subscribe();
  }

  getSortTitle() {
    const sortOption = this.sortOptions.find((o) => o.query === this.sort);
    return this.sort !== 'popular' && sortOption && sortOption.title
      ? `: ${sortOption.title}`
      : null;
  }

  getPage(page: number) {
    const sortOption = this.sortOptions.find((o) => o.query === this.sort);
    this.products$ = this.api
      .find('custom-product', {
        $category: this.category,
        published: true,
        $limit: this.itemsPerPage,
        $skip: (page - 1) * this.itemsPerPage,
        $sort: sortOption && sortOption.sort ? sortOption.sort : this.sort,
        $select: [
          'category',
          'code',
          'title',
          'image',
          'price',
          'sale_amount',
          'sale_percent',
          'sale_start_date',
          'sale_end_date',
          'slug',
          'sold_count',
        ],
      })
      .pipe(
        tap((resp: any) => {
          this.currentPage = page;
          this.page_data = resp.page_data;
          this.total = resp.total;
          const section = resp.page_data.parent
            ? `${resp.page_data.parent.title}`
            : resp.page_data.title;
          this.seo.setMetaAndLinks(
            resp.page_data.title,
            resp.page_data.seo,
            section,
            null,
            'product',
            this.currentPage > 1 ? true : false
          );
          this.setParams();
        }),
        map((resp: any) => {
          this.itemsLength = resp.data.length;
          this.dataLayer.customList(resp.data, 'Custom Product List');
          return resp.data;
        })
      );
  }

  filterProducts(option) {
    this.sort = option.query;
    this.getPage(1);
  }

  setParams() {
    const params: any = {};
    if (this.currentPage > 1) {
      params.p = this.currentPage;
    }
    if (this.sort !== 'popular') {
      params.sort = this.sort;
    }
    this.router.navigate([], {
      queryParams: params,
    });
  }

  trackByFn(index, item) {
    return item._id;
  }

  ngOnDestroy() {}
}
