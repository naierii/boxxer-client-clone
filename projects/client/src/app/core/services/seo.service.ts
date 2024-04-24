import { PlatformService } from '@app/shared-main/services/platform.service';
import { LinkService } from './link.service';
import { Injectable, OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Image } from '@global/models/image';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class SeoService implements OnDestroy {
  private defaultEndPageTitle = 'Boxxerworld';
  private endPageTitle = '';
  constructor(
    private title: Title,
    private meta: Meta,
    private location: Location,
    private link: LinkService,
    private ps: PlatformService
  ) {}

  setMetaAndLinks(
    item_title: string,
    seo: any,
    section?: string,
    image?: Image,
    type?: string,
    remove_canonical?: boolean
  ) {
    const url = `${environment.site}${this.location.path()}`;
    let social_image = `${environment.site}/assets/img/facebook-logo.jpg`;
    if (image) {
      social_image = `${environment.image_cdn}/${image.key}?crop=smart&width=1200&height=630`;
    }

    this.endPageTitle = section
      ? `${section} | ${this.defaultEndPageTitle}`
      : `${this.defaultEndPageTitle}`;

    const title =
      seo && seo.title
        ? `${seo.title} | ${this.endPageTitle}`
        : `${item_title} | ${this.endPageTitle}`;

    this.title.setTitle(title);

    this.meta.updateTag({
      name: 'description',
      content: seo ? seo.description : '',
    });

    // Facebook tags
    this.meta.updateTag({ property: 'fb:pages', content: '253804241349130' });

    this.meta.updateTag({ property: 'og:title', content: title });

    this.meta.updateTag({
      property: 'og:description',
      content: seo ? seo.description : '',
    });

    this.meta.updateTag({
      property: 'og:url',
      content: url,
    });

    this.meta.updateTag({
      property: 'og:image',
      content: social_image,
    });

    this.meta.updateTag({
      property: 'og:image:width',
      content: '1200',
    });

    this.meta.updateTag({
      property: 'og:image:height',
      content: '630',
    });

    this.meta.updateTag({
      property: 'og:type',
      content: type,
    });

    // Twitter

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    this.meta.updateTag({
      name: 'twitter:site',
      content: '@boxxerworld',
    });

    this.meta.updateTag({ name: 'twitter:title', content: title });

    this.meta.updateTag({
      name: 'twitter:description',
      content: seo ? seo.description : '',
    });

    this.meta.updateTag({
      name: 'twitter:image',
      content: social_image,
    });

    // Canonical
    this.clearCanonical();
    if (seo && seo.canonical && this.ps.isServer && !remove_canonical) {
      this.link.addTag({
        href: `${environment.site}/${seo.canonical}`,
        rel: 'canonical',
      });
    } else if (this.ps.isServer && !remove_canonical) {
      this.link.addTag({
        href: url,
        rel: 'canonical',
      });
    }
  }

  clearCanonical() {
    if (this.ps.isServer) {
      this.link.removeTag('rel=canonical');
    }
  }

  ngOnDestroy() {
    this.clearCanonical();
  }
}
