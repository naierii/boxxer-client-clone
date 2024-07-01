function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-user-user-module~checkout-checkout-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/address-form/address-form.component.html": function node_modulesRawLoaderDistCjsJsSrcAppSharedModulesAddressFormAddressFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [formGroup]=\"parentForm\" *ngIf=\"!loading\">\r\n  <div [formGroupName]=\"groupName\">\r\n    <div *ngIf=\"showNames\">\r\n      <mat-form-field>\r\n        <input type=\"text\" matInput placeholder=\"First Name\" formControlName=\"firstName\" autocomplete=\"given-name\"\r\n          [errorStateMatcher]=\"matcher\" required>\r\n        <mat-error *ngIf=\"parentForm.get(groupName).get('firstName').hasError('required')\">\r\n          First name is required\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input type=\"text\" matInput placeholder=\"Last Name\" formControlName=\"lastName\" autocomplete=\"family-name\"\r\n          [errorStateMatcher]=\"matcher\" required>\r\n        <mat-error *ngIf=\"parentForm.get(groupName).get('lastName').hasError('required')\">\r\n          Last name is required\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <mat-form-field>\r\n      <input type=\"text\" matInput placeholder=\"House number and street name\" formControlName=\"address1\"\r\n        autocomplete=\"address-line1\" [errorStateMatcher]=\"matcher\" required>\r\n      <mat-error *ngIf=\"parentForm.get(groupName).get('address1').hasError('required')\">\r\n        This field is required\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input type=\"text\" matInput placeholder=\"Apartment, suite, unit etc. (optional)\" formControlName=\"address2\"\r\n        autocomplete=\"address-line2\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input type=\"text\" matInput placeholder=\"Town / City\" formControlName=\"city\" autocomplete=\"address-level2\"\r\n        [errorStateMatcher]=\"matcher\" required>\r\n      <mat-error *ngIf=\"parentForm.get(groupName).get('city').hasError('required')\">\r\n        This field is required\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input type=\"text\" matInput placeholder=\"County\" formControlName=\"region\" autocomplete=\"address-level1\"\r\n        [errorStateMatcher]=\"matcher\">\r\n      <mat-error *ngIf=\"parentForm.get(groupName).get('region').hasError('required')\">\r\n        This field is required\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <mat-label>Country</mat-label>\r\n      <select matNativeControl formControlName=\"country\" class=\"browser-default\" required>\r\n        <option *ngFor=\"let country of countries\" [value]=\"country.name\">{{ country.name }}</option>\r\n      </select>\r\n      <mat-error *ngIf=\"parentForm.get(groupName).get('country').hasError('required')\">\r\n        This field is required\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input type=\"text\" matInput placeholder=\"Postcode\" formControlName=\"postcode\" autocomplete=\"postal-code\"\r\n        [errorStateMatcher]=\"matcher\" [required]=\"postcodeRequired\">\r\n      <mat-error *ngIf=\"parentForm.get(groupName).get('postcode').hasError('required')\">\r\n        This field is required\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field *ngIf=\"showContact\">\r\n      <input type=\"tel\" matInput placeholder=\"Mobile Phone Number\" formControlName=\"phone\" autocomplete=\"tel\"\r\n        [errorStateMatcher]=\"matcher\" required>\r\n      <mat-hint>We need your mobile number in case we need to text you with urgent issues or the courier may need to\r\n        call about your\r\n        delivery.\r\n      </mat-hint>\r\n      <mat-error *ngIf=\"parentForm.get(groupName).get('phone').hasError('required')\">\r\n        This field is required\r\n      </mat-error>\r\n    </mat-form-field>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/shared/modules/address-form/address-form.component.scss": function srcAppSharedModulesAddressFormAddressFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL3NoYXJlZC9tb2R1bGVzL2FkZHJlc3MtZm9ybS9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxhcHBcXHNoYXJlZFxcbW9kdWxlc1xcYWRkcmVzcy1mb3JtXFxhZGRyZXNzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9zaGFyZWQvbW9kdWxlcy9hZGRyZXNzLWZvcm0vYWRkcmVzcy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvc2hhcmVkL21vZHVsZXMvYWRkcmVzcy1mb3JtL2FkZHJlc3MtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/modules/address-form/address-form.component.ts": function srcAppSharedModulesAddressFormAddressFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function () {
      return MyErrorStateMatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressFormComponent", function () {
      return AddressFormComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _global_untilDestroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @global/untilDestroy */
    "../global/untilDestroy/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _country_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./country.service */
    "./src/app/shared/modules/address-form/country.service.ts");
    /* harmony import */


    var _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @gorniv/ngx-universal */
    "../../node_modules/@gorniv/ngx-universal/fesm2015/gorniv-ngx-universal.js");
    /** Error when invalid control is dirty, touched, or submitted. */


    var MyErrorStateMatcher = /*#__PURE__*/function () {
      function MyErrorStateMatcher() {
        _classCallCheck(this, MyErrorStateMatcher);
      }

      _createClass(MyErrorStateMatcher, [{
        key: "isErrorState",
        value: function isErrorState(control, form) {
          var isSubmitted = form && form.submitted;
          return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
        }
      }]);

      return MyErrorStateMatcher;
    }();

    var AddressFormComponent = /*#__PURE__*/function () {
      function AddressFormComponent(fb, country, cookieService) {
        _classCallCheck(this, AddressFormComponent);

        this.fb = fb;
        this.country = country;
        this.cookieService = cookieService;
        this.showNames = false;
        this.showContact = false;
        this.countryChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loading = true;
        this.countries = [];
        this.matcher = new MyErrorStateMatcher();
        this.postcodeRequired = true;
      }

      _createClass(AddressFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.country.getCountries().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp.data;
          }), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_3__["untilComponentDestroyed"])(this)).subscribe(function (resp) {
            _this.countries = resp;

            _this.createForm();
          });
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.addressGroup = this.fb.group({
            address1: [this.address ? this.address.address1 : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            address2: [this.address ? this.address.address2 : null],
            city: [this.address ? this.address.city : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            region: [this.address ? this.address.region : null],
            country_code: [this.address ? this.address.country_code : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            country: [this.address ? this.address.country : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            postcode: [this.address ? this.address.postcode : null]
          });

          if (this.showNames) {
            this.addressGroup.addControl('firstName', this.fb.control(this.address ? this.address.firstName : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
            this.addressGroup.addControl('lastName', this.fb.control(this.address ? this.address.lastName : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
          }

          if (this.showContact) {
            this.addressGroup.addControl('phone', this.fb.control(this.address ? this.address.phone : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
          }

          this.parentForm.addControl(this.groupName, this.addressGroup);
          this.loading = false;
          this.subscribeCountryChange();
        }
      }, {
        key: "subscribeCountryChange",
        value: function subscribeCountryChange() {
          var _this2 = this;

          if (this.address && this.address.country) {
            this.setPostCodeValidation(this.address.country);
          }

          var countryCodeCtrl = this.addressGroup.controls.country_code.valueChanges;
          var countryCtrl = this.addressGroup.controls.country.valueChanges;
          var postcodeCtrl = this.addressGroup.controls.postcode;
          countryCtrl.pipe(Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_3__["untilComponentDestroyed"])(this)).subscribe(function (value) {
            var searchCountry = _this2.countries.find(function (country) {
              return country.name.toLowerCase().indexOf(value.toLowerCase()) === 0;
            });

            _this2.setCountryCode(searchCountry);
          });
          countryCodeCtrl.pipe(Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_3__["untilComponentDestroyed"])(this)).subscribe(function (code) {
            return _this2.countryChanged.emit(code);
          }); // Set default country

          if (!this.address) {
            var countryCode = this.cookieService.get('country') || 'GB';
            var searchCountry = this.countries.find(function (country) {
              return country.cca2.toLowerCase().indexOf(countryCode.toLowerCase()) === 0;
            });

            if (searchCountry) {
              this.addressGroup.controls.country.setValue(searchCountry.name);
            }
          }
        }
      }, {
        key: "setCountryCode",
        value: function setCountryCode(country) {
          this.addressGroup.controls.country_code.setValue(country.cca2);
          this.setPostCodeValidation(country.name);
        }
      }, {
        key: "setPostCodeValidation",
        value: function setPostCodeValidation(country) {
          var postcodeCtrl = this.addressGroup.controls.postcode;

          if (country !== 'Ireland') {
            this.postcodeRequired = true;
            postcodeCtrl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            postcodeCtrl.updateValueAndValidity();
          } else {
            this.postcodeRequired = false;
            postcodeCtrl.setValidators(null);
            postcodeCtrl.updateValueAndValidity();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return AddressFormComponent;
    }();

    AddressFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _country_service__WEBPACK_IMPORTED_MODULE_5__["CountryService"]
      }, {
        type: _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])], AddressFormComponent.prototype, "parentForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AddressFormComponent.prototype, "address", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], AddressFormComponent.prototype, "groupName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AddressFormComponent.prototype, "showNames", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AddressFormComponent.prototype, "showContact", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AddressFormComponent.prototype, "countryChanged", void 0);
    AddressFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'bx-address-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./address-form.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/address-form/address-form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./address-form.component.scss */
      "./src/app/shared/modules/address-form/address-form.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _country_service__WEBPACK_IMPORTED_MODULE_5__["CountryService"], _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], AddressFormComponent);
    /***/
  },

  /***/
  "./src/app/shared/modules/address-form/address-form.module.ts": function srcAppSharedModulesAddressFormAddressFormModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressFormModule", function () {
      return AddressFormModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _address_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./address-form.component */
    "./src/app/shared/modules/address-form/address-form.component.ts");
    /* harmony import */


    var _country_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./country.service */
    "./src/app/shared/modules/address-form/country.service.ts");

    var AddressFormModule = function AddressFormModule() {
      _classCallCheck(this, AddressFormModule);
    };

    AddressFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]],
      declarations: [_address_form_component__WEBPACK_IMPORTED_MODULE_5__["AddressFormComponent"]],
      providers: [_country_service__WEBPACK_IMPORTED_MODULE_6__["CountryService"]],
      exports: [_address_form_component__WEBPACK_IMPORTED_MODULE_5__["AddressFormComponent"]]
    })], AddressFormModule);
    /***/
  },

  /***/
  "./src/app/shared/modules/address-form/country.service.ts": function srcAppSharedModulesAddressFormCountryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryService", function () {
      return CountryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @env/environment */
    "../environments/environment.ts");

    var CountryService = /*#__PURE__*/function () {
      function CountryService(http) {
        _classCallCheck(this, CountryService);

        this.http = http;
        this.host = _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].host;
        this.endpoint = 'country';
      }

      _createClass(CountryService, [{
        key: "url",
        get: function get() {
          return "".concat(this.host, "/").concat(this.endpoint);
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          var query = {
            $select: ['name', 'cca2', 'altSpellings'],
            $sort: ['name'],
            $limit: 5000
          };
          return this.http.get(this.url, {
            params: query
          });
        }
      }]);

      return CountryService;
    }();

    CountryService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    CountryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], CountryService);
    /***/
  },

  /***/
  "./src/app/shared/validators/register-validation.ts": function srcAppSharedValidatorsRegisterValidationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordValidation", function () {
      return PasswordValidation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailValidation", function () {
      return EmailValidation;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");

    var PasswordValidation = /*#__PURE__*/function () {
      function PasswordValidation() {
        _classCallCheck(this, PasswordValidation);
      }

      _createClass(PasswordValidation, null, [{
        key: "MatchPassword",
        value: function MatchPassword(AC) {
          var password = AC.get('password').value;
          var confirmPassword = AC.get('confirmPassword').value;

          if (password !== confirmPassword) {
            AC.get('confirmPassword').setErrors({
              MatchPassword: true
            });
          } else {
            return null;
          }
        }
      }]);

      return PasswordValidation;
    }();

    var EmailValidation = /*#__PURE__*/function () {
      function EmailValidation() {
        _classCallCheck(this, EmailValidation);
      }

      _createClass(EmailValidation, null, [{
        key: "MatchEmail",
        value: function MatchEmail(AC) {
          var email = AC.get('email').value;
          var confirmEmail = AC.get('confirmEmail').value;

          if (email !== confirmEmail) {
            AC.get('confirmEmail').setErrors({
              MatchEmail: true
            });
          } else {
            return null;
          }
        }
      }]);

      return EmailValidation;
    }();
    /***/

  }
}]);
//# sourceMappingURL=default~app-user-user-module~checkout-checkout-module-es5.js.map