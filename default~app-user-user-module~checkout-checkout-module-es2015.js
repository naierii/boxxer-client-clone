(window["webpackJsonp"] = window["webpackJsonp"] || []).push([ [ "default~app-user-user-module~checkout-checkout-module" ], {
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/address-form/address-form.component.html": 
    /*!***********************************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/address-form/address-form.component.html ***!
  \***********************************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<div [formGroup]="parentForm" *ngIf="!loading">\r\n  <div [formGroupName]="groupName">\r\n    <div *ngIf="showNames">\r\n      <mat-form-field>\r\n        <input type="text" matInput placeholder="First Name" formControlName="firstName" autocomplete="given-name"\r\n          [errorStateMatcher]="matcher" required>\r\n        <mat-error *ngIf="parentForm.get(groupName).get(\'firstName\').hasError(\'required\')">\r\n          First name is required\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input type="text" matInput placeholder="Last Name" formControlName="lastName" autocomplete="family-name"\r\n          [errorStateMatcher]="matcher" required>\r\n        <mat-error *ngIf="parentForm.get(groupName).get(\'lastName\').hasError(\'required\')">\r\n          Last name is required\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <mat-form-field>\r\n      <input type="text" matInput placeholder="House number and street name" formControlName="address1"\r\n        autocomplete="address-line1" [errorStateMatcher]="matcher" required>\r\n      <mat-error *ngIf="parentForm.get(groupName).get(\'address1\').hasError(\'required\')">\r\n        This field is required\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input type="text" matInput placeholder="Apartment, suite, unit etc. (optional)" formControlName="address2"\r\n        autocomplete="address-line2">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input type="text" matInput placeholder="Town / City" formControlName="city" autocomplete="address-level2"\r\n        [errorStateMatcher]="matcher" required>\r\n      <mat-error *ngIf="parentForm.get(groupName).get(\'city\').hasError(\'required\')">\r\n        This field is required\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input type="text" matInput placeholder="County" formControlName="region" autocomplete="address-level1"\r\n        [errorStateMatcher]="matcher">\r\n      <mat-error *ngIf="parentForm.get(groupName).get(\'region\').hasError(\'required\')">\r\n        This field is required\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <mat-label>Country</mat-label>\r\n      <select matNativeControl formControlName="country" class="browser-default" required>\r\n        <option *ngFor="let country of countries" [value]="country.name">{{ country.name }}</option>\r\n      </select>\r\n      <mat-error *ngIf="parentForm.get(groupName).get(\'country\').hasError(\'required\')">\r\n        This field is required\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input type="text" matInput placeholder="Postcode" formControlName="postcode" autocomplete="postal-code"\r\n        [errorStateMatcher]="matcher" [required]="postcodeRequired">\r\n      <mat-error *ngIf="parentForm.get(groupName).get(\'postcode\').hasError(\'required\')">\r\n        This field is required\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field *ngIf="showContact">\r\n      <input type="tel" matInput placeholder="Mobile Phone Number" formControlName="phone" autocomplete="tel"\r\n        [errorStateMatcher]="matcher" required>\r\n      <mat-hint>We need your mobile number in case we need to text you with urgent issues or the courier may need to\r\n        call about your\r\n        delivery.\r\n      </mat-hint>\r\n      <mat-error *ngIf="parentForm.get(groupName).get(\'phone\').hasError(\'required\')">\r\n        This field is required\r\n      </mat-error>\r\n    </mat-form-field>\r\n  </div>\r\n</div>\r\n';
    },
    "./src/app/shared/modules/address-form/address-form.component.scss": 
    /*!*************************************************************************!*\
  !*** ./src/app/shared/modules/address-form/address-form.component.scss ***!
  \*************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = ":host {\n  display: block;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL3NoYXJlZC9tb2R1bGVzL2FkZHJlc3MtZm9ybS9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxhcHBcXHNoYXJlZFxcbW9kdWxlc1xcYWRkcmVzcy1mb3JtXFxhZGRyZXNzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9zaGFyZWQvbW9kdWxlcy9hZGRyZXNzLWZvcm0vYWRkcmVzcy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvc2hhcmVkL21vZHVsZXMvYWRkcmVzcy1mb3JtL2FkZHJlc3MtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59Il19 */";
    },
    "./src/app/shared/modules/address-form/address-form.component.ts": 
    /*!***********************************************************************!*\
  !*** ./src/app/shared/modules/address-form/address-form.component.ts ***!
  \***********************************************************************/
    /*! exports provided: MyErrorStateMatcher, AddressFormComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", (function() {
            return MyErrorStateMatcher;
        }));
        __webpack_require__.d(__webpack_exports__, "AddressFormComponent", (function() {
            return AddressFormComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
        var _global_untilDestroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @global/untilDestroy */ "../global/untilDestroy/index.ts");
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
        var _country_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./country.service */ "./src/app/shared/modules/address-form/country.service.ts");
        var _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @gorniv/ngx-universal */ "../../node_modules/@gorniv/ngx-universal/fesm2015/gorniv-ngx-universal.js");
        class MyErrorStateMatcher {
            isErrorState(control, form) {
                const isSubmitted = form && form.submitted;
                return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
            }
        }
        let AddressFormComponent = class AddressFormComponent {
            constructor(fb, country, cookieService) {
                this.fb = fb;
                this.country = country;
                this.cookieService = cookieService;
                this.showNames = false;
                this.showContact = false;
                this.countryChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
                this.loading = true;
                this.countries = [];
                this.matcher = new MyErrorStateMatcher;
                this.postcodeRequired = true;
            }
            ngOnInit() {
                this.country.getCountries().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((resp => resp.data)), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_3__["untilComponentDestroyed"])(this)).subscribe((resp => {
                    this.countries = resp;
                    this.createForm();
                }));
            }
            createForm() {
                this.addressGroup = this.fb.group({
                    address1: [ this.address ? this.address.address1 : null, [ _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required ] ],
                    address2: [ this.address ? this.address.address2 : null ],
                    city: [ this.address ? this.address.city : null, [ _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required ] ],
                    region: [ this.address ? this.address.region : null ],
                    country_code: [ this.address ? this.address.country_code : null, [ _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required ] ],
                    country: [ this.address ? this.address.country : null, [ _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required ] ],
                    postcode: [ this.address ? this.address.postcode : null ]
                });
                if (this.showNames) {
                    this.addressGroup.addControl("firstName", this.fb.control(this.address ? this.address.firstName : null, [ _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required ]));
                    this.addressGroup.addControl("lastName", this.fb.control(this.address ? this.address.lastName : null, [ _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required ]));
                }
                if (this.showContact) {
                    this.addressGroup.addControl("phone", this.fb.control(this.address ? this.address.phone : null, [ _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required ]));
                }
                this.parentForm.addControl(this.groupName, this.addressGroup);
                this.loading = false;
                this.subscribeCountryChange();
            }
            subscribeCountryChange() {
                if (this.address && this.address.country) {
                    this.setPostCodeValidation(this.address.country);
                }
                const countryCodeCtrl = this.addressGroup.controls.country_code.valueChanges;
                const countryCtrl = this.addressGroup.controls.country.valueChanges;
                const postcodeCtrl = this.addressGroup.controls.postcode;
                countryCtrl.pipe(Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_3__["untilComponentDestroyed"])(this)).subscribe((value => {
                    const searchCountry = this.countries.find((country => country.name.toLowerCase().indexOf(value.toLowerCase()) === 0));
                    this.setCountryCode(searchCountry);
                }));
                countryCodeCtrl.pipe(Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_3__["untilComponentDestroyed"])(this)).subscribe((code => this.countryChanged.emit(code)));
                if (!this.address) {
                    const countryCode = this.cookieService.get("country") || "GB";
                    const searchCountry = this.countries.find((country => country.cca2.toLowerCase().indexOf(countryCode.toLowerCase()) === 0));
                    if (searchCountry) {
                        this.addressGroup.controls.country.setValue(searchCountry.name);
                    }
                }
            }
            setCountryCode(country) {
                this.addressGroup.controls.country_code.setValue(country.cca2);
                this.setPostCodeValidation(country.name);
            }
            setPostCodeValidation(country) {
                const postcodeCtrl = this.addressGroup.controls.postcode;
                if (country !== "Ireland") {
                    this.postcodeRequired = true;
                    postcodeCtrl.setValidators([ _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required ]);
                    postcodeCtrl.updateValueAndValidity();
                } else {
                    this.postcodeRequired = false;
                    postcodeCtrl.setValidators(null);
                    postcodeCtrl.updateValueAndValidity();
                }
            }
            ngOnDestroy() {}
        };
        AddressFormComponent.ctorParameters = () => [ {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
            type: _country_service__WEBPACK_IMPORTED_MODULE_5__["CountryService"]
        }, {
            type: _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
        } ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) ], AddressFormComponent.prototype, "parentForm", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], AddressFormComponent.prototype, "address", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String) ], AddressFormComponent.prototype, "groupName", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], AddressFormComponent.prototype, "showNames", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], AddressFormComponent.prototype, "showContact", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]) ], AddressFormComponent.prototype, "countryChanged", void 0);
        AddressFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bx-address-form",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./address-form.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/address-form/address-form.component.html")).default,
            styles: [ tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./address-form.component.scss */ "./src/app/shared/modules/address-form/address-form.component.scss")).default ]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _country_service__WEBPACK_IMPORTED_MODULE_5__["CountryService"], _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_6__["CookieService"] ]) ], AddressFormComponent);
    },
    "./src/app/shared/modules/address-form/address-form.module.ts": 
    /*!********************************************************************!*\
  !*** ./src/app/shared/modules/address-form/address-form.module.ts ***!
  \********************************************************************/
    /*! exports provided: AddressFormModule */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "AddressFormModule", (function() {
            return AddressFormModule;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
        var _app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/material/material.module */ "./src/app/material/material.module.ts");
        var _address_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./address-form.component */ "./src/app/shared/modules/address-form/address-form.component.ts");
        var _country_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./country.service */ "./src/app/shared/modules/address-form/country.service.ts");
        let AddressFormModule = class AddressFormModule {};
        AddressFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [ _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"] ],
            declarations: [ _address_form_component__WEBPACK_IMPORTED_MODULE_5__["AddressFormComponent"] ],
            providers: [ _country_service__WEBPACK_IMPORTED_MODULE_6__["CountryService"] ],
            exports: [ _address_form_component__WEBPACK_IMPORTED_MODULE_5__["AddressFormComponent"] ]
        }) ], AddressFormModule);
    },
    "./src/app/shared/modules/address-form/country.service.ts": 
    /*!****************************************************************!*\
  !*** ./src/app/shared/modules/address-form/country.service.ts ***!
  \****************************************************************/
    /*! exports provided: CountryService */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "CountryService", (function() {
            return CountryService;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "../environments/environment.ts");
        let CountryService = class CountryService {
            constructor(http) {
                this.http = http;
                this.host = _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].host;
                this.endpoint = "country";
            }
            get url() {
                return `${this.host}/${this.endpoint}`;
            }
            getCountries() {
                const query = {
                    $select: [ "name", "cca2", "altSpellings" ],
                    $sort: [ "name" ],
                    $limit: 5e3
                };
                return this.http.get(this.url, {
                    params: query
                });
            }
        };
        CountryService.ctorParameters = () => [ {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        } ];
        CountryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] ]) ], CountryService);
    },
    "./src/app/shared/validators/register-validation.ts": 
    /*!**********************************************************!*\
  !*** ./src/app/shared/validators/register-validation.ts ***!
  \**********************************************************/
    /*! exports provided: PasswordValidation, EmailValidation */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "PasswordValidation", (function() {
            return PasswordValidation;
        }));
        __webpack_require__.d(__webpack_exports__, "EmailValidation", (function() {
            return EmailValidation;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        class PasswordValidation {
            static MatchPassword(AC) {
                const password = AC.get("password").value;
                const confirmPassword = AC.get("confirmPassword").value;
                if (password !== confirmPassword) {
                    AC.get("confirmPassword").setErrors({
                        MatchPassword: true
                    });
                } else {
                    return null;
                }
            }
        }
        class EmailValidation {
            static MatchEmail(AC) {
                const email = AC.get("email").value;
                const confirmEmail = AC.get("confirmEmail").value;
                if (email !== confirmEmail) {
                    AC.get("confirmEmail").setErrors({
                        MatchEmail: true
                    });
                } else {
                    return null;
                }
            }
        }
    }
} ]);