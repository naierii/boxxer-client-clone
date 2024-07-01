function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-custom-custom-module~app-gallery-gallery-module~app-products-products-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/sidebar-nav/sidebar-nav-item.component.html": function node_modulesRawLoaderDistCjsJsSrcAppSharedModulesSidebarNavSidebarNavItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a routerLinkActive=\"active\" [routerLink]=\"[menu.url]\">{{ menu.name }}</a>\r\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/sidebar-nav/sidebar-nav.component.html": function node_modulesRawLoaderDistCjsJsSrcAppSharedModulesSidebarNavSidebarNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div bxCard>\r\n  <div bxCardContent>\r\n    <div class=\"parent-menu\" *ngFor=\"let menu of menus\">\r\n      <div class=\"header\">\r\n        <h2>{{menu.name}}</h2>\r\n        <div class=\"info\">{{menu.description}}</div>\r\n      </div>\r\n      <ul>\r\n        <li *ngFor=\"let menu of menu.children\" bxSidebarNavItem [menu]=\"menu\"></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>";
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
  },

  /***/
  "./src/app/shared/modules/sidebar-nav/gallery-menu.ts": function srcAppSharedModulesSidebarNavGalleryMenuTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "galleryMenu", function () {
      return galleryMenu;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");

    var galleryMenu = [{
      name: 'Gallery',
      description: 'Get inspired',
      children: [{
        name: 'Boxing Shorts & Trunks',
        url: '/gallery/shorts-trunks'
      }, {
        name: 'Muay Thai Shorts',
        url: '/gallery/thai-shorts'
      }, {
        name: 'Gladiator Shorts',
        url: '/gallery/gladiator-shorts'
      }, {
        name: 'MMA Shorts',
        url: '/gallery/mma-shorts'
      }, {
        name: 'Jackets',
        url: '/gallery/jackets-vests'
      }, {
        name: 'Corner Jackets',
        url: '/gallery/corner-jackets'
      }, {
        name: 'Vests',
        url: '/gallery/vests'
      }, {
        name: 'Robes',
        url: '/gallery/robes'
      }, {
        name: 'Kickboxing Trousers',
        url: '/gallery/kickboxing-trousers'
      }, {
        name: 'Caps',
        url: '/gallery/caps'
      }, {
        name: 'T-shirts',
        url: '/gallery/t-shirts'
      }, {
        name: 'Sports Bra',
        url: '/gallery/sports-bra'
      }, {
        name: 'Gloves',
        url: '/gallery/gloves'
      }, {
        name: 'Pads',
        url: '/gallery/pads'
      }, {
        name: 'Head Guards',
        url: '/gallery/head-guards'
      }, {
        name: 'Groin Guards',
        url: '/gallery/groin-guards'
      }]
    }];
    /***/
  },

  /***/
  "./src/app/shared/modules/sidebar-nav/shop-menu.ts": function srcAppSharedModulesSidebarNavShopMenuTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "shopMenu", function () {
      return shopMenu;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");

    var shopMenu = [{
      name: 'Custom Fightwear',
      description: 'Fully customisable range',
      children: [{
        name: 'Boxing Shorts',
        url: '/custom-fightwear/shorts-trunks'
      }, {
        name: 'Muay Thai Shorts',
        url: '/custom-fightwear/thai-shorts'
      }, {
        name: 'Gladiator Shorts',
        url: '/custom-fightwear/gladiator-shorts'
      }, {
        name: 'MMA Shorts',
        url: '/custom-fightwear/mma-shorts'
      }, {
        name: 'Jackets',
        url: '/custom-fightwear/jackets-vests'
      }, {
        name: 'Corner Jackets',
        url: '/custom-fightwear/corner-jackets'
      }, {
        name: 'Vests',
        url: '/custom-fightwear/vests'
      }, {
        name: 'Robes',
        url: '/custom-fightwear/robes'
      }, {
        name: 'Kickboxing Trousers',
        url: '/custom-fightwear/kickboxing-trousers'
      }, {
        name: 'Caps',
        url: '/custom-fightwear/caps'
      }, {
        name: 'T-shirts',
        url: '/custom-fightwear/t-shirts'
      }, {
        name: 'Sports Bra',
        url: '/custom-fightwear/sports-bra'
      }, {
        name: 'Club / Team Kits',
        url: '/help-and-info/club-team-kits'
      }]
    }, {
      name: 'Custom Equipment',
      description: 'Fully customisable range',
      children: [{
        name: 'Gloves',
        url: '/custom-equipment/gloves'
      }, {
        name: 'Pads',
        url: '/custom-equipment/pads'
      }, {
        name: 'Head Guards',
        url: '/custom-equipment/head-guards'
      }, {
        name: 'Groin Guards',
        url: '/custom-equipment/groin-guards'
      }]
    }, {
      name: 'Ready Made',
      description: 'Pre made designs with options to add names',
      children: [{
        name: 'Boxing Shorts & Trunks',
        url: '/ready-made/shorts-trunks'
      }, {
        name: 'Boxing Vest',
        url: '/ready-made/vests'
      }]
    }, {
      name: 'Club Kits',
      description: 'Customisable club kits',
      children: [{
        name: 'Boxing Shorts & Trunks',
        url: '/club-kits/shorts-trunks'
      }, {
        name: 'Vests',
        url: '/club-kits/vests'
      }, {
        name: 'Robes',
        url: '/club-kits/robes'
      }]
    }];
    /***/
  },

  /***/
  "./src/app/shared/modules/sidebar-nav/sidebar-nav.component.scss": function srcAppSharedModulesSidebarNavSidebarNavComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".parent-menu {\n  margin-bottom: 1.5rem;\n}\n.parent-menu .header {\n  padding-bottom: 0.5rem;\n  margin: 0;\n  border-bottom: 1px solid #f5f5f5;\n}\n.parent-menu .header h2 {\n  font-size: 24px;\n  font-size: 1.5rem;\n  line-height: 1;\n  margin: 0;\n}\n.parent-menu .header .info {\n  color: #666;\n  font-size: 12px;\n  font-size: 0.75rem;\n  line-height: 1;\n  text-transform: uppercase;\n  font-family: \"Oswald\", sans-serif;\n  margin-top: 0.2rem;\n}\n.parent-menu ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.parent-menu ul li {\n  border-bottom: 1px solid #f5f5f5;\n}\n.parent-menu ul li a {\n  padding: 0.5rem 1rem;\n  display: block;\n  margin: 0 -1rem;\n  font-family: \"Oswald\", sans-serif;\n  color: #666;\n}\n.parent-menu ul li a:hover {\n  background-color: #f5f5f5;\n}\n.parent-menu ul li:last-child {\n  border: none;\n}\n.parent-menu:last-child {\n  margin: 0;\n}\n.parent-menu:last-child ul li:last-child {\n  margin-bottom: -0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3NpZGViYXItbmF2L0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXGFwcFxcc2hhcmVkXFxtb2R1bGVzXFxzaWRlYmFyLW5hdlxcc2lkZWJhci1uYXYuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9zaGFyZWQvbW9kdWxlcy9zaWRlYmFyLW5hdi9zaWRlYmFyLW5hdi5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3NpZGViYXItbmF2L0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXHNjc3NcXF9taXhpbnMuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3NpZGViYXItbmF2L0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLHFCQUFBO0FDRkY7QURHRTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDREo7QURFSTtFRTZCRixlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUhZO0VGMUJSLFNBQUE7QUNFTjtBREFJO0VBQ0UsV0dUSztFRGlDVCxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUhZO0VGckJSLHlCQUFBO0VBQ0EsaUNHUFE7RUhRUixrQkFBQTtBQ0lOO0FEREU7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDR0o7QURGSTtFQVdFLGdDQUFBO0FDTk47QURKTTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQ0dwQk07RUhxQk4sV0cxQkc7QUZnQ1g7QURKTTtFQUNFLHlCR2hDUTtBRnNDaEI7QURGSTtFQUNFLFlBQUE7QUNJTjtBRENBO0VBQ0UsU0FBQTtBQ0VGO0FEQUk7RUFDRSxzQkFBQTtBQ0VOIiwiZmlsZSI6InByb2plY3RzL2NsaWVudC9zcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3NpZGViYXItbmF2L3NpZGViYXItbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcclxuQGltcG9ydCAnbWl4aW5zJztcclxuXHJcbi5wYXJlbnQtbWVudSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gIC5oZWFkZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkdmVyeWxpZ2h0Z3JleTtcclxuICAgIGgyIHtcclxuICAgICAgQGluY2x1ZGUgZm9udC1zaXplKDI0LDI0KTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLmluZm8ge1xyXG4gICAgICBjb2xvcjogJGRhcmtncmV5O1xyXG4gICAgICBAaW5jbHVkZSBmb250LXNpemUoMTIsMTIpO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LWZhbWlseTogJGRpc3BsYXlGb250O1xyXG4gICAgICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGkge1xyXG4gICAgICBhIHtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IDAgLTFyZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRkaXNwbGF5Rm9udDtcclxuICAgICAgICBjb2xvcjogJGRhcmtncmV5O1xyXG4gICAgICB9XHJcbiAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR2ZXJ5bGlnaHRncmV5O1xyXG4gICAgICB9XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkdmVyeWxpZ2h0Z3JleTtcclxuICAgIH1cclxuICAgIGxpOmxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucGFyZW50LW1lbnU6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHVsIHtcclxuICAgIGxpOmxhc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAtMC41cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIucGFyZW50LW1lbnUge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4ucGFyZW50LW1lbnUgLmhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNWY1ZjU7XG59XG4ucGFyZW50LW1lbnUgLmhlYWRlciBoMiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW46IDA7XG59XG4ucGFyZW50LW1lbnUgLmhlYWRlciAuaW5mbyB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiAwLjJyZW07XG59XG4ucGFyZW50LW1lbnUgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4ucGFyZW50LW1lbnUgdWwgbGkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y1ZjVmNTtcbn1cbi5wYXJlbnQtbWVudSB1bCBsaSBhIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgLTFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzY2Njtcbn1cbi5wYXJlbnQtbWVudSB1bCBsaSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cbi5wYXJlbnQtbWVudSB1bCBsaTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ucGFyZW50LW1lbnU6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbjogMDtcbn1cbi5wYXJlbnQtbWVudTpsYXN0LWNoaWxkIHVsIGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAtMC41cmVtO1xufSIsIkBtaXhpbiBmbHVpZC10eXBlKCRwcm9wZXJ0aWVzLCAkbWluLXZ3LCAkbWF4LXZ3LCAkbWluLXZhbHVlLCAkbWF4LXZhbHVlKSB7XHJcbiAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcclxuICAgICN7JHByb3BlcnR5fTogJG1pbi12YWx1ZTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4tdncpIHtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgICN7JHByb3BlcnR5fTogY2FsYyhcclxuICAgICAgICAjeyRtaW4tdmFsdWV9ICsgI3tzdHJpcC11bml0KCRtYXgtdmFsdWUgLSAkbWluLXZhbHVlKX0gKlxyXG4gICAgICAgICAgKFxyXG4gICAgICAgICAgICAxMDB2dyAtICN7JG1pbi12d31cclxuICAgICAgICAgICkgLyAje3N0cmlwLXVuaXQoJG1heC12dyAtICRtaW4tdncpfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1heC12dykge1xyXG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcclxuICAgICAgI3skcHJvcGVydHl9OiAkbWF4LXZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGZ1bmN0aW9uIHN0cmlwLXVuaXQoJHZhbHVlKSB7XHJcbiAgQHJldHVybiAkdmFsdWUgLyAoJHZhbHVlICogMCArIDEpO1xyXG59XHJcblxyXG5AbWl4aW4gd3JhcHBlcigkd2lkdGg6MTQ0MHB4KSB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6ICR3aWR0aDtcclxuICBtYXJnaW46IDAgYXV0byAxLjVyZW07XHJcbn1cclxuXHJcbkBtaXhpbiBmb250LXNpemUoJGZvbnRTaXplLCAkbGluZUhlaWdodDogMSkge1xyXG4gICRyZW1WYWx1ZTogKCRmb250U2l6ZSAvIDE2KTtcclxuICAkcHhWYWx1ZTogJGZvbnRTaXplO1xyXG4gICRsaW5lVmFsdWU6ICgkbGluZUhlaWdodCAvICRmb250U2l6ZSk7XHJcbiAgZm9udC1zaXplOiAkcHhWYWx1ZSArIHB4O1xyXG4gIGZvbnQtc2l6ZTogJHJlbVZhbHVlICsgcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZVZhbHVlO1xyXG59XHJcbiIsIi8vQ29sb3JzXHJcbiRibGFjazogIzM2MzYzNjtcclxuJHZlcnlsaWdodGdyZXk6ICNmNWY1ZjU7XHJcbiRsaWdodGdyZXk6ICNlZGVkZWQ7XHJcbiRtaWRncmV5OiAjOTk5O1xyXG4kZGFya2dyZXk6ICM2NjY7XHJcbiRncmVlbjogIzYzYjIwYjtcclxuJHJlZDogI2NlMDUwNTtcclxuLy9Gb250c1xyXG4kZGVmYXVsdEZvbnQ6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4kZGlzcGxheUZvbnQ6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/modules/sidebar-nav/sidebar-nav.component.ts": function srcAppSharedModulesSidebarNavSidebarNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarNavComponent", function () {
      return SidebarNavComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarNavItemComponent", function () {
      return SidebarNavItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _gallery_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./gallery-menu */
    "./src/app/shared/modules/sidebar-nav/gallery-menu.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shop_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shop-menu */
    "./src/app/shared/modules/sidebar-nav/shop-menu.ts");

    var SidebarNavComponent = /*#__PURE__*/function () {
      function SidebarNavComponent() {
        _classCallCheck(this, SidebarNavComponent);
      }

      _createClass(SidebarNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          switch (this.type) {
            case 'shop':
              this.getShopMenu();
              break;

            case 'gallery':
              this.getGalleryMenu();
              break;
          }
        }
      }, {
        key: "getShopMenu",
        value: function getShopMenu() {
          this.menus = _shop_menu__WEBPACK_IMPORTED_MODULE_3__["shopMenu"];
        }
      }, {
        key: "getGalleryMenu",
        value: function getGalleryMenu() {
          this.menus = _gallery_menu__WEBPACK_IMPORTED_MODULE_1__["galleryMenu"];
        }
      }]);

      return SidebarNavComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], SidebarNavComponent.prototype, "type", void 0);
    SidebarNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'bx-sidebar-nav, [bxSidebarNav]',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar-nav.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/sidebar-nav/sidebar-nav.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar-nav.component.scss */
      "./src/app/shared/modules/sidebar-nav/sidebar-nav.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SidebarNavComponent);

    var SidebarNavItemComponent = function SidebarNavItemComponent() {
      _classCallCheck(this, SidebarNavItemComponent);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SidebarNavItemComponent.prototype, "menu", void 0);
    SidebarNavItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'bx-sidebar-nav-item, [bxSidebarNavItem]',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar-nav-item.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/sidebar-nav/sidebar-nav-item.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SidebarNavItemComponent);
    /***/
  },

  /***/
  "./src/app/shared/modules/sidebar-nav/sidebar-nav.module.ts": function srcAppSharedModulesSidebarNavSidebarNavModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarNavModule", function () {
      return SidebarNavModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_shared_modules_card_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/shared/modules/card/card.module */
    "./src/app/shared/modules/card/card.module.ts");
    /* harmony import */


    var _sidebar_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sidebar-nav.component */
    "./src/app/shared/modules/sidebar-nav/sidebar-nav.component.ts");

    var SidebarNavModule = function SidebarNavModule() {
      _classCallCheck(this, SidebarNavModule);
    };

    SidebarNavModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _app_shared_modules_card_card_module__WEBPACK_IMPORTED_MODULE_4__["CardModule"]],
      exports: [_sidebar_nav_component__WEBPACK_IMPORTED_MODULE_5__["SidebarNavComponent"], _sidebar_nav_component__WEBPACK_IMPORTED_MODULE_5__["SidebarNavItemComponent"]],
      declarations: [_sidebar_nav_component__WEBPACK_IMPORTED_MODULE_5__["SidebarNavComponent"], _sidebar_nav_component__WEBPACK_IMPORTED_MODULE_5__["SidebarNavItemComponent"]]
    })], SidebarNavModule);
    /***/
  }
}]);
//# sourceMappingURL=default~app-custom-custom-module~app-gallery-gallery-module~app-products-products-module-es5.js.map