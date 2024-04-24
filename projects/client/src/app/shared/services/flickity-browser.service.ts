import { Injectable, ElementRef } from '@angular/core';
import Flickity from 'flickity-imagesloaded';

@Injectable()
export class FlickityBrowserService {
  constructor() {}
  flickity(el: ElementRef, config?: any) {
    return new Flickity(el.nativeElement, config);
  }
}
