import { LoadingService } from '@admin/core/services/loading.service';
import { SocketService } from '@admin/shared/services/socket.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { PagedViewComponent } from '@admin/shared/components/paged-view/paged-view.component';
import { Subject, of } from 'rxjs';
import {
  startWith,
  debounceTime,
  distinctUntilChanged,
  combineLatest,
  map
} from 'rxjs/operators';
import { statuses } from '../order-status';
@Component({
  selector: 'bx-job-card-list',
  templateUrl: './job-card-list.component.html',
  providers: [
    {
      provide: 'JobCardService',
      useClass: SocketService
    }
  ]
})
export class JobCardListComponent extends PagedViewComponent
  implements OnInit, OnDestroy {
  items: any[];
  detaultStatus: any = {
    $nin: ['Cart', 'Checkout', 'Shipped', 'Delivered', 'Refunded', 'Cancelled']
  };
  statuses = statuses;
  sortOptions = [
    {
      title: 'By Due Date',
      value: 'dueDate',
      direction: 1
    },
    {
      title: 'By Order Date',
      value: 'checkoutDate',
      direction: -1
    },
    {
      title: 'By Send Date',
      value: 'sendDate',
      direction: -1
    }
  ];
  selectedStatus = '';
  selectedSort = 'checkoutDate';
  category: any;
  productionType: any;
  private category$ = new Subject<any>();
  private productionType$ = new Subject<any>();
  private status$ = new Subject<any>();
  private sort$ = new Subject<string>();
  get extraParams() {
    const params: any = {
      status:
        this.selectedStatus && this.selectedStatus !== 'undefined'
          ? this.selectedStatus
          : this.detaultStatus,
      $limit: 24
    };
    params.$sort = {
      [this.selectedSort]: this.sortOptions.find(
        s => s.value === this.selectedSort
      ).direction
    };

    if (this.selectedSort === 'dueDate') {
      params.$and = [
        {
          dueDate: {
            $exists: true
          }
        },
        {
          dueDate: {
            $ne: ''
          }
        }
      ];
    }

    return params;
  }

  get routeParams() {
    const params: any = {};
    if (this.page && this.page > 1) {
      params.p = this.page;
    }
    if (this.terms) {
      params.q = this.terms;
    }

    if (this.selectedStatus && this.selectedStatus !== 'undefined') {
      params.status = this.selectedStatus;
    }

    if (this.category && this.category !== 'undefined') {
      params.type = this.category;
    }

    if (this.productionType && this.productionType !== 'undefined') {
      params.productionType = this.productionType;
    }

    if (this.selectedSort) {
      params.sort = this.selectedSort;
    }

    return params;
  }

  constructor(
    @Inject('JobCardService') protected service: SocketService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected loading: LoadingService
  ) {
    super(service, router, route, loading);
    service.setup('job-card');
    const params = this.route.snapshot.queryParams;
    this.selectedStatus = params['status'] ? params['status'] : undefined;
    if (params['sort']) {
      this.selectedSort = params['sort'];
    }
    if (params['type']) {
      this.category = params['type'];
    }

    if (params['productionType']) {
      this.productionType = params['productionType'];
    }

    this.params$ = this.searchTerm$.pipe(
      startWith(this.terms),
      debounceTime(1000),
      distinctUntilChanged(),
      combineLatest(
        this.page$.pipe(
          startWith(this.page),
          map((page: number) => this.limit * (page - 1))
        ),
        of(this.limit),
        this.status$.pipe(
          startWith(this.detaultStatus),
          map((status: any) =>
            status && status !== 'undefined' ? status : this.detaultStatus
          )
        ),
        this.category$.pipe(
          startWith(this.category),
          map((category: any) =>
            category && category !== 'undefined' ? category : null
          )
        ),
        this.productionType$.pipe(
          startWith(this.productionType),
          map((productionType: any) =>
            productionType && productionType !== 'undefined'
              ? productionType
              : null
          )
        ),
        this.sort$.pipe(
          startWith(this.selectedSort),
          map((sort: any) => {
            return {
              [sort]: this.sortOptions.find(s => s.value === sort).direction
            };
          })
        ),
        (
          $search: string,
          $skip: number,
          $limit: number,
          status: any,
          category: any,
          productionType: any,
          $sort: any
        ) => {
          return {
            $search,
            $skip,
            $limit,
            status,
            category,
            productionType,
            $sort
          };
        }
      )
    );
  }

  ngOnInit() {
    super.ngOnInit();
  }

  filterStatus(status: string) {
    this.status$.next(status);
  }

  filterSort(sort: string) {
    this.sort$.next(sort);
  }

  filterCategory(value: any) {
    this.category = value;
    this.category$.next(value);
  }

  filterProductionType(value: any) {
    this.productionType = value;
    this.productionType$.next(value);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
