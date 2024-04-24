import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '@app/core/services/api.service';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'bx-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit, OnDestroy {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public dialogRef: MatDialogRef<AddAddressComponent>
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      set_default: [true]
    });
  }

  addAddress() {
    const data = {
      ...this.form.value.shipping,
      set_default: this.form.get('set_default').value
    };

    this.api
      .create('customer-address', data)
      .pipe(untilComponentDestroyed(this))
      .subscribe(resp => {
        this.dialogRef.close(resp);
      });
  }

  ngOnDestroy() {}
}
