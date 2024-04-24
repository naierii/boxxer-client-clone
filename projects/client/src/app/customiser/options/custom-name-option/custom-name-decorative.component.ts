import { FormGroup } from '@angular/forms';
import { Material } from '@global/models/material';
import { NameType } from '@global/models/custom-setting';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnDestroy,
  OnInit
} from '@angular/core';
import { CustomProduct } from '@global/models/custom-product';
import { untilComponentDestroyed } from '@global/untilDestroy';
import * as fromCustomiser from './../../reducers';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'bx-custom-name-decorative',
  templateUrl: './custom-name-decorative.component.html',
  styleUrls: ['./../../scss/options.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomNameDecorativeComponent implements OnInit, OnDestroy {
  @Input()
  form: FormGroup;
  @Input()
  type: NameType;
  @Input()
  selectedFill: Material;
  @Input()
  selectedOutline: Material;
  @Output()
  nameColourFillSelected: EventEmitter<Material> = new EventEmitter<Material>();
  @Output()
  nameColourOutlineSelected: EventEmitter<Material> = new EventEmitter<
    Material
  >();
  product: CustomProduct;
  constructor(private store: Store<fromCustomiser.State>) {
    store
      .pipe(
        select(fromCustomiser.getProduct),
        untilComponentDestroyed(this)
      )
      .subscribe((product: CustomProduct) => {
        this.product = product;
      });
  }

  ngOnInit(): void {
    // console.log(this.type);

  }

  colourFillSelected(material: Material) {
    this.nameColourFillSelected.emit(material);
  }

  colourOutlineSelected(material: Material) {
    this.nameColourOutlineSelected.emit(material);
  }

  ngOnDestroy() {}
}
