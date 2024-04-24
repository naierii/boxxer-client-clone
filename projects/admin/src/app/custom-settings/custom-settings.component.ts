import { StateService } from '@admin/core/services/state.service';
import { ToastService } from '@admin/core/services/toast.service';
import { SocketService } from '@admin/shared/services/socket.service';
import { TINY_RICHTEXT } from '@admin/tinymce';
import {
  Component,
  EventEmitter,
  Inject,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  CustomSetting,
  DesignArea,
  MaterialGroup,
  NameFinish,
  NameType,
  ProductionType
} from '@global/models/custom-setting';
import { untilComponentDestroyed } from '@global/untilDestroy';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
  take,
  map
} from 'rxjs/operators';

@Component({
  selector: 'bx-custom-settings',
  templateUrl: './custom-settings.component.html',
  providers: [
    {
      provide: 'SettingService',
      useClass: SocketService
    },
    {
      provide: 'TermService',
      useClass: SocketService
    }
  ]
})
export class CustomSettingsComponent implements OnInit, OnDestroy {
  public editForm: FormGroup;
  item: CustomSetting;
  loaded = false;
  loading = true;
  isNew = false;
  categories = [];
  dropDownTerms = [];
  termTypeahead = new EventEmitter<string>();
  dropDownProductTypes = [];
  productTypeTypeahead = new EventEmitter<string>();
  tinymce = TINY_RICHTEXT;
  constructor(
    protected fb: FormBuilder,
    @Inject('SettingService') protected service: SocketService,
    @Inject('TermService') protected termService: SocketService,
    protected state: StateService,
    private toast: ToastService
  ) {
    service.setup('custom-setting');
    termService.setup('term');
  }

  ngOnInit() {
    this.getItem();
  }

  getItem() {
    this.service
      .find({
        $limit: 1,
        $sort: {
          createdAt: -1
        }
      })
      .pipe(map((settings: any) => (this.item = settings.data[0])))
      .subscribe(resp => {
        if (!resp) {
          this.isNew = true;
        }
        this.loading = false;
        if (!this.loaded) {
          this.createForm();
          this.termSearch();
          this.productTypeSearch();
          this.loaded = true;
        }
      });
  }

  createForm() {
    this.editForm = this.fb.group({
      flag_price: [
        this.item && this.item.flag_price ? this.item.flag_price : null,
        Validators.required
      ],
      logo_price: [
        this.item && this.item.logo_price ? this.item.logo_price : null,
        Validators.required
      ],
      upload_price: [
        this.item && this.item.upload_price ? this.item.upload_price : null,
        Validators.required
      ],
      muay_thai_price: [
        this.item && this.item.muay_thai_price
          ? this.item.muay_thai_price
          : null,
        Validators.required
      ],
      remove_logo_price: [
        this.item && this.item.remove_logo_price
          ? this.item.remove_logo_price
          : null,
        Validators.required
      ],
      design_areas: this.fb.array([]),
      material_groups: this.fb.array([]),
      name_types: this.fb.array([]),
      name_fill_materials: [this.item.name_fill_materials],
      name_outline_material: [this.item.name_outline_material],
      name_finishes: this.fb.array([]),
      name_crystals: this.fb.group({
        price: [
          this.item && this.item.name_crystals
            ? this.item.name_crystals.price
            : 0,
          Validators.required
        ],
        description: [
          this.item && this.item.name_crystals
            ? this.item.name_crystals.description
            : null
        ],
        material_type: [
          this.item && this.item.name_crystals
            ? this.item.name_crystals.material_type
            : null
        ]
      }),
      production_info: [
        this.item && this.item.production_info
          ? this.item.production_info
          : null
      ],
      production_types: this.fb.array([]),
      goods_percentage: [
        this.item && this.item.goods_percentage
          ? this.item.goods_percentage
          : null
      ]
    });

    if (this.item && this.item.design_areas) {
      this.item.design_areas.forEach(area => {
        this.addArea(area);
      });
    }

    if (this.item && this.item.material_groups) {
      this.item.material_groups.forEach(group => {
        this.addMaterial(group);
      });
    }

    if (this.item && this.item.name_types) {
      this.item.name_types.forEach(type => {
        this.addNameType(type);
      });
    }

    if (this.item && this.item.name_finishes) {
      this.item.name_finishes.forEach(finish => {
        this.addNameFinish(finish);
      });
    }

    if (this.item && this.item.production_types) {
      this.item.production_types.forEach(production => {
        this.addProduction(production);
      });
    }
  }

  initArea(area?: DesignArea) {
    const group = this.fb.group({
      title: [area ? area.title : null, Validators.required],
      price: [area && area.price ? area.price : 0, Validators.required],
      price_adjust: [
        area && area.price_adjust ? area.price_adjust : 0,
        Validators.required
      ],
      optional: [area && area.optional ? true : false]
    });
    if (area && area._id) {
      group.addControl('_id', new FormControl(area._id));
    }
    return group;
  }

  addArea(area?: DesignArea) {
    const control = this.editForm.controls['design_areas'] as FormArray;
    const addrCtrl = this.initArea(area);
    control.push(addrCtrl);
  }

  removeArea(i: number) {
    const control = this.editForm.controls['design_areas'] as FormArray;
    control.removeAt(i);
    return false;
  }

  initMaterial(materialGroup?: MaterialGroup) {
    const group = this.fb.group({
      title: [materialGroup ? materialGroup.title : null, Validators.required],
      material_types: [materialGroup ? materialGroup.material_types : null]
    });
    if (materialGroup && materialGroup._id) {
      group.addControl('_id', new FormControl(materialGroup._id));
    }
    return group;
  }

  addMaterial(group?: MaterialGroup) {
    const control = this.editForm.controls['material_groups'] as FormArray;
    const addrCtrl = this.initMaterial(group);
    control.push(addrCtrl);
  }

  removeMaterial(i: number) {
    const control = this.editForm.controls['material_groups'] as FormArray;
    control.removeAt(i);
    return false;
  }

  initNameType(type?: NameType) {
    const group = this.fb.group({
      title: [type ? type.title : null, Validators.required],
      internal_description: [
        type ? type.internal_description : null,
        Validators.required
      ],
      description: [type ? type.description : null, Validators.required],
      base_price: [type ? type.base_price : null, Validators.required],
      price: [type ? type.price : null, Validators.required],
      outline_price: [type ? type.outline_price : null, Validators.required],
      limit: [type ? type.limit : null],
      outline: [type ? type.outline : false],
      patch: [type ? type.patch : false],
      patch_material: [type ? type.patch_material : null],
      patch_price: [type ? type.patch_price : null],
      crystals: [type ? type.crystals : false],
      crystal_material: [type ? type.crystal_material : null],
      crystal_price: [type ? type.crystal_price : null],
      restrict: [type ? type.restrict : false],
      fixed: [type ? type.fixed : false],
      special_finishes: [type ? type.special_finishes : false],
      name_fill_materials: [type ? type.name_fill_materials : null],
      name_outline_material: [type ? type.name_outline_material : null],
      product_types: [type ? type.product_types : null]
    });
    if (type && type._id) {
      group.addControl('_id', new FormControl(type._id));
    }
    return group;
  }

  addNameType(type?: NameType) {
    const control = this.editForm.controls['name_types'] as FormArray;
    const addrCtrl = this.initNameType(type);
    control.push(addrCtrl);
  }

  removeNameType(i: number) {
    const control = this.editForm.controls['name_types'] as FormArray;
    control.removeAt(i);
    return false;
  }

  initNameFinish(finish?: NameFinish) {
    const group = this.fb.group({
      title: [finish ? finish.title : null, Validators.required],
      price: [finish ? finish.price : null, Validators.required],
      text3d: [finish ? finish.text3d : false]
    });
    if (finish && finish._id) {
      group.addControl('_id', new FormControl(finish._id));
    }
    return group;
  }

  addNameFinish(finish?: NameFinish) {
    const control = this.editForm.controls['name_finishes'] as FormArray;
    const addrCtrl = this.initNameFinish(finish);
    control.push(addrCtrl);
  }

  removeNameFinish(i: number) {
    const control = this.editForm.controls['name_finishes'] as FormArray;
    control.removeAt(i);
    return false;
  }

  initProduction(production?: ProductionType) {
    const group = this.fb.group({
      title: [production ? production.title : null, Validators.required],
      description: [
        production ? production.description : null,
        Validators.required
      ],
      price: [production ? production.price : null],
      days: [production ? production.days : null, Validators.required],
      email_title: [
        production ? production.email_title : null,
        Validators.required
      ],
      express_shipping: [production ? production.express_shipping : false]
    });
    if (production && production._id) {
      group.addControl('_id', new FormControl(production._id));
    }
    return group;
  }

  addProduction(production?: ProductionType) {
    const control = this.editForm.controls['production_types'] as FormArray;
    const addrCtrl = this.initProduction(production);
    control.push(addrCtrl);
  }

  removeProduction(i: number) {
    const control = this.editForm.controls['production_types'] as FormArray;
    control.removeAt(i);
    return false;
  }

  updateItem(data: any) {
    if (this.isNew) {
      this.service.create(data).subscribe();
    } else {
      this.service
        .update(this.item._id, data)
        .pipe(take(1))
        .subscribe(() => {
          this.toast.showToast('success', 'Success', 'Settings saved');
        });
    }
  }

  private termSearch() {
    this.termTypeahead
      .pipe(
        untilComponentDestroyed(this),
        distinctUntilChanged(),
        debounceTime(1000),
        filter(term => term !== '' && term !== null),
        switchMap(term => {
          return this.termService.find(
            {
              $search: term,
              category: '55059f9f5b5557d303dd8907'
            },
            false
          );
        })
      )
      .subscribe(
        (x: any) => {
          this.dropDownTerms = x.data;
        },
        err => {
          this.dropDownTerms = [];
        }
      );
  }

  private productTypeSearch() {
    this.productTypeTypeahead
      .pipe(
        untilComponentDestroyed(this),
        distinctUntilChanged(),
        debounceTime(1000),
        filter(term => term !== '' && term !== null),
        switchMap(term => {
          return this.termService.find(
            {
              $search: term,
              parent: {
                $ne: null,
                $nin: ['58ac133edc142c612ab61fb0']
              },
              category: '58ac1318dc142c612ab61fad'
            },
            false
          );
        })
      )
      .subscribe(
        (x: any) => {
          this.dropDownProductTypes = x.data;
        },
        err => {
          this.dropDownProductTypes = [];
        }
      );
  }

  ngOnDestroy() {}
}
