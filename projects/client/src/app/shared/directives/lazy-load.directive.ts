import {
  Directive,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
  ChangeDetectorRef,
  Input,
  ElementRef
} from '@angular/core';
import { LazyLoadService } from './lazy-load.service';
import { filter, take, takeUntil } from 'rxjs/operators';
import { componentDestroyed } from '@w11k/ngx-componentdestroyed';

@Directive({
  selector: '[bxLazyLoad]'
})
export class LazyLoadDirective implements OnDestroy {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private lazyService: LazyLoadService,
    private cdr: ChangeDetectorRef
  ) {}

  @Input()
  set bxLazyLoad(element) {
    this.lazyService
      .elementInSight(new ElementRef(element))
      .pipe(
        filter(visible => visible),
        take(1),
        takeUntil(componentDestroyed(this))
      )
      .subscribe(() => {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy() {
    this.viewContainer.clear();
  }
}
