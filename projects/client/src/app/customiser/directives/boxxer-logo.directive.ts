import { DesignService } from '@app/customiser/services/design.service';
import { SvgService } from './../services/svg.service';
import { Directive, Input, HostListener, ElementRef } from '@angular/core';
import { BoxxerLogo } from '@global/models/custom-design';

@Directive({
  selector: '[bxBoxxerLogo]'
})
export class BoxxerLogoDirective {
  @Input()
  bxBoxxerLogo: BoxxerLogo;
  @Input()
  width: number;
  @Input()
  height: number;
  impact = {
    x: 0,
    y: 0
  };
  m = {
    x: 0,
    y: 0
  };
  delta = {
    x: 0,
    y: 0
  };
  box: {
    width: 0;
    height: 0;
  };
  mouseDown = false;
  save = false;
  constructor(
    private el: ElementRef,
    private svgService: SvgService,
    private designService: DesignService
  ) {}

  @HostListener('touchstart', ['$event'])
  @HostListener('mousedown', ['$event'])
  onPanStart(e) {
    if (e.type === 'touchstart') {
      e.preventDefault();
    }
    this.impact = this.oMousePos(this.svgService.svg.nativeElement, e);
    this.box = this.el.nativeElement.getBoundingClientRect();

    this.delta.x = this.bxBoxxerLogo.position.x - this.impact.x;
    this.delta.y = this.bxBoxxerLogo.position.y - this.impact.y;
    this.mouseDown = true;
  }
  @HostListener('touchmove', ['$event'])
  @HostListener('mousemove', ['$event'])
  @HostListener('document:mousemove', ['$event'])
  onPanMove(event: any) {
    if (!this.mouseDown) {
      return;
    }
    this.save = true;
    this.m = this.oMousePos(this.svgService.svg.nativeElement, event);
    const x = this.m.x + this.delta.x;
    const y = this.m.y + this.delta.y;
    if (x < 0) {
      this.bxBoxxerLogo.position.x = 0;
    } else if (x > this.width - this.box.width) {
      this.bxBoxxerLogo.position.x = this.width - this.box.width;
    } else {
      this.bxBoxxerLogo.position.x = x;
    }
    if (y < 0) {
      this.bxBoxxerLogo.position.y = 0;
    } else if (y > this.height - this.box.height) {
      this.bxBoxxerLogo.position.y = this.height - this.box.height;
    } else {
      this.bxBoxxerLogo.position.y = y;
    }
    // this.bxBoxxerLogo.position.x = x;
    // this.bxBoxxerLogo.position.y = y;
  }

  @HostListener('touchend')
  @HostListener('mouseup')
  @HostListener('document:mouseup')
  onPanEnd() {
    if (!this.mouseDown) {
      return;
    }
    this.mouseDown = false;
    if (this.save && this.bxBoxxerLogo) {
      this.designService.saveOption(false, {
        boxxer_logo: this.bxBoxxerLogo
      });
    }
  }

  private oMousePos(svg, evt) {
    const touches = (evt.changedTouches && evt.changedTouches[0]) || evt;
    const ClientRect = svg.getBoundingClientRect();
    return {
      x: Math.round(touches.clientX - ClientRect.left),
      y: Math.round(touches.clientY - ClientRect.top)
    };
  }
}
