import { switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { StateService } from '@admin/core/services/state.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomProductSetting } from '@global/models/custom-product-setting';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { SocketService } from '@admin/shared/services/socket.service';
import { BaseEditComponent } from '@admin/shared/components/base-edit/base-edit.component';
import { Term } from '@global/models/term';
import { MaterialGroup, DesignArea } from '@global/models/custom-setting';
import { untilComponentDestroyed } from '@global/untilDestroy';

@Component({
  selector: 'bx-custom-products-settings-edit',
  templateUrl: './custom-products-settings-edit.component.html',
  providers: [
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
export class CustomProductsSettingsEditComponent extends BaseEditComponent
  implements OnInit, OnDestroy {
  item: CustomProductSetting;
  material_types: Term[];
  material_groups: MaterialGroup[];
  design_areas: DesignArea[];
  constructor(
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    @Inject('CustomProductSettingService') protected service: SocketService,
    @Inject('CustomSettingService')
    protected customSettingService: SocketService,
    @Inject('TermService') protected termService: SocketService,
    protected router: Router,
    protected state: StateService
  ) {
    super(fb, route, service, router, state);
    service.setup('custom-product-setting');
    customSettingService.setup('custom-setting');
    termService.setup('term');
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
            return this.service.findOne(params['id']);
          } else {
            this.isNew = true;
            return of({});
          }
        }),
        switchMap((resp: any) => {
          this.item = resp;
          return this.termService.find({
            category: '55059f9f5b5557d303dd8907'
          });
        }),
        tap((resp: any) => (this.material_types = resp.data)),
        switchMap(() => {
          return this.customSettingService.find({
            $limit: 1,
            $sort: {
              createdAt: -1
            }
          });
        }),
        tap((resp: any) => {
          this.design_areas = resp.data[0].design_areas;
          this.material_groups = resp.data[0].material_groups;
        })
      )
      .subscribe((resp: any) => {
        this.loading = false;
        this.createForm();
      });
  }

  createForm() {
    this.editForm = this.fb.group({
      _id: [this.item && this.item._id ? this.item._id : null],
      panel: [this.item ? this.item.panel : null],
      name: [
        this.item && this.item.name ? this.item.name : null,
        [Validators.required]
      ],
      thai_name: [
        this.item && this.item.thai_name ? this.item.thai_name : null
      ],
      material_group: [
        this.item && this.item.material_group
          ? this.item.material_group._id
          : null,
        [Validators.required]
      ],
      area_size: [
        this.item && this.item.area_size ? this.item.area_size._id : null,
        [Validators.required]
      ],
      muay_thai: [this.item && this.item.muay_thai ? true : false],
      default_material: [
        this.item && this.item.default_material
          ? this.item.default_material
          : null
      ]
    });

    if (this.item) {
      this.id = this.item._id;
    }
  }

  ngOnDestroy() {
    super.ngOnInit();
  }
}
