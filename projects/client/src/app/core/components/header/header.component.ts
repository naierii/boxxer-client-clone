import { Component, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { OpenMenu } from '@app/core/actions/state';
import * as fromRoot from '@app/reducers';
import { select, Store } from '@ngrx/store';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'bx-header, [bx-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  menuOpen$: Observable<boolean>;

  @Input()
  checkout = false;

  constructor(private router: Router, private store: Store<fromRoot.State>) {
    this.menuOpen$ = store.pipe(select(fromRoot.getMenuOpen));
  }

  toggleMenu(menuOpen: Observable<boolean>) {
    menuOpen
      .pipe(untilComponentDestroyed(this), take(1))
      .subscribe((open: boolean) => {
        this.store.dispatch(new OpenMenu(!open));
      });
  }

  login() {
    this.router.navigate(['/login']);
  }

  account() {
    this.router.navigate(['/user']);
  }

  ngOnDestroy() {}
}
