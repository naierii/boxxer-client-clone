function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-help-help-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/help/help-detail.component.html": function node_modulesRawLoaderDistCjsJsSrcAppHelpHelpDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<article class=\"page-detail\">\r\n  <h1>{{page?.title}}</h1>\r\n  <span [innerHTML]=\"page?.description\"></span>\r\n</article>";
    /***/
  },

  /***/
  "./src/app/help/help-detail.component.scss": function srcAppHelpHelpDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  margin-bottom: 0;\n  background-color: white;\n  display: block;\n}\n\n.page-detail {\n  padding: 1rem;\n  display: block;\n  max-width: 1100px;\n  margin: 0 auto 1.5rem;\n}\n\n.page-detail ::ng-deep a {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2hlbHAvQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcYXBwXFxoZWxwXFxoZWxwLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2hlbHAvaGVscC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9oZWxwL0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXHNjc3NcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDREY7O0FESUE7RUVvQkUsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkZyQmlCO0VFc0JqQixxQkFBQTtBRHBCRjs7QURBRTtFQUNFLDBCQUFBO0FDRUoiLCJmaWxlIjoicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvaGVscC9oZWxwLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ21peGlucyc7XHJcblxyXG46aG9zdCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnBhZ2UtZGV0YWlsIHtcclxuICBAaW5jbHVkZSB3cmFwcGVyKDExMDBweCk7XHJcblxyXG4gIDo6bmctZGVlcCBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnBhZ2UtZGV0YWlsIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTEwMHB4O1xuICBtYXJnaW46IDAgYXV0byAxLjVyZW07XG59XG4ucGFnZS1kZXRhaWwgOjpuZy1kZWVwIGEge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iLCJAbWl4aW4gZmx1aWQtdHlwZSgkcHJvcGVydGllcywgJG1pbi12dywgJG1heC12dywgJG1pbi12YWx1ZSwgJG1heC12YWx1ZSkge1xyXG4gIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAjeyRwcm9wZXJ0eX06ICRtaW4tdmFsdWU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWluLXZ3KSB7XHJcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgICAjeyRwcm9wZXJ0eX06IGNhbGMoXHJcbiAgICAgICAgI3skbWluLXZhbHVlfSArICN7c3RyaXAtdW5pdCgkbWF4LXZhbHVlIC0gJG1pbi12YWx1ZSl9ICpcclxuICAgICAgICAgIChcclxuICAgICAgICAgICAgMTAwdncgLSAjeyRtaW4tdnd9XHJcbiAgICAgICAgICApIC8gI3tzdHJpcC11bml0KCRtYXgtdncgLSAkbWluLXZ3KX1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtYXgtdncpIHtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgICN7JHByb3BlcnR5fTogJG1heC12YWx1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBzdHJpcC11bml0KCR2YWx1ZSkge1xyXG4gIEByZXR1cm4gJHZhbHVlIC8gKCR2YWx1ZSAqIDAgKyAxKTtcclxufVxyXG5cclxuQG1peGluIHdyYXBwZXIoJHdpZHRoOjE0NDBweCkge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAkd2lkdGg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMS41cmVtO1xyXG59XHJcblxyXG5AbWl4aW4gZm9udC1zaXplKCRmb250U2l6ZSwgJGxpbmVIZWlnaHQ6IDEpIHtcclxuICAkcmVtVmFsdWU6ICgkZm9udFNpemUgLyAxNik7XHJcbiAgJHB4VmFsdWU6ICRmb250U2l6ZTtcclxuICAkbGluZVZhbHVlOiAoJGxpbmVIZWlnaHQgLyAkZm9udFNpemUpO1xyXG4gIGZvbnQtc2l6ZTogJHB4VmFsdWUgKyBweDtcclxuICBmb250LXNpemU6ICRyZW1WYWx1ZSArIHJlbTtcclxuICBsaW5lLWhlaWdodDogJGxpbmVWYWx1ZTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/help/help-detail.component.ts": function srcAppHelpHelpDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpDetailComponent", function () {
      return HelpDetailComponent;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _global_untilDestroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @global/untilDestroy */
    "../global/untilDestroy/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _help_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./help.service */
    "./src/app/help/help.service.ts");

    var HelpDetailComponent = /*#__PURE__*/function () {
      function HelpDetailComponent(helpService, route, metaService) {
        _classCallCheck(this, HelpDetailComponent);

        this.helpService = helpService;
        this.route = route;
        this.metaService = metaService;
      }

      _createClass(HelpDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) {
            return _this.helpService.getPage(params['slug']);
          }), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_4__["untilComponentDestroyed"])(this)).subscribe(function (resp) {
            _this.page = resp;
            var name = {
              name: 'description',
              content: resp.meta
            };

            _this.metaService.updateTag(name);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return HelpDetailComponent;
    }();

    HelpDetailComponent.ctorParameters = function () {
      return [{
        type: _help_service__WEBPACK_IMPORTED_MODULE_6__["HelpService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]
      }];
    };

    HelpDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'bx-help-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./help-detail.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/help/help-detail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./help-detail.component.scss */
      "./src/app/help/help-detail.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_help_service__WEBPACK_IMPORTED_MODULE_6__["HelpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])], HelpDetailComponent);
    /***/
  },

  /***/
  "./src/app/help/help-routing.module.ts": function srcAppHelpHelpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpRoutingModule", function () {
      return HelpRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _help_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./help-detail.component */
    "./src/app/help/help-detail.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: ':slug',
      component: _help_detail_component__WEBPACK_IMPORTED_MODULE_1__["HelpDetailComponent"]
    }];

    var HelpRoutingModule = function HelpRoutingModule() {
      _classCallCheck(this, HelpRoutingModule);
    };

    HelpRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
      providers: []
    })], HelpRoutingModule);
    /***/
  },

  /***/
  "./src/app/help/help.module.ts": function srcAppHelpHelpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpModule", function () {
      return HelpModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _help_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./help.service */
    "./src/app/help/help.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _help_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./help-routing.module */
    "./src/app/help/help-routing.module.ts");
    /* harmony import */


    var _help_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./help-detail.component */
    "./src/app/help/help-detail.component.ts");

    var HelpModule = function HelpModule() {
      _classCallCheck(this, HelpModule);
    };

    HelpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _help_routing_module__WEBPACK_IMPORTED_MODULE_4__["HelpRoutingModule"]],
      declarations: [_help_detail_component__WEBPACK_IMPORTED_MODULE_5__["HelpDetailComponent"]],
      providers: [_help_service__WEBPACK_IMPORTED_MODULE_1__["HelpService"]]
    })], HelpModule);
    /***/
  },

  /***/
  "./src/app/help/help.service.ts": function srcAppHelpHelpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpService", function () {
      return HelpService;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/core/services/api.service */
    "./src/app/core/services/api.service.ts");
    /* harmony import */


    var _app_core_modules_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/modules/loading/loading.service */
    "./src/app/core/modules/loading/loading.service.ts");

    var HelpService = /*#__PURE__*/function () {
      function HelpService(api, loading) {
        _classCallCheck(this, HelpService);

        this.api = api;
        this.loading = loading;
      }

      _createClass(HelpService, [{
        key: "getPage",
        value: function getPage(slug) {
          var _this2 = this;

          this.loading.show();
          return this.api.get('page', slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (resp) {
            _this2.loading.hide();
          }));
        }
      }]);

      return HelpService;
    }();

    HelpService.ctorParameters = function () {
      return [{
        type: _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _app_core_modules_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
      }];
    };

    HelpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _app_core_modules_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]])], HelpService);
    /***/
  }
}]);
//# sourceMappingURL=app-help-help-module-es5.js.map