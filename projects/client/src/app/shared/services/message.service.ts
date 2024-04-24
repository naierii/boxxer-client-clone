import { Injectable } from '@angular/core';
import * as fromRoot from '@app/reducers';
import { Store } from '@ngrx/store';
import { AddMessage, RemoveMessage } from '@app/core/actions/state';

@Injectable()
export class MessageService {
  constructor(private store: Store<fromRoot.State>) {}

  addMessage(type: string, message: string, ttl?: number) {
    const item = {
      type,
      message
    };
    this.store.dispatch(new AddMessage(item));

    if (ttl) {
      const timeout = setTimeout(() => {
        this.store.dispatch(new RemoveMessage(item));
        clearTimeout(timeout);
      }, ttl);
    }
    return item;
  }
}
