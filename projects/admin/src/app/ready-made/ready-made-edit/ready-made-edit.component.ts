import { DragulaService } from 'ng2-dragula';
import { ProductDisplay } from '@global/models/product-display';
import { Component, OnInit } from '@angular/core';
import { BaseEditComponent } from '@admin/shared/components/base-edit/base-edit.component';
import { TINY_RICHTEXT } from '@admin/tinymce';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SocketService } from '@admin/shared/services/socket.service';
import { StateService } from '@admin/core/services/state.service';
import { ImageService } from '@admin/core/services/image.service';
import { Product } from '@global/models/product';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { Image } from '@global/models/image';

@Component({
  selector: 'bx-ready-made-edit',
  templateUrl: './ready-made-edit.component.html',
})
export class ReadyMadeEditComponent
  extends BaseEditComponent
  implements OnInit {
  item: ProductDisplay;
  tinymce = TINY_RICHTEXT;

  dropzone_config = {
    params: {
      folder: 'ready-made',
    },
  };

  constructor(
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    protected service: SocketService,
    protected router: Router,
    protected state: StateService,
    private imageService: ImageService,
    private dragulaService: DragulaService
  ) {
    super(fb, route, service, router, state);
    service.setup('product-display');
    dragulaService
      .dropModel('product-variation')
      .pipe(untilComponentDestroyed(this))
      .subscribe((args: any) => {
        for (let i = 0; i < args.sourceModel.length; i++) {
          const formGroup: FormGroup = args.sourceModel[i];
          formGroup.get('weight').patchValue(i);
        }
      });
  }

  ngOnInit() {
    super.ngOnInit();
  }

  getVariation(id: string) {
    return this.item.variations.find((v) => v._id === id);
  }

  createForm() {
    this.editForm = this.fb.group({
      title: [this.item.title, [Validators.required]],
      description: [this.item.description, [Validators.required]],
      parent_sku: [this.item.parent_sku, [Validators.required]],
      colours: [this.item.colours],
      fabrics: [this.item.fabrics],
      price: [this.item.price ? this.item.price : null],
      club_kit: [this.item.club_kit ? this.item.club_kit : false],
      variations: this.fb.array([]),
      attributes: this.fb.array([]),
      type: ['Variable']
    });
    if (this.item) {
      this.id = this.item._id;
      if (this.item.variations) {
        this.item.variations.forEach((variation, index) => {
          this.addVariation(variation, index);
        });
      }

      if (this.item.attributes) {
        this.item.attributes.forEach((attribute) => {
          this.addAttribute(attribute);
        });
      }
    }
  }

  initVariation(variation?: Product, index?: number) {
    return this.fb.group({
      _id: [variation ? variation._id : null],
      sku: [
        variation ? variation.sku : this.editForm.get('parent_sku').value,
        Validators.required,
      ],
      title: [
        variation ? variation.title : this.editForm.get('title').value,
        Validators.required,
      ],
      price: [
        variation ? variation.price : this.editForm.get('price').value,
        Validators.required,
      ],
      option_name: [variation ? variation.option_name : ''],
      published: [variation ? variation.published : true],
      image: [variation && variation.image ? variation.image._id : null],
      attribute_terms: this.fb.array([]),
      weight: [variation && variation.weight ? variation.weight : index],
    });
  }

  addVariation(variation?: Product, index?: number) {
    const control = this.editForm.controls['variations'] as FormArray;
    const addrCtrl = this.initVariation(variation, index);
    if (variation) {
      control.push(addrCtrl);
    } else {
      control.insert(0, addrCtrl);
    }
  }

  removeVariation(i: number) {
    const control = this.editForm.controls['variations'] as FormArray;
    control.removeAt(i);
    return false;
  }

  initAttribute(attribute?: any) {
    return this.fb.group({
      _id: [attribute ? attribute._id : null],
      title: [attribute ? attribute.title : null],
    });
  }

  addAttribute(attribute?: any) {
    const control = this.editForm.controls['attributes'] as FormArray;
    const addrCtrl = this.initAttribute(attribute);
    control.push(addrCtrl);
  }

  removeAttribute(i: number) {
    const control = this.editForm.controls['attributes'] as FormArray;
    control.removeAt(i);
    return false;
  }

  get extraData() {
    const data: any = {};
    if (this.item.image) {
      data.image = this.item.image._id;
    }
    data.images = this.imageService.images.map((i) => i._id);
    return data;
  }

  imageRemoved() {
    this.item.image = null;
  }

  imageAdded(image: Image) {
    this.item.image = image;
  }
}
