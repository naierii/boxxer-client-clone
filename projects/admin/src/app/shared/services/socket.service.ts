import { throwError } from 'rxjs';
import { FeathersSocketService } from './feathers.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { LoadingService } from '@admin/core/services/loading.service';
import { ToastService } from '@admin/core/services/toast.service';

@Injectable()
export class SocketService {
  endpoint: string;
  loading_enabled = true;
  service: any;
  constructor(
    protected feathers: FeathersSocketService,
    protected loading: LoadingService,
    protected router: Router,
    protected toast: ToastService
  ) {}

  setup(endpoint: string, idField?: string) {
    this.service = this.feathers.service(endpoint);
  }

  find(query?: any, loader: boolean = true) {
    if (loader) {
      this.showLoader();
    }
    if (!query) {
      query = {};
    }
    query.$client = { schema: 'po-admin' };
    return this.service
      .watch()
      .find({
        query
      })
      .pipe(
        tap(resp => {
          this.onEnd();
        }),
        catchError(this.handleError.bind(this))
      );
  }

  findOne(id: number | string, query?: any, loader: boolean = true) {
    this.showLoader();
    if (!query) {
      query = {};
    }
    query.$client = { schema: 'po-admin' };

    return this.service
      .watch()
      .get(id, {
        query
      })
      .pipe(
        tap(resp => {
          this.onEnd();
        }),
        catchError(this.handleError.bind(this))
      );
  }

  create(data: any, params?: any) {
    this.showLoader();
    if (!params) {
      params = {};
    }
    params = Object.assign(params, {
      query: {
        $client: { schema: 'po-admin' }
      }
    });
    return this.service
      .watch()
      .create(data, params || {})
      .pipe(
        tap(() => this.onEnd()),
        catchError(this.handleError.bind(this))
      );
  }

  update(
    id: number | string,
    data: any,
    params?: any,
    loading: boolean = true
  ) {
    if (loading) {
      this.showLoader();
    }
    if (!params) {
      params = {};
    }
    params = Object.assign(params, {
      query: {
        $client: { schema: 'po-admin' }
      }
    });

    return this.service
      .watch()
      .patch(id, data, params || {})
      .pipe(
        tap(resp => {
          this.onEnd();
        }),
        catchError(this.handleError.bind(this))
      );
  }

  remove(id: number | string) {
    this.service.remove(id);
  }

  removeSub(id: number | string) {
    return this.service
      .watch()
      .remove(id)
      .pipe(tap(() => this.onEnd()));
  }

  private onEnd(): void {
    this.hideLoader();
  }

  private showLoader(): void {
    if (this.loading_enabled) {
      this.loading.setLoading(true);
    }
  }

  private hideLoader(): void {
    this.loading.setLoading(false);
  }

  private handleError(error: any) {
    console.log(error);

    this.hideLoader();
    if (error && error.code === 401) {
      this.router.navigate(['/auth', 'login']);
    }

    if (error && error.code === 404) {
      this.router.navigate(['/error/notfound']);
    }
    if ((error && error.code === 403) || (error && error.code === 405)) {
      this.router.navigate(['/error/forbidden']);
    }

    this.toast.showToast('error', 'Error', error.message);
    return throwError(error);
  }
}
