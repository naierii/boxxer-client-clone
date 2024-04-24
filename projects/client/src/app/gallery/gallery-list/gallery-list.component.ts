import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@app/core/services/api.service';
import { componentDestroyed } from '@w11k/ngx-componentdestroyed';
import { Observable } from 'rxjs';
import {
  map,
  switchMap,
  tap,
  debounceTime,
  distinctUntilChanged,
  takeUntil
} from 'rxjs/operators';
import { SeoService } from '@app/core/services/seo.service';

@Component({
  selector: 'bx-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent implements OnInit, OnDestroy {
  searchForm: FormGroup;
  galleries: Observable<any[]>;
  page_data: any;
  product: string;
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
    private fb: FormBuilder
  ) {}

  get pageCount() {
    return Math.ceil(this.total / this.itemsPerPage);
  }

  get terms() {
    return this.searchForm.get('terms').value;
  }

  set terms(terms: string) {
    this.searchForm.get('terms').setValue(terms);
  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      terms: []
    });
    this.searchForm
      .get('terms')
      .valueChanges.pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        takeUntil(componentDestroyed(this))
      )
      .subscribe(terms => {
        this.setParams();
      });
    this.route.params
      .pipe(
        switchMap((params: any) => {
          this.category = `${this.route.snapshot.parent.url.toString()}/${
            params['catid']
          }`;
          return this.route.queryParams;
        }),
        tap((params: any) => {
          if (!params['product']) {
            this.product = null;
          }
          this.terms = params.q || null;
          this.getPage(params['p'] || 1, params['product']);
        }),
        takeUntil(componentDestroyed(this))
      )
      .subscribe();
  }

  getPage(page: number, product?: string) {
    let galleryQuery: any = {
      $category: this.category,
      published: true,
      $limit: this.itemsPerPage,
      $skip: (page - 1) * this.itemsPerPage,
      $sort: { createdAt: -1 },
      product,
      $select: ['title', 'category', 'product', 'list_image', 'slug', 'images']
    };

    if (this.terms) {
      galleryQuery = {
        ...galleryQuery,
        $search: this.terms
      };
    }

    if (product) {
      galleryQuery = {
        ...galleryQuery,
        product
      };
    }

    this.galleries = this.api.find('gallery', galleryQuery).pipe(
      tap((resp: any) => {
        this.currentPage = page;
        this.product = !product ? this.product : product;
        this.page_data = resp.page_data;
        this.total = resp.total;
        this.setParams();
        this.seo.setMetaAndLinks(
          resp.page_data.title,
          resp.page_data.seo,
          'Gallery',
          null,
          null,
          this.currentPage > 1 ? true : false
        );
      }),
      map((resp: any) => {
        this.itemsLength = resp.data.length;
        return resp.data;
      }),
      takeUntil(componentDestroyed(this))
    );
  }

  setParams() {
    const params: any = {};
    if (this.currentPage > 1) {
      params.p = this.currentPage;
    }
    if (this.product) {
      params.product = this.product;
    }
    if (this.terms) {
      params.q = this.terms;
    }
    this.router.navigate([], {
      queryParams: params
    });
  }

  ngOnDestroy() {}
}
