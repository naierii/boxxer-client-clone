import { Component, ChangeDetectionStrategy } from '@angular/core';
import * as fromRoot from '@app/reducers';
import { Store, select } from '@ngrx/store';
@Component({
  selector: 'bx-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent {
  message$ = this.store.pipe(select(fromRoot.loadingMessage));
  subMessage$ = this.store.pipe(select(fromRoot.loadingSubMessage));
  offsetTop$ = this.store.pipe(select(fromRoot.loadingOffset));
  constructor(private store: Store<fromRoot.State>) {}
}
