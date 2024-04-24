import { StateService } from '@admin/core/services/state.service';
import { SocketService } from '@admin/shared/services/socket.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'bx-base-edit',
  template: `
    <ng-template></ng-template>
  `,
  styles: []
})
export class BaseEditComponent implements OnInit, OnDestroy {
  public editForm: FormGroup;
  item: any;
  loading = true;
  loaded = false;
  isNew = false;
  id: string | number;
  extraData: any;
  dropzone_config: any;
  constructor(
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    protected service: SocketService,
    protected router: Router,
    protected state: StateService
  ) {}

  ngOnInit() {
    this.getItem();
  }

  getItem() {
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
        if (!this.loaded) {
          this.createForm();
        }
        this.loaded = true;
      });
  }

  createForm() {}

  removeEmptyValues(obj) {
    Object.keys(obj).forEach(key => {
      if (obj[key] && typeof obj[key] === 'object') {
        this.removeEmptyValues(obj[key]);
      } else if (obj[key] == null) {
        delete obj[key];
      } else if (obj[key] === 'None') {
        obj[key] = null;
      }
    });
    return obj;
  }

  updateItem(data: any) {
    if (data.slug && data.slug !== this.item.slug) {
      data.update_slug = true;
    }
    data = this.removeEmptyValues(data);
    Object.assign(data, this.extraData);

    if (this.isNew) {
      this.service
        .create(data)
        .pipe(untilComponentDestroyed(this))
        .subscribe(resp => {
          if (resp) {
            this.navigate();
          }
        });
    } else {
      this.service
        .update(this.id || this.item._id, data)
        .pipe(
          take(1),
          untilComponentDestroyed(this)
        )
        .subscribe(resp => {
          if (resp) {
            this.navigate();
          }
        });
    }
  }

  navigate() {
    this.router.navigateByUrl(
      this.state.previousUrl || this.route.snapshot.parent.url[0].path
    );
  }

  ngOnDestroy() {}
}
