import { SocketService } from '@admin/shared/services/socket.service';
import { ToastService } from '@admin/core/services/toast.service';
import { LoadingService } from '@admin/core/services/loading.service';
import { FeathersSocketService } from '@admin/shared/services/feathers.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class TermService extends SocketService {
  constructor(
    protected feathers: FeathersSocketService,
    protected loading: LoadingService,
    protected router: Router,
    protected toast: ToastService
  ) {
    super(feathers, loading, router, toast);
    this.endpoint = 'term';
  }
}
