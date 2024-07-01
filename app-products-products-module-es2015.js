(window["webpackJsonp"] = window["webpackJsonp"] || []).push([ [ "app-products-products-module" ], {
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/products/product-detail/product-detail.component.html": 
    /*!*********************************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/products/product-detail/product-detail.component.html ***!
  \*********************************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<article *ngIf="product$ | async as product">\r\n  <div class="product">\r\n    <div class="image">\r\n      <div>\r\n        <div bxImageWrapper [aspect_ratio]="0.8656280428" *ngIf="selectedVariation.image; else mainImage">\r\n          <img alt="Boxxerworld {{ product.title }}" [bxLazysizes]="selectedVariation.image.key"\r\n            [crop_ratio]="0.8656280428" />\r\n        </div>\r\n        <ng-template #mainImage>\r\n          <div bxImageWrapper [aspect_ratio]="product.product_type.aspect_ratio | ratio">\r\n            <img alt="Boxxerworld {{ product.title }}"\r\n              [bxLazysizes]="product.images.length ? product.images[0].key : product.image.key"\r\n              [crop_ratio]="product.product_type.aspect_ratio | ratio" />\r\n          </div>\r\n        </ng-template>\r\n      </div>\r\n      <div class="image-thumbs" *ngIf="product.attributes">\r\n        <div class="product-thumb" *ngFor="let variation of variationImages">\r\n          <img [bxLazysizes]="variation.image.key" [crop_ratio]="1" (click)="changeImage(variation)"\r\n            *ngIf="variation.image" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="content">\r\n      <h1>{{ product.title }}</h1>\r\n      <h4 class="price" [price]="selectedVariation.price" bx-price-sale></h4>\r\n      <form class="cart-form" [formGroup]="addToCartForm" (ngSubmit)="addToCart(addToCartForm.value)">\r\n        <div formArrayName="attributes" *ngIf="\r\n            product.attributes && product.attributes.length;\r\n            else noAttribute\r\n          ">\r\n          <ng-container *ngIf="product.club_kit; else notClubKitVariations">\r\n            <div *ngFor="\r\n              let attribute of addToCartForm.get(\'attributes\')[\'controls\'];\r\n              let i = index\r\n            " [formGroupName]="i">\r\n              <h3>{{attribute.get(\'title\').value}}</h3>\r\n              <div formArrayName="kit_variations">\r\n                <div *ngFor="\r\n              let kit_variation of attribute.get(\'kit_variations\')[\'controls\'];\r\n              let vi = index\r\n            " [formGroupName]="vi">\r\n                  <mat-form-field>\r\n                    <input type="number" matInput\r\n                      [placeholder]="kit_variation.get(\'title\').value + \' - \' + (kit_variation.get(\'price\').value | currConvert: \'GBP\':currency | currency: currency:\'symbol\')"\r\n                      formControlName="qty" required>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ng-container>\r\n          <ng-template #notClubKitVariations>\r\n            <div *ngFor="\r\n              let attribute of addToCartForm.get(\'attributes\')[\'controls\'];\r\n              let i = index\r\n            " [formGroupName]="i">\r\n              <mat-form-field>\r\n                <mat-select [placeholder]="attribute.get(\'title\').value" formControlName="term" required>\r\n                  <mat-option *ngFor="\r\n                    let option of getAtrributeOptions(\r\n                      attribute.get(\'_id\').value\r\n                    )\r\n                  " [value]="option.term._id">\r\n                    {{ option.term.title }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n          </ng-template>\r\n        </div>\r\n        <ng-template #noAttribute>\r\n          <mat-form-field>\r\n            <mat-select placeholder="Size" formControlName="product_variation" required>\r\n              <mat-option *ngFor="let variation of product.variations" [value]="variation._id">\r\n                {{ variation.option_name }}\r\n                <bx-price [price]="variation.price" [sale_price]="variation.sale_price"></bx-price>\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </ng-template>\r\n        <div formGroupName="normal_custom" *ngIf="!product.club_kit">\r\n          <div class="customiser" *ngIf="customise">\r\n            <h2>Custom Options</h2>\r\n            <p>\r\n              Our ready made products can be customised with some basic options.\r\n              If you would like to fully customise please check out our Custom\r\n              Fightwear range.\r\n            </p>\r\n            <h4>Add text</h4>\r\n            <div formArrayName="names">\r\n              <div *ngFor="\r\n                  let name of addToCartForm.get(\'normal_custom\').get(\'names\')[\r\n                    \'controls\'\r\n                  ];\r\n                  let i = index\r\n                " [formGroupName]="i">\r\n                <mat-form-field>\r\n                  <mat-label>{{ name.value.title }} -\r\n                    <bx-price [price]="name.value.price"></bx-price>\r\n                  </mat-label>\r\n                  <input matInput placeholder="Enter Text" formControlName="text" />\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class="name-options" *ngIf="hasNames">\r\n              <mat-form-field>\r\n                <mat-select placeholder="Choose Font" formControlName="name_font" [disableControl]="!hasNames">\r\n                  <mat-option value="Block">Block font</mat-option>\r\n                  <mat-option value="Cursive">Cursive (fancy) font</mat-option>\r\n                </mat-select>\r\n                <mat-hint>Select a font</mat-hint>\r\n                <mat-error *ngIf="\r\n                    addToCartForm\r\n                      .get(\'normal_custom\')\r\n                      .get(\'name_font\')\r\n                      .hasError(\'required\')\r\n                  ">You must select a font if you have added names.</mat-error>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <mat-select placeholder="Choose Colour" formControlName="name_colour" [disableControl]="!hasNames">\r\n                  <mat-option *ngFor="let colour of product.custom.data.materials" [value]="colour.title">\r\n                    <svg style="vertical-align: middle" viewBox="0 0 100 100" width="35" height="35">\r\n                      <rect [attr.fill]="colour.hex" width="100%" height="100%" x="0" y="0" />\r\n                    </svg>\r\n                    <span>{{ colour.title }}</span>\r\n                  </mat-option>\r\n                </mat-select>\r\n                <mat-hint>Select a colour</mat-hint>\r\n                <mat-error *ngIf="\r\n                    addToCartForm\r\n                      .get(\'normal_custom\')\r\n                      .get(\'name_colour\')\r\n                      .hasError(\'required\')\r\n                  ">You must select a colour if you have added names.</mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <h4>Add flag</h4>\r\n            <div formArrayName="flags">\r\n              <div *ngFor="\r\n                  let flag of addToCartForm.get(\'normal_custom\').get(\'flags\')[\r\n                    \'controls\'\r\n                  ];\r\n                  let i = index\r\n                " [formGroupName]="i">\r\n                <mat-form-field>\r\n                  <mat-label>Choose Flag {{ flag.value.title }} -\r\n                    <bx-price [price]="flag.value.price"></bx-price>\r\n                  </mat-label>\r\n                  <mat-select placeholder="Choose Flag" formControlName="country">\r\n                    <mat-option *ngFor="let flag of product.custom.data.flags" [value]="flag.title">\r\n                      <img style="vertical-align: middle; margin-right: 5px" aria-hidden src="https://img.boxxerworld.com/{{\r\n                          flag.image.key\r\n                        }}?crop=smart&width=45&height=45" height="45" />\r\n                      <span>{{ flag.title }}</span>\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <button class="cancel" (click)="showCustomiser($event)" *ngIf="customise">\r\n              Clear Customiser\r\n            </button>\r\n          </div>\r\n          <h4>About you</h4>\r\n          <p>\r\n            To help us make sure the size you\'ve selected is correct, please\r\n            enter your height and weight below.\r\n          </p>\r\n          <mat-form-field>\r\n            <mat-label>Enter height</mat-label>\r\n            <input matInput placeholder="Enter height" formControlName="height" />\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <mat-label>Enter weight</mat-label>\r\n            <input matInput placeholder="Enter weight" formControlName="weight" />\r\n          </mat-form-field>\r\n        </div>\r\n        <ng-container *ngIf="product.club_kit; else normalAddToCart">\r\n          <bx-club-kit-warning *ngIf="!clubKitQtyCheck()"></bx-club-kit-warning>\r\n          <button class="btn btn-success" [disabled]="!addToCartForm.valid || !clubKitQtyCheck()">\r\n            Add to cart\r\n          </button>\r\n        </ng-container>\r\n        <ng-template #normalAddToCart>\r\n          <button class="btn btn-success" [disabled]="!addToCartForm.valid">\r\n            Add to cart\r\n          </button>\r\n        </ng-template>\r\n        <button class="btn" (click)="showCustomiser($event)" *ngIf="!customise && !product.club_kit">\r\n          Customise\r\n        </button>\r\n      </form>\r\n      <span [innerHTML]="product.description"></span>\r\n\r\n      <ng-container *ngIf="product.colours">\r\n        <h4>Colours</h4>\r\n        <span [innerHTML]="product.colours"></span>\r\n      </ng-container>\r\n      <ng-container *ngIf="product.fabrics">\r\n        <h4>Fabrics</h4>\r\n        <span [innerHTML]="product.fabrics"></span>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</article>\r\n<ngx-json-ld [json]="jsonld.schema"></ngx-json-ld>';
    },
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/products/product-list/product-item.component.html": 
    /*!*****************************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/products/product-list/product-item.component.html ***!
  \*****************************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<a [routerLink]="[item.slug]" bxCard (click)="productClicked()">\r\n  <div bxImageWrapper [aspect_ratio]="1" *ngIf="mainImage">\r\n    <img\r\n      alt="Boxxerworld {{ item.title }}"\r\n      [bxLazysizes]="mainImage.key"\r\n      [crop_ratio]="1"\r\n    />\r\n  </div>\r\n  <div bxCardContent>\r\n    <h2 bxCardTitle>{{ item.title }}</h2>\r\n  </div>\r\n  <div bxCardFooter>\r\n    <span bx-price-from [variations]="item.variations"></span>\r\n  </div>\r\n</a>\r\n';
    },
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/products/product-list/product-list.component.html": 
    /*!*****************************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/products/product-list/product-list.component.html ***!
  \*****************************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<div class="page-layout">\r\n  <aside class="page-sidebar">\r\n    <bx-sidebar-nav type="shop"></bx-sidebar-nav>\r\n    <bx-adverts></bx-adverts>\r\n  </aside>\r\n  <section class="page-content">\r\n    <bx-page-header>\r\n      <div class="page-header">\r\n        <h1>{{page_data?.title}}</h1>\r\n      </div>\r\n      \x3c!-- <div class="sort">\r\n        <button class="btn btn-sort">Sort By</button>\r\n      </div> --\x3e\r\n    </bx-page-header>\r\n    <div class="page-grid">\r\n      <div class="page-grid-item" bx-product-item *ngFor="let item of products | async | paginate: { id: \'server\', itemsPerPage: itemsPerPage, currentPage: currentPage, totalItems: total };let i = index"\r\n        [item]="item" [position]="i"></div>\r\n    </div>\r\n    <pagination-template class="bx-pagination" #p="paginationApi" maxSize="5" (pageChange)="getPage($event)" id="server"\r\n      *ngIf="pageCount > 1">\r\n      <div class="btn-page pagination-previous" [class.disabled]="p.isFirstPage()">\r\n        <a class="link" *ngIf="!p.isFirstPage()" (click)="p.previous()">\r\n          < </a> </div> <div class="btn-page" *ngFor="let page of p.pages" [class.current]="p.getCurrent() === page.value">\r\n            <a class="link" [routerLink]="[]" [queryParams]="{p: page.value}" (click)="p.setCurrent(page.value)" *ngIf="p.getCurrent() !== page.value">\r\n              <span>{{ page.label }}</span>\r\n            </a>\r\n            <div class="link" *ngIf="p.getCurrent() === page.value">\r\n              <span>{{ page.label }}</span>\r\n            </div>\r\n      </div>\r\n      <div class="btn-page pagination-next" [class.disabled]="p.isLastPage()">\r\n        <a class="link" *ngIf="!p.isLastPage()" (click)="p.next()"> > </a>\r\n      </div>\r\n    </pagination-template>\r\n    <bx-page-info *ngIf="page_data?.description">\r\n      <h3>Ready Made {{page_data?.title}} Info</h3>\r\n      <span [innerHTML]="page_data.description"></span>\r\n    </bx-page-info>\r\n  </section>\r\n</div>\r\n';
    },
    "./src/app/products/product-detail/product-detail.component.scss": 
    /*!***********************************************************************!*\
  !*** ./src/app/products/product-detail/product-detail.component.scss ***!
  \***********************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = ":host {\n  display: block;\n}\n\n.product-wrapper {\n  background-color: white;\n}\n\narticle {\n  padding: 15px;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 576px) {\n  article {\n    max-width: 100%;\n  }\n}\n\n@media (min-width: 768px) {\n  article {\n    max-width: 100%;\n  }\n}\n\n@media (min-width: 992px) {\n  article {\n    max-width: 100%;\n  }\n}\n\n@media (min-width: 1200px) {\n  article {\n    max-width: 1100px;\n  }\n}\n\n@media (min-width: 576px) {\n  article {\n    padding: 2rem 15px;\n  }\n}\n\n.product {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.image {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n@media (min-width: 576px) {\n  .image {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n  }\n}\n\n.content {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-top: 1rem;\n}\n\n@media (min-width: 576px) {\n  .content {\n    margin-top: 0;\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n  }\n}\n\n@media (min-width: 992px) {\n  .content {\n    -webkit-flex: 0 0 41.6666666667%;\n        -ms-flex: 0 0 41.6666666667%;\n            flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n}\n\n.content h1 {\n  margin: 0;\n}\n\n.content h4.price {\n  margin-bottom: 10px;\n}\n\n:host {\n  background-color: white;\n}\n\n.cart-form {\n  margin-top: 1em;\n}\n\n.image-thumbs {\n  margin-top: 5px;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.product-thumb {\n  cursor: pointer;\n  display: block;\n}\n\n.customiser {\n  margin-bottom: 1rem;\n}\n\n.customiser h4 {\n  margin: 0.5rem 0;\n}\n\n.customiser .cancel {\n  color: #ce0505;\n  text-align: center;\n  display: block;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtZGV0YWlsL0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXHNjc3NcXF9wcm9kdWN0LWxheW91dC5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0LWRldGFpbC9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2dyaWQuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtZGV0YWlsL0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9ub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfYnJlYWtwb2ludHMuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtZGV0YWlsL0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXGFwcFxccHJvZHVjdHNcXHByb2R1Y3QtZGV0YWlsXFxwcm9kdWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtZGV0YWlsL0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQTtFQUNFLGNBQUE7QUNYRjs7QURjQTtFQUNFLHVCQUFBO0FDWEY7O0FEY0E7RUFDRSxhQUFBO0VFaEJBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRE1GOztBRTZDSTtFSHhDSjtJRUhNLGVGWmlCO0VDY3JCO0FBQ0Y7O0FFd0NJO0VIeENKO0lFSE0sZUZaaUI7RUNtQnJCO0FBQ0Y7O0FFbUNJO0VIeENKO0lFSE0sZUZaaUI7RUN3QnJCO0FBQ0Y7O0FFOEJJO0VIeENKO0lFSE0saUJGWmlCO0VDNkJyQjtBQUNGOztBRXlCSTtFSHhDSjtJQUtJLGtCQUFBO0VDY0Y7QUFDRjs7QURYQTtFRU5FLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsdUJBQUE7TUFBQSxtQkFBQTtVQUFBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FEcUJGOztBRGRBO0VFSEUsa0JBQUE7RUFJQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRGtCRjs7QUVNSTtFSDNCSjtJRU9FLHFCQUFBO1FBQUEsaUJBQUE7WUFBQSxhQUFBO0lBSUEsY0FBQTtFRGVBO0FBQ0Y7O0FEcEJBO0VFVkUsa0JBQUE7RUFJQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFRk1BLGdCQUFBO0FDMEJGOztBRVJJO0VIcEJKO0lBSUksYUFBQTtJRUpGLHFCQUFBO1FBQUEsaUJBQUE7WUFBQSxhQUFBO0lBSUEsY0FBQTtFRDhCQTtBQUNGOztBRWZJO0VIcEJKO0lFQUUsZ0NBQUE7UUFBQSw0QkFBQTtZQUFBLHdCQUFBO0lBSUEseUJBQUE7RURvQ0E7QUFDRjs7QUQvQkU7RUFDRSxTQUFBO0FDaUNKOztBRC9CRTtFQUNFLG1CQUFBO0FDaUNKOztBR3BGQTtFQUNFLHVCQUFBO0FIdUZGOztBR3BGQTtFQUNFLGVBQUE7QUh1RkY7O0FHcEZBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0FIdUZGOztBR3BGQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FIdUZGOztBR3BGQTtFQUNFLG1CQUFBO0FIdUZGOztBR3RGRTtFQUNFLGdCQUFBO0FId0ZKOztBR3RGRTtFQUNFLGNDcEJFO0VEcUJGLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUh3RkoiLCJmaWxlIjoicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zJztcclxuQGltcG9ydCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzJztcclxuQGltcG9ydCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fZ3JpZCc7XHJcblxyXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcclxuICBzbTogMTAwJSxcclxuICBtZDogMTAwJSxcclxuICBsZzogMTAwJSxcclxuICB4bDogMTEwMHB4XHJcbik7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5wcm9kdWN0LXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5hcnRpY2xlIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIEBpbmNsdWRlIG1ha2UtY29udGFpbmVyKCk7XHJcbiAgQGluY2x1ZGUgbWFrZS1jb250YWluZXItbWF4LXdpZHRocygkY29udGFpbmVyLW1heC13aWR0aHMpO1xyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoc20pIHtcclxuICAgIHBhZGRpbmc6IDJyZW0gMTVweDtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9kdWN0IHtcclxuICBAaW5jbHVkZSBtYWtlLXJvdygpO1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gIEBpbmNsdWRlIG1ha2UtY29sLXJlYWR5KCk7XHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChzbSkge1xyXG4gICAgQGluY2x1ZGUgbWFrZS1jb2woNik7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgQGluY2x1ZGUgbWFrZS1jb2wtcmVhZHkoKTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoc20pIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBAaW5jbHVkZSBtYWtlLWNvbCg2KTtcclxuICB9XHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykge1xyXG4gICAgQGluY2x1ZGUgbWFrZS1jb2woNSk7XHJcbiAgfVxyXG4gIGgxIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgaDQucHJpY2Uge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnByb2R1Y3Qtd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5hcnRpY2xlIHtcbiAgcGFkZGluZzogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICBhcnRpY2xlIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBhcnRpY2xlIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICBhcnRpY2xlIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgYXJ0aWNsZSB7XG4gICAgbWF4LXdpZHRoOiAxMTAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICBhcnRpY2xlIHtcbiAgICBwYWRkaW5nOiAycmVtIDE1cHg7XG4gIH1cbn1cblxuLnByb2R1Y3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cblxuLmltYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5pbWFnZSB7XG4gICAgZmxleDogMCAwIDUwJTtcbiAgICBtYXgtd2lkdGg6IDUwJTtcbiAgfVxufVxuXG4uY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBmbGV4OiAwIDAgNTAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIGZsZXg6IDAgMCA0MS42NjY2NjY2NjY3JTtcbiAgICBtYXgtd2lkdGg6IDQxLjY2NjY2NjY2NjclO1xuICB9XG59XG4uY29udGVudCBoMSB7XG4gIG1hcmdpbjogMDtcbn1cbi5jb250ZW50IGg0LnByaWNlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhcnQtZm9ybSB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuLmltYWdlLXRodW1icyB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnByb2R1Y3QtdGh1bWIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY3VzdG9taXNlciB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uY3VzdG9taXNlciBoNCB7XG4gIG1hcmdpbjogMC41cmVtIDA7XG59XG4uY3VzdG9taXNlciAuY2FuY2VsIHtcbiAgY29sb3I6ICNjZTA1MDU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufSIsIi8vLyBHcmlkIHN5c3RlbVxuLy9cbi8vIEdlbmVyYXRlIHNlbWFudGljIGdyaWQgY29sdW1ucyB3aXRoIHRoZXNlIG1peGlucy5cblxuQG1peGluIG1ha2UtY29udGFpbmVyKCRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogJGd1dHRlciAvIDI7XG4gIHBhZGRpbmctbGVmdDogJGd1dHRlciAvIDI7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cblxuLy8gRm9yIGVhY2ggYnJlYWtwb2ludCwgZGVmaW5lIHRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBjb250YWluZXIgaW4gYSBtZWRpYSBxdWVyeVxuQG1peGluIG1ha2UtY29udGFpbmVyLW1heC13aWR0aHMoJG1heC13aWR0aHM6ICRjb250YWluZXItbWF4LXdpZHRocywgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAZWFjaCAkYnJlYWtwb2ludCwgJGNvbnRhaW5lci1tYXgtd2lkdGggaW4gJG1heC13aWR0aHMge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRicmVha3BvaW50cykge1xuICAgICAgbWF4LXdpZHRoOiAkY29udGFpbmVyLW1heC13aWR0aDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1ha2Utcm93KCRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1yaWdodDogLSRndXR0ZXIgLyAyO1xuICBtYXJnaW4tbGVmdDogLSRndXR0ZXIgLyAyO1xufVxuXG5AbWl4aW4gbWFrZS1jb2wtcmVhZHkoJGd1dHRlcjogJGdyaWQtZ3V0dGVyLXdpZHRoKSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gUHJldmVudCBjb2x1bW5zIGZyb20gYmVjb21pbmcgdG9vIG5hcnJvdyB3aGVuIGF0IHNtYWxsZXIgZ3JpZCB0aWVycyBieVxuICAvLyBhbHdheXMgc2V0dGluZyBgd2lkdGg6IDEwMCU7YC4gVGhpcyB3b3JrcyBiZWNhdXNlIHdlIHVzZSBgZmxleGAgdmFsdWVzXG4gIC8vIGxhdGVyIG9uIHRvIG92ZXJyaWRlIHRoaXMgaW5pdGlhbCB3aWR0aC5cbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6ICRndXR0ZXIgLyAyO1xuICBwYWRkaW5nLWxlZnQ6ICRndXR0ZXIgLyAyO1xufVxuXG5AbWl4aW4gbWFrZS1jb2woJHNpemUsICRjb2x1bW5zOiAkZ3JpZC1jb2x1bW5zKSB7XG4gIGZsZXg6IDAgMCBwZXJjZW50YWdlKCRzaXplIC8gJGNvbHVtbnMpO1xuICAvLyBBZGQgYSBgbWF4LXdpZHRoYCB0byBlbnN1cmUgY29udGVudCB3aXRoaW4gZWFjaCBjb2x1bW4gZG9lcyBub3QgYmxvdyBvdXRcbiAgLy8gdGhlIHdpZHRoIG9mIHRoZSBjb2x1bW4uIEFwcGxpZXMgdG8gSUUxMCsgYW5kIEZpcmVmb3guIENocm9tZSBhbmQgU2FmYXJpXG4gIC8vIGRvIG5vdCBhcHBlYXIgdG8gcmVxdWlyZSB0aGlzLlxuICBtYXgtd2lkdGg6IHBlcmNlbnRhZ2UoJHNpemUgLyAkY29sdW1ucyk7XG59XG5cbkBtaXhpbiBtYWtlLWNvbC1vZmZzZXQoJHNpemUsICRjb2x1bW5zOiAkZ3JpZC1jb2x1bW5zKSB7XG4gICRudW06ICRzaXplIC8gJGNvbHVtbnM7XG4gIG1hcmdpbi1sZWZ0OiBpZigkbnVtID09IDAsIDAsIHBlcmNlbnRhZ2UoJG51bSkpO1xufVxuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICdwcm9kdWN0LWxheW91dCc7XHJcblxyXG46aG9zdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jYXJ0LWZvcm0ge1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG5cclxuLmltYWdlLXRodW1icyB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LXRodW1iIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jdXN0b21pc2VyIHtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGg0IHtcclxuICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgfVxyXG4gIC5jYW5jZWwge1xyXG4gICAgY29sb3I6ICRyZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxufVxyXG4iLCIvL0NvbG9yc1xyXG4kYmxhY2s6ICMzNjM2MzY7XHJcbiR2ZXJ5bGlnaHRncmV5OiAjZjVmNWY1O1xyXG4kbGlnaHRncmV5OiAjZWRlZGVkO1xyXG4kbWlkZ3JleTogIzk5OTtcclxuJGRhcmtncmV5OiAjNjY2O1xyXG4kZ3JlZW46ICM2M2IyMGI7XHJcbiRyZWQ6ICNjZTA1MDU7XHJcbi8vRm9udHNcclxuJGRlZmF1bHRGb250OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuJGRpc3BsYXlGb250OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuIl19 */";
    },
    "./src/app/products/product-detail/product-detail.component.ts": 
    /*!*********************************************************************!*\
  !*** ./src/app/products/product-detail/product-detail.component.ts ***!
  \*********************************************************************/
    /*! exports provided: ProductDetailComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", (function() {
            return ProductDetailComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
        var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
        var _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/api.service */ "./src/app/core/services/api.service.ts");
        var _app_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/cart/cart.service */ "./src/app/cart/cart.service.ts");
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
        var _app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/core/services/seo.service */ "./src/app/core/services/seo.service.ts");
        var _app_core_services_data_layer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/core/services/data-layer.service */ "./src/app/core/services/data-layer.service.ts");
        var _global_untilDestroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @global/untilDestroy */ "../global/untilDestroy/index.ts");
        var _app_core_services_jsonld_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/core/services/jsonld.service */ "./src/app/core/services/jsonld.service.ts");
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
        var _app_reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/reducers */ "./src/app/reducers/index.ts");
        let ProductDetailComponent = class ProductDetailComponent {
            constructor(stateStore, api, fb, route, router, cart, seo, dataLayer, jsonld) {
                this.stateStore = stateStore;
                this.api = api;
                this.fb = fb;
                this.route = route;
                this.router = router;
                this.cart = cart;
                this.seo = seo;
                this.dataLayer = dataLayer;
                this.jsonld = jsonld;
                this.attribute_terms = [];
                this.customise = false;
                this.hasNames = false;
                this.stateStore.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["select"])(_app_reducers__WEBPACK_IMPORTED_MODULE_12__["getCurrency"])).subscribe((currency => this.currency = currency));
            }
            get variationImages() {
                if (!this.product.attributes) {
                    return [];
                }
                const getImages = this.product.variations.filter((variation => {
                    const match = variation.attribute_terms.find((t => t.term._id === this.selectedVariation.attribute_terms[0].term._id));
                    if (match) {
                        return variation;
                    }
                }));
                return getImages;
            }
            ngOnInit() {
                this.getProduct();
            }
            getProduct() {
                this.product$ = this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])((params => this.api.get("product-display", params["slug"], {
                    published: true
                }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((product => {
                    this.product = product;
                    this.currentImage = product.images[0];
                    if (!product.variations) {
                        this.router.navigate([ "/404" ]);
                        return;
                    }
                    this.selectedVariation = product.variations[0];
                    this.formSetup();
                    const section = product.product_type.parent ? `${product.product_type.parent.title} | ${product.product_type.title}` : product.product_type.title;
                    this.seo.setMetaAndLinks(product.title, product.seo, section, null, "product");
                    this.dataLayer.productDetail(product);
                    this.jsonld.product(product);
                })));
            }
            getAtrributeOptions(category) {
                return this.attribute_terms.filter((t => t.category === category));
            }
            formSetup(height, weight) {
                if (this.product.club_kit) {
                    this.addToCartForm = this.fb.group({
                        product_variation: [ this.selectedVariation._id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required ],
                        attributes: this.fb.array([])
                    });
                    this.product.attributes.forEach((attribute => {
                        this.addAttribute(attribute);
                        this.product.variations.forEach((variation => {
                            this.addKitVariation(variation, attribute);
                        }));
                    }));
                } else {
                    this.addToCartForm = this.fb.group({
                        product_variation: [ this.selectedVariation._id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required ],
                        normal_custom: this.fb.group({
                            names: this.fb.array([]),
                            name_colour: [],
                            name_font: [],
                            flags: this.fb.array([]),
                            height: [ height, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required ],
                            weight: [ weight, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required ]
                        }),
                        attributes: this.fb.array([])
                    });
                    if (this.product.attributes) {
                        this.product.attributes.forEach((attribute => {
                            this.addAttribute(attribute);
                        }));
                        this.product.variations.forEach((variation => {
                            this.attribute_terms = this.attribute_terms.concat(variation.attribute_terms);
                        }));
                        this.attribute_terms = this.attribute_terms.filter(((elem, pos, arr) => arr.map((a => a.term.title)).indexOf(elem.term.title) === pos));
                        this.addToCartForm.get("attributes").valueChanges.pipe(Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this)).subscribe((resp => {
                            this.matchedVariations = this.product.variations;
                            const selected = resp.filter((r => r.term !== null));
                            selected.forEach((element => {
                                this.matchedVariations = this.matchedVariations.filter((variation => {
                                    const match = variation.attribute_terms.find((t => t.category === element._id && t.term._id === element.term));
                                    if (match) {
                                        return variation;
                                    }
                                }));
                            }));
                            if (this.matchedVariations.length === 1) {
                                this.selectedVariation = this.matchedVariations[0];
                                this.addToCartForm.get("product_variation").setValue(this.selectedVariation._id);
                            }
                        }));
                    }
                    if (this.product.custom) {
                        this.product.custom.names.forEach((name => {
                            this.addName(name);
                        }));
                        this.product.custom.flags.forEach((flag => {
                            this.addFlag(flag);
                        }));
                    }
                    this.addToCartForm.get("product_variation").valueChanges.pipe(Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this)).subscribe((id => {
                        this.setSelectedVariation(id);
                    }));
                    this.addToCartForm.get("normal_custom").get("names").valueChanges.pipe(Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this)).subscribe((resp => {
                        const names = resp.filter((n => n.text));
                        this.addValidators(names.length ? true : false);
                    }));
                }
            }
            addValidators(add) {
                this.hasNames = add;
                this.addToCartForm.get("normal_custom").get("name_colour").setValidators(!add ? null : [ _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required ]);
                this.addToCartForm.get("normal_custom").get("name_colour").updateValueAndValidity({
                    onlySelf: true
                });
                this.addToCartForm.get("normal_custom").get("name_colour").markAsTouched({
                    onlySelf: true
                });
                this.addToCartForm.get("normal_custom").get("name_font").setValidators(!add ? null : [ _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required ]);
                this.addToCartForm.get("normal_custom").get("name_font").updateValueAndValidity({
                    onlySelf: true
                });
                this.addToCartForm.get("normal_custom").get("name_font").markAsTouched({
                    onlySelf: true
                });
            }
            initKitVariation(variation, term) {
                return this.fb.group({
                    _id: [ variation ? variation._id : null ],
                    price: [ variation ? variation.price : 0 ],
                    title: [ term ? term.title : null ],
                    qty: [ 0 ]
                });
            }
            addKitVariation(variation, attribute) {
                const term = variation.attribute_terms.find((t => t.category === attribute._id));
                const attributeControl = this.addToCartForm.get("attributes")["controls"].find((c => c.get("_id").value === attribute._id));
                const control = attributeControl.controls["kit_variations"];
                const addrCtrl = this.initKitVariation(variation, term.term);
                control.push(addrCtrl);
            }
            initAttribute(attribute) {
                const term = this.selectedVariation.attribute_terms.find((t => t.category === attribute._id));
                return this.fb.group({
                    _id: [ attribute ? attribute._id : null ],
                    title: [ attribute ? attribute.title : null ],
                    term: [ term.term._id ],
                    kit_variations: this.fb.array([])
                });
            }
            addAttribute(attribute) {
                const control = this.addToCartForm.controls["attributes"];
                const addrCtrl = this.initAttribute(attribute);
                control.push(addrCtrl);
            }
            initName(name) {
                return this.fb.group({
                    title: [ name ? name.title : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required ],
                    price: [ name ? name.price : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required ],
                    text: []
                });
            }
            clubKitQtyCheck() {
                const controls = this.addToCartForm.controls["attributes"].controls;
                const qty = controls.map((c => c.get("kit_variations").value.reduce(((sum, current) => sum + current.qty), 0))).reduce(((sum, current) => sum + current), 0);
                return qty > 9;
            }
            addName(name) {
                const parent = this.addToCartForm.controls["normal_custom"];
                const control = parent.controls["names"];
                const addrCtrl = this.initName(name);
                control.push(addrCtrl);
            }
            initFlag(flag) {
                return this.fb.group({
                    title: [ flag ? flag.title : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required ],
                    price: [ flag ? flag.price : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required ],
                    country: []
                });
            }
            addFlag(flag) {
                const parent = this.addToCartForm.controls["normal_custom"];
                const control = parent.controls["flags"];
                const addrCtrl = this.initFlag(flag);
                control.push(addrCtrl);
            }
            setSelectedVariation(id) {
                this.selectedVariation = this.product.variations.find((variation => variation._id === id));
            }
            changeImage(variation) {
                this.selectedVariation = variation;
                this.addToCartForm.get("product_variation").setValue(this.selectedVariation._id);
                this.selectedVariation.attribute_terms.forEach(((term, index) => {
                    this.addToCartForm.get("attributes")["controls"][index].get("term").setValue(term.term._id);
                }));
            }
            addToCart(data) {
                if (this.product.club_kit) {
                    const controls = this.addToCartForm.controls["attributes"].controls;
                    controls.forEach((c => {
                        c.get("kit_variations").value.forEach((v => {
                            if (v.qty > 0) {
                                this.cart.addCartReadyMade({
                                    product_variation: v._id,
                                    normal_custom: null,
                                    qty: v.qty
                                });
                            }
                        }));
                    }));
                    this.customise = false;
                    this.formSetup();
                } else {
                    this.cart.addCartReadyMade(data);
                    this.customise = false;
                    this.formSetup();
                }
            }
            resetCustomiser() {
                const parent = this.addToCartForm.controls["normal_custom"];
                const names = parent.controls["names"];
                names.reset();
            }
            showCustomiser(event) {
                event.preventDefault();
                this.customise = !this.customise;
                if (!this.customise) {
                    const height = this.addToCartForm.get("normal_custom").get("height").value;
                    const weight = this.addToCartForm.get("normal_custom").get("weight").value;
                    this.formSetup(height, weight);
                }
            }
            ngOnDestroy() {}
        };
        ProductDetailComponent.ctorParameters = () => [ {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["Store"]
        }, {
            type: _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
            type: _app_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]
        }, {
            type: _app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_7__["SeoService"]
        }, {
            type: _app_core_services_data_layer_service__WEBPACK_IMPORTED_MODULE_8__["DataLayerService"]
        }, {
            type: _app_core_services_jsonld_service__WEBPACK_IMPORTED_MODULE_10__["JsonldService"]
        } ];
        ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bx-product-detail",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-detail.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/products/product-detail/product-detail.component.html")).default,
            styles: [ tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-detail.component.scss */ "./src/app/products/product-detail/product-detail.component.scss")).default ]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["Store"], _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _app_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"], _app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_7__["SeoService"], _app_core_services_data_layer_service__WEBPACK_IMPORTED_MODULE_8__["DataLayerService"], _app_core_services_jsonld_service__WEBPACK_IMPORTED_MODULE_10__["JsonldService"] ]) ], ProductDetailComponent);
    },
    "./src/app/products/product-list/product-item.component.scss": 
    /*!*******************************************************************!*\
  !*** ./src/app/products/product-list/product-item.component.scss ***!
  \*******************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0LWxpc3QvcHJvZHVjdC1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */";
    },
    "./src/app/products/product-list/product-item.component.ts": 
    /*!*****************************************************************!*\
  !*** ./src/app/products/product-list/product-item.component.ts ***!
  \*****************************************************************/
    /*! exports provided: ProductItemComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "ProductItemComponent", (function() {
            return ProductItemComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _app_core_services_data_layer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/services/data-layer.service */ "./src/app/core/services/data-layer.service.ts");
        let ProductItemComponent = class ProductItemComponent {
            constructor(dataLayer) {
                this.dataLayer = dataLayer;
            }
            get mainImage() {
                return this.item.image ? this.item.image : this.item.images[0];
            }
            get price() {
                return this.item && this.item.variations.length ? this.item.variations[0].price : 0;
            }
            get sale_price() {
                return this.item && this.item.variations.length ? this.item.variations[0].sale_price : 0;
            }
            productClicked() {
                this.dataLayer.productClick(this.item, this.position);
            }
        };
        ProductItemComponent.ctorParameters = () => [ {
            type: _app_core_services_data_layer_service__WEBPACK_IMPORTED_MODULE_2__["DataLayerService"]
        } ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], ProductItemComponent.prototype, "item", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number) ], ProductItemComponent.prototype, "position", void 0);
        ProductItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bx-product-item, [bx-product-item]",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-item.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/products/product-list/product-item.component.html")).default,
            styles: [ tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-item.component.scss */ "./src/app/products/product-list/product-item.component.scss")).default ]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _app_core_services_data_layer_service__WEBPACK_IMPORTED_MODULE_2__["DataLayerService"] ]) ], ProductItemComponent);
    },
    "./src/app/products/product-list/product-list.component.scss": 
    /*!*******************************************************************!*\
  !*** ./src/app/products/product-list/product-list.component.scss ***!
  \*******************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = ":host {\n  display: block;\n  padding: 15px;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 576px) {\n  :host {\n    max-width: 100%;\n  }\n}\n@media (min-width: 768px) {\n  :host {\n    max-width: 100%;\n  }\n}\n@media (min-width: 992px) {\n  :host {\n    max-width: 100%;\n  }\n}\n@media (min-width: 1200px) {\n  :host {\n    max-width: 1440px;\n  }\n}\n@media (min-width: 576px) {\n  :host {\n    padding: 2rem 15px;\n  }\n}\n.page-layout {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.page-layout section {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n@media (min-width: 992px) {\n  .page-layout section {\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%;\n  }\n}\n.page-layout aside {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n@media (min-width: 992px) {\n  .page-layout aside {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%;\n  }\n}\n.page-layout aside.page-sidebar {\n  display: none;\n}\n@media (min-width: 992px) {\n  .page-layout aside.page-sidebar {\n    display: block;\n  }\n}\n.page-grid {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.page-grid .page-grid-item {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n@media (min-width: 576px) {\n  .page-grid .page-grid-item {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n  }\n}\n@media (min-width: 992px) {\n  .page-grid .page-grid-item {\n    -webkit-flex: 0 0 33.3333333333%;\n        -ms-flex: 0 0 33.3333333333%;\n            flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n}\n.bx-pagination {\n  margin-top: 1rem;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.bx-pagination .btn-page {\n  background-color: white;\n  color: #666;\n}\n.bx-pagination .btn-page.current {\n  background-color: #63b20b;\n  color: white;\n}\n.bx-pagination .pagination-next,\n.bx-pagination .pagination-previous {\n  background-color: #ededed;\n}\n.bx-pagination .link {\n  padding: 0.5rem 0.8rem;\n  display: block;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtbGlzdC9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxzY3NzXFxfcGFnZS1ncmlkLWxheW91dC5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1saXN0L0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9ub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfZ3JpZC5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtbGlzdC9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0LWxpc3QvQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUNWQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNERjtBQ29ESTtFSC9DSjtJQ0lNLGVEWGlCO0VFTXJCO0FBQ0Y7QUMrQ0k7RUgvQ0o7SUNJTSxlRFhpQjtFRVdyQjtBQUNGO0FDMENJO0VIL0NKO0lDSU0sZURYaUI7RUVnQnJCO0FBQ0Y7QUNxQ0k7RUgvQ0o7SUNJTSxpQkRYaUI7RUVxQnJCO0FBQ0Y7QUNnQ0k7RUgvQ0o7SUFNSSxrQkFBQTtFRWFGO0FBQ0Y7QUZWQTtFQ0FFLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsdUJBQUE7TUFBQSxtQkFBQTtVQUFBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDY0Y7QUZmRTtFQ0tBLGtCQUFBO0VBSUEsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNVRjtBQ2NJO0VIbkNGO0lDZUEscUJBQUE7UUFBQSxpQkFBQTtZQUFBLGFBQUE7SUFJQSxjQUFBO0VDT0E7QUFDRjtBRnJCRTtFQ0RBLGtCQUFBO0VBSUEsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNzQkY7QUNFSTtFSDdCRjtJQ1NBLHFCQUFBO1FBQUEsaUJBQUE7WUFBQSxhQUFBO0lBSUEsY0FBQTtFQ21CQTtBQUNGO0FGNUJJO0VBRUksYUFBQTtBRTZCUjtBQ1BJO0VIeEJBO0lBS0ksY0FBQTtFRThCTjtBQUNGO0FGekJBO0VDeEJFLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsdUJBQUE7TUFBQSxtQkFBQTtVQUFBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDcURGO0FGOUJFO0VDbkJBLGtCQUFBO0VBSUEsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNpREY7QUN6Qkk7RUhYRjtJQ1RBLHFCQUFBO1FBQUEsaUJBQUE7WUFBQSxhQUFBO0lBSUEsY0FBQTtFQzhDQTtBQUNGO0FDL0JJO0VIWEY7SUNUQSxnQ0FBQTtRQUFBLDRCQUFBO1lBQUEsd0JBQUE7SUFJQSx5QkFBQTtFQ29EQTtBQUNGO0FGbkNBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtBRXNDRjtBRnBDRTtFQUNFLHVCQUFBO0VBQ0EsV0kvRE87QUZxR1g7QUZyQ0k7RUFDRSx5QkloRUU7RUppRUYsWUFBQTtBRXVDTjtBRm5DRTs7RUFFRSx5QkkxRVE7QUYrR1o7QUZsQ0U7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FFb0NKIiwiZmlsZSI6InByb2plY3RzL2NsaWVudC9zcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zJztcclxuQGltcG9ydCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzJztcclxuQGltcG9ydCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fZ3JpZCc7XHJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcclxuICBzbTogMTAwJSxcclxuICBtZDogMTAwJSxcclxuICBsZzogMTAwJSxcclxuICB4bDogMTQ0MHB4XHJcbik7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBAaW5jbHVkZSBtYWtlLWNvbnRhaW5lcigpO1xyXG4gIEBpbmNsdWRlIG1ha2UtY29udGFpbmVyLW1heC13aWR0aHMoJGNvbnRhaW5lci1tYXgtd2lkdGhzKTtcclxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHNtKSB7XHJcbiAgICBwYWRkaW5nOiAycmVtIDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucGFnZS1sYXlvdXQge1xyXG4gIEBpbmNsdWRlIG1ha2Utcm93KCk7XHJcbiAgc2VjdGlvbiB7XHJcbiAgICBAaW5jbHVkZSBtYWtlLWNvbC1yZWFkeSgpO1xyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykge1xyXG4gICAgICBAaW5jbHVkZSBtYWtlLWNvbCg5KTtcclxuICAgIH1cclxuICB9XHJcbiAgYXNpZGUge1xyXG4gICAgQGluY2x1ZGUgbWFrZS1jb2wtcmVhZHkoKTtcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcclxuICAgICAgQGluY2x1ZGUgbWFrZS1jb2woMyk7XHJcbiAgICB9XHJcbiAgICAmLnBhZ2Utc2lkZWJhciB7XHJcbiAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoeHMpIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnBhZ2UtZ3JpZCB7XHJcbiAgQGluY2x1ZGUgbWFrZS1yb3coKTtcclxuICAucGFnZS1ncmlkLWl0ZW0ge1xyXG4gICAgQGluY2x1ZGUgbWFrZS1jb2wtcmVhZHkoKTtcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoc20pIHtcclxuICAgICAgQGluY2x1ZGUgbWFrZS1jb2woNik7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7XHJcbiAgICAgIEBpbmNsdWRlIG1ha2UtY29sKDQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy9QYWdpbmF0aW9uXHJcblxyXG4uYngtcGFnaW5hdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAuYnRuLXBhZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogJGRhcmtncmV5O1xyXG4gICAgJi5jdXJyZW50IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGFnaW5hdGlvbi1uZXh0LFxyXG4gIC5wYWdpbmF0aW9uLXByZXZpb3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGdyZXk7XHJcbiAgfVxyXG5cclxuICAubGluayB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcbiIsIi8vLyBHcmlkIHN5c3RlbVxuLy9cbi8vIEdlbmVyYXRlIHNlbWFudGljIGdyaWQgY29sdW1ucyB3aXRoIHRoZXNlIG1peGlucy5cblxuQG1peGluIG1ha2UtY29udGFpbmVyKCRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogJGd1dHRlciAvIDI7XG4gIHBhZGRpbmctbGVmdDogJGd1dHRlciAvIDI7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cblxuLy8gRm9yIGVhY2ggYnJlYWtwb2ludCwgZGVmaW5lIHRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBjb250YWluZXIgaW4gYSBtZWRpYSBxdWVyeVxuQG1peGluIG1ha2UtY29udGFpbmVyLW1heC13aWR0aHMoJG1heC13aWR0aHM6ICRjb250YWluZXItbWF4LXdpZHRocywgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAZWFjaCAkYnJlYWtwb2ludCwgJGNvbnRhaW5lci1tYXgtd2lkdGggaW4gJG1heC13aWR0aHMge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRicmVha3BvaW50cykge1xuICAgICAgbWF4LXdpZHRoOiAkY29udGFpbmVyLW1heC13aWR0aDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1ha2Utcm93KCRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1yaWdodDogLSRndXR0ZXIgLyAyO1xuICBtYXJnaW4tbGVmdDogLSRndXR0ZXIgLyAyO1xufVxuXG5AbWl4aW4gbWFrZS1jb2wtcmVhZHkoJGd1dHRlcjogJGdyaWQtZ3V0dGVyLXdpZHRoKSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gUHJldmVudCBjb2x1bW5zIGZyb20gYmVjb21pbmcgdG9vIG5hcnJvdyB3aGVuIGF0IHNtYWxsZXIgZ3JpZCB0aWVycyBieVxuICAvLyBhbHdheXMgc2V0dGluZyBgd2lkdGg6IDEwMCU7YC4gVGhpcyB3b3JrcyBiZWNhdXNlIHdlIHVzZSBgZmxleGAgdmFsdWVzXG4gIC8vIGxhdGVyIG9uIHRvIG92ZXJyaWRlIHRoaXMgaW5pdGlhbCB3aWR0aC5cbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6ICRndXR0ZXIgLyAyO1xuICBwYWRkaW5nLWxlZnQ6ICRndXR0ZXIgLyAyO1xufVxuXG5AbWl4aW4gbWFrZS1jb2woJHNpemUsICRjb2x1bW5zOiAkZ3JpZC1jb2x1bW5zKSB7XG4gIGZsZXg6IDAgMCBwZXJjZW50YWdlKCRzaXplIC8gJGNvbHVtbnMpO1xuICAvLyBBZGQgYSBgbWF4LXdpZHRoYCB0byBlbnN1cmUgY29udGVudCB3aXRoaW4gZWFjaCBjb2x1bW4gZG9lcyBub3QgYmxvdyBvdXRcbiAgLy8gdGhlIHdpZHRoIG9mIHRoZSBjb2x1bW4uIEFwcGxpZXMgdG8gSUUxMCsgYW5kIEZpcmVmb3guIENocm9tZSBhbmQgU2FmYXJpXG4gIC8vIGRvIG5vdCBhcHBlYXIgdG8gcmVxdWlyZSB0aGlzLlxuICBtYXgtd2lkdGg6IHBlcmNlbnRhZ2UoJHNpemUgLyAkY29sdW1ucyk7XG59XG5cbkBtaXhpbiBtYWtlLWNvbC1vZmZzZXQoJHNpemUsICRjb2x1bW5zOiAkZ3JpZC1jb2x1bW5zKSB7XG4gICRudW06ICRzaXplIC8gJGNvbHVtbnM7XG4gIG1hcmdpbi1sZWZ0OiBpZigkbnVtID09IDAsIDAsIHBlcmNlbnRhZ2UoJG51bSkpO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICA6aG9zdCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgOmhvc3Qge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIDpob3N0IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgOmhvc3Qge1xuICAgIG1heC13aWR0aDogMTQ0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgOmhvc3Qge1xuICAgIHBhZGRpbmc6IDJyZW0gMTVweDtcbiAgfVxufVxuXG4ucGFnZS1sYXlvdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cbi5wYWdlLWxheW91dCBzZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5wYWdlLWxheW91dCBzZWN0aW9uIHtcbiAgICBmbGV4OiAwIDAgNzUlO1xuICAgIG1heC13aWR0aDogNzUlO1xuICB9XG59XG4ucGFnZS1sYXlvdXQgYXNpZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnBhZ2UtbGF5b3V0IGFzaWRlIHtcbiAgICBmbGV4OiAwIDAgMjUlO1xuICAgIG1heC13aWR0aDogMjUlO1xuICB9XG59XG4ucGFnZS1sYXlvdXQgYXNpZGUucGFnZS1zaWRlYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAucGFnZS1sYXlvdXQgYXNpZGUucGFnZS1zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuXG4ucGFnZS1ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG4ucGFnZS1ncmlkIC5wYWdlLWdyaWQtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAucGFnZS1ncmlkIC5wYWdlLWdyaWQtaXRlbSB7XG4gICAgZmxleDogMCAwIDUwJTtcbiAgICBtYXgtd2lkdGg6IDUwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5wYWdlLWdyaWQgLnBhZ2UtZ3JpZC1pdGVtIHtcbiAgICBmbGV4OiAwIDAgMzMuMzMzMzMzMzMzMyU7XG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcbiAgfVxufVxuXG4uYngtcGFnaW5hdGlvbiB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYngtcGFnaW5hdGlvbiAuYnRuLXBhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICM2NjY7XG59XG4uYngtcGFnaW5hdGlvbiAuYnRuLXBhZ2UuY3VycmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2M2IyMGI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5ieC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLW5leHQsXG4uYngtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wcmV2aW91cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XG59XG4uYngtcGFnaW5hdGlvbiAubGluayB7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjhyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCIvL0NvbG9yc1xyXG4kYmxhY2s6ICMzNjM2MzY7XHJcbiR2ZXJ5bGlnaHRncmV5OiAjZjVmNWY1O1xyXG4kbGlnaHRncmV5OiAjZWRlZGVkO1xyXG4kbWlkZ3JleTogIzk5OTtcclxuJGRhcmtncmV5OiAjNjY2O1xyXG4kZ3JlZW46ICM2M2IyMGI7XHJcbiRyZWQ6ICNjZTA1MDU7XHJcbi8vRm9udHNcclxuJGRlZmF1bHRGb250OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuJGRpc3BsYXlGb250OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuIl19 */";
    },
    "./src/app/products/product-list/product-list.component.ts": 
    /*!*****************************************************************!*\
  !*** ./src/app/products/product-list/product-list.component.ts ***!
  \*****************************************************************/
    /*! exports provided: ProductListComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "ProductListComponent", (function() {
            return ProductListComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
        var _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/services/api.service */ "./src/app/core/services/api.service.ts");
        var _global_untilDestroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @global/untilDestroy */ "../global/untilDestroy/index.ts");
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
        var _app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/services/seo.service */ "./src/app/core/services/seo.service.ts");
        var _app_core_services_data_layer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/core/services/data-layer.service */ "./src/app/core/services/data-layer.service.ts");
        let ProductListComponent = class ProductListComponent {
            constructor(api, route, router, seo, dataLayer) {
                this.api = api;
                this.route = route;
                this.router = router;
                this.seo = seo;
                this.dataLayer = dataLayer;
                this.currentPage = 1;
                this.itemsPerPage = 24;
            }
            get pageCount() {
                return Math.ceil(this.total / this.itemsPerPage);
            }
            ngOnInit() {
                this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((params => {
                    this.category = `${this.route.snapshot.parent.url.toString()}/${params["catid"]}`;
                    return this.route.queryParams;
                })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((params => {
                    this.getPage(params["p"] || 1);
                })), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_4__["untilComponentDestroyed"])(this)).subscribe();
            }
            getPage(page) {
                this.products = this.api.find("product-display", {
                    $category: this.category,
                    type: "Variable",
                    $limit: this.itemsPerPage,
                    $skip: (page - 1) * this.itemsPerPage,
                    published: true,
                    $sort: {
                        createdAt: -1
                    }
                }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((resp => {
                    this.currentPage = page;
                    this.page_data = resp.page_data;
                    this.total = resp.total;
                    const section = resp.page_data.parent ? `${resp.page_data.parent.title}` : resp.page_data.title;
                    this.seo.setMetaAndLinks(resp.page_data.title, resp.page_data.seo, section, null, "product", this.currentPage > 1 ? true : false);
                    this.setParams();
                })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((resp => {
                    this.itemsLength = resp.data.length;
                    this.dataLayer.productList(resp.data, "Ready Made Product List");
                    return resp.data;
                })), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_4__["untilComponentDestroyed"])(this));
            }
            setParams() {
                const params = {};
                if (this.currentPage > 1) {
                    params.p = this.currentPage;
                }
                this.router.navigate([], {
                    queryParams: params
                });
            }
            ngOnDestroy() {}
        };
        ProductListComponent.ctorParameters = () => [ {
            type: _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
            type: _app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_6__["SeoService"]
        }, {
            type: _app_core_services_data_layer_service__WEBPACK_IMPORTED_MODULE_7__["DataLayerService"]
        } ];
        ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bx-product-list",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-list.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/products/product-list/product-list.component.html")).default,
            styles: [ tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-list.component.scss */ "./src/app/products/product-list/product-list.component.scss")).default ]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_6__["SeoService"], _app_core_services_data_layer_service__WEBPACK_IMPORTED_MODULE_7__["DataLayerService"] ]) ], ProductListComponent);
    },
    "./src/app/products/products-routing.module.ts": 
    /*!*****************************************************!*\
  !*** ./src/app/products/products-routing.module.ts ***!
  \*****************************************************/
    /*! exports provided: ProductsRoutingModule */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", (function() {
            return ProductsRoutingModule;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
        var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/products/product-list/product-list.component.ts");
        var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/products/product-detail/product-detail.component.ts");
        const routes = [ {
            path: "",
            redirectTo: "shorts-trunks",
            pathMatch: "full"
        }, {
            path: ":catid",
            component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"]
        }, {
            path: ":catid/:slug",
            component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailComponent"]
        } ];
        let ProductsRoutingModule = class ProductsRoutingModule {};
        ProductsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [ _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes) ],
            exports: [ _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"] ]
        }) ], ProductsRoutingModule);
    },
    "./src/app/products/products.module.ts": 
    /*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
    /*! exports provided: ProductsModule */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "ProductsModule", (function() {
            return ProductsModule;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
        var _app_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/material/material.module */ "./src/app/material/material.module.ts");
        var _app_shared_modules_card_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/modules/card/card.module */ "./src/app/shared/modules/card/card.module.ts");
        var _app_shared_modules_sidebar_nav_sidebar_nav_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/modules/sidebar-nav/sidebar-nav.module */ "./src/app/shared/modules/sidebar-nav/sidebar-nav.module.ts");
        var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
        var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/products/product-detail/product-detail.component.ts");
        var _product_list_product_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-list/product-item.component */ "./src/app/products/product-list/product-item.component.ts");
        var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/products/product-list/product-list.component.ts");
        var _products_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/products/products-routing.module.ts");
        let ProductsModule = class ProductsModule {};
        ProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [ _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _app_shared_modules_card_card_module__WEBPACK_IMPORTED_MODULE_4__["CardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_10__["ProductsRoutingModule"], _app_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _app_shared_modules_sidebar_nav_sidebar_nav_module__WEBPACK_IMPORTED_MODULE_5__["SidebarNavModule"] ],
            declarations: [ _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_9__["ProductListComponent"], _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailComponent"], _product_list_product_item_component__WEBPACK_IMPORTED_MODULE_8__["ProductItemComponent"] ],
            providers: []
        }) ], ProductsModule);
    }
} ]);