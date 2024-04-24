import { Subject, of } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomProduct } from '@global/models/custom-product';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { PagedViewComponent } from '@admin/shared/components/paged-view/paged-view.component';
import { SocketService } from '@admin/shared/services/socket.service';
import { LoadingService } from '@admin/core/services/loading.service';
import {
  combineLatest,
  distinctUntilChanged,
  debounceTime,
  startWith,
  map
} from 'rxjs/operators';

@Component({
  selector: 'bx-custom-products-settings-list',
  templateUrl: './custom-products-settings-list.component.html',
  providers: [
    {
      provide: 'CustomProductService',
      useClass: SocketService
    }
  ]
})
export class CustomProductsSettingsListComponent extends PagedViewComponent
  implements OnInit, OnDestroy {
  items: CustomProduct[];

  category: any;
  private category$ = new Subject<any>();

  get routeParams() {
    const params: any = {};
    if (this.page && this.page > 1) {
      params.p = this.page;
    }
    if (this.terms) {
      params.q = this.terms;
    }
    if (this.category) {
      params.category = this.category;
    }
    return params;
  }

  get extraParams() {
    const params: any = {
      $sort: {
        title: 1
      },
      $client: { populate: 'pop-client-settings' },
      published: true
    };
    if (this.category) {
      params.category = this.category;
    }
    return params;
  }

  constructor(
    @Inject('CustomProductService') protected service: SocketService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected loading: LoadingService
  ) {
    super(service, router, route, loading);
    const params = this.route.snapshot.queryParams;
    this.category = params['category'];
    service.setup('custom-product');
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
        this.category$.pipe(
          startWith(this.category),
          map((category: any) => category)
        ),
        ($search: string, $skip: number, $limit: number, category: any) => {
          return { $search, $skip, $limit, category };
        }
      )
    );
  }

  ngOnInit() {
    super.ngOnInit();
  }

  filter(value: any) {
    this.category = value;
    this.category$.next(value);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
