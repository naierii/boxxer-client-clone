import { ProductDisplay } from '@global/models/product-display';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { CustomProduct } from '@global/models/custom-product';

@Injectable({
  providedIn: 'root',
})
export class JsonldService {
  private imgUrl = 'https://img.boxxerworld.com/';
  private shop_url = 'https://www.boxxerworld.com/';
  private script: any;
  schema: any;
  private logo = `${environment.site}/assets/img/facebook-logo.jpg`;
  private name = 'Boxxerworld';
  organization = {
    '@context': 'http://schema.org',
    '@id': 'https://www.boxxerworld.com/#organization',
    '@type': 'Organization',
    name: this.name,
    url: 'https://www.boxxerworld.com',
    sameAs: [
      'https://twitter.com/boxxerworld',
      'https://www.facebook.com/Boxxerworld-385182568880369',
      'https://www.instagram.com/boxxerworld',
    ],
    logo: {
      '@context': 'http://schema.org',
      '@id': 'https://www.boxxerworld.com/#logo',
      '@type': 'ImageObject',
      url: this.logo,
      height: '630',
      width: '1200',
    },
    image: {
      '@context': 'http://schema.org',
      '@id': 'https://www.boxxerworld.com/#logo',
      '@type': 'ImageObject',
      url: this.logo,
      height: '630',
      width: '1200',
    },
  };
  website = {
    '@context': 'http://schema.org',
    '@id': 'https://www.boxxerworld.com/#website',
    '@type': 'WebSite',
    url: 'https://www.boxxerworld.com',
    name: this.name,
    publisher: this.organization,
  };

  constructor() {}

  mainEntity(url, name, datePublished, dateModified, description) {
    return {
      '@context': 'http://schema.org',
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: `${name} | ${this.name}`,
      datePublished,
      dateModified,
      description,
      isPartOf: this.website,
    };
  }

  product(data: ProductDisplay) {
    let image;
    if (data.image) {
      image = `${this.imgUrl}${data.image.key}`;
    } else if (data.images && data.images.length) {
      image = `${this.imgUrl}${data.images[0].key}`;
    } else {
      image = `${environment.site}/assets/img/facebook-logo.jpg`;
    }
    
    this.schema = {
      '@context': 'http://schema.org',
      '@type': 'Product',
      name: data.title,
      description: data.seo ? data.seo.description : '',
      image, 
      sku: data.parent_sku,
      category: data.product_type.title,
      url: `${this.shop_url}${data.product_type.slug}/${data.slug}`,
      brand: this.organization,
      mainEntityOfPage: this.mainEntity(
        `${this.shop_url}${data.product_type.slug}/${data.slug}`,
        `${data.title}`,
        data.createdAt,
        data.updatedAt,
        data.seo ? data.seo.description : ''
      ),
      offers: [],
    };

    data.variations.forEach((variation) => {
      const offer: any = {
        '@context': 'http://schema.org',
        '@type': 'Offer',
        price: variation.price.toString(),
        priceCurrency: 'GBP',
        itemCondition: 'http://schema.org/NewCondition',
        availability: 'http://schema.org/InStock',
        url: `${this.shop_url}${data.product_type.slug}/${data.slug}`,
        name: variation.title,
        sku: variation.sku,
        image: variation.image ? `${this.imgUrl}${variation.image.key}` : image,
      };
      this.schema.offers.push(offer);
    });
  }

  custom(data: CustomProduct) {
    let image;
    if (data.image) {
      image = `${this.imgUrl}${data.image.key}`;
    } else {
      image = `${environment.site}/assets/img/facebook-logo.jpg`;
    }
    this.schema = {
      '@context': 'http://schema.org',
      '@type': 'Product',
      name: data.title,
      description: data.seo.description,
      image,
      sku: data.code,
      category: data.category.title,
      url: `${this.shop_url}${data.category.slug}/${data.slug}`,
      brand: this.organization,
      mainEntityOfPage: this.mainEntity(
        `${this.shop_url}${data.category.slug}/${data.slug}`,
        `${data.title}`,
        data.createdAt,
        data.updatedAt,
        data.seo.description
      ),
      offers: [
        {
          '@context': 'http://schema.org',
          '@type': 'Offer',
          price: data.price.toString(),
          priceCurrency: 'GBP',
          itemCondition: 'http://schema.org/NewCondition',
          availability: 'http://schema.org/InStock',
          url: `${this.shop_url}${data.category.slug}/${data.slug}`,
        },
      ],
    };
  }
}
