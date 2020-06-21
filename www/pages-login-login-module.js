(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/start\"></ion-back-button>\n        </ion-buttons>     \n        <ion-title>Login</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content class=\"login\">\n    \n    <div>\n\n\n\n\n        <form (ngSubmit)=\"login()\">\n            <ion-list class=\"login__form\">\n                <ion-item class=\"login__form__input\">\n                    <ion-label position=\"floating\">Email</ion-label>\n                    <ion-input type=\"email\" [(ngModel)]=\"user.email\" name=\"email\" color=\"light\"></ion-input>\n                </ion-item>\n\n                <ion-item class=\"login__form__input\">\n                    <ion-label position=\"floating\">Password</ion-label>\n                    <ion-input type=\"password\" [(ngModel)]=\"user.password\" name=\"password\"></ion-input>\n                </ion-item>\n\n\n                <ion-button color=\"primary\" class=\"login__form__login-button\" type=\"submit\" [disabled]=\"user.loading\">\n                    Login\n                    <ion-spinner *ngIf=\"user.loading\" color=\"primary\"></ion-spinner>\n                </ion-button>\n\n                <p class=\"login__form__error\" *ngIf=\"user.error\">{{user.error}}</p>\n\n                <p class=\"login__form__sign-up\">Don't have an account? <a [routerLink]=\"['/signup']\" routerDirection=\"forward\">Sign up</a></p>\n\n\n\n            </ion-list>\n        </form>\n        \n    </div>\n    \n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
var LoginPageRoutingModule = /** @class */ (function () {
    function LoginPageRoutingModule() {
    }
    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LoginPageRoutingModule);
    return LoginPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login .login__form {\n  text-align: center;\n  background-color: #121212;\n  margin-top: 30px;\n}\n.login .login__form .login__form__input {\n  --background: #121212;\n}\n.login .login__form .login__form__input ion-input {\n  color: white;\n}\n.login .login__form__login-button {\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.login .login__form__login-button ion-spinner {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  margin-left: 5px;\n}\n.login .login__form__error {\n  color: red;\n  font-size: 13px;\n  line-height: 16px;\n}\n.login .login__form__forgot-password {\n  font-size: 13px;\n  margin: 0px;\n  margin-top: 15px;\n  text-align: center;\n}\n.login .login__form__forgot-password a {\n  color: white;\n  text-decoration: none;\n}\n.login .login__form__sign-up {\n  margin-top: 80px;\n  text-align: center;\n}\n.login .login__form__sign-up a {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRDpcXFRheWxvclxcRG9jdW1lbnRzXFxXZWJzaXRlc1xcbXVzaWNidWRkeVxcYXBwL3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDRFI7QURJUTtFQUNJLHFCQUFBO0FDRlo7QURJWTtFQUNJLFlBQUE7QUNGaEI7QURVSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ1JSO0FEVVE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1JaO0FEWUk7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDVlI7QURhSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDSSxrQkFBQTtBQ1haO0FEWVE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7QUNWWjtBRGVJO0VBQ0ksZ0JBQUE7RUFDSSxrQkFBQTtBQ2JaO0FEY1E7RUFFSSwwQkFBQTtBQ2JaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2lue1xyXG4gICAgXHJcbiAgICAubG9naW5fX2Zvcm17XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC5sb2dpbl9fZm9ybV9faW5wdXR7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzEyMTIxMjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlvbi1pbnB1dHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuIFxyXG4gICAgXHJcbiAgICAubG9naW5fX2Zvcm1fX2xvZ2luLWJ1dHRvbntcclxuICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6MzBweDtcclxuXHJcbiAgICAgICAgaW9uLXNwaW5uZXJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5sb2dpbl9fZm9ybV9fZXJyb3J7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7ICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sb2dpbl9fZm9ybV9fZm9yZ290LXBhc3N3b3Jke1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLmxvZ2luX19mb3JtX19zaWduLXVwe1xyXG4gICAgICAgIG1hcmdpbi10b3A6ODBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGF7XHJcblxyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcbiAgICBcclxuICAgIFxyXG59IiwiLmxvZ2luIC5sb2dpbl9fZm9ybSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5sb2dpbiAubG9naW5fX2Zvcm0gLmxvZ2luX19mb3JtX19pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDogIzEyMTIxMjtcbn1cbi5sb2dpbiAubG9naW5fX2Zvcm0gLmxvZ2luX19mb3JtX19pbnB1dCBpb24taW5wdXQge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubG9naW4gLmxvZ2luX19mb3JtX19sb2dpbi1idXR0b24ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5sb2dpbiAubG9naW5fX2Zvcm1fX2xvZ2luLWJ1dHRvbiBpb24tc3Bpbm5lciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5sb2dpbiAubG9naW5fX2Zvcm1fX2Vycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbn1cbi5sb2dpbiAubG9naW5fX2Zvcm1fX2ZvcmdvdC1wYXNzd29yZCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2dpbiAubG9naW5fX2Zvcm1fX2ZvcmdvdC1wYXNzd29yZCBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubG9naW4gLmxvZ2luX19mb3JtX19zaWduLXVwIHtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ2luIC5sb2dpbl9fZm9ybV9fc2lnbi11cCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");



var LoginPage = /** @class */ (function () {
    function LoginPage(authService) {
        this.authService = authService;
        this.user = { email: "", password: "", error: "", loading: false };
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.user.loading = true;
        this.user.error = "";
        this.user.email = this.user.email.trim();
        this.authService.login(this.user).then(function (token) {
            _this.user.loading = false;
            _this.user.email = "";
            _this.user.password = "";
            _this.authService.retreiveUserData().then(function () { });
        }).catch(function (e) {
            _this.user.loading = false;
            if (e && (e.status === 401 || e.status === 403)) {
                _this.user.error = "Incorrect email or password";
            }
            else if (e && e.status === 422) {
                for (var index in e.error.error.errors) {
                    var error = e.error.error.errors[index];
                    _this.user.error = _this.user.error + error + " ";
                }
            }
            else {
                _this.user.error = e.message;
            }
        });
    };
    LoginPage.prototype.signup = function () {
        //this.navCtrl.push(SignupPage);
    };
    LoginPage.ctorParameters = function () { return [
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
        })
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map