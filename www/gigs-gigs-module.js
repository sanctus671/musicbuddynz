(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gigs-gigs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gigs/gigs.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gigs/gigs.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-title>My Gigs</ion-title>\n        \n        \n        \n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"openNotifications()\">\n                <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n                <ion-badge *ngIf=\"notificationsCount > 0\" class=\"notifications-badge\" color=\"danger\">{{notificationsCount}}</ion-badge>\n            </ion-button>   \n            \n        </ion-buttons>      \n        \n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"gigs\">\n    \n    \n    <div class=\"gigs__loading\" *ngIf=\"loading\">\n        <ion-spinner color=\"primary\"></ion-spinner>\n    </div>        \n    \n    \n\n    <ion-list class=\"gigs__list\" *ngIf=\"!loading\">\n\n        <ion-list-header *ngIf=\"live.length > 0\">Live</ion-list-header>  \n        \n        <ion-item *ngFor=\"let gig of live\" [routerLink]=\"['/gigs/' + gig.id]\" routerDirection=\"forward\">\n            <ion-avatar slot=\"start\">\n                <img [src]=\"gig.profile.avatar\">\n            </ion-avatar>\n            <ion-label>\n                <h2><span *ngIf=\"user.id !== gig.user_id\">Booked by</span> {{gig.profile.name}}</h2>\n                <p>Started {{formatLiveDate(gig.date_required)}}</p>\n            </ion-label>\n        </ion-item>          \n\n        <ion-list-header *ngIf=\"pending.length > 0\">Pending</ion-list-header>  \n\n        <ion-item *ngFor=\"let gig of pending\" [routerLink]=\"['/gigs/' + gig.id]\" routerDirection=\"forward\">\n            <ion-avatar slot=\"start\">\n                <img [src]=\"gig.profile.avatar\">\n            </ion-avatar>\n            <ion-label>\n                <h2><span *ngIf=\"user.id !== gig.user_id\">Booked by</span> {{gig.profile.name}}</h2>\n                <p>Booked for {{formatUpcomingDate(gig.date_required)}}</p>\n            </ion-label>\n        </ion-item>     \n        \n        \n        <ion-list-header *ngIf=\"upcoming.length > 0\">Upcoming</ion-list-header>  \n\n        <ion-item *ngFor=\"let gig of upcoming\" [routerLink]=\"['/gigs/' + gig.id]\" routerDirection=\"forward\">\n            <ion-avatar slot=\"start\">\n                <img [src]=\"gig.profile.avatar\">\n            </ion-avatar>\n            <ion-label>\n                <h2><span *ngIf=\"user.id !== gig.user_id\">Booked by</span> {{gig.profile.name}}</h2>\n                <p>Booked for {{formatUpcomingDate(gig.date_required)}}</p>\n            </ion-label>\n        </ion-item>      \n        \n        \n        <ion-list-header *ngIf=\"completed.length > 0\">Completed</ion-list-header>  \n\n        <ion-item *ngFor=\"let gig of completed\" [routerLink]=\"['/gigs/' + gig.id]\" routerDirection=\"forward\">\n            <ion-avatar slot=\"start\">\n                <img [src]=\"gig.profile.avatar\">\n            </ion-avatar>\n            <ion-label>\n                <h2><span *ngIf=\"user.id !== gig.user_id\">Booked by</span> {{gig.profile.name}}</h2>\n                <p>Played {{formatUpcomingDate(gig.date_required)}}</p>\n            </ion-label>\n        </ion-item>              \n        \n        \n\n\n    </ion-list>    \n \n</ion-content>");

/***/ }),

/***/ "./src/app/pages/gigs/gigs-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/gigs/gigs-routing.module.ts ***!
  \***************************************************/
/*! exports provided: GigsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GigsPageRoutingModule", function() { return GigsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _gigs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gigs.page */ "./src/app/pages/gigs/gigs.page.ts");




var routes = [
    {
        path: '',
        component: _gigs_page__WEBPACK_IMPORTED_MODULE_3__["GigsPage"]
    }
];
var GigsPageRoutingModule = /** @class */ (function () {
    function GigsPageRoutingModule() {
    }
    GigsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], GigsPageRoutingModule);
    return GigsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/gigs/gigs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/gigs/gigs.module.ts ***!
  \*******************************************/
/*! exports provided: GigsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GigsPageModule", function() { return GigsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _gigs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gigs-routing.module */ "./src/app/pages/gigs/gigs-routing.module.ts");
/* harmony import */ var _gigs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gigs.page */ "./src/app/pages/gigs/gigs.page.ts");







var GigsPageModule = /** @class */ (function () {
    function GigsPageModule() {
    }
    GigsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _gigs_routing_module__WEBPACK_IMPORTED_MODULE_5__["GigsPageRoutingModule"]
            ],
            declarations: [_gigs_page__WEBPACK_IMPORTED_MODULE_6__["GigsPage"]]
        })
    ], GigsPageModule);
    return GigsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/gigs/gigs.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/gigs/gigs.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gigs .gigs__loading {\n  text-align: center;\n  margin-top: 60px;\n}\n.gigs .gigs__list ion-list-header {\n  margin-bottom: 10px;\n  margin-top: 20px;\n  padding-top: 10px;\n}\n.gigs .gigs__list ion-list-header:first-child {\n  margin-top: 0px;\n  padding-top: 0px;\n}\n.gigs .gigs__list ion-list-header ion-label {\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2lncy9EOlxcVGF5bG9yXFxEb2N1bWVudHNcXFdlYnNpdGVzXFxtdXNpY2J1ZGR5XFxhcHAvc3JjXFxhcHBcXHBhZ2VzXFxnaWdzXFxnaWdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ2lncy9naWdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGUjtBREtJO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSFI7QURNSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0pSO0FET0k7RUFDSSxrQkFBQTtBQ0xSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2lncy9naWdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5naWdze1xyXG4gICAgXHJcbiAgICBcclxuICAgIC5naWdzX19sb2FkaW5ne1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4OyAgICAgICAgXHJcbiAgICB9ICAgIFxyXG5cclxuICAgIC5naWdzX19saXN0IGlvbi1saXN0LWhlYWRlcntcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6MTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZ2lnc19fbGlzdCBpb24tbGlzdC1oZWFkZXI6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5naWdzX19saXN0IGlvbi1saXN0LWhlYWRlciBpb24tbGFiZWx7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTowcHg7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iLCIuZ2lncyAuZ2lnc19fbG9hZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cbi5naWdzIC5naWdzX19saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmdpZ3MgLmdpZ3NfX2xpc3QgaW9uLWxpc3QtaGVhZGVyOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuLmdpZ3MgLmdpZ3NfX2xpc3QgaW9uLWxpc3QtaGVhZGVyIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/gigs/gigs.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/gigs/gigs.page.ts ***!
  \*****************************************/
/*! exports provided: GigsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GigsPage", function() { return GigsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_gig_gig_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/gig/gig.service */ "./src/app/services/gig/gig.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/notifications/notifications.service */ "./src/app/services/notifications/notifications.service.ts");
/* harmony import */ var _notifications_notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../notifications/notifications.page */ "./src/app/pages/notifications/notifications.page.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








var GigsPage = /** @class */ (function () {
    function GigsPage(gigService, authenticationService, notificationsService, ngZone, modalController) {
        var _this = this;
        this.gigService = gigService;
        this.authenticationService = authenticationService;
        this.notificationsService = notificationsService;
        this.ngZone = ngZone;
        this.modalController = modalController;
        this.live = [];
        this.upcoming = [];
        this.completed = [];
        this.pending = [];
        this.loading = true;
        this.authenticationService.getUserData().subscribe(function (value) {
            _this.user = value;
        });
        this.gigService.monitorGigs().subscribe(function (value) {
            if (!_this.loading) {
                _this.getGigs();
            }
        });
        this.notificationsCount = 0;
        this.notificationsService.monitorNotifications().subscribe(function (changed) {
            _this.notificationsService.getNotificationCount().then(function (data) {
                _this.ngZone.run(function () {
                    _this.notificationsCount = data;
                });
            });
        });
    }
    GigsPage.prototype.ngOnInit = function () {
    };
    GigsPage.prototype.ionViewDidEnter = function () {
        this.getGigs();
    };
    GigsPage.prototype.getGigs = function () {
        var _this = this;
        this.gigService.getGigs().then(function (data) {
            var e_1, _a;
            console.log(data);
            _this.live = [];
            _this.upcoming = [];
            _this.completed = [];
            _this.pending = [];
            try {
                for (var data_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                    var gig = data_1_1.value;
                    if (gig.status === "live") {
                        _this.live.push(gig);
                    }
                    else if (gig.status === "upcoming") {
                        _this.upcoming.push(gig);
                    }
                    else if (gig.status === "completed") {
                        _this.completed.push(gig);
                    }
                    else if (gig.status === "pending") {
                        _this.pending.push(gig);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.loading = false;
        });
    };
    GigsPage.prototype.formatUpcomingDate = function (date) {
        var localeOffset = (new Date().getTimezoneOffset());
        return moment__WEBPACK_IMPORTED_MODULE_7__(date).add(localeOffset, 'm').format("Do MMMM [at] h:mma");
    };
    GigsPage.prototype.formatCompletedDate = function (date) {
        var localeOffset = (new Date().getTimezoneOffset());
        return moment__WEBPACK_IMPORTED_MODULE_7__(date).add(localeOffset, 'm').format("Do MMMM [at] h:mma");
    };
    GigsPage.prototype.formatLiveDate = function (date) {
        var localeOffset = (new Date().getTimezoneOffset());
        return moment__WEBPACK_IMPORTED_MODULE_7__(date).add(localeOffset, 'm').from(moment__WEBPACK_IMPORTED_MODULE_7__());
    };
    GigsPage.prototype.openNotifications = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _notifications_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"],
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
    GigsPage.ctorParameters = function () { return [
        { type: _services_gig_gig_service__WEBPACK_IMPORTED_MODULE_2__["GigService"] },
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
    ]; };
    GigsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gigs',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./gigs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gigs/gigs.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./gigs.page.scss */ "./src/app/pages/gigs/gigs.page.scss")).default]
        })
    ], GigsPage);
    return GigsPage;
}());



/***/ })

}]);
//# sourceMappingURL=gigs-gigs-module.js.map