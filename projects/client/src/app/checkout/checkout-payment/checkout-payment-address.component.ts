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
import { ApiService } from '@app/core/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '@app/core/services/auth.service';
import { Observable } from 'rxjs';
import { Address } from '@global/models/address';
import { map, tap } from 'rxjs/operators';
import { untilComponentDestroyed } from '@global/untilDestroy';

@Component({
  selector: 'bx-checkout-payment-address',
  templateUrl: './checkout-payment-address.component.html',
  styleUrls: ['./checkout-payment-address.component.scss']
})
export class CheckoutPaymentAddressComponent implements OnInit, OnDestroy {
  addresses$: Observable<Address[]>;
  @Input()
  order: Order;
  @Input()
  parentForm: FormGroup;
  constructor(
    private api: ApiService,
    private dialog: MatDialog,
    private auth: AuthService
  ) {}

  ngOnInit() {
    if (this.auth.loggedIn()) {
      this.addresses$ = this.api
        .find('customer-address', { $sort: { default: -1 } })
        .pipe(
          map((resp: any) => resp.data),
          tap((resp: any) => {
            if (resp.length) {
              if (this.order.saved_billing) {
                this.parentForm
                  .get('saved_billing')
                  .setValue(resp.find(a => a._id === this.order.saved_billing));
              } else {
                this.parentForm.get('saved_billing').setValue(resp[0]);
              }
              if (this.parentForm.get('billing')) {
                this.parentForm.removeControl('billing');
              }
            }
          })
        );
    }
    this.parentForm.controls.addBilling.valueChanges
      .pipe(untilComponentDestroyed(this))
      .subscribe(resp => {
        if (resp) {
          this.parentForm.removeControl('billing');
        }
      });
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
              this.parentForm.get('saved_billing').setValue(resp);
            })
          );
        }
      });
  }

  ngOnDestroy() {}
}
