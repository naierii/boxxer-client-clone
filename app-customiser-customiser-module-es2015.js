(window["webpackJsonp"] = window["webpackJsonp"] || []).push([ [ "app-customiser-customiser-module" ], {
    "../../node_modules/dropzone/dist/dropzone.js": 
    /*!********************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/dropzone/dist/dropzone.js ***!
  \********************************************************************************************************/
    /*! no static exports found */ function(module, exports, __webpack_require__) {
        "use strict";
        (function(module) {
            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();
            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }
            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }
            var Emitter = function() {
                function Emitter() {
                    _classCallCheck(this, Emitter);
                }
                _createClass(Emitter, [ {
                    key: "on",
                    value: function on(event, fn) {
                        this._callbacks = this._callbacks || {};
                        if (!this._callbacks[event]) {
                            this._callbacks[event] = [];
                        }
                        this._callbacks[event].push(fn);
                        return this;
                    }
                }, {
                    key: "emit",
                    value: function emit(event) {
                        this._callbacks = this._callbacks || {};
                        var callbacks = this._callbacks[event];
                        if (callbacks) {
                            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                                args[_key - 1] = arguments[_key];
                            }
                            for (var _iterator = callbacks, _isArray = true, _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                                var _ref;
                                if (_isArray) {
                                    if (_i >= _iterator.length) break;
                                    _ref = _iterator[_i++];
                                } else {
                                    _i = _iterator.next();
                                    if (_i.done) break;
                                    _ref = _i.value;
                                }
                                var callback = _ref;
                                callback.apply(this, args);
                            }
                        }
                        return this;
                    }
                }, {
                    key: "off",
                    value: function off(event, fn) {
                        if (!this._callbacks || arguments.length === 0) {
                            this._callbacks = {};
                            return this;
                        }
                        var callbacks = this._callbacks[event];
                        if (!callbacks) {
                            return this;
                        }
                        if (arguments.length === 1) {
                            delete this._callbacks[event];
                            return this;
                        }
                        for (var i = 0; i < callbacks.length; i++) {
                            var callback = callbacks[i];
                            if (callback === fn) {
                                callbacks.splice(i, 1);
                                break;
                            }
                        }
                        return this;
                    }
                } ]);
                return Emitter;
            }();
            var Dropzone = function(_Emitter) {
                _inherits(Dropzone, _Emitter);
                _createClass(Dropzone, null, [ {
                    key: "initClass",
                    value: function initClass() {
                        this.prototype.Emitter = Emitter;
                        this.prototype.events = [ "drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete" ];
                        this.prototype.defaultOptions = {
                            url: null,
                            method: "post",
                            withCredentials: false,
                            timeout: 3e4,
                            parallelUploads: 2,
                            uploadMultiple: false,
                            chunking: false,
                            forceChunking: false,
                            chunkSize: 2e6,
                            parallelChunkUploads: false,
                            retryChunks: false,
                            retryChunksLimit: 3,
                            maxFilesize: 256,
                            paramName: "file",
                            createImageThumbnails: true,
                            maxThumbnailFilesize: 10,
                            thumbnailWidth: 120,
                            thumbnailHeight: 120,
                            thumbnailMethod: "crop",
                            resizeWidth: null,
                            resizeHeight: null,
                            resizeMimeType: null,
                            resizeQuality: .8,
                            resizeMethod: "contain",
                            filesizeBase: 1e3,
                            maxFiles: null,
                            headers: null,
                            clickable: true,
                            ignoreHiddenFiles: true,
                            acceptedFiles: null,
                            acceptedMimeTypes: null,
                            autoProcessQueue: true,
                            autoQueue: true,
                            addRemoveLinks: false,
                            previewsContainer: null,
                            hiddenInputContainer: "body",
                            capture: null,
                            renameFilename: null,
                            renameFile: null,
                            forceFallback: false,
                            dictDefaultMessage: "Drop files here to upload",
                            dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
                            dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
                            dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
                            dictInvalidFileType: "You can't upload files of this type.",
                            dictResponseError: "Server responded with {{statusCode}} code.",
                            dictCancelUpload: "Cancel upload",
                            dictUploadCanceled: "Upload canceled.",
                            dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
                            dictRemoveFile: "Remove file",
                            dictRemoveFileConfirmation: null,
                            dictMaxFilesExceeded: "You can not upload any more files.",
                            dictFileSizeUnits: {
                                tb: "TB",
                                gb: "GB",
                                mb: "MB",
                                kb: "KB",
                                b: "b"
                            },
                            init: function init() {},
                            params: function params(files, xhr, chunk) {
                                if (chunk) {
                                    return {
                                        dzuuid: chunk.file.upload.uuid,
                                        dzchunkindex: chunk.index,
                                        dztotalfilesize: chunk.file.size,
                                        dzchunksize: this.options.chunkSize,
                                        dztotalchunkcount: chunk.file.upload.totalChunkCount,
                                        dzchunkbyteoffset: chunk.index * this.options.chunkSize
                                    };
                                }
                            },
                            accept: function accept(file, done) {
                                return done();
                            },
                            chunksUploaded: function chunksUploaded(file, done) {
                                done();
                            },
                            fallback: function fallback() {
                                var messageElement = void 0;
                                this.element.className = this.element.className + " dz-browser-not-supported";
                                for (var _iterator2 = this.element.getElementsByTagName("div"), _isArray2 = true, _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                                    var _ref2;
                                    if (_isArray2) {
                                        if (_i2 >= _iterator2.length) break;
                                        _ref2 = _iterator2[_i2++];
                                    } else {
                                        _i2 = _iterator2.next();
                                        if (_i2.done) break;
                                        _ref2 = _i2.value;
                                    }
                                    var child = _ref2;
                                    if (/(^| )dz-message($| )/.test(child.className)) {
                                        messageElement = child;
                                        child.className = "dz-message";
                                        break;
                                    }
                                }
                                if (!messageElement) {
                                    messageElement = Dropzone.createElement('<div class="dz-message"><span></span></div>');
                                    this.element.appendChild(messageElement);
                                }
                                var span = messageElement.getElementsByTagName("span")[0];
                                if (span) {
                                    if (span.textContent != null) {
                                        span.textContent = this.options.dictFallbackMessage;
                                    } else if (span.innerText != null) {
                                        span.innerText = this.options.dictFallbackMessage;
                                    }
                                }
                                return this.element.appendChild(this.getFallbackForm());
                            },
                            resize: function resize(file, width, height, resizeMethod) {
                                var info = {
                                    srcX: 0,
                                    srcY: 0,
                                    srcWidth: file.width,
                                    srcHeight: file.height
                                };
                                var srcRatio = file.width / file.height;
                                if (width == null && height == null) {
                                    width = info.srcWidth;
                                    height = info.srcHeight;
                                } else if (width == null) {
                                    width = height * srcRatio;
                                } else if (height == null) {
                                    height = width / srcRatio;
                                }
                                width = Math.min(width, info.srcWidth);
                                height = Math.min(height, info.srcHeight);
                                var trgRatio = width / height;
                                if (info.srcWidth > width || info.srcHeight > height) {
                                    if (resizeMethod === "crop") {
                                        if (srcRatio > trgRatio) {
                                            info.srcHeight = file.height;
                                            info.srcWidth = info.srcHeight * trgRatio;
                                        } else {
                                            info.srcWidth = file.width;
                                            info.srcHeight = info.srcWidth / trgRatio;
                                        }
                                    } else if (resizeMethod === "contain") {
                                        if (srcRatio > trgRatio) {
                                            height = width / srcRatio;
                                        } else {
                                            width = height * srcRatio;
                                        }
                                    } else {
                                        throw new Error("Unknown resizeMethod '" + resizeMethod + "'");
                                    }
                                }
                                info.srcX = (file.width - info.srcWidth) / 2;
                                info.srcY = (file.height - info.srcHeight) / 2;
                                info.trgWidth = width;
                                info.trgHeight = height;
                                return info;
                            },
                            transformFile: function transformFile(file, done) {
                                if ((this.options.resizeWidth || this.options.resizeHeight) && file.type.match(/image.*/)) {
                                    return this.resizeImage(file, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, done);
                                } else {
                                    return done(file);
                                }
                            },
                            previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',
                            drop: function drop(e) {
                                return this.element.classList.remove("dz-drag-hover");
                            },
                            dragstart: function dragstart(e) {},
                            dragend: function dragend(e) {
                                return this.element.classList.remove("dz-drag-hover");
                            },
                            dragenter: function dragenter(e) {
                                return this.element.classList.add("dz-drag-hover");
                            },
                            dragover: function dragover(e) {
                                return this.element.classList.add("dz-drag-hover");
                            },
                            dragleave: function dragleave(e) {
                                return this.element.classList.remove("dz-drag-hover");
                            },
                            paste: function paste(e) {},
                            reset: function reset() {
                                return this.element.classList.remove("dz-started");
                            },
                            addedfile: function addedfile(file) {
                                var _this2 = this;
                                if (this.element === this.previewsContainer) {
                                    this.element.classList.add("dz-started");
                                }
                                if (this.previewsContainer) {
                                    file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
                                    file.previewTemplate = file.previewElement;
                                    this.previewsContainer.appendChild(file.previewElement);
                                    for (var _iterator3 = file.previewElement.querySelectorAll("[data-dz-name]"), _isArray3 = true, _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ;) {
                                        var _ref3;
                                        if (_isArray3) {
                                            if (_i3 >= _iterator3.length) break;
                                            _ref3 = _iterator3[_i3++];
                                        } else {
                                            _i3 = _iterator3.next();
                                            if (_i3.done) break;
                                            _ref3 = _i3.value;
                                        }
                                        var node = _ref3;
                                        node.textContent = file.name;
                                    }
                                    for (var _iterator4 = file.previewElement.querySelectorAll("[data-dz-size]"), _isArray4 = true, _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator](); ;) {
                                        if (_isArray4) {
                                            if (_i4 >= _iterator4.length) break;
                                            node = _iterator4[_i4++];
                                        } else {
                                            _i4 = _iterator4.next();
                                            if (_i4.done) break;
                                            node = _i4.value;
                                        }
                                        node.innerHTML = this.filesize(file.size);
                                    }
                                    if (this.options.addRemoveLinks) {
                                        file._removeLink = Dropzone.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>");
                                        file.previewElement.appendChild(file._removeLink);
                                    }
                                    var removeFileEvent = function removeFileEvent(e) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        if (file.status === Dropzone.UPLOADING) {
                                            return Dropzone.confirm(_this2.options.dictCancelUploadConfirmation, (function() {
                                                return _this2.removeFile(file);
                                            }));
                                        } else {
                                            if (_this2.options.dictRemoveFileConfirmation) {
                                                return Dropzone.confirm(_this2.options.dictRemoveFileConfirmation, (function() {
                                                    return _this2.removeFile(file);
                                                }));
                                            } else {
                                                return _this2.removeFile(file);
                                            }
                                        }
                                    };
                                    for (var _iterator5 = file.previewElement.querySelectorAll("[data-dz-remove]"), _isArray5 = true, _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator](); ;) {
                                        var _ref4;
                                        if (_isArray5) {
                                            if (_i5 >= _iterator5.length) break;
                                            _ref4 = _iterator5[_i5++];
                                        } else {
                                            _i5 = _iterator5.next();
                                            if (_i5.done) break;
                                            _ref4 = _i5.value;
                                        }
                                        var removeLink = _ref4;
                                        removeLink.addEventListener("click", removeFileEvent);
                                    }
                                }
                            },
                            removedfile: function removedfile(file) {
                                if (file.previewElement != null && file.previewElement.parentNode != null) {
                                    file.previewElement.parentNode.removeChild(file.previewElement);
                                }
                                return this._updateMaxFilesReachedClass();
                            },
                            thumbnail: function thumbnail(file, dataUrl) {
                                if (file.previewElement) {
                                    file.previewElement.classList.remove("dz-file-preview");
                                    for (var _iterator6 = file.previewElement.querySelectorAll("[data-dz-thumbnail]"), _isArray6 = true, _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator](); ;) {
                                        var _ref5;
                                        if (_isArray6) {
                                            if (_i6 >= _iterator6.length) break;
                                            _ref5 = _iterator6[_i6++];
                                        } else {
                                            _i6 = _iterator6.next();
                                            if (_i6.done) break;
                                            _ref5 = _i6.value;
                                        }
                                        var thumbnailElement = _ref5;
                                        thumbnailElement.alt = file.name;
                                        thumbnailElement.src = dataUrl;
                                    }
                                    return setTimeout((function() {
                                        return file.previewElement.classList.add("dz-image-preview");
                                    }), 1);
                                }
                            },
                            error: function error(file, message) {
                                if (file.previewElement) {
                                    file.previewElement.classList.add("dz-error");
                                    if (typeof message !== "String" && message.error) {
                                        message = message.error;
                                    }
                                    for (var _iterator7 = file.previewElement.querySelectorAll("[data-dz-errormessage]"), _isArray7 = true, _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator](); ;) {
                                        var _ref6;
                                        if (_isArray7) {
                                            if (_i7 >= _iterator7.length) break;
                                            _ref6 = _iterator7[_i7++];
                                        } else {
                                            _i7 = _iterator7.next();
                                            if (_i7.done) break;
                                            _ref6 = _i7.value;
                                        }
                                        var node = _ref6;
                                        node.textContent = message;
                                    }
                                }
                            },
                            errormultiple: function errormultiple() {},
                            processing: function processing(file) {
                                if (file.previewElement) {
                                    file.previewElement.classList.add("dz-processing");
                                    if (file._removeLink) {
                                        return file._removeLink.innerHTML = this.options.dictCancelUpload;
                                    }
                                }
                            },
                            processingmultiple: function processingmultiple() {},
                            uploadprogress: function uploadprogress(file, progress, bytesSent) {
                                if (file.previewElement) {
                                    for (var _iterator8 = file.previewElement.querySelectorAll("[data-dz-uploadprogress]"), _isArray8 = true, _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator](); ;) {
                                        var _ref7;
                                        if (_isArray8) {
                                            if (_i8 >= _iterator8.length) break;
                                            _ref7 = _iterator8[_i8++];
                                        } else {
                                            _i8 = _iterator8.next();
                                            if (_i8.done) break;
                                            _ref7 = _i8.value;
                                        }
                                        var node = _ref7;
                                        node.nodeName === "PROGRESS" ? node.value = progress : node.style.width = progress + "%";
                                    }
                                }
                            },
                            totaluploadprogress: function totaluploadprogress() {},
                            sending: function sending() {},
                            sendingmultiple: function sendingmultiple() {},
                            success: function success(file) {
                                if (file.previewElement) {
                                    return file.previewElement.classList.add("dz-success");
                                }
                            },
                            successmultiple: function successmultiple() {},
                            canceled: function canceled(file) {
                                return this.emit("error", file, this.options.dictUploadCanceled);
                            },
                            canceledmultiple: function canceledmultiple() {},
                            complete: function complete(file) {
                                if (file._removeLink) {
                                    file._removeLink.innerHTML = this.options.dictRemoveFile;
                                }
                                if (file.previewElement) {
                                    return file.previewElement.classList.add("dz-complete");
                                }
                            },
                            completemultiple: function completemultiple() {},
                            maxfilesexceeded: function maxfilesexceeded() {},
                            maxfilesreached: function maxfilesreached() {},
                            queuecomplete: function queuecomplete() {},
                            addedfiles: function addedfiles() {}
                        };
                        this.prototype._thumbnailQueue = [];
                        this.prototype._processingThumbnail = false;
                    }
                }, {
                    key: "extend",
                    value: function extend(target) {
                        for (var _len2 = arguments.length, objects = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                            objects[_key2 - 1] = arguments[_key2];
                        }
                        for (var _iterator9 = objects, _isArray9 = true, _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : _iterator9[Symbol.iterator](); ;) {
                            var _ref8;
                            if (_isArray9) {
                                if (_i9 >= _iterator9.length) break;
                                _ref8 = _iterator9[_i9++];
                            } else {
                                _i9 = _iterator9.next();
                                if (_i9.done) break;
                                _ref8 = _i9.value;
                            }
                            var object = _ref8;
                            for (var key in object) {
                                var val = object[key];
                                target[key] = val;
                            }
                        }
                        return target;
                    }
                } ]);
                function Dropzone(el, options) {
                    _classCallCheck(this, Dropzone);
                    var _this = _possibleConstructorReturn(this, (Dropzone.__proto__ || Object.getPrototypeOf(Dropzone)).call(this));
                    var fallback = void 0, left = void 0;
                    _this.element = el;
                    _this.version = Dropzone.version;
                    _this.defaultOptions.previewTemplate = _this.defaultOptions.previewTemplate.replace(/\n*/g, "");
                    _this.clickableElements = [];
                    _this.listeners = [];
                    _this.files = [];
                    if (typeof _this.element === "string") {
                        _this.element = document.querySelector(_this.element);
                    }
                    if (!_this.element || _this.element.nodeType == null) {
                        throw new Error("Invalid dropzone element.");
                    }
                    if (_this.element.dropzone) {
                        throw new Error("Dropzone already attached.");
                    }
                    Dropzone.instances.push(_this);
                    _this.element.dropzone = _this;
                    var elementOptions = (left = Dropzone.optionsForElement(_this.element)) != null ? left : {};
                    _this.options = Dropzone.extend({}, _this.defaultOptions, elementOptions, options != null ? options : {});
                    if (_this.options.forceFallback || !Dropzone.isBrowserSupported()) {
                        var _ret;
                        return _ret = _this.options.fallback.call(_this), _possibleConstructorReturn(_this, _ret);
                    }
                    if (_this.options.url == null) {
                        _this.options.url = _this.element.getAttribute("action");
                    }
                    if (!_this.options.url) {
                        throw new Error("No URL provided.");
                    }
                    if (_this.options.acceptedFiles && _this.options.acceptedMimeTypes) {
                        throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
                    }
                    if (_this.options.uploadMultiple && _this.options.chunking) {
                        throw new Error("You cannot set both: uploadMultiple and chunking.");
                    }
                    if (_this.options.acceptedMimeTypes) {
                        _this.options.acceptedFiles = _this.options.acceptedMimeTypes;
                        delete _this.options.acceptedMimeTypes;
                    }
                    if (_this.options.renameFilename != null) {
                        _this.options.renameFile = function(file) {
                            return _this.options.renameFilename.call(_this, file.name, file);
                        };
                    }
                    _this.options.method = _this.options.method.toUpperCase();
                    if ((fallback = _this.getExistingFallback()) && fallback.parentNode) {
                        fallback.parentNode.removeChild(fallback);
                    }
                    if (_this.options.previewsContainer !== false) {
                        if (_this.options.previewsContainer) {
                            _this.previewsContainer = Dropzone.getElement(_this.options.previewsContainer, "previewsContainer");
                        } else {
                            _this.previewsContainer = _this.element;
                        }
                    }
                    if (_this.options.clickable) {
                        if (_this.options.clickable === true) {
                            _this.clickableElements = [ _this.element ];
                        } else {
                            _this.clickableElements = Dropzone.getElements(_this.options.clickable, "clickable");
                        }
                    }
                    _this.init();
                    return _this;
                }
                _createClass(Dropzone, [ {
                    key: "getAcceptedFiles",
                    value: function getAcceptedFiles() {
                        return this.files.filter((function(file) {
                            return file.accepted;
                        })).map((function(file) {
                            return file;
                        }));
                    }
                }, {
                    key: "getRejectedFiles",
                    value: function getRejectedFiles() {
                        return this.files.filter((function(file) {
                            return !file.accepted;
                        })).map((function(file) {
                            return file;
                        }));
                    }
                }, {
                    key: "getFilesWithStatus",
                    value: function getFilesWithStatus(status) {
                        return this.files.filter((function(file) {
                            return file.status === status;
                        })).map((function(file) {
                            return file;
                        }));
                    }
                }, {
                    key: "getQueuedFiles",
                    value: function getQueuedFiles() {
                        return this.getFilesWithStatus(Dropzone.QUEUED);
                    }
                }, {
                    key: "getUploadingFiles",
                    value: function getUploadingFiles() {
                        return this.getFilesWithStatus(Dropzone.UPLOADING);
                    }
                }, {
                    key: "getAddedFiles",
                    value: function getAddedFiles() {
                        return this.getFilesWithStatus(Dropzone.ADDED);
                    }
                }, {
                    key: "getActiveFiles",
                    value: function getActiveFiles() {
                        return this.files.filter((function(file) {
                            return file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED;
                        })).map((function(file) {
                            return file;
                        }));
                    }
                }, {
                    key: "init",
                    value: function init() {
                        var _this3 = this;
                        if (this.element.tagName === "form") {
                            this.element.setAttribute("enctype", "multipart/form-data");
                        }
                        if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
                            this.element.appendChild(Dropzone.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>"));
                        }
                        if (this.clickableElements.length) {
                            var setupHiddenFileInput = function setupHiddenFileInput() {
                                if (_this3.hiddenFileInput) {
                                    _this3.hiddenFileInput.parentNode.removeChild(_this3.hiddenFileInput);
                                }
                                _this3.hiddenFileInput = document.createElement("input");
                                _this3.hiddenFileInput.setAttribute("type", "file");
                                if (_this3.options.maxFiles === null || _this3.options.maxFiles > 1) {
                                    _this3.hiddenFileInput.setAttribute("multiple", "multiple");
                                }
                                _this3.hiddenFileInput.className = "dz-hidden-input";
                                if (_this3.options.acceptedFiles !== null) {
                                    _this3.hiddenFileInput.setAttribute("accept", _this3.options.acceptedFiles);
                                }
                                if (_this3.options.capture !== null) {
                                    _this3.hiddenFileInput.setAttribute("capture", _this3.options.capture);
                                }
                                _this3.hiddenFileInput.style.visibility = "hidden";
                                _this3.hiddenFileInput.style.position = "absolute";
                                _this3.hiddenFileInput.style.top = "0";
                                _this3.hiddenFileInput.style.left = "0";
                                _this3.hiddenFileInput.style.height = "0";
                                _this3.hiddenFileInput.style.width = "0";
                                Dropzone.getElement(_this3.options.hiddenInputContainer, "hiddenInputContainer").appendChild(_this3.hiddenFileInput);
                                return _this3.hiddenFileInput.addEventListener("change", (function() {
                                    var files = _this3.hiddenFileInput.files;
                                    if (files.length) {
                                        for (var _iterator10 = files, _isArray10 = true, _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : _iterator10[Symbol.iterator](); ;) {
                                            var _ref9;
                                            if (_isArray10) {
                                                if (_i10 >= _iterator10.length) break;
                                                _ref9 = _iterator10[_i10++];
                                            } else {
                                                _i10 = _iterator10.next();
                                                if (_i10.done) break;
                                                _ref9 = _i10.value;
                                            }
                                            var file = _ref9;
                                            _this3.addFile(file);
                                        }
                                    }
                                    _this3.emit("addedfiles", files);
                                    return setupHiddenFileInput();
                                }));
                            };
                            setupHiddenFileInput();
                        }
                        this.URL = window.URL !== null ? window.URL : window.webkitURL;
                        for (var _iterator11 = this.events, _isArray11 = true, _i11 = 0, _iterator11 = _isArray11 ? _iterator11 : _iterator11[Symbol.iterator](); ;) {
                            var _ref10;
                            if (_isArray11) {
                                if (_i11 >= _iterator11.length) break;
                                _ref10 = _iterator11[_i11++];
                            } else {
                                _i11 = _iterator11.next();
                                if (_i11.done) break;
                                _ref10 = _i11.value;
                            }
                            var eventName = _ref10;
                            this.on(eventName, this.options[eventName]);
                        }
                        this.on("uploadprogress", (function() {
                            return _this3.updateTotalUploadProgress();
                        }));
                        this.on("removedfile", (function() {
                            return _this3.updateTotalUploadProgress();
                        }));
                        this.on("canceled", (function(file) {
                            return _this3.emit("complete", file);
                        }));
                        this.on("complete", (function(file) {
                            if (_this3.getAddedFiles().length === 0 && _this3.getUploadingFiles().length === 0 && _this3.getQueuedFiles().length === 0) {
                                return setTimeout((function() {
                                    return _this3.emit("queuecomplete");
                                }), 0);
                            }
                        }));
                        var noPropagation = function noPropagation(e) {
                            e.stopPropagation();
                            if (e.preventDefault) {
                                return e.preventDefault();
                            } else {
                                return e.returnValue = false;
                            }
                        };
                        this.listeners = [ {
                            element: this.element,
                            events: {
                                dragstart: function dragstart(e) {
                                    return _this3.emit("dragstart", e);
                                },
                                dragenter: function dragenter(e) {
                                    noPropagation(e);
                                    return _this3.emit("dragenter", e);
                                },
                                dragover: function dragover(e) {
                                    var efct = void 0;
                                    try {
                                        efct = e.dataTransfer.effectAllowed;
                                    } catch (error) {}
                                    e.dataTransfer.dropEffect = "move" === efct || "linkMove" === efct ? "move" : "copy";
                                    noPropagation(e);
                                    return _this3.emit("dragover", e);
                                },
                                dragleave: function dragleave(e) {
                                    return _this3.emit("dragleave", e);
                                },
                                drop: function drop(e) {
                                    noPropagation(e);
                                    return _this3.drop(e);
                                },
                                dragend: function dragend(e) {
                                    return _this3.emit("dragend", e);
                                }
                            }
                        } ];
                        this.clickableElements.forEach((function(clickableElement) {
                            return _this3.listeners.push({
                                element: clickableElement,
                                events: {
                                    click: function click(evt) {
                                        if (clickableElement !== _this3.element || evt.target === _this3.element || Dropzone.elementInside(evt.target, _this3.element.querySelector(".dz-message"))) {
                                            _this3.hiddenFileInput.click();
                                        }
                                        return true;
                                    }
                                }
                            });
                        }));
                        this.enable();
                        return this.options.init.call(this);
                    }
                }, {
                    key: "destroy",
                    value: function destroy() {
                        this.disable();
                        this.removeAllFiles(true);
                        if (this.hiddenFileInput != null ? this.hiddenFileInput.parentNode : undefined) {
                            this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
                            this.hiddenFileInput = null;
                        }
                        delete this.element.dropzone;
                        return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
                    }
                }, {
                    key: "updateTotalUploadProgress",
                    value: function updateTotalUploadProgress() {
                        var totalUploadProgress = void 0;
                        var totalBytesSent = 0;
                        var totalBytes = 0;
                        var activeFiles = this.getActiveFiles();
                        if (activeFiles.length) {
                            for (var _iterator12 = this.getActiveFiles(), _isArray12 = true, _i12 = 0, _iterator12 = _isArray12 ? _iterator12 : _iterator12[Symbol.iterator](); ;) {
                                var _ref11;
                                if (_isArray12) {
                                    if (_i12 >= _iterator12.length) break;
                                    _ref11 = _iterator12[_i12++];
                                } else {
                                    _i12 = _iterator12.next();
                                    if (_i12.done) break;
                                    _ref11 = _i12.value;
                                }
                                var file = _ref11;
                                totalBytesSent += file.upload.bytesSent;
                                totalBytes += file.upload.total;
                            }
                            totalUploadProgress = 100 * totalBytesSent / totalBytes;
                        } else {
                            totalUploadProgress = 100;
                        }
                        return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
                    }
                }, {
                    key: "_getParamName",
                    value: function _getParamName(n) {
                        if (typeof this.options.paramName === "function") {
                            return this.options.paramName(n);
                        } else {
                            return "" + this.options.paramName + (this.options.uploadMultiple ? "[" + n + "]" : "");
                        }
                    }
                }, {
                    key: "_renameFile",
                    value: function _renameFile(file) {
                        if (typeof this.options.renameFile !== "function") {
                            return file.name;
                        }
                        return this.options.renameFile(file);
                    }
                }, {
                    key: "getFallbackForm",
                    value: function getFallbackForm() {
                        var existingFallback = void 0, form = void 0;
                        if (existingFallback = this.getExistingFallback()) {
                            return existingFallback;
                        }
                        var fieldsString = '<div class="dz-fallback">';
                        if (this.options.dictFallbackText) {
                            fieldsString += "<p>" + this.options.dictFallbackText + "</p>";
                        }
                        fieldsString += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : undefined) + ' /><input type="submit" value="Upload!"></div>';
                        var fields = Dropzone.createElement(fieldsString);
                        if (this.element.tagName !== "FORM") {
                            form = Dropzone.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>');
                            form.appendChild(fields);
                        } else {
                            this.element.setAttribute("enctype", "multipart/form-data");
                            this.element.setAttribute("method", this.options.method);
                        }
                        return form != null ? form : fields;
                    }
                }, {
                    key: "getExistingFallback",
                    value: function getExistingFallback() {
                        var getFallback = function getFallback(elements) {
                            for (var _iterator13 = elements, _isArray13 = true, _i13 = 0, _iterator13 = _isArray13 ? _iterator13 : _iterator13[Symbol.iterator](); ;) {
                                var _ref12;
                                if (_isArray13) {
                                    if (_i13 >= _iterator13.length) break;
                                    _ref12 = _iterator13[_i13++];
                                } else {
                                    _i13 = _iterator13.next();
                                    if (_i13.done) break;
                                    _ref12 = _i13.value;
                                }
                                var el = _ref12;
                                if (/(^| )fallback($| )/.test(el.className)) {
                                    return el;
                                }
                            }
                        };
                        var _arr = [ "div", "form" ];
                        for (var _i14 = 0; _i14 < _arr.length; _i14++) {
                            var tagName = _arr[_i14];
                            var fallback;
                            if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
                                return fallback;
                            }
                        }
                    }
                }, {
                    key: "setupEventListeners",
                    value: function setupEventListeners() {
                        return this.listeners.map((function(elementListeners) {
                            return function() {
                                var result = [];
                                for (var event in elementListeners.events) {
                                    var listener = elementListeners.events[event];
                                    result.push(elementListeners.element.addEventListener(event, listener, false));
                                }
                                return result;
                            }();
                        }));
                    }
                }, {
                    key: "removeEventListeners",
                    value: function removeEventListeners() {
                        return this.listeners.map((function(elementListeners) {
                            return function() {
                                var result = [];
                                for (var event in elementListeners.events) {
                                    var listener = elementListeners.events[event];
                                    result.push(elementListeners.element.removeEventListener(event, listener, false));
                                }
                                return result;
                            }();
                        }));
                    }
                }, {
                    key: "disable",
                    value: function disable() {
                        var _this4 = this;
                        this.clickableElements.forEach((function(element) {
                            return element.classList.remove("dz-clickable");
                        }));
                        this.removeEventListeners();
                        this.disabled = true;
                        return this.files.map((function(file) {
                            return _this4.cancelUpload(file);
                        }));
                    }
                }, {
                    key: "enable",
                    value: function enable() {
                        delete this.disabled;
                        this.clickableElements.forEach((function(element) {
                            return element.classList.add("dz-clickable");
                        }));
                        return this.setupEventListeners();
                    }
                }, {
                    key: "filesize",
                    value: function filesize(size) {
                        var selectedSize = 0;
                        var selectedUnit = "b";
                        if (size > 0) {
                            var units = [ "tb", "gb", "mb", "kb", "b" ];
                            for (var i = 0; i < units.length; i++) {
                                var unit = units[i];
                                var cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;
                                if (size >= cutoff) {
                                    selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
                                    selectedUnit = unit;
                                    break;
                                }
                            }
                            selectedSize = Math.round(10 * selectedSize) / 10;
                        }
                        return "<strong>" + selectedSize + "</strong> " + this.options.dictFileSizeUnits[selectedUnit];
                    }
                }, {
                    key: "_updateMaxFilesReachedClass",
                    value: function _updateMaxFilesReachedClass() {
                        if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
                            if (this.getAcceptedFiles().length === this.options.maxFiles) {
                                this.emit("maxfilesreached", this.files);
                            }
                            return this.element.classList.add("dz-max-files-reached");
                        } else {
                            return this.element.classList.remove("dz-max-files-reached");
                        }
                    }
                }, {
                    key: "drop",
                    value: function drop(e) {
                        if (!e.dataTransfer) {
                            return;
                        }
                        this.emit("drop", e);
                        var files = [];
                        for (var i = 0; i < e.dataTransfer.files.length; i++) {
                            files[i] = e.dataTransfer.files[i];
                        }
                        this.emit("addedfiles", files);
                        if (files.length) {
                            var items = e.dataTransfer.items;
                            if (items && items.length && items[0].webkitGetAsEntry != null) {
                                this._addFilesFromItems(items);
                            } else {
                                this.handleFiles(files);
                            }
                        }
                    }
                }, {
                    key: "paste",
                    value: function paste(e) {
                        if (__guard__(e != null ? e.clipboardData : undefined, (function(x) {
                            return x.items;
                        })) == null) {
                            return;
                        }
                        this.emit("paste", e);
                        var items = e.clipboardData.items;
                        if (items.length) {
                            return this._addFilesFromItems(items);
                        }
                    }
                }, {
                    key: "handleFiles",
                    value: function handleFiles(files) {
                        for (var _iterator14 = files, _isArray14 = true, _i15 = 0, _iterator14 = _isArray14 ? _iterator14 : _iterator14[Symbol.iterator](); ;) {
                            var _ref13;
                            if (_isArray14) {
                                if (_i15 >= _iterator14.length) break;
                                _ref13 = _iterator14[_i15++];
                            } else {
                                _i15 = _iterator14.next();
                                if (_i15.done) break;
                                _ref13 = _i15.value;
                            }
                            var file = _ref13;
                            this.addFile(file);
                        }
                    }
                }, {
                    key: "_addFilesFromItems",
                    value: function _addFilesFromItems(items) {
                        var _this5 = this;
                        return function() {
                            var result = [];
                            for (var _iterator15 = items, _isArray15 = true, _i16 = 0, _iterator15 = _isArray15 ? _iterator15 : _iterator15[Symbol.iterator](); ;) {
                                var _ref14;
                                if (_isArray15) {
                                    if (_i16 >= _iterator15.length) break;
                                    _ref14 = _iterator15[_i16++];
                                } else {
                                    _i16 = _iterator15.next();
                                    if (_i16.done) break;
                                    _ref14 = _i16.value;
                                }
                                var item = _ref14;
                                var entry;
                                if (item.webkitGetAsEntry != null && (entry = item.webkitGetAsEntry())) {
                                    if (entry.isFile) {
                                        result.push(_this5.addFile(item.getAsFile()));
                                    } else if (entry.isDirectory) {
                                        result.push(_this5._addFilesFromDirectory(entry, entry.name));
                                    } else {
                                        result.push(undefined);
                                    }
                                } else if (item.getAsFile != null) {
                                    if (item.kind == null || item.kind === "file") {
                                        result.push(_this5.addFile(item.getAsFile()));
                                    } else {
                                        result.push(undefined);
                                    }
                                } else {
                                    result.push(undefined);
                                }
                            }
                            return result;
                        }();
                    }
                }, {
                    key: "_addFilesFromDirectory",
                    value: function _addFilesFromDirectory(directory, path) {
                        var _this6 = this;
                        var dirReader = directory.createReader();
                        var errorHandler = function errorHandler(error) {
                            return __guardMethod__(console, "log", (function(o) {
                                return o.log(error);
                            }));
                        };
                        var readEntries = function readEntries() {
                            return dirReader.readEntries((function(entries) {
                                if (entries.length > 0) {
                                    for (var _iterator16 = entries, _isArray16 = true, _i17 = 0, _iterator16 = _isArray16 ? _iterator16 : _iterator16[Symbol.iterator](); ;) {
                                        var _ref15;
                                        if (_isArray16) {
                                            if (_i17 >= _iterator16.length) break;
                                            _ref15 = _iterator16[_i17++];
                                        } else {
                                            _i17 = _iterator16.next();
                                            if (_i17.done) break;
                                            _ref15 = _i17.value;
                                        }
                                        var entry = _ref15;
                                        if (entry.isFile) {
                                            entry.file((function(file) {
                                                if (_this6.options.ignoreHiddenFiles && file.name.substring(0, 1) === ".") {
                                                    return;
                                                }
                                                file.fullPath = path + "/" + file.name;
                                                return _this6.addFile(file);
                                            }));
                                        } else if (entry.isDirectory) {
                                            _this6._addFilesFromDirectory(entry, path + "/" + entry.name);
                                        }
                                    }
                                    readEntries();
                                }
                                return null;
                            }), errorHandler);
                        };
                        return readEntries();
                    }
                }, {
                    key: "accept",
                    value: function accept(file, done) {
                        if (this.options.maxFilesize && file.size > this.options.maxFilesize * 1024 * 1024) {
                            return done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
                        } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {
                            return done(this.options.dictInvalidFileType);
                        } else if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
                            done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
                            return this.emit("maxfilesexceeded", file);
                        } else {
                            return this.options.accept.call(this, file, done);
                        }
                    }
                }, {
                    key: "addFile",
                    value: function addFile(file) {
                        var _this7 = this;
                        file.upload = {
                            uuid: Dropzone.uuidv4(),
                            progress: 0,
                            total: file.size,
                            bytesSent: 0,
                            filename: this._renameFile(file),
                            chunked: this.options.chunking && (this.options.forceChunking || file.size > this.options.chunkSize),
                            totalChunkCount: Math.ceil(file.size / this.options.chunkSize)
                        };
                        this.files.push(file);
                        file.status = Dropzone.ADDED;
                        this.emit("addedfile", file);
                        this._enqueueThumbnail(file);
                        return this.accept(file, (function(error) {
                            if (error) {
                                file.accepted = false;
                                _this7._errorProcessing([ file ], error);
                            } else {
                                file.accepted = true;
                                if (_this7.options.autoQueue) {
                                    _this7.enqueueFile(file);
                                }
                            }
                            return _this7._updateMaxFilesReachedClass();
                        }));
                    }
                }, {
                    key: "enqueueFiles",
                    value: function enqueueFiles(files) {
                        for (var _iterator17 = files, _isArray17 = true, _i18 = 0, _iterator17 = _isArray17 ? _iterator17 : _iterator17[Symbol.iterator](); ;) {
                            var _ref16;
                            if (_isArray17) {
                                if (_i18 >= _iterator17.length) break;
                                _ref16 = _iterator17[_i18++];
                            } else {
                                _i18 = _iterator17.next();
                                if (_i18.done) break;
                                _ref16 = _i18.value;
                            }
                            var file = _ref16;
                            this.enqueueFile(file);
                        }
                        return null;
                    }
                }, {
                    key: "enqueueFile",
                    value: function enqueueFile(file) {
                        var _this8 = this;
                        if (file.status === Dropzone.ADDED && file.accepted === true) {
                            file.status = Dropzone.QUEUED;
                            if (this.options.autoProcessQueue) {
                                return setTimeout((function() {
                                    return _this8.processQueue();
                                }), 0);
                            }
                        } else {
                            throw new Error("This file can't be queued because it has already been processed or was rejected.");
                        }
                    }
                }, {
                    key: "_enqueueThumbnail",
                    value: function _enqueueThumbnail(file) {
                        var _this9 = this;
                        if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
                            this._thumbnailQueue.push(file);
                            return setTimeout((function() {
                                return _this9._processThumbnailQueue();
                            }), 0);
                        }
                    }
                }, {
                    key: "_processThumbnailQueue",
                    value: function _processThumbnailQueue() {
                        var _this10 = this;
                        if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
                            return;
                        }
                        this._processingThumbnail = true;
                        var file = this._thumbnailQueue.shift();
                        return this.createThumbnail(file, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, true, (function(dataUrl) {
                            _this10.emit("thumbnail", file, dataUrl);
                            _this10._processingThumbnail = false;
                            return _this10._processThumbnailQueue();
                        }));
                    }
                }, {
                    key: "removeFile",
                    value: function removeFile(file) {
                        if (file.status === Dropzone.UPLOADING) {
                            this.cancelUpload(file);
                        }
                        this.files = without(this.files, file);
                        this.emit("removedfile", file);
                        if (this.files.length === 0) {
                            return this.emit("reset");
                        }
                    }
                }, {
                    key: "removeAllFiles",
                    value: function removeAllFiles(cancelIfNecessary) {
                        if (cancelIfNecessary == null) {
                            cancelIfNecessary = false;
                        }
                        for (var _iterator18 = this.files.slice(), _isArray18 = true, _i19 = 0, _iterator18 = _isArray18 ? _iterator18 : _iterator18[Symbol.iterator](); ;) {
                            var _ref17;
                            if (_isArray18) {
                                if (_i19 >= _iterator18.length) break;
                                _ref17 = _iterator18[_i19++];
                            } else {
                                _i19 = _iterator18.next();
                                if (_i19.done) break;
                                _ref17 = _i19.value;
                            }
                            var file = _ref17;
                            if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
                                this.removeFile(file);
                            }
                        }
                        return null;
                    }
                }, {
                    key: "resizeImage",
                    value: function resizeImage(file, width, height, resizeMethod, callback) {
                        var _this11 = this;
                        return this.createThumbnail(file, width, height, resizeMethod, true, (function(dataUrl, canvas) {
                            if (canvas == null) {
                                return callback(file);
                            } else {
                                var resizeMimeType = _this11.options.resizeMimeType;
                                if (resizeMimeType == null) {
                                    resizeMimeType = file.type;
                                }
                                var resizedDataURL = canvas.toDataURL(resizeMimeType, _this11.options.resizeQuality);
                                if (resizeMimeType === "image/jpeg" || resizeMimeType === "image/jpg") {
                                    resizedDataURL = ExifRestore.restore(file.dataURL, resizedDataURL);
                                }
                                return callback(Dropzone.dataURItoBlob(resizedDataURL));
                            }
                        }));
                    }
                }, {
                    key: "createThumbnail",
                    value: function createThumbnail(file, width, height, resizeMethod, fixOrientation, callback) {
                        var _this12 = this;
                        var fileReader = new FileReader;
                        fileReader.onload = function() {
                            file.dataURL = fileReader.result;
                            if (file.type === "image/svg+xml") {
                                if (callback != null) {
                                    callback(fileReader.result);
                                }
                                return;
                            }
                            return _this12.createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback);
                        };
                        return fileReader.readAsDataURL(file);
                    }
                }, {
                    key: "createThumbnailFromUrl",
                    value: function createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback, crossOrigin) {
                        var _this13 = this;
                        var img = document.createElement("img");
                        if (crossOrigin) {
                            img.crossOrigin = crossOrigin;
                        }
                        img.onload = function() {
                            var loadExif = function loadExif(callback) {
                                return callback(1);
                            };
                            if (typeof EXIF !== "undefined" && EXIF !== null && fixOrientation) {
                                loadExif = function loadExif(callback) {
                                    return EXIF.getData(img, (function() {
                                        return callback(EXIF.getTag(this, "Orientation"));
                                    }));
                                };
                            }
                            return loadExif((function(orientation) {
                                file.width = img.width;
                                file.height = img.height;
                                var resizeInfo = _this13.options.resize.call(_this13, file, width, height, resizeMethod);
                                var canvas = document.createElement("canvas");
                                var ctx = canvas.getContext("2d");
                                canvas.width = resizeInfo.trgWidth;
                                canvas.height = resizeInfo.trgHeight;
                                if (orientation > 4) {
                                    canvas.width = resizeInfo.trgHeight;
                                    canvas.height = resizeInfo.trgWidth;
                                }
                                switch (orientation) {
                                  case 2:
                                    ctx.translate(canvas.width, 0);
                                    ctx.scale(-1, 1);
                                    break;

                                  case 3:
                                    ctx.translate(canvas.width, canvas.height);
                                    ctx.rotate(Math.PI);
                                    break;

                                  case 4:
                                    ctx.translate(0, canvas.height);
                                    ctx.scale(1, -1);
                                    break;

                                  case 5:
                                    ctx.rotate(.5 * Math.PI);
                                    ctx.scale(1, -1);
                                    break;

                                  case 6:
                                    ctx.rotate(.5 * Math.PI);
                                    ctx.translate(0, -canvas.width);
                                    break;

                                  case 7:
                                    ctx.rotate(.5 * Math.PI);
                                    ctx.translate(canvas.height, -canvas.width);
                                    ctx.scale(-1, 1);
                                    break;

                                  case 8:
                                    ctx.rotate(-.5 * Math.PI);
                                    ctx.translate(-canvas.height, 0);
                                    break;
                                }
                                drawImageIOSFix(ctx, img, resizeInfo.srcX != null ? resizeInfo.srcX : 0, resizeInfo.srcY != null ? resizeInfo.srcY : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, resizeInfo.trgX != null ? resizeInfo.trgX : 0, resizeInfo.trgY != null ? resizeInfo.trgY : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
                                var thumbnail = canvas.toDataURL("image/png");
                                if (callback != null) {
                                    return callback(thumbnail, canvas);
                                }
                            }));
                        };
                        if (callback != null) {
                            img.onerror = callback;
                        }
                        return img.src = file.dataURL;
                    }
                }, {
                    key: "processQueue",
                    value: function processQueue() {
                        var parallelUploads = this.options.parallelUploads;
                        var processingLength = this.getUploadingFiles().length;
                        var i = processingLength;
                        if (processingLength >= parallelUploads) {
                            return;
                        }
                        var queuedFiles = this.getQueuedFiles();
                        if (!(queuedFiles.length > 0)) {
                            return;
                        }
                        if (this.options.uploadMultiple) {
                            return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
                        } else {
                            while (i < parallelUploads) {
                                if (!queuedFiles.length) {
                                    return;
                                }
                                this.processFile(queuedFiles.shift());
                                i++;
                            }
                        }
                    }
                }, {
                    key: "processFile",
                    value: function processFile(file) {
                        return this.processFiles([ file ]);
                    }
                }, {
                    key: "processFiles",
                    value: function processFiles(files) {
                        for (var _iterator19 = files, _isArray19 = true, _i20 = 0, _iterator19 = _isArray19 ? _iterator19 : _iterator19[Symbol.iterator](); ;) {
                            var _ref18;
                            if (_isArray19) {
                                if (_i20 >= _iterator19.length) break;
                                _ref18 = _iterator19[_i20++];
                            } else {
                                _i20 = _iterator19.next();
                                if (_i20.done) break;
                                _ref18 = _i20.value;
                            }
                            var file = _ref18;
                            file.processing = true;
                            file.status = Dropzone.UPLOADING;
                            this.emit("processing", file);
                        }
                        if (this.options.uploadMultiple) {
                            this.emit("processingmultiple", files);
                        }
                        return this.uploadFiles(files);
                    }
                }, {
                    key: "_getFilesWithXhr",
                    value: function _getFilesWithXhr(xhr) {
                        var files = void 0;
                        return files = this.files.filter((function(file) {
                            return file.xhr === xhr;
                        })).map((function(file) {
                            return file;
                        }));
                    }
                }, {
                    key: "cancelUpload",
                    value: function cancelUpload(file) {
                        if (file.status === Dropzone.UPLOADING) {
                            var groupedFiles = this._getFilesWithXhr(file.xhr);
                            for (var _iterator20 = groupedFiles, _isArray20 = true, _i21 = 0, _iterator20 = _isArray20 ? _iterator20 : _iterator20[Symbol.iterator](); ;) {
                                var _ref19;
                                if (_isArray20) {
                                    if (_i21 >= _iterator20.length) break;
                                    _ref19 = _iterator20[_i21++];
                                } else {
                                    _i21 = _iterator20.next();
                                    if (_i21.done) break;
                                    _ref19 = _i21.value;
                                }
                                var groupedFile = _ref19;
                                groupedFile.status = Dropzone.CANCELED;
                            }
                            if (typeof file.xhr !== "undefined") {
                                file.xhr.abort();
                            }
                            for (var _iterator21 = groupedFiles, _isArray21 = true, _i22 = 0, _iterator21 = _isArray21 ? _iterator21 : _iterator21[Symbol.iterator](); ;) {
                                var _ref20;
                                if (_isArray21) {
                                    if (_i22 >= _iterator21.length) break;
                                    _ref20 = _iterator21[_i22++];
                                } else {
                                    _i22 = _iterator21.next();
                                    if (_i22.done) break;
                                    _ref20 = _i22.value;
                                }
                                var _groupedFile = _ref20;
                                this.emit("canceled", _groupedFile);
                            }
                            if (this.options.uploadMultiple) {
                                this.emit("canceledmultiple", groupedFiles);
                            }
                        } else if (file.status === Dropzone.ADDED || file.status === Dropzone.QUEUED) {
                            file.status = Dropzone.CANCELED;
                            this.emit("canceled", file);
                            if (this.options.uploadMultiple) {
                                this.emit("canceledmultiple", [ file ]);
                            }
                        }
                        if (this.options.autoProcessQueue) {
                            return this.processQueue();
                        }
                    }
                }, {
                    key: "resolveOption",
                    value: function resolveOption(option) {
                        if (typeof option === "function") {
                            for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                                args[_key3 - 1] = arguments[_key3];
                            }
                            return option.apply(this, args);
                        }
                        return option;
                    }
                }, {
                    key: "uploadFile",
                    value: function uploadFile(file) {
                        return this.uploadFiles([ file ]);
                    }
                }, {
                    key: "uploadFiles",
                    value: function uploadFiles(files) {
                        var _this14 = this;
                        this._transformFiles(files, (function(transformedFiles) {
                            if (files[0].upload.chunked) {
                                var file = files[0];
                                var transformedFile = transformedFiles[0];
                                var startedChunkCount = 0;
                                file.upload.chunks = [];
                                var handleNextChunk = function handleNextChunk() {
                                    var chunkIndex = 0;
                                    while (file.upload.chunks[chunkIndex] !== undefined) {
                                        chunkIndex++;
                                    }
                                    if (chunkIndex >= file.upload.totalChunkCount) return;
                                    startedChunkCount++;
                                    var start = chunkIndex * _this14.options.chunkSize;
                                    var end = Math.min(start + _this14.options.chunkSize, file.size);
                                    var dataBlock = {
                                        name: _this14._getParamName(0),
                                        data: transformedFile.webkitSlice ? transformedFile.webkitSlice(start, end) : transformedFile.slice(start, end),
                                        filename: file.upload.filename,
                                        chunkIndex: chunkIndex
                                    };
                                    file.upload.chunks[chunkIndex] = {
                                        file: file,
                                        index: chunkIndex,
                                        dataBlock: dataBlock,
                                        status: Dropzone.UPLOADING,
                                        progress: 0,
                                        retries: 0
                                    };
                                    _this14._uploadData(files, [ dataBlock ]);
                                };
                                file.upload.finishedChunkUpload = function(chunk) {
                                    var allFinished = true;
                                    chunk.status = Dropzone.SUCCESS;
                                    chunk.dataBlock = null;
                                    chunk.xhr = null;
                                    for (var i = 0; i < file.upload.totalChunkCount; i++) {
                                        if (file.upload.chunks[i] === undefined) {
                                            return handleNextChunk();
                                        }
                                        if (file.upload.chunks[i].status !== Dropzone.SUCCESS) {
                                            allFinished = false;
                                        }
                                    }
                                    if (allFinished) {
                                        _this14.options.chunksUploaded(file, (function() {
                                            _this14._finished(files, "", null);
                                        }));
                                    }
                                };
                                if (_this14.options.parallelChunkUploads) {
                                    for (var i = 0; i < file.upload.totalChunkCount; i++) {
                                        handleNextChunk();
                                    }
                                } else {
                                    handleNextChunk();
                                }
                            } else {
                                var dataBlocks = [];
                                for (var _i23 = 0; _i23 < files.length; _i23++) {
                                    dataBlocks[_i23] = {
                                        name: _this14._getParamName(_i23),
                                        data: transformedFiles[_i23],
                                        filename: files[_i23].upload.filename
                                    };
                                }
                                _this14._uploadData(files, dataBlocks);
                            }
                        }));
                    }
                }, {
                    key: "_getChunk",
                    value: function _getChunk(file, xhr) {
                        for (var i = 0; i < file.upload.totalChunkCount; i++) {
                            if (file.upload.chunks[i] !== undefined && file.upload.chunks[i].xhr === xhr) {
                                return file.upload.chunks[i];
                            }
                        }
                    }
                }, {
                    key: "_uploadData",
                    value: function _uploadData(files, dataBlocks) {
                        var _this15 = this;
                        var xhr = new XMLHttpRequest;
                        for (var _iterator22 = files, _isArray22 = true, _i24 = 0, _iterator22 = _isArray22 ? _iterator22 : _iterator22[Symbol.iterator](); ;) {
                            var _ref21;
                            if (_isArray22) {
                                if (_i24 >= _iterator22.length) break;
                                _ref21 = _iterator22[_i24++];
                            } else {
                                _i24 = _iterator22.next();
                                if (_i24.done) break;
                                _ref21 = _i24.value;
                            }
                            var file = _ref21;
                            file.xhr = xhr;
                        }
                        if (files[0].upload.chunked) {
                            files[0].upload.chunks[dataBlocks[0].chunkIndex].xhr = xhr;
                        }
                        var method = this.resolveOption(this.options.method, files);
                        var url = this.resolveOption(this.options.url, files);
                        xhr.open(method, url, true);
                        xhr.timeout = this.resolveOption(this.options.timeout, files);
                        xhr.withCredentials = !!this.options.withCredentials;
                        xhr.onload = function(e) {
                            _this15._finishedUploading(files, xhr, e);
                        };
                        xhr.onerror = function() {
                            _this15._handleUploadError(files, xhr);
                        };
                        var progressObj = xhr.upload != null ? xhr.upload : xhr;
                        progressObj.onprogress = function(e) {
                            return _this15._updateFilesUploadProgress(files, xhr, e);
                        };
                        var headers = {
                            Accept: "application/json",
                            "Cache-Control": "no-cache",
                            "X-Requested-With": "XMLHttpRequest"
                        };
                        if (this.options.headers) {
                            Dropzone.extend(headers, this.options.headers);
                        }
                        for (var headerName in headers) {
                            var headerValue = headers[headerName];
                            if (headerValue) {
                                xhr.setRequestHeader(headerName, headerValue);
                            }
                        }
                        var formData = new FormData;
                        if (this.options.params) {
                            var additionalParams = this.options.params;
                            if (typeof additionalParams === "function") {
                                additionalParams = additionalParams.call(this, files, xhr, files[0].upload.chunked ? this._getChunk(files[0], xhr) : null);
                            }
                            for (var key in additionalParams) {
                                var value = additionalParams[key];
                                formData.append(key, value);
                            }
                        }
                        for (var _iterator23 = files, _isArray23 = true, _i25 = 0, _iterator23 = _isArray23 ? _iterator23 : _iterator23[Symbol.iterator](); ;) {
                            var _ref22;
                            if (_isArray23) {
                                if (_i25 >= _iterator23.length) break;
                                _ref22 = _iterator23[_i25++];
                            } else {
                                _i25 = _iterator23.next();
                                if (_i25.done) break;
                                _ref22 = _i25.value;
                            }
                            var _file = _ref22;
                            this.emit("sending", _file, xhr, formData);
                        }
                        if (this.options.uploadMultiple) {
                            this.emit("sendingmultiple", files, xhr, formData);
                        }
                        this._addFormElementData(formData);
                        for (var i = 0; i < dataBlocks.length; i++) {
                            var dataBlock = dataBlocks[i];
                            formData.append(dataBlock.name, dataBlock.data, dataBlock.filename);
                        }
                        this.submitRequest(xhr, formData, files);
                    }
                }, {
                    key: "_transformFiles",
                    value: function _transformFiles(files, done) {
                        var _this16 = this;
                        var transformedFiles = [];
                        var doneCounter = 0;
                        var _loop = function _loop(i) {
                            _this16.options.transformFile.call(_this16, files[i], (function(transformedFile) {
                                transformedFiles[i] = transformedFile;
                                if (++doneCounter === files.length) {
                                    done(transformedFiles);
                                }
                            }));
                        };
                        for (var i = 0; i < files.length; i++) {
                            _loop(i);
                        }
                    }
                }, {
                    key: "_addFormElementData",
                    value: function _addFormElementData(formData) {
                        if (this.element.tagName === "FORM") {
                            for (var _iterator24 = this.element.querySelectorAll("input, textarea, select, button"), _isArray24 = true, _i26 = 0, _iterator24 = _isArray24 ? _iterator24 : _iterator24[Symbol.iterator](); ;) {
                                var _ref23;
                                if (_isArray24) {
                                    if (_i26 >= _iterator24.length) break;
                                    _ref23 = _iterator24[_i26++];
                                } else {
                                    _i26 = _iterator24.next();
                                    if (_i26.done) break;
                                    _ref23 = _i26.value;
                                }
                                var input = _ref23;
                                var inputName = input.getAttribute("name");
                                var inputType = input.getAttribute("type");
                                if (inputType) inputType = inputType.toLowerCase();
                                if (typeof inputName === "undefined" || inputName === null) continue;
                                if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
                                    for (var _iterator25 = input.options, _isArray25 = true, _i27 = 0, _iterator25 = _isArray25 ? _iterator25 : _iterator25[Symbol.iterator](); ;) {
                                        var _ref24;
                                        if (_isArray25) {
                                            if (_i27 >= _iterator25.length) break;
                                            _ref24 = _iterator25[_i27++];
                                        } else {
                                            _i27 = _iterator25.next();
                                            if (_i27.done) break;
                                            _ref24 = _i27.value;
                                        }
                                        var option = _ref24;
                                        if (option.selected) {
                                            formData.append(inputName, option.value);
                                        }
                                    }
                                } else if (!inputType || inputType !== "checkbox" && inputType !== "radio" || input.checked) {
                                    formData.append(inputName, input.value);
                                }
                            }
                        }
                    }
                }, {
                    key: "_updateFilesUploadProgress",
                    value: function _updateFilesUploadProgress(files, xhr, e) {
                        var progress = void 0;
                        if (typeof e !== "undefined") {
                            progress = 100 * e.loaded / e.total;
                            if (files[0].upload.chunked) {
                                var file = files[0];
                                var chunk = this._getChunk(file, xhr);
                                chunk.progress = progress;
                                chunk.total = e.total;
                                chunk.bytesSent = e.loaded;
                                var fileProgress = 0, fileTotal = void 0, fileBytesSent = void 0;
                                file.upload.progress = 0;
                                file.upload.total = 0;
                                file.upload.bytesSent = 0;
                                for (var i = 0; i < file.upload.totalChunkCount; i++) {
                                    if (file.upload.chunks[i] !== undefined && file.upload.chunks[i].progress !== undefined) {
                                        file.upload.progress += file.upload.chunks[i].progress;
                                        file.upload.total += file.upload.chunks[i].total;
                                        file.upload.bytesSent += file.upload.chunks[i].bytesSent;
                                    }
                                }
                                file.upload.progress = file.upload.progress / file.upload.totalChunkCount;
                            } else {
                                for (var _iterator26 = files, _isArray26 = true, _i28 = 0, _iterator26 = _isArray26 ? _iterator26 : _iterator26[Symbol.iterator](); ;) {
                                    var _ref25;
                                    if (_isArray26) {
                                        if (_i28 >= _iterator26.length) break;
                                        _ref25 = _iterator26[_i28++];
                                    } else {
                                        _i28 = _iterator26.next();
                                        if (_i28.done) break;
                                        _ref25 = _i28.value;
                                    }
                                    var _file2 = _ref25;
                                    _file2.upload.progress = progress;
                                    _file2.upload.total = e.total;
                                    _file2.upload.bytesSent = e.loaded;
                                }
                            }
                            for (var _iterator27 = files, _isArray27 = true, _i29 = 0, _iterator27 = _isArray27 ? _iterator27 : _iterator27[Symbol.iterator](); ;) {
                                var _ref26;
                                if (_isArray27) {
                                    if (_i29 >= _iterator27.length) break;
                                    _ref26 = _iterator27[_i29++];
                                } else {
                                    _i29 = _iterator27.next();
                                    if (_i29.done) break;
                                    _ref26 = _i29.value;
                                }
                                var _file3 = _ref26;
                                this.emit("uploadprogress", _file3, _file3.upload.progress, _file3.upload.bytesSent);
                            }
                        } else {
                            var allFilesFinished = true;
                            progress = 100;
                            for (var _iterator28 = files, _isArray28 = true, _i30 = 0, _iterator28 = _isArray28 ? _iterator28 : _iterator28[Symbol.iterator](); ;) {
                                var _ref27;
                                if (_isArray28) {
                                    if (_i30 >= _iterator28.length) break;
                                    _ref27 = _iterator28[_i30++];
                                } else {
                                    _i30 = _iterator28.next();
                                    if (_i30.done) break;
                                    _ref27 = _i30.value;
                                }
                                var _file4 = _ref27;
                                if (_file4.upload.progress !== 100 || _file4.upload.bytesSent !== _file4.upload.total) {
                                    allFilesFinished = false;
                                }
                                _file4.upload.progress = progress;
                                _file4.upload.bytesSent = _file4.upload.total;
                            }
                            if (allFilesFinished) {
                                return;
                            }
                            for (var _iterator29 = files, _isArray29 = true, _i31 = 0, _iterator29 = _isArray29 ? _iterator29 : _iterator29[Symbol.iterator](); ;) {
                                var _ref28;
                                if (_isArray29) {
                                    if (_i31 >= _iterator29.length) break;
                                    _ref28 = _iterator29[_i31++];
                                } else {
                                    _i31 = _iterator29.next();
                                    if (_i31.done) break;
                                    _ref28 = _i31.value;
                                }
                                var _file5 = _ref28;
                                this.emit("uploadprogress", _file5, progress, _file5.upload.bytesSent);
                            }
                        }
                    }
                }, {
                    key: "_finishedUploading",
                    value: function _finishedUploading(files, xhr, e) {
                        var response = void 0;
                        if (files[0].status === Dropzone.CANCELED) {
                            return;
                        }
                        if (xhr.readyState !== 4) {
                            return;
                        }
                        if (xhr.responseType !== "arraybuffer" && xhr.responseType !== "blob") {
                            response = xhr.responseText;
                            if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
                                try {
                                    response = JSON.parse(response);
                                } catch (error) {
                                    e = error;
                                    response = "Invalid JSON response from server.";
                                }
                            }
                        }
                        this._updateFilesUploadProgress(files);
                        if (!(200 <= xhr.status && xhr.status < 300)) {
                            this._handleUploadError(files, xhr, response);
                        } else {
                            if (files[0].upload.chunked) {
                                files[0].upload.finishedChunkUpload(this._getChunk(files[0], xhr));
                            } else {
                                this._finished(files, response, e);
                            }
                        }
                    }
                }, {
                    key: "_handleUploadError",
                    value: function _handleUploadError(files, xhr, response) {
                        if (files[0].status === Dropzone.CANCELED) {
                            return;
                        }
                        if (files[0].upload.chunked && this.options.retryChunks) {
                            var chunk = this._getChunk(files[0], xhr);
                            if (chunk.retries++ < this.options.retryChunksLimit) {
                                this._uploadData(files, [ chunk.dataBlock ]);
                                return;
                            } else {
                                console.warn("Retried this chunk too often. Giving up.");
                            }
                        }
                        for (var _iterator30 = files, _isArray30 = true, _i32 = 0, _iterator30 = _isArray30 ? _iterator30 : _iterator30[Symbol.iterator](); ;) {
                            var _ref29;
                            if (_isArray30) {
                                if (_i32 >= _iterator30.length) break;
                                _ref29 = _iterator30[_i32++];
                            } else {
                                _i32 = _iterator30.next();
                                if (_i32.done) break;
                                _ref29 = _i32.value;
                            }
                            var file = _ref29;
                            this._errorProcessing(files, response || this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr);
                        }
                    }
                }, {
                    key: "submitRequest",
                    value: function submitRequest(xhr, formData, files) {
                        xhr.send(formData);
                    }
                }, {
                    key: "_finished",
                    value: function _finished(files, responseText, e) {
                        for (var _iterator31 = files, _isArray31 = true, _i33 = 0, _iterator31 = _isArray31 ? _iterator31 : _iterator31[Symbol.iterator](); ;) {
                            var _ref30;
                            if (_isArray31) {
                                if (_i33 >= _iterator31.length) break;
                                _ref30 = _iterator31[_i33++];
                            } else {
                                _i33 = _iterator31.next();
                                if (_i33.done) break;
                                _ref30 = _i33.value;
                            }
                            var file = _ref30;
                            file.status = Dropzone.SUCCESS;
                            this.emit("success", file, responseText, e);
                            this.emit("complete", file);
                        }
                        if (this.options.uploadMultiple) {
                            this.emit("successmultiple", files, responseText, e);
                            this.emit("completemultiple", files);
                        }
                        if (this.options.autoProcessQueue) {
                            return this.processQueue();
                        }
                    }
                }, {
                    key: "_errorProcessing",
                    value: function _errorProcessing(files, message, xhr) {
                        for (var _iterator32 = files, _isArray32 = true, _i34 = 0, _iterator32 = _isArray32 ? _iterator32 : _iterator32[Symbol.iterator](); ;) {
                            var _ref31;
                            if (_isArray32) {
                                if (_i34 >= _iterator32.length) break;
                                _ref31 = _iterator32[_i34++];
                            } else {
                                _i34 = _iterator32.next();
                                if (_i34.done) break;
                                _ref31 = _i34.value;
                            }
                            var file = _ref31;
                            file.status = Dropzone.ERROR;
                            this.emit("error", file, message, xhr);
                            this.emit("complete", file);
                        }
                        if (this.options.uploadMultiple) {
                            this.emit("errormultiple", files, message, xhr);
                            this.emit("completemultiple", files);
                        }
                        if (this.options.autoProcessQueue) {
                            return this.processQueue();
                        }
                    }
                } ], [ {
                    key: "uuidv4",
                    value: function uuidv4() {
                        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(c) {
                            var r = Math.random() * 16 | 0, v = c === "x" ? r : r & 3 | 8;
                            return v.toString(16);
                        }));
                    }
                } ]);
                return Dropzone;
            }(Emitter);
            Dropzone.initClass();
            Dropzone.version = "5.5.1";
            Dropzone.options = {};
            Dropzone.optionsForElement = function(element) {
                if (element.getAttribute("id")) {
                    return Dropzone.options[camelize(element.getAttribute("id"))];
                } else {
                    return undefined;
                }
            };
            Dropzone.instances = [];
            Dropzone.forElement = function(element) {
                if (typeof element === "string") {
                    element = document.querySelector(element);
                }
                if ((element != null ? element.dropzone : undefined) == null) {
                    throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
                }
                return element.dropzone;
            };
            Dropzone.autoDiscover = true;
            Dropzone.discover = function() {
                var dropzones = void 0;
                if (document.querySelectorAll) {
                    dropzones = document.querySelectorAll(".dropzone");
                } else {
                    dropzones = [];
                    var checkElements = function checkElements(elements) {
                        return function() {
                            var result = [];
                            for (var _iterator33 = elements, _isArray33 = true, _i35 = 0, _iterator33 = _isArray33 ? _iterator33 : _iterator33[Symbol.iterator](); ;) {
                                var _ref32;
                                if (_isArray33) {
                                    if (_i35 >= _iterator33.length) break;
                                    _ref32 = _iterator33[_i35++];
                                } else {
                                    _i35 = _iterator33.next();
                                    if (_i35.done) break;
                                    _ref32 = _i35.value;
                                }
                                var el = _ref32;
                                if (/(^| )dropzone($| )/.test(el.className)) {
                                    result.push(dropzones.push(el));
                                } else {
                                    result.push(undefined);
                                }
                            }
                            return result;
                        }();
                    };
                    checkElements(document.getElementsByTagName("div"));
                    checkElements(document.getElementsByTagName("form"));
                }
                return function() {
                    var result = [];
                    for (var _iterator34 = dropzones, _isArray34 = true, _i36 = 0, _iterator34 = _isArray34 ? _iterator34 : _iterator34[Symbol.iterator](); ;) {
                        var _ref33;
                        if (_isArray34) {
                            if (_i36 >= _iterator34.length) break;
                            _ref33 = _iterator34[_i36++];
                        } else {
                            _i36 = _iterator34.next();
                            if (_i36.done) break;
                            _ref33 = _i36.value;
                        }
                        var dropzone = _ref33;
                        if (Dropzone.optionsForElement(dropzone) !== false) {
                            result.push(new Dropzone(dropzone));
                        } else {
                            result.push(undefined);
                        }
                    }
                    return result;
                }();
            };
            Dropzone.blacklistedBrowsers = [ /opera.*(Macintosh|Windows Phone).*version\/12/i ];
            Dropzone.isBrowserSupported = function() {
                var capableBrowser = true;
                if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
                    if (!("classList" in document.createElement("a"))) {
                        capableBrowser = false;
                    } else {
                        for (var _iterator35 = Dropzone.blacklistedBrowsers, _isArray35 = true, _i37 = 0, _iterator35 = _isArray35 ? _iterator35 : _iterator35[Symbol.iterator](); ;) {
                            var _ref34;
                            if (_isArray35) {
                                if (_i37 >= _iterator35.length) break;
                                _ref34 = _iterator35[_i37++];
                            } else {
                                _i37 = _iterator35.next();
                                if (_i37.done) break;
                                _ref34 = _i37.value;
                            }
                            var regex = _ref34;
                            if (regex.test(navigator.userAgent)) {
                                capableBrowser = false;
                                continue;
                            }
                        }
                    }
                } else {
                    capableBrowser = false;
                }
                return capableBrowser;
            };
            Dropzone.dataURItoBlob = function(dataURI) {
                var byteString = atob(dataURI.split(",")[1]);
                var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
                var ab = new ArrayBuffer(byteString.length);
                var ia = new Uint8Array(ab);
                for (var i = 0, end = byteString.length, asc = 0 <= end; asc ? i <= end : i >= end; asc ? i++ : i--) {
                    ia[i] = byteString.charCodeAt(i);
                }
                return new Blob([ ab ], {
                    type: mimeString
                });
            };
            var without = function without(list, rejectedItem) {
                return list.filter((function(item) {
                    return item !== rejectedItem;
                })).map((function(item) {
                    return item;
                }));
            };
            var camelize = function camelize(str) {
                return str.replace(/[\-_](\w)/g, (function(match) {
                    return match.charAt(1).toUpperCase();
                }));
            };
            Dropzone.createElement = function(string) {
                var div = document.createElement("div");
                div.innerHTML = string;
                return div.childNodes[0];
            };
            Dropzone.elementInside = function(element, container) {
                if (element === container) {
                    return true;
                }
                while (element = element.parentNode) {
                    if (element === container) {
                        return true;
                    }
                }
                return false;
            };
            Dropzone.getElement = function(el, name) {
                var element = void 0;
                if (typeof el === "string") {
                    element = document.querySelector(el);
                } else if (el.nodeType != null) {
                    element = el;
                }
                if (element == null) {
                    throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector or a plain HTML element.");
                }
                return element;
            };
            Dropzone.getElements = function(els, name) {
                var el = void 0, elements = void 0;
                if (els instanceof Array) {
                    elements = [];
                    try {
                        for (var _iterator36 = els, _isArray36 = true, _i38 = 0, _iterator36 = _isArray36 ? _iterator36 : _iterator36[Symbol.iterator](); ;) {
                            if (_isArray36) {
                                if (_i38 >= _iterator36.length) break;
                                el = _iterator36[_i38++];
                            } else {
                                _i38 = _iterator36.next();
                                if (_i38.done) break;
                                el = _i38.value;
                            }
                            elements.push(this.getElement(el, name));
                        }
                    } catch (e) {
                        elements = null;
                    }
                } else if (typeof els === "string") {
                    elements = [];
                    for (var _iterator37 = document.querySelectorAll(els), _isArray37 = true, _i39 = 0, _iterator37 = _isArray37 ? _iterator37 : _iterator37[Symbol.iterator](); ;) {
                        if (_isArray37) {
                            if (_i39 >= _iterator37.length) break;
                            el = _iterator37[_i39++];
                        } else {
                            _i39 = _iterator37.next();
                            if (_i39.done) break;
                            el = _i39.value;
                        }
                        elements.push(el);
                    }
                } else if (els.nodeType != null) {
                    elements = [ els ];
                }
                if (elements == null || !elements.length) {
                    throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
                }
                return elements;
            };
            Dropzone.confirm = function(question, accepted, rejected) {
                if (window.confirm(question)) {
                    return accepted();
                } else if (rejected != null) {
                    return rejected();
                }
            };
            Dropzone.isValidFile = function(file, acceptedFiles) {
                if (!acceptedFiles) {
                    return true;
                }
                acceptedFiles = acceptedFiles.split(",");
                var mimeType = file.type;
                var baseMimeType = mimeType.replace(/\/.*$/, "");
                for (var _iterator38 = acceptedFiles, _isArray38 = true, _i40 = 0, _iterator38 = _isArray38 ? _iterator38 : _iterator38[Symbol.iterator](); ;) {
                    var _ref35;
                    if (_isArray38) {
                        if (_i40 >= _iterator38.length) break;
                        _ref35 = _iterator38[_i40++];
                    } else {
                        _i40 = _iterator38.next();
                        if (_i40.done) break;
                        _ref35 = _i40.value;
                    }
                    var validType = _ref35;
                    validType = validType.trim();
                    if (validType.charAt(0) === ".") {
                        if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
                            return true;
                        }
                    } else if (/\/\*$/.test(validType)) {
                        if (baseMimeType === validType.replace(/\/.*$/, "")) {
                            return true;
                        }
                    } else {
                        if (mimeType === validType) {
                            return true;
                        }
                    }
                }
                return false;
            };
            if (typeof jQuery !== "undefined" && jQuery !== null) {
                jQuery.fn.dropzone = function(options) {
                    return this.each((function() {
                        return new Dropzone(this, options);
                    }));
                };
            }
            if (true && module !== null) {
                module.exports = Dropzone;
            } else {
                window.Dropzone = Dropzone;
            }
            Dropzone.ADDED = "added";
            Dropzone.QUEUED = "queued";
            Dropzone.ACCEPTED = Dropzone.QUEUED;
            Dropzone.UPLOADING = "uploading";
            Dropzone.PROCESSING = Dropzone.UPLOADING;
            Dropzone.CANCELED = "canceled";
            Dropzone.ERROR = "error";
            Dropzone.SUCCESS = "success";
            var detectVerticalSquash = function detectVerticalSquash(img) {
                var iw = img.naturalWidth;
                var ih = img.naturalHeight;
                var canvas = document.createElement("canvas");
                canvas.width = 1;
                canvas.height = ih;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
                var _ctx$getImageData = ctx.getImageData(1, 0, 1, ih), data = _ctx$getImageData.data;
                var sy = 0;
                var ey = ih;
                var py = ih;
                while (py > sy) {
                    var alpha = data[(py - 1) * 4 + 3];
                    if (alpha === 0) {
                        ey = py;
                    } else {
                        sy = py;
                    }
                    py = ey + sy >> 1;
                }
                var ratio = py / ih;
                if (ratio === 0) {
                    return 1;
                } else {
                    return ratio;
                }
            };
            var drawImageIOSFix = function drawImageIOSFix(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
                var vertSquashRatio = detectVerticalSquash(img);
                return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
            };
            var ExifRestore = function() {
                function ExifRestore() {
                    _classCallCheck(this, ExifRestore);
                }
                _createClass(ExifRestore, null, [ {
                    key: "initClass",
                    value: function initClass() {
                        this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                    }
                }, {
                    key: "encode64",
                    value: function encode64(input) {
                        var output = "";
                        var chr1 = undefined;
                        var chr2 = undefined;
                        var chr3 = "";
                        var enc1 = undefined;
                        var enc2 = undefined;
                        var enc3 = undefined;
                        var enc4 = "";
                        var i = 0;
                        while (true) {
                            chr1 = input[i++];
                            chr2 = input[i++];
                            chr3 = input[i++];
                            enc1 = chr1 >> 2;
                            enc2 = (chr1 & 3) << 4 | chr2 >> 4;
                            enc3 = (chr2 & 15) << 2 | chr3 >> 6;
                            enc4 = chr3 & 63;
                            if (isNaN(chr2)) {
                                enc3 = enc4 = 64;
                            } else if (isNaN(chr3)) {
                                enc4 = 64;
                            }
                            output = output + this.KEY_STR.charAt(enc1) + this.KEY_STR.charAt(enc2) + this.KEY_STR.charAt(enc3) + this.KEY_STR.charAt(enc4);
                            chr1 = chr2 = chr3 = "";
                            enc1 = enc2 = enc3 = enc4 = "";
                            if (!(i < input.length)) {
                                break;
                            }
                        }
                        return output;
                    }
                }, {
                    key: "restore",
                    value: function restore(origFileBase64, resizedFileBase64) {
                        if (!origFileBase64.match("data:image/jpeg;base64,")) {
                            return resizedFileBase64;
                        }
                        var rawImage = this.decode64(origFileBase64.replace("data:image/jpeg;base64,", ""));
                        var segments = this.slice2Segments(rawImage);
                        var image = this.exifManipulation(resizedFileBase64, segments);
                        return "data:image/jpeg;base64," + this.encode64(image);
                    }
                }, {
                    key: "exifManipulation",
                    value: function exifManipulation(resizedFileBase64, segments) {
                        var exifArray = this.getExifArray(segments);
                        var newImageArray = this.insertExif(resizedFileBase64, exifArray);
                        var aBuffer = new Uint8Array(newImageArray);
                        return aBuffer;
                    }
                }, {
                    key: "getExifArray",
                    value: function getExifArray(segments) {
                        var seg = undefined;
                        var x = 0;
                        while (x < segments.length) {
                            seg = segments[x];
                            if (seg[0] === 255 & seg[1] === 225) {
                                return seg;
                            }
                            x++;
                        }
                        return [];
                    }
                }, {
                    key: "insertExif",
                    value: function insertExif(resizedFileBase64, exifArray) {
                        var imageData = resizedFileBase64.replace("data:image/jpeg;base64,", "");
                        var buf = this.decode64(imageData);
                        var separatePoint = buf.indexOf(255, 3);
                        var mae = buf.slice(0, separatePoint);
                        var ato = buf.slice(separatePoint);
                        var array = mae;
                        array = array.concat(exifArray);
                        array = array.concat(ato);
                        return array;
                    }
                }, {
                    key: "slice2Segments",
                    value: function slice2Segments(rawImageArray) {
                        var head = 0;
                        var segments = [];
                        while (true) {
                            var length;
                            if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 218) {
                                break;
                            }
                            if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 216) {
                                head += 2;
                            } else {
                                length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3];
                                var endPoint = head + length + 2;
                                var seg = rawImageArray.slice(head, endPoint);
                                segments.push(seg);
                                head = endPoint;
                            }
                            if (head > rawImageArray.length) {
                                break;
                            }
                        }
                        return segments;
                    }
                }, {
                    key: "decode64",
                    value: function decode64(input) {
                        var output = "";
                        var chr1 = undefined;
                        var chr2 = undefined;
                        var chr3 = "";
                        var enc1 = undefined;
                        var enc2 = undefined;
                        var enc3 = undefined;
                        var enc4 = "";
                        var i = 0;
                        var buf = [];
                        var base64test = /[^A-Za-z0-9\+\/\=]/g;
                        if (base64test.exec(input)) {
                            console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding.");
                        }
                        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                        while (true) {
                            enc1 = this.KEY_STR.indexOf(input.charAt(i++));
                            enc2 = this.KEY_STR.indexOf(input.charAt(i++));
                            enc3 = this.KEY_STR.indexOf(input.charAt(i++));
                            enc4 = this.KEY_STR.indexOf(input.charAt(i++));
                            chr1 = enc1 << 2 | enc2 >> 4;
                            chr2 = (enc2 & 15) << 4 | enc3 >> 2;
                            chr3 = (enc3 & 3) << 6 | enc4;
                            buf.push(chr1);
                            if (enc3 !== 64) {
                                buf.push(chr2);
                            }
                            if (enc4 !== 64) {
                                buf.push(chr3);
                            }
                            chr1 = chr2 = chr3 = "";
                            enc1 = enc2 = enc3 = enc4 = "";
                            if (!(i < input.length)) {
                                break;
                            }
                        }
                        return buf;
                    }
                } ]);
                return ExifRestore;
            }();
            ExifRestore.initClass();
            var contentLoaded = function contentLoaded(win, fn) {
                var done = false;
                var top = true;
                var doc = win.document;
                var root = doc.documentElement;
                var add = doc.addEventListener ? "addEventListener" : "attachEvent";
                var rem = doc.addEventListener ? "removeEventListener" : "detachEvent";
                var pre = doc.addEventListener ? "" : "on";
                var init = function init(e) {
                    if (e.type === "readystatechange" && doc.readyState !== "complete") {
                        return;
                    }
                    (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);
                    if (!done && (done = true)) {
                        return fn.call(win, e.type || e);
                    }
                };
                var poll = function poll() {
                    try {
                        root.doScroll("left");
                    } catch (e) {
                        setTimeout(poll, 50);
                        return;
                    }
                    return init("poll");
                };
                if (doc.readyState !== "complete") {
                    if (doc.createEventObject && root.doScroll) {
                        try {
                            top = !win.frameElement;
                        } catch (error) {}
                        if (top) {
                            poll();
                        }
                    }
                    doc[add](pre + "DOMContentLoaded", init, false);
                    doc[add](pre + "readystatechange", init, false);
                    return win[add](pre + "load", init, false);
                }
            };
            Dropzone._autoDiscoverFunction = function() {
                if (Dropzone.autoDiscover) {
                    return Dropzone.discover();
                }
            };
            contentLoaded(window, Dropzone._autoDiscoverFunction);
            function __guard__(value, transform) {
                return typeof value !== "undefined" && value !== null ? transform(value) : undefined;
            }
            function __guardMethod__(obj, methodName, transform) {
                if (typeof obj !== "undefined" && obj !== null && typeof obj[methodName] === "function") {
                    return transform(obj, methodName);
                } else {
                    return undefined;
                }
            }
        }).call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "../../node_modules/webpack/buildin/module.js")(module));
    },
    "../../node_modules/ngx-dropzone-wrapper/dist/ngx-dropzone-wrapper.es5.js": 
    /*!************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/ngx-dropzone-wrapper/dist/ngx-dropzone-wrapper.es5.js ***!
  \************************************************************************************************************************************/
    /*! exports provided: DROPZONE_CONFIG, DropzoneComponent, DropzoneConfig, DropzoneDirective, DropzoneModule */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "DROPZONE_CONFIG", (function() {
            return DROPZONE_CONFIG;
        }));
        __webpack_require__.d(__webpack_exports__, "DropzoneComponent", (function() {
            return DropzoneComponent;
        }));
        __webpack_require__.d(__webpack_exports__, "DropzoneConfig", (function() {
            return DropzoneConfig;
        }));
        __webpack_require__.d(__webpack_exports__, "DropzoneDirective", (function() {
            return DropzoneDirective;
        }));
        __webpack_require__.d(__webpack_exports__, "DropzoneModule", (function() {
            return DropzoneModule;
        }));
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
        var dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dropzone */ "../../node_modules/dropzone/dist/dropzone.js");
        var dropzone__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_2__);
        var DROPZONE_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("DROPZONE_CONFIG");
        var DropzoneEvents = [ "error", "success", "sending", "canceled", "complete", "processing", "drop", "dragStart", "dragEnd", "dragEnter", "dragOver", "dragLeave", "thumbnail", "addedFile", "removedFile", "uploadProgress", "maxFilesReached", "maxFilesExceeded", "successMultiple", "sendingMultiple", "canceledMultiple", "completeMultiple", "processingMultiple", "reset", "queueComplete", "totalUploadProgress" ];
        var DropzoneConfig = function() {
            function DropzoneConfig(config) {
                if (config === void 0) {
                    config = {};
                }
                this.assign(config);
            }
            DropzoneConfig.prototype.assign = function(config, target) {
                if (config === void 0) {
                    config = {};
                }
                target = target || this;
                for (var key in config) {
                    if (config[key] != null && !Array.isArray(config[key]) && typeof config[key] === "object" && !(config[key] instanceof HTMLElement)) {
                        target[key] = {};
                        this.assign(config[key], target[key]);
                    } else {
                        target[key] = config[key];
                    }
                }
            };
            return DropzoneConfig;
        }();
        var DropzoneDirective = function() {
            function DropzoneDirective(zone, renderer, elementRef, differs, platformId, defaults) {
                this.zone = zone;
                this.renderer = renderer;
                this.elementRef = elementRef;
                this.differs = differs;
                this.platformId = platformId;
                this.defaults = defaults;
                this.configDiff = null;
                this.disabled = false;
                this.DZ_INIT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_ERROR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_SUCCESS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_SENDING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_CANCELED = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_COMPLETE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_PROCESSING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_DROP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_DRAGSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_DRAGEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_DRAGENTER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_DRAGOVER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_DRAGLEAVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_THUMBNAIL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_ADDEDFILE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_REMOVEDFILE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_UPLOADPROGRESS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_MAXFILESREACHED = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_MAXFILESEXCEEDED = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_SUCCESSMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_SENDINGMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_CANCELEDMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_COMPLETEMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_PROCESSINGMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_RESET = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_QUEUECOMPLETE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_TOTALUPLOADPROGRESS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                var dz = dropzone__WEBPACK_IMPORTED_MODULE_2__;
                dz.autoDiscover = false;
            }
            DropzoneDirective.prototype.ngOnInit = function() {
                var _this = this;
                if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
                    return;
                }
                var params = new DropzoneConfig(this.defaults);
                params.assign(this.config);
                this.renderer.addClass(this.elementRef.nativeElement, params.maxFiles === 1 ? "dz-single" : "dz-multiple");
                this.renderer.removeClass(this.elementRef.nativeElement, params.maxFiles === 1 ? "dz-multiple" : "dz-single");
                this.zone.runOutsideAngular((function() {
                    _this.instance = new dropzone__WEBPACK_IMPORTED_MODULE_2__(_this.elementRef.nativeElement, params);
                }));
                if (this.disabled) {
                    this.instance.disable();
                }
                if (this.DZ_INIT.observers.length) {
                    this.zone.run((function() {
                        _this.DZ_INIT.emit(_this.instance);
                    }));
                }
                this.instance.on("success", (function() {
                    if (params.autoReset != null) {
                        setTimeout((function() {
                            return _this.reset();
                        }), params.autoReset);
                    }
                }));
                this.instance.on("error", (function() {
                    if (params.errorReset != null) {
                        setTimeout((function() {
                            return _this.reset();
                        }), params.errorReset);
                    }
                }));
                this.instance.on("canceled", (function() {
                    if (params.cancelReset != null) {
                        setTimeout((function() {
                            return _this.reset();
                        }), params.cancelReset);
                    }
                }));
                DropzoneEvents.forEach((function(eventName) {
                    _this.instance.on(eventName.toLowerCase(), (function() {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        args = args.length === 1 ? args[0] : args;
                        var output = "DZ_" + eventName.toUpperCase();
                        var emitter = _this[output];
                        if (emitter.observers.length > 0) {
                            _this.zone.run((function() {
                                emitter.emit(args);
                            }));
                        }
                    }));
                }));
                if (!this.configDiff) {
                    this.configDiff = this.differs.find(this.config || {}).create();
                    this.configDiff.diff(this.config || {});
                }
            };
            DropzoneDirective.prototype.ngOnDestroy = function() {
                var _this = this;
                if (this.instance) {
                    this.zone.runOutsideAngular((function() {
                        _this.instance.destroy();
                    }));
                    this.instance = null;
                }
            };
            DropzoneDirective.prototype.ngDoCheck = function() {
                if (!this.disabled && this.configDiff) {
                    var changes = this.configDiff.diff(this.config || {});
                    if (changes && this.instance) {
                        this.ngOnDestroy();
                        this.ngOnInit();
                    }
                }
            };
            DropzoneDirective.prototype.ngOnChanges = function(changes) {
                var _this = this;
                if (this.instance && changes["disabled"]) {
                    if (changes["disabled"].currentValue !== changes["disabled"].previousValue) {
                        if (changes["disabled"].currentValue === false) {
                            this.zone.runOutsideAngular((function() {
                                _this.instance.enable();
                            }));
                        } else if (changes["disabled"].currentValue === true) {
                            this.zone.runOutsideAngular((function() {
                                _this.instance.disable();
                            }));
                        }
                    }
                }
            };
            DropzoneDirective.prototype.dropzone = function() {
                return this.instance;
            };
            DropzoneDirective.prototype.reset = function(cancel) {
                var _this = this;
                if (this.instance) {
                    this.zone.runOutsideAngular((function() {
                        _this.instance.removeAllFiles(cancel);
                    }));
                }
            };
            DropzoneDirective.decorators = [ {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
                args: [ {
                    selector: "[dropzone]",
                    exportAs: "ngxDropzone"
                } ]
            } ];
            DropzoneDirective.ctorParameters = function() {
                return [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]
                }, {
                    type: Object,
                    decorators: [ {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                        args: [ _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"] ]
                    } ]
                }, {
                    type: undefined,
                    decorators: [ {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
                    }, {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                        args: [ DROPZONE_CONFIG ]
                    } ]
                } ];
            };
            DropzoneDirective.propDecorators = {
                disabled: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
                } ],
                config: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
                    args: [ "dropzone" ]
                } ],
                DZ_INIT: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "init" ]
                } ],
                DZ_ERROR: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "error" ]
                } ],
                DZ_SUCCESS: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "success" ]
                } ],
                DZ_SENDING: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "sending" ]
                } ],
                DZ_CANCELED: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "canceled" ]
                } ],
                DZ_COMPLETE: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "complete" ]
                } ],
                DZ_PROCESSING: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "processing" ]
                } ],
                DZ_DROP: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "drop" ]
                } ],
                DZ_DRAGSTART: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "dragStart" ]
                } ],
                DZ_DRAGEND: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "dragEnd" ]
                } ],
                DZ_DRAGENTER: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "dragEnter" ]
                } ],
                DZ_DRAGOVER: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "dragOver" ]
                } ],
                DZ_DRAGLEAVE: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "dragLeave" ]
                } ],
                DZ_THUMBNAIL: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "thumbnail" ]
                } ],
                DZ_ADDEDFILE: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "addedFile" ]
                } ],
                DZ_REMOVEDFILE: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "removedFile" ]
                } ],
                DZ_UPLOADPROGRESS: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "uploadProgress" ]
                } ],
                DZ_MAXFILESREACHED: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "maxFilesReached" ]
                } ],
                DZ_MAXFILESEXCEEDED: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "maxFilesExceeded" ]
                } ],
                DZ_SUCCESSMULTIPLE: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "successMultiple" ]
                } ],
                DZ_SENDINGMULTIPLE: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "sendingMultiple" ]
                } ],
                DZ_CANCELEDMULTIPLE: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "canceledMultiple" ]
                } ],
                DZ_COMPLETEMULTIPLE: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "completeMultiple" ]
                } ],
                DZ_PROCESSINGMULTIPLE: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "processingMultiple" ]
                } ],
                DZ_RESET: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "reset" ]
                } ],
                DZ_QUEUECOMPLETE: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "queueComplete" ]
                } ],
                DZ_TOTALUPLOADPROGRESS: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "totalUploadProgress" ]
                } ]
            };
            return DropzoneDirective;
        }();
        var DropzoneComponent = function() {
            function DropzoneComponent(platformId) {
                this.platformId = platformId;
                this.disabled = false;
                this.message = "Click or drag files to upload";
                this.placeholder = "";
                this.useDropzoneClass = true;
                this.DZ_INIT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_ERROR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_SUCCESS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_SENDING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_CANCELED = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_COMPLETE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_PROCESSING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_DROP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_DRAGSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_DRAGEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_DRAGENTER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_DRAGOVER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_DRAGLEAVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_THUMBNAIL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_ADDEDFILE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_REMOVEDFILE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_UPLOADPROGRESS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_MAXFILESREACHED = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_MAXFILESEXCEEDED = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_SUCCESSMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_SENDINGMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_CANCELEDMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_COMPLETEMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_PROCESSINGMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_RESET = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_QUEUECOMPLETE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
                this.DZ_TOTALUPLOADPROGRESS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
            }
            DropzoneComponent.prototype.ngOnInit = function() {
                var _this = this;
                if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
                    return;
                }
                window.setTimeout((function() {
                    DropzoneEvents.forEach((function(eventName) {
                        if (_this.directiveRef) {
                            var output = "DZ_" + eventName.toUpperCase();
                            var directiveOutput = output;
                            var componentOutput = output;
                            _this.directiveRef[directiveOutput] = _this[componentOutput];
                        }
                    }));
                }), 0);
            };
            DropzoneComponent.prototype.getPlaceholder = function() {
                return "url(" + encodeURI(this.placeholder) + ")";
            };
            DropzoneComponent.decorators = [ {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [ {
                    selector: "dropzone",
                    exportAs: "ngxDropzone",
                    template: '<div class="dz-wrapper" [class.dropzone]="useDropzoneClass" [dropzone]="config" [disabled]="disabled" (init)="DZ_INIT.emit($event)">\n  <div class="dz-message" [class.disabled]="disabled" [class.dz-placeholder]="placeholder">\n    <div class="dz-text" [innerHTML]="config?.dictDefaultMessage || message"></div>\n\n    <div *ngIf="placeholder" class="dz-image" [style.background-image]="getPlaceholder()"></div>\n  </div>\n\n  <ng-content></ng-content>\n</div>\n',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: [ "dropzone {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\ndropzone[fxflex] {\n  display: flex;\n  flex-direction: inherit;\n  min-width: 0;\n  min-height: 0;\n\n  -webkit-box-direction: inherit;\n  -webkit-box-orient: inherit;\n}\n\ndropzone[fxflex] > .dropzone.dz-wrapper {\n  flex: 1 1 auto;\n  min-width: 0;\n  min-height: 0;\n\n  -webkit-box-flex: 1;\n}\n\ndropzone[fxlayout] {\n  align-items: inherit;\n  align-content: inherit;\n  justify-content: inherit;\n\n  -webkit-box-align: inherit;\n  -webkit-box-pack: inherit;\n}\n\ndropzone[fxlayout] > .dropzone.dz-wrapper.dz-single {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n\n  -webkit-box-align: center;\n  -webkit-box-direction: column;\n  -webkit-box-orient: column;\n  -webkit-box-pack: center;\n}\n\ndropzone[fxlayout] > .dropzone.dz-wrapper.dz-multiple {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: start;\n  align-content: start;\n  justify-content: space-between;\n\n  -webkit-box-align: start;\n  -webkit-box-direction: row;\n  -webkit-box-orient: row;\n  -webkit-box-pack: start;\n}\n\ndropzone > .dropzone.dz-wrapper {\n  position: relative;\n\n  overflow: auto;\n  width: 100%;\n  min-height: 0;\n  max-height: 100%;\n  padding: 0;\n  border: none;\n\n  color: #666;\n  background: transparent;\n}\n\ndropzone > .dropzone.dz-wrapper .dz-message {\n  position: relative;\n\n  display: inline-block;\n  overflow: auto;\n  width: calc(100% - 16px);\n  min-width: calc(100% - 16px);\n  min-height: 40px;\n  max-width: calc(100% - 16px);\n  max-height: 100%;\n  margin: 8px;\n  border: 2px dashed #aaa;\n\n  background-color: #eee;\n}\n\ndropzone > .dropzone.dz-wrapper .dz-message .dz-text {\n  position: absolute;\n  top: 50%;\n\n  width: 100%;\n  padding: 8px 16px;\n\n  text-align: center;\n\n  transform: translateY(-50%);\n}\n\ndropzone > .dropzone.dz-wrapper .dz-message .dz-image {\n  width: 100%;\n  height: 100%;\n\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n}\n\ndropzone > .dropzone.dz-wrapper .dz-message.disabled {\n  cursor: not-allowed;\n}\n\ndropzone > .dropzone.dz-wrapper .dz-message.disabled .dz-text {\n  opacity: 0.5;\n}\n\ndropzone > .dropzone.dz-wrapper .dz-message.dz-placeholder {\n  border-color: rgba(#aaa, 0);\n}\n\ndropzone > .dropzone.dz-wrapper .dz-message.dz-placeholder .dz-text {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 10%;\n  left: 10%;\n\n  opacity: 0;\n\n  font-weight: bold;\n  background-color: rgba(#fff, 0.5);\n\n  transform: translateY(-50%);\n  transition:\n    filter 250ms ease-in-out,\n    opacity 250ms ease-in-out,\n    border-color 250ms ease-in-out;\n}\n\ndropzone > .dropzone.dz-wrapper .dz-message.dz-placeholder:hover:not(.disabled) {\n  border-color: #aaa;\n}\n\ndropzone > .dropzone.dz-wrapper .dz-message.dz-placeholder:hover:not(.disabled) .dz-text {\n  opacity: 1;\n}\n\ndropzone > .dropzone.dz-wrapper .dz-message.dz-placeholder:hover:not(.disabled) .dz-image {\n  -webkit-filter: blur(8px);\n\n  filter: blur(8px);\n}\n\ndropzone > .dropzone.dz-wrapper .dz-preview {\n  margin: 8px;\n}\n\ndropzone > .dropzone.dz-wrapper .dz-preview .dz-details {\n  padding: 24px;\n}\n\ndropzone > .dropzone.dz-wrapper .dz-preview .dz-progress {\n  width: 80%;\n  margin-left: -40%;\n  border: 1px solid #aaa;\n  border-radius: 4px;\n}\n\ndropzone > .dropzone.dz-wrapper .dz-preview .dz-progress .dz-upload {\n  background-color: #666;\n}\n\ndropzone > .dropzone.dz-wrapper .dz-preview .dz-filename span {\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  max-width: 100%;\n\n  text-overflow: ellipsis;\n}\n\ndropzone > .dropzone.dz-wrapper .dz-preview .dz-filename span:hover {\n  overflow: visible;\n\n  white-space: normal;\n  word-wrap: break-word;\n}\n\ndropzone > .dropzone.dz-wrapper.dz-single .dz-message {\n  width: 100%;\n  height: 100%;\n}\n\ndropzone > .dropzone.dz-wrapper.dz-single.dz-started .dz-message {\n  display: none;\n}\n\ndropzone > .dropzone.dz-wrapper.dz-single .dz-preview {\n  width: calc(100% - 16px);\n  height: 100%;\n}\n\ndropzone > .dropzone.dz-wrapper.dz-single .dz-preview .dz-image {\n  width: 100%;\n  height: 100%;\n  border-radius: 0;\n}\n\ndropzone > .dropzone.dz-wrapper.dz-single .dz-preview .dz-image img {\n  display: block;\n  width: 100%;\n  height: auto;\n  margin: 0;\n}\n\ndropzone > .dropzone.dz-wrapper.dz-single .dz-error-message {\n  top: 50%;\n  left: 50%;\n\n  transform: translateX(-50%) translateY(100%);\n}\n\ndropzone > .dropzone.dz-wrapper.dz-multiple.dz-started .dz-message {\n  display: inline-block;\n}\n", "@-webkit-keyframes passing-through{0%{opacity:0;-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px);transform:translateY(40px)}30%, 70%{opacity:1;-webkit-transform:translateY(0px);-moz-transform:translateY(0px);-ms-transform:translateY(0px);-o-transform:translateY(0px);transform:translateY(0px)}100%{opacity:0;-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px);transform:translateY(-40px)}}@-moz-keyframes passing-through{0%{opacity:0;-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px);transform:translateY(40px)}30%, 70%{opacity:1;-webkit-transform:translateY(0px);-moz-transform:translateY(0px);-ms-transform:translateY(0px);-o-transform:translateY(0px);transform:translateY(0px)}100%{opacity:0;-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px);transform:translateY(-40px)}}@keyframes passing-through{0%{opacity:0;-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px);transform:translateY(40px)}30%, 70%{opacity:1;-webkit-transform:translateY(0px);-moz-transform:translateY(0px);-ms-transform:translateY(0px);-o-transform:translateY(0px);transform:translateY(0px)}100%{opacity:0;-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px);transform:translateY(-40px)}}@-webkit-keyframes slide-in{0%{opacity:0;-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px);transform:translateY(40px)}30%{opacity:1;-webkit-transform:translateY(0px);-moz-transform:translateY(0px);-ms-transform:translateY(0px);-o-transform:translateY(0px);transform:translateY(0px)}}@-moz-keyframes slide-in{0%{opacity:0;-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px);transform:translateY(40px)}30%{opacity:1;-webkit-transform:translateY(0px);-moz-transform:translateY(0px);-ms-transform:translateY(0px);-o-transform:translateY(0px);transform:translateY(0px)}}@keyframes slide-in{0%{opacity:0;-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px);transform:translateY(40px)}30%{opacity:1;-webkit-transform:translateY(0px);-moz-transform:translateY(0px);-ms-transform:translateY(0px);-o-transform:translateY(0px);transform:translateY(0px)}}@-webkit-keyframes pulse{0%{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1)}10%{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1)}20%{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1)}}@-moz-keyframes pulse{0%{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1)}10%{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1)}20%{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1)}}@keyframes pulse{0%{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1)}10%{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1)}20%{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1)}}.dropzone,.dropzone *{box-sizing:border-box}.dropzone{min-height:150px;border:2px solid rgba(0,0,0,0.3);background:white;padding:20px 20px}.dropzone.dz-clickable{cursor:pointer}.dropzone.dz-clickable *{cursor:default}.dropzone.dz-clickable .dz-message,.dropzone.dz-clickable .dz-message *{cursor:pointer}.dropzone.dz-started .dz-message{display:none}.dropzone.dz-drag-hover{border-style:solid}.dropzone.dz-drag-hover .dz-message{opacity:0.5}.dropzone .dz-message{text-align:center;margin:2em 0}.dropzone .dz-preview{position:relative;display:inline-block;vertical-align:top;margin:16px;min-height:100px}.dropzone .dz-preview:hover{z-index:1000}.dropzone .dz-preview:hover .dz-details{opacity:1}.dropzone .dz-preview.dz-file-preview .dz-image{border-radius:20px;background:#999;background:linear-gradient(to bottom, #eee, #ddd)}.dropzone .dz-preview.dz-file-preview .dz-details{opacity:1}.dropzone .dz-preview.dz-image-preview{background:white}.dropzone .dz-preview.dz-image-preview .dz-details{-webkit-transition:opacity 0.2s linear;-moz-transition:opacity 0.2s linear;-ms-transition:opacity 0.2s linear;-o-transition:opacity 0.2s linear;transition:opacity 0.2s linear}.dropzone .dz-preview .dz-remove{font-size:14px;text-align:center;display:block;cursor:pointer;border:none}.dropzone .dz-preview .dz-remove:hover{text-decoration:underline}.dropzone .dz-preview:hover .dz-details{opacity:1}.dropzone .dz-preview .dz-details{z-index:20;position:absolute;top:0;left:0;opacity:0;font-size:13px;min-width:100%;max-width:100%;padding:2em 1em;text-align:center;color:rgba(0,0,0,0.9);line-height:150%}.dropzone .dz-preview .dz-details .dz-size{margin-bottom:1em;font-size:16px}.dropzone .dz-preview .dz-details .dz-filename{white-space:nowrap}.dropzone .dz-preview .dz-details .dz-filename:hover span{border:1px solid rgba(200,200,200,0.8);background-color:rgba(255,255,255,0.8)}.dropzone .dz-preview .dz-details .dz-filename:not(:hover){overflow:hidden;text-overflow:ellipsis}.dropzone .dz-preview .dz-details .dz-filename:not(:hover) span{border:1px solid transparent}.dropzone .dz-preview .dz-details .dz-filename span,.dropzone .dz-preview .dz-details .dz-size span{background-color:rgba(255,255,255,0.4);padding:0 0.4em;border-radius:3px}.dropzone .dz-preview:hover .dz-image img{-webkit-transform:scale(1.05, 1.05);-moz-transform:scale(1.05, 1.05);-ms-transform:scale(1.05, 1.05);-o-transform:scale(1.05, 1.05);transform:scale(1.05, 1.05);-webkit-filter:blur(8px);filter:blur(8px)}.dropzone .dz-preview .dz-image{border-radius:20px;overflow:hidden;width:120px;height:120px;position:relative;display:block;z-index:10}.dropzone .dz-preview .dz-image img{display:block}.dropzone .dz-preview.dz-success .dz-success-mark{-webkit-animation:passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);-moz-animation:passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);-ms-animation:passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);-o-animation:passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);animation:passing-through 3s cubic-bezier(0.77, 0, 0.175, 1)}.dropzone .dz-preview.dz-error .dz-error-mark{opacity:1;-webkit-animation:slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);-moz-animation:slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);-ms-animation:slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);-o-animation:slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);animation:slide-in 3s cubic-bezier(0.77, 0, 0.175, 1)}.dropzone .dz-preview .dz-success-mark,.dropzone .dz-preview .dz-error-mark{pointer-events:none;opacity:0;z-index:500;position:absolute;display:block;top:50%;left:50%;margin-left:-27px;margin-top:-27px}.dropzone .dz-preview .dz-success-mark svg,.dropzone .dz-preview .dz-error-mark svg{display:block;width:54px;height:54px}.dropzone .dz-preview.dz-processing .dz-progress{opacity:1;-webkit-transition:all 0.2s linear;-moz-transition:all 0.2s linear;-ms-transition:all 0.2s linear;-o-transition:all 0.2s linear;transition:all 0.2s linear}.dropzone .dz-preview.dz-complete .dz-progress{opacity:0;-webkit-transition:opacity 0.4s ease-in;-moz-transition:opacity 0.4s ease-in;-ms-transition:opacity 0.4s ease-in;-o-transition:opacity 0.4s ease-in;transition:opacity 0.4s ease-in}.dropzone .dz-preview:not(.dz-processing) .dz-progress{-webkit-animation:pulse 6s ease infinite;-moz-animation:pulse 6s ease infinite;-ms-animation:pulse 6s ease infinite;-o-animation:pulse 6s ease infinite;animation:pulse 6s ease infinite}.dropzone .dz-preview .dz-progress{opacity:1;z-index:1000;pointer-events:none;position:absolute;height:16px;left:50%;top:50%;margin-top:-8px;width:80px;margin-left:-40px;background:rgba(255,255,255,0.9);-webkit-transform:scale(1);border-radius:8px;overflow:hidden}.dropzone .dz-preview .dz-progress .dz-upload{background:#333;background:linear-gradient(to bottom, #666, #444);position:absolute;top:0;left:0;bottom:0;width:0;-webkit-transition:width 300ms ease-in-out;-moz-transition:width 300ms ease-in-out;-ms-transition:width 300ms ease-in-out;-o-transition:width 300ms ease-in-out;transition:width 300ms ease-in-out}.dropzone .dz-preview.dz-error .dz-error-message{display:block}.dropzone .dz-preview.dz-error:hover .dz-error-message{opacity:1;pointer-events:auto}.dropzone .dz-preview .dz-error-message{pointer-events:none;z-index:1000;position:absolute;display:block;display:none;opacity:0;-webkit-transition:opacity 0.3s ease;-moz-transition:opacity 0.3s ease;-ms-transition:opacity 0.3s ease;-o-transition:opacity 0.3s ease;transition:opacity 0.3s ease;border-radius:8px;font-size:13px;top:130px;left:-10px;width:140px;background:#be2626;background:linear-gradient(to bottom, #be2626, #a92222);padding:0.5em 1.2em;color:white}.dropzone .dz-preview .dz-error-message:after{content:'';position:absolute;top:-6px;left:64px;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #be2626}\n" ]
                } ]
            } ];
            DropzoneComponent.ctorParameters = function() {
                return [ {
                    type: Object,
                    decorators: [ {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                        args: [ _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"] ]
                    } ]
                } ];
            };
            DropzoneComponent.propDecorators = {
                disabled: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
                } ],
                config: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
                } ],
                message: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
                } ],
                placeholder: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
                } ],
                useDropzoneClass: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
                } ],
                DZ_INIT: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "init" ]
                } ],
                DZ_ERROR: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "error" ]
                } ],
                DZ_SUCCESS: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "success" ]
                } ],
                DZ_SENDING: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "sending" ]
                } ],
                DZ_CANCELED: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "canceled" ]
                } ],
                DZ_COMPLETE: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "complete" ]
                } ],
                DZ_PROCESSING: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "processing" ]
                } ],
                DZ_DROP: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "drop" ]
                } ],
                DZ_DRAGSTART: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "dragStart" ]
                } ],
                DZ_DRAGEND: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "dragEnd" ]
                } ],
                DZ_DRAGENTER: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "dragEnter" ]
                } ],
                DZ_DRAGOVER: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "dragOver" ]
                } ],
                DZ_DRAGLEAVE: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "dragLeave" ]
                } ],
                DZ_THUMBNAIL: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "thumbnail" ]
                } ],
                DZ_ADDEDFILE: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "addedFile" ]
                } ],
                DZ_REMOVEDFILE: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "removedFile" ]
                } ],
                DZ_UPLOADPROGRESS: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "uploadProgress" ]
                } ],
                DZ_MAXFILESREACHED: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "maxFilesReached" ]
                } ],
                DZ_MAXFILESEXCEEDED: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "maxFilesExceeded" ]
                } ],
                DZ_SUCCESSMULTIPLE: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "successMultiple" ]
                } ],
                DZ_SENDINGMULTIPLE: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "sendingMultiple" ]
                } ],
                DZ_CANCELEDMULTIPLE: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "canceledMultiple" ]
                } ],
                DZ_COMPLETEMULTIPLE: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "completeMultiple" ]
                } ],
                DZ_PROCESSINGMULTIPLE: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "processingMultiple" ]
                } ],
                DZ_RESET: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "reset" ]
                } ],
                DZ_QUEUECOMPLETE: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "queueComplete" ]
                } ],
                DZ_TOTALUPLOADPROGRESS: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
                    args: [ "totalUploadProgress" ]
                } ],
                directiveRef: [ {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
                    args: [ DropzoneDirective, {
                        static: true
                    } ]
                } ]
            };
            return DropzoneComponent;
        }();
        var DropzoneModule = function() {
            function DropzoneModule() {}
            DropzoneModule.decorators = [ {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
                args: [ {
                    imports: [ _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"] ],
                    declarations: [ DropzoneComponent, DropzoneDirective ],
                    exports: [ _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], DropzoneComponent, DropzoneDirective ]
                } ]
            } ];
            return DropzoneModule;
        }();
    },
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/components/custom-material-colour/custom-material-colour.component.html": 
    /*!**************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/customiser/components/custom-material-colour/custom-material-colour.component.html ***!
  \**************************************************************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<div class="material-group">\r\n  <div class="header">\r\n    <h4>Filter by colour</h4>\r\n  </div>\r\n  <div class="material-colours group-colours">\r\n    <div\r\n      class="material"\r\n      [ngClass]="{ selected: group._id === selectedGroup?._id }"\r\n      *ngFor="let group of panel.colour_groups"\r\n      (click)="showGroup(group)"\r\n    >\r\n      <div class="image">\r\n        <svg\r\n          class="swatch"\r\n          *ngIf="group.hex; else imageSwatch"\r\n          viewBox="0 0 600 600"\r\n        >\r\n          <rect\r\n            width="100%"\r\n            height="100%"\r\n            class="swatch-colour"\r\n            [attr.fill]="group.hex"\r\n          />\r\n        </svg>\r\n        <ng-template #imageSwatch>\r\n          <img [bxLazysizes]="group.image.key" [crop_ratio]="1" />\r\n        </ng-template>\r\n      </div>\r\n      <div class="info">\r\n        <h4>{{ group.title }}</h4>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<bx-custom-material-group\r\n  [large]="true"\r\n  [basePrice]="panel.area_size.price_adjust"\r\n  [materialGroups]="materialGroups$ | async"\r\n  [selectedMaterial]="selectedMaterial"\r\n  (materialColourSelected)="colourSelected($event)"\r\n>\r\n</bx-custom-material-group>\r\n';
    },
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/components/custom-material-group/custom-material-group.component.html": 
    /*!************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/customiser/components/custom-material-group/custom-material-group.component.html ***!
  \************************************************************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<ng-content></ng-content>\r\n<div class="material-group" *ngFor="let group of materialGroups">\r\n  <div class="header">\r\n    <h4>{{ group.title }}</h4>\r\n  </div>\r\n  <div class="material-colours">\r\n    <div\r\n      class="material"\r\n      [ngClass]="{\r\n        large: large,\r\n        selected: material._id === selectedMaterial?._id\r\n      }"\r\n      *ngFor="let material of group.materials"\r\n      (click)="colourSelected(material)"\r\n    >\r\n      <div class="image">\r\n        <svg\r\n          class="swatch"\r\n          *ngIf="material.hex; else imageSwatch"\r\n          viewBox="0 0 600 300"\r\n        >\r\n          <rect\r\n            width="100%"\r\n            height="100%"\r\n            class="swatch-colour"\r\n            [attr.fill]="material.hex"\r\n          />\r\n        </svg>\r\n        <ng-template #imageSwatch>\r\n          <img [bxLazysizes]="material.image.key" [crop_ratio]="2" />\r\n        </ng-template>\r\n      </div>\r\n      <div class="info">\r\n        <h4>\r\n          {{ material.title }}\r\n          <bx-price\r\n            [price]="getPrice(material.price)"\r\n            *ngIf="basePrice || (materialPrice && material.price > 0)"\r\n          >\r\n          </bx-price>\r\n        </h4>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class="material-colours" *ngIf="materials">\r\n  <div\r\n    class="material"\r\n    [ngClass]="{ selected: material._id === selectedMaterial?._id }"\r\n    *ngFor="let material of materials"\r\n    (click)="colourSelected(material)"\r\n  >\r\n    <div class="image">\r\n      <svg\r\n        class="swatch"\r\n        *ngIf="material.hex; else imageSwatch"\r\n        viewBox="0 0 600 300"\r\n      >\r\n        <rect\r\n          width="100%"\r\n          height="100%"\r\n          class="swatch-colour"\r\n          [attr.fill]="material.hex"\r\n        />\r\n      </svg>\r\n      <ng-template #imageSwatch>\r\n        <img [bxLazysizes]="material.image.key" [crop_ratio]="2" />\r\n      </ng-template>\r\n    </div>\r\n    <div class="info">\r\n      <h4>\r\n        {{ material.title }}\r\n        <bx-price\r\n          [price]="getPrice(material.price)"\r\n          *ngIf="basePrice || (materialPrice && material.price > 0)"\r\n        >\r\n        </bx-price>\r\n      </h4>\r\n    </div>\r\n  </div>\r\n</div>\r\n';
    },
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/components/custom-scroll-container/custom-scroll-container.component.html": 
    /*!****************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/customiser/components/custom-scroll-container/custom-scroll-container.component.html ***!
  \****************************************************************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<div class="scroll-content" #scrollContent>\r\n  <ng-content></ng-content>\r\n</div>\r\n<div class="scroll-arrow" [hidden]="!scrollable" #scrollIcon (click)="scrollToBottom()">\r\n  <fa-icon class="icon" [icon]="[\'fal\', \'chevron-down\']"></fa-icon>\r\n</div>\r\n';
    },
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/customiser.component.html": 
    /*!****************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/customiser/customiser.component.html ***!
  \****************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<div class="customiser">\r\n  <bx-toolbar [product]="product" (onClearDesign)="template.setUpTemplate()" (designSaved)="template.saveToAccount()"\r\n    #toolbar></bx-toolbar>\r\n  <bx-template [product]="product" #template></bx-template>\r\n</div>\r\n<div class="customiser-options">\r\n  <div class="touch-help" *ngIf="optionsService.showTouchHelp" (click)="optionsService.setTouchHelp()" (touchstart)="optionsService.setTouchHelp()">\r\n    <div class="content">\r\n      <svg class="icon">\r\n        <use xlink:href="/assets/svg/sprite.svg?v030418#icon-swipe" />\r\n      </svg>\r\n      <p>Swipe left and right to access options</p>\r\n      <p>Got it</p>\r\n    </div>\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<tour-step-template>\r\n  <ng-template let-step="step">\r\n    <div class="bx-tour-card" bxCard (click)="$event.stopPropagation()">\r\n      <div bxCardContent>\r\n        <h2 bxCardTitle>{{step?.title}}</h2>\r\n        <span [innerHTML]="step?.content"></span>\r\n      </div>\r\n      <div bxCardFooter>\r\n        <button [disabled]="!tourService.hasPrev(step)" (click)="tourService.prev()">\r\n          <fa-icon class="icon" [icon]="[\'fal\', \'chevron-left\']" [fixedWidth]="true" size="lg"></fa-icon>\r\n        </button>\r\n        <button [disabled]="!tourService.hasNext(step)" (click)="tourService.next()">\r\n          <fa-icon class="icon" [icon]="[\'fal\', \'chevron-right\']" [fixedWidth]="true" size="lg"></fa-icon>\r\n        </button>\r\n        <button class="btn-text bx-end-tour" (click)="tourService.end()">{{step?.endBtnTitle}}</button>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</tour-step-template>\r\n';
    },
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/nav/actions.component.html": 
    /*!*****************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/customiser/nav/actions.component.html ***!
  \*****************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<ng-content></ng-content>\r\n<div class="action-buttons">\r\n    <button type="button" class="btn btn-warning" (click)="cancel()">Cancel</button>\r\n    <button type="button" class="btn btn-danger" (click)="delete()" *ngIf="canDelete">Delete</button>\r\n    <button type="submit" class="btn btn-success" (click)="save()" [disabled]="!validated">Save</button>\r\n</div>';
    },
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/nav/editbar.component.html": 
    /*!*****************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/customiser/nav/editbar.component.html ***!
  \*****************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<div class="edit-image" *ngIf="!name">\r\n  <img [bxLazysizes]="image.key" [crop_ratio]="1" />\r\n</div>\r\n<div\r\n  class="edit-image"\r\n  [ngStyle]="{ border: \'2px solid \' + name.outline?.hex }"\r\n  *ngIf="name"\r\n>\r\n  <svg class="swatch" *ngIf="name.fill.hex" viewBox="0 0 132 132">\r\n    <rect\r\n      class="swatch-colour"\r\n      width="100%"\r\n      height="100%"\r\n      [attr.fill]="name.fill.hex"\r\n    />\r\n  </svg>\r\n  <img\r\n    [bxLazysizes]="name.fill.image.key"\r\n    [crop_ratio]="1"\r\n    *ngIf="name.fill && name.fill.image"\r\n  />\r\n</div>\r\n<div class="edit-info">\r\n  <h4>Edit {{ item?.type }}</h4>\r\n  <h4 *ngIf="flag">{{ flag.flag.title }}</h4>\r\n  <h4 *ngIf="logo">{{ logo.image.title }}</h4>\r\n  <h4 *ngIf="name">{{ name.text }}</h4>\r\n  <h4 class="price" *ngIf="item.price">\r\n    <bx-price [price]="item.price"></bx-price>\r\n  </h4>\r\n</div>\r\n<div class="edit-actions">\r\n  <div class="btn-group">\r\n    <button class="btn btn-success" (click)="saveItem()">\r\n      <fa-icon\r\n        class="icon"\r\n        [icon]="[\'fal\', \'check\']"\r\n        [fixedWidth]="true"\r\n        size="2x"\r\n      ></fa-icon>\r\n    </button>\r\n    <button class="btn" (click)="editItem()">\r\n      <fa-icon\r\n        class="icon"\r\n        [icon]="[\'fal\', \'pen\']"\r\n        [fixedWidth]="true"\r\n        size="2x"\r\n      ></fa-icon>\r\n    </button>\r\n    <button class="btn btn-danger" (click)="deleteItem()">\r\n      <fa-icon\r\n        class="icon"\r\n        [icon]="[\'fal\', \'trash\']"\r\n        [fixedWidth]="true"\r\n        size="2x"\r\n      ></fa-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n';
    },
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/nav/nav-item.component.html": 
    /*!******************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/customiser/nav/nav-item.component.html ***!
  \******************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = "<ng-content></ng-content>";
    },
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/nav/nav.component.html": 
    /*!*************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/customiser/nav/nav.component.html ***!
  \*************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<button class="btn btn-success add-to-cart" [ngClass]="{\'hide-mobile\': designService.selectedObject}"\r\n  *ngIf="!designService.editOrder && !designService.editDesign" [disabled]="(complete$ | async) === false"\r\n  (click)="addToCart()" tourAnchor="add.cart">\r\n  <bx-price [price]="total$ | async"></bx-price> | {{(complete$ | async) ? \'Add to cart\' : \'Design Unfinished\'}}\r\n</button>\r\n<button class="btn btn-success add-to-cart" [ngClass]="{\'hide-mobile\': designService.selectedObject}"\r\n  *ngIf="!designService.editOrder && designService.editDesign" [disabled]="(complete$ | async) === false"\r\n  (click)="updateCart()">\r\n  <bx-price [price]="total$ | async"></bx-price> | Update Cart\r\n</button>\r\n<button class="btn btn-success add-to-cart" [ngClass]="{\'hide-mobile\': designService.selectedObject}"\r\n  *ngIf="designService.editOrder" [disabled]="(complete$ | async) === false" (click)="updateOrderAdmin()">\r\n  <bx-price [price]="total$ | async"></bx-price> | Update Order\r\n</button>\r\n<div class="scroll-container" [ngClass]="{\'hide-mobile\': designService.selectedObject, \'scrolled\': hasScrolled}"\r\n  bxWindowHeight>\r\n  <a bxNavItem id="style-{{style.type}}" menuId="style-{{style.type}}" angulartics2On="click"\r\n    angularticsAction="MenuClick" [angularticsLabel]="style.title" angularticsCategory="Customiser"\r\n    [routerLink]="[\'../style\', style._id]" skipLocationChange class="option" (click)="menuClicked($event)"\r\n    *ngFor="let style of styles$ | async">\r\n    <h4 [ngClass]="{\'selected\': getStyle(style.type)}">{{style.title}}</h4>\r\n    <p class="required" *ngIf="!getStyle(style.type); else styleOption">Required</p>\r\n    <ng-template #styleOption>\r\n      <p class="selected">{{getStyle(style.type).title}}</p>\r\n    </ng-template>\r\n  </a>\r\n  <a bxNavItem id="panel-{{setting.panel}}" menuId="panel-{{setting.panel}}" angulartics2On="click"\r\n    angularticsAction="MenuClick" [angularticsLabel]="setting.name" angularticsCategory="Customiser"\r\n    [routerLink]="[\'../panel\', setting._id]" skipLocationChange class="option" (click)="menuClicked($event)"\r\n    *ngFor="let setting of panels$ | async; let i = index" tourAnchor="design.panels.{{i}}">\r\n    <h4 [ngClass]="{\'selected\': getPanel(setting.panel)}">{{setting.name}}</h4>\r\n    <p class="required" *ngIf="!getPanel(setting.panel) && !setting.area_size.optional; else panelOption">Required</p>\r\n    <p class="selected" *ngIf="!getPanel(setting.panel) && setting.area_size.optional">Optional</p>\r\n    <ng-template #panelOption>\r\n      <p class="selected" *ngIf="getPanel(setting.panel) as panel">{{panel.material.title}}\r\n        {{panel.material.materialType.title}}</p>\r\n    </ng-template>\r\n  </a>\r\n  <a bxNavItem id="muay_thai" menuId="muay_thai" angulartics2On="click" angularticsAction="MenuClick"\r\n    angularticsLabel="Muay Thai" angularticsCategory="Customiser" [routerLink]="[\'../muay-thai\']" class="option"\r\n    skipLocationChange (click)="menuClicked($event)" *ngIf="(muay_thai$ | async).length">\r\n    <h4 [ngClass]="{\'selected\': getMuayThai()}">Muay Thai Wording</h4>\r\n    <p class="selected" *ngIf="getMuayThai() && getMuayThai().fill && getMuayThai().outline">\r\n      {{getMuayThai().fill.title}}\r\n      / {{getMuayThai()?.outline.title}}</p>\r\n    <p class="selected" *ngIf="!getMuayThai()">Optional</p>\r\n  </a>\r\n  <a bxNavItem id="name" menuId="name" angulartics2On="click" angularticsAction="MenuClick" angularticsLabel="Add Name"\r\n    angularticsCategory="Customiser" [routerLink]="[\'../name\']" class="option" skipLocationChange\r\n    (click)="menuClicked($event)" tourAnchor="design.names">\r\n    <h4>Add name</h4>\r\n    <p class="selected">Optional</p>\r\n  </a>\r\n  <a bxNavItem id="flag" menuId="flag" angularticsAction="MenuClick" angularticsLabel="Add Flag"\r\n    angularticsCategory="Customiser" [routerLink]="[\'../flag\']" class="option" skipLocationChange\r\n    (click)="menuClicked($event)" tourAnchor="design.flags">\r\n    <h4>Add flag</h4>\r\n    <p class="selected">Optional</p>\r\n  </a>\r\n  <a bxNavItem id="logo" menuId="logo" angularticsAction="MenuClick" angularticsLabel="Add Graphic"\r\n    angularticsCategory="Customiser" [routerLink]="[\'../logo\']" class="option" skipLocationChange\r\n    (click)="menuClicked($event)" tourAnchor="design.graphics">\r\n    <h4>Add graphic</h4>\r\n    <p class="selected">Optional</p>\r\n  </a>\r\n  <a bxNavItem id="upload" menuId="upload" angularticsAction="MenuClick" angularticsLabel="Upload own graphic"\r\n    angularticsCategory="Customiser" [routerLink]="[\'../upload\']" class="option" skipLocationChange\r\n    (click)="menuClicked($event)" tourAnchor="design.uploads">\r\n    <h4>Upload own graphic</h4>\r\n    <p class="selected">Optional</p>\r\n  </a>\r\n  <ng-container *ngIf="(sizes$ | async) as sizes">\r\n    <a bxNavItem id="size" [menuId]="\'size\'" angularticsAction="MenuClick"\r\n      angularticsLabel="Choose size & production options" angularticsCategory="Customiser" [routerLink]="[\'../size\']"\r\n      class="option" skipLocationChange (click)="menuClicked($event)" tourAnchor="design.sizing" *ngIf="sizes.length">\r\n      <h4 [ngClass]="{\'selected\': getSize()}">Choose size &\r\n        <br> production options</h4>\r\n      <p class="required" *ngIf="!getSize() && sizes.length; else panelOption">Required</p>\r\n      <ng-template #panelOption>\r\n        <p class="selected">{{getSize().size}}\r\n          <span *ngIf="getProduction()">- {{getProduction().type}}</span>\r\n        </p>\r\n      </ng-template>\r\n    </a>\r\n    <a bxNavItem id="size" [menuId]="\'size\'" angularticsAction="MenuClick" angularticsLabel="Choose production options"\r\n      angularticsCategory="Customiser" [routerLink]="[\'../size\']" class="option" skipLocationChange\r\n      (click)="menuClicked($event)" tourAnchor="design.sizing" *ngIf="!sizes.length">\r\n      <h4 [ngClass]="{\'selected\': getSize()}">Choose production options</h4>\r\n      <p class="selected">\r\n        <span *ngIf="getProduction()">{{getProduction().type}}</span>\r\n      </p>\r\n    </a>\r\n  </ng-container>\r\n</div>\r\n';
    },
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/nav/toolbar.component.html": 
    /*!*****************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/customiser/nav/toolbar.component.html ***!
  \*****************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<div class="btn-group">\r\n  <button class="btn btn-white" (click)=goBack()>Back</button>\r\n</div>\r\n<div class="menu" tourAnchor="template.options">\r\n  <button class="btn btn-success" (click)="openChat()">\r\n    <fa-icon class="icon" [icon]="[\'fal\', \'comment\']" [fixedWidth]="true" size="1x"></fa-icon> Chat\r\n  </button>\r\n  <button class="btn btn-white" [matMenuTriggerFor]="menu" #trigger="matMenuTrigger"\r\n    (click)=menuClicked($event)>Options</button>\r\n  <mat-menu #menu="matMenu" yPosition="below" [hasBackdrop]="false">\r\n    <button mat-menu-item [matMenuTriggerFor]="currencyMenu">\r\n      <span>Currency</span>\r\n    </button>\r\n    <button mat-menu-item *ngIf="auth.loggedIn()" (click)="designSaved.emit()">\r\n      <span>Save Design to Account</span>\r\n    </button>\r\n    <button mat-menu-item *ngIf="!auth.loggedIn()" (click)="loginToSave()">\r\n      <span>Login to save design</span>\r\n    </button>\r\n    <button mat-menu-item *ngIf="auth.loggedIn() && isClub" (click)="submitClubkit()">\r\n      <span>Submit Club Kit</span>\r\n    </button>\r\n    <button mat-menu-item (click)="clearDesign()">\r\n      <span>Clear Design</span>\r\n    </button>\r\n    <button mat-menu-item (click)="viewTour()">\r\n      <span>Start guided tour</span>\r\n    </button>\r\n  </mat-menu>\r\n  <mat-menu #currencyMenu="matMenu">\r\n    <button *ngFor="let currency of currencies" mat-menu-item (click)="setCurrency(currency)">\r\n      <span>{{currency}}</span>\r\n    </button>\r\n  </mat-menu>\r\n</div>\r\n';
    },
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-flag-option/custom-flag-option.component.html": 
    /*!***************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-flag-option/custom-flag-option.component.html ***!
  \***************************************************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<div class="options-panel">\r\n  <bx-custom-scroll-container>\r\n    <div class="option-panel">\r\n      <div class="content" [formGroup]="flagForm">\r\n        <h4 [hidden]="!hasSizes">Select size</h4>\r\n        <mat-radio-group class="graphic-sizes" formControlName="size">\r\n          <mat-radio-button\r\n            class="option"\r\n            *ngFor="let size of flagSizes$ | async"\r\n            [value]="size.title"\r\n          >\r\n            {{ size.title }} - <bx-price [price]="size.price"></bx-price\r\n            ><br /><small>{{ size.description }}</small>\r\n          </mat-radio-button>\r\n        </mat-radio-group>\r\n      </div>\r\n    </div>\r\n    <div class="material-colours">\r\n      <div\r\n        class="material"\r\n        [ngClass]="{\r\n          selected: selectedFlag && flag._id === selectedFlag.flag._id\r\n        }"\r\n        *ngFor="let flag of flags"\r\n        (click)="flagSelected(flag)"\r\n      >\r\n        <img [bxLazysizes]="flag.image.key" />\r\n      </div>\r\n    </div>\r\n  </bx-custom-scroll-container>\r\n  <bx-actions\r\n    (designCancel)="cancel()"\r\n    (designSave)="save()"\r\n    (designDelete)="delete()"\r\n    [validated]="validated"\r\n    [canDelete]="canDelete"\r\n  >\r\n    <div class="options-selection">\r\n      <h5>Flag</h5>\r\n      <h5 *ngIf="!selectedFlag; else selectedPrice">\r\n        <bx-price [price]="price"></bx-price>\r\n      </h5>\r\n      <ng-template #selectedPrice>\r\n        <h5>\r\n          {{ selectedFlag.flag.title }}\r\n        </h5>\r\n        <h5>\r\n          <bx-price [price]="price"></bx-price>\r\n        </h5>\r\n      </ng-template>\r\n    </div>\r\n  </bx-actions>\r\n</div>\r\n';
    },
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-image-option/custom-image-option.component.html": 
    /*!*****************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-image-option/custom-image-option.component.html ***!
  \*****************************************************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<div class="options-panel">\r\n  <bx-custom-scroll-container>\r\n    <div class="option-panel">\r\n      <div class="content" [formGroup]="logoForm">\r\n        <p class="danger">\r\n          If you would like us to make changes to the selected graphic, such as\r\n          changing the colour, please enter below.\r\n        </p>\r\n        <mat-form-field>\r\n          <textarea\r\n            matInput\r\n            placeholder="Special instructions about graphic"\r\n            matTextareaAutosize\r\n            matAutosizeMinRows="3"\r\n            matAutosizeMaxRows="10"\r\n            formControlName="instructions"\r\n          ></textarea>\r\n        </mat-form-field>\r\n        <h4 [hidden]="!hasSizes">Select size</h4>\r\n        <mat-radio-group class="graphic-sizes" formControlName="size">\r\n          <mat-radio-button\r\n            class="option"\r\n            *ngFor="let size of logoSizes$ | async"\r\n            [value]="size.title"\r\n          >\r\n            {{ size.title }} - <bx-price [price]="size.price"></bx-price\r\n            ><br /><small>{{ size.description }}</small>\r\n          </mat-radio-button>\r\n        </mat-radio-group>\r\n        <p [hidden]="!hasSizes">\r\n          Logo size will be at the widest or longest point depending on shape\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class="material-colours">\r\n      <div\r\n        class="material"\r\n        [ngClass]="{\r\n          selected: selectedLogo && logo._id === selectedLogo.image._id\r\n        }"\r\n        *ngFor="let logo of logos"\r\n        (click)="logoSelected(logo)"\r\n      >\r\n        <img [bxLazysizes]="logo.image.key" />\r\n      </div>\r\n    </div>\r\n  </bx-custom-scroll-container>\r\n  <bx-actions\r\n    (designCancel)="cancel()"\r\n    (designSave)="save()"\r\n    (designDelete)="delete()"\r\n    [validated]="validated"\r\n    [canDelete]="canDelete"\r\n  >\r\n    <div class="options-selection">\r\n      <h5>Image</h5>\r\n      <h5 *ngIf="!selectedLogo; else selectedPrice">\r\n        <bx-price [price]="price"></bx-price>\r\n      </h5>\r\n      <ng-template #selectedPrice>\r\n        <h5>\r\n          {{ selectedLogo.image.title }}\r\n        </h5>\r\n        <h5>\r\n          <bx-price [price]="price"></bx-price>\r\n        </h5>\r\n      </ng-template>\r\n    </div>\r\n  </bx-actions>\r\n</div>\r\n';
    },
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-muay-thai/custom-muay-thai.component.html": 
    /*!***********************************************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-muay-thai/custom-muay-thai.component.html ***!
  \***********************************************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<div class="options-panel">\r\n  <bx-custom-scroll-container>\r\n    <div class="option-panel">\r\n      <div class="content">\r\n        <bx-custom-material-group\r\n          [materialGroups]="fillMaterialsGroups | async"\r\n          [selectedMaterial]="selectedFill"\r\n          (materialColourSelected)="colourFillSelected($event)"\r\n        >\r\n          <div class="sub-header">\r\n            <h4 [class.danger]="!selectedFill">\r\n              Choose base <span *ngIf="!selectedFill"> required</span>\r\n            </h4>\r\n          </div>\r\n        </bx-custom-material-group>\r\n        <bx-custom-material-group\r\n          [materialGroups]="outlineMaterialsGroups | async"\r\n          [selectedMaterial]="selectedOutline"\r\n          (materialColourSelected)="colourOutlineSelected($event)"\r\n        >\r\n          <div class="sub-header">\r\n            <h4 [class.danger]="!selectedOutline">\r\n              Choose outline <span *ngIf="!selectedOutline"> required</span>\r\n            </h4>\r\n          </div>\r\n        </bx-custom-material-group>\r\n      </div>\r\n    </div>\r\n  </bx-custom-scroll-container>\r\n  <bx-actions\r\n    [canDelete]="canDelete"\r\n    (designCancel)="cancel()"\r\n    (designSave)="save()"\r\n    (designDelete)="delete()"\r\n    [validated]="validated"\r\n  >\r\n    <div class="options-selection">\r\n      <h5>Muay Thai</h5>\r\n      <h5 *ngIf="selectedFill">\r\n        Base: {{ selectedFill.title }} {{ selectedFill.materialType.title }}\r\n      </h5>\r\n      <h5 *ngIf="selectedOutline">\r\n        Outline: {{ selectedOutline.title }}\r\n        {{ selectedOutline.materialType.title }}\r\n      </h5>\r\n      <h5>\r\n        <bx-price\r\n          [price]="(customSettings$ | async).muay_thai_price"\r\n        ></bx-price>\r\n      </h5>\r\n    </div>\r\n  </bx-actions>\r\n</div>\r\n';
    },
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-name-option/custom-name-decorative.component.html": 
    /*!*******************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-name-option/custom-name-decorative.component.html ***!
  \*******************************************************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<div [formGroup]="form">\r\n  <bx-custom-material-group [materialPrice]="true" [materialGroups]="type.name_fill_materials" [selectedMaterial]="selectedFill"\r\n    (materialColourSelected)="colourFillSelected($event)" *ngIf="type.name_fill_materials.length">\r\n    <div class="sub-header">\r\n      <h4 [class.danger]="!selectedFill">\r\n        Choose base <span *ngIf="!selectedFill"> required</span>\r\n      </h4>\r\n    </div>\r\n  </bx-custom-material-group>\r\n  <div class="add-outline" *ngIf="type.outline">\r\n    <mat-checkbox formControlName="add_outline">Add outline + <bx-price [price]="type.outline_price"></bx-price> per\r\n      letter\r\n    </mat-checkbox>\r\n  </div>\r\n  <bx-custom-material-group [materials]="type.name_outline_material.materials" [selectedMaterial]="selectedOutline"\r\n    (materialColourSelected)="colourOutlineSelected($event)" *ngIf="type.name_outline_material && form.get(\'add_outline\').value">\r\n    <div class="sub-header">\r\n      <h4 [class.danger]="!selectedOutline">\r\n        Choose outline <span *ngIf="!selectedOutline"> required</span>\r\n      </h4>\r\n    </div>\r\n  </bx-custom-material-group>\r\n</div>\r\n';
    },
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-name-option/custom-name-option-finish.component.html": 
    /*!**********************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-name-option/custom-name-option-finish.component.html ***!
  \**********************************************************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<div [formGroup]="form" *ngIf="(customSettings$ | async) as customSettings">\r\n  <ul class="name-finish" [ngClass]="{ invalid: !form.get(\'finish\').valid }" *ngIf="type && type.special_finishes">\r\n    <li *ngFor="let finish of customSettings.name_finishes" [ngClass]="{\r\n        selected: selectedFinish && selectedFinish._id === finish._id\r\n      }"\r\n      (click)="finishSelected(finish)">\r\n      {{ finish.title }} <br />+\r\n      <bx-price [price]="finish.price"></bx-price> per letter\r\n    </li>\r\n  </ul>\r\n  <div class="add-crystals" *ngIf="type && type.crystals">\r\n    <mat-checkbox formControlName="add_crystals">Add crystals +\r\n      <bx-price [price]="type.crystal_price"></bx-price> per\r\n      letter\r\n    </mat-checkbox>\r\n  </div>\r\n  <bx-custom-material-group [materials]="type.crystal_material.materials" [selectedMaterial]="selectedCrystal"\r\n    (materialColourSelected)="colourCrystalSelected($event)" *ngIf="form.get(\'add_crystals\').value">\r\n    <div class="sub-header">\r\n      <h4>Choose crystal colour</h4>\r\n    </div>\r\n  </bx-custom-material-group>\r\n</div>\r\n';
    },
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-name-option/custom-name-option-patch.component.html": 
    /*!*********************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-name-option/custom-name-option-patch.component.html ***!
  \*********************************************************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<div [formGroup]="form">\r\n  <mat-checkbox formControlName="add_patch"\r\n    >Add patch +\r\n    <bx-price [price]="type.patch_price"></bx-price>\r\n  </mat-checkbox>\r\n  <bx-custom-material-group\r\n    [materials]="type.patch_material.materials"\r\n    [selectedMaterial]="selectedPatch"\r\n    (materialColourSelected)="patchSelected($event)"\r\n    *ngIf="form.get(\'add_patch\').value"\r\n  >\r\n    <div class="sub-header">\r\n      <h4 [class.danger]="!selectedPatch">\r\n        Choose patch <span *ngIf="!selectedPatch"> required</span>\r\n      </h4>\r\n    </div>\r\n  </bx-custom-material-group>\r\n</div>\r\n';
    },
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-name-option/custom-name-option.component.html": 
    /*!***************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-name-option/custom-name-option.component.html ***!
  \***************************************************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<div class="options-panel" [formGroup]="nameForm">\r\n  <bx-custom-scroll-container>\r\n    <div class="svg-text-wrapper">\r\n      <svg width="500" height="80" viewBox="0 0 500 80">\r\n        <svg:defs>\r\n          <svg:filter id="textFilter" height="80px">\r\n            <svg:feImage width="4" height="4" [attr.xlink:href]="selectedCrystal.data_uri" *ngIf="selectedCrystal" />\r\n            <svg:feTile result="3dot" *ngIf="selectedCrystal" />\r\n            <svg:feComposite in="3dot" in2="SourceGraphic" operator="in" result="comp" *ngIf="selectedCrystal"></svg:feComposite>\r\n            <feOffset in="SourceAlpha" dx="0.3333333333333333" dy="1.6666666666666667" result="15"></feOffset>\r\n            <feGaussianBlur stdDeviation="1" in="15" result="16"></feGaussianBlur>\r\n            <feSpecularLighting surfaceScale="2" specularConstant="0.8" specularExponent="15" in="16" result="17">\r\n              <fePointLight x="-1000" y="-5000" z="300"></fePointLight>\r\n            </feSpecularLighting>\r\n            <feComposite in="17" in2="SourceAlpha" operator="in" result="18"></feComposite>\r\n            <feOffset in="SourceAlpha" dx="-0.3333333333333333" dy="-1.6666666666666667" result="19"></feOffset>\r\n            <feGaussianBlur stdDeviation="1" in="19" result="20"></feGaussianBlur>\r\n            <feSpecularLighting surfaceScale="2" specularConstant="1.8" specularExponent="6" in="20" result="21">\r\n              <fePointLight x="1000" y="5000" z="300"></fePointLight>\r\n            </feSpecularLighting>\r\n            <feComposite in="21" in2="SourceAlpha" operator="in" result="22"></feComposite>\r\n            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" in="22" result="23"></feColorMatrix>\r\n            <feComposite k1="0" k2="0.8" k3="0.5" k4="0" in="18" in2="23" operator="arithmetic" result="24"></feComposite>\r\n            <feOffset result="offOut" in="SourceGraphic" dx="1" dy="1" />\r\n            <feColorMatrix result="matrixOut" in="offOut" type="matrix" values="0.1 0 0 0 0 0 0.1 0 0 0 0 0 0.1 0 0 0 0 0 0.5 0" />\r\n            <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="3" />\r\n            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" result="shadow" />\r\n            <svg:feMerge>\r\n              <svg:feMergeNode in="shadow" />\r\n              <svg:feMergeNode in="SourceGraphic" />\r\n              <svg:feMergeNode in="comp" *ngIf="selectedCrystal" />\r\n              <feMergeNode in="24" *ngIf="selectedFinish && selectedFinish.text3d"></feMergeNode>\r\n            </svg:feMerge>\r\n          </svg:filter>\r\n          <svg:pattern *ngIf="selectedFill" x="0" y="0" width="500" height="80" patternUnits="userSpaceOnUse" id="nameFillPattern">\r\n            <svg:rect width="500" height="80" [attr.fill]="selectedFill.hex" *ngIf="selectedFill.hex"></svg:rect>\r\n            <svg:image width="500" height="80" [attr.xlink:href]="getImageUrl(selectedFill.image)" preserveAspectRatio="none"\r\n              x="0" y="0" width="100%" height="100%" *ngIf="selectedFill.image"></svg:image>\r\n          </svg:pattern>\r\n        </svg:defs>\r\n        <svg:rect [attr.width]="updatePosition().width" [attr.height]="updatePosition().height" [attr.x]="updatePosition().x"\r\n          [attr.y]="updatePosition().y" [attr.fill]="selectedPatch.hex" *ngIf="svgText && selectedPatch && nameForm.get(\'add_patch\').value"></svg:rect>\r\n        <svg:text x="250" y="10" stroke-alignment="outer" [attr.font-family]="nameForm.get(\'font\').value" [attr.fill]="getFill()"\r\n          [attr.filter]="filterUrl" [attr.stroke]="selectedOutline?.hex" [attr.stroke-width]="strokeWidth" dy="40"\r\n          text-anchor="middle" font-size="60px" #svgText>\r\n          {{ nameForm.get(\'text\').value }}\r\n        </svg:text>\r\n      </svg>\r\n    </div>\r\n    <div class="option-panel">\r\n      <mat-vertical-stepper [linear]="true" #stepper="matVerticalStepper">\r\n        <ng-template matStepperIcon="done">\r\n          <fa-icon [icon]="[\'fal\', \'check\']"></fa-icon>\r\n        </ng-template>\r\n        <ng-template matStepperIcon="edit">\r\n          <fa-icon [icon]="[\'fal\', \'pen\']"></fa-icon>\r\n        </ng-template>\r\n        <mat-step [completed]="stepOneComplete" editable="true" #step1>\r\n          <div class="content">\r\n            <ng-template matStepLabel>\r\n              <span [class.complete]="stepOneComplete">Select font and text</span>\r\n            </ng-template>\r\n            <ul class="fonts">\r\n              <li class="{{ font.value }}" [ngClass]="{\r\n                  selected: nameForm.get(\'font\').value === font.value\r\n                }"\r\n                (click)="setFont(font.value)" *ngFor="let font of fonts">\r\n                {{ font.title }}\r\n              </li>\r\n            </ul>\r\n            <mat-form-field>\r\n              <input type="text" matInput placeholder="Enter text" formControlName="text" />\r\n              <mat-error *ngIf="nameForm.get(\'text\').invalid">{{\r\n                getTextErrorMessage()\r\n              }}</mat-error>\r\n            </mat-form-field>\r\n            <br />\r\n            <br />\r\n            <p>If you want a 3D name you must choose Embroidery</p>\r\n            <ul class="name-style" [ngClass]="{ invalid: !nameForm.get(\'name_type\').valid }">\r\n              <li [ngClass]="{\r\n                  selected: nameForm.get(\'name_type\').value === name_type._id\r\n                }"\r\n                *ngFor="let name_type of (customSettings$ | async).name_types" (click)="setNameType(name_type)">\r\n                {{ name_type.title }} <br />\r\n                <div *ngIf="\r\n                    name_type.base_price && name_type.base_price > 0;\r\n                    else noBase\r\n                  ">\r\n                  <bx-price [price]="name_type.base_price"></bx-price> +\r\n                  <bx-price [price]="name_type.price"></bx-price> per letter\r\n                </div>\r\n                <ng-template #noBase>\r\n                  <bx-price [price]="name_type.price"></bx-price> per letter\r\n                </ng-template>\r\n              </li>\r\n            </ul>\r\n            <button class="btn btn-danger btn-info" (click)="showExamples(\'name-styles\')">\r\n              <fa-icon [icon]="[\'fal\', \'info-circle\']"></fa-icon> View examples.\r\n            </button>\r\n          </div>\r\n        </mat-step>\r\n        <mat-step [completed]="stepTwoComplete" editable="true">\r\n          <div class="content">\r\n            <ng-template matStepLabel>\r\n              <span [class.complete]="stepTwoComplete">Select colours</span>\r\n            </ng-template>\r\n            <bx-custom-name-decorative [form]="nameForm" [type]="selectedType" *ngIf="selectedType" [selectedFill]="selectedFill"\r\n              [selectedOutline]="selectedOutline" (nameColourFillSelected)="setFillColour($event)"\r\n              (nameColourOutlineSelected)="setOutlineColour($event)"></bx-custom-name-decorative>\r\n          </div>\r\n        </mat-step>\r\n        <mat-step [completed]="stepThreeComplete" editable="true" #step3>\r\n          <div class="content">\r\n            <ng-template matStepLabel>\r\n              <span [class.complete]="stepThreeComplete">Select finish</span>\r\n            </ng-template>\r\n            <bx-custom-name-option-finish [form]="nameForm" [step]="step3" [type]="selectedType" [selectedFinish]="selectedFinish"\r\n              [selectedCrystal]="selectedCrystal" (nameFinishSelected)="setFinish($event)" (nameColourCrystalSelected)="setCrystalColour($event)"></bx-custom-name-option-finish>\r\n          </div>\r\n        </mat-step>\r\n        <mat-step [completed]="stepFourComplete" optional="true" *ngIf="selectedType && selectedType.patch">\r\n          <div class="content">\r\n            <ng-template matStepLabel>\r\n              <span [class.complete]="stepFourComplete">Add contrasting patch</span>\r\n            </ng-template>\r\n            <bx-custom-name-option-patch [form]="nameForm" [selectedPatch]="selectedPatch" [type]="selectedType"\r\n              (namePatchSelected)="setPatchColour($event)"></bx-custom-name-option-patch>\r\n          </div>\r\n        </mat-step>\r\n      </mat-vertical-stepper>\r\n    </div>\r\n  </bx-custom-scroll-container>\r\n  <bx-actions (designCancel)="cancel()" (designSave)="save()" [validated]="nameForm.valid">\r\n    <div class="options-selection" *ngIf="selectedType">\r\n      <h5>{{ selectedType.title }}</h5>\r\n      <h5 *ngIf="selectedFill">\r\n        Base: {{ selectedFill.title }} {{ selectedFill.materialType.title }}\r\n      </h5>\r\n      <h5 *ngIf="selectedOutline">\r\n        Outline: {{ selectedOutline.title }}\r\n        {{ selectedOutline.materialType.title }}\r\n      </h5>\r\n      <h5 *ngIf="selectedFinish">Finish: {{ selectedFinish.title }}</h5>\r\n      <h5 *ngIf="selectedCrystal">Crystals: {{ selectedCrystal.title }}</h5>\r\n      <h5 *ngIf="selectedPatch">Patch: {{ selectedPatch.title }}</h5>\r\n      <h5>\r\n        <bx-price [price]="currentPrice() | async"></bx-price>\r\n      </h5>\r\n    </div>\r\n  </bx-actions>\r\n</div>\r\n';
    },
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-panel-option/custom-panel-option.component.html": 
    /*!*****************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-panel-option/custom-panel-option.component.html ***!
  \*****************************************************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<div class="options-panel" *ngIf="productSetting as panel">\r\n  <bx-custom-scroll-container>\r\n    <div class="option-panel">\r\n      <div class="content">\r\n        <ng-container *ngIf="panel.material_groups && panel.material_groups.length > 1; else normalColors">\r\n          <bx-custom-material-colour [panel]="panel" [selectedMaterial]="selectedMaterial"\r\n            (materialColourSelected)="colourSelected($event)"></bx-custom-material-colour>\r\n        </ng-container>\r\n        <ng-template #normalColors>\r\n          <bx-custom-material-group [basePrice]="panel.area_size.price_adjust" [materialGroups]="panel.material_groups"\r\n            [selectedMaterial]="selectedMaterial" (materialColourSelected)="colourSelected($event)">\r\n          </bx-custom-material-group>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </bx-custom-scroll-container>\r\n  <bx-actions [canDelete]="panel.area_size.optional && canDelete" (designCancel)="cancel()" (designSave)="save()"\r\n    (designDelete)="delete()" [validated]="validated">\r\n    <div class="options-selection">\r\n      <h5>{{ panel.name }}</h5>\r\n      <h5 *ngIf="selectedMaterial">\r\n        {{ selectedMaterial.title }} {{ selectedMaterial.materialType.title }}\r\n      </h5>\r\n      <h5 *ngIf="selectedMaterial">\r\n        <bx-price [price]="getPrice()"></bx-price>\r\n      </h5>\r\n    </div>\r\n  </bx-actions>\r\n</div>\r\n';
    },
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-size-option/custom-size-option.component.html": 
    /*!***************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-size-option/custom-size-option.component.html ***!
  \***************************************************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<form class="options-panel" [formGroup]="sizingForm">\r\n  <bx-custom-scroll-container>\r\n    <div class="options-form" formGroupName="sizing">\r\n      <div *ngIf="needsSize">\r\n        <mat-form-field appearance="standard">\r\n          <mat-label>Enter height</mat-label>\r\n          <input type="text" matInput placeholder="Enter height" formControlName="height" required />\r\n          <mat-error *ngIf="\r\n              sizingForm\r\n                .get(\'sizing\')\r\n                .get(\'height\')\r\n                .hasError(\'required\')\r\n            ">Please\r\n            enter your height.</mat-error>\r\n        </mat-form-field>\r\n        <mat-radio-group class="units-selector" formControlName="unit_height" appearance="standard">\r\n          <mat-radio-button class="option" value="CMS">CMS</mat-radio-button>\r\n          <mat-radio-button class="option" value="FEET & INCHES">FEET & INCHES</mat-radio-button>\r\n        </mat-radio-group>\r\n        <mat-form-field appearance="standard">\r\n          <mat-label>Enter weight</mat-label>\r\n          <input type="number" matInput placeholder="Enter weight" formControlName="weight"\r\n            pattern="[0-9]+([\\.,][0-9]+)?" minlength="1" maxlength="10" required />\r\n          <mat-hint>Please enter your weight (numbers only).</mat-hint>\r\n          <mat-error *ngIf="\r\n              sizingForm\r\n                .get(\'sizing\')\r\n                .get(\'weight\')\r\n                .hasError(\'required\')\r\n            ">Please\r\n            enter your weight (numbers only).</mat-error>\r\n        </mat-form-field>\r\n        <mat-radio-group class="units-selector" formControlName="unit" appearance="standard">\r\n          <mat-radio-button class="option" value="KGS">KGS</mat-radio-button>\r\n          <mat-radio-button class="option" value="LBS">LBS</mat-radio-button>\r\n        </mat-radio-group>\r\n      </div>\r\n      <mat-form-field appearance="standard" *ngIf="sizes && sizes.length">\r\n        <mat-label>Your size</mat-label>\r\n        <mat-select placeholder="Select size" formControlName="size">\r\n          <mat-option [value]="size.title" *ngFor="let size of sizes">{{ size.title }}\r\n            <span *ngIf="size.price_adjust < 0">({{ size.price_adjust }}%)</span>\r\n            <span *ngIf="size.price_adjust > 0">(+{{ size.price_adjust }}%)</span>\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class="options-content">\r\n      <h4 class="group-title">Production</h4>\r\n      <span class="important" [innerHTML]="customSettings.production_info"></span>\r\n    </div>\r\n    <div class="options-form" formGroupName="production">\r\n      <mat-radio-group class="production-options" formControlName="type">\r\n        <mat-radio-button [value]="type.title" *ngFor="let type of customSettings.production_types">\r\n          <span [innerHTML]="type.description"></span>\r\n          <span *ngIf="type.price">( <bx-price [price]="type.price"></bx-price>)</span>\r\n        </mat-radio-button>\r\n      </mat-radio-group>\r\n      <mat-form-field>\r\n        <textarea matInput placeholder="Enter date item needed & any other instructions" matTextareaAutosize\r\n          matAutosizeMinRows="3" matAutosizeMaxRows="10" formControlName="instructions"></textarea>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class="options-content">\r\n      <h4 class="group-title">Boxxer Logo</h4>\r\n      <p class="important">\r\n        To keep our prices reasonable, all products need to include a Boxxer\r\n        logo. You can drag this to where want it (except small waist band logos\r\n        on shorts which are in a set position). A fee applies if you want all\r\n        logos removed.\r\n      </p>\r\n    </div>\r\n    <div class="options-form" formGroupName="boxxer_logo">\r\n      <mat-checkbox formControlName="remove_logo">Remove Boxxer logo +\r\n        <bx-price [price]="customSettings.remove_logo_price"></bx-price>\r\n      </mat-checkbox>\r\n    </div>\r\n  </bx-custom-scroll-container>\r\n  <bx-actions (designCancel)="cancel()" (designSave)="save()" [validated]="sizingForm.valid"></bx-actions>\r\n</form>\r\n';
    },
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-style-option/custom-style-option.component.html": 
    /*!*****************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-style-option/custom-style-option.component.html ***!
  \*****************************************************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<div class="options-panel" *ngIf="style$ | async as style">\r\n  <bx-custom-scroll-container>\r\n    <h4 class="group-title">{{ style.title }}</h4>\r\n    <div class="options-content">\r\n      <span [innerHTML]="style.description"></span>\r\n    </div>\r\n    <div\r\n      class="option-box"\r\n      [ngClass]="{ selected: option._id === selectedOption?._id }"\r\n      *ngFor="let option of style.options"\r\n      (click)="optionSelected(option)"\r\n    >\r\n      <img [bxLazysizes]="option.image.key" *ngIf="option.image" />\r\n      <div class="content">\r\n        <h3>{{ option.title }}</h3>\r\n        <h4 *ngIf="option.subtitle">{{ option.subtitle }}</h4>\r\n        <h4 *ngIf="option.price > 0">\r\n          +\r\n          <bx-price [price]="option.price"></bx-price>\r\n        </h4>\r\n      </div>\r\n    </div>\r\n  </bx-custom-scroll-container>\r\n  <bx-actions\r\n    (designCancel)="cancel()"\r\n    (designSave)="save()"\r\n    [validated]="validated"\r\n  ></bx-actions>\r\n</div>\r\n';
    },
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-upload-option/custom-upload-option.component.html": 
    /*!*******************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-upload-option/custom-upload-option.component.html ***!
  \*******************************************************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<div class="options-panel">\r\n  <bx-custom-scroll-container>\r\n    <div class="option-panel">\r\n      <div class="content">\r\n        <div\r\n          class="dropzone"\r\n          [dropzone]="dropzone_config"\r\n          (success)="onUploadSuccess($event)"\r\n          *ngIf="\r\n            !selectedUpload || (selectedUpload && !selectedUpload.image);\r\n            else uploadImage\r\n          "\r\n        >\r\n          <div class="dz-message">\r\n            <fa-icon\r\n              class="icon"\r\n              [icon]="[\'fal\', \'cloud-upload\']"\r\n              [fixedWidth]="true"\r\n              size="1x"\r\n            ></fa-icon>\r\n            <h5>Click or drag images here to upload</h5>\r\n          </div>\r\n        </div>\r\n        <ng-template #uploadImage>\r\n          <div class="engraving-image">\r\n            <img [bxLazysizes]="selectedUpload.image.key" [crop_ratio]="1" />\r\n            <button class="btn btn-solid btn-block" (click)="removeImage()">\r\n              Clear Image\r\n            </button>\r\n          </div>\r\n        </ng-template>\r\n        <div class="upload-options" [formGroup]="uploadForm">\r\n          <p class="danger">\r\n            Logos will normally be printed. We may not be able to use low\r\n            quality images. If there is a problem we will email you.\r\n          </p>\r\n          <mat-checkbox formControlName="remove_background"\r\n            >Do you want us to remove the background around this logo when we\r\n            make your item?</mat-checkbox\r\n          >\r\n          <mat-form-field>\r\n            <textarea\r\n              matInput\r\n              placeholder="Special instructions about logo"\r\n              matTextareaAutosize\r\n              matAutosizeMinRows="3"\r\n              matAutosizeMaxRows="10"\r\n              formControlName="instructions"\r\n            ></textarea>\r\n          </mat-form-field>\r\n          <h4 [hidden]="!hasSizes">Select size</h4>\r\n          <mat-radio-group class="graphic-sizes" formControlName="size">\r\n            <mat-radio-button\r\n              class="option"\r\n              *ngFor="let size of uploadSizes$ | async"\r\n              [value]="size.title"\r\n            >\r\n              {{ size.title }} - <bx-price [price]="size.price"></bx-price\r\n              ><br /><small>{{ size.description }}</small>\r\n            </mat-radio-button>\r\n          </mat-radio-group>\r\n          <p [hidden]="!hasSizes">\r\n            Logo size will be at the widest or longest point depending on shape\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </bx-custom-scroll-container>\r\n  <bx-actions\r\n    [canDelete]="canDelete"\r\n    (designCancel)="cancel()"\r\n    (designSave)="save()"\r\n    (designDelete)="delete()"\r\n    [validated]="validated"\r\n  >\r\n    <div class="options-selection">\r\n      <h5>Upload Image</h5>\r\n      <h5>\r\n        <bx-price [price]="price"></bx-price>\r\n      </h5>\r\n    </div>\r\n  </bx-actions>\r\n</div>\r\n';
    },
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/svg/svg-image.component.html": 
    /*!*******************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/customiser/svg/svg-image.component.html ***!
  \*******************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<svg:image [attr.xlink:href]="imageUrl" [attr.transform]="rotation_string" [attr.width]="width" [attr.height]="height" *ngIf="image"></svg:image>\r\n';
    },
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/svg/svg-logo.component.html": 
    /*!******************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/customiser/svg/svg-logo.component.html ***!
  \******************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<svg [attr.x]="logo.position.x" [attr.y]="logo.position.y" [attr.width]="logo.position.width" [attr.height]="logo.position.height"\r\n  viewBox="0 0 170.08 170.08">\r\n  <path d="M85 0a85 85 0 1 0 85 85A85.14 85.14 0 0 0 85 0z" fill="#231f20" />\r\n  <path d="M85 164.2A79.16 79.16 0 1 1 164.2 85 79.26 79.26 0 0 1 85 164.2zM85 8.45A76.59 76.59 0 1 0 161.63 85 76.68 76.68 0 0 0 85 8.45z"\r\n    fill="#fff" stroke="#fff" stroke-miterlimit="10" />\r\n  <g fill="#fff">\r\n    <path d="M112.47 81.64l18.58-28.93s-14.62 5.63-25.58 5.94l-4.27 5.94-16-24L68.87 65l-3.35-5.48s-16.9-2-27.56-6.85L57.61 82.1 39 111s14.62-5.63 25.59-5.94l4.26-5.93L85 123.79l16.2-25.09 3.35 5.48s16.91 2 27.57 6.85zm-9.9 9.9l-2.63-4.45-.15 4.56L85 113.58 68.87 89.1l-6.55 10.36S54 100.53 52 101.29l12.3-19.42L52 62.61a51.5 51.5 0 0 0 10.35 1.52l5.15 8.07v4l17.67-25 16 23.49 6.55-10.36s8.38-1.06 10.36-1.82l-12.31 19.36 12.34 19.26a51.52 51.52 0 0 0-10.36-1.52z"\r\n    />\r\n    <path d="M85 65.16L73.29 82.37 85 98.66l11.45-16.28zm-5.64 17.22L85 74.71l5.34 7.67L85 89.2z" />\r\n  </g>\r\n  <g fill="#231f20">\r\n    <path d="M52.35 111.69c3.57 0 5.78 1.11 6.66 3.28a10.55 10.55 0 0 0-5.36-1.28h-.15c-5.76 0-11.22 3.27-16.37 9.58a31.19 31.19 0 0 0-5 8.7 13.51 13.51 0 0 0-1 4.83 4.93 4.93 0 0 0 3.27 5 4.81 4.81 0 0 0 1.74.3 8.05 8.05 0 0 0 1.26-.11 18.28 18.28 0 0 0 2.71-.75c4.8-1.76 9.3-6 13.62-12.55a25.65 25.65 0 0 0 3-6.12c.48-1.67.47-3-.15-3.83a2.51 2.51 0 0 0-2.25-1c-1.94 0-4 .93-6.3 2.78-3.13 2.58-4.94 5.48-5.35 8.75a7.81 7.81 0 0 0 0 1.61c.06.22.12.39.06.5a.33.33 0 0 1-.27.12c-.11 0-.17-.06-.23-.17a7.28 7.28 0 0 1-1.81-4.47 8.08 8.08 0 0 1 1.12-4 14.77 14.77 0 0 1 9.18-7.63 9 9 0 0 1 2.58-.37A9.47 9.47 0 0 1 55 115a6 6 0 0 1 4.83 6c0 2.5-.94 5.39-2.91 8.79a32.82 32.82 0 0 1-6.29 7.71c-5 4.59-9.69 6.92-14.3 7h-.12c-4.75 0-7.95-2.67-8.48-7.34-.49-4.1.85-8.54 4.08-13.29a30.36 30.36 0 0 1 4.33-5.09c4.28-4.14 9-6.47 14.28-6.91q1-.09 1.92-.09m0-2c-.66 0-1.37 0-2.1.1-5.64.47-10.86 3-15.5 7.46a32.65 32.65 0 0 0-4.6 5.42c-3.46 5.1-4.95 10-4.4 14.64.64 5.61 4.66 9.1 10.47 9.1h.14c5.08 0 10.34-2.57 15.64-7.49a35.07 35.07 0 0 0 6.68-8.2c2.15-3.73 3.19-6.94 3.16-9.79a8.75 8.75 0 0 0-.3-2.18l1.5.87-2.18-5.4c-.83-2.06-3-4.53-8.51-4.53zm-7.74 19.74c.35-2.72 1.87-5.15 4.64-7.43 1.85-1.52 3.55-2.31 5-2.32.49 0 .56.09.63.19s.2.9-.14 2.11a23.32 23.32 0 0 1-2.75 5.6C48 133.8 43.7 137.76 39.4 139.34a18.74 18.74 0 0 1-2.4.66 7.38 7.38 0 0 1-.9.07 3 3 0 0 1-1-.16 2.94 2.94 0 0 1-2-3.12 11.57 11.57 0 0 1 .88-4.1 28.76 28.76 0 0 1 4.67-8.11 8.63 8.63 0 0 0-.27 2.24 9.13 9.13 0 0 0 2.17 5.59 2.2 2.2 0 0 0 1.87 1 2.36 2.36 0 0 0 1.71-.73l.2-.2.13-.25a2.5 2.5 0 0 0 .15-1.8 5.05 5.05 0 0 1 0-1z"\r\n    />\r\n    <path d="M60.11 128c.77 0 1.24 1.2 1 2l-.16.78a2.67 2.67 0 0 0 .73.33l.16-.12c.28.06 1.56.65 1.78.71l1.38.3a1.06 1.06 0 0 1 .51.71 5.13 5.13 0 0 1-.87 2l-1.36 2.4c-1.31 2.4-1.79 3.79-1.46 4.17a.42.42 0 0 0 .33.13 3.84 3.84 0 0 0 1.66-.7c.39-.23 1.55-1.18 3.52-2.86a.81.81 0 0 1 .44-.14.86.86 0 0 1 .34.07.47.47 0 0 1 .39.33c.12.5-.48 1.33-1.86 2.57l-1.21.9c-1.71 1.12-2.92 1.69-3.7 1.7-1.41 0-2.24-.77-2.47-2.36-.12-.83.31-2.11 1.23-4l1.37-2.51.43-1.06c-.84-.32-1.56-.53-2.06-.69-.49 1-1.2 2.45-2.06 4.06a17.09 17.09 0 0 1-1.81 2.3c-1.05 1.11-1.7 1.67-2.1 1.73-.7 0-1-.33-1-1l.27-.27a38.31 38.31 0 0 0 3.35-3.64 9.71 9.71 0 0 0 1.09-2.12 17.67 17.67 0 0 0 .91-3.11l.12-1.11a5.45 5.45 0 0 0 .21-.95 1 1 0 0 1 .71-.56.69.69 0 0 1 .2 0m0-2a2.72 2.72 0 0 0-.63.08 3 3 0 0 0-2 1.51l-.18.29-.06.34-.06.3-.07.07-.1.66-.15 1.11A17.34 17.34 0 0 1 56 133a7.91 7.91 0 0 1-.81 1.59 36.58 36.58 0 0 1-3.04 3.41l-.28.27-.53.53v.75a2.85 2.85 0 0 0 .73 2.22 2.94 2.94 0 0 0 2.25.9h.31A5 5 0 0 0 57.2 141v.18a4.33 4.33 0 0 0 4.45 4.08h.06c1.21 0 2.64-.62 4.78-2h.05l1.2-.9.08-.05.06-.06c1.52-1.36 2.87-2.85 2.48-4.51V137.57a2.43 2.43 0 0 0-1.68-1.61 2.65 2.65 0 0 0-.95-.17 2.72 2.72 0 0 0-1.49.44l-.13.07-.11.1.36-.64c.82-1.44 1.31-2.38 1.08-3.38a3.06 3.06 0 0 0-1.45-2l-.26-.15-.28-.07-1.25-.29-.49-.21-.53-.23a4 4 0 0 0-.82-2.2 2.87 2.87 0 0 0-2.25-1.23z"\r\n    />\r\n    <path d="M77.58 124.71a.7.7 0 0 1 .77.77 3.29 3.29 0 0 1-.59 1.61c-1.05 1.62-2.15 2.41-3.25 2.42a.69.69 0 0 1-.77-.77 3.19 3.19 0 0 1 .59-1.61c1-1.62 2.08-2.41 3.25-2.42m-4.1 5.6a2.74 2.74 0 0 1 .48 0c.56.1.78.32.73.6s-1.31 2.51-3.87 6.75a26.49 26.49 0 0 0-1.69 3 1 1 0 0 0 .31 0 4.7 4.7 0 0 0 2.07-.79l2.26-1.3a1.92 1.92 0 0 1 .44-.06c.37 0 .55.19.56.61s-.77 1.22-2.36 2.13a9.64 9.64 0 0 1-4.78 1.52 5.83 5.83 0 0 1-.59 0c-.72 0-1-.54-.79-1.49.06-.16.66-1.33 1.79-3.51l1.48-2.62a39 39 0 0 1 2.84-4.52 1.53 1.53 0 0 1 1.12-.38m4.1-7.6c-2.78 0-4.38 2.52-4.9 3.34a5 5 0 0 0-.91 2.66 3 3 0 0 0-.8.58l-.11.11-.09.13a41.65 41.65 0 0 0-3 4.73l-1.46 2.59a35.26 35.26 0 0 0-1.92 3.83v.28a3.37 3.37 0 0 0 .55 2.77 2.78 2.78 0 0 0 2 1.05h.75a11.58 11.58 0 0 0 5.78-1.79c1.67-.95 3.39-2.15 3.36-3.89a2.51 2.51 0 0 0-2.56-2.58h-.42c2.71-4.53 2.8-5 2.86-5.28a2.71 2.71 0 0 0 0-.41 7.78 7.78 0 0 0 2.75-2.76 5.19 5.19 0 0 0 .91-2.71 2.69 2.69 0 0 0-2.77-2.75z"\r\n    />\r\n    <path d="M81.71 129.72c1.85 0 2.79 1.1 2.75 3.29a16.36 16.36 0 0 1 1.59-2.17 1.51 1.51 0 0 1 1.14-.44h.47c.49.11.77.33.72.61a13.84 13.84 0 0 1-1.52 3l-2.57 4.18-1.63 2.81c.83-.06 2.48-.91 5-2.43a1.59 1.59 0 0 1 .44-.07c.38 0 .57.2.57.61a1.17 1.17 0 0 1-.33.84 19 19 0 0 1-3.3 2c-1.5.62-2.77 1.08-3.7 1.37l-3 5.13c-.44.72-.71 1.22-1.37 2.17a13.1 13.1 0 0 0-.92 1.51l-1.37 1.67a3.14 3.14 0 0 1-2.17 1.34 1.12 1.12 0 0 1-.32 0c-.72-.15-1.12-.87-1.13-2.15a9.23 9.23 0 0 1 1.29-4.28 12.94 12.94 0 0 1 6.81-6.27l.33-.56a5.14 5.14 0 0 1-2.81 1.08c-1.59 0-2.53-.94-2.82-2.8-.3-2.38.78-4.89 3.31-7.63 1.7-1.79 3.19-2.69 4.57-2.7m-3.08 10.73a3.17 3.17 0 0 0 2.21-1.14 8.76 8.76 0 0 0 2.07-3.68 3.38 3.38 0 0 0-.25-3 1.51 1.51 0 0 0-1.21-.54c-1.11 0-2.15.74-3.19 2.19a7.1 7.1 0 0 0-1.46 3.9c0 1.49.62 2.26 1.82 2.26m-.81 4.05a10.93 10.93 0 0 0-3.8 3.14 9.23 9.23 0 0 0-2 4.51 1.34 1.34 0 0 0 0 .67c0 .12.09.18.15.18a.1.1 0 0 0 .07 0c.61-.23 1.6-1.56 3-4l1.86-3.12.71-1.34m3.89-16.78h-.07c-2 0-3.86 1.07-6 3.32-3 3.23-4.22 6.25-3.84 9.26v.06a5.65 5.65 0 0 0 1.62 3.34 16.34 16.34 0 0 0-2.87 4 11.07 11.07 0 0 0-1.56 5.07c0 3.16 1.9 3.9 2.71 4.08a3.57 3.57 0 0 0 .74.08 5 5 0 0 0 3.67-2l1.38-1.68.23-.29.08-.23c.12-.21.46-.73.72-1.13.57-.82.88-1.34 1.2-1.89l.22-.38 2.63-4.48c.77-.26 1.82-.65 3.13-1.2a20.25 20.25 0 0 0 3.69-2.18l.15-.11.13-.13a3.15 3.15 0 0 0 .89-2.27 2.51 2.51 0 0 0-2.57-2.57h-.39l.89-1.45c1.3-2.18 1.69-3 1.8-3.69a2.55 2.55 0 0 0-2.29-2.86h-.06.05a5.17 5.17 0 0 0-.76-.06 3.57 3.57 0 0 0-2.08.62 4.57 4.57 0 0 0-3.39-1.29zm-1.8 7.72a4 4 0 0 1 1.25-1.24 3.11 3.11 0 0 1-.14.87A6.76 6.76 0 0 1 79.4 138a1.94 1.94 0 0 1-.58.45v-.23a5.16 5.16 0 0 1 1.1-2.73z"\r\n    />\r\n    <path d="M97.87 124.51a.7.7 0 0 1 .77.77 3.22 3.22 0 0 1-.6 1.61c-1 1.62-2.13 2.41-3.24 2.42a.71.71 0 0 1-.77-.77 3.35 3.35 0 0 1 .6-1.62c1-1.61 2.08-2.4 3.24-2.41m-4.1 5.6h.48c.56.11.78.33.72.61a71.59 71.59 0 0 1-3.86 6.74 25.5 25.5 0 0 0-1.69 3 .75.75 0 0 0 .31.05 4.59 4.59 0 0 0 2.06-.79l2.27-1.3a1.92 1.92 0 0 1 .44-.06c.37 0 .55.19.56.61s-.76 1.22-2.36 2.13a9.68 9.68 0 0 1-4.79 1.52 5.63 5.63 0 0 1-.58 0c-.72 0-.94-.54-.79-1.49 0-.17.66-1.34 1.8-3.51l1.47-2.62a40.16 40.16 0 0 1 2.83-4.52 1.57 1.57 0 0 1 1.13-.38m4.1-7.6c-2.79 0-4.38 2.52-4.91 3.34a5.28 5.28 0 0 0-.91 2.66 3 3 0 0 0-.78.57l-.12.12-.09.13a40.61 40.61 0 0 0-3 4.73l-1.46 2.59a31.25 31.25 0 0 0-1.95 3.88v.24a3.5 3.5 0 0 0 .55 2.77 2.77 2.77 0 0 0 2 1 6 6 0 0 0 .74 0 11.66 11.66 0 0 0 5.79-1.79c1.65-.93 3.36-2.13 3.36-3.86a2.52 2.52 0 0 0-2.56-2.61h-.41c2.67-4.48 2.79-4.94 2.85-5.31a1.64 1.64 0 0 0 0-.38 7.78 7.78 0 0 0 2.76-2.58 5.08 5.08 0 0 0 .91-2.72 2.68 2.68 0 0 0-2.77-2.74z"\r\n    />\r\n    <path d="M105.43 129.48c1.47 0 2.18.88 2.15 2.64a9.9 9.9 0 0 1-1.58 4.28l-1.91 2.74a2.26 2.26 0 0 0-.55 1.11c0 .06.06.11.17.12s1.32-.69 3.69-2a1.35 1.35 0 0 1 .4-.07c.34 0 .49.2.5.61a2.34 2.34 0 0 1-.44.89 19.15 19.15 0 0 1-5.07 2.66 8.92 8.92 0 0 1-1.81.24c-.73 0-1.14-.2-1.25-.6-.17-.61.49-1.89 2-3.84a15.81 15.81 0 0 0 2.62-4.47c.21-1.27-.07-1.87-.89-1.87-1 0-2.32.91-3.79 2.7-.39.56-1.2 2-2.51 4.13l-.82 1.33-.54 1c-.7 1.1-1 1.62-2 1.62h-.62c-.26 0-.42-.06-.48-.17s-.06-.44.15-.89l2.03-3.64.22-.39 1.9-3.22a34.76 34.76 0 0 1 2.79-4.47 1.27 1.27 0 0 1 1-.41 3.49 3.49 0 0 1 .61.06c.51.06.73.27.68.61a4.27 4.27 0 0 1-.33.83 6.9 6.9 0 0 1 3.65-1.53m0-2h-.07a6.48 6.48 0 0 0-2.42.55 3 3 0 0 0-1.24-.43 5 5 0 0 0-.92-.09 3.3 3.3 0 0 0-2.58 1.13 32.34 32.34 0 0 0-3 4.76l-1.84 3.16-.23.42-2.1 3.65v.14a2.84 2.84 0 0 0 0 2.84 2.39 2.39 0 0 0 2 1.07 7.07 7.07 0 0 0 .76 0c2.1 0 2.93-1.31 3.59-2.35l.12-.2v-.12l.22-.41a2.81 2.81 0 0 0 .09 1 2.94 2.94 0 0 0 3.17 2.06 11 11 0 0 0 2.23-.29h.17l.16-.07a20.26 20.26 0 0 0 5.69-3.05l.2-.18.14-.23a3.63 3.63 0 0 0 .73-2 2.48 2.48 0 0 0-2-2.54 10.08 10.08 0 0 0 1.26-4.18 4.68 4.68 0 0 0-1.18-3.56 4 4 0 0 0-3-1.15z"\r\n    />\r\n    <path d="M115.3 129.44q2.7 0 2.65 3.3a12 12 0 0 1 1.2-1.9 2.07 2.07 0 0 1 1.57-.78 2.12 2.12 0 0 1 .42 0c.5.05.72.27.67.6a59 59 0 0 1-3.65 6.52 27 27 0 0 0-1.69 3 .84.84 0 0 0 .29 0 4.74 4.74 0 0 0 2-.8l2.26-1.3a2.23 2.23 0 0 1 .47-.06c.4 0 .59.19.59.61s-.76 1.23-2.31 2.13a9.82 9.82 0 0 1-4.88 1.52 5.68 5.68 0 0 1-.59 0c-.67 0-.89-.54-.74-1.48a5.78 5.78 0 0 1-3.53 1.64c-1.58 0-2.46-.93-2.76-2.8-.35-2.44.73-5 3.25-7.63 1.65-1.74 3.25-2.64 4.74-2.65m-3.24 10.67a3.86 3.86 0 0 0 2.75-1.69l.55-1.06.92-1.72c.06-.12.06-.23.11-.28a4.49 4.49 0 0 0 0-2.27 1.42 1.42 0 0 0-1.49-1.32c-1.17 0-2.22.74-3.26 2.19a6.83 6.83 0 0 0-1.45 3.9c0 1.48.62 2.25 1.82 2.25m3.24-12.67h-.07c-2 0-4.13 1.12-6.17 3.27-3 3.08-4.23 6.21-3.78 9.3.64 4.07 3.53 4.51 4.74 4.51h.06a6.07 6.07 0 0 0 2.64-.67 2.91 2.91 0 0 0 1.47.51h.73a11.82 11.82 0 0 0 5.89-1.79c1.64-1 3.32-2.18 3.3-3.88a2.53 2.53 0 0 0-2.59-2.59h-.41c2.42-4.11 2.6-4.59 2.68-5.17a2.44 2.44 0 0 0-.47-1.85 2.76 2.76 0 0 0-1.88-1 4.37 4.37 0 0 0-.72-.06 3.86 3.86 0 0 0-2.13.64 4.44 4.44 0 0 0-3.29-1.26zm-3 10.62a1.55 1.55 0 0 1 0-.23 5 5 0 0 1 1.09-2.71 4.07 4.07 0 0 1 1.24-1.24 2.34 2.34 0 0 1 0 .79.64.64 0 0 0-.06.18l-.85 1.57-.45.88a2.72 2.72 0 0 1-.92.76z"\r\n    />\r\n    <path d="M134 118.11c.93 0 1.21.77 1 2.32a24.14 24.14 0 0 1-2.69 7.45c-2.67 4.85-5.47 8.43-8.49 10.73a5 5 0 0 0-.6 1.34c0 .17 0 .22.22.27a1 1 0 0 0 .31 0 7.49 7.49 0 0 0 2.79-1c1.16-.61 1.93-1 2.21-1.07a1.9 1.9 0 0 1 .44-.07c.37 0 .56.2.56.61.06.17-.05.45-.32.84-2.59 1.85-5 2.77-7.07 2.78a1.73 1.73 0 0 1-1.52-.59c-.39-.49-.35-1.33 0-2.49.06-.06.38-.95 1.08-2.56a69.14 69.14 0 0 1 4-8.3c1.69-3 2.62-4.52 2.73-4.63 2.35-3.79 4.1-5.7 5.37-5.71m-9.21 17.83a22.83 22.83 0 0 0 4.17-5 32.82 32.82 0 0 0 4.3-8.53 11.33 11.33 0 0 0 .42-1.72.42.42 0 0 0-.06-.27c-1 .78-3.44 4.91-7.31 12.32-.59 1.17-1.14 2.23-1.52 3.23m9.19-19.78c-2.1 0-4.13 1.93-7 6.6-.28.41-.92 1.47-2.79 4.74A70.66 70.66 0 0 0 120 136c-.37.85-.64 1.52-.82 2 0 .08-.06.15-.09.21l-.08.08-.15.46c-.38 1.2-.77 3 .29 4.31a3.63 3.63 0 0 0 3.11 1.38h.06c2.55 0 5.31-1.08 8.21-3.16l.27-.19.2-.27a3.18 3.18 0 0 0 .68-2.28 2.5 2.5 0 0 0-2.55-2.33 46.33 46.33 0 0 0 4.88-7.31 26.3 26.3 0 0 0 2.92-8.09 4.43 4.43 0 0 0-.64-3.64 2.94 2.94 0 0 0-2.29-1z"\r\n    />\r\n    <path d="M133.87 127.26c.88 0 1.22 1.15 1.06 2a1.66 1.66 0 0 0-.11.34c.12.38.73.71 1.79.86h.08a1 1 0 0 1 .36.06 1 1 0 0 1-.22.44 4.6 4.6 0 0 0-.63 2.67l.92 3.65a8.74 8.74 0 0 1 .07 1.66 4.42 4.42 0 0 1-.26 1.22 33.07 33.07 0 0 0 4-3.08.76.76 0 0 1 .43-.14 1.09 1.09 0 0 1 .34.07.61.61 0 0 1 .4.33c.11.5-.49 1.39-1.86 2.57a16.82 16.82 0 0 1-3.53 2.2 12.77 12.77 0 0 1-3.82.7h-.21a4.93 4.93 0 0 1-2.29-.58 2.38 2.38 0 0 1-1.35-1.88 3.52 3.52 0 0 1 .21-1.22 5.5 5.5 0 0 1-1.21.9c-.7 0-1-.33-1-1l.33-.28c.71-.67 1.81-1.9 3.29-3.63a13.64 13.64 0 0 0 2-5.23l.42-2.12a1.14 1.14 0 0 1 .83-.5m-3.23 10.45h.26a.88.88 0 0 1 .8 1.24c-.16.5-.93 1.23-.92 1.62s.17.5.51.71a1.7 1.7 0 0 0 1 .28 2.7 2.7 0 0 0 1.15-.3 1.77 1.77 0 0 0 1.2-1.45 5.44 5.44 0 0 0-.35-2.49l-.82-4.1a.83.83 0 0 1-.16.34 39.15 39.15 0 0 1-2.62 4.18m3.23-12.45a3 3 0 0 0-2.36 1.24l-.31.39-.1.49-.42 2.11v.06a11.87 11.87 0 0 1-1.64 4.37c-1 1.11-2.26 2.61-3 3.33l-.29.25-.64.54-.06.84a2.76 2.76 0 0 0 2.41 3.09 4.72 4.72 0 0 0 1.93 2 6.87 6.87 0 0 0 3.22.81h.3a14.5 14.5 0 0 0 4.43-.83H137.6a17.82 17.82 0 0 0 4-2.49c1.36-1.17 2.89-2.76 2.48-4.52v-.22a2.53 2.53 0 0 0-1.6-1.54 2.83 2.83 0 0 0-1-.19 2.76 2.76 0 0 0-1.48.43l-.13.08-.11.1-.7.59-.71-2.81a2.51 2.51 0 0 1 .33-1.29 2.56 2.56 0 0 0 .52-1.66L139 129l-1.27-.42a3.31 3.31 0 0 0-.72-.15 3.84 3.84 0 0 0-.83-2.11 2.86 2.86 0 0 0-2.26-1.08z"\r\n    />\r\n  </g>\r\n  <path fill="#fff" d="M69.84 14.52l5.23-1.37-3.92 10.36 8.48 7.11-5.11 1.33-5.09-4.19-2.38 6.14-4.94 1.29 3.86-10.33-8.42-7.13 4.83-1.26 5.28 4.14 2.18-6.09zM106.43 16.37l5.23 1.37-8.5 7.1 3.92 10.36-5.11-1.34-2.38-6.15-5.09 4.19-4.94-1.29L98 23.49l-3.86-10.34 4.83 1.26 2.58 6.2 4.88-4.24zM36.43 31.19a9.06 9.06 0 1 0 12.8.53 9 9 0 0 0-12.8-.53zm9.42 10.22a4.84 4.84 0 1 1 .28-6.84 4.84 4.84 0 0 1-.28 6.84zM127.46 26.19l-12.5 13.03 10.97 10.52 2.84-2.96-8.06-7.73 2.06-2.14 6.16 5.92 2.6-2.7-6.17-5.92 2.26-2.35 8.05 7.72 2.76-2.88-10.97-10.51zM149.83 67c4.84-2.35 3.1-6.5 3.1-6.5l-5.57-11.06-16.12 8.15 1.84 3.65 6.53-3.3-3.47 9.34 2.66 5.29 3.2-8.74s3 5.56 7.83 3.17zm-4.27-12s3 5.71 3.31 6.55a1.39 1.39 0 0 1-.29 1.61c-1.76 1-2.33-.42-2.33-.42l-3.25-6.4zM29 53.53s-3.94-6.32-9.58-.81l-4.84 11.21 16.54 7.21L36 60s.73-7.72-7-6.47zm3 5.82l-2.9 6.54-2.91-1.27 2.94-6.75a1.51 1.51 0 0 1 1.19-.71A1.64 1.64 0 0 1 32 59.35zm-6.4-2.78l-2.89 6.53-2.92-1.27 2.95-6.75a1.5 1.5 0 0 1 1.18-.71 1.65 1.65 0 0 1 1.63 2.2z"\r\n  />\r\n  <g fill="#fff">\r\n    <path d="M50.64 137.45c-5 4.59-9.69 6.92-14.3 7-4.82.05-8.06-2.63-8.6-7.34-.49-4.1.85-8.54 4.08-13.29a30.36 30.36 0 0 1 4.33-5.09c4.28-4.14 9-6.47 14.28-6.91 4.71-.43 7.55.65 8.58 3.19a10.55 10.55 0 0 0-5.51-1.27c-5.76 0-11.22 3.27-16.37 9.58a31.19 31.19 0 0 0-5 8.7 13.51 13.51 0 0 0-1 4.83 4.93 4.93 0 0 0 3.27 5 5.85 5.85 0 0 0 3 .19 18.28 18.28 0 0 0 2.71-.75c4.8-1.76 9.3-6 13.62-12.55a25.65 25.65 0 0 0 3-6.12c.48-1.67.47-3-.15-3.83a2.51 2.51 0 0 0-2.28-1c-1.94 0-4 .93-6.3 2.78-3.13 2.58-4.94 5.48-5.35 8.75a7.81 7.81 0 0 0 0 1.61c.06.22.12.39.06.5a.33.33 0 0 1-.27.12c-.11 0-.17-.06-.23-.17a7.28 7.28 0 0 1-1.81-4.47 8.08 8.08 0 0 1 1.12-4 14.77 14.77 0 0 1 9.18-7.63A9.23 9.23 0 0 1 55 115a6 6 0 0 1 4.83 6c0 2.5-.94 5.39-2.91 8.79a32.82 32.82 0 0 1-6.28 7.66zM66.63 140.62l-1.21.9c-1.71 1.12-2.92 1.69-3.7 1.7a2.35 2.35 0 0 1-2.51-2.36c-.12-.83.31-2.11 1.23-4l1.37-2.51.43-1.06c-.84-.32-1.56-.53-2.06-.69-.49 1-1.2 2.45-2.06 4.06a17.09 17.09 0 0 1-1.81 2.3c-1.05 1.11-1.7 1.67-2.1 1.73-.71 0-1.05-.32-1-1l.27-.27a38.31 38.31 0 0 0 3.35-3.64 9.71 9.71 0 0 0 1.09-2.12 17.67 17.67 0 0 0 .91-3.11l.17-1.05a5.45 5.45 0 0 0 .21-.95 1 1 0 0 1 .71-.56c.89-.23 1.46 1.1 1.24 2l-.16.78a2.67 2.67 0 0 0 .73.33l.16-.12c.28.06 1.56.65 1.78.71L65 132a1.06 1.06 0 0 1 .51.71 5.13 5.13 0 0 1-.87 2l-1.36 2.4c-1.31 2.4-1.79 3.79-1.46 4.17s.89.1 2-.57c.39-.23 1.55-1.18 3.52-2.86a.78.78 0 0 1 .78-.07.47.47 0 0 1 .39.33c.1.44-.51 1.27-1.88 2.51z"\r\n    />\r\n    <path d="M72.41 141.34a9 9 0 0 1-5.41 1.49c-.72 0-1-.54-.79-1.49.06-.16.66-1.33 1.79-3.51l1.48-2.62a39 39 0 0 1 2.84-4.52 1.81 1.81 0 0 1 1.6-.34c.56.1.78.32.73.6s-1.31 2.51-3.87 6.75a25.5 25.5 0 0 0-1.69 3c.45.16 1.22-.07 2.38-.75l2.26-1.3c.66-.17 1 0 1 .55s-.73 1.23-2.32 2.14zm5.35-14.25c-1.05 1.62-2.15 2.41-3.25 2.42a.7.7 0 0 1-.78-.77 3.19 3.19 0 0 1 .59-1.61c1-1.62 2.08-2.41 3.25-2.42a.71.71 0 0 1 .78.77 3.29 3.29 0 0 1-.59 1.61z"\r\n    />\r\n    <path d="M88.3 139.91a19 19 0 0 1-3.3 2c-1.5.62-2.77 1.08-3.7 1.37l-3 5.13c-.44.72-.71 1.22-1.37 2.17a13.1 13.1 0 0 0-.92 1.51l-1.37 1.67c-.93 1.07-1.76 1.46-2.49 1.3s-1.15-.9-1.15-2.18a9.23 9.23 0 0 1 1.29-4.28 12.94 12.94 0 0 1 6.81-6.27l.33-.56a5.14 5.14 0 0 1-2.81 1.08c-1.61 0-2.56-.92-2.86-2.8-.3-2.38.78-4.89 3.31-7.63 1.7-1.79 3.19-2.69 4.57-2.7 1.88 0 2.84 1.08 2.8 3.29a16.36 16.36 0 0 1 1.59-2.17 1.71 1.71 0 0 1 1.61-.41c.49.11.77.33.72.61a13.84 13.84 0 0 1-1.52 3l-2.57 4.18-1.61 2.78c.83-.06 2.48-.91 5-2.43.67-.18 1 0 1 .54a1.17 1.17 0 0 1-.36.8zm-10.48 4.59a10.93 10.93 0 0 0-3.8 3.14 9.23 9.23 0 0 0-2 4.51 1.34 1.34 0 0 0 0 .67c.06.17.11.22.22.16.61-.23 1.6-1.56 3-4l1.86-3.12zm4.87-11.86a1.54 1.54 0 0 0-1.23-.54c-1.11 0-2.15.74-3.19 2.19a7.1 7.1 0 0 0-1.46 3.9c0 1.5.63 2.27 1.85 2.26a3.17 3.17 0 0 0 2.21-1.14 8.76 8.76 0 0 0 2.07-3.68 3.38 3.38 0 0 0-.25-2.99z"\r\n    />\r\n    <path d="M92.7 141.14a9.09 9.09 0 0 1-5.37 1.49c-.72 0-.94-.54-.79-1.49 0-.17.66-1.34 1.8-3.51l1.47-2.63a40.16 40.16 0 0 1 2.83-4.52 1.87 1.87 0 0 1 1.61-.35c.56.11.78.33.72.61a71.59 71.59 0 0 1-3.86 6.74 25.5 25.5 0 0 0-1.69 3c.45.17 1.22-.06 2.37-.74l2.27-1.3c.66-.17 1 0 1 .55s-.76 1.24-2.36 2.15zm5.3-14.25c-1 1.62-2.13 2.41-3.24 2.42a.71.71 0 0 1-.79-.77 3.35 3.35 0 0 1 .6-1.62c1-1.61 2.08-2.4 3.24-2.41a.71.71 0 0 1 .79.77 3.22 3.22 0 0 1-.6 1.61z"\r\n    />\r\n    <path d="M107.87 139.82a19.15 19.15 0 0 1-5.07 2.66c-1.88.4-2.88.3-3.06-.36s.49-1.89 2-3.84a15.81 15.81 0 0 0 2.62-4.47c.21-1.27-.07-1.88-.91-1.87-1 0-2.32.91-3.79 2.7-.39.56-1.2 2-2.51 4.13l-.82 1.33-.54 1c-.82 1.28-1 1.78-2.65 1.58-.28 0-.44-.05-.5-.17s-.06-.44.15-.89l2.09-3.62.22-.39 1.9-3.22a34.76 34.76 0 0 1 2.79-4.47 1.61 1.61 0 0 1 1.65-.35c.51.06.73.27.68.61a4.27 4.27 0 0 1-.33.83 6.9 6.9 0 0 1 3.65-1.53c1.49 0 2.22.87 2.19 2.64a9.9 9.9 0 0 1-1.63 4.28l-1.91 2.74a2.26 2.26 0 0 0-.55 1.11c0 .06.06.11.17.12s1.32-.69 3.69-2c.61-.18.89 0 .9.54a2.34 2.34 0 0 1-.43.91z"\r\n    />\r\n    <path d="M119.8 140.87a9.29 9.29 0 0 1-5.47 1.49c-.67 0-.89-.54-.74-1.48a5.78 5.78 0 0 1-3.53 1.64c-1.6 0-2.5-.92-2.8-2.8-.35-2.44.73-5 3.25-7.63 1.65-1.74 3.25-2.64 4.74-2.65q2.75 0 2.7 3.3a12 12 0 0 1 1.2-1.9 2 2 0 0 1 2-.74c.5.05.72.27.67.6a59 59 0 0 1-3.65 6.52 27 27 0 0 0-1.69 3c.39.16 1.16-.07 2.32-.75l2.26-1.3c.72-.17 1.06 0 1.06.55s-.77 1.28-2.32 2.15zm-3.34-7.78a1.42 1.42 0 0 0-1.51-1.32c-1.17 0-2.22.74-3.26 2.19a6.83 6.83 0 0 0-1.45 3.9c0 1.49.63 2.27 1.85 2.25a3.86 3.86 0 0 0 2.75-1.69l.55-1.06.92-1.72c.06-.12.06-.23.11-.28a4.49 4.49 0 0 0 .04-2.27z"\r\n    />\r\n    <path d="M132.21 127.88c-2.67 4.85-5.47 8.43-8.49 10.73a5 5 0 0 0-.6 1.34c0 .17 0 .22.22.27.56.16 1.61-.18 3.1-.92 1.16-.61 1.93-1 2.21-1.07.66-.17 1 0 1 .54.06.17-.05.45-.32.84-2.59 1.85-5 2.77-7.07 2.78a1.75 1.75 0 0 1-1.56-.59c-.39-.49-.35-1.33 0-2.49.06-.06.38-.95 1.08-2.56a69.14 69.14 0 0 1 4-8.3c1.69-3 2.62-4.52 2.73-4.63 2.35-3.79 4.1-5.7 5.37-5.71.95 0 1.23.76 1 2.32a24.14 24.14 0 0 1-2.67 7.45zm1.36-7.49c-1 .78-3.44 4.91-7.31 12.32-.59 1.17-1.14 2.23-1.52 3.23a22.83 22.83 0 0 0 4.17-5 32.82 32.82 0 0 0 4.3-8.53 11.33 11.33 0 0 0 .42-1.72.42.42 0 0 0-.06-.3z"\r\n    />\r\n    <path d="M140.2 139.89a16.82 16.82 0 0 1-3.53 2.2 12.77 12.77 0 0 1-3.82.7h-.17a4.82 4.82 0 0 1-2.33-.58 2.38 2.38 0 0 1-1.35-1.88 3.52 3.52 0 0 1 .21-1.22 5.5 5.5 0 0 1-1.21.9c-.72 0-1.06-.32-1-1l.33-.28c.71-.67 1.81-1.9 3.29-3.63a13.64 13.64 0 0 0 2-5.23l.42-2.12a1.14 1.14 0 0 1 .83-.5c.89 0 1.23 1.15 1.07 2a1.66 1.66 0 0 0-.11.34c.12.38.73.71 1.79.86a1.09 1.09 0 0 1 .44.06 1 1 0 0 1-.22.44 4.6 4.6 0 0 0-.63 2.67l.92 3.65a8.74 8.74 0 0 1 .07 1.66 4.42 4.42 0 0 1-.26 1.22 33.07 33.07 0 0 0 4-3.08.74.74 0 0 1 .77-.07.61.61 0 0 1 .4.33c.06.49-.54 1.38-1.91 2.56zm-6-2.6l-.82-4.1a.83.83 0 0 1-.16.34 39.15 39.15 0 0 1-2.62 4.18.88.88 0 0 1 1.06 1.21c-.16.5-.93 1.23-.92 1.62s.17.5.51.71a2 2 0 0 0 2.1 0 1.77 1.77 0 0 0 1.2-1.45 5.44 5.44 0 0 0-.31-2.51z"\r\n    />\r\n  </g>\r\n</svg>\r\n';
    },
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/svg/svg-text.component.html": 
    /*!******************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/customiser/svg/svg-text.component.html ***!
  \******************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<svg:rect [attr.width]="patchWidth" [attr.height]="height" [attr.fill]="name.patch.hex" [attr.transform]="patch_transform"\r\n  *ngIf="name.patch"></svg:rect>\r\n<svg:text [attr.font-size]="fontSize" [attr.font-family]="name.font" [attr.transform]="rotation_string" text-anchor="middle"\r\n  dominant-baseline="central" [attr.fill]="fillUrl" [attr.stroke]="outlineUrl" [attr.stroke-width]="strokeWidth" [attr.filter]="filterUrl"\r\n  #svgText>{{name.text}}</svg:text>\r\n';
    },
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/svg/svg-waist-label.component.html": 
    /*!*************************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/customiser/svg/svg-waist-label.component.html ***!
  \*************************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<svg [attr.x]="position.x" [attr.y]="position.y" [attr.width]="position.width" [attr.height]="position.height" viewBox="0 0 89.2 242.94"\r\n  *ngIf="position">\r\n  <g>\r\n    <g>\r\n      <rect x="0.5" y="0.5" width="88.2" height="241.94" fill="#fff" />\r\n      <path d="M88.2,1V241.94H1V1H88.2m1-1H0V242.94H89.2V0Z" fill="#231f20" />\r\n    </g>\r\n    <g>\r\n      <path d="M52.86,199.66h.44c11.73.42,12.15,13.55,12.15,13.55v16.84H23.34V212.39c1.17-8,5.33-10.67,11.32-10.67a9.57,9.57,0,0,1,8.41,4.84s1.44-6.9,9.79-6.9m-4.55,20.21H55.8v-5.61s.1-4.29-3.75-4.49h-.27c-3.57,0-3.47,3.88-3.47,3.88v6.23m-15.23,0h6.24v-4.52s.08-3.45-3.12-3.61H36c-3,0-2.89,3.12-2.89,3.12v5M52.86,197a12.46,12.46,0,0,0-10.39,4.8,12,12,0,0,0-7.81-2.74c-8,0-12.7,4.35-13.95,12.93l0,.18v20.48H68.11V213.13a21.55,21.55,0,0,0-1.92-7.64A14,14,0,0,0,53.39,197ZM51,213.59c0-1.2.57-1.2.81-1.2h.13c1.06.06,1.22,1.17,1.22,1.84v3H51v-3.65Zm-15.13.78h.22c.18,0,.58,0,.6.94v.06h0v1.89h-.92v-2.41a1.56,1.56,0,0,1,.1-.46Z"\r\n        fill="#231f20" />\r\n      <path d="M44.44,151.21a21.48,21.48,0,1,1-21.76,21.48,21.62,21.62,0,0,1,21.76-21.48m0,33.26A11.79,11.79,0,1,0,32.5,172.69a11.86,11.86,0,0,0,11.94,11.78m0-35.89a24.11,24.11,0,1,0,24.42,24.11,24.29,24.29,0,0,0-24.42-24.11Zm0,33.26a9.16,9.16,0,1,1,9.28-9.15,9.22,9.22,0,0,1-9.28,9.15Z"\r\n        fill="#231f20" />\r\n      <path d="M65.28,54.64V77.55H23.68V54.64h9.15v13h6.66v-13h9.32v13h7.77v-13h8.7M67.94,52h-14V65.07H51.47V52H36.83V65.07H35.49V52H21V80.18H67.94V52Z"\r\n        fill="#231f20" />\r\n      <path d="M65.28,15.71,65.7,28.6,51.89,37.14H65.7V47.41h-42V30.57s.25-13.87,14-14h.26c11.41,0,13.38,10.52,13.38,10.52l14-11.42M32.83,37.39H44.48V31.15s-1.16-4.87-5.32-4.87l-.5,0c-4.58.41-5.83,5.26-5.83,5.26v5.83M67.77,10.27l-4.19,3.42-11,9A15.68,15.68,0,0,0,37.92,14h-.3c-8.42,0-12.52,4.62-14.48,8.45A20.57,20.57,0,0,0,21,30.53V50H68.36V34.52H61.15l6-3.69,1.3-.8,0-1.51-.42-12.89-.17-5.36ZM35.49,32c.27-.74,1.22-2.84,3.41-3h.26c1.65,0,2.43,1.9,2.66,2.61v3.24H35.49V32Z"\r\n        fill="#231f20" />\r\n      <g>\r\n        <path d="M57.27,131.66l15.54-10.07-10.9,7.06-1.4-.53s2.15-3,2.42-3.21,6-3.73,6-3.73h4.54l3.91-2.54L56.82,105.57l5.11-3.08c.26-2,1.67-12.26,4.76-20.1L44.13,97.27,21.75,83.09C23,86.72,25.7,95,26,101.8l5.37,3.81L11.78,118.53l20,13.18-5.1,3.07c-.25,2-1.66,12.26-4.75,20.1L44.49,140l22.37,14.19c-1.28-3.63-3.94-11.89-4.21-18.71Zm-13,4.49L27.49,146.78l.42-1.61a41,41,0,0,0,1.22-8.2v-.36l7.07-4.48h1.34L18,118.52l19.17-12.91-7.88-4.92,0-.31a67.9,67.9,0,0,0-1.45-8.21l-.73-1.85,17.23,10.8L61.13,90.49l-.42,1.61a41,41,0,0,0-1.22,8.2v.36L52.58,105l-1.7,1,1.64.06,18.93,12.56-20,13,7.87,4.91,0,.31a65.49,65.49,0,0,0,1.45,8.2l.73,1.86Z"\r\n          fill="#231f20" />\r\n        <path d="M44.71,110.21l-12.88,8.43,12.87,8.68,12.19-8.68Zm-7.4,8.41,7.44-5.12,6.61,5.12-6.61,5.43Z" fill="#231f20" />\r\n        <path d="M62.93,124.91c-.27.25-2.42,3.21-2.42,3.21l1.4.53,10.9-7.06.65-.41H68.92S63.2,124.67,62.93,124.91Z" fill="#231f20"\r\n        />\r\n        <polygon points="73.46 121.17 73.46 121.17 72.81 121.59 73.46 121.17" fill="#231f20" />\r\n      </g>\r\n    </g>\r\n  </g>\r\n</svg>\r\n<svg [attr.x]="position.x" [attr.y]="position.y" [attr.width]="position.width" [attr.height]="position.height" viewBox="0 0 89.2 242.94"\r\n  *ngIf="position">\r\n  <g>\r\n    <g>\r\n      <rect x="0.5" y="0.5" width="88.2" height="241.94" fill="#fff" />\r\n      <path d="M88.2,1V241.94H1V1H88.2m1-1H0V242.94H89.2V0Z" fill="#231f20" />\r\n    </g>\r\n    <g>\r\n      <path d="M36.34,43.28H35.9c-11.73-.41-12.15-13.55-12.15-13.55V12.89h42.1V30.55c-1.16,8-5.32,10.68-11.31,10.68a9.57,9.57,0,0,1-8.41-4.85s-1.44,6.9-9.79,6.9m4.55-20.2H33.4v5.61s-.1,4.28,3.75,4.49h.27c3.57,0,3.47-3.88,3.47-3.88V23.08m15.23,0H49.88v4.51S49.79,31,53,31.21h.23c3,0,2.89-3.12,2.89-3.12v-5M36.34,45.91a12.47,12.47,0,0,0,10.39-4.79,12.06,12.06,0,0,0,7.81,2.73c8,0,12.7-4.35,13.95-12.92l0-.19V10.27H21.09V29.81A21.29,21.29,0,0,0,23,37.46a14,14,0,0,0,12.8,8.45Zm1.89-16.55c0,1.2-.57,1.2-.81,1.2h-.13c-1.06-.05-1.22-1.17-1.22-1.83v-3h2.16v3.66Zm15.13-.78h-.22c-.18,0-.58,0-.6-.94v-.06h0V25.7h.92v2.41a1.63,1.63,0,0,1-.1.47Z"\r\n        fill="#231f20" />\r\n      <path d="M44.76,91.73A21.48,21.48,0,1,1,66.52,70.26,21.61,21.61,0,0,1,44.76,91.73m0-33.26A11.79,11.79,0,1,0,56.7,70.26,11.87,11.87,0,0,0,44.76,58.47m0,35.89a24.11,24.11,0,1,0-24.42-24.1,24.29,24.29,0,0,0,24.42,24.1Zm0-33.26a9.16,9.16,0,1,1-9.28,9.16,9.23,9.23,0,0,1,9.28-9.16Z"\r\n        fill="#231f20" />\r\n      <path d="M23.92,188.31V165.4h41.6v22.91H56.37V175.25H49.71v13.06H40.39V175.25H32.62v13.06h-8.7m-2.67,2.63h14V177.88h2.44v13.06H52.37V177.88h1.34v13.06H68.18V162.77H21.25v28.17Z"\r\n        fill="#231f20" />\r\n      <path d="M23.92,227.23l-.42-12.89,13.81-8.54H23.5V195.53h42v16.84s-.25,13.88-14,14h-.26c-11.41,0-13.38-10.51-13.38-10.51l-14,11.41m32.45-21.68H44.72v6.24s1.15,4.87,5.32,4.87l.5,0c4.58-.41,5.83-5.26,5.83-5.26v-5.83M21.43,232.68l4.18-3.42,11-9A15.7,15.7,0,0,0,51.28,229h.3c8.42-.05,12.52-4.63,14.48-8.46a20.27,20.27,0,0,0,2.12-8.08V192.91H20.84v15.52h7.21l-6,3.68-1.3.81.05,1.5.42,12.9.17,5.36ZM53.71,211c-.27.73-1.22,2.84-3.41,3H50c-1.65,0-2.43-1.9-2.66-2.6v-3.25h6.33V211Z"\r\n        fill="#231f20" />\r\n      <g>\r\n        <path d="M31.93,111.28,16.39,121.35l10.9-7,1.4.52s-2.15,3-2.42,3.21-6,3.74-6,3.74H15.74l-3.91,2.54,20.55,13.06-5.12,3.09c-.25,2-1.66,12.25-4.75,20.09l22.56-14.88,22.38,14.18c-1.29-3.63-4-11.89-4.22-18.7l-5.37-3.81,19.56-12.93-20-13.18,5.1-3.07c.25-2,1.66-12.26,4.75-20.1L44.71,103,22.34,88.77c1.28,3.62,3.94,11.89,4.21,18.7Zm13-4.49L61.71,96.16l-.42,1.62A40.71,40.71,0,0,0,60.07,106v.36L53,110.81H51.66l19.53,13.61L52,137.34l7.88,4.91,0,.31a67.55,67.55,0,0,0,1.45,8.21l.73,1.86L44.89,141.82,28.07,152.46l.42-1.62a41,41,0,0,0,1.22-8.2v-.35l6.91-4.38,1.7-1-1.65,0L17.75,124.31l20-13-7.87-4.91,0-.3a67.55,67.55,0,0,0-1.45-8.21L27.66,96Z"\r\n          fill="#231f20" />\r\n        <path d="M44.49,132.73l12.88-8.43L44.5,115.63,32.31,124.3Zm7.4-8.4-7.44,5.11-6.61-5.11,6.61-5.44Z" fill="#231f20" />\r\n        <path d="M26.27,118c.27-.25,2.42-3.21,2.42-3.21l-1.4-.52-10.9,7-.65.42h4.54S26,118.28,26.27,118Z" fill="#231f20" />\r\n        <polygon points="15.74 121.77 15.74 121.77 16.39 121.35 15.74 121.77" fill="#231f20" />\r\n      </g>\r\n    </g>\r\n  </g>\r\n</svg>\r\n';
    },
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/template/template.component.html": 
    /*!***********************************************************************************************************************************************************!*\
  !*** C:/Users/Reian/Desktop/Work/Freelance/boxxer-client-clone/node_modules/raw-loader/dist/cjs.js!./src/app/customiser/template/template.component.html ***!
  \***********************************************************************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '<div class="template-controls" *ngIf="product">\r\n  <div class="bubble" bxSvgBubble *ngIf="hasDraggable && templateLoaded">\r\n    <h3>Move your name/graphic to the right location by dragging</h3>\r\n    <i class="arrow-after"></i>\r\n  </div>\r\n  <div class="template-col">\r\n    <div class="template-wrapper" tourAnchor="your.design">\r\n      <div class="template-label" *ngIf="showLabels()  && templateLoaded">\r\n        <div class="label">\r\n          <h4>Front</h4>\r\n        </div>\r\n        <div class="label">\r\n          <h4>Back</h4>\r\n        </div>\r\n      </div>\r\n      <svg id="template" [attr.viewBox]="alignedViewBox" [prepend]="true" [inlineSVG]="product.template.key"\r\n        [replaceContents]="false" (onSVGInserted)="svgData($event)" #customDesign preserveAspectRatio="xMidYMin meet"\r\n        tourAnchor="start.tour">\r\n        <svg:defs>\r\n          <style type="text/css">\r\n            /* <![CDATA[ */\r\n            @font-face {\r\n              font-family: \'Arial\';\r\n              src: url(\'https://cdn2.boxxerworld.com/assets/fonts/arial-bold-webfont.woff2\') format(\'woff2\'),\r\n                url(\'https://cdn2.boxxerworld.com/assets/fonts/arial-bold-webfont.woff\') format(\'woff\');\r\n              font-weight: normal;\r\n              font-style: normal;\r\n            }\r\n\r\n            /* ]]> */\r\n            /* <![CDATA[ */\r\n            @font-face {\r\n              font-family: \'oswaldcustom\';\r\n              src: url(\'https://cdn2.boxxerworld.com/assets/fonts/oswald-semibold.woff2\') format(\'woff2\'),\r\n                url(\'https://cdn2.boxxerworld.com/assets/fonts/oswald-semibold.woff\') format(\'woff\');\r\n              font-weight: normal;\r\n              font-style: normal;\r\n            }\r\n\r\n            /* ]]> */\r\n            /* <![CDATA[ */\r\n            @font-face {\r\n              font-family: \'monte\';\r\n              src: url(\'https://cdn2.boxxerworld.com/assets/fonts/diamante-serial-bold-webfont.eot\');\r\n              src: url(\'https://cdn2.boxxerworld.com/assets/fonts/diamante-serial-bold-webfont.eot?#iefix\') format(\'embedded-opentype\'),\r\n                url(\'https://cdn2.boxxerworld.com/assets/fonts/diamante-serial-bold-webfont.woff2\') format(\'woff2\'),\r\n                url(\'https://cdn2.boxxerworld.com/assets/fonts/diamante-serial-bold-webfont.woff\') format(\'woff\'),\r\n                url(\'https://cdn2.boxxerworld.com/assets/fonts/diamante-serial-bold-webfont.ttf\') format(\'truetype\'),\r\n                url(\'https://cdn2.boxxerworld.com/assets/fonts/diamante-serial-bold-webfont.svg#diamante-serialbold\') format(\'svg\');\r\n              font-weight: normal;\r\n              font-style: normal;\r\n            }\r\n\r\n            /* ]]> */\r\n            /* <![CDATA[ */\r\n            @font-face {\r\n              font-family: \'college\';\r\n              src: url(\'https://cdn2.boxxerworld.com/assets/fonts/college_block-webfont.eot\');\r\n              src: url(\'https://cdn2.boxxerworld.com/assets/fonts/college_block-webfont.eot?#iefix\') format(\'embedded-opentype\'),\r\n                url(\'https://cdn2.boxxerworld.com/assets/fonts/college_block-webfont.woff2\') format(\'woff2\'),\r\n                url(\'https://cdn2.boxxerworld.com/assets/fonts/college_block-webfont.woff\') format(\'woff\'),\r\n                url(\'https://cdn2.boxxerworld.com/assets/fonts/college_block-webfont.ttf\') format(\'truetype\'),\r\n                url(\'https://cdn2.boxxerworld.com/assets/fonts/college_block-webfont.svg#college_blockregular\') format(\'svg\');\r\n              font-weight: normal;\r\n              font-style: normal;\r\n            }\r\n\r\n            /* ]]> */\r\n            /* <![CDATA[ */\r\n            @font-face {\r\n              font-family: \'ballantines\';\r\n              src: url(\'https://cdn2.boxxerworld.com/assets/fonts/ballantines-bold-webfont.eot\');\r\n              src: url(\'https://cdn2.boxxerworld.com/assets/fonts/ballantines-bold-webfont.eot?#iefix\') format(\'embedded-opentype\'),\r\n                url(\'https://cdn2.boxxerworld.com/assets/fonts/ballantines-bold-webfont.woff2\') format(\'woff2\'),\r\n                url(\'https://cdn2.boxxerworld.com/assets/fonts/ballantines-bold-webfont.woff\') format(\'woff\'),\r\n                url(\'https://cdn2.boxxerworld.com/assets/fonts/ballantines-bold-webfont.ttf\') format(\'truetype\'),\r\n                url(\'https://cdn2.boxxerworld.com/assets/fonts/ballantines-bold-webfont.svg#ballantinesbold\') format(\'svg\');\r\n              font-weight: normal;\r\n              font-style: normal;\r\n            }\r\n\r\n            /* ]]> */\r\n          </style>\r\n          <svg:filter [id]="filter.id" height="100%" *ngFor="let filter of svgService.nameFilters">\r\n            <svg:feImage width="4" height="4" [attr.xlink:href]="filter.crystal" *ngIf="filter.crystal" />\r\n            <svg:feTile result="dots" *ngIf="filter.crystal" />\r\n            <svg:feComposite in="dots" in2="SourceGraphic" operator="in" result="comp" *ngIf="filter.crystal">\r\n            </svg:feComposite>\r\n            <feOffset in="SourceAlpha" dx="0.3333333333333333" dy="1.6666666666666667" result="15"></feOffset>\r\n            <feGaussianBlur stdDeviation="1" in="15" result="16"></feGaussianBlur>\r\n            <feSpecularLighting surfaceScale="2" specularConstant="0.8" specularExponent="15" in="16" result="17">\r\n              <fePointLight x="-1000" y="-5000" z="300"></fePointLight>\r\n            </feSpecularLighting>\r\n            <feComposite in="17" in2="SourceAlpha" operator="in" result="18"></feComposite>\r\n            <feOffset in="SourceAlpha" dx="-0.3333333333333333" dy="-1.6666666666666667" result="19"></feOffset>\r\n            <feGaussianBlur stdDeviation="1" in="19" result="20"></feGaussianBlur>\r\n            <feSpecularLighting surfaceScale="2" specularConstant="1.8" specularExponent="6" in="20" result="21">\r\n              <fePointLight x="1000" y="5000" z="300"></fePointLight>\r\n            </feSpecularLighting>\r\n            <feComposite in="21" in2="SourceAlpha" operator="in" result="22"></feComposite>\r\n            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" in="22" result="23"></feColorMatrix>\r\n            <feComposite k1="0" k2="0.8" k3="0.5" k4="0" in="18" in2="23" operator="arithmetic" result="24">\r\n            </feComposite>\r\n            <feOffset result="offOut" in="SourceGraphic" dx="1" dy="1" />\r\n            <feColorMatrix result="matrixOut" in="offOut" type="matrix"\r\n              values="0.1 0 0 0 0 0 0.1 0 0 0 0 0 0.1 0 0 0 0 0 0.5 0" />\r\n            <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="3" />\r\n            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" result="shadow" />\r\n            <svg:feMerge>\r\n              <svg:feMergeNode in="shadow" />\r\n              <svg:feMergeNode in="SourceGraphic" />\r\n              <svg:feMergeNode in="comp" *ngIf="filter.crystal" />\r\n              <feMergeNode in="24" *ngIf="filter.text3d"></feMergeNode>\r\n            </svg:feMerge>\r\n          </svg:filter>\r\n          <svg:pattern *ngFor="let pattern of svgService.patterns" x="0" y="0" [attr.width]="width"\r\n            [attr.height]="height" [attr.viewBox]="alignedViewBox" patternUnits="userSpaceOnUse" [id]="pattern.id"\r\n            externalResourcesRequired="true">\r\n            <svg:rect [attr.width]="width" [attr.height]="height" [attr.fill]="pattern.hex" *ngIf="pattern.hex">\r\n            </svg:rect>\r\n            <svg:image [attr.xlink:href]="pattern.image" preserveAspectRatio="xMidYMid slice" x="0" y="0"\r\n              [attr.width]="width" [attr.height]="height" *ngIf="pattern.image"></svg:image>\r\n          </svg:pattern>\r\n          <svg:pattern *ngFor="let pattern of svgService.nameFillPatterns" x="0" y="0" [attr.width]="width"\r\n            [attr.height]="height" [attr.viewBox]="alignedViewBox" patternUnits="userSpaceOnUse" [id]="pattern.id"\r\n            externalResourcesRequired="true">\r\n            <svg:rect [attr.width]="width" [attr.height]="height" [attr.fill]="pattern.hex" *ngIf="pattern.hex">\r\n            </svg:rect>\r\n            <svg:image [attr.xlink:href]="pattern.image" preserveAspectRatio="none" x="0" y="0" width="100%"\r\n              height="100%" *ngIf="pattern.image"></svg:image>\r\n          </svg:pattern>\r\n          <svg:pattern *ngFor="let pattern of svgService.nameOutlinePatterns" x="0" y="0" [attr.width]="width"\r\n            [attr.height]="height" patternUnits="userSpaceOnUse" [id]="pattern.id" [attr.viewBox]="alignedViewBox"\r\n            externalResourcesRequired="true">\r\n            <svg:rect [attr.width]="width" [attr.height]="height" [attr.fill]="pattern.hex" *ngIf="pattern.hex">\r\n            </svg:rect>\r\n            <svg:image [attr.xlink:href]="pattern.image" preserveAspectRatio="none" x="0" y="0" width="100%"\r\n              height="100%" *ngIf="pattern.image"></svg:image>\r\n          </svg:pattern>\r\n        </svg:defs>\r\n        <svg:g *ngIf="templateLoaded && (designService.design$ | async).boxxer_logo as logo">\r\n          <svg:g *ngIf="!logo.remove_logo">\r\n            <svg:g bx-svg-waist-label [position]="optionsService.getWaistBadge()[0]"></svg:g>\r\n            <svg:g bx-svg-waist-label [position]="optionsService.getWaistBadge()[1]"></svg:g>\r\n          </svg:g>\r\n          <svg:g class="draggable" bx-svg-logo [width]="width" [height]="height" [logo]="logo"\r\n            *ngIf="logo.position && !logo.remove_logo" [bxBoxxerLogo]="logo" tourAnchor="boxxer.logo"></svg:g>\r\n        </svg:g>\r\n        <svg:g class="draggable" bx-svg-text *ngFor="let name of (designService.design$ | async).names" [name]="name"\r\n          [width]="width" [height]="height" [bxSvgMove]="name" [isText]="true"></svg:g>\r\n        <svg:g class="draggable" bx-svg-image *ngFor="let flag of (designService.design$ | async).flags"\r\n          [image]="flag.flag ? flag.flag.image : null" [object]="flag" [width]="width" [height]="height"\r\n          [bxSvgMove]="flag"></svg:g>\r\n        <svg:g class="draggable" bx-svg-image *ngFor="let logo of (designService.design$ | async).logos"\r\n          [image]="logo.image ? logo.image.image : null" [object]="logo" [width]="width" [height]="height"\r\n          [bxSvgMove]="logo"></svg:g>\r\n        <svg:g class="draggable" bx-svg-image *ngFor="let upload of (designService.design$ | async).uploads"\r\n          [image]="upload.image" [object]="upload" [width]="width" [height]="height" [bxSvgMove]="upload"></svg:g>\r\n      </svg>\r\n      <div class="template-rotator">\r\n        <div *ngIf="designService.selectedObject && (designService.dragObject | async) as object">\r\n          <mat-slider [min]="-180" [max]="180" [step]="10" [tickInterval]="2" [value]="object.position.rotate"\r\n            (input)="rotateObject($event)" [thumbLabel]="true"></mat-slider>\r\n          <h4>Rotate</h4>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="template-scale">\r\n      <mat-slider [min]="1" [max]="4" [step]="0.1" [thumbLabel]="true" [value]="object.position.scale" [vertical]="true"\r\n        (input)="scaleObject($event)"\r\n        *ngIf="designService.selectedObject && (designService.dragObject | async) as object"></mat-slider>\r\n      <h4 *ngIf="designService.selectedObject">Enlarge</h4>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-container *ngIf="designService.selectedObject && (designService.dragObject | async) as object">\r\n  <bx-editbar [flag]="object" *ngIf="object.type === \'flag\'"></bx-editbar>\r\n  <bx-editbar [logo]="object" *ngIf="object.type === \'logo\'"></bx-editbar>\r\n  <bx-editbar [name]="object" *ngIf="object.type === \'name\'"></bx-editbar>\r\n  <bx-editbar [upload]="object" *ngIf="object.type === \'upload\'"></bx-editbar>\r\n</ng-container>';
    },
    "../global/models/image.ts": 
    /*!*********************************!*\
  !*** ../global/models/image.ts ***!
  \*********************************/
    /*! exports provided: Image */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "Image", (function() {
            return Image;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        class Image {
            constructor(_id, key, alt, version, weight, format) {
                this._id = _id;
                this.key = key;
                this.alt = alt;
                this.version = version;
                this.weight = weight;
                this.format = format;
            }
        }
    },
    "./src/app/customiser/actions/design.ts": 
    /*!**********************************************!*\
  !*** ./src/app/customiser/actions/design.ts ***!
  \**********************************************/
    /*! exports provided: FETCH_DESIGN, LOAD_DESIGN, CREATE_DESIGN, UPDATE_DESIGN, UPDATE_OBJECT, SAVE_DESIGN_TO_ACCOUNT, CLEAR_DESIGN, RESET_DESIGN, DESIGN_ERROR, RECREATE_DESIGN, DESIGN_COMPLETE, DesignError, DesignComplete, ClearDesign, ResetDesign, FetchDesign, LoadDesign, CreateDesign, RecreateDesign, UpdateDesign, UpdateObject, SaveDesignToAccount */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "FETCH_DESIGN", (function() {
            return FETCH_DESIGN;
        }));
        __webpack_require__.d(__webpack_exports__, "LOAD_DESIGN", (function() {
            return LOAD_DESIGN;
        }));
        __webpack_require__.d(__webpack_exports__, "CREATE_DESIGN", (function() {
            return CREATE_DESIGN;
        }));
        __webpack_require__.d(__webpack_exports__, "UPDATE_DESIGN", (function() {
            return UPDATE_DESIGN;
        }));
        __webpack_require__.d(__webpack_exports__, "UPDATE_OBJECT", (function() {
            return UPDATE_OBJECT;
        }));
        __webpack_require__.d(__webpack_exports__, "SAVE_DESIGN_TO_ACCOUNT", (function() {
            return SAVE_DESIGN_TO_ACCOUNT;
        }));
        __webpack_require__.d(__webpack_exports__, "CLEAR_DESIGN", (function() {
            return CLEAR_DESIGN;
        }));
        __webpack_require__.d(__webpack_exports__, "RESET_DESIGN", (function() {
            return RESET_DESIGN;
        }));
        __webpack_require__.d(__webpack_exports__, "DESIGN_ERROR", (function() {
            return DESIGN_ERROR;
        }));
        __webpack_require__.d(__webpack_exports__, "RECREATE_DESIGN", (function() {
            return RECREATE_DESIGN;
        }));
        __webpack_require__.d(__webpack_exports__, "DESIGN_COMPLETE", (function() {
            return DESIGN_COMPLETE;
        }));
        __webpack_require__.d(__webpack_exports__, "DesignError", (function() {
            return DesignError;
        }));
        __webpack_require__.d(__webpack_exports__, "DesignComplete", (function() {
            return DesignComplete;
        }));
        __webpack_require__.d(__webpack_exports__, "ClearDesign", (function() {
            return ClearDesign;
        }));
        __webpack_require__.d(__webpack_exports__, "ResetDesign", (function() {
            return ResetDesign;
        }));
        __webpack_require__.d(__webpack_exports__, "FetchDesign", (function() {
            return FetchDesign;
        }));
        __webpack_require__.d(__webpack_exports__, "LoadDesign", (function() {
            return LoadDesign;
        }));
        __webpack_require__.d(__webpack_exports__, "CreateDesign", (function() {
            return CreateDesign;
        }));
        __webpack_require__.d(__webpack_exports__, "RecreateDesign", (function() {
            return RecreateDesign;
        }));
        __webpack_require__.d(__webpack_exports__, "UpdateDesign", (function() {
            return UpdateDesign;
        }));
        __webpack_require__.d(__webpack_exports__, "UpdateObject", (function() {
            return UpdateObject;
        }));
        __webpack_require__.d(__webpack_exports__, "SaveDesignToAccount", (function() {
            return SaveDesignToAccount;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _app_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/util */ "./src/app/util.ts");
        const FETCH_DESIGN = Object(_app_util__WEBPACK_IMPORTED_MODULE_1__["createActionType"])("FETCH_DESIGN");
        const LOAD_DESIGN = Object(_app_util__WEBPACK_IMPORTED_MODULE_1__["createActionType"])("LOAD_DESIGN");
        const CREATE_DESIGN = Object(_app_util__WEBPACK_IMPORTED_MODULE_1__["createActionType"])("CREATE_DESIGN");
        const UPDATE_DESIGN = Object(_app_util__WEBPACK_IMPORTED_MODULE_1__["createActionType"])("UPDATE_DESIGN");
        const UPDATE_OBJECT = Object(_app_util__WEBPACK_IMPORTED_MODULE_1__["createActionType"])("UPDATE_OBJECT");
        const SAVE_DESIGN_TO_ACCOUNT = Object(_app_util__WEBPACK_IMPORTED_MODULE_1__["createActionType"])("SAVE_DESIGN_TO_ACCOUNT");
        const CLEAR_DESIGN = Object(_app_util__WEBPACK_IMPORTED_MODULE_1__["createActionType"])("CLEAR_DESIGN");
        const RESET_DESIGN = Object(_app_util__WEBPACK_IMPORTED_MODULE_1__["createActionType"])("RESET_DESIGN");
        const DESIGN_ERROR = Object(_app_util__WEBPACK_IMPORTED_MODULE_1__["createActionType"])("DESIGN_ERROR");
        const RECREATE_DESIGN = Object(_app_util__WEBPACK_IMPORTED_MODULE_1__["createActionType"])("RECREATE_DESIGN");
        const DESIGN_COMPLETE = Object(_app_util__WEBPACK_IMPORTED_MODULE_1__["createActionType"])("DESIGN_COMPLETE");
        class DesignError {
            constructor(err) {
                this.err = err;
                this.type = DESIGN_ERROR;
            }
        }
        class DesignComplete {
            constructor(complete) {
                this.complete = complete;
                this.type = DESIGN_COMPLETE;
            }
        }
        class ClearDesign {
            constructor(position) {
                this.position = position;
                this.type = CLEAR_DESIGN;
            }
        }
        class ResetDesign {
            constructor(position) {
                this.position = position;
                this.type = RESET_DESIGN;
            }
        }
        class FetchDesign {
            constructor(id) {
                this.id = id;
                this.type = FETCH_DESIGN;
            }
        }
        class LoadDesign {
            constructor(payload) {
                this.payload = payload;
                this.type = LOAD_DESIGN;
            }
        }
        class CreateDesign {
            constructor(payload) {
                this.payload = payload;
                this.type = CREATE_DESIGN;
            }
        }
        class RecreateDesign {
            constructor() {
                this.type = RECREATE_DESIGN;
            }
        }
        class UpdateDesign {
            constructor(id, payload, query) {
                this.id = id;
                this.payload = payload;
                this.query = query;
                this.type = UPDATE_DESIGN;
            }
        }
        class UpdateObject {
            constructor(payload, selector, id, admin) {
                this.payload = payload;
                this.selector = selector;
                this.id = id;
                this.admin = admin;
                this.type = UPDATE_OBJECT;
            }
        }
        class SaveDesignToAccount {
            constructor(id, payload, query) {
                this.id = id;
                this.payload = payload;
                this.query = query;
                this.type = SAVE_DESIGN_TO_ACCOUNT;
            }
        }
    },
    "./src/app/customiser/actions/options.ts": 
    /*!***********************************************!*\
  !*** ./src/app/customiser/actions/options.ts ***!
  \***********************************************/
    /*! exports provided: OptionsActionTypes, Load, LoadOptions */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "OptionsActionTypes", (function() {
            return OptionsActionTypes;
        }));
        __webpack_require__.d(__webpack_exports__, "Load", (function() {
            return Load;
        }));
        __webpack_require__.d(__webpack_exports__, "LoadOptions", (function() {
            return LoadOptions;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var OptionsActionTypes;
        (function(OptionsActionTypes) {
            OptionsActionTypes["Load"] = "[Options] Load";
            OptionsActionTypes["LoadOptions"] = "[Options] Load Options";
        })(OptionsActionTypes || (OptionsActionTypes = {}));
        class Load {
            constructor() {
                this.type = OptionsActionTypes.Load;
            }
        }
        class LoadOptions {
            constructor(payload) {
                this.payload = payload;
                this.type = OptionsActionTypes.LoadOptions;
            }
        }
    },
    "./src/app/customiser/components/custom-material-colour/custom-material-colour.component.scss": 
    /*!****************************************************************************************************!*\
  !*** ./src/app/customiser/components/custom-material-colour/custom-material-colour.component.scss ***!
  \****************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '.swatch {\n  line-height: 0;\n  display: block;\n}\n\n.swatch-colour {\n  width: 100%;\n  height: 100%;\n}\n\n.material-group .header {\n  padding: 0.5rem 0;\n}\n\n.material-group .header h4 {\n  font-size: 14px;\n  font-size: 0.875rem;\n  line-height: 1;\n  font-weight: 400;\n  text-transform: inherit;\n  font-style: italic;\n  margin: 0;\n}\n\n.material-colours {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n\n.material-colours .material {\n  -webkit-flex: 0 0 25%;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  max-width: 25%;\n  min-width: auto;\n  text-align: center;\n  cursor: pointer;\n  position: relative;\n  line-height: 0;\n  padding: 1px;\n}\n\n.material-colours .material .info {\n  padding: 0.1rem;\n  text-align: center;\n  line-height: 1;\n}\n\n.material-colours .material .info h4 {\n  font-family: "Roboto", sans-serif;\n  font-size: 9px;\n  font-size: 0.5625rem;\n  line-height: 1.1111111111;\n  margin: 0;\n}\n\n.material-colours .material .info h4.price {\n  font-weight: bold;\n}\n\n.material-colours .material.large {\n  -webkit-flex: 0 0 50%;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.material-colours .selected {\n  background-color: #63b20b;\n}\n\n.material-colours ::ng-deep img {\n  width: 100%;\n  height: auto;\n}\n\n.group-colours .material {\n  -webkit-flex: 0 0 16.66666666%;\n      -ms-flex: 0 0 16.66666666%;\n          flex: 0 0 16.66666666%;\n  max-width: 16.66666666%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvY29tcG9uZW50cy9jdXN0b20tbWF0ZXJpYWwtY29sb3VyL0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXGFwcFxcY3VzdG9taXNlclxcc2Nzc1xcc3dhdGNoLnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b21pc2VyL2NvbXBvbmVudHMvY3VzdG9tLW1hdGVyaWFsLWNvbG91ci9jdXN0b20tbWF0ZXJpYWwtY29sb3VyLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9taXNlci9jb21wb25lbnRzL2N1c3RvbS1tYXRlcmlhbC1jb2xvdXIvQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcc2Nzc1xcX21peGlucy5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9taXNlci9jb21wb25lbnRzL2N1c3RvbS1tYXRlcmlhbC1jb2xvdXIvQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9taXNlci9jb21wb25lbnRzL2N1c3RvbS1tYXRlcmlhbC1jb2xvdXIvQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcYXBwXFxjdXN0b21pc2VyXFxjb21wb25lbnRzXFxjdXN0b20tbWF0ZXJpYWwtY29sb3VyXFxjdXN0b20tbWF0ZXJpYWwtY29sb3VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUNGRjs7QURJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDREY7O0FES0U7RUFDRSxpQkFBQTtBQ0ZKOztBREdJO0VFdUJGLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBSFk7RUZwQlIsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0NOOztBRElBO0VBQ0UscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSwyQkFBQTtNQUFBLHVCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtNQUFBLG1CQUFBO1VBQUEsZUFBQTtBQ0RGOztBREVFO0VBQ0UscUJBQUE7TUFBQSxpQkFBQTtVQUFBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNBSjs7QURDSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDTjs7QURBTTtFQUNFLGlDR2xDTTtFRDZCWixjQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFIWTtFRlFOLFNBQUE7QUNJUjs7QURIUTtFQUNFLGlCQUFBO0FDS1Y7O0FEREk7RUFDRSxxQkFBQTtNQUFBLGlCQUFBO1VBQUEsYUFBQTtFQUNBLGNBQUE7QUNHTjs7QURBRTtFQUNFLHlCR25ESTtBRnFEUjs7QURBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDRUo7O0FHNURFO0VBQ0UsOEJBQUE7TUFBQSwwQkFBQTtVQUFBLHNCQUFBO0VBQ0EsdUJBQUE7QUgrREoiLCJmaWxlIjoicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9taXNlci9jb21wb25lbnRzL2N1c3RvbS1tYXRlcmlhbC1jb2xvdXIvY3VzdG9tLW1hdGVyaWFsLWNvbG91ci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ21peGlucyc7XHJcblxyXG4uc3dhdGNoIHtcclxuICBsaW5lLWhlaWdodDogMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uc3dhdGNoLWNvbG91ciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWF0ZXJpYWwtZ3JvdXAge1xyXG4gIC5oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgICBoNCB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQtc2l6ZSgxNCwgMTQpO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0ZXJpYWwtY29sb3VycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICAubWF0ZXJpYWwge1xyXG4gICAgZmxleDogMCAwIDI1JTtcclxuICAgIG1heC13aWR0aDogMjUlO1xyXG4gICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAuaW5mbyB7XHJcbiAgICAgIHBhZGRpbmc6IDAuMXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgaDQge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZGVmYXVsdEZvbnQ7XHJcbiAgICAgICAgQGluY2x1ZGUgZm9udC1zaXplKDksIDEwKTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgJi5wcmljZSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYubGFyZ2Uge1xyXG4gICAgICBmbGV4OiAwIDAgNTAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICB9XHJcbiAgLnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcclxuICB9XHJcbiAgOjpuZy1kZWVwIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbn1cclxuIiwiLnN3YXRjaCB7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnN3YXRjaC1jb2xvdXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWF0ZXJpYWwtZ3JvdXAgLmhlYWRlciB7XG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xufVxuLm1hdGVyaWFsLWdyb3VwIC5oZWFkZXIgaDQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW46IDA7XG59XG5cbi5tYXRlcmlhbC1jb2xvdXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLm1hdGVyaWFsLWNvbG91cnMgLm1hdGVyaWFsIHtcbiAgZmxleDogMCAwIDI1JTtcbiAgbWF4LXdpZHRoOiAyNSU7XG4gIG1pbi13aWR0aDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDFweDtcbn1cbi5tYXRlcmlhbC1jb2xvdXJzIC5tYXRlcmlhbCAuaW5mbyB7XG4gIHBhZGRpbmc6IDAuMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5tYXRlcmlhbC1jb2xvdXJzIC5tYXRlcmlhbCAuaW5mbyBoNCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDlweDtcbiAgZm9udC1zaXplOiAwLjU2MjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjExMTExMTExMTE7XG4gIG1hcmdpbjogMDtcbn1cbi5tYXRlcmlhbC1jb2xvdXJzIC5tYXRlcmlhbCAuaW5mbyBoNC5wcmljZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1hdGVyaWFsLWNvbG91cnMgLm1hdGVyaWFsLmxhcmdlIHtcbiAgZmxleDogMCAwIDUwJTtcbiAgbWF4LXdpZHRoOiA1MCU7XG59XG4ubWF0ZXJpYWwtY29sb3VycyAuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjNiMjBiO1xufVxuLm1hdGVyaWFsLWNvbG91cnMgOjpuZy1kZWVwIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5ncm91cC1jb2xvdXJzIC5tYXRlcmlhbCB7XG4gIGZsZXg6IDAgMCAxNi42NjY2NjY2NiU7XG4gIG1heC13aWR0aDogMTYuNjY2NjY2NjYlO1xufSIsIkBtaXhpbiBmbHVpZC10eXBlKCRwcm9wZXJ0aWVzLCAkbWluLXZ3LCAkbWF4LXZ3LCAkbWluLXZhbHVlLCAkbWF4LXZhbHVlKSB7XHJcbiAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcclxuICAgICN7JHByb3BlcnR5fTogJG1pbi12YWx1ZTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4tdncpIHtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgICN7JHByb3BlcnR5fTogY2FsYyhcclxuICAgICAgICAjeyRtaW4tdmFsdWV9ICsgI3tzdHJpcC11bml0KCRtYXgtdmFsdWUgLSAkbWluLXZhbHVlKX0gKlxyXG4gICAgICAgICAgKFxyXG4gICAgICAgICAgICAxMDB2dyAtICN7JG1pbi12d31cclxuICAgICAgICAgICkgLyAje3N0cmlwLXVuaXQoJG1heC12dyAtICRtaW4tdncpfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1heC12dykge1xyXG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcclxuICAgICAgI3skcHJvcGVydHl9OiAkbWF4LXZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGZ1bmN0aW9uIHN0cmlwLXVuaXQoJHZhbHVlKSB7XHJcbiAgQHJldHVybiAkdmFsdWUgLyAoJHZhbHVlICogMCArIDEpO1xyXG59XHJcblxyXG5AbWl4aW4gd3JhcHBlcigkd2lkdGg6MTQ0MHB4KSB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6ICR3aWR0aDtcclxuICBtYXJnaW46IDAgYXV0byAxLjVyZW07XHJcbn1cclxuXHJcbkBtaXhpbiBmb250LXNpemUoJGZvbnRTaXplLCAkbGluZUhlaWdodDogMSkge1xyXG4gICRyZW1WYWx1ZTogKCRmb250U2l6ZSAvIDE2KTtcclxuICAkcHhWYWx1ZTogJGZvbnRTaXplO1xyXG4gICRsaW5lVmFsdWU6ICgkbGluZUhlaWdodCAvICRmb250U2l6ZSk7XHJcbiAgZm9udC1zaXplOiAkcHhWYWx1ZSArIHB4O1xyXG4gIGZvbnQtc2l6ZTogJHJlbVZhbHVlICsgcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZVZhbHVlO1xyXG59XHJcbiIsIi8vQ29sb3JzXHJcbiRibGFjazogIzM2MzYzNjtcclxuJHZlcnlsaWdodGdyZXk6ICNmNWY1ZjU7XHJcbiRsaWdodGdyZXk6ICNlZGVkZWQ7XHJcbiRtaWRncmV5OiAjOTk5O1xyXG4kZGFya2dyZXk6ICM2NjY7XHJcbiRncmVlbjogIzYzYjIwYjtcclxuJHJlZDogI2NlMDUwNTtcclxuLy9Gb250c1xyXG4kZGVmYXVsdEZvbnQ6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4kZGlzcGxheUZvbnQ6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4iLCJAaW1wb3J0ICcuLi8uLi9zY3NzL3N3YXRjaCc7XHJcblxyXG4uZ3JvdXAtY29sb3VycyB7XHJcbiAgLm1hdGVyaWFsIHtcclxuICAgIGZsZXg6IDAgMCAxNi42NjY2NjY2NiU7XHJcbiAgICBtYXgtd2lkdGg6IDE2LjY2NjY2NjY2JTtcclxuICB9XHJcbn1cclxuIl19 */';
    },
    "./src/app/customiser/components/custom-material-colour/custom-material-colour.component.ts": 
    /*!**************************************************************************************************!*\
  !*** ./src/app/customiser/components/custom-material-colour/custom-material-colour.component.ts ***!
  \**************************************************************************************************/
    /*! exports provided: CustomMaterialColourComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "CustomMaterialColourComponent", (function() {
            return CustomMaterialColourComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
        let CustomMaterialColourComponent = class CustomMaterialColourComponent {
            constructor() {
                this.group_name$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"];
                this.materialColourSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
            }
            ngOnInit() {
                this.selectedGroup = null;
                if (this.selectedMaterial && this.selectedMaterial.groups) {
                    this.selectedGroup = this.selectedMaterial.groups[0];
                }
                this.materialGroups$ = this.group_name$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this.selectedGroup ? this.selectedGroup.title : null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((resp => resp !== null)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((group_name => this.filteredGroups(group_name))));
            }
            filteredGroups(group_name) {
                const material_groups = JSON.parse(JSON.stringify(this.panel.material_groups));
                const result = material_groups.map((group => {
                    if (group.materials && group.materials.length) {
                        group.materials = group.materials.filter((material => {
                            if (material.groups && material.groups.length) {
                                return material.groups.some((material_group => material_group.title === group_name));
                            } else {
                                return false;
                            }
                        }));
                    }
                    return group;
                }));
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result.filter((r => r.materials && r.materials.length > 0)));
            }
            showGroup(group) {
                this.selectedGroup = group;
                this.group_name$.next(group.title);
            }
            colourSelected(material) {
                this.materialColourSelected.emit(material);
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], CustomMaterialColourComponent.prototype, "panel", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], CustomMaterialColourComponent.prototype, "selectedMaterial", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]) ], CustomMaterialColourComponent.prototype, "materialColourSelected", void 0);
        CustomMaterialColourComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bx-custom-material-colour",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-material-colour.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/components/custom-material-colour/custom-material-colour.component.html")).default,
            styles: [ tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-material-colour.component.scss */ "./src/app/customiser/components/custom-material-colour/custom-material-colour.component.scss")).default ]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []) ], CustomMaterialColourComponent);
    },
    "./src/app/customiser/components/custom-material-group/custom-material-group.component.scss": 
    /*!**************************************************************************************************!*\
  !*** ./src/app/customiser/components/custom-material-group/custom-material-group.component.scss ***!
  \**************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '.swatch {\n  line-height: 0;\n  display: block;\n}\n\n.swatch-colour {\n  width: 100%;\n  height: 100%;\n}\n\n.material-group .header {\n  padding: 0.5rem 0;\n}\n\n.material-group .header h4 {\n  font-size: 14px;\n  font-size: 0.875rem;\n  line-height: 1;\n  font-weight: 400;\n  text-transform: inherit;\n  font-style: italic;\n  margin: 0;\n}\n\n.material-colours {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n\n.material-colours .material {\n  -webkit-flex: 0 0 25%;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  max-width: 25%;\n  min-width: auto;\n  text-align: center;\n  cursor: pointer;\n  position: relative;\n  line-height: 0;\n  padding: 1px;\n}\n\n.material-colours .material .info {\n  padding: 0.1rem;\n  text-align: center;\n  line-height: 1;\n}\n\n.material-colours .material .info h4 {\n  font-family: "Roboto", sans-serif;\n  font-size: 9px;\n  font-size: 0.5625rem;\n  line-height: 1.1111111111;\n  margin: 0;\n}\n\n.material-colours .material .info h4.price {\n  font-weight: bold;\n}\n\n.material-colours .material.large {\n  -webkit-flex: 0 0 50%;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.material-colours .selected {\n  background-color: #63b20b;\n}\n\n.material-colours ::ng-deep img {\n  width: 100%;\n  height: auto;\n}\n\n:host {\n  display: block;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvY29tcG9uZW50cy9jdXN0b20tbWF0ZXJpYWwtZ3JvdXAvQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcYXBwXFxjdXN0b21pc2VyXFxzY3NzXFxzd2F0Y2guc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvY29tcG9uZW50cy9jdXN0b20tbWF0ZXJpYWwtZ3JvdXAvY3VzdG9tLW1hdGVyaWFsLWdyb3VwLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9taXNlci9jb21wb25lbnRzL2N1c3RvbS1tYXRlcmlhbC1ncm91cC9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxzY3NzXFxfbWl4aW5zLnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b21pc2VyL2NvbXBvbmVudHMvY3VzdG9tLW1hdGVyaWFsLWdyb3VwL0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvY29tcG9uZW50cy9jdXN0b20tbWF0ZXJpYWwtZ3JvdXAvQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcYXBwXFxjdXN0b21pc2VyXFxjb21wb25lbnRzXFxjdXN0b20tbWF0ZXJpYWwtZ3JvdXBcXGN1c3RvbS1tYXRlcmlhbC1ncm91cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FDRkY7O0FESUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0RGOztBREtFO0VBQ0UsaUJBQUE7QUNGSjs7QURHSTtFRXVCRixlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUhZO0VGcEJSLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNDTjs7QURJQTtFQUNFLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsMkJBQUE7TUFBQSx1QkFBQTtVQUFBLG1CQUFBO0VBQ0EsdUJBQUE7TUFBQSxtQkFBQTtVQUFBLGVBQUE7QUNERjs7QURFRTtFQUNFLHFCQUFBO01BQUEsaUJBQUE7VUFBQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDQUo7O0FEQ0k7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ047O0FEQU07RUFDRSxpQ0dsQ007RUQ2QlosY0FBQTtFQUNBLG9CQUFBO0VBQ0EseUJBSFk7RUZRTixTQUFBO0FDSVI7O0FESFE7RUFDRSxpQkFBQTtBQ0tWOztBRERJO0VBQ0UscUJBQUE7TUFBQSxpQkFBQTtVQUFBLGFBQUE7RUFDQSxjQUFBO0FDR047O0FEQUU7RUFDRSx5QkduREk7QUZxRFI7O0FEQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0VKOztBRzdEQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBSGdFRiIsImZpbGUiOiJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b21pc2VyL2NvbXBvbmVudHMvY3VzdG9tLW1hdGVyaWFsLWdyb3VwL2N1c3RvbS1tYXRlcmlhbC1ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ21peGlucyc7XHJcblxyXG4uc3dhdGNoIHtcclxuICBsaW5lLWhlaWdodDogMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uc3dhdGNoLWNvbG91ciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWF0ZXJpYWwtZ3JvdXAge1xyXG4gIC5oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgICBoNCB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQtc2l6ZSgxNCwgMTQpO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0ZXJpYWwtY29sb3VycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICAubWF0ZXJpYWwge1xyXG4gICAgZmxleDogMCAwIDI1JTtcclxuICAgIG1heC13aWR0aDogMjUlO1xyXG4gICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAuaW5mbyB7XHJcbiAgICAgIHBhZGRpbmc6IDAuMXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgaDQge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZGVmYXVsdEZvbnQ7XHJcbiAgICAgICAgQGluY2x1ZGUgZm9udC1zaXplKDksIDEwKTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgJi5wcmljZSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYubGFyZ2Uge1xyXG4gICAgICBmbGV4OiAwIDAgNTAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICB9XHJcbiAgLnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcclxuICB9XHJcbiAgOjpuZy1kZWVwIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbn1cclxuIiwiLnN3YXRjaCB7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnN3YXRjaC1jb2xvdXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWF0ZXJpYWwtZ3JvdXAgLmhlYWRlciB7XG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xufVxuLm1hdGVyaWFsLWdyb3VwIC5oZWFkZXIgaDQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW46IDA7XG59XG5cbi5tYXRlcmlhbC1jb2xvdXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLm1hdGVyaWFsLWNvbG91cnMgLm1hdGVyaWFsIHtcbiAgZmxleDogMCAwIDI1JTtcbiAgbWF4LXdpZHRoOiAyNSU7XG4gIG1pbi13aWR0aDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDFweDtcbn1cbi5tYXRlcmlhbC1jb2xvdXJzIC5tYXRlcmlhbCAuaW5mbyB7XG4gIHBhZGRpbmc6IDAuMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5tYXRlcmlhbC1jb2xvdXJzIC5tYXRlcmlhbCAuaW5mbyBoNCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDlweDtcbiAgZm9udC1zaXplOiAwLjU2MjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjExMTExMTExMTE7XG4gIG1hcmdpbjogMDtcbn1cbi5tYXRlcmlhbC1jb2xvdXJzIC5tYXRlcmlhbCAuaW5mbyBoNC5wcmljZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1hdGVyaWFsLWNvbG91cnMgLm1hdGVyaWFsLmxhcmdlIHtcbiAgZmxleDogMCAwIDUwJTtcbiAgbWF4LXdpZHRoOiA1MCU7XG59XG4ubWF0ZXJpYWwtY29sb3VycyAuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjNiMjBiO1xufVxuLm1hdGVyaWFsLWNvbG91cnMgOjpuZy1kZWVwIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59IiwiQG1peGluIGZsdWlkLXR5cGUoJHByb3BlcnRpZXMsICRtaW4tdncsICRtYXgtdncsICRtaW4tdmFsdWUsICRtYXgtdmFsdWUpIHtcclxuICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgI3skcHJvcGVydHl9OiAkbWluLXZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1pbi12dykge1xyXG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcclxuICAgICAgI3skcHJvcGVydHl9OiBjYWxjKFxyXG4gICAgICAgICN7JG1pbi12YWx1ZX0gKyAje3N0cmlwLXVuaXQoJG1heC12YWx1ZSAtICRtaW4tdmFsdWUpfSAqXHJcbiAgICAgICAgICAoXHJcbiAgICAgICAgICAgIDEwMHZ3IC0gI3skbWluLXZ3fVxyXG4gICAgICAgICAgKSAvICN7c3RyaXAtdW5pdCgkbWF4LXZ3IC0gJG1pbi12dyl9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWF4LXZ3KSB7XHJcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgICAjeyRwcm9wZXJ0eX06ICRtYXgtdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AZnVuY3Rpb24gc3RyaXAtdW5pdCgkdmFsdWUpIHtcclxuICBAcmV0dXJuICR2YWx1ZSAvICgkdmFsdWUgKiAwICsgMSk7XHJcbn1cclxuXHJcbkBtaXhpbiB3cmFwcGVyKCR3aWR0aDoxNDQwcHgpIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1heC13aWR0aDogJHdpZHRoO1xyXG4gIG1hcmdpbjogMCBhdXRvIDEuNXJlbTtcclxufVxyXG5cclxuQG1peGluIGZvbnQtc2l6ZSgkZm9udFNpemUsICRsaW5lSGVpZ2h0OiAxKSB7XHJcbiAgJHJlbVZhbHVlOiAoJGZvbnRTaXplIC8gMTYpO1xyXG4gICRweFZhbHVlOiAkZm9udFNpemU7XHJcbiAgJGxpbmVWYWx1ZTogKCRsaW5lSGVpZ2h0IC8gJGZvbnRTaXplKTtcclxuICBmb250LXNpemU6ICRweFZhbHVlICsgcHg7XHJcbiAgZm9udC1zaXplOiAkcmVtVmFsdWUgKyByZW07XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lVmFsdWU7XHJcbn1cclxuIiwiLy9Db2xvcnNcclxuJGJsYWNrOiAjMzYzNjM2O1xyXG4kdmVyeWxpZ2h0Z3JleTogI2Y1ZjVmNTtcclxuJGxpZ2h0Z3JleTogI2VkZWRlZDtcclxuJG1pZGdyZXk6ICM5OTk7XHJcbiRkYXJrZ3JleTogIzY2NjtcclxuJGdyZWVuOiAjNjNiMjBiO1xyXG4kcmVkOiAjY2UwNTA1O1xyXG4vL0ZvbnRzXHJcbiRkZWZhdWx0Rm9udDogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiRkaXNwbGF5Rm9udDogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiIsIkBpbXBvcnQgJy4uLy4uL3Njc3Mvc3dhdGNoJztcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbiJdfQ== */';
    },
    "./src/app/customiser/components/custom-material-group/custom-material-group.component.ts": 
    /*!************************************************************************************************!*\
  !*** ./src/app/customiser/components/custom-material-group/custom-material-group.component.ts ***!
  \************************************************************************************************/
    /*! exports provided: CustomMaterialGroupComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "CustomMaterialGroupComponent", (function() {
            return CustomMaterialGroupComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        let CustomMaterialGroupComponent = class CustomMaterialGroupComponent {
            constructor() {
                this.materialColourSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
            }
            colourSelected(material) {
                this.materialColourSelected.emit(material);
            }
            getPrice(price) {
                if (this.materialPrice) {
                    return price;
                }
                const material_price = price ? price : 0;
                return this.basePrice * material_price;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean) ], CustomMaterialGroupComponent.prototype, "large", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array) ], CustomMaterialGroupComponent.prototype, "materialGroups", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array) ], CustomMaterialGroupComponent.prototype, "materials", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], CustomMaterialGroupComponent.prototype, "selectedMaterial", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number) ], CustomMaterialGroupComponent.prototype, "basePrice", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean) ], CustomMaterialGroupComponent.prototype, "materialPrice", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]) ], CustomMaterialGroupComponent.prototype, "materialColourSelected", void 0);
        CustomMaterialGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bx-custom-material-group",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-material-group.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/components/custom-material-group/custom-material-group.component.html")).default,
            styles: [ tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-material-group.component.scss */ "./src/app/customiser/components/custom-material-group/custom-material-group.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../scss/options.scss */ "./src/app/customiser/scss/options.scss")).default ]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []) ], CustomMaterialGroupComponent);
    },
    "./src/app/customiser/components/custom-scroll-container/custom-scroll-container.component.scss": 
    /*!******************************************************************************************************!*\
  !*** ./src/app/customiser/components/custom-scroll-container/custom-scroll-container.component.scss ***!
  \******************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = ":host {\n  display: block;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  scroll-behavior: smooth;\n  -webkit-overflow-scrolling: touch;\n  height: 100%;\n}\n\n.scroll-content {\n  min-height: 100%;\n}\n\n.scroll-arrow {\n  background-color: #363636;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 10px;\n  text-align: center;\n  left: 50%;\n  margin-left: calc(50% - 22px);\n  margin-right: calc(50% - 22px);\n  line-height: 44px;\n}\n\n.scroll-arrow .icon {\n  margin-top: 13px;\n  font-size: 1.3rem;\n  color: #ededed;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvY29tcG9uZW50cy9jdXN0b20tc2Nyb2xsLWNvbnRhaW5lci9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxhcHBcXGN1c3RvbWlzZXJcXGNvbXBvbmVudHNcXGN1c3RvbS1zY3JvbGwtY29udGFpbmVyXFxjdXN0b20tc2Nyb2xsLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvY29tcG9uZW50cy9jdXN0b20tc2Nyb2xsLWNvbnRhaW5lci9jdXN0b20tc2Nyb2xsLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvY29tcG9uZW50cy9jdXN0b20tc2Nyb2xsLWNvbnRhaW5lci9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUNBQUE7RUFFQSxZQUFBO0FDRkY7O0FES0E7RUFDRSxnQkFBQTtBQ0ZGOztBREtBO0VBQ0UseUJFaEJNO0VGaUJOLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQ0ZGOztBREdFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNFNUJRO0VGNkJSLGNBQUE7QUNESiIsImZpbGUiOiJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b21pc2VyL2NvbXBvbmVudHMvY3VzdG9tLXNjcm9sbC1jb250YWluZXIvY3VzdG9tLXNjcm9sbC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2Nyb2xsLWNvbnRlbnQge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zY3JvbGwtYXJyb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcclxuICB3aWR0aDogNDRweDtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoNTAlIC0gMjJweCk7XHJcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKDUwJSAtIDIycHgpO1xyXG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gIC5pY29uIHtcclxuICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGNvbG9yOiAkbGlnaHRncmV5O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5zY3JvbGwtYXJyb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjM2O1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGJvdHRvbTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtIDIycHgpO1xuICBtYXJnaW4tcmlnaHQ6IGNhbGMoNTAlIC0gMjJweCk7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xufVxuLnNjcm9sbC1hcnJvdyAuaWNvbiB7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjb2xvcjogI2VkZWRlZDtcbiAgZGlzcGxheTogYmxvY2s7XG59IiwiLy9Db2xvcnNcclxuJGJsYWNrOiAjMzYzNjM2O1xyXG4kdmVyeWxpZ2h0Z3JleTogI2Y1ZjVmNTtcclxuJGxpZ2h0Z3JleTogI2VkZWRlZDtcclxuJG1pZGdyZXk6ICM5OTk7XHJcbiRkYXJrZ3JleTogIzY2NjtcclxuJGdyZWVuOiAjNjNiMjBiO1xyXG4kcmVkOiAjY2UwNTA1O1xyXG4vL0ZvbnRzXHJcbiRkZWZhdWx0Rm9udDogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiRkaXNwbGF5Rm9udDogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiJdfQ== */";
    },
    "./src/app/customiser/components/custom-scroll-container/custom-scroll-container.component.ts": 
    /*!****************************************************************************************************!*\
  !*** ./src/app/customiser/components/custom-scroll-container/custom-scroll-container.component.ts ***!
  \****************************************************************************************************/
    /*! exports provided: CustomScrollContainerComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "CustomScrollContainerComponent", (function() {
            return CustomScrollContainerComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _global_untilDestroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @global/untilDestroy */ "../global/untilDestroy/index.ts");
        var _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/customiser-options.service */ "./src/app/customiser/services/customiser-options.service.ts");
        var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
        var _app_shared_main_services_platform_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared-main/services/platform.service */ "./src/app/shared-main/services/platform.service.ts");
        let CustomScrollContainerComponent = class CustomScrollContainerComponent {
            constructor(el, optionsService, ps) {
                this.el = el;
                this.optionsService = optionsService;
                this.ps = ps;
                this.contentHeight$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"];
                this.scrollable = true;
            }
            onScroll(e) {
                this.scrollable = this.el.nativeElement.scrollTop > this.scrollLength - 100 ? false : true;
            }
            get scrollLength() {
                return this.contentHeight - this.scrollHeight;
            }
            scrollToBottom() {
                this.el.nativeElement.scrollTop = this.contentHeight + 100;
            }
            ngOnInit() {
                this.optionsService.actionBarHeight.pipe(Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_1__["untilComponentDestroyed"])(this)).subscribe((height => {
                    this.scrollHeight = this.ps.getNativeWindow().innerHeight - height;
                }));
                this.contentHeight$.pipe(Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_1__["untilComponentDestroyed"])(this)).subscribe((height => {
                    this.contentHeight = height;
                    if (this.contentHeight < this.scrollHeight) {
                        this.scrollable = false;
                    }
                }));
            }
            ngAfterViewChecked() {
                if (this.scrollContent.nativeElement.clientHeight !== this.contentHeight) {
                    this.timer = setTimeout((() => {
                        this.contentHeight$.next(this.scrollContent.nativeElement.clientHeight);
                    }));
                }
            }
            ngOnDestroy() {
                clearTimeout(this.timer);
            }
        };
        CustomScrollContainerComponent.ctorParameters = () => [ {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
            type: _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_2__["CustomiserOptionsService"]
        }, {
            type: _app_shared_main_services_platform_service__WEBPACK_IMPORTED_MODULE_5__["PlatformService"]
        } ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])("scrollContent", {
            static: true
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]) ], CustomScrollContainerComponent.prototype, "scrollContent", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])("scrollIcon", {
            static: true
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]) ], CustomScrollContainerComponent.prototype, "scrollIcon", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"])("style.height.px"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number) ], CustomScrollContainerComponent.prototype, "scrollHeight", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])("scroll", [ "$event" ]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ Object ]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0) ], CustomScrollContainerComponent.prototype, "onScroll", null);
        CustomScrollContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "bx-custom-scroll-container",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-scroll-container.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/components/custom-scroll-container/custom-scroll-container.component.html")).default,
            styles: [ tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-scroll-container.component.scss */ "./src/app/customiser/components/custom-scroll-container/custom-scroll-container.component.scss")).default ]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_2__["CustomiserOptionsService"], _app_shared_main_services_platform_service__WEBPACK_IMPORTED_MODULE_5__["PlatformService"] ]) ], CustomScrollContainerComponent);
    },
    "./src/app/customiser/customiser-routing.module.ts": 
    /*!*********************************************************!*\
  !*** ./src/app/customiser/customiser-routing.module.ts ***!
  \*********************************************************/
    /*! exports provided: CustomiserRoutingModule */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "CustomiserRoutingModule", (function() {
            return CustomiserRoutingModule;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _services_design_resolver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/design-resolver.service */ "./src/app/customiser/services/design-resolver.service.ts");
        var _options_custom_muay_thai_custom_muay_thai_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options/custom-muay-thai/custom-muay-thai.component */ "./src/app/customiser/options/custom-muay-thai/custom-muay-thai.component.ts");
        var _options_custom_size_option_custom_size_option_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options/custom-size-option/custom-size-option.component */ "./src/app/customiser/options/custom-size-option/custom-size-option.component.ts");
        var _options_custom_upload_option_custom_upload_option_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./options/custom-upload-option/custom-upload-option.component */ "./src/app/customiser/options/custom-upload-option/custom-upload-option.component.ts");
        var _options_custom_image_option_custom_image_option_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./options/custom-image-option/custom-image-option.component */ "./src/app/customiser/options/custom-image-option/custom-image-option.component.ts");
        var _options_custom_flag_option_custom_flag_option_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./options/custom-flag-option/custom-flag-option.component */ "./src/app/customiser/options/custom-flag-option/custom-flag-option.component.ts");
        var _options_custom_name_option_custom_name_option_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./options/custom-name-option/custom-name-option.component */ "./src/app/customiser/options/custom-name-option/custom-name-option.component.ts");
        var _options_custom_panel_option_custom_panel_option_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./options/custom-panel-option/custom-panel-option.component */ "./src/app/customiser/options/custom-panel-option/custom-panel-option.component.ts");
        var _options_custom_style_option_custom_style_option_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./options/custom-style-option/custom-style-option.component */ "./src/app/customiser/options/custom-style-option/custom-style-option.component.ts");
        var _services_resolver_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/resolver.service */ "./src/app/customiser/services/resolver.service.ts");
        var _customiser_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customiser.component */ "./src/app/customiser/customiser.component.ts");
        var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
        var _nav_nav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/customiser/nav/nav.component.ts");
        const routes = [ {
            path: ":id",
            component: _customiser_component__WEBPACK_IMPORTED_MODULE_11__["CustomiserComponent"],
            resolve: {
                design: _services_resolver_service__WEBPACK_IMPORTED_MODULE_10__["ResolverService"]
            },
            children: [ {
                path: "",
                redirectTo: "design",
                pathMatch: "full"
            }, {
                path: "design",
                component: _nav_nav_component__WEBPACK_IMPORTED_MODULE_14__["NavComponent"]
            }, {
                path: "style/:id",
                component: _options_custom_style_option_custom_style_option_component__WEBPACK_IMPORTED_MODULE_9__["CustomStyleOptionComponent"],
                resolve: {
                    design: _services_design_resolver_service__WEBPACK_IMPORTED_MODULE_1__["DesignResolverService"]
                }
            }, {
                path: "panel/:id",
                component: _options_custom_panel_option_custom_panel_option_component__WEBPACK_IMPORTED_MODULE_8__["CustomPanelOptionComponent"],
                data: {
                    toolbar: false,
                    type: "panel"
                }
            }, {
                path: "muay-thai",
                component: _options_custom_muay_thai_custom_muay_thai_component__WEBPACK_IMPORTED_MODULE_2__["CustomMuayThaiComponent"]
            }, {
                path: "name",
                component: _options_custom_name_option_custom_name_option_component__WEBPACK_IMPORTED_MODULE_7__["CustomNameOptionComponent"]
            }, {
                path: "name/:id",
                component: _options_custom_name_option_custom_name_option_component__WEBPACK_IMPORTED_MODULE_7__["CustomNameOptionComponent"]
            }, {
                path: "flag",
                component: _options_custom_flag_option_custom_flag_option_component__WEBPACK_IMPORTED_MODULE_6__["CustomFlagOptionComponent"],
                data: {
                    toolbar: true,
                    type: "flag"
                }
            }, {
                path: "flag/:id",
                component: _options_custom_flag_option_custom_flag_option_component__WEBPACK_IMPORTED_MODULE_6__["CustomFlagOptionComponent"],
                data: {
                    toolbar: true,
                    type: "flag"
                }
            }, {
                path: "logo",
                component: _options_custom_image_option_custom_image_option_component__WEBPACK_IMPORTED_MODULE_5__["CustomImageOptionComponent"],
                data: {
                    toolbar: true,
                    type: "logo"
                }
            }, {
                path: "logo/:id",
                component: _options_custom_image_option_custom_image_option_component__WEBPACK_IMPORTED_MODULE_5__["CustomImageOptionComponent"],
                data: {
                    toolbar: true,
                    type: "logo"
                }
            }, {
                path: "upload",
                component: _options_custom_upload_option_custom_upload_option_component__WEBPACK_IMPORTED_MODULE_4__["CustomUploadOptionComponent"],
                data: {
                    toolbar: true,
                    type: "upload"
                }
            }, {
                path: "upload/:id",
                component: _options_custom_upload_option_custom_upload_option_component__WEBPACK_IMPORTED_MODULE_4__["CustomUploadOptionComponent"],
                data: {
                    toolbar: true,
                    type: "upload"
                }
            }, {
                path: "size",
                component: _options_custom_size_option_custom_size_option_component__WEBPACK_IMPORTED_MODULE_3__["CustomSizeOptionComponent"]
            } ]
        } ];
        let CustomiserRoutingModule = class CustomiserRoutingModule {};
        CustomiserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["NgModule"])({
            imports: [ _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forChild(routes) ],
            exports: [ _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"] ],
            providers: []
        }) ], CustomiserRoutingModule);
    },
    "./src/app/customiser/customiser.component.scss": 
    /*!******************************************************!*\
  !*** ./src/app/customiser/customiser.component.scss ***!
  \******************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = ':host {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #f5f5f5;\n  z-index: 10000;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n}\n@media (min-width: 768px) {\n  :host {\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n}\n.customiser {\n  border-right: 2px solid white;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  text-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-flex: 1 0 auto;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n.customiser-options {\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  margin-top: auto;\n  background-color: #f5f5f5;\n  position: relative;\n}\n@media (min-width: 768px) {\n  .customiser-options {\n    -webkit-flex: 0 1 33.33%;\n        -ms-flex: 0 1 33.33%;\n            flex: 0 1 33.33%;\n    max-width: 370px;\n    margin-top: 0;\n  }\n}\n.touch-help {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0.5rem;\n  text-align: center;\n  z-index: 101;\n}\n.touch-help .icon {\n  fill: white;\n  width: 38px;\n  height: 50px;\n  margin-bottom: 0.5rem;\n}\n.touch-help p {\n  color: white;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 12px;\n  font-size: 0.75rem;\n  line-height: 1;\n  font-family: "Roboto", sans-serif;\n  margin: 0 0 0.2rem;\n}\n@media (min-width: 768px) {\n  .touch-help {\n    display: none;\n  }\n}\n.bx-tour-card {\n  margin: 0;\n}\n.bx-tour-card .bx-card-footer {\n  padding-top: 1rem;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0.5rem -15px;\n}\n.bx-tour-card button {\n  padding: 0 15px;\n}\n.bx-tour-card button:first-child {\n  padding-right: 0;\n}\n.bx-tour-card .btn-text {\n  margin: 0 0 0 auto;\n}\n::ng-deep .cdk-overlay-backdrop {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcYXBwXFxjdXN0b21pc2VyXFxjdXN0b21pc2VyLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9taXNlci9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b21pc2VyL2N1c3RvbWlzZXIuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b21pc2VyL0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9ub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfYnJlYWtwb2ludHMuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcc2Nzc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQ1pjO0VEYWQsY0FBQTtFQUNBLDhCQUFBO01BQUEsMEJBQUE7VUFBQSxzQkFBQTtFQUNBLFdBQUE7QUVORjtBQ2lESTtFSHJESjtJQVlJLDJCQUFBO1FBQUEsdUJBQUE7WUFBQSxtQkFBQTtFRUpGO0FBQ0Y7QUZPQTtFQUNFLDZCQUFBO0VBQ0EscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtNQUFBLDBCQUFBO1VBQUEsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO01BQUEsc0JBQUE7VUFBQSxtQkFBQTtFQUNBLHNCQUFBO01BQUEsa0JBQUE7VUFBQSxjQUFBO0FFSkY7QUZPQTtFQUNFLHNCQUFBO01BQUEsa0JBQUE7VUFBQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkNqQ2M7RURrQ2Qsa0JBQUE7QUVKRjtBQzRCSTtFSDVCSjtJQU1JLHdCQUFBO1FBQUEsb0JBQUE7WUFBQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtFRUZGO0FBQ0Y7QUZLQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSwyQkFBQTtNQUFBLHNCQUFBO1VBQUEsbUJBQUE7RUFDQSwrQkFBQTtNQUFBLHFCQUFBO1VBQUEsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FFRkY7QUZHRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FFREo7QUZHRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VJNUJGLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBSFk7RUorQlYsaUNDM0RVO0VENERWLGtCQUFBO0FFQ0o7QUNWSTtFSGhCSjtJQTRCSSxhQUFBO0VFRUY7QUFDRjtBRkNBO0VBQ0UsU0FBQTtBRUVGO0FGREU7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0Esb0JBQUE7QUVHSjtBRkRFO0VBQ0UsZUFBQTtBRUdKO0FGREU7RUFDRSxnQkFBQTtBRUdKO0FGREU7RUFDRSxrQkFBQTtBRUdKO0FGQ0E7RUFDRSxvQkFBQTtBRUVGIiwiZmlsZSI6InByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvY3VzdG9taXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ21peGlucyc7XHJcbkBpbXBvcnQgJ25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnO1xyXG5AaW1wb3J0ICdub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJztcclxuQGltcG9ydCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHMnO1xyXG5AaW1wb3J0ICdub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19ncmlkJztcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHZlcnlsaWdodGdyZXk7XHJcbiAgei1pbmRleDogMTAwMDA7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxufVxyXG5cclxuLmN1c3RvbWlzZXIge1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4OiAxIDAgYXV0bztcclxufVxyXG5cclxuLmN1c3RvbWlzZXItb3B0aW9ucyB7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmVyeWxpZ2h0Z3JleTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xyXG4gICAgZmxleDogMCAxIDMzLjMzJTtcclxuICAgIG1heC13aWR0aDogMzcwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLnRvdWNoLWhlbHAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHotaW5kZXg6IDEwMTtcclxuICAuaWNvbiB7XHJcbiAgICBmaWxsOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAzOHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIH1cclxuICBwIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgQGluY2x1ZGUgZm9udC1zaXplKDEyLCAxMik7XHJcbiAgICBmb250LWZhbWlseTogJGRlZmF1bHRGb250O1xyXG4gICAgbWFyZ2luOiAwIDAgMC4ycmVtO1xyXG4gIH1cclxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmJ4LXRvdXItY2FyZCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIC5ieC1jYXJkLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDAuNXJlbSAtMTVweDtcclxuICB9XHJcbiAgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICB9XHJcbiAgYnV0dG9uOmZpcnN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIC5idG4tdGV4dCB7XHJcbiAgICBtYXJnaW46IDAgMCAwIGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LWJhY2tkcm9wIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4iLCIvL0NvbG9yc1xyXG4kYmxhY2s6ICMzNjM2MzY7XHJcbiR2ZXJ5bGlnaHRncmV5OiAjZjVmNWY1O1xyXG4kbGlnaHRncmV5OiAjZWRlZGVkO1xyXG4kbWlkZ3JleTogIzk5OTtcclxuJGRhcmtncmV5OiAjNjY2O1xyXG4kZ3JlZW46ICM2M2IyMGI7XHJcbiRyZWQ6ICNjZTA1MDU7XHJcbi8vRm9udHNcclxuJGRlZmF1bHRGb250OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuJGRpc3BsYXlGb250OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgei1pbmRleDogMTAwMDA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG59XG5cbi5jdXN0b21pc2VyIHtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleDogMSAwIGF1dG87XG59XG5cbi5jdXN0b21pc2VyLW9wdGlvbnMge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jdXN0b21pc2VyLW9wdGlvbnMge1xuICAgIGZsZXg6IDAgMSAzMy4zMyU7XG4gICAgbWF4LXdpZHRoOiAzNzBweDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG59XG5cbi50b3VjaC1oZWxwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAxMDE7XG59XG4udG91Y2gtaGVscCAuaWNvbiB7XG4gIGZpbGw6IHdoaXRlO1xuICB3aWR0aDogMzhweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4udG91Y2gtaGVscCBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDAgMCAwLjJyZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnRvdWNoLWhlbHAge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmJ4LXRvdXItY2FyZCB7XG4gIG1hcmdpbjogMDtcbn1cbi5ieC10b3VyLWNhcmQgLmJ4LWNhcmQtZm9vdGVyIHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMC41cmVtIC0xNXB4O1xufVxuLmJ4LXRvdXItY2FyZCBidXR0b24ge1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG4uYngtdG91ci1jYXJkIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4uYngtdG91ci1jYXJkIC5idG4tdGV4dCB7XG4gIG1hcmdpbjogMCAwIDAgYXV0bztcbn1cblxuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1iYWNrZHJvcCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufSIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIiwiQG1peGluIGZsdWlkLXR5cGUoJHByb3BlcnRpZXMsICRtaW4tdncsICRtYXgtdncsICRtaW4tdmFsdWUsICRtYXgtdmFsdWUpIHtcclxuICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgI3skcHJvcGVydHl9OiAkbWluLXZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1pbi12dykge1xyXG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcclxuICAgICAgI3skcHJvcGVydHl9OiBjYWxjKFxyXG4gICAgICAgICN7JG1pbi12YWx1ZX0gKyAje3N0cmlwLXVuaXQoJG1heC12YWx1ZSAtICRtaW4tdmFsdWUpfSAqXHJcbiAgICAgICAgICAoXHJcbiAgICAgICAgICAgIDEwMHZ3IC0gI3skbWluLXZ3fVxyXG4gICAgICAgICAgKSAvICN7c3RyaXAtdW5pdCgkbWF4LXZ3IC0gJG1pbi12dyl9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWF4LXZ3KSB7XHJcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgICAjeyRwcm9wZXJ0eX06ICRtYXgtdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AZnVuY3Rpb24gc3RyaXAtdW5pdCgkdmFsdWUpIHtcclxuICBAcmV0dXJuICR2YWx1ZSAvICgkdmFsdWUgKiAwICsgMSk7XHJcbn1cclxuXHJcbkBtaXhpbiB3cmFwcGVyKCR3aWR0aDoxNDQwcHgpIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1heC13aWR0aDogJHdpZHRoO1xyXG4gIG1hcmdpbjogMCBhdXRvIDEuNXJlbTtcclxufVxyXG5cclxuQG1peGluIGZvbnQtc2l6ZSgkZm9udFNpemUsICRsaW5lSGVpZ2h0OiAxKSB7XHJcbiAgJHJlbVZhbHVlOiAoJGZvbnRTaXplIC8gMTYpO1xyXG4gICRweFZhbHVlOiAkZm9udFNpemU7XHJcbiAgJGxpbmVWYWx1ZTogKCRsaW5lSGVpZ2h0IC8gJGZvbnRTaXplKTtcclxuICBmb250LXNpemU6ICRweFZhbHVlICsgcHg7XHJcbiAgZm9udC1zaXplOiAkcmVtVmFsdWUgKyByZW07XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lVmFsdWU7XHJcbn1cclxuIl19 */';
    },
    "./src/app/customiser/customiser.component.ts": 
    /*!****************************************************!*\
  !*** ./src/app/customiser/customiser.component.ts ***!
  \****************************************************/
    /*! exports provided: CustomiserComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "CustomiserComponent", (function() {
            return CustomiserComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _app_shared_main_services_platform_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared-main/services/platform.service */ "./src/app/shared-main/services/platform.service.ts");
        var _app_core_modules_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/modules/loading/loading.service */ "./src/app/core/modules/loading/loading.service.ts");
        var _global_untilDestroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @global/untilDestroy */ "../global/untilDestroy/index.ts");
        var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
        var _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/customiser-options.service */ "./src/app/customiser/services/customiser-options.service.ts");
        var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _services_design_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/design.service */ "./src/app/customiser/services/design.service.ts");
        var ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-tour-md-menu */ "../../node_modules/ngx-tour-md-menu/fesm2015/ngx-tour-md-menu.js");
        var _app_customiser_nav_toolbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/customiser/nav/toolbar.component */ "./src/app/customiser/nav/toolbar.component.ts");
        var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
        var _actions_design__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./actions/design */ "./src/app/customiser/actions/design.ts");
        let CustomiserComponent = class CustomiserComponent {
            constructor(designService, optionsService, tourService, renderer, location, route, loading, store, ps) {
                this.designService = designService;
                this.optionsService = optionsService;
                this.tourService = tourService;
                this.renderer = renderer;
                this.location = location;
                this.route = route;
                this.loading = loading;
                this.store = store;
                this.ps = ps;
                this.optionsService.product$().pipe(Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_3__["untilComponentDestroyed"])(this)).subscribe((product => this.product = product));
                this.designService.selectedObject = null;
                this.tourService.initialize([ {
                    anchorId: "start.tour",
                    content: "<p>Please take a few mins to get familiar with our new customiser.<br>You can now create even better fight-wear designs with lots of new options.</p>",
                    placement: "below",
                    title: "Guided Tour"
                }, {
                    anchorId: "your.design",
                    content: `<p>As you complete the various steps you'll see your design take shape here. Any names, graphics, or flags that you add can be repositioned by dragging, and resized and rotated using the sliders.</p>`,
                    placement: "below",
                    title: "Your Design"
                }, {
                    anchorId: "template.options",
                    content: "<p>In OPTIONS  you can save, compare and edit designs for later. You need to create an account to do this.</p><p>Save your size, past designs, addresses and payment details for your next order. Managers can even create profiles for different boxers.</p>",
                    placement: "below",
                    title: "Hassel free"
                }, {
                    anchorId: "design.panels.0",
                    content: `<p>Here's your chance to really stand out from the crowd. For wow factor go for sequins, high shine (wet look) or one of our unique prints. Fashionistas may prefer short fur or uber cool leatherette. On a budget? Then classic satin is no.1.</p>`,
                    placement: "above",
                    title: "Make a statement"
                }, {
                    anchorId: "design.names",
                    content: "<p>Choose colours and finishes that let your fight name pop. Make sure you complete each step then save & move your name into the perfect spot. Printed names are simple and low-cost. If you want to add extras like crystals and 3D finishes, you must choose an embroidery name. Names can be easily edited once in place. Contrasting coloured patches are optional.</p>",
                    placement: "above",
                    title: "Names - Let the crowd shout it!"
                }, {
                    anchorId: "design.flags",
                    content: "<p>Let the crowd know you are representing by adding national flags anywhere on your kit.</p>",
                    placement: "above",
                    title: "Show your pride"
                }, {
                    anchorId: "design.graphics",
                    content: "<p>Choose from any of our popular graphics and simply drop, move and resize. We can re-colour the graphics for you during production if you enter your desired colours in the box provided.</p>",
                    placement: "above",
                    title: "Popular Graphics"
                }, {
                    anchorId: "design.uploads",
                    content: `<p>Drop, move and resize as many logos as you need! Don't worry if your logos have a white or black box around them, we will remove this if you click the box provided. Logos will be printed. If you need embroidery we will bill you the additional cost depending on size and complexity after we get your order.</p>`,
                    placement: "above",
                    title: "Your logos"
                }, {
                    anchorId: "design.sizing",
                    content: `<p><strong>Sizing</strong><br>For clothing orders, make sure you enter a correct height and weight so we can check your sizing. Our website will suggest a size but you can change this if you wish. Kids and youth sizes get a discount and really big sizes cost a little extra.</p><p><strong>Production Speed</strong><br>If you need your items made fast, choose Express Production and enter your fight date in the special instructions. <strong>Courier time is extra</strong> (you will choose "express" or "free, standard" at checkout)</p>`,
                    placement: "above",
                    title: "Perfect size & fit on time"
                }, {
                    anchorId: "boxxer.logo",
                    content: `<p>We rely on others knowing where you got your gear to keep our prices reasonable. For this reason all items must carry a boxxer logo but you can choose the location. If you really cant have any logo, you can pay a small fee to have it removed.</p>`,
                    placement: "below",
                    title: "OUR BOXXER LOGO"
                }, {
                    anchorId: "add.cart",
                    content: `<p>Once you've completed all the required steps you can add to your cart.</p>`,
                    placement: "above",
                    title: "Add to Cart"
                } ]);
            }
            clickout() {
                this.toolbar.closeMenu();
            }
            ngOnInit() {
                this.loading.show("Loading design...", "0px");
                const params = this.route.snapshot.queryParams;
                const data = this.route.snapshot.data;
                if (data.design._id && this.designService.editOrder || data.design && params.chat_help) {
                    this.location.replaceState(`/customiser/${this.product._id}/design`);
                }
                if (this.ps.isBrowser && this.ps.getNativeDocument()) {
                    this.renderer.addClass(this.ps.getNativeDocument().body, "modal");
                }
            }
            ngOnDestroy() {
                this.store.dispatch(new _actions_design__WEBPACK_IMPORTED_MODULE_12__["ResetDesign"](this.optionsService.getLogo()));
                if (this.ps.isBrowser && this.ps.getNativeDocument()) {
                    this.renderer.removeClass(this.ps.getNativeDocument().body, "modal");
                }
            }
        };
        CustomiserComponent.ctorParameters = () => [ {
            type: _services_design_service__WEBPACK_IMPORTED_MODULE_7__["DesignService"]
        }, {
            type: _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_5__["CustomiserOptionsService"]
        }, {
            type: ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_8__["TourService"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"]
        }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]
        }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
            type: _app_core_modules_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]
        }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["Store"]
        }, {
            type: _app_shared_main_services_platform_service__WEBPACK_IMPORTED_MODULE_1__["PlatformService"]
        } ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])("toolbar", {
            static: true
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _app_customiser_nav_toolbar_component__WEBPACK_IMPORTED_MODULE_9__["ToolbarComponent"]) ], CustomiserComponent.prototype, "toolbar", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"])("click"), Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"])("touchstart"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0) ], CustomiserComponent.prototype, "clickout", null);
        CustomiserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: "bx-customiser",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customiser.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/customiser.component.html")).default,
            styles: [ tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customiser.component.scss */ "./src/app/customiser/customiser.component.scss")).default ]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _services_design_service__WEBPACK_IMPORTED_MODULE_7__["DesignService"], _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_5__["CustomiserOptionsService"], ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_8__["TourService"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _app_core_modules_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["Store"], _app_shared_main_services_platform_service__WEBPACK_IMPORTED_MODULE_1__["PlatformService"] ]) ], CustomiserComponent);
    },
    "./src/app/customiser/customiser.module.ts": 
    /*!*************************************************!*\
  !*** ./src/app/customiser/customiser.module.ts ***!
  \*************************************************/
    /*! exports provided: CustomiserModule */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "CustomiserModule", (function() {
            return CustomiserModule;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _effects_design__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects/design */ "./src/app/customiser/effects/design.ts");
        var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./src/app/customiser/reducers/index.ts");
        var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "../environments/environment.ts");
        var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
        var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
        var ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-inline-svg */ "../../node_modules/ng-inline-svg/lib_esmodule/index.js");
        var _components_custom_material_group_custom_material_group_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/custom-material-group/custom-material-group.component */ "./src/app/customiser/components/custom-material-group/custom-material-group.component.ts");
        var _customiser_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customiser-routing.module */ "./src/app/customiser/customiser-routing.module.ts");
        var _customiser_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customiser.component */ "./src/app/customiser/customiser.component.ts");
        var _directives_svg_move_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/svg-move.directive */ "./src/app/customiser/directives/svg-move.directive.ts");
        var _nav_actions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nav/actions.component */ "./src/app/customiser/nav/actions.component.ts");
        var _nav_editbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nav/editbar.component */ "./src/app/customiser/nav/editbar.component.ts");
        var _nav_nav_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nav/nav-item.component */ "./src/app/customiser/nav/nav-item.component.ts");
        var _nav_nav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/customiser/nav/nav.component.ts");
        var _nav_toolbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nav/toolbar.component */ "./src/app/customiser/nav/toolbar.component.ts");
        var _options_custom_flag_option_custom_flag_option_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./options/custom-flag-option/custom-flag-option.component */ "./src/app/customiser/options/custom-flag-option/custom-flag-option.component.ts");
        var _options_custom_image_option_custom_image_option_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./options/custom-image-option/custom-image-option.component */ "./src/app/customiser/options/custom-image-option/custom-image-option.component.ts");
        var _options_custom_name_option_custom_name_decorative_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./options/custom-name-option/custom-name-decorative.component */ "./src/app/customiser/options/custom-name-option/custom-name-decorative.component.ts");
        var _options_custom_name_option_custom_name_option_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./options/custom-name-option/custom-name-option.component */ "./src/app/customiser/options/custom-name-option/custom-name-option.component.ts");
        var _options_custom_panel_option_custom_panel_option_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./options/custom-panel-option/custom-panel-option.component */ "./src/app/customiser/options/custom-panel-option/custom-panel-option.component.ts");
        var _options_custom_size_option_custom_size_option_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./options/custom-size-option/custom-size-option.component */ "./src/app/customiser/options/custom-size-option/custom-size-option.component.ts");
        var _options_custom_style_option_custom_style_option_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./options/custom-style-option/custom-style-option.component */ "./src/app/customiser/options/custom-style-option/custom-style-option.component.ts");
        var _options_custom_upload_option_custom_upload_option_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./options/custom-upload-option/custom-upload-option.component */ "./src/app/customiser/options/custom-upload-option/custom-upload-option.component.ts");
        var _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/customiser-options.service */ "./src/app/customiser/services/customiser-options.service.ts");
        var _services_design_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/design.service */ "./src/app/customiser/services/design.service.ts");
        var _services_resolver_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/resolver.service */ "./src/app/customiser/services/resolver.service.ts");
        var _services_sizing_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/sizing.service */ "./src/app/customiser/services/sizing.service.ts");
        var _services_svg_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/svg.service */ "./src/app/customiser/services/svg.service.ts");
        var _svg_svg_image_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./svg/svg-image.component */ "./src/app/customiser/svg/svg-image.component.ts");
        var _svg_svg_text_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./svg/svg-text.component */ "./src/app/customiser/svg/svg-text.component.ts");
        var _template_template_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./template/template.component */ "./src/app/customiser/template/template.component.ts");
        var _app_material_material_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @app/material/material.module */ "./src/app/material/material.module.ts");
        var _options_custom_muay_thai_custom_muay_thai_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./options/custom-muay-thai/custom-muay-thai.component */ "./src/app/customiser/options/custom-muay-thai/custom-muay-thai.component.ts");
        var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-dropzone-wrapper */ "../../node_modules/ngx-dropzone-wrapper/dist/ngx-dropzone-wrapper.es5.js");
        var _options_custom_name_option_custom_name_option_finish_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./options/custom-name-option/custom-name-option-finish.component */ "./src/app/customiser/options/custom-name-option/custom-name-option-finish.component.ts");
        var _options_custom_name_option_custom_name_option_patch_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./options/custom-name-option/custom-name-option-patch.component */ "./src/app/customiser/options/custom-name-option/custom-name-option-patch.component.ts");
        var _directives_svg_bubble_directive__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./directives/svg-bubble.directive */ "./src/app/customiser/directives/svg-bubble.directive.ts");
        var _components_custom_scroll_container_custom_scroll_container_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/custom-scroll-container/custom-scroll-container.component */ "./src/app/customiser/components/custom-scroll-container/custom-scroll-container.component.ts");
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
        var ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ngx-tour-md-menu */ "../../node_modules/ngx-tour-md-menu/fesm2015/ngx-tour-md-menu.js");
        var _app_shared_modules_card_card_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @app/shared/modules/card/card.module */ "./src/app/shared/modules/card/card.module.ts");
        var _svg_svg_waist_label_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./svg/svg-waist-label.component */ "./src/app/customiser/svg/svg-waist-label.component.ts");
        var _svg_svg_logo_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./svg/svg-logo.component */ "./src/app/customiser/svg/svg-logo.component.ts");
        var _directives_boxxer_logo_directive__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./directives/boxxer-logo.directive */ "./src/app/customiser/directives/boxxer-logo.directive.ts");
        var _ngrx_effects__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm2015/effects.js");
        var _components_custom_material_colour_custom_material_colour_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/custom-material-colour/custom-material-colour.component */ "./src/app/customiser/components/custom-material-colour/custom-material-colour.component.ts");
        const DEFAULT_DROPZONE_CONFIG = {
            url: `${_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].host}/upload`,
            maxFilesize: 50,
            acceptedFiles: "image/*"
        };
        let CustomiserModule = class CustomiserModule {};
        CustomiserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [ _ngrx_store__WEBPACK_IMPORTED_MODULE_40__["StoreModule"].forFeature("customiser", _reducers__WEBPACK_IMPORTED_MODULE_2__["reducers"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_46__["EffectsModule"].forFeature([ _effects_design__WEBPACK_IMPORTED_MODULE_1__["DesignEffects"] ]), _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _customiser_routing_module__WEBPACK_IMPORTED_MODULE_9__["CustomiserRoutingModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__["InlineSVGModule"].forRoot({
                baseUrl: "https://boxxer-images.ams3.cdn.digitaloceanspaces.com/"
            }), _app_material_material_module__WEBPACK_IMPORTED_MODULE_33__["MaterialModule"], ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_35__["DropzoneModule"], ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_41__["TourMatMenuModule"], _app_shared_modules_card_card_module__WEBPACK_IMPORTED_MODULE_42__["CardModule"] ],
            declarations: [ _customiser_component__WEBPACK_IMPORTED_MODULE_10__["CustomiserComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_15__["NavComponent"], _template_template_component__WEBPACK_IMPORTED_MODULE_32__["TemplateComponent"], _nav_actions_component__WEBPACK_IMPORTED_MODULE_12__["ActionsComponent"], _svg_svg_text_component__WEBPACK_IMPORTED_MODULE_31__["SvgTextComponent"], _svg_svg_image_component__WEBPACK_IMPORTED_MODULE_30__["SvgImageComponent"], _directives_svg_move_directive__WEBPACK_IMPORTED_MODULE_11__["SvgMoveDirective"], _options_custom_name_option_custom_name_option_component__WEBPACK_IMPORTED_MODULE_20__["CustomNameOptionComponent"], _options_custom_flag_option_custom_flag_option_component__WEBPACK_IMPORTED_MODULE_17__["CustomFlagOptionComponent"], _options_custom_image_option_custom_image_option_component__WEBPACK_IMPORTED_MODULE_18__["CustomImageOptionComponent"], _options_custom_panel_option_custom_panel_option_component__WEBPACK_IMPORTED_MODULE_21__["CustomPanelOptionComponent"], _options_custom_size_option_custom_size_option_component__WEBPACK_IMPORTED_MODULE_22__["CustomSizeOptionComponent"], _options_custom_style_option_custom_style_option_component__WEBPACK_IMPORTED_MODULE_23__["CustomStyleOptionComponent"], _options_custom_upload_option_custom_upload_option_component__WEBPACK_IMPORTED_MODULE_24__["CustomUploadOptionComponent"], _nav_toolbar_component__WEBPACK_IMPORTED_MODULE_16__["ToolbarComponent"], _options_custom_name_option_custom_name_decorative_component__WEBPACK_IMPORTED_MODULE_19__["CustomNameDecorativeComponent"], _components_custom_material_group_custom_material_group_component__WEBPACK_IMPORTED_MODULE_8__["CustomMaterialGroupComponent"], _nav_editbar_component__WEBPACK_IMPORTED_MODULE_13__["EditbarComponent"], _nav_nav_item_component__WEBPACK_IMPORTED_MODULE_14__["NavItemComponent"], _options_custom_muay_thai_custom_muay_thai_component__WEBPACK_IMPORTED_MODULE_34__["CustomMuayThaiComponent"], _options_custom_name_option_custom_name_option_finish_component__WEBPACK_IMPORTED_MODULE_36__["CustomNameOptionFinishComponent"], _options_custom_name_option_custom_name_option_patch_component__WEBPACK_IMPORTED_MODULE_37__["CustomNameOptionPatchComponent"], _directives_svg_bubble_directive__WEBPACK_IMPORTED_MODULE_38__["SvgBubbleDirective"], _components_custom_scroll_container_custom_scroll_container_component__WEBPACK_IMPORTED_MODULE_39__["CustomScrollContainerComponent"], _svg_svg_waist_label_component__WEBPACK_IMPORTED_MODULE_43__["SvgWaistLabelComponent"], _svg_svg_logo_component__WEBPACK_IMPORTED_MODULE_44__["SvgLogoComponent"], _directives_boxxer_logo_directive__WEBPACK_IMPORTED_MODULE_45__["BoxxerLogoDirective"], _components_custom_material_colour_custom_material_colour_component__WEBPACK_IMPORTED_MODULE_47__["CustomMaterialColourComponent"] ],
            entryComponents: [],
            providers: [ _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_25__["CustomiserOptionsService"], _services_svg_service__WEBPACK_IMPORTED_MODULE_29__["SvgService"], _services_resolver_service__WEBPACK_IMPORTED_MODULE_27__["ResolverService"], _services_design_service__WEBPACK_IMPORTED_MODULE_26__["DesignService"], _services_sizing_service__WEBPACK_IMPORTED_MODULE_28__["SizingService"], {
                provide: ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_35__["DROPZONE_CONFIG"],
                useValue: DEFAULT_DROPZONE_CONFIG
            } ]
        }) ], CustomiserModule);
    },
    "./src/app/customiser/directives/boxxer-logo.directive.ts": 
    /*!****************************************************************!*\
  !*** ./src/app/customiser/directives/boxxer-logo.directive.ts ***!
  \****************************************************************/
    /*! exports provided: BoxxerLogoDirective */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "BoxxerLogoDirective", (function() {
            return BoxxerLogoDirective;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _app_customiser_services_design_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/customiser/services/design.service */ "./src/app/customiser/services/design.service.ts");
        var _services_svg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/svg.service */ "./src/app/customiser/services/svg.service.ts");
        var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        let BoxxerLogoDirective = class BoxxerLogoDirective {
            constructor(el, svgService, designService) {
                this.el = el;
                this.svgService = svgService;
                this.designService = designService;
                this.impact = {
                    x: 0,
                    y: 0
                };
                this.m = {
                    x: 0,
                    y: 0
                };
                this.delta = {
                    x: 0,
                    y: 0
                };
                this.mouseDown = false;
                this.save = false;
            }
            onPanStart(e) {
                if (e.type === "touchstart") {
                    e.preventDefault();
                }
                this.impact = this.oMousePos(this.svgService.svg.nativeElement, e);
                this.box = this.el.nativeElement.getBoundingClientRect();
                this.delta.x = this.bxBoxxerLogo.position.x - this.impact.x;
                this.delta.y = this.bxBoxxerLogo.position.y - this.impact.y;
                this.mouseDown = true;
            }
            onPanMove(event) {
                if (!this.mouseDown) {
                    return;
                }
                this.save = true;
                this.m = this.oMousePos(this.svgService.svg.nativeElement, event);
                const x = this.m.x + this.delta.x;
                const y = this.m.y + this.delta.y;
                if (x < 0) {
                    this.bxBoxxerLogo.position.x = 0;
                } else if (x > this.width - this.box.width) {
                    this.bxBoxxerLogo.position.x = this.width - this.box.width;
                } else {
                    this.bxBoxxerLogo.position.x = x;
                }
                if (y < 0) {
                    this.bxBoxxerLogo.position.y = 0;
                } else if (y > this.height - this.box.height) {
                    this.bxBoxxerLogo.position.y = this.height - this.box.height;
                } else {
                    this.bxBoxxerLogo.position.y = y;
                }
            }
            onPanEnd() {
                if (!this.mouseDown) {
                    return;
                }
                this.mouseDown = false;
                if (this.save && this.bxBoxxerLogo) {
                    this.designService.saveOption(false, {
                        boxxer_logo: this.bxBoxxerLogo
                    });
                }
            }
            oMousePos(svg, evt) {
                const touches = evt.changedTouches && evt.changedTouches[0] || evt;
                const ClientRect = svg.getBoundingClientRect();
                return {
                    x: Math.round(touches.clientX - ClientRect.left),
                    y: Math.round(touches.clientY - ClientRect.top)
                };
            }
        };
        BoxxerLogoDirective.ctorParameters = () => [ {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
            type: _services_svg_service__WEBPACK_IMPORTED_MODULE_2__["SvgService"]
        }, {
            type: _app_customiser_services_design_service__WEBPACK_IMPORTED_MODULE_1__["DesignService"]
        } ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], BoxxerLogoDirective.prototype, "bxBoxxerLogo", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number) ], BoxxerLogoDirective.prototype, "width", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number) ], BoxxerLogoDirective.prototype, "height", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])("touchstart", [ "$event" ]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])("mousedown", [ "$event" ]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ Object ]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0) ], BoxxerLogoDirective.prototype, "onPanStart", null);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])("touchmove", [ "$event" ]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])("mousemove", [ "$event" ]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])("document:mousemove", [ "$event" ]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ Object ]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0) ], BoxxerLogoDirective.prototype, "onPanMove", null);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])("touchend"), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])("mouseup"), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])("document:mouseup"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0) ], BoxxerLogoDirective.prototype, "onPanEnd", null);
        BoxxerLogoDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"])({
            selector: "[bxBoxxerLogo]"
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _services_svg_service__WEBPACK_IMPORTED_MODULE_2__["SvgService"], _app_customiser_services_design_service__WEBPACK_IMPORTED_MODULE_1__["DesignService"] ]) ], BoxxerLogoDirective);
    },
    "./src/app/customiser/directives/svg-bubble.directive.ts": 
    /*!***************************************************************!*\
  !*** ./src/app/customiser/directives/svg-bubble.directive.ts ***!
  \***************************************************************/
    /*! exports provided: SvgBubbleDirective */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "SvgBubbleDirective", (function() {
            return SvgBubbleDirective;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _services_svg_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/svg.service */ "./src/app/customiser/services/svg.service.ts");
        var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        let SvgBubbleDirective = class SvgBubbleDirective {
            constructor(svgService, el) {
                this.svgService = svgService;
                this.el = el;
                this.top = 20;
            }
            onResize() {
                this.top = this.topCalc;
            }
            get topCalc() {
                return 100 / (600 / this.svgService.svg.nativeElement.clientWidth) - 130;
            }
            ngOnInit() {
                this.top = this.topCalc;
            }
        };
        SvgBubbleDirective.ctorParameters = () => [ {
            type: _services_svg_service__WEBPACK_IMPORTED_MODULE_1__["SvgService"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        } ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"])("style.top.px"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], SvgBubbleDirective.prototype, "top", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])("window:resize"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0) ], SvgBubbleDirective.prototype, "onResize", null);
        SvgBubbleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
            selector: "[bxSvgBubble]"
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _services_svg_service__WEBPACK_IMPORTED_MODULE_1__["SvgService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] ]) ], SvgBubbleDirective);
    },
    "./src/app/customiser/directives/svg-move.directive.ts": 
    /*!*************************************************************!*\
  !*** ./src/app/customiser/directives/svg-move.directive.ts ***!
  \*************************************************************/
    /*! exports provided: SvgMoveDirective */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "SvgMoveDirective", (function() {
            return SvgMoveDirective;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _services_design_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/design.service */ "./src/app/customiser/services/design.service.ts");
        var _services_svg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/svg.service */ "./src/app/customiser/services/svg.service.ts");
        var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        let SvgMoveDirective = class SvgMoveDirective {
            constructor(el, svgService, designService) {
                this.el = el;
                this.svgService = svgService;
                this.designService = designService;
                this.isText = false;
                this.impact = {
                    x: 0,
                    y: 0
                };
                this.m = {
                    x: 0,
                    y: 0
                };
                this.delta = {
                    x: 0,
                    y: 0
                };
                this.mouseDown = false;
                this.save = false;
            }
            onPanStart(e) {
                if (e.type === "touchstart") {
                    e.preventDefault();
                }
                this.impact = this.oMousePos(this.svgService.svg.nativeElement, e);
                this.box = this.el.nativeElement.getBoundingClientRect();
                this.delta.x = this.bxSvgMove.position.x - this.impact.x;
                this.delta.y = this.bxSvgMove.position.y - this.impact.y;
                this.mouseDown = true;
                this.designService.setSelectedObject(this.bxSvgMove);
            }
            onPanMove(event) {
                if (!this.mouseDown) {
                    return;
                }
                this.save = true;
                this.m = this.oMousePos(this.svgService.svg.nativeElement, event);
                const x = this.m.x + this.delta.x;
                const y = this.m.y + this.delta.y;
                this.bxSvgMove.position.x = x;
                this.bxSvgMove.position.y = y;
            }
            onPanEnd() {
                if (!this.mouseDown) {
                    return;
                }
                this.mouseDown = false;
                if (this.save && this.designService.selectedObject && this.designService.selectedObject._id === this.bxSvgMove._id) {
                    this.designService.updateObject(this.bxSvgMove, `${this.bxSvgMove.type}s`);
                }
            }
            oMousePos(svg, evt) {
                const touches = evt.changedTouches && evt.changedTouches[0] || evt;
                const ClientRect = svg.getBoundingClientRect();
                return {
                    x: Math.round(touches.clientX - ClientRect.left),
                    y: Math.round(touches.clientY - ClientRect.top)
                };
            }
        };
        SvgMoveDirective.ctorParameters = () => [ {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
            type: _services_svg_service__WEBPACK_IMPORTED_MODULE_2__["SvgService"]
        }, {
            type: _services_design_service__WEBPACK_IMPORTED_MODULE_1__["DesignService"]
        } ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], SvgMoveDirective.prototype, "bxSvgMove", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number) ], SvgMoveDirective.prototype, "width", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number) ], SvgMoveDirective.prototype, "height", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], SvgMoveDirective.prototype, "isText", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])("touchstart", [ "$event" ]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])("mousedown", [ "$event" ]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ Object ]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0) ], SvgMoveDirective.prototype, "onPanStart", null);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])("touchmove", [ "$event" ]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])("mousemove", [ "$event" ]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])("document:mousemove", [ "$event" ]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ Object ]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0) ], SvgMoveDirective.prototype, "onPanMove", null);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])("touchend"), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])("mouseup"), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])("document:mouseup"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0) ], SvgMoveDirective.prototype, "onPanEnd", null);
        SvgMoveDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"])({
            selector: "[bxSvgMove]"
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _services_svg_service__WEBPACK_IMPORTED_MODULE_2__["SvgService"], _services_design_service__WEBPACK_IMPORTED_MODULE_1__["DesignService"] ]) ], SvgMoveDirective);
    },
    "./src/app/customiser/effects/design.ts": 
    /*!**********************************************!*\
  !*** ./src/app/customiser/effects/design.ts ***!
  \**********************************************/
    /*! exports provided: DesignEffects */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "DesignEffects", (function() {
            return DesignEffects;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _app_customiser_services_design_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/customiser/services/design.service */ "./src/app/customiser/services/design.service.ts");
        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
        var _actions_design__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../actions/design */ "./src/app/customiser/actions/design.ts");
        var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm2015/effects.js");
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
        var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
        var _app_customiser_services_customiser_options_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/customiser/services/customiser-options.service */ "./src/app/customiser/services/customiser-options.service.ts");
        var _app_core_modules_loading_loading_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/core/modules/loading/loading.service */ "./src/app/core/modules/loading/loading.service.ts");
        var _reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../reducers */ "./src/app/customiser/reducers/index.ts");
        var _app_customiser_services_svg_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/customiser/services/svg.service */ "./src/app/customiser/services/svg.service.ts");
        var _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/core/services/api.service */ "./src/app/core/services/api.service.ts");
        var _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @gorniv/ngx-universal */ "../../node_modules/@gorniv/ngx-universal/fesm2015/gorniv-ngx-universal.js");
        let DesignEffects = class DesignEffects {
            constructor(cookieService, actions$, api, designService, optionsService, router, loading, store, svgService) {
                this.cookieService = cookieService;
                this.actions$ = actions$;
                this.api = api;
                this.designService = designService;
                this.optionsService = optionsService;
                this.router = router;
                this.loading = loading;
                this.store = store;
                this.svgService = svgService;
                this.clearDesign$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_actions_design__WEBPACK_IMPORTED_MODULE_3__["CLEAR_DESIGN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_11__["getSettings"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])((resp => {
                    const settings = resp[1];
                    settings.forEach((setting => {
                        this.svgService.addColor(null, setting.panel, true);
                    }));
                    this.cookieService.remove("custom-dragged");
                })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(((err, caught) => caught)));
                this.loadDesign$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_actions_design__WEBPACK_IMPORTED_MODULE_3__["FETCH_DESIGN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((action => action.id)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])((id => this.api.get("custom-design-customiser", id))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((design => new _actions_design__WEBPACK_IMPORTED_MODULE_3__["LoadDesign"](design))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(((err, caught) => {
                    this.notFound(err);
                    this.store.dispatch(new _actions_design__WEBPACK_IMPORTED_MODULE_3__["DesignError"](err));
                    return caught;
                })));
                this.designLoaded$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_actions_design__WEBPACK_IMPORTED_MODULE_3__["LOAD_DESIGN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])((() => this.setComplete())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((complete => new _actions_design__WEBPACK_IMPORTED_MODULE_3__["DesignComplete"](complete))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(((err, caught) => {
                    this.store.dispatch(new _actions_design__WEBPACK_IMPORTED_MODULE_3__["DesignError"](err));
                    return caught;
                })));
                this.createDesign$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_actions_design__WEBPACK_IMPORTED_MODULE_3__["CREATE_DESIGN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_11__["getProduct"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((([action, product]) => {
                    action.payload.product = product._id;
                    return action;
                })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])((action => this.api.create("custom-design-customiser", action.payload, false))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((design => new _actions_design__WEBPACK_IMPORTED_MODULE_3__["LoadDesign"](design))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])((design => {
                    this.setToken(design.payload);
                    this.backToMenu();
                })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(((err, caught) => caught)));
                this.recreateDesign$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_actions_design__WEBPACK_IMPORTED_MODULE_3__["RECREATE_DESIGN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])((() => this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_11__["getDesign"])))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])((design => {
                    delete design._id;
                    return this.api.create("custom-design-customiser", design, false);
                })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((design => new _actions_design__WEBPACK_IMPORTED_MODULE_3__["LoadDesign"](design))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])((design => {
                    this.setToken(design.payload);
                    this.backToMenu();
                })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(((err, caught) => caught)));
                this.updateDesign$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_actions_design__WEBPACK_IMPORTED_MODULE_3__["UPDATE_DESIGN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])((action => this.api.update("custom-design-customiser", action.id, action.payload, action.query, false))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((design => new _actions_design__WEBPACK_IMPORTED_MODULE_3__["LoadDesign"](design))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])((() => this.backToMenu())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(((err, caught) => {
                    this.notFound(err);
                    this.store.dispatch(new _actions_design__WEBPACK_IMPORTED_MODULE_3__["DesignError"](err));
                    return caught;
                })));
                this.saveDesignToAccount$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_actions_design__WEBPACK_IMPORTED_MODULE_3__["SAVE_DESIGN_TO_ACCOUNT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])((action => this.api.update("custom-design-customiser", action.id, action.payload, action.query, false))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((design => new _actions_design__WEBPACK_IMPORTED_MODULE_3__["LoadDesign"](design))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])((() => this.goToAccount())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(((err, caught) => caught)));
                this.updateObject$ = this.actions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(1e3), Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_actions_design__WEBPACK_IMPORTED_MODULE_3__["UPDATE_OBJECT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])((action => this.api.update("custom-design-customiser", null, {
                    [`${action.selector}.$`]: action.payload,
                    admin: action.admin
                }, {
                    [`${action.selector}._id`]: action.payload._id,
                    _id: action.id
                }, false))));
            }
            setComplete() {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([ this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_11__["getDesign"])), this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_11__["getProduct"])), this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_11__["getStyles"])), this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_11__["getPanels"])) ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])((result => {
                    let isComplete = true;
                    const design = result[0];
                    const product = result[1];
                    const styles = result[2];
                    const panels = result[3];
                    if (product && product.sizes && !design.sizing || product && product.sizes && design.sizing && !design.sizing.size || !design.production) {
                        isComplete = false;
                    }
                    if (styles && isComplete) {
                        styles.forEach((style => {
                            const hasStyle = design[style.type.toLowerCase()];
                            if (!hasStyle) {
                                isComplete = false;
                            }
                        }));
                    }
                    if (isComplete) {
                        panels.forEach((panel => {
                            const hasPanel = design.panels.find((p => p.panel === panel.panel));
                            if (!hasPanel && !panel.area_size.optional && !panel.default_material) {
                                isComplete = false;
                            }
                        }));
                    }
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(isComplete);
                })));
            }
            backToMenu() {
                this.router.navigate([ this.optionsService.menuUrl ], {
                    skipLocationChange: true
                });
                this.designService.selectedObject = null;
                this.hideLoading();
            }
            goToAccount() {
                this.router.navigate([ "/account/designs" ]);
                this.designService.deleteToken();
                this.hideLoading();
            }
            hideLoading() {
                this.loading.hide();
            }
            setToken(design) {
                this.cookieService.put(this.designService.cookieId, design.token, {
                    expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1e3)
                });
            }
            notFound(err) {
                const product = this.designService.product;
                if (product && product._id && err.code === 404 && err.data && err.data.reason && err.data.reason === "design_missing") {
                    this.cookieService.remove(`custom-design-${product._id}`);
                    this.cookieService.remove(`custom-design-edit-${product._id}`);
                    this.cookieService.remove(`custom-design-order-${product._id}`);
                    this.designService.clearDesign();
                }
            }
        };
        DesignEffects.ctorParameters = () => [ {
            type: _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_14__["CookieService"]
        }, {
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Actions"]
        }, {
            type: _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"]
        }, {
            type: _app_customiser_services_design_service__WEBPACK_IMPORTED_MODULE_1__["DesignService"]
        }, {
            type: _app_customiser_services_customiser_options_service__WEBPACK_IMPORTED_MODULE_9__["CustomiserOptionsService"]
        }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
            type: _app_core_modules_loading_loading_service__WEBPACK_IMPORTED_MODULE_10__["LoadingService"]
        }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]
        }, {
            type: _app_customiser_services_svg_service__WEBPACK_IMPORTED_MODULE_12__["SvgService"]
        } ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])({
            dispatch: false
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"]) ], DesignEffects.prototype, "clearDesign$", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"]) ], DesignEffects.prototype, "loadDesign$", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"]) ], DesignEffects.prototype, "designLoaded$", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"]) ], DesignEffects.prototype, "createDesign$", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"]) ], DesignEffects.prototype, "recreateDesign$", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"]) ], DesignEffects.prototype, "updateDesign$", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"]) ], DesignEffects.prototype, "saveDesignToAccount$", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])({
            dispatch: false
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"]) ], DesignEffects.prototype, "updateObject$", void 0);
        DesignEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_14__["CookieService"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Actions"], _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"], _app_customiser_services_design_service__WEBPACK_IMPORTED_MODULE_1__["DesignService"], _app_customiser_services_customiser_options_service__WEBPACK_IMPORTED_MODULE_9__["CustomiserOptionsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_core_modules_loading_loading_service__WEBPACK_IMPORTED_MODULE_10__["LoadingService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"], _app_customiser_services_svg_service__WEBPACK_IMPORTED_MODULE_12__["SvgService"] ]) ], DesignEffects);
    },
    "./src/app/customiser/nav/actions.component.scss": 
    /*!*******************************************************!*\
  !*** ./src/app/customiser/nav/actions.component.scss ***!
  \*******************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = ":host {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  z-index: 11;\n}\n\n.action-buttons {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.action-buttons .btn {\n  border: 0;\n  -webkit-flex: 1 0 50%;\n      -ms-flex: 1 0 50%;\n          flex: 1 0 50%;\n  padding: 1.3em 0;\n  min-width: auto;\n  margin: 0;\n}\n\n:host(.showDelete) .btn {\n  -webkit-flex: 1 0 33.3333%;\n      -ms-flex: 1 0 33.3333%;\n          flex: 1 0 33.3333%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvbmF2L0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXGFwcFxcY3VzdG9taXNlclxcbmF2XFxhY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9taXNlci9uYXYvYWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLCtCQUFBO01BQUEscUJBQUE7VUFBQSx1QkFBQTtBQ0NGOztBREFFO0VBQ0UsU0FBQTtFQUNBLHFCQUFBO01BQUEsaUJBQUE7VUFBQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQ0VKOztBREdFO0VBQ0UsMEJBQUE7TUFBQSxzQkFBQTtVQUFBLGtCQUFBO0FDQUoiLCJmaWxlIjoicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9taXNlci9uYXYvYWN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDExO1xyXG59XHJcblxyXG4uYWN0aW9uLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLmJ0biB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBmbGV4OiAxIDAgNTAlO1xyXG4gICAgcGFkZGluZzogMS4zZW0gMDtcclxuICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0KC5zaG93RGVsZXRlKSB7XHJcbiAgLmJ0biB7XHJcbiAgICBmbGV4OiAxIDAgMzMuMzMzMyU7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMTtcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYWN0aW9uLWJ1dHRvbnMgLmJ0biB7XG4gIGJvcmRlcjogMDtcbiAgZmxleDogMSAwIDUwJTtcbiAgcGFkZGluZzogMS4zZW0gMDtcbiAgbWluLXdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDA7XG59XG5cbjpob3N0KC5zaG93RGVsZXRlKSAuYnRuIHtcbiAgZmxleDogMSAwIDMzLjMzMzMlO1xufSJdfQ== */";
    },
    "./src/app/customiser/nav/actions.component.ts": 
    /*!*****************************************************!*\
  !*** ./src/app/customiser/nav/actions.component.ts ***!
  \*****************************************************/
    /*! exports provided: ActionsComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "ActionsComponent", (function() {
            return ActionsComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _app_customiser_services_customiser_options_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/customiser/services/customiser-options.service */ "./src/app/customiser/services/customiser-options.service.ts");
        let ActionsComponent = class ActionsComponent {
            constructor(el, optionsService) {
                this.el = el;
                this.optionsService = optionsService;
                this.validated = false;
                this.canDelete = false;
                this.designCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
                this.designDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
                this.designSave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
            }
            get showDelete() {
                return this.canDelete;
            }
            ngOnInit() {
                this.setActionBarHeight();
            }
            ngAfterContentChecked() {
                this.setActionBarHeight();
            }
            setActionBarHeight() {
                this.optionsService.actionBarHeight.next(this.el.nativeElement.clientHeight);
            }
            save() {
                this.designSave.emit();
            }
            delete() {
                this.designDelete.emit();
            }
            cancel() {
                this.designCancel.emit();
            }
        };
        ActionsComponent.ctorParameters = () => [ {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
            type: _app_customiser_services_customiser_options_service__WEBPACK_IMPORTED_MODULE_2__["CustomiserOptionsService"]
        } ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], ActionsComponent.prototype, "validated", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], ActionsComponent.prototype, "canDelete", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], ActionsComponent.prototype, "designCancel", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], ActionsComponent.prototype, "designDelete", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], ActionsComponent.prototype, "designSave", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.showDelete"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []) ], ActionsComponent.prototype, "showDelete", null);
        ActionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bx-actions",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./actions.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/nav/actions.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [ tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./actions.component.scss */ "./src/app/customiser/nav/actions.component.scss")).default ]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _app_customiser_services_customiser_options_service__WEBPACK_IMPORTED_MODULE_2__["CustomiserOptionsService"] ]) ], ActionsComponent);
    },
    "./src/app/customiser/nav/editbar.component.scss": 
    /*!*******************************************************!*\
  !*** ./src/app/customiser/nav/editbar.component.scss ***!
  \*******************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = ":host {\n  margin-top: 1rem;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  background-color: white;\n  width: calc(100% - 1rem);\n  border: 1px solid #ededed;\n  position: fixed;\n  bottom: 0.5rem;\n  left: 0.5rem;\n  right: 0.5rem;\n}\n@media (min-width: 768px) {\n  :host {\n    position: static;\n  }\n}\n.edit-info {\n  padding: 1rem;\n  -webkit-flex: 1 0 auto;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  text-align: left;\n}\n.edit-info h4 {\n  margin: 0;\n}\n.edit-image {\n  background-color: #ededed;\n  padding: 5px;\n  width: 132px;\n  height: 132px;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.btn,\n.btn-group {\n  margin: 0;\n}\n.btn-group {\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.btn-group .btn {\n  width: 44px;\n  height: 44px;\n  padding: 0;\n  text-align: center;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.btn-group .btn .icon {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvbmF2L0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXGFwcFxcY3VzdG9taXNlclxcbmF2XFxlZGl0YmFyLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9taXNlci9uYXYvZWRpdGJhci5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvbmF2L0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9ub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfYnJlYWtwb2ludHMuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvbmF2L0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxzQ0FBQTtNQUFBLHNCQUFBO1VBQUEsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDTkY7QUNpREk7RUZyREo7SUFZSSxnQkFBQTtFQ0pGO0FBQ0Y7QURPQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtNQUFBLGtCQUFBO1VBQUEsY0FBQTtFQUNBLGdCQUFBO0FDSkY7QURLRTtFQUNFLFNBQUE7QUNISjtBRE9BO0VBQ0UseUJHOUJVO0VIK0JWLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsK0JBQUE7TUFBQSxxQkFBQTtVQUFBLHVCQUFBO0VBQ0EsMkJBQUE7TUFBQSxzQkFBQTtVQUFBLG1CQUFBO0FDSkY7QURPQTs7RUFFRSxTQUFBO0FDSkY7QURPQTtFQUNFLDhCQUFBO01BQUEsMEJBQUE7VUFBQSxzQkFBQTtBQ0pGO0FES0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7TUFBQSwwQkFBQTtVQUFBLHNCQUFBO0VBQ0EsK0JBQUE7TUFBQSxxQkFBQTtVQUFBLHVCQUFBO0VBQ0EsMkJBQUE7TUFBQSxzQkFBQTtVQUFBLG1CQUFBO0FDSEo7QURJSTtFQUNFLFlBQUE7QUNGTiIsImZpbGUiOiJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b21pc2VyL25hdi9lZGl0YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcclxuQGltcG9ydCAnbWl4aW5zJztcclxuQGltcG9ydCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucyc7XHJcbkBpbXBvcnQgJ25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICdub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cyc7XHJcbkBpbXBvcnQgJ25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2dyaWQnO1xyXG5cclxuOmhvc3Qge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDFyZW0pO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodGdyZXk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMC41cmVtO1xyXG4gIGxlZnQ6IDAuNXJlbTtcclxuICByaWdodDogMC41cmVtO1xyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgfVxyXG59XHJcblxyXG4uZWRpdC1pbmZvIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGZsZXg6IDEgMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgaDQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmVkaXQtaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGdyZXk7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHdpZHRoOiAxMzJweDtcclxuICBoZWlnaHQ6IDEzMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bixcclxuLmJ0bi1ncm91cCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYnRuLWdyb3VwIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC5idG4ge1xyXG4gICAgd2lkdGg6IDQ0cHg7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGVkZWQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwLjVyZW07XG4gIGxlZnQ6IDAuNXJlbTtcbiAgcmlnaHQ6IDAuNXJlbTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICA6aG9zdCB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgfVxufVxuXG4uZWRpdC1pbmZvIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgZmxleDogMSAwIGF1dG87XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uZWRpdC1pbmZvIGg0IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZWRpdC1pbWFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDEzMnB4O1xuICBoZWlnaHQ6IDEzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJ0bixcbi5idG4tZ3JvdXAge1xuICBtYXJnaW46IDA7XG59XG5cbi5idG4tZ3JvdXAge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmJ0bi1ncm91cCAuYnRuIHtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDRweDtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5idG4tZ3JvdXAgLmJ0biAuaWNvbiB7XG4gIGhlaWdodDogYXV0bztcbn0iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vQ29sb3JzXHJcbiRibGFjazogIzM2MzYzNjtcclxuJHZlcnlsaWdodGdyZXk6ICNmNWY1ZjU7XHJcbiRsaWdodGdyZXk6ICNlZGVkZWQ7XHJcbiRtaWRncmV5OiAjOTk5O1xyXG4kZGFya2dyZXk6ICM2NjY7XHJcbiRncmVlbjogIzYzYjIwYjtcclxuJHJlZDogI2NlMDUwNTtcclxuLy9Gb250c1xyXG4kZGVmYXVsdEZvbnQ6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4kZGlzcGxheUZvbnQ6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4iXX0= */";
    },
    "./src/app/customiser/nav/editbar.component.ts": 
    /*!*****************************************************!*\
  !*** ./src/app/customiser/nav/editbar.component.ts ***!
  \*****************************************************/
    /*! exports provided: EditbarComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "EditbarComponent", (function() {
            return EditbarComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
        var _app_route_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/route.animation */ "./src/app/route.animation.ts");
        var _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/customiser-options.service */ "./src/app/customiser/services/customiser-options.service.ts");
        var _services_design_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/design.service */ "./src/app/customiser/services/design.service.ts");
        let EditbarComponent = class EditbarComponent {
            constructor(router, optionsService, designService) {
                this.router = router;
                this.optionsService = optionsService;
                this.designService = designService;
            }
            get slideUp() {
                return "";
            }
            get image() {
                if (this.flag) {
                    return this.flag.flag.image;
                } else if (this.logo) {
                    return this.logo.image.image;
                } else {
                    return this.upload.image;
                }
            }
            get item() {
                return this.flag || this.logo || this.name || this.upload;
            }
            saveItem() {
                this.designService.updateObject(this.item, `${this.item.type}s`);
                this.designService.selectedObject = null;
            }
            editItem() {
                this.router.navigate([ this.optionsService.menuUrl, this.item.type, this.item._id ], {
                    skipLocationChange: true
                });
                this.designService.selectedObject = null;
            }
            deleteItem() {
                this.designService.saveOption(true, {
                    $pull: {
                        [`${this.item.type}s`]: {
                            _id: this.item._id
                        }
                    }
                });
                this.optionsService.backToMenu();
            }
        };
        EditbarComponent.ctorParameters = () => [ {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
            type: _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_4__["CustomiserOptionsService"]
        }, {
            type: _services_design_service__WEBPACK_IMPORTED_MODULE_5__["DesignService"]
        } ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], EditbarComponent.prototype, "logo", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], EditbarComponent.prototype, "flag", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], EditbarComponent.prototype, "name", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], EditbarComponent.prototype, "upload", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("@slideUpAnimation"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []) ], EditbarComponent.prototype, "slideUp", null);
        EditbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bx-editbar",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editbar.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/nav/editbar.component.html")).default,
            animations: [ _app_route_animation__WEBPACK_IMPORTED_MODULE_3__["slideUpAnimation"] ],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [ tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editbar.component.scss */ "./src/app/customiser/nav/editbar.component.scss")).default ]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_4__["CustomiserOptionsService"], _services_design_service__WEBPACK_IMPORTED_MODULE_5__["DesignService"] ]) ], EditbarComponent);
    },
    "./src/app/customiser/nav/nav-item.component.scss": 
    /*!********************************************************!*\
  !*** ./src/app/customiser/nav/nav-item.component.scss ***!
  \********************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = ":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvbmF2L0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXGFwcFxcY3VzdG9taXNlclxcbmF2XFxuYXYtaXRlbS5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvbmF2L25hdi1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6InByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvbmF2L25hdi1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */";
    },
    "./src/app/customiser/nav/nav-item.component.ts": 
    /*!******************************************************!*\
  !*** ./src/app/customiser/nav/nav-item.component.ts ***!
  \******************************************************/
    /*! exports provided: NavItemComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "NavItemComponent", (function() {
            return NavItemComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        let NavItemComponent = class NavItemComponent {
            constructor(el) {
                this.el = el;
            }
            scrollIntoView() {
                this.el.nativeElement.scrollIntoView({
                    behavior: "instant",
                    block: "start",
                    inline: "start"
                });
            }
        };
        NavItemComponent.ctorParameters = () => [ {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        } ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String) ], NavItemComponent.prototype, "menuId", void 0);
        NavItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bx-nav-item, [bxNavItem]",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-item.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/nav/nav-item.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [ tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-item.component.scss */ "./src/app/customiser/nav/nav-item.component.scss")).default ]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] ]) ], NavItemComponent);
    },
    "./src/app/customiser/nav/nav.component.scss": 
    /*!***************************************************!*\
  !*** ./src/app/customiser/nav/nav.component.scss ***!
  \***************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = ":host {\n  display: block;\n  width: 100%;\n  position: relative;\n  background-color: #f5f5f5;\n}\n:host .mobile-scroll-arrows .icon {\n  position: absolute;\n  z-index: 99;\n  top: 50%;\n  margin-top: 10px;\n  display: block;\n  color: #363636;\n}\n:host .mobile-scroll-arrows .nav-left {\n  left: 0;\n}\n:host .mobile-scroll-arrows .nav-right {\n  right: 0;\n}\n@media (min-width: 768px) {\n  :host {\n    height: 100vh;\n    margin-bottom: 38px;\n  }\n  :host .mobile-scroll-arrows {\n    display: none;\n  }\n}\n.add-to-cart {\n  margin: 0;\n  position: static;\n}\n.add-to-cart:disabled {\n  background-color: #ce0505;\n  color: white;\n}\n.add-to-cart.hide-mobile {\n  display: none;\n}\n@media (min-width: 768px) {\n  .add-to-cart.hide-mobile {\n    display: block;\n  }\n}\n@media (min-width: 768px) {\n  .add-to-cart {\n    width: 33.33%;\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    max-width: 370px;\n    z-index: 10002;\n  }\n}\n.scroll-container {\n  background-color: white;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  width: calc(100% - 40px);\n  margin-left: 20px;\n  scroll-behavior: auto;\n  -webkit-overflow-scrolling: touch;\n  position: relative;\n  -webkit-scroll-snap-type: x mandatory;\n      -ms-scroll-snap-type: x mandatory;\n          scroll-snap-type: x mandatory;\n}\n@media (min-width: 768px) {\n  .scroll-container {\n    display: block;\n    height: calc(100vh - 38px);\n    height: calc(var(--vh, 1vh) * 100 - 38px);\n    width: 100%;\n    margin-left: 0;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    -webkit-scroll-snap-type: y mandatory;\n        -ms-scroll-snap-type: y mandatory;\n            scroll-snap-type: y mandatory;\n  }\n}\n.scroll-container.scrolled {\n  scroll-behavior: smooth;\n}\n.scroll-container.hide-mobile {\n  display: none;\n}\n@media (min-width: 768px) {\n  .scroll-container.hide-mobile {\n    display: block;\n  }\n}\n.option {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #f5f5f5;\n  margin-right: 2px;\n  margin-bottom: 0;\n  padding: 1rem;\n  min-width: 180px;\n  cursor: pointer;\n  scroll-snap-align: center;\n}\n.option h4 {\n  margin: 0;\n  text-align: center;\n  font-size: 16px;\n  font-size: 1rem;\n  line-height: 1;\n}\n.option .option-icon {\n  max-width: 150px;\n  display: block;\n  margin: 0 auto;\n}\n.option p.required,\n.option p.selected {\n  margin: 0.2rem 0 0;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-size: 0.75rem;\n  line-height: 1;\n  text-align: center;\n}\n.option .required {\n  color: #ce0505;\n}\n.option .selected {\n  color: #63b20b;\n}\n@media (min-width: 768px) {\n  .option {\n    padding: 2rem;\n    margin-right: 0;\n    margin-bottom: 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvbmF2L0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXGFwcFxcY3VzdG9taXNlclxcbmF2XFxuYXYuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b21pc2VyL25hdi9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b21pc2VyL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b21pc2VyL25hdi9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b21pc2VyL25hdi9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxzY3NzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJDVGM7QUNHaEI7QUZRSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQ2xCRTtBQ1lSO0FGUUk7RUFDRSxPQUFBO0FFTk47QUZRSTtFQUNFLFFBQUE7QUVOTjtBQ3lDSTtFSHJESjtJQXNCSSxhQUFBO0lBQ0EsbUJBQUE7RUVORjtFRk9FO0lBQ0UsYUFBQTtFRUxKO0FBQ0Y7QUZRQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtBRUxGO0FGTUU7RUFDRSx5QkNqQ0U7RURrQ0YsWUFBQTtBRUpKO0FGTUU7RUFDRSxhQUFBO0FFSko7QUNvQkk7RUhqQkY7SUFHSSxjQUFBO0VFRko7QUFDRjtBQ2VJO0VIeEJKO0lBY0ksYUFBQTtJQUNBLGVBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFRURGO0FBQ0Y7QUZJQTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSwyQkFBQTtNQUFBLHVCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO01BQUEsaUNBQUE7VUFBQSw2QkFBQTtBRURGO0FDVEk7RUhESjtJQWFJLGNBQUE7SUFDQSwwQkFBQTtJQUNBLHlDQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EscUNBQUE7UUFBQSxpQ0FBQTtZQUFBLDZCQUFBO0VFQ0Y7QUFDRjtBRkFFO0VBQ0UsdUJBQUE7QUVFSjtBRkFFO0VBQ0UsYUFBQTtBRUVKO0FDM0JJO0VId0JGO0lBR0ksY0FBQTtFRUlKO0FBQ0Y7QUZBQTtFQUNFLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7TUFBQSwwQkFBQTtVQUFBLHNCQUFBO0VBQ0EsK0JBQUE7TUFBQSxxQkFBQTtVQUFBLHVCQUFBO0VBQ0EsMkJBQUE7TUFBQSxzQkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJDL0ZjO0VEZ0dkLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUVHRjtBRkZFO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VJcEVGLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FIWTtBRjRFZDtBRkhFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBRUtKO0FGRkU7O0VBRUUsa0JBQUE7RUFDQSx5QkFBQTtFSWpGRixlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUhZO0VKb0ZWLGtCQUFBO0FFTUo7QUZKRTtFQUNFLGNDckhFO0FDMkhOO0FGSkU7RUFDRSxjQ3pISTtBQytIUjtBQ3pFSTtFSGdDSjtJQXNDSSxhQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VFT0Y7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b21pc2VyL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICdtaXhpbnMnO1xyXG5AaW1wb3J0ICdub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zJztcclxuQGltcG9ydCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzJztcclxuQGltcG9ydCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fZ3JpZCc7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR2ZXJ5bGlnaHRncmV5O1xyXG4gIC5tb2JpbGUtc2Nyb2xsLWFycm93cyB7XHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgY29sb3I6ICRibGFjaztcclxuICAgIH1cclxuICAgIC5uYXYtbGVmdCB7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICAubmF2LXJpZ2h0IHtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzOHB4O1xyXG4gICAgLm1vYmlsZS1zY3JvbGwtYXJyb3dzIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmFkZC10by1jYXJ0IHtcclxuICBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IHN0YXRpYztcclxuICAmOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gICYuaGlkZS1tb2JpbGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHtcclxuICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1heC13aWR0aDogMzcwcHg7XHJcbiAgICB6LWluZGV4OiAxMDAwMjtcclxuICB9XHJcbn1cclxuXHJcbi5zY3JvbGwtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvO1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzOHB4KTtcclxuICAgIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCAtIDM4cHgpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHkgbWFuZGF0b3J5O1xyXG4gIH1cclxuICAmLnNjcm9sbGVkIHtcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gIH1cclxuICAmLmhpZGUtbW9iaWxlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm9wdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHZlcnlsaWdodGdyZXk7XHJcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIG1pbi13aWR0aDogMTgwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHNjcm9sbC1zbmFwLWFsaWduOiBjZW50ZXI7XHJcbiAgaDQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgQGluY2x1ZGUgZm9udC1zaXplKDE2LCAxNik7XHJcbiAgfVxyXG5cclxuICAub3B0aW9uLWljb24ge1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICBwLnJlcXVpcmVkLFxyXG4gIHAuc2VsZWN0ZWQge1xyXG4gICAgbWFyZ2luOiAwLjJyZW0gMCAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIEBpbmNsdWRlIGZvbnQtc2l6ZSgxMiwgMTIpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAucmVxdWlyZWQge1xyXG4gICAgY29sb3I6ICRyZWQ7XHJcbiAgfVxyXG4gIC5zZWxlY3RlZCB7XHJcbiAgICBjb2xvcjogJGdyZWVuO1xyXG4gIH1cclxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gIH1cclxufVxyXG4iLCIvL0NvbG9yc1xyXG4kYmxhY2s6ICMzNjM2MzY7XHJcbiR2ZXJ5bGlnaHRncmV5OiAjZjVmNWY1O1xyXG4kbGlnaHRncmV5OiAjZWRlZGVkO1xyXG4kbWlkZ3JleTogIzk5OTtcclxuJGRhcmtncmV5OiAjNjY2O1xyXG4kZ3JlZW46ICM2M2IyMGI7XHJcbiRyZWQ6ICNjZTA1MDU7XHJcbi8vRm9udHNcclxuJGRlZmF1bHRGb250OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuJGRpc3BsYXlGb250OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cbjpob3N0IC5tb2JpbGUtc2Nyb2xsLWFycm93cyAuaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICMzNjM2MzY7XG59XG46aG9zdCAubW9iaWxlLXNjcm9sbC1hcnJvd3MgLm5hdi1sZWZ0IHtcbiAgbGVmdDogMDtcbn1cbjpob3N0IC5tb2JpbGUtc2Nyb2xsLWFycm93cyAubmF2LXJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgOmhvc3Qge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzhweDtcbiAgfVxuICA6aG9zdCAubW9iaWxlLXNjcm9sbC1hcnJvd3Mge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmFkZC10by1jYXJ0IHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogc3RhdGljO1xufVxuLmFkZC10by1jYXJ0OmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlMDUwNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmFkZC10by1jYXJ0LmhpZGUtbW9iaWxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuYWRkLXRvLWNhcnQuaGlkZS1tb2JpbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmFkZC10by1jYXJ0IHtcbiAgICB3aWR0aDogMzMuMzMlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWF4LXdpZHRoOiAzNzBweDtcbiAgICB6LWluZGV4OiAxMDAwMjtcbiAgfVxufVxuXG4uc2Nyb2xsLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNjcm9sbC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDM4cHgpO1xuICAgIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCAtIDM4cHgpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XG4gIH1cbn1cbi5zY3JvbGwtY29udGFpbmVyLnNjcm9sbGVkIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG4uc2Nyb2xsLWNvbnRhaW5lci5oaWRlLW1vYmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNjcm9sbC1jb250YWluZXIuaGlkZS1tb2JpbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbi5vcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1pbi13aWR0aDogMTgwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IGNlbnRlcjtcbn1cbi5vcHRpb24gaDQge1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLm9wdGlvbiAub3B0aW9uLWljb24ge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ub3B0aW9uIHAucmVxdWlyZWQsXG4ub3B0aW9uIHAuc2VsZWN0ZWQge1xuICBtYXJnaW46IDAuMnJlbSAwIDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm9wdGlvbiAucmVxdWlyZWQge1xuICBjb2xvcjogI2NlMDUwNTtcbn1cbi5vcHRpb24gLnNlbGVjdGVkIHtcbiAgY29sb3I6ICM2M2IyMGI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm9wdGlvbiB7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICB9XG59IiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCJAbWl4aW4gZmx1aWQtdHlwZSgkcHJvcGVydGllcywgJG1pbi12dywgJG1heC12dywgJG1pbi12YWx1ZSwgJG1heC12YWx1ZSkge1xyXG4gIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAjeyRwcm9wZXJ0eX06ICRtaW4tdmFsdWU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWluLXZ3KSB7XHJcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgICAjeyRwcm9wZXJ0eX06IGNhbGMoXHJcbiAgICAgICAgI3skbWluLXZhbHVlfSArICN7c3RyaXAtdW5pdCgkbWF4LXZhbHVlIC0gJG1pbi12YWx1ZSl9ICpcclxuICAgICAgICAgIChcclxuICAgICAgICAgICAgMTAwdncgLSAjeyRtaW4tdnd9XHJcbiAgICAgICAgICApIC8gI3tzdHJpcC11bml0KCRtYXgtdncgLSAkbWluLXZ3KX1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtYXgtdncpIHtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgICN7JHByb3BlcnR5fTogJG1heC12YWx1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBzdHJpcC11bml0KCR2YWx1ZSkge1xyXG4gIEByZXR1cm4gJHZhbHVlIC8gKCR2YWx1ZSAqIDAgKyAxKTtcclxufVxyXG5cclxuQG1peGluIHdyYXBwZXIoJHdpZHRoOjE0NDBweCkge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAkd2lkdGg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMS41cmVtO1xyXG59XHJcblxyXG5AbWl4aW4gZm9udC1zaXplKCRmb250U2l6ZSwgJGxpbmVIZWlnaHQ6IDEpIHtcclxuICAkcmVtVmFsdWU6ICgkZm9udFNpemUgLyAxNik7XHJcbiAgJHB4VmFsdWU6ICRmb250U2l6ZTtcclxuICAkbGluZVZhbHVlOiAoJGxpbmVIZWlnaHQgLyAkZm9udFNpemUpO1xyXG4gIGZvbnQtc2l6ZTogJHB4VmFsdWUgKyBweDtcclxuICBmb250LXNpemU6ICRyZW1WYWx1ZSArIHJlbTtcclxuICBsaW5lLWhlaWdodDogJGxpbmVWYWx1ZTtcclxufVxyXG4iXX0= */";
    },
    "./src/app/customiser/nav/nav.component.ts": 
    /*!*************************************************!*\
  !*** ./src/app/customiser/nav/nav.component.ts ***!
  \*************************************************/
    /*! exports provided: NavComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "NavComponent", (function() {
            return NavComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _services_design_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/design.service */ "./src/app/customiser/services/design.service.ts");
        var _nav_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-item.component */ "./src/app/customiser/nav/nav-item.component.ts");
        var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../reducers */ "./src/app/customiser/reducers/index.ts");
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
        var _global_untilDestroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @global/untilDestroy */ "../global/untilDestroy/index.ts");
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
        let NavComponent = class NavComponent {
            constructor(designService, store) {
                this.designService = designService;
                this.hasScrolled = false;
                store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_5__["getDesign"])).pipe(Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_7__["untilComponentDestroyed"])(this)).subscribe((design => this.design = design));
                this.complete$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_5__["isComplete"]));
                this.styles$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_5__["getStyles"]));
                this.panels$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_5__["getPanels"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((panels => panels.filter((p => !p.default_material)))));
                this.muay_thai$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_5__["getMuayThai"]));
                this.sizes$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_5__["getSizes"]));
                this.total$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([ store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_5__["getDesign"])), store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_5__["getProduct"])) ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((resp => {
                    let price = 0;
                    if (resp[1]) {
                        price = resp[1].on_sale ? resp[1].sale_price : resp[1].price;
                    }
                    return resp[0] && resp[0].total ? resp[0].total : price;
                })));
            }
            ngAfterViewInit() {
                if (this.designService.navSelected) {
                    const menu = this.menuLinks.find((m => m.menuId === this.designService.navSelected));
                    if (menu) {
                        menu.scrollIntoView();
                    }
                }
            }
            menuClicked(event) {
                this.designService.navSelected = event.currentTarget.id;
                this.designService.selectedObject = null;
            }
            getStyle(type) {
                return this.design[type.toLowerCase()];
            }
            getPanel(panel) {
                return this.design.panels.find((p => p.panel === panel));
            }
            getSize() {
                return this.design.sizing;
            }
            getMuayThai() {
                return this.design.muay_thai;
            }
            getProduction() {
                return this.design.production;
            }
            addToCart() {
                this.designService.addToCart();
            }
            updateCart() {
                this.designService.updateCart();
            }
            updateOrderAdmin() {
                this.designService.updateOrderAdmin();
            }
            ngOnDestroy() {}
        };
        NavComponent.ctorParameters = () => [ {
            type: _services_design_service__WEBPACK_IMPORTED_MODULE_3__["DesignService"]
        }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]
        } ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"])(_nav_item_component__WEBPACK_IMPORTED_MODULE_4__["NavItemComponent"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"]) ], NavComponent.prototype, "menuLinks", void 0);
        NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "bx-nav",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/nav/nav.component.html")).default,
            styles: [ tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.scss */ "./src/app/customiser/nav/nav.component.scss")).default ]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _services_design_service__WEBPACK_IMPORTED_MODULE_3__["DesignService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] ]) ], NavComponent);
    },
    "./src/app/customiser/nav/toolbar.component.scss": 
    /*!*******************************************************!*\
  !*** ./src/app/customiser/nav/toolbar.component.scss ***!
  \*******************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = ":host {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-flex-wrap: nowrap;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0.5rem;\n}\n:host .btn {\n  width: auto;\n  margin: 0;\n}\n:host .menu {\n  margin: 0 0 0 auto;\n}\n.btn-group {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvbmF2L0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXGFwcFxcY3VzdG9taXNlclxcbmF2XFx0b29sYmFyLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9taXNlci9uYXYvdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLHNDQUFBO01BQUEsc0JBQUE7VUFBQSw4QkFBQTtFQUNBLDJCQUFBO01BQUEsc0JBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7QUNERjtBREVFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7QUNBSjtBREVFO0VBQ0Usa0JBQUE7QUNBSjtBRElBO0VBQ0UsU0FBQTtBQ0RGIiwiZmlsZSI6InByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvbmF2L3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIC5idG4ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIC5tZW51IHtcclxuICAgIG1hcmdpbjogMCAwIDAgYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi5idG4tZ3JvdXAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG46aG9zdCAuYnRuIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IC5tZW51IHtcbiAgbWFyZ2luOiAwIDAgMCBhdXRvO1xufVxuXG4uYnRuLWdyb3VwIHtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */";
    },
    "./src/app/customiser/nav/toolbar.component.ts": 
    /*!*****************************************************!*\
  !*** ./src/app/customiser/nav/toolbar.component.ts ***!
  \*****************************************************/
    /*! exports provided: ToolbarComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "ToolbarComponent", (function() {
            return ToolbarComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "../environments/environment.ts");
        var _services_design_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/design.service */ "./src/app/customiser/services/design.service.ts");
        var _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/customiser-options.service */ "./src/app/customiser/services/customiser-options.service.ts");
        var _app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
        var _global_untilDestroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @global/untilDestroy */ "../global/untilDestroy/index.ts");
        var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
        var _reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../reducers */ "./src/app/customiser/reducers/index.ts");
        var _app_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/reducers */ "./src/app/reducers/index.ts");
        var _app_core_actions_profile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/core/actions/profile */ "./src/app/core/actions/profile.ts");
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
        var ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-tour-md-menu */ "../../node_modules/ngx-tour-md-menu/fesm2015/ngx-tour-md-menu.js");
        var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "../../node_modules/@angular/material/esm2015/menu.js");
        var _app_core_actions_state__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/core/actions/state */ "./src/app/core/actions/state.ts");
        var _app_core_services_tawk_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/core/services/tawk.service */ "./src/app/core/services/tawk.service.ts");
        var _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @gorniv/ngx-universal */ "../../node_modules/@gorniv/ngx-universal/fesm2015/gorniv-ngx-universal.js");
        let ToolbarComponent = class ToolbarComponent {
            constructor(tourService, tawk, auth, cookieService, router, store, profileStore, optionsService, designService) {
                this.tourService = tourService;
                this.tawk = tawk;
                this.auth = auth;
                this.cookieService = cookieService;
                this.router = router;
                this.store = store;
                this.profileStore = profileStore;
                this.optionsService = optionsService;
                this.designService = designService;
                this.designSaved = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"];
                this.menuOpen = false;
                this.isClub = false;
                this.currencies = [ "GBP", "EUR", "USD", "AUD", "NZD", "THB" ];
                this.profiles$ = profileStore.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["select"])(_app_reducers__WEBPACK_IMPORTED_MODULE_9__["getProfiles"]));
                this.settings$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_8__["getSettings"]));
                profileStore.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["select"])(_app_reducers__WEBPACK_IMPORTED_MODULE_9__["profileLoaded"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["tap"])((loaded => !loaded && auth.loggedIn() ? this.getProfiles() : null)), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_5__["untilComponentDestroyed"])(this)).subscribe();
            }
            ngOnInit() {
                this.trigger.menuOpened.pipe(Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_5__["untilComponentDestroyed"])(this)).subscribe((() => {
                    this.menuOpen = true;
                }));
                this.isClub = this.auth.checkRoles([ "club" ]);
            }
            getProfiles() {
                this.store.dispatch(new _app_core_actions_profile__WEBPACK_IMPORTED_MODULE_10__["Load"]);
            }
            openChat() {
                this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_8__["getDesign"]), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_5__["untilComponentDestroyed"])(this)).subscribe((design => {
                    if (design && design._id) {
                        this.tawk.setAttributes({
                            product: `${this.product.title} - ${this.product.category.title}`,
                            "view-design": `${_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].site}/customiser/${this.product._id}/design?chat_help=${this.designService.token}`
                        });
                    }
                    this.tawk.toggle();
                }));
            }
            goBack() {
                if (this.designService.editDesign) {
                    this.designService.updateCart();
                } else {
                    this.router.navigate([ this.product.category.slug ]);
                }
            }
            loginToSave() {
                this.auth.redirectUrl = this.optionsService.menuUrl;
                this.router.navigate([ "/login" ]);
            }
            clearDesign() {
                this.designService.clearDesign();
            }
            viewTour() {
                this.tourService.start();
            }
            menuClicked(e) {
                e.stopPropagation();
            }
            closeMenu() {
                if (this.menuOpen) {
                    this.trigger.closeMenu();
                    this.menuOpen = true;
                }
            }
            setCurrency(code) {
                this.cookieService.put("currency", code, {
                    expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1e3)
                });
                this.store.dispatch(new _app_core_actions_state__WEBPACK_IMPORTED_MODULE_15__["SetCurrency"](code));
            }
            submitClubkit() {}
            ngOnDestroy() {}
        };
        ToolbarComponent.ctorParameters = () => [ {
            type: ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_13__["TourService"]
        }, {
            type: _app_core_services_tawk_service__WEBPACK_IMPORTED_MODULE_16__["TawkService"]
        }, {
            type: _app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
            type: _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_17__["CookieService"]
        }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["Store"]
        }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["Store"]
        }, {
            type: _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_3__["CustomiserOptionsService"]
        }, {
            type: _services_design_service__WEBPACK_IMPORTED_MODULE_2__["DesignService"]
        } ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], ToolbarComponent.prototype, "product", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]) ], ToolbarComponent.prototype, "designSaved", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])("trigger", {
            static: true
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuTrigger"]) ], ToolbarComponent.prototype, "trigger", void 0);
        ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: "bx-toolbar",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toolbar.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/nav/toolbar.component.html")).default,
            styles: [ tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/customiser/nav/toolbar.component.scss")).default ]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_13__["TourService"], _app_core_services_tawk_service__WEBPACK_IMPORTED_MODULE_16__["TawkService"], _app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_17__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["Store"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["Store"], _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_3__["CustomiserOptionsService"], _services_design_service__WEBPACK_IMPORTED_MODULE_2__["DesignService"] ]) ], ToolbarComponent);
    },
    "./src/app/customiser/options/custom-flag-option/custom-flag-option.component.scss": 
    /*!*****************************************************************************************!*\
  !*** ./src/app/customiser/options/custom-flag-option/custom-flag-option.component.scss ***!
  \*****************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '.swatch {\n  line-height: 0;\n  display: block;\n}\n\n.swatch-colour {\n  width: 100%;\n  height: 100%;\n}\n\n.material-group .header {\n  padding: 0.5rem 0;\n}\n\n.material-group .header h4 {\n  font-size: 14px;\n  font-size: 0.875rem;\n  line-height: 1;\n  font-weight: 400;\n  text-transform: inherit;\n  font-style: italic;\n  margin: 0;\n}\n\n.material-colours {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n\n.material-colours .material {\n  -webkit-flex: 0 0 25%;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  max-width: 25%;\n  min-width: auto;\n  text-align: center;\n  cursor: pointer;\n  position: relative;\n  line-height: 0;\n  padding: 1px;\n}\n\n.material-colours .material .info {\n  padding: 0.1rem;\n  text-align: center;\n  line-height: 1;\n}\n\n.material-colours .material .info h4 {\n  font-family: "Roboto", sans-serif;\n  font-size: 9px;\n  font-size: 0.5625rem;\n  line-height: 1.1111111111;\n  margin: 0;\n}\n\n.material-colours .material .info h4.price {\n  font-weight: bold;\n}\n\n.material-colours .material.large {\n  -webkit-flex: 0 0 50%;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.material-colours .selected {\n  background-color: #63b20b;\n}\n\n.material-colours ::ng-deep img {\n  width: 100%;\n  height: auto;\n}\n\n:host {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  position: relative;\n}\n\n.graphic-sizes {\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem;\n}\n\n.graphic-sizes .option {\n  margin: 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvb3B0aW9ucy9jdXN0b20tZmxhZy1vcHRpb24vQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcYXBwXFxjdXN0b21pc2VyXFxzY3NzXFxzd2F0Y2guc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvb3B0aW9ucy9jdXN0b20tZmxhZy1vcHRpb24vY3VzdG9tLWZsYWctb3B0aW9uLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9taXNlci9vcHRpb25zL2N1c3RvbS1mbGFnLW9wdGlvbi9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxzY3NzXFxfbWl4aW5zLnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b21pc2VyL29wdGlvbnMvY3VzdG9tLWZsYWctb3B0aW9uL0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvb3B0aW9ucy9jdXN0b20tZmxhZy1vcHRpb24vQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcYXBwXFxjdXN0b21pc2VyXFxvcHRpb25zXFxjdXN0b20tZmxhZy1vcHRpb25cXGN1c3RvbS1mbGFnLW9wdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FDRkY7O0FESUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0RGOztBREtFO0VBQ0UsaUJBQUE7QUNGSjs7QURHSTtFRXVCRixlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUhZO0VGcEJSLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNDTjs7QURJQTtFQUNFLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsMkJBQUE7TUFBQSx1QkFBQTtVQUFBLG1CQUFBO0VBQ0EsdUJBQUE7TUFBQSxtQkFBQTtVQUFBLGVBQUE7QUNERjs7QURFRTtFQUNFLHFCQUFBO01BQUEsaUJBQUE7VUFBQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDQUo7O0FEQ0k7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ047O0FEQU07RUFDRSxpQ0dsQ007RUQ2QlosY0FBQTtFQUNBLG9CQUFBO0VBQ0EseUJBSFk7RUZRTixTQUFBO0FDSVI7O0FESFE7RUFDRSxpQkFBQTtBQ0tWOztBRERJO0VBQ0UscUJBQUE7TUFBQSxpQkFBQTtVQUFBLGFBQUE7RUFDQSxjQUFBO0FDR047O0FEQUU7RUFDRSx5QkduREk7QUZxRFI7O0FEQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0VKOztBRzdEQTtFQUNFLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7TUFBQSwwQkFBQTtVQUFBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FIZ0VGOztBRzdEQTtFQUNFLDRCQUFBO0VBQUEsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLDhCQUFBO01BQUEsMEJBQUE7VUFBQSxzQkFBQTtFQUNBLG1CQUFBO0FIZ0VGOztBRy9ERTtFQUNFLGFBQUE7QUhpRUoiLCJmaWxlIjoicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9taXNlci9vcHRpb25zL2N1c3RvbS1mbGFnLW9wdGlvbi9jdXN0b20tZmxhZy1vcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICdtaXhpbnMnO1xyXG5cclxuLnN3YXRjaCB7XHJcbiAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnN3YXRjaC1jb2xvdXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1hdGVyaWFsLWdyb3VwIHtcclxuICAuaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG4gICAgaDQge1xyXG4gICAgICBAaW5jbHVkZSBmb250LXNpemUoMTQsIDE0KTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1hdGVyaWFsLWNvbG91cnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLm1hdGVyaWFsIHtcclxuICAgIGZsZXg6IDAgMCAyNSU7XHJcbiAgICBtYXgtd2lkdGg6IDI1JTtcclxuICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgLmluZm8ge1xyXG4gICAgICBwYWRkaW5nOiAwLjFyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgIGg0IHtcclxuICAgICAgICBmb250LWZhbWlseTogJGRlZmF1bHRGb250O1xyXG4gICAgICAgIEBpbmNsdWRlIGZvbnQtc2l6ZSg5LCAxMCk7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICYucHJpY2Uge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLmxhcmdlIHtcclxuICAgICAgZmxleDogMCAwIDUwJTtcclxuICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XHJcbiAgfVxyXG4gIDo6bmctZGVlcCBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG59XHJcbiIsIi5zd2F0Y2gge1xuICBsaW5lLWhlaWdodDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zd2F0Y2gtY29sb3VyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1hdGVyaWFsLWdyb3VwIC5oZWFkZXIge1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbn1cbi5tYXRlcmlhbC1ncm91cCAuaGVhZGVyIGg0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luOiAwO1xufVxuXG4ubWF0ZXJpYWwtY29sb3VycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5tYXRlcmlhbC1jb2xvdXJzIC5tYXRlcmlhbCB7XG4gIGZsZXg6IDAgMCAyNSU7XG4gIG1heC13aWR0aDogMjUlO1xuICBtaW4td2lkdGg6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwYWRkaW5nOiAxcHg7XG59XG4ubWF0ZXJpYWwtY29sb3VycyAubWF0ZXJpYWwgLmluZm8ge1xuICBwYWRkaW5nOiAwLjFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4ubWF0ZXJpYWwtY29sb3VycyAubWF0ZXJpYWwgLmluZm8gaDQge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGZvbnQtc2l6ZTogMC41NjI1cmVtO1xuICBsaW5lLWhlaWdodDogMS4xMTExMTExMTExO1xuICBtYXJnaW46IDA7XG59XG4ubWF0ZXJpYWwtY29sb3VycyAubWF0ZXJpYWwgLmluZm8gaDQucHJpY2Uge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYXRlcmlhbC1jb2xvdXJzIC5tYXRlcmlhbC5sYXJnZSB7XG4gIGZsZXg6IDAgMCA1MCU7XG4gIG1heC13aWR0aDogNTAlO1xufVxuLm1hdGVyaWFsLWNvbG91cnMgLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzYjIwYjtcbn1cbi5tYXRlcmlhbC1jb2xvdXJzIDo6bmctZGVlcCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZ3JhcGhpYy1zaXplcyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmdyYXBoaWMtc2l6ZXMgLm9wdGlvbiB7XG4gIG1hcmdpbjogNXB4IDA7XG59IiwiQG1peGluIGZsdWlkLXR5cGUoJHByb3BlcnRpZXMsICRtaW4tdncsICRtYXgtdncsICRtaW4tdmFsdWUsICRtYXgtdmFsdWUpIHtcclxuICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgI3skcHJvcGVydHl9OiAkbWluLXZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1pbi12dykge1xyXG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcclxuICAgICAgI3skcHJvcGVydHl9OiBjYWxjKFxyXG4gICAgICAgICN7JG1pbi12YWx1ZX0gKyAje3N0cmlwLXVuaXQoJG1heC12YWx1ZSAtICRtaW4tdmFsdWUpfSAqXHJcbiAgICAgICAgICAoXHJcbiAgICAgICAgICAgIDEwMHZ3IC0gI3skbWluLXZ3fVxyXG4gICAgICAgICAgKSAvICN7c3RyaXAtdW5pdCgkbWF4LXZ3IC0gJG1pbi12dyl9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWF4LXZ3KSB7XHJcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgICAjeyRwcm9wZXJ0eX06ICRtYXgtdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AZnVuY3Rpb24gc3RyaXAtdW5pdCgkdmFsdWUpIHtcclxuICBAcmV0dXJuICR2YWx1ZSAvICgkdmFsdWUgKiAwICsgMSk7XHJcbn1cclxuXHJcbkBtaXhpbiB3cmFwcGVyKCR3aWR0aDoxNDQwcHgpIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1heC13aWR0aDogJHdpZHRoO1xyXG4gIG1hcmdpbjogMCBhdXRvIDEuNXJlbTtcclxufVxyXG5cclxuQG1peGluIGZvbnQtc2l6ZSgkZm9udFNpemUsICRsaW5lSGVpZ2h0OiAxKSB7XHJcbiAgJHJlbVZhbHVlOiAoJGZvbnRTaXplIC8gMTYpO1xyXG4gICRweFZhbHVlOiAkZm9udFNpemU7XHJcbiAgJGxpbmVWYWx1ZTogKCRsaW5lSGVpZ2h0IC8gJGZvbnRTaXplKTtcclxuICBmb250LXNpemU6ICRweFZhbHVlICsgcHg7XHJcbiAgZm9udC1zaXplOiAkcmVtVmFsdWUgKyByZW07XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lVmFsdWU7XHJcbn1cclxuIiwiLy9Db2xvcnNcclxuJGJsYWNrOiAjMzYzNjM2O1xyXG4kdmVyeWxpZ2h0Z3JleTogI2Y1ZjVmNTtcclxuJGxpZ2h0Z3JleTogI2VkZWRlZDtcclxuJG1pZGdyZXk6ICM5OTk7XHJcbiRkYXJrZ3JleTogIzY2NjtcclxuJGdyZWVuOiAjNjNiMjBiO1xyXG4kcmVkOiAjY2UwNTA1O1xyXG4vL0ZvbnRzXHJcbiRkZWZhdWx0Rm9udDogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiRkaXNwbGF5Rm9udDogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiIsIkBpbXBvcnQgJy4uLy4uL3Njc3Mvc3dhdGNoJztcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmdyYXBoaWMtc2l6ZXMge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAub3B0aW9uIHtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */';
    },
    "./src/app/customiser/options/custom-flag-option/custom-flag-option.component.ts": 
    /*!***************************************************************************************!*\
  !*** ./src/app/customiser/options/custom-flag-option/custom-flag-option.component.ts ***!
  \***************************************************************************************/
    /*! exports provided: CustomFlagOptionComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "CustomFlagOptionComponent", (function() {
            return CustomFlagOptionComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
        var _app_route_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/route.animation */ "./src/app/route.animation.ts");
        var _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/api.service */ "./src/app/core/services/api.service.ts");
        var _global_untilDestroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @global/untilDestroy */ "../global/untilDestroy/index.ts");
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
        var _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/customiser-options.service */ "./src/app/customiser/services/customiser-options.service.ts");
        var _services_design_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/design.service */ "./src/app/customiser/services/design.service.ts");
        var _reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../reducers */ "./src/app/customiser/reducers/index.ts");
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
        var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
        let CustomFlagOptionComponent = class CustomFlagOptionComponent {
            constructor(api, designService, optionsService, route, store, fb) {
                this.api = api;
                this.designService = designService;
                this.optionsService = optionsService;
                this.route = route;
                this.store = store;
                this.fb = fb;
                this.canDelete = false;
                this.hasSizes = false;
                this.price = 0;
                this.customSettings$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_9__["getCustomSettings"]));
                this.flagSizes$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_9__["getFlagSizes"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((resp => {
                    if (resp) {
                        this.hasSizes = true;
                    }
                    this.sizesSetup();
                })));
            }
            get slideIn() {
                return "";
            }
            ngOnInit() {
                this.loadFlags();
            }
            loadFlags() {
                this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((params => this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_9__["getDesignFlagById"](params["id"]))))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((flag => {
                    if (flag) {
                        this.selectedFlag = flag;
                        this.currentFlag = flag.flag;
                        this.canDelete = true;
                        this.price = this.selectedFlag.price;
                    }
                    this.flagForm = this.fb.group({
                        size: [ this.selectedFlag && this.selectedFlag.size ? this.selectedFlag.size : null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required ]
                    });
                    return this.api.find("flag", {
                        $limit: 100,
                        $sort: {
                            weight: 1
                        }
                    }, false);
                })), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_5__["untilComponentDestroyed"])(this)).subscribe((resp => {
                    this.flags = resp.data.filter((d => d.image));
                }));
            }
            sizesSetup() {
                if (!this.hasSizes) {
                    this.flagForm.get("size").setValidators(null);
                    this.flagForm.get("size").updateValueAndValidity();
                    this.customSettings$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((resp => this.price = resp.flag_price)), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_5__["untilComponentDestroyed"])(this)).subscribe();
                } else {
                    this.flagForm.get("size").valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((value => this.flagSizes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((sizes => sizes.find((s => s.title === value))))))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((findSize => findSize && findSize.price ? findSize.price : 10)), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_5__["untilComponentDestroyed"])(this)).subscribe((resp => this.price = resp));
                }
            }
            get validated() {
                return this.selectedFlag && this.flagForm.get("size").valid;
            }
            flagSelected(flag) {
                if (this.selectedFlag) {
                    this.selectedFlag.flag = flag;
                    return;
                }
                this.selectedFlag = {
                    price: 0,
                    flag: flag,
                    size: null,
                    position: {
                        x: 300 - 16 * 2.5,
                        y: 100,
                        width: 32,
                        height: 24,
                        scale: 2.5,
                        rotate: 0,
                        aspect_ratio: 1.3333333333
                    }
                };
            }
            save() {
                if (this.currentFlag) {
                    this.designService.updateSub(true, {
                        "flags.$.flag": this.selectedFlag.flag,
                        "flags.$.size": this.flagForm.get("size").value
                    }, {
                        "flags._id": this.selectedFlag._id
                    });
                } else {
                    this.selectedFlag.size = this.flagForm.get("size").value;
                    const data = {
                        flags: this.selectedFlag
                    };
                    this.designService.saveOption(true, {
                        $addToSet: data
                    });
                }
            }
            delete() {
                this.designService.saveOption(true, {
                    $pull: {
                        flags: {
                            _id: this.selectedFlag._id
                        }
                    }
                });
            }
            cancel() {
                if (this.currentFlag) {
                    this.selectedFlag.flag = this.currentFlag;
                }
                this.backToMenu();
            }
            backToMenu() {
                this.optionsService.backToMenu();
                this.designService.selectedObject = null;
                this.selectedFlag = null;
            }
            ngOnDestroy() {
                this.selectedFlag = null;
            }
        };
        CustomFlagOptionComponent.ctorParameters = () => [ {
            type: _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
            type: _services_design_service__WEBPACK_IMPORTED_MODULE_8__["DesignService"]
        }, {
            type: _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_7__["CustomiserOptionsService"]
        }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"]
        }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"]
        } ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("@fadeInAnimation"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []) ], CustomFlagOptionComponent.prototype, "slideIn", null);
        CustomFlagOptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bx-custom-flag-option",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-flag-option.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-flag-option/custom-flag-option.component.html")).default,
            animations: [ _app_route_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInAnimation"] ],
            styles: [ tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-flag-option.component.scss */ "./src/app/customiser/options/custom-flag-option/custom-flag-option.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../scss/options.scss */ "./src/app/customiser/scss/options.scss")).default ]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _services_design_service__WEBPACK_IMPORTED_MODULE_8__["DesignService"], _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_7__["CustomiserOptionsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"] ]) ], CustomFlagOptionComponent);
    },
    "./src/app/customiser/options/custom-image-option/custom-image-option.component.scss": 
    /*!*******************************************************************************************!*\
  !*** ./src/app/customiser/options/custom-image-option/custom-image-option.component.scss ***!
  \*******************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '.swatch {\n  line-height: 0;\n  display: block;\n}\n\n.swatch-colour {\n  width: 100%;\n  height: 100%;\n}\n\n.material-group .header {\n  padding: 0.5rem 0;\n}\n\n.material-group .header h4 {\n  font-size: 14px;\n  font-size: 0.875rem;\n  line-height: 1;\n  font-weight: 400;\n  text-transform: inherit;\n  font-style: italic;\n  margin: 0;\n}\n\n.material-colours {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n\n.material-colours .material {\n  -webkit-flex: 0 0 25%;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  max-width: 25%;\n  min-width: auto;\n  text-align: center;\n  cursor: pointer;\n  position: relative;\n  line-height: 0;\n  padding: 1px;\n}\n\n.material-colours .material .info {\n  padding: 0.1rem;\n  text-align: center;\n  line-height: 1;\n}\n\n.material-colours .material .info h4 {\n  font-family: "Roboto", sans-serif;\n  font-size: 9px;\n  font-size: 0.5625rem;\n  line-height: 1.1111111111;\n  margin: 0;\n}\n\n.material-colours .material .info h4.price {\n  font-weight: bold;\n}\n\n.material-colours .material.large {\n  -webkit-flex: 0 0 50%;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.material-colours .selected {\n  background-color: #63b20b;\n}\n\n.material-colours ::ng-deep img {\n  width: 100%;\n  height: auto;\n}\n\n:host {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  position: relative;\n}\n\n.graphic-sizes {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin-bottom: 1rem;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n\n.graphic-sizes .option {\n  margin: 5px 0;\n  -webkit-flex: 0 1 50%;\n      -ms-flex: 0 1 50%;\n          flex: 0 1 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvb3B0aW9ucy9jdXN0b20taW1hZ2Utb3B0aW9uL0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXGFwcFxcY3VzdG9taXNlclxcc2Nzc1xcc3dhdGNoLnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b21pc2VyL29wdGlvbnMvY3VzdG9tLWltYWdlLW9wdGlvbi9jdXN0b20taW1hZ2Utb3B0aW9uLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9taXNlci9vcHRpb25zL2N1c3RvbS1pbWFnZS1vcHRpb24vQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcc2Nzc1xcX21peGlucy5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9taXNlci9vcHRpb25zL2N1c3RvbS1pbWFnZS1vcHRpb24vQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9taXNlci9vcHRpb25zL2N1c3RvbS1pbWFnZS1vcHRpb24vQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcYXBwXFxjdXN0b21pc2VyXFxvcHRpb25zXFxjdXN0b20taW1hZ2Utb3B0aW9uXFxjdXN0b20taW1hZ2Utb3B0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUNGRjs7QURJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDREY7O0FES0U7RUFDRSxpQkFBQTtBQ0ZKOztBREdJO0VFdUJGLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBSFk7RUZwQlIsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0NOOztBRElBO0VBQ0UscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSwyQkFBQTtNQUFBLHVCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtNQUFBLG1CQUFBO1VBQUEsZUFBQTtBQ0RGOztBREVFO0VBQ0UscUJBQUE7TUFBQSxpQkFBQTtVQUFBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNBSjs7QURDSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDTjs7QURBTTtFQUNFLGlDR2xDTTtFRDZCWixjQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFIWTtFRlFOLFNBQUE7QUNJUjs7QURIUTtFQUNFLGlCQUFBO0FDS1Y7O0FEREk7RUFDRSxxQkFBQTtNQUFBLGlCQUFBO1VBQUEsYUFBQTtFQUNBLGNBQUE7QUNHTjs7QURBRTtFQUNFLHlCR25ESTtBRnFEUjs7QURBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDRUo7O0FHN0RBO0VBQ0UscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtNQUFBLDBCQUFBO1VBQUEsc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUhnRUY7O0FHN0RBO0VBQ0UscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSwyQkFBQTtNQUFBLHVCQUFBO1VBQUEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO01BQUEsbUJBQUE7VUFBQSxlQUFBO0FIZ0VGOztBRy9ERTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtNQUFBLGlCQUFBO1VBQUEsYUFBQTtBSGlFSiIsImZpbGUiOiJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b21pc2VyL29wdGlvbnMvY3VzdG9tLWltYWdlLW9wdGlvbi9jdXN0b20taW1hZ2Utb3B0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcclxuQGltcG9ydCAnbWl4aW5zJztcclxuXHJcbi5zd2F0Y2gge1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5zd2F0Y2gtY29sb3VyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXRlcmlhbC1ncm91cCB7XHJcbiAgLmhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcclxuICAgIGg0IHtcclxuICAgICAgQGluY2x1ZGUgZm9udC1zaXplKDE0LCAxNCk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tYXRlcmlhbC1jb2xvdXJzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIC5tYXRlcmlhbCB7XHJcbiAgICBmbGV4OiAwIDAgMjUlO1xyXG4gICAgbWF4LXdpZHRoOiAyNSU7XHJcbiAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIC5pbmZvIHtcclxuICAgICAgcGFkZGluZzogMC4xcmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICBoNCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRkZWZhdWx0Rm9udDtcclxuICAgICAgICBAaW5jbHVkZSBmb250LXNpemUoOSwgMTApO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAmLnByaWNlIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5sYXJnZSB7XHJcbiAgICAgIGZsZXg6IDAgMCA1MCU7XHJcbiAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxufVxyXG4iLCIuc3dhdGNoIHtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3dhdGNoLWNvbG91ciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tYXRlcmlhbC1ncm91cCAuaGVhZGVyIHtcbiAgcGFkZGluZzogMC41cmVtIDA7XG59XG4ubWF0ZXJpYWwtZ3JvdXAgLmhlYWRlciBoNCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1hdGVyaWFsLWNvbG91cnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ubWF0ZXJpYWwtY29sb3VycyAubWF0ZXJpYWwge1xuICBmbGV4OiAwIDAgMjUlO1xuICBtYXgtd2lkdGg6IDI1JTtcbiAgbWluLXdpZHRoOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcGFkZGluZzogMXB4O1xufVxuLm1hdGVyaWFsLWNvbG91cnMgLm1hdGVyaWFsIC5pbmZvIHtcbiAgcGFkZGluZzogMC4xcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLm1hdGVyaWFsLWNvbG91cnMgLm1hdGVyaWFsIC5pbmZvIGg0IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBmb250LXNpemU6IDAuNTYyNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMTExMTExMTExMTtcbiAgbWFyZ2luOiAwO1xufVxuLm1hdGVyaWFsLWNvbG91cnMgLm1hdGVyaWFsIC5pbmZvIGg0LnByaWNlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWF0ZXJpYWwtY29sb3VycyAubWF0ZXJpYWwubGFyZ2Uge1xuICBmbGV4OiAwIDAgNTAlO1xuICBtYXgtd2lkdGg6IDUwJTtcbn1cbi5tYXRlcmlhbC1jb2xvdXJzIC5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2M2IyMGI7XG59XG4ubWF0ZXJpYWwtY29sb3VycyA6Om5nLWRlZXAgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmdyYXBoaWMtc2l6ZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZ3JhcGhpYy1zaXplcyAub3B0aW9uIHtcbiAgbWFyZ2luOiA1cHggMDtcbiAgZmxleDogMCAxIDUwJTtcbn0iLCJAbWl4aW4gZmx1aWQtdHlwZSgkcHJvcGVydGllcywgJG1pbi12dywgJG1heC12dywgJG1pbi12YWx1ZSwgJG1heC12YWx1ZSkge1xyXG4gIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAjeyRwcm9wZXJ0eX06ICRtaW4tdmFsdWU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWluLXZ3KSB7XHJcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgICAjeyRwcm9wZXJ0eX06IGNhbGMoXHJcbiAgICAgICAgI3skbWluLXZhbHVlfSArICN7c3RyaXAtdW5pdCgkbWF4LXZhbHVlIC0gJG1pbi12YWx1ZSl9ICpcclxuICAgICAgICAgIChcclxuICAgICAgICAgICAgMTAwdncgLSAjeyRtaW4tdnd9XHJcbiAgICAgICAgICApIC8gI3tzdHJpcC11bml0KCRtYXgtdncgLSAkbWluLXZ3KX1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtYXgtdncpIHtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgICN7JHByb3BlcnR5fTogJG1heC12YWx1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBzdHJpcC11bml0KCR2YWx1ZSkge1xyXG4gIEByZXR1cm4gJHZhbHVlIC8gKCR2YWx1ZSAqIDAgKyAxKTtcclxufVxyXG5cclxuQG1peGluIHdyYXBwZXIoJHdpZHRoOjE0NDBweCkge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAkd2lkdGg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMS41cmVtO1xyXG59XHJcblxyXG5AbWl4aW4gZm9udC1zaXplKCRmb250U2l6ZSwgJGxpbmVIZWlnaHQ6IDEpIHtcclxuICAkcmVtVmFsdWU6ICgkZm9udFNpemUgLyAxNik7XHJcbiAgJHB4VmFsdWU6ICRmb250U2l6ZTtcclxuICAkbGluZVZhbHVlOiAoJGxpbmVIZWlnaHQgLyAkZm9udFNpemUpO1xyXG4gIGZvbnQtc2l6ZTogJHB4VmFsdWUgKyBweDtcclxuICBmb250LXNpemU6ICRyZW1WYWx1ZSArIHJlbTtcclxuICBsaW5lLWhlaWdodDogJGxpbmVWYWx1ZTtcclxufVxyXG4iLCIvL0NvbG9yc1xyXG4kYmxhY2s6ICMzNjM2MzY7XHJcbiR2ZXJ5bGlnaHRncmV5OiAjZjVmNWY1O1xyXG4kbGlnaHRncmV5OiAjZWRlZGVkO1xyXG4kbWlkZ3JleTogIzk5OTtcclxuJGRhcmtncmV5OiAjNjY2O1xyXG4kZ3JlZW46ICM2M2IyMGI7XHJcbiRyZWQ6ICNjZTA1MDU7XHJcbi8vRm9udHNcclxuJGRlZmF1bHRGb250OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuJGRpc3BsYXlGb250OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuIiwiQGltcG9ydCAnLi4vLi4vc2Nzcy9zd2F0Y2gnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZ3JhcGhpYy1zaXplcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIC5vcHRpb24ge1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICAgIGZsZXg6IDAgMSA1MCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */';
    },
    "./src/app/customiser/options/custom-image-option/custom-image-option.component.ts": 
    /*!*****************************************************************************************!*\
  !*** ./src/app/customiser/options/custom-image-option/custom-image-option.component.ts ***!
  \*****************************************************************************************/
    /*! exports provided: CustomImageOptionComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "CustomImageOptionComponent", (function() {
            return CustomImageOptionComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
        var _app_route_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/route.animation */ "./src/app/route.animation.ts");
        var _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/api.service */ "./src/app/core/services/api.service.ts");
        var _global_untilDestroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @global/untilDestroy */ "../global/untilDestroy/index.ts");
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
        var _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/customiser-options.service */ "./src/app/customiser/services/customiser-options.service.ts");
        var _services_design_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/design.service */ "./src/app/customiser/services/design.service.ts");
        var _reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../reducers */ "./src/app/customiser/reducers/index.ts");
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
        var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
        let CustomImageOptionComponent = class CustomImageOptionComponent {
            constructor(api, designService, optionsService, route, store, fb) {
                this.api = api;
                this.designService = designService;
                this.optionsService = optionsService;
                this.route = route;
                this.store = store;
                this.fb = fb;
                this.canDelete = false;
                this.hasSizes = false;
                this.price = 0;
                this.customSettings$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_9__["getCustomSettings"]));
                this.logoSizes$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_9__["getLogoSizes"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((resp => {
                    if (resp) {
                        this.hasSizes = true;
                    }
                    this.sizesSetup();
                })));
            }
            get slideIn() {
                return "";
            }
            ngOnInit() {
                this.loadLogos();
            }
            loadLogos() {
                this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((params => this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_9__["getDesignLogoById"](params["id"]))))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((logo => {
                    if (logo) {
                        this.selectedLogo = logo;
                        this.currentLogo = this.selectedLogo;
                        this.canDelete = true;
                        this.price = this.selectedLogo.price;
                    }
                    this.logoForm = this.fb.group({
                        instructions: [ this.selectedLogo && this.selectedLogo.instructions ? this.selectedLogo.instructions : null ],
                        size: [ this.selectedLogo && this.selectedLogo.size ? this.selectedLogo.size : null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required ]
                    });
                    return this.api.find("logo", {
                        $limit: 100,
                        $sort: {
                            weight: 1
                        }
                    }, false);
                })), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_5__["untilComponentDestroyed"])(this)).subscribe((resp => {
                    this.logos = resp.data.filter((d => d.image));
                }));
            }
            sizesSetup() {
                if (!this.hasSizes) {
                    this.logoForm.get("size").setValidators(null);
                    this.logoForm.get("size").updateValueAndValidity();
                    this.customSettings$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((resp => this.price = resp.logo_price)), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_5__["untilComponentDestroyed"])(this)).subscribe();
                } else {
                    this.logoForm.get("size").valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((value => this.logoSizes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((sizes => sizes.find((s => s.title === value))))))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((findSize => findSize && findSize.price ? findSize.price : 10)), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_5__["untilComponentDestroyed"])(this)).subscribe((resp => this.price = resp));
                }
            }
            get validated() {
                return this.selectedLogo && this.logoForm.get("size").valid;
            }
            logoSelected(logo) {
                if (this.selectedLogo) {
                    this.selectedLogo.image = logo;
                    return;
                }
                this.selectedLogo = {
                    price: 0,
                    size: null,
                    image: logo,
                    position: {
                        x: 300 - 16 * 2.5,
                        y: 100,
                        width: 32,
                        height: 32,
                        scale: 2.5,
                        rotate: 0,
                        aspect_ratio: 1
                    }
                };
            }
            save() {
                if (this.currentLogo) {
                    this.designService.updateSub(true, {
                        "logos.$.image": this.selectedLogo.image,
                        "logos.$.size": this.logoForm.get("size").value,
                        "logos.$.instructions": this.logoForm.get("instructions").value
                    }, {
                        "logos._id": this.selectedLogo._id
                    });
                } else {
                    this.selectedLogo.instructions = this.logoForm.get("instructions").value;
                    this.selectedLogo.size = this.logoForm.get("size").value;
                    const data = {
                        logos: this.selectedLogo
                    };
                    this.designService.saveOption(true, {
                        $addToSet: data
                    });
                }
            }
            delete() {
                this.designService.saveOption(true, {
                    $pull: {
                        logos: {
                            _id: this.selectedLogo._id
                        }
                    }
                });
            }
            cancel() {
                if (this.currentLogo) {
                    this.selectedLogo.image = this.currentLogo.image;
                }
                this.backToMenu();
            }
            backToMenu() {
                this.optionsService.backToMenu();
                this.designService.selectedObject = null;
                this.selectedLogo = null;
            }
            ngOnDestroy() {}
        };
        CustomImageOptionComponent.ctorParameters = () => [ {
            type: _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
            type: _services_design_service__WEBPACK_IMPORTED_MODULE_8__["DesignService"]
        }, {
            type: _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_7__["CustomiserOptionsService"]
        }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"]
        }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"]
        } ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("@fadeInAnimation"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []) ], CustomImageOptionComponent.prototype, "slideIn", null);
        CustomImageOptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bx-custom-image-option",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-image-option.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-image-option/custom-image-option.component.html")).default,
            animations: [ _app_route_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInAnimation"] ],
            styles: [ tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-image-option.component.scss */ "./src/app/customiser/options/custom-image-option/custom-image-option.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../scss/options.scss */ "./src/app/customiser/scss/options.scss")).default ]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _services_design_service__WEBPACK_IMPORTED_MODULE_8__["DesignService"], _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_7__["CustomiserOptionsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"] ]) ], CustomImageOptionComponent);
    },
    "./src/app/customiser/options/custom-muay-thai/custom-muay-thai.component.scss": 
    /*!*************************************************************************************!*\
  !*** ./src/app/customiser/options/custom-muay-thai/custom-muay-thai.component.scss ***!
  \*************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b21pc2VyL29wdGlvbnMvY3VzdG9tLW11YXktdGhhaS9jdXN0b20tbXVheS10aGFpLmNvbXBvbmVudC5zY3NzIn0= */";
    },
    "./src/app/customiser/options/custom-muay-thai/custom-muay-thai.component.ts": 
    /*!***********************************************************************************!*\
  !*** ./src/app/customiser/options/custom-muay-thai/custom-muay-thai.component.ts ***!
  \***********************************************************************************/
    /*! exports provided: CustomMuayThaiComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "CustomMuayThaiComponent", (function() {
            return CustomMuayThaiComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
        var _app_route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/route.animation */ "./src/app/route.animation.ts");
        var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _app_customiser_services_customiser_options_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/customiser/services/customiser-options.service */ "./src/app/customiser/services/customiser-options.service.ts");
        var _app_customiser_services_svg_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/customiser/services/svg.service */ "./src/app/customiser/services/svg.service.ts");
        var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
        var _global_untilDestroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @global/untilDestroy */ "../global/untilDestroy/index.ts");
        var _app_customiser_services_design_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/customiser/services/design.service */ "./src/app/customiser/services/design.service.ts");
        var _reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../reducers */ "./src/app/customiser/reducers/index.ts");
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
        var _w11k_ngx_componentdestroyed__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @w11k/ngx-componentdestroyed */ "../../node_modules/@w11k/ngx-componentdestroyed/dist/es2015/index.js");
        let CustomMuayThaiComponent = class CustomMuayThaiComponent {
            constructor(optionsService, svgService, designService, route, store) {
                this.optionsService = optionsService;
                this.svgService = svgService;
                this.designService = designService;
                this.route = route;
                this.store = store;
                this.fillPanel = "MuayThaiFill";
                this.outlinePanel = "MuayThaiOutline";
                this.canDelete = false;
                this.hideOptional = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"];
                this.customSettings$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_9__["getCustomSettings"]));
                this.muay_thai$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_9__["getMuayThai"]));
                this.hideOptional.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])((() => this.muay_thai$)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])((settings => settings.forEach((setting => {
                    this.svgService.hideOptional(setting);
                })))), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_7__["untilComponentDestroyed"])(this)).subscribe();
            }
            get slideIn() {
                return "";
            }
            get validated() {
                return this.selectedFill && this.selectedOutline;
            }
            get fillMaterialsGroups() {
                return this.muay_thai$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])((settings => settings.find((mt => mt.panel === this.fillPanel)).material_groups)));
            }
            get outlineMaterialsGroups() {
                return this.muay_thai$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])((settings => settings.find((mt => mt.panel === this.outlinePanel)).material_groups)));
            }
            ngOnInit() {
                this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_9__["getDesignMuayThai"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(Object(_w11k_ngx_componentdestroyed__WEBPACK_IMPORTED_MODULE_12__["componentDestroyed"])(this))).subscribe((muayThai => {
                    if (muayThai) {
                        this.currentFill = muayThai.fill;
                        this.currentOutline = muayThai.outline;
                        this.selectedFill = muayThai.fill;
                        this.selectedOutline = muayThai.outline;
                        this.canDelete = true;
                    }
                }));
            }
            colourFillSelected(material, optional = true) {
                this.selectedFill = material;
                this.svgService.addColor(material, this.fillPanel, true, optional);
            }
            colourOutlineSelected(material, optional = true) {
                this.selectedOutline = material;
                this.svgService.addColor(material, this.outlinePanel, true, optional);
            }
            save() {
                this.designService.saveOption(true, {
                    muay_thai: {
                        fill: this.selectedFill,
                        outline: this.selectedOutline,
                        price: 0
                    }
                });
            }
            cancel() {
                if (this.currentFill && this.currentOutline) {
                    this.colourFillSelected(this.currentFill, false);
                    this.colourOutlineSelected(this.currentOutline, false);
                } else {
                    this.hideOptional.next();
                }
                this.backToMenu();
            }
            delete() {
                this.designService.saveOption(true, {
                    muay_thai: null
                });
                this.hideOptional.next();
            }
            backToMenu() {
                this.optionsService.backToMenu();
            }
            ngOnDestroy() {}
        };
        CustomMuayThaiComponent.ctorParameters = () => [ {
            type: _app_customiser_services_customiser_options_service__WEBPACK_IMPORTED_MODULE_4__["CustomiserOptionsService"]
        }, {
            type: _app_customiser_services_svg_service__WEBPACK_IMPORTED_MODULE_5__["SvgService"]
        }, {
            type: _app_customiser_services_design_service__WEBPACK_IMPORTED_MODULE_8__["DesignService"]
        }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"]
        } ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"])("@fadeInAnimation"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []) ], CustomMuayThaiComponent.prototype, "slideIn", null);
        CustomMuayThaiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "bx-custom-muay-thai",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-muay-thai.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-muay-thai/custom-muay-thai.component.html")).default,
            animations: [ _app_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"] ],
            styles: [ tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-muay-thai.component.scss */ "./src/app/customiser/options/custom-muay-thai/custom-muay-thai.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../scss/options.scss */ "./src/app/customiser/scss/options.scss")).default ]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _app_customiser_services_customiser_options_service__WEBPACK_IMPORTED_MODULE_4__["CustomiserOptionsService"], _app_customiser_services_svg_service__WEBPACK_IMPORTED_MODULE_5__["SvgService"], _app_customiser_services_design_service__WEBPACK_IMPORTED_MODULE_8__["DesignService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] ]) ], CustomMuayThaiComponent);
    },
    "./src/app/customiser/options/custom-name-option/custom-name-decorative.component.ts": 
    /*!*******************************************************************************************!*\
  !*** ./src/app/customiser/options/custom-name-option/custom-name-decorative.component.ts ***!
  \*******************************************************************************************/
    /*! exports provided: CustomNameDecorativeComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "CustomNameDecorativeComponent", (function() {
            return CustomNameDecorativeComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _global_untilDestroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @global/untilDestroy */ "../global/untilDestroy/index.ts");
        var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../reducers */ "./src/app/customiser/reducers/index.ts");
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
        let CustomNameDecorativeComponent = class CustomNameDecorativeComponent {
            constructor(store) {
                this.store = store;
                this.nameColourFillSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"];
                this.nameColourOutlineSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"];
                store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["getProduct"]), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_3__["untilComponentDestroyed"])(this)).subscribe((product => {
                    this.product = product;
                }));
            }
            ngOnInit() {}
            colourFillSelected(material) {
                this.nameColourFillSelected.emit(material);
            }
            colourOutlineSelected(material) {
                this.nameColourOutlineSelected.emit(material);
            }
            ngOnDestroy() {}
        };
        CustomNameDecorativeComponent.ctorParameters = () => [ {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        } ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) ], CustomNameDecorativeComponent.prototype, "form", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], CustomNameDecorativeComponent.prototype, "type", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], CustomNameDecorativeComponent.prototype, "selectedFill", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], CustomNameDecorativeComponent.prototype, "selectedOutline", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]) ], CustomNameDecorativeComponent.prototype, "nameColourFillSelected", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]) ], CustomNameDecorativeComponent.prototype, "nameColourOutlineSelected", void 0);
        CustomNameDecorativeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "bx-custom-name-decorative",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-name-decorative.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-name-option/custom-name-decorative.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            styles: [ tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../scss/options.scss */ "./src/app/customiser/scss/options.scss")).default ]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] ]) ], CustomNameDecorativeComponent);
    },
    "./src/app/customiser/options/custom-name-option/custom-name-option-finish.component.scss": 
    /*!************************************************************************************************!*\
  !*** ./src/app/customiser/options/custom-name-option/custom-name-option-finish.component.scss ***!
  \************************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '.name-finish {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 0.5rem;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n.invalid.name-finish li {\n  border-color: #f44336;\n}\n.name-finish li {\n  width: 50%;\n  font-family: "Oswald", sans-serif;\n  text-transform: uppercase;\n  background-color: white;\n  padding: 0.5rem;\n  text-align: center;\n  font-size: 14px;\n  font-size: 0.875rem;\n  line-height: 1;\n  border: 1px solid #ededed;\n  cursor: pointer;\n  margin: -1px -1px 0 0;\n  color: #363636;\n}\n.name-finish li.selected, .name-finish li:hover {\n  background-color: #63b20b;\n  color: white;\n}\n.add-crystals {\n  margin: 1rem 0;\n}\n.name-finish {\n  margin-top: 0.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvb3B0aW9ucy9jdXN0b20tbmFtZS1vcHRpb24vQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcc2Nzc1xcX3BhcnRpYWwuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvb3B0aW9ucy9jdXN0b20tbmFtZS1vcHRpb24vY3VzdG9tLW5hbWUtb3B0aW9uLWZpbmlzaC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvb3B0aW9ucy9jdXN0b20tbmFtZS1vcHRpb24vQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9taXNlci9vcHRpb25zL2N1c3RvbS1uYW1lLW9wdGlvbi9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxzY3NzXFxfbWl4aW5zLnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b21pc2VyL29wdGlvbnMvY3VzdG9tLW5hbWUtb3B0aW9uL0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXGFwcFxcY3VzdG9taXNlclxcb3B0aW9uc1xcY3VzdG9tLW5hbWUtb3B0aW9uXFxjdXN0b20tbmFtZS1vcHRpb24tZmluaXNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCQUFBO01BQUEsbUJBQUE7VUFBQSxlQUFBO0FDRkY7QURJSTtFQUNFLHFCQUFBO0FDRk47QURLRTtFQUNFLFVBQUE7RUFDQSxpQ0VOVTtFRk9WLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUdrQkYsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FIWTtFSGZWLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0V4Qkk7QUR1QlI7QURFSTtFQUVFLHlCRXRCRTtFRnVCRixZQUFBO0FDRE47QUcxQkE7RUFDRSxjQUFBO0FINkJGO0FHMUJBO0VBRUUsa0JBQUE7QUg0QkYiLCJmaWxlIjoicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9taXNlci9vcHRpb25zL2N1c3RvbS1uYW1lLW9wdGlvbi9jdXN0b20tbmFtZS1vcHRpb24tZmluaXNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcclxuQGltcG9ydCAnbWl4aW5zJztcclxuXHJcbiVidXR0b24tZ3JvdXAtc2VsZWN0IHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwIDAgMC41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gICYuaW52YWxpZCB7XHJcbiAgICBsaSB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI2Y0NDMzNjtcclxuICAgIH1cclxuICB9XHJcbiAgbGkge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAkZGlzcGxheUZvbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBAaW5jbHVkZSBmb250LXNpemUoMTQsIDE0KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodGdyZXk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IC0xcHggLTFweCAwIDA7XHJcbiAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgJi5zZWxlY3RlZCxcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLm5hbWUtZmluaXNoIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDAgMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uaW52YWxpZC5uYW1lLWZpbmlzaCBsaSB7XG4gIGJvcmRlci1jb2xvcjogI2Y0NDMzNjtcbn1cbi5uYW1lLWZpbmlzaCBsaSB7XG4gIHdpZHRoOiA1MCU7XG4gIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGVkZWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAtMXB4IC0xcHggMCAwO1xuICBjb2xvcjogIzM2MzYzNjtcbn1cbi5uYW1lLWZpbmlzaCBsaS5zZWxlY3RlZCwgLm5hbWUtZmluaXNoIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzYjIwYjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWRkLWNyeXN0YWxzIHtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG5cbi5uYW1lLWZpbmlzaCB7XG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcbn0iLCIvL0NvbG9yc1xyXG4kYmxhY2s6ICMzNjM2MzY7XHJcbiR2ZXJ5bGlnaHRncmV5OiAjZjVmNWY1O1xyXG4kbGlnaHRncmV5OiAjZWRlZGVkO1xyXG4kbWlkZ3JleTogIzk5OTtcclxuJGRhcmtncmV5OiAjNjY2O1xyXG4kZ3JlZW46ICM2M2IyMGI7XHJcbiRyZWQ6ICNjZTA1MDU7XHJcbi8vRm9udHNcclxuJGRlZmF1bHRGb250OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuJGRpc3BsYXlGb250OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuIiwiQG1peGluIGZsdWlkLXR5cGUoJHByb3BlcnRpZXMsICRtaW4tdncsICRtYXgtdncsICRtaW4tdmFsdWUsICRtYXgtdmFsdWUpIHtcclxuICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgI3skcHJvcGVydHl9OiAkbWluLXZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1pbi12dykge1xyXG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcclxuICAgICAgI3skcHJvcGVydHl9OiBjYWxjKFxyXG4gICAgICAgICN7JG1pbi12YWx1ZX0gKyAje3N0cmlwLXVuaXQoJG1heC12YWx1ZSAtICRtaW4tdmFsdWUpfSAqXHJcbiAgICAgICAgICAoXHJcbiAgICAgICAgICAgIDEwMHZ3IC0gI3skbWluLXZ3fVxyXG4gICAgICAgICAgKSAvICN7c3RyaXAtdW5pdCgkbWF4LXZ3IC0gJG1pbi12dyl9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWF4LXZ3KSB7XHJcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgICAjeyRwcm9wZXJ0eX06ICRtYXgtdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AZnVuY3Rpb24gc3RyaXAtdW5pdCgkdmFsdWUpIHtcclxuICBAcmV0dXJuICR2YWx1ZSAvICgkdmFsdWUgKiAwICsgMSk7XHJcbn1cclxuXHJcbkBtaXhpbiB3cmFwcGVyKCR3aWR0aDoxNDQwcHgpIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1heC13aWR0aDogJHdpZHRoO1xyXG4gIG1hcmdpbjogMCBhdXRvIDEuNXJlbTtcclxufVxyXG5cclxuQG1peGluIGZvbnQtc2l6ZSgkZm9udFNpemUsICRsaW5lSGVpZ2h0OiAxKSB7XHJcbiAgJHJlbVZhbHVlOiAoJGZvbnRTaXplIC8gMTYpO1xyXG4gICRweFZhbHVlOiAkZm9udFNpemU7XHJcbiAgJGxpbmVWYWx1ZTogKCRsaW5lSGVpZ2h0IC8gJGZvbnRTaXplKTtcclxuICBmb250LXNpemU6ICRweFZhbHVlICsgcHg7XHJcbiAgZm9udC1zaXplOiAkcmVtVmFsdWUgKyByZW07XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lVmFsdWU7XHJcbn1cclxuIiwiQGltcG9ydCAncGFydGlhbCc7XHJcblxyXG4uYWRkLWNyeXN0YWxzIHtcclxuICBtYXJnaW46IDFyZW0gMDtcclxufVxyXG5cclxuLm5hbWUtZmluaXNoIHtcclxuICBAZXh0ZW5kICVidXR0b24tZ3JvdXAtc2VsZWN0O1xyXG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcclxufVxyXG4iXX0= */';
    },
    "./src/app/customiser/options/custom-name-option/custom-name-option-finish.component.ts": 
    /*!**********************************************************************************************!*\
  !*** ./src/app/customiser/options/custom-name-option/custom-name-option-finish.component.ts ***!
  \**********************************************************************************************/
    /*! exports provided: CustomNameOptionFinishComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "CustomNameOptionFinishComponent", (function() {
            return CustomNameOptionFinishComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
        var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../reducers */ "./src/app/customiser/reducers/index.ts");
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
        var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/stepper */ "../../node_modules/@angular/material/esm2015/stepper.js");
        let CustomNameOptionFinishComponent = class CustomNameOptionFinishComponent {
            constructor(store) {
                this.nameColourCrystalSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
                this.nameFinishSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
                this.customSettings$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["getCustomSettings"]));
            }
            finishSelected(finish) {
                this.form.get("finish").setValue(finish._id);
                this.nameFinishSelected.emit(finish);
            }
            colourCrystalSelected(material) {
                this.nameColourCrystalSelected.emit(material);
            }
        };
        CustomNameOptionFinishComponent.ctorParameters = () => [ {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        } ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) ], CustomNameOptionFinishComponent.prototype, "form", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStep"]) ], CustomNameOptionFinishComponent.prototype, "step", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], CustomNameOptionFinishComponent.prototype, "type", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], CustomNameOptionFinishComponent.prototype, "selectedFinish", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], CustomNameOptionFinishComponent.prototype, "selectedCrystal", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]) ], CustomNameOptionFinishComponent.prototype, "nameColourCrystalSelected", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]) ], CustomNameOptionFinishComponent.prototype, "nameFinishSelected", void 0);
        CustomNameOptionFinishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bx-custom-name-option-finish",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-name-option-finish.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-name-option/custom-name-option-finish.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [ tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-name-option-finish.component.scss */ "./src/app/customiser/options/custom-name-option/custom-name-option-finish.component.scss")).default ]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] ]) ], CustomNameOptionFinishComponent);
    },
    "./src/app/customiser/options/custom-name-option/custom-name-option-patch.component.ts": 
    /*!*********************************************************************************************!*\
  !*** ./src/app/customiser/options/custom-name-option/custom-name-option-patch.component.ts ***!
  \*********************************************************************************************/
    /*! exports provided: CustomNameOptionPatchComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "CustomNameOptionPatchComponent", (function() {
            return CustomNameOptionPatchComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
        let CustomNameOptionPatchComponent = class CustomNameOptionPatchComponent {
            constructor() {
                this.namePatchSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
            }
            patchSelected(material) {
                this.namePatchSelected.emit(material);
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) ], CustomNameOptionPatchComponent.prototype, "form", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], CustomNameOptionPatchComponent.prototype, "type", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], CustomNameOptionPatchComponent.prototype, "selectedPatch", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]) ], CustomNameOptionPatchComponent.prototype, "namePatchSelected", void 0);
        CustomNameOptionPatchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bx-custom-name-option-patch",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-name-option-patch.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-name-option/custom-name-option-patch.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []) ], CustomNameOptionPatchComponent);
    },
    "./src/app/customiser/options/custom-name-option/custom-name-option.component.scss": 
    /*!*****************************************************************************************!*\
  !*** ./src/app/customiser/options/custom-name-option/custom-name-option.component.scss ***!
  \*****************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '.name-style, .fonts {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 0.5rem;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n.invalid.name-style li, .invalid.fonts li {\n  border-color: #f44336;\n}\n.name-style li, .fonts li {\n  width: 50%;\n  font-family: "Oswald", sans-serif;\n  text-transform: uppercase;\n  background-color: white;\n  padding: 0.5rem;\n  text-align: center;\n  font-size: 14px;\n  font-size: 0.875rem;\n  line-height: 1;\n  border: 1px solid #ededed;\n  cursor: pointer;\n  margin: -1px -1px 0 0;\n  color: #363636;\n}\n.name-style li.selected, .fonts li.selected, .name-style li:hover, .fonts li:hover {\n  background-color: #63b20b;\n  color: white;\n}\n@font-face {\n  font-family: "oswaldcustom";\n  src: url("https://cdn2.boxxerworld.com/assets/fonts/oswald-semibold.woff2") format("woff2"), url("https://cdn2.boxxerworld.com/assets/fonts/oswald-semibold.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "monte";\n  src: url("https://cdn2.boxxerworld.com/assets/fonts/diamante-serial-bold-webfont.eot");\n  src: url("https://cdn2.boxxerworld.com/assets/fonts/diamante-serial-bold-webfont.eot?#iefix") format("embedded-opentype"), url("https://cdn2.boxxerworld.com/assets/fonts/diamante-serial-bold-webfont.woff2") format("woff2"), url("https://cdn2.boxxerworld.com/assets/fonts/diamante-serial-bold-webfont.woff") format("woff"), url("https://cdn2.boxxerworld.com/assets/fonts/diamante-serial-bold-webfont.ttf") format("truetype"), url("https://cdn2.boxxerworld.com/assets/fonts/diamante-serial-bold-webfont.svg#diamante-serialbold") format("svg");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "college";\n  src: url("https://cdn2.boxxerworld.com/assets/fonts/college_block-webfont.eot");\n  src: url("https://cdn2.boxxerworld.com/assets/fonts/college_block-webfont.eot?#iefix") format("embedded-opentype"), url("https://cdn2.boxxerworld.com/assets/fonts/college_block-webfont.woff2") format("woff2"), url("https://cdn2.boxxerworld.com/assets/fonts/college_block-webfont.woff") format("woff"), url("https://cdn2.boxxerworld.com/assets/fonts/college_block-webfont.ttf") format("truetype"), url("https://cdn2.boxxerworld.com/assets/fonts/college_block-webfont.svg#college_blockregular") format("svg");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "ballantines";\n  src: url("https://cdn2.boxxerworld.com/assets/fonts/ballantines-bold-webfont.eot");\n  src: url("https://cdn2.boxxerworld.com/assets/fonts/ballantines-bold-webfont.eot?#iefix") format("embedded-opentype"), url("https://cdn2.boxxerworld.com/assets/fonts/ballantines-bold-webfont.woff2") format("woff2"), url("https://cdn2.boxxerworld.com/assets/fonts/ballantines-bold-webfont.woff") format("woff"), url("https://cdn2.boxxerworld.com/assets/fonts/ballantines-bold-webfont.ttf") format("truetype"), url("https://cdn2.boxxerworld.com/assets/fonts/ballantines-bold-webfont.svg#ballantinesbold") format("svg");\n  font-weight: normal;\n  font-style: normal;\n}\n:host {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  position: relative;\n}\n.svg-text-wrapper {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: #f5f5f5;\n  padding: 0.5rem;\n  z-index: 99;\n}\n.svg-text-wrapper .btn-text {\n  display: block;\n  margin: 0.5rem auto;\n}\n.svg-text-wrapper svg {\n  overflow: visible;\n}\n.text-background {\n  fill: #f5f5f5;\n}\n.fonts li {\n  font-size: 18px;\n  font-size: 1.125rem;\n  line-height: 1;\n}\n.fonts li.Arial {\n  font-family: Arial;\n  font-weight: bold;\n}\n.fonts li.monte {\n  font-family: "monte";\n}\n.fonts li.oswaldcustom {\n  font-family: "oswaldcustom";\n}\n.fonts li.college {\n  font-family: "college";\n}\n.fonts li.ballantines {\n  font-family: "ballantines";\n  text-transform: none;\n}\n.name-style {\n  margin-top: 1rem;\n}\n::ng-deep .mat-step-label .complete {\n  color: #63b20b;\n}\n::ng-deep .mat-step-icon {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvb3B0aW9ucy9jdXN0b20tbmFtZS1vcHRpb24vQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcc2Nzc1xcX3BhcnRpYWwuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvb3B0aW9ucy9jdXN0b20tbmFtZS1vcHRpb24vY3VzdG9tLW5hbWUtb3B0aW9uLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9taXNlci9vcHRpb25zL2N1c3RvbS1uYW1lLW9wdGlvbi9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b21pc2VyL29wdGlvbnMvY3VzdG9tLW5hbWUtb3B0aW9uL0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXHNjc3NcXF9taXhpbnMuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvb3B0aW9ucy9jdXN0b20tbmFtZS1vcHRpb24vQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcYXBwXFxjdXN0b21pc2VyXFxvcHRpb25zXFxjdXN0b20tbmFtZS1vcHRpb25cXGN1c3RvbS1uYW1lLW9wdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx1QkFBQTtNQUFBLG1CQUFBO1VBQUEsZUFBQTtBQ0ZGO0FESUk7RUFDRSxxQkFBQTtBQ0ZOO0FES0U7RUFDRSxVQUFBO0VBQ0EsaUNFTlU7RUZPVix5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VHa0JGLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBSFk7RUhmVix5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNFeEJJO0FEdUJSO0FERUk7RUFFRSx5QkV0QkU7RUZ1QkYsWUFBQTtBQ0ROO0FHeEJBO0VBQ0UsMkJBQUE7RUFDQSxpTEFBQTtFQUlBLG1CQUFBO0VBQ0Esa0JBQUE7QUh3QkY7QUdyQkE7RUFDRSxvQkFBQTtFQUNBLHNGQUFBO0VBQ0EsNGhCQUFBO0VBVUEsbUJBQUE7RUFDQSxrQkFBQTtBSGNGO0FHWEE7RUFDRSxzQkFBQTtFQUNBLCtFQUFBO0VBQ0EsMGZBQUE7RUFVQSxtQkFBQTtFQUNBLGtCQUFBO0FISUY7QUdEQTtFQUNFLDBCQUFBO0VBQ0Esa0ZBQUE7RUFDQSxvZ0JBQUE7RUFVQSxtQkFBQTtFQUNBLGtCQUFBO0FITkY7QUdTQTtFQUNFLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7TUFBQSwwQkFBQTtVQUFBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FIUEY7QUdVQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EseUJGekVjO0VFMEVkLGVBQUE7RUFDQSxXQUFBO0FIUEY7QUdRRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBSE5KO0FHUUU7RUFDRSxpQkFBQTtBSE5KO0FHVUE7RUFDRSxhRnRGYztBRCtFaEI7QUdZRTtFRHZEQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUhZO0FGa0RkO0FHU0U7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FIUEo7QUdTRTtFQUNFLG9CQUFBO0FIUEo7QUdTRTtFQUNFLDJCQUFBO0FIUEo7QUdTRTtFQUNFLHNCQUFBO0FIUEo7QUdTRTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7QUhQSjtBR1dBO0VBRUUsZ0JBQUE7QUhURjtBR2FFO0VBQ0UsY0ZwSEk7QUQwR1I7QUdjQTtFQUNFLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsK0JBQUE7TUFBQSxxQkFBQTtVQUFBLHVCQUFBO0VBQ0EsMkJBQUE7TUFBQSxzQkFBQTtVQUFBLG1CQUFBO0FIWEYiLCJmaWxlIjoicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9taXNlci9vcHRpb25zL2N1c3RvbS1uYW1lLW9wdGlvbi9jdXN0b20tbmFtZS1vcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICdtaXhpbnMnO1xyXG5cclxuJWJ1dHRvbi1ncm91cC1zZWxlY3Qge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDAgMCAwLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgJi5pbnZhbGlkIHtcclxuICAgIGxpIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZjQ0MzM2O1xyXG4gICAgfVxyXG4gIH1cclxuICBsaSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZm9udC1mYW1pbHk6ICRkaXNwbGF5Rm9udDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIEBpbmNsdWRlIGZvbnQtc2l6ZSgxNCwgMTQpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0Z3JleTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogLTFweCAtMXB4IDAgMDtcclxuICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAmLnNlbGVjdGVkLFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIubmFtZS1zdHlsZSwgLmZvbnRzIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDAgMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uaW52YWxpZC5uYW1lLXN0eWxlIGxpLCAuaW52YWxpZC5mb250cyBsaSB7XG4gIGJvcmRlci1jb2xvcjogI2Y0NDMzNjtcbn1cbi5uYW1lLXN0eWxlIGxpLCAuZm9udHMgbGkge1xuICB3aWR0aDogNTAlO1xuICBmb250LWZhbWlseTogXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlZGVkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogLTFweCAtMXB4IDAgMDtcbiAgY29sb3I6ICMzNjM2MzY7XG59XG4ubmFtZS1zdHlsZSBsaS5zZWxlY3RlZCwgLmZvbnRzIGxpLnNlbGVjdGVkLCAubmFtZS1zdHlsZSBsaTpob3ZlciwgLmZvbnRzIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzYjIwYjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwib3N3YWxkY3VzdG9tXCI7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9jZG4yLmJveHhlcndvcmxkLmNvbS9hc3NldHMvZm9udHMvb3N3YWxkLXNlbWlib2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL2NkbjIuYm94eGVyd29ybGQuY29tL2Fzc2V0cy9mb250cy9vc3dhbGQtc2VtaWJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwibW9udGVcIjtcbiAgc3JjOiB1cmwoXCJodHRwczovL2NkbjIuYm94eGVyd29ybGQuY29tL2Fzc2V0cy9mb250cy9kaWFtYW50ZS1zZXJpYWwtYm9sZC13ZWJmb250LmVvdFwiKTtcbiAgc3JjOiB1cmwoXCJodHRwczovL2NkbjIuYm94eGVyd29ybGQuY29tL2Fzc2V0cy9mb250cy9kaWFtYW50ZS1zZXJpYWwtYm9sZC13ZWJmb250LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcImh0dHBzOi8vY2RuMi5ib3h4ZXJ3b3JsZC5jb20vYXNzZXRzL2ZvbnRzL2RpYW1hbnRlLXNlcmlhbC1ib2xkLXdlYmZvbnQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vY2RuMi5ib3h4ZXJ3b3JsZC5jb20vYXNzZXRzL2ZvbnRzL2RpYW1hbnRlLXNlcmlhbC1ib2xkLXdlYmZvbnQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL2NkbjIuYm94eGVyd29ybGQuY29tL2Fzc2V0cy9mb250cy9kaWFtYW50ZS1zZXJpYWwtYm9sZC13ZWJmb250LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiaHR0cHM6Ly9jZG4yLmJveHhlcndvcmxkLmNvbS9hc3NldHMvZm9udHMvZGlhbWFudGUtc2VyaWFsLWJvbGQtd2ViZm9udC5zdmcjZGlhbWFudGUtc2VyaWFsYm9sZFwiKSBmb3JtYXQoXCJzdmdcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJjb2xsZWdlXCI7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9jZG4yLmJveHhlcndvcmxkLmNvbS9hc3NldHMvZm9udHMvY29sbGVnZV9ibG9jay13ZWJmb250LmVvdFwiKTtcbiAgc3JjOiB1cmwoXCJodHRwczovL2NkbjIuYm94eGVyd29ybGQuY29tL2Fzc2V0cy9mb250cy9jb2xsZWdlX2Jsb2NrLXdlYmZvbnQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiaHR0cHM6Ly9jZG4yLmJveHhlcndvcmxkLmNvbS9hc3NldHMvZm9udHMvY29sbGVnZV9ibG9jay13ZWJmb250LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL2NkbjIuYm94eGVyd29ybGQuY29tL2Fzc2V0cy9mb250cy9jb2xsZWdlX2Jsb2NrLXdlYmZvbnQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL2NkbjIuYm94eGVyd29ybGQuY29tL2Fzc2V0cy9mb250cy9jb2xsZWdlX2Jsb2NrLXdlYmZvbnQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoXCJodHRwczovL2NkbjIuYm94eGVyd29ybGQuY29tL2Fzc2V0cy9mb250cy9jb2xsZWdlX2Jsb2NrLXdlYmZvbnQuc3ZnI2NvbGxlZ2VfYmxvY2tyZWd1bGFyXCIpIGZvcm1hdChcInN2Z1wiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImJhbGxhbnRpbmVzXCI7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9jZG4yLmJveHhlcndvcmxkLmNvbS9hc3NldHMvZm9udHMvYmFsbGFudGluZXMtYm9sZC13ZWJmb250LmVvdFwiKTtcbiAgc3JjOiB1cmwoXCJodHRwczovL2NkbjIuYm94eGVyd29ybGQuY29tL2Fzc2V0cy9mb250cy9iYWxsYW50aW5lcy1ib2xkLXdlYmZvbnQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiaHR0cHM6Ly9jZG4yLmJveHhlcndvcmxkLmNvbS9hc3NldHMvZm9udHMvYmFsbGFudGluZXMtYm9sZC13ZWJmb250LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL2NkbjIuYm94eGVyd29ybGQuY29tL2Fzc2V0cy9mb250cy9iYWxsYW50aW5lcy1ib2xkLXdlYmZvbnQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL2NkbjIuYm94eGVyd29ybGQuY29tL2Fzc2V0cy9mb250cy9iYWxsYW50aW5lcy1ib2xkLXdlYmZvbnQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoXCJodHRwczovL2NkbjIuYm94eGVyd29ybGQuY29tL2Fzc2V0cy9mb250cy9iYWxsYW50aW5lcy1ib2xkLXdlYmZvbnQuc3ZnI2JhbGxhbnRpbmVzYm9sZFwiKSBmb3JtYXQoXCJzdmdcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zdmctdGV4dC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIHotaW5kZXg6IDk5O1xufVxuLnN2Zy10ZXh0LXdyYXBwZXIgLmJ0bi10ZXh0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMC41cmVtIGF1dG87XG59XG4uc3ZnLXRleHQtd3JhcHBlciBzdmcge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLnRleHQtYmFja2dyb3VuZCB7XG4gIGZpbGw6ICNmNWY1ZjU7XG59XG5cbi5mb250cyBsaSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4uZm9udHMgbGkuQXJpYWwge1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZvbnRzIGxpLm1vbnRlIHtcbiAgZm9udC1mYW1pbHk6IFwibW9udGVcIjtcbn1cbi5mb250cyBsaS5vc3dhbGRjdXN0b20ge1xuICBmb250LWZhbWlseTogXCJvc3dhbGRjdXN0b21cIjtcbn1cbi5mb250cyBsaS5jb2xsZWdlIHtcbiAgZm9udC1mYW1pbHk6IFwiY29sbGVnZVwiO1xufVxuLmZvbnRzIGxpLmJhbGxhbnRpbmVzIHtcbiAgZm9udC1mYW1pbHk6IFwiYmFsbGFudGluZXNcIjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5uYW1lLXN0eWxlIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc3RlcC1sYWJlbCAuY29tcGxldGUge1xuICBjb2xvcjogIzYzYjIwYjtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc3RlcC1pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59IiwiLy9Db2xvcnNcclxuJGJsYWNrOiAjMzYzNjM2O1xyXG4kdmVyeWxpZ2h0Z3JleTogI2Y1ZjVmNTtcclxuJGxpZ2h0Z3JleTogI2VkZWRlZDtcclxuJG1pZGdyZXk6ICM5OTk7XHJcbiRkYXJrZ3JleTogIzY2NjtcclxuJGdyZWVuOiAjNjNiMjBiO1xyXG4kcmVkOiAjY2UwNTA1O1xyXG4vL0ZvbnRzXHJcbiRkZWZhdWx0Rm9udDogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiRkaXNwbGF5Rm9udDogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiIsIkBtaXhpbiBmbHVpZC10eXBlKCRwcm9wZXJ0aWVzLCAkbWluLXZ3LCAkbWF4LXZ3LCAkbWluLXZhbHVlLCAkbWF4LXZhbHVlKSB7XHJcbiAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcclxuICAgICN7JHByb3BlcnR5fTogJG1pbi12YWx1ZTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4tdncpIHtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgICN7JHByb3BlcnR5fTogY2FsYyhcclxuICAgICAgICAjeyRtaW4tdmFsdWV9ICsgI3tzdHJpcC11bml0KCRtYXgtdmFsdWUgLSAkbWluLXZhbHVlKX0gKlxyXG4gICAgICAgICAgKFxyXG4gICAgICAgICAgICAxMDB2dyAtICN7JG1pbi12d31cclxuICAgICAgICAgICkgLyAje3N0cmlwLXVuaXQoJG1heC12dyAtICRtaW4tdncpfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1heC12dykge1xyXG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcclxuICAgICAgI3skcHJvcGVydHl9OiAkbWF4LXZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGZ1bmN0aW9uIHN0cmlwLXVuaXQoJHZhbHVlKSB7XHJcbiAgQHJldHVybiAkdmFsdWUgLyAoJHZhbHVlICogMCArIDEpO1xyXG59XHJcblxyXG5AbWl4aW4gd3JhcHBlcigkd2lkdGg6MTQ0MHB4KSB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6ICR3aWR0aDtcclxuICBtYXJnaW46IDAgYXV0byAxLjVyZW07XHJcbn1cclxuXHJcbkBtaXhpbiBmb250LXNpemUoJGZvbnRTaXplLCAkbGluZUhlaWdodDogMSkge1xyXG4gICRyZW1WYWx1ZTogKCRmb250U2l6ZSAvIDE2KTtcclxuICAkcHhWYWx1ZTogJGZvbnRTaXplO1xyXG4gICRsaW5lVmFsdWU6ICgkbGluZUhlaWdodCAvICRmb250U2l6ZSk7XHJcbiAgZm9udC1zaXplOiAkcHhWYWx1ZSArIHB4O1xyXG4gIGZvbnQtc2l6ZTogJHJlbVZhbHVlICsgcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZVZhbHVlO1xyXG59XHJcbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ21peGlucyc7XHJcbkBpbXBvcnQgJ3BhcnRpYWwnO1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdvc3dhbGRjdXN0b20nO1xyXG4gIHNyYzogdXJsKCdodHRwczovL2NkbjIuYm94eGVyd29ybGQuY29tL2Fzc2V0cy9mb250cy9vc3dhbGQtc2VtaWJvbGQud29mZjInKVxyXG4gICAgICBmb3JtYXQoJ3dvZmYyJyksXHJcbiAgICB1cmwoJ2h0dHBzOi8vY2RuMi5ib3h4ZXJ3b3JsZC5jb20vYXNzZXRzL2ZvbnRzL29zd2FsZC1zZW1pYm9sZC53b2ZmJylcclxuICAgICAgZm9ybWF0KCd3b2ZmJyk7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnbW9udGUnO1xyXG4gIHNyYzogdXJsKCdodHRwczovL2NkbjIuYm94eGVyd29ybGQuY29tL2Fzc2V0cy9mb250cy9kaWFtYW50ZS1zZXJpYWwtYm9sZC13ZWJmb250LmVvdCcpO1xyXG4gIHNyYzogdXJsKCdodHRwczovL2NkbjIuYm94eGVyd29ybGQuY29tL2Fzc2V0cy9mb250cy9kaWFtYW50ZS1zZXJpYWwtYm9sZC13ZWJmb250LmVvdD8jaWVmaXgnKVxyXG4gICAgICBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXHJcbiAgICB1cmwoJ2h0dHBzOi8vY2RuMi5ib3h4ZXJ3b3JsZC5jb20vYXNzZXRzL2ZvbnRzL2RpYW1hbnRlLXNlcmlhbC1ib2xkLXdlYmZvbnQud29mZjInKVxyXG4gICAgICBmb3JtYXQoJ3dvZmYyJyksXHJcbiAgICB1cmwoJ2h0dHBzOi8vY2RuMi5ib3h4ZXJ3b3JsZC5jb20vYXNzZXRzL2ZvbnRzL2RpYW1hbnRlLXNlcmlhbC1ib2xkLXdlYmZvbnQud29mZicpXHJcbiAgICAgIGZvcm1hdCgnd29mZicpLFxyXG4gICAgdXJsKCdodHRwczovL2NkbjIuYm94eGVyd29ybGQuY29tL2Fzc2V0cy9mb250cy9kaWFtYW50ZS1zZXJpYWwtYm9sZC13ZWJmb250LnR0ZicpXHJcbiAgICAgIGZvcm1hdCgndHJ1ZXR5cGUnKSxcclxuICAgIHVybCgnaHR0cHM6Ly9jZG4yLmJveHhlcndvcmxkLmNvbS9hc3NldHMvZm9udHMvZGlhbWFudGUtc2VyaWFsLWJvbGQtd2ViZm9udC5zdmcjZGlhbWFudGUtc2VyaWFsYm9sZCcpXHJcbiAgICAgIGZvcm1hdCgnc3ZnJyk7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnY29sbGVnZSc7XHJcbiAgc3JjOiB1cmwoJ2h0dHBzOi8vY2RuMi5ib3h4ZXJ3b3JsZC5jb20vYXNzZXRzL2ZvbnRzL2NvbGxlZ2VfYmxvY2std2ViZm9udC5lb3QnKTtcclxuICBzcmM6IHVybCgnaHR0cHM6Ly9jZG4yLmJveHhlcndvcmxkLmNvbS9hc3NldHMvZm9udHMvY29sbGVnZV9ibG9jay13ZWJmb250LmVvdD8jaWVmaXgnKVxyXG4gICAgICBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXHJcbiAgICB1cmwoJ2h0dHBzOi8vY2RuMi5ib3h4ZXJ3b3JsZC5jb20vYXNzZXRzL2ZvbnRzL2NvbGxlZ2VfYmxvY2std2ViZm9udC53b2ZmMicpXHJcbiAgICAgIGZvcm1hdCgnd29mZjInKSxcclxuICAgIHVybCgnaHR0cHM6Ly9jZG4yLmJveHhlcndvcmxkLmNvbS9hc3NldHMvZm9udHMvY29sbGVnZV9ibG9jay13ZWJmb250LndvZmYnKVxyXG4gICAgICBmb3JtYXQoJ3dvZmYnKSxcclxuICAgIHVybCgnaHR0cHM6Ly9jZG4yLmJveHhlcndvcmxkLmNvbS9hc3NldHMvZm9udHMvY29sbGVnZV9ibG9jay13ZWJmb250LnR0ZicpXHJcbiAgICAgIGZvcm1hdCgndHJ1ZXR5cGUnKSxcclxuICAgIHVybCgnaHR0cHM6Ly9jZG4yLmJveHhlcndvcmxkLmNvbS9hc3NldHMvZm9udHMvY29sbGVnZV9ibG9jay13ZWJmb250LnN2ZyNjb2xsZWdlX2Jsb2NrcmVndWxhcicpXHJcbiAgICAgIGZvcm1hdCgnc3ZnJyk7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnYmFsbGFudGluZXMnO1xyXG4gIHNyYzogdXJsKCdodHRwczovL2NkbjIuYm94eGVyd29ybGQuY29tL2Fzc2V0cy9mb250cy9iYWxsYW50aW5lcy1ib2xkLXdlYmZvbnQuZW90Jyk7XHJcbiAgc3JjOiB1cmwoJ2h0dHBzOi8vY2RuMi5ib3h4ZXJ3b3JsZC5jb20vYXNzZXRzL2ZvbnRzL2JhbGxhbnRpbmVzLWJvbGQtd2ViZm9udC5lb3Q/I2llZml4JylcclxuICAgICAgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxyXG4gICAgdXJsKCdodHRwczovL2NkbjIuYm94eGVyd29ybGQuY29tL2Fzc2V0cy9mb250cy9iYWxsYW50aW5lcy1ib2xkLXdlYmZvbnQud29mZjInKVxyXG4gICAgICBmb3JtYXQoJ3dvZmYyJyksXHJcbiAgICB1cmwoJ2h0dHBzOi8vY2RuMi5ib3h4ZXJ3b3JsZC5jb20vYXNzZXRzL2ZvbnRzL2JhbGxhbnRpbmVzLWJvbGQtd2ViZm9udC53b2ZmJylcclxuICAgICAgZm9ybWF0KCd3b2ZmJyksXHJcbiAgICB1cmwoJ2h0dHBzOi8vY2RuMi5ib3h4ZXJ3b3JsZC5jb20vYXNzZXRzL2ZvbnRzL2JhbGxhbnRpbmVzLWJvbGQtd2ViZm9udC50dGYnKVxyXG4gICAgICBmb3JtYXQoJ3RydWV0eXBlJyksXHJcbiAgICB1cmwoJ2h0dHBzOi8vY2RuMi5ib3h4ZXJ3b3JsZC5jb20vYXNzZXRzL2ZvbnRzL2JhbGxhbnRpbmVzLWJvbGQtd2ViZm9udC5zdmcjYmFsbGFudGluZXNib2xkJylcclxuICAgICAgZm9ybWF0KCdzdmcnKTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc3ZnLXRleHQtd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHZlcnlsaWdodGdyZXk7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIC5idG4tdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMC41cmVtIGF1dG87XHJcbiAgfVxyXG4gIHN2ZyB7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICB9XHJcbn1cclxuXHJcbi50ZXh0LWJhY2tncm91bmQge1xyXG4gIGZpbGw6ICR2ZXJ5bGlnaHRncmV5O1xyXG59XHJcblxyXG4uZm9udHMge1xyXG4gIEBleHRlbmQgJWJ1dHRvbi1ncm91cC1zZWxlY3Q7XHJcbiAgbGkge1xyXG4gICAgQGluY2x1ZGUgZm9udC1zaXplKDE4LCAxOCk7XHJcbiAgfVxyXG4gIGxpLkFyaWFsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBsaS5tb250ZSB7XHJcbiAgICBmb250LWZhbWlseTogJ21vbnRlJztcclxuICB9XHJcbiAgbGkub3N3YWxkY3VzdG9tIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3N3YWxkY3VzdG9tJztcclxuICB9XHJcbiAgbGkuY29sbGVnZSB7XHJcbiAgICBmb250LWZhbWlseTogJ2NvbGxlZ2UnO1xyXG4gIH1cclxuICBsaS5iYWxsYW50aW5lcyB7XHJcbiAgICBmb250LWZhbWlseTogJ2JhbGxhbnRpbmVzJztcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLm5hbWUtc3R5bGUge1xyXG4gIEBleHRlbmQgJWJ1dHRvbi1ncm91cC1zZWxlY3Q7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc3RlcC1sYWJlbCB7XHJcbiAgLmNvbXBsZXRlIHtcclxuICAgIGNvbG9yOiAkZ3JlZW47XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zdGVwLWljb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iXX0= */';
    },
    "./src/app/customiser/options/custom-name-option/custom-name-option.component.ts": 
    /*!***************************************************************************************!*\
  !*** ./src/app/customiser/options/custom-name-option/custom-name-option.component.ts ***!
  \***************************************************************************************/
    /*! exports provided: CustomNameOptionComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "CustomNameOptionComponent", (function() {
            return CustomNameOptionComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
        var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
        var _app_customiser_services_design_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/customiser/services/design.service */ "./src/app/customiser/services/design.service.ts");
        var _app_route_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/route.animation */ "./src/app/route.animation.ts");
        var _global_untilDestroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @global/untilDestroy */ "../global/untilDestroy/index.ts");
        var _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/customiser-options.service */ "./src/app/customiser/services/customiser-options.service.ts");
        var _reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../reducers */ "./src/app/customiser/reducers/index.ts");
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
        var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
        var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/esm2015/dialog.js");
        var _app_shared_components_page_popup_page_popup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/shared/components/page-popup/page-popup.component */ "./src/app/shared/components/page-popup/page-popup.component.ts");
        var _env_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @env/environment */ "../environments/environment.ts");
        let CustomNameOptionComponent = class CustomNameOptionComponent {
            constructor(fb, route, designService, optionsService, location, store, dialog, renderer, cdr) {
                this.fb = fb;
                this.route = route;
                this.designService = designService;
                this.optionsService = optionsService;
                this.location = location;
                this.store = store;
                this.dialog = dialog;
                this.renderer = renderer;
                this.cdr = cdr;
                this.fontSize = "48px";
                this.fonts = [ {
                    title: "Arial",
                    value: "Arial"
                }, {
                    title: "Oswald",
                    value: "oswaldcustom"
                }, {
                    title: "College",
                    value: "college"
                }, {
                    title: "Ballantines",
                    value: "ballantines"
                } ];
                this.canDelete = false;
                this.validate = {
                    isErrorState: control => true
                };
                this.customSettings$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_9__["getCustomSettings"]));
            }
            get slideIn() {
                return "";
            }
            ngOnInit() {
                this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["switchMap"])((params => this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_9__["getDesignNameById"](params["id"]))))), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_7__["untilComponentDestroyed"])(this)).subscribe((name => {
                    if (name) {
                        this.selectedName = Object.assign({}, name);
                        this.selectedFill = this.selectedName.fill;
                        if (this.selectedName.outline) {
                            this.selectedOutline = this.selectedName.outline;
                        }
                        if (this.selectedName.patch) {
                            this.selectedPatch = this.selectedName.patch;
                        }
                        this.selectedType = this.selectedName.name_type;
                        if (this.selectedName.finish) {
                            this.selectedFinish = this.selectedName.finish;
                        }
                        if (this.selectedName.crystal) {
                            this.selectedCrystal = this.selectedName.crystal;
                        }
                        this.canDelete = true;
                    }
                    this.formSetup();
                }));
            }
            getImageUrl(image) {
                return `${_env_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].image_cdn}/${image.key}?width=800`;
            }
            getCrystalFill() {
                const base = this.location.path();
                return `url(${base}#pattern-stripe)`;
            }
            getFill() {
                const base = this.location.path();
                if (this.selectedFill) {
                    return `url(${base}#nameFillPattern)`;
                } else {
                    return "#000000";
                }
            }
            get filterUrl() {
                const base = this.location.path();
                return `url(${base}#textFilter)`;
            }
            get bBox() {
                return this.svgText ? this.svgText.nativeElement.getBBox() : {};
            }
            currentPrice() {
                const textLength = this.nameForm.get("text").value.replace(/\s+/g, "").length;
                const typePrice = this.selectedType ? this.selectedType.base_price + this.selectedType.price * textLength : 0;
                const finishPrice = this.selectedFinish ? this.selectedFinish.price * textLength : 0;
                const patchPrice = this.selectedType && this.selectedType.patch && this.selectedPatch ? this.selectedType.patch_price : 0;
                const materialPrice = this.selectedFill ? this.selectedFill.price * textLength : 0;
                const outlinePrice = this.selectedOutline ? this.selectedType.outline_price * textLength : 0;
                return this.customSettings$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["switchMap"])((settings => {
                    const crystalPrice = this.selectedCrystal ? this.selectedType.crystal_price * textLength : 0;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(typePrice + finishPrice + patchPrice + crystalPrice + materialPrice + outlinePrice);
                })));
            }
            updatePosition() {
                let correction = 0;
                switch (this.selectedName && this.selectedName.font) {
                  case "Arial":
                    correction = 2;
                    break;

                  case "college":
                    correction = -2;
                    break;

                  case "monte":
                    correction = 0;
                    break;

                  case "ballantines":
                    correction = 8;
                    break;
                }
                return {
                    x: this.bBox.x - 4,
                    y: this.bBox.y + correction,
                    width: this.bBox.width + 8,
                    height: this.bBox.height ? this.bBox.height - 6 : 0,
                    aspect_ratio: this.bBox.width / this.bBox.height,
                    rotate: 0,
                    scale: 1
                };
            }
            getFontSize(value) {
                if (this.svgText) {
                    this.renderer.setAttribute(this.svgText.nativeElement, "font-size", Math.min(60, 60 * (10 / value.length)) + "px");
                }
                this.cdr.detectChanges();
            }
            get strokeWidth() {
                const width = Math.min(3, 3 * (10 / this.nameForm.get("text").value.length));
                return this.selectedName && this.selectedName.font === "ballantines" ? width / 2 : width;
            }
            formSetup() {
                this.nameForm = this.fb.group({
                    text: [ this.selectedName ? this.selectedName.text : "", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required ],
                    font: [ this.selectedName ? this.selectedName.font : "Arial", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required ],
                    fill: [ this.selectedName ? this.selectedName.fill._id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required ],
                    patch: [ this.selectedName && this.selectedName.patch ? this.selectedName.patch._id : null ],
                    add_patch: [ this.selectedName && this.selectedName.patch ? true : false ],
                    add_crystals: [ this.selectedName && this.selectedName.crystal ? true : false ],
                    outline: [ this.selectedName && this.selectedName.outline ? this.selectedName.outline._id : null ],
                    add_outline: [ this.selectedName && this.selectedName.outline ? true : false ],
                    name_type: [ this.selectedType ? this.selectedName.name_type._id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required ],
                    finish: [ this.selectedFinish ? this.selectedFinish._id : null ],
                    crystal: [ this.selectedName && this.selectedName.crystal ? this.selectedName.crystal._id : null ]
                });
                if (this.selectedType) {
                    this.setSelectedNameType(this.selectedName.name_type._id);
                }
                if (this.selectedFinish) {
                    this.setFinish(this.selectedFinish);
                }
                if (this.selectedCrystal) {
                    this.setCrystalColour(this.selectedCrystal);
                }
                this.nameForm.get("text").valueChanges.pipe(Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_7__["untilComponentDestroyed"])(this)).subscribe((value => {
                    this.getFontSize(value);
                }));
                this.nameForm.get("name_type").valueChanges.pipe(Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_7__["untilComponentDestroyed"])(this)).subscribe((value => {
                    this.setSelectedNameType(value, true);
                }));
                this.nameForm.get("font").valueChanges.pipe(Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_7__["untilComponentDestroyed"])(this)).subscribe((value => {
                    this.getFontSize(this.nameForm.get("text").value);
                }));
                this.nameForm.get("add_outline").valueChanges.pipe(Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_7__["untilComponentDestroyed"])(this)).subscribe((value => {
                    if (value) {
                        this.nameForm.get("outline").setValidators([ _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required ]);
                    } else {
                        if (this.selectedOutline) {
                            this.selectedOutline = null;
                        }
                        if (this.selectedName) {
                            this.selectedName.outline = null;
                        }
                        this.nameForm.get("outline").setValue(null);
                        this.nameForm.get("outline").setValidators(null);
                    }
                    this.nameForm.get("outline").updateValueAndValidity();
                }));
                this.nameForm.get("add_crystals").valueChanges.pipe(Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_7__["untilComponentDestroyed"])(this)).subscribe((value => {
                    if (value) {
                        this.nameForm.get("crystal").setValidators([ _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required ]);
                    } else {
                        this.nameForm.get("crystal").setValidators(null);
                        this.nameForm.get("crystal").setValue(null);
                        if (this.selectedName) {
                            this.selectedName.crystal = null;
                        }
                        if (this.selectedCrystal) {
                            this.selectedCrystal = null;
                        }
                    }
                    this.nameForm.get("crystal").updateValueAndValidity();
                    this.cdr.detectChanges();
                }));
                this.nameForm.get("add_patch").valueChanges.pipe(Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_7__["untilComponentDestroyed"])(this)).subscribe((value => {
                    if (value) {
                        this.nameForm.get("patch").setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
                    } else {
                        this.nameForm.get("patch").setValidators(null);
                        if (this.selectedName) {
                            this.nameForm.get("patch").setValue(null);
                            this.selectedName.patch = null;
                            this.selectedPatch = null;
                        }
                    }
                    this.nameForm.get("patch").updateValueAndValidity();
                    this.cdr.detectChanges();
                }));
                if (this.selectedName && this.selectedName.text) {
                    this.getFontSize(this.selectedName.text);
                    this.updatePosition();
                }
                this.cdr.detectChanges();
            }
            get stepOneComplete() {
                return this.nameForm.get("text").valid && this.nameForm.get("font").valid && this.nameForm.get("name_type").valid;
            }
            get stepTwoComplete() {
                return this.nameForm.get("fill").valid && this.nameForm.get("outline").valid;
            }
            get stepThreeComplete() {
                return this.selectedType && this.selectedType.special_finishes ? this.selectedType && this.selectedType.special_finishes && this.nameForm.get("finish").valid : true;
            }
            get stepFourComplete() {
                return this.nameForm.get("add_patch").value && this.nameForm.get("patch").value ? true : false;
            }
            getTextErrorMessage() {
                return this.nameForm.get("text").hasError("required") ? "Please enter text" : this.nameForm.get("text").hasError("maxlength") ? "Text too long" : "";
            }
            setFont(font) {
                this.nameForm.get("font").patchValue(font);
                if (this.selectedName) {
                    this.selectedName.font = font;
                }
                this.updatePosition();
            }
            setNameType(name_type) {
                this.nameForm.get("name_type").setValue(name_type._id);
                if (this.selectedName) {
                    this.selectedName.name_type = name_type;
                }
                this.updatePosition();
            }
            setFinish(finish) {
                this.selectedFinish = finish;
                this.nameForm.get("finish").setValue(finish._id);
                if (this.selectedName) {
                    this.selectedName.finish = this.selectedFinish;
                }
            }
            setCrystalColour(material) {
                this.selectedCrystal = material;
                this.setMaterial(material, "crystal");
            }
            setFillColour(material) {
                this.selectedFill = material;
                this.setMaterial(material, "fill");
            }
            setOutlineColour(material) {
                this.selectedOutline = material;
                this.setMaterial(material, "outline");
            }
            setPatchColour(material) {
                this.selectedPatch = material;
                this.setMaterial(material, "patch");
            }
            setMaterial(material, selector) {
                this.nameForm.get(selector).setValue(material._id);
                if (this.selectedName) {
                    this.selectedName[selector] = material;
                }
            }
            setSelectedNameType(id, changed = false) {
                this.customSettings$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["tap"])((settings => {
                    this.selectedType = settings.name_types.find((nt => nt._id === id));
                    if (this.selectedType && this.selectedType.special_finishes) {
                        this.nameForm.get("finish").setValidators([ _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required ]);
                    } else {
                        this.selectedFinish = null;
                        this.nameForm.get("finish").setValue(null);
                        this.nameForm.get("finish").setValidators(null);
                        if (this.selectedName) {
                            this.selectedName.finish = null;
                        }
                    }
                    if (changed) {
                        this.nameForm.get("finish").updateValueAndValidity();
                        this.selectedFill = null;
                        this.nameForm.get("fill").setValue(null);
                        this.selectedOutline = null;
                        this.nameForm.get("outline").setValue(null);
                        this.nameForm.get("add_outline").setValue(false);
                    }
                    if (this.selectedName) {
                        this.selectedName.name_type = this.selectedType;
                    }
                })), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_7__["untilComponentDestroyed"])(this)).subscribe((() => {
                    this.cdr.detectChanges();
                }));
            }
            save() {
                const data = this.nameForm.value;
                if (this.selectedType && !this.selectedType.outline) {
                    delete data.outline;
                }
                if (this.svgText) {
                    this.renderer.setAttribute(this.svgText.nativeElement, "font-size", "12px");
                }
                data.name_type = this.selectedType;
                data.font_size = this.optionsService.getFontSize(data.font);
                if (!this.selectedName) {
                    data.position = {
                        x: 300,
                        y: 115,
                        width: this.bBox.width,
                        height: this.bBox.height,
                        scale: 2.5,
                        rotate: 0,
                        aspect_ratio: this.bBox.width / this.bBox.height
                    };
                    this.designService.saveOption(true, {
                        $addToSet: {
                            names: data
                        }
                    });
                } else {
                    data._id = this.selectedName._id;
                    data.name_type = this.selectedType;
                    data.position = Object.assign({}, this.selectedName.position, {
                        width: this.bBox.width,
                        height: this.bBox.height,
                        aspect_ratio: this.bBox.width / this.bBox.height
                    });
                    this.designService.updateSub(true, {
                        "names.$": data
                    }, {
                        "names._id": this.selectedName._id
                    });
                }
            }
            cancel() {
                this.optionsService.backToMenu();
            }
            showExamples(slug) {
                this.dialog.open(_app_shared_components_page_popup_page_popup_component__WEBPACK_IMPORTED_MODULE_14__["PagePopupComponent"], {
                    data: {
                        slug: slug
                    },
                    autoFocus: false,
                    maxWidth: "1200px"
                });
            }
            ngOnDestroy() {}
        };
        CustomNameOptionComponent.ctorParameters = () => [ {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
            type: _app_customiser_services_design_service__WEBPACK_IMPORTED_MODULE_5__["DesignService"]
        }, {
            type: _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_8__["CustomiserOptionsService"]
        }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
        }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"]
        }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        } ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"])("@fadeInAnimation"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []) ], CustomNameOptionComponent.prototype, "slideIn", null);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("svgText", {
            static: true
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]) ], CustomNameOptionComponent.prototype, "svgText", void 0);
        CustomNameOptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "bx-custom-name-option",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-name-option.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-name-option/custom-name-option.component.html")).default,
            animations: [ _app_route_animation__WEBPACK_IMPORTED_MODULE_6__["fadeInAnimation"] ],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            styles: [ tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-name-option.component.scss */ "./src/app/customiser/options/custom-name-option/custom-name-option.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../scss/options.scss */ "./src/app/customiser/scss/options.scss")).default ]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _app_customiser_services_design_service__WEBPACK_IMPORTED_MODULE_5__["DesignService"], _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_8__["CustomiserOptionsService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] ]) ], CustomNameOptionComponent);
    },
    "./src/app/customiser/options/custom-panel-option/custom-panel-option.component.scss": 
    /*!*******************************************************************************************!*\
  !*** ./src/app/customiser/options/custom-panel-option/custom-panel-option.component.scss ***!
  \*******************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = ":host {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvb3B0aW9ucy9jdXN0b20tcGFuZWwtb3B0aW9uL0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXGFwcFxcY3VzdG9taXNlclxcb3B0aW9uc1xcY3VzdG9tLXBhbmVsLW9wdGlvblxcY3VzdG9tLXBhbmVsLW9wdGlvbi5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvb3B0aW9ucy9jdXN0b20tcGFuZWwtb3B0aW9uL2N1c3RvbS1wYW5lbC1vcHRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO01BQUEsMEJBQUE7VUFBQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvb3B0aW9ucy9jdXN0b20tcGFuZWwtb3B0aW9uL2N1c3RvbS1wYW5lbC1vcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXX0= */";
    },
    "./src/app/customiser/options/custom-panel-option/custom-panel-option.component.ts": 
    /*!*****************************************************************************************!*\
  !*** ./src/app/customiser/options/custom-panel-option/custom-panel-option.component.ts ***!
  \*****************************************************************************************/
    /*! exports provided: CustomPanelOptionComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "CustomPanelOptionComponent", (function() {
            return CustomPanelOptionComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
        var _app_route_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/route.animation */ "./src/app/route.animation.ts");
        var _global_untilDestroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @global/untilDestroy */ "../global/untilDestroy/index.ts");
        var _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/customiser-options.service */ "./src/app/customiser/services/customiser-options.service.ts");
        var _services_design_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/design.service */ "./src/app/customiser/services/design.service.ts");
        var _services_svg_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/svg.service */ "./src/app/customiser/services/svg.service.ts");
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
        var _reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../reducers */ "./src/app/customiser/reducers/index.ts");
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
        let CustomPanelOptionComponent = class CustomPanelOptionComponent {
            constructor(optionsService, svgService, designService, route, store) {
                this.optionsService = optionsService;
                this.svgService = svgService;
                this.designService = designService;
                this.route = route;
                this.store = store;
                this.canDelete = false;
            }
            get slideIn() {
                return "";
            }
            get validated() {
                return this.selectedMaterial;
            }
            ngOnInit() {
                this.loadColours();
            }
            getPrice() {
                const basePrice = this.productSetting.area_size.price_adjust;
                const material_price = this.selectedMaterial.price ? this.selectedMaterial.price : 0;
                return basePrice * material_price;
            }
            loadColours() {
                this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])((params => this.optionsService.getPanel(params["id"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])((setting => {
                    this.productSetting = setting;
                    return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_9__["getDesignPanelByPanel"](setting.panel)));
                })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])((panel => {
                    this.currentPanel = panel;
                    if (this.currentPanel) {
                        this.canDelete = true;
                    }
                    this.currentMaterial = !this.currentPanel ? null : this.currentPanel.material;
                    this.selectedMaterial = !this.currentPanel ? null : this.currentPanel.material;
                })), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_4__["untilComponentDestroyed"])(this)).subscribe();
            }
            colourSelected(material) {
                this.selectedMaterial = material;
                if (this.currentPanel) {
                    this.currentPanel.material = material;
                }
                this.svgService.addColor(material, this.productSetting.panel, true, this.productSetting.area_size.optional);
            }
            save() {
                if (this.currentPanel) {
                    this.designService.updateSub(true, {
                        "panels.$.material": this.selectedMaterial
                    }, {
                        "panels._id": this.currentPanel._id
                    });
                } else {
                    const data = {
                        panels: {
                            panel: this.productSetting.panel,
                            title: this.productSetting.name,
                            price: 0,
                            material: this.selectedMaterial,
                            product_setting: this.productSetting._id
                        }
                    };
                    this.designService.saveOption(true, {
                        $addToSet: data
                    });
                }
            }
            cancel() {
                this.svgService.addColor(this.currentMaterial, this.productSetting.panel, true, this.productSetting.area_size.optional);
                this.optionsService.backToMenu();
            }
            delete() {
                this.designService.saveOption(true, {
                    $pull: {
                        panels: {
                            _id: this.currentPanel._id
                        }
                    }
                });
                this.svgService.hideOptional(this.currentPanel.product_setting);
            }
            ngOnDestroy() {}
        };
        CustomPanelOptionComponent.ctorParameters = () => [ {
            type: _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_5__["CustomiserOptionsService"]
        }, {
            type: _services_svg_service__WEBPACK_IMPORTED_MODULE_7__["SvgService"]
        }, {
            type: _services_design_service__WEBPACK_IMPORTED_MODULE_6__["DesignService"]
        }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"]
        } ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("@fadeInAnimation"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []) ], CustomPanelOptionComponent.prototype, "slideIn", null);
        CustomPanelOptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bx-custom-panel-option",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-panel-option.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-panel-option/custom-panel-option.component.html")).default,
            animations: [ _app_route_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInAnimation"] ],
            styles: [ tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-panel-option.component.scss */ "./src/app/customiser/options/custom-panel-option/custom-panel-option.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../scss/options.scss */ "./src/app/customiser/scss/options.scss")).default ]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_5__["CustomiserOptionsService"], _services_svg_service__WEBPACK_IMPORTED_MODULE_7__["SvgService"], _services_design_service__WEBPACK_IMPORTED_MODULE_6__["DesignService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] ]) ], CustomPanelOptionComponent);
    },
    "./src/app/customiser/options/custom-size-option/custom-size-option.component.scss": 
    /*!*****************************************************************************************!*\
  !*** ./src/app/customiser/options/custom-size-option/custom-size-option.component.scss ***!
  \*****************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = ":host {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  position: relative;\n}\n\n.important,\n::ng-deep .important {\n  color: #ce0505;\n}\n\n.units-selector {\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem;\n}\n\n.units-selector .option {\n  margin: 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvb3B0aW9ucy9jdXN0b20tc2l6ZS1vcHRpb24vQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcYXBwXFxjdXN0b21pc2VyXFxvcHRpb25zXFxjdXN0b20tc2l6ZS1vcHRpb25cXGN1c3RvbS1zaXplLW9wdGlvbi5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvb3B0aW9ucy9jdXN0b20tc2l6ZS1vcHRpb24vY3VzdG9tLXNpemUtb3B0aW9uLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9taXNlci9vcHRpb25zL2N1c3RvbS1zaXplLW9wdGlvbi9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO01BQUEsMEJBQUE7VUFBQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBOztFQUVFLGNFSkk7QURHTjs7QURJQTtFQUNFLDRCQUFBO0VBQUEsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLDhCQUFBO01BQUEsMEJBQUE7VUFBQSxzQkFBQTtFQUNBLG1CQUFBO0FDREY7O0FERUU7RUFDRSxhQUFBO0FDQUoiLCJmaWxlIjoicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9taXNlci9vcHRpb25zL2N1c3RvbS1zaXplLW9wdGlvbi9jdXN0b20tc2l6ZS1vcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW1wb3J0YW50LFxyXG46Om5nLWRlZXAgLmltcG9ydGFudCB7XHJcbiAgY29sb3I6ICRyZWQ7XHJcbn1cclxuXHJcbi51bml0cy1zZWxlY3RvciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIC5vcHRpb24ge1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmltcG9ydGFudCxcbjo6bmctZGVlcCAuaW1wb3J0YW50IHtcbiAgY29sb3I6ICNjZTA1MDU7XG59XG5cbi51bml0cy1zZWxlY3RvciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLnVuaXRzLXNlbGVjdG9yIC5vcHRpb24ge1xuICBtYXJnaW46IDVweCAwO1xufSIsIi8vQ29sb3JzXHJcbiRibGFjazogIzM2MzYzNjtcclxuJHZlcnlsaWdodGdyZXk6ICNmNWY1ZjU7XHJcbiRsaWdodGdyZXk6ICNlZGVkZWQ7XHJcbiRtaWRncmV5OiAjOTk5O1xyXG4kZGFya2dyZXk6ICM2NjY7XHJcbiRncmVlbjogIzYzYjIwYjtcclxuJHJlZDogI2NlMDUwNTtcclxuLy9Gb250c1xyXG4kZGVmYXVsdEZvbnQ6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4kZGlzcGxheUZvbnQ6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4iXX0= */";
    },
    "./src/app/customiser/options/custom-size-option/custom-size-option.component.ts": 
    /*!***************************************************************************************!*\
  !*** ./src/app/customiser/options/custom-size-option/custom-size-option.component.ts ***!
  \***************************************************************************************/
    /*! exports provided: CustomSizeOptionComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "CustomSizeOptionComponent", (function() {
            return CustomSizeOptionComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
        var _app_route_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/route.animation */ "./src/app/route.animation.ts");
        var _global_untilDestroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @global/untilDestroy */ "../global/untilDestroy/index.ts");
        var _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/customiser-options.service */ "./src/app/customiser/services/customiser-options.service.ts");
        var _services_design_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/design.service */ "./src/app/customiser/services/design.service.ts");
        var _services_sizing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/sizing.service */ "./src/app/customiser/services/sizing.service.ts");
        var _reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../reducers */ "./src/app/customiser/reducers/index.ts");
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
        let CustomSizeOptionComponent = class CustomSizeOptionComponent {
            constructor(designService, sizingService, fb, optionsService, store) {
                this.designService = designService;
                this.sizingService = sizingService;
                this.fb = fb;
                this.optionsService = optionsService;
                this.store = store;
                this.needsSize = true;
                store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_8__["getProduct"]), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_4__["untilComponentDestroyed"])(this)).subscribe((product => {
                    this.product = product;
                    if (!product.sizes) {
                        this.needsSize = false;
                    }
                }));
                store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_8__["getCustomSettings"]), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_4__["untilComponentDestroyed"])(this)).subscribe((settings => {
                    this.customSettings = settings;
                    this.production_types = settings.production_types;
                }));
            }
            get slideIn() {
                return "";
            }
            get sizes() {
                return this.product.sizes;
            }
            ngOnInit() {
                this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_8__["getDesign"]), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_4__["untilComponentDestroyed"])(this)).subscribe((resp => {
                    this.sizing = resp.sizing ? resp.sizing : null;
                    this.production = resp.production ? resp.production : null;
                    this.logo = resp.boxxer_logo;
                    if (this.optionsService.product.category.parent && this.optionsService.product.category.parent._id === "58ac1333dc142c612ab61faf" || this.optionsService.product.category._id === "6351792206870dbb723ad2bf" || this.optionsService.product.category._id === "635813e6e10bf1774fd1910c") {
                        this.needsSize = false;
                    }
                    this.formSetup();
                }));
            }
            formSetup() {
                this.sizingForm = this.fb.group({
                    sizing: this.fb.group({
                        height: [ this.sizing && this.sizing.height ? this.sizing.height : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required ],
                        unit_height: [ this.sizing && this.sizing.unit_height ? this.sizing.unit_height : "CMS", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required ],
                        weight: [ this.sizing && this.sizing.weight ? this.sizing.weight : null, [ _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required ] ],
                        unit: [ this.sizing && this.sizing.unit ? this.sizing.unit : "KGS", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required ],
                        size: [ this.sizing && this.sizing.size ? this.sizing.size : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required ]
                    }),
                    production: this.fb.group({
                        type: [ this.production && this.production.type ? this.production.type : this.production_types[0].title ],
                        instructions: [ this.production ? this.production.instructions : null ],
                        production_type: [ this.production ? this.production.production_type : null ]
                    }),
                    boxxer_logo: this.fb.group({
                        remove_logo: [ this.logo && this.logo.remove_logo ? this.logo.remove_logo : false ],
                        position: [ this.logo && this.logo.position ? this.logo.position : this.optionsService.getLogo() ]
                    })
                });
                this.sizingForm.get("production").get("type").valueChanges.pipe(Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_4__["untilComponentDestroyed"])(this)).subscribe((resp => {
                    const type = this.customSettings.production_types.find((t => t.title === resp));
                    this.sizingForm.get("production").get("production_type").setValue(type._id);
                }));
                if (!this.needsSize) {
                    const sizeFields = this.sizingForm.get("sizing");
                    sizeFields.get("height").setValidators(null);
                    sizeFields.get("height").updateValueAndValidity();
                    sizeFields.get("weight").setValidators(null);
                    sizeFields.get("weight").updateValueAndValidity();
                    sizeFields.get("unit").setValue(null);
                    sizeFields.get("unit").setValidators(null);
                    sizeFields.get("unit").updateValueAndValidity();
                    sizeFields.get("unit_height").setValue(null);
                    sizeFields.get("unit_height").setValidators(null);
                    sizeFields.get("unit_height").updateValueAndValidity();
                    if (!this.product.sizes) {
                        sizeFields.get("size").setValue(null);
                        sizeFields.get("size").setValidators(null);
                        sizeFields.get("size").updateValueAndValidity();
                    }
                } else {
                    this.sizingForm.get("sizing").get("unit").valueChanges.pipe(Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_4__["untilComponentDestroyed"])(this)).subscribe((() => {
                        this.updateSize();
                    }));
                    this.sizingForm.get("sizing").get("weight").valueChanges.pipe(Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_4__["untilComponentDestroyed"])(this)).subscribe((() => {
                        this.updateSize();
                    }));
                }
            }
            updateSize() {
                if (this.sizingForm.get("sizing").get("unit").value && this.sizingForm.get("sizing").get("weight").value) {
                    this.sizingForm.get("sizing").get("size").setValue(this.sizingService.getSize(this.sizingForm.get("sizing").get("unit").value, this.sizingForm.get("sizing").get("weight").value));
                }
            }
            get validated() {
                return false;
            }
            save() {
                this.designService.saveOption(true, this.sizingForm.value);
            }
            cancel() {
                this.optionsService.backToMenu();
            }
            ngOnDestroy() {}
        };
        CustomSizeOptionComponent.ctorParameters = () => [ {
            type: _services_design_service__WEBPACK_IMPORTED_MODULE_6__["DesignService"]
        }, {
            type: _services_sizing_service__WEBPACK_IMPORTED_MODULE_7__["SizingService"]
        }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
            type: _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_5__["CustomiserOptionsService"]
        }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"]
        } ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("@fadeInAnimation"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []) ], CustomSizeOptionComponent.prototype, "slideIn", null);
        CustomSizeOptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bx-custom-size-option",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-size-option.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-size-option/custom-size-option.component.html")).default,
            animations: [ _app_route_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInAnimation"] ],
            styles: [ tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-size-option.component.scss */ "./src/app/customiser/options/custom-size-option/custom-size-option.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../scss/options.scss */ "./src/app/customiser/scss/options.scss")).default ]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _services_design_service__WEBPACK_IMPORTED_MODULE_6__["DesignService"], _services_sizing_service__WEBPACK_IMPORTED_MODULE_7__["SizingService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_5__["CustomiserOptionsService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] ]) ], CustomSizeOptionComponent);
    },
    "./src/app/customiser/options/custom-style-option/custom-style-option.component.scss": 
    /*!*******************************************************************************************!*\
  !*** ./src/app/customiser/options/custom-style-option/custom-style-option.component.scss ***!
  \*******************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = ".option-box {\n  padding: 0.5rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvb3B0aW9ucy9jdXN0b20tc3R5bGUtb3B0aW9uL0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXGFwcFxcY3VzdG9taXNlclxcb3B0aW9uc1xcY3VzdG9tLXN0eWxlLW9wdGlvblxcY3VzdG9tLXN0eWxlLW9wdGlvbi5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvb3B0aW9ucy9jdXN0b20tc3R5bGUtb3B0aW9uL2N1c3RvbS1zdHlsZS1vcHRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b21pc2VyL29wdGlvbnMvY3VzdG9tLXN0eWxlLW9wdGlvbi9jdXN0b20tc3R5bGUtb3B0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9wdGlvbi1ib3gge1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIiwiLm9wdGlvbi1ib3gge1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    },
    "./src/app/customiser/options/custom-style-option/custom-style-option.component.ts": 
    /*!*****************************************************************************************!*\
  !*** ./src/app/customiser/options/custom-style-option/custom-style-option.component.ts ***!
  \*****************************************************************************************/
    /*! exports provided: CustomStyleOptionComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "CustomStyleOptionComponent", (function() {
            return CustomStyleOptionComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
        var _app_route_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/route.animation */ "./src/app/route.animation.ts");
        var _global_untilDestroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @global/untilDestroy */ "../global/untilDestroy/index.ts");
        var _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/customiser-options.service */ "./src/app/customiser/services/customiser-options.service.ts");
        var _services_design_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/design.service */ "./src/app/customiser/services/design.service.ts");
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
        let CustomStyleOptionComponent = class CustomStyleOptionComponent {
            constructor(optionsService, designService, route) {
                this.optionsService = optionsService;
                this.designService = designService;
                this.route = route;
            }
            get slideIn() {
                return "";
            }
            get validated() {
                return this.selectedOption;
            }
            ngOnInit() {
                this.loadStyles();
            }
            loadStyles() {
                this.style$ = this.route.data.pipe(Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_4__["untilComponentDestroyed"])(this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((data => {
                    this.design = data.design;
                    return this.route.params;
                })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((params => this.optionsService.getStyle(params["id"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((style => {
                    this.style = style;
                    this.selectedOption = this.selectedOption ? this.selectedOption : this.design[style.type.toLowerCase()];
                })));
            }
            optionSelected(option) {
                this.selectedOption = option;
            }
            save() {
                this.designService.saveOption(true, {
                    [this.style.type.toLowerCase()]: this.selectedOption
                });
            }
            cancel() {
                this.designService.backToMenu();
            }
            ngOnDestroy() {}
        };
        CustomStyleOptionComponent.ctorParameters = () => [ {
            type: _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_5__["CustomiserOptionsService"]
        }, {
            type: _services_design_service__WEBPACK_IMPORTED_MODULE_6__["DesignService"]
        }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        } ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("@fadeInAnimation"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []) ], CustomStyleOptionComponent.prototype, "slideIn", null);
        CustomStyleOptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bx-custom-style-option",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-style-option.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-style-option/custom-style-option.component.html")).default,
            animations: [ _app_route_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInAnimation"] ],
            styles: [ tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-style-option.component.scss */ "./src/app/customiser/options/custom-style-option/custom-style-option.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../scss/options.scss */ "./src/app/customiser/scss/options.scss")).default ]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_5__["CustomiserOptionsService"], _services_design_service__WEBPACK_IMPORTED_MODULE_6__["DesignService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] ]) ], CustomStyleOptionComponent);
    },
    "./src/app/customiser/options/custom-upload-option/custom-upload-option.component.scss": 
    /*!*********************************************************************************************!*\
  !*** ./src/app/customiser/options/custom-upload-option/custom-upload-option.component.scss ***!
  \*********************************************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = ".upload-options {\n  margin-top: 1rem;\n}\n\n.graphic-sizes {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin-bottom: 1rem;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n\n.graphic-sizes .option {\n  margin: 5px 0;\n  -webkit-flex: 0 1 50%;\n      -ms-flex: 0 1 50%;\n          flex: 0 1 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvb3B0aW9ucy9jdXN0b20tdXBsb2FkLW9wdGlvbi9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxhcHBcXGN1c3RvbWlzZXJcXG9wdGlvbnNcXGN1c3RvbS11cGxvYWQtb3B0aW9uXFxjdXN0b20tdXBsb2FkLW9wdGlvbi5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvb3B0aW9ucy9jdXN0b20tdXBsb2FkLW9wdGlvbi9jdXN0b20tdXBsb2FkLW9wdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDJCQUFBO01BQUEsdUJBQUE7VUFBQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7TUFBQSxtQkFBQTtVQUFBLGVBQUE7QUNDRjs7QURBRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtNQUFBLGlCQUFBO1VBQUEsYUFBQTtBQ0VKIiwiZmlsZSI6InByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvb3B0aW9ucy9jdXN0b20tdXBsb2FkLW9wdGlvbi9jdXN0b20tdXBsb2FkLW9wdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWQtb3B0aW9ucyB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLmdyYXBoaWMtc2l6ZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICAub3B0aW9uIHtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICBmbGV4OiAwIDEgNTAlO1xyXG4gIH1cclxufVxyXG4iLCIudXBsb2FkLW9wdGlvbnMge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uZ3JhcGhpYy1zaXplcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5ncmFwaGljLXNpemVzIC5vcHRpb24ge1xuICBtYXJnaW46IDVweCAwO1xuICBmbGV4OiAwIDEgNTAlO1xufSJdfQ== */";
    },
    "./src/app/customiser/options/custom-upload-option/custom-upload-option.component.ts": 
    /*!*******************************************************************************************!*\
  !*** ./src/app/customiser/options/custom-upload-option/custom-upload-option.component.ts ***!
  \*******************************************************************************************/
    /*! exports provided: CustomUploadOptionComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "CustomUploadOptionComponent", (function() {
            return CustomUploadOptionComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _app_customiser_services_customiser_options_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/customiser/services/customiser-options.service */ "./src/app/customiser/services/customiser-options.service.ts");
        var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _app_route_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/route.animation */ "./src/app/route.animation.ts");
        var _app_customiser_services_design_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/customiser/services/design.service */ "./src/app/customiser/services/design.service.ts");
        var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
        var _global_untilDestroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @global/untilDestroy */ "../global/untilDestroy/index.ts");
        var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../reducers */ "./src/app/customiser/reducers/index.ts");
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
        var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
        let CustomUploadOptionComponent = class CustomUploadOptionComponent {
            constructor(optionsService, designService, route, store, fb) {
                this.optionsService = optionsService;
                this.designService = designService;
                this.route = route;
                this.store = store;
                this.fb = fb;
                this.canDelete = false;
                this.hasSizes = false;
                this.price = 0;
                this.customSettings$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_7__["getCustomSettings"]));
                this.uploadSizes$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_7__["getUploadSizes"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])((resp => {
                    if (resp) {
                        this.hasSizes = true;
                    }
                    this.sizesSetup();
                })));
            }
            get slideIn() {
                return "";
            }
            ngOnInit() {
                this.dropzone_config = {
                    params: {
                        folder: "customer-upload",
                        design_token: this.designService.token
                    },
                    uploadMultiple: false,
                    maxFiles: 1
                };
                this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])((params => this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_7__["getDesignUploadById"](params["id"]))))), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_6__["untilComponentDestroyed"])(this)).subscribe((upload => {
                    if (upload) {
                        this.selectedUpload = upload;
                        this.currentUpload = this.selectedUpload;
                        this.canDelete = true;
                        this.price = this.selectedUpload.price;
                    }
                    this.uploadForm = this.fb.group({
                        remove_background: [ this.selectedUpload && this.selectedUpload.remove_background ? true : false ],
                        instructions: [ this.selectedUpload && this.selectedUpload.instructions ? this.selectedUpload.instructions : null ],
                        size: [ this.selectedUpload && this.selectedUpload.size ? this.selectedUpload.size : null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required ]
                    });
                }));
            }
            sizesSetup() {
                if (!this.hasSizes) {
                    this.uploadForm.get("size").setValidators(null);
                    this.uploadForm.get("size").updateValueAndValidity();
                    this.customSettings$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((resp => this.price = resp.upload_price)), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_6__["untilComponentDestroyed"])(this)).subscribe();
                } else {
                    this.uploadForm.get("size").valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])((value => this.uploadSizes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((sizes => sizes.find((s => s.title === value))))))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((findSize => findSize && findSize.price ? findSize.price : 10)), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_6__["untilComponentDestroyed"])(this)).subscribe((resp => this.price = resp));
                }
            }
            get validated() {
                return this.selectedUpload && this.selectedUpload.image && this.uploadForm.get("size").valid;
            }
            save() {
                if (this.currentUpload) {
                    this.designService.updateSub(true, {
                        "uploads.$.image": this.selectedUpload.image,
                        "uploads.$.size": this.uploadForm.get("size").value,
                        "uploads.$.instructions": this.uploadForm.get("instructions").value,
                        "uploads.$.remove_background": this.uploadForm.get("remove_background").value
                    }, {
                        "uploads._id": this.selectedUpload._id
                    });
                } else {
                    this.selectedUpload.instructions = this.uploadForm.get("instructions").value;
                    this.selectedUpload.size = this.uploadForm.get("size").value;
                    this.selectedUpload.remove_background = this.uploadForm.get("remove_background").value;
                    const data = {
                        uploads: this.selectedUpload
                    };
                    this.designService.saveOption(true, {
                        $addToSet: data
                    });
                }
            }
            cancel() {
                if (this.currentUpload) {
                    this.selectedUpload = this.currentUpload;
                }
                this.backToMenu();
            }
            delete() {
                this.designService.saveOption(true, {
                    $pull: {
                        uploads: {
                            _id: this.selectedUpload._id
                        }
                    }
                });
            }
            backToMenu() {
                this.optionsService.backToMenu();
                this.designService.selectedObject = null;
                this.selectedUpload = null;
            }
            onUploadSuccess(resp) {
                const file = resp[0];
                const image = resp[1];
                const resize = file.width / 50;
                if (this.selectedUpload) {
                    this.selectedUpload.image = image;
                    this.selectedUpload.position.width = file.width / resize;
                    this.selectedUpload.position.height = file.height / resize;
                    this.selectedUpload.position.aspect_ratio = file.width / file.height;
                    return;
                }
                this.selectedUpload = {
                    price: 0,
                    size: null,
                    image: image,
                    position: {
                        x: 300 - file.width / resize / 2 * 2.5,
                        y: 100,
                        width: file.width / resize,
                        height: file.height / resize,
                        scale: 2.5,
                        rotate: 0,
                        aspect_ratio: file.width / file.height
                    }
                };
            }
            removeImage() {
                this.selectedUpload.image = null;
            }
            ngOnDestroy() {}
        };
        CustomUploadOptionComponent.ctorParameters = () => [ {
            type: _app_customiser_services_customiser_options_service__WEBPACK_IMPORTED_MODULE_1__["CustomiserOptionsService"]
        }, {
            type: _app_customiser_services_design_service__WEBPACK_IMPORTED_MODULE_4__["DesignService"]
        }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]
        }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
        } ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"])("@fadeInAnimation"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []) ], CustomUploadOptionComponent.prototype, "slideIn", null);
        CustomUploadOptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "bx-custom-upload-option",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-upload-option.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/options/custom-upload-option/custom-upload-option.component.html")).default,
            animations: [ _app_route_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInAnimation"] ],
            styles: [ tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-upload-option.component.scss */ "./src/app/customiser/options/custom-upload-option/custom-upload-option.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../scss/options.scss */ "./src/app/customiser/scss/options.scss")).default ]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _app_customiser_services_customiser_options_service__WEBPACK_IMPORTED_MODULE_1__["CustomiserOptionsService"], _app_customiser_services_design_service__WEBPACK_IMPORTED_MODULE_4__["DesignService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] ]) ], CustomUploadOptionComponent);
    },
    "./src/app/customiser/reducers/design.ts": 
    /*!***********************************************!*\
  !*** ./src/app/customiser/reducers/design.ts ***!
  \***********************************************/
    /*! exports provided: reducer, getDesign, getFlags, getLogos, getUploads, getPanels, getNames, getSize, getMuayThai, isComplete */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "reducer", (function() {
            return reducer;
        }));
        __webpack_require__.d(__webpack_exports__, "getDesign", (function() {
            return getDesign;
        }));
        __webpack_require__.d(__webpack_exports__, "getFlags", (function() {
            return getFlags;
        }));
        __webpack_require__.d(__webpack_exports__, "getLogos", (function() {
            return getLogos;
        }));
        __webpack_require__.d(__webpack_exports__, "getUploads", (function() {
            return getUploads;
        }));
        __webpack_require__.d(__webpack_exports__, "getPanels", (function() {
            return getPanels;
        }));
        __webpack_require__.d(__webpack_exports__, "getNames", (function() {
            return getNames;
        }));
        __webpack_require__.d(__webpack_exports__, "getSize", (function() {
            return getSize;
        }));
        __webpack_require__.d(__webpack_exports__, "getMuayThai", (function() {
            return getMuayThai;
        }));
        __webpack_require__.d(__webpack_exports__, "isComplete", (function() {
            return isComplete;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _actions_design__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../actions/design */ "./src/app/customiser/actions/design.ts");
        const initialState = {
            style: null,
            cut: null,
            names: [],
            panels: [],
            flags: [],
            logos: [],
            uploads: [],
            total: 0,
            sizing: null,
            production: null,
            product: null,
            token: null,
            image: null,
            svg: null,
            muay_thai: null,
            line_item: null,
            owner: null,
            boxxer_logo: {
                price: 0,
                remove_logo: false,
                position: null
            },
            complete: false
        };
        function reducer(state = initialState, action) {
            switch (action.type) {
              case _actions_design__WEBPACK_IMPORTED_MODULE_1__["FETCH_DESIGN"]:
                return Object.assign({}, state);

              case _actions_design__WEBPACK_IMPORTED_MODULE_1__["CREATE_DESIGN"]:
              case _actions_design__WEBPACK_IMPORTED_MODULE_1__["UPDATE_DESIGN"]:
                return Object.assign({}, state);

              case _actions_design__WEBPACK_IMPORTED_MODULE_1__["LOAD_DESIGN"]:
                return Object.assign({}, state, action.payload);

              case _actions_design__WEBPACK_IMPORTED_MODULE_1__["UPDATE_OBJECT"]:
                return Object.assign({}, state, {
                    [action.selector]: state[action.selector].map((i => {
                        if (i._id === action.payload._id) {
                            i = Object.assign({}, i, action.payload);
                        }
                        return i;
                    }))
                });

              case _actions_design__WEBPACK_IMPORTED_MODULE_1__["DESIGN_COMPLETE"]:
                return Object.assign({}, state, {
                    complete: action.complete
                });

              case _actions_design__WEBPACK_IMPORTED_MODULE_1__["CLEAR_DESIGN"]:
              case _actions_design__WEBPACK_IMPORTED_MODULE_1__["RESET_DESIGN"]:
                state = Object.assign({}, initialState, {
                    boxxer_logo: Object.assign({}, initialState.boxxer_logo, {
                        position: action.position
                    })
                });
                return state;

              default:
                {
                    return state;
                }
            }
        }
        const getDesign = state => state;
        const getFlags = state => state.flags;
        const getLogos = state => state.logos;
        const getUploads = state => state.uploads;
        const getPanels = state => state.panels;
        const getNames = state => state.names;
        const getSize = state => state.sizing;
        const getMuayThai = state => state.muay_thai;
        const isComplete = state => state.complete;
    },
    "./src/app/customiser/reducers/index.ts": 
    /*!**********************************************!*\
  !*** ./src/app/customiser/reducers/index.ts ***!
  \**********************************************/
    /*! exports provided: reducers, getCustomiserState, getOptionsEntitiesState, getDesignEntitiesState, getProduct, getCustomSettings, getSettings, getMuayThai, getStyles, getPanels, getFlagSizes, getLogoSizes, getUploadSizes, getSizes, isComplete, getDesign, getDragObject, getDesignFlags, getDesignFlagById, getDesignLogos, getDesignLogoById, getDesignUploads, getDesignUploadById, getDesignNames, getDesignNameById, getDesignPanels, getDesignPanelByPanel, getDesignSize, getDesignMuayThai */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "reducers", (function() {
            return reducers;
        }));
        __webpack_require__.d(__webpack_exports__, "getCustomiserState", (function() {
            return getCustomiserState;
        }));
        __webpack_require__.d(__webpack_exports__, "getOptionsEntitiesState", (function() {
            return getOptionsEntitiesState;
        }));
        __webpack_require__.d(__webpack_exports__, "getDesignEntitiesState", (function() {
            return getDesignEntitiesState;
        }));
        __webpack_require__.d(__webpack_exports__, "getProduct", (function() {
            return getProduct;
        }));
        __webpack_require__.d(__webpack_exports__, "getCustomSettings", (function() {
            return getCustomSettings;
        }));
        __webpack_require__.d(__webpack_exports__, "getSettings", (function() {
            return getSettings;
        }));
        __webpack_require__.d(__webpack_exports__, "getMuayThai", (function() {
            return getMuayThai;
        }));
        __webpack_require__.d(__webpack_exports__, "getStyles", (function() {
            return getStyles;
        }));
        __webpack_require__.d(__webpack_exports__, "getPanels", (function() {
            return getPanels;
        }));
        __webpack_require__.d(__webpack_exports__, "getFlagSizes", (function() {
            return getFlagSizes;
        }));
        __webpack_require__.d(__webpack_exports__, "getLogoSizes", (function() {
            return getLogoSizes;
        }));
        __webpack_require__.d(__webpack_exports__, "getUploadSizes", (function() {
            return getUploadSizes;
        }));
        __webpack_require__.d(__webpack_exports__, "getSizes", (function() {
            return getSizes;
        }));
        __webpack_require__.d(__webpack_exports__, "isComplete", (function() {
            return isComplete;
        }));
        __webpack_require__.d(__webpack_exports__, "getDesign", (function() {
            return getDesign;
        }));
        __webpack_require__.d(__webpack_exports__, "getDragObject", (function() {
            return getDragObject;
        }));
        __webpack_require__.d(__webpack_exports__, "getDesignFlags", (function() {
            return getDesignFlags;
        }));
        __webpack_require__.d(__webpack_exports__, "getDesignFlagById", (function() {
            return getDesignFlagById;
        }));
        __webpack_require__.d(__webpack_exports__, "getDesignLogos", (function() {
            return getDesignLogos;
        }));
        __webpack_require__.d(__webpack_exports__, "getDesignLogoById", (function() {
            return getDesignLogoById;
        }));
        __webpack_require__.d(__webpack_exports__, "getDesignUploads", (function() {
            return getDesignUploads;
        }));
        __webpack_require__.d(__webpack_exports__, "getDesignUploadById", (function() {
            return getDesignUploadById;
        }));
        __webpack_require__.d(__webpack_exports__, "getDesignNames", (function() {
            return getDesignNames;
        }));
        __webpack_require__.d(__webpack_exports__, "getDesignNameById", (function() {
            return getDesignNameById;
        }));
        __webpack_require__.d(__webpack_exports__, "getDesignPanels", (function() {
            return getDesignPanels;
        }));
        __webpack_require__.d(__webpack_exports__, "getDesignPanelByPanel", (function() {
            return getDesignPanelByPanel;
        }));
        __webpack_require__.d(__webpack_exports__, "getDesignSize", (function() {
            return getDesignSize;
        }));
        __webpack_require__.d(__webpack_exports__, "getDesignMuayThai", (function() {
            return getDesignMuayThai;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options */ "./src/app/customiser/reducers/options.ts");
        var _design__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./design */ "./src/app/customiser/reducers/design.ts");
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
        const reducers = {
            options: _options__WEBPACK_IMPORTED_MODULE_1__["reducer"],
            design: _design__WEBPACK_IMPORTED_MODULE_2__["reducer"]
        };
        const getCustomiserState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createFeatureSelector"])("customiser");
        const getOptionsEntitiesState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getCustomiserState, (state => state.options));
        const getDesignEntitiesState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getCustomiserState, (state => state.design));
        const getProduct = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getOptionsEntitiesState, _options__WEBPACK_IMPORTED_MODULE_1__["getProduct"]);
        const getCustomSettings = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getOptionsEntitiesState, _options__WEBPACK_IMPORTED_MODULE_1__["getCustomSettings"]);
        const getSettings = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getOptionsEntitiesState, _options__WEBPACK_IMPORTED_MODULE_1__["getSettings"]);
        const getMuayThai = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getOptionsEntitiesState, _options__WEBPACK_IMPORTED_MODULE_1__["getMuayThai"]);
        const getStyles = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getOptionsEntitiesState, _options__WEBPACK_IMPORTED_MODULE_1__["getStyles"]);
        const getPanels = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getOptionsEntitiesState, _options__WEBPACK_IMPORTED_MODULE_1__["getPanels"]);
        const getFlagSizes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getOptionsEntitiesState, _options__WEBPACK_IMPORTED_MODULE_1__["getFlagSizes"]);
        const getLogoSizes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getOptionsEntitiesState, _options__WEBPACK_IMPORTED_MODULE_1__["getLogoSizes"]);
        const getUploadSizes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getOptionsEntitiesState, _options__WEBPACK_IMPORTED_MODULE_1__["getUploadSizes"]);
        const getSizes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getOptionsEntitiesState, _options__WEBPACK_IMPORTED_MODULE_1__["getSizes"]);
        const isComplete = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getDesignEntitiesState, _design__WEBPACK_IMPORTED_MODULE_2__["isComplete"]);
        const getDesign = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getDesignEntitiesState, _design__WEBPACK_IMPORTED_MODULE_2__["getDesign"]);
        const getDragObject = (type, id) => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getDesign, (design => design[type].find((f => f._id === id))));
        const getDesignFlags = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getDesignEntitiesState, _design__WEBPACK_IMPORTED_MODULE_2__["getFlags"]);
        const getDesignFlagById = id => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getDesignFlags, (flags => flags.find((f => f._id === id))));
        const getDesignLogos = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getDesignEntitiesState, _design__WEBPACK_IMPORTED_MODULE_2__["getLogos"]);
        const getDesignLogoById = id => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getDesignLogos, (logos => logos.find((l => l._id === id))));
        const getDesignUploads = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getDesignEntitiesState, _design__WEBPACK_IMPORTED_MODULE_2__["getUploads"]);
        const getDesignUploadById = id => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getDesignUploads, (uploads => uploads.find((u => u._id === id))));
        const getDesignNames = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getDesignEntitiesState, _design__WEBPACK_IMPORTED_MODULE_2__["getNames"]);
        const getDesignNameById = id => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getDesignNames, (names => names.find((n => n._id === id))));
        const getDesignPanels = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getDesignEntitiesState, _design__WEBPACK_IMPORTED_MODULE_2__["getPanels"]);
        const getDesignPanelByPanel = panel => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getDesignPanels, (panels => panels.find((p => p.panel === panel))));
        const getDesignSize = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getDesignEntitiesState, _design__WEBPACK_IMPORTED_MODULE_2__["getSize"]);
        const getDesignMuayThai = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getDesignEntitiesState, _design__WEBPACK_IMPORTED_MODULE_2__["getMuayThai"]);
    },
    "./src/app/customiser/reducers/options.ts": 
    /*!************************************************!*\
  !*** ./src/app/customiser/reducers/options.ts ***!
  \************************************************/
    /*! exports provided: reducer, getSettings, getMuayThai, getCustomSettings, getProduct, getStyles, getPanels, getFlagSizes, getLogoSizes, getUploadSizes, getSizes */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "reducer", (function() {
            return reducer;
        }));
        __webpack_require__.d(__webpack_exports__, "getSettings", (function() {
            return getSettings;
        }));
        __webpack_require__.d(__webpack_exports__, "getMuayThai", (function() {
            return getMuayThai;
        }));
        __webpack_require__.d(__webpack_exports__, "getCustomSettings", (function() {
            return getCustomSettings;
        }));
        __webpack_require__.d(__webpack_exports__, "getProduct", (function() {
            return getProduct;
        }));
        __webpack_require__.d(__webpack_exports__, "getStyles", (function() {
            return getStyles;
        }));
        __webpack_require__.d(__webpack_exports__, "getPanels", (function() {
            return getPanels;
        }));
        __webpack_require__.d(__webpack_exports__, "getFlagSizes", (function() {
            return getFlagSizes;
        }));
        __webpack_require__.d(__webpack_exports__, "getLogoSizes", (function() {
            return getLogoSizes;
        }));
        __webpack_require__.d(__webpack_exports__, "getUploadSizes", (function() {
            return getUploadSizes;
        }));
        __webpack_require__.d(__webpack_exports__, "getSizes", (function() {
            return getSizes;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _actions_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../actions/options */ "./src/app/customiser/actions/options.ts");
        const initialState = {
            product: null,
            styles: [],
            settings: [],
            muay_thai: [],
            custom_settings: null,
            flag_sizes: [],
            logo_sizes: [],
            upload_sizes: [],
            sizes: []
        };
        function reducer(state = initialState, action) {
            switch (action.type) {
              case _actions_options__WEBPACK_IMPORTED_MODULE_1__["OptionsActionTypes"].Load:
                return Object.assign({}, state);

              case _actions_options__WEBPACK_IMPORTED_MODULE_1__["OptionsActionTypes"].LoadOptions:
                return Object.assign({}, state, {
                    product: action.payload,
                    styles: action.payload.styles,
                    settings: action.payload.settings.filter((s => !s.muay_thai)),
                    muay_thai: action.payload.settings.filter((s => s.muay_thai)),
                    custom_settings: action.payload.custom_settings,
                    flag_sizes: action.payload.flag_sizes,
                    logo_sizes: action.payload.logo_sizes,
                    upload_sizes: action.payload.upload_sizes,
                    sizes: action.payload.sizes ? action.payload.sizes : []
                });

              default:
                {
                    return state;
                }
            }
        }
        const getSettings = state => state.settings;
        const getMuayThai = state => state.muay_thai;
        const getCustomSettings = state => state.custom_settings;
        const getProduct = state => state.product;
        const getStyles = state => state.styles;
        const getPanels = state => state.settings;
        const getFlagSizes = state => state.flag_sizes;
        const getLogoSizes = state => state.logo_sizes;
        const getUploadSizes = state => state.upload_sizes;
        const getSizes = state => state.sizes;
    },
    "./src/app/customiser/scss/options.scss": 
    /*!**********************************************!*\
  !*** ./src/app/customiser/scss/options.scss ***!
  \**********************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = '.options-panel {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #f5f5f5;\n}\n@media (min-width: 768px) {\n  .options-panel {\n    left: auto;\n    width: 33.33%;\n    max-width: 370px;\n  }\n}\n.scroll-container {\n  display: block;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  scroll-behavior: smooth;\n  -webkit-overflow-scrolling: touch;\n  margin-bottom: 48px;\n  height: calc(100% - 115px);\n}\n.options-content {\n  padding: 0.5rem;\n  text-align: center;\n  border-bottom: 2px solid #999;\n}\n.options-content h5 {\n  margin: 0;\n}\n.options-selection {\n  background-color: #363636;\n  padding: 0.5rem;\n}\n.options-selection h5 {\n  margin: 0;\n  font-size: 14px;\n  font-size: 0.875rem;\n  line-height: 1;\n  color: white;\n}\n.options-form {\n  padding: 0.5rem;\n}\n.options-form mat-radio-button {\n  margin-bottom: 0.5rem;\n}\n.option-panel .header {\n  padding: 0 0.5rem;\n  margin-bottom: 1rem;\n}\n.option-panel .header h4 {\n  font-size: 14px;\n  font-size: 0.875rem;\n  line-height: 1;\n  letter-spacing: 2px;\n  margin: 0;\n}\n.option-panel ::ng-deep .sub-header {\n  padding: 0.5rem 0;\n}\n.option-panel ::ng-deep .sub-header h4 {\n  font-size: 14px;\n  font-size: 0.875rem;\n  line-height: 1;\n  letter-spacing: 2px;\n  margin: 0;\n}\n.option-panel ::ng-deep .content {\n  padding: 0.5rem;\n}\n.option-panel ::ng-deep .mat-stepper-vertical {\n  background-color: transparent;\n}\n.option-panel ::ng-deep .mat-vertical-stepper-header {\n  padding: 24px 0.5rem;\n}\n.option-panel ::ng-deep .mat-vertical-content-container {\n  margin-left: 20px;\n}\n.option-panel ::ng-deep .mat-vertical-content {\n  padding: 0 0.5rem 0.5rem 0.5rem;\n}\n.option-panel ::ng-deep .mat-vertical-content .content {\n  padding: 0;\n}\n.option-panel ::ng-deep .mat-step-icon i {\n  color: white;\n  font-size: 0.7rem;\n}\n.option-box {\n  background-color: white;\n  margin-bottom: 0.5rem;\n  cursor: pointer;\n}\n.option-box h3,\n.option-box h4 {\n  margin: 0;\n}\n.option-box .image {\n  padding: 0.5rem;\n}\n.option-box .content {\n  padding: 0.5rem;\n}\n.option-box.selected .content {\n  background-color: #63b20b;\n}\n.option-box.selected .content h3,\n.option-box.selected .content h4 {\n  color: white;\n}\n.group-title {\n  padding: 1rem 0.5rem;\n  text-align: center;\n  margin: 0;\n  position: relative;\n  overflow: hidden;\n}\n.group-title:before,\n.group-title:after {\n  content: " ";\n  position: absolute;\n  top: 50%;\n  margin-left: -999em;\n  height: 1px;\n  width: 998em;\n  border-top: 1px solid #999;\n}\n.group-title:after {\n  left: auto;\n  width: 999em;\n  margin: 0 0 0 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvc2Nzcy9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxhcHBcXGN1c3RvbWlzZXJcXHNjc3NcXG9wdGlvbnMuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvc2Nzcy9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b21pc2VyL3Njc3Mvb3B0aW9ucy5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9taXNlci9zY3NzL0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9ub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfYnJlYWtwb2ludHMuc2NzcyIsInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvc2Nzcy9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxzY3NzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQ1hjO0FDS2hCO0FDcURJO0VIckRKO0lBUUksVUFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtFRUpGO0FBQ0Y7QUZPQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUVKRjtBRk9BO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUVKRjtBRktFO0VBQ0UsU0FBQTtBRUhKO0FGT0E7RUFDRSx5QkN4Q007RUR5Q04sZUFBQTtBRUpGO0FGS0U7RUFDRSxTQUFBO0VJTkYsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FIWTtFSlNWLFlBQUE7QUVESjtBRktBO0VBQ0UsZUFBQTtBRUZGO0FGR0U7RUFDRSxxQkFBQTtBRURKO0FGTUU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FFSEo7QUZJSTtFSXZCRixlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUhZO0VKMEJSLG1CQUFBO0VBQ0EsU0FBQTtBRUFOO0FGR0U7RUFDRSxpQkFBQTtBRURKO0FGRUk7RUkvQkYsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FIWTtFSmtDUixtQkFBQTtFQUNBLFNBQUE7QUVFTjtBRkNFO0VBQ0UsZUFBQTtBRUNKO0FGQ0U7RUFDRSw2QkFBQTtBRUNKO0FGQ0U7RUFDRSxvQkFBQTtBRUNKO0FGQ0U7RUFDRSxpQkFBQTtBRUNKO0FGQ0U7RUFDRSwrQkFBQTtBRUNKO0FGQUk7RUFDRSxVQUFBO0FFRU47QUZDRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBRUNKO0FGR0E7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRUFGO0FGQ0U7O0VBRUUsU0FBQTtBRUNKO0FGQ0U7RUFDRSxlQUFBO0FFQ0o7QUZDRTtFQUNFLGVBQUE7QUVDSjtBRkVJO0VBQ0UseUJDN0dFO0FDNkdSO0FGQ007O0VBRUUsWUFBQTtBRUNSO0FGS0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUVGRjtBRktBOztFQUVFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUVGRjtBRklBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBRURGIiwiZmlsZSI6InByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvc2Nzcy9vcHRpb25zLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICdtaXhpbnMnO1xyXG5AaW1wb3J0ICdub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zJztcclxuQGltcG9ydCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzJztcclxuQGltcG9ydCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fZ3JpZCc7XHJcblxyXG4ub3B0aW9ucy1wYW5lbCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmVyeWxpZ2h0Z3JleTtcclxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDMzLjMzJTtcclxuICAgIG1heC13aWR0aDogMzcwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2Nyb2xsLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDExNXB4KTtcclxufVxyXG5cclxuLm9wdGlvbnMtY29udGVudCB7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgJG1pZGdyZXk7XHJcbiAgaDUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm9wdGlvbnMtc2VsZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGg1IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIEBpbmNsdWRlIGZvbnQtc2l6ZSgxNCwgMTQpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLm9wdGlvbnMtZm9ybSB7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIG1hdC1yYWRpby1idXR0b24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLm9wdGlvbi1wYW5lbCB7XHJcbiAgLmhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBoNCB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQtc2l6ZSgxNCwgMTQpO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAuc3ViLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcclxuICAgIGg0IHtcclxuICAgICAgQGluY2x1ZGUgZm9udC1zaXplKDE0LCAxNCk7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcbiAgOjpuZy1kZWVwIC5jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5tYXQtc3RlcHBlci12ZXJ0aWNhbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5tYXQtdmVydGljYWwtc3RlcHBlci1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMjRweCAwLjVyZW07XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubWF0LXZlcnRpY2FsLWNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLm1hdC12ZXJ0aWNhbC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDAgMC41cmVtIDAuNXJlbSAwLjVyZW07XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubWF0LXN0ZXAtaWNvbiBpIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLm9wdGlvbi1ib3gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaDMsXHJcbiAgaDQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAuaW1hZ2Uge1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gIH1cclxuICAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgfVxyXG4gICYuc2VsZWN0ZWQge1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XHJcbiAgICAgIGgzLFxyXG4gICAgICBoNCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZ3JvdXAtdGl0bGUge1xyXG4gIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5ncm91cC10aXRsZTpiZWZvcmUsXHJcbi5ncm91cC10aXRsZTphZnRlciB7XHJcbiAgY29udGVudDogJyAnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTk5OWVtO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHdpZHRoOiA5OThlbTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgJG1pZGdyZXk7XHJcbn1cclxuLmdyb3VwLXRpdGxlOmFmdGVyIHtcclxuICBsZWZ0OiBhdXRvO1xyXG4gIHdpZHRoOiA5OTllbTtcclxuICBtYXJnaW46IDAgMCAwIDFlbTtcclxufVxyXG4iLCIvL0NvbG9yc1xyXG4kYmxhY2s6ICMzNjM2MzY7XHJcbiR2ZXJ5bGlnaHRncmV5OiAjZjVmNWY1O1xyXG4kbGlnaHRncmV5OiAjZWRlZGVkO1xyXG4kbWlkZ3JleTogIzk5OTtcclxuJGRhcmtncmV5OiAjNjY2O1xyXG4kZ3JlZW46ICM2M2IyMGI7XHJcbiRyZWQ6ICNjZTA1MDU7XHJcbi8vRm9udHNcclxuJGRlZmF1bHRGb250OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuJGRpc3BsYXlGb250OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuIiwiLm9wdGlvbnMtcGFuZWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAub3B0aW9ucy1wYW5lbCB7XG4gICAgbGVmdDogYXV0bztcbiAgICB3aWR0aDogMzMuMzMlO1xuICAgIG1heC13aWR0aDogMzcwcHg7XG4gIH1cbn1cblxuLnNjcm9sbC1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTE1cHgpO1xufVxuXG4ub3B0aW9ucy1jb250ZW50IHtcbiAgcGFkZGluZzogMC41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjOTk5O1xufVxuLm9wdGlvbnMtY29udGVudCBoNSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLm9wdGlvbnMtc2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzNjtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuLm9wdGlvbnMtc2VsZWN0aW9uIGg1IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5vcHRpb25zLWZvcm0ge1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG4ub3B0aW9ucy1mb3JtIG1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbi5vcHRpb24tcGFuZWwgLmhlYWRlciB7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLm9wdGlvbi1wYW5lbCAuaGVhZGVyIGg0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgbWFyZ2luOiAwO1xufVxuLm9wdGlvbi1wYW5lbCA6Om5nLWRlZXAgLnN1Yi1oZWFkZXIge1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbn1cbi5vcHRpb24tcGFuZWwgOjpuZy1kZWVwIC5zdWItaGVhZGVyIGg0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgbWFyZ2luOiAwO1xufVxuLm9wdGlvbi1wYW5lbCA6Om5nLWRlZXAgLmNvbnRlbnQge1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG4ub3B0aW9uLXBhbmVsIDo6bmctZGVlcCAubWF0LXN0ZXBwZXItdmVydGljYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5vcHRpb24tcGFuZWwgOjpuZy1kZWVwIC5tYXQtdmVydGljYWwtc3RlcHBlci1oZWFkZXIge1xuICBwYWRkaW5nOiAyNHB4IDAuNXJlbTtcbn1cbi5vcHRpb24tcGFuZWwgOjpuZy1kZWVwIC5tYXQtdmVydGljYWwtY29udGVudC1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5vcHRpb24tcGFuZWwgOjpuZy1kZWVwIC5tYXQtdmVydGljYWwtY29udGVudCB7XG4gIHBhZGRpbmc6IDAgMC41cmVtIDAuNXJlbSAwLjVyZW07XG59XG4ub3B0aW9uLXBhbmVsIDo6bmctZGVlcCAubWF0LXZlcnRpY2FsLWNvbnRlbnQgLmNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xufVxuLm9wdGlvbi1wYW5lbCA6Om5nLWRlZXAgLm1hdC1zdGVwLWljb24gaSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAwLjdyZW07XG59XG5cbi5vcHRpb24tYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm9wdGlvbi1ib3ggaDMsXG4ub3B0aW9uLWJveCBoNCB7XG4gIG1hcmdpbjogMDtcbn1cbi5vcHRpb24tYm94IC5pbWFnZSB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cbi5vcHRpb24tYm94IC5jb250ZW50IHtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuLm9wdGlvbi1ib3guc2VsZWN0ZWQgLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjNiMjBiO1xufVxuLm9wdGlvbi1ib3guc2VsZWN0ZWQgLmNvbnRlbnQgaDMsXG4ub3B0aW9uLWJveC5zZWxlY3RlZCAuY29udGVudCBoNCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmdyb3VwLXRpdGxlIHtcbiAgcGFkZGluZzogMXJlbSAwLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ncm91cC10aXRsZTpiZWZvcmUsXG4uZ3JvdXAtdGl0bGU6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC05OTllbTtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiA5OThlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM5OTk7XG59XG5cbi5ncm91cC10aXRsZTphZnRlciB7XG4gIGxlZnQ6IGF1dG87XG4gIHdpZHRoOiA5OTllbTtcbiAgbWFyZ2luOiAwIDAgMCAxZW07XG59IiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCJAbWl4aW4gZmx1aWQtdHlwZSgkcHJvcGVydGllcywgJG1pbi12dywgJG1heC12dywgJG1pbi12YWx1ZSwgJG1heC12YWx1ZSkge1xyXG4gIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAjeyRwcm9wZXJ0eX06ICRtaW4tdmFsdWU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWluLXZ3KSB7XHJcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgICAjeyRwcm9wZXJ0eX06IGNhbGMoXHJcbiAgICAgICAgI3skbWluLXZhbHVlfSArICN7c3RyaXAtdW5pdCgkbWF4LXZhbHVlIC0gJG1pbi12YWx1ZSl9ICpcclxuICAgICAgICAgIChcclxuICAgICAgICAgICAgMTAwdncgLSAjeyRtaW4tdnd9XHJcbiAgICAgICAgICApIC8gI3tzdHJpcC11bml0KCRtYXgtdncgLSAkbWluLXZ3KX1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtYXgtdncpIHtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgICN7JHByb3BlcnR5fTogJG1heC12YWx1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBzdHJpcC11bml0KCR2YWx1ZSkge1xyXG4gIEByZXR1cm4gJHZhbHVlIC8gKCR2YWx1ZSAqIDAgKyAxKTtcclxufVxyXG5cclxuQG1peGluIHdyYXBwZXIoJHdpZHRoOjE0NDBweCkge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAkd2lkdGg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMS41cmVtO1xyXG59XHJcblxyXG5AbWl4aW4gZm9udC1zaXplKCRmb250U2l6ZSwgJGxpbmVIZWlnaHQ6IDEpIHtcclxuICAkcmVtVmFsdWU6ICgkZm9udFNpemUgLyAxNik7XHJcbiAgJHB4VmFsdWU6ICRmb250U2l6ZTtcclxuICAkbGluZVZhbHVlOiAoJGxpbmVIZWlnaHQgLyAkZm9udFNpemUpO1xyXG4gIGZvbnQtc2l6ZTogJHB4VmFsdWUgKyBweDtcclxuICBmb250LXNpemU6ICRyZW1WYWx1ZSArIHJlbTtcclxuICBsaW5lLWhlaWdodDogJGxpbmVWYWx1ZTtcclxufVxyXG4iXX0= */';
    },
    "./src/app/customiser/services/customiser-options.service.ts": 
    /*!*******************************************************************!*\
  !*** ./src/app/customiser/services/customiser-options.service.ts ***!
  \*******************************************************************/
    /*! exports provided: CustomiserOptionsService */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "CustomiserOptionsService", (function() {
            return CustomiserOptionsService;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../reducers */ "./src/app/customiser/reducers/index.ts");
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
        var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
        var _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @gorniv/ngx-universal */ "../../node_modules/@gorniv/ngx-universal/fesm2015/gorniv-ngx-universal.js");
        let CustomiserOptionsService = class CustomiserOptionsService {
            constructor(router, store, cookieService) {
                this.router = router;
                this.store = store;
                this.cookieService = cookieService;
                this.actionBarHeight = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"];
                this.panels$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["getPanels"]));
                this.styles$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["getStyles"]));
            }
            product$() {
                return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["getProduct"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((product => {
                    if (product) {
                        this.product = product;
                    }
                })));
            }
            get showTouchHelp() {
                const helpCookie = this.cookieService.get("touch-help");
                return !helpCookie ? true : false;
            }
            setTouchHelp() {
                this.cookieService.put("touch-help", "true", {
                    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1e3)
                });
            }
            get menuUrl() {
                return `/customiser/${this.product._id}`;
            }
            getFontSize(font) {
                let fontSize;
                switch (this.product.category._id) {
                  case "58ac13a9dc142c612ab61fb1":
                  case "58ac145cdc142c612ab61fb3":
                  case "58ac142bdc142c612ab61fb2":
                  case "58ac14b4dc142c612ab61fb4":
                  case "58ac16a45d44a5242cc5e4e4":
                  case "58ac16dc5d44a5242cc5e4e5":
                  case "58ac17675d44a5242cc5e4e6":
                  case "5d567912c3d7d431d3c00b9b":
                  case "5d5c362795a69d3256ae113b":
                  case "5d5c393595a69d3256ae11d7":
                    fontSize = 12;
                    break;

                  case "58ac17c95d44a5242cc5e4e7":
                  case "5961e16b66af8806440e7db9":
                  case "59871a29ecd891d62778dd3a":
                  case "5999c0b45eac93573463e436":
                    fontSize = 29;
                    break;
                }
                if (font && font === "ballantines") {
                    fontSize = fontSize * 1.8;
                }
                return fontSize;
            }
            getLogo() {
                let position;
                switch (this.product.category._id) {
                  case "58ac13a9dc142c612ab61fb1":
                    position = {
                        x: 252,
                        y: 237,
                        width: 20,
                        height: 20
                    };
                    break;

                  case "5d567912c3d7d431d3c00b9b":
                    position = {
                        x: 354,
                        y: 237,
                        width: 20,
                        height: 20
                    };
                    break;

                  case "58ac145cdc142c612ab61fb3":
                    position = {
                        x: 262,
                        y: 235,
                        width: 20,
                        height: 20
                    };
                    break;

                  case "58ac142bdc142c612ab61fb2":
                    position = {
                        x: 258,
                        y: 190,
                        width: 20,
                        height: 20
                    };
                    break;

                  case "58ac14b4dc142c612ab61fb4":
                    position = {
                        x: 212,
                        y: 184,
                        width: 20,
                        height: 20
                    };
                    break;

                  case "58ac16a45d44a5242cc5e4e4":
                    position = {
                        x: 183,
                        y: 99,
                        width: 20,
                        height: 20
                    };
                    break;

                  case "58ac16dc5d44a5242cc5e4e5":
                    position = {
                        x: 118,
                        y: 112,
                        width: 20,
                        height: 20
                    };
                    break;

                  case "5d5c362795a69d3256ae113b":
                    position = {
                        x: 36,
                        y: 106,
                        width: 20,
                        height: 20
                    };
                    break;

                  case "58ac17675d44a5242cc5e4e6":
                    position = {
                        x: 175,
                        y: 163,
                        width: 20,
                        height: 20
                    };
                    break;

                  case "5d5c393595a69d3256ae11d7":
                    position = {
                        x: 180,
                        y: 168,
                        width: 20,
                        height: 20
                    };
                    break;

                  case "58ac17c95d44a5242cc5e4e7":
                    position = {
                        x: 30,
                        y: 245,
                        width: 50,
                        height: 50
                    };
                    break;

                  case "5961e16b66af8806440e7db9":
                    position = {
                        x: 56,
                        y: 190,
                        width: 50,
                        height: 50
                    };
                    break;

                  case "59871a29ecd891d62778dd3a":
                    position = {
                        x: 141,
                        y: 135,
                        width: 50,
                        height: 50
                    };
                    break;

                  case "5999c0b45eac93573463e436":
                    position = {
                        x: 160,
                        y: 88,
                        width: 50,
                        height: 50
                    };
                    break;
                }
                return position;
            }
            getWaistBadge() {
                let positions = [];
                switch (this.product.category._id) {
                  case "58ac13a9dc142c612ab61fb1":
                    positions = [ {
                        position: "left",
                        x: 66,
                        y: 15,
                        width: 11,
                        height: 30,
                        rotate: 0
                    }, {
                        position: "right",
                        x: 235,
                        y: 15,
                        width: 11,
                        height: 30,
                        rotate: 180
                    } ];
                    break;

                  case "58ac145cdc142c612ab61fb3":
                    positions = [ {
                        position: "left",
                        x: 73,
                        y: 15,
                        width: 11,
                        height: 30,
                        rotate: 0
                    }, {
                        position: "right",
                        x: 232,
                        y: 15,
                        width: 11,
                        height: 30,
                        rotate: 180
                    } ];
                    break;

                  case "58ac142bdc142c612ab61fb2":
                    positions = [ {
                        position: "left",
                        x: 64,
                        y: 42,
                        width: 11,
                        height: 30,
                        rotate: 0
                    }, {
                        position: "right",
                        x: 234,
                        y: 43,
                        width: 11,
                        height: 30,
                        rotate: 180
                    } ];
                    break;

                  default:
                    positions = [];
                    break;
                }
                return positions;
            }
            getStyle(id) {
                return this.styles$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((styles => styles.find((style => style._id === id)))));
            }
            getPanel(id) {
                return this.panels$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((panels => panels.find((panel => panel._id === id)))));
            }
            backToMenu() {
                this.router.navigate([ this.menuUrl ], {
                    skipLocationChange: true
                });
            }
        };
        CustomiserOptionsService.ctorParameters = () => [ {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }, {
            type: _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
        } ];
        CustomiserOptionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_7__["CookieService"] ]) ], CustomiserOptionsService);
    },
    "./src/app/customiser/services/design-resolver.service.ts": 
    /*!****************************************************************!*\
  !*** ./src/app/customiser/services/design-resolver.service.ts ***!
  \****************************************************************/
    /*! exports provided: DesignResolverService */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "DesignResolverService", (function() {
            return DesignResolverService;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
        var _app_customiser_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/customiser/reducers */ "./src/app/customiser/reducers/index.ts");
        let DesignResolverService = class DesignResolverService {
            constructor(store) {
                this.store = store;
            }
            resolve(route, state) {
                return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_app_customiser_reducers__WEBPACK_IMPORTED_MODULE_4__["getDesign"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
            }
        };
        DesignResolverService.ctorParameters = () => [ {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        } ];
        DesignResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] ]) ], DesignResolverService);
    },
    "./src/app/customiser/services/design.service.ts": 
    /*!*******************************************************!*\
  !*** ./src/app/customiser/services/design.service.ts ***!
  \*******************************************************/
    /*! exports provided: DesignService */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "DesignService", (function() {
            return DesignService;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _app_core_modules_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/modules/loading/loading.service */ "./src/app/core/modules/loading/loading.service.ts");
        var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "../../node_modules/jwt-decode/lib/index.js");
        var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
        var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
        var _customiser_options_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customiser-options.service */ "./src/app/customiser/services/customiser-options.service.ts");
        var _svg_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./svg.service */ "./src/app/customiser/services/svg.service.ts");
        var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../reducers */ "./src/app/customiser/reducers/index.ts");
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
        var _actions_design__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/design */ "./src/app/customiser/actions/design.ts");
        var _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @gorniv/ngx-universal */ "../../node_modules/@gorniv/ngx-universal/fesm2015/gorniv-ngx-universal.js");
        let DesignService = class DesignService {
            constructor(cookieService, svgService, optionsService, loading, store) {
                this.cookieService = cookieService;
                this.svgService = svgService;
                this.optionsService = optionsService;
                this.loading = loading;
                this.store = store;
                this.addToCartSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"];
                this.addToCartEmitted$ = this.addToCartSource.asObservable();
                this.updateCartSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"];
                this.updateCartEmitted$ = this.updateCartSource.asObservable();
                this.updateOrderAdminSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"];
                this.updateOrderAdminEmitted$ = this.updateOrderAdminSource.asObservable();
                this.design$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_7__["getDesign"]));
                this.styles$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_7__["getStyles"]));
                this.panels$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_7__["getPanels"]));
                this.product$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_7__["getProduct"]));
                store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_7__["getProduct"])).subscribe((product => this._product = product));
            }
            get product() {
                return this._product;
            }
            get cartId() {
                return this.cookieService.get("custom-design-cart");
            }
            get editDesign() {
                return this.cartId ? true : false;
            }
            get editOrder() {
                return this.orderId ? true : false;
            }
            get chatHelp() {
                return this.chatToken ? true : false;
            }
            get tokenPrefix() {
                return this.editDesign ? "custom-design-edit-" : "custom-design-";
            }
            decodeToken() {
                if (!this.token) {
                    return null;
                }
                const payload = jwt_decode__WEBPACK_IMPORTED_MODULE_3__(this.token);
                if (this.payloadIsValid(payload)) {
                    return payload;
                }
                return null;
            }
            deleteToken() {
                this.cookieService.remove(`${this.tokenPrefix}${this.product._id}`);
                this.cookieService.remove("custom-design-cart");
            }
            get cookieId() {
                return `${this.tokenPrefix}${this.product._id}`;
            }
            get token() {
                if (this.editOrder) {
                    return this.adminToken;
                }
                if (this.chatHelp) {
                    return this.chatToken;
                }
                return this.cookieService.get(this.cookieId);
            }
            get selectedObject() {
                return this._selectedObject;
            }
            set selectedObject(object) {
                this._selectedObject = object;
            }
            setSelectedObject(object) {
                this.selectedObject = {
                    type: `${object.type}s`,
                    _id: object._id,
                    object: object
                };
                this.cookieService.put("custom-dragged", "true", {
                    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1e3)
                });
            }
            get dragObject() {
                if (!this.selectedObject) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
                }
                return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_7__["getDragObject"](this.selectedObject.type, this.selectedObject._id)));
            }
            saveOption(loader = true, data) {
                if (loader) {
                    this.loading.show("Updating Design", "0px");
                }
                if (this.editOrder) {
                    data.admin = true;
                }
                if (this.decodeToken()) {
                    this.store.dispatch(new _actions_design__WEBPACK_IMPORTED_MODULE_9__["UpdateDesign"](this.decodeToken()._id, data));
                } else {
                    this.store.dispatch(new _actions_design__WEBPACK_IMPORTED_MODULE_9__["CreateDesign"](data));
                }
            }
            updateSub(loader = true, data, query) {
                if (!this.decodeToken()) {
                    this.store.dispatch(new _actions_design__WEBPACK_IMPORTED_MODULE_9__["RecreateDesign"]);
                    return;
                }
                if (loader) {
                    this.loading.show("Updating Design", "0px");
                }
                query._id = this.decodeToken()._id;
                if (this.editOrder) {
                    data.admin = true;
                }
                this.store.dispatch(new _actions_design__WEBPACK_IMPORTED_MODULE_9__["UpdateDesign"](null, data, query));
            }
            updateObject(object, type) {
                if (!this.decodeToken()) {
                    this.store.dispatch(new _actions_design__WEBPACK_IMPORTED_MODULE_9__["RecreateDesign"]);
                    return;
                }
                this.store.dispatch(new _actions_design__WEBPACK_IMPORTED_MODULE_9__["UpdateObject"](object, type, this.decodeToken()._id, this.editOrder));
            }
            saveToAccount(loader = true, data) {
                if (!this.decodeToken()) {
                    return;
                }
                if (loader) {
                    this.loading.show("Saving Design", "0px");
                }
                this.store.dispatch(new _actions_design__WEBPACK_IMPORTED_MODULE_9__["SaveDesignToAccount"](this.decodeToken()._id, data));
            }
            clearDesign() {
                this.store.dispatch(new _actions_design__WEBPACK_IMPORTED_MODULE_9__["ClearDesign"](this.optionsService.getLogo()));
                this.deleteToken();
            }
            addToCart() {
                this.addToCartSource.next();
            }
            updateCart() {
                this.updateCartSource.next();
            }
            updateOrderAdmin() {
                this.updateOrderAdminSource.next();
            }
            backToMenu() {
                this.optionsService.backToMenu();
            }
            payloadIsValid(payload) {
                return payload && (!payload.exp || payload.exp * 1e3 > (new Date).getTime());
            }
        };
        DesignService.ctorParameters = () => [ {
            type: _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_10__["CookieService"]
        }, {
            type: _svg_service__WEBPACK_IMPORTED_MODULE_6__["SvgService"]
        }, {
            type: _customiser_options_service__WEBPACK_IMPORTED_MODULE_5__["CustomiserOptionsService"]
        }, {
            type: _app_core_modules_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]
        }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]
        } ];
        DesignService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_10__["CookieService"], _svg_service__WEBPACK_IMPORTED_MODULE_6__["SvgService"], _customiser_options_service__WEBPACK_IMPORTED_MODULE_5__["CustomiserOptionsService"], _app_core_modules_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"] ]) ], DesignService);
    },
    "./src/app/customiser/services/resolver.service.ts": 
    /*!*********************************************************!*\
  !*** ./src/app/customiser/services/resolver.service.ts ***!
  \*********************************************************/
    /*! exports provided: ResolverService */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "ResolverService", (function() {
            return ResolverService;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _actions_design__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../actions/design */ "./src/app/customiser/actions/design.ts");
        var _app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
        var _customiser_options_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customiser-options.service */ "./src/app/customiser/services/customiser-options.service.ts");
        var _design_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./design.service */ "./src/app/customiser/services/design.service.ts");
        var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/core/services/api.service */ "./src/app/core/services/api.service.ts");
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
        var _app_core_modules_loading_loading_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/core/modules/loading/loading.service */ "./src/app/core/modules/loading/loading.service.ts");
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
        var _actions_options__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions/options */ "./src/app/customiser/actions/options.ts");
        var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm2015/effects.js");
        let ResolverService = class ResolverService {
            constructor(auth, api, optionsService, designService, loading, store, action$) {
                this.auth = auth;
                this.api = api;
                this.optionsService = optionsService;
                this.designService = designService;
                this.loading = loading;
                this.store = store;
                this.action$ = action$;
                this.roles = [ "admin", "staff", "accounts" ];
            }
            resolve(route, state) {
                this.loading.show("Starting customiser...", "0px");
                const id = route.params.id;
                const isAdmin = this.auth.checkRoles(this.roles);
                if (route.queryParams.admin && route.queryParams.order && isAdmin) {
                    this.designService.adminToken = route.queryParams.admin;
                    this.designService.orderItemId = route.queryParams.item;
                    this.designService.orderId = route.queryParams.order;
                } else if (route.queryParams.chat_help && isAdmin) {
                    this.designService.chatToken = route.queryParams.chat_help;
                } else {
                    this.designService.adminToken = null;
                    this.designService.orderItemId = null;
                    this.designService.orderId = null;
                    this.designService.chatToken = null;
                }
                return this.api.get("custom-product-customiser", id, null, false).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])((product => {
                    this.optionsService.product = product;
                    this.store.dispatch(new _actions_options__WEBPACK_IMPORTED_MODULE_11__["LoadOptions"](product));
                    const decodeToken = this.designService.decodeToken();
                    if (decodeToken) {
                        this.store.dispatch(new _actions_design__WEBPACK_IMPORTED_MODULE_1__["FetchDesign"](decodeToken._id));
                        const responseOK = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["ofType"])(_actions_design__WEBPACK_IMPORTED_MODULE_1__["LOAD_DESIGN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((resp => resp.payload)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1));
                        const responseError = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["ofType"])(_actions_design__WEBPACK_IMPORTED_MODULE_1__["DESIGN_ERROR"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])((() => {
                            this.store.dispatch(new _actions_design__WEBPACK_IMPORTED_MODULE_1__["ResetDesign"](this.optionsService.getLogo()));
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({});
                        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1));
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["race"])(responseOK, responseError);
                    } else {
                        this.store.dispatch(new _actions_design__WEBPACK_IMPORTED_MODULE_1__["ResetDesign"](this.optionsService.getLogo()));
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({});
                    }
                })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])((err => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({}))));
            }
        };
        ResolverService.ctorParameters = () => [ {
            type: _app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
            type: _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
        }, {
            type: _customiser_options_service__WEBPACK_IMPORTED_MODULE_3__["CustomiserOptionsService"]
        }, {
            type: _design_service__WEBPACK_IMPORTED_MODULE_4__["DesignService"]
        }, {
            type: _app_core_modules_loading_loading_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"]
        }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"]
        }, {
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["Actions"]
        } ];
        ResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"], _customiser_options_service__WEBPACK_IMPORTED_MODULE_3__["CustomiserOptionsService"], _design_service__WEBPACK_IMPORTED_MODULE_4__["DesignService"], _app_core_modules_loading_loading_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["Actions"] ]) ], ResolverService);
    },
    "./src/app/customiser/services/sizing.service.ts": 
    /*!*******************************************************!*\
  !*** ./src/app/customiser/services/sizing.service.ts ***!
  \*******************************************************/
    /*! exports provided: SizingService */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "SizingService", (function() {
            return SizingService;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        let SizingService = class SizingService {
            constructor() {}
            getSize(unit, weight) {
                let size;
                if (unit === "KGS") {
                    switch (true) {
                      case 0 <= weight && weight < 10:
                        size = "Baby";
                        break;

                      case 10 <= weight && weight < 16:
                        size = "Toddler (2-4)";
                        break;

                      case 16 <= weight && weight < 22:
                        size = "Small Child (4-6)";
                        break;

                      case 22 <= weight && weight < 30:
                        size = "Med Child (7-9)";
                        break;

                      case 30 <= weight && weight < 40:
                        size = "Large Child, 3XS (10-11)";
                        break;

                      case 40 <= weight && weight < 50:
                        size = "Youth, 2XS (12-14)";
                        break;

                      case 50 <= weight && weight < 59:
                        size = "XS";
                        break;

                      case 59 <= weight && weight < 69:
                        size = "S";
                        break;

                      case 69 <= weight && weight < 79:
                        size = "M";
                        break;

                      case 79 <= weight && weight < 90:
                        size = "L";
                        break;

                      case 90 <= weight && weight < 101:
                        size = "XL";
                        break;

                      case 101 <= weight && weight < 111:
                        size = "2XL";
                        break;

                      case 111 <= weight && weight < 120:
                        size = "3XL";
                        break;

                      case 120 <= weight:
                        size = "4XL";
                        break;
                    }
                } else {
                    switch (true) {
                      case 0 <= weight && weight < 22:
                        size = "Baby";
                        break;

                      case 22 <= weight && weight < 35.3:
                        size = "Toddler (2-4)";
                        break;

                      case 35.3 <= weight && weight < 48.5:
                        size = "Small Child (4-6)";
                        break;

                      case 48.5 <= weight && weight < 66.1:
                        size = "Med Child (7-9)";
                        break;

                      case 66.1 <= weight && weight < 88.2:
                        size = "Large Child, 3XS (10-11)";
                        break;

                      case 88.2 <= weight && weight < 110.2:
                        size = "Youth, 2XS (12-14)";
                        break;

                      case 110.2 <= weight && weight < 130:
                        size = "XS";
                        break;

                      case 130 <= weight && weight < 152.1:
                        size = "S";
                        break;

                      case 152.1 <= weight && weight < 174.2:
                        size = "M";
                        break;

                      case 174.2 <= weight && weight < 198.4:
                        size = "L";
                        break;

                      case 198.4 <= weight && weight < 222.7:
                        size = "XL";
                        break;

                      case 222.7 <= weight && weight < 244.7:
                        size = "2XL";
                        break;

                      case 244.7 <= weight && weight < 264.6:
                        size = "3XL";
                        break;

                      case 264.6 <= weight:
                        size = "4XL";
                        break;
                    }
                }
                return size;
            }
        };
        SizingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []) ], SizingService);
    },
    "./src/app/customiser/services/svg.service.ts": 
    /*!****************************************************!*\
  !*** ./src/app/customiser/services/svg.service.ts ***!
  \****************************************************/
    /*! exports provided: SvgService */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "SvgService", (function() {
            return SvgService;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        let SvgService = class SvgService {
            constructor(location) {
                this.location = location;
                this.patterns = [];
                this.nameFillPatterns = [];
                this.nameOutlinePatterns = [];
                this.nameFilters = [];
                this.imageBaseUrl = `https://img.boxxerworld.com/`;
                this.imageTransform = "?width=800";
            }
            forEach(array, callback, scope) {
                for (let i = 0; i < array.length; i++) {
                    callback.call(scope, i, array[i]);
                }
            }
            hideOptional(setting) {
                if (setting.area_size.optional || setting.muay_thai) {
                    let elements = this.template.nativeElement.querySelectorAll(`g#${setting.panel} path, g#${setting.panel} circle, g#${setting.panel} ellipse`);
                    if (!elements.length) {
                        elements = this.template.nativeElement.querySelectorAll(`g#${setting.panel}`);
                    }
                    this.forEach(elements, ((index, element) => {
                        element.setAttribute("visibility", "hidden");
                    }), this);
                }
            }
            setDefault(setting) {
                if (setting.default_material) {
                    this.addColor(setting.default_material, setting.panel);
                }
            }
            addColor(material, panel, useBase = true, optional = false) {
                let clearOptional = false;
                this.base = useBase ? this.location.path() : "";
                const getPattern = this.patterns.find((item => `${panel}Pattern` === item.id));
                if (!material) {
                    material = {
                        hex: "#ffffff"
                    };
                    clearOptional = true;
                }
                if (getPattern) {
                    getPattern.image = !material.image ? null : `${this.imageBaseUrl}${material.image.key}${this.imageTransform}`;
                    getPattern.hex = !material.hex ? null : material.hex;
                    this.patterns.slice(0);
                } else {
                    this.patterns.push({
                        id: `${panel}Pattern`,
                        hex: !material.hex ? null : material.hex,
                        image: !material.image ? null : `${this.imageBaseUrl}${material.image.key}${this.imageTransform}`
                    });
                }
                if (this.template && this.template.nativeElement) {
                    let elements = this.template.nativeElement.querySelectorAll(`g#${panel} path, g#${panel} circle, g#${panel} ellipse`);
                    if (!elements.length) {
                        elements = this.template.nativeElement.querySelectorAll(`g#${panel}`);
                    }
                    this.forEach(elements, ((index, element) => {
                        element.setAttribute("fill", `url(${this.base}#${panel}Pattern)`);
                        if (clearOptional && optional) {
                            element.setAttribute("visibility", "hidden");
                        } else if (optional) {
                            element.setAttribute("visibility", "visible");
                        }
                    }), this);
                }
            }
            addNameFillColour(name) {
                const getPattern = this.nameFillPatterns.find((item => `NameFill${name._id}Pattern` === item.id));
                if (!name.fill) {
                    name.fill = {
                        hex: "#ffffff"
                    };
                }
                if (getPattern) {
                    getPattern.image = !name.fill.image ? null : `${this.imageBaseUrl}${name.fill.image.key}${this.imageTransform}`;
                    getPattern.hex = !name.fill.hex ? null : name.fill.hex;
                    getPattern.crystal = !name.crystal ? null : `Crystal${name._id}Pattern`;
                    this.nameFillPatterns.slice(0);
                } else {
                    this.nameFillPatterns.push({
                        id: `NameFill${name._id}Pattern`,
                        hex: !name.fill.hex ? null : name.fill.hex,
                        image: !name.fill.image ? null : `${this.imageBaseUrl}${name.fill.image.key}${this.imageTransform}`,
                        crystal: !name.crystal ? null : name.crystal.data_uri
                    });
                }
                const getNameFilter = this.nameFilters.find((item => `Filter${name._id}` === item.id));
                if (getNameFilter) {
                    getNameFilter.crystal = !name.crystal ? null : name.crystal.data_uri;
                    getNameFilter.text3d = name.finish ? name.finish.text3d : false;
                    this.nameFilters.slice(0);
                } else {
                    this.nameFilters.push({
                        id: `Filter${name._id}`,
                        crystal: !name.crystal ? null : name.crystal.data_uri,
                        text3d: name.finish ? name.finish.text3d : false
                    });
                }
            }
            addNameOutlineColour(name) {
                const getPattern = this.nameOutlinePatterns.find((item => `NameOutline${name._id}Pattern` === item.id));
                if (!name.outline) {
                    name.outline = {
                        hex: "#ffffff"
                    };
                }
                if (getPattern) {
                    getPattern.image = !name.outline.image ? null : `${this.imageBaseUrl}${name.outline.image.key}${this.imageTransform}`;
                    getPattern.hex = !name.outline.hex ? null : name.outline.hex;
                    this.patterns.slice(0);
                } else {
                    this.nameOutlinePatterns.push({
                        id: `NameOutline${name._id}Pattern`,
                        hex: !name.outline.hex ? null : name.outline.hex,
                        image: !name.outline.image ? null : `${this.imageBaseUrl}${name.outline.image.key}${this.imageTransform}`
                    });
                }
            }
        };
        SvgService.ctorParameters = () => [ {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
        } ];
        SvgService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] ]) ], SvgService);
    },
    "./src/app/customiser/svg/svg-image.component.ts": 
    /*!*******************************************************!*\
  !*** ./src/app/customiser/svg/svg-image.component.ts ***!
  \*******************************************************/
    /*! exports provided: SvgImageComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "SvgImageComponent", (function() {
            return SvgImageComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _app_customiser_services_design_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/customiser/services/design.service */ "./src/app/customiser/services/design.service.ts");
        var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "../environments/environment.ts");
        var _global_models_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @global/models/image */ "../global/models/image.ts");
        let SvgImageComponent = class SvgImageComponent {
            constructor(designService) {
                this.designService = designService;
            }
            setObject(isSelect) {
                if (isSelect) {
                    this.selectedObject = this.designService.dragObject;
                }
            }
            get currentObject() {
                return this.selectedObject ? this.selectedObject : this.object;
            }
            get imageUrl() {
                return this.image ? `${_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].image_cdn}/${this.image.key}?width=300` : null;
            }
            get width() {
                return this.currentObject.position.width * this.currentObject.position.scale;
            }
            get height() {
                return this.currentObject.position.height * this.currentObject.position.scale;
            }
            get center_x() {
                return this.width / 2;
            }
            get center_y() {
                return this.height / 2;
            }
            get rotation_string() {
                return `translate(${this.currentObject.position.x} ${this.currentObject.position.y}) rotate(${this.currentObject.position.rotate} ${this.center_x} ${this.center_y})`;
            }
        };
        SvgImageComponent.ctorParameters = () => [ {
            type: _app_customiser_services_design_service__WEBPACK_IMPORTED_MODULE_1__["DesignService"]
        } ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], SvgImageComponent.prototype, "object", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _global_models_image__WEBPACK_IMPORTED_MODULE_4__["Image"]) ], SvgImageComponent.prototype, "image", void 0);
        SvgImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "bx-svg-image, [bx-svg-image]",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./svg-image.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/svg/svg-image.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _app_customiser_services_design_service__WEBPACK_IMPORTED_MODULE_1__["DesignService"] ]) ], SvgImageComponent);
    },
    "./src/app/customiser/svg/svg-logo.component.ts": 
    /*!******************************************************!*\
  !*** ./src/app/customiser/svg/svg-logo.component.ts ***!
  \******************************************************/
    /*! exports provided: SvgLogoComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "SvgLogoComponent", (function() {
            return SvgLogoComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        let SvgLogoComponent = class SvgLogoComponent {
            constructor() {}
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], SvgLogoComponent.prototype, "logo", void 0);
        SvgLogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bx-svg-logo, [bx-svg-logo]",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./svg-logo.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/svg/svg-logo.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []) ], SvgLogoComponent);
    },
    "./src/app/customiser/svg/svg-text.component.scss": 
    /*!********************************************************!*\
  !*** ./src/app/customiser/svg/svg-text.component.scss ***!
  \********************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b21pc2VyL3N2Zy9zdmctdGV4dC5jb21wb25lbnQuc2NzcyJ9 */";
    },
    "./src/app/customiser/svg/svg-text.component.ts": 
    /*!******************************************************!*\
  !*** ./src/app/customiser/svg/svg-text.component.ts ***!
  \******************************************************/
    /*! exports provided: SvgTextComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "SvgTextComponent", (function() {
            return SvgTextComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _app_customiser_services_design_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/customiser/services/design.service */ "./src/app/customiser/services/design.service.ts");
        let SvgTextComponent = class SvgTextComponent {
            constructor(location, designService) {
                this.location = location;
                this.designService = designService;
            }
            setObject(isSelect) {
                if (isSelect) {
                    this.selectedObject = this.designService.dragObject;
                }
            }
            get bBox() {
                return this.svgText.nativeElement.getBBox();
            }
            get currentObject() {
                return this.selectedObject ? this.selectedObject : this.name;
            }
            get base() {
                return this.location.path();
            }
            get filterUrl() {
                return `url(${this.base}#Filter${this.name._id})`;
            }
            get fillUrl() {
                if (this.name.fill) {
                    return `url(${this.base}#NameFill${this.name._id}Pattern)`;
                } else {
                    return ``;
                }
            }
            get outlineUrl() {
                if (this.name.outline) {
                    return `url(${this.base}#NameOutline${this.name._id}Pattern)`;
                } else {}
            }
            get width() {
                return this.currentObject.position.width * this.currentObject.position.scale;
            }
            get height() {
                return this.currentObject.position.height * this.currentObject.position.scale - 6;
            }
            get patchX() {
                return this.currentObject.position.x - 4 - this.center_x;
            }
            get correction() {
                let correction = 0;
                switch (this.name.font) {
                  case "Arial":
                    correction = 0;
                    break;

                  case "college":
                    correction = -2;
                    break;

                  case "monte":
                    correction = 0;
                    break;

                  case "oswaldcustom":
                    correction = 0;
                    break;

                  case "ballantines":
                    correction = 4;
                    break;
                }
                return correction;
            }
            get patchY() {
                return this.currentObject.position.y + this.correction - this.center_y;
            }
            get patchWidth() {
                return this.width + 8;
            }
            get fontSize() {
                const fontSize = this.name.font_size ? this.name.font_size : 12;
                return this.name && this.name.position.scale ? fontSize * this.name.position.scale : fontSize;
            }
            get strokeWidth() {
                const width = this.name.position.scale * .6;
                return this.name && this.name.font === "ballantines" ? width / 2 : width;
            }
            get center_x() {
                return this.width / 2;
            }
            get center_y() {
                return this.height / 2;
            }
            get patch_transform() {
                return `translate(${this.patchX} ${this.patchY}) rotate(${this.currentObject.position.rotate} ${this.center_x + 4} ${this.center_y - this.correction})`;
            }
            get rotation_string() {
                return `translate(${this.currentObject.position.x} ${this.currentObject.position.y}) rotate(${this.currentObject.position.rotate})`;
            }
        };
        SvgTextComponent.ctorParameters = () => [ {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
        }, {
            type: _app_customiser_services_design_service__WEBPACK_IMPORTED_MODULE_3__["DesignService"]
        } ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], SvgTextComponent.prototype, "name", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("svgText", {
            static: true
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]) ], SvgTextComponent.prototype, "svgText", void 0);
        SvgTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "bx-svg-text,[bx-svg-text]",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./svg-text.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/svg/svg-text.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            styles: [ tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./svg-text.component.scss */ "./src/app/customiser/svg/svg-text.component.scss")).default ]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _app_customiser_services_design_service__WEBPACK_IMPORTED_MODULE_3__["DesignService"] ]) ], SvgTextComponent);
    },
    "./src/app/customiser/svg/svg-waist-label.component.ts": 
    /*!*************************************************************!*\
  !*** ./src/app/customiser/svg/svg-waist-label.component.ts ***!
  \*************************************************************/
    /*! exports provided: SvgWaistLabelComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "SvgWaistLabelComponent", (function() {
            return SvgWaistLabelComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        let SvgWaistLabelComponent = class SvgWaistLabelComponent {
            constructor() {}
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], SvgWaistLabelComponent.prototype, "position", void 0);
        SvgWaistLabelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bx-svg-waist-label, [bx-svg-waist-label]",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./svg-waist-label.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/svg/svg-waist-label.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []) ], SvgWaistLabelComponent);
    },
    "./src/app/customiser/template/template.component.scss": 
    /*!*************************************************************!*\
  !*** ./src/app/customiser/template/template.component.scss ***!
  \*************************************************************/
    /*! exports provided: default */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = ':host {\n  margin: 1rem auto;\n  max-width: 600px;\n  width: 100%;\n  display: block;\n  padding: 1rem 0.5rem;\n}\n\n#template {\n  display: block;\n  width: 100%;\n  max-height: calc(100vh - 270px);\n  overflow: visible;\n}\n\n#template ::ng-deep svg {\n  overflow: inherit;\n}\n\n.template-controls {\n  width: 100%;\n  position: relative;\n}\n\n.template-col {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n\n.template-wrapper {\n  width: 100%;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.template-rotator h4 {\n  margin: 0;\n}\n\n.template-rotator mat-slider {\n  width: 100%;\n  padding: 0;\n}\n\n.template-scale {\n  padding-bottom: 35px;\n  -webkit-flex: 0 0 48px;\n      -ms-flex: 0 0 48px;\n          flex: 0 0 48px;\n  width: 48px;\n  display: block;\n  position: relative;\n}\n\n.template-scale h4 {\n  margin: auto 0.5rem;\n  -webkit-flex: 0;\n      -ms-flex: 0;\n          flex: 0;\n  -webkit-transform: rotate(90deg);\n      -ms-transform: rotate(90deg);\n          transform: rotate(90deg);\n  -webkit-transform-origin: left top 0;\n      -ms-transform-origin: left top 0;\n          transform-origin: left top 0;\n  position: absolute;\n  left: 90%;\n  top: 30%;\n}\n\n.template-scale mat-slider {\n  height: 100%;\n}\n\n.bubble {\n  position: absolute;\n  top: 20px;\n  left: 50%;\n  right: 0;\n  width: 200px;\n  margin-left: -124px;\n  padding: 0.5rem;\n  background: white;\n  border-radius: 8px;\n  border: 2px solid #363636;\n}\n\n.bubble .arrow-after {\n  border-right: 21px solid transparent;\n  bottom: -21px;\n  position: absolute;\n  left: 50%;\n}\n\n.bubble .arrow-after::before {\n  border-right: 20px solid transparent;\n  border-top: 20px solid #363636;\n  bottom: 1px;\n  content: "";\n  position: absolute;\n  left: 50%;\n  margin-left: -10px;\n}\n\n.bubble .arrow-after::after {\n  border-right: 16px solid transparent;\n  border-top: 16px solid white;\n  bottom: 6px;\n  content: "";\n  position: absolute;\n  left: 50%;\n  margin-left: -8px;\n}\n\n.bubble h3 {\n  margin: 0;\n  font-size: 14px;\n  font-size: 0.875rem;\n  line-height: 1.4285714286;\n  color: #363636;\n}\n\n.bubble h3 .fa-info-circle {\n  margin-right: 0.5rem;\n  font-size: 18px;\n  font-size: 1.125rem;\n  line-height: 1;\n}\n\n.draggable {\n  cursor: move;\n}\n\np.danger {\n  margin: 1rem 0;\n  font-weight: bold;\n}\n\n.template-label {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 0.3rem;\n}\n\n.template-label .label {\n  -webkit-flex: 0 1 50%;\n      -ms-flex: 0 1 50%;\n          flex: 0 1 50%;\n}\n\n.template-label h4 {\n  font-size: 14px;\n  font-size: 0.875rem;\n  line-height: 1;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NsaWVudC9zcmMvYXBwL2N1c3RvbWlzZXIvdGVtcGxhdGUvQzpcXFVzZXJzXFxSZWlhblxcRGVza3RvcFxcV29ya1xcRnJlZWxhbmNlXFxib3h4ZXItY2xpZW50LWNsb25lL3Byb2plY3RzXFxjbGllbnRcXHNyY1xcYXBwXFxjdXN0b21pc2VyXFx0ZW1wbGF0ZVxcdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b21pc2VyL3RlbXBsYXRlL3RlbXBsYXRlLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9taXNlci90ZW1wbGF0ZS9DOlxcVXNlcnNcXFJlaWFuXFxEZXNrdG9wXFxXb3JrXFxGcmVlbGFuY2VcXGJveHhlci1jbGllbnQtY2xvbmUvcHJvamVjdHNcXGNsaWVudFxcc3JjXFxzY3NzXFxfbWl4aW5zLnNjc3MiLCJwcm9qZWN0cy9jbGllbnQvc3JjL2FwcC9jdXN0b21pc2VyL3RlbXBsYXRlL0M6XFxVc2Vyc1xcUmVpYW5cXERlc2t0b3BcXFdvcmtcXEZyZWVsYW5jZVxcYm94eGVyLWNsaWVudC1jbG9uZS9wcm9qZWN0c1xcY2xpZW50XFxzcmNcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDRkY7O0FES0E7RUFFRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7QUNIRjs7QURJRTtFQUNFLGlCQUFBO0FDRko7O0FETUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURNQTtFQUNFLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtBQ0hGOztBRE1BO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7TUFBQSwwQkFBQTtVQUFBLHNCQUFBO0FDSEY7O0FEUUU7RUFDRSxTQUFBO0FDTEo7O0FET0U7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQ0xKOztBRFNBO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtNQUFBLGtCQUFBO1VBQUEsY0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNORjs7QURPRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtNQUFBLFdBQUE7VUFBQSxPQUFBO0VBQ0EsZ0NBQUE7TUFBQSw0QkFBQTtVQUFBLHdCQUFBO0VBQ0Esb0NBQUE7TUFBQSxnQ0FBQTtVQUFBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0xKOztBRE9FO0VBQ0UsWUFBQTtBQ0xKOztBRFNBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDTkY7O0FET0U7RUFDRSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNMSjs7QURNSTtFQUNFLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDSk47O0FETUk7RUFDRSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ0pOOztBRE9FO0VBQ0UsU0FBQTtFRW5FRixlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFIWTtFRnNFVixjRzFHSTtBRnVHUjs7QURJSTtFQUNFLG9CQUFBO0VFdkVKLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBSFk7QUR5RWQ7O0FES0E7RUFDRSxZQUFBO0FDRkY7O0FES0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURLQTtFQUNFLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7QUNGRjs7QURHRTtFQUNFLHFCQUFBO01BQUEsaUJBQUE7VUFBQSxhQUFBO0FDREo7O0FER0U7RUU1RkEsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FIWTtFRitGVixTQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvY2xpZW50L3NyYy9hcHAvY3VzdG9taXNlci90ZW1wbGF0ZS90ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ21peGlucyc7XHJcblxyXG46aG9zdCB7XHJcbiAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcclxufVxyXG5cclxuI3RlbXBsYXRlIHtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyNzBweCk7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgOjpuZy1kZWVwIHN2ZyB7XHJcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuXHJcbi50ZW1wbGF0ZS1jb250cm9scyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udGVtcGxhdGUtY29sIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGVtcGxhdGUtd3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC8vIGZsZXg6IDEgMCBhdXRvO1xyXG59XHJcblxyXG4udGVtcGxhdGUtcm90YXRvciB7XHJcbiAgaDQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBtYXQtc2xpZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbi50ZW1wbGF0ZS1zY2FsZSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDM1cHg7XHJcbiAgZmxleDogMCAwIDQ4cHg7XHJcbiAgd2lkdGg6IDQ4cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGg0IHtcclxuICAgIG1hcmdpbjogYXV0byAwLjVyZW07XHJcbiAgICBmbGV4OiAwO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDkwJTtcclxuICAgIHRvcDogMzAlO1xyXG4gIH1cclxuICBtYXQtc2xpZGVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5idWJibGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBtYXJnaW4tbGVmdDogLTEyNHB4O1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJGJsYWNrO1xyXG4gIC5hcnJvdy1hZnRlciB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDIxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3R0b206IC0yMXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItdG9wOiAyMHB4IHNvbGlkICRibGFjaztcclxuICAgICAgYm90dG9tOiAxcHg7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgfVxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDE2cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci10b3A6IDE2cHggc29saWQgd2hpdGU7XHJcbiAgICAgIGJvdHRvbTogNnB4O1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBoMyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBAaW5jbHVkZSBmb250LXNpemUoMTQsIDIwKTtcclxuICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAuZmEtaW5mby1jaXJjbGUge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgQGluY2x1ZGUgZm9udC1zaXplKDE4LCAxOCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZHJhZ2dhYmxlIHtcclxuICBjdXJzb3I6IG1vdmU7XHJcbn1cclxuXHJcbnAuZGFuZ2VyIHtcclxuICBtYXJnaW46IDFyZW0gMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnRlbXBsYXRlLWxhYmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcclxuICAubGFiZWwge1xyXG4gICAgZmxleDogMCAxIDUwJTtcclxuICB9XHJcbiAgaDQge1xyXG4gICAgQGluY2x1ZGUgZm9udC1zaXplKDE0LCAxNCk7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMXJlbSAwLjVyZW07XG59XG5cbiN0ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDI3MHB4KTtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4jdGVtcGxhdGUgOjpuZy1kZWVwIHN2ZyB7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xufVxuXG4udGVtcGxhdGUtY29udHJvbHMge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGVtcGxhdGUtY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50ZW1wbGF0ZS13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50ZW1wbGF0ZS1yb3RhdG9yIGg0IHtcbiAgbWFyZ2luOiAwO1xufVxuLnRlbXBsYXRlLXJvdGF0b3IgbWF0LXNsaWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xufVxuXG4udGVtcGxhdGUtc2NhbGUge1xuICBwYWRkaW5nLWJvdHRvbTogMzVweDtcbiAgZmxleDogMCAwIDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRlbXBsYXRlLXNjYWxlIGg0IHtcbiAgbWFyZ2luOiBhdXRvIDAuNXJlbTtcbiAgZmxleDogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDkwJTtcbiAgdG9wOiAzMCU7XG59XG4udGVtcGxhdGUtc2NhbGUgbWF0LXNsaWRlciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJ1YmJsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiA1MCU7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTI0cHg7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzM2MzYzNjtcbn1cbi5idWJibGUgLmFycm93LWFmdGVyIHtcbiAgYm9yZGVyLXJpZ2h0OiAyMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3R0b206IC0yMXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbn1cbi5idWJibGUgLmFycm93LWFmdGVyOjpiZWZvcmUge1xuICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDIwcHggc29saWQgIzM2MzYzNjtcbiAgYm90dG9tOiAxcHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG4uYnViYmxlIC5hcnJvdy1hZnRlcjo6YWZ0ZXIge1xuICBib3JkZXItcmlnaHQ6IDE2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgd2hpdGU7XG4gIGJvdHRvbTogNnB4O1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XG59XG4uYnViYmxlIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyODY7XG4gIGNvbG9yOiAjMzYzNjM2O1xufVxuLmJ1YmJsZSBoMyAuZmEtaW5mby1jaXJjbGUge1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLmRyYWdnYWJsZSB7XG4gIGN1cnNvcjogbW92ZTtcbn1cblxucC5kYW5nZXIge1xuICBtYXJnaW46IDFyZW0gMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50ZW1wbGF0ZS1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcbn1cbi50ZW1wbGF0ZS1sYWJlbCAubGFiZWwge1xuICBmbGV4OiAwIDEgNTAlO1xufVxuLnRlbXBsYXRlLWxhYmVsIGg0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWFyZ2luOiAwO1xufSIsIkBtaXhpbiBmbHVpZC10eXBlKCRwcm9wZXJ0aWVzLCAkbWluLXZ3LCAkbWF4LXZ3LCAkbWluLXZhbHVlLCAkbWF4LXZhbHVlKSB7XHJcbiAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcclxuICAgICN7JHByb3BlcnR5fTogJG1pbi12YWx1ZTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4tdncpIHtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgICN7JHByb3BlcnR5fTogY2FsYyhcclxuICAgICAgICAjeyRtaW4tdmFsdWV9ICsgI3tzdHJpcC11bml0KCRtYXgtdmFsdWUgLSAkbWluLXZhbHVlKX0gKlxyXG4gICAgICAgICAgKFxyXG4gICAgICAgICAgICAxMDB2dyAtICN7JG1pbi12d31cclxuICAgICAgICAgICkgLyAje3N0cmlwLXVuaXQoJG1heC12dyAtICRtaW4tdncpfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1heC12dykge1xyXG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcclxuICAgICAgI3skcHJvcGVydHl9OiAkbWF4LXZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGZ1bmN0aW9uIHN0cmlwLXVuaXQoJHZhbHVlKSB7XHJcbiAgQHJldHVybiAkdmFsdWUgLyAoJHZhbHVlICogMCArIDEpO1xyXG59XHJcblxyXG5AbWl4aW4gd3JhcHBlcigkd2lkdGg6MTQ0MHB4KSB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6ICR3aWR0aDtcclxuICBtYXJnaW46IDAgYXV0byAxLjVyZW07XHJcbn1cclxuXHJcbkBtaXhpbiBmb250LXNpemUoJGZvbnRTaXplLCAkbGluZUhlaWdodDogMSkge1xyXG4gICRyZW1WYWx1ZTogKCRmb250U2l6ZSAvIDE2KTtcclxuICAkcHhWYWx1ZTogJGZvbnRTaXplO1xyXG4gICRsaW5lVmFsdWU6ICgkbGluZUhlaWdodCAvICRmb250U2l6ZSk7XHJcbiAgZm9udC1zaXplOiAkcHhWYWx1ZSArIHB4O1xyXG4gIGZvbnQtc2l6ZTogJHJlbVZhbHVlICsgcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZVZhbHVlO1xyXG59XHJcbiIsIi8vQ29sb3JzXHJcbiRibGFjazogIzM2MzYzNjtcclxuJHZlcnlsaWdodGdyZXk6ICNmNWY1ZjU7XHJcbiRsaWdodGdyZXk6ICNlZGVkZWQ7XHJcbiRtaWRncmV5OiAjOTk5O1xyXG4kZGFya2dyZXk6ICM2NjY7XHJcbiRncmVlbjogIzYzYjIwYjtcclxuJHJlZDogI2NlMDUwNTtcclxuLy9Gb250c1xyXG4kZGVmYXVsdEZvbnQ6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4kZGlzcGxheUZvbnQ6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4iXX0= */';
    },
    "./src/app/customiser/template/template.component.ts": 
    /*!***********************************************************!*\
  !*** ./src/app/customiser/template/template.component.ts ***!
  \***********************************************************/
    /*! exports provided: TemplateComponent */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "TemplateComponent", (function() {
            return TemplateComponent;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        var _app_shared_main_services_platform_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared-main/services/platform.service */ "./src/app/shared-main/services/platform.service.ts");
        var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "../environments/environment.ts");
        var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
        var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
        var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
        var _app_core_modules_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/modules/loading/loading.service */ "./src/app/core/modules/loading/loading.service.ts");
        var _app_cart_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/cart/cart.service */ "./src/app/cart/cart.service.ts");
        var _global_untilDestroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @global/untilDestroy */ "../global/untilDestroy/index.ts");
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
        var _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../services/customiser-options.service */ "./src/app/customiser/services/customiser-options.service.ts");
        var _services_design_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../services/design.service */ "./src/app/customiser/services/design.service.ts");
        var _services_svg_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../services/svg.service */ "./src/app/customiser/services/svg.service.ts");
        var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm2015/store.js");
        var _app_core_actions_state__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/core/actions/state */ "./src/app/core/actions/state.ts");
        var _app_reducers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/reducers */ "./src/app/reducers/index.ts");
        var _reducers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../reducers */ "./src/app/customiser/reducers/index.ts");
        var _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @gorniv/ngx-universal */ "../../node_modules/@gorniv/ngx-universal/fesm2015/gorniv-ngx-universal.js");
        let TemplateComponent = class TemplateComponent {
            constructor(actionsSubj, optionsService, svgService, designService, location, router, loading, cart, state, ps, store, el, cookieService) {
                this.optionsService = optionsService;
                this.svgService = svgService;
                this.designService = designService;
                this.location = location;
                this.router = router;
                this.loading = loading;
                this.cart = cart;
                this.state = state;
                this.ps = ps;
                this.store = store;
                this.el = el;
                this.cookieService = cookieService;
                this.viewBox = "0 0 0 0";
                this.scale = 0;
                this.rotate = 0;
                this.templateLoaded = false;
                this.wasInside = false;
                actionsSubj.pipe(Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_8__["untilComponentDestroyed"])(this)).subscribe((data => {
                    if (data && data.type === "[Cart] Custom Success") {
                        this.designService.deleteToken();
                        this.router.navigate([ this.product.category.slug ]);
                        this.state.dispatch(new _app_core_actions_state__WEBPACK_IMPORTED_MODULE_14__["OpenCart"](true));
                    }
                    if (data && data.type === "[Cart] Admin Order Success") {
                        const url = `${_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].admin}/orders/job-card/${this.designService.orderId}/${this.designService.orderItemId}`;
                        this.ps.getNativeWindow().location.href = url;
                    }
                    if (data && data.type === "LOAD_DESIGN") {
                        this.setColours(data.payload);
                    }
                }));
                this.settings$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_13__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_16__["getSettings"]));
                this.muay_thai$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_13__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_16__["getMuayThai"]));
                this.cartOpen$ = state.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_13__["select"])(_app_reducers__WEBPACK_IMPORTED_MODULE_15__["getCartOpen"]));
                svgService.template = el;
                designService.addToCartEmitted$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])((() => this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_13__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_16__["getDesign"])))), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_8__["untilComponentDestroyed"])(this)).subscribe((design => this.addToCart(design)));
                designService.updateCartEmitted$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])((() => this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_13__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_16__["getDesign"])))), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_8__["untilComponentDestroyed"])(this)).subscribe((design => this.updateCart(design)));
                designService.updateOrderAdminEmitted$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])((() => this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_13__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_16__["getDesign"])))), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_8__["untilComponentDestroyed"])(this)).subscribe((design => this.updateOrderAdmin(design)));
            }
            get width() {
                const params = this.viewBox.split(" ");
                return parseInt(params[2], 10);
            }
            get height() {
                const params = this.viewBox.split(" ");
                return parseInt(params[3], 10);
            }
            get paddingBottom() {
                const padding = this.height / this.width * 100;
                return `${padding}%`;
            }
            get alignedViewBox() {
                return `0 0 ${this.width} ${this.height}`;
            }
            get hasDraggable() {
                if (this.cookieService.get("custom-dragged") || !this.design) {
                    return false;
                }
                return this.design.flags.length || this.design.names.length || this.design.logos.length || this.design.uploads.length;
            }
            clickInside() {
                this.wasInside = true;
            }
            clickout() {
                if (!this.wasInside) {
                    this.designService.selectedObject = null;
                }
                this.wasInside = false;
            }
            showLabels() {
                return this.optionsService.product.category._id === "58ac13a9dc142c612ab61fb1" || this.optionsService.product.category._id === "58ac142bdc142c612ab61fb2" || this.optionsService.product.category._id === "58ac145cdc142c612ab61fb3";
            }
            svgData(value) {
                this.viewBox = value.getAttribute("viewBox");
                this.setUpTemplate();
            }
            ngAfterViewInit() {
                this.svgService.svg = this.customDesign;
            }
            setUpTemplate() {
                this.settings$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])((settings => {
                    settings.forEach((setting => this.svgService.hideOptional(setting)));
                    settings.forEach((setting => this.svgService.setDefault(setting)));
                    return this.muay_thai$;
                })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])((settings => {
                    settings.forEach((setting => this.svgService.hideOptional(setting)));
                    return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_13__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_16__["getDesign"]));
                })), Object(_global_untilDestroy__WEBPACK_IMPORTED_MODULE_8__["untilComponentDestroyed"])(this)).subscribe((design => {
                    if (design) {
                        this.design = design;
                    }
                    this.svgService.template = this.el;
                    if (!this.templateLoaded) {
                        this.setColours(design);
                        this.loading.hide();
                    }
                    this.templateLoaded = true;
                }));
            }
            setColours(design) {
                if (design.panels) {
                    design.panels.forEach((panel => {
                        this.svgService.addColor(panel.material, panel.panel, true, panel.product_setting ? panel.product_setting.area_size.optional : false);
                    }));
                }
                if (design.names) {
                    design.names.forEach((name => {
                        this.svgService.addNameFillColour(name);
                        if (name.outline) {
                            this.svgService.addNameOutlineColour(name);
                        }
                    }));
                }
                if (design.muay_thai) {
                    this.svgService.addColor(design.muay_thai.fill, "MuayThaiFill", true, true);
                    this.svgService.addColor(design.muay_thai.outline, "MuayThaiOutline", true, true);
                }
            }
            scaleObject(data) {
                const currentObject = this.designService.selectedObject.object;
                const diffX = currentObject.position.width * currentObject.position.scale - currentObject.position.width * data.value;
                const diffY = currentObject.position.height * currentObject.position.scale - currentObject.position.height * data.value;
                currentObject.position.x = currentObject.position.x + diffX / 2;
                currentObject.position.y = currentObject.position.y + diffY / 2;
                currentObject.position.scale = data.value;
                this.designService.updateObject(currentObject, this.designService.selectedObject.type);
            }
            rotateObject(data) {
                this.designService.selectedObject.object.position.rotate = data.value;
                this.designService.updateObject(this.designService.selectedObject.object, this.designService.selectedObject.type);
            }
            get svgXml() {
                const basePath = this.location.path();
                const svg = this.customDesign.nativeElement;
                svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns", "http://www.w3.org/2000/svg");
                svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
                let svgXml = (new XMLSerializer).serializeToString(svg);
                svgXml = svgXml.replace(/NS\d+:href/gi, "xlink:href");
                svgXml = svgXml.replace(new RegExp(basePath, "g"), "");
                return svgXml;
            }
            saveToAccount() {
                this.designService.saveToAccount(true, {
                    save_to_account: true,
                    svg_data: this.svgXml
                });
            }
            addToCart(design) {
                this.cart.addCartCustom({
                    custom_design: design._id,
                    custom_product: design.product,
                    svg_data: this.svgXml
                });
            }
            updateCart(design) {
                if (this.cart.hasValidToken) {
                    this.cart.updateCart(this.designService.cartId, {
                        custom_design: design._id,
                        custom_product: design.product,
                        svg_data: this.svgXml
                    });
                } else {
                    this.addToCart(design);
                }
            }
            updateOrderAdmin(design) {
                this.cart.updateOrderAdmin(this.designService.orderItemId, {
                    custom_design: this.design._id,
                    custom_product: this.design.product,
                    svg_data: this.svgXml
                });
            }
            ngOnDestroy() {}
        };
        TemplateComponent.ctorParameters = () => [ {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["ActionsSubject"]
        }, {
            type: _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_10__["CustomiserOptionsService"]
        }, {
            type: _services_svg_service__WEBPACK_IMPORTED_MODULE_12__["SvgService"]
        }, {
            type: _services_design_service__WEBPACK_IMPORTED_MODULE_11__["DesignService"]
        }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
            type: _app_core_modules_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
        }, {
            type: _app_cart_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"]
        }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["Store"]
        }, {
            type: _app_shared_main_services_platform_service__WEBPACK_IMPORTED_MODULE_1__["PlatformService"]
        }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["Store"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
            type: _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_17__["CookieService"]
        } ];
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object) ], TemplateComponent.prototype, "product", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])("customDesign", {
            static: false
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]) ], TemplateComponent.prototype, "customDesign", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"])("click"), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"])("touchstart"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0) ], TemplateComponent.prototype, "clickInside", null);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"])("document:click"), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"])("document:touchstart"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0) ], TemplateComponent.prototype, "clickout", null);
        TemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([ Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: "bx-template",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./template.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/customiser/template/template.component.html")).default,
            styles: [ tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./template.component.scss */ "./src/app/customiser/template/template.component.scss")).default ]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["ActionsSubject"], _services_customiser_options_service__WEBPACK_IMPORTED_MODULE_10__["CustomiserOptionsService"], _services_svg_service__WEBPACK_IMPORTED_MODULE_12__["SvgService"], _services_design_service__WEBPACK_IMPORTED_MODULE_11__["DesignService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _app_core_modules_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _app_cart_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["Store"], _app_shared_main_services_platform_service__WEBPACK_IMPORTED_MODULE_1__["PlatformService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["Store"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _gorniv_ngx_universal__WEBPACK_IMPORTED_MODULE_17__["CookieService"] ]) ], TemplateComponent);
    },
    "./src/app/util.ts": 
    /*!*************************!*\
  !*** ./src/app/util.ts ***!
  \*************************/
    /*! exports provided: createActionType */ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "createActionType", (function() {
            return createActionType;
        }));
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        const typeCache = {};
        function createActionType(label) {
            if (typeCache[label]) {
                throw new Error(`Action type "${label}" is not unique"`);
            }
            typeCache[label] = true;
            return label;
        }
    }
} ]);