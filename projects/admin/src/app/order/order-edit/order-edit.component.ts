import { OrderEditService } from './../order-edit.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Order } from '@global/models/order';
import { SocketService } from '@admin/shared/services/socket.service';
import { AuthService } from '@admin/core/services/auth.service';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bx-order-edit',
  templateUrl: './order-edit.component.html',
  providers: [
    {
      provide: 'OrderService',
      useClass: SocketService
    }
  ]
})
export class OrderEditComponent implements OnInit, OnDestroy {
  public editForm: FormGroup;
  item: Order;
  return_url = './orders';
  loading = true;
  isNew = false;
  id: string | number;
  extraData: any;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    @Inject('OrderService') private service: SocketService,
    private auth: AuthService,
    public editService: OrderEditService
  ) {
    service.setup('order', 'orderid');
  }

  get isAdmin() {
    return this.auth.checkRoles(['admin']);
  }

  ngOnInit() {
    this.route.params
      .pipe(
        untilComponentDestroyed(this),
        switchMap((params: any) => {
          if (params['id']) {
            return this.service.findOne(params['id']);
          } else {
            this.isNew = true;
            return of({});
          }
        })
      )
      .subscribe((resp: any) => {
        this.item = resp;
        this.loading = false;
        this.createForm();
      });
  }

  createForm() {
    this.editForm = this.fb.group({
      email: [this.item ? this.item.email : null, [Validators.required]],
      shipping: this.fb.group({
        firstName: [
          this.item.shipping ? this.item.shipping.firstName : null,
          [Validators.required]
        ],
        lastName: [
          this.item.shipping ? this.item.shipping.lastName : null,
          [Validators.required]
        ],
        address1: [
          this.item.shipping ? this.item.shipping.address1 : null,
          [Validators.required]
        ],
        address2: [this.item.shipping ? this.item.shipping.address2 : null],
        city: [
          this.item.shipping ? this.item.shipping.city : null,
          [Validators.required]
        ],
        region: [this.item.shipping ? this.item.shipping.region : null],
        country_code: [
          this.item.shipping ? this.item.shipping.country_code : null
        ],
        country: [this.item.shipping ? this.item.shipping.country : null],
        postcode: [
          this.item.shipping ? this.item.shipping.postcode : null,
          [Validators.required]
        ],
        phone: [
          this.item.shipping ? this.item.shipping.phone : null,
          [Validators.required]
        ],
        type: ['Shipping']
      }),
      billing: this.fb.group({
        copy: [this.item && this.item.billing ? false : true],
        address1: [this.item.billing ? this.item.billing.address1 : null],
        address2: [this.item.billing ? this.item.billing.address2 : null],
        city: [this.item.billing ? this.item.billing.city : null],
        region: [this.item.billing ? this.item.billing.region : null],
        country_code: [
          this.item.billing ? this.item.billing.country_code : null
        ],
        country: [this.item.billing ? this.item.billing.country : null],
        postcode: [this.item.billing ? this.item.billing.postcode : null],
        type: ['Billing']
      })
    });
  }

  get sameAddress() {
    return this.editForm.get('billing').get('copy').value;
  }

  copyAddress() {
    const shipping = this.editForm.get('shipping').value;
    Object.keys(shipping).forEach(key => {
      const field = this.editForm.get('billing').get(key);
      if (field && key !== 'type') {
        field.setValue(shipping[key]);
        field.updateValueAndValidity();
      }
    });
  }

  updateItem(data: any) {
    Object.assign(data, this.extraData);
    data.shipping.country =
      data.shipping.country && data.shipping.country.name
        ? data.shipping.country.name
        : data.shipping.country;
    data.billing.country =
      data.billing.country && data.billing.country.name
        ? data.billing.country.name
        : data.billing.country;
    if (this.isNew) {
      data.status = 'Pending';
      this.service
        .create(data)
        .pipe(untilComponentDestroyed(this))
        .subscribe((resp: any) => {
          if (resp) {
            this.router.navigate(['orders', resp.orderid]);
          }
        });
    } else {
      this.service
        .update(this.item.orderid, data)
        .pipe(untilComponentDestroyed(this))
        .subscribe((resp: any) => {
          if (resp) {
            this.editService.order = resp;
            this.router.navigate(['orders', resp.orderid]);
          }
        });
    }
  }

  onShippingChange(value) {
    this.editForm
      .get('shipping')
      .get('country_code')
      .setValue(value.cca2);
  }

  onBillingChange(value) {
    this.editForm
      .get('billing')
      .get('country_code')
      .setValue(value.cca2);
  }

  ngOnDestroy() {}
}
