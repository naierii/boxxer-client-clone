(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-size-guide-size-guide-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/size-guide/custom-sizes/custom-sizes-item.component.html":
/*!************************************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/size-guide/custom-sizes/custom-sizes-item.component.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div bxCard>\r\n  <div bxImageWrapper [aspect_ratio]=\"1.0183299389\" *ngIf=\"item.image\">\r\n    <img [bxLazysizes]=\"item.image.key\" [crop_ratio]=\"1.0183299389\" />\r\n  </div>\r\n  <div bxCardContent>\r\n    <h2 bxCardTitle>\r\n      {{ item.size }}\r\n      <span *ngIf=\"item.jean_size\"> (Jean Size {{ item.jean_size }})</span>\r\n      <span *ngIf=\"item.child_size\"> ({{ item.child_size }})</span>\r\n    </h2>\r\n  </div>\r\n  <div bxCardFooter *ngIf=\"item.style\">\r\n    {{ item.style[0] }}\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/size-guide/custom-sizes/custom-sizes.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/size-guide/custom-sizes/custom-sizes.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-layout\">\r\n  <aside>\r\n    <div bxCard>\r\n      <div bxCardContent>\r\n        <div class=\"parent-menu\">\r\n          <div class=\"header\">\r\n            <h2>Filter Size by type</h2>\r\n          </div>\r\n          <ul class=\"product-type\">\r\n            <li [ngClass]=\"{'selected': selectedType === term._id}\" *ngFor=\"let term of terms$ | async\" (click)=\"filterByType(term._id)\">{{term.title}}</li>\r\n          </ul>\r\n          <div class=\"header\" *ngIf=\"sizes && sizes.length\">\r\n            <h2>Filter by size</h2>\r\n          </div>\r\n          <ul class=\"sizes\" *ngIf=\"sizes && sizes.length\">\r\n            <li [ngClass]=\"{'selected': selectedSize === size}\" *ngFor=\"let size of sizes\" (click)=\"filterBySize(size)\">{{size}}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </aside>\r\n  <section class=\"page-content\">\r\n    <bx-page-header>\r\n      <div class=\"page-header\" *ngIf=\"(page$ | async) as page\">\r\n        <h1>{{page.title}}</h1>\r\n        <span [innerHTML]=\"page.description\"></span>\r\n      </div>\r\n    </bx-page-header>\r\n    <div class=\"page-grid\">\r\n      <div class=\"page-grid-item\" bx-custom-sizes-item *ngFor=\"let item of sizes$ | async\" [item]=\"item\"></div>\r\n    </div>\r\n  </section>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/size-guide/custom-sizes/custom-sizes-item.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/size-guide/custom-sizes/custom-sizes-item.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9zaXplLWd1aWRlL2N1c3RvbS1zaXplcy9jdXN0b20tc2l6ZXMtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/size-guide/custom-sizes/custom-sizes-item.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/size-guide/custom-sizes/custom-sizes-item.component.ts ***!
  \************************************************************************/
/*! exports provided: CustomSizesItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSizesItemComponent", function() { return CustomSizesItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let CustomSizesItemComponent = class CustomSizesItemComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CustomSizesItemComponent.prototype, "item", void 0);
CustomSizesItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'bx-custom-sizes-item, [bx-custom-sizes-item]',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-sizes-item.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/size-guide/custom-sizes/custom-sizes-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-sizes-item.component.scss */ "./src/app/size-guide/custom-sizes/custom-sizes-item.component.scss")).default]
    })
], CustomSizesItemComponent);



/***/ }),

/***/ "./src/app/size-guide/custom-sizes/custom-sizes.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/size-guide/custom-sizes/custom-sizes.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  padding: 15px;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 576px) {\n  :host {\n    max-width: 100%;\n  }\n}\n@media (min-width: 768px) {\n  :host {\n    max-width: 100%;\n  }\n}\n@media (min-width: 992px) {\n  :host {\n    max-width: 100%;\n  }\n}\n@media (min-width: 1200px) {\n  :host {\n    max-width: 1440px;\n  }\n}\n@media (min-width: 576px) {\n  :host {\n    padding: 2rem 15px;\n  }\n}\n.page-layout {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.page-layout section {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n@media (min-width: 992px) {\n  .page-layout section {\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%;\n  }\n}\n.page-layout aside {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n@media (min-width: 992px) {\n  .page-layout aside {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%;\n  }\n}\n.page-layout aside.page-sidebar {\n  display: none;\n}\n@media (min-width: 992px) {\n  .page-layout aside.page-sidebar {\n    display: block;\n  }\n}\n.page-grid {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.page-grid .page-grid-item {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n@media (min-width: 576px) {\n  .page-grid .page-grid-item {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n  }\n}\n@media (min-width: 992px) {\n  .page-grid .page-grid-item {\n    -webkit-flex: 0 0 33.3333333333%;\n        -ms-flex: 0 0 33.3333333333%;\n            flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n}\n.bx-pagination {\n  margin-top: 1rem;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.bx-pagination .btn-page {\n  background-color: white;\n  color: #666;\n}\n.bx-pagination .btn-page.current {\n  background-color: #63b20b;\n  color: white;\n}\n.bx-pagination .pagination-next,\n.bx-pagination .pagination-previous {\n  background-color: #ededed;\n}\n.bx-pagination .link {\n  padding: 0.5rem 0.8rem;\n  display: block;\n  cursor: pointer;\n}\n.sizes, .product-type {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 0.5rem;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n.invalid.sizes li, .invalid.product-type li {\n  border-color: #f44336;\n}\n.sizes li, .product-type li {\n  width: 50%;\n  font-family: \"Oswald\", sans-serif;\n  text-transform: uppercase;\n  background-color: white;\n  padding: 0.5rem;\n  text-align: center;\n  font-size: 14px;\n  font-size: 0.875rem;\n  line-height: 1;\n  border: 1px solid #ededed;\n  cursor: pointer;\n  margin: -1px -1px 0 0;\n  color: #363636;\n}\n.sizes li.selected, .product-type li.selected, .sizes li:hover, .product-type li:hover {\n  background-color: #63b20b;\n  color: white;\n}\n.parent-menu {\n  margin-bottom: 1.5rem;\n}\n.parent-menu .header {\n  padding-bottom: 0.5rem;\n  margin: 0;\n  border-bottom: 1px solid #f5f5f5;\n}\n.parent-menu .header h2 {\n  font-size: 24px;\n  font-size: 1.5rem;\n  line-height: 1;\n  margin: 0;\n}\n.parent-menu .header .info {\n  color: #666;\n  font-size: 12px;\n  font-size: 0.75rem;\n  line-height: 1;\n  text-transform: uppercase;\n  font-family: \"Oswald\", sans-serif;\n  margin-top: 0.2rem;\n}\n.sizes li {\n  width: 33.33%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL3NpemUtZ3VpZGUvY3VzdG9tLXNpemVzL0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXHNjc3NcXF9wYWdlLWdyaWQtbGF5b3V0LnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9zaXplLWd1aWRlL2N1c3RvbS1zaXplcy9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2dyaWQuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL3NpemUtZ3VpZGUvY3VzdG9tLXNpemVzL2N1c3RvbS1zaXplcy5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL3NpemUtZ3VpZGUvY3VzdG9tLXNpemVzL0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9ub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfYnJlYWtwb2ludHMuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL3NpemUtZ3VpZGUvY3VzdG9tLXNpemVzL0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL3NpemUtZ3VpZGUvY3VzdG9tLXNpemVzL0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXHNjc3NcXF9wYXJ0aWFsLnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9zaXplLWd1aWRlL2N1c3RvbS1zaXplcy9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxzY3NzXFxfbWl4aW5zLnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9zaXplLWd1aWRlL2N1c3RvbS1zaXplcy9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxhcHBcXHNpemUtZ3VpZGVcXGN1c3RvbS1zaXplc1xcY3VzdG9tLXNpemVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUNWQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNERjtBQ29ESTtFSC9DSjtJQ0lNLGVEWGlCO0VFTXJCO0FBQ0Y7QUMrQ0k7RUgvQ0o7SUNJTSxlRFhpQjtFRVdyQjtBQUNGO0FDMENJO0VIL0NKO0lDSU0sZURYaUI7RUVnQnJCO0FBQ0Y7QUNxQ0k7RUgvQ0o7SUNJTSxpQkRYaUI7RUVxQnJCO0FBQ0Y7QUNnQ0k7RUgvQ0o7SUFNSSxrQkFBQTtFRWFGO0FBQ0Y7QUZWQTtFQ0FFLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsdUJBQUE7TUFBQSxtQkFBQTtVQUFBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDY0Y7QUZmRTtFQ0tBLGtCQUFBO0VBSUEsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNVRjtBQ2NJO0VIbkNGO0lDZUEscUJBQUE7UUFBQSxpQkFBQTtZQUFBLGFBQUE7SUFJQSxjQUFBO0VDT0E7QUFDRjtBRnJCRTtFQ0RBLGtCQUFBO0VBSUEsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNzQkY7QUNFSTtFSDdCRjtJQ1NBLHFCQUFBO1FBQUEsaUJBQUE7WUFBQSxhQUFBO0lBSUEsY0FBQTtFQ21CQTtBQUNGO0FGNUJJO0VBRUksYUFBQTtBRTZCUjtBQ1BJO0VIeEJBO0lBS0ksY0FBQTtFRThCTjtBQUNGO0FGekJBO0VDeEJFLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsdUJBQUE7TUFBQSxtQkFBQTtVQUFBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDcURGO0FGOUJFO0VDbkJBLGtCQUFBO0VBSUEsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNpREY7QUN6Qkk7RUhYRjtJQ1RBLHFCQUFBO1FBQUEsaUJBQUE7WUFBQSxhQUFBO0lBSUEsY0FBQTtFQzhDQTtBQUNGO0FDL0JJO0VIWEY7SUNUQSxnQ0FBQTtRQUFBLDRCQUFBO1lBQUEsd0JBQUE7SUFJQSx5QkFBQTtFQ29EQTtBQUNGO0FGbkNBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtBRXNDRjtBRnBDRTtFQUNFLHVCQUFBO0VBQ0EsV0kvRE87QUZxR1g7QUZyQ0k7RUFDRSx5QkloRUU7RUppRUYsWUFBQTtBRXVDTjtBRm5DRTs7RUFFRSx5QkkxRVE7QUYrR1o7QUZsQ0U7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FFb0NKO0FHcEhBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCQUFBO01BQUEsbUJBQUE7VUFBQSxlQUFBO0FIdUhGO0FHckhJO0VBQ0UscUJBQUE7QUh1SE47QUdwSEU7RUFDRSxVQUFBO0VBQ0EsaUNETlU7RUNPVix5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VDa0JGLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBSFk7RURmVix5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNEeEJJO0FGZ0pSO0FHdkhJO0VBRUUseUJEdEJFO0VDdUJGLFlBQUE7QUh3SE47QUtoSkE7RUFDRSxxQkFBQTtBTG1KRjtBS2xKRTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FMb0pKO0FLbkpJO0VEMkJGLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBSFk7RUN4QlIsU0FBQTtBTHVKTjtBS3JKSTtFQUNFLFdIWEs7RUVpQ1QsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FIWTtFQ25CUix5QkFBQTtFQUNBLGlDSFRRO0VHVVIsa0JBQUE7QUx5Sk47QUs5SUU7RUFDRSxhQUFBO0FMaUpKIiwiZmlsZSI6InByb2plY3RzL2NsaWVudC9zcmMvYXBwL3NpemUtZ3VpZGUvY3VzdG9tLXNpemVzL2N1c3RvbS1zaXplcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnO1xyXG5AaW1wb3J0ICdub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJztcclxuQGltcG9ydCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHMnO1xyXG5AaW1wb3J0ICdub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19ncmlkJztcclxuQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbiRjb250YWluZXItbWF4LXdpZHRoczogKFxyXG4gIHNtOiAxMDAlLFxyXG4gIG1kOiAxMDAlLFxyXG4gIGxnOiAxMDAlLFxyXG4gIHhsOiAxNDQwcHhcclxuKTtcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIEBpbmNsdWRlIG1ha2UtY29udGFpbmVyKCk7XHJcbiAgQGluY2x1ZGUgbWFrZS1jb250YWluZXItbWF4LXdpZHRocygkY29udGFpbmVyLW1heC13aWR0aHMpO1xyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoc20pIHtcclxuICAgIHBhZGRpbmc6IDJyZW0gMTVweDtcclxuICB9XHJcbn1cclxuXHJcbi5wYWdlLWxheW91dCB7XHJcbiAgQGluY2x1ZGUgbWFrZS1yb3coKTtcclxuICBzZWN0aW9uIHtcclxuICAgIEBpbmNsdWRlIG1ha2UtY29sLXJlYWR5KCk7XHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7XHJcbiAgICAgIEBpbmNsdWRlIG1ha2UtY29sKDkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBhc2lkZSB7XHJcbiAgICBAaW5jbHVkZSBtYWtlLWNvbC1yZWFkeSgpO1xyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykge1xyXG4gICAgICBAaW5jbHVkZSBtYWtlLWNvbCgzKTtcclxuICAgIH1cclxuICAgICYucGFnZS1zaWRlYmFyIHtcclxuICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCh4cykge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucGFnZS1ncmlkIHtcclxuICBAaW5jbHVkZSBtYWtlLXJvdygpO1xyXG4gIC5wYWdlLWdyaWQtaXRlbSB7XHJcbiAgICBAaW5jbHVkZSBtYWtlLWNvbC1yZWFkeSgpO1xyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChzbSkge1xyXG4gICAgICBAaW5jbHVkZSBtYWtlLWNvbCg2KTtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcclxuICAgICAgQGluY2x1ZGUgbWFrZS1jb2woNCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vL1BhZ2luYXRpb25cclxuXHJcbi5ieC1wYWdpbmF0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIC5idG4tcGFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAkZGFya2dyZXk7XHJcbiAgICAmLmN1cnJlbnQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wYWdpbmF0aW9uLW5leHQsXHJcbiAgLnBhZ2luYXRpb24tcHJldmlvdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Z3JleTtcclxuICB9XHJcblxyXG4gIC5saW5rIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjhyZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuIiwiLy8vIEdyaWQgc3lzdGVtXG4vL1xuLy8gR2VuZXJhdGUgc2VtYW50aWMgZ3JpZCBjb2x1bW5zIHdpdGggdGhlc2UgbWl4aW5zLlxuXG5AbWl4aW4gbWFrZS1jb250YWluZXIoJGd1dHRlcjogJGdyaWQtZ3V0dGVyLXdpZHRoKSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAkZ3V0dGVyIC8gMjtcbiAgcGFkZGluZy1sZWZ0OiAkZ3V0dGVyIC8gMjtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuXG4vLyBGb3IgZWFjaCBicmVha3BvaW50LCBkZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGNvbnRhaW5lciBpbiBhIG1lZGlhIHF1ZXJ5XG5AbWl4aW4gbWFrZS1jb250YWluZXItbWF4LXdpZHRocygkbWF4LXdpZHRoczogJGNvbnRhaW5lci1tYXgtd2lkdGhzLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEBlYWNoICRicmVha3BvaW50LCAkY29udGFpbmVyLW1heC13aWR0aCBpbiAkbWF4LXdpZHRocyB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBtYXgtd2lkdGg6ICRjb250YWluZXItbWF4LXdpZHRoO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWFrZS1yb3coJGd1dHRlcjogJGdyaWQtZ3V0dGVyLXdpZHRoKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXJpZ2h0OiAtJGd1dHRlciAvIDI7XG4gIG1hcmdpbi1sZWZ0OiAtJGd1dHRlciAvIDI7XG59XG5cbkBtaXhpbiBtYWtlLWNvbC1yZWFkeSgkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyBQcmV2ZW50IGNvbHVtbnMgZnJvbSBiZWNvbWluZyB0b28gbmFycm93IHdoZW4gYXQgc21hbGxlciBncmlkIHRpZXJzIGJ5XG4gIC8vIGFsd2F5cyBzZXR0aW5nIGB3aWR0aDogMTAwJTtgLiBUaGlzIHdvcmtzIGJlY2F1c2Ugd2UgdXNlIGBmbGV4YCB2YWx1ZXNcbiAgLy8gbGF0ZXIgb24gdG8gb3ZlcnJpZGUgdGhpcyBpbml0aWFsIHdpZHRoLlxuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogJGd1dHRlciAvIDI7XG4gIHBhZGRpbmctbGVmdDogJGd1dHRlciAvIDI7XG59XG5cbkBtaXhpbiBtYWtlLWNvbCgkc2l6ZSwgJGNvbHVtbnM6ICRncmlkLWNvbHVtbnMpIHtcbiAgZmxleDogMCAwIHBlcmNlbnRhZ2UoJHNpemUgLyAkY29sdW1ucyk7XG4gIC8vIEFkZCBhIGBtYXgtd2lkdGhgIHRvIGVuc3VyZSBjb250ZW50IHdpdGhpbiBlYWNoIGNvbHVtbiBkb2VzIG5vdCBibG93IG91dFxuICAvLyB0aGUgd2lkdGggb2YgdGhlIGNvbHVtbi4gQXBwbGllcyB0byBJRTEwKyBhbmQgRmlyZWZveC4gQ2hyb21lIGFuZCBTYWZhcmlcbiAgLy8gZG8gbm90IGFwcGVhciB0byByZXF1aXJlIHRoaXMuXG4gIG1heC13aWR0aDogcGVyY2VudGFnZSgkc2l6ZSAvICRjb2x1bW5zKTtcbn1cblxuQG1peGluIG1ha2UtY29sLW9mZnNldCgkc2l6ZSwgJGNvbHVtbnM6ICRncmlkLWNvbHVtbnMpIHtcbiAgJG51bTogJHNpemUgLyAkY29sdW1ucztcbiAgbWFyZ2luLWxlZnQ6IGlmKCRudW0gPT0gMCwgMCwgcGVyY2VudGFnZSgkbnVtKSk7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIDpob3N0IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICA6aG9zdCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgOmhvc3Qge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICA6aG9zdCB7XG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICA6aG9zdCB7XG4gICAgcGFkZGluZzogMnJlbSAxNXB4O1xuICB9XG59XG5cbi5wYWdlLWxheW91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuLnBhZ2UtbGF5b3V0IHNlY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnBhZ2UtbGF5b3V0IHNlY3Rpb24ge1xuICAgIGZsZXg6IDAgMCA3NSU7XG4gICAgbWF4LXdpZHRoOiA3NSU7XG4gIH1cbn1cbi5wYWdlLWxheW91dCBhc2lkZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAucGFnZS1sYXlvdXQgYXNpZGUge1xuICAgIGZsZXg6IDAgMCAyNSU7XG4gICAgbWF4LXdpZHRoOiAyNSU7XG4gIH1cbn1cbi5wYWdlLWxheW91dCBhc2lkZS5wYWdlLXNpZGViYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5wYWdlLWxheW91dCBhc2lkZS5wYWdlLXNpZGViYXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbi5wYWdlLWdyaWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cbi5wYWdlLWdyaWQgLnBhZ2UtZ3JpZC1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5wYWdlLWdyaWQgLnBhZ2UtZ3JpZC1pdGVtIHtcbiAgICBmbGV4OiAwIDAgNTAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnBhZ2UtZ3JpZCAucGFnZS1ncmlkLWl0ZW0ge1xuICAgIGZsZXg6IDAgMCAzMy4zMzMzMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMzMzMzMlO1xuICB9XG59XG5cbi5ieC1wYWdpbmF0aW9uIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5ieC1wYWdpbmF0aW9uIC5idG4tcGFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzY2Njtcbn1cbi5ieC1wYWdpbmF0aW9uIC5idG4tcGFnZS5jdXJyZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzYjIwYjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmJ4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tbmV4dCxcbi5ieC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbn1cbi5ieC1wYWdpbmF0aW9uIC5saW5rIHtcbiAgcGFkZGluZzogMC41cmVtIDAuOHJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNpemVzLCAucHJvZHVjdC10eXBlIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDAgMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uaW52YWxpZC5zaXplcyBsaSwgLmludmFsaWQucHJvZHVjdC10eXBlIGxpIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjQ0MzM2O1xufVxuLnNpemVzIGxpLCAucHJvZHVjdC10eXBlIGxpIHtcbiAgd2lkdGg6IDUwJTtcbiAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZWRlZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IC0xcHggLTFweCAwIDA7XG4gIGNvbG9yOiAjMzYzNjM2O1xufVxuLnNpemVzIGxpLnNlbGVjdGVkLCAucHJvZHVjdC10eXBlIGxpLnNlbGVjdGVkLCAuc2l6ZXMgbGk6aG92ZXIsIC5wcm9kdWN0LXR5cGUgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjNiMjBiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wYXJlbnQtbWVudSB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cbi5wYXJlbnQtbWVudSAuaGVhZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y1ZjVmNTtcbn1cbi5wYXJlbnQtbWVudSAuaGVhZGVyIGgyIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1hcmdpbjogMDtcbn1cbi5wYXJlbnQtbWVudSAuaGVhZGVyIC5pbmZvIHtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcbn1cblxuLnNpemVzIGxpIHtcbiAgd2lkdGg6IDMzLjMzJTtcbn0iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vQ29sb3JzXHJcbiRibGFjazogIzM2MzYzNjtcclxuJHZlcnlsaWdodGdyZXk6ICNmNWY1ZjU7XHJcbiRsaWdodGdyZXk6ICNlZGVkZWQ7XHJcbiRtaWRncmV5OiAjOTk5O1xyXG4kZGFya2dyZXk6ICM2NjY7XHJcbiRncmVlbjogIzYzYjIwYjtcclxuJHJlZDogI2NlMDUwNTtcclxuLy9Gb250c1xyXG4kZGVmYXVsdEZvbnQ6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4kZGlzcGxheUZvbnQ6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICdtaXhpbnMnO1xyXG5cclxuJWJ1dHRvbi1ncm91cC1zZWxlY3Qge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDAgMCAwLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgJi5pbnZhbGlkIHtcclxuICAgIGxpIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZjQ0MzM2O1xyXG4gICAgfVxyXG4gIH1cclxuICBsaSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZm9udC1mYW1pbHk6ICRkaXNwbGF5Rm9udDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIEBpbmNsdWRlIGZvbnQtc2l6ZSgxNCwgMTQpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0Z3JleTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogLTFweCAtMXB4IDAgMDtcclxuICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAmLnNlbGVjdGVkLFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gZmx1aWQtdHlwZSgkcHJvcGVydGllcywgJG1pbi12dywgJG1heC12dywgJG1pbi12YWx1ZSwgJG1heC12YWx1ZSkge1xyXG4gIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAjeyRwcm9wZXJ0eX06ICRtaW4tdmFsdWU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWluLXZ3KSB7XHJcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgICAjeyRwcm9wZXJ0eX06IGNhbGMoXHJcbiAgICAgICAgI3skbWluLXZhbHVlfSArICN7c3RyaXAtdW5pdCgkbWF4LXZhbHVlIC0gJG1pbi12YWx1ZSl9ICpcclxuICAgICAgICAgIChcclxuICAgICAgICAgICAgMTAwdncgLSAjeyRtaW4tdnd9XHJcbiAgICAgICAgICApIC8gI3tzdHJpcC11bml0KCRtYXgtdncgLSAkbWluLXZ3KX1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtYXgtdncpIHtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgICN7JHByb3BlcnR5fTogJG1heC12YWx1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBzdHJpcC11bml0KCR2YWx1ZSkge1xyXG4gIEByZXR1cm4gJHZhbHVlIC8gKCR2YWx1ZSAqIDAgKyAxKTtcclxufVxyXG5cclxuQG1peGluIHdyYXBwZXIoJHdpZHRoOjE0NDBweCkge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAkd2lkdGg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMS41cmVtO1xyXG59XHJcblxyXG5AbWl4aW4gZm9udC1zaXplKCRmb250U2l6ZSwgJGxpbmVIZWlnaHQ6IDEpIHtcclxuICAkcmVtVmFsdWU6ICgkZm9udFNpemUgLyAxNik7XHJcbiAgJHB4VmFsdWU6ICRmb250U2l6ZTtcclxuICAkbGluZVZhbHVlOiAoJGxpbmVIZWlnaHQgLyAkZm9udFNpemUpO1xyXG4gIGZvbnQtc2l6ZTogJHB4VmFsdWUgKyBweDtcclxuICBmb250LXNpemU6ICRyZW1WYWx1ZSArIHJlbTtcclxuICBsaW5lLWhlaWdodDogJGxpbmVWYWx1ZTtcclxufVxyXG4iLCJAaW1wb3J0ICdwYWdlLWdyaWQtbGF5b3V0JztcclxuQGltcG9ydCAndmFyaWFibGVzJztcclxuQGltcG9ydCAnbWl4aW5zJztcclxuQGltcG9ydCAncGFydGlhbCc7XHJcblxyXG4ucGFyZW50LW1lbnUge1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAuaGVhZGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHZlcnlsaWdodGdyZXk7XHJcbiAgICBoMiB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQtc2l6ZSgyNCwgMjQpO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAuaW5mbyB7XHJcbiAgICAgIGNvbG9yOiAkZGFya2dyZXk7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQtc2l6ZSgxMiwgMTIpO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LWZhbWlseTogJGRpc3BsYXlGb250O1xyXG4gICAgICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvZHVjdC10eXBlIHtcclxuICBAZXh0ZW5kICVidXR0b24tZ3JvdXAtc2VsZWN0O1xyXG59XHJcblxyXG4uc2l6ZXMge1xyXG4gIEBleHRlbmQgJWJ1dHRvbi1ncm91cC1zZWxlY3Q7XHJcbiAgbGkge1xyXG4gICAgd2lkdGg6IDMzLjMzJTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/size-guide/custom-sizes/custom-sizes.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/size-guide/custom-sizes/custom-sizes.component.ts ***!
  \*******************************************************************/
/*! exports provided: CustomSizesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSizesComponent", function() { return CustomSizesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");




let CustomSizesComponent = class CustomSizesComponent {
    constructor(api) {
        this.api = api;
        this.page$ = api.get('page', 'size-guide');
        this.terms$ = api
            .find('term', {
            category: '58ac1318dc142c612ab61fad',
            parent: '58ac1329dc142c612ab61fae',
            $sort: { weight: 1 }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((resp) => resp.data));
    }
    ngOnInit() { }
    getSizes(category, size = false) {
        const query = {
            category
        };
        if (this.selectedSize) {
            query.size = this.selectedSize;
        }
        this.sizes$ = this.api
            .find('size', Object.assign({}, query, { $limit: 48, $sort: { weight: 1 } }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((resp) => resp.data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((resp) => {
            if (!size) {
                this.sizes = resp
                    .map((s) => s.size)
                    .filter((v, i, a) => a.indexOf(v) === i);
            }
        }));
    }
    filterByType(id) {
        this.selectedType = id;
        this.selectedSize = null;
        this.getSizes(id, false);
    }
    filterBySize(size) {
        this.selectedSize = size;
        this.getSizes(this.selectedType, true);
    }
};
CustomSizesComponent.ctorParameters = () => [
    { type: _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
CustomSizesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'bx-custom-sizes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-sizes.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/size-guide/custom-sizes/custom-sizes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-sizes.component.scss */ "./src/app/size-guide/custom-sizes/custom-sizes.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
], CustomSizesComponent);



/***/ }),

/***/ "./src/app/size-guide/size-guide-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/size-guide/size-guide-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SizeGuideRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeGuideRoutingModule", function() { return SizeGuideRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _custom_sizes_custom_sizes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-sizes/custom-sizes.component */ "./src/app/size-guide/custom-sizes/custom-sizes.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _custom_sizes_custom_sizes_component__WEBPACK_IMPORTED_MODULE_1__["CustomSizesComponent"]
    }
];
let SizeGuideRoutingModule = class SizeGuideRoutingModule {
};
SizeGuideRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], SizeGuideRoutingModule);



/***/ }),

/***/ "./src/app/size-guide/size-guide.module.ts":
/*!*************************************************!*\
  !*** ./src/app/size-guide/size-guide.module.ts ***!
  \*************************************************/
/*! exports provided: SizeGuideModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeGuideModule", function() { return SizeGuideModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _size_guide_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./size-guide-routing.module */ "./src/app/size-guide/size-guide-routing.module.ts");
/* harmony import */ var _custom_sizes_custom_sizes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-sizes/custom-sizes.component */ "./src/app/size-guide/custom-sizes/custom-sizes.component.ts");
/* harmony import */ var _custom_sizes_custom_sizes_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom-sizes/custom-sizes-item.component */ "./src/app/size-guide/custom-sizes/custom-sizes-item.component.ts");
/* harmony import */ var _app_shared_modules_card_card_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/modules/card/card.module */ "./src/app/shared/modules/card/card.module.ts");
/* harmony import */ var _app_material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");









let SizeGuideModule = class SizeGuideModule {
};
SizeGuideModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _size_guide_routing_module__WEBPACK_IMPORTED_MODULE_3__["SizeGuideRoutingModule"],
            _app_shared_modules_card_card_module__WEBPACK_IMPORTED_MODULE_6__["CardModule"],
            _app_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ],
        declarations: [_custom_sizes_custom_sizes_component__WEBPACK_IMPORTED_MODULE_4__["CustomSizesComponent"], _custom_sizes_custom_sizes_item_component__WEBPACK_IMPORTED_MODULE_5__["CustomSizesItemComponent"]]
    })
], SizeGuideModule);



/***/ })

}]);
//# sourceMappingURL=app-size-guide-size-guide-module-es2015.js.map