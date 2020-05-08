(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <mat-toolbar color=\"dark\">\r\n    <ion-buttons [hidden]=\"!authService.isAuthenticated\" slot=\"start\">\r\n      <ion-menu-button>\r\n        <ion-menu-button><i class=\"fas fa-bars\"></i></ion-menu-button>\r\n      </ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"title-padding\">Dating Props</ion-title>\r\n  </mat-toolbar>\r\n</ion-header>\r\n<div class=\"fxlayout-support\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n  <ion-content class=\"mat-elevation-z7\">\r\n    <div class=\"login-logo\">\r\n      <img src=\"assets/img/dating-logo.png\" alt=\"Ionic logo\">\r\n    </div>\r\n    <h4 id=\"google-sign-in\">Google Sign In</h4>\r\n\r\n    <div class=\"social fb\"><a (click)=\"loginGoogle()\"><i class=\"fa fa-google\"></i></a></div>\r\n\r\n    <form #loginForm=\"ngForm\" novalidate>\r\n      <h4>Email Sign In</h4>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-label position=\"floating\" color=\"primary\">Email</ion-label>\r\n          <ion-input [(ngModel)]=\"login.email\" name=\"email\" type=\"text\" #username=\"ngModel\" spellcheck=\"false\"\r\n            autocapitalize=\"off\" required>\r\n          </ion-input>\r\n        </ion-item>\r\n\r\n        <ion-text color=\"danger\">\r\n          <p [hidden]=\"username.valid || submitted == false\" class=\"ion-padding-start\">\r\n            Username is required\r\n          </p>\r\n        </ion-text>\r\n\r\n        <ion-item>\r\n          <ion-label position=\"floating\" color=\"primary\">Password</ion-label>\r\n          <ion-input [(ngModel)]=\"login.password\" name=\"password\" type=\"password\" #password=\"ngModel\" required>\r\n          </ion-input>\r\n        </ion-item>\r\n\r\n        <ion-text color=\"danger\">\r\n          <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\r\n            Password is required\r\n          </p>\r\n        </ion-text>\r\n      </ion-list>\r\n\r\n      <div class=\"buttons\">\r\n        <ion-row>\r\n          <ion-col fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n            <a class=\"btn btn-primary button-hover\" (click)=\"onLogin(loginForm)\" type=\"submit\" shape=\"round\"\r\n              fill=\"outline\">\r\n              Login</a>\r\n          </ion-col>\r\n          <ion-col fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n            <a class=\"btn btn-secondary button-hover\" (click)=\"onSignup()\" color=\"medium\" shape=\"round\"\r\n              fill=\"outline\">Signup</a>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </form>\r\n\r\n  </ion-content>\r\n</div>");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ "./src/app/pages/login/login.ts");




const routes = [
    {
        path: '',
        component: _login__WEBPACK_IMPORTED_MODULE_3__["LoginPage"],
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login */ "./src/app/pages/login/login.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");







let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [
            _login__WEBPACK_IMPORTED_MODULE_4__["LoginPage"],
        ]
    })
], LoginModule);



/***/ }),

/***/ "./src/app/pages/login/login.scss":
/*!****************************************!*\
  !*** ./src/app/pages/login/login.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Satisfy&display=swap\");\n* {\n  box-sizing: inherit;\n  -webkit-transition-property: all;\n  transition-property: all;\n  -webkit-transition-duration: 0.6s;\n  transition-duration: 0.6s;\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease;\n}\n.buttons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  height: 100%;\n  -webkit-box-pack: center;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n}\n.btn {\n  color: black;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 45px;\n  margin: 0 0 2em;\n  max-width: 160px;\n  position: relative;\n  text-decoration: none;\n  text-transform: uppercase;\n  width: 100%;\n}\n.button-hover {\n  letter-spacing: 0;\n}\n.button-hover:hover,\n.button-hover:active {\n  letter-spacing: 5px;\n}\n.button-hover:after,\n.button-hover:before {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  bottom: 0px;\n  content: \" \";\n  display: block;\n  margin: 0 auto;\n  position: relative;\n  -webkit-transition: all 280ms ease-in-out;\n  transition: all 280ms ease-in-out;\n  width: 0;\n}\n.button-hover:after,\n.button-hover:before {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  border-color: #1a73e8;\n  -webkit-transition: width 350ms ease-in-out;\n  transition: width 350ms ease-in-out;\n  width: 70%;\n}\n.button-hover:hover:before {\n  bottom: auto;\n  top: 0;\n  width: 70%;\n}\n.btn-primary:before,\n.btn-primary:after {\n  border: 1px solid #1a73e8;\n}\n.btn-primary:hover,\n.btn-primary:active {\n  border-color: #1a73e8;\n}\n.btn-secondary:before,\n.btn-secondary:after {\n  border: 1px solid grey;\n}\n.btn-secondary:hover,\n.btn-secondary:active {\n  border-color: grey;\n}\n.login-logo {\n  padding: 20px 0;\n  min-height: 100px;\n  text-align: center;\n}\n.login-logo img {\n  max-width: 150px;\n}\n.list {\n  margin-bottom: 0;\n}\nimg {\n  max-width: 50px;\n  cursor: pointer;\n}\nh3 {\n  text-align: center;\n}\nion-content {\n  max-width: 25vw;\n  overflow-y: hidden;\n}\n.fxlayout-support {\n  width: 100%;\n  height: 100%;\n}\n#social-flex {\n  margin-bottom: 4rem;\n}\nion-button {\n  max-width: 100px;\n  margin: 0 auto;\n}\n.buttons {\n  margin-top: 5vh;\n}\n.fa-google {\n  background: conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat;\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  -webkit-text-fill-color: transparent;\n}\n.social {\n  text-align: center;\n  margin: 0 auto;\n  padding: 0.2em;\n  background-size: 0 0;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-radius: 50%;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  font-size: 2.5em;\n  -webkit-transition: background-size 0.3s ease-out, color 0.1s 0.1s, -webkit-transform 0.3s;\n  transition: background-size 0.3s ease-out, color 0.1s 0.1s, -webkit-transform 0.3s;\n  transition: background-size 0.3s ease-out, color 0.1s 0.1s, transform 0.3s;\n  transition: background-size 0.3s ease-out, color 0.1s 0.1s, transform 0.3s, -webkit-transform 0.3s;\n}\n.social:hover {\n  color: #fff;\n  background-size: 150% 150%;\n  -webkit-transform: rotate(360deg) scale(1.1);\n          transform: rotate(360deg) scale(1.1);\n}\na:link,\na:visited,\na:hover,\na:active {\n  text-decoration: none;\n  color: inherit;\n}\nh4#google-sign-in {\n  font-size: 2rem;\n}\n.fxlayout-support {\n  background-image: url('bg-1.jpg');\n}\n@media screen and (max-width: 600px) {\n  ion-content {\n    max-width: 100vw;\n  }\n\n  ion-item {\n    width: 75vw;\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXGdpdGh1YlxcbWVzc2FnaW5nLWFwcFxcbWVzc2FnaW5nLWFwcFxcTWVzc2FnaW5nLUFwcC1Bbmd1bGFyLUlvbmljL3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL0M6XFxnaXRodWJcXG1lc3NhZ2luZy1hcHBcXG1lc3NhZ2luZy1hcHBcXE1lc3NhZ2luZy1BcHAtQW5ndWxhci1Jb25pYy9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfYnV0dG9uLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1EsMkVBQUE7QUNEUjtFQUNJLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGdDQUFBO0FDRUo7QURBQTtFQUNJLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDR0o7QURBQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDR0o7QURBQTtFQUNJLGlCQUFBO0FDR0o7QURBQTs7RUFFSSxtQkFBQTtBQ0dKO0FEQUE7O0VBRUksbUNBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxRQUFBO0FDR0o7QURBQTs7RUFFSSxtQ0FBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsVUFBQTtBQ0dKO0FEQUE7RUFDSSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNHSjtBREFBOztFQUVJLHlCQUFBO0FDR0o7QURBQTs7RUFFSSxxQkFBQTtBQ0dKO0FEQUE7O0VBRUksc0JBQUE7QUNHSjtBREFBOztFQUVJLGtCQUFBO0FDR0o7QUY1RkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRStGRjtBRjVGQTtFQUNFLGdCQUFBO0FFK0ZGO0FGNUZBO0VBQ0UsZ0JBQUE7QUUrRkY7QUY1RkE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBRStGRjtBRjdGQTtFQUNFLGtCQUFBO0FFZ0dGO0FGN0ZBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FFZ0dGO0FGN0ZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUVnR0Y7QUY3RkE7RUFDRSxtQkFBQTtBRWdHRjtBRjdGQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBRWdHRjtBRjdGQTtFQUNFLGVBQUE7QUVnR0Y7QUY3RkE7RUFDRSxnSkFBQTtFQUVBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FFK0ZGO0FGN0ZBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEZBQUE7RUFBQSxrRkFBQTtFQUFBLDBFQUFBO0VBQUEsa0dBQUE7QUVnR0Y7QUY3RkE7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSw0Q0FBQTtVQUFBLG9DQUFBO0FFZ0dGO0FGN0ZBOzs7O0VBSUUscUJBQUE7RUFDQSxjQUFBO0FFZ0dGO0FGN0ZBO0VBQ0UsZUFBQTtBRWdHRjtBRjdGQTtFQUNFLGlDQUFBO0FFZ0dGO0FGN0ZBO0VBQ0U7SUFDRSxnQkFBQTtFRWdHRjs7RUY5RkE7SUFDRSxXQUFBO0lBQ0EsY0FBQTtFRWlHRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJfYnV0dG9uXCI7XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNhdGlzZnkmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuLmxvZ2luLWxvZ28ge1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1sb2dvIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5oMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgbWF4LXdpZHRoOiAyNXZ3O1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG5cclxuLmZ4bGF5b3V0LXN1cHBvcnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI3NvY2lhbC1mbGV4IHtcclxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgbWFyZ2luLXRvcDogNXZoO1xyXG59XHJcblxyXG4uZmEtZ29vZ2xlIHtcclxuICBiYWNrZ3JvdW5kOiBjb25pYy1ncmFkaWVudChmcm9tIC00NWRlZywgI2VhNDMzNSAxMTBkZWcsICM0Mjg1ZjQgOTBkZWcgMTgwZGVnLCAjMzRhODUzIDE4MGRlZyAyNzBkZWcsICNmYmJjMDUgMjcwZGVnKVxyXG4gICAgNzMlIDU1JS8xNTAlIDE1MCUgbm8tcmVwZWF0O1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5zb2NpYWwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAwLjJlbTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDAgMDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDJlbTtcclxuICBoZWlnaHQ6IDJlbTtcclxuICBsaW5lLWhlaWdodDogMmVtO1xyXG4gIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1zaXplIDAuM3MgZWFzZS1vdXQsIGNvbG9yIDAuMXMgMC4xcywgdHJhbnNmb3JtIDAuM3M7XHJcbn1cclxuXHJcbi5zb2NpYWw6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTUwJSAxNTAlO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4xKTtcclxufVxyXG5cclxuYTpsaW5rLFxyXG5hOnZpc2l0ZWQsXHJcbmE6aG92ZXIsXHJcbmE6YWN0aXZlIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbmg0I2dvb2dsZS1zaWduLWluIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5meGxheW91dC1zdXBwb3J0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnL2JnLTEuanBnXCIpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgfVxyXG4gIGlvbi1pdGVtIHtcclxuICAgIHdpZHRoOiA3NXZ3O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG59XHJcbiIsIioge1xyXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxufVxyXG4uYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICBtYXJnaW46IDAgMCAyZW07XHJcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uLWhvdmVyIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG4uYnV0dG9uLWhvdmVyOmhvdmVyLFxyXG4uYnV0dG9uLWhvdmVyOmFjdGl2ZSB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG59XHJcblxyXG4uYnV0dG9uLWhvdmVyOmFmdGVyLFxyXG4uYnV0dG9uLWhvdmVyOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjgwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjgwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB3aWR0aDogMDtcclxufVxyXG5cclxuLmJ1dHRvbi1ob3ZlcjphZnRlcixcclxuLmJ1dHRvbi1ob3ZlcjpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBib3JkZXItY29sb3I6ICMxYTczZTg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDM1MG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMzUwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4uYnV0dG9uLWhvdmVyOmhvdmVyOmJlZm9yZSB7XHJcbiAgICBib3R0b206IGF1dG87XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6YmVmb3JlLFxyXG4uYnRuLXByaW1hcnk6YWZ0ZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFhNzNlODtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmhvdmVyLFxyXG4uYnRuLXByaW1hcnk6YWN0aXZlIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzFhNzNlODtcclxufVxyXG5cclxuLmJ0bi1zZWNvbmRhcnk6YmVmb3JlLFxyXG4uYnRuLXNlY29uZGFyeTphZnRlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG59XHJcblxyXG4uYnRuLXNlY29uZGFyeTpob3ZlcixcclxuLmJ0bi1zZWNvbmRhcnk6YWN0aXZlIHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JleTtcclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1TYXRpc2Z5JmRpc3BsYXk9c3dhcFwiKTtcbioge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xufVxuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnRuIHtcbiAgY29sb3I6IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbjogMCAwIDJlbTtcbiAgbWF4LXdpZHRoOiAxNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnV0dG9uLWhvdmVyIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5cbi5idXR0b24taG92ZXI6aG92ZXIsXG4uYnV0dG9uLWhvdmVyOmFjdGl2ZSB7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG59XG5cbi5idXR0b24taG92ZXI6YWZ0ZXIsXG4uYnV0dG9uLWhvdmVyOmJlZm9yZSB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJvdHRvbTogMHB4O1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDI4MG1zIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMjgwbXMgZWFzZS1pbi1vdXQ7XG4gIHdpZHRoOiAwO1xufVxuXG4uYnV0dG9uLWhvdmVyOmFmdGVyLFxuLmJ1dHRvbi1ob3ZlcjpiZWZvcmUge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBib3JkZXItY29sb3I6ICMxYTczZTg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMzUwbXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IHdpZHRoIDM1MG1zIGVhc2UtaW4tb3V0O1xuICB3aWR0aDogNzAlO1xufVxuXG4uYnV0dG9uLWhvdmVyOmhvdmVyOmJlZm9yZSB7XG4gIGJvdHRvbTogYXV0bztcbiAgdG9wOiAwO1xuICB3aWR0aDogNzAlO1xufVxuXG4uYnRuLXByaW1hcnk6YmVmb3JlLFxuLmJ0bi1wcmltYXJ5OmFmdGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzFhNzNlODtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyLFxuLmJ0bi1wcmltYXJ5OmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogIzFhNzNlODtcbn1cblxuLmJ0bi1zZWNvbmRhcnk6YmVmb3JlLFxuLmJ0bi1zZWNvbmRhcnk6YWZ0ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xufVxuXG4uYnRuLXNlY29uZGFyeTpob3Zlcixcbi5idG4tc2Vjb25kYXJ5OmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogZ3JleTtcbn1cblxuLmxvZ2luLWxvZ28ge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1sb2dvIGltZyB7XG4gIG1heC13aWR0aDogMTUwcHg7XG59XG5cbi5saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiA1MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY29udGVudCB7XG4gIG1heC13aWR0aDogMjV2dztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4uZnhsYXlvdXQtc3VwcG9ydCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNzb2NpYWwtZmxleCB7XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG59XG5cbmlvbi1idXR0b24ge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmJ1dHRvbnMge1xuICBtYXJnaW4tdG9wOiA1dmg7XG59XG5cbi5mYS1nb29nbGUge1xuICBiYWNrZ3JvdW5kOiBjb25pYy1ncmFkaWVudChmcm9tIC00NWRlZywgI2VhNDMzNSAxMTBkZWcsICM0Mjg1ZjQgOTBkZWcgMTgwZGVnLCAjMzRhODUzIDE4MGRlZyAyNzBkZWcsICNmYmJjMDUgMjcwZGVnKSA3MyUgNTUlLzE1MCUgMTUwJSBuby1yZXBlYXQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc29jaWFsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMC4yZW07XG4gIGJhY2tncm91bmQtc2l6ZTogMCAwO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDJlbTtcbiAgaGVpZ2h0OiAyZW07XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAwLjNzIGVhc2Utb3V0LCBjb2xvciAwLjFzIDAuMXMsIHRyYW5zZm9ybSAwLjNzO1xufVxuXG4uc29jaWFsOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtc2l6ZTogMTUwJSAxNTAlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMSk7XG59XG5cbmE6bGluayxcbmE6dmlzaXRlZCxcbmE6aG92ZXIsXG5hOmFjdGl2ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmg0I2dvb2dsZS1zaWduLWluIHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZnhsYXlvdXQtc3VwcG9ydCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvYmctMS5qcGdcIik7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGlvbi1jb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICB9XG5cbiAgaW9uLWl0ZW0ge1xuICAgIHdpZHRoOiA3NXZ3O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/login/login.ts":
/*!**************************************!*\
  !*** ./src/app/pages/login/login.ts ***!
  \**************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/service/auth.service */ "./src/app/core/service/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






let LoginPage = class LoginPage {
    constructor(authService, navCtrl, router, afAuth) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.afAuth = afAuth;
        this.submitted = false;
        this.login = { email: '', password: '' };
        console.log("InboxComponent -> ngOnInit -> this.authService.isAuthenticated", this.authService.isAuthenticated);
    }
    ngOnInit() {
        if (this.authService.isAuthenticated !== false) {
            this.router.navigateByUrl('/people');
        }
        else {
            this.afAuth.auth.signOut();
        }
    }
    onLogin(form) {
        this.submitted = true;
        if (form.valid) {
            this.authService.signinEmail(this.login.email, this.login.password);
        }
    }
    loginGoogle() {
        this.authService.signinGoogle();
    }
    onSignup() {
        this.navCtrl.navigateForward('/signup');
    }
};
LoginPage.ctorParameters = () => [
    { type: _core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'page-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.scss */ "./src/app/pages/login/login.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map