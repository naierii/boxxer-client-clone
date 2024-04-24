import { Observable, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export interface OnDestroyLike {
  ngOnDestroy(): void;
  [key: string]: any;
}

export function componentDestroyed(component: OnDestroyLike): Observable<true> {
  if (component.__componentDestroyed$) {
    return component.__componentDestroyed$;
  }
  const oldNgOnDestroy = component.ngOnDestroy;
  const stop$ = new ReplaySubject<true>();
  component.ngOnDestroy = () => {
    // tslint:disable-next-line:no-unused-expression
    oldNgOnDestroy && oldNgOnDestroy.apply(component);
    stop$.next(true);
    stop$.complete();
  };
  return (component.__componentDestroyed$ = stop$.asObservable());
}

export function untilComponentDestroyed<T>(
  component: OnDestroyLike
): (source: Observable<T>) => Observable<T> {
  return (source: Observable<T>) =>
    source.pipe(takeUntil(componentDestroyed(component)));
}
