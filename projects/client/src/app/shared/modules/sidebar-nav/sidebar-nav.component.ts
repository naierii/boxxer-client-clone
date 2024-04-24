import { galleryMenu } from './gallery-menu';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { shopMenu } from './shop-menu';

@Component({
  selector: 'bx-sidebar-nav, [bxSidebarNav]',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarNavComponent implements OnInit {
  @Input() type: string;
  menus: any[];
  constructor() {}

  ngOnInit() {
    switch (this.type) {
      case 'shop':
        this.getShopMenu();
        break;
      case 'gallery':
        this.getGalleryMenu();
        break;
    }
  }

  getShopMenu() {
    this.menus = shopMenu;
  }

  getGalleryMenu() {
    this.menus = galleryMenu;
  }
}

@Component({
  selector: 'bx-sidebar-nav-item, [bxSidebarNavItem]',
  templateUrl: './sidebar-nav-item.component.html'
})
export class SidebarNavItemComponent {
  @Input() menu: any;
  constructor() {}
}
