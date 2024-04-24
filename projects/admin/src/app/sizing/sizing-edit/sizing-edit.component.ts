import { ActivatedRoute, Router } from '@angular/router';
import { Size } from '@global/models/size';
import { Component, OnInit, Inject } from '@angular/core';
import { Image } from '@global/models/image';
import { SocketService } from '@admin/shared/services/socket.service';
import { BaseEditComponent } from '@admin/shared/components/base-edit/base-edit.component';
import { FormBuilder, Validators } from '@angular/forms';
import { StateService } from '@admin/core/services/state.service';

@Component({
  selector: 'bx-sizing-edit',
  templateUrl: './sizing-edit.component.html',
  providers: [
    {
      provide: 'SizeService',
      useClass: SocketService
    }
  ]
})
export class SizingEditComponent extends BaseEditComponent implements OnInit {
  item: Size;
  dropzone_config: any;
  styles = [
    {
      value: 'Straight Leg',
      category: '58ac13a9dc142c612ab61fb1'
    },
    {
      value: 'Curve Leg',
      category: '58ac13a9dc142c612ab61fb1'
    },
    {
      value: 'Wave Leg',
      category: '58ac13a9dc142c612ab61fb1'
    },
    {
      value: 'Retro',
      category: '58ac13a9dc142c612ab61fb1'
    },
    {
      value: 'Womens',
      category: '58ac13a9dc142c612ab61fb1'
    },
    {
      value: 'Mauy Thai',
      category: '58ac142bdc142c612ab61fb2'
    },
    {
      value: 'Sleeveless Hoody',
      category: '58ac14b4dc142c612ab61fb4'
    },
    {
      value: 'Collared Jacket',
      category: '58ac14b4dc142c612ab61fb4'
    },
    {
      value: 'Short Sleeve Hoody',
      category: '58ac14b4dc142c612ab61fb4'
    },
    {
      value: 'Long Sleeve Hoody',
      category: '58ac14b4dc142c612ab61fb4'
    }
  ];
  constructor(
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    @Inject('SizeService') protected service: SocketService,
    protected router: Router,
    protected state: StateService
  ) {
    super(fb, route, service, router, state);
    service.setup('size');
    this.dropzone_config = {
      params: {
        folder: 'size'
      }
    };
  }

  ngOnInit() {
    super.ngOnInit();
  }

  createForm() {
    this.editForm = this.fb.group({
      style: [this.item.style],
      size: [this.item.size, [Validators.required]],
      jean_size: [this.item.jean_size],
      child_size: [this.item.child_size]
    });
    if (this.item) {
      this.id = this.item._id;
    }
  }

  getStyles() {
    const category = this.editForm.get('category').value;
    return this.styles.filter(s => s.category === category);
  }

  get extraData() {
    if (this.item.image) {
      return { image: this.item.image._id };
    } else {
      return {};
    }
  }

  imageRemoved() {
    this.item.image = null;
  }

  imageAdded(image: Image) {
    this.item.image = image;
  }
}
