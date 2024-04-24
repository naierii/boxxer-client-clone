import { PlatformLocation } from '@angular/common';
import {
  Component,
  ElementRef,
  Renderer2,
  ViewEncapsulation,
  AfterViewInit
} from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { PlatformService } from '@app/shared-main/services/platform.service';
import {
  OpenMenu,
  OpenCart,
  SetCurrency,
  GetSetting
} from '@app/core/actions/state';
import * as fromRoot from '@app/reducers';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TawkService } from './core/services/tawk.service';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';
import { Angulartics2Facebook } from 'angulartics2/facebook';
import { CookieService } from '@gorniv/ngx-universal';

@Component({
  selector: 'bx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  init = false;
  isLoading$: Observable<boolean>;
  cartOpen$: Observable<boolean>;
  menuOpen$: Observable<boolean>;
  private routeScrollPositions: { [url: string]: number }[] = [];
  private subscriptions: Subscription[] = [];
  private wasPop = false;
  private previousNavigationUrl: string;
  constructor(
    private cookieService: CookieService,
    private router: Router,
    private el: ElementRef,
    private renderer: Renderer2,
    location: PlatformLocation,
    private ps: PlatformService,
    private store: Store<fromRoot.State>,
    private tawk: TawkService,
    private angulartics2GoogleTagManager: Angulartics2GoogleTagManager,
    private angulartics2Facebook: Angulartics2Facebook
  ) {
    this.angulartics2GoogleTagManager.startTracking();
    this.angulartics2Facebook.startTracking();
    this.isLoading$ = this.store.pipe(delay(0), select(fromRoot.isLoading));
    this.cartOpen$ = this.store.pipe(select(fromRoot.getCartOpen));
    this.menuOpen$ = this.store.pipe(select(fromRoot.getMenuOpen));
    this.cartOpen$.subscribe(open => this.modalClass(open));
    this.menuOpen$.subscribe(open => this.modalClass(open));
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.store.dispatch(new OpenMenu(false));
        this.store.dispatch(new OpenCart(false));
      }
    });
    if (ps.isBrowser) {
      location.onPopState(() => {
        this.wasPop = true;
      });

      this.subscriptions.push(
        this.router.events.subscribe(event => {
          if (event instanceof NavigationStart) {
            const index =
              this.previousNavigationUrl !== null
                ? this.previousNavigationUrl
                : event.url;
            this.routeScrollPositions[index] = window.pageYOffset;
          } else if (event instanceof NavigationEnd) {
            this.previousNavigationUrl = event.url;

            if (this.wasPop) {
              setTimeout(() => {
                this.ps
                  .getNativeWindow()
                  .scrollTo(0, this.routeScrollPositions[event.url] || 0);
              }, 1000);

              this.wasPop = false;
            } else {
              this.ps.getNativeWindow().scrollTo(0, 0);
            }
          }
        })
      );
    }
  }

  ngAfterViewInit() {
    if (this.ps.isBrowser) {
      setTimeout(() => {
        this.tawk.load();
      }, 10000);

      this.store.dispatch(new GetSetting());

      const currency = this.cookieService.get('currency');
      if (currency) {
        this.store.dispatch(new SetCurrency(currency));
      }
    }
  }

  onDeactivate() {
    this.ps.getNativeDocument().body.scrollTop = 0;
  }

  modalClass(open: boolean) {
    if (open) {
      this.renderer.addClass(this.el.nativeElement.parentElement, 'modal');
    } else {
      this.renderer.removeClass(this.el.nativeElement.parentElement, 'modal');
    }
  }
}
