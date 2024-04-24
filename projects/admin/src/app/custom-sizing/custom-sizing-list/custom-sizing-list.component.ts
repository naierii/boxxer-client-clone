import { LoadingService } from '@admin/core/services/loading.service';
import { PagedViewComponent } from '@admin/shared/components/paged-view/paged-view.component';
import { SocketService } from '@admin/shared/services/socket.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { CustomProductSize } from '@global/models/custom-product-size';

@Component({
  selector: 'bx-custom-sizing-list',
  templateUrl: './custom-sizing-list.component.html',
  providers: [
    {
      provide: 'CustomSizeService',
      useClass: SocketService
    }
  ]
})
export class CustomSizingListComponent extends PagedViewComponent
  implements OnInit, OnDestroy {
  items: CustomProductSize[];
  constructor(
    @Inject('CustomSizeService') protected service: SocketService,
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
    service.setup('custom-product-size');
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
