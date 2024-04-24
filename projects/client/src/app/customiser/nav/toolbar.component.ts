import { environment } from '@env/environment';
import { Profile } from '@global/models/profile';
import { DesignService } from './../services/design.service';
import { CustomiserOptionsService } from './../services/customiser-options.service';
import { AuthService } from '@app/core/services/auth.service';
import { untilComponentDestroyed } from '@global/untilDestroy';
import {
  Component,
  EventEmitter,
  Output,
  OnDestroy,
  ViewChild,
  OnInit,
  Input
} from '@angular/core';
import { Router } from '@angular/router';
import * as fromCustomiser from './../reducers';
import * as fromRoot from '@app/reducers';
import * as profiles from '@app/core/actions/profile';
import { Store, select } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { CustomProduct } from '@global/models/custom-product';
import { Observable } from 'rxjs';
import { CustomProductSetting } from '@global/models/custom-product-setting';
import { TourService } from 'ngx-tour-md-menu';
import { MatMenuTrigger } from '@angular/material/menu';
import { SetCurrency } from '@app/core/actions/state';
import { TawkService } from '@app/core/services/tawk.service';
import { CookieService } from '@gorniv/ngx-universal';

@Component({
  selector: 'bx-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  @Input()
  product: CustomProduct;
  @Output()
  designSaved: EventEmitter<any> = new EventEmitter<any>();
  settings$: Observable<CustomProductSetting[]>;
  profiles$: Observable<Profile[]>;
  @ViewChild('trigger', { static: true })
  trigger: MatMenuTrigger;
  menuOpen = false;
  isClub = false;
  currencies = ['GBP', 'EUR', 'USD', 'AUD', 'NZD', 'THB'];
  constructor(
    public tourService: TourService,
    public tawk: TawkService,
    public auth: AuthService,
    private cookieService: CookieService,
    private router: Router,
    private store: Store<fromCustomiser.State>,
    private profileStore: Store<fromRoot.State>,
    private optionsService: CustomiserOptionsService,
    private designService: DesignService
  ) {
    this.profiles$ = profileStore.pipe(select(fromRoot.getProfiles));
    this.settings$ = store.pipe(select(fromCustomiser.getSettings));
    profileStore
      .pipe(
        select(fromRoot.profileLoaded),
        tap((loaded: boolean) =>
          !loaded && auth.loggedIn() ? this.getProfiles() : null
        ),
        untilComponentDestroyed(this)
      )
      .subscribe();
  }

  ngOnInit() {
    this.trigger.menuOpened
      .pipe(untilComponentDestroyed(this))
      .subscribe(() => {
        this.menuOpen = true;
      });

    this.isClub = this.auth.checkRoles(['club']);
  }

  getProfiles() {
    this.store.dispatch(new profiles.Load());
  }

  openChat() {
    this.store
      .pipe(select(fromCustomiser.getDesign), untilComponentDestroyed(this))
      .subscribe(design => {
        if (design && design._id) {
          this.tawk.setAttributes({
            product: `${this.product.title} - ${this.product.category.title}`,
            'view-design': `${environment.site}/customiser/${this.product._id}/design?chat_help=${this.designService.token}`
          });
        }
        this.tawk.toggle();
      });
  }

  goBack() {
    if (this.designService.editDesign) {
      this.designService.updateCart();
    } else {
      this.router.navigate([this.product.category.slug]);
    }
  }

  loginToSave() {
    this.auth.redirectUrl = this.optionsService.menuUrl;
    this.router.navigate(['/login']);
  }

  clearDesign() {
    this.designService.clearDesign();
  }

  viewTour() {
    this.tourService.start();
  }

  menuClicked(e) {
    e.stopPropagation();
  }

  closeMenu() {
    if (this.menuOpen) {
      this.trigger.closeMenu();
      this.menuOpen = true;
    }
  }

  setCurrency(code: string) {
    this.cookieService.put('currency', code, {
      expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
    });
    this.store.dispatch(new SetCurrency(code));
  }

  submitClubkit() {}

  ngOnDestroy() {}
}
