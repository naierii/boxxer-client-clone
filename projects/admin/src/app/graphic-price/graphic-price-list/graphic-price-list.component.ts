import { LoadingService } from '@admin/core/services/loading.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { PagedViewComponent } from '@admin/shared/components/paged-view/paged-view.component';
import { SocketService } from '@admin/shared/services/socket.service';
import { GraphicPrice } from '@global/models/graphic-price';
import { DragulaService } from 'ng2-dragula';
import { BatchService } from '@admin/shared/services/batch.service';
import { untilComponentDestroyed } from '@global/untilDestroy';

@Component({
  selector: 'bx-graphic-price-list',
  templateUrl: './graphic-price-list.component.html',
  styles: [],
  providers: [
    {
      provide: 'GraphicPriceService',
      useClass: SocketService
    }
  ]
})
export class GraphicPriceListComponent extends PagedViewComponent
  implements OnInit, OnDestroy {
  items: GraphicPrice[];
  constructor(
    @Inject('GraphicPriceService') protected service: SocketService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected loading: LoadingService,
    private dragulaService: DragulaService,
    private batch: BatchService
  ) {
    super(service, router, route, loading);
    this.extraParams = {
      $sort: {
        weight: 1
      }
    };
    service.setup('graphic-price');
    dragulaService
      .dropModel('graphic-prices')
      .pipe(untilComponentDestroyed(this))
      .subscribe((args: any) => {
        const rowData = Array.from(args.target.children);
        rowData.forEach((row: any, index) => {
          const data = [
            'graphic-price::patch',
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