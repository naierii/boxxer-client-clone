import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiService } from '@app/core/services/api.service';
import { LoadingService } from '@app/core/modules/loading/loading.service';

@Injectable()
export class HelpService {
  constructor(private api: ApiService, private loading: LoadingService) {}
  getPage(slug: string): Observable<any> {
    this.loading.show();
    return this.api.get('page', slug).pipe(
      map(res => res),
      tap(resp => {
        this.loading.hide();
      })
    );
  }
}
