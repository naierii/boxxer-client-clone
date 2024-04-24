import { Profile } from '@global/models/profile';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { map, switchMap, tap } from 'rxjs/operators';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { ConfirmDeleteComponent } from '@app/user/confirm-delete/confirm-delete.component';
import * as fromRoot from '@app/reducers';
import * as profiles from '@app/core/actions/profile';
import { Store, select } from '@ngrx/store';
import { LoadingService } from '@app/core/modules/loading/loading.service';

@Component({
  selector: 'bx-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit, OnDestroy {
  profiles$: Observable<Profile[]>;
  loaded$: Observable<boolean>;
  constructor(
    private dialog: MatDialog,
    private store: Store<fromRoot.State>,
    private loadingService: LoadingService
  ) {
    this.profiles$ = store.pipe(select(fromRoot.getProfiles));
    this.loaded$ = store.pipe(
      select(fromRoot.profileLoaded),
      tap((loaded: boolean) =>
        loaded ? this.getProfiles() : this.store.dispatch(new profiles.Load())
      )
    );
    store
      .pipe(
        select(fromRoot.profileLoading),
        tap((loading: boolean) =>
          loading ? loadingService.show() : loadingService.hide()
        ),
        untilComponentDestroyed(this)
      )
      .subscribe();
  }

  ngOnInit() {}

  getProfiles() {
    this.store.dispatch(new profiles.Load());
  }

  deleteProfile(profile: Profile) {
    const modalRef = this.dialog.open(ConfirmDeleteComponent, {
      data: { title: `Profile` },
      minWidth: '300px',
      autoFocus: false
    });
    modalRef
      .afterClosed()
      .pipe(untilComponentDestroyed(this))
      .subscribe(confirmed => {
        if (confirmed) {
          this.store.dispatch(new profiles.RemoveProfile(profile));
        }
      });
  }

  ngOnDestroy() {}
}
