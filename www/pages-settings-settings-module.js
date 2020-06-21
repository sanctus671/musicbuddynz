(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button>\n                <ion-back-button defaultHref=\"/tabs/profile\"></ion-back-button>\n            </ion-button>            \n        </ion-buttons>   \n        \n        <ion-title>Settings</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list class=\"settings-list\">\n    \n    <div *ngIf=\"user.permission === 'admin'\">\n        <ion-list-header>Admin</ion-list-header>  \n\n        <ion-item class=\"settings-list__payment\" [routerLink]=\"['/manage-users/']\" routerDirection=\"forward\">\n            <ion-icon name=\"people\" slot=\"start\"></ion-icon>\n            <ion-label>\n                <h2>Manage Users</h2>\n                <p>Verify new users of the app</p>\n            </ion-label>\n        </ion-item>    \n\n        <ion-item class=\"settings-list__payment\" [routerLink]=\"['/manage-payments/']\" routerDirection=\"forward\">\n            <ion-icon name=\"card\" slot=\"start\"></ion-icon>\n            <ion-label>\n                <h2>Manage Payments</h2>\n                <p>View upcoming payments and generate bank payment file</p>\n            </ion-label>\n        </ion-item>              \n    \n    </div>\n    \n    \n    <ion-list-header>Balance</ion-list-header>  \n    \n    <ion-item class=\"settings-list__payment\">\n        <ion-icon name=\"cash\" slot=\"start\" color=\"primary\"></ion-icon>\n        <ion-label>\n            <h2>${{paymentTotal | number:'1.2-2' }}</h2>\n            <p>Next payment {{getNextPaymentDate()}}</p>\n        </ion-label>\n    </ion-item>     \n    \n    <ion-item class=\"settings-list__payment\">\n        <ion-icon name=\"wallet-outline\" slot=\"start\" color=\"primary\"></ion-icon>\n        <ion-label>\n            <h2>Bank Account</h2>\n            <p>{{getBankAccount()}}</p>\n        </ion-label>\n        <ion-button slot=\"end\" fill=\"outline\" (click)=\"openChangeBankAccount()\">Change</ion-button>\n    </ion-item>      \n    \n        <ion-item class=\"settings-list__payment\" [routerLink]=\"['/billing/']\" routerDirection=\"forward\">\n            <ion-icon name=\"document-text-outline\" slot=\"start\" color=\"primary\"></ion-icon>\n            <ion-label>\n                <h2>Billing & Payments</h2>\n                <p>View all billing and payments you have made through the app</p>\n            </ion-label>\n        </ion-item>        \n    \n\n    \n    <ion-list-header>Support</ion-list-header>  \n    \n    <ion-item>\n        <ion-icon name=\"heart-outline\" slot=\"start\" color=\"primary\"></ion-icon>\n        Rate The App\n        <ion-button slot=\"end\" fill=\"outline\" (click)=\"openRate()\">Rate</ion-button>\n  </ion-item>    \n    \n    \n <ion-item>\n    <ion-icon name=\"logo-facebook\" slot=\"start\" color=\"primary\"></ion-icon>\n    Follow Us\n    <ion-button slot=\"end\" fill=\"outline\" (click)=\"openFollow()\">Follow</ion-button>\n  </ion-item>   \n  \n\n    \n <ion-item>\n    <ion-icon name=\"mail-outline\" slot=\"start\" color=\"primary\"></ion-icon>\n    Contact Support\n    <ion-button slot=\"end\" fill=\"outline\" (click)=\"openEmail()\">Email</ion-button>\n  </ion-item>     \n    \n    \n    <ion-list-header>Account Settings</ion-list-header>      \n\n    \n    <ion-item (click)=\"openChangePassword()\" detail>\n            <ion-icon name=\"lock-open-outline\" slot=\"start\" color=\"primary\"></ion-icon>\n            <ion-label>Change Password</ion-label>\n    </ion-item>  \n     \n  \n\n\n    <ion-item (click)=\"logout()\">\n        <ion-icon name=\"lock-closed-outline\" slot=\"start\" color=\"primary\"></ion-icon>\n        Logout\n    </ion-item> \n\n     \n</ion-list>    \n \n</ion-content>");

/***/ }),

/***/ "./src/app/pages/settings/settings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/settings/settings.page.ts");







var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }
];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/settings/settings.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".settings-list ion-list-header {\n  margin-bottom: 10px;\n  margin-top: 20px;\n  padding-top: 10px;\n}\n\n.settings-list ion-list-header:first-child {\n  margin-top: 0px;\n  padding-top: 0px;\n}\n\n.settings-list ion-list-header ion-label {\n  margin-bottom: 0px;\n}\n\n.settings-list ion-icon[name=logo-facebook] {\n  color: #1778F2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0dGluZ3MvRDpcXFRheWxvclxcRG9jdW1lbnRzXFxXZWJzaXRlc1xcbXVzaWNidWRkeVxcYXBwL3NyY1xcYXBwXFxwYWdlc1xcc2V0dGluZ3NcXHNldHRpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FER0E7RUFDSSxjQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZ3MtbGlzdCBpb24tbGlzdC1oZWFkZXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbn1cclxuXHJcbi5zZXR0aW5ncy1saXN0IGlvbi1saXN0LWhlYWRlcjpmaXJzdC1jaGlsZHtcclxuICAgIG1hcmdpbi10b3A6MHB4O1xyXG4gICAgcGFkZGluZy10b3A6MHB4O1xyXG59XHJcblxyXG4uc2V0dGluZ3MtbGlzdCBpb24tbGlzdC1oZWFkZXIgaW9uLWxhYmVse1xyXG4gICAgbWFyZ2luLWJvdHRvbTowcHg7XHJcbn1cclxuXHJcblxyXG4uc2V0dGluZ3MtbGlzdCBpb24taWNvbltuYW1lPVwibG9nby1mYWNlYm9va1wiXXtcclxuICAgIGNvbG9yOiMxNzc4RjI7XHJcbn1cclxuIiwiLnNldHRpbmdzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5zZXR0aW5ncy1saXN0IGlvbi1saXN0LWhlYWRlcjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLnNldHRpbmdzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnNldHRpbmdzLWxpc3QgaW9uLWljb25bbmFtZT1sb2dvLWZhY2Vib29rXSB7XG4gIGNvbG9yOiAjMTc3OEYyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/settings/settings.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/settings/settings.page.ts ***!
  \*************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/profile/profile.service */ "./src/app/services/profile/profile.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








var SettingsPage = /** @class */ (function () {
    function SettingsPage(emailComposer, plt, profileService, authenticationService, alertCtrl, iab) {
        var _this = this;
        this.emailComposer = emailComposer;
        this.plt = plt;
        this.profileService = profileService;
        this.authenticationService = authenticationService;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this.user = {};
        this.authenticationService.getUserData().subscribe(function (value) {
            _this.user = value;
        });
        this.paymentTotal = 0;
    }
    SettingsPage.prototype.ngOnInit = function () {
    };
    SettingsPage.prototype.ionViewDidEnter = function () {
        this.getPaymentTotal();
    };
    SettingsPage.prototype.getBankAccount = function () {
        if (!this.user.profile || !this.user.profile.bank_account) {
            return "No bank account set";
        }
        else {
            return this.user.profile.bank_account.replace(/(\+?\d{3})(\d+)(\d{2})/g, function (match, start, middle, end) {
                return start + "*".repeat(middle.length) + end;
            });
        }
    };
    SettingsPage.prototype.getPaymentTotal = function () {
        var _this = this;
        this.authenticationService.getPaymentTotal().then(function (data) {
            _this.paymentTotal = data;
        });
    };
    SettingsPage.prototype.getNextPaymentDate = function () {
        return moment__WEBPACK_IMPORTED_MODULE_7__().add(1, 'months').startOf('month').format("DD/MM/YYYY");
    };
    SettingsPage.prototype.openRate = function () {
        if (this.plt.is("ios")) {
            this.iab.create("https://apps.apple.com/app/", '_system');
        }
        else {
            this.iab.create("https://play.google.com/store/apps/details?id=com.musicbuddy.app", '_system');
        }
    };
    SettingsPage.prototype.openFollow = function () {
        var link = 'https://www.facebook.com/musicbuddy';
        this.iab.create(link, '_system');
    };
    SettingsPage.prototype.openEmail = function () {
        var email = {
            to: ["musicbuddynz@gmail.com"],
            subject: 'Subject for your support query',
            body: 'Provide details about the support you require.',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    SettingsPage.prototype.openChangeBankAccount = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            header: 'Change Bank Account',
            inputs: [
                {
                    name: 'bank_account',
                    placeholder: 'Bank Account Number',
                    type: 'number'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Change',
                    handler: function (data) {
                        if (data.bank_account) {
                            var profile = { bank_account: data.bank_account, user_id: _this.user.id };
                            _this.user.profile.bank_account = data.bank_account;
                            _this.profileService.updateProfile(profile).then(function () {
                            });
                        }
                    }
                }
            ]
        }).then(function (el) {
            el.present();
        });
    };
    SettingsPage.prototype.openChangePassword = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            header: 'Change Password',
            inputs: [
                {
                    name: 'password',
                    placeholder: 'Password',
                    type: 'password'
                },
                {
                    name: 'confirmPassword',
                    placeholder: 'Confirm Password',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Change',
                    handler: function (data) {
                        if (data.password && data.confirmPassword && data.password === data.confirmPassword) {
                            _this.authenticationService.changePassword(_this.user.email, data.password, data.confirmPassword).then(function () {
                                var alert = _this.alertCtrl.create({
                                    header: 'Success',
                                    message: 'Your password has been updated',
                                    buttons: [
                                        {
                                            text: 'Dismiss',
                                            role: 'cancel',
                                            handler: function (data) {
                                            }
                                        }
                                    ]
                                }).then(function (el) {
                                    el.present();
                                });
                            }).catch(function () {
                                var alert = _this.alertCtrl.create({
                                    header: 'Error',
                                    message: 'There was an error while changing your password.',
                                    buttons: [
                                        {
                                            text: 'Cancel',
                                            role: 'cancel',
                                            handler: function (data) {
                                            }
                                        },
                                        {
                                            text: 'Try Again',
                                            handler: function (data) {
                                                setTimeout(function () { _this.openChangePassword(); }, 200);
                                            }
                                        }
                                    ]
                                }).then(function (el) {
                                    el.present();
                                });
                            });
                        }
                        else {
                            var alert_1 = _this.alertCtrl.create({
                                header: 'Error',
                                message: 'Passwords do not match',
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        handler: function (data) {
                                        }
                                    },
                                    {
                                        text: 'Try Again',
                                        handler: function (data) {
                                            setTimeout(function () { _this.openChangePassword(); }, 200);
                                        }
                                    }
                                ]
                            }).then(function (el) {
                                el.present();
                            });
                        }
                    }
                }
            ]
        }).then(function (el) {
            el.present();
        });
    };
    SettingsPage.prototype.changeView = function (ev) {
    };
    SettingsPage.prototype.logout = function () {
        this.authenticationService.logout();
    };
    SettingsPage.ctorParameters = function () { return [
        { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__["EmailComposer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] },
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] }
    ]; };
    SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings.page.scss */ "./src/app/pages/settings/settings.page.scss")).default]
        })
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-settings-settings-module.js.map