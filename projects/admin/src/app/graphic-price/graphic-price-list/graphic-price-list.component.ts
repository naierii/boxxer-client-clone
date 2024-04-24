import { LoadingService } from '@admin/core/services/loading.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { PagedViewComponent } from '@admin/shared/components/paged-view/paged-view.component';
import { SocketService } from '@admin/shared/services/socket.service';
import { GraphicPrice } from '@global/models/graphic-price';

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
    protected loading: LoadingService
  ) {
    super(service, router, route, loading);
    this.extraParams = {
      $sort: {
        createdAt: -1
      }
    };
    service.setup('graphic-price');
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
