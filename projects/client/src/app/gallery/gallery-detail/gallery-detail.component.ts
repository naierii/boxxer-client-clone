import { Image } from '@global/models/image';
import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@app/core/services/api.service';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { DesignCopyService } from '@app/shared/services/design-copy.service';
import { SeoService } from '@app/core/services/seo.service';
import { PlatformService } from '@app/shared-main/services/platform.service';

@Component({
  selector: 'bx-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.scss'],
})
export class GalleryDetailComponent implements OnInit, OnDestroy {
  @ViewChild('imageContainer', { static: false })
  imageContainer: ElementRef;
  gallery$: Observable<any>;
  galleryIndex = 0;

  constructor(
    public ps: PlatformService,
    private api: ApiService,
    private route: ActivatedRoute,
    private designCopy: DesignCopyService,
    private router: Router,
    private seo: SeoService
  ) { }

  get galleryWidth() {
    return this.imageContainer
      ? this.imageContainer.nativeElement.clientWidth
      : 0;
  }

  videoOptions(image: Image) {
    return {
      // tslint:disable-next-line:max-line-length
      mp4: `https://boxxer-images.ams3.cdn.digitaloceanspaces.com/${image.key}`,
    };
  }

  ngOnInit() {
    this.getGallery();
  }

  getGallery() {
    this.gallery$ = this.route.params.pipe(
      switchMap((params: any) => {
        return this.api.get('gallery', params['slug']);
      }),
      tap((gallery: any) => {
        const section = `Gallery | ${gallery.category.title}`;
        this.seo.setMetaAndLinks(
          gallery.title,
          gallery.seo,
          section,
          null,
          'article'
        );
      }),
      untilComponentDestroyed(this)
    );
  }

  copyDesign(design: any) {
    this.designCopy
      .copyDesign(design)
      .pipe(untilComponentDestroyed(this))
      .subscribe(() => {
        this.router.navigate(['/customiser', design.product._id]);
      });
  }

  ngOnDestroy() { }
}
