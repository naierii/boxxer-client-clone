import { LoadingService } from '@admin/core/services/loading.service';
import { PagedViewComponent } from '@admin/shared/components/paged-view/paged-view.component';
import { SocketService } from '@admin/shared/services/socket.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { CustomProductStyle } from '@global/models/custom-product-style';

@Component({
  selector: 'bx-custom-styles-list',
  templateUrl: './custom-styles-list.component.html',
  providers: [
    {
      provide: 'StyleService',
      useClass: SocketService
    }
  ]
})
export class CustomStylesListComponent extends PagedViewComponent
  implements OnInit, OnDestroy {
  items: CustomProductStyle[];
  constructor(
    @Inject('StyleService') protected service: SocketService,
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
    service.setup('custom-product-style');
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
