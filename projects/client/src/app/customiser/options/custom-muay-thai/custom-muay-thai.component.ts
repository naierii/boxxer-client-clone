import { Subject, Observable } from 'rxjs';
import { fadeInAnimation } from '@app/route.animation';
import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { CustomiserOptionsService } from '@app/customiser/services/customiser-options.service';
import { SvgService } from '@app/customiser/services/svg.service';
import { ActivatedRoute } from '@angular/router';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { Material } from '@global/models/material';
import { DesignService } from '@app/customiser/services/design.service';
import * as fromCustomiser from './../../reducers';
import { Store, select } from '@ngrx/store';
import { CustomSetting, MaterialGroup } from '@global/models/custom-setting';
import { CustomProductSetting } from '@global/models/custom-product-setting';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { componentDestroyed } from '@w11k/ngx-componentdestroyed';

@Component({
  selector: 'bx-custom-muay-thai',
  templateUrl: './custom-muay-thai.component.html',
  styleUrls: ['./custom-muay-thai.component.scss', './../../scss/options.scss'],
  animations: [fadeInAnimation]
})
export class CustomMuayThaiComponent implements OnInit, OnDestroy {
  @HostBinding('@fadeInAnimation')
  get slideIn() {
    return '';
  }
  fillPanel = 'MuayThaiFill';
  outlinePanel = 'MuayThaiOutline';
  currentFill: Material;
  currentOutline: Material;
  selectedFill: Material;
  selectedOutline: Material;
  canDelete = false;
  customSettings$: Observable<CustomSetting>;
  muay_thai$: Observable<CustomProductSetting[]>;
  hideOptional = new Subject();
  constructor(
    private optionsService: CustomiserOptionsService,
    private svgService: SvgService,
    private designService: DesignService,
    private route: ActivatedRoute,
    private store: Store<fromCustomiser.State>
  ) {
    this.customSettings$ = store.pipe(select(fromCustomiser.getCustomSettings));
    this.muay_thai$ = store.pipe(select(fromCustomiser.getMuayThai));
    this.hideOptional
      .pipe(
        switchMap(() => this.muay_thai$),
        map((settings: CustomProductSetting[]) =>
          settings.forEach(setting => {
            this.svgService.hideOptional(setting);
          })
        ),
        untilComponentDestroyed(this)
      )
      .subscribe();
  }

  get validated() {
    return this.selectedFill && this.selectedOutline;
  }

  get fillMaterialsGroups(): Observable<MaterialGroup[]> {
    return this.muay_thai$.pipe(
      map(
        (settings: CustomProductSetting[]) =>
          settings.find(mt => mt.panel === this.fillPanel).material_groups
      )
    );
  }

  get outlineMaterialsGroups(): Observable<MaterialGroup[]> {
    return this.muay_thai$.pipe(
      map(
        (settings: CustomProductSetting[]) =>
          settings.find(mt => mt.panel === this.outlinePanel).material_groups
      )
    );
  }

  ngOnInit() {
    this.store
      .pipe(
        select(fromCustomiser.getDesignMuayThai),
        takeUntil(componentDestroyed(this))
      )
      .subscribe(muayThai => {
        if (muayThai) {
          this.currentFill = muayThai.fill;
          this.currentOutline = muayThai.outline;
          this.selectedFill = muayThai.fill;
          this.selectedOutline = muayThai.outline;
          this.canDelete = true;
        }
      });
  }

  colourFillSelected(material: Material, optional = true) {
    this.selectedFill = material;
    this.svgService.addColor(material, this.fillPanel, true, optional);
  }

  colourOutlineSelected(material: Material, optional = true) {
    this.selectedOutline = material;
    this.svgService.addColor(material, this.outlinePanel, true, optional);
  }

  save() {
    this.designService.saveOption(true, {
      muay_thai: {
        fill: this.selectedFill,
        outline: this.selectedOutline,
        price: 0
      }
    });
  }

  cancel() {
    if (this.currentFill && this.currentOutline) {
      this.colourFillSelected(this.currentFill, false);
      this.colourOutlineSelected(this.currentOutline, false);
    } else {
      this.hideOptional.next();
    }
    this.backToMenu();
  }

  delete() {
    this.designService.saveOption(true, { muay_thai: null });
    this.hideOptional.next();
  }

  backToMenu() {
    this.optionsService.backToMenu();
  }

  ngOnDestroy() {}
}
