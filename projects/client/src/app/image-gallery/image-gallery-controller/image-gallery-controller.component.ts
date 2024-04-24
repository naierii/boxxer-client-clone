import { ImageGalleryComponent } from './../image-gallery/image-gallery.component';
import {
  Component,
  OnInit,
  ViewChild,
  Input,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { Subject, of } from 'rxjs';
import { Gallery } from '@global/models/gallery';
import { GALLERY_IMAGE } from '../image-gallery.conf';
import { ApiService } from '@app/core/services/api.service';
import { PlatformService } from '@app/shared-main/services/platform.service';
import { switchMap, takeUntil } from 'rxjs/operators';
import { CustomProduct } from '@global/models/custom-product';
import { componentDestroyed } from '@w11k/ngx-componentdestroyed';

@Component({
  selector: 'bx-image-gallery-controller',
  templateUrl: './image-gallery-controller.component.html',
  styleUrls: ['./image-gallery-controller.component.scss'],
})
export class ImageGalleryControllerComponent implements OnInit, OnDestroy {
  @ViewChild(ImageGalleryComponent, { static: true })
  imageGallery: ImageGalleryComponent;
  images: GALLERY_IMAGE[] = [];
  image_url = 'https://img.boxxerworld.com';
  @Input()
  galleries: Gallery[];
  gallerySelect = new Subject<string[]>();
  selectedGallery: Gallery[] = [];
  limit = 25;
  page = 1;
  total = 0;
  @Input()
  showProduct = true;
  get skip() {
    return (this.page - 1) * this.limit;
  }
  constructor(
    private api: ApiService,
    private ps: PlatformService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.gallerySelect
      .pipe(
        switchMap((resp: string[]) =>
          this.api.find('gallery', {
            category: resp,
            $limit: this.limit,
            $skip: this.skip,
            $sort: { createdAt: -1 },
          })
        ),
        switchMap((resp: any) => {
          this.total = resp.total;
          const winWidth = this.ps.getNativeWindow().innerWidth;
          const imgWidth =
            winWidth < 1200 ? 100 * Math.ceil(winWidth / 100) : 1200;
          const formatImages = [];

          resp.data.forEach((i: Gallery) => {
            const product: CustomProduct = i.product
              ? i.product
              : this.selectedGallery[0].product;

            let productInfo = {};
            if (product) {
              productInfo = {
                _id: i._id,
                productTitle: product.title,
                galleryTitle: i.title,
                productUrl: `/${product.category.slug}/${product.slug}`,
                productImageUrl: `${this.image_url}/${product.image.key}?width=150`,
              };
            }

            i.images.forEach((image) => {
              if (image.format !== 'video' && image.key) {
                formatImages.push({
                  url: `${this.image_url}/${image.key}?width=${imgWidth}`,
                  altText: i.title,
                  title: i.title,
                  ...productInfo,
                });
              }
            });
          });

          this.images = this.images.concat(formatImages);
          return of(this.images);
        }),
        takeUntil(componentDestroyed(this))
      )
      .subscribe(() => {
        this.cdr.detectChanges();
        const index = this.images.findIndex(
          (i) => i._id === this.selectedGallery[0]._id
        );
        this.imageGallery.loading = false;
        this.imageGallery.open(index);
        const loadImages = this.images.map((i) => {
          return new Promise((resolve, reject) => {
            const image = new Image();
            image.src = i.url;
            image.onload = () => {
              i._cached = true;
              resolve();
            };
            image.onerror = (error) => {
              resolve();
            };
          });
        });

        Promise.all(loadImages);
      });
  }

  getImages(galleries: Gallery[]) {
    this.imageGallery.loading = true;
    const currentGalleries = this.selectedGallery.map((g) => g._id);
    const newGalleries = galleries.map((g) => g._id);
    const c = currentGalleries.filter((i) => {
      return !newGalleries.indexOf(i);
    });
    this.page = 1;
    this.images = [];
    this.selectedGallery = galleries;
    this.gallerySelect.next(this.selectedGallery.map((g) => g.category._id));
  }

  galleryImageChanged(index) {
    const imageCount = index + 1;
    const threshold = this.images.length - 5;
    if (
      this.total > this.limit &&
      this.images.length < this.total &&
      imageCount === threshold
    ) {
      this.page += this.page;
      this.gallerySelect.next(this.selectedGallery.map((g) => g.category._id));
    }
  }

  ngOnDestroy() {}
}
