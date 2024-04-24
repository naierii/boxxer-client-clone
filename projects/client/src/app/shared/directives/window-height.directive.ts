import { PlatformService } from '@app/shared-main/services/platform.service';
import {
  Directive,
  ElementRef,
  OnInit,
  HostListener,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[bxWindowHeight]'
})
export class WindowHeightDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private ps: PlatformService,
    private renderer: Renderer2
  ) {}

  @HostListener('window:resize')
  onResize() {
    this.setVh();
  }

  ngOnInit() {
    this.setVh();
  }

  setVh() {
    if (this.ps.isBrowser) {
      const vh = this.ps.getNativeWindow().innerHeight * 0.01;
      this.renderer.setAttribute(
        this.el.nativeElement,
        'style',
        `--vh: ${vh}px`
      );
    }
  }
}
