import { Observable } from 'rxjs';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeInAnimation } from '@app/route.animation';
import { ApiService } from '@app/core/services/api.service';
import { CustomDesignFlag } from '@global/models/custom-design';
import { Flag } from '@global/models/flag';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { switchMap, tap, map } from 'rxjs/operators';

import { CustomiserOptionsService } from './../../services/customiser-options.service';
import { DesignService } from './../../services/design.service';
import * as fromCustomiser from './../../reducers';
import { Store, select } from '@ngrx/store';
import { CustomSetting } from '@global/models/custom-setting';
import { GraphicPriceSize } from '@global/models/graphic-price';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'bx-custom-flag-option',
  templateUrl: './custom-flag-option.component.html',
  styleUrls: [
    './custom-flag-option.component.scss',
    './../../scss/options.scss',
  ],
  animations: [fadeInAnimation],
})
export class CustomFlagOptionComponent implements OnInit, OnDestroy {
  flagForm: FormGroup;
  @HostBinding('@fadeInAnimation')
  get slideIn() {
    return '';
  }
  flags: Flag[];
  currentFlag: Flag;
  selectedFlag: CustomDesignFlag;
  canDelete = false;
  customSettings$: Observable<CustomSetting>;
  flagSizes$: Observable<GraphicPriceSize[]>;
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
    this.flagSizes$ = store.pipe(select(fromCustomiser.getFlagSizes)).pipe(
      tap((resp) => {
        if (resp) {
          this.hasSizes = true;
        }
        this.sizesSetup();
      })
    );
  }

  ngOnInit() {
    this.loadFlags();
  }

  loadFlags() {
    this.route.params
      .pipe(
        switchMap((params) =>
          this.store.pipe(
            select(fromCustomiser.getDesignFlagById(params['id']))
          )
        ),
        switchMap((flag: CustomDesignFlag) => {
          if (flag) {
            this.selectedFlag = flag;
            this.currentFlag = flag.flag;
            this.canDelete = true;
            this.price = this.selectedFlag.price;
          }
          this.flagForm = this.fb.group({
            size: [
              this.selectedFlag && this.selectedFlag.size
                ? this.selectedFlag.size
                : null,
              Validators.required,
            ],
          });
          return this.api.find(
            'flag',
            { $limit: 100, $sort: { weight: 1 } },
            false
          );
        }),
        untilComponentDestroyed(this)
      )
      .subscribe((resp: any) => {
        this.flags = resp.data.filter((d) => d.image);
      });
  }

  sizesSetup() {
    if (!this.hasSizes) {
      this.flagForm.get('size').setValidators(null);
      this.flagForm.get('size').updateValueAndValidity();
      this.customSettings$
        .pipe(
          map((resp) => (this.price = resp.flag_price)),
          untilComponentDestroyed(this)
        )
        .subscribe();
    } else {
      this.flagForm
        .get('size')
        .valueChanges.pipe(
          switchMap((value) => {
            return this.flagSizes$.pipe(
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
    return this.selectedFlag && this.flagForm.get('size').valid;
  }

  flagSelected(flag: Flag) {
    if (this.selectedFlag) {
      this.selectedFlag.flag = flag;
      return;
    }
    this.selectedFlag = {
      price: 0,
      flag,
      size: null,
      position: {
        x: 300 - 16 * 2.5,
        y: 100,
        width: 32,
        height: 24,
        scale: 2.5,
        rotate: 0,
        aspect_ratio: 1.3333333333,
      },
    };
  }

  save() {
    if (this.currentFlag) {
      this.designService.updateSub(
        true,
        {
          'flags.$.flag': this.selectedFlag.flag,
          'flags.$.size': this.flagForm.get('size').value,
        },
        { 'flags._id': this.selectedFlag._id }
      );
    } else {
      this.selectedFlag.size = this.flagForm.get('size').value;
      const data = {
        flags: this.selectedFlag,
      };
      this.designService.saveOption(true, { $addToSet: data });
    }
  }

  delete() {
    this.designService.saveOption(true, {
      $pull: { flags: { _id: this.selectedFlag._id } },
    });
  }

  cancel() {
    if (this.currentFlag) {
      this.selectedFlag.flag = this.currentFlag;
    }
    this.backToMenu();
  }

  backToMenu() {
    this.optionsService.backToMenu();
    this.designService.selectedObject = null;
    this.selectedFlag = null;
  }

  ngOnDestroy() {
    this.selectedFlag = null;
  }
}
