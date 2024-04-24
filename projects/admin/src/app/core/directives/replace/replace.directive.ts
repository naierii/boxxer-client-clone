import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line:max-line-length
  selector:
    '[bxHostReplace], bx-aside, bx-breadcrumbs, bx-footer, bx-header, bx-sidebar, bx-sidebar-footer, bx-sidebar-form, bx-sidebar-header, bx-sidebar-minimizer, bx-sidebar-nav, bx-sidebar-nav-dropdown, bx-sidebar-nav-item, bx-sidebar-nav-link, bx-sidebar-nav-title'
})
export class ReplaceDirective implements OnInit {
  constructor(private el: ElementRef) {}

  // wait for the component to render completely
  ngOnInit() {
    const nativeElement: HTMLElement = this.el.nativeElement;
    const parentElement: HTMLElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);
  }
}
