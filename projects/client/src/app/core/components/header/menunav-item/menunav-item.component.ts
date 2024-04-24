import { MenunavItem } from './menunav-item.model';
import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ViewEncapsulation
} from '@angular/core';
import { MenunavService } from '../menunav/menunav.service';
import { OpenMenu } from '@app/core/actions/state';
import * as fromRoot from '@app/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'bx-menunav-item',
  templateUrl: './menunav-item.component.html',
  styleUrls: ['./menunav-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenunavItemComponent implements OnInit {
  @Input()
  item: MenunavItem;

  @HostBinding('class.open')
  get isOpen() {
    return this.menunavService.isOpen(this.item);
  }

  @HostBinding('class.menunav-item')
  menunavItemClass = true;

  constructor(
    private menunavService: MenunavService,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit() {}

  toggleDropdown(): void {
    if (this.item.hasSubItems()) {
      this.menunavService.toggleCurrentlyOpen(this.item);
    }
  }

  // Receives the count of Sub Items and multiplies it with 48 (height of one SidenavItem) to set the height for animation.
  getSubItemsHeight(): string {
    return (
      this.getOpenSubItemsCount(this.item) * 48 +
      this.getOpenSeperatorCount(this.item) * 20 +
      'px'
    );
  }

  // Counts the amount of Sub Items there is and returns the count.
  getOpenSubItemsCount(item: MenunavItem): number {
    let count = 0;

    if (item.hasSubItems() && this.menunavService.isOpen(item)) {
      const menus = item.subItems.filter(i => i.seperator === false);
      count += menus.length;

      menus.forEach(subItem => {
        count += this.getOpenSubItemsCount(subItem);
      });
    }
    return count;
  }

  getOpenSeperatorCount(item: MenunavItem): number {
    let count = 0;

    if (item.hasSubItems() && this.menunavService.isOpen(item)) {
      const seperators = item.subItems.filter(i => i.seperator === true);
      count += seperators.length;
      seperators.forEach(subItem => {
        count += this.getOpenSubItemsCount(subItem);
      });
    }
    return count;
  }

  menuClicked() {
    this.store.dispatch(new OpenMenu(false));
  }
}
