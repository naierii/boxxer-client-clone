import { CustomDesign } from '@global/models/custom-design';
import { LineItem } from '@global/models/line-item';
import { ImageService } from '@admin/core/services/image.service';
import { StateService } from '@admin/core/services/state.service';
import { BaseEditComponent } from '@admin/shared/components/base-edit/base-edit.component';
import { SocketService } from '@admin/shared/services/socket.service';
import { TINY_RICHTEXT } from '@admin/tinymce';
import {
  Component,
  EventEmitter,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { untilComponentDestroyed } from '@global/untilDestroy';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
} from 'rxjs/operators';

import { Gallery } from './../gallery';

@Component({
  selector: 'bx-gallery-edit',
  templateUrl: './gallery-edit.component.html',
  providers: [
    {
      provide: 'GalleryService',
      useClass: SocketService,
    },
    {
      provide: 'ProductService',
      useClass: SocketService,
    },
    {
      provide: 'MaterialService',
      useClass: SocketService,
    },
    {
      provide: 'CustomDesignService',
      useClass: SocketService,
    },
    {
      provide: 'OrderService',
      useClass: SocketService,
    },
  ],
})
export class GalleryEditComponent
  extends BaseEditComponent
  implements OnInit, OnDestroy {
  item: Gallery;
  tinymce = TINY_RICHTEXT;

  dropzone_config = {
    params: {
      folder: 'gallery',
    },
  };

  dropDownProducts = [];
  productTypeahead = new EventEmitter<string>();

  dropDownMaterials = [];
  materialTypeahead = new EventEmitter<string>();

  dropDownLineItems = [];
  lineItemTypeahead = new EventEmitter<string>();

  groupByMaterialType = (item) =>
    item.materialType ? item.materialType.title : ''

  constructor(
    @Inject('GalleryService') protected service: SocketService,
    @Inject('ProductService') protected productService: SocketService,
    @Inject('MaterialService') protected materialService: SocketService,
    @Inject('CustomDesignService') protected customDesignService: SocketService,
    @Inject('OrderService') protected orderService: SocketService,
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    protected router: Router,
    protected state: StateService,
    private imageService: ImageService
  ) {
    super(fb, route, service, router, state);
    service.setup('gallery');
    materialService.setup('material');
    productService.setup('custom-product');
    orderService.setup('order');
    customDesignService.setup('custom-design');
  }
  ngOnInit() {
    super.ngOnInit();
  }

  createForm() {
    this.editForm = this.fb.group({
      title: [this.item.title, [Validators.required]],
      description: [this.item.description],
      product: [this.item && this.item.product ? this.item.product : null],
      design: [this.item && this.item.design ? this.item.design : null],
      materials: [this.item && this.item.materials ? this.item.materials : []],
    });
    if (this.item) {
      this.id = this.item._id;
    }

    this.productSearch();
    this.materialSearch();
    this.lineItemSearch();

    this.editForm
      .get('design')
      .valueChanges.pipe(untilComponentDestroyed(this))
      .subscribe((resp) => {
        if (resp) {
          this.designAdded(resp);
        }
      });
  }

  get extraData() {
    const data: any = {};
    data.images = this.imageService.images.map((i) => i._id);
    return data;
  }

  removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map((mapObj) => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }

  designAdded(value: LineItem) {
    this.editForm.get('product').setValue(value.custom_product);
    this.item.category = value.custom_product.category;
    this.customDesignService
      .findOne(value.custom_design._id)
      .pipe(untilComponentDestroyed(this))
      .subscribe((design: CustomDesign) => {
        const materials = design.panels.map((p) => p.material);
        this.editForm
          .get('materials')
          .setValue(this.removeDuplicates(materials, '_id'));
      });
  }

  private lineItemSearch() {
    this.lineItemTypeahead
      .pipe(
        untilComponentDestroyed(this),
        distinctUntilChanged(),
        debounceTime(1000),
        filter((term) => term !== '' && term !== null),
        switchMap((term) => {
          return this.orderService.find(
            {
              $search: term,
            },
            false
          );
        })
      )
      .subscribe(
        (x: any) => {
          this.dropDownLineItems = x.data[0].items
            ? x.data[0].items.filter((i) => i.custom_design)
            : [];
        },
        (err) => {
          this.dropDownLineItems = [];
        }
      );
  }

  private productSearch() {
    this.productTypeahead
      .pipe(
        untilComponentDestroyed(this),
        distinctUntilChanged(),
        debounceTime(1000),
        filter((term) => term !== '' && term !== null),
        switchMap((term) => {
          return this.productService.find(
            {
              $search: term,
            },
            false
          );
        })
      )
      .subscribe(
        (x: any) => {
          this.dropDownProducts = x.data;
        },
        (err) => {
          this.dropDownProducts = [];
        }
      );
  }

  private materialSearch() {
    this.materialTypeahead
      .pipe(
        untilComponentDestroyed(this),
        distinctUntilChanged(),
        debounceTime(1000),
        filter((term) => term !== '' && term !== null),
        switchMap((term) => {
          return this.materialService.find(
            {
              published: true,
              $search: term,
              $limit: 50,
            },
            false
          );
        })
      )
      .subscribe(
        (x: any) => {
          this.dropDownMaterials = x.data;
        },
        (err) => {
          this.dropDownMaterials = [];
        }
      );
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
