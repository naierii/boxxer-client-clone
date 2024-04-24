import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ViewEncapsulation,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[bx-card-content], [bxCardContent]'
})
export class CardContentDirective {
  @HostBinding('class.bx-card-content') addClass() {
    return true;
  }
}

@Directive({
  selector: `bx-card-title, [bx-card-title], [bxCardTitle]`
})
export class CardTitleDirective {
  @HostBinding('class.bx-card-title') addClass() {
    return true;
  }
}

@Directive({
  selector: 'bx-card-footer, [bx-card-footer], [bxCardFooter]'
})
export class CardFooterDirective {
  @HostBinding('class.bx-card-footer') addClass() {
    return true;
  }
}

@Directive({
  selector: '[bx-card-image], [bxCardImage]'
})
export class CardImageDirective {
  @HostBinding('class.bx-card-image') addClass() {
    return true;
  }
}

@Component({
  selector: 'bx-card, [bxCard]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @HostBinding('class.bx-card') addClass() {
    return true;
  }
}
