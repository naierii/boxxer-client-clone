import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

// Import navigation elements
import { navigation } from './../../_nav';

@Component({
  selector: 'bx-sidebar-nav',
  template: `
    <nav class="sidebar-nav">
      <ul class="nav">
        <ng-template ngFor let-navitem [ngForOf]="navigation">
          <li *ngIf="isDivider(navitem)" class="nav-divider"></li>
          <ng-template [ngIf]="isTitle(navitem)">
            <bx-sidebar-nav-title [title]="navitem"></bx-sidebar-nav-title>
          </ng-template>
          <ng-template [ngIf]="!isDivider(navitem) && !isTitle(navitem)">
            <bx-sidebar-nav-item [item]="navitem"></bx-sidebar-nav-item>
          </ng-template>
        </ng-template>
      </ul>
    </nav>
  `
})
export class AppSidebarNavComponent implements OnInit {
  public navigation: any[];

  public isDivider(item) {
    return item.divider ? true : false;
  }

  public isTitle(item) {
    return item.title ? true : false;
  }

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.navigation = navigation.filter(nav => this.auth.checkRoles(nav.roles));
  }
}

import { Router } from '@angular/router';
import { AuthService } from '@admin/core/services/auth.service';

@Component({
  selector: 'bx-sidebar-nav-item',
  template: `
    <li
      *ngIf="!isDropdown(); else dropdown"
      [ngClass]="hasClass() ? 'nav-item ' + item.class : 'nav-item'"
    >
      <bx-sidebar-nav-link [link]="item"></bx-sidebar-nav-link>
    </li>
    <ng-template #dropdown>
      <li
        [ngClass]="
          hasClass()
            ? 'nav-item nav-dropdown ' + item.class
            : 'nav-item nav-dropdown'
        "
        [class.open]="isActive()"
        routerLinkActive="open"
        appNavDropdown
      >
        <bx-sidebar-nav-dropdown [link]="item"></bx-sidebar-nav-dropdown>
      </li>
    </ng-template>
  `
})
export class AppSidebarNavItemComponent {
  @Input() item: any;

  public hasClass() {
    return this.item.class ? true : false;
  }

  public isDropdown() {
    return this.item.children ? true : false;
  }

  public thisUrl() {
    return this.item.url;
  }

  public isActive() {
    return this.router.isActive(this.thisUrl(), false);
  }

  constructor(private router: Router) { }
}

@Component({
  selector: 'bx-sidebar-nav-link',
  template: `
    <a
      *ngIf="!isExternalLink(); else external"
      [ngClass]="
        hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'
      "
      routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }"
      [routerLink]="[link.url]"
    >
      <i *ngIf="isIcon()" class="{{ link.icon }}"></i>
      {{ link.name }}
      <span *ngIf="isBadge()" [ngClass]="'badge badge-' + link.badge.variant">{{
        link.badge.text
      }}</span>
    </a>
    <ng-template #external>
      <a
        [ngClass]="
          hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'
        "
        href="{{ link.url }}"
      >
        <i *ngIf="isIcon()" class="{{ link.icon }}"></i>
        {{ link.name }}
        <span
          *ngIf="isBadge()"
          [ngClass]="'badge badge-' + link.badge.variant"
          >{{ link.badge.text }}</span
        >
      </a>
    </ng-template>
  `
})
export class AppSidebarNavLinkComponent {
  @Input() link: any;

  public hasVariant() {
    return this.link.variant ? true : false;
  }

  public isBadge() {
    return this.link.badge ? true : false;
  }

  public isExternalLink() {
    return this.link.url.substring(0, 4) === 'http' ? true : false;
  }

  public isIcon() {
    return this.link.icon ? true : false;
  }

  constructor() { }
}

@Component({
  selector: 'bx-sidebar-nav-dropdown',
  template: `
    <a class="nav-link nav-dropdown-toggle" appNavDropdownToggle href="#">
      <i *ngIf="isIcon()" class="{{ link.icon }}"></i>
      {{ link.name }}
      <span *ngIf="isBadge()" [ngClass]="'badge badge-' + link.badge.variant">{{
        link.badge.text
      }}</span>
    </a>
    <ul class="nav-dropdown-items">
      <ng-template ngFor let-child [ngForOf]="link.children">
        <bx-sidebar-nav-item [item]="child"></bx-sidebar-nav-item>
      </ng-template>
    </ul>
  `
})
export class AppSidebarNavDropdownComponent {
  @Input() link: any;

  public isBadge() {
    return this.link.badge ? true : false;
  }

  public isIcon() {
    return this.link.icon ? true : false;
  }

  constructor() { }
}

@Component({
  selector: 'bx-sidebar-nav-title',
  template: ''
})
export class AppSidebarNavTitleComponent implements OnInit {
  @Input() title: any;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const nativeElement: HTMLElement = this.el.nativeElement;
    const li = this.renderer.createElement('li');
    const name = this.renderer.createText(this.title.name);

    this.renderer.addClass(li, 'nav-title');

    if (this.title.class) {
      const classes = this.title.class;
      this.renderer.addClass(li, classes);
    }

    if (this.title.wrapper) {
      const wrapper = this.renderer.createElement(this.title.wrapper.element);

      this.renderer.appendChild(wrapper, name);
      this.renderer.appendChild(li, wrapper);
    } else {
      this.renderer.appendChild(li, name);
    }
    this.renderer.appendChild(nativeElement, li);
  }
}

export const APP_SIDEBAR_NAV = [
  AppSidebarNavComponent,
  AppSidebarNavDropdownComponent,
  AppSidebarNavItemComponent,
  AppSidebarNavLinkComponent,
  AppSidebarNavTitleComponent
];
