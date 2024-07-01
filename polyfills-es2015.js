(window["webpackJsonp"] = window["webpackJsonp"] || []).push([ [ "polyfills" ], {
    "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/jit-polyfills.js": 
    /*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/jit-polyfills.js ***!
  \**********************************************************************************************************************************************************/
    /*! no exports provided */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var core_js_proposals_reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/proposals/reflect-metadata */ "../../node_modules/core-js/proposals/reflect-metadata.js");
        var core_js_proposals_reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(core_js_proposals_reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
        /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */    },
    "../../node_modules/classlist.js/classList.js": 
    /*!********************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/classlist.js/classList.js ***!
  \********************************************************************************************************/
    /*! no static exports found */ function(module, exports) {
        /*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
        if ("document" in self) {
            if (!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) {
                (function(view) {
                    "use strict";
                    if (!("Element" in view)) return;
                    var classListProp = "classList", protoProp = "prototype", elemCtrProto = view.Element[protoProp], objCtr = Object, strTrim = String[protoProp].trim || function() {
                        return this.replace(/^\s+|\s+$/g, "");
                    }, arrIndexOf = Array[protoProp].indexOf || function(item) {
                        var i = 0, len = this.length;
                        for (;i < len; i++) {
                            if (i in this && this[i] === item) {
                                return i;
                            }
                        }
                        return -1;
                    }, DOMEx = function(type, message) {
                        this.name = type;
                        this.code = DOMException[type];
                        this.message = message;
                    }, checkTokenAndGetIndex = function(classList, token) {
                        if (token === "") {
                            throw new DOMEx("SYNTAX_ERR", "An invalid or illegal string was specified");
                        }
                        if (/\s/.test(token)) {
                            throw new DOMEx("INVALID_CHARACTER_ERR", "String contains an invalid character");
                        }
                        return arrIndexOf.call(classList, token);
                    }, ClassList = function(elem) {
                        var trimmedClasses = strTrim.call(elem.getAttribute("class") || ""), classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [], i = 0, len = classes.length;
                        for (;i < len; i++) {
                            this.push(classes[i]);
                        }
                        this._updateClassName = function() {
                            elem.setAttribute("class", this.toString());
                        };
                    }, classListProto = ClassList[protoProp] = [], classListGetter = function() {
                        return new ClassList(this);
                    };
                    DOMEx[protoProp] = Error[protoProp];
                    classListProto.item = function(i) {
                        return this[i] || null;
                    };
                    classListProto.contains = function(token) {
                        token += "";
                        return checkTokenAndGetIndex(this, token) !== -1;
                    };
                    classListProto.add = function() {
                        var tokens = arguments, i = 0, l = tokens.length, token, updated = false;
                        do {
                            token = tokens[i] + "";
                            if (checkTokenAndGetIndex(this, token) === -1) {
                                this.push(token);
                                updated = true;
                            }
                        } while (++i < l);
                        if (updated) {
                            this._updateClassName();
                        }
                    };
                    classListProto.remove = function() {
                        var tokens = arguments, i = 0, l = tokens.length, token, updated = false, index;
                        do {
                            token = tokens[i] + "";
                            index = checkTokenAndGetIndex(this, token);
                            while (index !== -1) {
                                this.splice(index, 1);
                                updated = true;
                                index = checkTokenAndGetIndex(this, token);
                            }
                        } while (++i < l);
                        if (updated) {
                            this._updateClassName();
                        }
                    };
                    classListProto.toggle = function(token, force) {
                        token += "";
                        var result = this.contains(token), method = result ? force !== true && "remove" : force !== false && "add";
                        if (method) {
                            this[method](token);
                        }
                        if (force === true || force === false) {
                            return force;
                        } else {
                            return !result;
                        }
                    };
                    classListProto.toString = function() {
                        return this.join(" ");
                    };
                    if (objCtr.defineProperty) {
                        var classListPropDesc = {
                            get: classListGetter,
                            enumerable: true,
                            configurable: true
                        };
                        try {
                            objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
                        } catch (ex) {
                            if (ex.number === -2146823252) {
                                classListPropDesc.enumerable = false;
                                objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
                            }
                        }
                    } else if (objCtr[protoProp].__defineGetter__) {
                        elemCtrProto.__defineGetter__(classListProp, classListGetter);
                    }
                })(self);
            } else {
                (function() {
                    "use strict";
                    var testElement = document.createElement("_");
                    testElement.classList.add("c1", "c2");
                    if (!testElement.classList.contains("c2")) {
                        var createMethod = function(method) {
                            var original = DOMTokenList.prototype[method];
                            DOMTokenList.prototype[method] = function(token) {
                                var i, len = arguments.length;
                                for (i = 0; i < len; i++) {
                                    token = arguments[i];
                                    original.call(this, token);
                                }
                            };
                        };
                        createMethod("add");
                        createMethod("remove");
                    }
                    testElement.classList.toggle("c3", false);
                    if (testElement.classList.contains("c3")) {
                        var _toggle = DOMTokenList.prototype.toggle;
                        DOMTokenList.prototype.toggle = function(token, force) {
                            if (1 in arguments && !this.contains(token) === !force) {
                                return force;
                            } else {
                                return _toggle.call(this, token);
                            }
                        };
                    }
                    testElement = null;
                })();
            }
        }
    },
    "../../node_modules/core-js/es/array/index.js": 
    /*!********************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/es/array/index.js ***!
  \********************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        __webpack_require__(/*! ../../modules/es.string.iterator */ "../../node_modules/core-js/modules/es.string.iterator.js");
        __webpack_require__(/*! ../../modules/es.array.from */ "../../node_modules/core-js/modules/es.array.from.js");
        __webpack_require__(/*! ../../modules/es.array.is-array */ "../../node_modules/core-js/modules/es.array.is-array.js");
        __webpack_require__(/*! ../../modules/es.array.of */ "../../node_modules/core-js/modules/es.array.of.js");
        __webpack_require__(/*! ../../modules/es.array.concat */ "../../node_modules/core-js/modules/es.array.concat.js");
        __webpack_require__(/*! ../../modules/es.array.copy-within */ "../../node_modules/core-js/modules/es.array.copy-within.js");
        __webpack_require__(/*! ../../modules/es.array.every */ "../../node_modules/core-js/modules/es.array.every.js");
        __webpack_require__(/*! ../../modules/es.array.fill */ "../../node_modules/core-js/modules/es.array.fill.js");
        __webpack_require__(/*! ../../modules/es.array.filter */ "../../node_modules/core-js/modules/es.array.filter.js");
        __webpack_require__(/*! ../../modules/es.array.find */ "../../node_modules/core-js/modules/es.array.find.js");
        __webpack_require__(/*! ../../modules/es.array.find-index */ "../../node_modules/core-js/modules/es.array.find-index.js");
        __webpack_require__(/*! ../../modules/es.array.flat */ "../../node_modules/core-js/modules/es.array.flat.js");
        __webpack_require__(/*! ../../modules/es.array.flat-map */ "../../node_modules/core-js/modules/es.array.flat-map.js");
        __webpack_require__(/*! ../../modules/es.array.for-each */ "../../node_modules/core-js/modules/es.array.for-each.js");
        __webpack_require__(/*! ../../modules/es.array.includes */ "../../node_modules/core-js/modules/es.array.includes.js");
        __webpack_require__(/*! ../../modules/es.array.index-of */ "../../node_modules/core-js/modules/es.array.index-of.js");
        __webpack_require__(/*! ../../modules/es.array.iterator */ "../../node_modules/core-js/modules/es.array.iterator.js");
        __webpack_require__(/*! ../../modules/es.array.join */ "../../node_modules/core-js/modules/es.array.join.js");
        __webpack_require__(/*! ../../modules/es.array.last-index-of */ "../../node_modules/core-js/modules/es.array.last-index-of.js");
        __webpack_require__(/*! ../../modules/es.array.map */ "../../node_modules/core-js/modules/es.array.map.js");
        __webpack_require__(/*! ../../modules/es.array.reduce */ "../../node_modules/core-js/modules/es.array.reduce.js");
        __webpack_require__(/*! ../../modules/es.array.reduce-right */ "../../node_modules/core-js/modules/es.array.reduce-right.js");
        __webpack_require__(/*! ../../modules/es.array.reverse */ "../../node_modules/core-js/modules/es.array.reverse.js");
        __webpack_require__(/*! ../../modules/es.array.slice */ "../../node_modules/core-js/modules/es.array.slice.js");
        __webpack_require__(/*! ../../modules/es.array.some */ "../../node_modules/core-js/modules/es.array.some.js");
        __webpack_require__(/*! ../../modules/es.array.sort */ "../../node_modules/core-js/modules/es.array.sort.js");
        __webpack_require__(/*! ../../modules/es.array.species */ "../../node_modules/core-js/modules/es.array.species.js");
        __webpack_require__(/*! ../../modules/es.array.splice */ "../../node_modules/core-js/modules/es.array.splice.js");
        __webpack_require__(/*! ../../modules/es.array.unscopables.flat */ "../../node_modules/core-js/modules/es.array.unscopables.flat.js");
        __webpack_require__(/*! ../../modules/es.array.unscopables.flat-map */ "../../node_modules/core-js/modules/es.array.unscopables.flat-map.js");
        var path = __webpack_require__(/*! ../../internals/path */ "../../node_modules/core-js/internals/path.js");
        module.exports = path.Array;
    },
    "../../node_modules/core-js/es/object/index.js": 
    /*!*********************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/es/object/index.js ***!
  \*********************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        __webpack_require__(/*! ../../modules/es.symbol */ "../../node_modules/core-js/modules/es.symbol.js");
        __webpack_require__(/*! ../../modules/es.object.assign */ "../../node_modules/core-js/modules/es.object.assign.js");
        __webpack_require__(/*! ../../modules/es.object.create */ "../../node_modules/core-js/modules/es.object.create.js");
        __webpack_require__(/*! ../../modules/es.object.define-property */ "../../node_modules/core-js/modules/es.object.define-property.js");
        __webpack_require__(/*! ../../modules/es.object.define-properties */ "../../node_modules/core-js/modules/es.object.define-properties.js");
        __webpack_require__(/*! ../../modules/es.object.entries */ "../../node_modules/core-js/modules/es.object.entries.js");
        __webpack_require__(/*! ../../modules/es.object.freeze */ "../../node_modules/core-js/modules/es.object.freeze.js");
        __webpack_require__(/*! ../../modules/es.object.from-entries */ "../../node_modules/core-js/modules/es.object.from-entries.js");
        __webpack_require__(/*! ../../modules/es.object.get-own-property-descriptor */ "../../node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
        __webpack_require__(/*! ../../modules/es.object.get-own-property-descriptors */ "../../node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
        __webpack_require__(/*! ../../modules/es.object.get-own-property-names */ "../../node_modules/core-js/modules/es.object.get-own-property-names.js");
        __webpack_require__(/*! ../../modules/es.object.get-prototype-of */ "../../node_modules/core-js/modules/es.object.get-prototype-of.js");
        __webpack_require__(/*! ../../modules/es.object.is */ "../../node_modules/core-js/modules/es.object.is.js");
        __webpack_require__(/*! ../../modules/es.object.is-extensible */ "../../node_modules/core-js/modules/es.object.is-extensible.js");
        __webpack_require__(/*! ../../modules/es.object.is-frozen */ "../../node_modules/core-js/modules/es.object.is-frozen.js");
        __webpack_require__(/*! ../../modules/es.object.is-sealed */ "../../node_modules/core-js/modules/es.object.is-sealed.js");
        __webpack_require__(/*! ../../modules/es.object.keys */ "../../node_modules/core-js/modules/es.object.keys.js");
        __webpack_require__(/*! ../../modules/es.object.prevent-extensions */ "../../node_modules/core-js/modules/es.object.prevent-extensions.js");
        __webpack_require__(/*! ../../modules/es.object.seal */ "../../node_modules/core-js/modules/es.object.seal.js");
        __webpack_require__(/*! ../../modules/es.object.set-prototype-of */ "../../node_modules/core-js/modules/es.object.set-prototype-of.js");
        __webpack_require__(/*! ../../modules/es.object.values */ "../../node_modules/core-js/modules/es.object.values.js");
        __webpack_require__(/*! ../../modules/es.object.to-string */ "../../node_modules/core-js/modules/es.object.to-string.js");
        __webpack_require__(/*! ../../modules/es.object.define-getter */ "../../node_modules/core-js/modules/es.object.define-getter.js");
        __webpack_require__(/*! ../../modules/es.object.define-setter */ "../../node_modules/core-js/modules/es.object.define-setter.js");
        __webpack_require__(/*! ../../modules/es.object.lookup-getter */ "../../node_modules/core-js/modules/es.object.lookup-getter.js");
        __webpack_require__(/*! ../../modules/es.object.lookup-setter */ "../../node_modules/core-js/modules/es.object.lookup-setter.js");
        __webpack_require__(/*! ../../modules/es.math.to-string-tag */ "../../node_modules/core-js/modules/es.math.to-string-tag.js");
        __webpack_require__(/*! ../../modules/es.json.to-string-tag */ "../../node_modules/core-js/modules/es.json.to-string-tag.js");
        var path = __webpack_require__(/*! ../../internals/path */ "../../node_modules/core-js/internals/path.js");
        module.exports = path.Object;
    },
    "../../node_modules/core-js/internals/a-function.js": 
    /*!**************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/a-function.js ***!
  \**************************************************************************************************************/
    /*! no static exports found */ function(module, exports) {
        module.exports = function(it) {
            if (typeof it != "function") {
                throw TypeError(String(it) + " is not a function");
            }
            return it;
        };
    },
    "../../node_modules/core-js/internals/a-possible-prototype.js": 
    /*!************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/a-possible-prototype.js ***!
  \************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
        module.exports = function(it) {
            if (!isObject(it) && it !== null) {
                throw TypeError("Can't set " + String(it) + " as a prototype");
            }
            return it;
        };
    },
    "../../node_modules/core-js/internals/add-to-unscopables.js": 
    /*!**********************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/add-to-unscopables.js ***!
  \**********************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");
        var create = __webpack_require__(/*! ../internals/object-create */ "../../node_modules/core-js/internals/object-create.js");
        var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../node_modules/core-js/internals/object-define-property.js");
        var UNSCOPABLES = wellKnownSymbol("unscopables");
        var ArrayPrototype = Array.prototype;
        if (ArrayPrototype[UNSCOPABLES] == undefined) {
            definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
                configurable: true,
                value: create(null)
            });
        }
        module.exports = function(key) {
            ArrayPrototype[UNSCOPABLES][key] = true;
        };
    },
    "../../node_modules/core-js/internals/an-instance.js": 
    /*!***************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/an-instance.js ***!
  \***************************************************************************************************************/
    /*! no static exports found */ function(module, exports) {
        module.exports = function(it, Constructor, name) {
            if (!(it instanceof Constructor)) {
                throw TypeError("Incorrect " + (name ? name + " " : "") + "invocation");
            }
            return it;
        };
    },
    "../../node_modules/core-js/internals/an-object.js": 
    /*!*************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/an-object.js ***!
  \*************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
        module.exports = function(it) {
            if (!isObject(it)) {
                throw TypeError(String(it) + " is not an object");
            }
            return it;
        };
    },
    "../../node_modules/core-js/internals/array-copy-within.js": 
    /*!*********************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/array-copy-within.js ***!
  \*********************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var toObject = __webpack_require__(/*! ../internals/to-object */ "../../node_modules/core-js/internals/to-object.js");
        var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../../node_modules/core-js/internals/to-absolute-index.js");
        var toLength = __webpack_require__(/*! ../internals/to-length */ "../../node_modules/core-js/internals/to-length.js");
        var min = Math.min;
        module.exports = [].copyWithin || function copyWithin(target, start) {
            var O = toObject(this);
            var len = toLength(O.length);
            var to = toAbsoluteIndex(target, len);
            var from = toAbsoluteIndex(start, len);
            var end = arguments.length > 2 ? arguments[2] : undefined;
            var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
            var inc = 1;
            if (from < to && to < from + count) {
                inc = -1;
                from += count - 1;
                to += count - 1;
            }
            while (count-- > 0) {
                if (from in O) O[to] = O[from]; else delete O[to];
                to += inc;
                from += inc;
            }
            return O;
        };
    },
    "../../node_modules/core-js/internals/array-fill.js": 
    /*!**************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/array-fill.js ***!
  \**************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var toObject = __webpack_require__(/*! ../internals/to-object */ "../../node_modules/core-js/internals/to-object.js");
        var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../../node_modules/core-js/internals/to-absolute-index.js");
        var toLength = __webpack_require__(/*! ../internals/to-length */ "../../node_modules/core-js/internals/to-length.js");
        module.exports = function fill(value) {
            var O = toObject(this);
            var length = toLength(O.length);
            var argumentsLength = arguments.length;
            var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
            var end = argumentsLength > 2 ? arguments[2] : undefined;
            var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
            while (endPos > index) O[index++] = value;
            return O;
        };
    },
    "../../node_modules/core-js/internals/array-for-each.js": 
    /*!******************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/array-for-each.js ***!
  \******************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "../../node_modules/core-js/internals/array-iteration.js").forEach;
        var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "../../node_modules/core-js/internals/array-method-is-strict.js");
        var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "../../node_modules/core-js/internals/array-method-uses-to-length.js");
        var STRICT_METHOD = arrayMethodIsStrict("forEach");
        var USES_TO_LENGTH = arrayMethodUsesToLength("forEach");
        module.exports = !STRICT_METHOD || !USES_TO_LENGTH ? function forEach(callbackfn) {
            return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        } : [].forEach;
    },
    "../../node_modules/core-js/internals/array-from.js": 
    /*!**************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/array-from.js ***!
  \**************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../../node_modules/core-js/internals/function-bind-context.js");
        var toObject = __webpack_require__(/*! ../internals/to-object */ "../../node_modules/core-js/internals/to-object.js");
        var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "../../node_modules/core-js/internals/call-with-safe-iteration-closing.js");
        var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "../../node_modules/core-js/internals/is-array-iterator-method.js");
        var toLength = __webpack_require__(/*! ../internals/to-length */ "../../node_modules/core-js/internals/to-length.js");
        var createProperty = __webpack_require__(/*! ../internals/create-property */ "../../node_modules/core-js/internals/create-property.js");
        var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "../../node_modules/core-js/internals/get-iterator-method.js");
        module.exports = function from(arrayLike) {
            var O = toObject(arrayLike);
            var C = typeof this == "function" ? this : Array;
            var argumentsLength = arguments.length;
            var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
            var mapping = mapfn !== undefined;
            var iteratorMethod = getIteratorMethod(O);
            var index = 0;
            var length, result, step, iterator, next, value;
            if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
            if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
                iterator = iteratorMethod.call(O);
                next = iterator.next;
                result = new C;
                for (;!(step = next.call(iterator)).done; index++) {
                    value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [ step.value, index ], true) : step.value;
                    createProperty(result, index, value);
                }
            } else {
                length = toLength(O.length);
                result = new C(length);
                for (;length > index; index++) {
                    value = mapping ? mapfn(O[index], index) : O[index];
                    createProperty(result, index, value);
                }
            }
            result.length = index;
            return result;
        };
    },
    "../../node_modules/core-js/internals/array-includes.js": 
    /*!******************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/array-includes.js ***!
  \******************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../node_modules/core-js/internals/to-indexed-object.js");
        var toLength = __webpack_require__(/*! ../internals/to-length */ "../../node_modules/core-js/internals/to-length.js");
        var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../../node_modules/core-js/internals/to-absolute-index.js");
        var createMethod = function(IS_INCLUDES) {
            return function($this, el, fromIndex) {
                var O = toIndexedObject($this);
                var length = toLength(O.length);
                var index = toAbsoluteIndex(fromIndex, length);
                var value;
                if (IS_INCLUDES && el != el) while (length > index) {
                    value = O[index++];
                    if (value != value) return true;
                } else for (;length > index; index++) {
                    if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
                }
                return !IS_INCLUDES && -1;
            };
        };
        module.exports = {
            includes: createMethod(true),
            indexOf: createMethod(false)
        };
    },
    "../../node_modules/core-js/internals/array-iteration.js": 
    /*!*******************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/array-iteration.js ***!
  \*******************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../../node_modules/core-js/internals/function-bind-context.js");
        var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../../node_modules/core-js/internals/indexed-object.js");
        var toObject = __webpack_require__(/*! ../internals/to-object */ "../../node_modules/core-js/internals/to-object.js");
        var toLength = __webpack_require__(/*! ../internals/to-length */ "../../node_modules/core-js/internals/to-length.js");
        var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "../../node_modules/core-js/internals/array-species-create.js");
        var push = [].push;
        var createMethod = function(TYPE) {
            var IS_MAP = TYPE == 1;
            var IS_FILTER = TYPE == 2;
            var IS_SOME = TYPE == 3;
            var IS_EVERY = TYPE == 4;
            var IS_FIND_INDEX = TYPE == 6;
            var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
            return function($this, callbackfn, that, specificCreate) {
                var O = toObject($this);
                var self = IndexedObject(O);
                var boundFunction = bind(callbackfn, that, 3);
                var length = toLength(self.length);
                var index = 0;
                var create = specificCreate || arraySpeciesCreate;
                var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
                var value, result;
                for (;length > index; index++) if (NO_HOLES || index in self) {
                    value = self[index];
                    result = boundFunction(value, index, O);
                    if (TYPE) {
                        if (IS_MAP) target[index] = result; else if (result) switch (TYPE) {
                          case 3:
                            return true;

                          case 5:
                            return value;

                          case 6:
                            return index;

                          case 2:
                            push.call(target, value);
                        } else if (IS_EVERY) return false;
                    }
                }
                return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
            };
        };
        module.exports = {
            forEach: createMethod(0),
            map: createMethod(1),
            filter: createMethod(2),
            some: createMethod(3),
            every: createMethod(4),
            find: createMethod(5),
            findIndex: createMethod(6)
        };
    },
    "../../node_modules/core-js/internals/array-last-index-of.js": 
    /*!***********************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/array-last-index-of.js ***!
  \***********************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../node_modules/core-js/internals/to-indexed-object.js");
        var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../../node_modules/core-js/internals/to-integer.js");
        var toLength = __webpack_require__(/*! ../internals/to-length */ "../../node_modules/core-js/internals/to-length.js");
        var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "../../node_modules/core-js/internals/array-method-is-strict.js");
        var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "../../node_modules/core-js/internals/array-method-uses-to-length.js");
        var min = Math.min;
        var nativeLastIndexOf = [].lastIndexOf;
        var NEGATIVE_ZERO = !!nativeLastIndexOf && 1 / [ 1 ].lastIndexOf(1, -0) < 0;
        var STRICT_METHOD = arrayMethodIsStrict("lastIndexOf");
        var USES_TO_LENGTH = arrayMethodUsesToLength("indexOf", {
            ACCESSORS: true,
            1: 0
        });
        var FORCED = NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH;
        module.exports = FORCED ? function lastIndexOf(searchElement) {
            if (NEGATIVE_ZERO) return nativeLastIndexOf.apply(this, arguments) || 0;
            var O = toIndexedObject(this);
            var length = toLength(O.length);
            var index = length - 1;
            if (arguments.length > 1) index = min(index, toInteger(arguments[1]));
            if (index < 0) index = length + index;
            for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
            return -1;
        } : nativeLastIndexOf;
    },
    "../../node_modules/core-js/internals/array-method-has-species-support.js": 
    /*!************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/array-method-has-species-support.js ***!
  \************************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
        var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");
        var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../../node_modules/core-js/internals/engine-v8-version.js");
        var SPECIES = wellKnownSymbol("species");
        module.exports = function(METHOD_NAME) {
            return V8_VERSION >= 51 || !fails((function() {
                var array = [];
                var constructor = array.constructor = {};
                constructor[SPECIES] = function() {
                    return {
                        foo: 1
                    };
                };
                return array[METHOD_NAME](Boolean).foo !== 1;
            }));
        };
    },
    "../../node_modules/core-js/internals/array-method-is-strict.js": 
    /*!**************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/array-method-is-strict.js ***!
  \**************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
        module.exports = function(METHOD_NAME, argument) {
            var method = [][METHOD_NAME];
            return !!method && fails((function() {
                method.call(null, argument || function() {
                    throw 1;
                }, 1);
            }));
        };
    },
    "../../node_modules/core-js/internals/array-method-uses-to-length.js": 
    /*!*******************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/array-method-uses-to-length.js ***!
  \*******************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
        var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
        var has = __webpack_require__(/*! ../internals/has */ "../../node_modules/core-js/internals/has.js");
        var defineProperty = Object.defineProperty;
        var cache = {};
        var thrower = function(it) {
            throw it;
        };
        module.exports = function(METHOD_NAME, options) {
            if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
            if (!options) options = {};
            var method = [][METHOD_NAME];
            var ACCESSORS = has(options, "ACCESSORS") ? options.ACCESSORS : false;
            var argument0 = has(options, 0) ? options[0] : thrower;
            var argument1 = has(options, 1) ? options[1] : undefined;
            return cache[METHOD_NAME] = !!method && !fails((function() {
                if (ACCESSORS && !DESCRIPTORS) return true;
                var O = {
                    length: -1
                };
                if (ACCESSORS) defineProperty(O, 1, {
                    enumerable: true,
                    get: thrower
                }); else O[1] = 1;
                method.call(O, argument0, argument1);
            }));
        };
    },
    "../../node_modules/core-js/internals/array-reduce.js": 
    /*!****************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/array-reduce.js ***!
  \****************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var aFunction = __webpack_require__(/*! ../internals/a-function */ "../../node_modules/core-js/internals/a-function.js");
        var toObject = __webpack_require__(/*! ../internals/to-object */ "../../node_modules/core-js/internals/to-object.js");
        var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../../node_modules/core-js/internals/indexed-object.js");
        var toLength = __webpack_require__(/*! ../internals/to-length */ "../../node_modules/core-js/internals/to-length.js");
        var createMethod = function(IS_RIGHT) {
            return function(that, callbackfn, argumentsLength, memo) {
                aFunction(callbackfn);
                var O = toObject(that);
                var self = IndexedObject(O);
                var length = toLength(O.length);
                var index = IS_RIGHT ? length - 1 : 0;
                var i = IS_RIGHT ? -1 : 1;
                if (argumentsLength < 2) while (true) {
                    if (index in self) {
                        memo = self[index];
                        index += i;
                        break;
                    }
                    index += i;
                    if (IS_RIGHT ? index < 0 : length <= index) {
                        throw TypeError("Reduce of empty array with no initial value");
                    }
                }
                for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
                    memo = callbackfn(memo, self[index], index, O);
                }
                return memo;
            };
        };
        module.exports = {
            left: createMethod(false),
            right: createMethod(true)
        };
    },
    "../../node_modules/core-js/internals/array-species-create.js": 
    /*!************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/array-species-create.js ***!
  \************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
        var isArray = __webpack_require__(/*! ../internals/is-array */ "../../node_modules/core-js/internals/is-array.js");
        var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");
        var SPECIES = wellKnownSymbol("species");
        module.exports = function(originalArray, length) {
            var C;
            if (isArray(originalArray)) {
                C = originalArray.constructor;
                if (typeof C == "function" && (C === Array || isArray(C.prototype))) C = undefined; else if (isObject(C)) {
                    C = C[SPECIES];
                    if (C === null) C = undefined;
                }
            }
            return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
        };
    },
    "../../node_modules/core-js/internals/call-with-safe-iteration-closing.js": 
    /*!************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \************************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
        module.exports = function(iterator, fn, value, ENTRIES) {
            try {
                return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
            } catch (error) {
                var returnMethod = iterator["return"];
                if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
                throw error;
            }
        };
    },
    "../../node_modules/core-js/internals/check-correctness-of-iteration.js": 
    /*!**********************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**********************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");
        var ITERATOR = wellKnownSymbol("iterator");
        var SAFE_CLOSING = false;
        try {
            var called = 0;
            var iteratorWithReturn = {
                next: function() {
                    return {
                        done: !!called++
                    };
                },
                return: function() {
                    SAFE_CLOSING = true;
                }
            };
            iteratorWithReturn[ITERATOR] = function() {
                return this;
            };
            Array.from(iteratorWithReturn, (function() {
                throw 2;
            }));
        } catch (error) {}
        module.exports = function(exec, SKIP_CLOSING) {
            if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
            var ITERATION_SUPPORT = false;
            try {
                var object = {};
                object[ITERATOR] = function() {
                    return {
                        next: function() {
                            return {
                                done: ITERATION_SUPPORT = true
                            };
                        }
                    };
                };
                exec(object);
            } catch (error) {}
            return ITERATION_SUPPORT;
        };
    },
    "../../node_modules/core-js/internals/classof-raw.js": 
    /*!***************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/classof-raw.js ***!
  \***************************************************************************************************************/
    /*! no static exports found */ function(module, exports) {
        var toString = {}.toString;
        module.exports = function(it) {
            return toString.call(it).slice(8, -1);
        };
    },
    "../../node_modules/core-js/internals/classof.js": 
    /*!***********************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/classof.js ***!
  \***********************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "../../node_modules/core-js/internals/to-string-tag-support.js");
        var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "../../node_modules/core-js/internals/classof-raw.js");
        var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        var CORRECT_ARGUMENTS = classofRaw(function() {
            return arguments;
        }()) == "Arguments";
        var tryGet = function(it, key) {
            try {
                return it[key];
            } catch (error) {}
        };
        module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
            var O, tag, result;
            return it === undefined ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : result;
        };
    },
    "../../node_modules/core-js/internals/collection-strong.js": 
    /*!*********************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/collection-strong.js ***!
  \*********************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../../node_modules/core-js/internals/object-define-property.js").f;
        var create = __webpack_require__(/*! ../internals/object-create */ "../../node_modules/core-js/internals/object-create.js");
        var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "../../node_modules/core-js/internals/redefine-all.js");
        var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../../node_modules/core-js/internals/function-bind-context.js");
        var anInstance = __webpack_require__(/*! ../internals/an-instance */ "../../node_modules/core-js/internals/an-instance.js");
        var iterate = __webpack_require__(/*! ../internals/iterate */ "../../node_modules/core-js/internals/iterate.js");
        var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "../../node_modules/core-js/internals/define-iterator.js");
        var setSpecies = __webpack_require__(/*! ../internals/set-species */ "../../node_modules/core-js/internals/set-species.js");
        var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
        var fastKey = __webpack_require__(/*! ../internals/internal-metadata */ "../../node_modules/core-js/internals/internal-metadata.js").fastKey;
        var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../node_modules/core-js/internals/internal-state.js");
        var setInternalState = InternalStateModule.set;
        var internalStateGetterFor = InternalStateModule.getterFor;
        module.exports = {
            getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
                var C = wrapper((function(that, iterable) {
                    anInstance(that, C, CONSTRUCTOR_NAME);
                    setInternalState(that, {
                        type: CONSTRUCTOR_NAME,
                        index: create(null),
                        first: undefined,
                        last: undefined,
                        size: 0
                    });
                    if (!DESCRIPTORS) that.size = 0;
                    if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
                }));
                var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
                var define = function(that, key, value) {
                    var state = getInternalState(that);
                    var entry = getEntry(that, key);
                    var previous, index;
                    if (entry) {
                        entry.value = value;
                    } else {
                        state.last = entry = {
                            index: index = fastKey(key, true),
                            key: key,
                            value: value,
                            previous: previous = state.last,
                            next: undefined,
                            removed: false
                        };
                        if (!state.first) state.first = entry;
                        if (previous) previous.next = entry;
                        if (DESCRIPTORS) state.size++; else that.size++;
                        if (index !== "F") state.index[index] = entry;
                    }
                    return that;
                };
                var getEntry = function(that, key) {
                    var state = getInternalState(that);
                    var index = fastKey(key);
                    var entry;
                    if (index !== "F") return state.index[index];
                    for (entry = state.first; entry; entry = entry.next) {
                        if (entry.key == key) return entry;
                    }
                };
                redefineAll(C.prototype, {
                    clear: function clear() {
                        var that = this;
                        var state = getInternalState(that);
                        var data = state.index;
                        var entry = state.first;
                        while (entry) {
                            entry.removed = true;
                            if (entry.previous) entry.previous = entry.previous.next = undefined;
                            delete data[entry.index];
                            entry = entry.next;
                        }
                        state.first = state.last = undefined;
                        if (DESCRIPTORS) state.size = 0; else that.size = 0;
                    },
                    delete: function(key) {
                        var that = this;
                        var state = getInternalState(that);
                        var entry = getEntry(that, key);
                        if (entry) {
                            var next = entry.next;
                            var prev = entry.previous;
                            delete state.index[entry.index];
                            entry.removed = true;
                            if (prev) prev.next = next;
                            if (next) next.previous = prev;
                            if (state.first == entry) state.first = next;
                            if (state.last == entry) state.last = prev;
                            if (DESCRIPTORS) state.size--; else that.size--;
                        }
                        return !!entry;
                    },
                    forEach: function forEach(callbackfn) {
                        var state = getInternalState(this);
                        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
                        var entry;
                        while (entry = entry ? entry.next : state.first) {
                            boundFunction(entry.value, entry.key, this);
                            while (entry && entry.removed) entry = entry.previous;
                        }
                    },
                    has: function has(key) {
                        return !!getEntry(this, key);
                    }
                });
                redefineAll(C.prototype, IS_MAP ? {
                    get: function get(key) {
                        var entry = getEntry(this, key);
                        return entry && entry.value;
                    },
                    set: function set(key, value) {
                        return define(this, key === 0 ? 0 : key, value);
                    }
                } : {
                    add: function add(value) {
                        return define(this, value = value === 0 ? 0 : value, value);
                    }
                });
                if (DESCRIPTORS) defineProperty(C.prototype, "size", {
                    get: function() {
                        return getInternalState(this).size;
                    }
                });
                return C;
            },
            setStrong: function(C, CONSTRUCTOR_NAME, IS_MAP) {
                var ITERATOR_NAME = CONSTRUCTOR_NAME + " Iterator";
                var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
                var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
                defineIterator(C, CONSTRUCTOR_NAME, (function(iterated, kind) {
                    setInternalState(this, {
                        type: ITERATOR_NAME,
                        target: iterated,
                        state: getInternalCollectionState(iterated),
                        kind: kind,
                        last: undefined
                    });
                }), (function() {
                    var state = getInternalIteratorState(this);
                    var kind = state.kind;
                    var entry = state.last;
                    while (entry && entry.removed) entry = entry.previous;
                    if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
                        state.target = undefined;
                        return {
                            value: undefined,
                            done: true
                        };
                    }
                    if (kind == "keys") return {
                        value: entry.key,
                        done: false
                    };
                    if (kind == "values") return {
                        value: entry.value,
                        done: false
                    };
                    return {
                        value: [ entry.key, entry.value ],
                        done: false
                    };
                }), IS_MAP ? "entries" : "values", !IS_MAP, true);
                setSpecies(CONSTRUCTOR_NAME);
            }
        };
    },
    "../../node_modules/core-js/internals/collection-weak.js": 
    /*!*******************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/collection-weak.js ***!
  \*******************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "../../node_modules/core-js/internals/redefine-all.js");
        var getWeakData = __webpack_require__(/*! ../internals/internal-metadata */ "../../node_modules/core-js/internals/internal-metadata.js").getWeakData;
        var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
        var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
        var anInstance = __webpack_require__(/*! ../internals/an-instance */ "../../node_modules/core-js/internals/an-instance.js");
        var iterate = __webpack_require__(/*! ../internals/iterate */ "../../node_modules/core-js/internals/iterate.js");
        var ArrayIterationModule = __webpack_require__(/*! ../internals/array-iteration */ "../../node_modules/core-js/internals/array-iteration.js");
        var $has = __webpack_require__(/*! ../internals/has */ "../../node_modules/core-js/internals/has.js");
        var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../node_modules/core-js/internals/internal-state.js");
        var setInternalState = InternalStateModule.set;
        var internalStateGetterFor = InternalStateModule.getterFor;
        var find = ArrayIterationModule.find;
        var findIndex = ArrayIterationModule.findIndex;
        var id = 0;
        var uncaughtFrozenStore = function(store) {
            return store.frozen || (store.frozen = new UncaughtFrozenStore);
        };
        var UncaughtFrozenStore = function() {
            this.entries = [];
        };
        var findUncaughtFrozen = function(store, key) {
            return find(store.entries, (function(it) {
                return it[0] === key;
            }));
        };
        UncaughtFrozenStore.prototype = {
            get: function(key) {
                var entry = findUncaughtFrozen(this, key);
                if (entry) return entry[1];
            },
            has: function(key) {
                return !!findUncaughtFrozen(this, key);
            },
            set: function(key, value) {
                var entry = findUncaughtFrozen(this, key);
                if (entry) entry[1] = value; else this.entries.push([ key, value ]);
            },
            delete: function(key) {
                var index = findIndex(this.entries, (function(it) {
                    return it[0] === key;
                }));
                if (~index) this.entries.splice(index, 1);
                return !!~index;
            }
        };
        module.exports = {
            getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
                var C = wrapper((function(that, iterable) {
                    anInstance(that, C, CONSTRUCTOR_NAME);
                    setInternalState(that, {
                        type: CONSTRUCTOR_NAME,
                        id: id++,
                        frozen: undefined
                    });
                    if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
                }));
                var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
                var define = function(that, key, value) {
                    var state = getInternalState(that);
                    var data = getWeakData(anObject(key), true);
                    if (data === true) uncaughtFrozenStore(state).set(key, value); else data[state.id] = value;
                    return that;
                };
                redefineAll(C.prototype, {
                    delete: function(key) {
                        var state = getInternalState(this);
                        if (!isObject(key)) return false;
                        var data = getWeakData(key);
                        if (data === true) return uncaughtFrozenStore(state)["delete"](key);
                        return data && $has(data, state.id) && delete data[state.id];
                    },
                    has: function has(key) {
                        var state = getInternalState(this);
                        if (!isObject(key)) return false;
                        var data = getWeakData(key);
                        if (data === true) return uncaughtFrozenStore(state).has(key);
                        return data && $has(data, state.id);
                    }
                });
                redefineAll(C.prototype, IS_MAP ? {
                    get: function get(key) {
                        var state = getInternalState(this);
                        if (isObject(key)) {
                            var data = getWeakData(key);
                            if (data === true) return uncaughtFrozenStore(state).get(key);
                            return data ? data[state.id] : undefined;
                        }
                    },
                    set: function set(key, value) {
                        return define(this, key, value);
                    }
                } : {
                    add: function add(value) {
                        return define(this, value, true);
                    }
                });
                return C;
            }
        };
    },
    "../../node_modules/core-js/internals/collection.js": 
    /*!**************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/collection.js ***!
  \**************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
        var isForced = __webpack_require__(/*! ../internals/is-forced */ "../../node_modules/core-js/internals/is-forced.js");
        var redefine = __webpack_require__(/*! ../internals/redefine */ "../../node_modules/core-js/internals/redefine.js");
        var InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ "../../node_modules/core-js/internals/internal-metadata.js");
        var iterate = __webpack_require__(/*! ../internals/iterate */ "../../node_modules/core-js/internals/iterate.js");
        var anInstance = __webpack_require__(/*! ../internals/an-instance */ "../../node_modules/core-js/internals/an-instance.js");
        var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
        var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
        var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "../../node_modules/core-js/internals/check-correctness-of-iteration.js");
        var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../node_modules/core-js/internals/set-to-string-tag.js");
        var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "../../node_modules/core-js/internals/inherit-if-required.js");
        module.exports = function(CONSTRUCTOR_NAME, wrapper, common) {
            var IS_MAP = CONSTRUCTOR_NAME.indexOf("Map") !== -1;
            var IS_WEAK = CONSTRUCTOR_NAME.indexOf("Weak") !== -1;
            var ADDER = IS_MAP ? "set" : "add";
            var NativeConstructor = global[CONSTRUCTOR_NAME];
            var NativePrototype = NativeConstructor && NativeConstructor.prototype;
            var Constructor = NativeConstructor;
            var exported = {};
            var fixMethod = function(KEY) {
                var nativeMethod = NativePrototype[KEY];
                redefine(NativePrototype, KEY, KEY == "add" ? function add(value) {
                    nativeMethod.call(this, value === 0 ? 0 : value);
                    return this;
                } : KEY == "delete" ? function(key) {
                    return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
                } : KEY == "get" ? function get(key) {
                    return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
                } : KEY == "has" ? function has(key) {
                    return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
                } : function set(key, value) {
                    nativeMethod.call(this, key === 0 ? 0 : key, value);
                    return this;
                });
            };
            if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != "function" || !(IS_WEAK || NativePrototype.forEach && !fails((function() {
                (new NativeConstructor).entries().next();
            }))))) {
                Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
                InternalMetadataModule.REQUIRED = true;
            } else if (isForced(CONSTRUCTOR_NAME, true)) {
                var instance = new Constructor;
                var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
                var THROWS_ON_PRIMITIVES = fails((function() {
                    instance.has(1);
                }));
                var ACCEPT_ITERABLES = checkCorrectnessOfIteration((function(iterable) {
                    new NativeConstructor(iterable);
                }));
                var BUGGY_ZERO = !IS_WEAK && fails((function() {
                    var $instance = new NativeConstructor;
                    var index = 5;
                    while (index--) $instance[ADDER](index, index);
                    return !$instance.has(-0);
                }));
                if (!ACCEPT_ITERABLES) {
                    Constructor = wrapper((function(dummy, iterable) {
                        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
                        var that = inheritIfRequired(new NativeConstructor, dummy, Constructor);
                        if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
                        return that;
                    }));
                    Constructor.prototype = NativePrototype;
                    NativePrototype.constructor = Constructor;
                }
                if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
                    fixMethod("delete");
                    fixMethod("has");
                    IS_MAP && fixMethod("get");
                }
                if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
                if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
            }
            exported[CONSTRUCTOR_NAME] = Constructor;
            $({
                global: true,
                forced: Constructor != NativeConstructor
            }, exported);
            setToStringTag(Constructor, CONSTRUCTOR_NAME);
            if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
            return Constructor;
        };
    },
    "../../node_modules/core-js/internals/copy-constructor-properties.js": 
    /*!*******************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/copy-constructor-properties.js ***!
  \*******************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var has = __webpack_require__(/*! ../internals/has */ "../../node_modules/core-js/internals/has.js");
        var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "../../node_modules/core-js/internals/own-keys.js");
        var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../node_modules/core-js/internals/object-get-own-property-descriptor.js");
        var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../node_modules/core-js/internals/object-define-property.js");
        module.exports = function(target, source) {
            var keys = ownKeys(source);
            var defineProperty = definePropertyModule.f;
            var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
            }
        };
    },
    "../../node_modules/core-js/internals/correct-prototype-getter.js": 
    /*!****************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/correct-prototype-getter.js ***!
  \****************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
        module.exports = !fails((function() {
            function F() {}
            F.prototype.constructor = null;
            return Object.getPrototypeOf(new F) !== F.prototype;
        }));
    },
    "../../node_modules/core-js/internals/create-iterator-constructor.js": 
    /*!*******************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/create-iterator-constructor.js ***!
  \*******************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "../../node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
        var create = __webpack_require__(/*! ../internals/object-create */ "../../node_modules/core-js/internals/object-create.js");
        var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../node_modules/core-js/internals/create-property-descriptor.js");
        var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../node_modules/core-js/internals/set-to-string-tag.js");
        var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../node_modules/core-js/internals/iterators.js");
        var returnThis = function() {
            return this;
        };
        module.exports = function(IteratorConstructor, NAME, next) {
            var TO_STRING_TAG = NAME + " Iterator";
            IteratorConstructor.prototype = create(IteratorPrototype, {
                next: createPropertyDescriptor(1, next)
            });
            setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
            Iterators[TO_STRING_TAG] = returnThis;
            return IteratorConstructor;
        };
    },
    "../../node_modules/core-js/internals/create-non-enumerable-property.js": 
    /*!**********************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**********************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
        var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../node_modules/core-js/internals/object-define-property.js");
        var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../node_modules/core-js/internals/create-property-descriptor.js");
        module.exports = DESCRIPTORS ? function(object, key, value) {
            return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
        } : function(object, key, value) {
            object[key] = value;
            return object;
        };
    },
    "../../node_modules/core-js/internals/create-property-descriptor.js": 
    /*!******************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/create-property-descriptor.js ***!
  \******************************************************************************************************************************/
    /*! no static exports found */ function(module, exports) {
        module.exports = function(bitmap, value) {
            return {
                enumerable: !(bitmap & 1),
                configurable: !(bitmap & 2),
                writable: !(bitmap & 4),
                value: value
            };
        };
    },
    "../../node_modules/core-js/internals/create-property.js": 
    /*!*******************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/create-property.js ***!
  \*******************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../../node_modules/core-js/internals/to-primitive.js");
        var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../node_modules/core-js/internals/object-define-property.js");
        var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../node_modules/core-js/internals/create-property-descriptor.js");
        module.exports = function(object, key, value) {
            var propertyKey = toPrimitive(key);
            if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value)); else object[propertyKey] = value;
        };
    },
    "../../node_modules/core-js/internals/define-iterator.js": 
    /*!*******************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/define-iterator.js ***!
  \*******************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "../../node_modules/core-js/internals/create-iterator-constructor.js");
        var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../../node_modules/core-js/internals/object-get-prototype-of.js");
        var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../../node_modules/core-js/internals/object-set-prototype-of.js");
        var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../node_modules/core-js/internals/set-to-string-tag.js");
        var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../node_modules/core-js/internals/create-non-enumerable-property.js");
        var redefine = __webpack_require__(/*! ../internals/redefine */ "../../node_modules/core-js/internals/redefine.js");
        var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");
        var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../node_modules/core-js/internals/is-pure.js");
        var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../node_modules/core-js/internals/iterators.js");
        var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "../../node_modules/core-js/internals/iterators-core.js");
        var IteratorPrototype = IteratorsCore.IteratorPrototype;
        var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
        var ITERATOR = wellKnownSymbol("iterator");
        var KEYS = "keys";
        var VALUES = "values";
        var ENTRIES = "entries";
        var returnThis = function() {
            return this;
        };
        module.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
            createIteratorConstructor(IteratorConstructor, NAME, next);
            var getIterationMethod = function(KIND) {
                if (KIND === DEFAULT && defaultIterator) return defaultIterator;
                if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
                switch (KIND) {
                  case KEYS:
                    return function keys() {
                        return new IteratorConstructor(this, KIND);
                    };

                  case VALUES:
                    return function values() {
                        return new IteratorConstructor(this, KIND);
                    };

                  case ENTRIES:
                    return function entries() {
                        return new IteratorConstructor(this, KIND);
                    };
                }
                return function() {
                    return new IteratorConstructor(this);
                };
            };
            var TO_STRING_TAG = NAME + " Iterator";
            var INCORRECT_VALUES_NAME = false;
            var IterablePrototype = Iterable.prototype;
            var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
            var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
            var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
            var CurrentIteratorPrototype, methods, KEY;
            if (anyNativeIterator) {
                CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable));
                if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
                    if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                        if (setPrototypeOf) {
                            setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                        } else if (typeof CurrentIteratorPrototype[ITERATOR] != "function") {
                            createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
                        }
                    }
                    setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
                    if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
                }
            }
            if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
                INCORRECT_VALUES_NAME = true;
                defaultIterator = function values() {
                    return nativeIterator.call(this);
                };
            }
            if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
                createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
            }
            Iterators[NAME] = defaultIterator;
            if (DEFAULT) {
                methods = {
                    values: getIterationMethod(VALUES),
                    keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
                    entries: getIterationMethod(ENTRIES)
                };
                if (FORCED) for (KEY in methods) {
                    if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
                        redefine(IterablePrototype, KEY, methods[KEY]);
                    }
                } else $({
                    target: NAME,
                    proto: true,
                    forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
                }, methods);
            }
            return methods;
        };
    },
    "../../node_modules/core-js/internals/define-well-known-symbol.js": 
    /*!****************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/define-well-known-symbol.js ***!
  \****************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var path = __webpack_require__(/*! ../internals/path */ "../../node_modules/core-js/internals/path.js");
        var has = __webpack_require__(/*! ../internals/has */ "../../node_modules/core-js/internals/has.js");
        var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "../../node_modules/core-js/internals/well-known-symbol-wrapped.js");
        var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../../node_modules/core-js/internals/object-define-property.js").f;
        module.exports = function(NAME) {
            var Symbol = path.Symbol || (path.Symbol = {});
            if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
                value: wrappedWellKnownSymbolModule.f(NAME)
            });
        };
    },
    "../../node_modules/core-js/internals/descriptors.js": 
    /*!***************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/descriptors.js ***!
  \***************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
        module.exports = !fails((function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7;
                }
            })[1] != 7;
        }));
    },
    "../../node_modules/core-js/internals/document-create-element.js": 
    /*!***************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/document-create-element.js ***!
  \***************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
        var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
        var document = global.document;
        var EXISTS = isObject(document) && isObject(document.createElement);
        module.exports = function(it) {
            return EXISTS ? document.createElement(it) : {};
        };
    },
    "../../node_modules/core-js/internals/engine-user-agent.js": 
    /*!*********************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/engine-user-agent.js ***!
  \*********************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../node_modules/core-js/internals/get-built-in.js");
        module.exports = getBuiltIn("navigator", "userAgent") || "";
    },
    "../../node_modules/core-js/internals/engine-v8-version.js": 
    /*!*********************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/engine-v8-version.js ***!
  \*********************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
        var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../../node_modules/core-js/internals/engine-user-agent.js");
        var process = global.process;
        var versions = process && process.versions;
        var v8 = versions && versions.v8;
        var match, version;
        if (v8) {
            match = v8.split(".");
            version = match[0] + match[1];
        } else if (userAgent) {
            match = userAgent.match(/Edge\/(\d+)/);
            if (!match || match[1] >= 74) {
                match = userAgent.match(/Chrome\/(\d+)/);
                if (match) version = match[1];
            }
        }
        module.exports = version && +version;
    },
    "../../node_modules/core-js/internals/enum-bug-keys.js": 
    /*!*****************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/enum-bug-keys.js ***!
  \*****************************************************************************************************************/
    /*! no static exports found */ function(module, exports) {
        module.exports = [ "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf" ];
    },
    "../../node_modules/core-js/internals/export.js": 
    /*!**********************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/export.js ***!
  \**********************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
        var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
        var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../node_modules/core-js/internals/create-non-enumerable-property.js");
        var redefine = __webpack_require__(/*! ../internals/redefine */ "../../node_modules/core-js/internals/redefine.js");
        var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../node_modules/core-js/internals/set-global.js");
        var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "../../node_modules/core-js/internals/copy-constructor-properties.js");
        var isForced = __webpack_require__(/*! ../internals/is-forced */ "../../node_modules/core-js/internals/is-forced.js");
        module.exports = function(options, source) {
            var TARGET = options.target;
            var GLOBAL = options.global;
            var STATIC = options.stat;
            var FORCED, target, key, targetProperty, sourceProperty, descriptor;
            if (GLOBAL) {
                target = global;
            } else if (STATIC) {
                target = global[TARGET] || setGlobal(TARGET, {});
            } else {
                target = (global[TARGET] || {}).prototype;
            }
            if (target) for (key in source) {
                sourceProperty = source[key];
                if (options.noTargetGet) {
                    descriptor = getOwnPropertyDescriptor(target, key);
                    targetProperty = descriptor && descriptor.value;
                } else targetProperty = target[key];
                FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
                if (!FORCED && targetProperty !== undefined) {
                    if (typeof sourceProperty === typeof targetProperty) continue;
                    copyConstructorProperties(sourceProperty, targetProperty);
                }
                if (options.sham || targetProperty && targetProperty.sham) {
                    createNonEnumerableProperty(sourceProperty, "sham", true);
                }
                redefine(target, key, sourceProperty, options);
            }
        };
    },
    "../../node_modules/core-js/internals/fails.js": 
    /*!*********************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/fails.js ***!
  \*********************************************************************************************************/
    /*! no static exports found */ function(module, exports) {
        module.exports = function(exec) {
            try {
                return !!exec();
            } catch (error) {
                return true;
            }
        };
    },
    "../../node_modules/core-js/internals/flatten-into-array.js": 
    /*!**********************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/flatten-into-array.js ***!
  \**********************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var isArray = __webpack_require__(/*! ../internals/is-array */ "../../node_modules/core-js/internals/is-array.js");
        var toLength = __webpack_require__(/*! ../internals/to-length */ "../../node_modules/core-js/internals/to-length.js");
        var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../../node_modules/core-js/internals/function-bind-context.js");
        var flattenIntoArray = function(target, original, source, sourceLen, start, depth, mapper, thisArg) {
            var targetIndex = start;
            var sourceIndex = 0;
            var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
            var element;
            while (sourceIndex < sourceLen) {
                if (sourceIndex in source) {
                    element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
                    if (depth > 0 && isArray(element)) {
                        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
                    } else {
                        if (targetIndex >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                        target[targetIndex] = element;
                    }
                    targetIndex++;
                }
                sourceIndex++;
            }
            return targetIndex;
        };
        module.exports = flattenIntoArray;
    },
    "../../node_modules/core-js/internals/freezing.js": 
    /*!************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/freezing.js ***!
  \************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
        module.exports = !fails((function() {
            return Object.isExtensible(Object.preventExtensions({}));
        }));
    },
    "../../node_modules/core-js/internals/function-bind-context.js": 
    /*!*************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/function-bind-context.js ***!
  \*************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var aFunction = __webpack_require__(/*! ../internals/a-function */ "../../node_modules/core-js/internals/a-function.js");
        module.exports = function(fn, that, length) {
            aFunction(fn);
            if (that === undefined) return fn;
            switch (length) {
              case 0:
                return function() {
                    return fn.call(that);
                };

              case 1:
                return function(a) {
                    return fn.call(that, a);
                };

              case 2:
                return function(a, b) {
                    return fn.call(that, a, b);
                };

              case 3:
                return function(a, b, c) {
                    return fn.call(that, a, b, c);
                };
            }
            return function() {
                return fn.apply(that, arguments);
            };
        };
    },
    "../../node_modules/core-js/internals/get-built-in.js": 
    /*!****************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/get-built-in.js ***!
  \****************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var path = __webpack_require__(/*! ../internals/path */ "../../node_modules/core-js/internals/path.js");
        var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
        var aFunction = function(variable) {
            return typeof variable == "function" ? variable : undefined;
        };
        module.exports = function(namespace, method) {
            return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
        };
    },
    "../../node_modules/core-js/internals/get-iterator-method.js": 
    /*!***********************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/get-iterator-method.js ***!
  \***********************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var classof = __webpack_require__(/*! ../internals/classof */ "../../node_modules/core-js/internals/classof.js");
        var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../node_modules/core-js/internals/iterators.js");
        var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");
        var ITERATOR = wellKnownSymbol("iterator");
        module.exports = function(it) {
            if (it != undefined) return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
        };
    },
    "../../node_modules/core-js/internals/global.js": 
    /*!**********************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/global.js ***!
  \**********************************************************************************************************/
    /*! no static exports found */ function(module, exports) {
        var check = function(it) {
            return it && it.Math == Math && it;
        };
        module.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof global == "object" && global) || Function("return this")();
    },
    "../../node_modules/core-js/internals/has.js": 
    /*!*******************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/has.js ***!
  \*******************************************************************************************************/
    /*! no static exports found */ function(module, exports) {
        var hasOwnProperty = {}.hasOwnProperty;
        module.exports = function(it, key) {
            return hasOwnProperty.call(it, key);
        };
    },
    "../../node_modules/core-js/internals/hidden-keys.js": 
    /*!***************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/hidden-keys.js ***!
  \***************************************************************************************************************/
    /*! no static exports found */ function(module, exports) {
        module.exports = {};
    },
    "../../node_modules/core-js/internals/html.js": 
    /*!********************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/html.js ***!
  \********************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../node_modules/core-js/internals/get-built-in.js");
        module.exports = getBuiltIn("document", "documentElement");
    },
    "../../node_modules/core-js/internals/ie8-dom-define.js": 
    /*!******************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/ie8-dom-define.js ***!
  \******************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
        var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
        var createElement = __webpack_require__(/*! ../internals/document-create-element */ "../../node_modules/core-js/internals/document-create-element.js");
        module.exports = !DESCRIPTORS && !fails((function() {
            return Object.defineProperty(createElement("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a != 7;
        }));
    },
    "../../node_modules/core-js/internals/indexed-object.js": 
    /*!******************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/indexed-object.js ***!
  \******************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
        var classof = __webpack_require__(/*! ../internals/classof-raw */ "../../node_modules/core-js/internals/classof-raw.js");
        var split = "".split;
        module.exports = fails((function() {
            return !Object("z").propertyIsEnumerable(0);
        })) ? function(it) {
            return classof(it) == "String" ? split.call(it, "") : Object(it);
        } : Object;
    },
    "../../node_modules/core-js/internals/inherit-if-required.js": 
    /*!***********************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/inherit-if-required.js ***!
  \***********************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
        var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../../node_modules/core-js/internals/object-set-prototype-of.js");
        module.exports = function($this, dummy, Wrapper) {
            var NewTarget, NewTargetPrototype;
            if (setPrototypeOf && typeof (NewTarget = dummy.constructor) == "function" && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);
            return $this;
        };
    },
    "../../node_modules/core-js/internals/inspect-source.js": 
    /*!******************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/inspect-source.js ***!
  \******************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var store = __webpack_require__(/*! ../internals/shared-store */ "../../node_modules/core-js/internals/shared-store.js");
        var functionToString = Function.toString;
        if (typeof store.inspectSource != "function") {
            store.inspectSource = function(it) {
                return functionToString.call(it);
            };
        }
        module.exports = store.inspectSource;
    },
    "../../node_modules/core-js/internals/internal-metadata.js": 
    /*!*********************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/internal-metadata.js ***!
  \*********************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../node_modules/core-js/internals/hidden-keys.js");
        var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
        var has = __webpack_require__(/*! ../internals/has */ "../../node_modules/core-js/internals/has.js");
        var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../../node_modules/core-js/internals/object-define-property.js").f;
        var uid = __webpack_require__(/*! ../internals/uid */ "../../node_modules/core-js/internals/uid.js");
        var FREEZING = __webpack_require__(/*! ../internals/freezing */ "../../node_modules/core-js/internals/freezing.js");
        var METADATA = uid("meta");
        var id = 0;
        var isExtensible = Object.isExtensible || function() {
            return true;
        };
        var setMetadata = function(it) {
            defineProperty(it, METADATA, {
                value: {
                    objectID: "O" + ++id,
                    weakData: {}
                }
            });
        };
        var fastKey = function(it, create) {
            if (!isObject(it)) return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
            if (!has(it, METADATA)) {
                if (!isExtensible(it)) return "F";
                if (!create) return "E";
                setMetadata(it);
            }
            return it[METADATA].objectID;
        };
        var getWeakData = function(it, create) {
            if (!has(it, METADATA)) {
                if (!isExtensible(it)) return true;
                if (!create) return false;
                setMetadata(it);
            }
            return it[METADATA].weakData;
        };
        var onFreeze = function(it) {
            if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
            return it;
        };
        var meta = module.exports = {
            REQUIRED: false,
            fastKey: fastKey,
            getWeakData: getWeakData,
            onFreeze: onFreeze
        };
        hiddenKeys[METADATA] = true;
    },
    "../../node_modules/core-js/internals/internal-state.js": 
    /*!******************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/internal-state.js ***!
  \******************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "../../node_modules/core-js/internals/native-weak-map.js");
        var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
        var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
        var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../node_modules/core-js/internals/create-non-enumerable-property.js");
        var objectHas = __webpack_require__(/*! ../internals/has */ "../../node_modules/core-js/internals/has.js");
        var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../node_modules/core-js/internals/shared-key.js");
        var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../node_modules/core-js/internals/hidden-keys.js");
        var WeakMap = global.WeakMap;
        var set, get, has;
        var enforce = function(it) {
            return has(it) ? get(it) : set(it, {});
        };
        var getterFor = function(TYPE) {
            return function(it) {
                var state;
                if (!isObject(it) || (state = get(it)).type !== TYPE) {
                    throw TypeError("Incompatible receiver, " + TYPE + " required");
                }
                return state;
            };
        };
        if (NATIVE_WEAK_MAP) {
            var store = new WeakMap;
            var wmget = store.get;
            var wmhas = store.has;
            var wmset = store.set;
            set = function(it, metadata) {
                wmset.call(store, it, metadata);
                return metadata;
            };
            get = function(it) {
                return wmget.call(store, it) || {};
            };
            has = function(it) {
                return wmhas.call(store, it);
            };
        } else {
            var STATE = sharedKey("state");
            hiddenKeys[STATE] = true;
            set = function(it, metadata) {
                createNonEnumerableProperty(it, STATE, metadata);
                return metadata;
            };
            get = function(it) {
                return objectHas(it, STATE) ? it[STATE] : {};
            };
            has = function(it) {
                return objectHas(it, STATE);
            };
        }
        module.exports = {
            set: set,
            get: get,
            has: has,
            enforce: enforce,
            getterFor: getterFor
        };
    },
    "../../node_modules/core-js/internals/is-array-iterator-method.js": 
    /*!****************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/is-array-iterator-method.js ***!
  \****************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");
        var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../node_modules/core-js/internals/iterators.js");
        var ITERATOR = wellKnownSymbol("iterator");
        var ArrayPrototype = Array.prototype;
        module.exports = function(it) {
            return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
        };
    },
    "../../node_modules/core-js/internals/is-array.js": 
    /*!************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/is-array.js ***!
  \************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var classof = __webpack_require__(/*! ../internals/classof-raw */ "../../node_modules/core-js/internals/classof-raw.js");
        module.exports = Array.isArray || function isArray(arg) {
            return classof(arg) == "Array";
        };
    },
    "../../node_modules/core-js/internals/is-forced.js": 
    /*!*************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/is-forced.js ***!
  \*************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
        var replacement = /#|\.prototype\./;
        var isForced = function(feature, detection) {
            var value = data[normalize(feature)];
            return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == "function" ? fails(detection) : !!detection;
        };
        var normalize = isForced.normalize = function(string) {
            return String(string).replace(replacement, ".").toLowerCase();
        };
        var data = isForced.data = {};
        var NATIVE = isForced.NATIVE = "N";
        var POLYFILL = isForced.POLYFILL = "P";
        module.exports = isForced;
    },
    "../../node_modules/core-js/internals/is-object.js": 
    /*!*************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/is-object.js ***!
  \*************************************************************************************************************/
    /*! no static exports found */ function(module, exports) {
        module.exports = function(it) {
            return typeof it === "object" ? it !== null : typeof it === "function";
        };
    },
    "../../node_modules/core-js/internals/is-pure.js": 
    /*!***********************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/is-pure.js ***!
  \***********************************************************************************************************/
    /*! no static exports found */ function(module, exports) {
        module.exports = false;
    },
    "../../node_modules/core-js/internals/iterate.js": 
    /*!***********************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/iterate.js ***!
  \***********************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
        var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "../../node_modules/core-js/internals/is-array-iterator-method.js");
        var toLength = __webpack_require__(/*! ../internals/to-length */ "../../node_modules/core-js/internals/to-length.js");
        var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../../node_modules/core-js/internals/function-bind-context.js");
        var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "../../node_modules/core-js/internals/get-iterator-method.js");
        var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "../../node_modules/core-js/internals/call-with-safe-iteration-closing.js");
        var Result = function(stopped, result) {
            this.stopped = stopped;
            this.result = result;
        };
        var iterate = module.exports = function(iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
            var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
            var iterator, iterFn, index, length, result, next, step;
            if (IS_ITERATOR) {
                iterator = iterable;
            } else {
                iterFn = getIteratorMethod(iterable);
                if (typeof iterFn != "function") throw TypeError("Target is not iterable");
                if (isArrayIteratorMethod(iterFn)) {
                    for (index = 0, length = toLength(iterable.length); length > index; index++) {
                        result = AS_ENTRIES ? boundFunction(anObject(step = iterable[index])[0], step[1]) : boundFunction(iterable[index]);
                        if (result && result instanceof Result) return result;
                    }
                    return new Result(false);
                }
                iterator = iterFn.call(iterable);
            }
            next = iterator.next;
            while (!(step = next.call(iterator)).done) {
                result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
                if (typeof result == "object" && result && result instanceof Result) return result;
            }
            return new Result(false);
        };
        iterate.stop = function(result) {
            return new Result(true, result);
        };
    },
    "../../node_modules/core-js/internals/iterators-core.js": 
    /*!******************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/iterators-core.js ***!
  \******************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../../node_modules/core-js/internals/object-get-prototype-of.js");
        var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../node_modules/core-js/internals/create-non-enumerable-property.js");
        var has = __webpack_require__(/*! ../internals/has */ "../../node_modules/core-js/internals/has.js");
        var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");
        var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../node_modules/core-js/internals/is-pure.js");
        var ITERATOR = wellKnownSymbol("iterator");
        var BUGGY_SAFARI_ITERATORS = false;
        var returnThis = function() {
            return this;
        };
        var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
        if ([].keys) {
            arrayIterator = [].keys();
            if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true; else {
                PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
                if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
            }
        }
        if (IteratorPrototype == undefined) IteratorPrototype = {};
        if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
            createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
        }
        module.exports = {
            IteratorPrototype: IteratorPrototype,
            BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
        };
    },
    "../../node_modules/core-js/internals/iterators.js": 
    /*!*************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/iterators.js ***!
  \*************************************************************************************************************/
    /*! no static exports found */ function(module, exports) {
        module.exports = {};
    },
    "../../node_modules/core-js/internals/native-symbol.js": 
    /*!*****************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/native-symbol.js ***!
  \*****************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
        module.exports = !!Object.getOwnPropertySymbols && !fails((function() {
            return !String(Symbol());
        }));
    },
    "../../node_modules/core-js/internals/native-weak-map.js": 
    /*!*******************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/native-weak-map.js ***!
  \*******************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
        var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../../node_modules/core-js/internals/inspect-source.js");
        var WeakMap = global.WeakMap;
        module.exports = typeof WeakMap === "function" && /native code/.test(inspectSource(WeakMap));
    },
    "../../node_modules/core-js/internals/object-assign.js": 
    /*!*****************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/object-assign.js ***!
  \*****************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
        var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
        var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../../node_modules/core-js/internals/object-keys.js");
        var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../../node_modules/core-js/internals/object-get-own-property-symbols.js");
        var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../../node_modules/core-js/internals/object-property-is-enumerable.js");
        var toObject = __webpack_require__(/*! ../internals/to-object */ "../../node_modules/core-js/internals/to-object.js");
        var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../../node_modules/core-js/internals/indexed-object.js");
        var nativeAssign = Object.assign;
        var defineProperty = Object.defineProperty;
        module.exports = !nativeAssign || fails((function() {
            if (DESCRIPTORS && nativeAssign({
                b: 1
            }, nativeAssign(defineProperty({}, "a", {
                enumerable: true,
                get: function() {
                    defineProperty(this, "b", {
                        value: 3,
                        enumerable: false
                    });
                }
            }), {
                b: 2
            })).b !== 1) return true;
            var A = {};
            var B = {};
            var symbol = Symbol();
            var alphabet = "abcdefghijklmnopqrst";
            A[symbol] = 7;
            alphabet.split("").forEach((function(chr) {
                B[chr] = chr;
            }));
            return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join("") != alphabet;
        })) ? function assign(target, source) {
            var T = toObject(target);
            var argumentsLength = arguments.length;
            var index = 1;
            var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
            var propertyIsEnumerable = propertyIsEnumerableModule.f;
            while (argumentsLength > index) {
                var S = IndexedObject(arguments[index++]);
                var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
                var length = keys.length;
                var j = 0;
                var key;
                while (length > j) {
                    key = keys[j++];
                    if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
                }
            }
            return T;
        } : nativeAssign;
    },
    "../../node_modules/core-js/internals/object-create.js": 
    /*!*****************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/object-create.js ***!
  \*****************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
        var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "../../node_modules/core-js/internals/object-define-properties.js");
        var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../node_modules/core-js/internals/enum-bug-keys.js");
        var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../node_modules/core-js/internals/hidden-keys.js");
        var html = __webpack_require__(/*! ../internals/html */ "../../node_modules/core-js/internals/html.js");
        var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "../../node_modules/core-js/internals/document-create-element.js");
        var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../node_modules/core-js/internals/shared-key.js");
        var GT = ">";
        var LT = "<";
        var PROTOTYPE = "prototype";
        var SCRIPT = "script";
        var IE_PROTO = sharedKey("IE_PROTO");
        var EmptyConstructor = function() {};
        var scriptTag = function(content) {
            return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
        };
        var NullProtoObjectViaActiveX = function(activeXDocument) {
            activeXDocument.write(scriptTag(""));
            activeXDocument.close();
            var temp = activeXDocument.parentWindow.Object;
            activeXDocument = null;
            return temp;
        };
        var NullProtoObjectViaIFrame = function() {
            var iframe = documentCreateElement("iframe");
            var JS = "java" + SCRIPT + ":";
            var iframeDocument;
            iframe.style.display = "none";
            html.appendChild(iframe);
            iframe.src = String(JS);
            iframeDocument = iframe.contentWindow.document;
            iframeDocument.open();
            iframeDocument.write(scriptTag("document.F=Object"));
            iframeDocument.close();
            return iframeDocument.F;
        };
        var activeXDocument;
        var NullProtoObject = function() {
            try {
                activeXDocument = document.domain && new ActiveXObject("htmlfile");
            } catch (error) {}
            NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
            var length = enumBugKeys.length;
            while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
            return NullProtoObject();
        };
        hiddenKeys[IE_PROTO] = true;
        module.exports = Object.create || function create(O, Properties) {
            var result;
            if (O !== null) {
                EmptyConstructor[PROTOTYPE] = anObject(O);
                result = new EmptyConstructor;
                EmptyConstructor[PROTOTYPE] = null;
                result[IE_PROTO] = O;
            } else result = NullProtoObject();
            return Properties === undefined ? result : defineProperties(result, Properties);
        };
    },
    "../../node_modules/core-js/internals/object-define-properties.js": 
    /*!****************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/object-define-properties.js ***!
  \****************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
        var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../node_modules/core-js/internals/object-define-property.js");
        var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
        var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../../node_modules/core-js/internals/object-keys.js");
        module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
            anObject(O);
            var keys = objectKeys(Properties);
            var length = keys.length;
            var index = 0;
            var key;
            while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
            return O;
        };
    },
    "../../node_modules/core-js/internals/object-define-property.js": 
    /*!**************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/object-define-property.js ***!
  \**************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
        var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../../node_modules/core-js/internals/ie8-dom-define.js");
        var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
        var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../../node_modules/core-js/internals/to-primitive.js");
        var nativeDefineProperty = Object.defineProperty;
        exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
            anObject(O);
            P = toPrimitive(P, true);
            anObject(Attributes);
            if (IE8_DOM_DEFINE) try {
                return nativeDefineProperty(O, P, Attributes);
            } catch (error) {}
            if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported");
            if ("value" in Attributes) O[P] = Attributes.value;
            return O;
        };
    },
    "../../node_modules/core-js/internals/object-get-own-property-descriptor.js": 
    /*!**************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \**************************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
        var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../../node_modules/core-js/internals/object-property-is-enumerable.js");
        var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../node_modules/core-js/internals/create-property-descriptor.js");
        var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../node_modules/core-js/internals/to-indexed-object.js");
        var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../../node_modules/core-js/internals/to-primitive.js");
        var has = __webpack_require__(/*! ../internals/has */ "../../node_modules/core-js/internals/has.js");
        var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../../node_modules/core-js/internals/ie8-dom-define.js");
        var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
            O = toIndexedObject(O);
            P = toPrimitive(P, true);
            if (IE8_DOM_DEFINE) try {
                return nativeGetOwnPropertyDescriptor(O, P);
            } catch (error) {}
            if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
        };
    },
    "../../node_modules/core-js/internals/object-get-own-property-names-external.js": 
    /*!******************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \******************************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../node_modules/core-js/internals/to-indexed-object.js");
        var nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "../../node_modules/core-js/internals/object-get-own-property-names.js").f;
        var toString = {}.toString;
        var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        var getWindowNames = function(it) {
            try {
                return nativeGetOwnPropertyNames(it);
            } catch (error) {
                return windowNames.slice();
            }
        };
        module.exports.f = function getOwnPropertyNames(it) {
            return windowNames && toString.call(it) == "[object Window]" ? getWindowNames(it) : nativeGetOwnPropertyNames(toIndexedObject(it));
        };
    },
    "../../node_modules/core-js/internals/object-get-own-property-names.js": 
    /*!*********************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*********************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../../node_modules/core-js/internals/object-keys-internal.js");
        var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../node_modules/core-js/internals/enum-bug-keys.js");
        var hiddenKeys = enumBugKeys.concat("length", "prototype");
        exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
            return internalObjectKeys(O, hiddenKeys);
        };
    },
    "../../node_modules/core-js/internals/object-get-own-property-symbols.js": 
    /*!***********************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***********************************************************************************************************************************/
    /*! no static exports found */ function(module, exports) {
        exports.f = Object.getOwnPropertySymbols;
    },
    "../../node_modules/core-js/internals/object-get-prototype-of.js": 
    /*!***************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/object-get-prototype-of.js ***!
  \***************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var has = __webpack_require__(/*! ../internals/has */ "../../node_modules/core-js/internals/has.js");
        var toObject = __webpack_require__(/*! ../internals/to-object */ "../../node_modules/core-js/internals/to-object.js");
        var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../node_modules/core-js/internals/shared-key.js");
        var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "../../node_modules/core-js/internals/correct-prototype-getter.js");
        var IE_PROTO = sharedKey("IE_PROTO");
        var ObjectPrototype = Object.prototype;
        module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function(O) {
            O = toObject(O);
            if (has(O, IE_PROTO)) return O[IE_PROTO];
            if (typeof O.constructor == "function" && O instanceof O.constructor) {
                return O.constructor.prototype;
            }
            return O instanceof Object ? ObjectPrototype : null;
        };
    },
    "../../node_modules/core-js/internals/object-keys-internal.js": 
    /*!************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/object-keys-internal.js ***!
  \************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var has = __webpack_require__(/*! ../internals/has */ "../../node_modules/core-js/internals/has.js");
        var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../node_modules/core-js/internals/to-indexed-object.js");
        var indexOf = __webpack_require__(/*! ../internals/array-includes */ "../../node_modules/core-js/internals/array-includes.js").indexOf;
        var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../node_modules/core-js/internals/hidden-keys.js");
        module.exports = function(object, names) {
            var O = toIndexedObject(object);
            var i = 0;
            var result = [];
            var key;
            for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
            while (names.length > i) if (has(O, key = names[i++])) {
                ~indexOf(result, key) || result.push(key);
            }
            return result;
        };
    },
    "../../node_modules/core-js/internals/object-keys.js": 
    /*!***************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/object-keys.js ***!
  \***************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../../node_modules/core-js/internals/object-keys-internal.js");
        var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../node_modules/core-js/internals/enum-bug-keys.js");
        module.exports = Object.keys || function keys(O) {
            return internalObjectKeys(O, enumBugKeys);
        };
    },
    "../../node_modules/core-js/internals/object-property-is-enumerable.js": 
    /*!*********************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*********************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
            1: 2
        }, 1);
        exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
            var descriptor = getOwnPropertyDescriptor(this, V);
            return !!descriptor && descriptor.enumerable;
        } : nativePropertyIsEnumerable;
    },
    "../../node_modules/core-js/internals/object-prototype-accessors-forced.js": 
    /*!*************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/object-prototype-accessors-forced.js ***!
  \*************************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../node_modules/core-js/internals/is-pure.js");
        var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
        var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
        module.exports = IS_PURE || !fails((function() {
            var key = Math.random();
            __defineSetter__.call(null, key, (function() {}));
            delete global[key];
        }));
    },
    "../../node_modules/core-js/internals/object-set-prototype-of.js": 
    /*!***************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/object-set-prototype-of.js ***!
  \***************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
        var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "../../node_modules/core-js/internals/a-possible-prototype.js");
        module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var CORRECT_SETTER = false;
            var test = {};
            var setter;
            try {
                setter = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
                setter.call(test, []);
                CORRECT_SETTER = test instanceof Array;
            } catch (error) {}
            return function setPrototypeOf(O, proto) {
                anObject(O);
                aPossiblePrototype(proto);
                if (CORRECT_SETTER) setter.call(O, proto); else O.__proto__ = proto;
                return O;
            };
        }() : undefined);
    },
    "../../node_modules/core-js/internals/object-to-array.js": 
    /*!*******************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/object-to-array.js ***!
  \*******************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
        var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../../node_modules/core-js/internals/object-keys.js");
        var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../node_modules/core-js/internals/to-indexed-object.js");
        var propertyIsEnumerable = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../../node_modules/core-js/internals/object-property-is-enumerable.js").f;
        var createMethod = function(TO_ENTRIES) {
            return function(it) {
                var O = toIndexedObject(it);
                var keys = objectKeys(O);
                var length = keys.length;
                var i = 0;
                var result = [];
                var key;
                while (length > i) {
                    key = keys[i++];
                    if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
                        result.push(TO_ENTRIES ? [ key, O[key] ] : O[key]);
                    }
                }
                return result;
            };
        };
        module.exports = {
            entries: createMethod(true),
            values: createMethod(false)
        };
    },
    "../../node_modules/core-js/internals/object-to-string.js": 
    /*!********************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/object-to-string.js ***!
  \********************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "../../node_modules/core-js/internals/to-string-tag-support.js");
        var classof = __webpack_require__(/*! ../internals/classof */ "../../node_modules/core-js/internals/classof.js");
        module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
            return "[object " + classof(this) + "]";
        };
    },
    "../../node_modules/core-js/internals/own-keys.js": 
    /*!************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/own-keys.js ***!
  \************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../node_modules/core-js/internals/get-built-in.js");
        var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "../../node_modules/core-js/internals/object-get-own-property-names.js");
        var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../../node_modules/core-js/internals/object-get-own-property-symbols.js");
        var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
        module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
            var keys = getOwnPropertyNamesModule.f(anObject(it));
            var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
            return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
        };
    },
    "../../node_modules/core-js/internals/path.js": 
    /*!********************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/path.js ***!
  \********************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
        module.exports = global;
    },
    "../../node_modules/core-js/internals/redefine-all.js": 
    /*!****************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/redefine-all.js ***!
  \****************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var redefine = __webpack_require__(/*! ../internals/redefine */ "../../node_modules/core-js/internals/redefine.js");
        module.exports = function(target, src, options) {
            for (var key in src) redefine(target, key, src[key], options);
            return target;
        };
    },
    "../../node_modules/core-js/internals/redefine.js": 
    /*!************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/redefine.js ***!
  \************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
        var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../node_modules/core-js/internals/create-non-enumerable-property.js");
        var has = __webpack_require__(/*! ../internals/has */ "../../node_modules/core-js/internals/has.js");
        var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../node_modules/core-js/internals/set-global.js");
        var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../../node_modules/core-js/internals/inspect-source.js");
        var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../node_modules/core-js/internals/internal-state.js");
        var getInternalState = InternalStateModule.get;
        var enforceInternalState = InternalStateModule.enforce;
        var TEMPLATE = String(String).split("String");
        (module.exports = function(O, key, value, options) {
            var unsafe = options ? !!options.unsafe : false;
            var simple = options ? !!options.enumerable : false;
            var noTargetGet = options ? !!options.noTargetGet : false;
            if (typeof value == "function") {
                if (typeof key == "string" && !has(value, "name")) createNonEnumerableProperty(value, "name", key);
                enforceInternalState(value).source = TEMPLATE.join(typeof key == "string" ? key : "");
            }
            if (O === global) {
                if (simple) O[key] = value; else setGlobal(key, value);
                return;
            } else if (!unsafe) {
                delete O[key];
            } else if (!noTargetGet && O[key]) {
                simple = true;
            }
            if (simple) O[key] = value; else createNonEnumerableProperty(O, key, value);
        })(Function.prototype, "toString", (function toString() {
            return typeof this == "function" && getInternalState(this).source || inspectSource(this);
        }));
    },
    "../../node_modules/core-js/internals/reflect-metadata.js": 
    /*!********************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/reflect-metadata.js ***!
  \********************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var Map = __webpack_require__(/*! ../modules/es.map */ "../../node_modules/core-js/modules/es.map.js");
        var WeakMap = __webpack_require__(/*! ../modules/es.weak-map */ "../../node_modules/core-js/modules/es.weak-map.js");
        var shared = __webpack_require__(/*! ../internals/shared */ "../../node_modules/core-js/internals/shared.js");
        var metadata = shared("metadata");
        var store = metadata.store || (metadata.store = new WeakMap);
        var getOrCreateMetadataMap = function(target, targetKey, create) {
            var targetMetadata = store.get(target);
            if (!targetMetadata) {
                if (!create) return;
                store.set(target, targetMetadata = new Map);
            }
            var keyMetadata = targetMetadata.get(targetKey);
            if (!keyMetadata) {
                if (!create) return;
                targetMetadata.set(targetKey, keyMetadata = new Map);
            }
            return keyMetadata;
        };
        var ordinaryHasOwnMetadata = function(MetadataKey, O, P) {
            var metadataMap = getOrCreateMetadataMap(O, P, false);
            return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
        };
        var ordinaryGetOwnMetadata = function(MetadataKey, O, P) {
            var metadataMap = getOrCreateMetadataMap(O, P, false);
            return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
        };
        var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P) {
            getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
        };
        var ordinaryOwnMetadataKeys = function(target, targetKey) {
            var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
            var keys = [];
            if (metadataMap) metadataMap.forEach((function(_, key) {
                keys.push(key);
            }));
            return keys;
        };
        var toMetadataKey = function(it) {
            return it === undefined || typeof it == "symbol" ? it : String(it);
        };
        module.exports = {
            store: store,
            getMap: getOrCreateMetadataMap,
            has: ordinaryHasOwnMetadata,
            get: ordinaryGetOwnMetadata,
            set: ordinaryDefineOwnMetadata,
            keys: ordinaryOwnMetadataKeys,
            toKey: toMetadataKey
        };
    },
    "../../node_modules/core-js/internals/require-object-coercible.js": 
    /*!****************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/require-object-coercible.js ***!
  \****************************************************************************************************************************/
    /*! no static exports found */ function(module, exports) {
        module.exports = function(it) {
            if (it == undefined) throw TypeError("Can't call method on " + it);
            return it;
        };
    },
    "../../node_modules/core-js/internals/same-value.js": 
    /*!**************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/same-value.js ***!
  \**************************************************************************************************************/
    /*! no static exports found */ function(module, exports) {
        module.exports = Object.is || function is(x, y) {
            return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
        };
    },
    "../../node_modules/core-js/internals/set-global.js": 
    /*!**************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/set-global.js ***!
  \**************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
        var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../node_modules/core-js/internals/create-non-enumerable-property.js");
        module.exports = function(key, value) {
            try {
                createNonEnumerableProperty(global, key, value);
            } catch (error) {
                global[key] = value;
            }
            return value;
        };
    },
    "../../node_modules/core-js/internals/set-species.js": 
    /*!***************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/set-species.js ***!
  \***************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../node_modules/core-js/internals/get-built-in.js");
        var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../node_modules/core-js/internals/object-define-property.js");
        var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");
        var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
        var SPECIES = wellKnownSymbol("species");
        module.exports = function(CONSTRUCTOR_NAME) {
            var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
            var defineProperty = definePropertyModule.f;
            if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
                defineProperty(Constructor, SPECIES, {
                    configurable: true,
                    get: function() {
                        return this;
                    }
                });
            }
        };
    },
    "../../node_modules/core-js/internals/set-to-string-tag.js": 
    /*!*********************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/set-to-string-tag.js ***!
  \*********************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../../node_modules/core-js/internals/object-define-property.js").f;
        var has = __webpack_require__(/*! ../internals/has */ "../../node_modules/core-js/internals/has.js");
        var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        module.exports = function(it, TAG, STATIC) {
            if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
                defineProperty(it, TO_STRING_TAG, {
                    configurable: true,
                    value: TAG
                });
            }
        };
    },
    "../../node_modules/core-js/internals/shared-key.js": 
    /*!**************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/shared-key.js ***!
  \**************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var shared = __webpack_require__(/*! ../internals/shared */ "../../node_modules/core-js/internals/shared.js");
        var uid = __webpack_require__(/*! ../internals/uid */ "../../node_modules/core-js/internals/uid.js");
        var keys = shared("keys");
        module.exports = function(key) {
            return keys[key] || (keys[key] = uid(key));
        };
    },
    "../../node_modules/core-js/internals/shared-store.js": 
    /*!****************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/shared-store.js ***!
  \****************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
        var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../node_modules/core-js/internals/set-global.js");
        var SHARED = "__core-js_shared__";
        var store = global[SHARED] || setGlobal(SHARED, {});
        module.exports = store;
    },
    "../../node_modules/core-js/internals/shared.js": 
    /*!**********************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/shared.js ***!
  \**********************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../node_modules/core-js/internals/is-pure.js");
        var store = __webpack_require__(/*! ../internals/shared-store */ "../../node_modules/core-js/internals/shared-store.js");
        (module.exports = function(key, value) {
            return store[key] || (store[key] = value !== undefined ? value : {});
        })("versions", []).push({
            version: "3.6.4",
            mode: IS_PURE ? "pure" : "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        });
    },
    "../../node_modules/core-js/internals/string-multibyte.js": 
    /*!********************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/string-multibyte.js ***!
  \********************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../../node_modules/core-js/internals/to-integer.js");
        var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../node_modules/core-js/internals/require-object-coercible.js");
        var createMethod = function(CONVERT_TO_STRING) {
            return function($this, pos) {
                var S = String(requireObjectCoercible($this));
                var position = toInteger(pos);
                var size = S.length;
                var first, second;
                if (position < 0 || position >= size) return CONVERT_TO_STRING ? "" : undefined;
                first = S.charCodeAt(position);
                return first < 55296 || first > 56319 || position + 1 === size || (second = S.charCodeAt(position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
            };
        };
        module.exports = {
            codeAt: createMethod(false),
            charAt: createMethod(true)
        };
    },
    "../../node_modules/core-js/internals/to-absolute-index.js": 
    /*!*********************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/to-absolute-index.js ***!
  \*********************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../../node_modules/core-js/internals/to-integer.js");
        var max = Math.max;
        var min = Math.min;
        module.exports = function(index, length) {
            var integer = toInteger(index);
            return integer < 0 ? max(integer + length, 0) : min(integer, length);
        };
    },
    "../../node_modules/core-js/internals/to-indexed-object.js": 
    /*!*********************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/to-indexed-object.js ***!
  \*********************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../../node_modules/core-js/internals/indexed-object.js");
        var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../node_modules/core-js/internals/require-object-coercible.js");
        module.exports = function(it) {
            return IndexedObject(requireObjectCoercible(it));
        };
    },
    "../../node_modules/core-js/internals/to-integer.js": 
    /*!**************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/to-integer.js ***!
  \**************************************************************************************************************/
    /*! no static exports found */ function(module, exports) {
        var ceil = Math.ceil;
        var floor = Math.floor;
        module.exports = function(argument) {
            return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
        };
    },
    "../../node_modules/core-js/internals/to-length.js": 
    /*!*************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/to-length.js ***!
  \*************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../../node_modules/core-js/internals/to-integer.js");
        var min = Math.min;
        module.exports = function(argument) {
            return argument > 0 ? min(toInteger(argument), 9007199254740991) : 0;
        };
    },
    "../../node_modules/core-js/internals/to-object.js": 
    /*!*************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/to-object.js ***!
  \*************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../node_modules/core-js/internals/require-object-coercible.js");
        module.exports = function(argument) {
            return Object(requireObjectCoercible(argument));
        };
    },
    "../../node_modules/core-js/internals/to-primitive.js": 
    /*!****************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/to-primitive.js ***!
  \****************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
        module.exports = function(input, PREFERRED_STRING) {
            if (!isObject(input)) return input;
            var fn, val;
            if (PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject(val = fn.call(input))) return val;
            if (typeof (fn = input.valueOf) == "function" && !isObject(val = fn.call(input))) return val;
            if (!PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject(val = fn.call(input))) return val;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    "../../node_modules/core-js/internals/to-string-tag-support.js": 
    /*!*************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/to-string-tag-support.js ***!
  \*************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        var test = {};
        test[TO_STRING_TAG] = "z";
        module.exports = String(test) === "[object z]";
    },
    "../../node_modules/core-js/internals/uid.js": 
    /*!*******************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/uid.js ***!
  \*******************************************************************************************************/
    /*! no static exports found */ function(module, exports) {
        var id = 0;
        var postfix = Math.random();
        module.exports = function(key) {
            return "Symbol(" + String(key === undefined ? "" : key) + ")_" + (++id + postfix).toString(36);
        };
    },
    "../../node_modules/core-js/internals/use-symbol-as-uid.js": 
    /*!*********************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*********************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../../node_modules/core-js/internals/native-symbol.js");
        module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
    },
    "../../node_modules/core-js/internals/well-known-symbol-wrapped.js": 
    /*!*****************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/well-known-symbol-wrapped.js ***!
  \*****************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");
        exports.f = wellKnownSymbol;
    },
    "../../node_modules/core-js/internals/well-known-symbol.js": 
    /*!*********************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/internals/well-known-symbol.js ***!
  \*********************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
        var shared = __webpack_require__(/*! ../internals/shared */ "../../node_modules/core-js/internals/shared.js");
        var has = __webpack_require__(/*! ../internals/has */ "../../node_modules/core-js/internals/has.js");
        var uid = __webpack_require__(/*! ../internals/uid */ "../../node_modules/core-js/internals/uid.js");
        var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../../node_modules/core-js/internals/native-symbol.js");
        var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "../../node_modules/core-js/internals/use-symbol-as-uid.js");
        var WellKnownSymbolsStore = shared("wks");
        var Symbol = global.Symbol;
        var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;
        module.exports = function(name) {
            if (!has(WellKnownSymbolsStore, name)) {
                if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name]; else WellKnownSymbolsStore[name] = createWellKnownSymbol("Symbol." + name);
            }
            return WellKnownSymbolsStore[name];
        };
    },
    "../../node_modules/core-js/modules/es.array.concat.js": 
    /*!*****************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.concat.js ***!
  \*****************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
        var isArray = __webpack_require__(/*! ../internals/is-array */ "../../node_modules/core-js/internals/is-array.js");
        var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
        var toObject = __webpack_require__(/*! ../internals/to-object */ "../../node_modules/core-js/internals/to-object.js");
        var toLength = __webpack_require__(/*! ../internals/to-length */ "../../node_modules/core-js/internals/to-length.js");
        var createProperty = __webpack_require__(/*! ../internals/create-property */ "../../node_modules/core-js/internals/create-property.js");
        var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "../../node_modules/core-js/internals/array-species-create.js");
        var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "../../node_modules/core-js/internals/array-method-has-species-support.js");
        var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");
        var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../../node_modules/core-js/internals/engine-v8-version.js");
        var IS_CONCAT_SPREADABLE = wellKnownSymbol("isConcatSpreadable");
        var MAX_SAFE_INTEGER = 9007199254740991;
        var MAXIMUM_ALLOWED_INDEX_EXCEEDED = "Maximum allowed index exceeded";
        var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails((function() {
            var array = [];
            array[IS_CONCAT_SPREADABLE] = false;
            return array.concat()[0] !== array;
        }));
        var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("concat");
        var isConcatSpreadable = function(O) {
            if (!isObject(O)) return false;
            var spreadable = O[IS_CONCAT_SPREADABLE];
            return spreadable !== undefined ? !!spreadable : isArray(O);
        };
        var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;
        $({
            target: "Array",
            proto: true,
            forced: FORCED
        }, {
            concat: function concat(arg) {
                var O = toObject(this);
                var A = arraySpeciesCreate(O, 0);
                var n = 0;
                var i, k, length, len, E;
                for (i = -1, length = arguments.length; i < length; i++) {
                    E = i === -1 ? O : arguments[i];
                    if (isConcatSpreadable(E)) {
                        len = toLength(E.length);
                        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
                    } else {
                        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                        createProperty(A, n++, E);
                    }
                }
                A.length = n;
                return A;
            }
        });
    },
    "../../node_modules/core-js/modules/es.array.copy-within.js": 
    /*!**********************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.copy-within.js ***!
  \**********************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var copyWithin = __webpack_require__(/*! ../internals/array-copy-within */ "../../node_modules/core-js/internals/array-copy-within.js");
        var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../../node_modules/core-js/internals/add-to-unscopables.js");
        $({
            target: "Array",
            proto: true
        }, {
            copyWithin: copyWithin
        });
        addToUnscopables("copyWithin");
    },
    "../../node_modules/core-js/modules/es.array.every.js": 
    /*!****************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.every.js ***!
  \****************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var $every = __webpack_require__(/*! ../internals/array-iteration */ "../../node_modules/core-js/internals/array-iteration.js").every;
        var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "../../node_modules/core-js/internals/array-method-is-strict.js");
        var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "../../node_modules/core-js/internals/array-method-uses-to-length.js");
        var STRICT_METHOD = arrayMethodIsStrict("every");
        var USES_TO_LENGTH = arrayMethodUsesToLength("every");
        $({
            target: "Array",
            proto: true,
            forced: !STRICT_METHOD || !USES_TO_LENGTH
        }, {
            every: function every(callbackfn) {
                return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            }
        });
    },
    "../../node_modules/core-js/modules/es.array.fill.js": 
    /*!***************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.fill.js ***!
  \***************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var fill = __webpack_require__(/*! ../internals/array-fill */ "../../node_modules/core-js/internals/array-fill.js");
        var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../../node_modules/core-js/internals/add-to-unscopables.js");
        $({
            target: "Array",
            proto: true
        }, {
            fill: fill
        });
        addToUnscopables("fill");
    },
    "../../node_modules/core-js/modules/es.array.filter.js": 
    /*!*****************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.filter.js ***!
  \*****************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var $filter = __webpack_require__(/*! ../internals/array-iteration */ "../../node_modules/core-js/internals/array-iteration.js").filter;
        var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "../../node_modules/core-js/internals/array-method-has-species-support.js");
        var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "../../node_modules/core-js/internals/array-method-uses-to-length.js");
        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("filter");
        var USES_TO_LENGTH = arrayMethodUsesToLength("filter");
        $({
            target: "Array",
            proto: true,
            forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH
        }, {
            filter: function filter(callbackfn) {
                return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            }
        });
    },
    "../../node_modules/core-js/modules/es.array.find-index.js": 
    /*!*********************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.find-index.js ***!
  \*********************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var $findIndex = __webpack_require__(/*! ../internals/array-iteration */ "../../node_modules/core-js/internals/array-iteration.js").findIndex;
        var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../../node_modules/core-js/internals/add-to-unscopables.js");
        var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "../../node_modules/core-js/internals/array-method-uses-to-length.js");
        var FIND_INDEX = "findIndex";
        var SKIPS_HOLES = true;
        var USES_TO_LENGTH = arrayMethodUsesToLength(FIND_INDEX);
        if (FIND_INDEX in []) Array(1)[FIND_INDEX]((function() {
            SKIPS_HOLES = false;
        }));
        $({
            target: "Array",
            proto: true,
            forced: SKIPS_HOLES || !USES_TO_LENGTH
        }, {
            findIndex: function findIndex(callbackfn) {
                return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            }
        });
        addToUnscopables(FIND_INDEX);
    },
    "../../node_modules/core-js/modules/es.array.find.js": 
    /*!***************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.find.js ***!
  \***************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var $find = __webpack_require__(/*! ../internals/array-iteration */ "../../node_modules/core-js/internals/array-iteration.js").find;
        var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../../node_modules/core-js/internals/add-to-unscopables.js");
        var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "../../node_modules/core-js/internals/array-method-uses-to-length.js");
        var FIND = "find";
        var SKIPS_HOLES = true;
        var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);
        if (FIND in []) Array(1)[FIND]((function() {
            SKIPS_HOLES = false;
        }));
        $({
            target: "Array",
            proto: true,
            forced: SKIPS_HOLES || !USES_TO_LENGTH
        }, {
            find: function find(callbackfn) {
                return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            }
        });
        addToUnscopables(FIND);
    },
    "../../node_modules/core-js/modules/es.array.flat-map.js": 
    /*!*******************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.flat-map.js ***!
  \*******************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var flattenIntoArray = __webpack_require__(/*! ../internals/flatten-into-array */ "../../node_modules/core-js/internals/flatten-into-array.js");
        var toObject = __webpack_require__(/*! ../internals/to-object */ "../../node_modules/core-js/internals/to-object.js");
        var toLength = __webpack_require__(/*! ../internals/to-length */ "../../node_modules/core-js/internals/to-length.js");
        var aFunction = __webpack_require__(/*! ../internals/a-function */ "../../node_modules/core-js/internals/a-function.js");
        var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "../../node_modules/core-js/internals/array-species-create.js");
        $({
            target: "Array",
            proto: true
        }, {
            flatMap: function flatMap(callbackfn) {
                var O = toObject(this);
                var sourceLen = toLength(O.length);
                var A;
                aFunction(callbackfn);
                A = arraySpeciesCreate(O, 0);
                A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                return A;
            }
        });
    },
    "../../node_modules/core-js/modules/es.array.flat.js": 
    /*!***************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.flat.js ***!
  \***************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var flattenIntoArray = __webpack_require__(/*! ../internals/flatten-into-array */ "../../node_modules/core-js/internals/flatten-into-array.js");
        var toObject = __webpack_require__(/*! ../internals/to-object */ "../../node_modules/core-js/internals/to-object.js");
        var toLength = __webpack_require__(/*! ../internals/to-length */ "../../node_modules/core-js/internals/to-length.js");
        var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../../node_modules/core-js/internals/to-integer.js");
        var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "../../node_modules/core-js/internals/array-species-create.js");
        $({
            target: "Array",
            proto: true
        }, {
            flat: function flat() {
                var depthArg = arguments.length ? arguments[0] : undefined;
                var O = toObject(this);
                var sourceLen = toLength(O.length);
                var A = arraySpeciesCreate(O, 0);
                A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
                return A;
            }
        });
    },
    "../../node_modules/core-js/modules/es.array.for-each.js": 
    /*!*******************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.for-each.js ***!
  \*******************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var forEach = __webpack_require__(/*! ../internals/array-for-each */ "../../node_modules/core-js/internals/array-for-each.js");
        $({
            target: "Array",
            proto: true,
            forced: [].forEach != forEach
        }, {
            forEach: forEach
        });
    },
    "../../node_modules/core-js/modules/es.array.from.js": 
    /*!***************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.from.js ***!
  \***************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var from = __webpack_require__(/*! ../internals/array-from */ "../../node_modules/core-js/internals/array-from.js");
        var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "../../node_modules/core-js/internals/check-correctness-of-iteration.js");
        var INCORRECT_ITERATION = !checkCorrectnessOfIteration((function(iterable) {
            Array.from(iterable);
        }));
        $({
            target: "Array",
            stat: true,
            forced: INCORRECT_ITERATION
        }, {
            from: from
        });
    },
    "../../node_modules/core-js/modules/es.array.includes.js": 
    /*!*******************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.includes.js ***!
  \*******************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var $includes = __webpack_require__(/*! ../internals/array-includes */ "../../node_modules/core-js/internals/array-includes.js").includes;
        var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../../node_modules/core-js/internals/add-to-unscopables.js");
        var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "../../node_modules/core-js/internals/array-method-uses-to-length.js");
        var USES_TO_LENGTH = arrayMethodUsesToLength("indexOf", {
            ACCESSORS: true,
            1: 0
        });
        $({
            target: "Array",
            proto: true,
            forced: !USES_TO_LENGTH
        }, {
            includes: function includes(el) {
                return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
            }
        });
        addToUnscopables("includes");
    },
    "../../node_modules/core-js/modules/es.array.index-of.js": 
    /*!*******************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.index-of.js ***!
  \*******************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "../../node_modules/core-js/internals/array-includes.js").indexOf;
        var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "../../node_modules/core-js/internals/array-method-is-strict.js");
        var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "../../node_modules/core-js/internals/array-method-uses-to-length.js");
        var nativeIndexOf = [].indexOf;
        var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [ 1 ].indexOf(1, -0) < 0;
        var STRICT_METHOD = arrayMethodIsStrict("indexOf");
        var USES_TO_LENGTH = arrayMethodUsesToLength("indexOf", {
            ACCESSORS: true,
            1: 0
        });
        $({
            target: "Array",
            proto: true,
            forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH
        }, {
            indexOf: function indexOf(searchElement) {
                return NEGATIVE_ZERO ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
            }
        });
    },
    "../../node_modules/core-js/modules/es.array.is-array.js": 
    /*!*******************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.is-array.js ***!
  \*******************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var isArray = __webpack_require__(/*! ../internals/is-array */ "../../node_modules/core-js/internals/is-array.js");
        $({
            target: "Array",
            stat: true
        }, {
            isArray: isArray
        });
    },
    "../../node_modules/core-js/modules/es.array.iterator.js": 
    /*!*******************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.iterator.js ***!
  \*******************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../node_modules/core-js/internals/to-indexed-object.js");
        var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../../node_modules/core-js/internals/add-to-unscopables.js");
        var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../node_modules/core-js/internals/iterators.js");
        var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../node_modules/core-js/internals/internal-state.js");
        var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "../../node_modules/core-js/internals/define-iterator.js");
        var ARRAY_ITERATOR = "Array Iterator";
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
        module.exports = defineIterator(Array, "Array", (function(iterated, kind) {
            setInternalState(this, {
                type: ARRAY_ITERATOR,
                target: toIndexedObject(iterated),
                index: 0,
                kind: kind
            });
        }), (function() {
            var state = getInternalState(this);
            var target = state.target;
            var kind = state.kind;
            var index = state.index++;
            if (!target || index >= target.length) {
                state.target = undefined;
                return {
                    value: undefined,
                    done: true
                };
            }
            if (kind == "keys") return {
                value: index,
                done: false
            };
            if (kind == "values") return {
                value: target[index],
                done: false
            };
            return {
                value: [ index, target[index] ],
                done: false
            };
        }), "values");
        Iterators.Arguments = Iterators.Array;
        addToUnscopables("keys");
        addToUnscopables("values");
        addToUnscopables("entries");
    },
    "../../node_modules/core-js/modules/es.array.join.js": 
    /*!***************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.join.js ***!
  \***************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../../node_modules/core-js/internals/indexed-object.js");
        var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../node_modules/core-js/internals/to-indexed-object.js");
        var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "../../node_modules/core-js/internals/array-method-is-strict.js");
        var nativeJoin = [].join;
        var ES3_STRINGS = IndexedObject != Object;
        var STRICT_METHOD = arrayMethodIsStrict("join", ",");
        $({
            target: "Array",
            proto: true,
            forced: ES3_STRINGS || !STRICT_METHOD
        }, {
            join: function join(separator) {
                return nativeJoin.call(toIndexedObject(this), separator === undefined ? "," : separator);
            }
        });
    },
    "../../node_modules/core-js/modules/es.array.last-index-of.js": 
    /*!************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.last-index-of.js ***!
  \************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var lastIndexOf = __webpack_require__(/*! ../internals/array-last-index-of */ "../../node_modules/core-js/internals/array-last-index-of.js");
        $({
            target: "Array",
            proto: true,
            forced: lastIndexOf !== [].lastIndexOf
        }, {
            lastIndexOf: lastIndexOf
        });
    },
    "../../node_modules/core-js/modules/es.array.map.js": 
    /*!**************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.map.js ***!
  \**************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var $map = __webpack_require__(/*! ../internals/array-iteration */ "../../node_modules/core-js/internals/array-iteration.js").map;
        var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "../../node_modules/core-js/internals/array-method-has-species-support.js");
        var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "../../node_modules/core-js/internals/array-method-uses-to-length.js");
        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("map");
        var USES_TO_LENGTH = arrayMethodUsesToLength("map");
        $({
            target: "Array",
            proto: true,
            forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH
        }, {
            map: function map(callbackfn) {
                return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            }
        });
    },
    "../../node_modules/core-js/modules/es.array.of.js": 
    /*!*************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.of.js ***!
  \*************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
        var createProperty = __webpack_require__(/*! ../internals/create-property */ "../../node_modules/core-js/internals/create-property.js");
        var ISNT_GENERIC = fails((function() {
            function F() {}
            return !(Array.of.call(F) instanceof F);
        }));
        $({
            target: "Array",
            stat: true,
            forced: ISNT_GENERIC
        }, {
            of: function of() {
                var index = 0;
                var argumentsLength = arguments.length;
                var result = new (typeof this == "function" ? this : Array)(argumentsLength);
                while (argumentsLength > index) createProperty(result, index, arguments[index++]);
                result.length = argumentsLength;
                return result;
            }
        });
    },
    "../../node_modules/core-js/modules/es.array.reduce-right.js": 
    /*!***********************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.reduce-right.js ***!
  \***********************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var $reduceRight = __webpack_require__(/*! ../internals/array-reduce */ "../../node_modules/core-js/internals/array-reduce.js").right;
        var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "../../node_modules/core-js/internals/array-method-is-strict.js");
        var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "../../node_modules/core-js/internals/array-method-uses-to-length.js");
        var STRICT_METHOD = arrayMethodIsStrict("reduceRight");
        var USES_TO_LENGTH = arrayMethodUsesToLength("reduce", {
            1: 0
        });
        $({
            target: "Array",
            proto: true,
            forced: !STRICT_METHOD || !USES_TO_LENGTH
        }, {
            reduceRight: function reduceRight(callbackfn) {
                return $reduceRight(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
            }
        });
    },
    "../../node_modules/core-js/modules/es.array.reduce.js": 
    /*!*****************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.reduce.js ***!
  \*****************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var $reduce = __webpack_require__(/*! ../internals/array-reduce */ "../../node_modules/core-js/internals/array-reduce.js").left;
        var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "../../node_modules/core-js/internals/array-method-is-strict.js");
        var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "../../node_modules/core-js/internals/array-method-uses-to-length.js");
        var STRICT_METHOD = arrayMethodIsStrict("reduce");
        var USES_TO_LENGTH = arrayMethodUsesToLength("reduce", {
            1: 0
        });
        $({
            target: "Array",
            proto: true,
            forced: !STRICT_METHOD || !USES_TO_LENGTH
        }, {
            reduce: function reduce(callbackfn) {
                return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
            }
        });
    },
    "../../node_modules/core-js/modules/es.array.reverse.js": 
    /*!******************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.reverse.js ***!
  \******************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var isArray = __webpack_require__(/*! ../internals/is-array */ "../../node_modules/core-js/internals/is-array.js");
        var nativeReverse = [].reverse;
        var test = [ 1, 2 ];
        $({
            target: "Array",
            proto: true,
            forced: String(test) === String(test.reverse())
        }, {
            reverse: function reverse() {
                if (isArray(this)) this.length = this.length;
                return nativeReverse.call(this);
            }
        });
    },
    "../../node_modules/core-js/modules/es.array.slice.js": 
    /*!****************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.slice.js ***!
  \****************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
        var isArray = __webpack_require__(/*! ../internals/is-array */ "../../node_modules/core-js/internals/is-array.js");
        var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../../node_modules/core-js/internals/to-absolute-index.js");
        var toLength = __webpack_require__(/*! ../internals/to-length */ "../../node_modules/core-js/internals/to-length.js");
        var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../node_modules/core-js/internals/to-indexed-object.js");
        var createProperty = __webpack_require__(/*! ../internals/create-property */ "../../node_modules/core-js/internals/create-property.js");
        var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");
        var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "../../node_modules/core-js/internals/array-method-has-species-support.js");
        var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "../../node_modules/core-js/internals/array-method-uses-to-length.js");
        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("slice");
        var USES_TO_LENGTH = arrayMethodUsesToLength("slice", {
            ACCESSORS: true,
            0: 0,
            1: 2
        });
        var SPECIES = wellKnownSymbol("species");
        var nativeSlice = [].slice;
        var max = Math.max;
        $({
            target: "Array",
            proto: true,
            forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH
        }, {
            slice: function slice(start, end) {
                var O = toIndexedObject(this);
                var length = toLength(O.length);
                var k = toAbsoluteIndex(start, length);
                var fin = toAbsoluteIndex(end === undefined ? length : end, length);
                var Constructor, result, n;
                if (isArray(O)) {
                    Constructor = O.constructor;
                    if (typeof Constructor == "function" && (Constructor === Array || isArray(Constructor.prototype))) {
                        Constructor = undefined;
                    } else if (isObject(Constructor)) {
                        Constructor = Constructor[SPECIES];
                        if (Constructor === null) Constructor = undefined;
                    }
                    if (Constructor === Array || Constructor === undefined) {
                        return nativeSlice.call(O, k, fin);
                    }
                }
                result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
                for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
                result.length = n;
                return result;
            }
        });
    },
    "../../node_modules/core-js/modules/es.array.some.js": 
    /*!***************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.some.js ***!
  \***************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var $some = __webpack_require__(/*! ../internals/array-iteration */ "../../node_modules/core-js/internals/array-iteration.js").some;
        var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "../../node_modules/core-js/internals/array-method-is-strict.js");
        var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "../../node_modules/core-js/internals/array-method-uses-to-length.js");
        var STRICT_METHOD = arrayMethodIsStrict("some");
        var USES_TO_LENGTH = arrayMethodUsesToLength("some");
        $({
            target: "Array",
            proto: true,
            forced: !STRICT_METHOD || !USES_TO_LENGTH
        }, {
            some: function some(callbackfn) {
                return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            }
        });
    },
    "../../node_modules/core-js/modules/es.array.sort.js": 
    /*!***************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.sort.js ***!
  \***************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var aFunction = __webpack_require__(/*! ../internals/a-function */ "../../node_modules/core-js/internals/a-function.js");
        var toObject = __webpack_require__(/*! ../internals/to-object */ "../../node_modules/core-js/internals/to-object.js");
        var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
        var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "../../node_modules/core-js/internals/array-method-is-strict.js");
        var test = [];
        var nativeSort = test.sort;
        var FAILS_ON_UNDEFINED = fails((function() {
            test.sort(undefined);
        }));
        var FAILS_ON_NULL = fails((function() {
            test.sort(null);
        }));
        var STRICT_METHOD = arrayMethodIsStrict("sort");
        var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD;
        $({
            target: "Array",
            proto: true,
            forced: FORCED
        }, {
            sort: function sort(comparefn) {
                return comparefn === undefined ? nativeSort.call(toObject(this)) : nativeSort.call(toObject(this), aFunction(comparefn));
            }
        });
    },
    "../../node_modules/core-js/modules/es.array.species.js": 
    /*!******************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.species.js ***!
  \******************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var setSpecies = __webpack_require__(/*! ../internals/set-species */ "../../node_modules/core-js/internals/set-species.js");
        setSpecies("Array");
    },
    "../../node_modules/core-js/modules/es.array.splice.js": 
    /*!*****************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.splice.js ***!
  \*****************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../../node_modules/core-js/internals/to-absolute-index.js");
        var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../../node_modules/core-js/internals/to-integer.js");
        var toLength = __webpack_require__(/*! ../internals/to-length */ "../../node_modules/core-js/internals/to-length.js");
        var toObject = __webpack_require__(/*! ../internals/to-object */ "../../node_modules/core-js/internals/to-object.js");
        var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "../../node_modules/core-js/internals/array-species-create.js");
        var createProperty = __webpack_require__(/*! ../internals/create-property */ "../../node_modules/core-js/internals/create-property.js");
        var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "../../node_modules/core-js/internals/array-method-has-species-support.js");
        var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "../../node_modules/core-js/internals/array-method-uses-to-length.js");
        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("splice");
        var USES_TO_LENGTH = arrayMethodUsesToLength("splice", {
            ACCESSORS: true,
            0: 0,
            1: 2
        });
        var max = Math.max;
        var min = Math.min;
        var MAX_SAFE_INTEGER = 9007199254740991;
        var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = "Maximum allowed length exceeded";
        $({
            target: "Array",
            proto: true,
            forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH
        }, {
            splice: function splice(start, deleteCount) {
                var O = toObject(this);
                var len = toLength(O.length);
                var actualStart = toAbsoluteIndex(start, len);
                var argumentsLength = arguments.length;
                var insertCount, actualDeleteCount, A, k, from, to;
                if (argumentsLength === 0) {
                    insertCount = actualDeleteCount = 0;
                } else if (argumentsLength === 1) {
                    insertCount = 0;
                    actualDeleteCount = len - actualStart;
                } else {
                    insertCount = argumentsLength - 2;
                    actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
                }
                if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
                    throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
                }
                A = arraySpeciesCreate(O, actualDeleteCount);
                for (k = 0; k < actualDeleteCount; k++) {
                    from = actualStart + k;
                    if (from in O) createProperty(A, k, O[from]);
                }
                A.length = actualDeleteCount;
                if (insertCount < actualDeleteCount) {
                    for (k = actualStart; k < len - actualDeleteCount; k++) {
                        from = k + actualDeleteCount;
                        to = k + insertCount;
                        if (from in O) O[to] = O[from]; else delete O[to];
                    }
                    for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
                } else if (insertCount > actualDeleteCount) {
                    for (k = len - actualDeleteCount; k > actualStart; k--) {
                        from = k + actualDeleteCount - 1;
                        to = k + insertCount - 1;
                        if (from in O) O[to] = O[from]; else delete O[to];
                    }
                }
                for (k = 0; k < insertCount; k++) {
                    O[k + actualStart] = arguments[k + 2];
                }
                O.length = len - actualDeleteCount + insertCount;
                return A;
            }
        });
    },
    "../../node_modules/core-js/modules/es.array.unscopables.flat-map.js": 
    /*!*******************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.unscopables.flat-map.js ***!
  \*******************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../../node_modules/core-js/internals/add-to-unscopables.js");
        addToUnscopables("flatMap");
    },
    "../../node_modules/core-js/modules/es.array.unscopables.flat.js": 
    /*!***************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.array.unscopables.flat.js ***!
  \***************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../../node_modules/core-js/internals/add-to-unscopables.js");
        addToUnscopables("flat");
    },
    "../../node_modules/core-js/modules/es.json.to-string-tag.js": 
    /*!***********************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.json.to-string-tag.js ***!
  \***********************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
        var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../node_modules/core-js/internals/set-to-string-tag.js");
        setToStringTag(global.JSON, "JSON", true);
    },
    "../../node_modules/core-js/modules/es.map.js": 
    /*!********************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.map.js ***!
  \********************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var collection = __webpack_require__(/*! ../internals/collection */ "../../node_modules/core-js/internals/collection.js");
        var collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ "../../node_modules/core-js/internals/collection-strong.js");
        module.exports = collection("Map", (function(init) {
            return function Map() {
                return init(this, arguments.length ? arguments[0] : undefined);
            };
        }), collectionStrong);
    },
    "../../node_modules/core-js/modules/es.math.to-string-tag.js": 
    /*!***********************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.math.to-string-tag.js ***!
  \***********************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../node_modules/core-js/internals/set-to-string-tag.js");
        setToStringTag(Math, "Math", true);
    },
    "../../node_modules/core-js/modules/es.object.assign.js": 
    /*!******************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.object.assign.js ***!
  \******************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var assign = __webpack_require__(/*! ../internals/object-assign */ "../../node_modules/core-js/internals/object-assign.js");
        $({
            target: "Object",
            stat: true,
            forced: Object.assign !== assign
        }, {
            assign: assign
        });
    },
    "../../node_modules/core-js/modules/es.object.create.js": 
    /*!******************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.object.create.js ***!
  \******************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
        var create = __webpack_require__(/*! ../internals/object-create */ "../../node_modules/core-js/internals/object-create.js");
        $({
            target: "Object",
            stat: true,
            sham: !DESCRIPTORS
        }, {
            create: create
        });
    },
    "../../node_modules/core-js/modules/es.object.define-getter.js": 
    /*!*************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.object.define-getter.js ***!
  \*************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
        var FORCED = __webpack_require__(/*! ../internals/object-prototype-accessors-forced */ "../../node_modules/core-js/internals/object-prototype-accessors-forced.js");
        var toObject = __webpack_require__(/*! ../internals/to-object */ "../../node_modules/core-js/internals/to-object.js");
        var aFunction = __webpack_require__(/*! ../internals/a-function */ "../../node_modules/core-js/internals/a-function.js");
        var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../node_modules/core-js/internals/object-define-property.js");
        if (DESCRIPTORS) {
            $({
                target: "Object",
                proto: true,
                forced: FORCED
            }, {
                __defineGetter__: function __defineGetter__(P, getter) {
                    definePropertyModule.f(toObject(this), P, {
                        get: aFunction(getter),
                        enumerable: true,
                        configurable: true
                    });
                }
            });
        }
    },
    "../../node_modules/core-js/modules/es.object.define-properties.js": 
    /*!*****************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.object.define-properties.js ***!
  \*****************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
        var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "../../node_modules/core-js/internals/object-define-properties.js");
        $({
            target: "Object",
            stat: true,
            forced: !DESCRIPTORS,
            sham: !DESCRIPTORS
        }, {
            defineProperties: defineProperties
        });
    },
    "../../node_modules/core-js/modules/es.object.define-property.js": 
    /*!***************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.object.define-property.js ***!
  \***************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
        var objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ "../../node_modules/core-js/internals/object-define-property.js");
        $({
            target: "Object",
            stat: true,
            forced: !DESCRIPTORS,
            sham: !DESCRIPTORS
        }, {
            defineProperty: objectDefinePropertyModile.f
        });
    },
    "../../node_modules/core-js/modules/es.object.define-setter.js": 
    /*!*************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.object.define-setter.js ***!
  \*************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
        var FORCED = __webpack_require__(/*! ../internals/object-prototype-accessors-forced */ "../../node_modules/core-js/internals/object-prototype-accessors-forced.js");
        var toObject = __webpack_require__(/*! ../internals/to-object */ "../../node_modules/core-js/internals/to-object.js");
        var aFunction = __webpack_require__(/*! ../internals/a-function */ "../../node_modules/core-js/internals/a-function.js");
        var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../node_modules/core-js/internals/object-define-property.js");
        if (DESCRIPTORS) {
            $({
                target: "Object",
                proto: true,
                forced: FORCED
            }, {
                __defineSetter__: function __defineSetter__(P, setter) {
                    definePropertyModule.f(toObject(this), P, {
                        set: aFunction(setter),
                        enumerable: true,
                        configurable: true
                    });
                }
            });
        }
    },
    "../../node_modules/core-js/modules/es.object.entries.js": 
    /*!*******************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.object.entries.js ***!
  \*******************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var $entries = __webpack_require__(/*! ../internals/object-to-array */ "../../node_modules/core-js/internals/object-to-array.js").entries;
        $({
            target: "Object",
            stat: true
        }, {
            entries: function entries(O) {
                return $entries(O);
            }
        });
    },
    "../../node_modules/core-js/modules/es.object.freeze.js": 
    /*!******************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.object.freeze.js ***!
  \******************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var FREEZING = __webpack_require__(/*! ../internals/freezing */ "../../node_modules/core-js/internals/freezing.js");
        var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
        var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
        var onFreeze = __webpack_require__(/*! ../internals/internal-metadata */ "../../node_modules/core-js/internals/internal-metadata.js").onFreeze;
        var nativeFreeze = Object.freeze;
        var FAILS_ON_PRIMITIVES = fails((function() {
            nativeFreeze(1);
        }));
        $({
            target: "Object",
            stat: true,
            forced: FAILS_ON_PRIMITIVES,
            sham: !FREEZING
        }, {
            freeze: function freeze(it) {
                return nativeFreeze && isObject(it) ? nativeFreeze(onFreeze(it)) : it;
            }
        });
    },
    "../../node_modules/core-js/modules/es.object.from-entries.js": 
    /*!************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.object.from-entries.js ***!
  \************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var iterate = __webpack_require__(/*! ../internals/iterate */ "../../node_modules/core-js/internals/iterate.js");
        var createProperty = __webpack_require__(/*! ../internals/create-property */ "../../node_modules/core-js/internals/create-property.js");
        $({
            target: "Object",
            stat: true
        }, {
            fromEntries: function fromEntries(iterable) {
                var obj = {};
                iterate(iterable, (function(k, v) {
                    createProperty(obj, k, v);
                }), undefined, true);
                return obj;
            }
        });
    },
    "../../node_modules/core-js/modules/es.object.get-own-property-descriptor.js": 
    /*!***************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.object.get-own-property-descriptor.js ***!
  \***************************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
        var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../node_modules/core-js/internals/to-indexed-object.js");
        var nativeGetOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
        var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
        var FAILS_ON_PRIMITIVES = fails((function() {
            nativeGetOwnPropertyDescriptor(1);
        }));
        var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;
        $({
            target: "Object",
            stat: true,
            forced: FORCED,
            sham: !DESCRIPTORS
        }, {
            getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
                return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
            }
        });
    },
    "../../node_modules/core-js/modules/es.object.get-own-property-descriptors.js": 
    /*!****************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.object.get-own-property-descriptors.js ***!
  \****************************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
        var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "../../node_modules/core-js/internals/own-keys.js");
        var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../node_modules/core-js/internals/to-indexed-object.js");
        var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../node_modules/core-js/internals/object-get-own-property-descriptor.js");
        var createProperty = __webpack_require__(/*! ../internals/create-property */ "../../node_modules/core-js/internals/create-property.js");
        $({
            target: "Object",
            stat: true,
            sham: !DESCRIPTORS
        }, {
            getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
                var O = toIndexedObject(object);
                var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
                var keys = ownKeys(O);
                var result = {};
                var index = 0;
                var key, descriptor;
                while (keys.length > index) {
                    descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
                    if (descriptor !== undefined) createProperty(result, key, descriptor);
                }
                return result;
            }
        });
    },
    "../../node_modules/core-js/modules/es.object.get-own-property-names.js": 
    /*!**********************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.object.get-own-property-names.js ***!
  \**********************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
        var nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "../../node_modules/core-js/internals/object-get-own-property-names-external.js").f;
        var FAILS_ON_PRIMITIVES = fails((function() {
            return !Object.getOwnPropertyNames(1);
        }));
        $({
            target: "Object",
            stat: true,
            forced: FAILS_ON_PRIMITIVES
        }, {
            getOwnPropertyNames: nativeGetOwnPropertyNames
        });
    },
    "../../node_modules/core-js/modules/es.object.get-prototype-of.js": 
    /*!****************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.object.get-prototype-of.js ***!
  \****************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
        var toObject = __webpack_require__(/*! ../internals/to-object */ "../../node_modules/core-js/internals/to-object.js");
        var nativeGetPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../../node_modules/core-js/internals/object-get-prototype-of.js");
        var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "../../node_modules/core-js/internals/correct-prototype-getter.js");
        var FAILS_ON_PRIMITIVES = fails((function() {
            nativeGetPrototypeOf(1);
        }));
        $({
            target: "Object",
            stat: true,
            forced: FAILS_ON_PRIMITIVES,
            sham: !CORRECT_PROTOTYPE_GETTER
        }, {
            getPrototypeOf: function getPrototypeOf(it) {
                return nativeGetPrototypeOf(toObject(it));
            }
        });
    },
    "../../node_modules/core-js/modules/es.object.is-extensible.js": 
    /*!*************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.object.is-extensible.js ***!
  \*************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
        var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
        var nativeIsExtensible = Object.isExtensible;
        var FAILS_ON_PRIMITIVES = fails((function() {
            nativeIsExtensible(1);
        }));
        $({
            target: "Object",
            stat: true,
            forced: FAILS_ON_PRIMITIVES
        }, {
            isExtensible: function isExtensible(it) {
                return isObject(it) ? nativeIsExtensible ? nativeIsExtensible(it) : true : false;
            }
        });
    },
    "../../node_modules/core-js/modules/es.object.is-frozen.js": 
    /*!*********************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.object.is-frozen.js ***!
  \*********************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
        var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
        var nativeIsFrozen = Object.isFrozen;
        var FAILS_ON_PRIMITIVES = fails((function() {
            nativeIsFrozen(1);
        }));
        $({
            target: "Object",
            stat: true,
            forced: FAILS_ON_PRIMITIVES
        }, {
            isFrozen: function isFrozen(it) {
                return isObject(it) ? nativeIsFrozen ? nativeIsFrozen(it) : false : true;
            }
        });
    },
    "../../node_modules/core-js/modules/es.object.is-sealed.js": 
    /*!*********************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.object.is-sealed.js ***!
  \*********************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
        var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
        var nativeIsSealed = Object.isSealed;
        var FAILS_ON_PRIMITIVES = fails((function() {
            nativeIsSealed(1);
        }));
        $({
            target: "Object",
            stat: true,
            forced: FAILS_ON_PRIMITIVES
        }, {
            isSealed: function isSealed(it) {
                return isObject(it) ? nativeIsSealed ? nativeIsSealed(it) : false : true;
            }
        });
    },
    "../../node_modules/core-js/modules/es.object.is.js": 
    /*!**************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.object.is.js ***!
  \**************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var is = __webpack_require__(/*! ../internals/same-value */ "../../node_modules/core-js/internals/same-value.js");
        $({
            target: "Object",
            stat: true
        }, {
            is: is
        });
    },
    "../../node_modules/core-js/modules/es.object.keys.js": 
    /*!****************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.object.keys.js ***!
  \****************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var toObject = __webpack_require__(/*! ../internals/to-object */ "../../node_modules/core-js/internals/to-object.js");
        var nativeKeys = __webpack_require__(/*! ../internals/object-keys */ "../../node_modules/core-js/internals/object-keys.js");
        var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
        var FAILS_ON_PRIMITIVES = fails((function() {
            nativeKeys(1);
        }));
        $({
            target: "Object",
            stat: true,
            forced: FAILS_ON_PRIMITIVES
        }, {
            keys: function keys(it) {
                return nativeKeys(toObject(it));
            }
        });
    },
    "../../node_modules/core-js/modules/es.object.lookup-getter.js": 
    /*!*************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.object.lookup-getter.js ***!
  \*************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
        var FORCED = __webpack_require__(/*! ../internals/object-prototype-accessors-forced */ "../../node_modules/core-js/internals/object-prototype-accessors-forced.js");
        var toObject = __webpack_require__(/*! ../internals/to-object */ "../../node_modules/core-js/internals/to-object.js");
        var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../../node_modules/core-js/internals/to-primitive.js");
        var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../../node_modules/core-js/internals/object-get-prototype-of.js");
        var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
        if (DESCRIPTORS) {
            $({
                target: "Object",
                proto: true,
                forced: FORCED
            }, {
                __lookupGetter__: function __lookupGetter__(P) {
                    var O = toObject(this);
                    var key = toPrimitive(P, true);
                    var desc;
                    do {
                        if (desc = getOwnPropertyDescriptor(O, key)) return desc.get;
                    } while (O = getPrototypeOf(O));
                }
            });
        }
    },
    "../../node_modules/core-js/modules/es.object.lookup-setter.js": 
    /*!*************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.object.lookup-setter.js ***!
  \*************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
        var FORCED = __webpack_require__(/*! ../internals/object-prototype-accessors-forced */ "../../node_modules/core-js/internals/object-prototype-accessors-forced.js");
        var toObject = __webpack_require__(/*! ../internals/to-object */ "../../node_modules/core-js/internals/to-object.js");
        var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../../node_modules/core-js/internals/to-primitive.js");
        var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../../node_modules/core-js/internals/object-get-prototype-of.js");
        var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
        if (DESCRIPTORS) {
            $({
                target: "Object",
                proto: true,
                forced: FORCED
            }, {
                __lookupSetter__: function __lookupSetter__(P) {
                    var O = toObject(this);
                    var key = toPrimitive(P, true);
                    var desc;
                    do {
                        if (desc = getOwnPropertyDescriptor(O, key)) return desc.set;
                    } while (O = getPrototypeOf(O));
                }
            });
        }
    },
    "../../node_modules/core-js/modules/es.object.prevent-extensions.js": 
    /*!******************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.object.prevent-extensions.js ***!
  \******************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
        var onFreeze = __webpack_require__(/*! ../internals/internal-metadata */ "../../node_modules/core-js/internals/internal-metadata.js").onFreeze;
        var FREEZING = __webpack_require__(/*! ../internals/freezing */ "../../node_modules/core-js/internals/freezing.js");
        var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
        var nativePreventExtensions = Object.preventExtensions;
        var FAILS_ON_PRIMITIVES = fails((function() {
            nativePreventExtensions(1);
        }));
        $({
            target: "Object",
            stat: true,
            forced: FAILS_ON_PRIMITIVES,
            sham: !FREEZING
        }, {
            preventExtensions: function preventExtensions(it) {
                return nativePreventExtensions && isObject(it) ? nativePreventExtensions(onFreeze(it)) : it;
            }
        });
    },
    "../../node_modules/core-js/modules/es.object.seal.js": 
    /*!****************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.object.seal.js ***!
  \****************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
        var onFreeze = __webpack_require__(/*! ../internals/internal-metadata */ "../../node_modules/core-js/internals/internal-metadata.js").onFreeze;
        var FREEZING = __webpack_require__(/*! ../internals/freezing */ "../../node_modules/core-js/internals/freezing.js");
        var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
        var nativeSeal = Object.seal;
        var FAILS_ON_PRIMITIVES = fails((function() {
            nativeSeal(1);
        }));
        $({
            target: "Object",
            stat: true,
            forced: FAILS_ON_PRIMITIVES,
            sham: !FREEZING
        }, {
            seal: function seal(it) {
                return nativeSeal && isObject(it) ? nativeSeal(onFreeze(it)) : it;
            }
        });
    },
    "../../node_modules/core-js/modules/es.object.set-prototype-of.js": 
    /*!****************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.object.set-prototype-of.js ***!
  \****************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../../node_modules/core-js/internals/object-set-prototype-of.js");
        $({
            target: "Object",
            stat: true
        }, {
            setPrototypeOf: setPrototypeOf
        });
    },
    "../../node_modules/core-js/modules/es.object.to-string.js": 
    /*!*********************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.object.to-string.js ***!
  \*********************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "../../node_modules/core-js/internals/to-string-tag-support.js");
        var redefine = __webpack_require__(/*! ../internals/redefine */ "../../node_modules/core-js/internals/redefine.js");
        var toString = __webpack_require__(/*! ../internals/object-to-string */ "../../node_modules/core-js/internals/object-to-string.js");
        if (!TO_STRING_TAG_SUPPORT) {
            redefine(Object.prototype, "toString", toString, {
                unsafe: true
            });
        }
    },
    "../../node_modules/core-js/modules/es.object.values.js": 
    /*!******************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.object.values.js ***!
  \******************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var $values = __webpack_require__(/*! ../internals/object-to-array */ "../../node_modules/core-js/internals/object-to-array.js").values;
        $({
            target: "Object",
            stat: true
        }, {
            values: function values(O) {
                return $values(O);
            }
        });
    },
    "../../node_modules/core-js/modules/es.set.js": 
    /*!********************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.set.js ***!
  \********************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var collection = __webpack_require__(/*! ../internals/collection */ "../../node_modules/core-js/internals/collection.js");
        var collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ "../../node_modules/core-js/internals/collection-strong.js");
        module.exports = collection("Set", (function(init) {
            return function Set() {
                return init(this, arguments.length ? arguments[0] : undefined);
            };
        }), collectionStrong);
    },
    "../../node_modules/core-js/modules/es.string.iterator.js": 
    /*!********************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.string.iterator.js ***!
  \********************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "../../node_modules/core-js/internals/string-multibyte.js").charAt;
        var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../node_modules/core-js/internals/internal-state.js");
        var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "../../node_modules/core-js/internals/define-iterator.js");
        var STRING_ITERATOR = "String Iterator";
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
        defineIterator(String, "String", (function(iterated) {
            setInternalState(this, {
                type: STRING_ITERATOR,
                string: String(iterated),
                index: 0
            });
        }), (function next() {
            var state = getInternalState(this);
            var string = state.string;
            var index = state.index;
            var point;
            if (index >= string.length) return {
                value: undefined,
                done: true
            };
            point = charAt(string, index);
            state.index += point.length;
            return {
                value: point,
                done: false
            };
        }));
    },
    "../../node_modules/core-js/modules/es.symbol.js": 
    /*!***********************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.symbol.js ***!
  \***********************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
        var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../node_modules/core-js/internals/get-built-in.js");
        var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../node_modules/core-js/internals/is-pure.js");
        var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
        var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../../node_modules/core-js/internals/native-symbol.js");
        var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "../../node_modules/core-js/internals/use-symbol-as-uid.js");
        var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
        var has = __webpack_require__(/*! ../internals/has */ "../../node_modules/core-js/internals/has.js");
        var isArray = __webpack_require__(/*! ../internals/is-array */ "../../node_modules/core-js/internals/is-array.js");
        var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
        var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
        var toObject = __webpack_require__(/*! ../internals/to-object */ "../../node_modules/core-js/internals/to-object.js");
        var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../node_modules/core-js/internals/to-indexed-object.js");
        var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../../node_modules/core-js/internals/to-primitive.js");
        var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../node_modules/core-js/internals/create-property-descriptor.js");
        var nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ "../../node_modules/core-js/internals/object-create.js");
        var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../../node_modules/core-js/internals/object-keys.js");
        var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "../../node_modules/core-js/internals/object-get-own-property-names.js");
        var getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "../../node_modules/core-js/internals/object-get-own-property-names-external.js");
        var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../../node_modules/core-js/internals/object-get-own-property-symbols.js");
        var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../node_modules/core-js/internals/object-get-own-property-descriptor.js");
        var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../node_modules/core-js/internals/object-define-property.js");
        var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../../node_modules/core-js/internals/object-property-is-enumerable.js");
        var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../node_modules/core-js/internals/create-non-enumerable-property.js");
        var redefine = __webpack_require__(/*! ../internals/redefine */ "../../node_modules/core-js/internals/redefine.js");
        var shared = __webpack_require__(/*! ../internals/shared */ "../../node_modules/core-js/internals/shared.js");
        var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../node_modules/core-js/internals/shared-key.js");
        var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../node_modules/core-js/internals/hidden-keys.js");
        var uid = __webpack_require__(/*! ../internals/uid */ "../../node_modules/core-js/internals/uid.js");
        var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");
        var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "../../node_modules/core-js/internals/well-known-symbol-wrapped.js");
        var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "../../node_modules/core-js/internals/define-well-known-symbol.js");
        var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../node_modules/core-js/internals/set-to-string-tag.js");
        var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../node_modules/core-js/internals/internal-state.js");
        var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "../../node_modules/core-js/internals/array-iteration.js").forEach;
        var HIDDEN = sharedKey("hidden");
        var SYMBOL = "Symbol";
        var PROTOTYPE = "prototype";
        var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.getterFor(SYMBOL);
        var ObjectPrototype = Object[PROTOTYPE];
        var $Symbol = global.Symbol;
        var $stringify = getBuiltIn("JSON", "stringify");
        var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
        var nativeDefineProperty = definePropertyModule.f;
        var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
        var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
        var AllSymbols = shared("symbols");
        var ObjectPrototypeSymbols = shared("op-symbols");
        var StringToSymbolRegistry = shared("string-to-symbol-registry");
        var SymbolToStringRegistry = shared("symbol-to-string-registry");
        var WellKnownSymbolsStore = shared("wks");
        var QObject = global.QObject;
        var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
        var setSymbolDescriptor = DESCRIPTORS && fails((function() {
            return nativeObjectCreate(nativeDefineProperty({}, "a", {
                get: function() {
                    return nativeDefineProperty(this, "a", {
                        value: 7
                    }).a;
                }
            })).a != 7;
        })) ? function(O, P, Attributes) {
            var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
            if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
            nativeDefineProperty(O, P, Attributes);
            if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
                nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
            }
        } : nativeDefineProperty;
        var wrap = function(tag, description) {
            var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
            setInternalState(symbol, {
                type: SYMBOL,
                tag: tag,
                description: description
            });
            if (!DESCRIPTORS) symbol.description = description;
            return symbol;
        };
        var isSymbol = USE_SYMBOL_AS_UID ? function(it) {
            return typeof it == "symbol";
        } : function(it) {
            return Object(it) instanceof $Symbol;
        };
        var $defineProperty = function defineProperty(O, P, Attributes) {
            if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
            anObject(O);
            var key = toPrimitive(P, true);
            anObject(Attributes);
            if (has(AllSymbols, key)) {
                if (!Attributes.enumerable) {
                    if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
                    O[HIDDEN][key] = true;
                } else {
                    if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
                    Attributes = nativeObjectCreate(Attributes, {
                        enumerable: createPropertyDescriptor(0, false)
                    });
                }
                return setSymbolDescriptor(O, key, Attributes);
            }
            return nativeDefineProperty(O, key, Attributes);
        };
        var $defineProperties = function defineProperties(O, Properties) {
            anObject(O);
            var properties = toIndexedObject(Properties);
            var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
            $forEach(keys, (function(key) {
                if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
            }));
            return O;
        };
        var $create = function create(O, Properties) {
            return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
        };
        var $propertyIsEnumerable = function propertyIsEnumerable(V) {
            var P = toPrimitive(V, true);
            var enumerable = nativePropertyIsEnumerable.call(this, P);
            if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
            return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
        };
        var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
            var it = toIndexedObject(O);
            var key = toPrimitive(P, true);
            if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
            var descriptor = nativeGetOwnPropertyDescriptor(it, key);
            if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
                descriptor.enumerable = true;
            }
            return descriptor;
        };
        var $getOwnPropertyNames = function getOwnPropertyNames(O) {
            var names = nativeGetOwnPropertyNames(toIndexedObject(O));
            var result = [];
            $forEach(names, (function(key) {
                if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
            }));
            return result;
        };
        var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
            var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
            var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
            var result = [];
            $forEach(names, (function(key) {
                if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
                    result.push(AllSymbols[key]);
                }
            }));
            return result;
        };
        if (!NATIVE_SYMBOL) {
            $Symbol = function Symbol() {
                if (this instanceof $Symbol) throw TypeError("Symbol is not a constructor");
                var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
                var tag = uid(description);
                var setter = function(value) {
                    if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
                    if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
                    setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
                };
                if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, {
                    configurable: true,
                    set: setter
                });
                return wrap(tag, description);
            };
            redefine($Symbol[PROTOTYPE], "toString", (function toString() {
                return getInternalState(this).tag;
            }));
            redefine($Symbol, "withoutSetter", (function(description) {
                return wrap(uid(description), description);
            }));
            propertyIsEnumerableModule.f = $propertyIsEnumerable;
            definePropertyModule.f = $defineProperty;
            getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
            getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
            getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;
            wrappedWellKnownSymbolModule.f = function(name) {
                return wrap(wellKnownSymbol(name), name);
            };
            if (DESCRIPTORS) {
                nativeDefineProperty($Symbol[PROTOTYPE], "description", {
                    configurable: true,
                    get: function description() {
                        return getInternalState(this).description;
                    }
                });
                if (!IS_PURE) {
                    redefine(ObjectPrototype, "propertyIsEnumerable", $propertyIsEnumerable, {
                        unsafe: true
                    });
                }
            }
        }
        $({
            global: true,
            wrap: true,
            forced: !NATIVE_SYMBOL,
            sham: !NATIVE_SYMBOL
        }, {
            Symbol: $Symbol
        });
        $forEach(objectKeys(WellKnownSymbolsStore), (function(name) {
            defineWellKnownSymbol(name);
        }));
        $({
            target: SYMBOL,
            stat: true,
            forced: !NATIVE_SYMBOL
        }, {
            for: function(key) {
                var string = String(key);
                if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
                var symbol = $Symbol(string);
                StringToSymbolRegistry[string] = symbol;
                SymbolToStringRegistry[symbol] = string;
                return symbol;
            },
            keyFor: function keyFor(sym) {
                if (!isSymbol(sym)) throw TypeError(sym + " is not a symbol");
                if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
            },
            useSetter: function() {
                USE_SETTER = true;
            },
            useSimple: function() {
                USE_SETTER = false;
            }
        });
        $({
            target: "Object",
            stat: true,
            forced: !NATIVE_SYMBOL,
            sham: !DESCRIPTORS
        }, {
            create: $create,
            defineProperty: $defineProperty,
            defineProperties: $defineProperties,
            getOwnPropertyDescriptor: $getOwnPropertyDescriptor
        });
        $({
            target: "Object",
            stat: true,
            forced: !NATIVE_SYMBOL
        }, {
            getOwnPropertyNames: $getOwnPropertyNames,
            getOwnPropertySymbols: $getOwnPropertySymbols
        });
        $({
            target: "Object",
            stat: true,
            forced: fails((function() {
                getOwnPropertySymbolsModule.f(1);
            }))
        }, {
            getOwnPropertySymbols: function getOwnPropertySymbols(it) {
                return getOwnPropertySymbolsModule.f(toObject(it));
            }
        });
        if ($stringify) {
            var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails((function() {
                var symbol = $Symbol();
                return $stringify([ symbol ]) != "[null]" || $stringify({
                    a: symbol
                }) != "{}" || $stringify(Object(symbol)) != "{}";
            }));
            $({
                target: "JSON",
                stat: true,
                forced: FORCED_JSON_STRINGIFY
            }, {
                stringify: function stringify(it, replacer, space) {
                    var args = [ it ];
                    var index = 1;
                    var $replacer;
                    while (arguments.length > index) args.push(arguments[index++]);
                    $replacer = replacer;
                    if (!isObject(replacer) && it === undefined || isSymbol(it)) return;
                    if (!isArray(replacer)) replacer = function(key, value) {
                        if (typeof $replacer == "function") value = $replacer.call(this, key, value);
                        if (!isSymbol(value)) return value;
                    };
                    args[1] = replacer;
                    return $stringify.apply(null, args);
                }
            });
        }
        if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
            createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
        }
        setToStringTag($Symbol, SYMBOL);
        hiddenKeys[HIDDEN] = true;
    },
    "../../node_modules/core-js/modules/es.weak-map.js": 
    /*!*************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/es.weak-map.js ***!
  \*************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
        var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "../../node_modules/core-js/internals/redefine-all.js");
        var InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ "../../node_modules/core-js/internals/internal-metadata.js");
        var collection = __webpack_require__(/*! ../internals/collection */ "../../node_modules/core-js/internals/collection.js");
        var collectionWeak = __webpack_require__(/*! ../internals/collection-weak */ "../../node_modules/core-js/internals/collection-weak.js");
        var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
        var enforceIternalState = __webpack_require__(/*! ../internals/internal-state */ "../../node_modules/core-js/internals/internal-state.js").enforce;
        var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "../../node_modules/core-js/internals/native-weak-map.js");
        var IS_IE11 = !global.ActiveXObject && "ActiveXObject" in global;
        var isExtensible = Object.isExtensible;
        var InternalWeakMap;
        var wrapper = function(init) {
            return function WeakMap() {
                return init(this, arguments.length ? arguments[0] : undefined);
            };
        };
        var $WeakMap = module.exports = collection("WeakMap", wrapper, collectionWeak);
        if (NATIVE_WEAK_MAP && IS_IE11) {
            InternalWeakMap = collectionWeak.getConstructor(wrapper, "WeakMap", true);
            InternalMetadataModule.REQUIRED = true;
            var WeakMapPrototype = $WeakMap.prototype;
            var nativeDelete = WeakMapPrototype["delete"];
            var nativeHas = WeakMapPrototype.has;
            var nativeGet = WeakMapPrototype.get;
            var nativeSet = WeakMapPrototype.set;
            redefineAll(WeakMapPrototype, {
                delete: function(key) {
                    if (isObject(key) && !isExtensible(key)) {
                        var state = enforceIternalState(this);
                        if (!state.frozen) state.frozen = new InternalWeakMap;
                        return nativeDelete.call(this, key) || state.frozen["delete"](key);
                    }
                    return nativeDelete.call(this, key);
                },
                has: function has(key) {
                    if (isObject(key) && !isExtensible(key)) {
                        var state = enforceIternalState(this);
                        if (!state.frozen) state.frozen = new InternalWeakMap;
                        return nativeHas.call(this, key) || state.frozen.has(key);
                    }
                    return nativeHas.call(this, key);
                },
                get: function get(key) {
                    if (isObject(key) && !isExtensible(key)) {
                        var state = enforceIternalState(this);
                        if (!state.frozen) state.frozen = new InternalWeakMap;
                        return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key);
                    }
                    return nativeGet.call(this, key);
                },
                set: function set(key, value) {
                    if (isObject(key) && !isExtensible(key)) {
                        var state = enforceIternalState(this);
                        if (!state.frozen) state.frozen = new InternalWeakMap;
                        nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value);
                    } else nativeSet.call(this, key, value);
                    return this;
                }
            });
        }
    },
    "../../node_modules/core-js/modules/esnext.reflect.define-metadata.js": 
    /*!********************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/esnext.reflect.define-metadata.js ***!
  \********************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var ReflectMetadataModule = __webpack_require__(/*! ../internals/reflect-metadata */ "../../node_modules/core-js/internals/reflect-metadata.js");
        var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
        var toMetadataKey = ReflectMetadataModule.toKey;
        var ordinaryDefineOwnMetadata = ReflectMetadataModule.set;
        $({
            target: "Reflect",
            stat: true
        }, {
            defineMetadata: function defineMetadata(metadataKey, metadataValue, target) {
                var targetKey = arguments.length < 4 ? undefined : toMetadataKey(arguments[3]);
                ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), targetKey);
            }
        });
    },
    "../../node_modules/core-js/modules/esnext.reflect.delete-metadata.js": 
    /*!********************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/esnext.reflect.delete-metadata.js ***!
  \********************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var ReflectMetadataModule = __webpack_require__(/*! ../internals/reflect-metadata */ "../../node_modules/core-js/internals/reflect-metadata.js");
        var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
        var toMetadataKey = ReflectMetadataModule.toKey;
        var getOrCreateMetadataMap = ReflectMetadataModule.getMap;
        var store = ReflectMetadataModule.store;
        $({
            target: "Reflect",
            stat: true
        }, {
            deleteMetadata: function deleteMetadata(metadataKey, target) {
                var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
                var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
                if (metadataMap === undefined || !metadataMap["delete"](metadataKey)) return false;
                if (metadataMap.size) return true;
                var targetMetadata = store.get(target);
                targetMetadata["delete"](targetKey);
                return !!targetMetadata.size || store["delete"](target);
            }
        });
    },
    "../../node_modules/core-js/modules/esnext.reflect.get-metadata-keys.js": 
    /*!**********************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/esnext.reflect.get-metadata-keys.js ***!
  \**********************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var Set = __webpack_require__(/*! ../modules/es.set */ "../../node_modules/core-js/modules/es.set.js");
        var ReflectMetadataModule = __webpack_require__(/*! ../internals/reflect-metadata */ "../../node_modules/core-js/internals/reflect-metadata.js");
        var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
        var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../../node_modules/core-js/internals/object-get-prototype-of.js");
        var iterate = __webpack_require__(/*! ../internals/iterate */ "../../node_modules/core-js/internals/iterate.js");
        var ordinaryOwnMetadataKeys = ReflectMetadataModule.keys;
        var toMetadataKey = ReflectMetadataModule.toKey;
        var from = function(iter) {
            var result = [];
            iterate(iter, result.push, result);
            return result;
        };
        var ordinaryMetadataKeys = function(O, P) {
            var oKeys = ordinaryOwnMetadataKeys(O, P);
            var parent = getPrototypeOf(O);
            if (parent === null) return oKeys;
            var pKeys = ordinaryMetadataKeys(parent, P);
            return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
        };
        $({
            target: "Reflect",
            stat: true
        }, {
            getMetadataKeys: function getMetadataKeys(target) {
                var targetKey = arguments.length < 2 ? undefined : toMetadataKey(arguments[1]);
                return ordinaryMetadataKeys(anObject(target), targetKey);
            }
        });
    },
    "../../node_modules/core-js/modules/esnext.reflect.get-metadata.js": 
    /*!*****************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/esnext.reflect.get-metadata.js ***!
  \*****************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var ReflectMetadataModule = __webpack_require__(/*! ../internals/reflect-metadata */ "../../node_modules/core-js/internals/reflect-metadata.js");
        var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
        var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../../node_modules/core-js/internals/object-get-prototype-of.js");
        var ordinaryHasOwnMetadata = ReflectMetadataModule.has;
        var ordinaryGetOwnMetadata = ReflectMetadataModule.get;
        var toMetadataKey = ReflectMetadataModule.toKey;
        var ordinaryGetMetadata = function(MetadataKey, O, P) {
            var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = getPrototypeOf(O);
            return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
        };
        $({
            target: "Reflect",
            stat: true
        }, {
            getMetadata: function getMetadata(metadataKey, target) {
                var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
                return ordinaryGetMetadata(metadataKey, anObject(target), targetKey);
            }
        });
    },
    "../../node_modules/core-js/modules/esnext.reflect.get-own-metadata-keys.js": 
    /*!**************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/esnext.reflect.get-own-metadata-keys.js ***!
  \**************************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var ReflectMetadataModule = __webpack_require__(/*! ../internals/reflect-metadata */ "../../node_modules/core-js/internals/reflect-metadata.js");
        var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
        var ordinaryOwnMetadataKeys = ReflectMetadataModule.keys;
        var toMetadataKey = ReflectMetadataModule.toKey;
        $({
            target: "Reflect",
            stat: true
        }, {
            getOwnMetadataKeys: function getOwnMetadataKeys(target) {
                var targetKey = arguments.length < 2 ? undefined : toMetadataKey(arguments[1]);
                return ordinaryOwnMetadataKeys(anObject(target), targetKey);
            }
        });
    },
    "../../node_modules/core-js/modules/esnext.reflect.get-own-metadata.js": 
    /*!*********************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/esnext.reflect.get-own-metadata.js ***!
  \*********************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var ReflectMetadataModule = __webpack_require__(/*! ../internals/reflect-metadata */ "../../node_modules/core-js/internals/reflect-metadata.js");
        var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
        var ordinaryGetOwnMetadata = ReflectMetadataModule.get;
        var toMetadataKey = ReflectMetadataModule.toKey;
        $({
            target: "Reflect",
            stat: true
        }, {
            getOwnMetadata: function getOwnMetadata(metadataKey, target) {
                var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
                return ordinaryGetOwnMetadata(metadataKey, anObject(target), targetKey);
            }
        });
    },
    "../../node_modules/core-js/modules/esnext.reflect.has-metadata.js": 
    /*!*****************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/esnext.reflect.has-metadata.js ***!
  \*****************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var ReflectMetadataModule = __webpack_require__(/*! ../internals/reflect-metadata */ "../../node_modules/core-js/internals/reflect-metadata.js");
        var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
        var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../../node_modules/core-js/internals/object-get-prototype-of.js");
        var ordinaryHasOwnMetadata = ReflectMetadataModule.has;
        var toMetadataKey = ReflectMetadataModule.toKey;
        var ordinaryHasMetadata = function(MetadataKey, O, P) {
            var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn) return true;
            var parent = getPrototypeOf(O);
            return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
        };
        $({
            target: "Reflect",
            stat: true
        }, {
            hasMetadata: function hasMetadata(metadataKey, target) {
                var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
                return ordinaryHasMetadata(metadataKey, anObject(target), targetKey);
            }
        });
    },
    "../../node_modules/core-js/modules/esnext.reflect.has-own-metadata.js": 
    /*!*********************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/esnext.reflect.has-own-metadata.js ***!
  \*********************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var ReflectMetadataModule = __webpack_require__(/*! ../internals/reflect-metadata */ "../../node_modules/core-js/internals/reflect-metadata.js");
        var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
        var ordinaryHasOwnMetadata = ReflectMetadataModule.has;
        var toMetadataKey = ReflectMetadataModule.toKey;
        $({
            target: "Reflect",
            stat: true
        }, {
            hasOwnMetadata: function hasOwnMetadata(metadataKey, target) {
                var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
                return ordinaryHasOwnMetadata(metadataKey, anObject(target), targetKey);
            }
        });
    },
    "../../node_modules/core-js/modules/esnext.reflect.metadata.js": 
    /*!*************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/modules/esnext.reflect.metadata.js ***!
  \*************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
        var ReflectMetadataModule = __webpack_require__(/*! ../internals/reflect-metadata */ "../../node_modules/core-js/internals/reflect-metadata.js");
        var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
        var toMetadataKey = ReflectMetadataModule.toKey;
        var ordinaryDefineOwnMetadata = ReflectMetadataModule.set;
        $({
            target: "Reflect",
            stat: true
        }, {
            metadata: function metadata(metadataKey, metadataValue) {
                return function decorator(target, key) {
                    ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetadataKey(key));
                };
            }
        });
    },
    "../../node_modules/core-js/proposals/reflect-metadata.js": 
    /*!********************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/proposals/reflect-metadata.js ***!
  \********************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        __webpack_require__(/*! ../modules/esnext.reflect.define-metadata */ "../../node_modules/core-js/modules/esnext.reflect.define-metadata.js");
        __webpack_require__(/*! ../modules/esnext.reflect.delete-metadata */ "../../node_modules/core-js/modules/esnext.reflect.delete-metadata.js");
        __webpack_require__(/*! ../modules/esnext.reflect.get-metadata */ "../../node_modules/core-js/modules/esnext.reflect.get-metadata.js");
        __webpack_require__(/*! ../modules/esnext.reflect.get-metadata-keys */ "../../node_modules/core-js/modules/esnext.reflect.get-metadata-keys.js");
        __webpack_require__(/*! ../modules/esnext.reflect.get-own-metadata */ "../../node_modules/core-js/modules/esnext.reflect.get-own-metadata.js");
        __webpack_require__(/*! ../modules/esnext.reflect.get-own-metadata-keys */ "../../node_modules/core-js/modules/esnext.reflect.get-own-metadata-keys.js");
        __webpack_require__(/*! ../modules/esnext.reflect.has-metadata */ "../../node_modules/core-js/modules/esnext.reflect.has-metadata.js");
        __webpack_require__(/*! ../modules/esnext.reflect.has-own-metadata */ "../../node_modules/core-js/modules/esnext.reflect.has-own-metadata.js");
        __webpack_require__(/*! ../modules/esnext.reflect.metadata */ "../../node_modules/core-js/modules/esnext.reflect.metadata.js");
    },
    "../../node_modules/core-js/stable/array/index.js": 
    /*!************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/stable/array/index.js ***!
  \************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var parent = __webpack_require__(/*! ../../es/array */ "../../node_modules/core-js/es/array/index.js");
        module.exports = parent;
    },
    "../../node_modules/core-js/stable/object/index.js": 
    /*!*************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/core-js/stable/object/index.js ***!
  \*************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var parent = __webpack_require__(/*! ../../es/object */ "../../node_modules/core-js/es/object/index.js");
        module.exports = parent;
    },
    "../../node_modules/intersection-observer/intersection-observer.js": 
    /*!*****************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/intersection-observer/intersection-observer.js ***!
  \*****************************************************************************************************************************/
    /*! no static exports found */ function(module, exports) {
        (function(window, document) {
            "use strict";
            if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
                if (!("isIntersecting" in window.IntersectionObserverEntry.prototype)) {
                    Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                        get: function() {
                            return this.intersectionRatio > 0;
                        }
                    });
                }
                return;
            }
            var registry = [];
            function IntersectionObserverEntry(entry) {
                this.time = entry.time;
                this.target = entry.target;
                this.rootBounds = entry.rootBounds;
                this.boundingClientRect = entry.boundingClientRect;
                this.intersectionRect = entry.intersectionRect || getEmptyRect();
                this.isIntersecting = !!entry.intersectionRect;
                var targetRect = this.boundingClientRect;
                var targetArea = targetRect.width * targetRect.height;
                var intersectionRect = this.intersectionRect;
                var intersectionArea = intersectionRect.width * intersectionRect.height;
                if (targetArea) {
                    this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
                } else {
                    this.intersectionRatio = this.isIntersecting ? 1 : 0;
                }
            }
            function IntersectionObserver(callback, opt_options) {
                var options = opt_options || {};
                if (typeof callback != "function") {
                    throw new Error("callback must be a function");
                }
                if (options.root && options.root.nodeType != 1) {
                    throw new Error("root must be an Element");
                }
                this._checkForIntersections = throttle(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);
                this._callback = callback;
                this._observationTargets = [];
                this._queuedEntries = [];
                this._rootMarginValues = this._parseRootMargin(options.rootMargin);
                this.thresholds = this._initThresholds(options.threshold);
                this.root = options.root || null;
                this.rootMargin = this._rootMarginValues.map((function(margin) {
                    return margin.value + margin.unit;
                })).join(" ");
            }
            IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;
            IntersectionObserver.prototype.POLL_INTERVAL = null;
            IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;
            IntersectionObserver.prototype.observe = function(target) {
                var isTargetAlreadyObserved = this._observationTargets.some((function(item) {
                    return item.element == target;
                }));
                if (isTargetAlreadyObserved) {
                    return;
                }
                if (!(target && target.nodeType == 1)) {
                    throw new Error("target must be an Element");
                }
                this._registerInstance();
                this._observationTargets.push({
                    element: target,
                    entry: null
                });
                this._monitorIntersections();
                this._checkForIntersections();
            };
            IntersectionObserver.prototype.unobserve = function(target) {
                this._observationTargets = this._observationTargets.filter((function(item) {
                    return item.element != target;
                }));
                if (!this._observationTargets.length) {
                    this._unmonitorIntersections();
                    this._unregisterInstance();
                }
            };
            IntersectionObserver.prototype.disconnect = function() {
                this._observationTargets = [];
                this._unmonitorIntersections();
                this._unregisterInstance();
            };
            IntersectionObserver.prototype.takeRecords = function() {
                var records = this._queuedEntries.slice();
                this._queuedEntries = [];
                return records;
            };
            IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
                var threshold = opt_threshold || [ 0 ];
                if (!Array.isArray(threshold)) threshold = [ threshold ];
                return threshold.sort().filter((function(t, i, a) {
                    if (typeof t != "number" || isNaN(t) || t < 0 || t > 1) {
                        throw new Error("threshold must be a number between 0 and 1 inclusively");
                    }
                    return t !== a[i - 1];
                }));
            };
            IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
                var marginString = opt_rootMargin || "0px";
                var margins = marginString.split(/\s+/).map((function(margin) {
                    var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
                    if (!parts) {
                        throw new Error("rootMargin must be specified in pixels or percent");
                    }
                    return {
                        value: parseFloat(parts[1]),
                        unit: parts[2]
                    };
                }));
                margins[1] = margins[1] || margins[0];
                margins[2] = margins[2] || margins[0];
                margins[3] = margins[3] || margins[1];
                return margins;
            };
            IntersectionObserver.prototype._monitorIntersections = function() {
                if (!this._monitoringIntersections) {
                    this._monitoringIntersections = true;
                    if (this.POLL_INTERVAL) {
                        this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL);
                    } else {
                        addEvent(window, "resize", this._checkForIntersections, true);
                        addEvent(document, "scroll", this._checkForIntersections, true);
                        if (this.USE_MUTATION_OBSERVER && "MutationObserver" in window) {
                            this._domObserver = new MutationObserver(this._checkForIntersections);
                            this._domObserver.observe(document, {
                                attributes: true,
                                childList: true,
                                characterData: true,
                                subtree: true
                            });
                        }
                    }
                }
            };
            IntersectionObserver.prototype._unmonitorIntersections = function() {
                if (this._monitoringIntersections) {
                    this._monitoringIntersections = false;
                    clearInterval(this._monitoringInterval);
                    this._monitoringInterval = null;
                    removeEvent(window, "resize", this._checkForIntersections, true);
                    removeEvent(document, "scroll", this._checkForIntersections, true);
                    if (this._domObserver) {
                        this._domObserver.disconnect();
                        this._domObserver = null;
                    }
                }
            };
            IntersectionObserver.prototype._checkForIntersections = function() {
                var rootIsInDom = this._rootIsInDom();
                var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();
                this._observationTargets.forEach((function(item) {
                    var target = item.element;
                    var targetRect = getBoundingClientRect(target);
                    var rootContainsTarget = this._rootContainsTarget(target);
                    var oldEntry = item.entry;
                    var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, rootRect);
                    var newEntry = item.entry = new IntersectionObserverEntry({
                        time: now(),
                        target: target,
                        boundingClientRect: targetRect,
                        rootBounds: rootRect,
                        intersectionRect: intersectionRect
                    });
                    if (!oldEntry) {
                        this._queuedEntries.push(newEntry);
                    } else if (rootIsInDom && rootContainsTarget) {
                        if (this._hasCrossedThreshold(oldEntry, newEntry)) {
                            this._queuedEntries.push(newEntry);
                        }
                    } else {
                        if (oldEntry && oldEntry.isIntersecting) {
                            this._queuedEntries.push(newEntry);
                        }
                    }
                }), this);
                if (this._queuedEntries.length) {
                    this._callback(this.takeRecords(), this);
                }
            };
            IntersectionObserver.prototype._computeTargetAndRootIntersection = function(target, rootRect) {
                if (window.getComputedStyle(target).display == "none") return;
                var targetRect = getBoundingClientRect(target);
                var intersectionRect = targetRect;
                var parent = getParentNode(target);
                var atRoot = false;
                while (!atRoot) {
                    var parentRect = null;
                    var parentComputedStyle = parent.nodeType == 1 ? window.getComputedStyle(parent) : {};
                    if (parentComputedStyle.display == "none") return;
                    if (parent == this.root || parent == document) {
                        atRoot = true;
                        parentRect = rootRect;
                    } else {
                        if (parent != document.body && parent != document.documentElement && parentComputedStyle.overflow != "visible") {
                            parentRect = getBoundingClientRect(parent);
                        }
                    }
                    if (parentRect) {
                        intersectionRect = computeRectIntersection(parentRect, intersectionRect);
                        if (!intersectionRect) break;
                    }
                    parent = getParentNode(parent);
                }
                return intersectionRect;
            };
            IntersectionObserver.prototype._getRootRect = function() {
                var rootRect;
                if (this.root) {
                    rootRect = getBoundingClientRect(this.root);
                } else {
                    var html = document.documentElement;
                    var body = document.body;
                    rootRect = {
                        top: 0,
                        left: 0,
                        right: html.clientWidth || body.clientWidth,
                        width: html.clientWidth || body.clientWidth,
                        bottom: html.clientHeight || body.clientHeight,
                        height: html.clientHeight || body.clientHeight
                    };
                }
                return this._expandRectByRootMargin(rootRect);
            };
            IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
                var margins = this._rootMarginValues.map((function(margin, i) {
                    return margin.unit == "px" ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100;
                }));
                var newRect = {
                    top: rect.top - margins[0],
                    right: rect.right + margins[1],
                    bottom: rect.bottom + margins[2],
                    left: rect.left - margins[3]
                };
                newRect.width = newRect.right - newRect.left;
                newRect.height = newRect.bottom - newRect.top;
                return newRect;
            };
            IntersectionObserver.prototype._hasCrossedThreshold = function(oldEntry, newEntry) {
                var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
                var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1;
                if (oldRatio === newRatio) return;
                for (var i = 0; i < this.thresholds.length; i++) {
                    var threshold = this.thresholds[i];
                    if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) {
                        return true;
                    }
                }
            };
            IntersectionObserver.prototype._rootIsInDom = function() {
                return !this.root || containsDeep(document, this.root);
            };
            IntersectionObserver.prototype._rootContainsTarget = function(target) {
                return containsDeep(this.root || document, target);
            };
            IntersectionObserver.prototype._registerInstance = function() {
                if (registry.indexOf(this) < 0) {
                    registry.push(this);
                }
            };
            IntersectionObserver.prototype._unregisterInstance = function() {
                var index = registry.indexOf(this);
                if (index != -1) registry.splice(index, 1);
            };
            function now() {
                return window.performance && performance.now && performance.now();
            }
            function throttle(fn, timeout) {
                var timer = null;
                return function() {
                    if (!timer) {
                        timer = setTimeout((function() {
                            fn();
                            timer = null;
                        }), timeout);
                    }
                };
            }
            function addEvent(node, event, fn, opt_useCapture) {
                if (typeof node.addEventListener == "function") {
                    node.addEventListener(event, fn, opt_useCapture || false);
                } else if (typeof node.attachEvent == "function") {
                    node.attachEvent("on" + event, fn);
                }
            }
            function removeEvent(node, event, fn, opt_useCapture) {
                if (typeof node.removeEventListener == "function") {
                    node.removeEventListener(event, fn, opt_useCapture || false);
                } else if (typeof node.detatchEvent == "function") {
                    node.detatchEvent("on" + event, fn);
                }
            }
            function computeRectIntersection(rect1, rect2) {
                var top = Math.max(rect1.top, rect2.top);
                var bottom = Math.min(rect1.bottom, rect2.bottom);
                var left = Math.max(rect1.left, rect2.left);
                var right = Math.min(rect1.right, rect2.right);
                var width = right - left;
                var height = bottom - top;
                return width >= 0 && height >= 0 && {
                    top: top,
                    bottom: bottom,
                    left: left,
                    right: right,
                    width: width,
                    height: height
                };
            }
            function getBoundingClientRect(el) {
                var rect;
                try {
                    rect = el.getBoundingClientRect();
                } catch (err) {}
                if (!rect) return getEmptyRect();
                if (!(rect.width && rect.height)) {
                    rect = {
                        top: rect.top,
                        right: rect.right,
                        bottom: rect.bottom,
                        left: rect.left,
                        width: rect.right - rect.left,
                        height: rect.bottom - rect.top
                    };
                }
                return rect;
            }
            function getEmptyRect() {
                return {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                };
            }
            function containsDeep(parent, child) {
                var node = child;
                while (node) {
                    if (node == parent) return true;
                    node = getParentNode(node);
                }
                return false;
            }
            function getParentNode(node) {
                var parent = node.parentNode;
                if (parent && parent.nodeType == 11 && parent.host) {
                    return parent.host;
                }
                return parent;
            }
            window.IntersectionObserver = IntersectionObserver;
            window.IntersectionObserverEntry = IntersectionObserverEntry;
        })(window, document);
    },
    "../../node_modules/tslib/tslib.es6.js": 
    /*!*************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/tslib/tslib.es6.js ***!
  \*************************************************************************************************/
    /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "__extends", (function() {
            return __extends;
        }));
        __webpack_require__.d(__webpack_exports__, "__assign", (function() {
            return __assign;
        }));
        __webpack_require__.d(__webpack_exports__, "__rest", (function() {
            return __rest;
        }));
        __webpack_require__.d(__webpack_exports__, "__decorate", (function() {
            return __decorate;
        }));
        __webpack_require__.d(__webpack_exports__, "__param", (function() {
            return __param;
        }));
        __webpack_require__.d(__webpack_exports__, "__metadata", (function() {
            return __metadata;
        }));
        __webpack_require__.d(__webpack_exports__, "__awaiter", (function() {
            return __awaiter;
        }));
        __webpack_require__.d(__webpack_exports__, "__generator", (function() {
            return __generator;
        }));
        __webpack_require__.d(__webpack_exports__, "__exportStar", (function() {
            return __exportStar;
        }));
        __webpack_require__.d(__webpack_exports__, "__values", (function() {
            return __values;
        }));
        __webpack_require__.d(__webpack_exports__, "__read", (function() {
            return __read;
        }));
        __webpack_require__.d(__webpack_exports__, "__spread", (function() {
            return __spread;
        }));
        __webpack_require__.d(__webpack_exports__, "__spreadArrays", (function() {
            return __spreadArrays;
        }));
        __webpack_require__.d(__webpack_exports__, "__await", (function() {
            return __await;
        }));
        __webpack_require__.d(__webpack_exports__, "__asyncGenerator", (function() {
            return __asyncGenerator;
        }));
        __webpack_require__.d(__webpack_exports__, "__asyncDelegator", (function() {
            return __asyncDelegator;
        }));
        __webpack_require__.d(__webpack_exports__, "__asyncValues", (function() {
            return __asyncValues;
        }));
        __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", (function() {
            return __makeTemplateObject;
        }));
        __webpack_require__.d(__webpack_exports__, "__importStar", (function() {
            return __importStar;
        }));
        __webpack_require__.d(__webpack_exports__, "__importDefault", (function() {
            return __importDefault;
        }));
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */        var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
            };
            return extendStatics(d, b);
        };
        function __extends(d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
        }
        var __assign = function() {
            __assign = Object.assign || function __assign(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };
        function __rest(s, e) {
            var t = {};
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
            if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
            }
            return t;
        }
        function __decorate(decorators, target, key, desc) {
            var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        }
        function __param(paramIndex, decorator) {
            return function(target, key) {
                decorator(target, key, paramIndex);
            };
        }
        function __metadata(metadataKey, metadataValue) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
        }
        function __awaiter(thisArg, _arguments, P, generator) {
            return new (P || (P = Promise))((function(resolve, reject) {
                function fulfilled(value) {
                    try {
                        step(generator.next(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function rejected(value) {
                    try {
                        step(generator["throw"](value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function step(result) {
                    result.done ? resolve(result.value) : new P((function(resolve) {
                        resolve(result.value);
                    })).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
            }));
        }
        function __generator(thisArg, body) {
            var _ = {
                label: 0,
                sent: function() {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                },
                trys: [],
                ops: []
            }, f, y, t, g;
            return g = {
                next: verb(0),
                throw: verb(1),
                return: verb(2)
            }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                return this;
            }), g;
            function verb(n) {
                return function(v) {
                    return step([ n, v ]);
                };
            }
            function step(op) {
                if (f) throw new TypeError("Generator is already executing.");
                while (_) try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
                    0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                    if (y = 0, t) op = [ op[0] & 2, t.value ];
                    switch (op[0]) {
                      case 0:
                      case 1:
                        t = op;
                        break;

                      case 4:
                        _.label++;
                        return {
                            value: op[1],
                            done: false
                        };

                      case 5:
                        _.label++;
                        y = op[1];
                        op = [ 0 ];
                        continue;

                      case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;

                      default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();
                        continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [ 6, e ];
                    y = 0;
                } finally {
                    f = t = 0;
                }
                if (op[0] & 5) throw op[1];
                return {
                    value: op[0] ? op[1] : void 0,
                    done: true
                };
            }
        }
        function __exportStar(m, exports) {
            for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
        function __values(o) {
            var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
            if (m) return m.call(o);
            return {
                next: function() {
                    if (o && i >= o.length) o = void 0;
                    return {
                        value: o && o[i++],
                        done: !o
                    };
                }
            };
        }
        function __read(o, n) {
            var m = typeof Symbol === "function" && o[Symbol.iterator];
            if (!m) return o;
            var i = m.call(o), r, ar = [], e;
            try {
                while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
            } catch (error) {
                e = {
                    error: error
                };
            } finally {
                try {
                    if (r && !r.done && (m = i["return"])) m.call(i);
                } finally {
                    if (e) throw e.error;
                }
            }
            return ar;
        }
        function __spread() {
            for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
            return ar;
        }
        function __spreadArrays() {
            for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
            for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
            k++) r[k] = a[j];
            return r;
        }
        function __await(v) {
            return this instanceof __await ? (this.v = v, this) : new __await(v);
        }
        function __asyncGenerator(thisArg, _arguments, generator) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var g = generator.apply(thisArg, _arguments || []), i, q = [];
            return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
                return this;
            }, i;
            function verb(n) {
                if (g[n]) i[n] = function(v) {
                    return new Promise((function(a, b) {
                        q.push([ n, v, a, b ]) > 1 || resume(n, v);
                    }));
                };
            }
            function resume(n, v) {
                try {
                    step(g[n](v));
                } catch (e) {
                    settle(q[0][3], e);
                }
            }
            function step(r) {
                r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
            }
            function fulfill(value) {
                resume("next", value);
            }
            function reject(value) {
                resume("throw", value);
            }
            function settle(f, v) {
                if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
            }
        }
        function __asyncDelegator(o) {
            var i, p;
            return i = {}, verb("next"), verb("throw", (function(e) {
                throw e;
            })), verb("return"), i[Symbol.iterator] = function() {
                return this;
            }, i;
            function verb(n, f) {
                i[n] = o[n] ? function(v) {
                    return (p = !p) ? {
                        value: __await(o[n](v)),
                        done: n === "return"
                    } : f ? f(v) : v;
                } : f;
            }
        }
        function __asyncValues(o) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var m = o[Symbol.asyncIterator], i;
            return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), 
            i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
                return this;
            }, i);
            function verb(n) {
                i[n] = o[n] && function(v) {
                    return new Promise((function(resolve, reject) {
                        v = o[n](v), settle(resolve, reject, v.done, v.value);
                    }));
                };
            }
            function settle(resolve, reject, d, v) {
                Promise.resolve(v).then((function(v) {
                    resolve({
                        value: v,
                        done: d
                    });
                }), reject);
            }
        }
        function __makeTemplateObject(cooked, raw) {
            if (Object.defineProperty) {
                Object.defineProperty(cooked, "raw", {
                    value: raw
                });
            } else {
                cooked.raw = raw;
            }
            return cooked;
        }
        function __importStar(mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            result.default = mod;
            return result;
        }
        function __importDefault(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        }
    },
    "../../node_modules/zone.js/dist/zone-evergreen.js": 
    /*!*************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/zone.js/dist/zone-evergreen.js ***!
  \*************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
        /**
 * @license Angular v0.10.2
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */        (function(factory) {
            true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, 
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
        })((function() {
            "use strict";
            /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */            const Zone$1 = function(global) {
                const performance = global["performance"];
                function mark(name) {
                    performance && performance["mark"] && performance["mark"](name);
                }
                function performanceMeasure(name, label) {
                    performance && performance["measure"] && performance["measure"](name, label);
                }
                mark("Zone");
                const symbolPrefix = global["__Zone_symbol_prefix"] || "__zone_symbol__";
                function __symbol__(name) {
                    return symbolPrefix + name;
                }
                const checkDuplicate = global[__symbol__("forceDuplicateZoneCheck")] === true;
                if (global["Zone"]) {
                    if (checkDuplicate || typeof global["Zone"].__symbol__ !== "function") {
                        throw new Error("Zone already loaded.");
                    } else {
                        return global["Zone"];
                    }
                }
                class Zone {
                    constructor(parent, zoneSpec) {
                        this._parent = parent;
                        this._name = zoneSpec ? zoneSpec.name || "unnamed" : "<root>";
                        this._properties = zoneSpec && zoneSpec.properties || {};
                        this._zoneDelegate = new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
                    }
                    static assertZonePatched() {
                        if (global["Promise"] !== patches["ZoneAwarePromise"]) {
                            throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` " + "has been overwritten.\n" + "Most likely cause is that a Promise polyfill has been loaded " + "after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. " + "If you must load one, do so before loading zone.js.)");
                        }
                    }
                    static get root() {
                        let zone = Zone.current;
                        while (zone.parent) {
                            zone = zone.parent;
                        }
                        return zone;
                    }
                    static get current() {
                        return _currentZoneFrame.zone;
                    }
                    static get currentTask() {
                        return _currentTask;
                    }
                    static __load_patch(name, fn) {
                        if (patches.hasOwnProperty(name)) {
                            if (checkDuplicate) {
                                throw Error("Already loaded patch: " + name);
                            }
                        } else if (!global["__Zone_disable_" + name]) {
                            const perfName = "Zone:" + name;
                            mark(perfName);
                            patches[name] = fn(global, Zone, _api);
                            performanceMeasure(perfName, perfName);
                        }
                    }
                    get parent() {
                        return this._parent;
                    }
                    get name() {
                        return this._name;
                    }
                    get(key) {
                        const zone = this.getZoneWith(key);
                        if (zone) return zone._properties[key];
                    }
                    getZoneWith(key) {
                        let current = this;
                        while (current) {
                            if (current._properties.hasOwnProperty(key)) {
                                return current;
                            }
                            current = current._parent;
                        }
                        return null;
                    }
                    fork(zoneSpec) {
                        if (!zoneSpec) throw new Error("ZoneSpec required!");
                        return this._zoneDelegate.fork(this, zoneSpec);
                    }
                    wrap(callback, source) {
                        if (typeof callback !== "function") {
                            throw new Error("Expecting function got: " + callback);
                        }
                        const _callback = this._zoneDelegate.intercept(this, callback, source);
                        const zone = this;
                        return function() {
                            return zone.runGuarded(_callback, this, arguments, source);
                        };
                    }
                    run(callback, applyThis, applyArgs, source) {
                        _currentZoneFrame = {
                            parent: _currentZoneFrame,
                            zone: this
                        };
                        try {
                            return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                        } finally {
                            _currentZoneFrame = _currentZoneFrame.parent;
                        }
                    }
                    runGuarded(callback, applyThis = null, applyArgs, source) {
                        _currentZoneFrame = {
                            parent: _currentZoneFrame,
                            zone: this
                        };
                        try {
                            try {
                                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                            } catch (error) {
                                if (this._zoneDelegate.handleError(this, error)) {
                                    throw error;
                                }
                            }
                        } finally {
                            _currentZoneFrame = _currentZoneFrame.parent;
                        }
                    }
                    runTask(task, applyThis, applyArgs) {
                        if (task.zone != this) {
                            throw new Error("A task can only be run in the zone of creation! (Creation: " + (task.zone || NO_ZONE).name + "; Execution: " + this.name + ")");
                        }
                        if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                            return;
                        }
                        const reEntryGuard = task.state != running;
                        reEntryGuard && task._transitionTo(running, scheduled);
                        task.runCount++;
                        const previousTask = _currentTask;
                        _currentTask = task;
                        _currentZoneFrame = {
                            parent: _currentZoneFrame,
                            zone: this
                        };
                        try {
                            if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                                task.cancelFn = undefined;
                            }
                            try {
                                return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                            } catch (error) {
                                if (this._zoneDelegate.handleError(this, error)) {
                                    throw error;
                                }
                            }
                        } finally {
                            if (task.state !== notScheduled && task.state !== unknown) {
                                if (task.type == eventTask || task.data && task.data.isPeriodic) {
                                    reEntryGuard && task._transitionTo(scheduled, running);
                                } else {
                                    task.runCount = 0;
                                    this._updateTaskCount(task, -1);
                                    reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
                                }
                            }
                            _currentZoneFrame = _currentZoneFrame.parent;
                            _currentTask = previousTask;
                        }
                    }
                    scheduleTask(task) {
                        if (task.zone && task.zone !== this) {
                            let newZone = this;
                            while (newZone) {
                                if (newZone === task.zone) {
                                    throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${task.zone.name}`);
                                }
                                newZone = newZone.parent;
                            }
                        }
                        task._transitionTo(scheduling, notScheduled);
                        const zoneDelegates = [];
                        task._zoneDelegates = zoneDelegates;
                        task._zone = this;
                        try {
                            task = this._zoneDelegate.scheduleTask(this, task);
                        } catch (err) {
                            task._transitionTo(unknown, scheduling, notScheduled);
                            this._zoneDelegate.handleError(this, err);
                            throw err;
                        }
                        if (task._zoneDelegates === zoneDelegates) {
                            this._updateTaskCount(task, 1);
                        }
                        if (task.state == scheduling) {
                            task._transitionTo(scheduled, scheduling);
                        }
                        return task;
                    }
                    scheduleMicroTask(source, callback, data, customSchedule) {
                        return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
                    }
                    scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
                        return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
                    }
                    scheduleEventTask(source, callback, data, customSchedule, customCancel) {
                        return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
                    }
                    cancelTask(task) {
                        if (task.zone != this) throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (task.zone || NO_ZONE).name + "; Execution: " + this.name + ")");
                        task._transitionTo(canceling, scheduled, running);
                        try {
                            this._zoneDelegate.cancelTask(this, task);
                        } catch (err) {
                            task._transitionTo(unknown, canceling);
                            this._zoneDelegate.handleError(this, err);
                            throw err;
                        }
                        this._updateTaskCount(task, -1);
                        task._transitionTo(notScheduled, canceling);
                        task.runCount = 0;
                        return task;
                    }
                    _updateTaskCount(task, count) {
                        const zoneDelegates = task._zoneDelegates;
                        if (count == -1) {
                            task._zoneDelegates = null;
                        }
                        for (let i = 0; i < zoneDelegates.length; i++) {
                            zoneDelegates[i]._updateTaskCount(task.type, count);
                        }
                    }
                }
                Zone.__symbol__ = __symbol__;
                const DELEGATE_ZS = {
                    name: "",
                    onHasTask: (delegate, _, target, hasTaskState) => delegate.hasTask(target, hasTaskState),
                    onScheduleTask: (delegate, _, target, task) => delegate.scheduleTask(target, task),
                    onInvokeTask: (delegate, _, target, task, applyThis, applyArgs) => delegate.invokeTask(target, task, applyThis, applyArgs),
                    onCancelTask: (delegate, _, target, task) => delegate.cancelTask(target, task)
                };
                class ZoneDelegate {
                    constructor(zone, parentDelegate, zoneSpec) {
                        this._taskCounts = {
                            microTask: 0,
                            macroTask: 0,
                            eventTask: 0
                        };
                        this.zone = zone;
                        this._parentDelegate = parentDelegate;
                        this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
                        this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
                        this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
                        this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
                        this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
                        this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
                        this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
                        this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
                        this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
                        this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
                        this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
                        this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
                        this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
                        this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
                        this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
                        this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
                        this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
                        this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
                        this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
                        this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
                        this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
                        this._hasTaskZS = null;
                        this._hasTaskDlgt = null;
                        this._hasTaskDlgtOwner = null;
                        this._hasTaskCurrZone = null;
                        const zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
                        const parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
                        if (zoneSpecHasTask || parentHasTask) {
                            this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                            this._hasTaskDlgt = parentDelegate;
                            this._hasTaskDlgtOwner = this;
                            this._hasTaskCurrZone = zone;
                            if (!zoneSpec.onScheduleTask) {
                                this._scheduleTaskZS = DELEGATE_ZS;
                                this._scheduleTaskDlgt = parentDelegate;
                                this._scheduleTaskCurrZone = this.zone;
                            }
                            if (!zoneSpec.onInvokeTask) {
                                this._invokeTaskZS = DELEGATE_ZS;
                                this._invokeTaskDlgt = parentDelegate;
                                this._invokeTaskCurrZone = this.zone;
                            }
                            if (!zoneSpec.onCancelTask) {
                                this._cancelTaskZS = DELEGATE_ZS;
                                this._cancelTaskDlgt = parentDelegate;
                                this._cancelTaskCurrZone = this.zone;
                            }
                        }
                    }
                    fork(targetZone, zoneSpec) {
                        return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
                    }
                    intercept(targetZone, callback, source) {
                        return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
                    }
                    invoke(targetZone, callback, applyThis, applyArgs, source) {
                        return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
                    }
                    handleError(targetZone, error) {
                        return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
                    }
                    scheduleTask(targetZone, task) {
                        let returnTask = task;
                        if (this._scheduleTaskZS) {
                            if (this._hasTaskZS) {
                                returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                            }
                            returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                            if (!returnTask) returnTask = task;
                        } else {
                            if (task.scheduleFn) {
                                task.scheduleFn(task);
                            } else if (task.type == microTask) {
                                scheduleMicroTask(task);
                            } else {
                                throw new Error("Task is missing scheduleFn.");
                            }
                        }
                        return returnTask;
                    }
                    invokeTask(targetZone, task, applyThis, applyArgs) {
                        return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
                    }
                    cancelTask(targetZone, task) {
                        let value;
                        if (this._cancelTaskZS) {
                            value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
                        } else {
                            if (!task.cancelFn) {
                                throw Error("Task is not cancelable");
                            }
                            value = task.cancelFn(task);
                        }
                        return value;
                    }
                    hasTask(targetZone, isEmpty) {
                        try {
                            this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
                        } catch (err) {
                            this.handleError(targetZone, err);
                        }
                    }
                    _updateTaskCount(type, count) {
                        const counts = this._taskCounts;
                        const prev = counts[type];
                        const next = counts[type] = prev + count;
                        if (next < 0) {
                            throw new Error("More tasks executed then were scheduled.");
                        }
                        if (prev == 0 || next == 0) {
                            const isEmpty = {
                                microTask: counts["microTask"] > 0,
                                macroTask: counts["macroTask"] > 0,
                                eventTask: counts["eventTask"] > 0,
                                change: type
                            };
                            this.hasTask(this.zone, isEmpty);
                        }
                    }
                }
                class ZoneTask {
                    constructor(type, source, callback, options, scheduleFn, cancelFn) {
                        this._zone = null;
                        this.runCount = 0;
                        this._zoneDelegates = null;
                        this._state = "notScheduled";
                        this.type = type;
                        this.source = source;
                        this.data = options;
                        this.scheduleFn = scheduleFn;
                        this.cancelFn = cancelFn;
                        if (!callback) {
                            throw new Error("callback is not defined");
                        }
                        this.callback = callback;
                        const self = this;
                        if (type === eventTask && options && options.useG) {
                            this.invoke = ZoneTask.invokeTask;
                        } else {
                            this.invoke = function() {
                                return ZoneTask.invokeTask.call(global, self, this, arguments);
                            };
                        }
                    }
                    static invokeTask(task, target, args) {
                        if (!task) {
                            task = this;
                        }
                        _numberOfNestedTaskFrames++;
                        try {
                            task.runCount++;
                            return task.zone.runTask(task, target, args);
                        } finally {
                            if (_numberOfNestedTaskFrames == 1) {
                                drainMicroTaskQueue();
                            }
                            _numberOfNestedTaskFrames--;
                        }
                    }
                    get zone() {
                        return this._zone;
                    }
                    get state() {
                        return this._state;
                    }
                    cancelScheduleRequest() {
                        this._transitionTo(notScheduled, scheduling);
                    }
                    _transitionTo(toState, fromState1, fromState2) {
                        if (this._state === fromState1 || this._state === fromState2) {
                            this._state = toState;
                            if (toState == notScheduled) {
                                this._zoneDelegates = null;
                            }
                        } else {
                            throw new Error(`${this.type} '${this.source}': can not transition to '${toState}', expecting state '${fromState1}'${fromState2 ? " or '" + fromState2 + "'" : ""}, was '${this._state}'.`);
                        }
                    }
                    toString() {
                        if (this.data && typeof this.data.handleId !== "undefined") {
                            return this.data.handleId.toString();
                        } else {
                            return Object.prototype.toString.call(this);
                        }
                    }
                    toJSON() {
                        return {
                            type: this.type,
                            state: this.state,
                            source: this.source,
                            zone: this.zone.name,
                            runCount: this.runCount
                        };
                    }
                }
                const symbolSetTimeout = __symbol__("setTimeout");
                const symbolPromise = __symbol__("Promise");
                const symbolThen = __symbol__("then");
                let _microTaskQueue = [];
                let _isDrainingMicrotaskQueue = false;
                let nativeMicroTaskQueuePromise;
                function scheduleMicroTask(task) {
                    if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
                        if (!nativeMicroTaskQueuePromise) {
                            if (global[symbolPromise]) {
                                nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                            }
                        }
                        if (nativeMicroTaskQueuePromise) {
                            let nativeThen = nativeMicroTaskQueuePromise[symbolThen];
                            if (!nativeThen) {
                                nativeThen = nativeMicroTaskQueuePromise["then"];
                            }
                            nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
                        } else {
                            global[symbolSetTimeout](drainMicroTaskQueue, 0);
                        }
                    }
                    task && _microTaskQueue.push(task);
                }
                function drainMicroTaskQueue() {
                    if (!_isDrainingMicrotaskQueue) {
                        _isDrainingMicrotaskQueue = true;
                        while (_microTaskQueue.length) {
                            const queue = _microTaskQueue;
                            _microTaskQueue = [];
                            for (let i = 0; i < queue.length; i++) {
                                const task = queue[i];
                                try {
                                    task.zone.runTask(task, null, null);
                                } catch (error) {
                                    _api.onUnhandledError(error);
                                }
                            }
                        }
                        _api.microtaskDrainDone();
                        _isDrainingMicrotaskQueue = false;
                    }
                }
                const NO_ZONE = {
                    name: "NO ZONE"
                };
                const notScheduled = "notScheduled", scheduling = "scheduling", scheduled = "scheduled", running = "running", canceling = "canceling", unknown = "unknown";
                const microTask = "microTask", macroTask = "macroTask", eventTask = "eventTask";
                const patches = {};
                const _api = {
                    symbol: __symbol__,
                    currentZoneFrame: () => _currentZoneFrame,
                    onUnhandledError: noop,
                    microtaskDrainDone: noop,
                    scheduleMicroTask: scheduleMicroTask,
                    showUncaughtError: () => !Zone[__symbol__("ignoreConsoleErrorUncaughtError")],
                    patchEventTarget: () => [],
                    patchOnProperties: noop,
                    patchMethod: () => noop,
                    bindArguments: () => [],
                    patchThen: () => noop,
                    patchMacroTask: () => noop,
                    setNativePromise: NativePromise => {
                        if (NativePromise && typeof NativePromise.resolve === "function") {
                            nativeMicroTaskQueuePromise = NativePromise.resolve(0);
                        }
                    },
                    patchEventPrototype: () => noop,
                    isIEOrEdge: () => false,
                    getGlobalObjects: () => undefined,
                    ObjectDefineProperty: () => noop,
                    ObjectGetOwnPropertyDescriptor: () => undefined,
                    ObjectCreate: () => undefined,
                    ArraySlice: () => [],
                    patchClass: () => noop,
                    wrapWithCurrentZone: () => noop,
                    filterProperties: () => [],
                    attachOriginToPatched: () => noop,
                    _redefineProperty: () => noop,
                    patchCallbacks: () => noop
                };
                let _currentZoneFrame = {
                    parent: null,
                    zone: new Zone(null, null)
                };
                let _currentTask = null;
                let _numberOfNestedTaskFrames = 0;
                function noop() {}
                performanceMeasure("Zone", "Zone");
                return global["Zone"] = Zone;
            }(typeof window !== "undefined" && window || typeof self !== "undefined" && self || global);
            /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */            Zone.__load_patch("ZoneAwarePromise", ((global, Zone, api) => {
                const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
                const ObjectDefineProperty = Object.defineProperty;
                function readableObjectToString(obj) {
                    if (obj && obj.toString === Object.prototype.toString) {
                        const className = obj.constructor && obj.constructor.name;
                        return (className ? className : "") + ": " + JSON.stringify(obj);
                    }
                    return obj ? obj.toString() : Object.prototype.toString.call(obj);
                }
                const __symbol__ = api.symbol;
                const _uncaughtPromiseErrors = [];
                const symbolPromise = __symbol__("Promise");
                const symbolThen = __symbol__("then");
                const creationTrace = "__creationTrace__";
                api.onUnhandledError = e => {
                    if (api.showUncaughtError()) {
                        const rejection = e && e.rejection;
                        if (rejection) {
                            console.error("Unhandled Promise rejection:", rejection instanceof Error ? rejection.message : rejection, "; Zone:", e.zone.name, "; Task:", e.task && e.task.source, "; Value:", rejection, rejection instanceof Error ? rejection.stack : undefined);
                        } else {
                            console.error(e);
                        }
                    }
                };
                api.microtaskDrainDone = () => {
                    while (_uncaughtPromiseErrors.length) {
                        while (_uncaughtPromiseErrors.length) {
                            const uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                            try {
                                uncaughtPromiseError.zone.runGuarded((() => {
                                    throw uncaughtPromiseError;
                                }));
                            } catch (error) {
                                handleUnhandledRejection(error);
                            }
                        }
                    }
                };
                const UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__("unhandledPromiseRejectionHandler");
                function handleUnhandledRejection(e) {
                    api.onUnhandledError(e);
                    try {
                        const handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
                        if (handler && typeof handler === "function") {
                            handler.call(this, e);
                        }
                    } catch (err) {}
                }
                function isThenable(value) {
                    return value && value.then;
                }
                function forwardResolution(value) {
                    return value;
                }
                function forwardRejection(rejection) {
                    return ZoneAwarePromise.reject(rejection);
                }
                const symbolState = __symbol__("state");
                const symbolValue = __symbol__("value");
                const symbolFinally = __symbol__("finally");
                const symbolParentPromiseValue = __symbol__("parentPromiseValue");
                const symbolParentPromiseState = __symbol__("parentPromiseState");
                const source = "Promise.then";
                const UNRESOLVED = null;
                const RESOLVED = true;
                const REJECTED = false;
                const REJECTED_NO_CATCH = 0;
                function makeResolver(promise, state) {
                    return v => {
                        try {
                            resolvePromise(promise, state, v);
                        } catch (err) {
                            resolvePromise(promise, false, err);
                        }
                    };
                }
                const once = function() {
                    let wasCalled = false;
                    return function wrapper(wrappedFunction) {
                        return function() {
                            if (wasCalled) {
                                return;
                            }
                            wasCalled = true;
                            wrappedFunction.apply(null, arguments);
                        };
                    };
                };
                const TYPE_ERROR = "Promise resolved with itself";
                const CURRENT_TASK_TRACE_SYMBOL = __symbol__("currentTaskTrace");
                function resolvePromise(promise, state, value) {
                    const onceWrapper = once();
                    if (promise === value) {
                        throw new TypeError(TYPE_ERROR);
                    }
                    if (promise[symbolState] === UNRESOLVED) {
                        let then = null;
                        try {
                            if (typeof value === "object" || typeof value === "function") {
                                then = value && value.then;
                            }
                        } catch (err) {
                            onceWrapper((() => {
                                resolvePromise(promise, false, err);
                            }))();
                            return promise;
                        }
                        if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
                            clearRejectedNoCatch(value);
                            resolvePromise(promise, value[symbolState], value[symbolValue]);
                        } else if (state !== REJECTED && typeof then === "function") {
                            try {
                                then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                            } catch (err) {
                                onceWrapper((() => {
                                    resolvePromise(promise, false, err);
                                }))();
                            }
                        } else {
                            promise[symbolState] = state;
                            const queue = promise[symbolValue];
                            promise[symbolValue] = value;
                            if (promise[symbolFinally] === symbolFinally) {
                                if (state === RESOLVED) {
                                    promise[symbolState] = promise[symbolParentPromiseState];
                                    promise[symbolValue] = promise[symbolParentPromiseValue];
                                }
                            }
                            if (state === REJECTED && value instanceof Error) {
                                const trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];
                                if (trace) {
                                    ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
                                        configurable: true,
                                        enumerable: false,
                                        writable: true,
                                        value: trace
                                    });
                                }
                            }
                            for (let i = 0; i < queue.length; ) {
                                scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                            }
                            if (queue.length == 0 && state == REJECTED) {
                                promise[symbolState] = REJECTED_NO_CATCH;
                                try {
                                    throw new Error("Uncaught (in promise): " + readableObjectToString(value) + (value && value.stack ? "\n" + value.stack : ""));
                                } catch (err) {
                                    const error = err;
                                    error.rejection = value;
                                    error.promise = promise;
                                    error.zone = Zone.current;
                                    error.task = Zone.currentTask;
                                    _uncaughtPromiseErrors.push(error);
                                    api.scheduleMicroTask();
                                }
                            }
                        }
                    }
                    return promise;
                }
                const REJECTION_HANDLED_HANDLER = __symbol__("rejectionHandledHandler");
                function clearRejectedNoCatch(promise) {
                    if (promise[symbolState] === REJECTED_NO_CATCH) {
                        try {
                            const handler = Zone[REJECTION_HANDLED_HANDLER];
                            if (handler && typeof handler === "function") {
                                handler.call(this, {
                                    rejection: promise[symbolValue],
                                    promise: promise
                                });
                            }
                        } catch (err) {}
                        promise[symbolState] = REJECTED;
                        for (let i = 0; i < _uncaughtPromiseErrors.length; i++) {
                            if (promise === _uncaughtPromiseErrors[i].promise) {
                                _uncaughtPromiseErrors.splice(i, 1);
                            }
                        }
                    }
                }
                function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
                    clearRejectedNoCatch(promise);
                    const promiseState = promise[symbolState];
                    const delegate = promiseState ? typeof onFulfilled === "function" ? onFulfilled : forwardResolution : typeof onRejected === "function" ? onRejected : forwardRejection;
                    zone.scheduleMicroTask(source, (() => {
                        try {
                            const parentPromiseValue = promise[symbolValue];
                            const isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];
                            if (isFinallyPromise) {
                                chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                                chainPromise[symbolParentPromiseState] = promiseState;
                            }
                            const value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [ parentPromiseValue ]);
                            resolvePromise(chainPromise, true, value);
                        } catch (error) {
                            resolvePromise(chainPromise, false, error);
                        }
                    }), chainPromise);
                }
                const ZONE_AWARE_PROMISE_TO_STRING = "function ZoneAwarePromise() { [native code] }";
                class ZoneAwarePromise {
                    constructor(executor) {
                        const promise = this;
                        if (!(promise instanceof ZoneAwarePromise)) {
                            throw new Error("Must be an instanceof Promise.");
                        }
                        promise[symbolState] = UNRESOLVED;
                        promise[symbolValue] = [];
                        try {
                            executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
                        } catch (error) {
                            resolvePromise(promise, false, error);
                        }
                    }
                    static toString() {
                        return ZONE_AWARE_PROMISE_TO_STRING;
                    }
                    static resolve(value) {
                        return resolvePromise(new this(null), RESOLVED, value);
                    }
                    static reject(error) {
                        return resolvePromise(new this(null), REJECTED, error);
                    }
                    static race(values) {
                        let resolve;
                        let reject;
                        let promise = new this(((res, rej) => {
                            resolve = res;
                            reject = rej;
                        }));
                        function onResolve(value) {
                            resolve(value);
                        }
                        function onReject(error) {
                            reject(error);
                        }
                        for (let value of values) {
                            if (!isThenable(value)) {
                                value = this.resolve(value);
                            }
                            value.then(onResolve, onReject);
                        }
                        return promise;
                    }
                    static all(values) {
                        return ZoneAwarePromise.allWithCallback(values);
                    }
                    static allSettled(values) {
                        const P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
                        return P.allWithCallback(values, {
                            thenCallback: value => ({
                                status: "fulfilled",
                                value: value
                            }),
                            errorCallback: err => ({
                                status: "rejected",
                                reason: err
                            })
                        });
                    }
                    static allWithCallback(values, callback) {
                        let resolve;
                        let reject;
                        let promise = new this(((res, rej) => {
                            resolve = res;
                            reject = rej;
                        }));
                        let unresolvedCount = 2;
                        let valueIndex = 0;
                        const resolvedValues = [];
                        for (let value of values) {
                            if (!isThenable(value)) {
                                value = this.resolve(value);
                            }
                            const curValueIndex = valueIndex;
                            try {
                                value.then((value => {
                                    resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
                                    unresolvedCount--;
                                    if (unresolvedCount === 0) {
                                        resolve(resolvedValues);
                                    }
                                }), (err => {
                                    if (!callback) {
                                        reject(err);
                                    } else {
                                        resolvedValues[curValueIndex] = callback.errorCallback(err);
                                        unresolvedCount--;
                                        if (unresolvedCount === 0) {
                                            resolve(resolvedValues);
                                        }
                                    }
                                }));
                            } catch (thenErr) {
                                reject(thenErr);
                            }
                            unresolvedCount++;
                            valueIndex++;
                        }
                        unresolvedCount -= 2;
                        if (unresolvedCount === 0) {
                            resolve(resolvedValues);
                        }
                        return promise;
                    }
                    get [Symbol.toStringTag]() {
                        return "Promise";
                    }
                    then(onFulfilled, onRejected) {
                        const chainPromise = new this.constructor(null);
                        const zone = Zone.current;
                        if (this[symbolState] == UNRESOLVED) {
                            this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
                        } else {
                            scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
                        }
                        return chainPromise;
                    }
                    catch(onRejected) {
                        return this.then(null, onRejected);
                    }
                    finally(onFinally) {
                        const chainPromise = new this.constructor(null);
                        chainPromise[symbolFinally] = symbolFinally;
                        const zone = Zone.current;
                        if (this[symbolState] == UNRESOLVED) {
                            this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
                        } else {
                            scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
                        }
                        return chainPromise;
                    }
                }
                ZoneAwarePromise["resolve"] = ZoneAwarePromise.resolve;
                ZoneAwarePromise["reject"] = ZoneAwarePromise.reject;
                ZoneAwarePromise["race"] = ZoneAwarePromise.race;
                ZoneAwarePromise["all"] = ZoneAwarePromise.all;
                const NativePromise = global[symbolPromise] = global["Promise"];
                const ZONE_AWARE_PROMISE = Zone.__symbol__("ZoneAwarePromise");
                let desc = ObjectGetOwnPropertyDescriptor(global, "Promise");
                if (!desc || desc.configurable) {
                    desc && delete desc.writable;
                    desc && delete desc.value;
                    if (!desc) {
                        desc = {
                            configurable: true,
                            enumerable: true
                        };
                    }
                    desc.get = function() {
                        return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
                    };
                    desc.set = function(NewNativePromise) {
                        if (NewNativePromise === ZoneAwarePromise) {
                            global[ZONE_AWARE_PROMISE] = NewNativePromise;
                        } else {
                            global[symbolPromise] = NewNativePromise;
                            if (!NewNativePromise.prototype[symbolThen]) {
                                patchThen(NewNativePromise);
                            }
                            api.setNativePromise(NewNativePromise);
                        }
                    };
                    ObjectDefineProperty(global, "Promise", desc);
                }
                global["Promise"] = ZoneAwarePromise;
                const symbolThenPatched = __symbol__("thenPatched");
                function patchThen(Ctor) {
                    const proto = Ctor.prototype;
                    const prop = ObjectGetOwnPropertyDescriptor(proto, "then");
                    if (prop && (prop.writable === false || !prop.configurable)) {
                        return;
                    }
                    const originalThen = proto.then;
                    proto[symbolThen] = originalThen;
                    Ctor.prototype.then = function(onResolve, onReject) {
                        const wrapped = new ZoneAwarePromise(((resolve, reject) => {
                            originalThen.call(this, resolve, reject);
                        }));
                        return wrapped.then(onResolve, onReject);
                    };
                    Ctor[symbolThenPatched] = true;
                }
                api.patchThen = patchThen;
                function zoneify(fn) {
                    return function() {
                        let resultPromise = fn.apply(this, arguments);
                        if (resultPromise instanceof ZoneAwarePromise) {
                            return resultPromise;
                        }
                        let ctor = resultPromise.constructor;
                        if (!ctor[symbolThenPatched]) {
                            patchThen(ctor);
                        }
                        return resultPromise;
                    };
                }
                if (NativePromise) {
                    patchThen(NativePromise);
                    const fetch = global["fetch"];
                    if (typeof fetch == "function") {
                        global[api.symbol("fetch")] = fetch;
                        global["fetch"] = zoneify(fetch);
                    }
                }
                Promise[Zone.__symbol__("uncaughtPromiseErrors")] = _uncaughtPromiseErrors;
                return ZoneAwarePromise;
            }));
            /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */            const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            const ObjectDefineProperty = Object.defineProperty;
            const ObjectGetPrototypeOf = Object.getPrototypeOf;
            const ObjectCreate = Object.create;
            const ArraySlice = Array.prototype.slice;
            const ADD_EVENT_LISTENER_STR = "addEventListener";
            const REMOVE_EVENT_LISTENER_STR = "removeEventListener";
            const ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
            const ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
            const TRUE_STR = "true";
            const FALSE_STR = "false";
            const ZONE_SYMBOL_PREFIX = Zone.__symbol__("");
            function wrapWithCurrentZone(callback, source) {
                return Zone.current.wrap(callback, source);
            }
            function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
                return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
            }
            const zoneSymbol = Zone.__symbol__;
            const isWindowExists = typeof window !== "undefined";
            const internalWindow = isWindowExists ? window : undefined;
            const _global = isWindowExists && internalWindow || typeof self === "object" && self || global;
            const REMOVE_ATTRIBUTE = "removeAttribute";
            const NULL_ON_PROP_VALUE = [ null ];
            function bindArguments(args, source) {
                for (let i = args.length - 1; i >= 0; i--) {
                    if (typeof args[i] === "function") {
                        args[i] = wrapWithCurrentZone(args[i], source + "_" + i);
                    }
                }
                return args;
            }
            function patchPrototype(prototype, fnNames) {
                const source = prototype.constructor["name"];
                for (let i = 0; i < fnNames.length; i++) {
                    const name = fnNames[i];
                    const delegate = prototype[name];
                    if (delegate) {
                        const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);
                        if (!isPropertyWritable(prototypeDesc)) {
                            continue;
                        }
                        prototype[name] = (delegate => {
                            const patched = function() {
                                return delegate.apply(this, bindArguments(arguments, source + "." + name));
                            };
                            attachOriginToPatched(patched, delegate);
                            return patched;
                        })(delegate);
                    }
                }
            }
            function isPropertyWritable(propertyDesc) {
                if (!propertyDesc) {
                    return true;
                }
                if (propertyDesc.writable === false) {
                    return false;
                }
                return !(typeof propertyDesc.get === "function" && typeof propertyDesc.set === "undefined");
            }
            const isWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
            const isNode = !("nw" in _global) && typeof _global.process !== "undefined" && {}.toString.call(_global.process) === "[object process]";
            const isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow["HTMLElement"]);
            const isMix = typeof _global.process !== "undefined" && {}.toString.call(_global.process) === "[object process]" && !isWebWorker && !!(isWindowExists && internalWindow["HTMLElement"]);
            const zoneSymbolEventNames = {};
            const wrapFn = function(event) {
                event = event || _global.event;
                if (!event) {
                    return;
                }
                let eventNameSymbol = zoneSymbolEventNames[event.type];
                if (!eventNameSymbol) {
                    eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol("ON_PROPERTY" + event.type);
                }
                const target = this || event.target || _global;
                const listener = target[eventNameSymbol];
                let result;
                if (isBrowser && target === internalWindow && event.type === "error") {
                    const errorEvent = event;
                    result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
                    if (result === true) {
                        event.preventDefault();
                    }
                } else {
                    result = listener && listener.apply(this, arguments);
                    if (result != undefined && !result) {
                        event.preventDefault();
                    }
                }
                return result;
            };
            function patchProperty(obj, prop, prototype) {
                let desc = ObjectGetOwnPropertyDescriptor(obj, prop);
                if (!desc && prototype) {
                    const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
                    if (prototypeDesc) {
                        desc = {
                            enumerable: true,
                            configurable: true
                        };
                    }
                }
                if (!desc || !desc.configurable) {
                    return;
                }
                const onPropPatchedSymbol = zoneSymbol("on" + prop + "patched");
                if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
                    return;
                }
                delete desc.writable;
                delete desc.value;
                const originalDescGet = desc.get;
                const originalDescSet = desc.set;
                const eventName = prop.substr(2);
                let eventNameSymbol = zoneSymbolEventNames[eventName];
                if (!eventNameSymbol) {
                    eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol("ON_PROPERTY" + eventName);
                }
                desc.set = function(newValue) {
                    let target = this;
                    if (!target && obj === _global) {
                        target = _global;
                    }
                    if (!target) {
                        return;
                    }
                    let previousValue = target[eventNameSymbol];
                    if (previousValue) {
                        target.removeEventListener(eventName, wrapFn);
                    }
                    if (originalDescSet) {
                        originalDescSet.apply(target, NULL_ON_PROP_VALUE);
                    }
                    if (typeof newValue === "function") {
                        target[eventNameSymbol] = newValue;
                        target.addEventListener(eventName, wrapFn, false);
                    } else {
                        target[eventNameSymbol] = null;
                    }
                };
                desc.get = function() {
                    let target = this;
                    if (!target && obj === _global) {
                        target = _global;
                    }
                    if (!target) {
                        return null;
                    }
                    const listener = target[eventNameSymbol];
                    if (listener) {
                        return listener;
                    } else if (originalDescGet) {
                        let value = originalDescGet && originalDescGet.call(this);
                        if (value) {
                            desc.set.call(this, value);
                            if (typeof target[REMOVE_ATTRIBUTE] === "function") {
                                target.removeAttribute(prop);
                            }
                            return value;
                        }
                    }
                    return null;
                };
                ObjectDefineProperty(obj, prop, desc);
                obj[onPropPatchedSymbol] = true;
            }
            function patchOnProperties(obj, properties, prototype) {
                if (properties) {
                    for (let i = 0; i < properties.length; i++) {
                        patchProperty(obj, "on" + properties[i], prototype);
                    }
                } else {
                    const onProperties = [];
                    for (const prop in obj) {
                        if (prop.substr(0, 2) == "on") {
                            onProperties.push(prop);
                        }
                    }
                    for (let j = 0; j < onProperties.length; j++) {
                        patchProperty(obj, onProperties[j], prototype);
                    }
                }
            }
            const originalInstanceKey = zoneSymbol("originalInstance");
            function patchClass(className) {
                const OriginalClass = _global[className];
                if (!OriginalClass) return;
                _global[zoneSymbol(className)] = OriginalClass;
                _global[className] = function() {
                    const a = bindArguments(arguments, className);
                    switch (a.length) {
                      case 0:
                        this[originalInstanceKey] = new OriginalClass;
                        break;

                      case 1:
                        this[originalInstanceKey] = new OriginalClass(a[0]);
                        break;

                      case 2:
                        this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                        break;

                      case 3:
                        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                        break;

                      case 4:
                        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                        break;

                      default:
                        throw new Error("Arg list too long.");
                    }
                };
                attachOriginToPatched(_global[className], OriginalClass);
                const instance = new OriginalClass((function() {}));
                let prop;
                for (prop in instance) {
                    if (className === "XMLHttpRequest" && prop === "responseBlob") continue;
                    (function(prop) {
                        if (typeof instance[prop] === "function") {
                            _global[className].prototype[prop] = function() {
                                return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                            };
                        } else {
                            ObjectDefineProperty(_global[className].prototype, prop, {
                                set: function(fn) {
                                    if (typeof fn === "function") {
                                        this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + "." + prop);
                                        attachOriginToPatched(this[originalInstanceKey][prop], fn);
                                    } else {
                                        this[originalInstanceKey][prop] = fn;
                                    }
                                },
                                get: function() {
                                    return this[originalInstanceKey][prop];
                                }
                            });
                        }
                    })(prop);
                }
                for (prop in OriginalClass) {
                    if (prop !== "prototype" && OriginalClass.hasOwnProperty(prop)) {
                        _global[className][prop] = OriginalClass[prop];
                    }
                }
            }
            function copySymbolProperties(src, dest) {
                if (typeof Object.getOwnPropertySymbols !== "function") {
                    return;
                }
                const symbols = Object.getOwnPropertySymbols(src);
                symbols.forEach((symbol => {
                    const desc = Object.getOwnPropertyDescriptor(src, symbol);
                    Object.defineProperty(dest, symbol, {
                        get: function() {
                            return src[symbol];
                        },
                        set: function(value) {
                            if (desc && (!desc.writable || typeof desc.set !== "function")) {
                                return;
                            }
                            src[symbol] = value;
                        },
                        enumerable: desc ? desc.enumerable : true,
                        configurable: desc ? desc.configurable : true
                    });
                }));
            }
            let shouldCopySymbolProperties = false;
            function patchMethod(target, name, patchFn) {
                let proto = target;
                while (proto && !proto.hasOwnProperty(name)) {
                    proto = ObjectGetPrototypeOf(proto);
                }
                if (!proto && target[name]) {
                    proto = target;
                }
                const delegateName = zoneSymbol(name);
                let delegate = null;
                if (proto && !(delegate = proto[delegateName])) {
                    delegate = proto[delegateName] = proto[name];
                    const desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
                    if (isPropertyWritable(desc)) {
                        const patchDelegate = patchFn(delegate, delegateName, name);
                        proto[name] = function() {
                            return patchDelegate(this, arguments);
                        };
                        attachOriginToPatched(proto[name], delegate);
                        if (shouldCopySymbolProperties) {
                            copySymbolProperties(delegate, proto[name]);
                        }
                    }
                }
                return delegate;
            }
            function patchMacroTask(obj, funcName, metaCreator) {
                let setNative = null;
                function scheduleTask(task) {
                    const data = task.data;
                    data.args[data.cbIdx] = function() {
                        task.invoke.apply(this, arguments);
                    };
                    setNative.apply(data.target, data.args);
                    return task;
                }
                setNative = patchMethod(obj, funcName, (delegate => function(self, args) {
                    const meta = metaCreator(self, args);
                    if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === "function") {
                        return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
                    } else {
                        return delegate.apply(self, args);
                    }
                }));
            }
            function attachOriginToPatched(patched, original) {
                patched[zoneSymbol("OriginalDelegate")] = original;
            }
            let isDetectedIEOrEdge = false;
            let ieOrEdge = false;
            function isIE() {
                try {
                    const ua = internalWindow.navigator.userAgent;
                    if (ua.indexOf("MSIE ") !== -1 || ua.indexOf("Trident/") !== -1) {
                        return true;
                    }
                } catch (error) {}
                return false;
            }
            function isIEOrEdge() {
                if (isDetectedIEOrEdge) {
                    return ieOrEdge;
                }
                isDetectedIEOrEdge = true;
                try {
                    const ua = internalWindow.navigator.userAgent;
                    if (ua.indexOf("MSIE ") !== -1 || ua.indexOf("Trident/") !== -1 || ua.indexOf("Edge/") !== -1) {
                        ieOrEdge = true;
                    }
                } catch (error) {}
                return ieOrEdge;
            }
            /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */            Zone.__load_patch("toString", (global => {
                const originalFunctionToString = Function.prototype.toString;
                const ORIGINAL_DELEGATE_SYMBOL = zoneSymbol("OriginalDelegate");
                const PROMISE_SYMBOL = zoneSymbol("Promise");
                const ERROR_SYMBOL = zoneSymbol("Error");
                const newFunctionToString = function toString() {
                    if (typeof this === "function") {
                        const originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
                        if (originalDelegate) {
                            if (typeof originalDelegate === "function") {
                                return originalFunctionToString.call(originalDelegate);
                            } else {
                                return Object.prototype.toString.call(originalDelegate);
                            }
                        }
                        if (this === Promise) {
                            const nativePromise = global[PROMISE_SYMBOL];
                            if (nativePromise) {
                                return originalFunctionToString.call(nativePromise);
                            }
                        }
                        if (this === Error) {
                            const nativeError = global[ERROR_SYMBOL];
                            if (nativeError) {
                                return originalFunctionToString.call(nativeError);
                            }
                        }
                    }
                    return originalFunctionToString.call(this);
                };
                newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
                Function.prototype.toString = newFunctionToString;
                const originalObjectToString = Object.prototype.toString;
                const PROMISE_OBJECT_TO_STRING = "[object Promise]";
                Object.prototype.toString = function() {
                    if (this instanceof Promise) {
                        return PROMISE_OBJECT_TO_STRING;
                    }
                    return originalObjectToString.call(this);
                };
            }));
            /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */            let passiveSupported = false;
            if (typeof window !== "undefined") {
                try {
                    const options = Object.defineProperty({}, "passive", {
                        get: function() {
                            passiveSupported = true;
                        }
                    });
                    window.addEventListener("test", options, options);
                    window.removeEventListener("test", options, options);
                } catch (err) {
                    passiveSupported = false;
                }
            }
            const OPTIMIZED_ZONE_EVENT_TASK_DATA = {
                useG: true
            };
            const zoneSymbolEventNames$1 = {};
            const globalSources = {};
            const EVENT_NAME_SYMBOL_REGX = new RegExp("^" + ZONE_SYMBOL_PREFIX + "(\\w+)(true|false)$");
            const IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol("propagationStopped");
            function patchEventTarget(_global, apis, patchOptions) {
                const ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
                const REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
                const LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || "eventListeners";
                const REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || "removeAllListeners";
                const zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
                const ADD_EVENT_LISTENER_SOURCE = "." + ADD_EVENT_LISTENER + ":";
                const PREPEND_EVENT_LISTENER = "prependListener";
                const PREPEND_EVENT_LISTENER_SOURCE = "." + PREPEND_EVENT_LISTENER + ":";
                const invokeTask = function(task, target, event) {
                    if (task.isRemoved) {
                        return;
                    }
                    const delegate = task.callback;
                    if (typeof delegate === "object" && delegate.handleEvent) {
                        task.callback = event => delegate.handleEvent(event);
                        task.originalDelegate = delegate;
                    }
                    task.invoke(task, target, [ event ]);
                    const options = task.options;
                    if (options && typeof options === "object" && options.once) {
                        const delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                        target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate, options);
                    }
                };
                const globalZoneAwareCallback = function(event) {
                    event = event || _global.event;
                    if (!event) {
                        return;
                    }
                    const target = this || event.target || _global;
                    const tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
                    if (tasks) {
                        if (tasks.length === 1) {
                            invokeTask(tasks[0], target, event);
                        } else {
                            const copyTasks = tasks.slice();
                            for (let i = 0; i < copyTasks.length; i++) {
                                if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                                    break;
                                }
                                invokeTask(copyTasks[i], target, event);
                            }
                        }
                    }
                };
                const globalZoneAwareCaptureCallback = function(event) {
                    event = event || _global.event;
                    if (!event) {
                        return;
                    }
                    const target = this || event.target || _global;
                    const tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
                    if (tasks) {
                        if (tasks.length === 1) {
                            invokeTask(tasks[0], target, event);
                        } else {
                            const copyTasks = tasks.slice();
                            for (let i = 0; i < copyTasks.length; i++) {
                                if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                                    break;
                                }
                                invokeTask(copyTasks[i], target, event);
                            }
                        }
                    }
                };
                function patchEventTargetMethods(obj, patchOptions) {
                    if (!obj) {
                        return false;
                    }
                    let useGlobalCallback = true;
                    if (patchOptions && patchOptions.useG !== undefined) {
                        useGlobalCallback = patchOptions.useG;
                    }
                    const validateHandler = patchOptions && patchOptions.vh;
                    let checkDuplicate = true;
                    if (patchOptions && patchOptions.chkDup !== undefined) {
                        checkDuplicate = patchOptions.chkDup;
                    }
                    let returnTarget = false;
                    if (patchOptions && patchOptions.rt !== undefined) {
                        returnTarget = patchOptions.rt;
                    }
                    let proto = obj;
                    while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
                        proto = ObjectGetPrototypeOf(proto);
                    }
                    if (!proto && obj[ADD_EVENT_LISTENER]) {
                        proto = obj;
                    }
                    if (!proto) {
                        return false;
                    }
                    if (proto[zoneSymbolAddEventListener]) {
                        return false;
                    }
                    const eventNameToString = patchOptions && patchOptions.eventNameToString;
                    const taskData = {};
                    const nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
                    const nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
                    const nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
                    const nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
                    let nativePrependEventListener;
                    if (patchOptions && patchOptions.prepend) {
                        nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
                    }
                    function checkIsPassive(task) {
                        if (!passiveSupported && typeof taskData.options !== "boolean" && typeof taskData.options !== "undefined" && taskData.options !== null) {
                            task.options = !!taskData.options.capture;
                            taskData.options = task.options;
                        }
                    }
                    const customScheduleGlobal = function(task) {
                        if (taskData.isExisting) {
                            return;
                        }
                        checkIsPassive(task);
                        return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
                    };
                    const customCancelGlobal = function(task) {
                        if (!task.isRemoved) {
                            const symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                            let symbolEventName;
                            if (symbolEventNames) {
                                symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                            }
                            const existingTasks = symbolEventName && task.target[symbolEventName];
                            if (existingTasks) {
                                for (let i = 0; i < existingTasks.length; i++) {
                                    const existingTask = existingTasks[i];
                                    if (existingTask === task) {
                                        existingTasks.splice(i, 1);
                                        task.isRemoved = true;
                                        if (existingTasks.length === 0) {
                                            task.allRemoved = true;
                                            task.target[symbolEventName] = null;
                                        }
                                        break;
                                    }
                                }
                            }
                        }
                        if (!task.allRemoved) {
                            return;
                        }
                        return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
                    };
                    const customScheduleNonGlobal = function(task) {
                        checkIsPassive(task);
                        return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
                    };
                    const customSchedulePrepend = function(task) {
                        return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
                    };
                    const customCancelNonGlobal = function(task) {
                        return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
                    };
                    const customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
                    const customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
                    const compareTaskCallbackVsDelegate = function(task, delegate) {
                        const typeOfDelegate = typeof delegate;
                        return typeOfDelegate === "function" && task.callback === delegate || typeOfDelegate === "object" && task.originalDelegate === delegate;
                    };
                    const compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
                    const blackListedEvents = Zone[zoneSymbol("BLACK_LISTED_EVENTS")];
                    const makeAddListener = function(nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget = false, prepend = false) {
                        return function() {
                            const target = this || _global;
                            let eventName = arguments[0];
                            if (patchOptions && patchOptions.transferEventName) {
                                eventName = patchOptions.transferEventName(eventName);
                            }
                            let delegate = arguments[1];
                            if (!delegate) {
                                return nativeListener.apply(this, arguments);
                            }
                            if (isNode && eventName === "uncaughtException") {
                                return nativeListener.apply(this, arguments);
                            }
                            let isHandleEvent = false;
                            if (typeof delegate !== "function") {
                                if (!delegate.handleEvent) {
                                    return nativeListener.apply(this, arguments);
                                }
                                isHandleEvent = true;
                            }
                            if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                                return;
                            }
                            const options = arguments[2];
                            if (blackListedEvents) {
                                for (let i = 0; i < blackListedEvents.length; i++) {
                                    if (eventName === blackListedEvents[i]) {
                                        return nativeListener.apply(this, arguments);
                                    }
                                }
                            }
                            let capture;
                            let once = false;
                            if (options === undefined) {
                                capture = false;
                            } else if (options === true) {
                                capture = true;
                            } else if (options === false) {
                                capture = false;
                            } else {
                                capture = options ? !!options.capture : false;
                                once = options ? !!options.once : false;
                            }
                            const zone = Zone.current;
                            const symbolEventNames = zoneSymbolEventNames$1[eventName];
                            let symbolEventName;
                            if (!symbolEventNames) {
                                const falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
                                const trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
                                const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                                const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                                zoneSymbolEventNames$1[eventName] = {};
                                zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                                zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                                symbolEventName = capture ? symbolCapture : symbol;
                            } else {
                                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                            }
                            let existingTasks = target[symbolEventName];
                            let isExisting = false;
                            if (existingTasks) {
                                isExisting = true;
                                if (checkDuplicate) {
                                    for (let i = 0; i < existingTasks.length; i++) {
                                        if (compare(existingTasks[i], delegate)) {
                                            return;
                                        }
                                    }
                                }
                            } else {
                                existingTasks = target[symbolEventName] = [];
                            }
                            let source;
                            const constructorName = target.constructor["name"];
                            const targetSource = globalSources[constructorName];
                            if (targetSource) {
                                source = targetSource[eventName];
                            }
                            if (!source) {
                                source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
                            }
                            taskData.options = options;
                            if (once) {
                                taskData.options.once = false;
                            }
                            taskData.target = target;
                            taskData.capture = capture;
                            taskData.eventName = eventName;
                            taskData.isExisting = isExisting;
                            const data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
                            if (data) {
                                data.taskData = taskData;
                            }
                            const task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                            taskData.target = null;
                            if (data) {
                                data.taskData = null;
                            }
                            if (once) {
                                options.once = true;
                            }
                            if (!(!passiveSupported && typeof task.options === "boolean")) {
                                task.options = options;
                            }
                            task.target = target;
                            task.capture = capture;
                            task.eventName = eventName;
                            if (isHandleEvent) {
                                task.originalDelegate = delegate;
                            }
                            if (!prepend) {
                                existingTasks.push(task);
                            } else {
                                existingTasks.unshift(task);
                            }
                            if (returnTarget) {
                                return target;
                            }
                        };
                    };
                    proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
                    if (nativePrependEventListener) {
                        proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
                    }
                    proto[REMOVE_EVENT_LISTENER] = function() {
                        const target = this || _global;
                        let eventName = arguments[0];
                        if (patchOptions && patchOptions.transferEventName) {
                            eventName = patchOptions.transferEventName(eventName);
                        }
                        const options = arguments[2];
                        let capture;
                        if (options === undefined) {
                            capture = false;
                        } else if (options === true) {
                            capture = true;
                        } else if (options === false) {
                            capture = false;
                        } else {
                            capture = options ? !!options.capture : false;
                        }
                        const delegate = arguments[1];
                        if (!delegate) {
                            return nativeRemoveEventListener.apply(this, arguments);
                        }
                        if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                            return;
                        }
                        const symbolEventNames = zoneSymbolEventNames$1[eventName];
                        let symbolEventName;
                        if (symbolEventNames) {
                            symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                        }
                        const existingTasks = symbolEventName && target[symbolEventName];
                        if (existingTasks) {
                            for (let i = 0; i < existingTasks.length; i++) {
                                const existingTask = existingTasks[i];
                                if (compare(existingTask, delegate)) {
                                    existingTasks.splice(i, 1);
                                    existingTask.isRemoved = true;
                                    if (existingTasks.length === 0) {
                                        existingTask.allRemoved = true;
                                        target[symbolEventName] = null;
                                        if (typeof eventName === "string") {
                                            const onPropertySymbol = ZONE_SYMBOL_PREFIX + "ON_PROPERTY" + eventName;
                                            target[onPropertySymbol] = null;
                                        }
                                    }
                                    existingTask.zone.cancelTask(existingTask);
                                    if (returnTarget) {
                                        return target;
                                    }
                                    return;
                                }
                            }
                        }
                        return nativeRemoveEventListener.apply(this, arguments);
                    };
                    proto[LISTENERS_EVENT_LISTENER] = function() {
                        const target = this || _global;
                        let eventName = arguments[0];
                        if (patchOptions && patchOptions.transferEventName) {
                            eventName = patchOptions.transferEventName(eventName);
                        }
                        const listeners = [];
                        const tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
                        for (let i = 0; i < tasks.length; i++) {
                            const task = tasks[i];
                            let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            listeners.push(delegate);
                        }
                        return listeners;
                    };
                    proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function() {
                        const target = this || _global;
                        let eventName = arguments[0];
                        if (!eventName) {
                            const keys = Object.keys(target);
                            for (let i = 0; i < keys.length; i++) {
                                const prop = keys[i];
                                const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                                let evtName = match && match[1];
                                if (evtName && evtName !== "removeListener") {
                                    this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                                }
                            }
                            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, "removeListener");
                        } else {
                            if (patchOptions && patchOptions.transferEventName) {
                                eventName = patchOptions.transferEventName(eventName);
                            }
                            const symbolEventNames = zoneSymbolEventNames$1[eventName];
                            if (symbolEventNames) {
                                const symbolEventName = symbolEventNames[FALSE_STR];
                                const symbolCaptureEventName = symbolEventNames[TRUE_STR];
                                const tasks = target[symbolEventName];
                                const captureTasks = target[symbolCaptureEventName];
                                if (tasks) {
                                    const removeTasks = tasks.slice();
                                    for (let i = 0; i < removeTasks.length; i++) {
                                        const task = removeTasks[i];
                                        let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                                        this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                                    }
                                }
                                if (captureTasks) {
                                    const removeTasks = captureTasks.slice();
                                    for (let i = 0; i < removeTasks.length; i++) {
                                        const task = removeTasks[i];
                                        let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                                        this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                                    }
                                }
                            }
                        }
                        if (returnTarget) {
                            return this;
                        }
                    };
                    attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
                    attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
                    if (nativeRemoveAllListeners) {
                        attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
                    }
                    if (nativeListeners) {
                        attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
                    }
                    return true;
                }
                let results = [];
                for (let i = 0; i < apis.length; i++) {
                    results[i] = patchEventTargetMethods(apis[i], patchOptions);
                }
                return results;
            }
            function findEventTasks(target, eventName) {
                const foundTasks = [];
                for (let prop in target) {
                    const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    let evtName = match && match[1];
                    if (evtName && (!eventName || evtName === eventName)) {
                        const tasks = target[prop];
                        if (tasks) {
                            for (let i = 0; i < tasks.length; i++) {
                                foundTasks.push(tasks[i]);
                            }
                        }
                    }
                }
                return foundTasks;
            }
            function patchEventPrototype(global, api) {
                const Event = global["Event"];
                if (Event && Event.prototype) {
                    api.patchMethod(Event.prototype, "stopImmediatePropagation", (delegate => function(self, args) {
                        self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
                        delegate && delegate.apply(self, args);
                    }));
                }
            }
            /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */            function patchCallbacks(api, target, targetName, method, callbacks) {
                const symbol = Zone.__symbol__(method);
                if (target[symbol]) {
                    return;
                }
                const nativeDelegate = target[symbol] = target[method];
                target[method] = function(name, opts, options) {
                    if (opts && opts.prototype) {
                        callbacks.forEach((function(callback) {
                            const source = `${targetName}.${method}::` + callback;
                            const prototype = opts.prototype;
                            if (prototype.hasOwnProperty(callback)) {
                                const descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
                                if (descriptor && descriptor.value) {
                                    descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
                                    api._redefineProperty(opts.prototype, callback, descriptor);
                                } else if (prototype[callback]) {
                                    prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                                }
                            } else if (prototype[callback]) {
                                prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                            }
                        }));
                    }
                    return nativeDelegate.call(target, name, opts, options);
                };
                api.attachOriginToPatched(target[method], nativeDelegate);
            }
            /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */            const globalEventHandlersEventNames = [ "abort", "animationcancel", "animationend", "animationiteration", "auxclick", "beforeinput", "blur", "cancel", "canplay", "canplaythrough", "change", "compositionstart", "compositionupdate", "compositionend", "cuechange", "click", "close", "contextmenu", "curechange", "dblclick", "drag", "dragend", "dragenter", "dragexit", "dragleave", "dragover", "drop", "durationchange", "emptied", "ended", "error", "focus", "focusin", "focusout", "gotpointercapture", "input", "invalid", "keydown", "keypress", "keyup", "load", "loadstart", "loadeddata", "loadedmetadata", "lostpointercapture", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "orientationchange", "pause", "play", "playing", "pointercancel", "pointerdown", "pointerenter", "pointerleave", "pointerlockchange", "mozpointerlockchange", "webkitpointerlockerchange", "pointerlockerror", "mozpointerlockerror", "webkitpointerlockerror", "pointermove", "pointout", "pointerover", "pointerup", "progress", "ratechange", "reset", "resize", "scroll", "seeked", "seeking", "select", "selectionchange", "selectstart", "show", "sort", "stalled", "submit", "suspend", "timeupdate", "volumechange", "touchcancel", "touchmove", "touchstart", "touchend", "transitioncancel", "transitionend", "waiting", "wheel" ];
            const documentEventNames = [ "afterscriptexecute", "beforescriptexecute", "DOMContentLoaded", "freeze", "fullscreenchange", "mozfullscreenchange", "webkitfullscreenchange", "msfullscreenchange", "fullscreenerror", "mozfullscreenerror", "webkitfullscreenerror", "msfullscreenerror", "readystatechange", "visibilitychange", "resume" ];
            const windowEventNames = [ "absolutedeviceorientation", "afterinput", "afterprint", "appinstalled", "beforeinstallprompt", "beforeprint", "beforeunload", "devicelight", "devicemotion", "deviceorientation", "deviceorientationabsolute", "deviceproximity", "hashchange", "languagechange", "message", "mozbeforepaint", "offline", "online", "paint", "pageshow", "pagehide", "popstate", "rejectionhandled", "storage", "unhandledrejection", "unload", "userproximity", "vrdisplyconnected", "vrdisplaydisconnected", "vrdisplaypresentchange" ];
            const htmlElementEventNames = [ "beforecopy", "beforecut", "beforepaste", "copy", "cut", "paste", "dragstart", "loadend", "animationstart", "search", "transitionrun", "transitionstart", "webkitanimationend", "webkitanimationiteration", "webkitanimationstart", "webkittransitionend" ];
            const mediaElementEventNames = [ "encrypted", "waitingforkey", "msneedkey", "mozinterruptbegin", "mozinterruptend" ];
            const ieElementEventNames = [ "activate", "afterupdate", "ariarequest", "beforeactivate", "beforedeactivate", "beforeeditfocus", "beforeupdate", "cellchange", "controlselect", "dataavailable", "datasetchanged", "datasetcomplete", "errorupdate", "filterchange", "layoutcomplete", "losecapture", "move", "moveend", "movestart", "propertychange", "resizeend", "resizestart", "rowenter", "rowexit", "rowsdelete", "rowsinserted", "command", "compassneedscalibration", "deactivate", "help", "mscontentzoom", "msmanipulationstatechanged", "msgesturechange", "msgesturedoubletap", "msgestureend", "msgesturehold", "msgesturestart", "msgesturetap", "msgotpointercapture", "msinertiastart", "mslostpointercapture", "mspointercancel", "mspointerdown", "mspointerenter", "mspointerhover", "mspointerleave", "mspointermove", "mspointerout", "mspointerover", "mspointerup", "pointerout", "mssitemodejumplistitemremoved", "msthumbnailclick", "stop", "storagecommit" ];
            const webglEventNames = [ "webglcontextrestored", "webglcontextlost", "webglcontextcreationerror" ];
            const formEventNames = [ "autocomplete", "autocompleteerror" ];
            const detailEventNames = [ "toggle" ];
            const frameEventNames = [ "load" ];
            const frameSetEventNames = [ "blur", "error", "focus", "load", "resize", "scroll", "messageerror" ];
            const marqueeEventNames = [ "bounce", "finish", "start" ];
            const XMLHttpRequestEventNames = [ "loadstart", "progress", "abort", "error", "load", "progress", "timeout", "loadend", "readystatechange" ];
            const IDBIndexEventNames = [ "upgradeneeded", "complete", "abort", "success", "error", "blocked", "versionchange", "close" ];
            const websocketEventNames = [ "close", "error", "open", "message" ];
            const workerEventNames = [ "error", "message" ];
            const eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
            function filterProperties(target, onProperties, ignoreProperties) {
                if (!ignoreProperties || ignoreProperties.length === 0) {
                    return onProperties;
                }
                const tip = ignoreProperties.filter((ip => ip.target === target));
                if (!tip || tip.length === 0) {
                    return onProperties;
                }
                const targetIgnoreProperties = tip[0].ignoreProperties;
                return onProperties.filter((op => targetIgnoreProperties.indexOf(op) === -1));
            }
            function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
                if (!target) {
                    return;
                }
                const filteredProperties = filterProperties(target, onProperties, ignoreProperties);
                patchOnProperties(target, filteredProperties, prototype);
            }
            function propertyDescriptorPatch(api, _global) {
                if (isNode && !isMix) {
                    return;
                }
                if (Zone[api.symbol("patchEvents")]) {
                    return;
                }
                const supportsWebSocket = typeof WebSocket !== "undefined";
                const ignoreProperties = _global["__Zone_ignore_on_properties"];
                if (isBrowser) {
                    const internalWindow = window;
                    const ignoreErrorProperties = isIE ? [ {
                        target: internalWindow,
                        ignoreProperties: [ "error" ]
                    } ] : [];
                    patchFilteredProperties(internalWindow, eventNames.concat([ "messageerror" ]), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
                    patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
                    if (typeof internalWindow["SVGElement"] !== "undefined") {
                        patchFilteredProperties(internalWindow["SVGElement"].prototype, eventNames, ignoreProperties);
                    }
                    patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
                    patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
                    patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
                    patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
                    patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
                    patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
                    patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
                    const HTMLMarqueeElement = internalWindow["HTMLMarqueeElement"];
                    if (HTMLMarqueeElement) {
                        patchFilteredProperties(HTMLMarqueeElement.prototype, marqueeEventNames, ignoreProperties);
                    }
                    const Worker = internalWindow["Worker"];
                    if (Worker) {
                        patchFilteredProperties(Worker.prototype, workerEventNames, ignoreProperties);
                    }
                }
                const XMLHttpRequest = _global["XMLHttpRequest"];
                if (XMLHttpRequest) {
                    patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
                }
                const XMLHttpRequestEventTarget = _global["XMLHttpRequestEventTarget"];
                if (XMLHttpRequestEventTarget) {
                    patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
                }
                if (typeof IDBIndex !== "undefined") {
                    patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
                    patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
                    patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
                    patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
                    patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
                    patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
                }
                if (supportsWebSocket) {
                    patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
                }
            }
            /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */            Zone.__load_patch("util", ((global, Zone, api) => {
                api.patchOnProperties = patchOnProperties;
                api.patchMethod = patchMethod;
                api.bindArguments = bindArguments;
                api.patchMacroTask = patchMacroTask;
                const SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__("BLACK_LISTED_EVENTS");
                const SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__("UNPATCHED_EVENTS");
                if (global[SYMBOL_UNPATCHED_EVENTS]) {
                    global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
                }
                if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
                    Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
                }
                api.patchEventPrototype = patchEventPrototype;
                api.patchEventTarget = patchEventTarget;
                api.isIEOrEdge = isIEOrEdge;
                api.ObjectDefineProperty = ObjectDefineProperty;
                api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
                api.ObjectCreate = ObjectCreate;
                api.ArraySlice = ArraySlice;
                api.patchClass = patchClass;
                api.wrapWithCurrentZone = wrapWithCurrentZone;
                api.filterProperties = filterProperties;
                api.attachOriginToPatched = attachOriginToPatched;
                api._redefineProperty = Object.defineProperty;
                api.patchCallbacks = patchCallbacks;
                api.getGlobalObjects = () => ({
                    globalSources: globalSources,
                    zoneSymbolEventNames: zoneSymbolEventNames$1,
                    eventNames: eventNames,
                    isBrowser: isBrowser,
                    isMix: isMix,
                    isNode: isNode,
                    TRUE_STR: TRUE_STR,
                    FALSE_STR: FALSE_STR,
                    ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
                    ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
                    REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
                });
            }));
            /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
            /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */            const taskSymbol = zoneSymbol("zoneTask");
            function patchTimer(window, setName, cancelName, nameSuffix) {
                let setNative = null;
                let clearNative = null;
                setName += nameSuffix;
                cancelName += nameSuffix;
                const tasksByHandleId = {};
                function scheduleTask(task) {
                    const data = task.data;
                    function timer() {
                        try {
                            task.invoke.apply(this, arguments);
                        } finally {
                            if (!(task.data && task.data.isPeriodic)) {
                                if (typeof data.handleId === "number") {
                                    delete tasksByHandleId[data.handleId];
                                } else if (data.handleId) {
                                    data.handleId[taskSymbol] = null;
                                }
                            }
                        }
                    }
                    data.args[0] = timer;
                    data.handleId = setNative.apply(window, data.args);
                    return task;
                }
                function clearTask(task) {
                    return clearNative(task.data.handleId);
                }
                setNative = patchMethod(window, setName, (delegate => function(self, args) {
                    if (typeof args[0] === "function") {
                        const options = {
                            isPeriodic: nameSuffix === "Interval",
                            delay: nameSuffix === "Timeout" || nameSuffix === "Interval" ? args[1] || 0 : undefined,
                            args: args
                        };
                        const task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                        if (!task) {
                            return task;
                        }
                        const handle = task.data.handleId;
                        if (typeof handle === "number") {
                            tasksByHandleId[handle] = task;
                        } else if (handle) {
                            handle[taskSymbol] = task;
                        }
                        if (handle && handle.ref && handle.unref && typeof handle.ref === "function" && typeof handle.unref === "function") {
                            task.ref = handle.ref.bind(handle);
                            task.unref = handle.unref.bind(handle);
                        }
                        if (typeof handle === "number" || handle) {
                            return handle;
                        }
                        return task;
                    } else {
                        return delegate.apply(window, args);
                    }
                }));
                clearNative = patchMethod(window, cancelName, (delegate => function(self, args) {
                    const id = args[0];
                    let task;
                    if (typeof id === "number") {
                        task = tasksByHandleId[id];
                    } else {
                        task = id && id[taskSymbol];
                        if (!task) {
                            task = id;
                        }
                    }
                    if (task && typeof task.type === "string") {
                        if (task.state !== "notScheduled" && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                            if (typeof id === "number") {
                                delete tasksByHandleId[id];
                            } else if (id) {
                                id[taskSymbol] = null;
                            }
                            task.zone.cancelTask(task);
                        }
                    } else {
                        delegate.apply(window, args);
                    }
                }));
            }
            /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */            function patchCustomElements(_global, api) {
                const {isBrowser: isBrowser, isMix: isMix} = api.getGlobalObjects();
                if (!isBrowser && !isMix || !_global["customElements"] || !("customElements" in _global)) {
                    return;
                }
                const callbacks = [ "connectedCallback", "disconnectedCallback", "adoptedCallback", "attributeChangedCallback" ];
                api.patchCallbacks(api, _global.customElements, "customElements", "define", callbacks);
            }
            /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */            function eventTargetPatch(_global, api) {
                if (Zone[api.symbol("patchEventTarget")]) {
                    return;
                }
                const {eventNames: eventNames, zoneSymbolEventNames: zoneSymbolEventNames, TRUE_STR: TRUE_STR, FALSE_STR: FALSE_STR, ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX} = api.getGlobalObjects();
                for (let i = 0; i < eventNames.length; i++) {
                    const eventName = eventNames[i];
                    const falseEventName = eventName + FALSE_STR;
                    const trueEventName = eventName + TRUE_STR;
                    const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames[eventName] = {};
                    zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
                }
                const EVENT_TARGET = _global["EventTarget"];
                if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
                    return;
                }
                api.patchEventTarget(_global, [ EVENT_TARGET && EVENT_TARGET.prototype ]);
                return true;
            }
            function patchEvent(global, api) {
                api.patchEventPrototype(global, api);
            }
            /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */            Zone.__load_patch("legacy", (global => {
                const legacyPatch = global[Zone.__symbol__("legacyPatch")];
                if (legacyPatch) {
                    legacyPatch();
                }
            }));
            Zone.__load_patch("timers", (global => {
                const set = "set";
                const clear = "clear";
                patchTimer(global, set, clear, "Timeout");
                patchTimer(global, set, clear, "Interval");
                patchTimer(global, set, clear, "Immediate");
            }));
            Zone.__load_patch("requestAnimationFrame", (global => {
                patchTimer(global, "request", "cancel", "AnimationFrame");
                patchTimer(global, "mozRequest", "mozCancel", "AnimationFrame");
                patchTimer(global, "webkitRequest", "webkitCancel", "AnimationFrame");
            }));
            Zone.__load_patch("blocking", ((global, Zone) => {
                const blockingMethods = [ "alert", "prompt", "confirm" ];
                for (let i = 0; i < blockingMethods.length; i++) {
                    const name = blockingMethods[i];
                    patchMethod(global, name, ((delegate, symbol, name) => function(s, args) {
                        return Zone.current.run(delegate, global, args, name);
                    }));
                }
            }));
            Zone.__load_patch("EventTarget", ((global, Zone, api) => {
                patchEvent(global, api);
                eventTargetPatch(global, api);
                const XMLHttpRequestEventTarget = global["XMLHttpRequestEventTarget"];
                if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
                    api.patchEventTarget(global, [ XMLHttpRequestEventTarget.prototype ]);
                }
                patchClass("MutationObserver");
                patchClass("WebKitMutationObserver");
                patchClass("IntersectionObserver");
                patchClass("FileReader");
            }));
            Zone.__load_patch("on_property", ((global, Zone, api) => {
                propertyDescriptorPatch(api, global);
            }));
            Zone.__load_patch("customElements", ((global, Zone, api) => {
                patchCustomElements(global, api);
            }));
            Zone.__load_patch("XHR", ((global, Zone) => {
                patchXHR(global);
                const XHR_TASK = zoneSymbol("xhrTask");
                const XHR_SYNC = zoneSymbol("xhrSync");
                const XHR_LISTENER = zoneSymbol("xhrListener");
                const XHR_SCHEDULED = zoneSymbol("xhrScheduled");
                const XHR_URL = zoneSymbol("xhrURL");
                const XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol("xhrErrorBeforeScheduled");
                function patchXHR(window) {
                    const XMLHttpRequest = window["XMLHttpRequest"];
                    if (!XMLHttpRequest) {
                        return;
                    }
                    const XMLHttpRequestPrototype = XMLHttpRequest.prototype;
                    function findPendingTask(target) {
                        return target[XHR_TASK];
                    }
                    let oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                    let oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
                    if (!oriAddListener) {
                        const XMLHttpRequestEventTarget = window["XMLHttpRequestEventTarget"];
                        if (XMLHttpRequestEventTarget) {
                            const XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
                            oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                            oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
                        }
                    }
                    const READY_STATE_CHANGE = "readystatechange";
                    const SCHEDULED = "scheduled";
                    function scheduleTask(task) {
                        const data = task.data;
                        const target = data.target;
                        target[XHR_SCHEDULED] = false;
                        target[XHR_ERROR_BEFORE_SCHEDULED] = false;
                        const listener = target[XHR_LISTENER];
                        if (!oriAddListener) {
                            oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                            oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
                        }
                        if (listener) {
                            oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
                        }
                        const newListener = target[XHR_LISTENER] = () => {
                            if (target.readyState === target.DONE) {
                                if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                                    const loadTasks = target[Zone.__symbol__("loadfalse")];
                                    if (loadTasks && loadTasks.length > 0) {
                                        const oriInvoke = task.invoke;
                                        task.invoke = function() {
                                            const loadTasks = target[Zone.__symbol__("loadfalse")];
                                            for (let i = 0; i < loadTasks.length; i++) {
                                                if (loadTasks[i] === task) {
                                                    loadTasks.splice(i, 1);
                                                }
                                            }
                                            if (!data.aborted && task.state === SCHEDULED) {
                                                oriInvoke.call(task);
                                            }
                                        };
                                        loadTasks.push(task);
                                    } else {
                                        task.invoke();
                                    }
                                } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                                    target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                                }
                            }
                        };
                        oriAddListener.call(target, READY_STATE_CHANGE, newListener);
                        const storedTask = target[XHR_TASK];
                        if (!storedTask) {
                            target[XHR_TASK] = task;
                        }
                        sendNative.apply(target, data.args);
                        target[XHR_SCHEDULED] = true;
                        return task;
                    }
                    function placeholderCallback() {}
                    function clearTask(task) {
                        const data = task.data;
                        data.aborted = true;
                        return abortNative.apply(data.target, data.args);
                    }
                    const openNative = patchMethod(XMLHttpRequestPrototype, "open", (() => function(self, args) {
                        self[XHR_SYNC] = args[2] == false;
                        self[XHR_URL] = args[1];
                        return openNative.apply(self, args);
                    }));
                    const XMLHTTPREQUEST_SOURCE = "XMLHttpRequest.send";
                    const fetchTaskAborting = zoneSymbol("fetchTaskAborting");
                    const fetchTaskScheduling = zoneSymbol("fetchTaskScheduling");
                    const sendNative = patchMethod(XMLHttpRequestPrototype, "send", (() => function(self, args) {
                        if (Zone.current[fetchTaskScheduling] === true) {
                            return sendNative.apply(self, args);
                        }
                        if (self[XHR_SYNC]) {
                            return sendNative.apply(self, args);
                        } else {
                            const options = {
                                target: self,
                                url: self[XHR_URL],
                                isPeriodic: false,
                                args: args,
                                aborted: false
                            };
                            const task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
                            if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted && task.state === SCHEDULED) {
                                task.invoke();
                            }
                        }
                    }));
                    const abortNative = patchMethod(XMLHttpRequestPrototype, "abort", (() => function(self, args) {
                        const task = findPendingTask(self);
                        if (task && typeof task.type == "string") {
                            if (task.cancelFn == null || task.data && task.data.aborted) {
                                return;
                            }
                            task.zone.cancelTask(task);
                        } else if (Zone.current[fetchTaskAborting] === true) {
                            return abortNative.apply(self, args);
                        }
                    }));
                }
            }));
            Zone.__load_patch("geolocation", (global => {
                if (global["navigator"] && global["navigator"].geolocation) {
                    patchPrototype(global["navigator"].geolocation, [ "getCurrentPosition", "watchPosition" ]);
                }
            }));
            Zone.__load_patch("PromiseRejectionEvent", ((global, Zone) => {
                function findPromiseRejectionHandler(evtName) {
                    return function(e) {
                        const eventTasks = findEventTasks(global, evtName);
                        eventTasks.forEach((eventTask => {
                            const PromiseRejectionEvent = global["PromiseRejectionEvent"];
                            if (PromiseRejectionEvent) {
                                const evt = new PromiseRejectionEvent(evtName, {
                                    promise: e.promise,
                                    reason: e.rejection
                                });
                                eventTask.invoke(evt);
                            }
                        }));
                    };
                }
                if (global["PromiseRejectionEvent"]) {
                    Zone[zoneSymbol("unhandledPromiseRejectionHandler")] = findPromiseRejectionHandler("unhandledrejection");
                    Zone[zoneSymbol("rejectionHandledHandler")] = findPromiseRejectionHandler("rejectionhandled");
                }
            }));
            /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */        }));
    },
    "./src/polyfills.ts": 
    /*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
    /*! no exports provided */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var core_js_stable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/stable/array */ "../../node_modules/core-js/stable/array/index.js");
        var core_js_stable_array__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(core_js_stable_array__WEBPACK_IMPORTED_MODULE_1__);
        var core_js_stable_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/stable/object */ "../../node_modules/core-js/stable/object/index.js");
        var core_js_stable_object__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(core_js_stable_object__WEBPACK_IMPORTED_MODULE_2__);
        var classlist_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classlist.js */ "../../node_modules/classlist.js/classList.js");
        var classlist_js__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(classlist_js__WEBPACK_IMPORTED_MODULE_3__);
        var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zone.js/dist/zone */ "../../node_modules/zone.js/dist/zone-evergreen.js");
        var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_4__);
        var intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! intersection-observer */ "../../node_modules/intersection-observer/intersection-observer.js");
        var intersection_observer__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(intersection_observer__WEBPACK_IMPORTED_MODULE_5__);
    },
    2: 
    /*!***********************************************************************************************************************************************************************************!*\
  !*** multi ./src/polyfills.ts C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/jit-polyfills.js ***!
  \***********************************************************************************************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        __webpack_require__(/*! C:\Users\Reian\Desktop\Work\Freelance\boxxer-client-clone\projects\client\src\polyfills.ts */ "./src/polyfills.ts");
        module.exports = __webpack_require__(/*! C:\Users\Reian\Desktop\Work\Freelance\boxxer-client-clone\node_modules\@angular-devkit\build-angular\src\angular-cli-files\models\jit-polyfills.js */ "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/jit-polyfills.js");
    }
}, [ [ 2, "runtime" ] ] ]);