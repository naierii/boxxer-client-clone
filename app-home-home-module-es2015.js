(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-home-home-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"big-box\">\r\n  <a [routerLink]=\"['/gift-voucher', 'purchase']\" class=\"box double\">\r\n    <img\r\n      [bxLazysizes]=\"'img/ANTHONY-CROLLA.jpg'\"\r\n      alt=\"Boxxerworld\"\r\n      [crop_ratio]=\"2.1111111111\"\r\n    />\r\n  </a>\r\n</section>\r\n<section class=\"small-box row1\" #videos>\r\n  <ng-container *bxLazyLoad=\"videos\">\r\n    <div class=\"box\">\r\n      <bx-video\r\n        [showControls]=\"false\"\r\n        [loop]=\"true\"\r\n        [options]=\"videoOptions('video/red-highshine-bx')\"\r\n        name=\"red-highshine-bx\"\r\n      ></bx-video>\r\n    </div>\r\n    <div class=\"box\">\r\n      <bx-video\r\n        [showControls]=\"false\"\r\n        [loop]=\"true\"\r\n        [options]=\"videoOptions('video/muay-thai')\"\r\n        name=\"muay-thai\"\r\n      >\r\n      </bx-video>\r\n    </div>\r\n    <div class=\"box\">\r\n      <bx-video\r\n        [showControls]=\"false\"\r\n        [loop]=\"true\"\r\n        [options]=\"videoOptions('video/carlos-jkt')\"\r\n        name=\"carlos-jkt\"\r\n      >\r\n      </bx-video>\r\n    </div>\r\n    <div class=\"box\">\r\n      <bx-video\r\n        [showControls]=\"false\"\r\n        [loop]=\"true\"\r\n        [options]=\"videoOptions('video/jackets-shorts')\"\r\n        name=\"jackets-shorts\"\r\n      ></bx-video>\r\n    </div>\r\n    <div class=\"box\">\r\n      <bx-video\r\n        [showControls]=\"false\"\r\n        [loop]=\"true\"\r\n        [options]=\"videoOptions('video/maroon-robe')\"\r\n        name=\"maroon-robe\"\r\n      >\r\n      </bx-video>\r\n    </div>\r\n    <div class=\"box\">\r\n      <bx-video\r\n        [showControls]=\"false\"\r\n        [loop]=\"true\"\r\n        [options]=\"videoOptions('video/vest')\"\r\n        name=\"vest\"\r\n      ></bx-video>\r\n    </div>\r\n    <a [routerLink]=\"['/help-and-info', 'club-team-kits']\" class=\"box double\">\r\n      <img\r\n        [bxLazysizes]=\"'img/bulk-orders.jpg'\"\r\n        alt=\"Boxxerworld Club / Team Kits\"\r\n        [crop_ratio]=\"2\"\r\n      />\r\n    </a>\r\n  </ng-container>\r\n</section>\r\n<section *ngIf=\"home$ | async as home\">\r\n  <div class=\"home-info\" [innerHTML]=\"home.description\"></div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/core/services/link.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/link.service.ts ***!
  \***********************************************/
/*! exports provided: LinkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkService", function() { return LinkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");



let LinkService = class LinkService {
    constructor(rendererFactory, document) {
        this.rendererFactory = rendererFactory;
        this.document = document;
    }
    /**
     * Inject the State into the bottom of the <head>
     */
    addTag(tag, forceCreation) {
        try {
            const renderer = this.rendererFactory.createRenderer(this.document, {
                id: '-1',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                styles: [],
                data: {}
            });
            const link = renderer.createElement('link');
            const head = this.document.head;
            const selector = this._parseSelector(tag);
            if (head === null) {
                throw new Error('<head> not found within DOCUMENT.');
            }
            Object.keys(tag).forEach((prop) => {
                return renderer.setAttribute(link, prop, tag[prop]);
            });
            // [TODO]: get them to update the existing one (if it exists) ?
            renderer.appendChild(head, link);
        }
        catch (e) {
            console.error('Error within linkService : ', e);
        }
    }
    removeTag(attrSelector) {
        if (attrSelector) {
            try {
                const renderer = this.rendererFactory.createRenderer(this.document, {
                    id: '-1',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    styles: [],
                    data: {}
                });
                const head = this.document.head;
                if (head === null) {
                    throw new Error('<head> not found within DOCUMENT.');
                }
                const linkTags = this.document.querySelectorAll('link[' + attrSelector + ']');
                for (const link of linkTags) {
                    renderer.removeChild(head, link);
                }
            }
            catch (e) {
                console.log('Error while removing tag ' + e.message);
            }
        }
    }
    _parseSelector(tag) {
        // Possibly re-work this
        const attr = tag.rel ? 'rel' : 'hreflang';
        return `${attr}="${tag[attr]}"`;
    }
};
LinkService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
LinkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"], Object])
], LinkService);



/***/ }),

/***/ "./src/app/core/services/seo.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/seo.service.ts ***!
  \**********************************************/
/*! exports provided: SeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoService", function() { return SeoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_shared_main_services_platform_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared-main/services/platform.service */ "./src/app/shared-main/services/platform.service.ts");
/* harmony import */ var _link_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link.service */ "./src/app/core/services/link.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @env/environment */ "../environments/environment.ts");







let SeoService = class SeoService {
    constructor(title, meta, location, link, ps) {
        this.title = title;
        this.meta = meta;
        this.location = location;
        this.link = link;
        this.ps = ps;
        this.defaultEndPageTitle = 'Boxxerworld';
        this.endPageTitle = '';
    }
    setMetaAndLinks(item_title, seo, section, image, type, remove_canonical) {
        const url = `${_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].site}${this.location.path()}`;
        let social_image = `${_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].site}/assets/img/facebook-logo.jpg`;
        if (image) {
            social_image = `${_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].image_cdn}/${image.key}?crop=smart&width=1200&height=630`;
        }
        this.endPageTitle = section
            ? `${section} | ${this.defaultEndPageTitle}`
            : `${this.defaultEndPageTitle}`;
        const title = seo && seo.title
            ? `${seo.title} | ${this.endPageTitle}`
            : `${item_title} | ${this.endPageTitle}`;
        this.title.setTitle(title);
        this.meta.updateTag({
            name: 'description',
            content: seo ? seo.description : '',
        });
        // Facebook tags
        this.meta.updateTag({ property: 'fb:pages', content: '253804241349130' });
        this.meta.updateTag({ property: 'og:title', content: title });
        this.meta.updateTag({
            property: 'og:description',
            content: seo ? seo.description : '',
        });
        this.meta.updateTag({
            property: 'og:url',
            content: url,
        });
        this.meta.updateTag({
            property: 'og:image',
            content: social_image,
        });
        this.meta.updateTag({
            property: 'og:image:width',
            content: '1200',
        });
        this.meta.updateTag({
            property: 'og:image:height',
            content: '630',
        });
        this.meta.updateTag({
            property: 'og:type',
            content: type,
        });
        // Twitter
        this.meta.updateTag({
            name: 'twitter:card',
            content: 'summary_large_image',
        });
        this.meta.updateTag({
            name: 'twitter:site',
            content: '@boxxerworld',
        });
        this.meta.updateTag({ name: 'twitter:title', content: title });
        this.meta.updateTag({
            name: 'twitter:description',
            content: seo ? seo.description : '',
        });
        this.meta.updateTag({
            name: 'twitter:image',
            content: social_image,
        });
        // Canonical
        this.clearCanonical();
        if (seo && seo.canonical && this.ps.isServer && !remove_canonical) {
            this.link.addTag({
                href: `${_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].site}/${seo.canonical}`,
                rel: 'canonical',
            });
        }
        else if (this.ps.isServer && !remove_canonical) {
            this.link.addTag({
                href: url,
                rel: 'canonical',
            });
        }
    }
    clearCanonical() {
        if (this.ps.isServer) {
            this.link.removeTag('rel=canonical');
        }
    }
    ngOnDestroy() {
        this.clearCanonical();
    }
};
SeoService.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _link_service__WEBPACK_IMPORTED_MODULE_2__["LinkService"] },
    { type: _app_shared_main_services_platform_service__WEBPACK_IMPORTED_MODULE_1__["PlatformService"] }
];
SeoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        _link_service__WEBPACK_IMPORTED_MODULE_2__["LinkService"],
        _app_shared_main_services_platform_service__WEBPACK_IMPORTED_MODULE_1__["PlatformService"]])
], SeoService);



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        providers: []
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".big-box {\n  margin-bottom: 5px;\n}\n\n.small-box {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n\n.small-box .box {\n  -webkit-flex: 0 0 100%;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  max-width: calc(100% - 10px);\n  margin: 0 5px 5px 5px;\n  display: block;\n}\n\n.small-box .box.double {\n  -webkit-flex: 0 0 100%;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  max-width: calc(100% - 10px);\n}\n\n.small-box .box.double ::ng-deep img {\n  height: auto;\n}\n\n@media (min-width: 576px) {\n  .small-box .box {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: calc(50% - 10px);\n  }\n}\n\n@media (min-width: 992px) {\n  .small-box .box {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: calc(25% - 10px);\n  }\n  .small-box .box.double {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: calc(50% - 10px);\n  }\n}\n\n.home-info {\n  max-width: 1200px;\n  padding: 3rem 15px;\n  margin: 0 auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2hvbWUvQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxrQkFBQTtBQ0pGOztBRE1BO0VBQ0UscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx1QkFBQTtNQUFBLG1CQUFBO1VBQUEsZUFBQTtBQ0hGOztBRElFO0VBQ0Usc0JBQUE7TUFBQSxrQkFBQTtVQUFBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ0ZKOztBREdJO0VBQ0Usc0JBQUE7TUFBQSxrQkFBQTtVQUFBLGNBQUE7RUFDQSw0QkFBQTtBQ0ROOztBREVNO0VBQ0UsWUFBQTtBQ0FSOztBQ3dDSTtFRm5DQTtJQUNFLHFCQUFBO1FBQUEsaUJBQUE7WUFBQSxhQUFBO0lBQ0EsMkJBQUE7RUNGSjtBQUNGOztBQ2tDSTtFRjdCQTtJQUNFLHFCQUFBO1FBQUEsaUJBQUE7WUFBQSxhQUFBO0lBQ0EsMkJBQUE7RUNGSjtFREdJO0lBQ0UscUJBQUE7UUFBQSxpQkFBQTtZQUFBLGFBQUE7SUFDQSwyQkFBQTtFQ0ROO0FBQ0Y7O0FETUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDSEYiLCJmaWxlIjoicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucyc7XHJcbkBpbXBvcnQgJ25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICdub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cyc7XHJcbkBpbXBvcnQgJ25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2dyaWQnO1xyXG5cclxuLmJpZy1ib3gge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4uc21hbGwtYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICAuYm94IHtcclxuICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcclxuICAgIG1hcmdpbjogMCA1cHggNXB4IDVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgJi5kb3VibGUge1xyXG4gICAgICBmbGV4OiAwIDAgMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcclxuICAgICAgOjpuZy1kZWVwIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoc20pIHtcclxuICAgIC5ib3gge1xyXG4gICAgICBmbGV4OiAwIDAgNTAlO1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcclxuICAgIC5ib3gge1xyXG4gICAgICBmbGV4OiAwIDAgMjUlO1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMjUlIC0gMTBweCk7XHJcbiAgICAgICYuZG91YmxlIHtcclxuICAgICAgICBmbGV4OiAwIDAgNTAlO1xyXG4gICAgICAgIG1heC13aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmhvbWUtaW5mbyB7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgcGFkZGluZzogM3JlbSAxNXB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iLCIuYmlnLWJveCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnNtYWxsLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5zbWFsbC1ib3ggLmJveCB7XG4gIGZsZXg6IDAgMCAxMDAlO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICBtYXJnaW46IDAgNXB4IDVweCA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnNtYWxsLWJveCAuYm94LmRvdWJsZSB7XG4gIGZsZXg6IDAgMCAxMDAlO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xufVxuLnNtYWxsLWJveCAuYm94LmRvdWJsZSA6Om5nLWRlZXAgaW1nIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5zbWFsbC1ib3ggLmJveCB7XG4gICAgZmxleDogMCAwIDUwJTtcbiAgICBtYXgtd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuc21hbGwtYm94IC5ib3gge1xuICAgIGZsZXg6IDAgMCAyNSU7XG4gICAgbWF4LXdpZHRoOiBjYWxjKDI1JSAtIDEwcHgpO1xuICB9XG4gIC5zbWFsbC1ib3ggLmJveC5kb3VibGUge1xuICAgIGZsZXg6IDAgMCA1MCU7XG4gICAgbWF4LXdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xuICB9XG59XG5cbi5ob21lLWluZm8ge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgcGFkZGluZzogM3JlbSAxNXB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_services_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../core/services/seo.service */ "./src/app/core/services/seo.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let HomeComponent = class HomeComponent {
    constructor(api, seo) {
        this.api = api;
        this.seo = seo;
    }
    ngOnInit() {
        // this.home$ = this.api.get('page', 'home').pipe(
        //   untilComponentDestroyed(this),
        //   tap((resp: Page) => {
        //     this.seo.setMetaAndLinks(resp.title, resp.seo);
        //   })
        // );
    }
    videoOptions(key) {
        return {
            // tslint:disable-next-line:max-line-length
            mp4: `https://boxxer-images.ams3.cdn.digitaloceanspaces.com/${key}.mp4`,
        };
    }
    ngOnDestroy() { }
};
HomeComponent.ctorParameters = () => [
    { type: _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _core_services_seo_service__WEBPACK_IMPORTED_MODULE_1__["SeoService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'bx-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _core_services_seo_service__WEBPACK_IMPORTED_MODULE_1__["SeoService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");





let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]],
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
    })
], HomeModule);



/***/ })

}]);
//# sourceMappingURL=app-home-home-module-es2015.js.map