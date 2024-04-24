import { CustomProductStyle } from '@global/models/custom-product-style';
import { Observable, combineLatest } from 'rxjs';
import { CustomMuayThai, CustomDesign } from '@global/models/custom-design';
import {
  AfterViewInit,
  Component,
  QueryList,
  ViewChildren,
  OnDestroy
} from '@angular/core';

import { DesignService } from './../services/design.service';
import { NavItemComponent } from './nav-item.component';
import * as fromCustomiser from './../reducers';
import { Store, select } from '@ngrx/store';
import { CustomProductSetting } from '@global/models/custom-product-setting';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { map, share, tap, filter } from 'rxjs/operators';

@Component({
  selector: 'bx-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements AfterViewInit, OnDestroy {
  @ViewChildren(NavItemComponent)
  menuLinks: QueryList<NavItemComponent>;
  hasScrolled = false;
  design: CustomDesign;
  complete$: Observable<boolean>;
  sizes$: Observable<any[]>;
  styles$: Observable<CustomProductStyle[]>;
  panels$: Observable<CustomProductSetting[]>;
  muay_thai$: Observable<CustomProductSetting[]>;
  total$: Observable<number>;
  constructor(
    public designService: DesignService,
    store: Store<fromCustomiser.State>
  ) {
    store
      .pipe(select(fromCustomiser.getDesign))
      .pipe(untilComponentDestroyed(this))
      .subscribe(design => (this.design = design));
    this.complete$ = store.pipe(select(fromCustomiser.isComplete));
    this.styles$ = store.pipe(select(fromCustomiser.getStyles));
    this.panels$ = store.pipe(
      select(fromCustomiser.getPanels),
      map((panels: any) => panels.filter(p => !p.default_material))
    );
    this.muay_thai$ = store.pipe(select(fromCustomiser.getMuayThai));
    this.sizes$ = store.pipe(select(fromCustomiser.getSizes));
    this.total$ = combineLatest([
      store.pipe(select(fromCustomiser.getDesign)),
      store.pipe(select(fromCustomiser.getProduct))
    ]).pipe(
      map(resp => {
        let price = 0;
        if (resp[1]) {
          price = resp[1].on_sale ? resp[1].sale_price : resp[1].price;
        }
        return resp[0] && resp[0].total ? resp[0].total : price;
      })
    );
  }

  ngAfterViewInit() {
    if (this.designService.navSelected) {
      const menu = this.menuLinks.find(
        m => m.menuId === this.designService.navSelected
      );
      if (menu) {
        menu.scrollIntoView();
      }
    }
  }

  menuClicked(event) {
    this.designService.navSelected = event.currentTarget.id;
    this.designService.selectedObject = null;
  }

  getStyle(type: string): any {
    return this.design[type.toLowerCase()];
  }

  getPanel(panel: string) {
    return this.design.panels.find(p => p.panel === panel);
  }

  getSize() {
    return this.design.sizing;
  }

  getMuayThai(): CustomMuayThai {
    return this.design.muay_thai;
  }

  getProduction() {
    return this.design.production;
  }

  addToCart() {
    this.designService.addToCart();
  }

  updateCart() {
    this.designService.updateCart();
  }

  updateOrderAdmin() {
    this.designService.updateOrderAdmin();
  }

  ngOnDestroy() {}
}
