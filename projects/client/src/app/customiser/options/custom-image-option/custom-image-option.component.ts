import { GraphicPriceSize } from '@global/models/graphic-price';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeInAnimation } from '@app/route.animation';
import { ApiService } from '@app/core/services/api.service';
import { CustomDesignLogo } from '@global/models/custom-design';
import { Logo } from '@global/models/logo';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { switchMap, map, tap } from 'rxjs/operators';

import { CustomiserOptionsService } from './../../services/customiser-options.service';
import { DesignService } from './../../services/design.service';
import * as fromCustomiser from './../../reducers';
import { Store, select } from '@ngrx/store';
import { CustomSetting } from '@global/models/custom-setting';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'bx-custom-image-option',
  templateUrl: './custom-image-option.component.html',
  styleUrls: [
    './custom-image-option.component.scss',
    './../../scss/options.scss',
  ],
  animations: [fadeInAnimation],
})
export class CustomImageOptionComponent implements OnInit, OnDestroy {
  logoForm: FormGroup;
  @HostBinding('@fadeInAnimation')
  get slideIn() {
    return '';
  }

  logos: Logo[];
  currentLogo: CustomDesignLogo;
  selectedLogo: CustomDesignLogo;
  canDelete = false;
  customSettings$: Observable<CustomSetting>;
  logoSizes$: Observable<GraphicPriceSize[]>;
  hasSizes = false;
  price = 0;
  constructor(
    private api: ApiService,
    private designService: DesignService,
    private optionsService: CustomiserOptionsService,
    private route: ActivatedRoute,
    private store: Store<fromCustomiser.State>,
    private fb: FormBuilder
  ) {
    this.customSettings$ = store.pipe(select(fromCustomiser.getCustomSettings));
    this.logoSizes$ = store.pipe(select(fromCustomiser.getLogoSizes)).pipe(
      tap((resp) => {
        if (resp) {
          this.hasSizes = true;
        }
        this.sizesSetup();
      })
    );
  }

  ngOnInit() {
    this.loadLogos();
  }

  loadLogos() {
    this.route.params
      .pipe(
        switchMap((params) =>
          this.store.pipe(
            select(fromCustomiser.getDesignLogoById(params['id']))
          )
        ),
        switchMap((logo: CustomDesignLogo) => {
          if (logo) {
            this.selectedLogo = logo;
            this.currentLogo = this.selectedLogo;
            this.canDelete = true;
            this.price = this.selectedLogo.price;
          }
          this.logoForm = this.fb.group({
            instructions: [
              this.selectedLogo && this.selectedLogo.instructions
                ? this.selectedLogo.instructions
                : null,
            ],
            color: [
              this.selectedLogo && this.selectedLogo.color
                ? this.selectedLogo.color
                : null,
            ],
            size: [
              this.selectedLogo && this.selectedLogo.size
                ? this.selectedLogo.size
                : null,
              Validators.required,
            ],
          });
          return this.api.find(
            'logo',
            { $limit: 100, $sort: { weight: 1 } },
            false
          );
        }),
        untilComponentDestroyed(this)
      )
      .subscribe((resp: any) => {
        this.logos = resp.data.filter((d) => d.image);
      });
  }

  sizesSetup() {
    if (!this.hasSizes) {
      this.logoForm.get('size').setValidators(null);
      this.logoForm.get('size').updateValueAndValidity();
      this.customSettings$
        .pipe(
          map((resp) => (this.price = resp.logo_price)),
          untilComponentDestroyed(this)
        )
        .subscribe();
    } else {
      this.logoForm
        .get('size')
        .valueChanges.pipe(
          switchMap((value) => {
            return this.logoSizes$.pipe(
              map((sizes) => sizes.find((s) => s.title === value))
            );
          }),
          map((findSize) => {
            return findSize && findSize.price ? findSize.price : 10;
          }),
          untilComponentDestroyed(this)
        )
        .subscribe((resp) => (this.price = resp));
    }
  }

  get validated() {
    return this.selectedLogo && this.logoForm.get('size').valid;
  }

  logoSelected(logo: Logo) {
    if (this.selectedLogo) {
      this.selectedLogo.image = logo;
      return;
    }
    this.selectedLogo = {
      price: 0,
      size: null,
      image: logo,
      position: {
        x: 300 - 16 * 2.5,
        y: 100,
        width: 32,
        height: 32,
        scale: 2.5,
        rotate: 0,
        aspect_ratio: 1,
      },
    };
  }

  save() {
    if (this.currentLogo) {
      this.designService.updateSub(
        true,
        {
          'logos.$.image': this.selectedLogo.image,
          'logos.$.size': this.logoForm.get('size').value,
          'logos.$.instructions': this.logoForm.get('instructions').value,
          'logos.$.color': this.logoForm.get('color').value,
        },
        { 'logos._id': this.selectedLogo._id }
      );
    } else {
      this.selectedLogo.instructions = this.logoForm.get('instructions').value;
      this.selectedLogo.color = this.logoForm.get('color').value;
      this.selectedLogo.size = this.logoForm.get('size').value;
      const data = {
        logos: this.selectedLogo,
      };
      this.designService.saveOption(true, { $addToSet: data });
    }
  }

  delete() {
    this.designService.saveOption(true, {
      $pull: { logos: { _id: this.selectedLogo._id } },
    });
  }

  cancel() {
    if (this.currentLogo) {
      this.selectedLogo.image = this.currentLogo.image;
    }
    this.backToMenu();
  }

  backToMenu() {
    this.optionsService.backToMenu();
    this.designService.selectedObject = null;
    this.selectedLogo = null;
  }

  ngOnDestroy() {}
}