import { LoadingService } from '@app/core/modules/loading/loading.service';
import { Profile } from '@global/models/profile';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { MyErrorStateMatcher } from '@app/form-error-state';
import * as fromRoot from '@app/reducers';
import * as profiles from '@app/core/actions/profile';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'bx-profile-add',
  templateUrl: './profile-add.component.html',
  styleUrls: ['./profile-add.component.scss']
})
export class ProfileAddComponent implements OnDestroy {
  form: FormGroup;
  edit = false;
  id: string;
  matcher = new MyErrorStateMatcher();
  loaded$: Observable<boolean>;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromRoot.State>,
    private loadingService: LoadingService
  ) {
    this.loaded$ = store.pipe(
      select(fromRoot.profileLoaded),
      tap((loaded: boolean) =>
        loaded ? this.getProfile() : this.store.dispatch(new profiles.Load())
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

  getProfile() {
    this.form = this.fb.group({
      name: [null, Validators.required],
      sizing: this.fb.group({
        weight: [null, Validators.required],
        unit: [null, Validators.required],
        height: [null, Validators.required]
      })
    });
    this.route.params
      .pipe(
        switchMap(params =>
          params.id
            ? this.store.pipe(select(fromRoot.getProfileById(params.id)))
            : of(null)
        ),
        tap((resp: Profile) => {
          if (resp) {
            this.edit = true;
            this.id = resp._id;
            this.form.setValue({
              name: resp.name ? resp.name : null,
              sizing: {
                weight:
                  resp.sizing && resp.sizing.weight ? resp.sizing.weight : null,
                unit: resp.sizing && resp.sizing.unit ? resp.sizing.unit : null,
                height:
                  resp.sizing && resp.sizing.height ? resp.sizing.height : null
              }
            });
          }
        }),
        untilComponentDestroyed(this)
      )
      .subscribe();
  }

  addProfile() {
    const data = {
      ...this.form.value
    };

    if (this.edit) {
      this.store.dispatch(new profiles.UpdateProfile(this.id, data));
    } else {
      this.store.dispatch(new profiles.AddProfile(data));
    }
  }

  ngOnDestroy() {}
}
