(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-manage-payments-manage-payments-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-payments/manage-payments.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-payments/manage-payments.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button>\n                <ion-back-button defaultHref=\"/tabs/jobs\"></ion-back-button>\n            </ion-button>            \n        </ion-buttons>   \n        \n        <ion-title>Manage Payments</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"manage-payments\">\n    \n    <div class=\"manage-payments__loading\" *ngIf=\"loading\">\n        <ion-spinner color=\"primary\"></ion-spinner>\n    </div>    \n\n    <div class=\"manage-payments__empty\" *ngIf=\"payments.length < 1 && !loading\">\n        <ion-icon name=\"card\"></ion-icon>\n        <h2>No Payments Due</h2>\n    </div>     \n    \n    \n    <ion-list class=\"manage-payments__list\"  *ngIf=\"payments.length > 0\"> \n        \n        <div class=\"manage-payments__list__user\"  >\n            <ion-item *ngFor=\"let payment of payments\" [routerLink]=\"['/profile/' + payment.profile.user_id]\" routerDirection=\"forward\">  \n                <ion-avatar slot=\"start\" *ngIf=\"payment.profile.avatar\">\n                    <img [src]=\"payment.profile.avatar\" />\n                </ion-avatar>                  \n                <ion-label class=\"ion-text-wrap\">                    \n                    <h2>{{payment.profile.name}}</h2>\n                    <h3>Owed ${{payment.total | number:'1.2-2'}}</h3>\n                    <p>Bank account: {{payment.profile.bank_account ? payment.profile.bank_account : 'None set'}}</p>\n                </ion-label>\n                <ion-button slot=\"end\" fill=\"outline\" (click)=\"markAsPaid($event,payment)\" [disabled]=\"payment.status === 'userpaid'\">\n                    <span *ngIf=\"payment.status !== 'userpaid'\">Mark As Paid</span>\n                    <span *ngIf=\"payment.status === 'userpaid'\">Paid</span>\n                </ion-button>\n            </ion-item>                 \n        </div>\n        \n        \n    </ion-list>    \n    \n    \n\n</ion-content>\n\n\n\n<ion-footer class=\"manage-payments-footer\">\n    \n    <ion-button color='primary' class=\"manage-payments-footer__button\" (click)=\"markAllPaid()\">\n        Mark All Paid\n    </ion-button>    \n    \n    <ion-button color='light' class=\"manage-payments-footer__button\" (click)=\"getBankFile()\">\n        Generate Bank File\n    </ion-button>  \n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/manage-payments/manage-payments-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/manage-payments/manage-payments-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ManagePaymentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePaymentsPageRoutingModule", function() { return ManagePaymentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _manage_payments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-payments.page */ "./src/app/pages/manage-payments/manage-payments.page.ts");




var routes = [
    {
        path: '',
        component: _manage_payments_page__WEBPACK_IMPORTED_MODULE_3__["ManagePaymentsPage"]
    }
];
var ManagePaymentsPageRoutingModule = /** @class */ (function () {
    function ManagePaymentsPageRoutingModule() {
    }
    ManagePaymentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ManagePaymentsPageRoutingModule);
    return ManagePaymentsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/manage-payments/manage-payments.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/manage-payments/manage-payments.module.ts ***!
  \*****************************************************************/
/*! exports provided: ManagePaymentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePaymentsPageModule", function() { return ManagePaymentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _manage_payments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-payments-routing.module */ "./src/app/pages/manage-payments/manage-payments-routing.module.ts");
/* harmony import */ var _manage_payments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-payments.page */ "./src/app/pages/manage-payments/manage-payments.page.ts");







var ManagePaymentsPageModule = /** @class */ (function () {
    function ManagePaymentsPageModule() {
    }
    ManagePaymentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _manage_payments_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManagePaymentsPageRoutingModule"]
            ],
            declarations: [_manage_payments_page__WEBPACK_IMPORTED_MODULE_6__["ManagePaymentsPage"]]
        })
    ], ManagePaymentsPageModule);
    return ManagePaymentsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/manage-payments/manage-payments.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/manage-payments/manage-payments.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".manage-payments .manage-payments__loading {\n  text-align: center;\n  margin-top: 60px;\n}\n.manage-payments .manage-payments__empty {\n  text-align: center;\n  opacity: 0.2;\n  padding-top: 60px;\n  padding-bottom: 60px;\n}\n.manage-payments .manage-payments__empty ion-icon {\n  font-size: 60px;\n}\n.manage-payments .manage-payments__empty h2 {\n  margin: 0px;\n  margin-top: 5px;\n  font-size: 22px;\n}\n.manage-payments-footer {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFuYWdlLXBheW1lbnRzL0Q6XFxUYXlsb3JcXERvY3VtZW50c1xcV2Vic2l0ZXNcXG11c2ljYnVkZHlcXGFwcC9zcmNcXGFwcFxccGFnZXNcXG1hbmFnZS1wYXltZW50c1xcbWFuYWdlLXBheW1lbnRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFuYWdlLXBheW1lbnRzL21hbmFnZS1wYXltZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDRFI7QURLSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNIUjtBREtRO0VBQ0ksZUFBQTtBQ0haO0FETVE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNKWjtBRFVBO0VBQ0ksa0JBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmFnZS1wYXltZW50cy9tYW5hZ2UtcGF5bWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hbmFnZS1wYXltZW50c3tcclxuICAgIFxyXG4gICAgLm1hbmFnZS1wYXltZW50c19fbG9hZGluZ3tcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDsgICAgICAgIFxyXG4gICAgfSAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIC5tYW5hZ2UtcGF5bWVudHNfX2VtcHR5e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDYwcHg7ICBcclxuXHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7ICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLm1hbmFnZS1wYXltZW50cy1mb290ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufSIsIi5tYW5hZ2UtcGF5bWVudHMgLm1hbmFnZS1wYXltZW50c19fbG9hZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cbi5tYW5hZ2UtcGF5bWVudHMgLm1hbmFnZS1wYXltZW50c19fZW1wdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuMjtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xufVxuLm1hbmFnZS1wYXltZW50cyAubWFuYWdlLXBheW1lbnRzX19lbXB0eSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbn1cbi5tYW5hZ2UtcGF5bWVudHMgLm1hbmFnZS1wYXltZW50c19fZW1wdHkgaDIge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5tYW5hZ2UtcGF5bWVudHMtZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/manage-payments/manage-payments.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/manage-payments/manage-payments.page.ts ***!
  \***************************************************************/
/*! exports provided: ManagePaymentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePaymentsPage", function() { return ManagePaymentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/admin/admin.service */ "./src/app/services/admin/admin.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");





var ManagePaymentsPage = /** @class */ (function () {
    function ManagePaymentsPage(adminService, alertCtrl, iab) {
        var _this = this;
        this.adminService = adminService;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this.payments = [];
        this.loading = true;
        this.adminService.getPayments().then(function (data) {
            _this.loading = false;
            _this.payments = data;
        }).catch(function () {
            _this.loading = false;
        });
    }
    ManagePaymentsPage.prototype.ngOnInit = function () {
    };
    ManagePaymentsPage.prototype.getPayments = function () {
    };
    ManagePaymentsPage.prototype.markAsPaid = function (ev, payment) {
        var _this = this;
        ev.stopPropagation();
        ev.preventDefault();
        var alert = this.alertCtrl.create({
            header: 'Are you sure?',
            message: 'You are about to mark this user as paid. Ensure you have paid this user before you continue.',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Continue',
                    handler: function (data) {
                        var total = payment.total;
                        payment.status = "userpaid";
                        payment.total = 0;
                        _this.adminService.markAsPaid(payment.profile.user_id).then(function () {
                        }).catch(function () {
                            payment.status = "";
                            payment.total = total;
                        });
                    }
                }
            ]
        }).then(function (el) {
            el.present();
        });
    };
    ManagePaymentsPage.prototype.markAllPaid = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            header: 'Are you sure?',
            message: 'You are about to mark all payments as paid. Ensure you have paid all users before you continue.',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Continue',
                    handler: function (data) {
                        var e_1, _a;
                        try {
                            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.payments), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var payment = _c.value;
                                payment.status = "userpaid";
                                payment.total = 0;
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        _this.adminService.markAllAsPaid().then(function () { }).catch(function () { });
                    }
                }
            ]
        }).then(function (el) {
            el.present();
        });
    };
    ManagePaymentsPage.prototype.getBankFile = function () {
        var _this = this;
        this.adminService.getBankFile().then(function (data) {
            _this.iab.create(data.file, "_system");
        });
    };
    ManagePaymentsPage.ctorParameters = function () { return [
        { type: _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"] }
    ]; };
    ManagePaymentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-payments',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./manage-payments.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-payments/manage-payments.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./manage-payments.page.scss */ "./src/app/pages/manage-payments/manage-payments.page.scss")).default]
        })
    ], ManagePaymentsPage);
    return ManagePaymentsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-manage-payments-manage-payments-module.js.map