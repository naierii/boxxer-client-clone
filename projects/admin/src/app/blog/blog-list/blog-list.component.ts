import { LoadingService } from '@admin/core/services/loading.service';
import { PagedViewComponent } from '@admin/shared/components/paged-view/paged-view.component';
import { SocketService } from '@admin/shared/services/socket.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from './../blog';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';

@Component({
  selector: 'bx-blog-list',
  templateUrl: './blog-list.component.html',
  providers: [
    {
      provide: 'BlogService',
      useClass: SocketService
    }
  ]
})
export class BlogListComponent extends PagedViewComponent
  implements OnInit, OnDestroy {
  items: Blog[];
  constructor(
    @Inject('BlogService') protected service: SocketService,
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
    service.setup('blog');
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
