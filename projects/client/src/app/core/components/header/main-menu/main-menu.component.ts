import { Router } from '@angular/router';
import { mainNav } from './../../../_menu-main';
import { Component, Input, Directive, ViewEncapsulation } from '@angular/core';
import { MenuService } from '../../../../core/services/menu.service';

@Component({
  selector: 'bx-main-menu, [bxMainMenu]',
  template: `
    <ul class="nav">
      <li
        class="nav-item"
        *ngFor="let navitem of mainNav"
        [item]="navitem"
        [hoverMenu]="hoverMenu"
        bxMainMenuNavItem
        (mouseover)="onHover(navitem)"
        (mouseleave)="onLeave(navitem)"
      ></li>
    </ul>
  `,
  styleUrls: ['./main-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainMenuComponent {
  public mainNav = mainNav;
  public hoverMenu : any;
  constructor(private hoverMenuService: MenuService) { }

  onHover(navitem: any) {
    if (navitem.name === 'INSPIRE') {
      this.hoverMenu = navitem; // Set hoverMenu data
      this.hoverMenuService.setHoverMenuData(navitem.name);
    }
  }

  onLeave(navitem: any) {
    if (navitem.name === 'INSPIRE') {
      this.hoverMenu = null; // Clear hoverMenu data
      this.hoverMenuService.setHoverMenuData('');
    }
  }
}

@Component({
  selector: 'bx-main-menu-nav-item, [bxMainMenuNavItem]',
  // tslint:disable:max-line-length
  template: `
    <div
      class="nav-parent"
      *ngIf="!isDropdown()"
      [link]="item"
      bxMainMenuNavLink
    ></div>
    <div
      *ngIf="isDropdown() && !isMega()"
      [ngClass]="
        hasClass()
          ? 'nav-item nav-dropdown nav-parent ' + item.class
          : 'nav-item nav-dropdown nav-parent'
      "
      routerLinkActive="active"
      [link]="item"
      bxNavDropdown
      bxMainMenuDropdown
    ></div>
    <div
      *ngIf="isDropdown() && isMega()"
      [ngClass]="
        hasClass()
          ? 'nav-item nav-dropdown nav-parent ' + item.class
          : 'nav-item nav-dropdown nav-parent'
      "
      routerLinkActive="active"
      [link]="item"
      bxNavDropdown
      bxMainMenuMegaDropdown
    ></div>
  `
})
export class MainMenuNavItemComponent {
  @Input()
  item: any;
  @Input() hoverMenu: any;

  public hasClass() {
    return this.item.class ? true : false;
  }

  public isDropdown() {
    return this.item.children ? true : false;
  }

  public isMega() {
    return this.item.mega ? true : false;
  }

  public thisUrl() {
    return this.item.url;
  }

  public isActive() {
    return this.thisUrl() ? this.router.isActive(this.thisUrl(), false) : false;
  }

  constructor(private router: Router) { }
}

@Component({
  selector: 'bx-main-menu-nav-link, [bxMainMenuNavLink]',
  template: `
    <a
      *ngIf="!isExternalLink(); else external"
      [ngClass]="
        hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'
      "
      routerLinkActive="active"
      [routerLink]="[link.url]"
    >
      {{ link.name }}
    </a>
   <a>
<span *ngIf ="link.parentName == 'INSPIRE'">
 <img src="{{link.image}}">
</span>
   </a>
    <ng-template #external>
      <a
        [ngClass]="
          hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'
        "
        href="{{ link.url }}"
      >
        {{ link.name }}
      </a>
    </ng-template>
  `
})
export class MainMenuLinkComponent {
  @Input()
  link: any; 

  public hasVariant() {
    return this.link.variant ? true : false;
  }

  public isExternalLink() {
    return this.link.url.substring(0, 4) === 'http' ? true : false;
  }
  constructor(private hoverMenuService: MenuService) {}

  get hoverMenu() {
    return this.hoverMenuService.getHoverMenuData();
  }
}

@Component({
  selector: 'bx-main-menu-dropdown, [bxMainMenuDropdown]',
  template: `
    <a class="nav-link nav-dropdown-toggle" bxNavDropdownToggle>
      {{ link.name }}
    </a>
    <ul class="nav-dropdown-items">
      <ng-template ngFor let-child [ngForOf]="link.children">
        <li [item]="child" bxMainMenuNavItem></li>
      </ng-template>
    </ul>
  `
})
export class MainMenuDropdownComponent {
  @Input()
  link: any;
  constructor() { }
}

@Component({
  selector: 'bx-main-menu-mega-dropdown, [bxMainMenuMegaDropdown]',
  template: `
    <a class="nav-link nav-dropdown-toggle" bxNavDropdownToggle>
      {{ link.name }}
    </a>
    <div class=" nav-mega-dropdown-items">
      <div class="row mx-auto justify-content-center">
        <div class="col-md" *ngFor="let child of link.children">
          <h4>{{ child.name }}</h4>
          <ul *ngIf="child.name == ''" class="inspire-list">
            <ng-template ngFor let-child [ngForOf]="child.children">
              <li [item]="child" bxMainMenuNavItem></li>
            </ng-template>
          </ul>
          <ul *ngIf="child.name != ''">
            <ng-template ngFor let-child [ngForOf]="child.children">
              <li [item]="child" bxMainMenuNavItem></li>
            </ng-template>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class MainMenuMegaDropdownComponent {
  @Input()
  link: any;
  constructor() { }
}
