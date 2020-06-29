(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["musicians-musicians-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/musicians/musicians.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/musicians/musicians.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-title>Browse</ion-title>\n        \n        \n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"openNotifications()\">\n                <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n                <ion-badge *ngIf=\"notificationsCount > 0\" class=\"notifications-badge\" color=\"danger\">{{notificationsCount}}</ion-badge>\n            </ion-button>   \n            \n        </ion-buttons>         \n        \n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"musicians\">\n    \n    \n    <div class=\"musicians__booking-request\" *ngIf=\"requests.length === 1\">\n        <h1>You have a new booking request!</h1>\n        <p *ngIf=\"requests[0].profile\">You have a new booking request from {{requests[0].profile.name}}.</p>\n        \n        <div class=\"musicians__booking-request__actions\">\n            <ion-button color=\"primary\" fill=\"clear\" [routerLink]=\"['/gigs/' + requests[0].id]\" routerDirection=\"forward\">\n                Confirm Booking\n            </ion-button>   \n            \n        </div>\n    </div>\n    \n    <div class=\"musicians__booking-request\" *ngIf=\"requests.length > 1\">\n        <h1>You have {{requests.length}} new booking request!</h1>\n        <p>View your booking requests to confirm them.</p>\n        \n        <div class=\"musicians__booking-request__actions\">\n            <ion-button color=\"primary\" fill=\"clear\" [routerLink]=\"['/tabs/gigs']\" routerDirection=\"forward\">\n                View Requests\n            </ion-button>    \n            \n        </div>\n    </div>    \n    \n    \n    \n    <div class=\"musicians__search\">\n        <ion-searchbar placeholder=\"Find a musician...\" [(ngModel)]=\"search\" (ionChange)=\"doSearch()\" color=\"light\" debounce=\"500\"></ion-searchbar>\n        <ion-button *ngIf=\"!search\" color=\"primary\" fill=\"clear\" class=\"musicians__search__filter\" (click)=\"openFilters()\">\n            <ion-icon slot=\"icon-only\" name=\"funnel\"></ion-icon>\n        </ion-button>          \n    </div>    \n    \n    \n    \n    <div *ngIf=\"!search\">\n        \n        \n        <div class=\"musicians__loading\" *ngIf=\"loading\">\n            <ion-spinner color=\"primary\"></ion-spinner>\n        </div>            \n        \n        \n\n        <div class=\"musicians__slider-section\" *ngIf=\"genres.length > 0\">\n\n            <h5>Browse Genres</h5>\n\n            <ion-slides pager=\"false\" class=\"musicians__slider-section__slider\" [options]=\"{slidesPerView: 2}\">\n\n\n\n                <ion-slide *ngFor=\"let category of genres\">\n                    <ion-card class=\"musicians__slider-section__slider__musician-card musician-card musician-card--categories\" [ngStyle]=\"{'background-image': 'url(' + category.image + ')'}\" [routerLink]=\"['/category/' + category.id]\" routerDirection=\"forward\">\n\n                        <ion-card-content>\n                            <h1>{{category.name}}</h1>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-slide>\n            </ion-slides>        \n\n\n        </div>\n\n\n        <div class=\"musicians__slider-section\" *ngIf=\"occasions.length > 0\">\n\n            <h5>Browse Occasions</h5>\n\n            <ion-slides pager=\"false\" class=\"musicians__slider-section__slider\" [options]=\"{slidesPerView: 2}\">\n\n\n\n                <ion-slide *ngFor=\"let category of occasions\">\n                    <ion-card class=\"musicians__slider-section__slider__musician-card musician-card musician-card--categories\" [ngStyle]=\"{'background-image': 'url(' + category.image + ')'}\" [routerLink]=\"['/category/' + category.id]\" routerDirection=\"forward\">\n\n                        <ion-card-content>\n                            <h1>{{category.name}}</h1>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-slide>\n            </ion-slides>        \n\n\n        </div>    \n\n\n\n\n\n\n        <div class=\"musicians__slider-section\" *ngIf=\"popular.length > 0\">\n\n            <h5>Popular Musicians</h5>\n\n            <ion-slides pager=\"false\" class=\"musicians__slider-section__slider\" [options]=\"{slidesPerView: 1}\">\n\n\n\n                <ion-slide *ngFor=\"let musician of popular\">\n                    <ion-card class=\"musicians__slider-section__slider__musician-card musician-card\" [ngStyle]=\"{'background-image': 'url(' + musician.avatar + ')'}\" [routerLink]=\"['/profile/' + musician.user_id]\" routerDirection=\"forward\">\n\n                        <ion-card-content>\n                            <h5>Hired {{musician.hire_count ? musician.hire_count : 0}} Time<span *ngIf=\"musician.hire_count !== 1\">s</span></h5>\n                                <h1>{{musician.name}}</h1>\n                                <h6>\n                                    {{calculateFeedback(musician)}}% Positive feedback\n                                </h6>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-slide>\n            </ion-slides>              \n\n\n\n\n        </div> \n\n        <div class=\"musicians__slider-section\" *ngIf=\"new.length > 0\">\n\n            <h5>New Musicians</h5>\n\n            <ion-slides pager=\"false\" class=\"musicians__slider-section__slider\" [options]=\"{slidesPerView: 1}\">\n\n\n\n                <ion-slide *ngFor=\"let musician of new\">\n                    <ion-card class=\"musicians__slider-section__slider__musician-card musician-card\" [ngStyle]=\"{'background-image': 'url(' + musician.avatar + ')'}\" [routerLink]=\"['/profile/' + musician.user_id]\" routerDirection=\"forward\">\n\n                        <ion-card-content>\n                                <h5>From {{musician.location}}</h5>\n                                <h1>{{musician.name}}</h1>\n                                <h6>\n                                    Plays {{musician.instruments_played}}\n                                </h6>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-slide>\n            </ion-slides>              \n\n\n\n\n        </div> \n\n\n\n        <div class=\"musicians__slider-section\"  *ngIf=\"recent.length > 0\">\n\n            <h5>Recently Hired</h5>\n\n            <ion-slides pager=\"false\" class=\"musicians__slider-section__slider\" [options]=\"{slidesPerView: 1}\">\n\n\n\n                <ion-slide *ngFor=\"let musician of recent\">\n                    <ion-card class=\"musicians__slider-section__slider__musician-card musician-card\" [ngStyle]=\"{'background-image': 'url(' + musician.avatar + ')'}\" [routerLink]=\"['/profile/' + musician.user_id]\" routerDirection=\"forward\">\n\n                        <ion-card-content>\n                                <h5>Hired {{musician.hire_count ? musician.hire_count : 0}} Time<span *ngIf=\"musician.hire_count !== 1\">s</span></h5>\n                                <h1>{{musician.name}}</h1>\n                                <h6>\n                                    {{calculateFeedback(musician)}}% Positive feedback\n                                </h6>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-slide>\n            </ion-slides>              \n\n\n\n\n        </div>     \n    \n    \n    </div>\n    \n    \n    <div *ngIf=\"search\" class=\"musicians__search-results\">\n        <ion-card class=\"musicians__search-results__musician-card musician-card\" *ngFor=\"let musician of searchedMusicians\" [ngStyle]=\"{'background-image': 'url(' + musician.avatar + ')'}\" [routerLink]=\"['/profile/' + musician.user_id]\" routerDirection=\"forward\">\n\n            <ion-card-content>\n                    <h5>Hired {{musician.hire_count ? musician.hire_count : 0}} Time<span *ngIf=\"musician.hire_count !== 1\">s</span></h5>\n                    <h1>{{musician.name}}</h1>\n                    <h6>\n                        {{calculateFeedback(musician)}}% Positive feedback\n                    </h6>\n            </ion-card-content>\n        </ion-card>           \n        \n        \n    </div>\n    \n    \n    \n\n\n    \n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/musicians/musicians-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/musicians/musicians-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MusiciansPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusiciansPageRoutingModule", function() { return MusiciansPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _musicians_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./musicians.page */ "./src/app/pages/musicians/musicians.page.ts");




var routes = [
    {
        path: '',
        component: _musicians_page__WEBPACK_IMPORTED_MODULE_3__["MusiciansPage"]
    }
];
var MusiciansPageRoutingModule = /** @class */ (function () {
    function MusiciansPageRoutingModule() {
    }
    MusiciansPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MusiciansPageRoutingModule);
    return MusiciansPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/musicians/musicians.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/musicians/musicians.module.ts ***!
  \*****************************************************/
/*! exports provided: MusiciansPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusiciansPageModule", function() { return MusiciansPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _musicians_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./musicians-routing.module */ "./src/app/pages/musicians/musicians-routing.module.ts");
/* harmony import */ var _musicians_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./musicians.page */ "./src/app/pages/musicians/musicians.page.ts");







var MusiciansPageModule = /** @class */ (function () {
    function MusiciansPageModule() {
    }
    MusiciansPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _musicians_routing_module__WEBPACK_IMPORTED_MODULE_5__["MusiciansPageRoutingModule"]
            ],
            declarations: [_musicians_page__WEBPACK_IMPORTED_MODULE_6__["MusiciansPage"]]
        })
    ], MusiciansPageModule);
    return MusiciansPageModule;
}());



/***/ }),

/***/ "./src/app/pages/musicians/musicians.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/musicians/musicians.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar .button .notifications-badge {\n  position: absolute;\n  right: -5px;\n  top: -5px;\n  font-size: 10px;\n}\n\n.musicians__search {\n  position: relative;\n  margin-top: 15px;\n}\n\n.musicians__search .musicians__search__filter {\n  position: absolute;\n  top: 7px;\n  right: 10px;\n  font-size: 10px;\n}\n\n.musicians__loading {\n  text-align: center;\n  margin-top: 60px;\n}\n\n.musicians__booking-request {\n  margin: 15px 20px;\n  text-align: center;\n  border: 2px solid #2497e8;\n  padding: 25px 0px;\n  border-radius: 15px;\n}\n\n.musicians__booking-request h1 {\n  margin: 0px;\n  font-size: 24px;\n  letter-spacing: 1px;\n  padding: 0px 25px;\n}\n\n.musicians__booking-request p {\n  padding: 0px 25px;\n}\n\n.musicians__slider-section {\n  width: 80% !important;\n  overflow: visible;\n  margin-top: 30px;\n  padding-left: 5px;\n}\n\n.musicians__slider-section > h5 {\n  padding: 0px 15px;\n  margin: 0px;\n  font-size: 18px;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n}\n\n.musicians__slider-section .swiper-container {\n  overflow: visible;\n}\n\n.musicians__search-results {\n  margin-top: 20px;\n}\n\n.musicians__search-results .musician-card {\n  width: auto;\n  margin: 10px;\n}\n\n.musicians__search-results .musician-card h6 {\n  margin-bottom: 50px;\n}\n\n.musician-card {\n  background-color: #000000;\n  color: white;\n  padding: 0px;\n  width: 100%;\n  text-align: left;\n  margin: 5px;\n  background-size: cover;\n  background-position: center center;\n  position: relative;\n  background-repeat: no-repeat;\n}\n\n.musician-card:focus {\n  outline: none;\n}\n\n.musician-card:before {\n  content: \"\";\n  background-color: rgba(0, 0, 0, 0.4);\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n}\n\n.musician-card h5 {\n  font-weight: 600;\n  padding: 0px;\n  margin-bottom: 15px;\n  margin-top: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.musician-card h1 {\n  font-size: 28px;\n  font-weight: 600;\n  line-height: 24px;\n  letter-spacing: 2px;\n  margin-bottom: 15px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.musician-card h6 {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 2px;\n  margin-bottom: 30px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.musician-card.musician-card--categories h1 {\n  font-size: 16px;\n  letter-spacing: 3px;\n  text-align: center;\n  margin-bottom: 0px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXVzaWNpYW5zL0Q6XFxUYXlsb3JcXERvY3VtZW50c1xcV2Vic2l0ZXNcXG11c2ljYnVkZHlcXGFwcC9zcmNcXGFwcFxccGFnZXNcXG11c2ljaWFuc1xcbXVzaWNpYW5zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbXVzaWNpYW5zL211c2ljaWFucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxrQkFBQTtFQUNJLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0RKOztBREdJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNEUjs7QURPQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNKSjs7QURRQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNMSjs7QURPSTtFQUNFLFdBQUE7RUFDRixlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFFJO0VBRUEsaUJBQUE7QUNQSjs7QURZQTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDVEo7O0FEV0k7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1RKOztBRFlJO0VBQ0ksaUJBQUE7QUNWUjs7QURrQkE7RUFDSSxnQkFBQTtBQ2ZKOztBRGdCSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDZFI7O0FEZVE7RUFDSSxtQkFBQTtBQ2JaOztBRG9CQTtFQUNZLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUNqQlo7O0FEb0JZO0VBQ0ksYUFBQTtBQ2xCaEI7O0FEcUJZO0VBQ0ksV0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0QsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDbkJmOztBRHNCUTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNwQlo7O0FEd0JRO0VBQ0EsZUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDdEJaOztBRHlCUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDdkJaOztBRDRCWTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDMUJoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL211c2ljaWFucy9tdXNpY2lhbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIgLmJ1dHRvbiAubm90aWZpY2F0aW9ucy1iYWRnZXtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC01cHg7XHJcbiAgICB0b3A6IC01cHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLm11c2ljaWFuc19fc2VhcmNoe1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOjE1cHg7XHJcblxyXG4gICAgLm11c2ljaWFuc19fc2VhcmNoX19maWx0ZXJ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogN3B4O1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ubXVzaWNpYW5zX19sb2FkaW5ne1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDsgICAgICAgIFxyXG59XHJcblxyXG5cclxuLm11c2ljaWFuc19fYm9va2luZy1yZXF1ZXN0e1xyXG4gICAgbWFyZ2luOiAxNXB4IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjQ5N2U4O1xyXG4gICAgcGFkZGluZzogMjVweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgXHJcbiAgICBoMXtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4OyAgXHJcbiAgICBwYWRkaW5nOiAwcHggMjVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHtcclxuICAgICAgICAgXHJcbiAgICBwYWRkaW5nOiAwcHggMjVweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5tdXNpY2lhbnNfX3NsaWRlci1zZWN0aW9ue1xyXG4gICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6dmlzaWJsZTtcclxuICAgIG1hcmdpbi10b3A6MzBweDtcclxuICAgIHBhZGRpbmctbGVmdDo1cHg7XHJcbiAgICBcclxuICAgID4gaDV7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnN3aXBlci1jb250YWluZXJ7XHJcbiAgICAgICAgb3ZlcmZsb3c6dmlzaWJsZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgXHJcbn1cclxuXHJcbi5tdXNpY2lhbnNfX3NlYXJjaC1yZXN1bHRze1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgLm11c2ljaWFuLWNhcmR7XHJcbiAgICAgICAgd2lkdGg6YXV0bztcclxuICAgICAgICBtYXJnaW46MTBweDtcclxuICAgICAgICBoNntcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4ubXVzaWNpYW4tY2FyZHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuXHJcbiAgICAgICAgICAgICY6Zm9jdXN7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgY29udGVudDpcIlwiO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICAgICAgICAgICB0b3A6MHB4O1xyXG4gICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBoNXtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgcGFkZGluZzowcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGg2e1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4OyAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjMwcHg7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5tdXNpY2lhbi1jYXJkLS1jYXRlZ29yaWVze1xyXG5cclxuICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTowcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG59IiwiaW9uLXRvb2xiYXIgLmJ1dHRvbiAubm90aWZpY2F0aW9ucy1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC01cHg7XG4gIHRvcDogLTVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ubXVzaWNpYW5zX19zZWFyY2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ubXVzaWNpYW5zX19zZWFyY2ggLm11c2ljaWFuc19fc2VhcmNoX19maWx0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogN3B4O1xuICByaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ubXVzaWNpYW5zX19sb2FkaW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG4ubXVzaWNpYW5zX19ib29raW5nLXJlcXVlc3Qge1xuICBtYXJnaW46IDE1cHggMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjQ5N2U4O1xuICBwYWRkaW5nOiAyNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbi5tdXNpY2lhbnNfX2Jvb2tpbmctcmVxdWVzdCBoMSB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHBhZGRpbmc6IDBweCAyNXB4O1xufVxuLm11c2ljaWFuc19fYm9va2luZy1yZXF1ZXN0IHAge1xuICBwYWRkaW5nOiAwcHggMjVweDtcbn1cblxuLm11c2ljaWFuc19fc2xpZGVyLXNlY3Rpb24ge1xuICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbi5tdXNpY2lhbnNfX3NsaWRlci1zZWN0aW9uID4gaDUge1xuICBwYWRkaW5nOiAwcHggMTVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm11c2ljaWFuc19fc2xpZGVyLXNlY3Rpb24gLnN3aXBlci1jb250YWluZXIge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLm11c2ljaWFuc19fc2VhcmNoLXJlc3VsdHMge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm11c2ljaWFuc19fc2VhcmNoLXJlc3VsdHMgLm11c2ljaWFuLWNhcmQge1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiAxMHB4O1xufVxuLm11c2ljaWFuc19fc2VhcmNoLXJlc3VsdHMgLm11c2ljaWFuLWNhcmQgaDYge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4ubXVzaWNpYW4tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5tdXNpY2lhbi1jYXJkOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5tdXNpY2lhbi1jYXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm11c2ljaWFuLWNhcmQgaDUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLm11c2ljaWFuLWNhcmQgaDEge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tdXNpY2lhbi1jYXJkIGg2IHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4ubXVzaWNpYW4tY2FyZC5tdXNpY2lhbi1jYXJkLS1jYXRlZ29yaWVzIGgxIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/musicians/musicians.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/musicians/musicians.page.ts ***!
  \***************************************************/
/*! exports provided: MusiciansPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusiciansPage", function() { return MusiciansPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notifications/notifications.service */ "./src/app/services/notifications/notifications.service.ts");
/* harmony import */ var _services_musician_musician_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/musician/musician.service */ "./src/app/services/musician/musician.service.ts");
/* harmony import */ var _services_gig_gig_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/gig/gig.service */ "./src/app/services/gig/gig.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _filters_filters_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../filters/filters.page */ "./src/app/pages/filters/filters.page.ts");
/* harmony import */ var _notifications_notifications_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../notifications/notifications.page */ "./src/app/pages/notifications/notifications.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











var MusiciansPage = /** @class */ (function () {
    function MusiciansPage(toastController, modalController, router, authenticationService, alertCtrl, notificationsService, ngZone, musicianService, gigService) {
        var _this = this;
        this.toastController = toastController;
        this.modalController = modalController;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertCtrl = alertCtrl;
        this.notificationsService = notificationsService;
        this.ngZone = ngZone;
        this.musicianService = musicianService;
        this.gigService = gigService;
        this.filters = { orderby: "created_at", order: "asc", instruments: "" };
        this.search = "";
        this.loading = true;
        //get genres
        this.genres = [];
        this.musicianService.getCategories(1).then(function (data) {
            _this.loading = false;
            _this.genres = data;
        });
        //get occasions
        this.occasions = [];
        this.musicianService.getCategories(2).then(function (data) {
            _this.loading = false;
            _this.occasions = data;
        });
        this.popular = [];
        this.new = [];
        this.recent = [];
        this.searchedMusicians = [];
        this.requests = [];
        this.notificationsCount = 0;
        this.notificationsService.monitorNotifications().subscribe(function (changed) {
            _this.notificationsService.getNotificationCount().then(function (data) {
                _this.ngZone.run(function () {
                    if (_this.notificationsCount !== data) {
                        _this.notificationsCount = data;
                        _this.getBookingRequests();
                    }
                });
            });
        });
    }
    MusiciansPage.prototype.ngOnInit = function () {
    };
    MusiciansPage.prototype.ionViewDidEnter = function () {
        this.getMusicians();
        this.getBookingRequests();
    };
    MusiciansPage.prototype.getBookingRequests = function () {
        var _this = this;
        this.gigService.getBookingRequests().then(function (data) {
            _this.ngZone.run(function () {
                _this.requests = data;
            });
        });
    };
    MusiciansPage.prototype.getMusicians = function () {
        var _this = this;
        this.musicianService.getMusicians(this.search, this.filters).then(function (data) {
            console.log(data);
            _this.loading = false;
            _this.popular = data["popular"];
            _this.new = data["new"];
            _this.recent = data["recent"];
        });
    };
    MusiciansPage.prototype.doSearch = function () {
        var _this = this;
        this.musicianService.getMusicians(this.search, this.filters).then(function (data) {
            _this.searchedMusicians = data;
        });
    };
    MusiciansPage.prototype.openFilters = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _filters_filters_page__WEBPACK_IMPORTED_MODULE_7__["FiltersPage"],
                            componentProps: { filters: this.filters }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            if (data && data.data) {
                                _this.filters = data.data.filters;
                                if (_this.search) {
                                    _this.doSearch();
                                }
                                else {
                                    _this.getMusicians();
                                }
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MusiciansPage.prototype.openNotifications = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _notifications_notifications_page__WEBPACK_IMPORTED_MODULE_8__["NotificationsPage"],
                            componentProps: {}
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MusiciansPage.prototype.calculateFeedback = function (musician) {
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
    MusiciansPage.prototype.formatDate = function (date) {
        var localeOffset = -(new Date().getTimezoneOffset());
        return moment__WEBPACK_IMPORTED_MODULE_10__(date).add(localeOffset, 'm').format("DD/MM/YYYY, h:mma");
    };
    MusiciansPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _services_musician_musician_service__WEBPACK_IMPORTED_MODULE_4__["MusicianService"] },
        { type: _services_gig_gig_service__WEBPACK_IMPORTED_MODULE_5__["GigService"] }
    ]; };
    MusiciansPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-musicians',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./musicians.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/musicians/musicians.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./musicians.page.scss */ "./src/app/pages/musicians/musicians.page.scss")).default]
        })
    ], MusiciansPage);
    return MusiciansPage;
}());



/***/ })

}]);
//# sourceMappingURL=musicians-musicians-module.js.map