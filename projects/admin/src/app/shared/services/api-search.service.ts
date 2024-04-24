import { switchMap, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { FeathersSocketService } from './feathers.service';
import { SocketService } from './socket.service';
import { Subject } from 'rxjs';
import { ToastService } from '@admin/core/services/toast.service';
import { Router } from '@angular/router';
import { LoadingService } from '@admin/core/services/loading.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiSearchService extends SocketService {
  private searchTermStream = new Subject<string>();
  constructor(
    protected feathers: FeathersSocketService,
    protected loading: LoadingService,
    protected router: Router,
    protected toast: ToastService
  ) {
    super(feathers, loading, router, toast);
  }

  search() {
    return this.searchTermStream.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((search: string) => {
        return this.find({
          $search: search
        });
      })
    );
  }

  setSearch(searchString: string) {
    this.searchTermStream.next(searchString);
  }
}
