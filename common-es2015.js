(window["webpackJsonp"] = window["webpackJsonp"] || []).push([ [ "common" ], {
    "./src/app/core/services/jsonld.service.ts": 
    /*!*************************************************!*\
  !*** ./src/app/core/services/jsonld.service.ts ***!
  \*************************************************/
    /*! exports provided: JsonldService */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "JsonldService", (function() {
            return JsonldService;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "../environments/environment.ts");
        let JsonldService = class JsonldService {
            constructor() {
                this.imgUrl = "https://img.boxxerworld.com/";
                this.shop_url = "https://www.boxxerworld.com/";
                this.logo = `${_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].site}/boxxer-client-clone/assets/img/facebook-logo.jpg`;
                this.name = "Boxxerworld";
                this.organization = {
                    "@context": "http://schema.org",
                    "@id": "https://www.boxxerworld.com/#organization",
                    "@type": "Organization",
                    name: this.name,
                    url: "https://www.boxxerworld.com",
                    sameAs: [ "https://twitter.com/boxxerworld", "https://www.facebook.com/Boxxerworld-385182568880369", "https://www.instagram.com/boxxerworld" ],
                    logo: {
                        "@context": "http://schema.org",
                        "@id": "https://www.boxxerworld.com/#logo",
                        "@type": "ImageObject",
                        url: this.logo,
                        height: "630",
                        width: "1200"
                    },
                    image: {
                        "@context": "http://schema.org",
                        "@id": "https://www.boxxerworld.com/#logo",
                        "@type": "ImageObject",
                        url: this.logo,
                        height: "630",
                        width: "1200"
                    }
                };
                this.website = {
                    "@context": "http://schema.org",
                    "@id": "https://www.boxxerworld.com/#website",
                    "@type": "WebSite",
                    url: "https://www.boxxerworld.com",
                    name: this.name,
                    publisher: this.organization
                };
            }
            mainEntity(url, name, datePublished, dateModified, description) {
                return {
                    "@context": "http://schema.org",
                    "@type": "WebPage",
                    "@id": `${url}#webpage`,
                    url: url,
                    name: `${name} | ${this.name}`,
                    datePublished: datePublished,
                    dateModified: dateModified,
                    description: description,
                    isPartOf: this.website
                };
            }
            product(data) {
                let image;
                if (data.image) {
                    image = `${this.imgUrl}${data.image.key}`;
                } else if (data.images && data.images.length) {
                    image = `${this.imgUrl}${data.images[0].key}`;
                } else {
                    image = `${_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].site}/boxxer-client-clone/assets/img/facebook-logo.jpg`;
                }
                this.schema = {
                    "@context": "http://schema.org",
                    "@type": "Product",
                    name: data.title,
                    description: data.seo ? data.seo.description : "",
                    image: image,
                    sku: data.parent_sku,
                    category: data.product_type.title,
                    url: `${this.shop_url}${data.product_type.slug}/${data.slug}`,
                    brand: this.organization,
                    mainEntityOfPage: this.mainEntity(`${this.shop_url}${data.product_type.slug}/${data.slug}`, `${data.title}`, data.createdAt, data.updatedAt, data.seo ? data.seo.description : ""),
                    offers: []
                };
                data.variations.forEach((variation => {
                    const offer = {
                        "@context": "http://schema.org",
                        "@type": "Offer",
                        price: variation.price.toString(),
                        priceCurrency: "GBP",
                        itemCondition: "http://schema.org/NewCondition",
                        availability: "http://schema.org/InStock",
                        url: `${this.shop_url}${data.product_type.slug}/${data.slug}`,
                        name: variation.title,
                        sku: variation.sku,
                        image: variation.image ? `${this.imgUrl}${variation.image.key}` : image
                    };
                    this.schema.offers.push(offer);
                }));
            }
            custom(data) {
                let image;
                if (data.image) {
                    image = `${this.imgUrl}${data.image.key}`;
                } else {
                    image = `${_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].site}/boxxer-client-clone/assets/img/facebook-logo.jpg`;
                }
                this.schema = {
                    "@context": "http://schema.org",
                    "@type": "Product",
                    name: data.title,
                    description: data.seo.description,
                    image: image,
                    sku: data.code,
                    category: data.category.title,
                    url: `${this.shop_url}${data.category.slug}/${data.slug}`,
                    brand: this.organization,
                    mainEntityOfPage: this.mainEntity(`${this.shop_url}${data.category.slug}/${data.slug}`, `${data.title}`, data.createdAt, data.updatedAt, data.seo.description),
                    offers: [ {
                        "@context": "http://schema.org",
                        "@type": "Offer",
                        price: data.price.toString(),
                        priceCurrency: "GBP",
                        itemCondition: "http://schema.org/NewCondition",
                        availability: "http://schema.org/InStock",
                        url: `${this.shop_url}${data.category.slug}/${data.slug}`
                    } ]
                };
            }
        };
        JsonldService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []) ], JsonldService);
    },
    "./src/app/form-error-state.ts": 
    /*!*************************************!*\
  !*** ./src/app/form-error-state.ts ***!
  \*************************************/
    /*! exports provided: MyErrorStateMatcher */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", (function() {
            return MyErrorStateMatcher;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        class MyErrorStateMatcher {
            isErrorState(control, form) {
                const isSubmitted = form && form.submitted;
                return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
            }
        }
    }
} ]);