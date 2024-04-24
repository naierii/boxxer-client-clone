import { Address } from '@global/models/address';
import { Observable, of } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '@app/core/services/api.service';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'bx-address-add',
  templateUrl: './address-add.component.html',
  styleUrls: ['./address-add.component.scss']
})
export class AddressAddComponent implements OnInit, OnDestroy {
  form: FormGroup;
  address$: Observable<Address>;
  edit = false;
  id: string;
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      set_default: [true]
    });
    this.address$ = this.route.params.pipe(
      switchMap(
        params =>
          params.id ? this.api.get('customer-address', params.id) : of(null)
      ),
      tap((resp: Address) => {
        if (resp) {
          this.edit = true;
          this.id = resp._id;
          this.form.get('set_default').setValue(resp.default ? true : false);
        }
      })
    );
  }

  addAddress() {
    const data = {
      ...this.form.value.shipping,
      set_default: this.form.get('set_default').value
    };
    let save;
    if (this.edit) {
      save = this.api.update('customer-address', this.id, data);
    } else {
      save = this.api.create('customer-address', data);
    }

    save.pipe(untilComponentDestroyed(this)).subscribe(resp => {
      this.router.navigate(['/account/addresses']);
    });
  }

  ngOnDestroy() {}
}
