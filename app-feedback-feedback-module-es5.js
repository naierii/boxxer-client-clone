function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-feedback-feedback-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/feedback/feedback.component.html": function node_modulesRawLoaderDistCjsJsSrcAppFeedbackFeedbackComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"dashboard-form\" [formGroup]=\"feedbackForm\" (ngSubmit)=\"save(feedbackForm.value)\">\r\n  <h1>Feedback</h1>\r\n  <p>If you have any feedback, we would love to hear from you.</p>\r\n  <mat-form-field>\r\n    <mat-label>Email</mat-label>\r\n    <input type=\"email\" matInput placeholder=\"Enter email\" formControlName=\"email\" required autocomplete=\"email\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <textarea matInput placeholder=\"Enter your feedback here\" matTextareaAutosize matAutosizeMinRows=\"3\" matAutosizeMaxRows=\"10\"\r\n      formControlName=\"details\" required></textarea>\r\n  </mat-form-field>\r\n  <button class=\"btn\" type=\"submit\" [disabled]=\"!feedbackForm.valid\">Submit</button>\r\n</form>\r\n";
    /***/
  },

  /***/
  "./src/app/feedback/feedback-routing.module.ts": function srcAppFeedbackFeedbackRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackRoutingModule", function () {
      return FeedbackRoutingModule;
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


    var _feedback_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./feedback.component */
    "./src/app/feedback/feedback.component.ts");

    var routes = [{
      path: '',
      component: _feedback_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackComponent"]
    }];

    var FeedbackRoutingModule = function FeedbackRoutingModule() {
      _classCallCheck(this, FeedbackRoutingModule);
    };

    FeedbackRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FeedbackRoutingModule);
    /***/
  },

  /***/
  "./src/app/feedback/feedback.component.scss": function srcAppFeedbackFeedbackComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  max-width: 800px;\n  margin: 0 auto;\n  display: block;\n  padding: 15px;\n}\n@media (min-width: 576px) {\n  :host {\n    padding: 2rem 15px;\n  }\n}\n.dashboard-form {\n  background-color: white;\n  padding: 1rem;\n  display: block;\n  margin-bottom: 1rem;\n}\n.dashboard-form h2 {\n  font-size: 18px;\n  font-size: 1.125rem;\n  line-height: 1;\n  margin: 0 0 0.5rem;\n}\n.dashboard-form .content {\n  margin-bottom: 1rem;\n}\n.dashboard-form .btn {\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2ZlZWRiYWNrL0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXGFwcFxcZmVlZGJhY2tcXGZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9mZWVkYmFjay9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9mZWVkYmFjay9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxzY3NzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ1BGO0FDdURJO0VGcERKO0lBTUksa0JBQUE7RUNMRjtBQUNGO0FEUUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNMRjtBRE1FO0VHZUEsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FIWTtFSFpWLGtCQUFBO0FDRko7QURJRTtFQUNFLG1CQUFBO0FDRko7QURJRTtFQUNFLFdBQUE7QUNGSiIsImZpbGUiOiJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnO1xyXG5AaW1wb3J0ICdub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJztcclxuQGltcG9ydCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHMnO1xyXG5AaW1wb3J0ICdub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19ncmlkJztcclxuXHJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ21peGlucyc7XHJcblxyXG46aG9zdCB7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoc20pIHtcclxuICAgIHBhZGRpbmc6IDJyZW0gMTVweDtcclxuICB9XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtZm9ybSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGgyIHtcclxuICAgIEBpbmNsdWRlIGZvbnQtc2l6ZSgxOCwgMTgpO1xyXG4gICAgbWFyZ2luOiAwIDAgMC41cmVtO1xyXG4gIH1cclxuICAuY29udGVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICAuYnRuIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTVweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICA6aG9zdCB7XG4gICAgcGFkZGluZzogMnJlbSAxNXB4O1xuICB9XG59XG5cbi5kYXNoYm9hcmQtZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5kYXNoYm9hcmQtZm9ybSBoMiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1hcmdpbjogMCAwIDAuNXJlbTtcbn1cbi5kYXNoYm9hcmQtZm9ybSAuY29udGVudCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uZGFzaGJvYXJkLWZvcm0gLmJ0biB7XG4gIHdpZHRoOiBhdXRvO1xufSIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIiwiQG1peGluIGZsdWlkLXR5cGUoJHByb3BlcnRpZXMsICRtaW4tdncsICRtYXgtdncsICRtaW4tdmFsdWUsICRtYXgtdmFsdWUpIHtcclxuICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgI3skcHJvcGVydHl9OiAkbWluLXZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1pbi12dykge1xyXG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcclxuICAgICAgI3skcHJvcGVydHl9OiBjYWxjKFxyXG4gICAgICAgICN7JG1pbi12YWx1ZX0gKyAje3N0cmlwLXVuaXQoJG1heC12YWx1ZSAtICRtaW4tdmFsdWUpfSAqXHJcbiAgICAgICAgICAoXHJcbiAgICAgICAgICAgIDEwMHZ3IC0gI3skbWluLXZ3fVxyXG4gICAgICAgICAgKSAvICN7c3RyaXAtdW5pdCgkbWF4LXZ3IC0gJG1pbi12dyl9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWF4LXZ3KSB7XHJcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgICAjeyRwcm9wZXJ0eX06ICRtYXgtdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AZnVuY3Rpb24gc3RyaXAtdW5pdCgkdmFsdWUpIHtcclxuICBAcmV0dXJuICR2YWx1ZSAvICgkdmFsdWUgKiAwICsgMSk7XHJcbn1cclxuXHJcbkBtaXhpbiB3cmFwcGVyKCR3aWR0aDoxNDQwcHgpIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1heC13aWR0aDogJHdpZHRoO1xyXG4gIG1hcmdpbjogMCBhdXRvIDEuNXJlbTtcclxufVxyXG5cclxuQG1peGluIGZvbnQtc2l6ZSgkZm9udFNpemUsICRsaW5lSGVpZ2h0OiAxKSB7XHJcbiAgJHJlbVZhbHVlOiAoJGZvbnRTaXplIC8gMTYpO1xyXG4gICRweFZhbHVlOiAkZm9udFNpemU7XHJcbiAgJGxpbmVWYWx1ZTogKCRsaW5lSGVpZ2h0IC8gJGZvbnRTaXplKTtcclxuICBmb250LXNpemU6ICRweFZhbHVlICsgcHg7XHJcbiAgZm9udC1zaXplOiAkcmVtVmFsdWUgKyByZW07XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lVmFsdWU7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/feedback/feedback.component.ts": function srcAppFeedbackFeedbackComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function () {
      return FeedbackComponent;
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


    var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/helper.service */
    "./src/app/shared/services/helper.service.ts");
    /* harmony import */


    var _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/services/api.service */
    "./src/app/core/services/api.service.ts");
    /* harmony import */


    var _app_core_modules_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/core/modules/loading/loading.service */
    "./src/app/core/modules/loading/loading.service.ts");
    /* harmony import */


    var _global_untilDestroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @global/untilDestroy */
    "../global/untilDestroy/index.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-toastr */
    "../../node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var FeedbackComponent = /*#__PURE__*/function () {
      function FeedbackComponent(formBuilder, api, toastr, loading) {
        _classCallCheck(this, FeedbackComponent);

        this.formBuilder = formBuilder;
        this.api = api;
        this.toastr = toastr;
        this.loading = loading;
      }

      _createClass(FeedbackComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.feedbackForm = this.formBuilder.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
            details: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "save",
        value: function save(data) {
          var _this = this;

          this.loading.show('Sending...');
          data.details = _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"].textToHtml(data.details);
          this.api.create('feedback', data).pipe(Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_6__["untilComponentDestroyed"])(this)).subscribe(function (resp) {
            _this.toastr.success('If necessary we will get back to you as soon as possible.', 'Thanks for your feedback');

            _this.feedbackForm.reset();

            _this.loading.hide();
          }, function (err) {
            _this.toastr.error('Sorry an error occured please try again.', 'Error');

            _this.loading.hide();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return FeedbackComponent;
    }();

    FeedbackComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
      }, {
        type: _app_core_modules_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
      }];
    };

    FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'bx-feedback',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./feedback.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/feedback/feedback.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./feedback.component.scss */
      "./src/app/feedback/feedback.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"], _app_core_modules_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])], FeedbackComponent);
    /***/
  },

  /***/
  "./src/app/feedback/feedback.module.ts": function srcAppFeedbackFeedbackModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackModule", function () {
      return FeedbackModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _app_material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _feedback_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./feedback-routing.module */
    "./src/app/feedback/feedback-routing.module.ts");
    /* harmony import */


    var _feedback_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./feedback.component */
    "./src/app/feedback/feedback.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");

    var FeedbackModule = function FeedbackModule() {
      _classCallCheck(this, FeedbackModule);
    };

    FeedbackModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _feedback_routing_module__WEBPACK_IMPORTED_MODULE_4__["FeedbackRoutingModule"], _app_material_material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"]],
      declarations: [_feedback_component__WEBPACK_IMPORTED_MODULE_5__["FeedbackComponent"]],
      providers: []
    })], FeedbackModule);
    /***/
  },

  /***/
  "./src/app/shared/services/helper.service.ts": function srcAppSharedServicesHelperServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelperService", function () {
      return HelperService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");

    var HelperService = /*#__PURE__*/function () {
      function HelperService() {
        _classCallCheck(this, HelperService);
      }

      _createClass(HelperService, null, [{
        key: "textToHtml",
        value: function textToHtml(text) {
          text = '<p>' + text + '</p>';
          text = text.replace(/\n\n/g, '</p><p>');
          text = text.replace(/\n/g, '<br>');
          return text;
        }
      }]);

      return HelperService;
    }();

    HelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], HelperService);
    /***/
  }
}]);
//# sourceMappingURL=app-feedback-feedback-module-es5.js.map