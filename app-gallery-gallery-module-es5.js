function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-gallery-gallery-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery-detail/gallery-detail.component.html": function node_modulesRawLoaderDistCjsJsSrcAppGalleryGalleryDetailGalleryDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<article *ngIf=\"gallery$ | async as gallery\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 ml-auto\">\r\n      <div class=\"nav\">\r\n        <div class=\"btn-group\">\r\n          <button\r\n            [routerLink]=\"['../', gallery.links.prev]\"\r\n            class=\"btn btn-grey\"\r\n            [disabled]=\"!gallery.links.prev\"\r\n          >\r\n            Prev\r\n          </button>\r\n          <button\r\n            [routerLink]=\"['../', gallery.links.next]\"\r\n            class=\"btn btn-grey\"\r\n            [disabled]=\"!gallery.links.next\"\r\n          >\r\n            Next\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div\r\n      class=\"col-md-6 last-xs first-md gallery gallery-flickity\"\r\n      #imageContainer\r\n    >\r\n      <ng-container *ngIf=\"ps.isBrowser\">\r\n        <div\r\n          class=\"flickity-wrapper\"\r\n          [bxFlkty]=\"{\r\n            cellAlign: 'left',\r\n            percentPosition: true,\r\n            imagesLoaded: true,\r\n            wrapAround: true,\r\n            pageDots: false,\r\n            prevNextButtons: true\r\n          }\"\r\n          #mainGallery\r\n          (slideSelect)=\"galleryIndex = $event\"\r\n        >\r\n          <div\r\n            [bxFlktyCell]\r\n            class=\"carousel-cell\"\r\n            *ngFor=\"let image of gallery.images; let i = index\"\r\n          >\r\n            <div\r\n              bxImageWrapper\r\n              [aspect_ratio]=\"1\"\r\n              *ngIf=\"image && image.format != 'video'\"\r\n            >\r\n              <img\r\n                alt=\"{{ gallery.product?.title }} {{ gallery.title }} {{\r\n                  gallery.category.title\r\n                }}\"\r\n                [bxLazysizes]=\"image.key\"\r\n                [crop_ratio]=\"1\"\r\n              />\r\n            </div>\r\n            <bx-video\r\n              [showControls]=\"true\"\r\n              [play]=\"i === galleryIndex\"\r\n              [options]=\"videoOptions(image)\"\r\n              *ngIf=\"image && image.format === 'video'\"\r\n            ></bx-video>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n    <div class=\"col-md-6 first-xs last-md\">\r\n      <h1 *ngIf=\"gallery.product; else noProduct\">\r\n        {{ gallery.product.title }} {{ gallery.title }}\r\n      </h1>\r\n      <ng-template #noProduct>\r\n        <h1>{{ gallery.title }}</h1>\r\n      </ng-template>\r\n      <span [innerHTML]=\"gallery.description\"></span>\r\n      <p>\r\n        Love it? Click \"Customise\" to change colours and materials or to keep it\r\n        just as it is but include your own names.\r\n      </p>\r\n      <button\r\n        class=\"btn btn-success\"\r\n        *ngIf=\"gallery.design && gallery.design.custom_design\"\r\n        (click)=\"copyDesign(gallery.design.custom_design)\"\r\n      >\r\n        Customise\r\n      </button>\r\n      <h4\r\n        *ngIf=\"\r\n          gallery.design &&\r\n          gallery.design.custom_design &&\r\n          gallery.design.custom_design.style\r\n        \"\r\n      >\r\n        Style: {{ gallery.design.custom_design.style.title }}\r\n      </h4>\r\n      <h4\r\n        *ngIf=\"\r\n          gallery.design &&\r\n          gallery.design.custom_design &&\r\n          gallery.design.custom_design.cut\r\n        \"\r\n      >\r\n        Cut: {{ gallery.design.custom_design.cut.title }}\r\n      </h4>\r\n      <div\r\n        class=\"materials gallery-flickity\"\r\n        *ngIf=\"gallery.materials && gallery.materials.length\"\r\n      >\r\n        <h4>Materials</h4>\r\n        <div class=\"materials-grid\">\r\n          <div class=\"material\" *ngFor=\"let material of gallery.materials\">\r\n            <ng-container *ngIf=\"material\">\r\n            <svg class=\"swatch\" *ngIf=\"material.hex\" viewBox=\"0 0 600 600\">\r\n              <rect class=\"swatch-colour\" [attr.fill]=\"material.hex\" />\r\n            </svg>\r\n            <img\r\n              [bxLazysizes]=\"material.image.key\"\r\n              [crop_ratio]=\"1\"\r\n              *ngIf=\"material.image\"\r\n            />\r\n            <div>\r\n              <h2>{{ material.title }} {{ material.materialType.title }}</h2>\r\n            </div>\r\n          </ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</article>\r\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery-list/gallery-item.component.html": function node_modulesRawLoaderDistCjsJsSrcAppGalleryGalleryListGalleryItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a [routerLink]=\"[item.slug]\" bxCard>\r\n  <div bxCardImage>\r\n    <div bxImageWrapper [aspect_ratio]=\"1\" *ngIf=\"item.list_image\">\r\n      <img\r\n        alt=\"{{ item.product?.title }} {{ item.title }} {{\r\n          item.category.title\r\n        }}\"\r\n        [bxLazysizes]=\"item.list_image.key\"\r\n        [crop_ratio]=\"1\"\r\n        [sizes]=\"'[320, 480, 640]'\"\r\n      />\r\n    </div>\r\n  </div>\r\n  <div bxCardContent>\r\n    <h2 bxCardTitle>{{ item.product?.title }} {{ item.title }}</h2>\r\n  </div>\r\n</a>\r\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery-list/gallery-list.component.html": function node_modulesRawLoaderDistCjsJsSrcAppGalleryGalleryListGalleryListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-layout\">\r\n  <aside class=\"page-sidebar\">\r\n    <bx-sidebar-nav type=\"gallery\"></bx-sidebar-nav>\r\n    <bx-adverts></bx-adverts>\r\n  </aside>\r\n  <section class=\"page-content\">\r\n    <bx-page-header>\r\n      <div class=\"page-header\">\r\n        <h1>{{page_data?.title}}</h1>\r\n      </div>\r\n      <!-- <div class=\"sort\">\r\n                <button class=\"btn btn-sort\">Sort By</button>\r\n            </div> -->\r\n    </bx-page-header>\r\n    <div class=\"search\" [formGroup]=\"searchForm\">\r\n      <div class=\"search-wrapper\">\r\n        <fa-icon class=\"search-icon\" [icon]=\"['fal', 'search']\" size=\"2x\"></fa-icon>\r\n        <input type=\"text\" class=\"search-field\" placeholder='Enter template name eg \"Classic\"' formControlName=\"terms\" />\r\n        <fa-icon class=\"clear-icon\" [icon]=\"['fal', 'times']\" size=\"2x\" (click)=\"terms = null\"></fa-icon>\r\n      </div>\r\n    </div>\r\n    <div class=\"page-grid\">\r\n      <div class=\"page-grid-item eq-height\" *ngFor=\"let item of galleries | async | paginate: { id: 'server', itemsPerPage: itemsPerPage, currentPage: currentPage, totalItems: total }\"\r\n        [item]=\"item\" bx-gallery-item></div>\r\n    </div>\r\n    <pagination-template class=\"bx-pagination\" #p=\"paginationApi\" (pageChange)=\"getPage($event)\" id=\"server\" *ngIf=\"pageCount > 1\">\r\n      <div class=\"btn-page pagination-previous\" [class.disabled]=\"p.isFirstPage()\">\r\n        <a class=\"link\" *ngIf=\"!p.isFirstPage()\" (click)=\"p.previous()\">\r\n          < </a> </div> <div class=\"btn-page\" *ngFor=\"let page of p.pages\" [class.current]=\"p.getCurrent() === page.value\">\r\n            <a [routerLink]=\"[]\" [queryParams]=\"{p: page.value}\" class=\"link\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\r\n              <span>{{ page.label }}</span>\r\n            </a>\r\n            <div class=\"link\" *ngIf=\"p.getCurrent() === page.value\">\r\n              <span>{{ page.label }}</span>\r\n            </div>\r\n      </div>\r\n      <div class=\"btn-page pagination-next\" [class.disabled]=\"p.isLastPage()\">\r\n        <a class=\"link\" *ngIf=\"!p.isLastPage()\" (click)=\"p.next()\"> > </a>\r\n      </div>\r\n    </pagination-template>\r\n  </section>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/gallery/gallery-detail/gallery-detail.component.scss": function srcAppGalleryGalleryDetailGalleryDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".flickity-wrapper {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n::ng-deep .flickity-wrapper.flickity-enabled {\n  display: block;\n}\n::ng-deep .flickity-enabled {\n  position: relative;\n  margin: 0 60px;\n}\n::ng-deep .flickity-enabled:focus {\n  outline: none;\n}\n::ng-deep .flickity-viewport {\n  overflow: hidden;\n  position: relative;\n  max-width: 100%;\n  height: 100%;\n}\n::ng-deep .flickity-slider {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n/* draggable */\n::ng-deep .flickity-enabled.is-draggable {\n  -webkit-tap-highlight-color: transparent;\n  tap-highlight-color: transparent;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n::ng-deep .flickity-enabled.is-draggable .flickity-viewport {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n::ng-deep .flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n/* ---- flickity-button ---- */\n::ng-deep .flickity-button {\n  position: absolute;\n  background: rgba(255, 255, 255, 0.75);\n  border: none;\n  color: #333;\n  -moz-appearance: none;\n       appearance: none;\n  -webkit-appearance: none;\n}\n::ng-deep .flickity-button:hover {\n  background: white;\n  cursor: pointer;\n}\n::ng-deep .flickity-button:focus {\n  outline: none;\n  box-shadow: 0 0 0 5px #19f;\n}\n::ng-deep .flickity-button:active {\n  opacity: 0.6;\n}\n::ng-deep .flickity-button:disabled {\n  opacity: 0.3;\n  cursor: auto;\n  /* prevent disabled button from capturing pointer up event. #716 */\n  pointer-events: none;\n}\n::ng-deep .flickity-button-icon {\n  fill: #333;\n}\n/* ---- previous/next buttons ---- */\n::ng-deep .flickity-prev-next-button {\n  top: 50%;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  /* vertically center */\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n::ng-deep .flickity-prev-next-button.previous {\n  left: -50px;\n}\n::ng-deep .flickity-prev-next-button.next {\n  right: -50px;\n}\n::ng-deep .flickity-prev-next-button .flickity-button-icon {\n  position: absolute;\n  left: 20%;\n  top: 20%;\n  width: 60%;\n  height: 60%;\n}\n/* right to left */\n.flickity-rtl .flickity-prev-next-button.previous {\n  left: auto;\n  right: 10px;\n}\n.flickity-rtl .flickity-prev-next-button.next {\n  right: auto;\n  left: 10px;\n}\n/* ---- page dots ---- */\n::ng-deep .flickity-page-dots {\n  position: absolute;\n  width: 100%;\n  bottom: -25px;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  text-align: center;\n  line-height: 1;\n}\n::ng-deep .flickity-page-dots.dot {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 0 8px;\n  background: #333;\n  border-radius: 50%;\n  opacity: 0.25;\n  cursor: pointer;\n}\n::ng-deep .flickity-page-dots.dot.is-selected {\n  opacity: 1;\n}\n.flickity-rtl .flickity-page-dots {\n  direction: rtl;\n}\n:host {\n  background-color: white;\n  display: block;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\narticle {\n  padding: 2rem 0;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  position: relative;\n}\n@media (min-width: 576px) {\n  article {\n    max-width: 100%;\n  }\n}\n@media (min-width: 768px) {\n  article {\n    max-width: 100%;\n  }\n}\n@media (min-width: 992px) {\n  article {\n    max-width: 100%;\n  }\n}\n@media (min-width: 1200px) {\n  article {\n    max-width: 1100px;\n  }\n}\narticle .image {\n  padding: 0.5rem;\n}\narticle .nav-link {\n  position: absolute;\n  top: 50%;\n  margin-top: -20px;\n  cursor: pointer;\n}\narticle .nav-link .icon {\n  width: 40px;\n  height: 40px;\n  fill: #363636;\n}\narticle .nav-link:disabled {\n  cursor: not-allowed;\n}\narticle .nav-link:disabled .icon {\n  fill: #999;\n}\narticle .nav-link:hover .icon {\n  fill: #63b20b;\n}\narticle .nav-prev {\n  left: 0px;\n}\narticle .nav-next {\n  right: 0px;\n}\n.gallery .carousel-cell {\n  width: 100%;\n}\n.gallery .gallery-thumb {\n  width: 20%;\n}\n.materials h4 {\n  margin-bottom: 0.2rem;\n}\n.materials-grid {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px;\n}\n.material {\n  width: 20%;\n  padding: 0 5px;\n}\n.material h2 {\n  margin-top: 0.2rem;\n  font-size: 12px;\n  font-size: 0.75rem;\n  line-height: 1;\n}\n.swatch-colour {\n  width: 100%;\n  height: 100%;\n}\n.gallery-flickity ::ng-deep .flickity-enabled {\n  margin: 0;\n}\n.gallery-flickity ::ng-deep .flickity-viewport {\n  margin-bottom: 40px;\n}\n.gallery-flickity ::ng-deep .flickity-button {\n  width: 25px;\n  height: 25px;\n  background: #999;\n  top: calc(100% + 20px);\n  font-size: 0%;\n}\n.gallery-flickity ::ng-deep .flickity-button.previous {\n  left: calc(50% - 30px);\n}\n.gallery-flickity ::ng-deep .flickity-button.next {\n  right: calc(50% - 30px);\n}\n.gallery-flickity ::ng-deep .flickity-button-icon {\n  fill: white;\n  width: 15px;\n  height: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS1kZXRhaWwvQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcc2Nzc1xcX2ZsaWNraXR5LXN0eWxlLnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnktZGV0YWlsL2dhbGxlcnktZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LWRldGFpbC9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxhcHBcXGdhbGxlcnlcXGdhbGxlcnktZGV0YWlsXFxnYWxsZXJ5LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS1kZXRhaWwvQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL25vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxtaXhpbnNcXF9ncmlkLnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnktZGV0YWlsL0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9ub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfYnJlYWtwb2ludHMuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS1kZXRhaWwvQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LWRldGFpbC9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxzY3NzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtBQ0NGO0FEQUU7RUFDRSxjQUFBO0FDRUo7QURFQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGO0FEQUU7RUFDRSxhQUFBO0FDRUo7QURFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NGO0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7QURFQSxjQUFBO0FBRUE7RUFDRSx3Q0FBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNBRjtBRENFO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0U7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURHQSw4QkFBQTtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7T0FBQSxnQkFBQTtFQUNBLHdCQUFBO0FDREY7QURFRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0FKO0FERUU7RUFDRSxhQUFBO0VBQ0EsMEJBQUE7QUNBSjtBREVFO0VBQ0UsWUFBQTtBQ0FKO0FERUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtFQUFBO0VBQ0Esb0JBQUE7QUNBSjtBRElBO0VBQ0UsVUFBQTtBQ0RGO0FESUEsb0NBQUE7QUFFQTtFQUNFLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtNQUFBLCtCQUFBO1VBQUEsMkJBQUE7QUNGRjtBREdFO0VBQ0UsV0FBQTtBQ0RKO0FER0U7RUFDRSxZQUFBO0FDREo7QURHRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0RKO0FES0Esa0JBQUE7QUFDQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FDRkY7QURJQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDREY7QURJQSx3QkFBQTtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNGRjtBREdFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNESjtBREVJO0VBQ0UsVUFBQTtBQ0FOO0FES0E7RUFDRSxjQUFBO0FDRkY7QUM1SEE7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO01BQUEsV0FBQTtVQUFBLE9BQUE7QUQrSEY7QUM1SEE7RUFDRSxlQUFBO0VDakJBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFRGdCQSxrQkFBQTtBRGtJRjtBRy9GSTtFRnZDSjtJQ0pNLGVEVGlCO0VEdUpyQjtBQUNGO0FHcEdJO0VGdkNKO0lDSk0sZURUaUI7RUQ0SnJCO0FBQ0Y7QUd6R0k7RUZ2Q0o7SUNKTSxlRFRpQjtFRGlLckI7QUFDRjtBRzlHSTtFRnZDSjtJQ0pNLGlCRFRpQjtFRHNLckI7QUFDRjtBQ3JKRTtFQUNFLGVBQUE7QUR1Sko7QUNySkU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUR1Sko7QUN0Skk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFHcENFO0FKNExSO0FDdEpJO0VBQ0UsbUJBQUE7QUR3Sk47QUN2Sk07RUFDRSxVR3RDRTtBSitMVjtBQ3JKTTtFQUNFLGFHekNBO0FKZ01SO0FDbkpFO0VBQ0UsU0FBQTtBRHFKSjtBQ2xKRTtFQUNFLFVBQUE7QURvSko7QUMvSUU7RUFDRSxXQUFBO0FEa0pKO0FDaEpFO0VBQ0UsVUFBQTtBRGtKSjtBQzdJRTtFQUNFLHFCQUFBO0FEZ0pKO0FDNUlBO0VBQ0UscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx1QkFBQTtNQUFBLG1CQUFBO1VBQUEsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUQrSUY7QUM3SUE7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBRGdKRjtBQy9JRTtFQUNFLGtCQUFBO0VJL0NGLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBSFk7QUxvTWQ7QUMvSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBRGtKRjtBQzlJRTtFQUNFLFNBQUE7QURpSko7QUMvSUU7RUFDRSxtQkFBQTtBRGlKSjtBQy9JRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JHckdNO0VIc0dOLHNCQUFBO0VBQ0EsYUFBQTtBRGlKSjtBQ2hKSTtFQUNFLHNCQUFBO0FEa0pOO0FDaEpJO0VBQ0UsdUJBQUE7QURrSk47QUMvSUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURpSkoiLCJmaWxlIjoicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LWRldGFpbC9nYWxsZXJ5LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGlja2l0eS13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIDo6bmctZGVlcCAmLmZsaWNraXR5LWVuYWJsZWQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmZsaWNraXR5LWVuYWJsZWQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDAgNjBweDtcclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmZsaWNraXR5LXZpZXdwb3J0IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmZsaWNraXR5LXNsaWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLyogZHJhZ2dhYmxlICovXHJcblxyXG46Om5nLWRlZXAgLmZsaWNraXR5LWVuYWJsZWQuaXMtZHJhZ2dhYmxlIHtcclxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLmZsaWNraXR5LXZpZXdwb3J0IHtcclxuICAgIGN1cnNvcjogbW92ZTtcclxuICAgIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xyXG4gICAgY3Vyc29yOiBncmFiO1xyXG4gIH1cclxuICAuZmxpY2tpdHktdmlld3BvcnQuaXMtcG9pbnRlci1kb3duIHtcclxuICAgIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcclxuICAgIGN1cnNvcjogZ3JhYmJpbmc7XHJcbiAgfVxyXG59XHJcblxyXG4vKiAtLS0tIGZsaWNraXR5LWJ1dHRvbiAtLS0tICovXHJcblxyXG46Om5nLWRlZXAgLmZsaWNraXR5LWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6IGhzbGEoMCwgMCUsIDEwMCUsIDAuNzUpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogIzMzMztcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCA1cHggIzE5ZjtcclxuICB9XHJcbiAgJjphY3RpdmUge1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gIH1cclxuICAmOmRpc2FibGVkIHtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICAgIGN1cnNvcjogYXV0bztcclxuICAgIC8qIHByZXZlbnQgZGlzYWJsZWQgYnV0dG9uIGZyb20gY2FwdHVyaW5nIHBvaW50ZXIgdXAgZXZlbnQuICM3MTYgKi9cclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5mbGlja2l0eS1idXR0b24taWNvbiB7XHJcbiAgZmlsbDogIzMzMztcclxufVxyXG5cclxuLyogLS0tLSBwcmV2aW91cy9uZXh0IGJ1dHRvbnMgLS0tLSAqL1xyXG5cclxuOjpuZy1kZWVwIC5mbGlja2l0eS1wcmV2LW5leHQtYnV0dG9uIHtcclxuICB0b3A6IDUwJTtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC8qIHZlcnRpY2FsbHkgY2VudGVyICovXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICYucHJldmlvdXMge1xyXG4gICAgbGVmdDogLTUwcHg7XHJcbiAgfVxyXG4gICYubmV4dCB7XHJcbiAgICByaWdodDogLTUwcHg7XHJcbiAgfVxyXG4gIC5mbGlja2l0eS1idXR0b24taWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyMCU7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICB9XHJcbn1cclxuXHJcbi8qIHJpZ2h0IHRvIGxlZnQgKi9cclxuLmZsaWNraXR5LXJ0bCAuZmxpY2tpdHktcHJldi1uZXh0LWJ1dHRvbi5wcmV2aW91cyB7XHJcbiAgbGVmdDogYXV0bztcclxuICByaWdodDogMTBweDtcclxufVxyXG4uZmxpY2tpdHktcnRsIC5mbGlja2l0eS1wcmV2LW5leHQtYnV0dG9uLm5leHQge1xyXG4gIHJpZ2h0OiBhdXRvO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi8qIC0tLS0gcGFnZSBkb3RzIC0tLS0gKi9cclxuXHJcbjo6bmctZGVlcCAuZmxpY2tpdHktcGFnZS1kb3RzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm90dG9tOiAtMjVweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICAmLmRvdCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3BhY2l0eTogMC4yNTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICYuaXMtc2VsZWN0ZWQge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZsaWNraXR5LXJ0bCAuZmxpY2tpdHktcGFnZS1kb3RzIHtcclxuICBkaXJlY3Rpb246IHJ0bDtcclxufVxyXG4iLCIuZmxpY2tpdHktd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46Om5nLWRlZXAgLmZsaWNraXR5LXdyYXBwZXIuZmxpY2tpdHktZW5hYmxlZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG46Om5nLWRlZXAgLmZsaWNraXR5LWVuYWJsZWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCA2MHB4O1xufVxuOjpuZy1kZWVwIC5mbGlja2l0eS1lbmFibGVkOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuOjpuZy1kZWVwIC5mbGlja2l0eS12aWV3cG9ydCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZmxpY2tpdHktc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBkcmFnZ2FibGUgKi9cbjo6bmctZGVlcCAuZmxpY2tpdHktZW5hYmxlZC5pcy1kcmFnZ2FibGUge1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbjo6bmctZGVlcCAuZmxpY2tpdHktZW5hYmxlZC5pcy1kcmFnZ2FibGUgLmZsaWNraXR5LXZpZXdwb3J0IHtcbiAgY3Vyc29yOiBtb3ZlO1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcbiAgY3Vyc29yOiBncmFiO1xufVxuOjpuZy1kZWVwIC5mbGlja2l0eS1lbmFibGVkLmlzLWRyYWdnYWJsZSAuZmxpY2tpdHktdmlld3BvcnQuaXMtcG9pbnRlci1kb3duIHtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xuICBjdXJzb3I6IGdyYWJiaW5nO1xufVxuXG4vKiAtLS0tIGZsaWNraXR5LWJ1dHRvbiAtLS0tICovXG46Om5nLWRlZXAgLmZsaWNraXR5LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzMzMztcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuOjpuZy1kZWVwIC5mbGlja2l0eS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOjpuZy1kZWVwIC5mbGlja2l0eS1idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAwIDAgMCA1cHggIzE5Zjtcbn1cbjo6bmctZGVlcCAuZmxpY2tpdHktYnV0dG9uOmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbjo6bmctZGVlcCAuZmxpY2tpdHktYnV0dG9uOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC4zO1xuICBjdXJzb3I6IGF1dG87XG4gIC8qIHByZXZlbnQgZGlzYWJsZWQgYnV0dG9uIGZyb20gY2FwdHVyaW5nIHBvaW50ZXIgdXAgZXZlbnQuICM3MTYgKi9cbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbjo6bmctZGVlcCAuZmxpY2tpdHktYnV0dG9uLWljb24ge1xuICBmaWxsOiAjMzMzO1xufVxuXG4vKiAtLS0tIHByZXZpb3VzL25leHQgYnV0dG9ucyAtLS0tICovXG46Om5nLWRlZXAgLmZsaWNraXR5LXByZXYtbmV4dC1idXR0b24ge1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAvKiB2ZXJ0aWNhbGx5IGNlbnRlciAqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG46Om5nLWRlZXAgLmZsaWNraXR5LXByZXYtbmV4dC1idXR0b24ucHJldmlvdXMge1xuICBsZWZ0OiAtNTBweDtcbn1cbjo6bmctZGVlcCAuZmxpY2tpdHktcHJldi1uZXh0LWJ1dHRvbi5uZXh0IHtcbiAgcmlnaHQ6IC01MHB4O1xufVxuOjpuZy1kZWVwIC5mbGlja2l0eS1wcmV2LW5leHQtYnV0dG9uIC5mbGlja2l0eS1idXR0b24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjAlO1xuICB0b3A6IDIwJTtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA2MCU7XG59XG5cbi8qIHJpZ2h0IHRvIGxlZnQgKi9cbi5mbGlja2l0eS1ydGwgLmZsaWNraXR5LXByZXYtbmV4dC1idXR0b24ucHJldmlvdXMge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogMTBweDtcbn1cblxuLmZsaWNraXR5LXJ0bCAuZmxpY2tpdHktcHJldi1uZXh0LWJ1dHRvbi5uZXh0IHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IDEwcHg7XG59XG5cbi8qIC0tLS0gcGFnZSBkb3RzIC0tLS0gKi9cbjo6bmctZGVlcCAuZmxpY2tpdHktcGFnZS1kb3RzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAtMjVweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuOjpuZy1kZWVwIC5mbGlja2l0eS1wYWdlLWRvdHMuZG90IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBtYXJnaW46IDAgOHB4O1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9wYWNpdHk6IDAuMjU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjo6bmctZGVlcCAuZmxpY2tpdHktcGFnZS1kb3RzLmRvdC5pcy1zZWxlY3RlZCB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5mbGlja2l0eS1ydGwgLmZsaWNraXR5LXBhZ2UtZG90cyB7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuXG46aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleDogMTtcbn1cblxuYXJ0aWNsZSB7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIGFydGljbGUge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGFydGljbGUge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIGFydGljbGUge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICBhcnRpY2xlIHtcbiAgICBtYXgtd2lkdGg6IDExMDBweDtcbiAgfVxufVxuYXJ0aWNsZSAuaW1hZ2Uge1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5hcnRpY2xlIC5uYXYtbGluayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5hcnRpY2xlIC5uYXYtbGluayAuaWNvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZpbGw6ICMzNjM2MzY7XG59XG5hcnRpY2xlIC5uYXYtbGluazpkaXNhYmxlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5hcnRpY2xlIC5uYXYtbGluazpkaXNhYmxlZCAuaWNvbiB7XG4gIGZpbGw6ICM5OTk7XG59XG5hcnRpY2xlIC5uYXYtbGluazpob3ZlciAuaWNvbiB7XG4gIGZpbGw6ICM2M2IyMGI7XG59XG5hcnRpY2xlIC5uYXYtcHJldiB7XG4gIGxlZnQ6IDBweDtcbn1cbmFydGljbGUgLm5hdi1uZXh0IHtcbiAgcmlnaHQ6IDBweDtcbn1cblxuLmdhbGxlcnkgLmNhcm91c2VsLWNlbGwge1xuICB3aWR0aDogMTAwJTtcbn1cbi5nYWxsZXJ5IC5nYWxsZXJ5LXRodW1iIHtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLm1hdGVyaWFscyBoNCB7XG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcbn1cblxuLm1hdGVyaWFscy1ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tcmlnaHQ6IC01cHg7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xufVxuXG4ubWF0ZXJpYWwge1xuICB3aWR0aDogMjAlO1xuICBwYWRkaW5nOiAwIDVweDtcbn1cbi5tYXRlcmlhbCBoMiB7XG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uc3dhdGNoLWNvbG91ciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5nYWxsZXJ5LWZsaWNraXR5IDo6bmctZGVlcCAuZmxpY2tpdHktZW5hYmxlZCB7XG4gIG1hcmdpbjogMDtcbn1cbi5nYWxsZXJ5LWZsaWNraXR5IDo6bmctZGVlcCAuZmxpY2tpdHktdmlld3BvcnQge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLmdhbGxlcnktZmxpY2tpdHkgOjpuZy1kZWVwIC5mbGlja2l0eS1idXR0b24ge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjOTk5O1xuICB0b3A6IGNhbGMoMTAwJSArIDIwcHgpO1xuICBmb250LXNpemU6IDAlO1xufVxuLmdhbGxlcnktZmxpY2tpdHkgOjpuZy1kZWVwIC5mbGlja2l0eS1idXR0b24ucHJldmlvdXMge1xuICBsZWZ0OiBjYWxjKDUwJSAtIDMwcHgpO1xufVxuLmdhbGxlcnktZmxpY2tpdHkgOjpuZy1kZWVwIC5mbGlja2l0eS1idXR0b24ubmV4dCB7XG4gIHJpZ2h0OiBjYWxjKDUwJSAtIDMwcHgpO1xufVxuLmdhbGxlcnktZmxpY2tpdHkgOjpuZy1kZWVwIC5mbGlja2l0eS1idXR0b24taWNvbiB7XG4gIGZpbGw6IHdoaXRlO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xufSIsIkBpbXBvcnQgJ21peGlucyc7XHJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ2ZsaWNraXR5LXN0eWxlJztcclxuQGltcG9ydCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucyc7XHJcbkBpbXBvcnQgJ25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICdub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cyc7XHJcbkBpbXBvcnQgJ25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2dyaWQnO1xyXG5cclxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXHJcbiAgc206IDEwMCUsXHJcbiAgbWQ6IDEwMCUsXHJcbiAgbGc6IDEwMCUsXHJcbiAgeGw6IDExMDBweFxyXG4pO1xyXG5cclxuOmhvc3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbmFydGljbGUge1xyXG4gIHBhZGRpbmc6IDJyZW0gMDtcclxuICBAaW5jbHVkZSBtYWtlLWNvbnRhaW5lcigpO1xyXG4gIEBpbmNsdWRlIG1ha2UtY29udGFpbmVyLW1heC13aWR0aHMoJGNvbnRhaW5lci1tYXgtd2lkdGhzKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLmltYWdlIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICB9XHJcbiAgLm5hdi1saW5rIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGZpbGw6ICRibGFjaztcclxuICAgIH1cclxuICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAuaWNvbiB7XHJcbiAgICAgICAgZmlsbDogJG1pZGdyZXk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAuaWNvbiB7XHJcbiAgICAgICAgZmlsbDogJGdyZWVuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5uYXYtcHJldiB7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgfVxyXG5cclxuICAubmF2LW5leHQge1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5nYWxsZXJ5IHtcclxuICAuY2Fyb3VzZWwtY2VsbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmdhbGxlcnktdGh1bWIge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcbn1cclxuXHJcbi5tYXRlcmlhbHMge1xyXG4gIGg0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5tYXRlcmlhbHMtZ3JpZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG59XHJcbi5tYXRlcmlhbCB7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBoMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcbiAgICBAaW5jbHVkZSBmb250LXNpemUoMTIsIDEyKTtcclxuICB9XHJcbn1cclxuXHJcbi5zd2F0Y2gtY29sb3VyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5nYWxsZXJ5LWZsaWNraXR5IHtcclxuICA6Om5nLWRlZXAgLmZsaWNraXR5LWVuYWJsZWQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLmZsaWNraXR5LXZpZXdwb3J0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAuZmxpY2tpdHktYnV0dG9uIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogJG1pZGdyZXk7XHJcbiAgICB0b3A6IGNhbGMoMTAwJSArIDIwcHgpO1xyXG4gICAgZm9udC1zaXplOiAwJTtcclxuICAgICYucHJldmlvdXMge1xyXG4gICAgICBsZWZ0OiBjYWxjKDUwJSAtIDMwcHgpO1xyXG4gICAgfVxyXG4gICAgJi5uZXh0IHtcclxuICAgICAgcmlnaHQ6IGNhbGMoNTAlIC0gMzBweCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAuZmxpY2tpdHktYnV0dG9uLWljb24ge1xyXG4gICAgZmlsbDogd2hpdGU7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbi8vIDo6bmctZGVlcCAuZmxpY2tpdHktcHJldi1uZXh0LWJ1dHRvbiB7XHJcbi8vICAgd2lkdGg6IDQ0cHg7XHJcbi8vICAgaGVpZ2h0OiA0NHB4O1xyXG4vLyAgICYucHJldmlvdXMge1xyXG4vLyAgICAgbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuLy8gICAmLm5leHQge1xyXG4vLyAgICAgcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxuLy8gICB9XHJcbi8vIH1cclxuIiwiLy8vIEdyaWQgc3lzdGVtXG4vL1xuLy8gR2VuZXJhdGUgc2VtYW50aWMgZ3JpZCBjb2x1bW5zIHdpdGggdGhlc2UgbWl4aW5zLlxuXG5AbWl4aW4gbWFrZS1jb250YWluZXIoJGd1dHRlcjogJGdyaWQtZ3V0dGVyLXdpZHRoKSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAkZ3V0dGVyIC8gMjtcbiAgcGFkZGluZy1sZWZ0OiAkZ3V0dGVyIC8gMjtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuXG4vLyBGb3IgZWFjaCBicmVha3BvaW50LCBkZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGNvbnRhaW5lciBpbiBhIG1lZGlhIHF1ZXJ5XG5AbWl4aW4gbWFrZS1jb250YWluZXItbWF4LXdpZHRocygkbWF4LXdpZHRoczogJGNvbnRhaW5lci1tYXgtd2lkdGhzLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEBlYWNoICRicmVha3BvaW50LCAkY29udGFpbmVyLW1heC13aWR0aCBpbiAkbWF4LXdpZHRocyB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBtYXgtd2lkdGg6ICRjb250YWluZXItbWF4LXdpZHRoO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWFrZS1yb3coJGd1dHRlcjogJGdyaWQtZ3V0dGVyLXdpZHRoKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXJpZ2h0OiAtJGd1dHRlciAvIDI7XG4gIG1hcmdpbi1sZWZ0OiAtJGd1dHRlciAvIDI7XG59XG5cbkBtaXhpbiBtYWtlLWNvbC1yZWFkeSgkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyBQcmV2ZW50IGNvbHVtbnMgZnJvbSBiZWNvbWluZyB0b28gbmFycm93IHdoZW4gYXQgc21hbGxlciBncmlkIHRpZXJzIGJ5XG4gIC8vIGFsd2F5cyBzZXR0aW5nIGB3aWR0aDogMTAwJTtgLiBUaGlzIHdvcmtzIGJlY2F1c2Ugd2UgdXNlIGBmbGV4YCB2YWx1ZXNcbiAgLy8gbGF0ZXIgb24gdG8gb3ZlcnJpZGUgdGhpcyBpbml0aWFsIHdpZHRoLlxuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogJGd1dHRlciAvIDI7XG4gIHBhZGRpbmctbGVmdDogJGd1dHRlciAvIDI7XG59XG5cbkBtaXhpbiBtYWtlLWNvbCgkc2l6ZSwgJGNvbHVtbnM6ICRncmlkLWNvbHVtbnMpIHtcbiAgZmxleDogMCAwIHBlcmNlbnRhZ2UoJHNpemUgLyAkY29sdW1ucyk7XG4gIC8vIEFkZCBhIGBtYXgtd2lkdGhgIHRvIGVuc3VyZSBjb250ZW50IHdpdGhpbiBlYWNoIGNvbHVtbiBkb2VzIG5vdCBibG93IG91dFxuICAvLyB0aGUgd2lkdGggb2YgdGhlIGNvbHVtbi4gQXBwbGllcyB0byBJRTEwKyBhbmQgRmlyZWZveC4gQ2hyb21lIGFuZCBTYWZhcmlcbiAgLy8gZG8gbm90IGFwcGVhciB0byByZXF1aXJlIHRoaXMuXG4gIG1heC13aWR0aDogcGVyY2VudGFnZSgkc2l6ZSAvICRjb2x1bW5zKTtcbn1cblxuQG1peGluIG1ha2UtY29sLW9mZnNldCgkc2l6ZSwgJGNvbHVtbnM6ICRncmlkLWNvbHVtbnMpIHtcbiAgJG51bTogJHNpemUgLyAkY29sdW1ucztcbiAgbWFyZ2luLWxlZnQ6IGlmKCRudW0gPT0gMCwgMCwgcGVyY2VudGFnZSgkbnVtKSk7XG59XG4iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vQ29sb3JzXHJcbiRibGFjazogIzM2MzYzNjtcclxuJHZlcnlsaWdodGdyZXk6ICNmNWY1ZjU7XHJcbiRsaWdodGdyZXk6ICNlZGVkZWQ7XHJcbiRtaWRncmV5OiAjOTk5O1xyXG4kZGFya2dyZXk6ICM2NjY7XHJcbiRncmVlbjogIzYzYjIwYjtcclxuJHJlZDogI2NlMDUwNTtcclxuLy9Gb250c1xyXG4kZGVmYXVsdEZvbnQ6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4kZGlzcGxheUZvbnQ6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4iLCJAbWl4aW4gZmx1aWQtdHlwZSgkcHJvcGVydGllcywgJG1pbi12dywgJG1heC12dywgJG1pbi12YWx1ZSwgJG1heC12YWx1ZSkge1xyXG4gIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAjeyRwcm9wZXJ0eX06ICRtaW4tdmFsdWU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWluLXZ3KSB7XHJcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgICAjeyRwcm9wZXJ0eX06IGNhbGMoXHJcbiAgICAgICAgI3skbWluLXZhbHVlfSArICN7c3RyaXAtdW5pdCgkbWF4LXZhbHVlIC0gJG1pbi12YWx1ZSl9ICpcclxuICAgICAgICAgIChcclxuICAgICAgICAgICAgMTAwdncgLSAjeyRtaW4tdnd9XHJcbiAgICAgICAgICApIC8gI3tzdHJpcC11bml0KCRtYXgtdncgLSAkbWluLXZ3KX1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtYXgtdncpIHtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgICN7JHByb3BlcnR5fTogJG1heC12YWx1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBzdHJpcC11bml0KCR2YWx1ZSkge1xyXG4gIEByZXR1cm4gJHZhbHVlIC8gKCR2YWx1ZSAqIDAgKyAxKTtcclxufVxyXG5cclxuQG1peGluIHdyYXBwZXIoJHdpZHRoOjE0NDBweCkge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAkd2lkdGg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMS41cmVtO1xyXG59XHJcblxyXG5AbWl4aW4gZm9udC1zaXplKCRmb250U2l6ZSwgJGxpbmVIZWlnaHQ6IDEpIHtcclxuICAkcmVtVmFsdWU6ICgkZm9udFNpemUgLyAxNik7XHJcbiAgJHB4VmFsdWU6ICRmb250U2l6ZTtcclxuICAkbGluZVZhbHVlOiAoJGxpbmVIZWlnaHQgLyAkZm9udFNpemUpO1xyXG4gIGZvbnQtc2l6ZTogJHB4VmFsdWUgKyBweDtcclxuICBmb250LXNpemU6ICRyZW1WYWx1ZSArIHJlbTtcclxuICBsaW5lLWhlaWdodDogJGxpbmVWYWx1ZTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/gallery/gallery-detail/gallery-detail.component.ts": function srcAppGalleryGalleryDetailGalleryDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryDetailComponent", function () {
      return GalleryDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/core/services/api.service */
    "./src/app/core/services/api.service.ts");
    /* harmony import */


    var _global_untilDestroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @global/untilDestroy */
    "../global/untilDestroy/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_shared_services_design_copy_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/shared/services/design-copy.service */
    "./src/app/shared/services/design-copy.service.ts");
    /* harmony import */


    var _app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/core/services/seo.service */
    "./src/app/core/services/seo.service.ts");
    /* harmony import */


    var _app_shared_main_services_platform_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/shared-main/services/platform.service */
    "./src/app/shared-main/services/platform.service.ts");

    var GalleryDetailComponent = /*#__PURE__*/function () {
      function GalleryDetailComponent(ps, api, route, designCopy, router, seo) {
        _classCallCheck(this, GalleryDetailComponent);

        this.ps = ps;
        this.api = api;
        this.route = route;
        this.designCopy = designCopy;
        this.router = router;
        this.seo = seo;
        this.galleryIndex = 0;
      }

      _createClass(GalleryDetailComponent, [{
        key: "galleryWidth",
        get: function get() {
          return this.imageContainer ? this.imageContainer.nativeElement.clientWidth : 0;
        }
      }, {
        key: "videoOptions",
        value: function videoOptions(image) {
          return {
            // tslint:disable-next-line:max-line-length
            mp4: "https://boxxer-images.ams3.cdn.digitaloceanspaces.com/".concat(image.key)
          };
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getGallery();
        }
      }, {
        key: "getGallery",
        value: function getGallery() {
          var _this = this;

          this.gallery$ = this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) {
            return _this.api.get('gallery', params['slug']);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (gallery) {
            var section = "Gallery | ".concat(gallery.category.title);

            _this.seo.setMetaAndLinks(gallery.title, gallery.seo, section, null, 'article');
          }), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_4__["untilComponentDestroyed"])(this));
        }
      }, {
        key: "copyDesign",
        value: function copyDesign(design) {
          var _this2 = this;

          this.designCopy.copyDesign(design).pipe(Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_4__["untilComponentDestroyed"])(this)).subscribe(function () {
            _this2.router.navigate(['/customiser', design.product._id]);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return GalleryDetailComponent;
    }();

    GalleryDetailComponent.ctorParameters = function () {
      return [{
        type: _app_shared_main_services_platform_service__WEBPACK_IMPORTED_MODULE_8__["PlatformService"]
      }, {
        type: _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _app_shared_services_design_copy_service__WEBPACK_IMPORTED_MODULE_6__["DesignCopyService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_7__["SeoService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageContainer', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], GalleryDetailComponent.prototype, "imageContainer", void 0);
    GalleryDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'bx-gallery-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./gallery-detail.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery-detail/gallery-detail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./gallery-detail.component.scss */
      "./src/app/gallery/gallery-detail/gallery-detail.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_shared_main_services_platform_service__WEBPACK_IMPORTED_MODULE_8__["PlatformService"], _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _app_shared_services_design_copy_service__WEBPACK_IMPORTED_MODULE_6__["DesignCopyService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_7__["SeoService"]])], GalleryDetailComponent);
    /***/
  },

  /***/
  "./src/app/gallery/gallery-list/gallery-item.component.scss": function srcAppGalleryGalleryListGalleryItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".materials .material::after {\n  content: \" - \";\n  display: inline-block;\n  margin: 0 0.2rem;\n}\n.materials .material:last-child::after {\n  content: \"\";\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS1saXN0L0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXGFwcFxcZ2FsbGVyeVxcZ2FsbGVyeS1saXN0XFxnYWxsZXJ5LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnktbGlzdC9nYWxsZXJ5LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0FKO0FERUU7RUFDRSxXQUFBO0VBQ0EsU0FBQTtBQ0FKIiwiZmlsZSI6InByb2plY3RzL2NsaWVudC9zcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS1saXN0L2dhbGxlcnktaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRlcmlhbHMge1xyXG4gIC5tYXRlcmlhbDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyAtICc7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgMC4ycmVtO1xyXG4gIH1cclxuICAubWF0ZXJpYWw6bGFzdC1jaGlsZDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcbiIsIi5tYXRlcmlhbHMgLm1hdGVyaWFsOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIC0gXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDAuMnJlbTtcbn1cbi5tYXRlcmlhbHMgLm1hdGVyaWFsOmxhc3QtY2hpbGQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/gallery/gallery-list/gallery-item.component.ts": function srcAppGalleryGalleryListGalleryItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryItemComponent", function () {
      return GalleryItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");

    var GalleryItemComponent = function GalleryItemComponent() {
      _classCallCheck(this, GalleryItemComponent);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], GalleryItemComponent.prototype, "item", void 0);
    GalleryItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'bx-gallery-item, [bx-gallery-item]',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./gallery-item.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery-list/gallery-item.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./gallery-item.component.scss */
      "./src/app/gallery/gallery-list/gallery-item.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], GalleryItemComponent);
    /***/
  },

  /***/
  "./src/app/gallery/gallery-list/gallery-list.component.scss": function srcAppGalleryGalleryListGalleryListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n  padding: 15px;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 576px) {\n  :host {\n    max-width: 100%;\n  }\n}\n@media (min-width: 768px) {\n  :host {\n    max-width: 100%;\n  }\n}\n@media (min-width: 992px) {\n  :host {\n    max-width: 100%;\n  }\n}\n@media (min-width: 1200px) {\n  :host {\n    max-width: 1440px;\n  }\n}\n@media (min-width: 576px) {\n  :host {\n    padding: 2rem 15px;\n  }\n}\n.page-layout {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.page-layout section {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n@media (min-width: 992px) {\n  .page-layout section {\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%;\n  }\n}\n.page-layout aside {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n@media (min-width: 992px) {\n  .page-layout aside {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%;\n  }\n}\n.page-layout aside.page-sidebar {\n  display: none;\n}\n@media (min-width: 992px) {\n  .page-layout aside.page-sidebar {\n    display: block;\n  }\n}\n.page-grid {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.page-grid .page-grid-item {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n@media (min-width: 576px) {\n  .page-grid .page-grid-item {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n  }\n}\n@media (min-width: 992px) {\n  .page-grid .page-grid-item {\n    -webkit-flex: 0 0 33.3333333333%;\n        -ms-flex: 0 0 33.3333333333%;\n            flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n}\n.bx-pagination {\n  margin-top: 1rem;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.bx-pagination .btn-page {\n  background-color: white;\n  color: #666;\n}\n.bx-pagination .btn-page.current {\n  background-color: #63b20b;\n  color: white;\n}\n.bx-pagination .pagination-next,\n.bx-pagination .pagination-previous {\n  background-color: #ededed;\n}\n.bx-pagination .link {\n  padding: 0.5rem 0.8rem;\n  display: block;\n  cursor: pointer;\n}\n.search {\n  margin: 1rem 0;\n}\n.search .search-field {\n  width: 100%;\n  border: 0;\n  padding: 1rem 0;\n  background-color: #f5f5f5;\n  font-family: \"Oswald\", sans-serif;\n  text-transform: uppercase;\n  font-size: 16px;\n}\n@media screen and (min-width: 320px) {\n  .search .search-field {\n    font-size: calc( 16px + 16 * ( 100vw - 320px ) / 1080 );\n  }\n}\n@media screen and (min-width: 1400px) {\n  .search .search-field {\n    font-size: 32px;\n  }\n}\n.search .search-wrapper {\n  border-bottom: 3px solid #666;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.search .search-icon {\n  color: #666;\n  margin-right: 0.5rem;\n}\n.search .clear-icon {\n  color: #666;\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS1saXN0L0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXHNjc3NcXF9wYWdlLWdyaWQtbGF5b3V0LnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnktbGlzdC9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2dyaWQuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS1saXN0L2dhbGxlcnktbGlzdC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS1saXN0L0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9ub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfYnJlYWtwb2ludHMuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS1saXN0L0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS1saXN0L0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXGFwcFxcZ2FsbGVyeVxcZ2FsbGVyeS1saXN0XFxnYWxsZXJ5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnktbGlzdC9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxzY3NzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQ1ZBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0RGO0FDb0RJO0VIL0NKO0lDSU0sZURYaUI7RUVNckI7QUFDRjtBQytDSTtFSC9DSjtJQ0lNLGVEWGlCO0VFV3JCO0FBQ0Y7QUMwQ0k7RUgvQ0o7SUNJTSxlRFhpQjtFRWdCckI7QUFDRjtBQ3FDSTtFSC9DSjtJQ0lNLGlCRFhpQjtFRXFCckI7QUFDRjtBQ2dDSTtFSC9DSjtJQU1JLGtCQUFBO0VFYUY7QUFDRjtBRlZBO0VDQUUscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx1QkFBQTtNQUFBLG1CQUFBO1VBQUEsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNjRjtBRmZFO0VDS0Esa0JBQUE7RUFJQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1VGO0FDY0k7RUhuQ0Y7SUNlQSxxQkFBQTtRQUFBLGlCQUFBO1lBQUEsYUFBQTtJQUlBLGNBQUE7RUNPQTtBQUNGO0FGckJFO0VDREEsa0JBQUE7RUFJQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ3NCRjtBQ0VJO0VIN0JGO0lDU0EscUJBQUE7UUFBQSxpQkFBQTtZQUFBLGFBQUE7SUFJQSxjQUFBO0VDbUJBO0FBQ0Y7QUY1Qkk7RUFFSSxhQUFBO0FFNkJSO0FDUEk7RUh4QkE7SUFLSSxjQUFBO0VFOEJOO0FBQ0Y7QUZ6QkE7RUN4QkUscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx1QkFBQTtNQUFBLG1CQUFBO1VBQUEsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNxREY7QUY5QkU7RUNuQkEsa0JBQUE7RUFJQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ2lERjtBQ3pCSTtFSFhGO0lDVEEscUJBQUE7UUFBQSxpQkFBQTtZQUFBLGFBQUE7SUFJQSxjQUFBO0VDOENBO0FBQ0Y7QUMvQkk7RUhYRjtJQ1RBLGdDQUFBO1FBQUEsNEJBQUE7WUFBQSx3QkFBQTtJQUlBLHlCQUFBO0VDb0RBO0FBQ0Y7QUZuQ0E7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0FFc0NGO0FGcENFO0VBQ0UsdUJBQUE7RUFDQSxXSS9ETztBRnFHWDtBRnJDSTtFQUNFLHlCSWhFRTtFSmlFRixZQUFBO0FFdUNOO0FGbkNFOztFQUVFLHlCSTFFUTtBRitHWjtBRmxDRTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUVvQ0o7QUdwSEE7RUFDRSxjQUFBO0FIdUhGO0FHdEhFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EseUJEUFk7RUNRWixpQ0FBQTtFQUNBLHlCQUFBO0VDVEEsZURVOEM7QUh3SGxEO0FJL0hFO0VEQUE7SUNFSSx1REFBQTtFSmlJSjtBQUNGO0FJekhFO0VEWEE7SUNhSSxlRE5rRDtFSGlJdEQ7QUFDRjtBR2hJRTtFQUNFLDZCQUFBO0VBQ0EscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSwyQkFBQTtNQUFBLHNCQUFBO1VBQUEsbUJBQUE7QUhrSUo7QUdoSUU7RUFDRSxXRGZPO0VDZ0JQLG9CQUFBO0FIa0lKO0FHaElFO0VBQ0UsV0RuQk87RUNvQlAsbUJBQUE7QUhrSUoiLCJmaWxlIjoicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LWxpc3QvZ2FsbGVyeS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucyc7XHJcbkBpbXBvcnQgJ25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICdub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cyc7XHJcbkBpbXBvcnQgJ25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2dyaWQnO1xyXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXHJcbiAgc206IDEwMCUsXHJcbiAgbWQ6IDEwMCUsXHJcbiAgbGc6IDEwMCUsXHJcbiAgeGw6IDE0NDBweFxyXG4pO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgQGluY2x1ZGUgbWFrZS1jb250YWluZXIoKTtcclxuICBAaW5jbHVkZSBtYWtlLWNvbnRhaW5lci1tYXgtd2lkdGhzKCRjb250YWluZXItbWF4LXdpZHRocyk7XHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChzbSkge1xyXG4gICAgcGFkZGluZzogMnJlbSAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLnBhZ2UtbGF5b3V0IHtcclxuICBAaW5jbHVkZSBtYWtlLXJvdygpO1xyXG4gIHNlY3Rpb24ge1xyXG4gICAgQGluY2x1ZGUgbWFrZS1jb2wtcmVhZHkoKTtcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcclxuICAgICAgQGluY2x1ZGUgbWFrZS1jb2woOSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzaWRlIHtcclxuICAgIEBpbmNsdWRlIG1ha2UtY29sLXJlYWR5KCk7XHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7XHJcbiAgICAgIEBpbmNsdWRlIG1ha2UtY29sKDMpO1xyXG4gICAgfVxyXG4gICAgJi5wYWdlLXNpZGViYXIge1xyXG4gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHhzKSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wYWdlLWdyaWQge1xyXG4gIEBpbmNsdWRlIG1ha2Utcm93KCk7XHJcbiAgLnBhZ2UtZ3JpZC1pdGVtIHtcclxuICAgIEBpbmNsdWRlIG1ha2UtY29sLXJlYWR5KCk7XHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHNtKSB7XHJcbiAgICAgIEBpbmNsdWRlIG1ha2UtY29sKDYpO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykge1xyXG4gICAgICBAaW5jbHVkZSBtYWtlLWNvbCg0KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vUGFnaW5hdGlvblxyXG5cclxuLmJ4LXBhZ2luYXRpb24ge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgLmJ0bi1wYWdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6ICRkYXJrZ3JleTtcclxuICAgICYuY3VycmVudCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBhZ2luYXRpb24tbmV4dCxcclxuICAucGFnaW5hdGlvbi1wcmV2aW91cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRncmV5O1xyXG4gIH1cclxuXHJcbiAgLmxpbmsge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDAuOHJlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG4iLCIvLy8gR3JpZCBzeXN0ZW1cbi8vXG4vLyBHZW5lcmF0ZSBzZW1hbnRpYyBncmlkIGNvbHVtbnMgd2l0aCB0aGVzZSBtaXhpbnMuXG5cbkBtaXhpbiBtYWtlLWNvbnRhaW5lcigkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6ICRndXR0ZXIgLyAyO1xuICBwYWRkaW5nLWxlZnQ6ICRndXR0ZXIgLyAyO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG5cbi8vIEZvciBlYWNoIGJyZWFrcG9pbnQsIGRlZmluZSB0aGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgY29udGFpbmVyIGluIGEgbWVkaWEgcXVlcnlcbkBtaXhpbiBtYWtlLWNvbnRhaW5lci1tYXgtd2lkdGhzKCRtYXgtd2lkdGhzOiAkY29udGFpbmVyLW1heC13aWR0aHMsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQGVhY2ggJGJyZWFrcG9pbnQsICRjb250YWluZXItbWF4LXdpZHRoIGluICRtYXgtd2lkdGhzIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50LCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIG1heC13aWR0aDogJGNvbnRhaW5lci1tYXgtd2lkdGg7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYWtlLXJvdygkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tcmlnaHQ6IC0kZ3V0dGVyIC8gMjtcbiAgbWFyZ2luLWxlZnQ6IC0kZ3V0dGVyIC8gMjtcbn1cblxuQG1peGluIG1ha2UtY29sLXJlYWR5KCRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vIFByZXZlbnQgY29sdW1ucyBmcm9tIGJlY29taW5nIHRvbyBuYXJyb3cgd2hlbiBhdCBzbWFsbGVyIGdyaWQgdGllcnMgYnlcbiAgLy8gYWx3YXlzIHNldHRpbmcgYHdpZHRoOiAxMDAlO2AuIFRoaXMgd29ya3MgYmVjYXVzZSB3ZSB1c2UgYGZsZXhgIHZhbHVlc1xuICAvLyBsYXRlciBvbiB0byBvdmVycmlkZSB0aGlzIGluaXRpYWwgd2lkdGguXG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAkZ3V0dGVyIC8gMjtcbiAgcGFkZGluZy1sZWZ0OiAkZ3V0dGVyIC8gMjtcbn1cblxuQG1peGluIG1ha2UtY29sKCRzaXplLCAkY29sdW1uczogJGdyaWQtY29sdW1ucykge1xuICBmbGV4OiAwIDAgcGVyY2VudGFnZSgkc2l6ZSAvICRjb2x1bW5zKTtcbiAgLy8gQWRkIGEgYG1heC13aWR0aGAgdG8gZW5zdXJlIGNvbnRlbnQgd2l0aGluIGVhY2ggY29sdW1uIGRvZXMgbm90IGJsb3cgb3V0XG4gIC8vIHRoZSB3aWR0aCBvZiB0aGUgY29sdW1uLiBBcHBsaWVzIHRvIElFMTArIGFuZCBGaXJlZm94LiBDaHJvbWUgYW5kIFNhZmFyaVxuICAvLyBkbyBub3QgYXBwZWFyIHRvIHJlcXVpcmUgdGhpcy5cbiAgbWF4LXdpZHRoOiBwZXJjZW50YWdlKCRzaXplIC8gJGNvbHVtbnMpO1xufVxuXG5AbWl4aW4gbWFrZS1jb2wtb2Zmc2V0KCRzaXplLCAkY29sdW1uczogJGdyaWQtY29sdW1ucykge1xuICAkbnVtOiAkc2l6ZSAvICRjb2x1bW5zO1xuICBtYXJnaW4tbGVmdDogaWYoJG51bSA9PSAwLCAwLCBwZXJjZW50YWdlKCRudW0pKTtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgOmhvc3Qge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICA6aG9zdCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIDpob3N0IHtcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIDpob3N0IHtcbiAgICBwYWRkaW5nOiAycmVtIDE1cHg7XG4gIH1cbn1cblxuLnBhZ2UtbGF5b3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG4ucGFnZS1sYXlvdXQgc2VjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAucGFnZS1sYXlvdXQgc2VjdGlvbiB7XG4gICAgZmxleDogMCAwIDc1JTtcbiAgICBtYXgtd2lkdGg6IDc1JTtcbiAgfVxufVxuLnBhZ2UtbGF5b3V0IGFzaWRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5wYWdlLWxheW91dCBhc2lkZSB7XG4gICAgZmxleDogMCAwIDI1JTtcbiAgICBtYXgtd2lkdGg6IDI1JTtcbiAgfVxufVxuLnBhZ2UtbGF5b3V0IGFzaWRlLnBhZ2Utc2lkZWJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnBhZ2UtbGF5b3V0IGFzaWRlLnBhZ2Utc2lkZWJhciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLnBhZ2UtZ3JpZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuLnBhZ2UtZ3JpZCAucGFnZS1ncmlkLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLnBhZ2UtZ3JpZCAucGFnZS1ncmlkLWl0ZW0ge1xuICAgIGZsZXg6IDAgMCA1MCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAucGFnZS1ncmlkIC5wYWdlLWdyaWQtaXRlbSB7XG4gICAgZmxleDogMCAwIDMzLjMzMzMzMzMzMzMlO1xuICAgIG1heC13aWR0aDogMzMuMzMzMzMzMzMzMyU7XG4gIH1cbn1cblxuLmJ4LXBhZ2luYXRpb24ge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJ4LXBhZ2luYXRpb24gLmJ0bi1wYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjNjY2O1xufVxuLmJ4LXBhZ2luYXRpb24gLmJ0bi1wYWdlLmN1cnJlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjNiMjBiO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYngtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0LFxuLmJ4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xufVxuLmJ4LXBhZ2luYXRpb24gLmxpbmsge1xuICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VhcmNoIHtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG4uc2VhcmNoIC5zZWFyY2gtZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xuICAuc2VhcmNoIC5zZWFyY2gtZmllbGQge1xuICAgIGZvbnQtc2l6ZTogY2FsYyggMTZweCArIDE2ICogKCAxMDB2dyAtIDMyMHB4ICkgLyAxMDgwICk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xuICAuc2VhcmNoIC5zZWFyY2gtZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxufVxuLnNlYXJjaCAuc2VhcmNoLXdyYXBwZXIge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzY2NjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zZWFyY2ggLnNlYXJjaC1pY29uIHtcbiAgY29sb3I6ICM2NjY7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuLnNlYXJjaCAuY2xlYXItaWNvbiB7XG4gIGNvbG9yOiAjNjY2O1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xufSIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIiwiLy9Db2xvcnNcclxuJGJsYWNrOiAjMzYzNjM2O1xyXG4kdmVyeWxpZ2h0Z3JleTogI2Y1ZjVmNTtcclxuJGxpZ2h0Z3JleTogI2VkZWRlZDtcclxuJG1pZGdyZXk6ICM5OTk7XHJcbiRkYXJrZ3JleTogIzY2NjtcclxuJGdyZWVuOiAjNjNiMjBiO1xyXG4kcmVkOiAjY2UwNTA1O1xyXG4vL0ZvbnRzXHJcbiRkZWZhdWx0Rm9udDogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiRkaXNwbGF5Rm9udDogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiIsIkBpbXBvcnQgJ3BhZ2UtZ3JpZC1sYXlvdXQnO1xyXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICdtaXhpbnMnO1xyXG4uc2VhcmNoIHtcclxuICBtYXJnaW46IDFyZW0gMDtcclxuICAuc2VhcmNoLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHZlcnlsaWdodGdyZXk7XHJcbiAgICBmb250LWZhbWlseTogJGRpc3BsYXlGb250O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIEBpbmNsdWRlIGZsdWlkLXR5cGUoZm9udC1zaXplLCAzMjBweCwgMTQwMHB4LCAxNnB4LCAzMnB4KTtcclxuICB9XHJcbiAgLnNlYXJjaC13cmFwcGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkZGFya2dyZXk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLnNlYXJjaC1pY29uIHtcclxuICAgIGNvbG9yOiAkZGFya2dyZXk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICB9XHJcbiAgLmNsZWFyLWljb24ge1xyXG4gICAgY29sb3I6ICRkYXJrZ3JleTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgfVxyXG59XHJcbiIsIkBtaXhpbiBmbHVpZC10eXBlKCRwcm9wZXJ0aWVzLCAkbWluLXZ3LCAkbWF4LXZ3LCAkbWluLXZhbHVlLCAkbWF4LXZhbHVlKSB7XHJcbiAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcclxuICAgICN7JHByb3BlcnR5fTogJG1pbi12YWx1ZTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4tdncpIHtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgICN7JHByb3BlcnR5fTogY2FsYyhcclxuICAgICAgICAjeyRtaW4tdmFsdWV9ICsgI3tzdHJpcC11bml0KCRtYXgtdmFsdWUgLSAkbWluLXZhbHVlKX0gKlxyXG4gICAgICAgICAgKFxyXG4gICAgICAgICAgICAxMDB2dyAtICN7JG1pbi12d31cclxuICAgICAgICAgICkgLyAje3N0cmlwLXVuaXQoJG1heC12dyAtICRtaW4tdncpfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1heC12dykge1xyXG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcclxuICAgICAgI3skcHJvcGVydHl9OiAkbWF4LXZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGZ1bmN0aW9uIHN0cmlwLXVuaXQoJHZhbHVlKSB7XHJcbiAgQHJldHVybiAkdmFsdWUgLyAoJHZhbHVlICogMCArIDEpO1xyXG59XHJcblxyXG5AbWl4aW4gd3JhcHBlcigkd2lkdGg6MTQ0MHB4KSB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6ICR3aWR0aDtcclxuICBtYXJnaW46IDAgYXV0byAxLjVyZW07XHJcbn1cclxuXHJcbkBtaXhpbiBmb250LXNpemUoJGZvbnRTaXplLCAkbGluZUhlaWdodDogMSkge1xyXG4gICRyZW1WYWx1ZTogKCRmb250U2l6ZSAvIDE2KTtcclxuICAkcHhWYWx1ZTogJGZvbnRTaXplO1xyXG4gICRsaW5lVmFsdWU6ICgkbGluZUhlaWdodCAvICRmb250U2l6ZSk7XHJcbiAgZm9udC1zaXplOiAkcHhWYWx1ZSArIHB4O1xyXG4gIGZvbnQtc2l6ZTogJHJlbVZhbHVlICsgcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZVZhbHVlO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/gallery/gallery-list/gallery-list.component.ts": function srcAppGalleryGalleryListGalleryListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryListComponent", function () {
      return GalleryListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/services/api.service */
    "./src/app/core/services/api.service.ts");
    /* harmony import */


    var _w11k_ngx_componentdestroyed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @w11k/ngx-componentdestroyed */
    "../../node_modules/@w11k/ngx-componentdestroyed/dist/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/core/services/seo.service */
    "./src/app/core/services/seo.service.ts");

    var GalleryListComponent = /*#__PURE__*/function () {
      function GalleryListComponent(api, route, router, seo, fb) {
        _classCallCheck(this, GalleryListComponent);

        this.api = api;
        this.route = route;
        this.router = router;
        this.seo = seo;
        this.fb = fb;
        this.currentPage = 1;
        this.itemsPerPage = 24;
      }

      _createClass(GalleryListComponent, [{
        key: "pageCount",
        get: function get() {
          return Math.ceil(this.total / this.itemsPerPage);
        }
      }, {
        key: "terms",
        get: function get() {
          return this.searchForm.get('terms').value;
        },
        set: function set(terms) {
          this.searchForm.get('terms').setValue(terms);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.searchForm = this.fb.group({
            terms: []
          });
          this.searchForm.get('terms').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(Object(_w11k_ngx_componentdestroyed__WEBPACK_IMPORTED_MODULE_5__["componentDestroyed"])(this))).subscribe(function (terms) {
            _this3.setParams();
          });
          this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (params) {
            _this3.category = "".concat(_this3.route.snapshot.parent.url.toString(), "/").concat(params['catid']);
            return _this3.route.queryParams;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (params) {
            if (!params['product']) {
              _this3.product = null;
            }

            _this3.terms = params.q || null;

            _this3.getPage(params['p'] || 1, params['product']);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(Object(_w11k_ngx_componentdestroyed__WEBPACK_IMPORTED_MODULE_5__["componentDestroyed"])(this))).subscribe();
        }
      }, {
        key: "getPage",
        value: function getPage(page, product) {
          var _this4 = this;

          var galleryQuery = {
            $category: this.category,
            published: true,
            $limit: this.itemsPerPage,
            $skip: (page - 1) * this.itemsPerPage,
            $sort: {
              createdAt: -1
            },
            product: product,
            $select: ['title', 'category', 'product', 'list_image', 'slug', 'images']
          };

          if (this.terms) {
            galleryQuery = Object.assign({}, galleryQuery, {
              $search: this.terms
            });
          }

          if (product) {
            galleryQuery = Object.assign({}, galleryQuery, {
              product: product
            });
          }

          this.galleries = this.api.find('gallery', galleryQuery).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (resp) {
            _this4.currentPage = page;
            _this4.product = !product ? _this4.product : product;
            _this4.page_data = resp.page_data;
            _this4.total = resp.total;

            _this4.setParams();

            _this4.seo.setMetaAndLinks(resp.page_data.title, resp.page_data.seo, 'Gallery', null, null, _this4.currentPage > 1 ? true : false);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (resp) {
            _this4.itemsLength = resp.data.length;
            return resp.data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(Object(_w11k_ngx_componentdestroyed__WEBPACK_IMPORTED_MODULE_5__["componentDestroyed"])(this)));
        }
      }, {
        key: "setParams",
        value: function setParams() {
          var params = {};

          if (this.currentPage > 1) {
            params.p = this.currentPage;
          }

          if (this.product) {
            params.product = this.product;
          }

          if (this.terms) {
            params.q = this.terms;
          }

          this.router.navigate([], {
            queryParams: params
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return GalleryListComponent;
    }();

    GalleryListComponent.ctorParameters = function () {
      return [{
        type: _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_7__["SeoService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }];
    };

    GalleryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'bx-gallery-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./gallery-list.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery-list/gallery-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./gallery-list.component.scss */
      "./src/app/gallery/gallery-list/gallery-list.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_7__["SeoService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])], GalleryListComponent);
    /***/
  },

  /***/
  "./src/app/gallery/gallery-routing.module.ts": function srcAppGalleryGalleryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryRoutingModule", function () {
      return GalleryRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _gallery_detail_gallery_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./gallery-detail/gallery-detail.component */
    "./src/app/gallery/gallery-detail/gallery-detail.component.ts");
    /* harmony import */


    var _gallery_list_gallery_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./gallery-list/gallery-list.component */
    "./src/app/gallery/gallery-list/gallery-list.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: 'shorts-trunks',
      pathMatch: 'full'
    }, {
      path: ':catid',
      component: _gallery_list_gallery_list_component__WEBPACK_IMPORTED_MODULE_2__["GalleryListComponent"]
    }, {
      path: ':catid/:slug',
      component: _gallery_detail_gallery_detail_component__WEBPACK_IMPORTED_MODULE_1__["GalleryDetailComponent"]
    }];

    var GalleryRoutingModule = function GalleryRoutingModule() {
      _classCallCheck(this, GalleryRoutingModule);
    };

    GalleryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
      providers: []
    })], GalleryRoutingModule);
    /***/
  },

  /***/
  "./src/app/gallery/gallery.module.ts": function srcAppGalleryGalleryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryModule", function () {
      return GalleryModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_shared_modules_card_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/shared/modules/card/card.module */
    "./src/app/shared/modules/card/card.module.ts");
    /* harmony import */


    var _app_shared_modules_sidebar_nav_sidebar_nav_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/shared/modules/sidebar-nav/sidebar-nav.module */
    "./src/app/shared/modules/sidebar-nav/sidebar-nav.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _gallery_detail_gallery_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./gallery-detail/gallery-detail.component */
    "./src/app/gallery/gallery-detail/gallery-detail.component.ts");
    /* harmony import */


    var _gallery_list_gallery_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./gallery-list/gallery-item.component */
    "./src/app/gallery/gallery-list/gallery-item.component.ts");
    /* harmony import */


    var _gallery_list_gallery_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./gallery-list/gallery-list.component */
    "./src/app/gallery/gallery-list/gallery-list.component.ts");
    /* harmony import */


    var _gallery_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./gallery-routing.module */
    "./src/app/gallery/gallery-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");

    var GalleryModule = function GalleryModule() {
      _classCallCheck(this, GalleryModule);
    };

    GalleryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _app_shared_modules_card_card_module__WEBPACK_IMPORTED_MODULE_2__["CardModule"], _app_shared_modules_sidebar_nav_sidebar_nav_module__WEBPACK_IMPORTED_MODULE_3__["SidebarNavModule"], _gallery_routing_module__WEBPACK_IMPORTED_MODULE_8__["GalleryRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]],
      declarations: [_gallery_list_gallery_list_component__WEBPACK_IMPORTED_MODULE_7__["GalleryListComponent"], _gallery_list_gallery_item_component__WEBPACK_IMPORTED_MODULE_6__["GalleryItemComponent"], _gallery_detail_gallery_detail_component__WEBPACK_IMPORTED_MODULE_5__["GalleryDetailComponent"]],
      providers: []
    })], GalleryModule);
    /***/
  }
}]);
//# sourceMappingURL=app-gallery-gallery-module-es5.js.map