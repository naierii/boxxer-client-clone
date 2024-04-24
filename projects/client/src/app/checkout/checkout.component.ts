import { Title } from '@angular/platform-browser';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'bx-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CheckoutComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Checkout | Boxxerworld');
  }

  @HostBinding('class.checkout-page')
  isCheckout() {
    return true;
  }
}
