(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-portfolio-item/add-portfolio-item.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-portfolio-item/add-portfolio-item.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        \n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"dismiss()\">\n                <ion-icon name=\"close\"></ion-icon>\n            </ion-button>          \n        </ion-buttons>       \n\n        <ion-title>Add Item</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"add-portfolio-item\">\n    \n    \n    <ion-list class=\"add-portfolio-item__form\">\n\n        <ion-item class=\"edit-portfolio-item__form__avatar\">\n            <ion-icon name=\"image-outline\" *ngIf=\"!item.image\"></ion-icon>\n            <ion-avatar item-start *ngIf=\"item.image\">\n                <img [src]=\"item.image\">\n            </ion-avatar>\n            <ion-button color=\"primary\" (click)=\"changeImage()\">Select Photo</ion-button>\n        </ion-item> \n        \n        \n        <ion-item>\n            <ion-label position=\"floating\">Title</ion-label>\n            <ion-input clearInput type=\"text\" [(ngModel)]=\"item.title\"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label position=\"floating\">Video</ion-label>\n            <ion-input clearInput type=\"text\" [(ngModel)]=\"item.video\"></ion-input>\n        </ion-item>   \n        \n    </ion-list>      \n\n\n</ion-content>\n\n\n\n<ion-footer class=\"signup-footer\">\n\n    <ion-button color='primary' expand=\"full\" class=\"signup-footer__button\" [disabled]=\"!item.title || !item.video\" (click)=\"save()\">\n        Add\n    </ion-button>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/book/book.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/book/book.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        \n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"dismiss()\">\n                <ion-icon name=\"close\"></ion-icon>\n            </ion-button>          \n        </ion-buttons>       \n\n        <ion-title>Book Now</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"book\">\n    \n        <ion-item>\n            <ion-label position=\"floating\">When would you like to book?</ion-label>\n            <ion-datetime displayFormat=\"DD/MM/YYYY HH:mm\" [(ngModel)]=\"booking.date_required\"></ion-datetime>\n        </ion-item>     \n    \n \n        <ion-item>\n            <ion-label position=\"floating\">How many hours do you want to book?</ion-label>\n            <ion-input clearInput type=\"number\" [(ngModel)]=\"booking.duration\"></ion-input>\n        </ion-item>      \n        \n    \n    <p class=\"book__confirm\" *ngIf=\"booking.date_required && booking.duration\">You are booking {{profile.name}} for {{booking.duration}} hours on {{formatDate(booking.date_required)}}. The total cost will be <strong>${{profile.hourly_rate * booking.duration}}</strong>.</p>\n        \n        <p class=\"book__terms\" *ngIf=\"booking.date_required && booking.duration\">The amount charged is dependant on the total time spent in stream. If the duration is more or less, the cost may be adjusted. You will be informed of this cost before paying the final bill. By confirming this booking, you are obligated to this musician. A minimum hiring fee will apply regardless of total time spent in stream.</p>\n    \n    \n    \n</ion-content>\n\n\n<ion-footer class=\"book-footer\">\n\n    <ion-button color='primary' expand=\"full\" class=\"book-footer__button\" [disabled]=\"!booking.date_required || !booking.duration\" (click)=\"confirmBooking()\">\n        Confirm Booking\n    </ion-button>\n</ion-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-portfolio-item/edit-portfolio-item.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-portfolio-item/edit-portfolio-item.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        \n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"dismiss()\">\n                <ion-icon name=\"close\"></ion-icon>\n            </ion-button>          \n        </ion-buttons>       \n\n        <ion-title>Edit Item</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"edit-portfolio-item\">\n    \n    \n    <ion-list class=\"edit-portfolio-item__form\">\n\n        <ion-item class=\"edit-portfolio-item__form__avatar\">\n            <ion-icon name=\"image-outline\" *ngIf=\"!item.image\"></ion-icon>\n            <ion-avatar item-start *ngIf=\"item.image\">\n                <img [src]=\"item.image\">\n            </ion-avatar>\n            <ion-button color=\"primary\" (click)=\"changeImage()\">Select Photo</ion-button>\n        </ion-item> \n        \n        \n        <ion-item>\n            <ion-label position=\"floating\">Title</ion-label>\n            <ion-input clearInput type=\"text\" [(ngModel)]=\"item.title\"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label position=\"floating\">Video</ion-label>\n            <ion-input clearInput type=\"text\" [(ngModel)]=\"item.video\"></ion-input>\n        </ion-item>   \n        \n    </ion-list>      \n\n\n</ion-content>\n\n\n\n<ion-footer class=\"signup-footer\">\n\n    <ion-button color='primary' expand=\"full\" class=\"signup-footer__button\" [disabled]=\"!item.title || !item.video\" (click)=\"save()\">\n        Update\n    </ion-button>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        \n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"dismiss()\">\n                <ion-icon name=\"close\"></ion-icon>\n            </ion-button>          \n        </ion-buttons>       \n\n        <ion-title>Edit Profile</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"edit-profile\">\n    \n    \n    <ion-list class=\"edit-profile__form\">\n\n        <ion-item class=\"edit-profile__form__avatar\">\n            <ion-icon name=\"person\" *ngIf=\"!profile.avatar\"></ion-icon>\n            <ion-avatar item-start *ngIf=\"profile.avatar\">\n                <img [src]=\"profile.avatar\">\n            </ion-avatar>\n            <ion-button color=\"primary\" (click)=\"changeImage()\">Select Photo</ion-button>\n        </ion-item> \n        \n        \n        <ion-item>\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input clearInput type=\"email\" [(ngModel)]=\"profile.email\"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label position=\"floating\">Name</ion-label>\n            <ion-input clearInput type=\"text\" [(ngModel)]=\"profile.name\"></ion-input>\n        </ion-item>   \n        \n        \n        <ion-item>\n            <ion-label position=\"floating\">Profile Type</ion-label>\n            <ion-select [(ngModel)]=\"profile.type\">\n                <ion-select-option value=\"customer\">Customer</ion-select-option>\n                <ion-select-option value=\"musician\">Musician</ion-select-option>\n            </ion-select>\n        </ion-item>      \n        \n        \n        \n        <ion-item *ngIf=\"profile.type === 'musician'\">\n            <ion-label position=\"floating\">Categories</ion-label>\n            <ion-select multiple=\"true\" [(ngModel)]=\"profile.categories\">\n                <ion-select-option *ngFor=\"let category of categories\" [value]=\"category.id\">{{category.name}}</ion-select-option>\n            </ion-select>\n        </ion-item>         \n        \n        \n        <ion-item *ngIf=\"profile.type === 'musician'\">\n            <ion-label position=\"floating\">Instruments</ion-label>\n            <ion-select multiple=\"true\" [(ngModel)]=\"profile.instruments\">\n                <ion-select-option *ngFor=\"let instrument of instruments\" [value]=\"instrument\">{{instrument}}</ion-select-option>\n            </ion-select>\n        </ion-item>         \n                \n        \n        \n        <ion-item *ngIf=\"profile.type === 'musician'\">\n            <ion-label position=\"floating\">Hourly Rate</ion-label>\n            <ion-input clearInput type=\"text\" [(ngModel)]=\"profile.hourly_rate\"></ion-input>\n        </ion-item>          \n        \n        <ion-item>\n            <ion-label position=\"floating\">Phone</ion-label>\n            <ion-input clearInput type=\"text\" [(ngModel)]=\"profile.phone\"></ion-input>\n        </ion-item>  \n        \n        \n        <ion-item>\n            <ion-label position=\"floating\">Gender</ion-label>\n            <ion-select [(ngModel)]=\"profile.gender\">\n                <ion-select-option value=\"Male\">Male</ion-select-option>\n                <ion-select-option value=\"Female\">Female</ion-select-option>\n                <ion-select-option value=\"Other\">Other</ion-select-option>\n            </ion-select>\n        </ion-item>  \n        \n        <ion-item>\n            <ion-label position=\"floating\">Date Of Birth</ion-label>\n            <ion-datetime displayFormat=\"DD/MM/YYYY\" [(ngModel)]=\"profile.dob\"></ion-datetime>\n        </ion-item>         \n         \n \n        <ion-item>\n            <ion-label position=\"floating\">Location</ion-label>\n            <ion-input clearInput type=\"text\" [(ngModel)]=\"profile.location\"></ion-input>\n        </ion-item> \n        \n        \n         <ion-item>\n            <ion-label position=\"floating\">About You</ion-label>\n            <ion-textarea clearInput [(ngModel)]=\"profile.biography\"></ion-textarea>\n        </ion-item>         \n     \n        <ion-item>\n            <ion-label position=\"floating\">Intro Video</ion-label>\n            <ion-input clearInput type=\"text\" [(ngModel)]=\"profile.intro_video\"></ion-input>\n        </ion-item>           \n        \n        \n        <p class=\"signup__form__error\" *ngIf=\"profile.error\">{{profile.error}}</p>\n\n    </ion-list>      \n\n\n</ion-content>\n\n\n\n<ion-footer class=\"signup-footer\">\n\n    <ion-button color='primary' expand=\"full\" class=\"signup-footer__button\" [disabled]=\"profile.loading || !profile.email\" (click)=\"save()\">\n        Save\n    </ion-button>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\" *ngIf=\"!profile.standalone\">\n            <ion-button>\n                <ion-back-button defaultHref=\"/tabs/jobs\"></ion-back-button>\n            </ion-button>            \n        </ion-buttons>   \n        \n        <ion-title></ion-title>\n        \n        <ion-buttons slot=\"end\" *ngIf=\"profile.standalone && !loading\">           \n            \n            <ion-button (click)=\"editProfile()\">\n                Edit Profile\n            </ion-button>     \n            \n            <ion-button [routerLink]=\"['/settings']\" routerDirection=\"forward\">\n                Settings\n            </ion-button>              \n            \n            \n        </ion-buttons>            \n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"profile\">\n\n    <div class=\"profile__header\">\n        \n        <div class=\"profile__header__avatar\" [ngStyle]=\"{'background-image': 'url(' + profile.avatar + ')'}\">\n            \n        </div>\n        \n        <h1>{{profile.name}}</h1>\n        <div class=\"profile__header__details\" *ngIf=\"profile.type === 'musician'\">\n            <div class=\"profile__header__details__rating ratings\" *ngIf=\"profile.rating\" [routerLink]=\"['/reviews/' + profile.user_id]\" routerDirection=\"forward\">\n                <span class=\"ratings__star-rating\">\n                    <ion-icon name=\"star\" *ngFor=\"let star of rating\"></ion-icon>\n                </span> {{profile.reviews.length}} rating<span *ngIf=\"profile.reviews.length !== 1\">s</span>\n            </div>\n            \n            \n        </div>\n        \n        \n        <div class=\"profile__header__checks\" *ngIf=\"profile.type === 'musician'\">\n            \n            <div class=\"profile__header__checks__check\" [ngClass]=\"{'profile__header__checks__check--enabled' : profile.status === 'verified'}\">\n                <ion-icon name=\"checkmark\"></ion-icon>\n                Verified\n            </div>\n            <div class=\"profile__header__checks__check profile__header__checks__check--enabled\">\n                <ion-icon name=\"musical-notes-outline\"></ion-icon>\n                {{profile.instruments ? profile.instruments.length : 0}} Instruments\n            </div>    \n            <div class=\"profile__header__checks__check profile__header__checks__check--enabled\">\n                <ion-icon name=\"cash-outline\"></ion-icon>\n                ${{profile.hourly_rate}}/hour\n            </div>          \n        </div>\n\n        <div class=\"profile__header__intro\" *ngIf=\"profile.type === 'musician'\">\n            <ion-button fill=\"outline\" color=\"dark\" size=\"small\"  *ngIf=\"profile.intro_video\" (click)=\"viewVideo(profile.intro_video)\">Watch Intro Video</ion-button>\n        </div>\n        \n    </div>\n    \n    \n    <div class=\"profile__body\">\n        \n        <div class=\"portfolio__body__nav\"  *ngIf=\"profile.type === 'musician'\">\n            \n            <a class=\"portfolio__body__nav__item\" [ngClass]=\"{'portfolio__body__nav__item--active' : activeTab === 'profile'}\" (click)=\"activeTab = 'profile'\">Profile</a>\n            <a class=\"portfolio__body__nav__item\" [ngClass]=\"{'portfolio__body__nav__item--active' : activeTab === 'portfolio'}\" (click)=\"activeTab = 'portfolio'\">Portfolio</a>\n            \n        </div>\n        \n        <ion-list *ngIf=\"activeTab === 'profile'\">\n            <ion-item *ngIf=\"profile.instruments && profile.type === 'musician'\">\n                <ion-label>\n                    <ion-text color=\"primary\">\n                        <h3>Instruments</h3>\n                    </ion-text>\n                    <p>{{profile.instruments_played}}</p>\n                </ion-label>\n                <ion-button fill=\"outline\" slot=\"end\"  *ngIf=\"profile.standalone\" (click)=\"editProfile()\">Change</ion-button>\n            </ion-item>              \n            <ion-item *ngIf=\"profile.gender\">\n                <ion-label>\n                    <ion-text color=\"primary\">\n                        <h3>Gender</h3>\n                    </ion-text>\n                    <p>{{profile.gender}}</p>\n                </ion-label>\n                <ion-button fill=\"outline\" slot=\"end\"  *ngIf=\"profile.standalone\" (click)=\"editProfile()\">Change</ion-button>\n            </ion-item>  \n            <ion-item *ngIf=\"profile.dob\">\n                <ion-label>\n                    <ion-text color=\"primary\">\n                        <h3>Date of birth</h3>\n                    </ion-text>\n                    <p>{{formatDate(profile.dob)}}</p>\n                </ion-label>\n                <ion-button fill=\"outline\" slot=\"end\" *ngIf=\"profile.standalone\" (click)=\"editProfile()\">Change</ion-button>\n            </ion-item>   \n             <ion-item *ngIf=\"profile.hourly_rate && profile.type === 'musician'\">\n                <ion-label>\n                    <ion-text color=\"primary\">\n                        <h3>Hourly Rate</h3>\n                    </ion-text>\n                    <p>${{profile.hourly_rate}}/hour</p>\n                </ion-label>\n                <ion-button fill=\"outline\" slot=\"end\"  *ngIf=\"profile.standalone\" (click)=\"editProfile()\">Change</ion-button>\n            </ion-item>            \n            <ion-item *ngIf=\"profile.location\">\n                <ion-label>\n                    <ion-text color=\"primary\">\n                        <h3>Location</h3>\n                    </ion-text>\n                    <p>{{profile.location}}</p>\n                </ion-label>\n                <ion-button fill=\"outline\" slot=\"end\" *ngIf=\"profile.standalone\" (click)=\"editProfile()\">Change</ion-button>\n            </ion-item>  \n            <ion-item *ngIf=\"profile.biography\" class=\"long-text\">\n                <ion-label>\n                    <ion-text color=\"primary\">\n                        <h3>Biography</h3>\n                    </ion-text>\n                    <p>{{profile.biography}}</p>\n                </ion-label>\n                <ion-button fill=\"outline\" slot=\"end\" *ngIf=\"profile.standalone\" (click)=\"editProfile()\">Change</ion-button>\n            </ion-item>             \n        </ion-list>\n        \n        <div *ngIf=\"activeTab === 'portfolio'\" class='profile__body__portfolio'>\n            <ion-card  *ngFor=\"let item of profile.portfolio;let i = index\" class=\"profile__body__portfolio__card\" [ngStyle]=\"{'background-image': 'url(' + item.image + ')'}\">\n                <ion-card-content>\n                    <h1>{{item.title}}</h1>\n                    <ion-button fill=\"outline\" size=\"small\" color=\"dark\" *ngIf=\"profile.standalone\" (click)=\"editPortfolioItem(item, i)\">Edit Item</ion-button>\n                    <ion-button fill=\"outline\" size=\"small\" color=\"dark\" (click)=\"viewVideo(item.video)\">View Video</ion-button>\n                </ion-card-content>\n            </ion-card>        \n            \n            \n            <ion-button fill=\"outline\" size=\"small\" color=\"dark\" class=\"profile__body__portfolio__add\" *ngIf=\"profile.standalone\" (click)=\"addPortfolioItem()\">Add Item</ion-button>\n            \n        </div>        \n    </div>\n    \n    \n    \n    \n</ion-content>\n\n\n\n\n\n<ion-footer class=\"profile-footer\" *ngIf=\"!profile.standalone && !loading\">\n    \n    <ion-button color='primary' expand=\"full\" class=\"profile-footer__button\" (click)=\"bookUser()\">\n        Book Now\n    </ion-button>  \n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/add-portfolio-item/add-portfolio-item.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/add-portfolio-item/add-portfolio-item.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add-portfolio-item .add-portfolio-item__form__avatar {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.add-portfolio-item .add-portfolio-item__form__avatar ion-icon {\n  width: 20px;\n  height: 20px;\n  padding: 10px;\n  border-radius: 20px;\n  background-color: black;\n  color: white;\n  margin-bottom: 5px;\n}\n.add-portfolio-item .add-portfolio-item__form__avatar ion-avatar {\n  margin-bottom: 5px;\n}\n.add-portfolio-item .add-portfolio-item__form__avatar ion-button {\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLXBvcnRmb2xpby1pdGVtL0Q6XFxUYXlsb3JcXERvY3VtZW50c1xcV2Vic2l0ZXNcXG11c2ljYnVkZHlcXGFwcC9zcmNcXGFwcFxccGFnZXNcXGFkZC1wb3J0Zm9saW8taXRlbVxcYWRkLXBvcnRmb2xpby1pdGVtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWRkLXBvcnRmb2xpby1pdGVtL2FkZC1wb3J0Zm9saW8taXRlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNKUjtBREtRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0haO0FETVE7RUFDSSxrQkFBQTtBQ0paO0FET1E7RUFDSSxpQkFBQTtBQ0xaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRkLXBvcnRmb2xpby1pdGVtL2FkZC1wb3J0Zm9saW8taXRlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5hZGQtcG9ydGZvbGlvLWl0ZW17XHJcbiAgICBcclxuICAgIFxyXG4gICAgLmFkZC1wb3J0Zm9saW8taXRlbV9fZm9ybV9fYXZhdGFye1xyXG4gICAgICAgIG1hcmdpbi10b3A6NXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206NXB4O1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlOyAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWF2YXRhcntcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG59IiwiLmFkZC1wb3J0Zm9saW8taXRlbSAuYWRkLXBvcnRmb2xpby1pdGVtX19mb3JtX19hdmF0YXIge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5hZGQtcG9ydGZvbGlvLWl0ZW0gLmFkZC1wb3J0Zm9saW8taXRlbV9fZm9ybV9fYXZhdGFyIGlvbi1pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmFkZC1wb3J0Zm9saW8taXRlbSAuYWRkLXBvcnRmb2xpby1pdGVtX19mb3JtX19hdmF0YXIgaW9uLWF2YXRhciB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5hZGQtcG9ydGZvbGlvLWl0ZW0gLmFkZC1wb3J0Zm9saW8taXRlbV9fZm9ybV9fYXZhdGFyIGlvbi1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/add-portfolio-item/add-portfolio-item.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/add-portfolio-item/add-portfolio-item.page.ts ***!
  \*********************************************************************/
/*! exports provided: AddPortfolioItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPortfolioItemPage", function() { return AddPortfolioItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx/ */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");







var AddPortfolioItemPage = /** @class */ (function () {
    function AddPortfolioItemPage(router, transfer, camera, loadingController, alertController, modalController) {
        this.router = router;
        this.transfer = transfer;
        this.camera = camera;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.modalController = modalController;
        this.item = {};
    }
    AddPortfolioItemPage.prototype.ngOnInit = function () {
    };
    AddPortfolioItemPage.prototype.dismiss = function () {
        this.modalController.dismiss();
    };
    AddPortfolioItemPage.prototype.changeImage = function () {
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
            fileTransfer.upload(image, encodeURI(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/upload"), options).then(function (data) {
                if (data.response) {
                    var response = JSON.parse(data.response);
                    _this.item.image = response.file;
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
    AddPortfolioItemPage.prototype.save = function () {
        this.modalController.dismiss({ item: this.item });
    };
    AddPortfolioItemPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_native_file_transfer_ngx___WEBPACK_IMPORTED_MODULE_5__["FileTransfer"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
    ]; };
    AddPortfolioItemPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-portfolio-item',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-portfolio-item.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-portfolio-item/add-portfolio-item.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-portfolio-item.page.scss */ "./src/app/pages/add-portfolio-item/add-portfolio-item.page.scss")).default]
        })
    ], AddPortfolioItemPage);
    return AddPortfolioItemPage;
}());



/***/ }),

/***/ "./src/app/pages/book/book.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/book/book.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".book .book__confirm {\n  text-align: Center;\n  padding-left: 30px;\n  padding-right: 30px;\n  margin-top: 40px;\n}\n.book .book__terms {\n  font-size: 12px;\n  text-align: center;\n  padding-left: 30px;\n  padding-right: 30px;\n  opacity: 0.5;\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm9vay9EOlxcVGF5bG9yXFxEb2N1bWVudHNcXFdlYnNpdGVzXFxtdXNpY2J1ZGR5XFxhcHAvc3JjXFxhcHBcXHBhZ2VzXFxib29rXFxib29rLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYm9vay9ib29rLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDRlI7QURLSTtFQUNJLGVBQUE7RUFDSixrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jvb2svYm9vay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9va3tcclxuICAgIFxyXG4gICAgXHJcbiAgICAuYm9va19fY29uZmlybXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBDZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJvb2tfX3Rlcm1ze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn0iLCIuYm9vayAuYm9va19fY29uZmlybSB7XG4gIHRleHQtYWxpZ246IENlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLmJvb2sgLmJvb2tfX3Rlcm1zIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgb3BhY2l0eTogMC41O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/book/book.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/book/book.page.ts ***!
  \*****************************************/
/*! exports provided: BookPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPage", function() { return BookPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);




var BookPage = /** @class */ (function () {
    function BookPage(navParams, modalController) {
        this.navParams = navParams;
        this.modalController = modalController;
        var profile = this.navParams.get('profile');
        this.profile = Object.assign({}, profile);
        this.booking = { booked_user_id: this.profile.user_id };
    }
    BookPage.prototype.ngOnInit = function () {
    };
    BookPage.prototype.confirmBooking = function () {
        if (this.booking.date_required) {
            var localeOffset = -(new Date().getTimezoneOffset());
            this.booking.date_required = moment__WEBPACK_IMPORTED_MODULE_3__(this.booking.date_required).add(localeOffset, 'm').format("YYYY-MM-DD HH:mm:ss");
        }
        this.modalController.dismiss({ booking: this.booking });
    };
    BookPage.prototype.dismiss = function () {
        this.modalController.dismiss();
    };
    BookPage.prototype.formatDate = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_3__(date).format("DD/MM/YYYY hh:mm a");
    };
    BookPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    BookPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-book',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./book.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/book/book.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./book.page.scss */ "./src/app/pages/book/book.page.scss")).default]
        })
    ], BookPage);
    return BookPage;
}());



/***/ }),

/***/ "./src/app/pages/edit-portfolio-item/edit-portfolio-item.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/edit-portfolio-item/edit-portfolio-item.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edit-portfolio-item .edit-portfolio-item__form__avatar {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.edit-portfolio-item .edit-portfolio-item__form__avatar ion-icon {\n  width: 20px;\n  height: 20px;\n  padding: 10px;\n  border-radius: 20px;\n  background-color: black;\n  color: white;\n  margin-bottom: 5px;\n}\n.edit-portfolio-item .edit-portfolio-item__form__avatar ion-avatar {\n  margin-bottom: 5px;\n}\n.edit-portfolio-item .edit-portfolio-item__form__avatar ion-button {\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC1wb3J0Zm9saW8taXRlbS9EOlxcVGF5bG9yXFxEb2N1bWVudHNcXFdlYnNpdGVzXFxtdXNpY2J1ZGR5XFxhcHAvc3JjXFxhcHBcXHBhZ2VzXFxlZGl0LXBvcnRmb2xpby1pdGVtXFxlZGl0LXBvcnRmb2xpby1pdGVtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZWRpdC1wb3J0Zm9saW8taXRlbS9lZGl0LXBvcnRmb2xpby1pdGVtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0pSO0FES1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSFo7QURNUTtFQUNJLGtCQUFBO0FDSlo7QURPUTtFQUNJLGlCQUFBO0FDTFoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lZGl0LXBvcnRmb2xpby1pdGVtL2VkaXQtcG9ydGZvbGlvLWl0ZW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uZWRpdC1wb3J0Zm9saW8taXRlbXtcclxuICAgIFxyXG4gICAgXHJcbiAgICAuZWRpdC1wb3J0Zm9saW8taXRlbV9fZm9ybV9fYXZhdGFye1xyXG4gICAgICAgIG1hcmdpbi10b3A6NXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206NXB4O1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlOyAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWF2YXRhcntcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG59IiwiLmVkaXQtcG9ydGZvbGlvLWl0ZW0gLmVkaXQtcG9ydGZvbGlvLWl0ZW1fX2Zvcm1fX2F2YXRhciB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmVkaXQtcG9ydGZvbGlvLWl0ZW0gLmVkaXQtcG9ydGZvbGlvLWl0ZW1fX2Zvcm1fX2F2YXRhciBpb24taWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5lZGl0LXBvcnRmb2xpby1pdGVtIC5lZGl0LXBvcnRmb2xpby1pdGVtX19mb3JtX19hdmF0YXIgaW9uLWF2YXRhciB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5lZGl0LXBvcnRmb2xpby1pdGVtIC5lZGl0LXBvcnRmb2xpby1pdGVtX19mb3JtX19hdmF0YXIgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/edit-portfolio-item/edit-portfolio-item.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/edit-portfolio-item/edit-portfolio-item.page.ts ***!
  \***********************************************************************/
/*! exports provided: EditPortfolioItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPortfolioItemPage", function() { return EditPortfolioItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx/ */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");







var EditPortfolioItemPage = /** @class */ (function () {
    function EditPortfolioItemPage(router, transfer, camera, loadingController, alertController, modalController, navParams) {
        this.router = router;
        this.transfer = transfer;
        this.camera = camera;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.modalController = modalController;
        this.navParams = navParams;
        var item = this.navParams.get('item');
        this.item = Object.assign({}, item);
    }
    EditPortfolioItemPage.prototype.ngOnInit = function () {
    };
    EditPortfolioItemPage.prototype.dismiss = function () {
        this.modalController.dismiss();
    };
    EditPortfolioItemPage.prototype.changeImage = function () {
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
            fileTransfer.upload(image, encodeURI(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/upload"), options).then(function (data) {
                if (data.response) {
                    var response = JSON.parse(data.response);
                    _this.item.image = response.file;
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
    EditPortfolioItemPage.prototype.save = function () {
        this.modalController.dismiss({ item: this.item });
    };
    EditPortfolioItemPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_native_file_transfer_ngx___WEBPACK_IMPORTED_MODULE_5__["FileTransfer"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] }
    ]; };
    EditPortfolioItemPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-portfolio-item',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-portfolio-item.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-portfolio-item/edit-portfolio-item.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-portfolio-item.page.scss */ "./src/app/pages/edit-portfolio-item/edit-portfolio-item.page.scss")).default]
        })
    ], EditPortfolioItemPage);
    return EditPortfolioItemPage;
}());



/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edit-profile .edit-profile__form__avatar {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.edit-profile .edit-profile__form__avatar ion-icon {\n  width: 20px;\n  height: 20px;\n  padding: 10px;\n  border-radius: 20px;\n  background-color: black;\n  color: white;\n  margin-bottom: 5px;\n}\n.edit-profile .edit-profile__form__avatar ion-avatar {\n  margin-bottom: 5px;\n}\n.edit-profile .edit-profile__form__avatar ion-button {\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL0Q6XFxUYXlsb3JcXERvY3VtZW50c1xcV2Vic2l0ZXNcXG11c2ljYnVkZHlcXGFwcC9zcmNcXGFwcFxccGFnZXNcXGVkaXQtcHJvZmlsZVxcZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNKUjtBREtRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0haO0FETVE7RUFDSSxrQkFBQTtBQ0paO0FET1E7RUFDSSxpQkFBQTtBQ0xaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5lZGl0LXByb2ZpbGV7XHJcbiAgICBcclxuICAgIFxyXG4gICAgLmVkaXQtcHJvZmlsZV9fZm9ybV9fYXZhdGFye1xyXG4gICAgICAgIG1hcmdpbi10b3A6NXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206NXB4O1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlOyAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWF2YXRhcntcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG59IiwiLmVkaXQtcHJvZmlsZSAuZWRpdC1wcm9maWxlX19mb3JtX19hdmF0YXIge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5lZGl0LXByb2ZpbGUgLmVkaXQtcHJvZmlsZV9fZm9ybV9fYXZhdGFyIGlvbi1pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmVkaXQtcHJvZmlsZSAuZWRpdC1wcm9maWxlX19mb3JtX19hdmF0YXIgaW9uLWF2YXRhciB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5lZGl0LXByb2ZpbGUgLmVkaXQtcHJvZmlsZV9fZm9ybV9fYXZhdGFyIGlvbi1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.ts ***!
  \*********************************************************/
/*! exports provided: EditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePage", function() { return EditProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx/ */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _services_city_city_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/city/city.service */ "./src/app/services/city/city.service.ts");
/* harmony import */ var _services_musician_musician_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/musician/musician.service */ "./src/app/services/musician/musician.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(router, transfer, camera, loadingController, alertController, modalController, navController, authenticationService, navParams, cityService, musicianService, ngZone) {
        var _this = this;
        this.router = router;
        this.transfer = transfer;
        this.camera = camera;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.modalController = modalController;
        this.navController = navController;
        this.authenticationService = authenticationService;
        this.navParams = navParams;
        this.cityService = cityService;
        this.musicianService = musicianService;
        this.ngZone = ngZone;
        var profile = this.navParams.get('profile');
        this.profile = Object.assign({}, profile);
        this.profile.instruments = this.profile.instruments_played ? this.profile.instruments_played.split(", ") : [];
        console.log(this.profile);
        this.profile.categories = [];
        this.categories = [];
        this.musicianService.getCategories("").then(function (data) {
            var e_1, _a;
            _this.categories = data;
            var categories = [];
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.profile.profile_categories), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var category = _c.value;
                    categories.push(category.category_id);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.profile.categories = categories;
        });
        this.instruments = ["Vocals", "Guitar", "Bass", "Piano", "Banjo", "Cello", "Clarinet", "Drums", "Flute", "Trumpet", "Harmonica", "Organ", "Recorder", "Saxophone", "Trombone", "Ukelele", "Tuba", "Viola", "Violin", "Xylophone"].sort();
    }
    EditProfilePage.prototype.ngOnInit = function () {
    };
    EditProfilePage.prototype.dismiss = function () {
        this.modalController.dismiss();
    };
    EditProfilePage.prototype.changeImage = function () {
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
            fileTransfer.upload(image, encodeURI(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/upload"), options).then(function (data) {
                if (data.response) {
                    var response = JSON.parse(data.response);
                    _this.profile.avatar = response.file;
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
    EditProfilePage.prototype.save = function () {
        var e_2, _a;
        if (this.profile.dob) {
            this.profile.dob = moment__WEBPACK_IMPORTED_MODULE_10__(this.profile.dob).format("YYYY-MM-DD HH:mm:ss");
        }
        console.log(this.profile.instruments_played);
        console.log(this.profile.instruments);
        if (this.profile.instruments && this.profile.instruments.length) {
            console.log(this.profile);
            this.profile.instruments_played = this.profile.instruments.join(", ");
        }
        this.profile.profile_categories = [];
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.profile.categories), _c = _b.next(); !_c.done; _c = _b.next()) {
                var category = _c.value;
                this.profile.profile_categories.push({ user_id: this.profile.user_id, category_id: category });
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.modalController.dismiss({ profile: this.profile });
    };
    EditProfilePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_native_file_transfer_ngx___WEBPACK_IMPORTED_MODULE_5__["FileTransfer"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
        { type: _services_city_city_service__WEBPACK_IMPORTED_MODULE_8__["CityService"] },
        { type: _services_musician_musician_service__WEBPACK_IMPORTED_MODULE_9__["MusicianService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    EditProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-profile',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-profile.page.scss */ "./src/app/pages/edit-profile/edit-profile.page.scss")).default]
        })
    ], EditProfilePage);
    return EditProfilePage;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");




var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
var ProfilePageRoutingModule = /** @class */ (function () {
    function ProfilePageRoutingModule() {
    }
    ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProfilePageRoutingModule);
    return ProfilePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");
/* harmony import */ var _edit_profile_edit_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../edit-profile/edit-profile.page */ "./src/app/pages/edit-profile/edit-profile.page.ts");
/* harmony import */ var _book_book_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../book/book.page */ "./src/app/pages/book/book.page.ts");
/* harmony import */ var _add_portfolio_item_add_portfolio_item_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../add-portfolio-item/add-portfolio-item.page */ "./src/app/pages/add-portfolio-item/add-portfolio-item.page.ts");
/* harmony import */ var _edit_portfolio_item_edit_portfolio_item_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../edit-portfolio-item/edit-portfolio-item.page */ "./src/app/pages/edit-portfolio-item/edit-portfolio-item.page.ts");











var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"], _edit_profile_edit_profile_page__WEBPACK_IMPORTED_MODULE_7__["EditProfilePage"], _book_book_page__WEBPACK_IMPORTED_MODULE_8__["BookPage"], _add_portfolio_item_add_portfolio_item_page__WEBPACK_IMPORTED_MODULE_9__["AddPortfolioItemPage"], _edit_portfolio_item_edit_portfolio_item_page__WEBPACK_IMPORTED_MODULE_10__["EditPortfolioItemPage"]],
            entryComponents: [_edit_profile_edit_profile_page__WEBPACK_IMPORTED_MODULE_7__["EditProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile {\n  --background:black;\n}\n.profile .profile__header {\n  background-color: #2497e8;\n  padding-bottom: 70px;\n  color: white;\n  text-align: center;\n}\n.profile .profile__header .profile__header__avatar {\n  width: 150px;\n  height: 150px;\n  border-radius: 150px;\n  background-color: black;\n  margin: 0 auto;\n  background-size: cover;\n  background-position: center center;\n}\n.profile .profile__header h1 {\n  letter-spacing: 1px;\n}\n.profile .profile__header .profile__header__checks .profile__header__checks__check {\n  display: inline-block;\n  width: 33.33%;\n  font-size: 12px;\n  margin-top: 20px;\n  opacity: 0.5;\n}\n.profile .profile__header .profile__header__checks .profile__header__checks__check.profile__header__checks__check--enabled {\n  opacity: 1;\n}\n.profile .profile__header .profile__header__checks .profile__header__checks__check ion-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  border: 1px solid white;\n  border-radius: 17px;\n  display: block;\n  padding: 5px;\n  margin: 0 auto;\n  margin-bottom: 5px;\n}\n.profile .profile__header .profile__header__check-info {\n  text-decoration: underline;\n  font-size: 12px;\n  margin-top: 20px;\n}\n.profile .profile__header .profile__header__check-info ion-icon {\n  font-size: 20px;\n  vertical-align: top;\n}\n.profile .profile__header .ratings:focus {\n  outline: none;\n}\n.profile .profile__header .profile__header__intro {\n  margin-top: 25px;\n}\n.profile .profile__body {\n  position: relative;\n  top: -30px;\n  background-color: black;\n  color: White;\n  border-top-right-radius: 30px;\n  border-top-left-radius: 30px;\n  overflow: hidden;\n  padding: 10px 15px;\n  box-shadow: 0px -3px 1px -2px rgba(0, 0, 0, 0.01), 0px -3px 2px 0 rgba(0, 0, 0, 0), 1px -3px 5px 0 rgba(0, 0, 0, 0.05);\n}\n.profile .profile__body .portfolio__body__nav {\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.profile .profile__body .portfolio__body__nav .portfolio__body__nav__item {\n  color: white;\n  text-transform: uppercase;\n  font-size: 13px;\n  margin: 0px 10px;\n  display: inline-block;\n  letter-spacing: 2px;\n  opacity: 0.8;\n}\n.profile .profile__body .portfolio__body__nav .portfolio__body__nav__item.portfolio__body__nav__item--active {\n  font-weight: bold;\n  opacity: 1;\n}\n.profile .profile__body ion-list {\n  background: black;\n}\n.profile .profile__body ion-item {\n  --background: black;\n}\n.profile ion-item .long-text {\n  white-space: pre-wrap;\n}\n.profile .profile__body__portfolio {\n  margin-top: 40px;\n  text-align: center;\n}\n.profile .profile__body__portfolio .profile__body__portfolio__card {\n  background-color: #000000;\n  color: white;\n  padding: 10px 10px;\n  width: 100%;\n  max-width: 280px;\n  text-align: left;\n  margin: 0 auto;\n  background-size: cover;\n  background-position: center center;\n  position: relative;\n  background-repeat: no-repeat;\n  margin-top: 20px;\n}\n.profile .profile__body__portfolio .profile__body__portfolio__card:before {\n  content: \"\";\n  background-color: rgba(0, 0, 0, 0.4);\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n}\n.profile .profile__body__portfolio .profile__body__portfolio__card h1 {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 24px;\n  letter-spacing: 2px;\n  margin-bottom: 15px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.profile .profile__body__portfolio .profile__body__portfolio__add {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9EOlxcVGF5bG9yXFxEb2N1bWVudHNcXFdlYnNpdGVzXFxtdXNpY2J1ZGR5XFxhcHAvc3JjXFxhcHBcXHBhZ2VzXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7QURBSTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNFWjtBRERRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNJLHNCQUFBO0VBQ1osa0NBQUE7QUNHSjtBREFRO0VBQ0ksbUJBQUE7QUNFWjtBREdZO0VBQ1EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0RwQjtBREdvQjtFQUNJLFVBQUE7QUNEeEI7QURJb0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNGeEI7QURRUTtFQUNRLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTmhCO0FEUWdCO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDTnBCO0FEV1E7RUFDSSxhQUFBO0FDVFo7QURhUTtFQUNJLGdCQUFBO0FDWFo7QURnQkk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNIQUFBO0FDZFI7QURpQlE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNmWjtBRGlCWTtFQUNBLFlBQUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDZmhCO0FEaUJnQjtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQ2ZwQjtBRHNCUTtFQUNJLGlCQUFBO0FDcEJaO0FEdUJRO0VBQ0ksbUJBQUE7QUNyQlo7QUQwQkk7RUFDSSxxQkFBQTtBQ3hCUjtBRDZCSTtFQUNJLGdCQUFBO0VBQ0ksa0JBQUE7QUMzQlo7QUQ0QlE7RUFDSSx5QkFBQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUMxQmhCO0FENEJvQjtFQUNJLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNELFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQzFCdkI7QUQ4QmdCO0VBQ0ksZUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDNUJ4QjtBRGtDUTtFQUNJLGdCQUFBO0FDaENaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxle1xyXG4gICAgLS1iYWNrZ3JvdW5kOmJsYWNrO1xyXG4gICAgLnByb2ZpbGVfX2hlYWRlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ5N2U4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA3MHB4OyAgXHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgLnByb2ZpbGVfX2hlYWRlcl9fYXZhdGFye1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOjFweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnByb2ZpbGVfX2hlYWRlcl9fY2hlY2tze1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnByb2ZpbGVfX2hlYWRlcl9fY2hlY2tzX19jaGVja3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzJTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjAuNTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAmLnByb2ZpbGVfX2hlYWRlcl9fY2hlY2tzX19jaGVjay0tZW5hYmxlZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wcm9maWxlX19oZWFkZXJfX2NoZWNrLWluZm97XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAucmF0aW5nczpmb2N1c3tcclxuICAgICAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAucHJvZmlsZV9faGVhZGVyX19pbnRyb3tcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDoyNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb2ZpbGVfX2JvZHl7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogLTMwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgY29sb3I6V2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggLTNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMDEpLCAwcHggLTNweCAycHggMCByZ2JhKDAsIDAsIDAsIDApLCAxcHggLTNweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wb3J0Zm9saW9fX2JvZHlfX25hdntcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnBvcnRmb2xpb19fYm9keV9fbmF2X19pdGVte1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OjAuODtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJi5wb3J0Zm9saW9fX2JvZHlfX25hdl9faXRlbS0tYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWxpc3R7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6YmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWl0ZW0gLmxvbmctdGV4dHtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAucHJvZmlsZV9fYm9keV9fcG9ydGZvbGlve1xyXG4gICAgICAgIG1hcmdpbi10b3A6NDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC5wcm9maWxlX19ib2R5X19wb3J0Zm9saW9fX2NhcmR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjgwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDpcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHRvcDowcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnByb2ZpbGVfX2JvZHlfX3BvcnRmb2xpb19fYWRke1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxufSIsIi5wcm9maWxlIHtcbiAgLS1iYWNrZ3JvdW5kOmJsYWNrO1xufVxuLnByb2ZpbGUgLnByb2ZpbGVfX2hlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDk3ZTg7XG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9maWxlIC5wcm9maWxlX19oZWFkZXIgLnByb2ZpbGVfX2hlYWRlcl9fYXZhdGFyIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuLnByb2ZpbGUgLnByb2ZpbGVfX2hlYWRlciBoMSB7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4ucHJvZmlsZSAucHJvZmlsZV9faGVhZGVyIC5wcm9maWxlX19oZWFkZXJfX2NoZWNrcyAucHJvZmlsZV9faGVhZGVyX19jaGVja3NfX2NoZWNrIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzMuMzMlO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5wcm9maWxlIC5wcm9maWxlX19oZWFkZXIgLnByb2ZpbGVfX2hlYWRlcl9fY2hlY2tzIC5wcm9maWxlX19oZWFkZXJfX2NoZWNrc19fY2hlY2sucHJvZmlsZV9faGVhZGVyX19jaGVja3NfX2NoZWNrLS1lbmFibGVkIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5wcm9maWxlIC5wcm9maWxlX19oZWFkZXIgLnByb2ZpbGVfX2hlYWRlcl9fY2hlY2tzIC5wcm9maWxlX19oZWFkZXJfX2NoZWNrc19fY2hlY2sgaW9uLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxN3B4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnByb2ZpbGUgLnByb2ZpbGVfX2hlYWRlciAucHJvZmlsZV9faGVhZGVyX19jaGVjay1pbmZvIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5wcm9maWxlIC5wcm9maWxlX19oZWFkZXIgLnByb2ZpbGVfX2hlYWRlcl9fY2hlY2staW5mbyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5wcm9maWxlIC5wcm9maWxlX19oZWFkZXIgLnJhdGluZ3M6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLnByb2ZpbGUgLnByb2ZpbGVfX2hlYWRlciAucHJvZmlsZV9faGVhZGVyX19pbnRybyB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG4ucHJvZmlsZSAucHJvZmlsZV9fYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiBXaGl0ZTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm94LXNoYWRvdzogMHB4IC0zcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjAxKSwgMHB4IC0zcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwKSwgMXB4IC0zcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cbi5wcm9maWxlIC5wcm9maWxlX19ib2R5IC5wb3J0Zm9saW9fX2JvZHlfX25hdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5wcm9maWxlIC5wcm9maWxlX19ib2R5IC5wb3J0Zm9saW9fX2JvZHlfX25hdiAucG9ydGZvbGlvX19ib2R5X19uYXZfX2l0ZW0ge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAwcHggMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBvcGFjaXR5OiAwLjg7XG59XG4ucHJvZmlsZSAucHJvZmlsZV9fYm9keSAucG9ydGZvbGlvX19ib2R5X19uYXYgLnBvcnRmb2xpb19fYm9keV9fbmF2X19pdGVtLnBvcnRmb2xpb19fYm9keV9fbmF2X19pdGVtLS1hY3RpdmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3BhY2l0eTogMTtcbn1cbi5wcm9maWxlIC5wcm9maWxlX19ib2R5IGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG4ucHJvZmlsZSAucHJvZmlsZV9fYm9keSBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG4ucHJvZmlsZSBpb24taXRlbSAubG9uZy10ZXh0IHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuLnByb2ZpbGUgLnByb2ZpbGVfX2JvZHlfX3BvcnRmb2xpbyB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9maWxlIC5wcm9maWxlX19ib2R5X19wb3J0Zm9saW8gLnByb2ZpbGVfX2JvZHlfX3BvcnRmb2xpb19fY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAyODBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5wcm9maWxlIC5wcm9maWxlX19ib2R5X19wb3J0Zm9saW8gLnByb2ZpbGVfX2JvZHlfX3BvcnRmb2xpb19fY2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5wcm9maWxlIC5wcm9maWxlX19ib2R5X19wb3J0Zm9saW8gLnByb2ZpbGVfX2JvZHlfX3BvcnRmb2xpb19fY2FyZCBoMSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnByb2ZpbGUgLnByb2ZpbGVfX2JvZHlfX3BvcnRmb2xpbyAucHJvZmlsZV9fYm9keV9fcG9ydGZvbGlvX19hZGQge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/profile/profile.service */ "./src/app/services/profile/profile.service.ts");
/* harmony import */ var _services_gig_gig_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/gig/gig.service */ "./src/app/services/gig/gig.service.ts");
/* harmony import */ var _edit_profile_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../edit-profile/edit-profile.page */ "./src/app/pages/edit-profile/edit-profile.page.ts");
/* harmony import */ var _add_portfolio_item_add_portfolio_item_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../add-portfolio-item/add-portfolio-item.page */ "./src/app/pages/add-portfolio-item/add-portfolio-item.page.ts");
/* harmony import */ var _edit_portfolio_item_edit_portfolio_item_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../edit-portfolio-item/edit-portfolio-item.page */ "./src/app/pages/edit-portfolio-item/edit-portfolio-item.page.ts");
/* harmony import */ var _book_book_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../book/book.page */ "./src/app/pages/book/book.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");













var ProfilePage = /** @class */ (function () {
    function ProfilePage(authenticationService, route, profileService, modalController, alertCtrl, iab, gigService) {
        this.authenticationService = authenticationService;
        this.route = route;
        this.profileService = profileService;
        this.modalController = modalController;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this.gigService = gigService;
        var userId = this.route.snapshot.params['id'];
        this.profile = { user_id: userId, standalone: userId ? false : true, name: "Loading..." };
        this.loading = true;
        this.activeTab = "profile";
        this.user = {};
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.authenticationService.getUserData().subscribe(function (data) {
            _this.user = data;
            console.log(data);
            if (!_this.profile.standalone && _this.user.id !== _this.profile.user_id) {
                _this.getProfile();
            }
            else {
                Object.assign(_this.profile, data["profile"]);
                _this.profile.instruments = _this.profile.instruments_played ? _this.profile.instruments_played.split(", ") : [];
                _this.profile.portfolio = _this.profile.portfolio ? JSON.parse(_this.profile.portfolio) : [];
                console.log(data);
                _this.loading = false;
                _this.profileService.getProfile(_this.profile.user_id).then(function (data) {
                    _this.profile["reviews"] = data["reviews"];
                    _this.profile["rating"] = data["rating"];
                    _this.profile["profile_categories"] = data["profile_categories"];
                    _this.profile.instruments = data["instruments_played"] ? data["instruments_played"].split(", ") : [];
                    _this.profile.portfolio = data["portfolio"] ? JSON.parse(data["portfolio"]) : [];
                    console.log(_this.profile);
                    _this.calculateRating();
                });
            }
        });
    };
    ProfilePage.prototype.getProfile = function () {
        var _this = this;
        this.profileService.getProfile(this.profile.user_id).then(function (data) {
            _this.profile = data;
            _this.profile.instruments = _this.profile.instruments_played ? _this.profile.instruments_played.split(", ") : [];
            _this.profile.portfolio = _this.profile.portfolio ? JSON.parse(_this.profile.portfolio) : [];
            console.log(_this.profile);
            _this.calculateRating();
            _this.loading = false;
        }).catch(function () {
            _this.loading = false;
        });
    };
    ProfilePage.prototype.editProfile = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var profile, modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        profile = Object.assign({}, this.profile);
                        profile.email = this.user.email;
                        return [4 /*yield*/, this.modalController.create({
                                component: _edit_profile_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"],
                                componentProps: { profile: profile }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            if (data && data.data) {
                                var profile_1 = data.data.profile;
                                delete profile_1.instruments;
                                delete profile_1.portfolio;
                                delete profile_1.reviews;
                                Object.assign(_this.profile, profile_1);
                                _this.profile.instruments = _this.profile.instruments_played ? _this.profile.instruments_played.split(", ") : [];
                                _this.profile.standalone = true;
                                _this.profileService.updateProfile(profile_1).then(function () {
                                    _this.authenticationService.retreiveUserData().then(function () {
                                    });
                                });
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
    ProfilePage.prototype.bookUser = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var profile, modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        profile = Object.assign({}, this.profile);
                        profile.email = this.user.email;
                        return [4 /*yield*/, this.modalController.create({
                                component: _book_book_page__WEBPACK_IMPORTED_MODULE_9__["BookPage"],
                                componentProps: { profile: profile }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            if (data && data.data) {
                                console.log(data);
                                _this.gigService.bookUser(data.data.booking).then(function (data) {
                                    var alert = _this.alertCtrl.create({
                                        header: 'Booking Requested',
                                        message: 'Your booking has successfully been requested. The musician will receive a notification to accept the booking. Once accepted, you will be booked for this date and time.',
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
                                        message: 'There was an error trying to make your booking. Please try again.',
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
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.editPortfolioItem = function (item, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var itemCopy, modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        itemCopy = Object.assign({}, item);
                        return [4 /*yield*/, this.modalController.create({
                                component: _edit_portfolio_item_edit_portfolio_item_page__WEBPACK_IMPORTED_MODULE_8__["EditPortfolioItemPage"],
                                componentProps: { item: itemCopy }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            if (data && data.data) {
                                var item_1 = data.data.item;
                                console.log(data);
                                Object.assign(_this.profile.portfolio[index], item_1);
                                var profile = { portfolio: JSON.stringify(_this.profile.portfolio), user_id: _this.profile.user_id };
                                _this.profileService.updateProfile(profile).then(function () {
                                    _this.authenticationService.retreiveUserData().then(function () {
                                    });
                                });
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
    ProfilePage.prototype.addPortfolioItem = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _add_portfolio_item_add_portfolio_item_page__WEBPACK_IMPORTED_MODULE_7__["AddPortfolioItemPage"],
                            componentProps: {}
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            if (data && data.data) {
                                var item = data.data.item;
                                console.log(_this.profile);
                                _this.profile.portfolio.push(item);
                                var profile = { portfolio: JSON.stringify(_this.profile.portfolio), user_id: _this.profile.user_id };
                                _this.profileService.updateProfile(profile).then(function () {
                                    _this.authenticationService.retreiveUserData().then(function () { });
                                });
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
    ProfilePage.prototype.viewVideo = function (url) {
        this.iab.create(url, '_system');
    };
    ProfilePage.prototype.calculateRating = function () {
        this.rating = [];
        for (var i = 0; i < this.profile.rating; i++) {
            this.rating.push(i);
        }
    };
    ProfilePage.prototype.formatDate = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_11__(date).format("DD/MM/YYYY");
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__["InAppBrowser"] },
        { type: _services_gig_gig_service__WEBPACK_IMPORTED_MODULE_5__["GigService"] }
    ]; };
    ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")).default]
        })
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map