import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PagedViewComponent } from '@admin/shared/components/paged-view/paged-view.component';
import { Shipping } from '@global/models/shipping';
import { LoadingService } from '@admin/core/services/loading.service';
import { SocketService } from '@admin/shared/services/socket.service';

@Component({
  selector: 'bx-shipping-list',
  templateUrl: './shipping-list.component.html',
  styleUrls: ['./shipping-list.component.scss']
})
export class ShippingListComponent extends PagedViewComponent
  implements OnInit, OnDestroy {
  items: Shipping[];
  constructor(
    protected service: SocketService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected loading: LoadingService
  ) {
    super(service, router, route, loading);
    service.setup('shipping');
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
