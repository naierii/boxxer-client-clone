import { LoadingService } from '@admin/core/services/loading.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PagedViewComponent } from './../../shared/components/paged-view/paged-view.component';
import { CategoryService } from './../category.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { switchMap, tap, share, map } from 'rxjs/operators';

@Component({
  selector: 'bx-category-list',
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent extends PagedViewComponent
  implements OnInit, OnDestroy {
  items: any[];
  constructor(
    protected service: CategoryService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected loading: LoadingService
  ) {
    super(service, router, route, loading);
    service.setup('category');
    this.extraParams = {
      $sort: {
        createdAt: -1
      }
    };
  }

  ngOnInit() {
    this.loading.setLoading(true);
    let query = {};
    this.results$ = this.params$.pipe(
      untilComponentDestroyed(this),
      switchMap((params: any) => {
        if (!params.$search) {
          delete params.$search;
        }
        query = Object.assign(params, this.extraParams);
        this.loading.setLoading(true);
        return this.route.data;
      }),
      switchMap((data: any) => {
        if (data.query) {
          query = {
            ...query,
            ...data.query
          };
        }
        return this.service.find(query);
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

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
