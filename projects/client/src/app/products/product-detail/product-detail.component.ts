import { Observable } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@app/core/services/api.service';
import { CartService } from '@app/cart/cart.service';
import { Image } from '@global/models/image';
import { Product } from '@global/models/product';
import { ProductDisplay } from '@global/models/product-display';
import { mergeMap, tap } from 'rxjs/operators';
import { CartReadyMade } from '@app/cart/models';
import { SeoService } from '@app/core/services/seo.service';
import { DataLayerService } from '@app/core/services/data-layer.service';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { JsonldService } from '@app/core/services/jsonld.service';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '@app/reducers';

@Component({
  selector: 'bx-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  currency$: Observable<string>;
  addToCartForm: FormGroup;
  product$: Observable<ProductDisplay>;
  product: ProductDisplay;
  currentImage: Image;
  selectedVariation: Product;
  matchedVariations: Product[];
  attribute_terms: any[] = [];
  customise = false;
  hasNames = false;
  currency: string;
  constructor(
    private stateStore: Store<fromRoot.State>,
    private api: ApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private cart: CartService,
    private seo: SeoService,
    private dataLayer: DataLayerService,
    public jsonld: JsonldService
  ) {
    this.stateStore.pipe(select(fromRoot.getCurrency)).subscribe(currency => this.currency = currency)
  }

  get variationImages() {
    if (!this.product.attributes) {
      return [];
    }
    const getImages = this.product.variations.filter((variation) => {
      const match = variation.attribute_terms.find(
        (t: any) =>
          t.term._id === this.selectedVariation.attribute_terms[0].term._id
      );
      if (match) {
        return variation;
      }
    });

    return getImages;
  }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.product$ = this.route.params.pipe(
      mergeMap((params: any) => {
        return this.api.get('product-display', params['slug'], {
          published: true,
        });
      }),
      tap((product: ProductDisplay) => {
        this.product = product;
        this.currentImage = product.images[0];
        if (!product.variations) {
          this.router.navigate(['/404']);
          return;
        }
        this.selectedVariation = product.variations[0];
        this.formSetup();
        const section = product.product_type.parent
          ? `${product.product_type.parent.title} | ${product.product_type.title}`
          : product.product_type.title;
        this.seo.setMetaAndLinks(
          product.title,
          product.seo,
          section,
          null,
          'product'
        );

        this.dataLayer.productDetail(product);
        this.jsonld.product(product);
      })
    );
  }

  getAtrributeOptions(category: string) {
    return this.attribute_terms.filter((t) => t.category === category);
  }

  formSetup(height?: string, weight?: string) {
    if (this.product.club_kit) {
      this.addToCartForm = this.fb.group({
        product_variation: [this.selectedVariation._id, Validators.required],
        attributes: this.fb.array([]),
      });

      this.product.attributes.forEach((attribute) => {
        this.addAttribute(attribute);
        this.product.variations.forEach((variation) => {
          this.addKitVariation(variation, attribute);
        });
      });
    } else {
      this.addToCartForm = this.fb.group({
        product_variation: [this.selectedVariation._id, Validators.required],
        normal_custom: this.fb.group({
          names: this.fb.array([]),
          name_colour: [],
          name_font: [],
          flags: this.fb.array([]),
          height: [height, Validators.required],
          weight: [weight, Validators.required],
        }),
        attributes: this.fb.array([]),
      });

      if (this.product.attributes) {
        this.product.attributes.forEach((attribute) => {
          this.addAttribute(attribute);
        });
        this.product.variations.forEach((variation) => {
          this.attribute_terms = this.attribute_terms.concat(
            variation.attribute_terms
          );
        });
        this.attribute_terms = this.attribute_terms.filter(
          (elem, pos, arr) =>
            arr.map((a) => a.term.title).indexOf(elem.term.title) === pos
        );

        this.addToCartForm
          .get('attributes')
          .valueChanges.pipe(untilComponentDestroyed(this))
          .subscribe((resp) => {
            this.matchedVariations = this.product.variations;

            const selected = resp.filter((r) => r.term !== null);
            selected.forEach((element) => {
              this.matchedVariations = this.matchedVariations.filter(
                (variation) => {
                  const match = variation.attribute_terms.find(
                    (t: any) =>
                      t.category === element._id && t.term._id === element.term
                  );
                  if (match) {
                    return variation;
                  }
                }
              );
            });

            if (this.matchedVariations.length === 1) {
              this.selectedVariation = this.matchedVariations[0];
              this.addToCartForm
                .get('product_variation')
                .setValue(this.selectedVariation._id);
            }
          });
      }

      if (this.product.custom) {
        this.product.custom.names.forEach((name) => {
          this.addName(name);
        });

        this.product.custom.flags.forEach((flag) => {
          this.addFlag(flag);
        });
      }

      this.addToCartForm
        .get('product_variation')
        .valueChanges.pipe(untilComponentDestroyed(this))
        .subscribe((id) => {
          this.setSelectedVariation(id);
        });

      this.addToCartForm
        .get('normal_custom')
        .get('names')
        .valueChanges.pipe(untilComponentDestroyed(this))
        .subscribe((resp: any[]) => {
          const names = resp.filter((n) => n.text);
          this.addValidators(names.length ? true : false);
        });
    }
  }

  addValidators(add: boolean) {
    this.hasNames = add;

    this.addToCartForm
      .get('normal_custom')
      .get('name_colour')
      .setValidators(!add ? null : [Validators.required]);

    this.addToCartForm
      .get('normal_custom')
      .get('name_colour')
      .updateValueAndValidity({ onlySelf: true });

    this.addToCartForm
      .get('normal_custom')
      .get('name_colour')
      .markAsTouched({ onlySelf: true });

    this.addToCartForm
      .get('normal_custom')
      .get('name_font')
      .setValidators(!add ? null : [Validators.required]);

    this.addToCartForm
      .get('normal_custom')
      .get('name_font')
      .updateValueAndValidity({ onlySelf: true });

    this.addToCartForm
      .get('normal_custom')
      .get('name_font')
      .markAsTouched({ onlySelf: true });
  }

  initKitVariation(variation?: any, term?: any) {
    return this.fb.group({
      _id: [variation ? variation._id : null],
      price: [variation ? variation.price : 0],
      title: [term ? term.title : null],
      qty: [0],
    });
  }

  addKitVariation(variation?: any, attribute?: any) {
    const term = variation.attribute_terms.find(
      (t) => t.category === attribute._id
    );
    const attributeControl = this.addToCartForm
      .get('attributes')
      ['controls'].find(
        (c) => c.get('_id').value === attribute._id
      ) as FormGroup;
    const control = attributeControl.controls['kit_variations'] as FormArray;
    const addrCtrl = this.initKitVariation(variation, term.term);
    control.push(addrCtrl);
  }

  initAttribute(attribute?: any) {
    const term: any = this.selectedVariation.attribute_terms.find(
      (t: any) => t.category === attribute._id
    );

    return this.fb.group({
      _id: [attribute ? attribute._id : null],
      title: [attribute ? attribute.title : null],
      term: [term.term._id],
      kit_variations: this.fb.array([]),
    });
  }

  addAttribute(attribute?: any) {
    const control = this.addToCartForm.controls['attributes'] as FormArray;
    const addrCtrl = this.initAttribute(attribute);
    control.push(addrCtrl);
  }

  initName(name?: any) {
    return this.fb.group({
      title: [name ? name.title : null, Validators.required],
      price: [name ? name.price : 0, Validators.required],
      text: [],
    });
  }

  clubKitQtyCheck() {
    const controls = (this.addToCartForm.controls['attributes'] as FormArray)
      .controls as FormControl[];
    const qty = controls
      .map((c) => {
        return c.get('kit_variations').value.reduce((sum, current) => {
          return sum + current.qty;
        }, 0);
      })
      .reduce((sum, current) => {
        return sum + current;
      }, 0);

    return qty > 9;
  }

  addName(name?: any) {
    const parent = this.addToCartForm.controls['normal_custom'] as FormGroup;
    const control = parent.controls['names'] as FormArray;
    const addrCtrl = this.initName(name);
    control.push(addrCtrl);
  }

  initFlag(flag?: any) {
    return this.fb.group({
      title: [flag ? flag.title : null, Validators.required],
      price: [flag ? flag.price : 0, Validators.required],
      country: [],
    });
  }

  addFlag(flag?: any) {
    const parent = this.addToCartForm.controls['normal_custom'] as FormGroup;
    const control = parent.controls['flags'] as FormArray;
    const addrCtrl = this.initFlag(flag);
    control.push(addrCtrl);
  }

  setSelectedVariation(id: string) {
    this.selectedVariation = this.product.variations.find(
      (variation) => variation._id === id
    );
  }

  changeImage(variation: any) {
    this.selectedVariation = variation;
    this.addToCartForm
      .get('product_variation')
      .setValue(this.selectedVariation._id);
    this.selectedVariation.attribute_terms.forEach((term, index) => {
      this.addToCartForm
        .get('attributes')
        ['controls'][index].get('term')
        .setValue(term.term._id);
    });
  }

  addToCart(data: CartReadyMade) {
    if (this.product.club_kit) {
      const controls = (this.addToCartForm.controls['attributes'] as FormArray)
        .controls as FormControl[];
      controls.forEach((c) => {
        c.get('kit_variations').value.forEach((v) => {
          if (v.qty > 0) {
            this.cart.addCartReadyMade({
              product_variation: v._id,
              normal_custom: null,
              qty: v.qty,
            });
          }
        });
      });
      this.customise = false;
      this.formSetup();
    } else {
      this.cart.addCartReadyMade(data);
      this.customise = false;
      this.formSetup();
    }
  }

  resetCustomiser() {
    const parent = this.addToCartForm.controls['normal_custom'] as FormGroup;
    const names = parent.controls['names'] as FormArray;
    names.reset();
  }

  showCustomiser(event) {
    event.preventDefault();
    this.customise = !this.customise;
    if (!this.customise) {
      const height = this.addToCartForm
        .get('normal_custom')
        .get('height').value;
      const weight = this.addToCartForm
        .get('normal_custom')
        .get('weight').value;
      this.formSetup(height, weight);
    }
  }

  ngOnDestroy() {}
}
