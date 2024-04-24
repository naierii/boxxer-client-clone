import {
  Component,
  ElementRef,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'bx-nav-item, [bxNavItem]',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavItemComponent {
  @Input() menuId: string;
  constructor(private el: ElementRef) {}

  scrollIntoView() {
    this.el.nativeElement.scrollIntoView({
      behavior: 'instant',
      block: 'start',
      inline: 'start'
    });
  }
}
