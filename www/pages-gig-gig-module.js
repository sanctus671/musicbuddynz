(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gig-gig-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-review/create-review.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-review/create-review.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"dismiss()\">\n                <ion-icon name=\"close\"></ion-icon>\n            </ion-button>          \n        </ion-buttons>    \n        \n        <ion-title>Write Review</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"create-review\">\n\n    \n    \n    <ion-item class=\"create-review__rating\">\n        <ion-label>Select a rating</ion-label>\n        <div class=\"create-review__rating__stars\">\n            <ion-icon [name]=\"review.rating > 0 ? 'star' : 'star-outline'\" (click)=\"review.rating = 1\"></ion-icon>\n            <ion-icon [name]=\"review.rating > 1 ? 'star' : 'star-outline'\" (click)=\"review.rating = 2\"></ion-icon>\n            <ion-icon [name]=\"review.rating > 2 ? 'star' : 'star-outline'\" (click)=\"review.rating = 3\"></ion-icon>\n            <ion-icon [name]=\"review.rating > 3 ? 'star' : 'star-outline'\" (click)=\"review.rating = 4\"></ion-icon>\n            <ion-icon [name]=\"review.rating > 4 ? 'star' : 'star-outline'\" (click)=\"review.rating = 5\"></ion-icon>\n        </div>\n    </ion-item>\n    \n    \n    \n    <ion-item>\n       <ion-label position=\"floating\">Comments</ion-label>\n       <ion-textarea clearInput name=\"comments\" [(ngModel)]=\"review.comments\" autoGrow=\"true\" (ionChange)=\"commentChanged($event)\"></ion-textarea>\n   </ion-item>     \n    \n    \n</ion-content>\n\n\n\n\n\n<ion-footer class=\"create-review-footer\">\n\n\n    <ion-button color='primary' expand=\"full\" class=\"create-review__button\" (click)=\"createReview()\">\n        Submit Review&nbsp;&nbsp;\n        <ion-icon name=\"arrow-forward\" *ngIf=\"!review.loading\"></ion-icon>\n        <ion-spinner *ngIf=\"review.loading\"></ion-spinner>\n    </ion-button>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gig/gig.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gig/gig.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"gig-toolbar ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button>\n                <ion-back-button defaultHref=\"/tabs/gigs\"></ion-back-button>\n            </ion-button>            \n        </ion-buttons>   \n        \n        <ion-title></ion-title>\n        \n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"gig\" fullscreen>\n    \n    \n    <div class=\"gig__loading\" *ngIf=\"loading\">\n        <ion-spinner color=\"primary\"></ion-spinner>\n    </div>\n    \n    \n    \n    \n    <div class=\"gig__booking-details\" *ngIf=\"gig.status === 'pending' && gig.booked_user_id === user.id\">\n        \n        <p class=\"gig__booking-details__info\">\n            You have received a booking request from <a [routerLink]=\"['/profile/' + gig.customer_profile.user_id]\" routerDirection=\"forward\">{{gig.customer_profile.name}}</a> on {{formatDate(gig.date_required)}} for {{gig.duration}} hours. To accept this request, tap confirm booking below.</p>\n\n        <p class=\"gig__booking-details__terms\">\n           The amount charged is dependant on the total time spent in stream. If the duration is more or less, the final payment may be adjusted. You will be informed of this cost owed to you after the stream has completed. By confirming this booking, you are obligated to this customer. A minimum hiring fee will apply for the customer regardless of total time spent in stream.\n        </p>\n    </div>\n    \n    \n    \n    \n    \n    <div class=\"gig__booking-details\" *ngIf=\"gig.status === 'pending' && gig.booked_user_id !== user.id\">\n        \n        <p class=\"gig__booking-details__info\">\n            You made a booking request for <a [routerLink]=\"['/profile/' + gig.musician_profile.user_id]\" routerDirection=\"forward\">{{gig.musician_profile.name}}</a> on {{formatDate(gig.date_required)}} for {{gig.duration}} hours. The musician has yet to confirm this. You will be notified once they do.</p>\n\n        <p class=\"gig__booking-details__terms\">\n           The amount charged is dependant on the total time spent in stream. If the duration is more or less, the cost may be adjusted. You will be informed of this cost before paying the final bill. By confirming this booking, you are obligated to this musician. A minimum hiring fee will apply regardless of total time spent in stream.\n        </p>\n    </div>    \n    \n    \n\n    \n    \n    <div class=\"gig__booking-details\" *ngIf=\"gig.status === 'upcoming' && (gig.booked_user_id !== user.id || !canGoLive())\">\n        \n        <div class=\"gig__booking-details__countdown\">\n            <div class=\"gig__booking-details__countdown__days\">\n                {{timeToLive.days}}\n                <span>days</span>\n            </div>\n            <div class=\"gig__booking-details__countdown__hours\">\n                {{timeToLive.hours}}\n                <span>hours</span>\n            </div>\n            <div class=\"gig__booking-details__countdown__minutes\">\n                {{timeToLive.minutes}}\n                <span>minutes</span>\n            </div>\n            <div class=\"gig__booking-details__countdown__seconds\">\n                {{timeToLive.seconds}} \n                <span>seconds</span>\n            </div>\n        </div>\n        \n        \n        <p class=\"gig__booking-details__info\" *ngIf=\"gig.booked_user_id === user.id\">\n           You have a booking from <a [routerLink]=\"['/profile/' + gig.customer_profile.user_id]\" routerDirection=\"forward\">{{gig.customer_profile.name}}</a> on {{formatDate(gig.date_required)}} for {{gig.duration}} hours. You will be able to go live at this time.\n        </p>\n        \n        <p class=\"gig__booking-details__info\" *ngIf=\"gig.user_id !== user.id\">\n           You have a booking for <a [routerLink]=\"['/profile/' + gig.musician_profile.user_id]\" routerDirection=\"forward\">{{gig.musician_profile.name}}</a> on {{formatDate(gig.date_required)}} for {{gig.duration}} hours. The musician will go live at this time and you will be able to join this gig.\n        </p> \n        \n    </div>\n    \n    \n    \n    <div class=\"gig__booking-details\" *ngIf=\"gig.status === 'upcoming' && gig.booked_user_id === user.id && (canGoLive() || timerComplete)\">\n\n        <p class=\"gig__booking-details__go-live\">\n            Go live now!\n        </p>\n        \n        <p class=\"gig__booking-details__info\">Go live to start your booking from <a [routerLink]=\"['/profile/' + gig.customer_profile.user_id]\" routerDirection=\"forward\">{{gig.customer_profile.name}}</a> set to start on {{formatDate(gig.date_required)}}. Tap go live below to start.</p>\n \n    </div>    \n    \n    \n    \n    <div *ngIf=\"gig.status === 'live'\">\n        <div class=\"gig__video\">\n            \n            \n            <video id=\"video-stream\" autoplay playsinline></video>                \n\n            <ion-icon name=\"expand-outline\" (click)=\"goFullscreen()\"></ion-icon>\n\n        </div>\n\n\n        <div class=\"gig__header\">\n\n            <div class=\"gig__header__live\">\n                <span>Live</span> {{formatStreamTime(streamTime)}}\n                <ion-button color='primary' size='small' class=\"gig__header__live__button\" (click)=\"stopShow()\">\n                    Stop Show\n                </ion-button>  \n            </div>\n            \n            \n \n            <ion-item *ngIf=\"gig.booked_user_id === user.id\" [routerLink]=\"['/profile/' + gig.customer_profile.user_id]\" routerDirection=\"forward\">\n                <ion-avatar slot=\"start\">\n                    <img [src]=\"gig.customer_profile.avatar\">\n                </ion-avatar>\n                <ion-label>\n                    <h2>{{gig.customer_profile.name}}</h2>\n                </ion-label>\n            </ion-item>  \n            \n            \n            <ion-item *ngIf=\"gig.booked_user_id !== user.id\" [routerLink]=\"['/profile/' + gig.musician_profile.user_id]\" routerDirection=\"forward\">\n                <ion-avatar slot=\"start\">\n                    <img [src]=\"gig.musician_profile.avatar\">\n                </ion-avatar>\n                <ion-label>\n                    <h2>{{gig.musician_profile.name}}</h2>\n                </ion-label>\n            </ion-item>              \n            \n            \n\n        </div>\n\n\n        <ion-content #messagesbox id=\"messages-box\">\n            <ion-list class=\"gig__chat\" >\n                <ion-item class=\"gig__chat__message\" *ngFor=\"let message of messages\" (click)=\"message.showTime = !message.showTime\" [ngClass]=\"{'to-message':message.user_id === user.id, 'from-message':message.user_id !== user.id, 'before' : message.isBefore, 'after' : message.isAfter, 'show-time': message.showTime}\" >\n\n                    <ion-avatar slot='start' *ngIf=\"message.user_id !== user.id\">\n                        <img [src]=\"message.avatar\">\n                    </ion-avatar>              \n                    <ion-note *ngIf=\"message.showTime\">{{getMessageTime(message.sent_at)}}</ion-note>\n                    <ion-label [slot]=\"message.user_id === user.id ? 'end' : 'start'\">\n                    <p>{{message.message}}</p>\n                    </ion-label>\n                </ion-item>\n\n\n            </ion-list>\n            \n        </ion-content>\n\n    </div>\n    \n    \n    \n    <div class=\"gig__booking-details\" *ngIf=\"gig.status === 'completed'\">\n        \n        <p class=\"gig__booking-details__info\">\n            You went live with \n            <span  *ngIf=\"gig.booked_user_id === user.id\">\n                <a [routerLink]=\"['/profile/' + gig.customer_profile.user_id]\" routerDirection=\"forward\">{{gig.customer_profile.name}}</a>\n            </span>\n            <span  *ngIf=\"gig.booked_user_id !== user.id\">\n                <a [routerLink]=\"['/profile/' + gig.musician_profile.user_id]\" routerDirection=\"forward\">{{gig.musician_profile.name}}</a>\n            </span>\n            on {{formatDate(gig.date_required)}}. <span *ngIf=\"gig.streams && gig.streams.length > 0\">The gig lasted {{gig.streams[0].actual_duration / 3600 | number:'1.2-2'}} hours and the total cost was ${{(gig.streams[0].actual_duration / 3600)*gig.hourly_rate | number:'1.2-2'}}</span>.\n            \n        </p>    \n        \n        \n        <div *ngIf=\"gig.user_id === user.id\" class=\"gig__booking-details__payment\" padding>\n\n            <h3>Payment Details</h3>\n\n            <p>Musician: {{gig.musician_profile.name}}</p>\n            <p>Hourly rate: ${{gig.hourly_rate}}</p>\n            <p *ngIf=\"gig.streams && gig.streams.length > 0\">Duration: {{gig.streams[0].actual_duration / 3600 | number:'1.2-2'}} hours</p>\n            <p *ngIf=\"gig.streams && gig.streams.length > 0\">Amount to be paid: ${{(gig.streams[0].actual_duration / 3600)*gig.hourly_rate | number:'1.2-2'}}</p>\n            <p>Our fees: ${{((gig.streams[0].actual_duration / 3600)*gig.hourly_rate)*0.1 | number:'1.2-2'}}</p>\n\n            <h4>Total: ${{((gig.streams[0].actual_duration / 3600)*gig.hourly_rate)*1.1 | number:'1.2-2'}}</h4>\n\n\n\n        </div>            \n            \n        \n\n\n\n    </div>    \n    \n    \n</ion-content>\n\n<ion-footer class=\"gig-footer\" [ngClass]=\"{'gig-footer--send-message' : gig.status === 'live'}\">\n    \n    \n\n    <ion-button color='primary' expand=\"full\" class=\"gig-footer__button\" (click)=\"confirmBooking()\" *ngIf=\"gig.status === 'pending' && gig.booked_user_id === user.id\">\n        Confirm Booking\n    </ion-button>    \n    \n    <ion-button color='primary' expand=\"full\" class=\"gig-footer__button\" (click)=\"goLive()\"  *ngIf=\"gig.status === 'upcoming' && gig.booked_user_id === user.id && (canGoLive() || timerComplete)\">\n        Go Live\n    </ion-button>    \n    \n    <ion-button color='primary' expand=\"full\" class=\"gig-footer__button\" (click)=\"getGig()\"  *ngIf=\"gig.status === 'upcoming' && gig.booked_user_id !== user.id && (canGoLive() || timerComplete)\">\n        Check Musician Status\n    </ion-button>      \n \n    <ion-button color='primary' expand=\"full\" class=\"gig-footer__button\" (click)=\"makePayment()\"  *ngIf=\"gig.status === 'completed' && gig.user_id === user.id && gig.payments.length < 1\">\n        Pay Now\n    </ion-button>   \n\n\n    <ion-button color='primary' expand=\"full\" class=\"gig-footer__button\" (click)=\"writeReview(gig.booked_user_id)\"  *ngIf=\"gig.status === 'completed' && gig.user_id === user.id && gig.payments.length > 0 && gig.reviews.length < 1\">\n        Write A Review\n    </ion-button>     \n    \n    \n    <ion-button color='primary' expand=\"full\" class=\"gig-footer__button\" (click)=\"writeReview(gig.user_id)\"  *ngIf=\"gig.status === 'completed' && gig.user_id !== user.id && gig.reviews.length < 1\">\n        Write A Review\n    </ion-button>         \n    \n    \n    <form name=\"chat-form\" (ngSubmit)=\"sendMessage()\" *ngIf=\"gig.status === 'live'\">\n\n        <ion-input color=\"dark\" name=\"message\" type=\"text\" placeholder=\"Send a message...\" [(ngModel)]=\"message\"></ion-input>\n        <div class=\"gig-footer__send-message\">\n            <ion-button fill=\"clear\" type=\"submit\">\n                <ion-icon slot=\"icon-only\" name=\"send-outline\"></ion-icon>\n            </ion-button>\n        </div>\n    </form>\n    \n    \n    \n    \n</ion-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pay/pay.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pay/pay.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        \n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"dismiss()\">\n                <ion-icon name=\"close\"></ion-icon>\n            </ion-button>          \n        </ion-buttons>       \n\n        <ion-title>Card Details</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"pay\">\n   \n    \n\n    <ion-list class=\"pay__form ion-padding\">\n        \n        \n        <ion-row>\n            \n            <ion-col size=\"auto\">\n                <ion-icon name=\"card\"></ion-icon>\n            </ion-col>\n            \n            <ion-col>\n                <ion-item>\n\n                    <ion-label position=\"floating\">Card Number</ion-label>\n                    <ion-input clearInput type=\"text\" [(ngModel)]=\"card.number\"></ion-input>\n                </ion-item>\n                \n\n                <ion-item>\n                    <ion-label position=\"floating\">Name On Card</ion-label>\n                    <ion-input clearInput type=\"text\" [(ngModel)]=\"card.name\"></ion-input>\n                </ion-item>\n\n\n                <ion-row class=\"pay__card-details\">\n                    <ion-col class=\"pay__card-details__date\">\n                        <ion-item>\n                            <ion-label position=\"floating\">Expiration</ion-label>\n                            <ion-datetime [(ngModel)]=\"card.expiry\" display-format=\"MM/YYYY\" picker-format=\"MM/YYYY\" [max]=\"maxDate\"></ion-datetime>        \n                        </ion-item>\n                    </ion-col>\n\n                    <ion-col class=\"pay__card-details__cvc\">\n                        <ion-item>\n                            <ion-label position=\"floating\">CVC</ion-label>\n                            <ion-input clearInput type=\"text\" [(ngModel)]=\"card.cvc\"></ion-input>\n                        </ion-item> \n                    </ion-col>\n                </ion-row>\n                \n            </ion-col>\n        </ion-row>\n        \n        \n        \n        <p *ngIf=\"error\" class=\"pay__error\">\n            {{error}}\n        </p>\n        \n        \n    </ion-list>\n    \n</ion-content>\n\n\n\n<ion-footer class=\"pay-footer\">\n\n    <ion-button color='primary' expand=\"full\" class=\"pay-footer__button\" [disabled]=\"loading\" (click)=\"makePayment()\">\n        Pay Now&nbsp;&nbsp;\n        <ion-icon name=\"arrow-forward\" *ngIf=\"!loading\"></ion-icon>\n        <ion-spinner *ngIf=\"loading\"></ion-spinner>\n    </ion-button>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/create-review/create-review.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/create-review/create-review.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".create-review .create-review__rating .create-review__rating__stars ion-icon {\n  width: 30px;\n  height: 30px;\n  color: #f3cd00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JlYXRlLXJldmlldy9EOlxcVGF5bG9yXFxEb2N1bWVudHNcXFdlYnNpdGVzXFxtdXNpY2J1ZGR5XFxhcHAvc3JjXFxhcHBcXHBhZ2VzXFxjcmVhdGUtcmV2aWV3XFxjcmVhdGUtcmV2aWV3LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3JlYXRlLXJldmlldy9jcmVhdGUtcmV2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0hoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1yZXZpZXcvY3JlYXRlLXJldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlYXRlLXJldmlld3tcclxuICAgIFxyXG4gICAgLmNyZWF0ZS1yZXZpZXdfX3JhdGluZ3tcclxuICAgICAgICAuY3JlYXRlLXJldmlld19fcmF0aW5nX19zdGFyc3tcclxuICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZjNjZDAwOyAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59IiwiLmNyZWF0ZS1yZXZpZXcgLmNyZWF0ZS1yZXZpZXdfX3JhdGluZyAuY3JlYXRlLXJldmlld19fcmF0aW5nX19zdGFycyBpb24taWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjZjNjZDAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/create-review/create-review.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/create-review/create-review.page.ts ***!
  \***********************************************************/
/*! exports provided: CreateReviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateReviewPage", function() { return CreateReviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _services_review_review_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/review/review.service */ "./src/app/services/review/review.service.ts");




var CreateReviewPage = /** @class */ (function () {
    function CreateReviewPage(modalController, reviewService, alertCtrl, navParams) {
        this.modalController = modalController;
        this.reviewService = reviewService;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        var gig = this.navParams.get('gig');
        var userId = this.navParams.get('user_id');
        this.review = { gig_id: gig.id, user_id: userId, comments: "" };
    }
    CreateReviewPage.prototype.ngOnInit = function () {
    };
    CreateReviewPage.prototype.dismiss = function () {
        this.modalController.dismiss();
    };
    CreateReviewPage.prototype.createReview = function () {
        var _this = this;
        this.review.loading = true;
        console.log(this.review);
        this.reviewService.createReview(this.review).then(function () {
            _this.review.loading = false;
            var alert = _this.alertCtrl.create({
                header: 'Review Sent!',
                message: 'Your review has been sent and will be displayed on the users profile.',
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
            _this.modalController.dismiss({ reviewed: true });
        }).catch(function () {
            _this.review.loading = false;
            var alert = _this.alertCtrl.create({
                header: 'Error',
                message: 'There was an error submitting this review. Please try again soon.',
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
        });
    };
    CreateReviewPage.prototype.commentChanged = function (ev) {
        this.review.comments = ev.detail.value;
    };
    CreateReviewPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_review_review_service__WEBPACK_IMPORTED_MODULE_3__["ReviewService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
    ]; };
    CreateReviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-review',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-review.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-review/create-review.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-review.page.scss */ "./src/app/pages/create-review/create-review.page.scss")).default]
        })
    ], CreateReviewPage);
    return CreateReviewPage;
}());



/***/ }),

/***/ "./src/app/pages/gig/gig-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/gig/gig-routing.module.ts ***!
  \*************************************************/
/*! exports provided: GigPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GigPageRoutingModule", function() { return GigPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _gig_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gig.page */ "./src/app/pages/gig/gig.page.ts");




var routes = [
    {
        path: '',
        component: _gig_page__WEBPACK_IMPORTED_MODULE_3__["GigPage"]
    }
];
var GigPageRoutingModule = /** @class */ (function () {
    function GigPageRoutingModule() {
    }
    GigPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], GigPageRoutingModule);
    return GigPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/gig/gig.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/gig/gig.module.ts ***!
  \*****************************************/
/*! exports provided: GigPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GigPageModule", function() { return GigPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _gig_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gig-routing.module */ "./src/app/pages/gig/gig-routing.module.ts");
/* harmony import */ var _gig_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gig.page */ "./src/app/pages/gig/gig.page.ts");
/* harmony import */ var _pay_pay_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pay/pay.page */ "./src/app/pages/pay/pay.page.ts");
/* harmony import */ var _create_review_create_review_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../create-review/create-review.page */ "./src/app/pages/create-review/create-review.page.ts");









var GigPageModule = /** @class */ (function () {
    function GigPageModule() {
    }
    GigPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _gig_routing_module__WEBPACK_IMPORTED_MODULE_5__["GigPageRoutingModule"]
            ],
            declarations: [_gig_page__WEBPACK_IMPORTED_MODULE_6__["GigPage"], _pay_pay_page__WEBPACK_IMPORTED_MODULE_7__["PayPage"], _create_review_create_review_page__WEBPACK_IMPORTED_MODULE_8__["CreateReviewPage"]],
            entryComponents: [_pay_pay_page__WEBPACK_IMPORTED_MODULE_7__["PayPage"], _create_review_create_review_page__WEBPACK_IMPORTED_MODULE_8__["CreateReviewPage"]],
        })
    ], GigPageModule);
    return GigPageModule;
}());



/***/ }),

/***/ "./src/app/pages/gig/gig.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/gig/gig.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gig-toolbar ion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\n.gig .gig__loading {\n  text-align: center;\n  margin-top: 60px;\n}\n\n.gig .gig__booking-details p a {\n  color: White;\n}\n\n.gig .gig__booking-details .gig__booking-details__info {\n  text-align: Center;\n  padding-left: 30px;\n  padding-right: 30px;\n  margin-top: 40px;\n}\n\n.gig .gig__booking-details .gig__booking-details__terms {\n  font-size: 12px;\n  text-align: center;\n  padding-left: 30px;\n  padding-right: 30px;\n  opacity: 0.5;\n  margin-top: 40px;\n}\n\n.gig .gig__booking-details .gig__booking-details__countdown {\n  text-align: center;\n  white-space: nowrap;\n  margin-top: 40px;\n}\n\n.gig .gig__booking-details .gig__booking-details__countdown > div {\n  display: inline-block;\n  font-size: 40px;\n  margin: 0px 15px;\n}\n\n.gig .gig__booking-details .gig__booking-details__countdown > div span {\n  font-size: 12px;\n  display: block;\n}\n\n.gig .gig__booking-details .gig__booking-details__go-live {\n  font-size: 30px;\n  text-align: center;\n}\n\n.gig .gig__booking-details .gig__booking-details__payment {\n  background-color: rgba(36, 151, 232, 0.15);\n  text-align: center;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  border-top: 2px dotted #2497e8;\n  border-bottom: 2px dotted #2497e8;\n  margin-bottom: 30px;\n  margin-top: 50px;\n}\n\n.gig .gig__booking-details .gig__booking-details__payment h3 {\n  margin: 0px;\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n\n.gig .gig__booking-details .gig__booking-details__payment p {\n  margin: 0px;\n  font-size: 15px;\n}\n\n.gig .gig__booking-details .gig__booking-details__payment h4 {\n  margin: 0px;\n  margin-top: 10px;\n  font-size: 16px;\n}\n\n.gig .gig__video {\n  width: 100%;\n  height: 270px;\n  margin-top: -56px;\n  background-color: black;\n  position: relative;\n}\n\n.gig .gig__video video {\n  width: 100%;\n  height: 270px;\n}\n\n.gig .gig__video ion-icon {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  font-size: 26px;\n}\n\n.gig .gig__header {\n  padding: 20px 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  height: 140px;\n}\n\n.gig .gig__header .gig__header__live span {\n  background-color: Red;\n  padding: 4px 12px;\n  font-size: 11px;\n  line-height: 11px;\n  text-transform: uppercase;\n  font-weight: bold;\n  letter-spacing: 1px;\n  border-radius: 3px;\n  margin-right: 10px;\n}\n\n.gig .gig__header ion-button {\n  float: right;\n  margin: 0px;\n}\n\n.gig .gig__header ion-item {\n  margin-top: 20px;\n  --background: transparent;\n  --border-color: transparent;\n  --padding-start: 0px;\n}\n\n.gig #messages-box {\n  min-height: 100px;\n}\n\n.gig .gig__chat {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  background: transparent;\n}\n\n.gig .gig__chat .gig__chat__message {\n  width: 100%;\n  --border-color: transparent;\n  --background: transaprent;\n}\n\n.gig .gig__chat .gig__chat__message ion-label {\n  flex: none;\n  margin: 0px;\n  padding: 0px;\n  padding: 10px 15px;\n  border-radius: 15px;\n  overflow: visible;\n  transition: margin-top linear 200ms;\n}\n\n.gig .gig__chat .gig__chat__message.show-time ion-label {\n  margin-top: 16px;\n}\n\n.gig .gig__chat .gig__chat__message ion-note {\n  position: absolute;\n  top: -16px;\n  font-size: 10px;\n  z-index: -1;\n}\n\n.gig .gig__chat .gig__chat__message.from-message ion-note {\n  left: 73px;\n  top: 0;\n}\n\n.gig .gig__chat .gig__chat__message.to-message ion-note {\n  right: 0px;\n}\n\n.gig .gig__chat .gig__chat__message.from-message.before ion-label {\n  border-bottom-left-radius: 5px;\n}\n\n.gig .gig__chat .gig__chat__message.from-message.after ion-label {\n  border-top-left-radius: 5px;\n}\n\n.gig .gig__chat .gig__chat__message.to-message.before ion-label {\n  border-bottom-right-radius: 5px;\n}\n\n.gig .gig__chat .gig__chat__message.to-message.after ion-label {\n  border-top-right-radius: 5px;\n}\n\n.gig .gig__chat .gig__chat__message.from-message ion-avatar {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n.gig .gig__chat .gig__chat__message.from-message.before ion-avatar {\n  opacity: 0;\n}\n\n.gig .gig__chat .gig__chat__message.from-message ion-label {\n  background-color: #eee;\n  max-width: 75%;\n  margin-bottom: 5px;\n}\n\n.gig .gig__chat .gig__chat__message.to-message {\n  position: relative;\n  right: 15px;\n  max-width: 75%;\n  float: right;\n  margin-bottom: 5px;\n}\n\n.gig .gig__chat .gig__chat__message.to-message .input-wrapper {\n  display: block;\n}\n\n.gig .gig__chat .gig__chat__message.to-message ion-label {\n  float: right;\n  background-color: #2497e8;\n}\n\n.gig .gig__chat .gig__chat__message ion-label p {\n  min-height: 17px;\n  white-space: normal;\n  color: black;\n}\n\n.gig .gig__chat .gig__chat__message.to-message ion-label p {\n  color: white;\n}\n\n.gig .gig__chat .gig__chat__message .item-inner {\n  border-bottom: none;\n}\n\n.gig .gig__chat.message-list > .item-block {\n  border: none;\n}\n\n.gig-footer {\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n  background-color: #121212;\n}\n\n.gig-footer ion-input {\n  width: 75%;\n  display: inline-block;\n  --padding-start: 20px;\n  vertical-align: bottom;\n  --padding-bottom: 12px;\n}\n\n.gig-footer .gig-footer__send-message {\n  width: 25%;\n  display: inline-block;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2lnL0Q6XFxUYXlsb3JcXERvY3VtZW50c1xcV2Vic2l0ZXNcXG11c2ljYnVkZHlcXGFwcC9zcmNcXGFwcFxccGFnZXNcXGdpZ1xcZ2lnLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ2lnL2dpZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0FDQ0E7O0FETUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDSFI7O0FEUVE7RUFDSSxZQUFBO0FDTlo7O0FEVVE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ1JaOztBRFdRO0VBQ0ksZUFBQTtFQUNKLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1RSOztBRGFRO0VBRUksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDWlo7O0FEYVk7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1hoQjs7QURZZ0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ1ZwQjs7QURrQlE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNoQlo7O0FEb0JRO0VBQ0ksMENBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ2xCWjs7QURvQlk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDbEJoQjs7QURxQlk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ25CaEI7O0FEc0JZO0VBRUksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ3JCaEI7O0FEZ0NJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUM5QlI7O0FEZ0NRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUM5Qlo7O0FEaUNRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUMvQlo7O0FEdUNJO0VBQ0osa0JBQUE7RUFDSSxrREFBQTtFQUNBLGFBQUE7QUNyQ0o7O0FEdUNRO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNyQ1o7O0FEd0NRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUN0Q1o7O0FEMENRO0VBQ0ksZ0JBQUE7RUFDUix5QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUN4Q0o7O0FEOENJO0VBQ0ksaUJBQUE7QUM1Q1I7O0FEK0NJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNJLHVCQUFBO0FDN0NaOztBRCtDUTtFQUNJLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FDN0NaOztBRGtEUTtFQUNJLFVBQUE7RUFDSSxXQUFBO0VBQ0osWUFBQTtFQUNJLGtCQUFBO0VBQ0osbUJBQUE7RUFDQyxpQkFBQTtFQUNBLG1DQUFBO0FDaERiOztBRG9EUTtFQUNRLGdCQUFBO0FDbERoQjs7QURxRFE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDSixlQUFBO0VBQ0EsV0FBQTtBQ25EUjs7QURzRFE7RUFDSSxVQUFBO0VBQ0EsTUFBQTtBQ3BEWjs7QUR1RFE7RUFDSSxVQUFBO0FDckRaOztBRHdEUTtFQUNJLDhCQUFBO0FDdERaOztBRHlEUTtFQUNJLDJCQUFBO0FDdkRaOztBRDBEUTtFQUNJLCtCQUFBO0FDeERaOztBRDJEUTtFQUNJLDRCQUFBO0FDekRaOztBRDREUTtFQUNRLGVBQUE7RUFDSixrQkFBQTtBQzFEWjs7QUQ2RFE7RUFDSSxVQUFBO0FDM0RaOztBRDhEUTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtFQUNJLGtCQUFBO0FDNURoQjs7QURpRVE7RUFFSSxrQkFBQTtFQUNBLFdBQUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNJLGtCQUFBO0FDaEVwQjs7QURtRVE7RUFDSSxjQUFBO0FDakVaOztBRG9FUTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtBQ2xFWjs7QURxRVE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ25FWjs7QURzRVE7RUFDSSxZQUFBO0FDcEVaOztBRHdFUTtFQUNJLG1CQUFBO0FDdEVaOztBRHlFUTtFQUNJLFlBQUE7QUN2RVo7O0FEOEVBO0VBQ0ksK0NBQUE7RUFDQSx5QkFBQTtBQzNFSjs7QURpRkE7RUFDUSxVQUFBO0VBQ0oscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUMvRUo7O0FEa0ZBO0VBQ0EsVUFBQTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUMvRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9naWcvZ2lnLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5naWctdG9vbGJhciBpb24tdG9vbGJhciB7XHJcbi0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbi0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLmdpZ3tcclxuICAgIFxyXG4gICAgLmdpZ19fbG9hZGluZ3tcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDsgICAgICAgIFxyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgLmdpZ19fYm9va2luZy1kZXRhaWxze1xyXG4gICAgICAgIFxyXG4gICAgICAgIHAgYXtcclxuICAgICAgICAgICAgY29sb3I6V2hpdGU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuZ2lnX19ib29raW5nLWRldGFpbHNfX2luZm97XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IENlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdpZ19fYm9va2luZy1kZXRhaWxzX190ZXJtc3tcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC5naWdfX2Jvb2tpbmctZGV0YWlsc19fY291bnRkb3due1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDo0MHB4O1xyXG4gICAgICAgICAgICA+ZGl2e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMTVweDtcclxuICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuZ2lnX19ib29raW5nLWRldGFpbHNfX2dvLWxpdmV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAuZ2lnX19ib29raW5nLWRldGFpbHNfX3BheW1lbnR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzYsIDE1MSwgMjMyLCAwLjE1KTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBkb3R0ZWQgIzI0OTdlODtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGRvdHRlZCAjMjQ5N2U4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxuICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIH0gICBcclxuXHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoNHtcclxuXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIC5naWdfX3ZpZGVve1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjcwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTU2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZpZGVve1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNzBweDsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5naWdfX2hlYWRlcntcclxucGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XHJcbiAgICBoZWlnaHQ6MTQwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmdpZ19faGVhZGVyX19saXZlIHNwYW57XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IFJlZDtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjbWVzc2FnZXMtYm94e1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6MTAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5naWdfX2NoYXR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MjBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgIC5naWdfX2NoYXRfX21lc3NhZ2V7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc2FwcmVudDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLmdpZ19fY2hhdF9fbWVzc2FnZSBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgIGZsZXg6bm9uZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICAgICAgIHRyYW5zaXRpb246bWFyZ2luLXRvcCBsaW5lYXIgMjAwbXM7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdpZ19fY2hhdF9fbWVzc2FnZS5zaG93LXRpbWUgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5naWdfX2NoYXRfX21lc3NhZ2UgaW9uLW5vdGV7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAtMTZweDtcclxuICAgICAgICBmb250LXNpemU6MTBweDtcclxuICAgICAgICB6LWluZGV4Oi0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdpZ19fY2hhdF9fbWVzc2FnZS5mcm9tLW1lc3NhZ2UgaW9uLW5vdGV7XHJcbiAgICAgICAgICAgIGxlZnQ6IDczcHg7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5naWdfX2NoYXRfX21lc3NhZ2UudG8tbWVzc2FnZSBpb24tbm90ZXtcclxuICAgICAgICAgICAgcmlnaHQ6MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdpZ19fY2hhdF9fbWVzc2FnZS5mcm9tLW1lc3NhZ2UuYmVmb3JlIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdpZ19fY2hhdF9fbWVzc2FnZS5mcm9tLW1lc3NhZ2UuYWZ0ZXIgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZ2lnX19jaGF0X19tZXNzYWdlLnRvLW1lc3NhZ2UuYmVmb3JlIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5naWdfX2NoYXRfX21lc3NhZ2UudG8tbWVzc2FnZS5hZnRlciBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZ2lnX19jaGF0X19tZXNzYWdlLmZyb20tbWVzc2FnZSBpb24tYXZhdGFye1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZ2lnX19jaGF0X19tZXNzYWdlLmZyb20tbWVzc2FnZS5iZWZvcmUgaW9uLWF2YXRhcntcclxuICAgICAgICAgICAgb3BhY2l0eTowO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdpZ19fY2hhdF9fbWVzc2FnZS5mcm9tLW1lc3NhZ2UgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAuZ2lnX19jaGF0X19tZXNzYWdlLnRvLW1lc3NhZ2V7XHJcblxyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZ2lnX19jaGF0X19tZXNzYWdlLnRvLW1lc3NhZ2UgLmlucHV0LXdyYXBwZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuZ2lnX19jaGF0X19tZXNzYWdlLnRvLW1lc3NhZ2UgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI0OTdlODtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5naWdfX2NoYXRfX21lc3NhZ2UgaW9uLWxhYmVsIHB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6MTdweDtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZ2lnX19jaGF0X19tZXNzYWdlLnRvLW1lc3NhZ2UgaW9uLWxhYmVsIHAge1xyXG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAuZ2lnX19jaGF0X19tZXNzYWdlIC5pdGVtLWlubmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTpub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5tZXNzYWdlLWxpc3QgPiAuaXRlbS1ibG9ja3tcclxuICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9ICAgIFxyXG4gICBcclxufVxyXG5cclxuLmdpZy1mb290ZXJ7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XHJcbiAgICAmLmdpZy1mb290ZXItLXNlbmQtbWVzc2FnZXtcclxuXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4uZ2lnLWZvb3RlciBpb24taW5wdXR7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7ICAgIFxyXG59XHJcblxyXG4uZ2lnLWZvb3RlciAuZ2lnLWZvb3Rlcl9fc2VuZC1tZXNzYWdle1xyXG53aWR0aDogMjUlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn0gICAgXHJcbiIsIi5naWctdG9vbGJhciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5naWcgLmdpZ19fbG9hZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cbi5naWcgLmdpZ19fYm9va2luZy1kZXRhaWxzIHAgYSB7XG4gIGNvbG9yOiBXaGl0ZTtcbn1cbi5naWcgLmdpZ19fYm9va2luZy1kZXRhaWxzIC5naWdfX2Jvb2tpbmctZGV0YWlsc19faW5mbyB7XG4gIHRleHQtYWxpZ246IENlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLmdpZyAuZ2lnX19ib29raW5nLWRldGFpbHMgLmdpZ19fYm9va2luZy1kZXRhaWxzX190ZXJtcyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIG9wYWNpdHk6IDAuNTtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5naWcgLmdpZ19fYm9va2luZy1kZXRhaWxzIC5naWdfX2Jvb2tpbmctZGV0YWlsc19fY291bnRkb3duIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLmdpZyAuZ2lnX19ib29raW5nLWRldGFpbHMgLmdpZ19fYm9va2luZy1kZXRhaWxzX19jb3VudGRvd24gPiBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luOiAwcHggMTVweDtcbn1cbi5naWcgLmdpZ19fYm9va2luZy1kZXRhaWxzIC5naWdfX2Jvb2tpbmctZGV0YWlsc19fY291bnRkb3duID4gZGl2IHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmdpZyAuZ2lnX19ib29raW5nLWRldGFpbHMgLmdpZ19fYm9va2luZy1kZXRhaWxzX19nby1saXZlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZ2lnIC5naWdfX2Jvb2tpbmctZGV0YWlscyAuZ2lnX19ib29raW5nLWRldGFpbHNfX3BheW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM2LCAxNTEsIDIzMiwgMC4xNSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICBib3JkZXItdG9wOiAycHggZG90dGVkICMyNDk3ZTg7XG4gIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgIzI0OTdlODtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5naWcgLmdpZ19fYm9va2luZy1kZXRhaWxzIC5naWdfX2Jvb2tpbmctZGV0YWlsc19fcGF5bWVudCBoMyB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uZ2lnIC5naWdfX2Jvb2tpbmctZGV0YWlscyAuZ2lnX19ib29raW5nLWRldGFpbHNfX3BheW1lbnQgcCB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uZ2lnIC5naWdfX2Jvb2tpbmctZGV0YWlscyAuZ2lnX19ib29raW5nLWRldGFpbHNfX3BheW1lbnQgaDQge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmdpZyAuZ2lnX192aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI3MHB4O1xuICBtYXJnaW4tdG9wOiAtNTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5naWcgLmdpZ19fdmlkZW8gdmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNzBweDtcbn1cbi5naWcgLmdpZ19fdmlkZW8gaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbi5naWcgLmdpZ19faGVhZGVyIHtcbiAgcGFkZGluZzogMjBweCAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgaGVpZ2h0OiAxNDBweDtcbn1cbi5naWcgLmdpZ19faGVhZGVyIC5naWdfX2hlYWRlcl9fbGl2ZSBzcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogUmVkO1xuICBwYWRkaW5nOiA0cHggMTJweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmdpZyAuZ2lnX19oZWFkZXIgaW9uLWJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uZ2lnIC5naWdfX2hlYWRlciBpb24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG4uZ2lnICNtZXNzYWdlcy1ib3gge1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbn1cbi5naWcgLmdpZ19fY2hhdCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmdpZyAuZ2lnX19jaGF0IC5naWdfX2NoYXRfX21lc3NhZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zYXByZW50O1xufVxuLmdpZyAuZ2lnX19jaGF0IC5naWdfX2NoYXRfX21lc3NhZ2UgaW9uLWxhYmVsIHtcbiAgZmxleDogbm9uZTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgdHJhbnNpdGlvbjogbWFyZ2luLXRvcCBsaW5lYXIgMjAwbXM7XG59XG4uZ2lnIC5naWdfX2NoYXQgLmdpZ19fY2hhdF9fbWVzc2FnZS5zaG93LXRpbWUgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5naWcgLmdpZ19fY2hhdCAuZ2lnX19jaGF0X19tZXNzYWdlIGlvbi1ub3RlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xNnB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHotaW5kZXg6IC0xO1xufVxuLmdpZyAuZ2lnX19jaGF0IC5naWdfX2NoYXRfX21lc3NhZ2UuZnJvbS1tZXNzYWdlIGlvbi1ub3RlIHtcbiAgbGVmdDogNzNweDtcbiAgdG9wOiAwO1xufVxuLmdpZyAuZ2lnX19jaGF0IC5naWdfX2NoYXRfX21lc3NhZ2UudG8tbWVzc2FnZSBpb24tbm90ZSB7XG4gIHJpZ2h0OiAwcHg7XG59XG4uZ2lnIC5naWdfX2NoYXQgLmdpZ19fY2hhdF9fbWVzc2FnZS5mcm9tLW1lc3NhZ2UuYmVmb3JlIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbn1cbi5naWcgLmdpZ19fY2hhdCAuZ2lnX19jaGF0X19tZXNzYWdlLmZyb20tbWVzc2FnZS5hZnRlciBpb24tbGFiZWwge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG59XG4uZ2lnIC5naWdfX2NoYXQgLmdpZ19fY2hhdF9fbWVzc2FnZS50by1tZXNzYWdlLmJlZm9yZSBpb24tbGFiZWwge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuLmdpZyAuZ2lnX19jaGF0IC5naWdfX2NoYXRfX21lc3NhZ2UudG8tbWVzc2FnZS5hZnRlciBpb24tbGFiZWwge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuLmdpZyAuZ2lnX19jaGF0IC5naWdfX2NoYXRfX21lc3NhZ2UuZnJvbS1tZXNzYWdlIGlvbi1hdmF0YXIge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5naWcgLmdpZ19fY2hhdCAuZ2lnX19jaGF0X19tZXNzYWdlLmZyb20tbWVzc2FnZS5iZWZvcmUgaW9uLWF2YXRhciB7XG4gIG9wYWNpdHk6IDA7XG59XG4uZ2lnIC5naWdfX2NoYXQgLmdpZ19fY2hhdF9fbWVzc2FnZS5mcm9tLW1lc3NhZ2UgaW9uLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgbWF4LXdpZHRoOiA3NSU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5naWcgLmdpZ19fY2hhdCAuZ2lnX19jaGF0X19tZXNzYWdlLnRvLW1lc3NhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAxNXB4O1xuICBtYXgtd2lkdGg6IDc1JTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uZ2lnIC5naWdfX2NoYXQgLmdpZ19fY2hhdF9fbWVzc2FnZS50by1tZXNzYWdlIC5pbnB1dC13cmFwcGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZ2lnIC5naWdfX2NoYXQgLmdpZ19fY2hhdF9fbWVzc2FnZS50by1tZXNzYWdlIGlvbi1sYWJlbCB7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0OTdlODtcbn1cbi5naWcgLmdpZ19fY2hhdCAuZ2lnX19jaGF0X19tZXNzYWdlIGlvbi1sYWJlbCBwIHtcbiAgbWluLWhlaWdodDogMTdweDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmdpZyAuZ2lnX19jaGF0IC5naWdfX2NoYXRfX21lc3NhZ2UudG8tbWVzc2FnZSBpb24tbGFiZWwgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5naWcgLmdpZ19fY2hhdCAuZ2lnX19jaGF0X19tZXNzYWdlIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5naWcgLmdpZ19fY2hhdC5tZXNzYWdlLWxpc3QgPiAuaXRlbS1ibG9jayB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmdpZy1mb290ZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbn1cbi5naWctZm9vdGVyIGlvbi1pbnB1dCB7XG4gIHdpZHRoOiA3NSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xufVxuXG4uZ2lnLWZvb3RlciAuZ2lnLWZvb3Rlcl9fc2VuZC1tZXNzYWdlIHtcbiAgd2lkdGg6IDI1JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/gig/gig.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/gig/gig.page.ts ***!
  \***************************************/
/*! exports provided: GigPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GigPage", function() { return GigPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _services_gig_gig_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/gig/gig.service */ "./src/app/services/gig/gig.service.ts");
/* harmony import */ var _services_stream_stream_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/stream/stream.service */ "./src/app/services/stream/stream.service.ts");
/* harmony import */ var _services_message_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/message/message.service */ "./src/app/services/message/message.service.ts");
/* harmony import */ var _pay_pay_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pay/pay.page */ "./src/app/pages/pay/pay.page.ts");
/* harmony import */ var _create_review_create_review_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../create-review/create-review.page */ "./src/app/pages/create-review/create-review.page.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");












var GigPage = /** @class */ (function () {
    function GigPage(authenticationService, gigService, route, alertCtrl, streamService, messageService, modalController, loadingCtrl, ngZone, permissions) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.gigService = gigService;
        this.route = route;
        this.alertCtrl = alertCtrl;
        this.streamService = streamService;
        this.messageService = messageService;
        this.modalController = modalController;
        this.loadingCtrl = loadingCtrl;
        this.ngZone = ngZone;
        this.permissions = permissions;
        var gigId = this.route.snapshot.params['id'];
        this.loading = true;
        this.gig = { id: gigId };
        this.getGig();
        this.streamTime = 0;
        this.stream = {};
        this.messages = [];
        this.message = "";
        this.authenticationService.getUserData().subscribe(function (data) {
            _this.user = data;
        });
        this.timerComplete = false;
        this.timeToLive = {};
    }
    GigPage.prototype.ngOnInit = function () {
    };
    GigPage.prototype.ionViewWillLeave = function () {
        if (this.timeToLiveInterval) {
            clearInterval(this.timeToLiveInterval);
        }
        if (this.streamTimeInterval) {
            clearInterval(this.streamTimeInterval);
        }
        if (this.messageInterval) {
            clearInterval(this.messageInterval);
        }
        if (this.videoStream) {
            this.videoStream.getTracks().forEach(function (stream) { return stream.stop(); });
        }
        if (this.stream.id) {
            this.streamService.deleteParticipant(this.stream.id).then(function () { });
        }
    };
    GigPage.prototype.getGig = function () {
        var _this = this;
        this.gigService.getGig(this.gig.id).then(function (data) {
            if (data.date_required) {
                var localeOffset = (new Date().getTimezoneOffset());
                data.date_required = moment__WEBPACK_IMPORTED_MODULE_10__(data.date_required).add(localeOffset, 'm').format("YYYY-MM-DD HH:mm:ss");
                console.log(_this.gig);
            }
            _this.ngZone.run(function () {
                _this.gig = data;
            });
            if (_this.gig.status === "live") {
                _this.getStream();
                _this.setupMessageBox();
            }
            if (_this.gig.status === "upcoming") {
                _this.setTimeToLive();
                _this.timeToLiveInterval = setInterval(function () {
                    _this.setTimeToLive();
                }, 1000);
            }
            _this.loading = false;
        });
    };
    GigPage.prototype.confirmBooking = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            header: 'Are You Sure?',
            subHeader: 'You are about to confirm this booking',
            message: 'Once confirmed, you are obligated to perform on this date and time.',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Confirm',
                    handler: function (data) {
                        _this.gigService.updateGig({ id: _this.gig.id, status: "upcoming" }).then(function () {
                            _this.gig.status = "upcoming";
                            var alert = _this.alertCtrl.create({
                                header: 'Booking Confirmed',
                                message: 'Congratulations! Your booking has now been confirmed. Ensure you go live at the date and time of this booking.',
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
                            _this.setTimeToLive();
                            _this.timeToLiveInterval = setInterval(function () {
                                _this.setTimeToLive();
                            }, 1000);
                        });
                    }
                }
            ]
        }).then(function (el) {
            el.present();
        });
    };
    GigPage.prototype.goLive = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            header: 'Are You Sure?',
            subHeader: 'You are about to go live',
            message: 'The customer will then be able to join the gig. Once the customer joins, you will earn money based on the hourly rate set for this gig.',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Go Live',
                    handler: function (data) {
                        _this.gigService.updateGig({ id: _this.gig.id, status: "live", golive: true }).then(function () {
                            _this.gig.status = "live";
                            _this.streamService.createStream(_this.gig.id).then(function (data) {
                                _this.stream = data;
                                _this.streamTime = 0;
                                _this.setupMessages();
                                _this.joinStream();
                            });
                            var alert = _this.alertCtrl.create({
                                header: 'You Are Live!',
                                message: 'You are now live. The customer has been notified and will join the gig shortly.',
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
                                message: 'There was an error going live, please try again soon.',
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
                        });
                    }
                }
            ]
        }).then(function (el) {
            el.present();
        });
    };
    GigPage.prototype.stopShow = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            header: 'Are You Sure?',
            subHeader: 'You are about to end the stream which will complete this gig',
            message: 'Once completed, the final total duration will be calculcated and payment will be required from the customer.',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Stop Show',
                    handler: function (data) {
                        _this.gigService.updateGig({ id: _this.gig.id, status: "completed" }).then(function () {
                            if (_this.streamTimeInterval) {
                                clearInterval(_this.streamTimeInterval);
                            }
                            if (_this.messageInterval) {
                                clearInterval(_this.messageInterval);
                            }
                            if (_this.videoStream) {
                                _this.videoStream.getTracks().forEach(function (stream) { return stream.stop(); });
                            }
                            if (_this.stream.id) {
                                _this.streamService.deleteParticipant(_this.stream.id).then(function () { });
                            }
                            _this.gig.status = "completed";
                            var alert = _this.alertCtrl.create({
                                header: 'Gig Completed',
                                message: 'Congratulations! You have completed this gig. If you are the customer, dismiss this message and make payment. If you are the musician, you will be notified once payment has been made.',
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
                                message: 'There was an error stopping this show, please try again soon.',
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
                        });
                    }
                }
            ]
        }).then(function (el) {
            el.present();
        });
    };
    GigPage.prototype.makePayment = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _pay_pay_page__WEBPACK_IMPORTED_MODULE_8__["PayPage"],
                            componentProps: {}
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            if (data && data.data) {
                                //send
                                var token = data.data;
                                _this.completeOrder(token.id);
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
    GigPage.prototype.completeOrder = function (cardToken) {
        var _this = this;
        var loading;
        this.loadingCtrl.create({
            message: 'Completing payment. Please wait...',
            duration: 20000
        }).then(function (el) {
            loading = el;
            el.present();
        });
        var cost = (this.gig.streams[0].actual_duration / 3600) * this.gig.hourly_rate;
        var fees = cost * 0.1;
        this.gigService.completePayment({ gig_id: this.gig.id, payment: (cost + fees).toFixed(2), payment_date: moment__WEBPACK_IMPORTED_MODULE_10__().format("YYYY-MM-DD HH:mm:ss"), recipient_user_id: this.gig.booked_user_id, card_token: cardToken }).then(function (data) {
            loading.dismiss();
            _this.alertCtrl.create({
                header: "Thank You!",
                message: "Your payment was successful. You can view all billing and payment in your Settings. Write a review to tell other users about this musician.",
                buttons: [
                    {
                        text: 'Dismiss',
                        role: 'cancel',
                        handler: function (data) {
                        }
                    },
                    {
                        text: 'Write Review',
                        handler: function (data) {
                            _this.writeReview(_this.gig.booked_user_id);
                        }
                    }
                ]
            }).then(function (el) {
                el.present();
            });
            //this.navController.back();     
        }).catch(function () {
            loading.dismiss();
            _this.alertCtrl.create({
                header: "Error",
                message: "There was an error making payment.",
                buttons: [
                    {
                        text: 'Dismiss',
                        role: 'cancel'
                    }
                ]
            }).then(function (el) {
                el.present();
            });
        });
    };
    GigPage.prototype.writeReview = function (userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _create_review_create_review_page__WEBPACK_IMPORTED_MODULE_9__["CreateReviewPage"],
                            componentProps: { gig: this.gig, user_id: userId }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            if (data && data.data) {
                                if (data.data.reviewed) {
                                    _this.gig.reviews.push({ user_id: _this.user.id });
                                    _this.getGig();
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
    GigPage.prototype.getStream = function () {
        var _this = this;
        this.streamService.getStream(this.gig.id).then(function (data) {
            _this.stream = data;
            _this.streamTime = _this.stream.actual_duration ? _this.stream.actual_duration : 0;
            _this.setupMessages();
            _this.joinStream();
        });
    };
    GigPage.prototype.joinStream = function () {
        var _this = this;
        this.permissions.checkPermission(this.permissions.PERMISSION.CAMERA).then(function (result) {
            //alert("permission allowed");
            _this.getUserMedia();
        }, function (err) {
            _this.permissions.requestPermission(_this.permissions.PERMISSION.CAMERA);
            alert("permissions not allowed");
            _this.getUserMedia();
        });
        this.permissions.requestPermissions([this.permissions.PERMISSION.CAMERA]);
        /*
        
        this.peer = new Peer();
        
        
        this.peer.on('open', (id) => {
            this.peerId = id;

            this.streamService.createParticipant(this.stream.id, id).then(() => {
                
            });
            
            this.permissions.checkPermission(this.permissions.PERMISSION.CAMERA).then(
              (result) => {
                  //alert("permission allowed");
                  this.getUserMedia();
              },
              (err) => {
                  //alert("permissions not allowed");
                this.permissions.requestPermission(this.permissions.PERMISSION.CAMERA);
                this.getUserMedia();
              }
            );
             
            this.permissions.requestPermissions([this.permissions.PERMISSION.CAMERA]);

        });
        
     

        this.peer.on('call', (call) => {
            call.answer(this.videoStream);

            //receiving participant stream
            call.on('stream', (stream) => {
                let videoElement:HTMLMediaElement = document.querySelector('#video-stream');
                videoElement.srcObject = stream;
                
                //this.streamTime = this.stream.actual_duration ? this.stream.actual_duration : 0;

                this.streamTimeInterval = setInterval(() => {
                    this.streamTime += 1;
                    
                    if (this.streamTime % 10 === 0 && this.user.id === this.gig.booked_user_id){
                        this.saveStreamDuration();
                    }
                    
                },1000);
                
                      
            });
        });
        
        */
    };
    GigPage.prototype.getUserMedia = function () {
        var _this = this;
        navigator.getUserMedia({ audio: true, video: true }, function (stream) {
            var e_1, _a;
            _this.videoStream = stream;
            var videoElement = document.querySelector('#video-stream');
            videoElement.srcObject = stream;
            var participants = _this.stream.participants;
            try {
                for (var participants_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(participants), participants_1_1 = participants_1.next(); !participants_1_1.done; participants_1_1 = participants_1.next()) {
                    var participant = participants_1_1.value;
                    if (participant.user_id !== _this.user.id) {
                        _this.peer.call(participant.peer_id, _this.videoStream);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (participants_1_1 && !participants_1_1.done && (_a = participants_1.return)) _a.call(participants_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }, function (error) {
            alert(error);
            alert(JSON.stringify(error));
            alert("There was an error streaming your camera or microphone");
        });
    };
    GigPage.prototype.saveStreamDuration = function () {
        this.streamService.saveDuration(this.stream.id, this.streamTime).then(function () {
        });
    };
    GigPage.prototype.goFullscreen = function () {
        var videoElement = document.querySelector('#video-stream');
        if (videoElement.mozRequestFullScreen) {
            videoElement.mozRequestFullScreen();
        }
        else if (videoElement.webkitRequestFullScreen) {
            videoElement.webkitRequestFullScreen();
        }
    };
    GigPage.prototype.setupMessageBox = function () {
        var _this = this;
        setTimeout(function () {
            var screenHeight = window.screen.height;
            var box = document.getElementById("messages-box");
            box.style.height = (screenHeight - 270 - 140 - 44) + "px"; //stream, header, footer
            _this.content.scrollToBottom(300);
        }, 500);
    };
    GigPage.prototype.setupMessages = function () {
        var _this = this;
        this.messageService.getMessages(this.stream.id).then(function (data) {
            _this.messages = data;
            _this.calculateMessages();
            _this.content.scrollToBottom(300);
        });
        this.messageInterval = setInterval(function () {
            _this.messageService.getMessages(_this.stream.id).then(function (data) {
                var currentMessages = _this.messages.length;
                var newMessages = data.length;
                if (currentMessages !== newMessages) {
                    _this.messages = data;
                    _this.calculateMessages();
                    _this.content.scrollToBottom(300);
                }
            });
        }, 5000);
    };
    GigPage.prototype.sendMessage = function () {
        var localeOffset = -(new Date().getTimezoneOffset());
        var sentAt = moment__WEBPACK_IMPORTED_MODULE_10__().add(localeOffset, 'm').format("YYYY-MM-DD HH:mm:ss");
        var message = this.message;
        var messageObj = { id: 0, stream_id: this.stream.id, user_id: this.user.id, message: message, sent_at: sentAt };
        this.messages.push(messageObj);
        this.calculateMessages();
        this.content.scrollToBottom(300);
        this.message = "";
        this.messageService.createMessage(this.stream.id, message, sentAt).then(function (data) {
            messageObj.id = data.id;
        });
    };
    GigPage.prototype.stopShowParticipant = function () {
        if (this.streamTimeInterval) {
            clearInterval(this.streamTimeInterval);
        }
        if (this.messageInterval) {
            clearInterval(this.messageInterval);
        }
        if (this.videoStream) {
            this.videoStream.getTracks().forEach(function (stream) { return stream.stop(); });
        }
        if (this.stream.id) {
            this.streamService.deleteParticipant(this.stream.id).then(function () { });
        }
        this.gig.status = "completed";
        if (this.user.id === this.gig.booked_user_id) {
            var alert_1 = this.alertCtrl.create({
                header: 'Gig Completed',
                subHeader: 'The customer has stopped this show',
                message: 'The customer will now pay for the duration of the gig. You will be notified once payment has been made.',
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
        }
        else {
            var alert_2 = this.alertCtrl.create({
                header: 'Gig Completed',
                subHeader: 'The musician has stopped this show',
                message: 'Dismiss this message to see details of the stream and to make payment.',
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
        }
    };
    GigPage.prototype.calculateMessages = function () {
        for (var index in this.messages) {
            if (this.messages[index].status === "system") {
                //indicates the stream was ended by the other party, complete the stream
                this.stopShowParticipant();
                return;
            }
            //check message before is befrom same user
            //check message after is from same user
            var indexInt = parseInt(index);
            var message = this.messages[indexInt];
            var previousMessage = this.messages[indexInt - 1];
            var nextMessage = this.messages[indexInt + 1];
            var isBefore = false;
            var isAfter = false;
            if (previousMessage && message.userid === previousMessage.userid) {
                isAfter = true;
            }
            if (nextMessage && message.userid === nextMessage.userid) {
                isBefore = true;
            }
            message.isBefore = isBefore;
            message.isAfter = isAfter;
        }
    };
    GigPage.prototype.getMessageTime = function (date) {
        var localeOffset = (new Date().getTimezoneOffset());
        return moment__WEBPACK_IMPORTED_MODULE_10__(date).add(localeOffset, 'm').fromNow();
    };
    GigPage.prototype.canGoLive = function () {
        return moment__WEBPACK_IMPORTED_MODULE_10__().isSameOrAfter(moment__WEBPACK_IMPORTED_MODULE_10__(this.gig.date_required));
    };
    GigPage.prototype.formatDate = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_10__(date).format("DD/MM/YYYY [at] h:mma");
    };
    GigPage.prototype.formatStreamTime = function (totalSeconds) {
        var hours = Math.floor(totalSeconds / 3600);
        var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
        var seconds = (totalSeconds - (hours * 3600) - (minutes * 60));
        var stringT = (hours > 0 ? (hours < 10 ? "0" + hours : hours) + ':' : '') +
            (minutes < 10 ? "0" + minutes : minutes) + ':' +
            (seconds < 10 ? "0" + seconds : seconds);
        return stringT;
    };
    GigPage.prototype.setTimeToLive = function () {
        this.getDaysToLive();
        this.getHoursToLive();
        this.getMinutesToLive();
        this.getSecondsToLive();
        if (this.timeToLive.days <= 0 && this.timeToLive.hours <= 0 && this.timeToLive.minutes <= 0 && this.timeToLive.seconds <= 0) {
            if (this.timeToLiveInterval) {
                clearInterval(this.timeToLiveInterval);
            }
            this.timerComplete = true;
        }
    };
    GigPage.prototype.getDaysToLive = function () {
        this.timeToLive.days = moment__WEBPACK_IMPORTED_MODULE_10__(this.gig.date_required).diff(moment__WEBPACK_IMPORTED_MODULE_10__(), 'days');
        if (this.timeToLive.days < 0) {
            this.timeToLive.days = 0;
        }
    };
    GigPage.prototype.getHoursToLive = function () {
        var days = this.timeToLive.days;
        var hourDate = moment__WEBPACK_IMPORTED_MODULE_10__(this.gig.date_required);
        hourDate.subtract(days, "days");
        this.timeToLive.hours = hourDate.diff(moment__WEBPACK_IMPORTED_MODULE_10__(), 'hours');
        if (this.timeToLive.hours < 0) {
            this.timeToLive.hours = 0;
        }
    };
    GigPage.prototype.getMinutesToLive = function () {
        var days = this.timeToLive.days;
        var hours = this.timeToLive.hours;
        var minuteDate = moment__WEBPACK_IMPORTED_MODULE_10__(this.gig.date_required);
        minuteDate.subtract(days, "days").subtract(hours, "hours");
        this.timeToLive.minutes = minuteDate.diff(moment__WEBPACK_IMPORTED_MODULE_10__(), 'minutes');
        if (this.timeToLive.minutes < 0) {
            this.timeToLive.minutes = 0;
        }
    };
    GigPage.prototype.getSecondsToLive = function () {
        var days = this.timeToLive.days;
        var hours = this.timeToLive.hours;
        var minutes = this.timeToLive.minutes;
        var secondsDate = moment__WEBPACK_IMPORTED_MODULE_10__(this.gig.date_required);
        secondsDate.subtract(days, "days").subtract(hours, "hours").subtract(minutes, "minutes");
        this.timeToLive.seconds = secondsDate.diff(moment__WEBPACK_IMPORTED_MODULE_10__(), 'seconds');
        if (this.timeToLive.seconds < 0) {
            this.timeToLive.seconds = 0;
        }
    };
    GigPage.ctorParameters = function () { return [
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _services_gig_gig_service__WEBPACK_IMPORTED_MODULE_5__["GigService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _services_stream_stream_service__WEBPACK_IMPORTED_MODULE_6__["StreamService"] },
        { type: _services_message_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_11__["AndroidPermissions"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messagesbox')
    ], GigPage.prototype, "content", void 0);
    GigPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gig',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./gig.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gig/gig.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./gig.page.scss */ "./src/app/pages/gig/gig.page.scss")).default]
        })
    ], GigPage);
    return GigPage;
}());



/***/ }),

/***/ "./src/app/pages/pay/pay.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/pay/pay.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pay ion-col ion-icon {\n  font-size: 24px;\n  margin-top: 20px;\n}\n.pay .pay__card-details ion-col {\n  padding-left: 0px;\n  padding-right: 0px;\n  align-self: stretch;\n  align-self: flex-end;\n}\n.pay .pay__card-details ion-col.pay__card-details__cvc {\n  padding-left: 15px;\n}\n.pay .pay__error {\n  color: red;\n  margin-top: 15px;\n  text-align: center;\n}\n.pay-footer {\n  background-color: #121212;\n}\n.pay-footer:before {\n  display: none;\n}\n.pay-footer .pay-footer__button ion-spinner {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5L0Q6XFxUYXlsb3JcXERvY3VtZW50c1xcV2Vic2l0ZXNcXG11c2ljYnVkZHlcXGFwcC9zcmNcXGFwcFxccGFnZXNcXHBheVxccGF5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGF5L3BheS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNIWjtBRFdRO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNUWjtBRFdZO0VBQ0ksa0JBQUE7QUNUaEI7QURjSTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDWlI7QURvQkE7RUFDSSx5QkFBQTtBQ2pCSjtBRG1CSTtFQUNJLGFBQUE7QUNqQlI7QURzQlk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ3BCaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXkvcGF5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXl7XHJcbiAgICBcclxuICAgIGlvbi1jb2x7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLnBheV9fY2FyZC1kZXRhaWxze1xyXG4gICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDowcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICYucGF5X19jYXJkLWRldGFpbHNfX2N2Y3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucGF5X19lcnJvcntcclxuICAgICAgICBjb2xvcjpyZWQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG4ucGF5LWZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzEyMTIxMjtcclxuICAgIFxyXG4gICAgJjpiZWZvcmV7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgICAgLnBheS1mb290ZXJfX2J1dHRvbntcclxuXHJcbiAgICAgICAgICAgIGlvbi1zcGlubmVye1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4OyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbn0iLCIucGF5IGlvbi1jb2wgaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ucGF5IC5wYXlfX2NhcmQtZGV0YWlscyBpb24tY29sIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG4ucGF5IC5wYXlfX2NhcmQtZGV0YWlscyBpb24tY29sLnBheV9fY2FyZC1kZXRhaWxzX19jdmMge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG4ucGF5IC5wYXlfX2Vycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGF5LWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG59XG4ucGF5LWZvb3RlcjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnBheS1mb290ZXIgLnBheS1mb290ZXJfX2J1dHRvbiBpb24tc3Bpbm5lciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/pay/pay.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pay/pay.page.ts ***!
  \***************************************/
/*! exports provided: PayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPage", function() { return PayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);




var PayPage = /** @class */ (function () {
    function PayPage(modalController, loadingController, alertController, platform) {
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.platform = platform;
        this.card = {};
        this.maxDate = (new Date()).getFullYear() + 10;
    }
    PayPage.prototype.ngOnInit = function () {
    };
    PayPage.prototype.dismiss = function () {
        this.modalController.dismiss();
    };
    PayPage.prototype.makePayment = function () {
        var _this = this;
        this.loading = true;
        this.error = "";
        var card = {
            number: this.card.number,
            name: this.card.name,
            cvc: this.card.cvc,
            expMonth: moment__WEBPACK_IMPORTED_MODULE_3__(this.card.expiry).format("MM"),
            expYear: moment__WEBPACK_IMPORTED_MODULE_3__(this.card.expiry).format("YYYY")
        };
        cordova.plugins.stripe.createCardToken(card, function (data) {
            _this.loading = false;
            _this.modalController.dismiss(data);
        }, function (e) {
            _this.error = e;
            _this.loading = false;
        });
    };
    PayPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
    ]; };
    PayPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pay',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pay.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pay/pay.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pay.page.scss */ "./src/app/pages/pay/pay.page.scss")).default]
        })
    ], PayPage);
    return PayPage;
}());



/***/ }),

/***/ "./src/app/services/message/message.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/message/message.service.ts ***!
  \*****************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm5/ionic-storage.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var MessageService = /** @class */ (function () {
    function MessageService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    MessageService.prototype.getMessages = function (streamId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("mb_token").then(function (token) {
                if (token) {
                    _this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/messages/" + streamId + "?token=" + token).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    MessageService.prototype.createMessage = function (streamId, message, sentAt) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("mb_token").then(function (token) {
                if (token) {
                    _this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/messages?token=" + token, { stream_id: streamId, message: message, sent_at: sentAt }).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    MessageService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
    ]; };
    MessageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/stream/stream.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/stream/stream.service.ts ***!
  \***************************************************/
/*! exports provided: StreamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamService", function() { return StreamService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm5/ionic-storage.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var StreamService = /** @class */ (function () {
    function StreamService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    StreamService.prototype.getStream = function (gigId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("mb_token").then(function (token) {
                if (token) {
                    _this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/streams/" + gigId + "?token=" + token).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    StreamService.prototype.createStream = function (gigId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("mb_token").then(function (token) {
                if (token) {
                    _this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/streams?token=" + token, { gig_id: gigId }).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    StreamService.prototype.createParticipant = function (streamId, peerId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("mb_token").then(function (token) {
                if (token) {
                    _this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/streamparticipants?token=" + token, { stream_id: streamId, peer_id: peerId }).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    StreamService.prototype.deleteParticipant = function (streamId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("mb_token").then(function (token) {
                if (token) {
                    _this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/streamparticipants/" + streamId + "?token=" + token).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    StreamService.prototype.saveDuration = function (streamId, duration) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("mb_token").then(function (token) {
                if (token) {
                    _this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/streams/" + streamId + "?token=" + token, { actual_duration: duration }).subscribe(function (res) {
                        resolve(res);
                    }, function (e) {
                        reject(e);
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    StreamService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
    ]; };
    StreamService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], StreamService);
    return StreamService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-gig-gig-module.js.map