(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-img.entry.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-img.entry.js ***!
  \****************************************************************/
/*! exports provided: ion_img */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_img", function() { return Img; });
/* harmony import */ var _index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e23c3ffd.js */ "./node_modules/@ionic/core/dist/esm-es5/index-e23c3ffd.js");
/* harmony import */ var _ionic_global_fbc9a2ac_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-fbc9a2ac.js */ "./node_modules/@ionic/core/dist/esm-es5/ionic-global-fbc9a2ac.js");


var imgCss = ":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}";
var Img = /** @class */ (function () {
    function Img(hostRef) {
        var _this = this;
        Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.onLoad = function () {
            _this.ionImgDidLoad.emit();
        };
        this.onError = function () {
            _this.ionError.emit();
        };
        this.ionImgWillLoad = Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionImgWillLoad", 7);
        this.ionImgDidLoad = Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionImgDidLoad", 7);
        this.ionError = Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionError", 7);
    }
    Img.prototype.srcChanged = function () {
        this.addIO();
    };
    Img.prototype.componentDidLoad = function () {
        this.addIO();
    };
    Img.prototype.addIO = function () {
        var _this = this;
        if (this.src === undefined) {
            return;
        }
        if ('IntersectionObserver' in window) {
            this.removeIO();
            this.io = new IntersectionObserver(function (data) {
                // because there will only ever be one instance
                // of the element we are observing
                // we can just use data[0]
                if (data[0].isIntersecting) {
                    _this.load();
                    _this.removeIO();
                }
            });
            this.io.observe(this.el);
        }
        else {
            // fall back to setTimeout for Safari and IE
            setTimeout(function () { return _this.load(); }, 200);
        }
    };
    Img.prototype.load = function () {
        this.loadError = this.onError;
        this.loadSrc = this.src;
        this.ionImgWillLoad.emit();
    };
    Img.prototype.removeIO = function () {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    };
    Img.prototype.render = function () {
        return (Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object(_ionic_global_fbc9a2ac_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this) }, Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { decoding: "async", src: this.loadSrc, alt: this.alt, onLoad: this.onLoad, onError: this.loadError, part: "image" })));
    };
    Object.defineProperty(Img.prototype, "el", {
        get: function () { return Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Img, "watchers", {
        get: function () {
            return {
                "src": ["srcChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return Img;
}());
Img.style = imgCss;



/***/ })

}]);
//# sourceMappingURL=25.js.map