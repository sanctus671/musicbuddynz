(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-manage-users-manage-users-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-users/manage-users.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-users/manage-users.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button>\n                <ion-back-button defaultHref=\"/tabs/jobs\"></ion-back-button>\n            </ion-button>            \n        </ion-buttons>   \n        \n        <ion-title>Manage Users</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"manage-users\">\n    \n    \n    <div class=\"manage-users__loading\" *ngIf=\"loading\">\n        <ion-spinner color=\"primary\"></ion-spinner>\n    </div>    \n\n    <div class=\"manage-users__empty\" *ngIf=\"users.length < 1 && !loading\">\n        <ion-icon name=\"people\"></ion-icon>\n        <h2>No Unverified Users</h2>\n    </div>     \n    \n    \n    <ion-list class=\"manage-users__list\" *ngIf=\"users.length > 0\"> \n        \n        <div class=\"manage-users__list__user\"  *ngFor=\"let user of users\">\n            <ion-item lines=\"none\" [routerLink]=\"['/profile/' + user.user_id]\" routerDirection=\"forward\">\n                <ion-avatar slot=\"start\" *ngIf=\"user.avatar\">\n                    <img [src]=\"user.avatar\" />\n                </ion-avatar>                      \n                <ion-label>\n                    <h2>{{user.name}}</h2>\n                    <p>Signed up {{formatDate(user.created_at)}}</p>\n                </ion-label>\n\n            </ion-item>     \n\n            <div class=\"manage-users__list__user__actions\">\n\n                <ion-button  *ngIf=\"user.phone\" fill=\"outline\" slot=\"end\" color=\"dark\" (click)=\"callUser(user)\">\n                    Call User\n                </ion-button>               \n                <ion-button slot=\"end\" fill=\"outline\" (click)=\"markAsChecked($event,user)\" [disabled]=\"user.verified\">\n                    Mark As Verified\n                </ion-button>\n\n            </div>                 \n        </div>\n        \n        \n    </ion-list>\n    \n    \n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/manage-users/manage-users-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/manage-users/manage-users-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ManageUsersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUsersPageRoutingModule", function() { return ManageUsersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _manage_users_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-users.page */ "./src/app/pages/manage-users/manage-users.page.ts");




var routes = [
    {
        path: '',
        component: _manage_users_page__WEBPACK_IMPORTED_MODULE_3__["ManageUsersPage"]
    }
];
var ManageUsersPageRoutingModule = /** @class */ (function () {
    function ManageUsersPageRoutingModule() {
    }
    ManageUsersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ManageUsersPageRoutingModule);
    return ManageUsersPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/manage-users/manage-users.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/manage-users/manage-users.module.ts ***!
  \***********************************************************/
/*! exports provided: ManageUsersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUsersPageModule", function() { return ManageUsersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _manage_users_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-users-routing.module */ "./src/app/pages/manage-users/manage-users-routing.module.ts");
/* harmony import */ var _manage_users_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-users.page */ "./src/app/pages/manage-users/manage-users.page.ts");







var ManageUsersPageModule = /** @class */ (function () {
    function ManageUsersPageModule() {
    }
    ManageUsersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _manage_users_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManageUsersPageRoutingModule"]
            ],
            declarations: [_manage_users_page__WEBPACK_IMPORTED_MODULE_6__["ManageUsersPage"]]
        })
    ], ManageUsersPageModule);
    return ManageUsersPageModule;
}());



/***/ }),

/***/ "./src/app/pages/manage-users/manage-users.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/manage-users/manage-users.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".manage-users .manage-users__loading {\n  text-align: center;\n  margin-top: 60px;\n}\n.manage-users .manage-users__empty {\n  text-align: center;\n  opacity: 0.2;\n  padding-top: 60px;\n  padding-bottom: 60px;\n}\n.manage-users .manage-users__empty ion-icon {\n  font-size: 60px;\n}\n.manage-users .manage-users__empty h2 {\n  margin: 0px;\n  margin-top: 5px;\n  font-size: 22px;\n}\n.manage-users .manage-users__list .manage-users__list__user {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  padding-bottom: 20px;\n  margin-bottom: 10px;\n}\n.manage-users .manage-users__list .manage-users__list__user .manage-users__list__user__actions {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFuYWdlLXVzZXJzL0Q6XFxUYXlsb3JcXERvY3VtZW50c1xcV2Vic2l0ZXNcXG11c2ljYnVkZHlcXGFwcC9zcmNcXGFwcFxccGFnZXNcXG1hbmFnZS11c2Vyc1xcbWFuYWdlLXVzZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFuYWdlLXVzZXJzL21hbmFnZS11c2Vycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDRFI7QURLSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNIUjtBREtRO0VBQ0ksZUFBQTtBQ0haO0FETVE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNKWjtBRFdRO0VBRUksNENBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDVlo7QURZWTtFQUNJLGtCQUFBO0FDVmhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFuYWdlLXVzZXJzL21hbmFnZS11c2Vycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFuYWdlLXVzZXJze1xyXG4gICAgXHJcbiAgICAubWFuYWdlLXVzZXJzX19sb2FkaW5ne1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4OyAgICAgICAgXHJcbiAgICB9ICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgLm1hbmFnZS11c2Vyc19fZW1wdHl7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDsgIFxyXG5cclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDsgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAubWFuYWdlLXVzZXJzX19saXN0e1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5tYW5hZ2UtdXNlcnNfX2xpc3RfX3VzZXJ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7ICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAubWFuYWdlLXVzZXJzX19saXN0X191c2VyX19hY3Rpb25ze1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9ICAgIFxyXG4gICAgXHJcbiAgICBcclxufSIsIi5tYW5hZ2UtdXNlcnMgLm1hbmFnZS11c2Vyc19fbG9hZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cbi5tYW5hZ2UtdXNlcnMgLm1hbmFnZS11c2Vyc19fZW1wdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuMjtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xufVxuLm1hbmFnZS11c2VycyAubWFuYWdlLXVzZXJzX19lbXB0eSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbn1cbi5tYW5hZ2UtdXNlcnMgLm1hbmFnZS11c2Vyc19fZW1wdHkgaDIge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDIycHg7XG59XG4ubWFuYWdlLXVzZXJzIC5tYW5hZ2UtdXNlcnNfX2xpc3QgLm1hbmFnZS11c2Vyc19fbGlzdF9fdXNlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tYW5hZ2UtdXNlcnMgLm1hbmFnZS11c2Vyc19fbGlzdCAubWFuYWdlLXVzZXJzX19saXN0X191c2VyIC5tYW5hZ2UtdXNlcnNfX2xpc3RfX3VzZXJfX2FjdGlvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/manage-users/manage-users.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/manage-users/manage-users.page.ts ***!
  \*********************************************************/
/*! exports provided: ManageUsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUsersPage", function() { return ManageUsersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/admin/admin.service */ "./src/app/services/admin/admin.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);






var ManageUsersPage = /** @class */ (function () {
    function ManageUsersPage(adminService, alertCtrl, iab) {
        this.adminService = adminService;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this.loading = true;
        this.users = [];
        this.getUsers();
    }
    ManageUsersPage.prototype.ngOnInit = function () {
    };
    ManageUsersPage.prototype.getUsers = function () {
        var _this = this;
        console.log("her");
        this.adminService.getUsers().then(function (data) {
            _this.loading = false;
            _this.users = data;
        }).catch(function () {
            _this.loading = false;
        });
    };
    ManageUsersPage.prototype.markAsChecked = function (ev, user) {
        var _this = this;
        ev.stopPropagation();
        ev.preventDefault();
        var alert = this.alertCtrl.create({
            header: 'Are you sure?',
            message: 'You are about to mark this user as verified. This will be visible to other users in the app. Ensure this user has been properly checked before you continue.',
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
                        user.security_check = true;
                        _this.adminService.checkUser(user.user_id).then(function () {
                            _this.getUsers();
                        }).catch(function () {
                            user.security_check = false;
                        });
                    }
                }
            ]
        }).then(function (el) {
            el.present();
        });
    };
    ManageUsersPage.prototype.callUser = function (user) {
        this.iab.create("tel:" + user.phone, '_system');
    };
    ManageUsersPage.prototype.emailUser = function (user) {
        this.iab.create("mailto:" + user.email, '_system');
    };
    ManageUsersPage.prototype.formatDate = function (date) {
        var localeOffset = -(new Date().getTimezoneOffset());
        return moment__WEBPACK_IMPORTED_MODULE_5__(date).add(localeOffset, 'm').calendar();
    };
    ManageUsersPage.ctorParameters = function () { return [
        { type: _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"] }
    ]; };
    ManageUsersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-users',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./manage-users.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-users/manage-users.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./manage-users.page.scss */ "./src/app/pages/manage-users/manage-users.page.scss")).default]
        })
    ], ManageUsersPage);
    return ManageUsersPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-manage-users-manage-users-module.js.map