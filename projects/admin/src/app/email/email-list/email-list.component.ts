import { EmailContent } from '@global/models/email-content';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { SocketService } from '@admin/shared/services/socket.service';
import { PagedViewComponent } from '@admin/shared/components/paged-view/paged-view.component';
import { LoadingService } from '@admin/core/services/loading.service';

@Component({
  selector: 'bx-email-list',
  templateUrl: './email-list.component.html',
  styles: [],
  providers: [
    {
      provide: 'EmailService',
      useClass: SocketService
    }
  ]
})
export class EmailListComponent extends PagedViewComponent
  implements OnInit, OnDestroy {
  items: EmailContent[];
  constructor(
    @Inject('EmailService') protected service: SocketService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected loading: LoadingService
  ) {
    super(service, router, route, loading);
    this.extraParams = {
      $sort: {
        type: 1
      }
    };
    service.setup('email-content');
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
