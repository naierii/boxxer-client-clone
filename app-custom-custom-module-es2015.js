(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-custom-custom-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/custom/custom-detail/custom-detail.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/custom/custom-detail/custom-detail.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"product-wrapper\">\r\n  <article *ngIf=\"product$ | async as product\">\r\n    <div class=\"product\">\r\n      <div class=\"image\">\r\n        <div bxImageWrapper [aspect_ratio]=\"ratio | ratio\">\r\n          <img\r\n            alt=\"Boxxerworld {{ product.title }}\"\r\n            [bxLazysizes]=\"product.image.key\"\r\n            [crop_ratio]=\"ratio | ratio\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"content\" *ngIf=\"product\">\r\n        <h1>{{ product?.title }}</h1>\r\n        <h4\r\n          class=\"grey\"\r\n          prefix=\"From \"\r\n          [price]=\"product.price\"\r\n          [sale_price]=\"product.sale_price\"\r\n          bx-price-sale\r\n        ></h4>\r\n        <button\r\n          [routerLink]=\"['/customiser', product._id]\"\r\n          class=\"btn btn-success\"\r\n        >\r\n          Customise\r\n        </button>\r\n        <span [innerHTML]=\"product?.description\"></span>\r\n      </div>\r\n    </div>\r\n  </article>\r\n</div>\r\n<ng-container *ngIf=\"ps.isBrowser\">\r\n  <section *ngIf=\"(galleries$ | async)?.length != 0\" class=\"inspriation\">\r\n    <div class=\"intro-header\">\r\n      <h2>Inspiration</h2>\r\n      <p>Get ideas from other customers orders.</p>\r\n      <button\r\n        class=\"btn btn-success view-more\"\r\n        [routerLink]=\"[gallerySlug]\"\r\n        [queryParams]=\"{ product: product._id }\"\r\n        *ngIf=\"product$ | async as product\"\r\n      >\r\n        View more\r\n      </button>\r\n    </div>\r\n    <div\r\n      class=\"flickity-wrapper\"\r\n      [bxFlkty]=\"{\r\n        cellAlign: 'left',\r\n        percentPosition: true,\r\n        imagesLoaded: true,\r\n        wrapAround: true,\r\n        pageDots: false\r\n      }\"\r\n    >\r\n      <div\r\n        [bxFlktyCell]\r\n        class=\"carousel-cell\"\r\n        *ngFor=\"let item of galleries$ | async\"\r\n      >\r\n        <a\r\n          [routerLink]=\"\r\n            ['/'].concat(item.category.slug.split('/')).concat(item.slug)\r\n          \"\r\n          bxCard\r\n          *ngIf=\"checkImage(item.images) as image\"\r\n        >\r\n          <div bxImageWrapper [aspect_ratio]=\"1\">\r\n            <img [bxLazysizes]=\"image\" [crop_ratio]=\"1\" [sizes]=\"'[320, 480, 640]'\" />\r\n          </div>\r\n          <div bxCardContent>\r\n            <h2 bxCardTitle>{{ item.product.title }} {{ item.title }}</h2>\r\n          </div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</ng-container>\r\n<ngx-json-ld [json]=\"jsonld.schema\"></ngx-json-ld>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/custom/custom-gallery/custom-gallery.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/custom/custom-gallery/custom-gallery.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\r\n  <section\r\n    *ngIf=\"(galleries$ | async)?.length != 0 && !loading\"\r\n    class=\"inspriation\"\r\n  >\r\n    <div class=\"intro-header\">\r\n      <h2>Get Inspired</h2>\r\n      <p>Cool stuff we have made for other fighters.</p>\r\n    </div>\r\n    <div\r\n      class=\"flickity-wrapper\"\r\n      [bxFlkty]=\"{\r\n        cellAlign: 'left',\r\n        percentPosition: true,\r\n        imagesLoaded: true,\r\n        wrapAround: true,\r\n        pageDots: false\r\n      }\"\r\n    >\r\n      <div\r\n        [bxFlktyCell]\r\n        class=\"carousel-cell\"\r\n        *ngFor=\"let item of galleries$ | async\"\r\n      >\r\n        <div\r\n          bxCard\r\n          *ngIf=\"item.list_image\"\r\n          (click)=\"galleryControl.getImages([item])\"\r\n        >\r\n          <div bxImageWrapper [aspect_ratio]=\"1\">\r\n            <img [bxLazysizes]=\"item.list_image.key\" [crop_ratio]=\"1\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <a [routerLink]=\"[]\" fragment=\"templates\" class=\"view-more\">\r\n      <h4>View templates</h4>\r\n      <fa-icon class=\"icon\" [icon]=\"['fal', 'chevron-down']\"></fa-icon>\r\n    </a>\r\n  </section>\r\n</ng-container>\r\n<bx-image-gallery-controller #galleryControl></bx-image-gallery-controller>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/custom/custom-list/custom-item.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/custom/custom-list/custom-item.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a [routerLink]=\"[item.slug]\" bxCard (click)=\"productClicked()\">\r\n  <div bxImageWrapper [aspect_ratio]=\"item.category.aspect_ratio | ratio\">\r\n    <img\r\n      [alt]=\"imageTitle()\"\r\n      [bxLazysizes]=\"item.image.key\"\r\n      [crop_ratio]=\"item.category.aspect_ratio | ratio\"\r\n      [sizes]=\"'[320, 480, 640]'\"\r\n      *ngIf=\"item.image && item.image.key\"\r\n    />\r\n  </div>\r\n  <div bxCardContent>\r\n    <h2 bxCardTitle>{{ item.title }}</h2>\r\n  </div>\r\n  <div bxCardFooter>\r\n    <span\r\n      prefix=\"From \"\r\n      [price]=\"item.price\"\r\n      [sale_price]=\"item.sale_price\"\r\n      bx-price-sale\r\n    ></span>\r\n  </div>\r\n</a>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/custom/custom-list/custom-list.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/custom/custom-list/custom-list.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-layout\">\r\n  <aside class=\"page-sidebar\">\r\n    <bx-sidebar-nav type=\"shop\"></bx-sidebar-nav>\r\n    <bx-adverts></bx-adverts>\r\n  </aside>\r\n  <section class=\"page-content\">\r\n    <bx-page-header>\r\n      <div class=\"page-header\">\r\n        <h1>{{page_data?.title}}</h1>\r\n      </div>\r\n      <div class=\"sort\">\r\n        <button class=\"btn btn-sort\" [matMenuTriggerFor]=\"sortby\">Sort By{{getSortTitle()}}</button>\r\n      </div>\r\n    </bx-page-header>\r\n    <bx-custom-gallery [page_data]=\"page_data\" *ngIf=\"page_data\"></bx-custom-gallery>\r\n    <div id=\"templates\" class=\"page-grid\">\r\n      <div class=\"page-grid-item\" bx-custom-item\r\n        *ngFor=\"let item of products$ | async | paginate: { id: 'server', itemsPerPage: itemsPerPage, currentPage: currentPage, totalItems: total };trackBy: trackByFn;let i = index\"\r\n        [item]=\"item\" [position]=\"i\"></div>\r\n    </div>\r\n    <pagination-template class=\"bx-pagination\" #p=\"paginationApi\" (pageChange)=\"getPage($event)\" id=\"server\"\r\n      *ngIf=\"pageCount > 1\">\r\n      <div class=\"btn-page pagination-previous\" [class.disabled]=\"p.isFirstPage()\">\r\n        <a class=\"link\" *ngIf=\"!p.isFirstPage()\" (click)=\"p.previous()\">\r\n          < </a> </div> <div class=\"btn-page\" *ngFor=\"let page of p.pages\"\r\n            [class.current]=\"p.getCurrent() === page.value\">\r\n            <a class=\"link\" [routerLink]=\"[]\" [queryParams]=\"{p: page.value}\" (click)=\"p.setCurrent(page.value)\"\r\n              *ngIf=\"p.getCurrent() !== page.value\">\r\n              <span>{{ page.label }}</span>\r\n            </a>\r\n            <div class=\"link\" *ngIf=\"p.getCurrent() === page.value\">\r\n              <span>{{ page.label }}</span>\r\n            </div>\r\n      </div>\r\n      <div class=\"btn-page pagination-next\" [class.disabled]=\"p.isLastPage()\">\r\n        <a class=\"link\" *ngIf=\"!p.isLastPage()\" (click)=\"p.next()\"> > </a>\r\n      </div>\r\n    </pagination-template>\r\n    <bx-page-info *ngIf=\"page_data?.description\">\r\n      <h3>Custom {{page_data?.title}} Info</h3>\r\n      <span [innerHTML]=\"page_data.description\"></span>\r\n    </bx-page-info>\r\n  </section>\r\n</div>\r\n<mat-menu #sortby=\"matMenu\" yPosition=\"below\">\r\n  <button *ngFor=\"let option of sortOptions\" mat-menu-item (click)=\"filterProducts(option)\">\r\n    <span>{{option.title}}</span>\r\n  </button>\r\n</mat-menu>\r\n");

/***/ }),

/***/ "./src/app/custom/custom-detail/custom-detail.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/custom/custom-detail/custom-detail.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n\n.product-wrapper {\n  background-color: white;\n}\n\narticle {\n  padding: 15px;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 576px) {\n  article {\n    max-width: 100%;\n  }\n}\n\n@media (min-width: 768px) {\n  article {\n    max-width: 100%;\n  }\n}\n\n@media (min-width: 992px) {\n  article {\n    max-width: 100%;\n  }\n}\n\n@media (min-width: 1200px) {\n  article {\n    max-width: 1100px;\n  }\n}\n\n@media (min-width: 576px) {\n  article {\n    padding: 2rem 15px;\n  }\n}\n\n.product {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.image {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n@media (min-width: 576px) {\n  .image {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n  }\n}\n\n.content {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-top: 1rem;\n}\n\n@media (min-width: 576px) {\n  .content {\n    margin-top: 0;\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n  }\n}\n\n@media (min-width: 992px) {\n  .content {\n    -webkit-flex: 0 0 41.6666666667%;\n        -ms-flex: 0 0 41.6666666667%;\n            flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n}\n\n.content h1 {\n  margin: 0;\n}\n\n.content h4.price {\n  margin-bottom: 10px;\n}\n\n.flickity-wrapper {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n::ng-deep .flickity-wrapper.flickity-enabled {\n  display: block;\n}\n\n::ng-deep .flickity-enabled {\n  position: relative;\n  margin: 0 60px;\n}\n\n::ng-deep .flickity-enabled:focus {\n  outline: none;\n}\n\n::ng-deep .flickity-viewport {\n  overflow: hidden;\n  position: relative;\n  max-width: 100%;\n  height: 100%;\n}\n\n::ng-deep .flickity-slider {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n/* draggable */\n\n::ng-deep .flickity-enabled.is-draggable {\n  -webkit-tap-highlight-color: transparent;\n  tap-highlight-color: transparent;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n::ng-deep .flickity-enabled.is-draggable .flickity-viewport {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n::ng-deep .flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\n/* ---- flickity-button ---- */\n\n::ng-deep .flickity-button {\n  position: absolute;\n  background: rgba(255, 255, 255, 0.75);\n  border: none;\n  color: #333;\n  -moz-appearance: none;\n       appearance: none;\n  -webkit-appearance: none;\n}\n\n::ng-deep .flickity-button:hover {\n  background: white;\n  cursor: pointer;\n}\n\n::ng-deep .flickity-button:focus {\n  outline: none;\n  box-shadow: 0 0 0 5px #19f;\n}\n\n::ng-deep .flickity-button:active {\n  opacity: 0.6;\n}\n\n::ng-deep .flickity-button:disabled {\n  opacity: 0.3;\n  cursor: auto;\n  /* prevent disabled button from capturing pointer up event. #716 */\n  pointer-events: none;\n}\n\n::ng-deep .flickity-button-icon {\n  fill: #333;\n}\n\n/* ---- previous/next buttons ---- */\n\n::ng-deep .flickity-prev-next-button {\n  top: 50%;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  /* vertically center */\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n::ng-deep .flickity-prev-next-button.previous {\n  left: -50px;\n}\n\n::ng-deep .flickity-prev-next-button.next {\n  right: -50px;\n}\n\n::ng-deep .flickity-prev-next-button .flickity-button-icon {\n  position: absolute;\n  left: 20%;\n  top: 20%;\n  width: 60%;\n  height: 60%;\n}\n\n/* right to left */\n\n.flickity-rtl .flickity-prev-next-button.previous {\n  left: auto;\n  right: 10px;\n}\n\n.flickity-rtl .flickity-prev-next-button.next {\n  right: auto;\n  left: 10px;\n}\n\n/* ---- page dots ---- */\n\n::ng-deep .flickity-page-dots {\n  position: absolute;\n  width: 100%;\n  bottom: -25px;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  text-align: center;\n  line-height: 1;\n}\n\n::ng-deep .flickity-page-dots.dot {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 0 8px;\n  background: #333;\n  border-radius: 50%;\n  opacity: 0.25;\n  cursor: pointer;\n}\n\n::ng-deep .flickity-page-dots.dot.is-selected {\n  opacity: 1;\n}\n\n.flickity-rtl .flickity-page-dots {\n  direction: rtl;\n}\n\n.intro-header {\n  text-align: center;\n  margin: 20px 0;\n}\n\n.intro-header h2,\n.intro-header p {\n  margin: 0;\n}\n\n.inspriation {\n  padding-bottom: 2rem;\n}\n\n.gallery:not(.flickity-enabled) {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.view-more {\n  margin: 0.5rem 0;\n  width: auto;\n}\n\n.carousel-cell {\n  width: 100%;\n  padding: 0 15px;\n}\n\n@media (min-width: 576px) {\n  .carousel-cell {\n    width: 50%;\n  }\n}\n\n@media (min-width: 768px) {\n  .carousel-cell {\n    width: 33.33333%;\n  }\n}\n\n@media (min-width: 992px) {\n  .carousel-cell {\n    width: 25%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbS9jdXN0b20tZGV0YWlsL0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXHNjc3NcXF9wcm9kdWN0LWxheW91dC5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9tL2N1c3RvbS1kZXRhaWwvY3VzdG9tLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbS9jdXN0b20tZGV0YWlsL0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9ub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfZ3JpZC5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9tL2N1c3RvbS1kZXRhaWwvQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL25vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxtaXhpbnNcXF9icmVha3BvaW50cy5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9tL2N1c3RvbS1kZXRhaWwvQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcc2Nzc1xcX2ZsaWNraXR5LXN0eWxlLnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b20vY3VzdG9tLWRldGFpbC9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxhcHBcXGN1c3RvbVxcY3VzdG9tLWRldGFpbFxcY3VzdG9tLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQTtFQUNFLGNBQUE7QUNYRjs7QURjQTtFQUNFLHVCQUFBO0FDWEY7O0FEY0E7RUFDRSxhQUFBO0VFaEJBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRE1GOztBRTZDSTtFSHhDSjtJRUhNLGVGWmlCO0VDY3JCO0FBQ0Y7O0FFd0NJO0VIeENKO0lFSE0sZUZaaUI7RUNtQnJCO0FBQ0Y7O0FFbUNJO0VIeENKO0lFSE0sZUZaaUI7RUN3QnJCO0FBQ0Y7O0FFOEJJO0VIeENKO0lFSE0saUJGWmlCO0VDNkJyQjtBQUNGOztBRXlCSTtFSHhDSjtJQUtJLGtCQUFBO0VDY0Y7QUFDRjs7QURYQTtFRU5FLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsdUJBQUE7TUFBQSxtQkFBQTtVQUFBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FEcUJGOztBRGRBO0VFSEUsa0JBQUE7RUFJQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRGtCRjs7QUVNSTtFSDNCSjtJRU9FLHFCQUFBO1FBQUEsaUJBQUE7WUFBQSxhQUFBO0lBSUEsY0FBQTtFRGVBO0FBQ0Y7O0FEcEJBO0VFVkUsa0JBQUE7RUFJQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFRk1BLGdCQUFBO0FDMEJGOztBRVJJO0VIcEJKO0lBSUksYUFBQTtJRUpGLHFCQUFBO1FBQUEsaUJBQUE7WUFBQSxhQUFBO0lBSUEsY0FBQTtFRDhCQTtBQUNGOztBRWZJO0VIcEJKO0lFQUUsZ0NBQUE7UUFBQSw0QkFBQTtZQUFBLHdCQUFBO0lBSUEseUJBQUE7RURvQ0E7QUFDRjs7QUQvQkU7RUFDRSxTQUFBO0FDaUNKOztBRC9CRTtFQUNFLG1CQUFBO0FDaUNKOztBR3ZGQTtFQUNFLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0FIMEZGOztBR3pGRTtFQUNFLGNBQUE7QUgyRko7O0FHdkZBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FIMEZGOztBR3pGRTtFQUNFLGFBQUE7QUgyRko7O0FHdkZBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FIMEZGOztBR3ZGQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUgwRkY7O0FHdkZBLGNBQUE7O0FBRUE7RUFDRSx3Q0FBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUh5RkY7O0FHeEZFO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBSDBGSjs7QUd4RkU7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0FIMEZKOztBR3RGQSw4QkFBQTs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO09BQUEsZ0JBQUE7RUFDQSx3QkFBQTtBSHdGRjs7QUd2RkU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUh5Rko7O0FHdkZFO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0FIeUZKOztBR3ZGRTtFQUNFLFlBQUE7QUh5Rko7O0FHdkZFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrRUFBQTtFQUNBLG9CQUFBO0FIeUZKOztBR3JGQTtFQUNFLFVBQUE7QUh3RkY7O0FHckZBLG9DQUFBOztBQUVBO0VBQ0UsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO01BQUEsK0JBQUE7VUFBQSwyQkFBQTtBSHVGRjs7QUd0RkU7RUFDRSxXQUFBO0FId0ZKOztBR3RGRTtFQUNFLFlBQUE7QUh3Rko7O0FHdEZFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FId0ZKOztBR3BGQSxrQkFBQTs7QUFDQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FIdUZGOztBR3JGQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FId0ZGOztBR3JGQSx3QkFBQTs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FIdUZGOztBR3RGRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FId0ZKOztBR3ZGSTtFQUNFLFVBQUE7QUh5Rk47O0FHcEZBO0VBQ0UsY0FBQTtBSHVGRjs7QUk3TkE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUpnT0Y7O0FJL05FOztFQUVFLFNBQUE7QUppT0o7O0FJN05BO0VBQ0Usb0JBQUE7QUpnT0Y7O0FJN05BO0VBQ0UscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7QUpnT0Y7O0FJN05BO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FKZ09GOztBSTdOQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FKZ09GOztBRW5NSTtFRS9CSjtJQUlJLFVBQUE7RUprT0Y7QUFDRjs7QUV4TUk7RUUvQko7SUFPSSxnQkFBQTtFSm9PRjtBQUNGOztBRTdNSTtFRS9CSjtJQVVJLFVBQUE7RUpzT0Y7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b20vY3VzdG9tLWRldGFpbC9jdXN0b20tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucyc7XHJcbkBpbXBvcnQgJ25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICdub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cyc7XHJcbkBpbXBvcnQgJ25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2dyaWQnO1xyXG5cclxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXHJcbiAgc206IDEwMCUsXHJcbiAgbWQ6IDEwMCUsXHJcbiAgbGc6IDEwMCUsXHJcbiAgeGw6IDExMDBweFxyXG4pO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucHJvZHVjdC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuYXJ0aWNsZSB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBAaW5jbHVkZSBtYWtlLWNvbnRhaW5lcigpO1xyXG4gIEBpbmNsdWRlIG1ha2UtY29udGFpbmVyLW1heC13aWR0aHMoJGNvbnRhaW5lci1tYXgtd2lkdGhzKTtcclxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHNtKSB7XHJcbiAgICBwYWRkaW5nOiAycmVtIDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvZHVjdCB7XHJcbiAgQGluY2x1ZGUgbWFrZS1yb3coKTtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICBAaW5jbHVkZSBtYWtlLWNvbC1yZWFkeSgpO1xyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoc20pIHtcclxuICAgIEBpbmNsdWRlIG1ha2UtY29sKDYpO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIEBpbmNsdWRlIG1ha2UtY29sLXJlYWR5KCk7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHNtKSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgQGluY2x1ZGUgbWFrZS1jb2woNik7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcclxuICAgIEBpbmNsdWRlIG1ha2UtY29sKDUpO1xyXG4gIH1cclxuICBoMSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIGg0LnByaWNlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wcm9kdWN0LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuYXJ0aWNsZSB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgYXJ0aWNsZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgYXJ0aWNsZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgYXJ0aWNsZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIGFydGljbGUge1xuICAgIG1heC13aWR0aDogMTEwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgYXJ0aWNsZSB7XG4gICAgcGFkZGluZzogMnJlbSAxNXB4O1xuICB9XG59XG5cbi5wcm9kdWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG5cbi5pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuaW1hZ2Uge1xuICAgIGZsZXg6IDAgMCA1MCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gIH1cbn1cblxuLmNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgZmxleDogMCAwIDUwJTtcbiAgICBtYXgtd2lkdGg6IDUwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb250ZW50IHtcbiAgICBmbGV4OiAwIDAgNDEuNjY2NjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiA0MS42NjY2NjY2NjY3JTtcbiAgfVxufVxuLmNvbnRlbnQgaDEge1xuICBtYXJnaW46IDA7XG59XG4uY29udGVudCBoNC5wcmljZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5mbGlja2l0eS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbjo6bmctZGVlcCAuZmxpY2tpdHktd3JhcHBlci5mbGlja2l0eS1lbmFibGVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbjo6bmctZGVlcCAuZmxpY2tpdHktZW5hYmxlZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIDYwcHg7XG59XG46Om5nLWRlZXAgLmZsaWNraXR5LWVuYWJsZWQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG46Om5nLWRlZXAgLmZsaWNraXR5LXZpZXdwb3J0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5mbGlja2l0eS1zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qIGRyYWdnYWJsZSAqL1xuOjpuZy1kZWVwIC5mbGlja2l0eS1lbmFibGVkLmlzLWRyYWdnYWJsZSB7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuOjpuZy1kZWVwIC5mbGlja2l0eS1lbmFibGVkLmlzLWRyYWdnYWJsZSAuZmxpY2tpdHktdmlld3BvcnQge1xuICBjdXJzb3I6IG1vdmU7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xuICBjdXJzb3I6IGdyYWI7XG59XG46Om5nLWRlZXAgLmZsaWNraXR5LWVuYWJsZWQuaXMtZHJhZ2dhYmxlIC5mbGlja2l0eS12aWV3cG9ydC5pcy1wb2ludGVyLWRvd24ge1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XG4gIGN1cnNvcjogZ3JhYmJpbmc7XG59XG5cbi8qIC0tLS0gZmxpY2tpdHktYnV0dG9uIC0tLS0gKi9cbjo6bmctZGVlcCAuZmxpY2tpdHktYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMzMzO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG46Om5nLWRlZXAgLmZsaWNraXR5LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46Om5nLWRlZXAgLmZsaWNraXR5LWJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDVweCAjMTlmO1xufVxuOjpuZy1kZWVwIC5mbGlja2l0eS1idXR0b246YWN0aXZlIHtcbiAgb3BhY2l0eTogMC42O1xufVxuOjpuZy1kZWVwIC5mbGlja2l0eS1idXR0b246ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjM7XG4gIGN1cnNvcjogYXV0bztcbiAgLyogcHJldmVudCBkaXNhYmxlZCBidXR0b24gZnJvbSBjYXB0dXJpbmcgcG9pbnRlciB1cCBldmVudC4gIzcxNiAqL1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuOjpuZy1kZWVwIC5mbGlja2l0eS1idXR0b24taWNvbiB7XG4gIGZpbGw6ICMzMzM7XG59XG5cbi8qIC0tLS0gcHJldmlvdXMvbmV4dCBidXR0b25zIC0tLS0gKi9cbjo6bmctZGVlcCAuZmxpY2tpdHktcHJldi1uZXh0LWJ1dHRvbiB7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC8qIHZlcnRpY2FsbHkgY2VudGVyICovXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbjo6bmctZGVlcCAuZmxpY2tpdHktcHJldi1uZXh0LWJ1dHRvbi5wcmV2aW91cyB7XG4gIGxlZnQ6IC01MHB4O1xufVxuOjpuZy1kZWVwIC5mbGlja2l0eS1wcmV2LW5leHQtYnV0dG9uLm5leHQge1xuICByaWdodDogLTUwcHg7XG59XG46Om5nLWRlZXAgLmZsaWNraXR5LXByZXYtbmV4dC1idXR0b24gLmZsaWNraXR5LWJ1dHRvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMCU7XG4gIHRvcDogMjAlO1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDYwJTtcbn1cblxuLyogcmlnaHQgdG8gbGVmdCAqL1xuLmZsaWNraXR5LXJ0bCAuZmxpY2tpdHktcHJldi1uZXh0LWJ1dHRvbi5wcmV2aW91cyB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4uZmxpY2tpdHktcnRsIC5mbGlja2l0eS1wcmV2LW5leHQtYnV0dG9uLm5leHQge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogMTBweDtcbn1cblxuLyogLS0tLSBwYWdlIGRvdHMgLS0tLSAqL1xuOjpuZy1kZWVwIC5mbGlja2l0eS1wYWdlLWRvdHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IC0yNXB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG46Om5nLWRlZXAgLmZsaWNraXR5LXBhZ2UtZG90cy5kb3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIG1hcmdpbjogMCA4cHg7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3BhY2l0eTogMC4yNTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOjpuZy1kZWVwIC5mbGlja2l0eS1wYWdlLWRvdHMuZG90LmlzLXNlbGVjdGVkIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmZsaWNraXR5LXJ0bCAuZmxpY2tpdHktcGFnZS1kb3RzIHtcbiAgZGlyZWN0aW9uOiBydGw7XG59XG5cbi5pbnRyby1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuLmludHJvLWhlYWRlciBoMixcbi5pbnRyby1oZWFkZXIgcCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmluc3ByaWF0aW9uIHtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG59XG5cbi5nYWxsZXJ5Om5vdCguZmxpY2tpdHktZW5hYmxlZCkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udmlldy1tb3JlIHtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5jYXJvdXNlbC1jZWxsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuY2Fyb3VzZWwtY2VsbCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJvdXNlbC1jZWxsIHtcbiAgICB3aWR0aDogMzMuMzMzMzMlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNhcm91c2VsLWNlbGwge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbn0iLCIvLy8gR3JpZCBzeXN0ZW1cbi8vXG4vLyBHZW5lcmF0ZSBzZW1hbnRpYyBncmlkIGNvbHVtbnMgd2l0aCB0aGVzZSBtaXhpbnMuXG5cbkBtaXhpbiBtYWtlLWNvbnRhaW5lcigkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6ICRndXR0ZXIgLyAyO1xuICBwYWRkaW5nLWxlZnQ6ICRndXR0ZXIgLyAyO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG5cbi8vIEZvciBlYWNoIGJyZWFrcG9pbnQsIGRlZmluZSB0aGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgY29udGFpbmVyIGluIGEgbWVkaWEgcXVlcnlcbkBtaXhpbiBtYWtlLWNvbnRhaW5lci1tYXgtd2lkdGhzKCRtYXgtd2lkdGhzOiAkY29udGFpbmVyLW1heC13aWR0aHMsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQGVhY2ggJGJyZWFrcG9pbnQsICRjb250YWluZXItbWF4LXdpZHRoIGluICRtYXgtd2lkdGhzIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50LCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIG1heC13aWR0aDogJGNvbnRhaW5lci1tYXgtd2lkdGg7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYWtlLXJvdygkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tcmlnaHQ6IC0kZ3V0dGVyIC8gMjtcbiAgbWFyZ2luLWxlZnQ6IC0kZ3V0dGVyIC8gMjtcbn1cblxuQG1peGluIG1ha2UtY29sLXJlYWR5KCRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vIFByZXZlbnQgY29sdW1ucyBmcm9tIGJlY29taW5nIHRvbyBuYXJyb3cgd2hlbiBhdCBzbWFsbGVyIGdyaWQgdGllcnMgYnlcbiAgLy8gYWx3YXlzIHNldHRpbmcgYHdpZHRoOiAxMDAlO2AuIFRoaXMgd29ya3MgYmVjYXVzZSB3ZSB1c2UgYGZsZXhgIHZhbHVlc1xuICAvLyBsYXRlciBvbiB0byBvdmVycmlkZSB0aGlzIGluaXRpYWwgd2lkdGguXG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAkZ3V0dGVyIC8gMjtcbiAgcGFkZGluZy1sZWZ0OiAkZ3V0dGVyIC8gMjtcbn1cblxuQG1peGluIG1ha2UtY29sKCRzaXplLCAkY29sdW1uczogJGdyaWQtY29sdW1ucykge1xuICBmbGV4OiAwIDAgcGVyY2VudGFnZSgkc2l6ZSAvICRjb2x1bW5zKTtcbiAgLy8gQWRkIGEgYG1heC13aWR0aGAgdG8gZW5zdXJlIGNvbnRlbnQgd2l0aGluIGVhY2ggY29sdW1uIGRvZXMgbm90IGJsb3cgb3V0XG4gIC8vIHRoZSB3aWR0aCBvZiB0aGUgY29sdW1uLiBBcHBsaWVzIHRvIElFMTArIGFuZCBGaXJlZm94LiBDaHJvbWUgYW5kIFNhZmFyaVxuICAvLyBkbyBub3QgYXBwZWFyIHRvIHJlcXVpcmUgdGhpcy5cbiAgbWF4LXdpZHRoOiBwZXJjZW50YWdlKCRzaXplIC8gJGNvbHVtbnMpO1xufVxuXG5AbWl4aW4gbWFrZS1jb2wtb2Zmc2V0KCRzaXplLCAkY29sdW1uczogJGdyaWQtY29sdW1ucykge1xuICAkbnVtOiAkc2l6ZSAvICRjb2x1bW5zO1xuICBtYXJnaW4tbGVmdDogaWYoJG51bSA9PSAwLCAwLCBwZXJjZW50YWdlKCRudW0pKTtcbn1cbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIiwiLmZsaWNraXR5LXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgOjpuZy1kZWVwICYuZmxpY2tpdHktZW5hYmxlZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZmxpY2tpdHktZW5hYmxlZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMCA2MHB4O1xyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZmxpY2tpdHktdmlld3BvcnQge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZmxpY2tpdHktc2xpZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vKiBkcmFnZ2FibGUgKi9cclxuXHJcbjo6bmctZGVlcCAuZmxpY2tpdHktZW5hYmxlZC5pcy1kcmFnZ2FibGUge1xyXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAuZmxpY2tpdHktdmlld3BvcnQge1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XHJcbiAgICBjdXJzb3I6IGdyYWI7XHJcbiAgfVxyXG4gIC5mbGlja2l0eS12aWV3cG9ydC5pcy1wb2ludGVyLWRvd24ge1xyXG4gICAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xyXG4gICAgY3Vyc29yOiBncmFiYmluZztcclxuICB9XHJcbn1cclxuXHJcbi8qIC0tLS0gZmxpY2tpdHktYnV0dG9uIC0tLS0gKi9cclxuXHJcbjo6bmctZGVlcCAuZmxpY2tpdHktYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogaHNsYSgwLCAwJSwgMTAwJSwgMC43NSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDVweCAjMTlmO1xyXG4gIH1cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgfVxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gICAgY3Vyc29yOiBhdXRvO1xyXG4gICAgLyogcHJldmVudCBkaXNhYmxlZCBidXR0b24gZnJvbSBjYXB0dXJpbmcgcG9pbnRlciB1cCBldmVudC4gIzcxNiAqL1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmZsaWNraXR5LWJ1dHRvbi1pY29uIHtcclxuICBmaWxsOiAjMzMzO1xyXG59XHJcblxyXG4vKiAtLS0tIHByZXZpb3VzL25leHQgYnV0dG9ucyAtLS0tICovXHJcblxyXG46Om5nLWRlZXAgLmZsaWNraXR5LXByZXYtbmV4dC1idXR0b24ge1xyXG4gIHRvcDogNTAlO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLyogdmVydGljYWxseSBjZW50ZXIgKi9cclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgJi5wcmV2aW91cyB7XHJcbiAgICBsZWZ0OiAtNTBweDtcclxuICB9XHJcbiAgJi5uZXh0IHtcclxuICAgIHJpZ2h0OiAtNTBweDtcclxuICB9XHJcbiAgLmZsaWNraXR5LWJ1dHRvbi1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDIwJTtcclxuICAgIHRvcDogMjAlO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gIH1cclxufVxyXG5cclxuLyogcmlnaHQgdG8gbGVmdCAqL1xyXG4uZmxpY2tpdHktcnRsIC5mbGlja2l0eS1wcmV2LW5leHQtYnV0dG9uLnByZXZpb3VzIHtcclxuICBsZWZ0OiBhdXRvO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG59XHJcbi5mbGlja2l0eS1ydGwgLmZsaWNraXR5LXByZXYtbmV4dC1idXR0b24ubmV4dCB7XHJcbiAgcmlnaHQ6IGF1dG87XHJcbiAgbGVmdDogMTBweDtcclxufVxyXG5cclxuLyogLS0tLSBwYWdlIGRvdHMgLS0tLSAqL1xyXG5cclxuOjpuZy1kZWVwIC5mbGlja2l0eS1wYWdlLWRvdHMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3R0b206IC0yNXB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICYuZG90IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwIDhweDtcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvcGFjaXR5OiAwLjI1O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJi5pcy1zZWxlY3RlZCB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZmxpY2tpdHktcnRsIC5mbGlja2l0eS1wYWdlLWRvdHMge1xyXG4gIGRpcmVjdGlvbjogcnRsO1xyXG59XHJcbiIsIkBpbXBvcnQgJ3Byb2R1Y3QtbGF5b3V0JztcclxuQGltcG9ydCAnZmxpY2tpdHktc3R5bGUnO1xyXG5AaW1wb3J0ICdub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zJztcclxuQGltcG9ydCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzJztcclxuQGltcG9ydCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fZ3JpZCc7XHJcblxyXG4uaW50cm8taGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgaDIsXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5zcHJpYXRpb24ge1xyXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4uZ2FsbGVyeTpub3QoLmZsaWNraXR5LWVuYWJsZWQpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4udmlldy1tb3JlIHtcclxuICBtYXJnaW46IDAuNXJlbSAwO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY2VsbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAxNXB4O1xyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoc20pIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHtcclxuICAgIHdpZHRoOiAzMy4zMzMzMyU7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/custom/custom-detail/custom-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/custom/custom-detail/custom-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: CustomDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDetailComponent", function() { return CustomDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_shared_main_services_platform_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared-main/services/platform.service */ "./src/app/shared-main/services/platform.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/services/seo.service */ "./src/app/core/services/seo.service.ts");
/* harmony import */ var _app_core_services_data_layer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/core/services/data-layer.service */ "./src/app/core/services/data-layer.service.ts");
/* harmony import */ var _app_core_services_jsonld_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/core/services/jsonld.service */ "./src/app/core/services/jsonld.service.ts");









let CustomDetailComponent = class CustomDetailComponent {
    constructor(jsonld, ps, api, route, seo, dataLayer) {
        this.jsonld = jsonld;
        this.ps = ps;
        this.api = api;
        this.route = route;
        this.seo = seo;
        this.dataLayer = dataLayer;
    }
    ngOnInit() {
        this.product$ = this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((params) => {
            return this.api.get('custom-product', params['slug']);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((product) => {
            this.ratio = product.category.aspect_ratio;
            this.getGalleries(product);
            let section = '';
            if (product && product.category) {
                section = product.category.parent
                    ? `${product.category.parent.title} | ${product.category.title}`
                    : product.category.title;
            }
            this.seo.setMetaAndLinks(product.title, product.seo, section, null, 'product');
            this.dataLayer.customDetail(product);
            this.jsonld.custom(product);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
    }
    getGalleries(product) {
        this.galleries$ = this.api
            .find('gallery', {
            product: product._id,
            $limit: 8,
            $sort: { createdAt: -1 },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((r) => r.data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((resp) => {
            if (resp.length) {
                this.gallerySlug = resp[0].category
                    ? `/${resp[0].category.slug}`
                    : null;
            }
        }));
    }
    trackByFn(index, item) {
        return index; // or item.id
    }
    checkImage(images) {
        return images && images.length && images[0] && images[0].key
            ? images[0].key
            : false;
    }
    ngOnDestroy() { }
};
CustomDetailComponent.ctorParameters = () => [
    { type: _app_core_services_jsonld_service__WEBPACK_IMPORTED_MODULE_8__["JsonldService"] },
    { type: _app_shared_main_services_platform_service__WEBPACK_IMPORTED_MODULE_1__["PlatformService"] },
    { type: _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_6__["SeoService"] },
    { type: _app_core_services_data_layer_service__WEBPACK_IMPORTED_MODULE_7__["DataLayerService"] }
];
CustomDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'bx-custom-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-detail.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/custom/custom-detail/custom-detail.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-detail.component.scss */ "./src/app/custom/custom-detail/custom-detail.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_services_jsonld_service__WEBPACK_IMPORTED_MODULE_8__["JsonldService"],
        _app_shared_main_services_platform_service__WEBPACK_IMPORTED_MODULE_1__["PlatformService"],
        _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_6__["SeoService"],
        _app_core_services_data_layer_service__WEBPACK_IMPORTED_MODULE_7__["DataLayerService"]])
], CustomDetailComponent);



/***/ }),

/***/ "./src/app/custom/custom-gallery/custom-gallery.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/custom/custom-gallery/custom-gallery.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n\n.product-wrapper {\n  background-color: white;\n}\n\narticle {\n  padding: 15px;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 576px) {\n  article {\n    max-width: 100%;\n  }\n}\n\n@media (min-width: 768px) {\n  article {\n    max-width: 100%;\n  }\n}\n\n@media (min-width: 992px) {\n  article {\n    max-width: 100%;\n  }\n}\n\n@media (min-width: 1200px) {\n  article {\n    max-width: 1100px;\n  }\n}\n\n@media (min-width: 576px) {\n  article {\n    padding: 2rem 15px;\n  }\n}\n\n.product {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.image {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n@media (min-width: 576px) {\n  .image {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n  }\n}\n\n.content {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-top: 1rem;\n}\n\n@media (min-width: 576px) {\n  .content {\n    margin-top: 0;\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n  }\n}\n\n@media (min-width: 992px) {\n  .content {\n    -webkit-flex: 0 0 41.6666666667%;\n        -ms-flex: 0 0 41.6666666667%;\n            flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n}\n\n.content h1 {\n  margin: 0;\n}\n\n.content h4.price {\n  margin-bottom: 10px;\n}\n\n.flickity-wrapper {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n::ng-deep .flickity-wrapper.flickity-enabled {\n  display: block;\n}\n\n::ng-deep .flickity-enabled {\n  position: relative;\n  margin: 0 60px;\n}\n\n::ng-deep .flickity-enabled:focus {\n  outline: none;\n}\n\n::ng-deep .flickity-viewport {\n  overflow: hidden;\n  position: relative;\n  max-width: 100%;\n  height: 100%;\n}\n\n::ng-deep .flickity-slider {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n/* draggable */\n\n::ng-deep .flickity-enabled.is-draggable {\n  -webkit-tap-highlight-color: transparent;\n  tap-highlight-color: transparent;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n::ng-deep .flickity-enabled.is-draggable .flickity-viewport {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n::ng-deep .flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\n/* ---- flickity-button ---- */\n\n::ng-deep .flickity-button {\n  position: absolute;\n  background: rgba(255, 255, 255, 0.75);\n  border: none;\n  color: #333;\n  -moz-appearance: none;\n       appearance: none;\n  -webkit-appearance: none;\n}\n\n::ng-deep .flickity-button:hover {\n  background: white;\n  cursor: pointer;\n}\n\n::ng-deep .flickity-button:focus {\n  outline: none;\n  box-shadow: 0 0 0 5px #19f;\n}\n\n::ng-deep .flickity-button:active {\n  opacity: 0.6;\n}\n\n::ng-deep .flickity-button:disabled {\n  opacity: 0.3;\n  cursor: auto;\n  /* prevent disabled button from capturing pointer up event. #716 */\n  pointer-events: none;\n}\n\n::ng-deep .flickity-button-icon {\n  fill: #333;\n}\n\n/* ---- previous/next buttons ---- */\n\n::ng-deep .flickity-prev-next-button {\n  top: 50%;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  /* vertically center */\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n::ng-deep .flickity-prev-next-button.previous {\n  left: -50px;\n}\n\n::ng-deep .flickity-prev-next-button.next {\n  right: -50px;\n}\n\n::ng-deep .flickity-prev-next-button .flickity-button-icon {\n  position: absolute;\n  left: 20%;\n  top: 20%;\n  width: 60%;\n  height: 60%;\n}\n\n/* right to left */\n\n.flickity-rtl .flickity-prev-next-button.previous {\n  left: auto;\n  right: 10px;\n}\n\n.flickity-rtl .flickity-prev-next-button.next {\n  right: auto;\n  left: 10px;\n}\n\n/* ---- page dots ---- */\n\n::ng-deep .flickity-page-dots {\n  position: absolute;\n  width: 100%;\n  bottom: -25px;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  text-align: center;\n  line-height: 1;\n}\n\n::ng-deep .flickity-page-dots.dot {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 0 8px;\n  background: #333;\n  border-radius: 50%;\n  opacity: 0.25;\n  cursor: pointer;\n}\n\n::ng-deep .flickity-page-dots.dot.is-selected {\n  opacity: 1;\n}\n\n.flickity-rtl .flickity-page-dots {\n  direction: rtl;\n}\n\n.inspriation {\n  padding-bottom: 1rem;\n  background-color: #666;\n}\n\n.intro-header {\n  text-align: center;\n  padding: 10px 0 0;\n}\n\n.intro-header h2,\n.intro-header p {\n  margin: 0;\n  color: white;\n}\n\n.view-more {\n  color: white;\n  text-align: center;\n  display: block;\n}\n\n.view-more h4 {\n  font-size: 14px;\n  font-size: 0.875rem;\n  line-height: 1;\n  margin: 0;\n  color: white;\n}\n\n.gallery:not(.flickity-enabled) {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.view-more {\n  margin: 0.5rem 0;\n  width: auto;\n}\n\n.carousel-cell {\n  width: 100%;\n  padding: 0 5px;\n}\n\n@media (min-width: 576px) {\n  .carousel-cell {\n    width: 50%;\n  }\n}\n\n@media (min-width: 768px) {\n  .carousel-cell {\n    width: 25%;\n  }\n}\n\n@media (min-width: 992px) {\n  .carousel-cell {\n    width: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbS9jdXN0b20tZ2FsbGVyeS9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxzY3NzXFxfcHJvZHVjdC1sYXlvdXQuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbS9jdXN0b20tZ2FsbGVyeS9jdXN0b20tZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbS9jdXN0b20tZ2FsbGVyeS9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2dyaWQuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbS9jdXN0b20tZ2FsbGVyeS9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b20vY3VzdG9tLWdhbGxlcnkvQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcc2Nzc1xcX2ZsaWNraXR5LXN0eWxlLnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b20vY3VzdG9tLWdhbGxlcnkvQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcYXBwXFxjdXN0b21cXGN1c3RvbS1nYWxsZXJ5XFxjdXN0b20tZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbS9jdXN0b20tZ2FsbGVyeS9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b20vY3VzdG9tLWdhbGxlcnkvQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcc2Nzc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBO0VBQ0UsY0FBQTtBQ1hGOztBRGNBO0VBQ0UsdUJBQUE7QUNYRjs7QURjQTtFQUNFLGFBQUE7RUVoQkEsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FETUY7O0FFNkNJO0VIeENKO0lFSE0sZUZaaUI7RUNjckI7QUFDRjs7QUV3Q0k7RUh4Q0o7SUVITSxlRlppQjtFQ21CckI7QUFDRjs7QUVtQ0k7RUh4Q0o7SUVITSxlRlppQjtFQ3dCckI7QUFDRjs7QUU4Qkk7RUh4Q0o7SUVITSxpQkZaaUI7RUM2QnJCO0FBQ0Y7O0FFeUJJO0VIeENKO0lBS0ksa0JBQUE7RUNjRjtBQUNGOztBRFhBO0VFTkUscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx1QkFBQTtNQUFBLG1CQUFBO1VBQUEsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURxQkY7O0FEZEE7RUVIRSxrQkFBQTtFQUlBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FEa0JGOztBRU1JO0VIM0JKO0lFT0UscUJBQUE7UUFBQSxpQkFBQTtZQUFBLGFBQUE7SUFJQSxjQUFBO0VEZUE7QUFDRjs7QURwQkE7RUVWRSxrQkFBQTtFQUlBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VGTUEsZ0JBQUE7QUMwQkY7O0FFUkk7RUhwQko7SUFJSSxhQUFBO0lFSkYscUJBQUE7UUFBQSxpQkFBQTtZQUFBLGFBQUE7SUFJQSxjQUFBO0VEOEJBO0FBQ0Y7O0FFZkk7RUhwQko7SUVBRSxnQ0FBQTtRQUFBLDRCQUFBO1lBQUEsd0JBQUE7SUFJQSx5QkFBQTtFRG9DQTtBQUNGOztBRC9CRTtFQUNFLFNBQUE7QUNpQ0o7O0FEL0JFO0VBQ0UsbUJBQUE7QUNpQ0o7O0FHdkZBO0VBQ0UscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7QUgwRkY7O0FHekZFO0VBQ0UsY0FBQTtBSDJGSjs7QUd2RkE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUgwRkY7O0FHekZFO0VBQ0UsYUFBQTtBSDJGSjs7QUd2RkE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUgwRkY7O0FHdkZBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBSDBGRjs7QUd2RkEsY0FBQTs7QUFFQTtFQUNFLHdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBSHlGRjs7QUd4RkU7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FIMEZKOztBR3hGRTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7QUgwRko7O0FHdEZBLDhCQUFBOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7T0FBQSxnQkFBQTtFQUNBLHdCQUFBO0FId0ZGOztBR3ZGRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBSHlGSjs7QUd2RkU7RUFDRSxhQUFBO0VBQ0EsMEJBQUE7QUh5Rko7O0FHdkZFO0VBQ0UsWUFBQTtBSHlGSjs7QUd2RkU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtFQUFBO0VBQ0Esb0JBQUE7QUh5Rko7O0FHckZBO0VBQ0UsVUFBQTtBSHdGRjs7QUdyRkEsb0NBQUE7O0FBRUE7RUFDRSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7TUFBQSwrQkFBQTtVQUFBLDJCQUFBO0FIdUZGOztBR3RGRTtFQUNFLFdBQUE7QUh3Rko7O0FHdEZFO0VBQ0UsWUFBQTtBSHdGSjs7QUd0RkU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUh3Rko7O0FHcEZBLGtCQUFBOztBQUNBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUh1RkY7O0FHckZBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUh3RkY7O0FHckZBLHdCQUFBOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUh1RkY7O0FHdEZFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUh3Rko7O0FHdkZJO0VBQ0UsVUFBQTtBSHlGTjs7QUdwRkE7RUFDRSxjQUFBO0FIdUZGOztBSTNOQTtFQUNFLG9CQUFBO0VBQ0Esc0JDTlM7QUxvT1g7O0FJM05BO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBSjhORjs7QUk3TkU7O0VBRUUsU0FBQTtFQUNBLFlBQUE7QUorTko7O0FJM05BO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBSjhORjs7QUk3TkU7RUVVQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUhZO0VGUFYsU0FBQTtFQUNBLFlBQUE7QUppT0o7O0FJN05BO0VBQ0UscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7QUpnT0Y7O0FJN05BO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FKZ09GOztBSTdOQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FKZ09GOztBRWxOSTtFRWhCSjtJQUlJLFVBQUE7RUprT0Y7QUFDRjs7QUV2Tkk7RUVoQko7SUFPSSxVQUFBO0VKb09GO0FBQ0Y7O0FFNU5JO0VFaEJKO0lBVUksVUFBQTtFSnNPRjtBQUNGIiwiZmlsZSI6InByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbS9jdXN0b20tZ2FsbGVyeS9jdXN0b20tZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnO1xyXG5AaW1wb3J0ICdub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJztcclxuQGltcG9ydCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHMnO1xyXG5AaW1wb3J0ICdub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19ncmlkJztcclxuXHJcbiRjb250YWluZXItbWF4LXdpZHRoczogKFxyXG4gIHNtOiAxMDAlLFxyXG4gIG1kOiAxMDAlLFxyXG4gIGxnOiAxMDAlLFxyXG4gIHhsOiAxMTAwcHhcclxuKTtcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnByb2R1Y3Qtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmFydGljbGUge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgQGluY2x1ZGUgbWFrZS1jb250YWluZXIoKTtcclxuICBAaW5jbHVkZSBtYWtlLWNvbnRhaW5lci1tYXgtd2lkdGhzKCRjb250YWluZXItbWF4LXdpZHRocyk7XHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChzbSkge1xyXG4gICAgcGFkZGluZzogMnJlbSAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLnByb2R1Y3Qge1xyXG4gIEBpbmNsdWRlIG1ha2Utcm93KCk7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgQGluY2x1ZGUgbWFrZS1jb2wtcmVhZHkoKTtcclxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHNtKSB7XHJcbiAgICBAaW5jbHVkZSBtYWtlLWNvbCg2KTtcclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBAaW5jbHVkZSBtYWtlLWNvbC1yZWFkeSgpO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChzbSkge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIEBpbmNsdWRlIG1ha2UtY29sKDYpO1xyXG4gIH1cclxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7XHJcbiAgICBAaW5jbHVkZSBtYWtlLWNvbCg1KTtcclxuICB9XHJcbiAgaDEge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBoNC5wcmljZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucHJvZHVjdC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmFydGljbGUge1xuICBwYWRkaW5nOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIGFydGljbGUge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGFydGljbGUge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIGFydGljbGUge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICBhcnRpY2xlIHtcbiAgICBtYXgtd2lkdGg6IDExMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIGFydGljbGUge1xuICAgIHBhZGRpbmc6IDJyZW0gMTVweDtcbiAgfVxufVxuXG4ucHJvZHVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuXG4uaW1hZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmltYWdlIHtcbiAgICBmbGV4OiAwIDAgNTAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICB9XG59XG5cbi5jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5jb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGZsZXg6IDAgMCA1MCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGVudCB7XG4gICAgZmxleDogMCAwIDQxLjY2NjY2NjY2NjclO1xuICAgIG1heC13aWR0aDogNDEuNjY2NjY2NjY2NyU7XG4gIH1cbn1cbi5jb250ZW50IGgxIHtcbiAgbWFyZ2luOiAwO1xufVxuLmNvbnRlbnQgaDQucHJpY2Uge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZmxpY2tpdHktd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46Om5nLWRlZXAgLmZsaWNraXR5LXdyYXBwZXIuZmxpY2tpdHktZW5hYmxlZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG46Om5nLWRlZXAgLmZsaWNraXR5LWVuYWJsZWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCA2MHB4O1xufVxuOjpuZy1kZWVwIC5mbGlja2l0eS1lbmFibGVkOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuOjpuZy1kZWVwIC5mbGlja2l0eS12aWV3cG9ydCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZmxpY2tpdHktc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBkcmFnZ2FibGUgKi9cbjo6bmctZGVlcCAuZmxpY2tpdHktZW5hYmxlZC5pcy1kcmFnZ2FibGUge1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbjo6bmctZGVlcCAuZmxpY2tpdHktZW5hYmxlZC5pcy1kcmFnZ2FibGUgLmZsaWNraXR5LXZpZXdwb3J0IHtcbiAgY3Vyc29yOiBtb3ZlO1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcbiAgY3Vyc29yOiBncmFiO1xufVxuOjpuZy1kZWVwIC5mbGlja2l0eS1lbmFibGVkLmlzLWRyYWdnYWJsZSAuZmxpY2tpdHktdmlld3BvcnQuaXMtcG9pbnRlci1kb3duIHtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xuICBjdXJzb3I6IGdyYWJiaW5nO1xufVxuXG4vKiAtLS0tIGZsaWNraXR5LWJ1dHRvbiAtLS0tICovXG46Om5nLWRlZXAgLmZsaWNraXR5LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzMzMztcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuOjpuZy1kZWVwIC5mbGlja2l0eS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOjpuZy1kZWVwIC5mbGlja2l0eS1idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAwIDAgMCA1cHggIzE5Zjtcbn1cbjo6bmctZGVlcCAuZmxpY2tpdHktYnV0dG9uOmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbjo6bmctZGVlcCAuZmxpY2tpdHktYnV0dG9uOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC4zO1xuICBjdXJzb3I6IGF1dG87XG4gIC8qIHByZXZlbnQgZGlzYWJsZWQgYnV0dG9uIGZyb20gY2FwdHVyaW5nIHBvaW50ZXIgdXAgZXZlbnQuICM3MTYgKi9cbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbjo6bmctZGVlcCAuZmxpY2tpdHktYnV0dG9uLWljb24ge1xuICBmaWxsOiAjMzMzO1xufVxuXG4vKiAtLS0tIHByZXZpb3VzL25leHQgYnV0dG9ucyAtLS0tICovXG46Om5nLWRlZXAgLmZsaWNraXR5LXByZXYtbmV4dC1idXR0b24ge1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAvKiB2ZXJ0aWNhbGx5IGNlbnRlciAqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG46Om5nLWRlZXAgLmZsaWNraXR5LXByZXYtbmV4dC1idXR0b24ucHJldmlvdXMge1xuICBsZWZ0OiAtNTBweDtcbn1cbjo6bmctZGVlcCAuZmxpY2tpdHktcHJldi1uZXh0LWJ1dHRvbi5uZXh0IHtcbiAgcmlnaHQ6IC01MHB4O1xufVxuOjpuZy1kZWVwIC5mbGlja2l0eS1wcmV2LW5leHQtYnV0dG9uIC5mbGlja2l0eS1idXR0b24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjAlO1xuICB0b3A6IDIwJTtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA2MCU7XG59XG5cbi8qIHJpZ2h0IHRvIGxlZnQgKi9cbi5mbGlja2l0eS1ydGwgLmZsaWNraXR5LXByZXYtbmV4dC1idXR0b24ucHJldmlvdXMge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogMTBweDtcbn1cblxuLmZsaWNraXR5LXJ0bCAuZmxpY2tpdHktcHJldi1uZXh0LWJ1dHRvbi5uZXh0IHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IDEwcHg7XG59XG5cbi8qIC0tLS0gcGFnZSBkb3RzIC0tLS0gKi9cbjo6bmctZGVlcCAuZmxpY2tpdHktcGFnZS1kb3RzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAtMjVweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuOjpuZy1kZWVwIC5mbGlja2l0eS1wYWdlLWRvdHMuZG90IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBtYXJnaW46IDAgOHB4O1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9wYWNpdHk6IDAuMjU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjo6bmctZGVlcCAuZmxpY2tpdHktcGFnZS1kb3RzLmRvdC5pcy1zZWxlY3RlZCB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5mbGlja2l0eS1ydGwgLmZsaWNraXR5LXBhZ2UtZG90cyB7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuXG4uaW5zcHJpYXRpb24ge1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2Njtcbn1cblxuLmludHJvLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAwIDA7XG59XG4uaW50cm8taGVhZGVyIGgyLFxuLmludHJvLWhlYWRlciBwIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi52aWV3LW1vcmUge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udmlldy1tb3JlIGg0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5nYWxsZXJ5Om5vdCguZmxpY2tpdHktZW5hYmxlZCkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udmlldy1tb3JlIHtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5jYXJvdXNlbC1jZWxsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5jYXJvdXNlbC1jZWxsIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNhcm91c2VsLWNlbGwge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY2Fyb3VzZWwtY2VsbCB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufSIsIi8vLyBHcmlkIHN5c3RlbVxuLy9cbi8vIEdlbmVyYXRlIHNlbWFudGljIGdyaWQgY29sdW1ucyB3aXRoIHRoZXNlIG1peGlucy5cblxuQG1peGluIG1ha2UtY29udGFpbmVyKCRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogJGd1dHRlciAvIDI7XG4gIHBhZGRpbmctbGVmdDogJGd1dHRlciAvIDI7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cblxuLy8gRm9yIGVhY2ggYnJlYWtwb2ludCwgZGVmaW5lIHRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBjb250YWluZXIgaW4gYSBtZWRpYSBxdWVyeVxuQG1peGluIG1ha2UtY29udGFpbmVyLW1heC13aWR0aHMoJG1heC13aWR0aHM6ICRjb250YWluZXItbWF4LXdpZHRocywgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAZWFjaCAkYnJlYWtwb2ludCwgJGNvbnRhaW5lci1tYXgtd2lkdGggaW4gJG1heC13aWR0aHMge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRicmVha3BvaW50cykge1xuICAgICAgbWF4LXdpZHRoOiAkY29udGFpbmVyLW1heC13aWR0aDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1ha2Utcm93KCRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1yaWdodDogLSRndXR0ZXIgLyAyO1xuICBtYXJnaW4tbGVmdDogLSRndXR0ZXIgLyAyO1xufVxuXG5AbWl4aW4gbWFrZS1jb2wtcmVhZHkoJGd1dHRlcjogJGdyaWQtZ3V0dGVyLXdpZHRoKSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gUHJldmVudCBjb2x1bW5zIGZyb20gYmVjb21pbmcgdG9vIG5hcnJvdyB3aGVuIGF0IHNtYWxsZXIgZ3JpZCB0aWVycyBieVxuICAvLyBhbHdheXMgc2V0dGluZyBgd2lkdGg6IDEwMCU7YC4gVGhpcyB3b3JrcyBiZWNhdXNlIHdlIHVzZSBgZmxleGAgdmFsdWVzXG4gIC8vIGxhdGVyIG9uIHRvIG92ZXJyaWRlIHRoaXMgaW5pdGlhbCB3aWR0aC5cbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6ICRndXR0ZXIgLyAyO1xuICBwYWRkaW5nLWxlZnQ6ICRndXR0ZXIgLyAyO1xufVxuXG5AbWl4aW4gbWFrZS1jb2woJHNpemUsICRjb2x1bW5zOiAkZ3JpZC1jb2x1bW5zKSB7XG4gIGZsZXg6IDAgMCBwZXJjZW50YWdlKCRzaXplIC8gJGNvbHVtbnMpO1xuICAvLyBBZGQgYSBgbWF4LXdpZHRoYCB0byBlbnN1cmUgY29udGVudCB3aXRoaW4gZWFjaCBjb2x1bW4gZG9lcyBub3QgYmxvdyBvdXRcbiAgLy8gdGhlIHdpZHRoIG9mIHRoZSBjb2x1bW4uIEFwcGxpZXMgdG8gSUUxMCsgYW5kIEZpcmVmb3guIENocm9tZSBhbmQgU2FmYXJpXG4gIC8vIGRvIG5vdCBhcHBlYXIgdG8gcmVxdWlyZSB0aGlzLlxuICBtYXgtd2lkdGg6IHBlcmNlbnRhZ2UoJHNpemUgLyAkY29sdW1ucyk7XG59XG5cbkBtaXhpbiBtYWtlLWNvbC1vZmZzZXQoJHNpemUsICRjb2x1bW5zOiAkZ3JpZC1jb2x1bW5zKSB7XG4gICRudW06ICRzaXplIC8gJGNvbHVtbnM7XG4gIG1hcmdpbi1sZWZ0OiBpZigkbnVtID09IDAsIDAsIHBlcmNlbnRhZ2UoJG51bSkpO1xufVxuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCIuZmxpY2tpdHktd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICA6Om5nLWRlZXAgJi5mbGlja2l0eS1lbmFibGVkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5mbGlja2l0eS1lbmFibGVkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwIDYwcHg7XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5mbGlja2l0eS12aWV3cG9ydCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5mbGlja2l0eS1zbGlkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qIGRyYWdnYWJsZSAqL1xyXG5cclxuOjpuZy1kZWVwIC5mbGlja2l0eS1lbmFibGVkLmlzLWRyYWdnYWJsZSB7XHJcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB0YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIC5mbGlja2l0eS12aWV3cG9ydCB7XHJcbiAgICBjdXJzb3I6IG1vdmU7XHJcbiAgICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcclxuICAgIGN1cnNvcjogZ3JhYjtcclxuICB9XHJcbiAgLmZsaWNraXR5LXZpZXdwb3J0LmlzLXBvaW50ZXItZG93biB7XHJcbiAgICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XHJcbiAgICBjdXJzb3I6IGdyYWJiaW5nO1xyXG4gIH1cclxufVxyXG5cclxuLyogLS0tLSBmbGlja2l0eS1idXR0b24gLS0tLSAqL1xyXG5cclxuOjpuZy1kZWVwIC5mbGlja2l0eS1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjc1KTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNXB4ICMxOWY7XHJcbiAgfVxyXG4gICY6YWN0aXZlIHtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICB9XHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICBjdXJzb3I6IGF1dG87XHJcbiAgICAvKiBwcmV2ZW50IGRpc2FibGVkIGJ1dHRvbiBmcm9tIGNhcHR1cmluZyBwb2ludGVyIHVwIGV2ZW50LiAjNzE2ICovXHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZmxpY2tpdHktYnV0dG9uLWljb24ge1xyXG4gIGZpbGw6ICMzMzM7XHJcbn1cclxuXHJcbi8qIC0tLS0gcHJldmlvdXMvbmV4dCBidXR0b25zIC0tLS0gKi9cclxuXHJcbjo6bmctZGVlcCAuZmxpY2tpdHktcHJldi1uZXh0LWJ1dHRvbiB7XHJcbiAgdG9wOiA1MCU7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAvKiB2ZXJ0aWNhbGx5IGNlbnRlciAqL1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAmLnByZXZpb3VzIHtcclxuICAgIGxlZnQ6IC01MHB4O1xyXG4gIH1cclxuICAmLm5leHQge1xyXG4gICAgcmlnaHQ6IC01MHB4O1xyXG4gIH1cclxuICAuZmxpY2tpdHktYnV0dG9uLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMjAlO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiByaWdodCB0byBsZWZ0ICovXHJcbi5mbGlja2l0eS1ydGwgLmZsaWNraXR5LXByZXYtbmV4dC1idXR0b24ucHJldmlvdXMge1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmZsaWNraXR5LXJ0bCAuZmxpY2tpdHktcHJldi1uZXh0LWJ1dHRvbi5uZXh0IHtcclxuICByaWdodDogYXV0bztcclxuICBsZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4vKiAtLS0tIHBhZ2UgZG90cyAtLS0tICovXHJcblxyXG46Om5nLWRlZXAgLmZsaWNraXR5LXBhZ2UtZG90cyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvdHRvbTogLTI1cHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgJi5kb3Qge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW46IDAgOHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG9wYWNpdHk6IDAuMjU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmLmlzLXNlbGVjdGVkIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mbGlja2l0eS1ydGwgLmZsaWNraXR5LXBhZ2UtZG90cyB7XHJcbiAgZGlyZWN0aW9uOiBydGw7XHJcbn1cclxuIiwiQGltcG9ydCAncHJvZHVjdC1sYXlvdXQnO1xyXG5AaW1wb3J0ICdmbGlja2l0eS1zdHlsZSc7XHJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ21peGlucyc7XHJcbkBpbXBvcnQgJ25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnO1xyXG5AaW1wb3J0ICdub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJztcclxuQGltcG9ydCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHMnO1xyXG5AaW1wb3J0ICdub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19ncmlkJztcclxuXHJcbi5pbnNwcmlhdGlvbiB7XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmtncmV5O1xyXG59XHJcblxyXG4uaW50cm8taGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAwIDA7XHJcbiAgaDIsXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG4udmlldy1tb3JlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGg0IHtcclxuICAgIEBpbmNsdWRlIGZvbnQtc2l6ZSgxNCwgMTQpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLmdhbGxlcnk6bm90KC5mbGlja2l0eS1lbmFibGVkKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnZpZXctbW9yZSB7XHJcbiAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmNhcm91c2VsLWNlbGwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoc20pIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG59XHJcbiIsIi8vQ29sb3JzXHJcbiRibGFjazogIzM2MzYzNjtcclxuJHZlcnlsaWdodGdyZXk6ICNmNWY1ZjU7XHJcbiRsaWdodGdyZXk6ICNlZGVkZWQ7XHJcbiRtaWRncmV5OiAjOTk5O1xyXG4kZGFya2dyZXk6ICM2NjY7XHJcbiRncmVlbjogIzYzYjIwYjtcclxuJHJlZDogI2NlMDUwNTtcclxuLy9Gb250c1xyXG4kZGVmYXVsdEZvbnQ6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4kZGlzcGxheUZvbnQ6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4iLCJAbWl4aW4gZmx1aWQtdHlwZSgkcHJvcGVydGllcywgJG1pbi12dywgJG1heC12dywgJG1pbi12YWx1ZSwgJG1heC12YWx1ZSkge1xyXG4gIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAjeyRwcm9wZXJ0eX06ICRtaW4tdmFsdWU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWluLXZ3KSB7XHJcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgICAjeyRwcm9wZXJ0eX06IGNhbGMoXHJcbiAgICAgICAgI3skbWluLXZhbHVlfSArICN7c3RyaXAtdW5pdCgkbWF4LXZhbHVlIC0gJG1pbi12YWx1ZSl9ICpcclxuICAgICAgICAgIChcclxuICAgICAgICAgICAgMTAwdncgLSAjeyRtaW4tdnd9XHJcbiAgICAgICAgICApIC8gI3tzdHJpcC11bml0KCRtYXgtdncgLSAkbWluLXZ3KX1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtYXgtdncpIHtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgICN7JHByb3BlcnR5fTogJG1heC12YWx1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBzdHJpcC11bml0KCR2YWx1ZSkge1xyXG4gIEByZXR1cm4gJHZhbHVlIC8gKCR2YWx1ZSAqIDAgKyAxKTtcclxufVxyXG5cclxuQG1peGluIHdyYXBwZXIoJHdpZHRoOjE0NDBweCkge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAkd2lkdGg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMS41cmVtO1xyXG59XHJcblxyXG5AbWl4aW4gZm9udC1zaXplKCRmb250U2l6ZSwgJGxpbmVIZWlnaHQ6IDEpIHtcclxuICAkcmVtVmFsdWU6ICgkZm9udFNpemUgLyAxNik7XHJcbiAgJHB4VmFsdWU6ICRmb250U2l6ZTtcclxuICAkbGluZVZhbHVlOiAoJGxpbmVIZWlnaHQgLyAkZm9udFNpemUpO1xyXG4gIGZvbnQtc2l6ZTogJHB4VmFsdWUgKyBweDtcclxuICBmb250LXNpemU6ICRyZW1WYWx1ZSArIHJlbTtcclxuICBsaW5lLWhlaWdodDogJGxpbmVWYWx1ZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/custom/custom-gallery/custom-gallery.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/custom/custom-gallery/custom-gallery.component.ts ***!
  \*******************************************************************/
/*! exports provided: CustomGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomGalleryComponent", function() { return CustomGalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/api.service */ "./src/app/core/services/api.service.ts");





let CustomGalleryComponent = class CustomGalleryComponent {
    constructor(api) {
        this.api = api;
        this.catUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loading = true;
    }
    get category() {
        const slugParts = this.page_data.slug.split('/').pop();
        return `gallery/${slugParts}`;
    }
    ngOnInit() {
        this.galleries$ = this.catUpdate.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this.category), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
            return this.api.find('gallery', {
                $category: this.category,
                $limit: 8,
                $sort: { createdAt: -1 },
                $select: [
                    'title',
                    'category',
                    'product',
                    'list_image',
                    'slug',
                    'images',
                ],
            }, false);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((r) => r.data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((resp) => {
            this.loading = false;
        }));
    }
    ngOnChanges(changes) {
        if (changes.page_data && !changes.page_data.firstChange) {
            this.loading = true;
            this.catUpdate.next(this.category);
        }
    }
};
CustomGalleryComponent.ctorParameters = () => [
    { type: _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CustomGalleryComponent.prototype, "page_data", void 0);
CustomGalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'bx-custom-gallery',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-gallery.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/custom/custom-gallery/custom-gallery.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-gallery.component.scss */ "./src/app/custom/custom-gallery/custom-gallery.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
], CustomGalleryComponent);



/***/ }),

/***/ "./src/app/custom/custom-list/custom-item.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/custom/custom-list/custom-item.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b20vY3VzdG9tLWxpc3QvY3VzdG9tLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/custom/custom-list/custom-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/custom/custom-list/custom-item.component.ts ***!
  \*************************************************************/
/*! exports provided: CustomItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomItemComponent", function() { return CustomItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_core_services_data_layer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/services/data-layer.service */ "./src/app/core/services/data-layer.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");



let CustomItemComponent = class CustomItemComponent {
    constructor(dataLayer) {
        this.dataLayer = dataLayer;
    }
    imageTitle() {
        return `${this.item.title} | Custom ${this.item.category.title} | Boxxerworld`;
    }
    productClicked() {
        this.dataLayer.customClick(this.item, this.position);
    }
};
CustomItemComponent.ctorParameters = () => [
    { type: _app_core_services_data_layer_service__WEBPACK_IMPORTED_MODULE_1__["DataLayerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CustomItemComponent.prototype, "item", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], CustomItemComponent.prototype, "position", void 0);
CustomItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'bx-custom-item, [bx-custom-item]',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-item.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/custom/custom-list/custom-item.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-item.component.scss */ "./src/app/custom/custom-list/custom-item.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_services_data_layer_service__WEBPACK_IMPORTED_MODULE_1__["DataLayerService"]])
], CustomItemComponent);



/***/ }),

/***/ "./src/app/custom/custom-list/custom-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/custom/custom-list/custom-list.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  padding: 15px;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 576px) {\n  :host {\n    max-width: 100%;\n  }\n}\n@media (min-width: 768px) {\n  :host {\n    max-width: 100%;\n  }\n}\n@media (min-width: 992px) {\n  :host {\n    max-width: 100%;\n  }\n}\n@media (min-width: 1200px) {\n  :host {\n    max-width: 1440px;\n  }\n}\n@media (min-width: 576px) {\n  :host {\n    padding: 2rem 15px;\n  }\n}\n.page-layout {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.page-layout section {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n@media (min-width: 992px) {\n  .page-layout section {\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%;\n  }\n}\n.page-layout aside {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n@media (min-width: 992px) {\n  .page-layout aside {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%;\n  }\n}\n.page-layout aside.page-sidebar {\n  display: none;\n}\n@media (min-width: 992px) {\n  .page-layout aside.page-sidebar {\n    display: block;\n  }\n}\n.page-grid {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.page-grid .page-grid-item {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n@media (min-width: 576px) {\n  .page-grid .page-grid-item {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n  }\n}\n@media (min-width: 992px) {\n  .page-grid .page-grid-item {\n    -webkit-flex: 0 0 33.3333333333%;\n        -ms-flex: 0 0 33.3333333333%;\n            flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n}\n.bx-pagination {\n  margin-top: 1rem;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.bx-pagination .btn-page {\n  background-color: white;\n  color: #666;\n}\n.bx-pagination .btn-page.current {\n  background-color: #63b20b;\n  color: white;\n}\n.bx-pagination .pagination-next,\n.bx-pagination .pagination-previous {\n  background-color: #ededed;\n}\n.bx-pagination .link {\n  padding: 0.5rem 0.8rem;\n  display: block;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbS9jdXN0b20tbGlzdC9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxzY3NzXFxfcGFnZS1ncmlkLWxheW91dC5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9tL2N1c3RvbS1saXN0L0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9ub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfZ3JpZC5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9tL2N1c3RvbS1saXN0L2N1c3RvbS1saXN0LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9tL2N1c3RvbS1saXN0L0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9ub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfYnJlYWtwb2ludHMuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbS9jdXN0b20tbGlzdC9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQ1ZBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0RGO0FDb0RJO0VIL0NKO0lDSU0sZURYaUI7RUVNckI7QUFDRjtBQytDSTtFSC9DSjtJQ0lNLGVEWGlCO0VFV3JCO0FBQ0Y7QUMwQ0k7RUgvQ0o7SUNJTSxlRFhpQjtFRWdCckI7QUFDRjtBQ3FDSTtFSC9DSjtJQ0lNLGlCRFhpQjtFRXFCckI7QUFDRjtBQ2dDSTtFSC9DSjtJQU1JLGtCQUFBO0VFYUY7QUFDRjtBRlZBO0VDQUUscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx1QkFBQTtNQUFBLG1CQUFBO1VBQUEsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNjRjtBRmZFO0VDS0Esa0JBQUE7RUFJQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1VGO0FDY0k7RUhuQ0Y7SUNlQSxxQkFBQTtRQUFBLGlCQUFBO1lBQUEsYUFBQTtJQUlBLGNBQUE7RUNPQTtBQUNGO0FGckJFO0VDREEsa0JBQUE7RUFJQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ3NCRjtBQ0VJO0VIN0JGO0lDU0EscUJBQUE7UUFBQSxpQkFBQTtZQUFBLGFBQUE7SUFJQSxjQUFBO0VDbUJBO0FBQ0Y7QUY1Qkk7RUFFSSxhQUFBO0FFNkJSO0FDUEk7RUh4QkE7SUFLSSxjQUFBO0VFOEJOO0FBQ0Y7QUZ6QkE7RUN4QkUscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx1QkFBQTtNQUFBLG1CQUFBO1VBQUEsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNxREY7QUY5QkU7RUNuQkEsa0JBQUE7RUFJQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ2lERjtBQ3pCSTtFSFhGO0lDVEEscUJBQUE7UUFBQSxpQkFBQTtZQUFBLGFBQUE7SUFJQSxjQUFBO0VDOENBO0FBQ0Y7QUMvQkk7RUhYRjtJQ1RBLGdDQUFBO1FBQUEsNEJBQUE7WUFBQSx3QkFBQTtJQUlBLHlCQUFBO0VDb0RBO0FBQ0Y7QUZuQ0E7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0FFc0NGO0FGcENFO0VBQ0UsdUJBQUE7RUFDQSxXSS9ETztBRnFHWDtBRnJDSTtFQUNFLHlCSWhFRTtFSmlFRixZQUFBO0FFdUNOO0FGbkNFOztFQUVFLHlCSTFFUTtBRitHWjtBRmxDRTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUVvQ0oiLCJmaWxlIjoicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9tL2N1c3RvbS1saXN0L2N1c3RvbS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucyc7XHJcbkBpbXBvcnQgJ25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICdub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cyc7XHJcbkBpbXBvcnQgJ25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2dyaWQnO1xyXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXHJcbiAgc206IDEwMCUsXHJcbiAgbWQ6IDEwMCUsXHJcbiAgbGc6IDEwMCUsXHJcbiAgeGw6IDE0NDBweFxyXG4pO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgQGluY2x1ZGUgbWFrZS1jb250YWluZXIoKTtcclxuICBAaW5jbHVkZSBtYWtlLWNvbnRhaW5lci1tYXgtd2lkdGhzKCRjb250YWluZXItbWF4LXdpZHRocyk7XHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChzbSkge1xyXG4gICAgcGFkZGluZzogMnJlbSAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLnBhZ2UtbGF5b3V0IHtcclxuICBAaW5jbHVkZSBtYWtlLXJvdygpO1xyXG4gIHNlY3Rpb24ge1xyXG4gICAgQGluY2x1ZGUgbWFrZS1jb2wtcmVhZHkoKTtcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcclxuICAgICAgQGluY2x1ZGUgbWFrZS1jb2woOSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzaWRlIHtcclxuICAgIEBpbmNsdWRlIG1ha2UtY29sLXJlYWR5KCk7XHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7XHJcbiAgICAgIEBpbmNsdWRlIG1ha2UtY29sKDMpO1xyXG4gICAgfVxyXG4gICAgJi5wYWdlLXNpZGViYXIge1xyXG4gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHhzKSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wYWdlLWdyaWQge1xyXG4gIEBpbmNsdWRlIG1ha2Utcm93KCk7XHJcbiAgLnBhZ2UtZ3JpZC1pdGVtIHtcclxuICAgIEBpbmNsdWRlIG1ha2UtY29sLXJlYWR5KCk7XHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHNtKSB7XHJcbiAgICAgIEBpbmNsdWRlIG1ha2UtY29sKDYpO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykge1xyXG4gICAgICBAaW5jbHVkZSBtYWtlLWNvbCg0KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vUGFnaW5hdGlvblxyXG5cclxuLmJ4LXBhZ2luYXRpb24ge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgLmJ0bi1wYWdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6ICRkYXJrZ3JleTtcclxuICAgICYuY3VycmVudCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBhZ2luYXRpb24tbmV4dCxcclxuICAucGFnaW5hdGlvbi1wcmV2aW91cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRncmV5O1xyXG4gIH1cclxuXHJcbiAgLmxpbmsge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDAuOHJlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG4iLCIvLy8gR3JpZCBzeXN0ZW1cbi8vXG4vLyBHZW5lcmF0ZSBzZW1hbnRpYyBncmlkIGNvbHVtbnMgd2l0aCB0aGVzZSBtaXhpbnMuXG5cbkBtaXhpbiBtYWtlLWNvbnRhaW5lcigkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6ICRndXR0ZXIgLyAyO1xuICBwYWRkaW5nLWxlZnQ6ICRndXR0ZXIgLyAyO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG5cbi8vIEZvciBlYWNoIGJyZWFrcG9pbnQsIGRlZmluZSB0aGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgY29udGFpbmVyIGluIGEgbWVkaWEgcXVlcnlcbkBtaXhpbiBtYWtlLWNvbnRhaW5lci1tYXgtd2lkdGhzKCRtYXgtd2lkdGhzOiAkY29udGFpbmVyLW1heC13aWR0aHMsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQGVhY2ggJGJyZWFrcG9pbnQsICRjb250YWluZXItbWF4LXdpZHRoIGluICRtYXgtd2lkdGhzIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50LCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIG1heC13aWR0aDogJGNvbnRhaW5lci1tYXgtd2lkdGg7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYWtlLXJvdygkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tcmlnaHQ6IC0kZ3V0dGVyIC8gMjtcbiAgbWFyZ2luLWxlZnQ6IC0kZ3V0dGVyIC8gMjtcbn1cblxuQG1peGluIG1ha2UtY29sLXJlYWR5KCRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vIFByZXZlbnQgY29sdW1ucyBmcm9tIGJlY29taW5nIHRvbyBuYXJyb3cgd2hlbiBhdCBzbWFsbGVyIGdyaWQgdGllcnMgYnlcbiAgLy8gYWx3YXlzIHNldHRpbmcgYHdpZHRoOiAxMDAlO2AuIFRoaXMgd29ya3MgYmVjYXVzZSB3ZSB1c2UgYGZsZXhgIHZhbHVlc1xuICAvLyBsYXRlciBvbiB0byBvdmVycmlkZSB0aGlzIGluaXRpYWwgd2lkdGguXG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAkZ3V0dGVyIC8gMjtcbiAgcGFkZGluZy1sZWZ0OiAkZ3V0dGVyIC8gMjtcbn1cblxuQG1peGluIG1ha2UtY29sKCRzaXplLCAkY29sdW1uczogJGdyaWQtY29sdW1ucykge1xuICBmbGV4OiAwIDAgcGVyY2VudGFnZSgkc2l6ZSAvICRjb2x1bW5zKTtcbiAgLy8gQWRkIGEgYG1heC13aWR0aGAgdG8gZW5zdXJlIGNvbnRlbnQgd2l0aGluIGVhY2ggY29sdW1uIGRvZXMgbm90IGJsb3cgb3V0XG4gIC8vIHRoZSB3aWR0aCBvZiB0aGUgY29sdW1uLiBBcHBsaWVzIHRvIElFMTArIGFuZCBGaXJlZm94LiBDaHJvbWUgYW5kIFNhZmFyaVxuICAvLyBkbyBub3QgYXBwZWFyIHRvIHJlcXVpcmUgdGhpcy5cbiAgbWF4LXdpZHRoOiBwZXJjZW50YWdlKCRzaXplIC8gJGNvbHVtbnMpO1xufVxuXG5AbWl4aW4gbWFrZS1jb2wtb2Zmc2V0KCRzaXplLCAkY29sdW1uczogJGdyaWQtY29sdW1ucykge1xuICAkbnVtOiAkc2l6ZSAvICRjb2x1bW5zO1xuICBtYXJnaW4tbGVmdDogaWYoJG51bSA9PSAwLCAwLCBwZXJjZW50YWdlKCRudW0pKTtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgOmhvc3Qge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICA6aG9zdCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIDpob3N0IHtcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIDpob3N0IHtcbiAgICBwYWRkaW5nOiAycmVtIDE1cHg7XG4gIH1cbn1cblxuLnBhZ2UtbGF5b3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG4ucGFnZS1sYXlvdXQgc2VjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAucGFnZS1sYXlvdXQgc2VjdGlvbiB7XG4gICAgZmxleDogMCAwIDc1JTtcbiAgICBtYXgtd2lkdGg6IDc1JTtcbiAgfVxufVxuLnBhZ2UtbGF5b3V0IGFzaWRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5wYWdlLWxheW91dCBhc2lkZSB7XG4gICAgZmxleDogMCAwIDI1JTtcbiAgICBtYXgtd2lkdGg6IDI1JTtcbiAgfVxufVxuLnBhZ2UtbGF5b3V0IGFzaWRlLnBhZ2Utc2lkZWJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnBhZ2UtbGF5b3V0IGFzaWRlLnBhZ2Utc2lkZWJhciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLnBhZ2UtZ3JpZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuLnBhZ2UtZ3JpZCAucGFnZS1ncmlkLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLnBhZ2UtZ3JpZCAucGFnZS1ncmlkLWl0ZW0ge1xuICAgIGZsZXg6IDAgMCA1MCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAucGFnZS1ncmlkIC5wYWdlLWdyaWQtaXRlbSB7XG4gICAgZmxleDogMCAwIDMzLjMzMzMzMzMzMzMlO1xuICAgIG1heC13aWR0aDogMzMuMzMzMzMzMzMzMyU7XG4gIH1cbn1cblxuLmJ4LXBhZ2luYXRpb24ge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJ4LXBhZ2luYXRpb24gLmJ0bi1wYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjNjY2O1xufVxuLmJ4LXBhZ2luYXRpb24gLmJ0bi1wYWdlLmN1cnJlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjNiMjBiO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYngtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0LFxuLmJ4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xufVxuLmJ4LXBhZ2luYXRpb24gLmxpbmsge1xuICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufSIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIiwiLy9Db2xvcnNcclxuJGJsYWNrOiAjMzYzNjM2O1xyXG4kdmVyeWxpZ2h0Z3JleTogI2Y1ZjVmNTtcclxuJGxpZ2h0Z3JleTogI2VkZWRlZDtcclxuJG1pZGdyZXk6ICM5OTk7XHJcbiRkYXJrZ3JleTogIzY2NjtcclxuJGdyZWVuOiAjNjNiMjBiO1xyXG4kcmVkOiAjY2UwNTA1O1xyXG4vL0ZvbnRzXHJcbiRkZWZhdWx0Rm9udDogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiRkaXNwbGF5Rm9udDogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/custom/custom-list/custom-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/custom/custom-list/custom-list.component.ts ***!
  \*************************************************************/
/*! exports provided: CustomListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomListComponent", function() { return CustomListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _global_untilDestroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @global/untilDestroy */ "../global/untilDestroy/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/core/services/seo.service */ "./src/app/core/services/seo.service.ts");
/* harmony import */ var _app_core_services_data_layer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/core/services/data-layer.service */ "./src/app/core/services/data-layer.service.ts");
/* harmony import */ var _app_core_modules_loading_loading_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/core/modules/loading/loading.service */ "./src/app/core/modules/loading/loading.service.ts");










let CustomListComponent = class CustomListComponent {
    constructor(api, route, router, seo, dataLayer, loading) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.seo = seo;
        this.dataLayer = dataLayer;
        this.loading = loading;
        this.page$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.currentPage = 1;
        this.itemsPerPage = 24;
        this.sortOptions = [
            {
                title: 'Newest',
                query: 'newest',
                sort: {
                    createdAt: -1,
                },
            },
            {
                title: 'Popular',
                query: 'popular',
                sort: {
                    sold_count: -1,
                },
            },
            {
                title: 'Price High-Low',
                query: 'high-low',
                sort: {
                    price: -1,
                },
            },
            {
                title: 'Price Low-High',
                query: 'low-high',
                sort: {
                    price: 1,
                },
            },
            {
                title: 'A to Z',
                query: 'az',
                sort: { title: 1 },
            },
            {
                title: 'Z to A',
                query: 'za',
                sort: { title: -1 },
            },
        ];
        this.sort = 'popular';
    }
    get pageCount() {
        return Math.ceil(this.total / this.itemsPerPage);
    }
    ngOnInit() {
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((params) => {
            this.category = `${this.route.snapshot.parent.url.toString()}/${params['catid']}`;
            return this.route.queryParams;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((params) => {
            if (params['sort']) {
                this.sort = params['sort'];
            }
            this.getPage(params['p'] || 1);
        }), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_4__["untilComponentDestroyed"])(this))
            .subscribe();
    }
    getSortTitle() {
        const sortOption = this.sortOptions.find((o) => o.query === this.sort);
        return this.sort !== 'popular' && sortOption && sortOption.title
            ? `: ${sortOption.title}`
            : null;
    }
    getPage(page) {
        const sortOption = this.sortOptions.find((o) => o.query === this.sort);
        this.products$ = this.api
            .find('custom-product', {
            $category: this.category,
            published: true,
            $limit: this.itemsPerPage,
            $skip: (page - 1) * this.itemsPerPage,
            $sort: sortOption && sortOption.sort ? sortOption.sort : this.sort,
            $select: [
                'category',
                'code',
                'title',
                'image',
                'price',
                'sale_amount',
                'sale_percent',
                'sale_start_date',
                'sale_end_date',
                'slug',
                'sold_count',
            ],
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((resp) => {
            this.currentPage = page;
            this.page_data = resp.page_data;
            this.total = resp.total;
            const section = resp.page_data.parent
                ? `${resp.page_data.parent.title}`
                : resp.page_data.title;
            this.seo.setMetaAndLinks(resp.page_data.title, resp.page_data.seo, section, null, 'product', this.currentPage > 1 ? true : false);
            this.setParams();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((resp) => {
            this.itemsLength = resp.data.length;
            this.dataLayer.customList(resp.data, 'Custom Product List');
            return resp.data;
        }));
    }
    filterProducts(option) {
        this.sort = option.query;
        this.getPage(1);
    }
    setParams() {
        const params = {};
        if (this.currentPage > 1) {
            params.p = this.currentPage;
        }
        if (this.sort !== 'popular') {
            params.sort = this.sort;
        }
        this.router.navigate([], {
            queryParams: params,
        });
    }
    trackByFn(index, item) {
        return item._id;
    }
    ngOnDestroy() { }
};
CustomListComponent.ctorParameters = () => [
    { type: _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_7__["SeoService"] },
    { type: _app_core_services_data_layer_service__WEBPACK_IMPORTED_MODULE_8__["DataLayerService"] },
    { type: _app_core_modules_loading_loading_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"] }
];
CustomListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'bx-custom-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-list.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/custom/custom-list/custom-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-list.component.scss */ "./src/app/custom/custom-list/custom-list.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_7__["SeoService"],
        _app_core_services_data_layer_service__WEBPACK_IMPORTED_MODULE_8__["DataLayerService"],
        _app_core_modules_loading_loading_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"]])
], CustomListComponent);



/***/ }),

/***/ "./src/app/custom/custom-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/custom/custom-routing.module.ts ***!
  \*************************************************/
/*! exports provided: CustomRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRoutingModule", function() { return CustomRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _custom_detail_custom_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-detail/custom-detail.component */ "./src/app/custom/custom-detail/custom-detail.component.ts");
/* harmony import */ var _custom_list_custom_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-list/custom-list.component */ "./src/app/custom/custom-list/custom-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");





const routes = [
    {
        path: '',
        redirectTo: 'shorts-trunks',
        pathMatch: 'full'
    },
    {
        path: ':catid',
        component: _custom_list_custom_list_component__WEBPACK_IMPORTED_MODULE_2__["CustomListComponent"]
    },
    {
        path: ':catid/:slug',
        component: _custom_detail_custom_detail_component__WEBPACK_IMPORTED_MODULE_1__["CustomDetailComponent"]
    }
];
let CustomRoutingModule = class CustomRoutingModule {
};
CustomRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        providers: []
    })
], CustomRoutingModule);



/***/ }),

/***/ "./src/app/custom/custom.module.ts":
/*!*****************************************!*\
  !*** ./src/app/custom/custom.module.ts ***!
  \*****************************************/
/*! exports provided: CustomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomModule", function() { return CustomModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _app_shared_modules_card_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/modules/card/card.module */ "./src/app/shared/modules/card/card.module.ts");
/* harmony import */ var _app_shared_modules_sidebar_nav_sidebar_nav_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/modules/sidebar-nav/sidebar-nav.module */ "./src/app/shared/modules/sidebar-nav/sidebar-nav.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _custom_detail_custom_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-detail/custom-detail.component */ "./src/app/custom/custom-detail/custom-detail.component.ts");
/* harmony import */ var _custom_list_custom_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-list/custom-item.component */ "./src/app/custom/custom-list/custom-item.component.ts");
/* harmony import */ var _custom_list_custom_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-list/custom-list.component */ "./src/app/custom/custom-list/custom-list.component.ts");
/* harmony import */ var _custom_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-routing.module */ "./src/app/custom/custom-routing.module.ts");
/* harmony import */ var _custom_gallery_custom_gallery_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./custom-gallery/custom-gallery.component */ "./src/app/custom/custom-gallery/custom-gallery.component.ts");











let CustomModule = class CustomModule {
};
CustomModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _app_shared_modules_card_card_module__WEBPACK_IMPORTED_MODULE_3__["CardModule"],
            _custom_routing_module__WEBPACK_IMPORTED_MODULE_9__["CustomRoutingModule"],
            _app_shared_modules_sidebar_nav_sidebar_nav_module__WEBPACK_IMPORTED_MODULE_4__["SidebarNavModule"],
            _app_material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"]
        ],
        declarations: [
            _custom_list_custom_list_component__WEBPACK_IMPORTED_MODULE_8__["CustomListComponent"],
            _custom_list_custom_item_component__WEBPACK_IMPORTED_MODULE_7__["CustomItemComponent"],
            _custom_detail_custom_detail_component__WEBPACK_IMPORTED_MODULE_6__["CustomDetailComponent"],
            _custom_gallery_custom_gallery_component__WEBPACK_IMPORTED_MODULE_10__["CustomGalleryComponent"]
        ],
        providers: []
    })
], CustomModule);



/***/ })

}]);
//# sourceMappingURL=app-custom-custom-module-es2015.js.map