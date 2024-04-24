import { PlatformService } from '@admin/core/services/platform.service';
import {
  Directive,
  OnInit,
  Input,
  ElementRef,
  Renderer2,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

declare var lazySizes;

@Directive({
  selector: '[bxLazysizes]',
})
export class LazysizesDirective implements OnInit, OnChanges {
  public tempImage =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  @Input('bxLazysizes') imgSrc: string;
  @Input() crop_ratio: number;
  public img: string;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private ps: PlatformService
  ) {}

  ngOnInit() {
    let query = 'width={width}';

    if (this.crop_ratio) {
      query = 'crop=smart&width={width}&height={height}';
    }
    this.img = `https://img.boxxerworld.com/${this.imgSrc}?${query}`;
    this.initLazyLoading();
    this.setAttributes();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.imgSrc && !changes.imgSrc.firstChange) {
      let query = 'width={width}';

      if (this.crop_ratio) {
        query = 'crop=smart&width={width}&height={height}';
      }
      this.img = `https://img.boxxerworld.com/${this.imgSrc}?${query}`;
      this.setAttributes();
    }
  }

  initLazyLoading() {
    if (this.ps.isBrowser && lazySizes) {
      lazySizes.init();
    }
  }

  setAttributes() {
    this.renderer.addClass(this.el.nativeElement, 'lazyload');
    if (
      this.el.nativeElement.localName === 'img' ||
      this.el.nativeElement.localName === 'source'
    ) {
      this.setImgSrc();
    } else {
      this.setElementBackgroundImage();
    }
  }

  setImgSrc() {
    this.renderer.setAttribute(this.el.nativeElement, 'data-src', this.img);
    this.renderer.setAttribute(this.el.nativeElement, 'data-sizes', 'auto');
    this.renderer.setAttribute(
      this.el.nativeElement,
      'data-widths',
      '[100, 320, 480, 640, 960, 1120, 1280]'
    );
    if (this.crop_ratio) {
      this.renderer.setAttribute(
        this.el.nativeElement,
        'data-aspectratio',
        this.crop_ratio.toString()
      );
    }
    this.renderer.setAttribute(this.el.nativeElement, 'src', this.tempImage);
  }

  setElementBackgroundImage() {
    this.renderer.setAttribute(this.el.nativeElement, 'data-bgset', this.img);
    this.renderer.setAttribute(this.el.nativeElement, 'data-sizes', 'auto');
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-image',
      `url(${this.tempImage})`
    );
  }
}
