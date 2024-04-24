import { LoadingService } from '@admin/core/services/loading.service';
import { PagedViewComponent } from '@admin/shared/components/paged-view/paged-view.component';
import { SocketService } from '@admin/shared/services/socket.service';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NameOption } from '@global/models/name-option';

@Component({
  selector: 'bx-custom-names-list',
  templateUrl: './custom-names-list.component.html',
  providers: [
    {
      provide: 'NameService',
      useClass: SocketService
    }
  ]
})
export class CustomNamesListComponent extends PagedViewComponent
  implements OnInit, OnDestroy {
  items: NameOption[];
  constructor(
    @Inject('NameService') protected service: SocketService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected loading: LoadingService
  ) {
    super(service, router, route, loading);
    this.extraParams = {
      published: true,
      $sort: {
        weight: 1
      }
    };
    service.setup('name-option');
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
