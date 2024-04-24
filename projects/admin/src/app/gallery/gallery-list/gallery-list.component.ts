import {
  combineLatest,
  distinctUntilChanged,
  debounceTime,
  startWith,
  map
} from 'rxjs/operators';
import { Subject, of } from 'rxjs';
import { PagedViewComponent } from '@admin/shared/components/paged-view/paged-view.component';
import { LoadingService } from '@admin/core/services/loading.service';
import { SocketService } from '@admin/shared/services/socket.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { BatchService } from '@admin/shared/services/batch.service';
import { untilComponentDestroyed } from '@global/untilDestroy';

@Component({
  selector: 'bx-gallery-list',
  templateUrl: './gallery-list.component.html',
  providers: [
    {
      provide: 'GalleryService',
      useClass: SocketService
    }
  ]
})
export class GalleryListComponent extends PagedViewComponent
  implements OnInit, OnDestroy {
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
        createdAt: -1
      }
    };
    if (this.category) {
      params.category = this.category;
    }
    return params;
  }

  constructor(
    @Inject('GalleryService') protected service: SocketService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected loading: LoadingService,
    private dragulaService: DragulaService,
    private batch: BatchService
  ) {
    super(service, router, route, loading);
    const params = this.route.snapshot.queryParams;
    this.category = params['category'];
    this.service.setup('gallery');
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
    // dragulaService
    //   .dropModel('gallery')
    //   .pipe(untilComponentDestroyed(this))
    //   .subscribe((args: any) => {
    //     const rowData = Array.from(args.target.children);
    //     rowData.forEach((row: any, index) => {
    //       const data = [
    //         'gallery::patch',
    //         row.dataset.id,
    //         { weight: index + this.adjustment }
    //       ];
    //       this.batch.addToBatch.next([
    //         ...this.batch.addToBatch.getValue(),
    //         data
    //       ]);
    //     });
    //   });
  }

  ngOnInit() {
    super.ngOnInit();
  }

  filterGallery(value: any) {
    this.category = value;
    this.category$.next(value);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
