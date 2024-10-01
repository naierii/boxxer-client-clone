import { LoadingService } from '@admin/core/services/loading.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SocketService } from '@admin/shared/services/socket.service';
import { Subject, Observable } from 'rxjs';
import { OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import {
  switchMap,
  startWith,
  debounceTime,
  distinctUntilChanged,
  combineLatest,
  map,
  share,
  tap
} from 'rxjs/operators';

import { untilComponentDestroyed } from '@global/untilDestroy';

export class PagedViewComponent implements OnInit, OnDestroy, AfterViewInit {
  terms: string;
  maxSize = 5;
  limit = 30;
  startPage: number;
  page: number;
  page$: Subject<number> = new Subject();
  searchTerm$: Subject<string> = new Subject();
  limit$: Subject<number> = new Subject<number>();
  params$: Observable<any>;
  results$: Observable<any>;

  totalCount$: Observable<number>;
  items: any[];

  extraParams: any;

  get routeParams() {
    const params: any = {};
    if (this.page && this.page > 1) {
      params.p = this.page;
    }
    if (this.terms) {
      params.q = this.terms;
    }
    return params;
  }

  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    protected service: SocketService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected loading: LoadingService
  ) {
    service.loading_enabled = false;
    this.route.queryParams
      .pipe(untilComponentDestroyed(this))
      .subscribe(params => {
        this.page = params.p || 1;
        this.startPage = params.p || 1;
        this.terms = params.q || null;
        this.searchTerm$.next(this.terms);
      });
    this.params$ = this.searchTerm$.pipe(
      untilComponentDestroyed(this),
      startWith(this.terms),
      debounceTime(1000),
      distinctUntilChanged(),
      combineLatest(
        this.page$.pipe(
          untilComponentDestroyed(this),
          startWith(this.page),
          map((page: number) => this.limit * (page - 1))
        ),
        this.limit$.pipe(
          untilComponentDestroyed(this),
          startWith(this.limit),
          map((limit: number) => limit)
        ),
        ($search: string, $skip: number, $limit: number) => {
          return { $search, $skip, $limit };
        }
      )
    );
  }

  get adjustment() {
    return (this.page - 1) * this.limit;
  }

  ngOnInit() {
    this.loading.setLoading(true);
    this.results$ = this.params$.pipe(
      untilComponentDestroyed(this),
      switchMap((params: any) => {
        if (!params.$search) {
          delete params.$search;
        }
        params = Object.assign(params, this.extraParams);
        this.loading.setLoading(true);

        return this.service.find(params);
      }),
      tap(() => this.loading.setLoading(false)),
      share()
    );

    this.results$.pipe(untilComponentDestroyed(this)).subscribe((resp: any) => {
      this.items = resp.data;
      this.setParams();
    });

    this.totalCount$ = this.results$.pipe(map((res: any) => res.total));
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.page = this.startPage;
    }, 500);
  }

  goToPage(page: any) {
    this.page = parseInt(page.page, 10);
    this.page$.next(this.page);
  }

  search(terms: string) {
    this.searchTerm$.next(terms);
  }

  filterLimit(limit: number) {
    this.page = 1;
    this.limit = limit;
    this.limit$.next(limit);
  }

  setParams() {
    this.router.navigate([], {
      queryParams: this.routeParams
    });
  }

  deleteItem(id) {
    this.service
      .removeSub(id)
      .pipe(untilComponentDestroyed(this))
      .subscribe((resp: any) => {
        if (resp) {
          this.items = this.items.filter(i => i._id !== resp._id);
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
