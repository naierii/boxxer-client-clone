import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@app/core/services/api.service';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { SeoService } from '@app/core/services/seo.service';
import { DataLayerService } from '@app/core/services/data-layer.service';

@Component({
  selector: 'bx-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Observable<any[]>;
  page_data: any;
  currentPage = 1;
  itemsPerPage = 24;
  total: number;
  category: string;
  itemsLength: number;
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private seo: SeoService,
    private dataLayer: DataLayerService
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
          this.getPage(params['p'] || 1);
        }),
        untilComponentDestroyed(this)
      )
      .subscribe();
  }

  getPage(page: number) {
    this.products = this.api
      .find('product-display', {
        $category: this.category,
        type: 'Variable',
        $limit: this.itemsPerPage,
        $skip: (page - 1) * this.itemsPerPage,
        published: true,
        $sort: {
          createdAt: -1
        }
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
          this.dataLayer.productList(resp.data, 'Ready Made Product List');
          return resp.data;
        }),
        untilComponentDestroyed(this)
      );
  }

  setParams() {
    const params: any = {};
    if (this.currentPage > 1) {
      params.p = this.currentPage;
    }
    this.router.navigate([], {
      queryParams: params
    });
  }

  ngOnDestroy() {}
}
