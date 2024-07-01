function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-blog-blog-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog-detail/blog-detail.component.html": function node_modulesRawLoaderDistCjsJsSrcAppBlogBlogDetailBlogDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<article *ngIf=\"(blog$ | async) as blog\">\r\n  <h1>{{blog.title}}</h1>\r\n  <span [innerHtml]=\"blog?.description\"></span>\r\n</article>\r\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog-list/blog-item.component.html": function node_modulesRawLoaderDistCjsJsSrcAppBlogBlogListBlogItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a [routerLink]=\"[item.slug]\" bxCard>\r\n  <div>\r\n    <div bxImageWrapper [aspect_ratio]=\"1.33333333\" *ngIf=\"item.image\">\r\n      <img\r\n        alt=\"Boxxerworld {{ item.title }}\"\r\n        [bxLazysizes]=\"item.image.key\"\r\n        [crop_ratio]=\"1.33333333\"\r\n      />\r\n    </div>\r\n  </div>\r\n  <div bxCardContent>\r\n    <h2 bxCardTitle>{{ item.title }}</h2>\r\n  </div>\r\n  <div bxCardFooter>Posted {{ item.createdAt | date: 'dd/MM/yyyy':'Z' }}</div>\r\n</a>\r\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog-list/blog-list.component.html": function node_modulesRawLoaderDistCjsJsSrcAppBlogBlogListBlogListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>{{page_data?.title}}</h1>\r\n<div class=\"page-body\">\r\n  <div class=\"blog eq-height\" *ngFor=\"let item of blogs$ | async\" [item]=\"item\" bx-blog-item>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/blog/blog-detail/blog-detail.component.scss": function srcAppBlogBlogDetailBlogDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  padding: 20px 10px;\n  background-color: white;\n  display: block;\n}\n:host article {\n  padding: 1rem;\n  display: block;\n  max-width: 900px;\n  margin: 0 auto 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2Jsb2cvYmxvZy1kZXRhaWwvQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcYXBwXFxibG9nXFxibG9nLWRldGFpbFxcYmxvZy1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9ibG9nL2Jsb2ctZGV0YWlsL2Jsb2ctZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvYmxvZy9ibG9nLWRldGFpbC9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxzY3NzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0RGO0FERUU7RUVzQkEsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkZ2Qm1CO0VFd0JuQixxQkFBQTtBRHJCRiIsImZpbGUiOiJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9ibG9nL2Jsb2ctZGV0YWlsL2Jsb2ctZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbWl4aW5zJztcclxuXHJcbjpob3N0IHtcclxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYXJ0aWNsZSB7XHJcbiAgICBAaW5jbHVkZSB3cmFwcGVyKDkwMHB4KTtcclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0IGFydGljbGUge1xuICBwYWRkaW5nOiAxcmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiAwIGF1dG8gMS41cmVtO1xufSIsIkBtaXhpbiBmbHVpZC10eXBlKCRwcm9wZXJ0aWVzLCAkbWluLXZ3LCAkbWF4LXZ3LCAkbWluLXZhbHVlLCAkbWF4LXZhbHVlKSB7XHJcbiAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcclxuICAgICN7JHByb3BlcnR5fTogJG1pbi12YWx1ZTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4tdncpIHtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgICN7JHByb3BlcnR5fTogY2FsYyhcclxuICAgICAgICAjeyRtaW4tdmFsdWV9ICsgI3tzdHJpcC11bml0KCRtYXgtdmFsdWUgLSAkbWluLXZhbHVlKX0gKlxyXG4gICAgICAgICAgKFxyXG4gICAgICAgICAgICAxMDB2dyAtICN7JG1pbi12d31cclxuICAgICAgICAgICkgLyAje3N0cmlwLXVuaXQoJG1heC12dyAtICRtaW4tdncpfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1heC12dykge1xyXG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcclxuICAgICAgI3skcHJvcGVydHl9OiAkbWF4LXZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGZ1bmN0aW9uIHN0cmlwLXVuaXQoJHZhbHVlKSB7XHJcbiAgQHJldHVybiAkdmFsdWUgLyAoJHZhbHVlICogMCArIDEpO1xyXG59XHJcblxyXG5AbWl4aW4gd3JhcHBlcigkd2lkdGg6MTQ0MHB4KSB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6ICR3aWR0aDtcclxuICBtYXJnaW46IDAgYXV0byAxLjVyZW07XHJcbn1cclxuXHJcbkBtaXhpbiBmb250LXNpemUoJGZvbnRTaXplLCAkbGluZUhlaWdodDogMSkge1xyXG4gICRyZW1WYWx1ZTogKCRmb250U2l6ZSAvIDE2KTtcclxuICAkcHhWYWx1ZTogJGZvbnRTaXplO1xyXG4gICRsaW5lVmFsdWU6ICgkbGluZUhlaWdodCAvICRmb250U2l6ZSk7XHJcbiAgZm9udC1zaXplOiAkcHhWYWx1ZSArIHB4O1xyXG4gIGZvbnQtc2l6ZTogJHJlbVZhbHVlICsgcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZVZhbHVlO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/blog/blog-detail/blog-detail.component.ts": function srcAppBlogBlogDetailBlogDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogDetailComponent", function () {
      return BlogDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/core/services/seo.service */
    "./src/app/core/services/seo.service.ts");
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");

    var BlogDetailComponent = /*#__PURE__*/function () {
      function BlogDetailComponent(api, route, seo) {
        _classCallCheck(this, BlogDetailComponent);

        this.api = api;
        this.route = route;
        this.seo = seo;
      }

      _createClass(BlogDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.blog$ = this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) {
            return _this.api.get('blog', params['slug']);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (resp) {
            _this.seo.setMetaAndLinks(resp.title, resp.seo, 'Blog', null, 'article');
          }));
        }
      }]);

      return BlogDetailComponent;
    }();

    BlogDetailComponent.ctorParameters = function () {
      return [{
        type: _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_1__["SeoService"]
      }];
    };

    BlogDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'bx-blog-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blog-detail.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog-detail/blog-detail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blog-detail.component.scss */
      "./src/app/blog/blog-detail/blog-detail.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_1__["SeoService"]])], BlogDetailComponent);
    /***/
  },

  /***/
  "./src/app/blog/blog-list/blog-item.component.scss": function srcAppBlogBlogListBlogItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9ibG9nL2Jsb2ctbGlzdC9ibG9nLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/blog/blog-list/blog-item.component.ts": function srcAppBlogBlogListBlogItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogItemComponent", function () {
      return BlogItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");

    var BlogItemComponent = function BlogItemComponent() {
      _classCallCheck(this, BlogItemComponent);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], BlogItemComponent.prototype, "item", void 0);
    BlogItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'bx-blog-item, [bx-blog-item]',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blog-item.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog-list/blog-item.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blog-item.component.scss */
      "./src/app/blog/blog-list/blog-item.component.scss"))["default"]]
    })], BlogItemComponent);
    /***/
  },

  /***/
  "./src/app/blog/blog-list/blog-list.component.scss": function srcAppBlogBlogListBlogListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n  padding: 15px;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 576px) {\n  :host {\n    max-width: 100%;\n  }\n}\n@media (min-width: 768px) {\n  :host {\n    max-width: 100%;\n  }\n}\n@media (min-width: 992px) {\n  :host {\n    max-width: 100%;\n  }\n}\n@media (min-width: 1200px) {\n  :host {\n    max-width: 1400px;\n  }\n}\n.page-body {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.blog {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  -webkit-flex: 0 0 100%;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  max-width: 100%;\n}\n@media (min-width: 576px) {\n  .blog {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n  }\n}\n@media (min-width: 768px) {\n  .blog {\n    -webkit-flex: 0 0 33.3333333333%;\n        -ms-flex: 0 0 33.3333333333%;\n            flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n}\n@media (min-width: 992px) {\n  .blog {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2Jsb2cvYmxvZy1saXN0L0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXGFwcFxcYmxvZ1xcYmxvZy1saXN0XFxibG9nLWxpc3QuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9ibG9nL2Jsb2ctbGlzdC9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2dyaWQuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2Jsb2cvYmxvZy1saXN0L2Jsb2ctbGlzdC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2Jsb2cvYmxvZy1saXN0L0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9ub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VDVEEsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDREY7QUNvREk7RUhoREo7SUNLTSxlRFppQjtFRU9yQjtBQUNGO0FDK0NJO0VIaERKO0lDS00sZURaaUI7RUVZckI7QUFDRjtBQzBDSTtFSGhESjtJQ0tNLGVEWmlCO0VFaUJyQjtBQUNGO0FDcUNJO0VIaERKO0lDS00saUJEWmlCO0VFc0JyQjtBQUNGO0FGVEE7RUNJRSxxQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCQUFBO01BQUEsbUJBQUE7VUFBQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1NGO0FGWkE7RUNPRSxrQkFBQTtFQUlBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBSUEsc0JBQUE7TUFBQSxrQkFBQTtVQUFBLGNBQUE7RUFJQSxlQUFBO0FDQUY7QUNnQkk7RUhyQ0o7SUNpQkUscUJBQUE7UUFBQSxpQkFBQTtZQUFBLGFBQUE7SUFJQSxjQUFBO0VDS0E7QUFDRjtBQ1VJO0VIckNKO0lDaUJFLGdDQUFBO1FBQUEsNEJBQUE7WUFBQSx3QkFBQTtJQUlBLHlCQUFBO0VDV0E7QUFDRjtBQ0lJO0VIckNKO0lDaUJFLHFCQUFBO1FBQUEsaUJBQUE7WUFBQSxhQUFBO0lBSUEsY0FBQTtFQ2lCQTtBQUNGIiwiZmlsZSI6InByb2plY3RzL2NsaWVudC9zcmMvYXBwL2Jsb2cvYmxvZy1saXN0L2Jsb2ctbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnO1xyXG5AaW1wb3J0ICdub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJztcclxuQGltcG9ydCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHMnO1xyXG5AaW1wb3J0ICdub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19ncmlkJztcclxuXHJcbiRjb250YWluZXItbWF4LXdpZHRoczogKFxyXG4gIHNtOiAxMDAlLFxyXG4gIG1kOiAxMDAlLFxyXG4gIGxnOiAxMDAlLFxyXG4gIHhsOiAxNDAwcHhcclxuKTtcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIEBpbmNsdWRlIG1ha2UtY29udGFpbmVyKCk7XHJcbiAgQGluY2x1ZGUgbWFrZS1jb250YWluZXItbWF4LXdpZHRocygkY29udGFpbmVyLW1heC13aWR0aHMpO1xyXG59XHJcblxyXG4ucGFnZS1ib2R5IHtcclxuICBAaW5jbHVkZSBtYWtlLXJvdygpO1xyXG59XHJcblxyXG4uYmxvZyB7XHJcbiAgQGluY2x1ZGUgbWFrZS1jb2wtcmVhZHkoKTtcclxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHhzKSB7XHJcbiAgICBAaW5jbHVkZSBtYWtlLWNvbCgxMik7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoc20pIHtcclxuICAgIEBpbmNsdWRlIG1ha2UtY29sKDYpO1xyXG4gIH1cclxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XHJcbiAgICBAaW5jbHVkZSBtYWtlLWNvbCg0KTtcclxuICB9XHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykge1xyXG4gICAgQGluY2x1ZGUgbWFrZS1jb2woMyk7XHJcbiAgfVxyXG59XHJcbiIsIi8vLyBHcmlkIHN5c3RlbVxuLy9cbi8vIEdlbmVyYXRlIHNlbWFudGljIGdyaWQgY29sdW1ucyB3aXRoIHRoZXNlIG1peGlucy5cblxuQG1peGluIG1ha2UtY29udGFpbmVyKCRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogJGd1dHRlciAvIDI7XG4gIHBhZGRpbmctbGVmdDogJGd1dHRlciAvIDI7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cblxuLy8gRm9yIGVhY2ggYnJlYWtwb2ludCwgZGVmaW5lIHRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBjb250YWluZXIgaW4gYSBtZWRpYSBxdWVyeVxuQG1peGluIG1ha2UtY29udGFpbmVyLW1heC13aWR0aHMoJG1heC13aWR0aHM6ICRjb250YWluZXItbWF4LXdpZHRocywgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAZWFjaCAkYnJlYWtwb2ludCwgJGNvbnRhaW5lci1tYXgtd2lkdGggaW4gJG1heC13aWR0aHMge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRicmVha3BvaW50cykge1xuICAgICAgbWF4LXdpZHRoOiAkY29udGFpbmVyLW1heC13aWR0aDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1ha2Utcm93KCRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1yaWdodDogLSRndXR0ZXIgLyAyO1xuICBtYXJnaW4tbGVmdDogLSRndXR0ZXIgLyAyO1xufVxuXG5AbWl4aW4gbWFrZS1jb2wtcmVhZHkoJGd1dHRlcjogJGdyaWQtZ3V0dGVyLXdpZHRoKSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gUHJldmVudCBjb2x1bW5zIGZyb20gYmVjb21pbmcgdG9vIG5hcnJvdyB3aGVuIGF0IHNtYWxsZXIgZ3JpZCB0aWVycyBieVxuICAvLyBhbHdheXMgc2V0dGluZyBgd2lkdGg6IDEwMCU7YC4gVGhpcyB3b3JrcyBiZWNhdXNlIHdlIHVzZSBgZmxleGAgdmFsdWVzXG4gIC8vIGxhdGVyIG9uIHRvIG92ZXJyaWRlIHRoaXMgaW5pdGlhbCB3aWR0aC5cbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6ICRndXR0ZXIgLyAyO1xuICBwYWRkaW5nLWxlZnQ6ICRndXR0ZXIgLyAyO1xufVxuXG5AbWl4aW4gbWFrZS1jb2woJHNpemUsICRjb2x1bW5zOiAkZ3JpZC1jb2x1bW5zKSB7XG4gIGZsZXg6IDAgMCBwZXJjZW50YWdlKCRzaXplIC8gJGNvbHVtbnMpO1xuICAvLyBBZGQgYSBgbWF4LXdpZHRoYCB0byBlbnN1cmUgY29udGVudCB3aXRoaW4gZWFjaCBjb2x1bW4gZG9lcyBub3QgYmxvdyBvdXRcbiAgLy8gdGhlIHdpZHRoIG9mIHRoZSBjb2x1bW4uIEFwcGxpZXMgdG8gSUUxMCsgYW5kIEZpcmVmb3guIENocm9tZSBhbmQgU2FmYXJpXG4gIC8vIGRvIG5vdCBhcHBlYXIgdG8gcmVxdWlyZSB0aGlzLlxuICBtYXgtd2lkdGg6IHBlcmNlbnRhZ2UoJHNpemUgLyAkY29sdW1ucyk7XG59XG5cbkBtaXhpbiBtYWtlLWNvbC1vZmZzZXQoJHNpemUsICRjb2x1bW5zOiAkZ3JpZC1jb2x1bW5zKSB7XG4gICRudW06ICRzaXplIC8gJGNvbHVtbnM7XG4gIG1hcmdpbi1sZWZ0OiBpZigkbnVtID09IDAsIDAsIHBlcmNlbnRhZ2UoJG51bSkpO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICA6aG9zdCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgOmhvc3Qge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIDpob3N0IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgOmhvc3Qge1xuICAgIG1heC13aWR0aDogMTQwMHB4O1xuICB9XG59XG5cbi5wYWdlLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cblxuLmJsb2cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGZsZXg6IDAgMCAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmJsb2cge1xuICAgIGZsZXg6IDAgMCA1MCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuYmxvZyB7XG4gICAgZmxleDogMCAwIDMzLjMzMzMzMzMzMzMlO1xuICAgIG1heC13aWR0aDogMzMuMzMzMzMzMzMzMyU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuYmxvZyB7XG4gICAgZmxleDogMCAwIDI1JTtcbiAgICBtYXgtd2lkdGg6IDI1JTtcbiAgfVxufSIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/blog/blog-list/blog-list.component.ts": function srcAppBlogBlogListBlogListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogListComponent", function () {
      return BlogListComponent;
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


    var _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/core/services/api.service */
    "./src/app/core/services/api.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/services/seo.service */
    "./src/app/core/services/seo.service.ts");

    var BlogListComponent = /*#__PURE__*/function () {
      function BlogListComponent(api, seo) {
        _classCallCheck(this, BlogListComponent);

        this.api = api;
        this.seo = seo;
      }

      _createClass(BlogListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.blogs$ = this.api.get('page', 'blog', {
            $select: ['title', 'body', 'slug', 'seo'],
            published: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (resp) {
            _this2.page_data = resp;

            _this2.seo.setMetaAndLinks(resp.title, resp.seo, null, null, 'article');

            return _this2.api.find('blog', {
              $sort: {
                createdAt: -1
              }
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            _this2.total = resp.total;
            return resp.data;
          }));
        }
      }]);

      return BlogListComponent;
    }();

    BlogListComponent.ctorParameters = function () {
      return [{
        type: _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SeoService"]
      }];
    };

    BlogListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'bx-blog-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blog-list.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog-list/blog-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blog-list.component.scss */
      "./src/app/blog/blog-list/blog-list.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _app_core_services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SeoService"]])], BlogListComponent);
    /***/
  },

  /***/
  "./src/app/blog/blog-routing.module.ts": function srcAppBlogBlogRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogRoutingModule", function () {
      return BlogRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./blog-detail/blog-detail.component */
    "./src/app/blog/blog-detail/blog-detail.component.ts");
    /* harmony import */


    var _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./blog-list/blog-list.component */
    "./src/app/blog/blog-list/blog-list.component.ts");
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
      component: _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_2__["BlogListComponent"]
    }, {
      path: ':slug',
      component: _blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_1__["BlogDetailComponent"]
    }];

    var BlogRoutingModule = function BlogRoutingModule() {
      _classCallCheck(this, BlogRoutingModule);
    };

    BlogRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
      providers: []
    })], BlogRoutingModule);
    /***/
  },

  /***/
  "./src/app/blog/blog.module.ts": function srcAppBlogBlogModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogModule", function () {
      return BlogModule;
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


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./blog-detail/blog-detail.component */
    "./src/app/blog/blog-detail/blog-detail.component.ts");
    /* harmony import */


    var _blog_list_blog_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./blog-list/blog-item.component */
    "./src/app/blog/blog-list/blog-item.component.ts");
    /* harmony import */


    var _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./blog-list/blog-list.component */
    "./src/app/blog/blog-list/blog-list.component.ts");
    /* harmony import */


    var _blog_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./blog-routing.module */
    "./src/app/blog/blog-routing.module.ts");

    var BlogModule = function BlogModule() {
      _classCallCheck(this, BlogModule);
    };

    BlogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_7__["BlogRoutingModule"], _app_shared_modules_card_card_module__WEBPACK_IMPORTED_MODULE_2__["CardModule"]],
      declarations: [_blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_6__["BlogListComponent"], _blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_4__["BlogDetailComponent"], _blog_list_blog_item_component__WEBPACK_IMPORTED_MODULE_5__["BlogItemComponent"]],
      providers: []
    })], BlogModule);
    /***/
  },

  /***/
  "./src/app/core/services/link.service.ts": function srcAppCoreServicesLinkServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinkService", function () {
      return LinkService;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");

    var LinkService = /*#__PURE__*/function () {
      function LinkService(rendererFactory, document) {
        _classCallCheck(this, LinkService);

        this.rendererFactory = rendererFactory;
        this.document = document;
      }
      /**
       * Inject the State into the bottom of the <head>
       */


      _createClass(LinkService, [{
        key: "addTag",
        value: function addTag(tag, forceCreation) {
          try {
            var renderer = this.rendererFactory.createRenderer(this.document, {
              id: '-1',
              encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
              styles: [],
              data: {}
            });
            var link = renderer.createElement('link');
            var head = this.document.head;

            var selector = this._parseSelector(tag);

            if (head === null) {
              throw new Error('<head> not found within DOCUMENT.');
            }

            Object.keys(tag).forEach(function (prop) {
              return renderer.setAttribute(link, prop, tag[prop]);
            }); // [TODO]: get them to update the existing one (if it exists) ?

            renderer.appendChild(head, link);
          } catch (e) {
            console.error('Error within linkService : ', e);
          }
        }
      }, {
        key: "removeTag",
        value: function removeTag(attrSelector) {
          if (attrSelector) {
            try {
              var renderer = this.rendererFactory.createRenderer(this.document, {
                id: '-1',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                styles: [],
                data: {}
              });
              var head = this.document.head;

              if (head === null) {
                throw new Error('<head> not found within DOCUMENT.');
              }

              var linkTags = this.document.querySelectorAll('link[' + attrSelector + ']');
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = linkTags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var link = _step.value;
                  renderer.removeChild(head, link);
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                    _iterator["return"]();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            } catch (e) {
              console.log('Error while removing tag ' + e.message);
            }
          }
        }
      }, {
        key: "_parseSelector",
        value: function _parseSelector(tag) {
          // Possibly re-work this
          var attr = tag.rel ? 'rel' : 'hreflang';
          return "".concat(attr, "=\"").concat(tag[attr], "\"");
        }
      }]);

      return LinkService;
    }();

    LinkService.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }];
    };

    LinkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"], Object])], LinkService);
    /***/
  },

  /***/
  "./src/app/core/services/seo.service.ts": function srcAppCoreServicesSeoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeoService", function () {
      return SeoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _app_shared_main_services_platform_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/shared-main/services/platform.service */
    "./src/app/shared-main/services/platform.service.ts");
    /* harmony import */


    var _link_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./link.service */
    "./src/app/core/services/link.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _env_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @env/environment */
    "../environments/environment.ts");

    var SeoService = /*#__PURE__*/function () {
      function SeoService(title, meta, location, link, ps) {
        _classCallCheck(this, SeoService);

        this.title = title;
        this.meta = meta;
        this.location = location;
        this.link = link;
        this.ps = ps;
        this.defaultEndPageTitle = 'Boxxerworld';
        this.endPageTitle = '';
      }

      _createClass(SeoService, [{
        key: "setMetaAndLinks",
        value: function setMetaAndLinks(item_title, seo, section, image, type, remove_canonical) {
          var url = "".concat(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].site).concat(this.location.path());
          var social_image = "".concat(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].site, "/assets/img/facebook-logo.jpg");

          if (image) {
            social_image = "".concat(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].image_cdn, "/").concat(image.key, "?crop=smart&width=1200&height=630");
          }

          this.endPageTitle = section ? "".concat(section, " | ").concat(this.defaultEndPageTitle) : "".concat(this.defaultEndPageTitle);
          var title = seo && seo.title ? "".concat(seo.title, " | ").concat(this.endPageTitle) : "".concat(item_title, " | ").concat(this.endPageTitle);
          this.title.setTitle(title);
          this.meta.updateTag({
            name: 'description',
            content: seo ? seo.description : ''
          }); // Facebook tags

          this.meta.updateTag({
            property: 'fb:pages',
            content: '253804241349130'
          });
          this.meta.updateTag({
            property: 'og:title',
            content: title
          });
          this.meta.updateTag({
            property: 'og:description',
            content: seo ? seo.description : ''
          });
          this.meta.updateTag({
            property: 'og:url',
            content: url
          });
          this.meta.updateTag({
            property: 'og:image',
            content: social_image
          });
          this.meta.updateTag({
            property: 'og:image:width',
            content: '1200'
          });
          this.meta.updateTag({
            property: 'og:image:height',
            content: '630'
          });
          this.meta.updateTag({
            property: 'og:type',
            content: type
          }); // Twitter

          this.meta.updateTag({
            name: 'twitter:card',
            content: 'summary_large_image'
          });
          this.meta.updateTag({
            name: 'twitter:site',
            content: '@boxxerworld'
          });
          this.meta.updateTag({
            name: 'twitter:title',
            content: title
          });
          this.meta.updateTag({
            name: 'twitter:description',
            content: seo ? seo.description : ''
          });
          this.meta.updateTag({
            name: 'twitter:image',
            content: social_image
          }); // Canonical

          this.clearCanonical();

          if (seo && seo.canonical && this.ps.isServer && !remove_canonical) {
            this.link.addTag({
              href: "".concat(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].site, "/").concat(seo.canonical),
              rel: 'canonical'
            });
          } else if (this.ps.isServer && !remove_canonical) {
            this.link.addTag({
              href: url,
              rel: 'canonical'
            });
          }
        }
      }, {
        key: "clearCanonical",
        value: function clearCanonical() {
          if (this.ps.isServer) {
            this.link.removeTag('rel=canonical');
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.clearCanonical();
        }
      }]);

      return SeoService;
    }();

    SeoService.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
      }, {
        type: _link_service__WEBPACK_IMPORTED_MODULE_2__["LinkService"]
      }, {
        type: _app_shared_main_services_platform_service__WEBPACK_IMPORTED_MODULE_1__["PlatformService"]
      }];
    };

    SeoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _link_service__WEBPACK_IMPORTED_MODULE_2__["LinkService"], _app_shared_main_services_platform_service__WEBPACK_IMPORTED_MODULE_1__["PlatformService"]])], SeoService);
    /***/
  }
}]);
//# sourceMappingURL=app-blog-blog-module-es5.js.map