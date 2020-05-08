function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSignupSignupHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <mat-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button>\r\n        <ion-menu-button><i class=\"fas fa-bars\"></i></ion-menu-button>\r\n      </ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Signup</ion-title>\r\n  </mat-toolbar>\r\n</ion-header>\r\n<div class=\"fxlayout-support\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n\r\n  <ion-content>\r\n\r\n    <div class=\"signup-logo\">\r\n      <img src=\"assets/img/appicon.svg\" alt=\"Ionic Logo\">\r\n    </div>\r\n    <h4>Register</h4>\r\n    <form #signupForm=\"ngForm\" novalidate>\r\n      <ion-list lines=\"none\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\" color=\"primary\">Email</ion-label>\r\n          <ion-input [(ngModel)]=\"signup.email\" name=\"email\" type=\"text\" #username=\"ngModel\" required>\r\n          </ion-input>\r\n        </ion-item>\r\n        <ion-text color=\"danger\">\r\n          <p [hidden]=\"username.valid || submitted == false\" class=\"ion-padding-start\">\r\n            Email is required\r\n          </p>\r\n        </ion-text>\r\n\r\n        <ion-item>\r\n          <ion-label position=\"floating\" color=\"primary\">Password</ion-label>\r\n          <ion-input [(ngModel)]=\"signup.password\" name=\"password\" type=\"password\" #password=\"ngModel\" required>\r\n          </ion-input>\r\n        </ion-item>\r\n        <ion-text color=\"danger\">\r\n          <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\r\n            Password is required\r\n          </p>\r\n        </ion-text>\r\n      </ion-list>\r\n\r\n      <div class=\"ion-padding buttons\">\r\n        <ion-row>\r\n          <ion-col fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n            <a class=\"btn btn-primary button-hover\" (click)=\"onSignup(signupForm)\" type=\"submit\" shape=\"round\"\r\n              fill=\"outline\">\r\n              Create</a>\r\n            <a class=\"btn btn-secondary button-hover\" (click)=\"navigateLogin()\" color=\"medium\" shape=\"round\"\r\n              fill=\"outline\">Login</a>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n      </div>\r\n    </form>\r\n\r\n  </ion-content>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/pages/signup/signup-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/signup/signup-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: SignupPageRoutingModule */

  /***/
  function srcAppPagesSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
      return SignupPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup */
    "./src/app/pages/signup/signup.ts");

    var routes = [{
      path: '',
      component: _signup__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }];

    var SignupPageRoutingModule = function SignupPageRoutingModule() {
      _classCallCheck(this, SignupPageRoutingModule);
    };

    SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/signup/signup.module.ts ***!
    \***********************************************/

  /*! exports provided: SignUpModule */

  /***/
  function srcAppPagesSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpModule", function () {
      return SignUpModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _signup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup */
    "./src/app/pages/signup/signup.ts");
    /* harmony import */


    var _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup-routing.module */
    "./src/app/pages/signup/signup-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var SignUpModule = function SignUpModule() {
      _classCallCheck(this, SignUpModule);
    };

    SignUpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignupPageRoutingModule"]],
      declarations: [_signup__WEBPACK_IMPORTED_MODULE_5__["SignupPage"]]
    })], SignUpModule);
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.scss":
  /*!******************************************!*\
    !*** ./src/app/pages/signup/signup.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSignupSignupScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  box-sizing: inherit;\n  -webkit-transition-property: all;\n  transition-property: all;\n  -webkit-transition-duration: 0.6s;\n  transition-duration: 0.6s;\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease;\n}\n\n.buttons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  height: 100%;\n  -webkit-box-pack: center;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n}\n\n.btn {\n  color: black;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 45px;\n  margin: 0 0 2em;\n  max-width: 160px;\n  position: relative;\n  text-decoration: none;\n  text-transform: uppercase;\n  width: 100%;\n}\n\n.button-hover {\n  letter-spacing: 0;\n}\n\n.button-hover:hover,\n.button-hover:active {\n  letter-spacing: 5px;\n}\n\n.button-hover:after,\n.button-hover:before {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  bottom: 0px;\n  content: \" \";\n  display: block;\n  margin: 0 auto;\n  position: relative;\n  -webkit-transition: all 280ms ease-in-out;\n  transition: all 280ms ease-in-out;\n  width: 0;\n}\n\n.button-hover:after,\n.button-hover:before {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  border-color: #1a73e8;\n  -webkit-transition: width 350ms ease-in-out;\n  transition: width 350ms ease-in-out;\n  width: 70%;\n}\n\n.button-hover:hover:before {\n  bottom: auto;\n  top: 0;\n  width: 70%;\n}\n\n.btn-primary:before,\n.btn-primary:after {\n  border: 1px solid #1a73e8;\n}\n\n.btn-primary:hover,\n.btn-primary:active {\n  border-color: #1a73e8;\n}\n\n.btn-secondary:before,\n.btn-secondary:after {\n  border: 1px solid grey;\n}\n\n.btn-secondary:hover,\n.btn-secondary:active {\n  border-color: grey;\n}\n\n.signup-logo {\n  padding: 20px 0;\n  min-height: 200px;\n  text-align: center;\n}\n\n.signup-logo img {\n  max-width: 150px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n\nh4 {\n  text-align: center;\n}\n\ndiv.fxlayout-support {\n  height: 100vh;\n}\n\nion-input {\n  border-bottom: 0.5px solid grey;\n}\n\n@media screen and (min-width: 1024px) {\n  ion-content {\n    max-width: 25vw;\n  }\n\n  .fxlayout-support {\n    width: 100%;\n    height: 100%;\n  }\n\n  ion-button {\n    max-width: 100px;\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL0M6XFxnaXRodWJcXG1lc3NhZ2luZy1hcHBcXG1lc3NhZ2luZy1hcHBcXE1lc3NhZ2luZy1BcHAtQW5ndWxhci1Jb25pYy9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfYnV0dG9uLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2lnbnVwL0M6XFxnaXRodWJcXG1lc3NhZ2luZy1hcHBcXG1lc3NhZ2luZy1hcHBcXE1lc3NhZ2luZy1BcHAtQW5ndWxhci1Jb25pYy9zcmNcXGFwcFxccGFnZXNcXHNpZ251cFxcc2lnbnVwLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQ0FBQTtBQ0NKOztBRENBO0VBQ0ksb0JBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNFSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKOztBRENBOztFQUVJLG1CQUFBO0FDRUo7O0FEQ0E7O0VBRUksbUNBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxRQUFBO0FDRUo7O0FEQ0E7O0VBRUksbUNBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQ0FBQTtFQUNBLFVBQUE7QUNFSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0VKOztBRENBOztFQUVJLHlCQUFBO0FDRUo7O0FEQ0E7O0VBRUkscUJBQUE7QUNFSjs7QURDQTs7RUFFSSxzQkFBQTtBQ0VKOztBRENBOztFQUVJLGtCQUFBO0FDRUo7O0FDN0ZBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURnR0Y7O0FDN0ZBO0VBQ0UsZ0JBQUE7QURnR0Y7O0FDN0ZBO0VBQ0UsZ0JBQUE7QURnR0Y7O0FDN0ZBO0VBQ0Usa0JBQUE7QURnR0Y7O0FDN0ZBO0VBQ0UsYUFBQTtBRGdHRjs7QUM3RkE7RUFDRSwrQkFBQTtBRGdHRjs7QUM3RkE7RUFDRTtJQUNFLGVBQUE7RURnR0Y7O0VDOUZBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RURpR0Y7O0VDL0ZBO0lBQ0UsZ0JBQUE7SUFDQSxjQUFBO0VEa0dGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbn1cclxuLmJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMmVtO1xyXG4gICAgbWF4LXdpZHRoOiAxNjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJ1dHRvbi1ob3ZlciB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxufVxyXG5cclxuLmJ1dHRvbi1ob3Zlcjpob3ZlcixcclxuLmJ1dHRvbi1ob3ZlcjphY3RpdmUge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxufVxyXG5cclxuLmJ1dHRvbi1ob3ZlcjphZnRlcixcclxuLmJ1dHRvbi1ob3ZlcjpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDI4MG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDI4MG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbi5idXR0b24taG92ZXI6YWZ0ZXIsXHJcbi5idXR0b24taG92ZXI6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMWE3M2U4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAzNTBtcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDM1MG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLmJ1dHRvbi1ob3Zlcjpob3ZlcjpiZWZvcmUge1xyXG4gICAgYm90dG9tOiBhdXRvO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmJlZm9yZSxcclxuLmJ0bi1wcmltYXJ5OmFmdGVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxYTczZTg7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpob3ZlcixcclxuLmJ0bi1wcmltYXJ5OmFjdGl2ZSB7XHJcbiAgICBib3JkZXItY29sb3I6ICMxYTczZTg7XHJcbn1cclxuXHJcbi5idG4tc2Vjb25kYXJ5OmJlZm9yZSxcclxuLmJ0bi1zZWNvbmRhcnk6YWZ0ZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxufVxyXG5cclxuLmJ0bi1zZWNvbmRhcnk6aG92ZXIsXHJcbi5idG4tc2Vjb25kYXJ5OmFjdGl2ZSB7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZXk7XHJcbn1cclxuIiwiKiB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG59XG5cbi5idXR0b25zIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idG4ge1xuICBjb2xvcjogYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgbWFyZ2luOiAwIDAgMmVtO1xuICBtYXgtd2lkdGg6IDE2MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b24taG92ZXIge1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLmJ1dHRvbi1ob3Zlcjpob3Zlcixcbi5idXR0b24taG92ZXI6YWN0aXZlIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbn1cblxuLmJ1dHRvbi1ob3ZlcjphZnRlcixcbi5idXR0b24taG92ZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYm90dG9tOiAwcHg7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjgwbXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAyODBtcyBlYXNlLWluLW91dDtcbiAgd2lkdGg6IDA7XG59XG5cbi5idXR0b24taG92ZXI6YWZ0ZXIsXG4uYnV0dG9uLWhvdmVyOmJlZm9yZSB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJvcmRlci1jb2xvcjogIzFhNzNlODtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAzNTBtcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMzUwbXMgZWFzZS1pbi1vdXQ7XG4gIHdpZHRoOiA3MCU7XG59XG5cbi5idXR0b24taG92ZXI6aG92ZXI6YmVmb3JlIHtcbiAgYm90dG9tOiBhdXRvO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA3MCU7XG59XG5cbi5idG4tcHJpbWFyeTpiZWZvcmUsXG4uYnRuLXByaW1hcnk6YWZ0ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMWE3M2U4O1xufVxuXG4uYnRuLXByaW1hcnk6aG92ZXIsXG4uYnRuLXByaW1hcnk6YWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMWE3M2U4O1xufVxuXG4uYnRuLXNlY29uZGFyeTpiZWZvcmUsXG4uYnRuLXNlY29uZGFyeTphZnRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG59XG5cbi5idG4tc2Vjb25kYXJ5OmhvdmVyLFxuLmJ0bi1zZWNvbmRhcnk6YWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiBncmV5O1xufVxuXG4uc2lnbnVwLWxvZ28ge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zaWdudXAtbG9nbyBpbWcge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmg0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5kaXYuZnhsYXlvdXQtc3VwcG9ydCB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIGdyZXk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICBpb24tY29udGVudCB7XG4gICAgbWF4LXdpZHRoOiAyNXZ3O1xuICB9XG5cbiAgLmZ4bGF5b3V0LXN1cHBvcnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn0iLCJAaW1wb3J0IFwiX2J1dHRvblwiO1xyXG4uc2lnbnVwLWxvZ28ge1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaWdudXAtbG9nbyBpbWcge1xyXG4gIG1heC13aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5kaXYuZnhsYXlvdXQtc3VwcG9ydCB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCBncmV5O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICBtYXgtd2lkdGg6IDI1dnc7XHJcbiAgfVxyXG4gIC5meGxheW91dC1zdXBwb3J0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBpb24tYnV0dG9uIHtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.ts":
  /*!****************************************!*\
    !*** ./src/app/pages/signup/signup.ts ***!
    \****************************************/

  /*! exports provided: SignupPage */

  /***/
  function srcAppPagesSignupSignupTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
      return SignupPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _core_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../core/service/auth.service */
    "./src/app/core/service/auth.service.ts");

    var SignupPage =
    /*#__PURE__*/
    function () {
      function SignupPage(authService, router) {
        _classCallCheck(this, SignupPage);

        this.authService = authService;
        this.router = router;
        this.submitted = false;
        this.signup = {
          email: '',
          password: ''
        };
      }

      _createClass(SignupPage, [{
        key: "onSignup",
        value: function onSignup(form) {
          this.submitted = true;

          if (form.valid) {
            // this.userData.signup(this.signup.username);
            this.authService.signupEmail(this.signup.email, this.signup.password);
          }
        }
      }, {
        key: "navigateLogin",
        value: function navigateLogin() {
          this.router.navigateByUrl('/login');
        }
      }]);

      return SignupPage;
    }();

    SignupPage.ctorParameters = function () {
      return [{
        type: _core_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.scss */
      "./src/app/pages/signup/signup.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], SignupPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-signup-signup-module-es5.js.map