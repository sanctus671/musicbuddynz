(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reviews-reviews-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reviews/reviews.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reviews/reviews.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-button>\n                <ion-back-button defaultHref=\"/tabs/jobs\"></ion-back-button>\n            </ion-button>            \n        </ion-buttons>   \n        \n        <ion-title>Reviews</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"reviews\">\n    \n    \n    <div class=\"reviews__loading\" *ngIf=\"loading\">\n        <ion-spinner color=\"primary\"></ion-spinner>\n    </div>      \n    \n    <div class=\"reviews__empty\" *ngIf=\"reviews.length < 1 && !loading\">\n        <ion-icon name=\"star\"></ion-icon>\n        <h2>No Reviews</h2>\n    </div>      \n    \n    \n    <ion-item *ngFor=\"let review of reviews\">\n\n        <ion-avatar slot=\"start\" *ngIf=\"review.profile.avatar\">\n            <img [src]=\"review.profile.avatar\" />\n        </ion-avatar>   \n        <ion-label class=\"ion-text-wrap\">\n            <h2 class=\"reviews__rating\">\n                <ion-icon name=\"star\" *ngIf=\"review.rating > 0\"></ion-icon>\n                <ion-icon name=\"star\" *ngIf=\"review.rating > 1\"></ion-icon>\n                <ion-icon name=\"star\" *ngIf=\"review.rating > 2\"></ion-icon>\n                <ion-icon name=\"star\" *ngIf=\"review.rating > 3\"></ion-icon>\n                <ion-icon name=\"star\" *ngIf=\"review.rating > 4\"></ion-icon>\n            </h2>\n            <p>{{review.comments}}</p>\n        </ion-label>\n    </ion-item>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/reviews/reviews-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/reviews/reviews-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ReviewsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsPageRoutingModule", function() { return ReviewsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _reviews_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reviews.page */ "./src/app/pages/reviews/reviews.page.ts");




var routes = [
    {
        path: '',
        component: _reviews_page__WEBPACK_IMPORTED_MODULE_3__["ReviewsPage"]
    }
];
var ReviewsPageRoutingModule = /** @class */ (function () {
    function ReviewsPageRoutingModule() {
    }
    ReviewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ReviewsPageRoutingModule);
    return ReviewsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/reviews/reviews.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/reviews/reviews.module.ts ***!
  \*************************************************/
/*! exports provided: ReviewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsPageModule", function() { return ReviewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _reviews_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reviews-routing.module */ "./src/app/pages/reviews/reviews-routing.module.ts");
/* harmony import */ var _reviews_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reviews.page */ "./src/app/pages/reviews/reviews.page.ts");







var ReviewsPageModule = /** @class */ (function () {
    function ReviewsPageModule() {
    }
    ReviewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _reviews_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReviewsPageRoutingModule"]
            ],
            declarations: [_reviews_page__WEBPACK_IMPORTED_MODULE_6__["ReviewsPage"]]
        })
    ], ReviewsPageModule);
    return ReviewsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/reviews/reviews.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/reviews/reviews.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".reviews .reviews__loading {\n  text-align: center;\n  margin-top: 60px;\n}\n.reviews .reviews__empty {\n  text-align: center;\n  opacity: 0.2;\n  padding-top: 60px;\n  padding-bottom: 60px;\n}\n.reviews .reviews__empty ion-icon {\n  font-size: 60px;\n}\n.reviews .reviews__empty h2 {\n  margin: 0px;\n  margin-top: 5px;\n  font-size: 22px;\n}\n.reviews .reviews__rating ion-icon {\n  color: #f3cd00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmV2aWV3cy9EOlxcVGF5bG9yXFxEb2N1bWVudHNcXFdlYnNpdGVzXFxtdXNpY2J1ZGR5XFxhcHAvc3JjXFxhcHBcXHBhZ2VzXFxyZXZpZXdzXFxyZXZpZXdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmV2aWV3cy9yZXZpZXdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGUjtBRE1JO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0pSO0FETVE7RUFDSSxlQUFBO0FDSlo7QURPUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0xaO0FEVVE7RUFDSSxjQUFBO0FDUloiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXZpZXdzL3Jldmlld3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJldmlld3N7XHJcbiAgICBcclxuICAgIFxyXG4gICAgLnJldmlld3NfX2xvYWRpbmd7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDYwcHg7ICAgICAgICBcclxuICAgIH0gICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAucmV2aWV3c19fZW1wdHl7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDsgIFxyXG5cclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDsgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0gICAgICAgXHJcbiAgICBcclxuICAgIC5yZXZpZXdzX19yYXRpbmd7XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZjNjZDAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59IiwiLnJldmlld3MgLnJldmlld3NfX2xvYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG4ucmV2aWV3cyAucmV2aWV3c19fZW1wdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuMjtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xufVxuLnJldmlld3MgLnJldmlld3NfX2VtcHR5IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA2MHB4O1xufVxuLnJldmlld3MgLnJldmlld3NfX2VtcHR5IGgyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLnJldmlld3MgLnJldmlld3NfX3JhdGluZyBpb24taWNvbiB7XG4gIGNvbG9yOiAjZjNjZDAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/reviews/reviews.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/reviews/reviews.page.ts ***!
  \***********************************************/
/*! exports provided: ReviewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsPage", function() { return ReviewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_review_review_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/review/review.service */ "./src/app/services/review/review.service.ts");




var ReviewsPage = /** @class */ (function () {
    function ReviewsPage(route, reviewService) {
        var _this = this;
        this.route = route;
        this.reviewService = reviewService;
        var userId = this.route.snapshot.params['id'];
        this.reviews = [];
        this.loading = true;
        this.reviewService.getReviews(userId).then(function (data) {
            _this.loading = false;
            _this.reviews = data;
        }).catch(function () {
            _this.loading = false;
        });
    }
    ReviewsPage.prototype.ngOnInit = function () {
    };
    ReviewsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_review_review_service__WEBPACK_IMPORTED_MODULE_3__["ReviewService"] }
    ]; };
    ReviewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reviews',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./reviews.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reviews/reviews.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./reviews.page.scss */ "./src/app/pages/reviews/reviews.page.scss")).default]
        })
    ], ReviewsPage);
    return ReviewsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-reviews-reviews-module.js.map