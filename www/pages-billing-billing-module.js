(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-billing-billing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/billing/billing.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/billing/billing.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button>\n                <ion-back-button defaultHref=\"/settings\"></ion-back-button>\n            </ion-button>            \n        </ion-buttons>   \n        \n        <ion-title>Billing & Payments</ion-title>\n        \n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"billing\">\n    \n\n    <div class=\"billing__loading\" *ngIf=\"loading\">\n        <ion-spinner color=\"primary\"></ion-spinner>\n    </div>    \n\n    <div class=\"billing__empty\" *ngIf=\"payments.length < 1 && !loading\">\n        <ion-icon name=\"card\"></ion-icon>\n        <h2>No Bills/Payments</h2>\n    </div>  \n\n    \n    <ion-list class=\"billing__list\" *ngIf=\"payments.length > 0\">\n        \n        <ion-item class=\"billing__list__item\" *ngFor=\"let payment of payments\" \n                  [ngClass]=\"{'billing__list__item--add' : payment.recipient_user_id === user.id, 'billing__list__item--subtract' : payment.user_id === user.id}\"\n                   [routerLink]=\"['/gigs/' + payment.gig_id]\" routerDirection=\"forward\">\n            <ion-label class=\"ion-text-wrap\"> \n                <h2>{{formatDate(payment.payment_date)}}</h2>\n                <h3>\n                    ${{getPayment(payment) | number:'1.2-2'}}\n                </h3>\n                <p>{{getStatus(payment)}}</p>\n            </ion-label>\n        </ion-item>  \n        \n    </ion-list>\n    \n    \n\n    \n    \n</ion-content>");

/***/ }),

/***/ "./src/app/pages/billing/billing-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/billing/billing-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: BillingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingPageRoutingModule", function() { return BillingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _billing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./billing.page */ "./src/app/pages/billing/billing.page.ts");




var routes = [
    {
        path: '',
        component: _billing_page__WEBPACK_IMPORTED_MODULE_3__["BillingPage"]
    }
];
var BillingPageRoutingModule = /** @class */ (function () {
    function BillingPageRoutingModule() {
    }
    BillingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BillingPageRoutingModule);
    return BillingPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/billing/billing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/billing/billing.module.ts ***!
  \*************************************************/
/*! exports provided: BillingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingPageModule", function() { return BillingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _billing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./billing-routing.module */ "./src/app/pages/billing/billing-routing.module.ts");
/* harmony import */ var _billing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./billing.page */ "./src/app/pages/billing/billing.page.ts");







var BillingPageModule = /** @class */ (function () {
    function BillingPageModule() {
    }
    BillingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _billing_routing_module__WEBPACK_IMPORTED_MODULE_5__["BillingPageRoutingModule"]
            ],
            declarations: [_billing_page__WEBPACK_IMPORTED_MODULE_6__["BillingPage"]]
        })
    ], BillingPageModule);
    return BillingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/billing/billing.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/billing/billing.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".billing .billing__loading {\n  text-align: center;\n  margin-top: 60px;\n}\n.billing .billing__empty {\n  text-align: center;\n  opacity: 0.2;\n  padding-top: 60px;\n  padding-bottom: 60px;\n}\n.billing .billing__empty ion-icon {\n  font-size: 60px;\n}\n.billing .billing__empty h2 {\n  margin: 0px;\n  margin-top: 5px;\n  font-size: 22px;\n}\n.billing .billing__list .billing__list__item {\n  position: relative;\n}\n.billing .billing__list .billing__list__item h3 {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n}\n.billing .billing__list .billing__list__item.billing__list__item--add h3 {\n  color: green;\n}\n.billing .billing__list .billing__list__item.billing__list__item--add h3:before {\n  content: \"+ \";\n}\n.billing .billing__list .billing__list__item.billing__list__item--subtract h3 {\n  color: red;\n}\n.billing .billing__list .billing__list__item.billing__list__item--subtract h3:before {\n  content: \"- \";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmlsbGluZy9EOlxcVGF5bG9yXFxEb2N1bWVudHNcXFdlYnNpdGVzXFxtdXNpY2J1ZGR5XFxhcHAvc3JjXFxhcHBcXHBhZ2VzXFxiaWxsaW5nXFxiaWxsaW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYmlsbGluZy9iaWxsaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNEUjtBREtJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0hSO0FES1E7RUFDSSxlQUFBO0FDSFo7QURNUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0paO0FEVVE7RUFDSSxrQkFBQTtBQ1JaO0FEU1k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDUGhCO0FEV2dCO0VBQ0ksWUFBQTtBQ1RwQjtBRFVvQjtFQUNJLGFBQUE7QUNSeEI7QURlZ0I7RUFDSSxVQUFBO0FDYnBCO0FEY29CO0VBQ0ksYUFBQTtBQ1p4QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JpbGxpbmcvYmlsbGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmlsbGluZ3tcclxuICAgIFxyXG4gICAgLmJpbGxpbmdfX2xvYWRpbmd7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDYwcHg7ICAgICAgICBcclxuICAgIH0gICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAuYmlsbGluZ19fZW1wdHl7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDsgIFxyXG5cclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDsgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJpbGxpbmdfX2xpc3R7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmJpbGxpbmdfX2xpc3RfX2l0ZW17XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6MTVweDtcclxuICAgICAgICAgICAgICAgIHRvcDoxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAmLmJpbGxpbmdfX2xpc3RfX2l0ZW0tLWFkZHtcclxuICAgICAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOmdyZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OlwiKyBcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAmLmJpbGxpbmdfX2xpc3RfX2l0ZW0tLXN1YnRyYWN0e1xyXG4gICAgICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6cmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OlwiLSBcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG59IiwiLmJpbGxpbmcgLmJpbGxpbmdfX2xvYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG4uYmlsbGluZyAuYmlsbGluZ19fZW1wdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuMjtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xufVxuLmJpbGxpbmcgLmJpbGxpbmdfX2VtcHR5IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA2MHB4O1xufVxuLmJpbGxpbmcgLmJpbGxpbmdfX2VtcHR5IGgyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLmJpbGxpbmcgLmJpbGxpbmdfX2xpc3QgLmJpbGxpbmdfX2xpc3RfX2l0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYmlsbGluZyAuYmlsbGluZ19fbGlzdCAuYmlsbGluZ19fbGlzdF9faXRlbSBoMyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogMTVweDtcbn1cbi5iaWxsaW5nIC5iaWxsaW5nX19saXN0IC5iaWxsaW5nX19saXN0X19pdGVtLmJpbGxpbmdfX2xpc3RfX2l0ZW0tLWFkZCBoMyB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5iaWxsaW5nIC5iaWxsaW5nX19saXN0IC5iaWxsaW5nX19saXN0X19pdGVtLmJpbGxpbmdfX2xpc3RfX2l0ZW0tLWFkZCBoMzpiZWZvcmUge1xuICBjb250ZW50OiBcIisgXCI7XG59XG4uYmlsbGluZyAuYmlsbGluZ19fbGlzdCAuYmlsbGluZ19fbGlzdF9faXRlbS5iaWxsaW5nX19saXN0X19pdGVtLS1zdWJ0cmFjdCBoMyB7XG4gIGNvbG9yOiByZWQ7XG59XG4uYmlsbGluZyAuYmlsbGluZ19fbGlzdCAuYmlsbGluZ19fbGlzdF9faXRlbS5iaWxsaW5nX19saXN0X19pdGVtLS1zdWJ0cmFjdCBoMzpiZWZvcmUge1xuICBjb250ZW50OiBcIi0gXCI7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/billing/billing.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/billing/billing.page.ts ***!
  \***********************************************/
/*! exports provided: BillingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingPage", function() { return BillingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);




var BillingPage = /** @class */ (function () {
    function BillingPage(authenticationService) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.loading = true;
        this.payments = [];
        this.user = {};
        this.authenticationService.getUserData().subscribe(function (data) {
            _this.user = data;
        });
        this.authenticationService.getPayments().then(function (data) {
            console.log(data);
            _this.payments = data;
            _this.loading = false;
        }).catch(function () {
            _this.loading = false;
        });
    }
    BillingPage.prototype.ngOnInit = function () {
    };
    BillingPage.prototype.getPayment = function (payment) {
        if (payment.user_id === this.user.id) {
            return payment.payment;
        }
        else if (payment.recipient_user_id === this.user.id) {
            return payment.payment / 1.1;
        }
    };
    BillingPage.prototype.getStatus = function (payment) {
        if (payment.user_id === this.user.id) {
            return payment.status === "stripepaid" ? "Payment Received" : "Musician Paid";
        }
        else if (payment.recipient_user_id === this.user.id) {
            return payment.status === "stripepaid" ? "Pending Payment" : "Payment Sent";
        }
    };
    BillingPage.prototype.formatDate = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_3__(date).format("Do MMM YYYY");
    };
    BillingPage.ctorParameters = function () { return [
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    BillingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-billing',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./billing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/billing/billing.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./billing.page.scss */ "./src/app/pages/billing/billing.page.scss")).default]
        })
    ], BillingPage);
    return BillingPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-billing-billing-module.js.map