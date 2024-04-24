import { Subject } from 'rxjs';
import {
  takeUntil,
  combineLatest,
  distinctUntilChanged,
  debounceTime,
  startWith,
  map
} from 'rxjs/operators';
import { DragulaService } from 'ng2-dragula';
import { PagedViewComponent } from '@admin/shared/components/paged-view/paged-view.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Inject, OnDestroy, ViewChild } from '@angular/core';
import { SocketService } from '@admin/shared/services/socket.service';
import { LoadingService } from '@admin/core/services/loading.service';
import { Material } from '@global/models/material';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { BatchService } from '@admin/shared/services/batch.service';

@Component({
  selector: 'bx-materials-list',
  templateUrl: './materials-list.component.html',
  providers: [
    {
      provide: 'MaterialService',
      useClass: SocketService
    }
  ]
})
export class MaterialsListComponent extends PagedViewComponent
  implements OnInit, OnDestroy {
  items: Material[] = [];

  @ViewChild('bag', { static: true })
  bag;
  private sortData = new Subject<any>();

  published = true;
  private published$ = new Subject<boolean>();

  materialType: any;
  private materialType$ = new Subject<any>();

  get routeParams() {
    const params: any = {};
    if (this.page && this.page > 1) {
      params.p = this.page;
    }
    if (this.terms) {
      params.q = this.terms;
    }
    if (this.materialType) {
      params.materialType = this.materialType;
    }

    params.published = this.published;

    return params;
  }

  get extraParams() {
    const params: any = {
      published: this.published,
      $sort: {
        materialType: 1,
        weight: 1
      }
    };
    if (this.materialType) {
      params.materialType = this.materialType;
    }
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
    service.setup('material');
    const params = this.route.snapshot.queryParams;
    this.materialType = params['materialType'];

    dragulaService
      .dropModel('materials')
      .pipe(untilComponentDestroyed(this))
      .subscribe((args: any) => {
        const rowData = Array.from(args.target.children);
        rowData.forEach((row: any, index) => {
          const data = [
            'material::patch',
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
        this.materialType$.pipe(
          startWith(this.materialType),
          map((materialType: any) => materialType)
        ),
        this.published$.pipe(
          startWith(this.published),
          map((published: boolean) => published)
        ),
        (
          $search: string,
          $skip: number,
          $limit: number,
          materialType: any,
          published: boolean
        ) => {
          return { $search, $skip, $limit, materialType, published };
        }
      )
    );
  }

  ngOnInit() {
    super.ngOnInit();
  }

  filterMaterials(value: any) {
    this.materialType = value;
    this.materialType$.next(value);
  }

  filterPublished(value: any) {
    this.published = value;
    this.published$.next(value);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
