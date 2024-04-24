import { LoadingService } from '@admin/core/services/loading.service';
import { SocketService } from '@admin/shared/services/socket.service';
import { Page } from './../page';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PagedViewComponent } from '@admin/shared/components/paged-view/paged-view.component';

@Component({
  selector: 'bx-page-list',
  templateUrl: './page-list.component.html'
})
export class PageListComponent extends PagedViewComponent
  implements OnInit, OnDestroy {
  items: Page[];
  constructor(
    protected service: SocketService,
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
    service.setup('page');
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
