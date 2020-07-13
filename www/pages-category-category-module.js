(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"category-toolbar\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button>\n                <ion-back-button defaultHref=\"/tabs/musicians\"></ion-back-button>\n            </ion-button>            \n        </ion-buttons>   \n        \n        <ion-title>{{category.name}}</ion-title>\n        \n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"category\">\n\n    <ion-card class=\"category__musician-card musician-card\" *ngFor=\"let musician of musicians\" [ngStyle]=\"{'background-image': 'url(' + musician.avatar + ')'}\" [routerLink]=\"['/profile/' + musician.user_id]\" routerDirection=\"forward\">\n\n        <ion-card-content>\n                <h5>Hired {{musician.hire_count ? musician.hire_count : 0}} Time<span *ngIf=\"musician.hire_count !== 1\">s</span></h5>\n                <h1>{{musician.name}}</h1>\n                <h6>\n                    {{calculateFeedback(musician)}}% Positive feedback\n                </h6>\n        </ion-card-content>\n    </ion-card>    \n    \n    \n    \n    \n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/category/category-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/category/category-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageRoutingModule", function() { return CategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category.page */ "./src/app/pages/category/category.page.ts");




var routes = [
    {
        path: '',
        component: _category_page__WEBPACK_IMPORTED_MODULE_3__["CategoryPage"]
    }
];
var CategoryPageRoutingModule = /** @class */ (function () {
    function CategoryPageRoutingModule() {
    }
    CategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CategoryPageRoutingModule);
    return CategoryPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/category/category.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.module.ts ***!
  \***************************************************/
/*! exports provided: CategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-routing.module */ "./src/app/pages/category/category-routing.module.ts");
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category.page */ "./src/app/pages/category/category.page.ts");







var CategoryPageModule = /** @class */ (function () {
    function CategoryPageModule() {
    }
    CategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _category_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryPageRoutingModule"]
            ],
            declarations: [_category_page__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"]]
        })
    ], CategoryPageModule);
    return CategoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/category/category.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".category .musician-card {\n  background-color: #000000;\n  color: white;\n  padding: 0px;\n  text-align: left;\n  margin: 10px;\n  background-size: cover;\n  background-position: center center;\n  position: relative;\n  background-repeat: no-repeat;\n}\n.category .musician-card:focus {\n  outline: none;\n}\n.category .musician-card:before {\n  content: \"\";\n  background-color: rgba(0, 0, 0, 0.4);\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n}\n.category .musician-card h5 {\n  font-weight: 600;\n  padding: 0px;\n  margin-bottom: 15px;\n  margin-top: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.category .musician-card h1 {\n  font-size: 28px;\n  font-weight: 600;\n  line-height: 24px;\n  letter-spacing: 2px;\n  margin-bottom: 15px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.category .musician-card h6 {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 2px;\n  margin-bottom: 50px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvRDpcXFRheWxvclxcRG9jdW1lbnRzXFxXZWJzaXRlc1xcbXVzaWNidWRkeVxcYXBwL3NyY1xcYXBwXFxwYWdlc1xcY2F0ZWdvcnlcXGNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvY2F0ZWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ1kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FDQWhCO0FER2dCO0VBQ0ksYUFBQTtBQ0RwQjtBRElnQjtFQUNJLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNELFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZuQjtBREtZO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0hoQjtBRE9ZO0VBQ0EsZUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDTGhCO0FEUVk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ05oQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5L2NhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXRlZ29yeXtcclxuICAgIC5tdXNpY2lhbi1jYXJke1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICY6Zm9jdXN7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6XCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OjBweDtcclxuICAgICAgICAgICAgICAgICAgIHRvcDowcHg7XHJcbiAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoNXtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoNntcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7ICAgXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjUwcHg7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG59IiwiLmNhdGVnb3J5IC5tdXNpY2lhbi1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMTBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmNhdGVnb3J5IC5tdXNpY2lhbi1jYXJkOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5jYXRlZ29yeSAubXVzaWNpYW4tY2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jYXRlZ29yeSAubXVzaWNpYW4tY2FyZCBoNSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uY2F0ZWdvcnkgLm11c2ljaWFuLWNhcmQgaDEge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jYXRlZ29yeSAubXVzaWNpYW4tY2FyZCBoNiB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/category/category.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/category/category.page.ts ***!
  \*************************************************/
/*! exports provided: CategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPage", function() { return CategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_musician_musician_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/musician/musician.service */ "./src/app/services/musician/musician.service.ts");




var CategoryPage = /** @class */ (function () {
    function CategoryPage(route, musicianService) {
        var _this = this;
        this.route = route;
        this.musicianService = musicianService;
        var categoryId = this.route.snapshot.params['id'];
        this.category = { id: categoryId, name: "", loading: true };
        this.musicianService.getCategory(this.category.id).then(function (data) {
            console.log(data);
            _this.category = data;
            _this.musicians = data["profiles"];
        });
    }
    CategoryPage.prototype.ngOnInit = function () {
    };
    CategoryPage.prototype.calculateFeedback = function (musician) {
        var e_1, _a;
        var rating = 100;
        if (musician.reviews) {
            var reviewTotal = 0;
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(musician.reviews), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var review = _c.value;
                    reviewTotal = reviewTotal + (review.rating * 20);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            reviewTotal = (reviewTotal / musician.reviews.length);
            rating = reviewTotal;
        }
        return rating.toFixed(0);
    };
    CategoryPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_musician_musician_service__WEBPACK_IMPORTED_MODULE_3__["MusicianService"] }
    ]; };
    CategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./category.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./category.page.scss */ "./src/app/pages/category/category.page.scss")).default]
        })
    ], CategoryPage);
    return CategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-category-category-module.js.map