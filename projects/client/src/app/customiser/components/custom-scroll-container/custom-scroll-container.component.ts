import { untilComponentDestroyed } from '@global/untilDestroy';
import { CustomiserOptionsService } from './../../services/customiser-options.service';
import {
  Component,
  OnInit,
  HostBinding,
  ElementRef,
  ViewChild,
  AfterViewChecked,
  HostListener,
  OnDestroy
} from '@angular/core';
import { Subject } from 'rxjs';
import { PlatformService } from '@app/shared-main/services/platform.service';

@Component({
  selector: 'bx-custom-scroll-container',
  templateUrl: './custom-scroll-container.component.html',
  styleUrls: ['./custom-scroll-container.component.scss']
})
export class CustomScrollContainerComponent
  implements OnInit, AfterViewChecked, OnDestroy {
  @ViewChild('scrollContent', { static: true })
  scrollContent: ElementRef;
  @ViewChild('scrollIcon', { static: true })
  scrollIcon: ElementRef;
  s;
  contentHeight$ = new Subject<number>();
  contentHeight: number;
  scrollable = true;
  timer: any;
  constructor(
    private el: ElementRef,
    private optionsService: CustomiserOptionsService,
    private ps: PlatformService
  ) {}

  @HostBinding('style.height.px')
  scrollHeight: number;

  @HostListener('scroll', ['$event'])
  onScroll(e) {
    this.scrollable =
      this.el.nativeElement.scrollTop > this.scrollLength - 100 ? false : true;
  }

  get scrollLength() {
    return this.contentHeight - this.scrollHeight;
  }

  scrollToBottom() {
    this.el.nativeElement.scrollTop = this.contentHeight + 100;
  }

  ngOnInit() {
    this.optionsService.actionBarHeight
      .pipe(untilComponentDestroyed(this))
      .subscribe(height => {
        this.scrollHeight = this.ps.getNativeWindow().innerHeight - height;
        // this.scrollIcon.nativeElement.style.bottom = `${height + 10}px`;
      });
    this.contentHeight$
      .pipe(untilComponentDestroyed(this))
      .subscribe((height: number) => {
        this.contentHeight = height;
        if (this.contentHeight < this.scrollHeight) {
          this.scrollable = false;
        }
      });
  }

  ngAfterViewChecked() {
    if (this.scrollContent.nativeElement.clientHeight !== this.contentHeight) {
      this.timer = setTimeout(() => {
        this.contentHeight$.next(this.scrollContent.nativeElement.clientHeight);
      });
    }
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }
}
