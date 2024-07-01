(window["webpackJsonp"] = window["webpackJsonp"] || []).push([ [ "app-newsletter-newsletter-module" ], {
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/newsletter/newsletter.component.html": 
    /*!****************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/newsletter/newsletter.component.html ***!
  \****************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<header class="page-header">\r\n  <h1>Newsletter</h1>\r\n</header>\r\n<div class="page-body">\r\n  <form [formGroup]="mailchimpForm" (ngSubmit)="signup(mailchimpForm.value)">\r\n    <mat-form-field>\r\n      <input type="email" matInput placeholder="Email" formControlName="email" autocomplete="email"\r\n        [errorStateMatcher]="matcher" required>\r\n      <mat-error *ngIf="mailchimpForm.get(\'email\').hasError(\'required\')">\r\n        This field is required\r\n      </mat-error>\r\n      <mat-error\r\n        *ngIf="mailchimpForm.get(\'email\').hasError(\'email\') && !mailchimpForm.get(\'email\').hasError(\'required\')">\r\n        Please enter a valid email address\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <button class="btn btn-solid btn-center" [disabled]="!mailchimpForm.valid">Submit</button>\r\n  </form>\r\n  <p><small>By providing your email address you consent to receiving some marketing emails from us.</small></p>\r\n</div>\r\n';
    },
    "./src/app/newsletter/newsletter-routing.module.ts": 
    /*!*********************************************************!*\
  !*** ./src/app/newsletter/newsletter-routing.module.ts ***!
  \*********************************************************/
    /*! exports provided: NewsletterRoutingModule */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "NewsletterRoutingModule", (function() {
            return NewsletterRoutingModule;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
        var _newsletter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newsletter.component */ "./src/app/newsletter/newsletter.component.ts");
        const routes = [ {
            path: "",
            component: _newsletter_component__WEBPACK_IMPORTED_MODULE_3__["NewsletterComponent"]
        } ];
        let NewsletterRoutingModule = class NewsletterRoutingModule {};
        NewsletterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [ _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes) ],
            exports: [ _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"] ]
        }) ], NewsletterRoutingModule);
    },
    "./src/app/newsletter/newsletter.component.scss": 
    /*!******************************************************!*\
  !*** ./src/app/newsletter/newsletter.component.scss ***!
  \******************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = ":host {\n  display: block;\n  padding: 15px;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 576px) {\n  :host {\n    max-width: 100%;\n  }\n}\n@media (min-width: 768px) {\n  :host {\n    max-width: 100%;\n  }\n}\n@media (min-width: 992px) {\n  :host {\n    max-width: 100%;\n  }\n}\n@media (min-width: 1200px) {\n  :host {\n    max-width: 600px;\n  }\n}\n@media (min-width: 576px) {\n  :host {\n    padding: 2rem 15px;\n  }\n}\n.page-header {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.page-body {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.page-body form {\n  width: calc(100% - 30px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL25ld3NsZXR0ZXIvQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcYXBwXFxuZXdzbGV0dGVyXFxuZXdzbGV0dGVyLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvbmV3c2xldHRlci9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2dyaWQuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL25ld3NsZXR0ZXIvbmV3c2xldHRlci5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL25ld3NsZXR0ZXIvQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL25vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxtaXhpbnNcXF9icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUNUQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNERjtBQ29ESTtFSGhESjtJQ0tNLGVEWmlCO0VFT3JCO0FBQ0Y7QUMrQ0k7RUhoREo7SUNLTSxlRFppQjtFRVlyQjtBQUNGO0FDMENJO0VIaERKO0lDS00sZURaaUI7RUVpQnJCO0FBQ0Y7QUNxQ0k7RUhoREo7SUNLTSxnQkRaaUI7RUVzQnJCO0FBQ0Y7QUNnQ0k7RUhoREo7SUFNSSxrQkFBQTtFRWNGO0FBQ0Y7QUZaQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUVlRjtBRmJBO0VDRkUscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx1QkFBQTtNQUFBLG1CQUFBO1VBQUEsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNtQkY7QUZsQkU7RUFDRSx3QkFBQTtBRW9CSiIsImZpbGUiOiJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9uZXdzbGV0dGVyL25ld3NsZXR0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zJztcclxuQGltcG9ydCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzJztcclxuQGltcG9ydCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fZ3JpZCc7XHJcblxyXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcclxuICBzbTogMTAwJSxcclxuICBtZDogMTAwJSxcclxuICBsZzogMTAwJSxcclxuICB4bDogNjAwcHhcclxuKTtcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIEBpbmNsdWRlIG1ha2UtY29udGFpbmVyKCk7XHJcbiAgQGluY2x1ZGUgbWFrZS1jb250YWluZXItbWF4LXdpZHRocygkY29udGFpbmVyLW1heC13aWR0aHMpO1xyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoc20pIHtcclxuICAgIHBhZGRpbmc6IDJyZW0gMTVweDtcclxuICB9XHJcbn1cclxuLnBhZ2UtaGVhZGVyIHtcclxuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxufVxyXG4ucGFnZS1ib2R5IHtcclxuICBAaW5jbHVkZSBtYWtlLXJvdygpO1xyXG4gIGZvcm0ge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gIH1cclxufVxyXG4iLCIvLy8gR3JpZCBzeXN0ZW1cbi8vXG4vLyBHZW5lcmF0ZSBzZW1hbnRpYyBncmlkIGNvbHVtbnMgd2l0aCB0aGVzZSBtaXhpbnMuXG5cbkBtaXhpbiBtYWtlLWNvbnRhaW5lcigkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6ICRndXR0ZXIgLyAyO1xuICBwYWRkaW5nLWxlZnQ6ICRndXR0ZXIgLyAyO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG5cbi8vIEZvciBlYWNoIGJyZWFrcG9pbnQsIGRlZmluZSB0aGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgY29udGFpbmVyIGluIGEgbWVkaWEgcXVlcnlcbkBtaXhpbiBtYWtlLWNvbnRhaW5lci1tYXgtd2lkdGhzKCRtYXgtd2lkdGhzOiAkY29udGFpbmVyLW1heC13aWR0aHMsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQGVhY2ggJGJyZWFrcG9pbnQsICRjb250YWluZXItbWF4LXdpZHRoIGluICRtYXgtd2lkdGhzIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50LCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIG1heC13aWR0aDogJGNvbnRhaW5lci1tYXgtd2lkdGg7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYWtlLXJvdygkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tcmlnaHQ6IC0kZ3V0dGVyIC8gMjtcbiAgbWFyZ2luLWxlZnQ6IC0kZ3V0dGVyIC8gMjtcbn1cblxuQG1peGluIG1ha2UtY29sLXJlYWR5KCRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vIFByZXZlbnQgY29sdW1ucyBmcm9tIGJlY29taW5nIHRvbyBuYXJyb3cgd2hlbiBhdCBzbWFsbGVyIGdyaWQgdGllcnMgYnlcbiAgLy8gYWx3YXlzIHNldHRpbmcgYHdpZHRoOiAxMDAlO2AuIFRoaXMgd29ya3MgYmVjYXVzZSB3ZSB1c2UgYGZsZXhgIHZhbHVlc1xuICAvLyBsYXRlciBvbiB0byBvdmVycmlkZSB0aGlzIGluaXRpYWwgd2lkdGguXG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAkZ3V0dGVyIC8gMjtcbiAgcGFkZGluZy1sZWZ0OiAkZ3V0dGVyIC8gMjtcbn1cblxuQG1peGluIG1ha2UtY29sKCRzaXplLCAkY29sdW1uczogJGdyaWQtY29sdW1ucykge1xuICBmbGV4OiAwIDAgcGVyY2VudGFnZSgkc2l6ZSAvICRjb2x1bW5zKTtcbiAgLy8gQWRkIGEgYG1heC13aWR0aGAgdG8gZW5zdXJlIGNvbnRlbnQgd2l0aGluIGVhY2ggY29sdW1uIGRvZXMgbm90IGJsb3cgb3V0XG4gIC8vIHRoZSB3aWR0aCBvZiB0aGUgY29sdW1uLiBBcHBsaWVzIHRvIElFMTArIGFuZCBGaXJlZm94LiBDaHJvbWUgYW5kIFNhZmFyaVxuICAvLyBkbyBub3QgYXBwZWFyIHRvIHJlcXVpcmUgdGhpcy5cbiAgbWF4LXdpZHRoOiBwZXJjZW50YWdlKCRzaXplIC8gJGNvbHVtbnMpO1xufVxuXG5AbWl4aW4gbWFrZS1jb2wtb2Zmc2V0KCRzaXplLCAkY29sdW1uczogJGdyaWQtY29sdW1ucykge1xuICAkbnVtOiAkc2l6ZSAvICRjb2x1bW5zO1xuICBtYXJnaW4tbGVmdDogaWYoJG51bSA9PSAwLCAwLCBwZXJjZW50YWdlKCRudW0pKTtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgOmhvc3Qge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICA6aG9zdCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIDpob3N0IHtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgOmhvc3Qge1xuICAgIHBhZGRpbmc6IDJyZW0gMTVweDtcbiAgfVxufVxuXG4ucGFnZS1oZWFkZXIge1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG5cbi5wYWdlLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cbi5wYWdlLWJvZHkgZm9ybSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbn0iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";
    },
    "./src/app/newsletter/newsletter.component.ts": 
    /*!****************************************************!*\
  !*** ./src/app/newsletter/newsletter.component.ts ***!
  \****************************************************/
    /*! exports provided: NewsletterComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "NewsletterComponent", (function() {
            return NewsletterComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
        var _app_form_error_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/form-error-state */ "./src/app/form-error-state.ts");
        var _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gorniv/ngx-universal */ "../../node_modules/@gorniv/ngx-universal/fesm2015/gorniv-ngx-universal.js");
        var _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/services/api.service */ "./src/app/core/services/api.service.ts");
        var angulartics2_gtm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angulartics2/gtm */ "../../node_modules/angulartics2/gtm/fesm2015/angulartics2-gtm.js");
        var angulartics2_facebook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angulartics2/facebook */ "../../node_modules/angulartics2/facebook/fesm2015/angulartics2-facebook.js");
        var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "../../node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
        var _global_untilDestroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @global/untilDestroy */ "../global/untilDestroy/index.ts");
        var _app_core_modules_loading_loading_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/core/modules/loading/loading.service */ "./src/app/core/modules/loading/loading.service.ts");
        let NewsletterComponent = class NewsletterComponent {
            constructor(_cookieService, fb, service, angulartics2GoogleTagManager, angulartics2Facebook, loading, toastr) {
                this._cookieService = _cookieService;
                this.fb = fb;
                this.service = service;
                this.angulartics2GoogleTagManager = angulartics2GoogleTagManager;
                this.angulartics2Facebook = angulartics2Facebook;
                this.loading = loading;
                this.toastr = toastr;
                this.mask = [ /\d/, /\d/, "/", /\d/, /\d/ ];
                this.matcher = new _app_form_error_state__WEBPACK_IMPORTED_MODULE_3__["MyErrorStateMatcher"];
                this.mailchimpForm = this.fb.group({
                    email: [ null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([ _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email ]) ]
                });
            }
            ngOnInit() {
                this._cookieService.put("bx-mailchimp-sticky", "true", {
                    expires: new Date(Date.now() + 60 * 864e5)
                });
            }
            signup(subscriber) {
                this.loading.show();
                subscriber.merge_fields = {
                    TYPE: "website"
                };
                this.service.create("mailchimp/subscribe", subscriber, false).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_10__["componentDestroyed"])(this))).subscribe((resp => {
                    this.loading.hide();
                    if (resp && resp.status === 400) {
                        this.toastr.error(resp.detail, "Signup Failed");
                        return;
                    }
                    if (resp) {
                        this.angulartics2Facebook.eventTrack("Lead", {
                            content_name: "Newsletter Sign Up",
                            content_category: "Acquisition"
                        });
                        this.angulartics2GoogleTagManager.eventTrack("Newsletter Sign Up", {
                            category: "Acquisition"
                        });
                        this.toastr.success("Thanks for signing up to the Boxxerworld Newsletter.", "Success");
                        this.mailchimpForm.reset();
                    }
                }));
            }
            ngOnDestroy() {}
        };
        NewsletterComponent.ctorParameters = () => [ {
            type: _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
        }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
            type: _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
            type: angulartics2_gtm__WEBPACK_IMPORTED_MODULE_6__["Angulartics2GoogleTagManager"]
        }, {
            type: angulartics2_facebook__WEBPACK_IMPORTED_MODULE_7__["Angulartics2Facebook"]
        }, {
            type: _app_core_modules_loading_loading_service__WEBPACK_IMPORTED_MODULE_11__["LoadingService"]
        }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
        } ];
        NewsletterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bx-newsletter",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./newsletter.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/newsletter/newsletter.component.html")).default,
            styles: [ tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./newsletter.component.scss */ "./src/app/newsletter/newsletter.component.scss")).default ]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_4__["CookieService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], angulartics2_gtm__WEBPACK_IMPORTED_MODULE_6__["Angulartics2GoogleTagManager"], angulartics2_facebook__WEBPACK_IMPORTED_MODULE_7__["Angulartics2Facebook"], _app_core_modules_loading_loading_service__WEBPACK_IMPORTED_MODULE_11__["LoadingService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] ]) ], NewsletterComponent);
    },
    "./src/app/newsletter/newsletter.module.ts": 
    /*!*************************************************!*\
  !*** ./src/app/newsletter/newsletter.module.ts ***!
  \*************************************************/
    /*! exports provided: NewsletterModule */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "NewsletterModule", (function() {
            return NewsletterModule;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _newsletter_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newsletter-routing.module */ "./src/app/newsletter/newsletter-routing.module.ts");
        var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
        var _app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/material/material.module */ "./src/app/material/material.module.ts");
        var _newsletter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newsletter.component */ "./src/app/newsletter/newsletter.component.ts");
        var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
        let NewsletterModule = class NewsletterModule {};
        NewsletterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [ _newsletter_component__WEBPACK_IMPORTED_MODULE_5__["NewsletterComponent"] ],
            imports: [ _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _newsletter_routing_module__WEBPACK_IMPORTED_MODULE_2__["NewsletterRoutingModule"] ]
        }) ], NewsletterModule);
    }
} ]);