import { CustomDesignPosition, CustomName } from '@global/models/custom-design';
import { NameFinish, NameType } from '@global/models/custom-setting';
import { Location } from '@angular/common';
import {
  Component,
  ElementRef,
  HostBinding,
  OnDestroy,
  OnInit,
  ViewChild,
  Renderer2,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DesignService } from '@app/customiser/services/design.service';
import { fadeInAnimation } from '@app/route.animation';

import { Image } from '@global/models/image';
import { Material } from '@global/models/material';
import { untilComponentDestroyed } from '@global/untilDestroy';

import { CustomiserOptionsService } from './../../services/customiser-options.service';

import * as fromCustomiser from './../../reducers';
import { Store, select } from '@ngrx/store';
import { CustomSetting } from '@global/models/custom-setting';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { PagePopupComponent } from '@app/shared/components/page-popup/page-popup.component';
import { environment } from '@env/environment';

@Component({
  selector: 'bx-custom-name-option',
  templateUrl: './custom-name-option.component.html',
  styleUrls: [
    './custom-name-option.component.scss',
    './../../scss/options.scss',
  ],
  animations: [fadeInAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomNameOptionComponent implements OnInit, OnDestroy {
  nameForm: FormGroup;
  @HostBinding('@fadeInAnimation')
  get slideIn() {
    return '';
  }
  @ViewChild('svgText', { static: true })
  svgText: ElementRef;
  position: CustomDesignPosition;
  selectedName: CustomName;
  selectedType: NameType;
  selectedFill: Material;
  selectedOutline: Material;
  selectedPatch: Material;
  selectedFinish: NameFinish;
  selectedCrystal: Material;
  fontSize = '48px';
  fonts = [
    {
      title: 'Arial',
      value: 'Arial',
    },
    {
      title: 'Oswald',
      value: 'oswaldcustom',
    },
    {
      title: 'College',
      value: 'college',
    },
    {
      title: 'Ballantines',
      value: 'ballantines',
    },
  ];
  canDelete = false;
  customSettings$: Observable<CustomSetting>;
  validate: ErrorStateMatcher = {
    isErrorState: (control: FormControl) => {
      return true;
    },
  };
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private designService: DesignService,
    private optionsService: CustomiserOptionsService,
    public location: Location,
    private store: Store<fromCustomiser.State>,
    private dialog: MatDialog,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) {
    this.customSettings$ = store.pipe(select(fromCustomiser.getCustomSettings));
  }

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params) =>
          this.store.pipe(
            select(fromCustomiser.getDesignNameById(params['id']))
          )
        ),
        untilComponentDestroyed(this)
      )
      .subscribe((name: CustomName) => {
        if (name) {
          this.selectedName = { ...name };
          this.selectedFill = this.selectedName.fill;
          if (this.selectedName.outline) {
            this.selectedOutline = this.selectedName.outline;
          }
          if (this.selectedName.patch) {
            this.selectedPatch = this.selectedName.patch;
          }
          this.selectedType = this.selectedName.name_type;
          if (this.selectedName.finish) {
            this.selectedFinish = this.selectedName.finish;
          }
          if (this.selectedName.crystal) {
            this.selectedCrystal = this.selectedName.crystal;
          }
          this.canDelete = true;
        }

        this.formSetup();
      });
  }

  getImageUrl(image: Image) {
    return `${environment.image_cdn}/${image.key}?width=800`;
  }

  getCrystalFill() {
    const base = this.location.path();
    return `url(${base}#pattern-stripe)`;
  }

  getFill() {
    const base = this.location.path();
    if (this.selectedFill) {
      return `url(${base}#nameFillPattern)`;
    } else {
      return '#000000';
    }
  }

  get filterUrl() {
    const base = this.location.path();
    return `url(${base}#textFilter)`;
  }

  get bBox(): any {
    return this.svgText ? this.svgText.nativeElement.getBBox() : {};
  }

  currentPrice(): Observable<number> {
    const textLength = this.nameForm.get('text').value.replace(/\s+/g, '')
      .length;
    const typePrice = this.selectedType
      ? this.selectedType.base_price + this.selectedType.price * textLength
      : 0;
    const finishPrice = this.selectedFinish
      ? this.selectedFinish.price * textLength
      : 0;
    const patchPrice =
      this.selectedType && this.selectedType.patch && this.selectedPatch
        ? this.selectedType.patch_price
        : 0;
    const materialPrice = this.selectedFill
      ? this.selectedFill.price * textLength
      : 0;
    const outlinePrice = this.selectedOutline
      ? this.selectedType.outline_price * textLength
      : 0;
    return this.customSettings$.pipe(
      switchMap((settings: CustomSetting) => {
        const crystalPrice = this.selectedCrystal
          ? this.selectedType.crystal_price * textLength
          : 0;
        return of(
          typePrice +
            finishPrice +
            patchPrice +
            crystalPrice +
            materialPrice +
            outlinePrice
        );
      })
    );
  }

  updatePosition() {
    let correction = 0;

    switch (this.selectedName && this.selectedName.font) {
      case 'Arial':
        correction = 2;
        break;
      case 'college':
        correction = -2;
        break;
      case 'monte':
        correction = 0;
        break;
      case 'ballantines':
        correction = 8;
        break;
    }

    return {
      x: this.bBox.x - 4,
      y: this.bBox.y + correction,
      width: this.bBox.width + 8,
      height: this.bBox.height ? this.bBox.height - 6 : 0,
      aspect_ratio: this.bBox.width / this.bBox.height,
      rotate: 0,
      scale: 1,
    };
  }

  getFontSize(value: string) {
    if (this.svgText) {
      this.renderer.setAttribute(
        this.svgText.nativeElement,
        'font-size',
        Math.min(60, 60 * (10 / value.length)) + 'px'
      );
    }
    this.cdr.detectChanges();
  }

  get strokeWidth() {
    const width = Math.min(
      3,
      3 * (10 / this.nameForm.get('text').value.length)
    );
    return this.selectedName && this.selectedName.font === 'ballantines'
      ? width / 2
      : width;
  }

  formSetup() {
    this.nameForm = this.fb.group({
      text: [
        this.selectedName ? this.selectedName.text : '',
        Validators.required,
      ],
      font: [
        this.selectedName ? this.selectedName.font : 'Arial',
        Validators.required,
      ],
      fill: [
        this.selectedName ? this.selectedName.fill._id : null,
        Validators.required,
      ],
      patch: [
        this.selectedName && this.selectedName.patch
          ? this.selectedName.patch._id
          : null,
      ],
      add_patch: [this.selectedName && this.selectedName.patch ? true : false],
      add_crystals: [
        this.selectedName && this.selectedName.crystal ? true : false,
      ],
      outline: [
        this.selectedName && this.selectedName.outline
          ? this.selectedName.outline._id
          : null,
      ],
      add_outline: [
        this.selectedName && this.selectedName.outline ? true : false,
      ],
      name_type: [
        this.selectedType ? this.selectedName.name_type._id : null,
        Validators.required,
      ],
      finish: [this.selectedFinish ? this.selectedFinish._id : null],
      crystal: [
        this.selectedName && this.selectedName.crystal
          ? this.selectedName.crystal._id
          : null,
      ],
    });

    if (this.selectedType) {
      this.setSelectedNameType(this.selectedName.name_type._id);
    }
    if (this.selectedFinish) {
      this.setFinish(this.selectedFinish);
    }

    if (this.selectedCrystal) {
      this.setCrystalColour(this.selectedCrystal);
    }

    this.nameForm
      .get('text')
      .valueChanges.pipe(untilComponentDestroyed(this))
      .subscribe((value) => {
        this.getFontSize(value);
      });
    this.nameForm
      .get('name_type')
      .valueChanges.pipe(untilComponentDestroyed(this))
      .subscribe((value) => {
        this.setSelectedNameType(value, true);
      });
    this.nameForm
      .get('font')
      .valueChanges.pipe(untilComponentDestroyed(this))
      .subscribe((value) => {
        this.getFontSize(this.nameForm.get('text').value);
      });

    this.nameForm
      .get('add_outline')
      .valueChanges.pipe(untilComponentDestroyed(this))
      .subscribe((value) => {
        if (value) {
          this.nameForm.get('outline').setValidators([Validators.required]);
        } else {
          if (this.selectedOutline) {
            this.selectedOutline = null;
          }
          if (this.selectedName) {
            this.selectedName.outline = null;
          }
          this.nameForm.get('outline').setValue(null);
          this.nameForm.get('outline').setValidators(null);
        }
        this.nameForm.get('outline').updateValueAndValidity();
      });

    this.nameForm
      .get('add_crystals')
      .valueChanges.pipe(untilComponentDestroyed(this))
      .subscribe((value) => {
        if (value) {
          this.nameForm.get('crystal').setValidators([Validators.required]);
        } else {
          this.nameForm.get('crystal').setValidators(null);
          this.nameForm.get('crystal').setValue(null);
          if (this.selectedName) {
            this.selectedName.crystal = null;
          }
          if (this.selectedCrystal) {
            this.selectedCrystal = null;
          }
        }
        this.nameForm.get('crystal').updateValueAndValidity();
        this.cdr.detectChanges();
      });

    this.nameForm
      .get('add_patch')
      .valueChanges.pipe(untilComponentDestroyed(this))
      .subscribe((value) => {
        if (value) {
          this.nameForm.get('patch').setValidators(Validators.required);
        } else {
          this.nameForm.get('patch').setValidators(null);
          if (this.selectedName) {
            this.nameForm.get('patch').setValue(null);
            this.selectedName.patch = null;
            this.selectedPatch = null;
          }
        }
        this.nameForm.get('patch').updateValueAndValidity();
        this.cdr.detectChanges();
      });

    if (this.selectedName && this.selectedName.text) {
      this.getFontSize(this.selectedName.text);
      this.updatePosition();
    }

    this.cdr.detectChanges();
  }

  get stepOneComplete() {
    return (
      this.nameForm.get('text').valid &&
      this.nameForm.get('font').valid &&
      this.nameForm.get('name_type').valid
    );
  }

  get stepTwoComplete() {
    return (
      this.nameForm.get('fill').valid && this.nameForm.get('outline').valid
    );
  }

  get stepThreeComplete() {
    return this.selectedType && this.selectedType.special_finishes
      ? this.selectedType &&
          this.selectedType.special_finishes &&
          this.nameForm.get('finish').valid
      : true;
  }

  get stepFourComplete() {
    return this.nameForm.get('add_patch').value &&
      this.nameForm.get('patch').value
      ? true
      : false;
  }

  getTextErrorMessage() {
    return this.nameForm.get('text').hasError('required')
      ? 'Please enter text'
      : this.nameForm.get('text').hasError('maxlength')
      ? 'Text too long'
      : '';
  }

  setFont(font: string) {
    this.nameForm.get('font').patchValue(font);
    if (this.selectedName) {
      this.selectedName.font = font;
    }
    this.updatePosition();
  }

  setNameType(name_type: NameType) {
    this.nameForm.get('name_type').setValue(name_type._id);
    if (this.selectedName) {
      this.selectedName.name_type = name_type;
    }
    this.updatePosition();
  }

  setFinish(finish: NameFinish) {
    this.selectedFinish = finish;
    this.nameForm.get('finish').setValue(finish._id);

    if (this.selectedName) {
      this.selectedName.finish = this.selectedFinish;
    }
  }

  setCrystalColour(material: Material) {
    this.selectedCrystal = material;
    this.setMaterial(material, 'crystal');
  }

  setFillColour(material: Material) {
    this.selectedFill = material;
    this.setMaterial(material, 'fill');
  }

  setOutlineColour(material: Material) {
    this.selectedOutline = material;
    this.setMaterial(material, 'outline');
  }

  setPatchColour(material: Material) {
    this.selectedPatch = material;
    this.setMaterial(material, 'patch');
  }

  setMaterial(material: Material, selector: string) {
    this.nameForm.get(selector).setValue(material._id);
    if (this.selectedName) {
      this.selectedName[selector] = material;
    }
  }

  setSelectedNameType(id: string, changed = false) {
    this.customSettings$
      .pipe(
        tap((settings: CustomSetting) => {
          this.selectedType = settings.name_types.find((nt) => nt._id === id);
          if (this.selectedType && this.selectedType.special_finishes) {
            this.nameForm.get('finish').setValidators([Validators.required]);
          } else {
            this.selectedFinish = null;
            this.nameForm.get('finish').setValue(null);
            this.nameForm.get('finish').setValidators(null);
            if (this.selectedName) {
              this.selectedName.finish = null;
            }
          }
          if (changed) {
            this.nameForm.get('finish').updateValueAndValidity();
            this.selectedFill = null;
            this.nameForm.get('fill').setValue(null);
            this.selectedOutline = null;
            this.nameForm.get('outline').setValue(null);
            this.nameForm.get('add_outline').setValue(false);
          }
          if (this.selectedName) {
            this.selectedName.name_type = this.selectedType;
          }
        }),
        untilComponentDestroyed(this)
      )
      .subscribe(() => {
        this.cdr.detectChanges();
      });
  }

  save() {
    const data = this.nameForm.value;
    if (this.selectedType && !this.selectedType.outline) {
      delete data.outline;
    }
    if (this.svgText) {
      this.renderer.setAttribute(
        this.svgText.nativeElement,
        'font-size',
        '12px'
      );
    }
    data.name_type = this.selectedType;
    data.font_size = this.optionsService.getFontSize(data.font);
    if (!this.selectedName) {
      data.position = {
        x: 300,
        y: 115,
        width: this.bBox.width,
        height: this.bBox.height,
        scale: 2.5,
        rotate: 0,
        aspect_ratio: this.bBox.width / this.bBox.height,
      };

      this.designService.saveOption(true, { $addToSet: { names: data } });
    } else {
      data._id = this.selectedName._id;
      data.name_type = this.selectedType;
      data.position = {
        ...this.selectedName.position,
        width: this.bBox.width,
        height: this.bBox.height,
        aspect_ratio: this.bBox.width / this.bBox.height,
      };

      this.designService.updateSub(
        true,
        {
          'names.$': data,
        },
        { 'names._id': this.selectedName._id }
      );
    }
  }

  cancel() {
    this.optionsService.backToMenu();
  }

  showExamples(slug: string) {
    this.dialog.open(PagePopupComponent, {
      data: { slug },
      autoFocus: false,
      maxWidth: '1200px',
    });
  }

  ngOnDestroy() {}
}
