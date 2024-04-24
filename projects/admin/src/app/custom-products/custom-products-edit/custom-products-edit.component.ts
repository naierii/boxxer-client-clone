import { StateService } from '@admin/core/services/state.service';
import { BaseEditComponent } from '@admin/shared/components/base-edit/base-edit.component';
import { SocketService } from '@admin/shared/services/socket.service';
import { TINY_RICHTEXT } from '@admin/tinymce';
import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomProduct } from '@global/models/custom-product';
import { CustomProductSetting } from '@global/models/custom-product-setting';
import { DesignArea, MaterialGroup } from '@global/models/custom-setting';
import { Image } from '@global/models/image';
import { Term } from '@global/models/term';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { of, Observable, combineLatest } from 'rxjs';
import { switchMap, take, map } from 'rxjs/operators';
import { DragulaService } from 'ng2-dragula';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'bx-custom-products-edit',
  templateUrl: './custom-products-edit.component.html',
  providers: [
    {
      provide: 'CustomProductService',
      useClass: SocketService
    },
    {
      provide: 'CustomProductSettingService',
      useClass: SocketService
    },
    {
      provide: 'CustomSettingService',
      useClass: SocketService
    },
    {
      provide: 'TermService',
      useClass: SocketService
    }
  ]
})
export class CustomProductsEditComponent extends BaseEditComponent
  implements OnInit, OnDestroy {
  item: CustomProduct;
  product$: Observable<CustomProduct>;
  material_types: Term[];
  material_groups: MaterialGroup[];
  design_areas: DesignArea[];
  bsConfig: Partial<BsDatepickerConfig>;
  dropzone_config: any;
  dropzone_config_template: any;
  tinymce = TINY_RICHTEXT;
  public oneAtATime = false;
  loadSvg = false;
  constructor(
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    @Inject('CustomProductService') protected service: SocketService,
    @Inject('CustomProductSettingService')
    protected customProductSettingService: SocketService,
    @Inject('CustomSettingService')
    protected customSettingService: SocketService,
    @Inject('TermService') protected termService: SocketService,
    protected router: Router,
    protected state: StateService,
    private dragulaService: DragulaService
  ) {
    super(fb, route, service, router, state);
    service.setup('custom-product');
    customSettingService.setup('custom-setting');
    customProductSettingService.setup('custom-product-setting');
    termService.setup('term');
    this.bsConfig = Object.assign(
      {},
      {
        containerClass: 'theme-blue',
        showWeekNumbers: false,
        dateInputFormat: 'DD/MM/YY'
      }
    );
    dragulaService
      .dropModel('setting')
      .pipe(untilComponentDestroyed(this))
      .subscribe((args: any) => {
        for (let i = 0; i < args.sourceModel.length; i++) {
          const formGroup: FormGroup = args.sourceModel[i];
          formGroup.get('weight').patchValue(i);
        }
      });
    this.dropzone_config = {
      params: {
        folder: 'custom-product'
      }
    };
    this.dropzone_config_template = {
      params: {
        folder: 'custom-product-template'
      }
    };
    combineLatest(
      this.termService.find({
        category: '55059f9f5b5557d303dd8907'
      }),
      this.customSettingService.find({
        $limit: 1,
        $sort: {
          createdAt: -1
        }
      }),
      (terms, settings) => {
        return { terms, settings };
      }
    )
      .pipe(untilComponentDestroyed(this))
      .subscribe((resp: any) => {
        this.material_types = resp.terms.data;
        this.design_areas = resp.settings.data[0].design_areas;
        this.material_groups = resp.settings.data[0].material_groups;
      });
  }

  ngOnInit() {
    super.ngOnInit();
  }

  getItem() {
    this.route.params
      .pipe(
        untilComponentDestroyed(this),
        switchMap((params: any) => {
          if (params['id']) {
            return this.service.findOne(params['id'], {
              $client: { populate: 'pop-client-settings' }
            });
          } else {
            this.isNew = true;
            return of({});
          }
        }),
        switchMap((resp: any) => {
          this.item = resp;
          if (resp._id && !this.item.settings) {
            return this.customProductSettingService
              .find({
                product: resp._id,
                archive: false,
                $sort: {
                  weight: 1
                }
              })
              .pipe(map((settings: any) => settings.data));
          } else {
            return of(this.item.settings);
          }
        })
      )
      .subscribe((resp: any) => {
        this.item.settings = resp;
        this.loading = false;
        this.createForm();
      });
  }

  createForm() {
    this.editForm = this.fb.group({
      title: [this.item.title, [Validators.required]],
      code: [this.item.code, [Validators.required]],
      price: [this.item.price, [Validators.required]],
      sale_amount: [this.item.sale_amount],
      sale_percent: [this.item.sale_percent],
      sale_start_date: [
        this.item && this.item.sale_start_date
          ? new Date(this.item.sale_start_date)
          : null
      ],
      sale_end_date: [
        this.item && this.item.sale_end_date
          ? new Date(this.item.sale_end_date)
          : null
      ],
      description: [this.item.description],
      settings: this.fb.array([])
    });

    if (this.item) {
      this.id = this.item._id;
      if (this.item.settings) {
        this.item.settings.forEach((setting, index) => {
          this.addSetting(setting, index);
        });
      }
    }
  }

  initSetting(setting: CustomProductSetting, index: number) {
    return this.fb.group({
      _id: [setting && setting._id ? setting._id : null],
      panel: [setting ? setting.panel : null],
      name: [
        setting && setting.name ? setting.name : null,
        [Validators.required]
      ],
      thai_name: [setting && setting.thai_name ? setting.thai_name : null],
      material_group: [
        setting && setting.material_group
          ? setting.material_group._id
          : this.material_groups[0]._id,
        [Validators.required]
      ],
      area_size: [
        setting && setting.area_size
          ? setting.area_size._id
          : this.design_areas[0]._id,
        [Validators.required]
      ],
      muay_thai: [setting && setting.muay_thai ? true : false],
      default_material: [
        setting && setting.default_material ? setting.default_material : null
      ],
      weight: [index]
    });
  }

  addSetting(setting: CustomProductSetting, index: number) {
    const control = this.editForm.controls['settings'] as FormArray;
    const addrCtrl = this.initSetting(setting, index);
    control.push(addrCtrl);
  }

  removeSetting(i: number) {
    const control = this.editForm.controls['settings'] as FormArray;
    control.removeAt(i);
    return false;
  }

  deleteSetting(id: string, i: number) {
    this.customProductSettingService
      .update(id, { archive: true }, null, false)
      .pipe(untilComponentDestroyed(this))
      .subscribe(() => {
        this.removeSetting(i);
      });
  }

  get extraData() {
    const extra_data: any = {};

    if (this.item.image) {
      extra_data.image = this.item.image._id;
    }
    if (this.item.template) {
      extra_data.template = this.item.template._id;
    }

    return extra_data;
  }

  templateRemoved() {
    this.item.template = null;
  }

  templateAdded(image: Image) {
    this.item.template = image;
    this.loadSvg = true;
  }

  svgData(value) {
    const groups = value.querySelectorAll(`g`);
    groups.forEach((group, index) => {
      const groupId = group.getAttribute('id');
      if (groupId) {
        const hasSetting =
          this.item.settings && this.item.settings.length
            ? this.item.settings.find(s => s.panel === groupId)
            : null;
        if (!hasSetting) {
          this.addSetting(
            {
              panel: groupId
            },
            index
          );
        }
      }
    });
  }

  reloadSvg(e) {
    e.preventDefault();
    this.loadSvg = true;
    return;
  }

  imageRemoved() {
    this.item.image = null;
  }

  imageAdded(image: Image) {
    this.item.image = image;
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
        .update(this.id || this.item._id, data, {
          $client: { populate: 'pop-client-settings' }
        })
        .pipe(take(1), untilComponentDestroyed(this))
        .subscribe(resp => {
          if (resp) {
            this.navigate();
          }
        });
    }
  }

  ngOnDestroy() {
    super.ngOnInit();
    this.dragulaService.destroy('setting');
  }
}
