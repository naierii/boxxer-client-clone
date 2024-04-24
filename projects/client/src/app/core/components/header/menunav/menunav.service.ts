import { Observer, Observable, BehaviorSubject } from 'rxjs';
import { MenunavItem } from './../menunav-item/menunav-item.model';
import { Injectable } from '@angular/core';
import { share } from 'rxjs/operators';

@Injectable()
export class MenunavService {
  private _itemsSubject: BehaviorSubject<MenunavItem[]> = new BehaviorSubject<
    MenunavItem[]
  >([]);
  private _items: MenunavItem[] = [];
  items$: Observable<MenunavItem[]> = this._itemsSubject.asObservable();

  private _currentlyOpenSubject: BehaviorSubject<MenunavItem[]> =
    new BehaviorSubject<MenunavItem[]>([]);
  private _currentlyOpen: MenunavItem[] = [];
  currentlyOpen$: Observable<MenunavItem[]> =
    this._currentlyOpenSubject.asObservable();
  constructor() {
    const menu = this;

    const shop = menu.addItem('Shop Fightwear', null, 1);
    menu.addSubItem(shop, 'Custom Fightwear', null, 1, true);
    menu.addSubItem(
      shop,
      'Boxing Shorts & Trunks',
      '/custom-fightwear/shorts-trunks',
      2
    );
    menu.addSubItem(
      shop,
      'Muay Thai Shorts',
      '/custom-fightwear/thai-shorts',
      3
    );
    menu.addSubItem(
      shop,
      'Gladiator Shorts',
      '/custom-fightwear/gladiator-shorts',
      4
    );
    menu.addSubItem(
      shop,
      'MMA Shorts',
      '/custom-fightwear/mma-shorts',
      4
    );
    menu.addSubItem(shop, 'Jackets', '/custom-fightwear/jackets-vests', 5);
    menu.addSubItem(
      shop,
      'Corner Jackets',
      '/custom-fightwear/corner-jackets',
      6
    );
    menu.addSubItem(shop, 'Vests', '/custom-fightwear/vests', 7);
    menu.addSubItem(shop, 'Robes', '/custom-fightwear/robes', 8);
    menu.addSubItem(
      shop,
      'Kickboxing Trousers',
      '/custom-fightwear/kickboxing-trousers',
      9
    );
    menu.addSubItem(shop, 'Caps', '/custom-fightwear/caps', 9);
    menu.addSubItem(shop, 'T-shirts', '/custom-fightwear/t-shirts', 9);
    menu.addSubItem(shop, 'Sports Bra', '/custom-fightwear/sports-bra', 9);
    menu.addSubItem(
      shop,
      'Club / Team Kits',
      '/help-and-info/club-team-kits',
      9
    );
    menu.addSubItem(shop, 'Custom Equipment', null, 9, true);
    menu.addSubItem(shop, 'Gloves', '/custom-equipment/gloves', 10);
    menu.addSubItem(shop, 'Pads', '/custom-equipment/pads', 11);
    menu.addSubItem(shop, 'Head Guards', '/custom-equipment/head-guards', 12);
    menu.addSubItem(shop, 'Groin Guards', '/custom-equipment/groin-guards', 13);
    menu.addSubItem(shop, 'Club Kits', null, 14, true);
    menu.addSubItem(
      shop,
      'Boxing Shorts & Trunks',
      '/club-kits/shorts-trunks',
      15
    );
    menu.addSubItem(shop, 'Vests', '/club-kits/vests', 16);
    menu.addSubItem(shop, 'Robes', '/club-kits/robes', 17);
    menu.addSubItem(shop, 'Ready Made', null, 18, true);
    menu.addSubItem(
      shop,
      'Boxing Shorts & Trunks',
      '/ready-made/shorts-trunks',
      19
    );
    menu.addSubItem(shop, 'Boxing Vests', '/ready-made/vests', 20);

    const gallery = menu.addItem('Gallery', null, 1);
    menu.addSubItem(
      gallery,
      'Boxing Shorts & Trunks',
      '/gallery/shorts-trunks',
      2
    );
    menu.addSubItem(gallery, 'Muay Thai Shorts', '/gallery/thai-shorts', 3);
    menu.addSubItem(
      gallery,
      'Gladiator Shorts',
      '/gallery/gladiator-shorts',
      4
    );
    menu.addSubItem(gallery, 'MMA Shorts', '/gallery/mma-shorts', 4);
    menu.addSubItem(gallery, 'Jackets', '/gallery/jackets-vests', 5);
    menu.addSubItem(gallery, 'Corner Jackets', '/gallery/corner-jackets', 6);
    menu.addSubItem(gallery, 'Vests', '/gallery/vests', 7);
    menu.addSubItem(gallery, 'Robes', '/gallery/robes', 8);
    menu.addSubItem(gallery, 'Kickboxing Trousers', '/gallery/kickboxing-trousers', 8);
    menu.addSubItem(gallery, 'Caps', '/gallery/caps', 8);
    menu.addSubItem(gallery, 'T-shirts', '/gallery/t-shirts', 8);
    menu.addSubItem(gallery, 'Sports Bra', '/gallery/sports-bra', 8);
    menu.addSubItem(gallery, 'Gloves', '/gallery/gloves', 9);
    menu.addSubItem(gallery, 'Pads', '/gallery/pads', 10);
    menu.addSubItem(gallery, 'Head Guards', '/gallery/head-guards', 11);
    menu.addSubItem(gallery, 'Groin Guards', '/gallery/groin-guards', 12);
    const voucher = menu.addItem('Gift Voucher', null, 1);
    menu.addSubItem(voucher, 'Purchase', '/gift-voucher/purchase', 5);
    menu.addSubItem(voucher, 'Redeem', '/gift-voucher/redeem', 6);
    menu.addSubItem(voucher, 'Check Balance', '/gift-voucher/balance', 7);
    const blog = menu.addItem('Blog', '/blog', 1);

    const help = menu.addItem('Help & Info', null, 1);
    menu.addSubItem(
      help,
      'Ordering & Delivery',
      '/help-and-info/ordering-and-delivery',
      1
    );
    menu.addSubItem(
      help,
      'Care Instructions',
      '/help-and-info/care-instructions',
      2
    );
    menu.addSubItem(help, 'See Name Styles', '/help-and-info/name-styles', 2);
    // menu.addSubItem(help, 'About Us', '/help-and-info/about-us', 3);
    menu.addSubItem(help, 'Contact Us', '/help-and-info/contact-us', 4);
    menu.addSubItem(
      help,
      'Terms & Conditions',
      '/help-and-info/terms-and-conditions',
      5
    );
    menu.addSubItem(help, 'Privacy Policy', '/help-and-info/privacy-policy', 6);
    menu.addSubItem(help, 'Cookie Policy', '/help-and-info/cookie-policy', 7);
    menu.addSubItem(help, 'Feedback', '/feedback', 8);
  }

  addItem(name: string, route: string, position: number, seperator?: boolean) {
    const item = new MenunavItem({
      name,
      route,
      subItems: [],
      position: position || 99,
      seperator: seperator ? seperator : false,
    });

    this._items.push(item);
    this._itemsSubject.next(this._items);

    return item;
  }

  addSubItem(
    parent: MenunavItem,
    name: string,
    route: string,
    position: number,
    seperator?: boolean
  ) {
    const item = new MenunavItem({
      name,
      route,
      parent,
      subItems: [],
      position: position || 99,
      seperator: seperator ? seperator : false,
    });

    parent.subItems.push(item);
    this._itemsSubject.next(this._items);

    return item;
  }

  removeItem(item: MenunavItem) {
    const index = this._items.indexOf(item);
    if (index > -1) {
      this._items.splice(index, 1);
    }

    this._itemsSubject.next(this._items);
  }

  isOpen(item: MenunavItem) {
    return this._currentlyOpen.indexOf(item) !== -1;
  }

  toggleCurrentlyOpen(item: MenunavItem) {
    let currentlyOpen = this._currentlyOpen;

    if (this.isOpen(item)) {
      if (currentlyOpen.length > 1) {
        currentlyOpen.length = this._currentlyOpen.indexOf(item);
      } else {
        currentlyOpen = [];
      }
    } else {
      currentlyOpen = this.getAllParents(item);
    }
    this._currentlyOpen = currentlyOpen;
    this._currentlyOpenSubject.next(currentlyOpen);
  }

  getAllParents(item: MenunavItem, currentlyOpen: MenunavItem[] = []) {
    currentlyOpen.unshift(item);

    if (item.hasParent()) {
      return this.getAllParents(item.parent, currentlyOpen);
    } else {
      return currentlyOpen;
    }
  }

  nextCurrentlyOpen(currentlyOpen: MenunavItem[]) {
    this._currentlyOpen = currentlyOpen;
    this._currentlyOpenSubject.next(currentlyOpen);
  }

  nextCurrentlyOpenByRoute(route: string) {
    let currentlyOpen = [];

    const item = this.findByRouteRecursive(route, this._items);

    if (item && item.hasParent()) {
      currentlyOpen = this.getAllParents(item);
    } else if (item) {
      currentlyOpen = [item];
    }

    this.nextCurrentlyOpen(currentlyOpen);
  }

  findByRouteRecursive(route: string, collection: MenunavItem[]) {
    let result = collection.find((item) => item.route === route);

    if (!result) {
      collection.forEach((item) => {
        if (item.hasSubItems()) {
          const found = this.findByRouteRecursive(route, item.subItems);

          if (found) {
            result = found;
            return false;
          }
        }
      });
    }

    return result;
  }

  get currentlyOpen() {
    return this._currentlyOpen;
  }
}
