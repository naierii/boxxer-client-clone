import { Discount } from './../discount';
import { LoadingService } from '@admin/core/services/loading.service';
import { PagedViewComponent } from '@admin/shared/components/paged-view/paged-view.component';
import { SocketService } from '@admin/shared/services/socket.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';

@Component({
  selector: 'bx-discounts-list',
  templateUrl: './discounts-list.component.html',
  providers: [
    {
      provide: 'DiscountService',
      useClass: SocketService
    }
  ]
})
export class DiscountsListComponent extends PagedViewComponent
  implements OnInit, OnDestroy {
  items: Discount[];
  constructor(
    @Inject('DiscountService') protected service: SocketService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected loading: LoadingService
  ) {
    super(service, router, route, loading);
    this.extraParams = {
      expiry: {
        $gte: new Date()
      },
      $sort: {
        createdAt: -1
      }
    };
    service.setup('discount');
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
