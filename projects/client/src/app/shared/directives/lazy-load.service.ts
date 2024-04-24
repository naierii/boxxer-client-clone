import { Injectable, Inject, ElementRef } from '@angular/core';
import {
  Observable,
  concat,
  of,
  fromEvent,
  EMPTY,
  combineLatest,
  defer
} from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { PlatformService } from '../../shared-main/services/platform.service';
import { map, flatMap, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LazyLoadService {
  private pageVisible$: Observable<boolean>;

  constructor(@Inject(DOCUMENT) document: any, private ps: PlatformService) {
    this.pageVisible$ = concat(
      defer(() => of(!document.hidden)),
      fromEvent(document, 'visibilitychange').pipe(map(e => !document.hidden))
    );
  }
  elementInSight(element: ElementRef): Observable<boolean> {
    if (this.ps.isServer) {
      return EMPTY;
    }
    const el = element.nativeElement;

    const elementVisible$ = new Observable(observer => {
      const intersectionObserver = new IntersectionObserver(entries => {
        observer.next(entries);
      });
      intersectionObserver.observe(el);

      return () => {
        intersectionObserver.disconnect();
      };
    }).pipe(
      flatMap((entries: IntersectionObserverEntry[]) => entries),
      map((entry: any) => entry.isIntersecting),
      distinctUntilChanged()
    );

    const elementInSight$ = combineLatest([
      this.pageVisible$,
      elementVisible$
    ]).pipe(
      map(result => result[0] && result[1]),
      distinctUntilChanged()
    );

    return elementInSight$;
  }
}
