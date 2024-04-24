import { Component, OnInit } from '@angular/core';
import { BaseEditComponent } from '@admin/shared/components/base-edit/base-edit.component';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SocketService } from '@admin/shared/services/socket.service';
import { StateService } from '@admin/core/services/state.service';

@Component({
  selector: 'bx-ready-made-setting-edit',
  templateUrl: './ready-made-setting-edit.component.html'
})
export class ReadyMadeSettingEditComponent extends BaseEditComponent
  implements OnInit {
  item: any;

  constructor(
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    protected service: SocketService,
    protected router: Router,
    protected state: StateService
  ) {
    super(fb, route, service, router, state);
    service.setup('ready-made-setting');
  }

  ngOnInit() {
    super.ngOnInit();
  }

  createForm() {
    this.editForm = this.fb.group({
      names: this.fb.array([]),
      flags: this.fb.array([])
    });

    if (this.item) {
      this.id = this.item._id;
    }

    if (this.item && this.item.names) {
      this.item.names.forEach(name => {
        this.addName(name);
      });
    }

    if (this.item && this.item.flags) {
      this.item.flags.forEach(flag => {
        this.addFlag(flag);
      });
    }
  }

  initName(name?: any) {
    return this.fb.group({
      title: [name ? name.title : null, Validators.required],
      price: [name ? name.price : 0, Validators.required]
    });
  }

  addName(name?: any) {
    const control = this.editForm.controls['names'] as FormArray;
    const addrCtrl = this.initName(name);
    control.push(addrCtrl);
  }

  removeName(i: number) {
    const control = this.editForm.controls['names'] as FormArray;
    control.removeAt(i);
    return false;
  }

  initFlag(flag?: any) {
    return this.fb.group({
      title: [flag ? flag.title : null, Validators.required],
      price: [flag ? flag.price : 0, Validators.required]
    });
  }

  addFlag(flag?: any) {
    const control = this.editForm.controls['flags'] as FormArray;
    const addrCtrl = this.initName(flag);
    control.push(addrCtrl);
  }

  removeFlag(i: number) {
    const control = this.editForm.controls['flags'] as FormArray;
    control.removeAt(i);
    return false;
  }
}
