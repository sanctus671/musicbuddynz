(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n    <ion-toolbar >\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/login\"></ion-back-button>\n        </ion-buttons>     \n        <ion-title>Sign Up</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"signup\">\n    \n    \n    <div class=\"signup__stepper\">\n\n        <div class=\"signup__stepper__step step\" (click)=\"changeStep(1)\" [ngClass]=\"{'step--active' : step === 1}\">\n            <div class=\"step__number\">1</div>\n            <div class=\"step__name\">Tell us about you</div>\n        </div>  \n        \n        <div class=\"signup__stepper__step step\" (click)=\"changeStep(2)\" [ngClass]=\"{'step--active' : step === 2}\">\n            <div class=\"step__number\">2</div>\n            <div class=\"step__name\">Enter your login details</div>\n        </div>       \n        \n    </div>\n\n    \n    <ion-list class=\"signup__form\" *ngIf=\"step === 1\">\n\n        <ion-item class=\"signup__form__avatar\">\n            <ion-icon name=\"person\" *ngIf=\"!user.avatar\"></ion-icon>\n            <ion-avatar item-start *ngIf=\"user.avatar\">\n                <img [src]=\"user.avatar\">\n            </ion-avatar>\n            <ion-button color=\"primary\" (click)=\"changeImage()\">Select Photo</ion-button>\n        </ion-item> \n\n\n        \n        <ion-item [ngClass]=\"{'invalidItem' : !user.first_name && this.user.error}\">\n            <ion-label position=\"floating\">First Name *</ion-label>\n            <ion-input clearInput type=\"text\" [(ngModel)]=\"user.first_name\"></ion-input>\n        </ion-item>        \n\n        <ion-item [ngClass]=\"{'invalidItem' : !user.last_name && this.user.error}\">\n            <ion-label position=\"floating\">Last Name *</ion-label>\n            <ion-input clearInput type=\"text\" [(ngModel)]=\"user.last_name\"></ion-input>\n        </ion-item>  \n        \n        <ion-item>\n            <ion-label position=\"floating\">Phone</ion-label>\n            <ion-input clearInput type=\"text\" [(ngModel)]=\"user.phone\"></ion-input>\n        </ion-item>   \n        \n        <div *ngIf=\"user.type === 'musician'\">\n            <ion-item>\n                <ion-label position=\"floating\">Your Hourly Rate</ion-label>\n                <ion-input clearInput type=\"number\" [(ngModel)]=\"user.hourly_rate\"></ion-input>\n            </ion-item>      \n            \n            <ion-item>\n                <ion-label position=\"floating\">Your Bank Account Number (to be paid into)</ion-label>\n                <ion-input clearInput type=\"number\" [(ngModel)]=\"user.bank_account\"></ion-input>\n            </ion-item>              \n            \n        </div>\n        \n        <ion-item>\n            <ion-label position=\"floating\">Gender</ion-label>\n            <ion-select [(ngModel)]=\"user.gender\">\n                <ion-select-option value=\"Male\">Male</ion-select-option>\n                <ion-select-option value=\"Female\">Female</ion-select-option>\n                <ion-select-option value=\"Other\">Other</ion-select-option>\n            </ion-select>\n        </ion-item>        \n      \n        \n       <ion-item>\n            <ion-label position=\"floating\">Location</ion-label>\n            <ion-input clearInput type=\"text\" [(ngModel)]=\"user.location\"></ion-input>\n        </ion-item> \n        \n        <ion-item>\n            <ion-label position=\"floating\">Date Of Birth</ion-label>\n            <ion-datetime displayFormat=\"DD/MM/YYYY\" [(ngModel)]=\"user.dob\"></ion-datetime>\n        </ion-item>      \n\n        \n         <ion-item>\n            <ion-label position=\"floating\">About You</ion-label>\n            <ion-textarea clearInput [(ngModel)]=\"user.biography\"></ion-textarea>\n        </ion-item>           \n\n\n    </ion-list> \n\n    \n    \n    <ion-list class=\"signup__form\" *ngIf=\"step === 2\">\n        \n        \n        <ion-item [ngClass]=\"{'invalidItem' : !user.email && this.user.error}\">\n            <ion-label position=\"floating\">Email *</ion-label>\n            <ion-input clearInput type=\"email\" [(ngModel)]=\"user.email\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating\">Password</ion-label>\n            <ion-input clearInput type=\"password\" [(ngModel)]=\"user.password\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating\">Confirm Password</ion-label>\n            <ion-input clearInput type=\"password\" [(ngModel)]=\"user.confirm_password\"></ion-input>\n        </ion-item>\n\n        \n        <ion-item no-lines  no-padding class=\"custom-checkbox\">\n            <ion-label>I agree to the Music Buddy <a (click)=\"openTos($event)\">Terms and Conditions</a></ion-label>\n            <ion-checkbox name=\"agree\" [(ngModel)]=\"user.tos\" checked=\"true\" required></ion-checkbox>\n        </ion-item>     \n\n        \n        <p class=\"signup__form__error\" *ngIf=\"user.error\">{{user.error}}</p>\n\n    </ion-list>  \n    \n    \n</ion-content>\n\n\n<ion-footer class=\"signup-footer\">\n    \n    <ion-button color='primary' expand=\"full\" class=\"signup-footer__button\" *ngIf=\"step === 1\" (click)=\"changeStep(2)\">\n        Continue\n        <ion-icon name=\"arrow-forward\"></ion-icon>\n    </ion-button>    \n  \n    \n\n    <ion-button color='primary' expand=\"full\" class=\"signup-footer__button\" *ngIf=\"step === 2\" [disabled]=\"user.loading\" (click)=\"signup()\">\n        Get Started&nbsp;&nbsp;\n        <ion-icon name=\"arrow-forward\" *ngIf=\"!user.loading\"></ion-icon>\n        <ion-spinner *ngIf=\"user.loading\"></ion-spinner>\n    </ion-button>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/signup/signup-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");




var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
var SignupPageRoutingModule = /** @class */ (function () {
    function SignupPageRoutingModule() {
    }
    SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SignupPageRoutingModule);
    return SignupPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/pages/signup/signup-routing.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");







var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".invalidItem {\n  --full-highlight-height: calc(var(--highlight-height) * var(--show-full-highlight));\n  --inset-highlight-height: calc(var(--highlight-height) * var(--show-inset-highlight));\n  --border-color: var(--ion-item-border-color,var(--ion-border-color,red));\n}\n\n.signup .signup__stepper {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.signup .signup__stepper .step {\n  display: inline-block;\n  width: 50%;\n  text-align: center;\n  vertical-align: top;\n  padding: 0px 15px;\n  opacity: 0.5;\n  transition: opacity 200ms linear;\n}\n\n.signup .signup__stepper .step.step--active {\n  opacity: 1;\n}\n\n.signup .signup__stepper .step .step__number {\n  width: 30px;\n  height: 30px;\n  background-color: #2497e8;\n  border-radius: 15px;\n  color: White;\n  font-size: 10px;\n  text-align: center;\n  line-height: 30px;\n  margin: 0 auto;\n}\n\n.signup .signup__stepper .step .step__name {\n  font-size: 12px;\n}\n\n.signup .signup__user-type .signup__user-type__card {\n  text-align: center;\n  padding: 50px 20px;\n  opacity: 0.5;\n  transition: opacity 200ms linear;\n}\n\n.signup .signup__user-type .signup__user-type__card.signup__user-type__card--active {\n  opacity: 1;\n}\n\n.signup .signup__form .signup__form__avatar {\n  margin-top: 15px;\n  margin-bottom: 5px;\n}\n\n.signup .signup__form .signup__form__avatar ion-icon {\n  width: 20px;\n  height: 20px;\n  padding: 10px;\n  border-radius: 20px;\n  background-color: #2497e8;\n  color: white;\n  margin-bottom: 10px;\n}\n\n.signup .signup__form .signup__form__avatar ion-avatar {\n  margin-bottom: 10px;\n}\n\n.signup .signup__form .signup__form__avatar ion-button {\n  margin-left: 15px;\n  vertical-align: middle;\n  margin-bottom: 15px;\n}\n\n.signup .signup__form .signup__form__error {\n  color: red;\n  font-size: 12px;\n  line-height: 16px;\n  text-align: Center;\n}\n\n.signup .signup__form .signup__form__login {\n  margin-top: 40px;\n  text-align: Center;\n}\n\n.signup .custom-checkbox ion-checkbox {\n  position: relative;\n}\n\n.signup .custom-checkbox ion-label {\n  white-space: normal;\n}\n\n.signup .custom-checkbox ion-label a {\n  white-space: nowrap;\n}\n\n.signup-footer:before {\n  display: none;\n}\n\n.signup-footer .signup-footer__button ion-spinner {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL0Q6XFxUYXlsb3JcXERvY3VtZW50c1xcV2Vic2l0ZXNcXG11c2ljYnVkZHlcXGFwcC9zcmNcXGFwcFxccGFnZXNcXHNpZ251cFxcc2lnbnVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxtRkFBQTtFQUNBLHFGQUFBO0VBQ0Esd0VBQUE7QUNDQTs7QURNSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNIUjs7QURJUTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQ0ZaOztBRElZO0VBQ0ksVUFBQTtBQ0ZoQjs7QURLWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNJLGNBQUE7QUNIcEI7O0FET1k7RUFDSSxlQUFBO0FDTGhCOztBRG1CUTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUNqQlo7O0FEbUJZO0VBQ0ksVUFBQTtBQ2pCaEI7O0FEOEJRO0VBQ1EsZ0JBQUE7RUFDSixrQkFBQTtBQzVCWjs7QUQ2Qlk7RUFDWixXQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDM0JKOztBRDhCWTtFQUNJLG1CQUFBO0FDNUJoQjs7QUQrQlk7RUFDUixpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUM3Qko7O0FEa0NZO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDaENoQjs7QURvQ1k7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDbENoQjs7QUQwQ0U7RUFDRSxrQkFBQTtBQ3hDSjs7QUQyQ0U7RUFDSSxtQkFBQTtBQ3pDTjs7QUQyQ0k7RUFDSSxtQkFBQTtBQ3pDUjs7QURrREk7RUFDSSxhQUFBO0FDL0NSOztBRG9EWTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDbERoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludmFsaWRJdGVtIHtcclxuLS1mdWxsLWhpZ2hsaWdodC1oZWlnaHQ6IGNhbGModmFyKC0taGlnaGxpZ2h0LWhlaWdodCkgKiB2YXIoLS1zaG93LWZ1bGwtaGlnaGxpZ2h0KSk7XHJcbi0taW5zZXQtaGlnaGxpZ2h0LWhlaWdodDogY2FsYyh2YXIoLS1oaWdobGlnaHQtaGVpZ2h0KSAqIHZhcigtLXNob3ctaW5zZXQtaGlnaGxpZ2h0KSk7XHJcbi0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24taXRlbS1ib3JkZXItY29sb3IsdmFyKC0taW9uLWJvcmRlci1jb2xvcixyZWQpKTtcclxufVxyXG5cclxuLnNpZ251cHtcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIC5zaWdudXBfX3N0ZXBwZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MTVweDtcclxuICAgICAgICAuc3RlcHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgICAgICAgICBvcGFjaXR5OjAuNTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjpvcGFjaXR5IDIwMG1zIGxpbmVhcjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICYuc3RlcC0tYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuc3RlcF9fbnVtYmVye1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyNDk3ZTg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IFdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuc3RlcF9fbmFtZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLnNpZ251cF9fdXNlci10eXBle1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zaWdudXBfX3VzZXItdHlwZV9fY2FyZHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6NTBweCAyMHB4O1xyXG4gICAgICAgICAgICBvcGFjaXR5OjAuNTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjpvcGFjaXR5IDIwMG1zIGxpbmVhcjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICYuc2lnbnVwX191c2VyLXR5cGVfX2NhcmQtLWFjdGl2ZXtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcbiAgICAuc2lnbnVwX19mb3Jte1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zaWdudXBfX2Zvcm1fX2F2YXRhcntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NXB4O1xyXG4gICAgICAgICAgICBpb24taWNvbntcclxud2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDk3ZTg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24tYXZhdGFye1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgIC5zaWdudXBfX2Zvcm1fX2Vycm9ye1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4OyAgIFxyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpDZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAuc2lnbnVwX19mb3JtX19sb2dpbntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NDBweDsgIFxyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpDZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuLmN1c3RvbS1jaGVja2JveCB7ICAgIFxyXG4gIGlvbi1jaGVja2JveCB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWxhYmVse1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgXHJcbiAgICBhe1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICAgIH1cclxuICB9XHJcbn0gICAgICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbi5zaWdudXAtZm9vdGVye1xyXG4gICAgXHJcbiAgICAmOmJlZm9yZXtcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICAgICAuc2lnbnVwLWZvb3Rlcl9fYnV0dG9ue1xyXG5cclxuICAgICAgICAgICAgaW9uLXNwaW5uZXJ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxufSIsIi5pbnZhbGlkSXRlbSB7XG4gIC0tZnVsbC1oaWdobGlnaHQtaGVpZ2h0OiBjYWxjKHZhcigtLWhpZ2hsaWdodC1oZWlnaHQpICogdmFyKC0tc2hvdy1mdWxsLWhpZ2hsaWdodCkpO1xuICAtLWluc2V0LWhpZ2hsaWdodC1oZWlnaHQ6IGNhbGModmFyKC0taGlnaGxpZ2h0LWhlaWdodCkgKiB2YXIoLS1zaG93LWluc2V0LWhpZ2hsaWdodCkpO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWl0ZW0tYm9yZGVyLWNvbG9yLHZhcigtLWlvbi1ib3JkZXItY29sb3IscmVkKSk7XG59XG5cbi5zaWdudXAgLnNpZ251cF9fc3RlcHBlciB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uc2lnbnVwIC5zaWdudXBfX3N0ZXBwZXIgLnN0ZXAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBsaW5lYXI7XG59XG4uc2lnbnVwIC5zaWdudXBfX3N0ZXBwZXIgLnN0ZXAuc3RlcC0tYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5zaWdudXAgLnNpZ251cF9fc3RlcHBlciAuc3RlcCAuc3RlcF9fbnVtYmVyIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0OTdlODtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY29sb3I6IFdoaXRlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnNpZ251cCAuc2lnbnVwX19zdGVwcGVyIC5zdGVwIC5zdGVwX19uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnNpZ251cCAuc2lnbnVwX191c2VyLXR5cGUgLnNpZ251cF9fdXNlci10eXBlX19jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1MHB4IDIwcHg7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBsaW5lYXI7XG59XG4uc2lnbnVwIC5zaWdudXBfX3VzZXItdHlwZSAuc2lnbnVwX191c2VyLXR5cGVfX2NhcmQuc2lnbnVwX191c2VyLXR5cGVfX2NhcmQtLWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59XG4uc2lnbnVwIC5zaWdudXBfX2Zvcm0gLnNpZ251cF9fZm9ybV9fYXZhdGFyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnNpZ251cCAuc2lnbnVwX19mb3JtIC5zaWdudXBfX2Zvcm1fX2F2YXRhciBpb24taWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDk3ZTg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5zaWdudXAgLnNpZ251cF9fZm9ybSAuc2lnbnVwX19mb3JtX19hdmF0YXIgaW9uLWF2YXRhciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uc2lnbnVwIC5zaWdudXBfX2Zvcm0gLnNpZ251cF9fZm9ybV9fYXZhdGFyIGlvbi1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5zaWdudXAgLnNpZ251cF9fZm9ybSAuc2lnbnVwX19mb3JtX19lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHRleHQtYWxpZ246IENlbnRlcjtcbn1cbi5zaWdudXAgLnNpZ251cF9fZm9ybSAuc2lnbnVwX19mb3JtX19sb2dpbiB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHRleHQtYWxpZ246IENlbnRlcjtcbn1cbi5zaWdudXAgLmN1c3RvbS1jaGVja2JveCBpb24tY2hlY2tib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2lnbnVwIC5jdXN0b20tY2hlY2tib3ggaW9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbi5zaWdudXAgLmN1c3RvbS1jaGVja2JveCBpb24tbGFiZWwgYSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5zaWdudXAtZm9vdGVyOmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc2lnbnVwLWZvb3RlciAuc2lnbnVwLWZvb3Rlcl9fYnV0dG9uIGlvbi1zcGlubmVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/signup/signup.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _services_city_city_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/city/city.service */ "./src/app/services/city/city.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx/ */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");










var SignupPage = /** @class */ (function () {
    function SignupPage(authService, cityService, iab, transfer, camera, loadingController, alertController, route) {
        this.authService = authService;
        this.cityService = cityService;
        this.iab = iab;
        this.transfer = transfer;
        this.camera = camera;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.route = route;
        this.user = { permission: "user", email: "", password: "", error: "", location: "", loading: false, tos: true };
        this.step = 1;
        var profileType = this.route.snapshot.params['type'];
        this.user.type = profileType;
    }
    SignupPage.prototype.ngOnInit = function () {
    };
    SignupPage.prototype.changeStep = function (step) {
        this.step = step;
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        this.user.loading = true;
        this.user.error = "";
        if (!this.user.email || !this.user.first_name || !this.user.last_name) {
            this.user.loading = false;
            this.user.error = "Required fields not filled in. ";
        }
        if (!this.user.tos) {
            this.user.loading = false;
            this.user.error = "Please accept the Terms and Conditions";
        }
        //alert("Registering... Press ok to continue");
        this.authService.register(this.user).then(function () {
            //alert("Registration successful");
            _this.user.loading = false;
            _this.user = { permission: "babysitter", email: "", password: "", error: "", city: "", country: "New Zealand", latitude: -36.866667, longitude: 174.766667, loading: false, tos: true };
            //this.authService.getUserData();
            _this.authService.retreiveUserData().then(function () {
                //alert("Retreived user data");
            }).catch(function () {
                //alert("Failed to retreive user data");
            });
        }).catch(function (e) {
            //alert("Registration failed. Press ok to see error. Screenshot this screen and send to me please.");
            //alert(JSON.stringify(e));
            _this.user.loading = false;
            console.log(e);
            if (e && e.error) {
                if (e.error.error) {
                    for (var index in e.error.error.errors) {
                        var error = e.error.error.errors[index];
                        _this.user.error = _this.user.error + error + " ";
                    }
                }
                else {
                    _this.user.error = e.error.message;
                }
            }
            else {
                _this.user.error = e.message;
            }
        });
    };
    SignupPage.prototype.openTos = function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this.iab.create("http://128.199.179.252/terms", '_system');
    };
    SignupPage.prototype.changeImage = function () {
        var _this = this;
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            quality: 25
        };
        this.camera.getPicture(cameraOptions)
            .then(function (image) {
            var loading;
            _this.loadingController.create({
                message: 'Your image is being uploaded. Please wait...',
                duration: 20000
            }).then(function (el) {
                loading = el;
                el.present();
            });
            var fileTransfer = _this.transfer.create();
            var options = {
                fileKey: "media_file",
                fileName: Math.random().toString(36).substring(2),
                params: {},
                mimeType: "image/jpeg"
            };
            fileTransfer.upload(image, encodeURI(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl + "/upload"), options).then(function (data) {
                if (data.response) {
                    var response = JSON.parse(data.response);
                    _this.user.avatar = response.file;
                }
                loading.dismiss();
            }, function (err) {
                _this.alertController.create({
                    header: "Error",
                    subHeader: "There was a problem uploading your image",
                    message: JSON.stringify(err),
                    buttons: [
                        {
                            text: 'Dismiss',
                            role: 'cancel'
                        }
                    ]
                }).then(function (el) {
                    el.present();
                });
                loading.dismiss();
            });
        }, function (err) {
            //console.log(err)
        });
    };
    SignupPage.ctorParameters = function () { return [
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _services_city_city_service__WEBPACK_IMPORTED_MODULE_4__["CityService"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] },
        { type: _ionic_native_file_transfer_ngx___WEBPACK_IMPORTED_MODULE_8__["FileTransfer"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup.page.scss */ "./src/app/pages/signup/signup.page.scss")).default]
        })
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-signup-signup-module.js.map