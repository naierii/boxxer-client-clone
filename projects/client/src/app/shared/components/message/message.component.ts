import { Component, Input, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import { RemoveMessage } from '@app/core/actions/state';
import * as fromRoot from '@app/reducers';
import { Message } from '@global/models/message';

@Component({
  selector: 'bx-message, [bx-message]',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input()
  message: Message;

  constructor(private store: Store<fromRoot.State>) {}

  @HostBinding('class')
  @Input()
  type: string;
  @HostBinding('class.message')
  isMessage() {
    return true;
  }

  clearMessage(message: Message) {
    this.store.dispatch(new RemoveMessage(message));
  }
}
