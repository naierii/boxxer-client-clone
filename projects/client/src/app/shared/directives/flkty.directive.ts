import { FlickityService } from './../services/flickity.service';
import {
  Directive,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  OnDestroy,
  OnInit,
  NgZone
} from '@angular/core';
import { FlktyOptions } from './flkty-options';
import { PlatformService } from '@app/shared-main/services/platform.service';

@Directive({
  selector: '[bxFlkty]'
})
export class FlktyDirective implements OnInit, OnDestroy {
  // tslint:disable-next-line:no-input-rename
  @Input('bxFlkty')
  config: FlktyOptions = {};
  @Output()
  slideSelect = new EventEmitter<number>();
  @Output()
  cellStaticClick = new EventEmitter<number>();
  @Output()
  childrenUpdated = new EventEmitter<void>();
  public flickty: any;
  private appendElements: HTMLElement[] = [];
  private childrenUpdate;
  private childrenUpdateInterval = 300;

  constructor(
    private el: ElementRef,
    private ps: PlatformService,
    private flickityService: FlickityService,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    this.initFlickity();
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  initFlickity() {
    if (this.ps.isServer) {
      return;
    }

    const config = this.config;

    if (this.flickty) {
      config['initialIndex'] = this.flickty.selectedIndex;
      this.destroy();
    }

    config.arrowShape =
      // tslint:disable-next-line:max-line-length
      'M64.76,99.21l1.59-1.58a2.7,2.7,0,0,0,0-3.81L22.53,50,66.35,6.18a2.7,2.7,0,0,0,0-3.81L64.76.79a2.69,2.69,0,0,0-3.8,0L13.65,48.1a2.69,2.69,0,0,0,0,3.8L61,99.21a2.69,2.69,0,0,0,3.8,0Z';

    this.zone.runOutsideAngular(() => {
      this.flickty = this.flickityService.flickity(this.el, config);
    });

    this.flickty.on('select', () => {
      this.slideSelect.emit(this.selectedIndex);
    });

    this.flickty.on(
      'staticClick',
      (_event: any, _pointer: any, _cellElement: any, cellIndex: any) => {
        this.cellStaticClick.emit(cellIndex);
      }
    );

    this.updateElements();
  }

  destroy() {
    if (!this.flickty) {
      return;
    }

    if (this.childrenUpdate) {
      clearInterval(this.childrenUpdate);
      this.childrenUpdate = undefined;
    }
    this.appendElements = [];
    this.zone.runOutsideAngular(() => {
      this.flickty.destroy();
    });
  }

  resize() {
    if (!this.flickty) {
      return;
    }
    this.zone.runOutsideAngular(() => {
      this.flickty.resize();
    });
  }

  reposition() {
    if (!this.flickty) {
      return;
    }
    this.zone.runOutsideAngular(() => {
      this.flickty.reposition();
    });
  }

  previous() {
    if (!this.flickty) {
      return;
    }
    this.zone.runOutsideAngular(() => {
      this.flickty.previous();
    });
  }

  previousAvailable(): boolean {
    if (this.selectedIndex === undefined) {
      return false;
    }

    return this.selectedIndex > 0;
  }

  next() {
    if (!this.flickty) {
      return;
    }
    this.zone.runOutsideAngular(() => {
      this.flickty.next();
    });
  }

  nextAvailable(): boolean {
    if (this.selectedIndex === undefined || !this.slides) {
      return false;
    }

    return this.selectedIndex < this.slides - 1;
  }

  get selectedIndex(): number {
    if (!this.flickty) {
      return;
    }

    return this.flickty.selectedIndex;
  }

  get cells(): number {
    if (!this.flickty) {
      return;
    }

    return this.flickty.cells.length;
  }

  get slides(): number {
    if (!this.flickty) {
      return;
    }

    return this.flickty['slides'].length;
  }

  append(el: HTMLElement) {
    this.appendElements.push(el);
    this.updateElements();
    setTimeout(() => {
      this.resize();
    }, 0);
  }

  prepend(el: HTMLElement) {
    if (!this.flickty) {
      return;
    }
    this.zone.runOutsideAngular(() => {
      this.flickty.prepend(el);
    });
  }

  remove(el: HTMLElement) {
    if (!this.flickty) {
      return;
    }
    this.zone.runOutsideAngular(() => {
      this.flickty.remove(el);
    });
  }

  private updateElements() {
    if (!this.flickty || this.appendElements.length === 0) {
      return;
    }

    this.appendElements.forEach(el => this.flickty.append(el));
    this.appendElements = [];

    this.resize();
    this.childrenUpdated.emit();
    this.childrenUpdate = setTimeout(
      () => this.updateElements(),
      this.childrenUpdateInterval
    );
  }

  select(index: number, isWrapped = true, isInstant = false) {
    this.zone.runOutsideAngular(() => {
      this.flickty.select(index, isWrapped, isInstant);
    });
  }
}
