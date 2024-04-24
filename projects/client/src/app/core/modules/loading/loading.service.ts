import { Injectable } from '@angular/core';
import * as fromRoot from '@app/reducers';
import * as loading from '@app/core/actions/loading';
import { Store } from '@ngrx/store';

@Injectable()
export class LoadingService {
  constructor(private store: Store<fromRoot.State>) {}

  show(message?: string, offset?: string, subMessage?: string) {
    this.store.dispatch(new loading.Show(message, subMessage, offset));
  }

  hide() {
    this.store.dispatch(new loading.Hide());
  }
}
