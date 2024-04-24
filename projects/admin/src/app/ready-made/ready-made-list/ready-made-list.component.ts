import { ProductDisplay } from '@global/models/product-display';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PagedViewComponent } from '@admin/shared/components/paged-view/paged-view.component';
import { LoadingService } from '@admin/core/services/loading.service';
import { SocketService } from '@admin/shared/services/socket.service';

@Component({
  selector: 'bx-ready-made-list',
  templateUrl: './ready-made-list.component.html'
})
export class ReadyMadeListComponent extends PagedViewComponent
  implements OnInit, OnDestroy {
  items: ProductDisplay[];
  constructor(
    protected service: SocketService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected loading: LoadingService
  ) {
    super(service, router, route, loading);
    this.extraParams = {
      $sort: {
        published: -1,
        weight: -1
      }
    };
    service.setup('product-display');
  }

  ngOnInit() {
    super.ngOnInit();


  
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
