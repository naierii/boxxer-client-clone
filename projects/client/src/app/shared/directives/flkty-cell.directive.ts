import { FlktyDirective } from './flkty.directive';
import {
  Directive,
  Input,
  Optional,
  Host,
  ElementRef,
  OnInit,
  OnDestroy
} from '@angular/core';

@Directive({
  selector: '[bxFlktyCell]'
})
export class FlktyCellDirective implements OnInit, OnDestroy {
  @Input() bxFlktyCell: any;
  constructor(
    private el: ElementRef,
    @Optional()
    @Host()
    private parent?: FlktyDirective
  ) {}

  ngOnInit(): void {
    if (!this.parent) {
      return;
    }
    this.parent.append(this.el.nativeElement);
  }
  ngOnDestroy() {
    if (!this.parent) {
      return;
    }
    this.parent.remove(this.el.nativeElement);
  }
}
