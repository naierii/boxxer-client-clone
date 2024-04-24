import { Component, OnInit, OnDestroy, ViewChild, Inject } from '@angular/core';
import { SocketService } from '@admin/shared/services/socket.service';
import { PagedViewComponent } from '@admin/shared/components/paged-view/paged-view.component';
import { Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from '@admin/core/services/loading.service';
import { DragulaService } from 'ng2-dragula';
import { BatchService } from '@admin/shared/services/batch.service';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { Material } from '@global/models/material';
import {
  takeUntil,
  combineLatest,
  distinctUntilChanged,
  debounceTime,
  startWith,
  map
} from 'rxjs/operators';
import { MaterialGroup } from '@global/models/material-group';
@Component({
  selector: 'bx-materials-group-list',
  templateUrl: './materials-group-list.component.html',
  styles: [],
  providers: [
    {
      provide: 'MaterialService',
      useClass: SocketService
    }
  ]
})
export class MaterialsGroupListComponent extends PagedViewComponent
  implements OnInit, OnDestroy {
  items: MaterialGroup[] = [];

  @ViewChild('bag', { static: true })
  bag;
  private sortData = new Subject<any>();

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

  get extraParams() {
    const params: any = {
      $sort: {
        weight: 1
      }
    };
    return params;
  }

  constructor(
    @Inject('MaterialService') protected service: SocketService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected loading: LoadingService,
    private dragulaService: DragulaService,
    private batch: BatchService
  ) {
    super(service, router, route, loading);
    service.setup('material-group');

    dragulaService
      .dropModel('materials-groups')
      .pipe(untilComponentDestroyed(this))
      .subscribe((args: any) => {
        const rowData = Array.from(args.target.children);
        rowData.forEach((row: any, index) => {
          const data = [
            'material-group::patch',
            row.dataset.id,
            { weight: index + this.adjustment }
          ];
          this.batch.addToBatch.next([
            ...this.batch.addToBatch.getValue(),
            data
          ]);
        });
      });

    this.params$ = this.searchTerm$.pipe(
      startWith(this.terms),
      debounceTime(1000),
      distinctUntilChanged(),
      takeUntil(this.destroy$),
      combineLatest(
        this.page$.pipe(
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

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
