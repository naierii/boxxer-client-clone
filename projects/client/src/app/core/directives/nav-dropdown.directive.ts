import { Router, NavigationStart } from '@angular/router';
import {
  Directive,
  HostListener,
  ElementRef,
  NgZone,
  Renderer2,
  OnDestroy
} from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { componentDestroyed } from '@w11k/ngx-componentdestroyed';

@Directive({
  selector: '[bxNavDropdown]'
})
export class NavDropdownDirective implements OnDestroy {
  hoverIntent = false;
  hovering = false;
  constructor(
    private el: ElementRef,
    private ngZone: NgZone,
    private router: Router,
    private renderer: Renderer2
  ) {
    router.events.pipe(takeUntil(componentDestroyed(this))).subscribe(event => {
      if (event instanceof NavigationStart) {
        this.forceClose();
      }
    });
  }

  @HostListener('mouseover', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    this.open(false);
  }

  @HostListener('mouseleave', ['$event'])
  toggleClose($event: any) {
    $event.preventDefault();
    this.hovering = false;
    this.close();
  }

  open(withIntent: boolean) {
    this.hovering = true;
    this.renderer.addClass(this.el.nativeElement, 'open');
  }

  openIntent() {
    this.renderer.addClass(this.el.nativeElement, 'open');
    this.createTimeout();
  }

  close() {
    if (!this.hovering && !this.hoverIntent) {
      this.renderer.removeClass(this.el.nativeElement, 'open');
    }
  }

  forceClose() {
    this.hovering = false;
    this.hoverIntent = false;
    this.close();
  }

  createTimeout() {
    this.hoverIntent = true;
    this.ngZone.runOutsideAngular(() => {
      setTimeout(
        () =>
          this.ngZone.run(() => {
            this.hoverIntent = false;
            this.close();
          }),
        1000
      );
    });
  }

  ngOnDestroy() {}
}

/**
 * Allows the dropdown to be toggled via mouseover.
 */
@Directive({
  selector: '[bxNavDropdownToggle]'
})
export class NavDropdownToggleDirective {
  constructor(private dropdown: NavDropdownDirective) {}

  @HostListener('mouseover', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    this.dropdown.openIntent();
  }

  @HostListener('mouseleave', ['$event'])
  toggleClose($event: any) {
    $event.preventDefault();
    this.dropdown.close();
  }
}
