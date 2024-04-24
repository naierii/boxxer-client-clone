import { untilComponentDestroyed } from '@global/untilDestroy';
import { Router, NavigationEnd } from '@angular/router';
import { StateService } from '@admin/core/services/state.service';
import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { pairwise, filter } from 'rxjs/operators';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: ' <router-outlet></router-outlet>'
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    translate: TranslateService,
    private router: Router,
    private state: StateService,
    private swUpdate: SwUpdate,
    private readonly zone: NgZone
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
    router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        pairwise()
      )
      .subscribe((e: any[]) => {
        state.previousUrl = e[0].urlAfterRedirects;
        state.currentUrl = e[1].urlAfterRedirects;
      });
    if (this.swUpdate && this.swUpdate.isEnabled) {
      const updateInterval = 1000 * 60 * 60 * 6; // 6 Hours
      // See issue: https://github.com/angular/angular/issues/20970
      this.zone.runOutsideAngular(() =>
        interval(updateInterval)
          .pipe(untilComponentDestroyed(this))
          .subscribe(() => this.zone.run(() => this.swUpdate.checkForUpdate()))
      );
    }
  }

  ngOnInit() {
    if (this.swUpdate && this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(event => {
        this.state.update = true;
      });
    }
  }

  ngOnDestroy() {}
}
