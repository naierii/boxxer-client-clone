import { AuthService } from '@app/core/services/auth.service';
import {
  Component,
  OnInit,
  HostBinding,
  Input,
  OnDestroy,
  Output,
  EventEmitter
} from '@angular/core';
import { User } from '@global/models/user';
import { FormGroup } from '@angular/forms';
import { untilComponentDestroyed } from '@global/untilDestroy';

@Component({
  selector: 'bx-checkout-account',
  templateUrl: './checkout-account.component.html',
  styleUrls: ['./checkout-account.component.scss']
})
export class CheckoutAccountComponent implements OnInit, OnDestroy {
  @Input() parentForm: FormGroup;
  @Output() userLogin = new EventEmitter();
  showLogin = false;
  user: User;
  constructor(public auth: AuthService) {
    auth.redirectUrl = 'checkout/shipping';
  }

  ngOnInit() {
    if (this.auth.loggedIn()) {
      this.getUser();
    }
  }

  login() {
    this.userLogin.emit();
    this.getUser();
  }

  getUser() {
    this.auth
      .getUser()
      .pipe(untilComponentDestroyed(this))
      .subscribe(user => {
        this.user = user;
        this.parentForm.get('email').setValue(user.email);
      });
  }

  @HostBinding('class.checkout-box')
  isCheckout() {
    return true;
  }

  ngOnDestroy() {}
}
