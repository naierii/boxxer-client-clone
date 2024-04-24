import { Observable, of } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { Address } from '@global/models/address';
import { map, switchMap } from 'rxjs/operators';
import { ConfirmDeleteComponent } from '@app/user/confirm-delete/confirm-delete.component';
import { untilComponentDestroyed } from '@global/untilDestroy';

@Component({
  selector: 'bx-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit, OnDestroy {
  addresses$: Observable<Address[]>;
  constructor(private api: ApiService, private dialog: MatDialog) {}

  ngOnInit() {
    this.getAddresses();
  }

  getAddresses() {
    this.addresses$ = this.api
      .find('customer-address', { $sort: { default: -1 } })
      .pipe(map((resp: any) => resp.data));
  }

  setAsDefault(address: Address) {
    this.api
      .update('customer-address', address._id, { set_default: true })
      .pipe(untilComponentDestroyed(this))
      .subscribe(resp => {
        this.getAddresses();
      });
  }

  deleteCard(address: Address) {
    const modalRef = this.dialog.open(ConfirmDeleteComponent, {
      data: { title: `Address` },
      minWidth: '300px',
      autoFocus: false
    });
    modalRef
      .afterClosed()
      .pipe(
        switchMap(confirmed =>
          confirmed
            ? this.api.remove('customer-address', address._id)
            : of(null)
        ),
        untilComponentDestroyed(this)
      )
      .subscribe(result => {
        if (result) {
          this.addresses$ = this.addresses$.pipe(
            map(addresses => addresses.filter(a => a._id !== address._id))
          );
        }
      });
  }

  ngOnDestroy() {}
}
