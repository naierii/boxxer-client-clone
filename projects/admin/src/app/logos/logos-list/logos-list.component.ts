import { Observable, Subject, of } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { SocketService } from '@admin/shared/services/socket.service';
import { PagedViewComponent } from '@admin/shared/components/paged-view/paged-view.component';
import { LoadingService } from '@admin/core/services/loading.service';

import {
  takeUntil,
  switchMap,
  combineLatest,
  distinctUntilChanged,
  debounceTime,
  startWith,
  map
} from 'rxjs/operators';

import { Logo } from '@global/models/logo';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { DragulaService } from 'ng2-dragula';
import { BatchService } from '@admin/shared/services/batch.service';

@Component({
  selector: 'bx-logos-list',
  templateUrl: './logos-list.component.html',
  providers: [
    {
      provide: 'LogoService',
      useClass: SocketService
    }
  ]
})
export class LogosListComponent extends PagedViewComponent
  implements OnInit, OnDestroy {
  items: Logo[] = [];

  type: any;
  private type$ = new Subject<any>();

  get routeParams() {
    const params: any = {};
    if (this.page && this.page > 1) {
      params.p = this.page;
    }
    if (this.terms) {
      params.q = this.terms;
    }
    if (this.type) {
      params.type = this.type;
    }
    return params;
  }

  get extraParams() {
    const params: any = {
      $sort: {
        type: 1,
        weight: 1
      }
    };
    if (this.type) {
      params.type = this.type;
    }
    return params;
  }

  constructor(
    @Inject('LogoService') protected service: SocketService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected loading: LoadingService,
    private dragulaService: DragulaService,
    private batch: BatchService
  ) {
    super(service, router, route, loading);
    const params = this.route.snapshot.queryParams;
    this.type = params['type'];
    this.service.setup('logo');
    this.params$ = this.searchTerm$.pipe(
      startWith(this.terms),
      untilComponentDestroyed(this),
      debounceTime(1000),
      distinctUntilChanged(),
      combineLatest(
        this.page$.pipe(
          startWith(this.page),
          map((page: number) => this.limit * (page - 1))
        ),
        this.limit$.pipe(
          startWith(this.limit),
          map((limit: number) => limit)
        ),
        this.type$.pipe(
          startWith(this.type),
          map((type: any) => type)
        ),
        ($search: string, $skip: number, $limit: number, type: any) => {
          return { $search, $skip, $limit, type };
        }
      )
    );
    dragulaService
      .dropModel('logos')
      .pipe(untilComponentDestroyed(this))
      .subscribe((args: any) => {
        const rowData = Array.from(args.target.children);
        rowData.forEach((row: any, index) => {
          const data = [
            'logo::patch',
            row.dataset.id,
            { weight: index + this.adjustment }
          ];
          this.batch.addToBatch.next([
            ...this.batch.addToBatch.getValue(),
            data
          ]);
        });
      });
  }

  ngOnInit() {
    super.ngOnInit();
  }

  filterType(value: any) {
    this.type = value;
    this.type$.next(value);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
