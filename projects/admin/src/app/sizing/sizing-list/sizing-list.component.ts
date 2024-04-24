import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { SocketService } from '@admin/shared/services/socket.service';
import { PagedViewComponent } from '@admin/shared/components/paged-view/paged-view.component';
import { LoadingService } from '@admin/core/services/loading.service';
import { Size } from '@global/models/size';

@Component({
  selector: 'bx-sizing-list',
  templateUrl: './sizing-list.component.html',
  providers: [
    {
      provide: 'SizeService',
      useClass: SocketService
    }
  ]
})
export class SizingListComponent extends PagedViewComponent
  implements OnInit, OnDestroy {
  items: Size[];
  constructor(
    @Inject('SizeService') protected service: SocketService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected loading: LoadingService
  ) {
    super(service, router, route, loading);
    this.extraParams = {
      $sort: {
        category: 1,
        weight: 1
      }
    };
    service.setup('size');
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
