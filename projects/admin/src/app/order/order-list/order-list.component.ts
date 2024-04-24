import { LoadingService } from '@admin/core/services/loading.service';
import { PagedViewComponent } from '@admin/shared/components/paged-view/paged-view.component';
import { SocketService } from '@admin/shared/services/socket.service';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '@global/models/order';
import { of, Subject, fromEvent } from 'rxjs';
import {
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  startWith,
  map
} from 'rxjs/operators';

import { statuses } from '../order-status';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { FeathersService } from '@admin/shared/services/feathers.service';

@Component({
  selector: 'bx-order-list',
  templateUrl: './order-list.component.html',
  providers: [
    {
      provide: 'OrderService',
      useClass: SocketService
    }
  ]
})
export class OrderListComponent extends PagedViewComponent
  implements OnInit, OnDestroy {
  items: Order[] = [];

  detaultStatus: any = {
    $nin: ['Cart', 'Checkout', 'Refunded', 'Cancelled']
  };
  allStatus: any = {
    $nin: []
  };
  statuses = statuses;
  private status$ = new Subject<any>();

  selectedStatus = '';

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

    return params;
  }

  get extraParams() {
    const params: any = {
      status:
        this.selectedStatus && this.selectedStatus !== 'undefined'
          ? this.selectedStatus
          : this.detaultStatus,
      $sort: {
        checkoutDate: -1
      }
    };
    if (this.clearStatus) {
      params.status = this.allStatus;
    }
    return params;
  }
  constructor(
    @Inject('OrderService') protected service: SocketService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected loading: LoadingService,
  ) {
    super(service, router, route, loading);

    service.setup('order', 'orderid');
    fromEvent(service.service, 'patched')
      .pipe(untilComponentDestroyed(this))
      .subscribe((resp: any) => {
        if (resp && resp._id) {
          this.updateItem(resp);
        }
      });
    fromEvent(service.service, 'created')
      .pipe(untilComponentDestroyed(this))
      .subscribe(resp => this.addItem(resp));
    const params = this.route.snapshot.queryParams;
    this.selectedStatus = params['status'] ? params['status'] : undefined;

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
          map((status: any) => {
            if (this.clearStatus) {
              return this.allStatus;
            }
            return status && status !== 'undefined'
              ? status
              : this.detaultStatus;
          })
        ),
        ($search: string, $skip: number, $limit: number, status: any) => {
          return { $search, $skip, $limit, status };
        }
      ),
      untilComponentDestroyed(this)
    );
  }

  get clearStatus() {
    return (!this.selectedStatus && this.terms) ||
      (this.selectedStatus && this.selectedStatus === 'undefined' && this.terms)
      ? true
      : false;
  }

  ngOnInit() {
    super.ngOnInit();
  }

  filterStatus(status: string) {
    this.status$.next(status);
  }

  addItem(order: any) {
    const ignore = ['Cart', 'Checkout', 'Refunded', 'Cancelled'];
    if (ignore.indexOf(order.status) === -1) {
      this.items.unshift(order);
    }
  }
  updateItem(order: any) {
    this.items.map((c, i) => {
      if (c._id === order._id) {
        this.items[i] = order;
      }

      return c;
    });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
