import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { SocketService } from '@admin/shared/services/socket.service';
import { PagedViewComponent } from '@admin/shared/components/paged-view/paged-view.component';
import { LoadingService } from '@admin/core/services/loading.service';
import { Flag } from '@global/models/flag';
import { BatchService } from '@admin/shared/services/batch.service';
import { DragulaService } from 'ng2-dragula';
import { untilComponentDestroyed } from '@global/untilDestroy';

@Component({
  selector: 'bx-flags-list',
  templateUrl: './flags-list.component.html',
  providers: [
    {
      provide: 'FlagService',
      useClass: SocketService
    }
  ]
})
export class FlagsListComponent extends PagedViewComponent
  implements OnInit, OnDestroy {
  items: Flag[] = [];

  get extraParams() {
    const params: any = {
      $sort: {
        weight: 1
      }
    };

    return params;
  }

  constructor(
    @Inject('FlagService') protected service: SocketService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected loading: LoadingService,
    private dragulaService: DragulaService,
    private batch: BatchService
  ) {
    super(service, router, route, loading);
    service.setup('flag');
    dragulaService
      .dropModel('flags')
      .pipe(untilComponentDestroyed(this))
      .subscribe((args: any) => {
        const rowData = Array.from(args.target.children);
        rowData.forEach((row: any, index) => {
          const data = [
            'flag::patch',
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

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
