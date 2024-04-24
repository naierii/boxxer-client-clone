import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Image } from '@global/models/image';
import { Product } from '@global/models/product';

@Component({
  selector: 'bx-ready-made-variation-edit',
  templateUrl: './ready-made-variation-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadyMadeVariationEditComponent implements OnInit, OnChanges {
  @Input()
  group: FormGroup;
  @Input()
  image: Image;
  @Input()
  variation: Product;
  @Input()
  attributes: any[];
  @Input()
  public index: number;
  attribute_terms: any[];
  dropzone_config: any;
  constructor(private fb: FormBuilder) {
    this.dropzone_config = {
      params: {
        folder: 'product-variation'
      }
    };
  }

  get formData() {
    return this.group.get('variations') as FormArray;
  }

  get attributeTerms() {
    return this.group.get('attribute_terms') as FormArray;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.index && !changes.index.firstChange) {
      this.group.get('weight').setValue(changes.index.currentValue);
    }

    if (changes.attributes && !changes.attributes.firstChange) {
      const new_attributes = changes.attributes.currentValue
        .concat(changes.attributes.previousValue)
        .filter((val, index, arr) => {
          return arr.indexOf(val) === arr.lastIndexOf(val);
        });

      new_attributes.forEach(attribute => {
        const checkCurrent = this.attributes.find(a => a._id === attribute._id);
        if (!checkCurrent) {
          this.addAttribute(attribute);
        }
      });
    }
  }

  ngOnInit() {
    this.attribute_terms = this.variation
      ? this.variation.attribute_terms
      : null;
    if (this.attributes && this.attributes.length) {
      this.attributes.forEach(attribute => {
        this.addAttribute(attribute);
      });
    }
  }

  initAttribute(attribute?: any) {
    const term = this.attribute_terms
      ? this.attribute_terms.find(t => t.category === attribute._id)
      : null;
    return this.fb.group({
      title: [attribute.title],
      category: [attribute ? attribute._id : null],
      term: [term && term.term ? term.term._id : null]
    });
  }

  addAttribute(attribute?: any) {
    const control = this.group.controls['attribute_terms'] as FormArray;
    const addrCtrl = this.initAttribute(attribute);
    control.push(addrCtrl);
  }

  removeAttribute(i: number) {
    const control = this.group.controls['attribute_terms'] as FormArray;
    control.removeAt(i);
    return false;
  }

  imageAdded(image: Image) {
    this.group.controls.image.setValue(image._id);
  }

  imageRemoved() {
    this.group.controls.image.setValue(null);
  }
}
