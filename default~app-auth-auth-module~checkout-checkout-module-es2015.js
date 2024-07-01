(window["webpackJsonp"] = window["webpackJsonp"] || []).push([ [ "default~app-auth-auth-module~checkout-checkout-module" ], {
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/auth-form/login/login.component.html": 
    /*!*******************************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/auth-form/login/login.component.html ***!
  \*******************************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<form [formGroup]="loginForm" (ngSubmit)="onLogin(loginForm.value)">\r\n  <ng-content></ng-content>\r\n  <mat-form-field>\r\n    <input type="email" matInput placeholder="Email" formControlName="email" autocomplete="username" required>\r\n    <mat-error *ngIf="loginForm.get(\'email\').hasError(\'email\') && !loginForm.get(\'email\').hasError(\'required\')">\r\n      Please enter a valid email address\r\n    </mat-error>\r\n    <mat-error *ngIf="loginForm.get(\'email\').hasError(\'required\')">\r\n      Email is\r\n      <strong>required</strong>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input type="password" matInput placeholder="Password" formControlName="password" autocomplete="current-password"\r\n      required>\r\n    <mat-error *ngIf="loginForm.get(\'password\').hasError(\'required\')">\r\n      Password is\r\n      <strong>required</strong>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <button class="btn btn-success" type="submit" [disabled]="!loginForm.valid">Login</button>\r\n  <button type="button" [routerLink]="[\'/login/forgot\']" class="btn-text">Forgot password?</button>\r\n</form>\r\n';
    },
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/auth-form/register/register.component.html": 
    /*!*************************************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/auth-form/register/register.component.html ***!
  \*************************************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<form [formGroup]="registerForm" (ngSubmit)="onRegister(registerForm.value)">\r\n  <ng-content></ng-content>\r\n  <div formGroupName="emails" *ngIf="!email">\r\n    <mat-form-field>\r\n      <input type="email" matInput placeholder="Email" formControlName="email" autocomplete="username" required>\r\n      <mat-error *ngIf="registerForm.get(\'emails\').get(\'email\').hasError(\'email\') && !registerForm.get(\'emails\').get(\'email\').hasError(\'required\')">\r\n        Please enter a valid email address\r\n      </mat-error>\r\n      <mat-error *ngIf="registerForm.get(\'emails\').get(\'email\').hasError(\'required\')">\r\n        Email is\r\n        <strong>required</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input type="email" matInput placeholder="Confirm Email" formControlName="confirmEmail" autocomplete="username"\r\n        required>\r\n      <mat-error *ngIf="registerForm.get(\'emails\').get(\'confirmEmail\').hasError(\'MatchEmail\') && !registerForm.get(\'emails\').get(\'confirmEmail\').hasError(\'required\')">\r\n        Email address must match\r\n      </mat-error>\r\n      <mat-error *ngIf="registerForm.get(\'emails\').get(\'confirmEmail\').hasError(\'required\')">\r\n        Email is\r\n        <strong>required</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n  </div>\r\n  <div formGroupName="passwords">\r\n    <mat-form-field>\r\n      <input type="password" matInput placeholder="Password" formControlName="password" autocomplete="new-password"\r\n        required>\r\n      <mat-error *ngIf="registerForm.get(\'passwords\').get(\'password\').hasError(\'required\')">\r\n        Password is\r\n        <strong>required</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input type="password" matInput placeholder="Confirm Password" formControlName="confirmPassword" autocomplete="new-password"\r\n        required>\r\n      <mat-error *ngIf="registerForm.get(\'passwords\').get(\'confirmPassword\').hasError(\'MatchPassword\') && !registerForm.get(\'passwords\').get(\'confirmPassword\').hasError(\'required\')">\r\n        Password must match\r\n      </mat-error>\r\n      <mat-error *ngIf="registerForm.get(\'passwords\').get(\'confirmPassword\').hasError(\'required\')">\r\n        Password is\r\n        <strong>required</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n  </div>\r\n  <mat-checkbox formControlName="newsletter">Subscribe to recieve the latest product news and offers.</mat-checkbox>\r\n  <button class="btn btn-success" type="submit" [disabled]="!registerForm.valid">Create</button>\r\n</form>\r\n';
    },
    "./src/app/shared/modules/auth-form/auth-form.module.ts": 
    /*!**************************************************************!*\
  !*** ./src/app/shared/modules/auth-form/auth-form.module.ts ***!
  \**************************************************************/
    /*! exports provided: AuthFormModule */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "AuthFormModule", (function() {
            return AuthFormModule;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
        var _app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/material/material.module */ "./src/app/material/material.module.ts");
        var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/shared/modules/auth-form/login/login.component.ts");
        var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/shared/modules/auth-form/register/register.component.ts");
        let AuthFormModule = class AuthFormModule {};
        AuthFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [ _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"] ],
            declarations: [ _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] ],
            exports: [ _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] ]
        }) ], AuthFormModule);
    },
    "./src/app/shared/modules/auth-form/login/login.component.scss": 
    /*!*********************************************************************!*\
  !*** ./src/app/shared/modules/auth-form/login/login.component.scss ***!
  \*********************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = ".btn {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL3NoYXJlZC9tb2R1bGVzL2F1dGgtZm9ybS9sb2dpbi9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxhcHBcXHNoYXJlZFxcbW9kdWxlc1xcYXV0aC1mb3JtXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9zaGFyZWQvbW9kdWxlcy9hdXRoLWZvcm0vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InByb2plY3RzL2NsaWVudC9zcmMvYXBwL3NoYXJlZC9tb2R1bGVzL2F1dGgtZm9ybS9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuIiwiLmJ0biB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59Il19 */";
    },
    "./src/app/shared/modules/auth-form/login/login.component.ts": 
    /*!*******************************************************************!*\
  !*** ./src/app/shared/modules/auth-form/login/login.component.ts ***!
  \*******************************************************************/
    /*! exports provided: LoginComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "LoginComponent", (function() {
            return LoginComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
        var _app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
        var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
        var _global_untilDestroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @global/untilDestroy */ "../global/untilDestroy/index.ts");
        let LoginComponent = class LoginComponent {
            constructor(fb, authService, router) {
                this.fb = fb;
                this.authService = authService;
                this.router = router;
                this.loginComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"];
                this.loginForm = this.fb.group({
                    email: [ null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([ _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email ]) ],
                    password: [ null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required ]
                });
            }
            onLogin(credentials) {
                this.authService.login(credentials.email, credentials.password).pipe(Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_5__["untilComponentDestroyed"])(this)).subscribe((resp => {
                    this.router.navigate([ this.authService.redirectUrl ]);
                    this.loginComplete.emit();
                }));
            }
            ngOnDestroy() {}
        };
        LoginComponent.ctorParameters = () => [ {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
            type: _app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        } ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], LoginComponent.prototype, "loginComplete", void 0);
        LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "bx-login",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/auth-form/login/login.component.html")).default,
            styles: [ tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/shared/modules/auth-form/login/login.component.scss")).default ]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] ]) ], LoginComponent);
    },
    "./src/app/shared/modules/auth-form/register/register.component.scss": 
    /*!***************************************************************************!*\
  !*** ./src/app/shared/modules/auth-form/register/register.component.scss ***!
  \***************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = ".btn {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL3NoYXJlZC9tb2R1bGVzL2F1dGgtZm9ybS9yZWdpc3Rlci9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxhcHBcXHNoYXJlZFxcbW9kdWxlc1xcYXV0aC1mb3JtXFxyZWdpc3RlclxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9zaGFyZWQvbW9kdWxlcy9hdXRoLWZvcm0vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InByb2plY3RzL2NsaWVudC9zcmMvYXBwL3NoYXJlZC9tb2R1bGVzL2F1dGgtZm9ybS9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuIiwiLmJ0biB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59Il19 */";
    },
    "./src/app/shared/modules/auth-form/register/register.component.ts": 
    /*!*************************************************************************!*\
  !*** ./src/app/shared/modules/auth-form/register/register.component.ts ***!
  \*************************************************************************/
    /*! exports provided: RegisterComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "RegisterComponent", (function() {
            return RegisterComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
        var _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/services/api.service */ "./src/app/core/services/api.service.ts");
        var _app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
        var _app_shared_validators_register_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/validators/register-validation */ "./src/app/shared/validators/register-validation.ts");
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
        var _global_untilDestroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @global/untilDestroy */ "../global/untilDestroy/index.ts");
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
        var _app_cart_actions_cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/cart/actions/cart */ "./src/app/cart/actions/cart.ts");
        var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
        let RegisterComponent = class RegisterComponent {
            constructor(fb, api, auth, store, router) {
                this.fb = fb;
                this.api = api;
                this.auth = auth;
                this.store = store;
                this.router = router;
            }
            ngOnInit() {
                this.registerForm = this.fb.group({
                    newsletter: [ false ],
                    checkout: [ this.checkout ],
                    emails: this.fb.group({
                        email: [ this.email ? this.email : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([ _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email ]) ],
                        confirmEmail: [ this.email ? this.email : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([ _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email ]) ]
                    }, {
                        validator: _app_shared_validators_register_validation__WEBPACK_IMPORTED_MODULE_5__["EmailValidation"].MatchEmail
                    }),
                    passwords: this.fb.group({
                        password: [ null, [ _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required ] ],
                        confirmPassword: [ null, [ _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required ] ]
                    }, {
                        validator: _app_shared_validators_register_validation__WEBPACK_IMPORTED_MODULE_5__["PasswordValidation"].MatchPassword
                    })
                });
            }
            onRegister(values) {
                this.api.create("users", {
                    email: values.emails.email,
                    password: values.passwords.password,
                    newsletter: values.newsletter,
                    checkout: values.checkout
                }, true, "Creating account").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])((resp => this.auth.login(values.emails.email, values.passwords.password))), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_7__["untilComponentDestroyed"])(this)).subscribe((() => {
                    this.router.navigate([ "/account" ]);
                    this.store.dispatch(new _app_cart_actions_cart__WEBPACK_IMPORTED_MODULE_9__["Email"](null));
                }));
            }
            ngOnDestroy() {}
        };
        RegisterComponent.ctorParameters = () => [ {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
            type: _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
            type: _app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]
        }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        } ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String) ], RegisterComponent.prototype, "email", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean) ], RegisterComponent.prototype, "checkout", void 0);
        RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bx-register",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/auth-form/register/register.component.html")).default,
            styles: [ tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/shared/modules/auth-form/register/register.component.scss")).default ]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] ]) ], RegisterComponent);
    }
} ]);