import { Observable } from 'rxjs';
import { CustomDesignPanel } from '@global/models/custom-design';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeInAnimation } from '@app/route.animation';
import { Material } from '@global/models/material';
import { untilComponentDestroyed } from '@global/untilDestroy';

import { CustomiserOptionsService } from './../../services/customiser-options.service';
import { DesignService } from './../../services/design.service';
import { SvgService } from './../../services/svg.service';
import { CustomProductSetting } from '@global/models/custom-product-setting';
import { switchMap, tap } from 'rxjs/operators';
import * as fromCustomiser from './../../reducers';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'bx-custom-panel-option',
  templateUrl: './custom-panel-option.component.html',
  styleUrls: [
    './custom-panel-option.component.scss',
    './../../scss/options.scss'
  ],
  animations: [fadeInAnimation]
})
export class CustomPanelOptionComponent implements OnInit, OnDestroy {
  @HostBinding('@fadeInAnimation')
  get slideIn() {
    return '';
  }
  canDelete = false;
  currentPanel: CustomDesignPanel;
  currentMaterial: Material;
  selectedMaterial: Material;

  productSetting$: Observable<CustomProductSetting>;
  productSetting: CustomProductSetting;

  get validated() {
    return this.selectedMaterial;
  }

  constructor(
    private optionsService: CustomiserOptionsService,
    private svgService: SvgService,
    private designService: DesignService,
    private route: ActivatedRoute,
    private store: Store<fromCustomiser.State>
  ) {}

  ngOnInit() {
    this.loadColours();
  }

  getPrice() {
    const basePrice = this.productSetting.area_size.price_adjust;
    const material_price = this.selectedMaterial.price
      ? this.selectedMaterial.price
      : 0;
    return basePrice * material_price;
  }

  loadColours() {
    this.route.params
      .pipe(
        switchMap((params: any) => this.optionsService.getPanel(params['id'])),
        switchMap((setting: CustomProductSetting) => {
          this.productSetting = setting;
          return this.store.pipe(
            select(fromCustomiser.getDesignPanelByPanel(setting.panel))
          );
        }),
        tap((panel: CustomDesignPanel) => {
          this.currentPanel = panel;
          if (this.currentPanel) {
            this.canDelete = true;
          }
          this.currentMaterial = !this.currentPanel
            ? null
            : this.currentPanel.material;
          this.selectedMaterial = !this.currentPanel
            ? null
            : this.currentPanel.material;
        }),
        untilComponentDestroyed(this)
      )
      .subscribe();
  }

  colourSelected(material: Material) {
    this.selectedMaterial = material;
    if (this.currentPanel) {
      this.currentPanel.material = material;
    }
    this.svgService.addColor(
      material,
      this.productSetting.panel,
      true,
      this.productSetting.area_size.optional
    );
  }

  save() {
    if (this.currentPanel) {
      this.designService.updateSub(
        true,
        {
          'panels.$.material': this.selectedMaterial
        },
        { 'panels._id': this.currentPanel._id }
      );
    } else {
      const data = {
        panels: {
          panel: this.productSetting.panel,
          title: this.productSetting.name,
          price: 0,
          material: this.selectedMaterial,
          product_setting: this.productSetting._id
        }
      };
      this.designService.saveOption(true, { $addToSet: data });
    }
  }

  cancel() {
    this.svgService.addColor(
      this.currentMaterial,
      this.productSetting.panel,
      true,
      this.productSetting.area_size.optional
    );
    this.optionsService.backToMenu();
  }

  delete() {
    this.designService.saveOption(true, {
      $pull: { panels: { _id: this.currentPanel._id } }
    });
    this.svgService.hideOptional(this.currentPanel.product_setting);
  }

  ngOnDestroy() {}
}
