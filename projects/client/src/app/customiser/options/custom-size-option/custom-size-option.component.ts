import { CustomProduct } from '@global/models/custom-product';
import {
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fadeInAnimation } from '@app/route.animation';
import {
  CustomProduction,
  CustomSizing,
  BoxxerLogo,
} from '@global/models/custom-design';
import { untilComponentDestroyed } from '@global/untilDestroy';

import { CustomiserOptionsService } from './../../services/customiser-options.service';
import { DesignService } from './../../services/design.service';
import { SizingService } from './../../services/sizing.service';

import * as fromCustomiser from './../../reducers';
import { Store, select } from '@ngrx/store';
import { CustomSetting, ProductionType } from '@global/models/custom-setting';

@Component({
  selector: 'bx-custom-size-option',
  templateUrl: './custom-size-option.component.html',
  styleUrls: [
    './custom-size-option.component.scss',
    './../../scss/options.scss',
  ],
  animations: [fadeInAnimation],
})
export class CustomSizeOptionComponent implements OnInit, OnDestroy {
  sizingForm: FormGroup;
  sizing: CustomSizing;
  production: CustomProduction;
  logo: BoxxerLogo;
  production_types: ProductionType[];
  @HostBinding('@fadeInAnimation')
  get slideIn() {
    return '';
  }
  customSettings: CustomSetting;
  product: CustomProduct;
  needsSize = true;
  constructor(
    private designService: DesignService,
    private sizingService: SizingService,
    private fb: FormBuilder,
    public optionsService: CustomiserOptionsService,
    private store: Store<fromCustomiser.State>
  ) {
    store
      .pipe(select(fromCustomiser.getProduct), untilComponentDestroyed(this))
      .subscribe((product: CustomProduct) => {
        this.product = product;
        if (!product.sizes) {
          this.needsSize = false;
        }
      });
    store
      .pipe(
        select(fromCustomiser.getCustomSettings),
        untilComponentDestroyed(this)
      )
      .subscribe((settings: CustomSetting) => {
        this.customSettings = settings;
        this.production_types = settings.production_types;
      });
  }

  get sizes() {
    return this.product.sizes;
  }

  ngOnInit() {
    this.store
      .pipe(select(fromCustomiser.getDesign), untilComponentDestroyed(this))
      .subscribe((resp) => {
        this.sizing = resp.sizing ? resp.sizing : null;
        this.production = resp.production ? resp.production : null;
        this.logo = resp.boxxer_logo;
        if (
          (this.optionsService.product.category.parent &&
            this.optionsService.product.category.parent._id ===
              '58ac1333dc142c612ab61faf') ||
          this.optionsService.product.category._id ===
            '6351792206870dbb723ad2bf' ||
          this.optionsService.product.category._id ===
            '635813e6e10bf1774fd1910c'
        ) {
          this.needsSize = false;
        }
        this.formSetup();
      });
  }

  formSetup() {
    this.sizingForm = this.fb.group({
      sizing: this.fb.group({
        height: [
          this.sizing && this.sizing.height ? this.sizing.height : null,
          Validators.required,
        ],
        unit_height: [
          this.sizing && this.sizing.unit_height
            ? this.sizing.unit_height
            : 'CMS',
          Validators.required,
        ],
        weight: [
          this.sizing && this.sizing.weight ? this.sizing.weight : null,
          [Validators.required],
        ],
        unit: [
          this.sizing && this.sizing.unit ? this.sizing.unit : 'KGS',
          Validators.required,
        ],
        size: [
          this.sizing && this.sizing.size ? this.sizing.size : null,
          Validators.required,
        ],
      }),
      production: this.fb.group({
        type: [
          this.production && this.production.type
            ? this.production.type
            : this.production_types[0].title,
        ],
        instructions: [this.production ? this.production.instructions : null],
        production_type: [
          this.production ? this.production.production_type : null,
        ],
      }),
      boxxer_logo: this.fb.group({
        remove_logo: [
          this.logo && this.logo.remove_logo ? this.logo.remove_logo : false,
        ],
        position: [
          this.logo && this.logo.position
            ? this.logo.position
            : this.optionsService.getLogo(),
        ],
      }),
    });

    this.sizingForm
      .get('production')
      .get('type')
      .valueChanges.pipe(untilComponentDestroyed(this))
      .subscribe((resp) => {
        const type = this.customSettings.production_types.find(
          (t) => t.title === resp
        );
        this.sizingForm
          .get('production')
          .get('production_type')
          .setValue(type._id);
      });

    if (!this.needsSize) {
      const sizeFields = this.sizingForm.get('sizing');
      sizeFields.get('height').setValidators(null);
      sizeFields.get('height').updateValueAndValidity();
      sizeFields.get('weight').setValidators(null);
      sizeFields.get('weight').updateValueAndValidity();
      sizeFields.get('unit').setValue(null);
      sizeFields.get('unit').setValidators(null);
      sizeFields.get('unit').updateValueAndValidity();
      sizeFields.get('unit_height').setValue(null);
      sizeFields.get('unit_height').setValidators(null);
      sizeFields.get('unit_height').updateValueAndValidity();
      if (!this.product.sizes) {
        sizeFields.get('size').setValue(null);
        sizeFields.get('size').setValidators(null);
        sizeFields.get('size').updateValueAndValidity();
      }
    } else {
      this.sizingForm
        .get('sizing')
        .get('unit')
        .valueChanges.pipe(untilComponentDestroyed(this))
        .subscribe(() => {
          this.updateSize();
        });
      this.sizingForm
        .get('sizing')
        .get('weight')
        .valueChanges.pipe(untilComponentDestroyed(this))
        .subscribe(() => {
          this.updateSize();
        });
    }
  }

  updateSize() {
    if (
      this.sizingForm.get('sizing').get('unit').value &&
      this.sizingForm.get('sizing').get('weight').value
    ) {
      this.sizingForm
        .get('sizing')
        .get('size')
        .setValue(
          this.sizingService.getSize(
            this.sizingForm.get('sizing').get('unit').value,
            this.sizingForm.get('sizing').get('weight').value
          )
        );
    }
  }

  get validated() {
    return false;
  }

  save() {
    this.designService.saveOption(true, this.sizingForm.value);
  }

  cancel() {
    this.optionsService.backToMenu();
  }

  ngOnDestroy() {}
}
