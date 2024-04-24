import { PlatformService } from '@app/shared-main/services/platform.service';
import {
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@app/core/services/api.service';
import { CustomProduct } from '@global/models/custom-product';
import { Gallery } from '@global/models/gallery';
import { Observable } from 'rxjs';
import {
  map,
  switchMap,
  tap,
  distinctUntilChanged,
  debounceTime,
  share,
} from 'rxjs/operators';
import { SeoService } from '@app/core/services/seo.service';
import { DataLayerService } from '@app/core/services/data-layer.service';
import { JsonldService } from '@app/core/services/jsonld.service';

@Component({
  selector: 'bx-custom-detail',
  templateUrl: './custom-detail.component.html',
  styleUrls: ['./custom-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomDetailComponent implements OnInit, OnDestroy {
  product$: Observable<CustomProduct>;
  ratio: string;
  galleries$: Observable<Gallery[]>;
  design: any;
  gallerySlug: string;
  constructor(
    public jsonld: JsonldService,
    public ps: PlatformService,
    private api: ApiService,
    private route: ActivatedRoute,
    private seo: SeoService,
    private dataLayer: DataLayerService
  ) {}

  ngOnInit() {
    this.product$ = this.route.params.pipe(
      distinctUntilChanged(),
      debounceTime(200),
      switchMap((params: any) => {
        return this.api.get('custom-product', params['slug']);
      }),
      tap((product: CustomProduct) => {
        this.ratio = product.category.aspect_ratio;
        this.getGalleries(product);
        let section = '';
        if (product && product.category) {
          section = product.category.parent
            ? `${product.category.parent.title} | ${product.category.title}`
            : product.category.title;
        }
        this.seo.setMetaAndLinks(
          product.title,
          product.seo,
          section,
          null,
          'product'
        );
        this.dataLayer.customDetail(product);
        this.jsonld.custom(product);
      }),
      share()
    );
  }

  getGalleries(product: CustomProduct) {
    this.galleries$ = this.api
      .find('gallery', {
        product: product._id,
        $limit: 8,
        $sort: { createdAt: -1 },
      })
      .pipe(
        map((r: any) => r.data),
        tap((resp: any[]) => {
          if (resp.length) {
            this.gallerySlug = resp[0].category
              ? `/${resp[0].category.slug}`
              : null;
          }
        })
      );
  }

  trackByFn(index, item) {
    return index; // or item.id
  }

  checkImage(images: any[]) {
    return images && images.length && images[0] && images[0].key
      ? images[0].key
      : false;
  }

  ngOnDestroy() {}
}
