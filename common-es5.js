function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/core/services/jsonld.service.ts": function srcAppCoreServicesJsonldServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonldService", function () {
      return JsonldService;
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


    var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @env/environment */
    "../environments/environment.ts");

    var JsonldService = /*#__PURE__*/function () {
      function JsonldService() {
        _classCallCheck(this, JsonldService);

        this.imgUrl = 'https://img.boxxerworld.com/';
        this.shop_url = 'https://www.boxxerworld.com/';
        this.logo = "".concat(_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].site, "/assets/img/facebook-logo.jpg");
        this.name = 'Boxxerworld';
        this.organization = {
          '@context': 'http://schema.org',
          '@id': 'https://www.boxxerworld.com/#organization',
          '@type': 'Organization',
          name: this.name,
          url: 'https://www.boxxerworld.com',
          sameAs: ['https://twitter.com/boxxerworld', 'https://www.facebook.com/Boxxerworld-385182568880369', 'https://www.instagram.com/boxxerworld'],
          logo: {
            '@context': 'http://schema.org',
            '@id': 'https://www.boxxerworld.com/#logo',
            '@type': 'ImageObject',
            url: this.logo,
            height: '630',
            width: '1200'
          },
          image: {
            '@context': 'http://schema.org',
            '@id': 'https://www.boxxerworld.com/#logo',
            '@type': 'ImageObject',
            url: this.logo,
            height: '630',
            width: '1200'
          }
        };
        this.website = {
          '@context': 'http://schema.org',
          '@id': 'https://www.boxxerworld.com/#website',
          '@type': 'WebSite',
          url: 'https://www.boxxerworld.com',
          name: this.name,
          publisher: this.organization
        };
      }

      _createClass(JsonldService, [{
        key: "mainEntity",
        value: function mainEntity(url, name, datePublished, dateModified, description) {
          return {
            '@context': 'http://schema.org',
            '@type': 'WebPage',
            '@id': "".concat(url, "#webpage"),
            url: url,
            name: "".concat(name, " | ").concat(this.name),
            datePublished: datePublished,
            dateModified: dateModified,
            description: description,
            isPartOf: this.website
          };
        }
      }, {
        key: "product",
        value: function product(data) {
          var _this = this;

          var image;

          if (data.image) {
            image = "".concat(this.imgUrl).concat(data.image.key);
          } else if (data.images && data.images.length) {
            image = "".concat(this.imgUrl).concat(data.images[0].key);
          } else {
            image = "".concat(_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].site, "/assets/img/facebook-logo.jpg");
          }

          this.schema = {
            '@context': 'http://schema.org',
            '@type': 'Product',
            name: data.title,
            description: data.seo ? data.seo.description : '',
            image: image,
            sku: data.parent_sku,
            category: data.product_type.title,
            url: "".concat(this.shop_url).concat(data.product_type.slug, "/").concat(data.slug),
            brand: this.organization,
            mainEntityOfPage: this.mainEntity("".concat(this.shop_url).concat(data.product_type.slug, "/").concat(data.slug), "".concat(data.title), data.createdAt, data.updatedAt, data.seo ? data.seo.description : ''),
            offers: []
          };
          data.variations.forEach(function (variation) {
            var offer = {
              '@context': 'http://schema.org',
              '@type': 'Offer',
              price: variation.price.toString(),
              priceCurrency: 'GBP',
              itemCondition: 'http://schema.org/NewCondition',
              availability: 'http://schema.org/InStock',
              url: "".concat(_this.shop_url).concat(data.product_type.slug, "/").concat(data.slug),
              name: variation.title,
              sku: variation.sku,
              image: variation.image ? "".concat(_this.imgUrl).concat(variation.image.key) : image
            };

            _this.schema.offers.push(offer);
          });
        }
      }, {
        key: "custom",
        value: function custom(data) {
          var image;

          if (data.image) {
            image = "".concat(this.imgUrl).concat(data.image.key);
          } else {
            image = "".concat(_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].site, "/assets/img/facebook-logo.jpg");
          }

          this.schema = {
            '@context': 'http://schema.org',
            '@type': 'Product',
            name: data.title,
            description: data.seo.description,
            image: image,
            sku: data.code,
            category: data.category.title,
            url: "".concat(this.shop_url).concat(data.category.slug, "/").concat(data.slug),
            brand: this.organization,
            mainEntityOfPage: this.mainEntity("".concat(this.shop_url).concat(data.category.slug, "/").concat(data.slug), "".concat(data.title), data.createdAt, data.updatedAt, data.seo.description),
            offers: [{
              '@context': 'http://schema.org',
              '@type': 'Offer',
              price: data.price.toString(),
              priceCurrency: 'GBP',
              itemCondition: 'http://schema.org/NewCondition',
              availability: 'http://schema.org/InStock',
              url: "".concat(this.shop_url).concat(data.category.slug, "/").concat(data.slug)
            }]
          };
        }
      }]);

      return JsonldService;
    }();

    JsonldService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], JsonldService);
    /***/
  },

  /***/
  "./src/app/form-error-state.ts": function srcAppFormErrorStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function () {
      return MyErrorStateMatcher;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
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
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map