import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PagedViewComponent } from '@admin/shared/components/paged-view/paged-view.component';
import { LoadingService } from '@admin/core/services/loading.service';
import { SocketService } from '@admin/shared/services/socket.service';

@Component({
  selector: 'bx-ready-made-setting-list',
  templateUrl: './ready-made-setting-list.component.html'
})
export class ReadyMadeSettingListComponent extends PagedViewComponent
  implements OnInit, OnDestroy {
  items: any[];
  constructor(
    protected service: SocketService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected loading: LoadingService
  ) {
    super(service, router, route, loading);
    service.setup('ready-made-setting');
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
