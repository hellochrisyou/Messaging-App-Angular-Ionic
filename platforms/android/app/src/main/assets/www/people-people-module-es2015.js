(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["people-people-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/people/people.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/people/people.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <mat-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button>\r\n        <ion-menu-button><i class=\"fas fa-bars\"></i></ion-menu-button>\r\n      </ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"title-padding\">Dating Props</ion-title>\r\n  </mat-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n  <div class=\"people-flex-container\" fxLayout=\"row wrap\" fxLayoutAlign.gt-xs=\"start\" fxLayoutAlign.lt-sm=\"start center\">\r\n    <h4>People</h4>\r\n    <div class=\"flex-container\" fxLayout=\"row wrap\" fxLayoutAlign.gt-xs=\"start\" fxLayoutAlign.lt-sm=\"start\">\r\n      <shared-card-page *ngFor=\"let user of userStateService.peopleUsers$ | async; index as i; trackBy: usersTrackFn\"\r\n        [user]=\"user\">\r\n        <ng-template #messagesBtnTemplate let-i=index>\r\n          <a class=\"oval\" (click)=\"sendMessage(user.email, user.displayName)\" matTooltip=\"Send Message\"\r\n            matTooltipPosition=\"below\">\r\n            <i class=\"far fa-envelope fa-2x\"></i>\r\n          </a>\r\n        </ng-template>\r\n        <ng-template #profileBtnTemplate let-i=index>\r\n          <a class=\"oval\" (click)=\"navigateProfile(user.email)\" matTooltip=\"View Profile\" matTooltipPosition=\"below\">\r\n            <i class=\"fas fa-user-friends fa-2x\"></i>\r\n\r\n          </a>\r\n        </ng-template>\r\n      </shared-card-page>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/people/people-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/people/people-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PeopleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleRoutingModule", function() { return PeopleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _people_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./people.component */ "./src/app/pages/people/people.component.ts");




const routes = [
    {
        path: '',
        component: _people_component__WEBPACK_IMPORTED_MODULE_3__["PeoplePage"],
    },
];
let PeopleRoutingModule = class PeopleRoutingModule {
};
PeopleRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PeopleRoutingModule);



/***/ }),

/***/ "./src/app/pages/people/people.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/people/people.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".oval {\n  cursor: pointer;\n  border-radius: 75px;\n  border: 1px solid #cc3732;\n  background: #cc3732 !important;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 0;\n  letter-spacing: 1px;\n  width: 5rem;\n  height: 2.75rem;\n  text-transform: uppercase;\n  -webkit-transition: -webkit-transform 80ms ease-in;\n  transition: -webkit-transform 80ms ease-in;\n  transition: transform 80ms ease-in;\n  transition: transform 80ms ease-in, -webkit-transform 80ms ease-in;\n}\n.oval:active {\n  -webkit-transform: scale(0.95);\n          transform: scale(0.95);\n}\n.oval:focus {\n  outline: none;\n}\ni {\n  padding-left: 36%;\n  padding-top: 10%;\n}\n.people-flex-container {\n  width: 100vw;\n  height: 90vh;\n  background-size: cover;\n  background-image: url('bg-3.jpeg');\n}\nshared-card-page {\n  margin: 0 0 10vh;\n}\n@media screen and (min-width: 601px) {\n  shared-card-page {\n    -webkit-box-flex: 1;\n            flex-grow: 1;\n  }\n\n  h4 {\n    padding-top: 5vh;\n  }\n}\n@media screen and (max-width: 600px) {\n  shared-card-page {\n    -webkit-box-flex: 100%;\n            flex: 100%;\n  }\n\n  h4 {\n    margin-top: 10vh;\n  }\n\n  .flex-container {\n    margin-top: 0vh;\n  }\n\n  .people-flex-container {\n    height: 200vh;\n    background-size: auto;\n    background-repeat: repeat-y;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVvcGxlL0M6XFxnaXRodWJcXG1lc3NhZ2luZy1hcHBcXG1lc3NhZ2luZy1hcHBcXE1lc3NhZ2luZy1BcHAtQW5ndWxhci1Jb25pYy9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfYWN0aW9uLWJ1dHRvbi5zY3NzIiwic3JjL2FwcC9wYWdlcy9wZW9wbGUvcGVvcGxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wZW9wbGUvQzpcXGdpdGh1YlxcbWVzc2FnaW5nLWFwcFxcbWVzc2FnaW5nLWFwcFxcTWVzc2FnaW5nLUFwcC1Bbmd1bGFyLUlvbmljL3NyY1xcYXBwXFxwYWdlc1xccGVvcGxlXFxwZW9wbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrREFBQTtFQUFBLDBDQUFBO0VBQUEsa0NBQUE7RUFBQSxrRUFBQTtBQ0NKO0FEQUk7RUFDSSw4QkFBQTtVQUFBLHNCQUFBO0FDRVI7QURBSTtFQUNJLGFBQUE7QUNFUjtBRENBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0VKO0FDdkJBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0FEMEJKO0FDeEJBO0VBQ0ksZ0JBQUE7QUQyQko7QUN6QkE7RUFDSTtJQUNJLG1CQUFBO1lBQUEsWUFBQTtFRDRCTjs7RUMxQkU7SUFDSSxnQkFBQTtFRDZCTjtBQUNGO0FDMUJBO0VBQ0k7SUFDSSxzQkFBQTtZQUFBLFVBQUE7RUQ0Qk47O0VDMUJFO0lBQ0ksZ0JBQUE7RUQ2Qk47O0VDM0JFO0lBQ0ksZUFBQTtFRDhCTjs7RUM1QkU7SUFDSSxhQUFBO0lBQ0EscUJBQUE7SUFDQSwyQkFBQTtFRCtCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGVvcGxlL3Blb3BsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmFsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDc1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjA0LCA1NSwgNTApO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIwNCwgNTUsIDUwKSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgaGVpZ2h0OiAyLjc1cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA4MG1zIGVhc2UtaW47XHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIH1cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuaSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDM2JTtcclxuICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbn1cclxuIiwiLm92YWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDc1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYzM3MzI7XG4gIGJhY2tncm91bmQ6ICNjYzM3MzIgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB3aWR0aDogNXJlbTtcbiAgaGVpZ2h0OiAyLjc1cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODBtcyBlYXNlLWluO1xufVxuLm92YWw6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbn1cbi5vdmFsOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaSB7XG4gIHBhZGRpbmctbGVmdDogMzYlO1xuICBwYWRkaW5nLXRvcDogMTAlO1xufVxuXG4ucGVvcGxlLWZsZXgtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDkwdmg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvYmctMy5qcGVnXCIpO1xufVxuXG5zaGFyZWQtY2FyZC1wYWdlIHtcbiAgbWFyZ2luOiAwIDAgMTB2aDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIHtcbiAgc2hhcmVkLWNhcmQtcGFnZSB7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG5cbiAgaDQge1xuICAgIHBhZGRpbmctdG9wOiA1dmg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIHNoYXJlZC1jYXJkLXBhZ2Uge1xuICAgIGZsZXg6IDEwMCU7XG4gIH1cblxuICBoNCB7XG4gICAgbWFyZ2luLXRvcDogMTB2aDtcbiAgfVxuXG4gIC5mbGV4LWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMHZoO1xuICB9XG5cbiAgLnBlb3BsZS1mbGV4LWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAyMDB2aDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICB9XG59IiwiQGltcG9ydCBcIl9hY3Rpb24tYnV0dG9uXCI7XHJcblxyXG4ucGVvcGxlLWZsZXgtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnL2JnLTMuanBlZ1wiKTtcclxufVxyXG5zaGFyZWQtY2FyZC1wYWdlIHtcclxuICAgIG1hcmdpbjogMCAwIDEwdmg7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIHtcclxuICAgIHNoYXJlZC1jYXJkLXBhZ2Uge1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIH1cclxuICAgIGg0IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXZoO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgc2hhcmVkLWNhcmQtcGFnZSB7XHJcbiAgICAgICAgZmxleDogMTAwJTtcclxuICAgIH1cclxuICAgIGg0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gICAgfVxyXG4gICAgLmZsZXgtY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwdmg7XHJcbiAgICB9XHJcbiAgICAucGVvcGxlLWZsZXgtY29udGFpbmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDIwMHZoO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/pages/people/people.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/people/people.component.ts ***!
  \**************************************************/
/*! exports provided: PeoplePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePage", function() { return PeoplePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/service/auth.service */ "./src/app/core/service/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _inbox_inbox_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../inbox/inbox.util */ "./src/app/pages/inbox/inbox.util.ts");
/* harmony import */ var _shared_component_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/component/profile/profile.component */ "./src/app/shared/component/profile/profile.component.ts");
/* harmony import */ var _core_service_state_user_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/service/state/user.state.service */ "./src/app/core/service/state/user.state.service.ts");







let PeoplePage = class PeoplePage {
    constructor(alertCtrl, userStateService, authService, modalController, toastController) {
        this.alertCtrl = alertCtrl;
        this.userStateService = userStateService;
        this.authService = authService;
        this.modalController = modalController;
        this.toastController = toastController;
        this.status = 'people';
        this.thisMessage = {};
        this.tmpMessages = [];
        this.usersTrackFn = (i, user) => user.email;
    }
    ngOnInit() {
    }
    //   ionViewDidEnter() {
    //   }
    sendMessage(userEmail, displayName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Send Message to:',
                subHeader: displayName,
                cssClass: 'center-alert',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Ok',
                        handler: (dataMessage) => {
                            this.thisMessage.email = this.authService.authState.email;
                            this.thisMessage.message = dataMessage.message;
                            this.thisMessage.date = Object(_inbox_inbox_util__WEBPACK_IMPORTED_MODULE_4__["GET_DATE"])();
                            this.thisMessage.sender = this.authService.authState.email;
                            this.thisMessage.receiver = userEmail;
                            this.userStateService.sendMessage(this.thisMessage, this.authService.authState.email, userEmail);
                            this.userStateService.sendMessage(this.thisMessage, userEmail, this.authService.authState.email);
                            this.userStateService.setPartitionedUsers();
                        }
                    }
                ],
                inputs: [
                    {
                        type: 'text',
                        name: 'message',
                        placeholder: 'message'
                    }
                ]
            });
            yield alert.present();
        });
    }
    navigateProfile(userEmail) {
        this.profileModal(userEmail);
    }
    profileModal(userEmail) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _shared_component_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileModal"],
                cssClass: 'profileModal',
                componentProps: {
                    'email': userEmail
                },
            });
            return yield modal.present();
        });
    }
};
PeoplePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _core_service_state_user_state_service__WEBPACK_IMPORTED_MODULE_6__["UserStateService"] },
    { type: _core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
PeoplePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'people-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./people.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/people/people.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./people.component.scss */ "./src/app/pages/people/people.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _core_service_state_user_state_service__WEBPACK_IMPORTED_MODULE_6__["UserStateService"],
        _core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], PeoplePage);



/***/ }),

/***/ "./src/app/pages/people/people.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/people/people.module.ts ***!
  \***********************************************/
/*! exports provided: PeopleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleModule", function() { return PeopleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _people_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./people-routing.module */ "./src/app/pages/people/people-routing.module.ts");
/* harmony import */ var _people_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./people.component */ "./src/app/pages/people/people.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");







let PeopleModule = class PeopleModule {
};
PeopleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_people_component__WEBPACK_IMPORTED_MODULE_4__["PeoplePage"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _people_routing_module__WEBPACK_IMPORTED_MODULE_3__["PeopleRoutingModule"]
        ]
    })
], PeopleModule);



/***/ })

}]);
//# sourceMappingURL=people-people-module-es2015.js.map