import { AuthService } from '@app/core/services/auth.service';
import { AddAddressComponent } from './../add-address/add-address.component';
import {
  Component,
  HostBinding,
  Input,
  OnInit,
  OnDestroy
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Order } from '@global/models/order';
import { Observable } from 'rxjs';
import { ApiService } from '@app/core/services/api.service';
import { Address } from '@global/models/address';
import { map, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { untilComponentDestroyed } from '@global/untilDestroy';

@Component({
  selector: 'bx-checkout-shipping-address',
  templateUrl: './checkout-shipping-address.component.html',
  styleUrls: ['./checkout-shipping-address.component.scss']
})
export class CheckoutShippingAddressComponent implements OnInit, OnDestroy {
  addresses$: Observable<Address[]>;
  @Input()
  parentForm: FormGroup;
  @Input()
  order: Order;
  @Input()
  hasGift: boolean;
  @Input()
  nonGift: boolean;
  constructor(
    private api: ApiService,
    private dialog: MatDialog,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.getAddresses();
  }

  getAddresses() {
    if (this.auth.loggedIn()) {
      this.addresses$ = this.api
        .find('customer-address', { $sort: { default: -1 } })
        .pipe(
          map((resp: any) => resp.data),
          tap((resp: any) => {
            if (resp.length) {
              if (this.order.saved_shipping) {
                this.parentForm
                  .get('saved_shipping')
                  .setValue(
                    resp.find(a => a._id === this.order.saved_shipping)
                  );
              } else {
                this.parentForm.get('saved_shipping').setValue(resp[0]);
              }
              if (this.parentForm.get('shipping')) {
                this.parentForm.removeControl('shipping');
              }
            }
          })
        );
    }
  }

  @HostBinding('class.checkout-box')
  isCheckout() {
    return true;
  }

  addNewAddress() {
    const modalRef = this.dialog.open(AddAddressComponent, {
      autoFocus: false,
      maxWidth: '600px'
    });
    modalRef
      .afterClosed()
      .pipe(untilComponentDestroyed(this))
      .subscribe((resp: Address) => {
        if (resp) {
          this.addresses$ = this.addresses$.pipe(
            map(addresses => addresses.concat(resp)),
            tap(() => {
              this.parentForm.get('saved_shipping').setValue(resp);
            })
          );
        }
      });
  }

  ngOnDestroy() {}
}
