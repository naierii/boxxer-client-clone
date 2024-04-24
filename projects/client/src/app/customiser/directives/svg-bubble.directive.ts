import { SvgService } from './../services/svg.service';
import {
  Directive,
  OnInit,
  Input,
  ElementRef,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[bxSvgBubble]'
})
export class SvgBubbleDirective implements OnInit {
  constructor(private svgService: SvgService, private el: ElementRef) {}

  @HostBinding('style.top.px')
  top = 20;

  @HostListener('window:resize')
  onResize() {
    this.top = this.topCalc;
  }

  get topCalc() {
    return 100 / (600 / this.svgService.svg.nativeElement.clientWidth) - 130;
  }

  ngOnInit() {
    this.top = this.topCalc;
  }
}
