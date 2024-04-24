import { DesignService } from './../services/design.service';
import { SvgService } from './../services/svg.service';
import { Directive, HostListener, Input, ElementRef } from '@angular/core';
import {
  CustomDesignImage,
  CustomDesignFlag,
  CustomDesignLogo,
  CustomName
} from '@global/models/custom-design';

@Directive({
  selector: '[bxSvgMove]'
})
export class SvgMoveDirective {
  @Input()
  bxSvgMove:
    | CustomDesignFlag
    | CustomDesignLogo
    | CustomDesignImage
    | CustomName;
  @Input()
  width: number;
  @Input()
  height: number;
  @Input()
  isText = false;
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

    this.delta.x = this.bxSvgMove.position.x - this.impact.x;
    this.delta.y = this.bxSvgMove.position.y - this.impact.y;
    this.mouseDown = true;
    this.designService.setSelectedObject(this.bxSvgMove);
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
    // if (x < 0) {
    //   this.bxSvgMove.position.x = this.isText ? this.box.width / 2 : 0;
    // } else if (x > this.width - this.box.width) {
    //   this.bxSvgMove.position.x = this.isText
    //     ? this.width - this.box.width / 2
    //     : this.width - this.box.width;
    // } else {
    //   this.bxSvgMove.position.x = x;
    // }
    // if (y < 0) {
    //   this.bxSvgMove.position.y = 0;
    // } else if (y > this.height - this.box.height) {
    //   this.bxSvgMove.position.y = this.isText
    //     ? this.height - this.box.height / 2
    //     : this.height - this.box.height;
    // } else {
    //   this.bxSvgMove.position.y = y;
    // }
    this.bxSvgMove.position.x = x;
    this.bxSvgMove.position.y = y;
  }

  @HostListener('touchend')
  @HostListener('mouseup')
  @HostListener('document:mouseup')
  onPanEnd() {
    if (!this.mouseDown) {
      return;
    }
    this.mouseDown = false;

    if (
      this.save &&
      this.designService.selectedObject &&
      this.designService.selectedObject._id === this.bxSvgMove._id
    ) {
      this.designService.updateObject(
        this.bxSvgMove,
        `${this.bxSvgMove.type}s`
      );
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
