import {
  Directive,
  OnInit,
  OnDestroy,
  HostListener,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';

@Directive({
  selector: '[bxDebounceClick]'
})
export class DebounceClickDirective implements OnInit, OnDestroy {
  @Input()
  debounceTime = 500;

  @Output()
  debounceClick = new EventEmitter();

  private clicks = new Subject();
  private subscription: Subscription;

  constructor() {}

  ngOnInit() {
    this.subscription = this.clicks
      .pipe(debounceTime(this.debounceTime))
      .subscribe(e => this.debounceClick.emit(e));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  @HostListener('tap', ['$event'])
  clickEvent(event) {
    event.preventDefault();
    if (event.type === 'click') {
      event.stopPropagation();
    }
    this.clicks.next(event);
  }
}
