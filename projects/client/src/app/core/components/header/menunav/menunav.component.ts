import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { MenunavItem } from '../menunav-item/menunav-item.model';
import { MenunavService } from './menunav.service';
import { takeUntil } from 'rxjs/operators';
import { componentDestroyed } from '@w11k/ngx-componentdestroyed';

@Component({
  selector: 'bx-menunav',
  templateUrl: './menunav.component.html',
  styleUrls: ['./menunav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenunavComponent implements OnInit, OnDestroy {
  items: MenunavItem[];

  private _itemsSubscription: Subscription;
  private _routerEventsSubscription: Subscription;
  constructor(private menunavService: MenunavService, private router: Router) {}

  ngOnInit() {
    this._itemsSubscription = this.menunavService.items$
      .pipe(takeUntil(componentDestroyed(this)))
      .subscribe((items: MenunavItem[]) => {
        this.items = this.sortRecursive(items, 'position');
      });
    this._routerEventsSubscription = this.router.events
      .pipe(takeUntil(componentDestroyed(this)))
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.menunavService.nextCurrentlyOpenByRoute(event.url);
        }
      });
  }

  sortRecursive(array: MenunavItem[], propertyName: string) {
    const that = this;

    array.forEach(item => {
      const keys = Object.keys(item);
      keys.forEach(key => {
        if (Array.isArray(item[key])) {
          item[key] = that.sortRecursive(item[key], propertyName);
        }
      });
    });

    return array.sort((a, b) => {
      return a[propertyName] - b[propertyName];
    });
  }

  ngOnDestroy() {
    this._itemsSubscription.unsubscribe();
    this._routerEventsSubscription.unsubscribe();
  }
}
