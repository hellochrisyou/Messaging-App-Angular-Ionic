function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["support-support-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSupportSupportHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <mat-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button>\r\n        <ion-menu-button><i class=\"fas fa-bars\"></i></ion-menu-button>\r\n      </ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"title-padding\">Dating Props</ion-title>\r\n  </mat-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n  <div class=\"flex-container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n    <h4>Support Page</h4>\r\n    <h3>Click the link to email the Support Team</h3>\r\n    <div class=\"buttons\">\r\n      <ion-row>\r\n        <ion-col fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n          <a class=\"btn btn-primary button-hover\" href=\"mailto: chris@chrisyou.com?subject=Support&body=Message\"\r\n            color=\"medium\" shape=\"round\" fill=\"outline\">Send Email</a>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/support/support-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/support/support-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: SupportPageRoutingModule */

  /***/
  function srcAppPagesSupportSupportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportPageRoutingModule", function () {
      return SupportPageRoutingModule;
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


    var _support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./support */
    "./src/app/pages/support/support.ts");

    var routes = [{
      path: '',
      component: _support__WEBPACK_IMPORTED_MODULE_3__["SupportPage"],
      data: {
        num: '5'
      }
    }];

    var SupportPageRoutingModule = function SupportPageRoutingModule() {
      _classCallCheck(this, SupportPageRoutingModule);
    };

    SupportPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SupportPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/support/support.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/support/support.module.ts ***!
    \*************************************************/

  /*! exports provided: SupportModule */

  /***/
  function srcAppPagesSupportSupportModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportModule", function () {
      return SupportModule;
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


    var _support__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./support */
    "./src/app/pages/support/support.ts");
    /* harmony import */


    var _support_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./support-routing.module */
    "./src/app/pages/support/support-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var SupportModule = function SupportModule() {
      _classCallCheck(this, SupportModule);
    };

    SupportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _support_routing_module__WEBPACK_IMPORTED_MODULE_6__["SupportPageRoutingModule"]],
      declarations: [_support__WEBPACK_IMPORTED_MODULE_5__["SupportPage"]]
    })], SupportModule);
    /***/
  },

  /***/
  "./src/app/pages/support/support.scss":
  /*!********************************************!*\
    !*** ./src/app/pages/support/support.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSupportSupportScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  box-sizing: inherit;\n  -webkit-transition-property: all;\n  transition-property: all;\n  -webkit-transition-duration: 0.6s;\n  transition-duration: 0.6s;\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease;\n}\n\n.buttons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  height: 100%;\n  -webkit-box-pack: center;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n}\n\n.btn {\n  color: black;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 45px;\n  margin: 0 0 2em;\n  max-width: 160px;\n  position: relative;\n  text-decoration: none;\n  text-transform: uppercase;\n  width: 100%;\n}\n\n.button-hover {\n  letter-spacing: 0;\n}\n\n.button-hover:hover,\n.button-hover:active {\n  letter-spacing: 5px;\n}\n\n.button-hover:after,\n.button-hover:before {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  bottom: 0px;\n  content: \" \";\n  display: block;\n  margin: 0 auto;\n  position: relative;\n  -webkit-transition: all 280ms ease-in-out;\n  transition: all 280ms ease-in-out;\n  width: 0;\n}\n\n.button-hover:after,\n.button-hover:before {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  border-color: #1a73e8;\n  -webkit-transition: width 350ms ease-in-out;\n  transition: width 350ms ease-in-out;\n  width: 70%;\n}\n\n.button-hover:hover:before {\n  bottom: auto;\n  top: 0;\n  width: 70%;\n}\n\n.btn-primary:before,\n.btn-primary:after {\n  border: 1px solid #1a73e8;\n}\n\n.btn-primary:hover,\n.btn-primary:active {\n  border-color: #1a73e8;\n}\n\n.btn-secondary:before,\n.btn-secondary:after {\n  border: 1px solid grey;\n}\n\n.btn-secondary:hover,\n.btn-secondary:active {\n  border-color: grey;\n}\n\nh4 {\n  top: 5vh;\n  position: absolute;\n  text-align: center;\n}\n\nh3 {\n  text-align: center;\n}\n\n.support-logo {\n  padding: 20px 0;\n  min-height: 200px;\n  text-align: center;\n}\n\nh3, h4 {\n  color: white;\n}\n\nh4 {\n  top: 10vh;\n}\n\n.support-logo img {\n  max-width: 150px;\n}\n\nh3 {\n  position: absolute;\n  top: 25vh;\n  font-size: 1.5rem;\n}\n\n.button-hover {\n  color: white;\n}\n\n.flex-container {\n  background-image: url('bg-5.jpg');\n  background-size: cover;\n  height: 100vh;\n  padding-top: 5vh;\n}\n\n@media screen and (max-width: 600px) {\n  h4 {\n    margin-top: 5vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3VwcG9ydC9DOlxcZ2l0aHViXFxtZXNzYWdpbmctYXBwXFxtZXNzYWdpbmctYXBwXFxNZXNzYWdpbmctQXBwLUFuZ3VsYXItSW9uaWMvc3JjXFxhc3NldHNcXHN0eWxlc1xcX2J1dHRvbi5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdXBwb3J0L3N1cHBvcnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3VwcG9ydC9DOlxcZ2l0aHViXFxtZXNzYWdpbmctYXBwXFxtZXNzYWdpbmctYXBwXFxNZXNzYWdpbmctQXBwLUFuZ3VsYXItSW9uaWMvc3JjXFxhc3NldHNcXHN0eWxlc1xcX3RpdGxlLXRleHQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3VwcG9ydC9DOlxcZ2l0aHViXFxtZXNzYWdpbmctYXBwXFxtZXNzYWdpbmctYXBwXFxNZXNzYWdpbmctQXBwLUFuZ3VsYXItSW9uaWMvc3JjXFxhcHBcXHBhZ2VzXFxzdXBwb3J0XFxzdXBwb3J0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQ0FBQTtBQ0NKOztBRENBO0VBQ0ksb0JBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNFSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKOztBRENBOztFQUVJLG1CQUFBO0FDRUo7O0FEQ0E7O0VBRUksbUNBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxRQUFBO0FDRUo7O0FEQ0E7O0VBRUksbUNBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQ0FBQTtFQUNBLFVBQUE7QUNFSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0VKOztBRENBOztFQUVJLHlCQUFBO0FDRUo7O0FEQ0E7O0VBRUkscUJBQUE7QUNFSjs7QURDQTs7RUFFSSxzQkFBQTtBQ0VKOztBRENBOztFQUVJLGtCQUFBO0FDRUo7O0FDOUZBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QURpR0o7O0FDOUZBO0VBQ0ksa0JBQUE7QURpR0o7O0FFckdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUZ3R0Y7O0FFdEdBO0VBQ0UsWUFBQTtBRnlHRjs7QUV2R0E7RUFDRSxTQUFBO0FGMEdGOztBRXhHQTtFQUNFLGdCQUFBO0FGMkdGOztBRXhHQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FGMkdGOztBRXhHQTtFQUNFLFlBQUE7QUYyR0Y7O0FFeEdBO0VBQ0UsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBRjJHRjs7QUV4R0E7RUFDRTtJQUNFLGVBQUE7RUYyR0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1cHBvcnQvc3VwcG9ydC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG59XHJcbi5idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgIG1hcmdpbjogMCAwIDJlbTtcclxuICAgIG1heC13aWR0aDogMTYwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idXR0b24taG92ZXIge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbi5idXR0b24taG92ZXI6aG92ZXIsXHJcbi5idXR0b24taG92ZXI6YWN0aXZlIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5idXR0b24taG92ZXI6YWZ0ZXIsXHJcbi5idXR0b24taG92ZXI6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyODBtcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyODBtcyBlYXNlLWluLW91dDtcclxuICAgIHdpZHRoOiAwO1xyXG59XHJcblxyXG4uYnV0dG9uLWhvdmVyOmFmdGVyLFxyXG4uYnV0dG9uLWhvdmVyOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJvcmRlci1jb2xvcjogIzFhNzNlODtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMzUwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAzNTBtcyBlYXNlLWluLW91dDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5idXR0b24taG92ZXI6aG92ZXI6YmVmb3JlIHtcclxuICAgIGJvdHRvbTogYXV0bztcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpiZWZvcmUsXHJcbi5idG4tcHJpbWFyeTphZnRlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMWE3M2U4O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXIsXHJcbi5idG4tcHJpbWFyeTphY3RpdmUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMWE3M2U4O1xyXG59XHJcblxyXG4uYnRuLXNlY29uZGFyeTpiZWZvcmUsXHJcbi5idG4tc2Vjb25kYXJ5OmFmdGVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbn1cclxuXHJcbi5idG4tc2Vjb25kYXJ5OmhvdmVyLFxyXG4uYnRuLXNlY29uZGFyeTphY3RpdmUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmV5O1xyXG59XHJcbiIsIioge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xufVxuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnRuIHtcbiAgY29sb3I6IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbjogMCAwIDJlbTtcbiAgbWF4LXdpZHRoOiAxNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnV0dG9uLWhvdmVyIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5cbi5idXR0b24taG92ZXI6aG92ZXIsXG4uYnV0dG9uLWhvdmVyOmFjdGl2ZSB7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG59XG5cbi5idXR0b24taG92ZXI6YWZ0ZXIsXG4uYnV0dG9uLWhvdmVyOmJlZm9yZSB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJvdHRvbTogMHB4O1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDI4MG1zIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMjgwbXMgZWFzZS1pbi1vdXQ7XG4gIHdpZHRoOiAwO1xufVxuXG4uYnV0dG9uLWhvdmVyOmFmdGVyLFxuLmJ1dHRvbi1ob3ZlcjpiZWZvcmUge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBib3JkZXItY29sb3I6ICMxYTczZTg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMzUwbXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IHdpZHRoIDM1MG1zIGVhc2UtaW4tb3V0O1xuICB3aWR0aDogNzAlO1xufVxuXG4uYnV0dG9uLWhvdmVyOmhvdmVyOmJlZm9yZSB7XG4gIGJvdHRvbTogYXV0bztcbiAgdG9wOiAwO1xuICB3aWR0aDogNzAlO1xufVxuXG4uYnRuLXByaW1hcnk6YmVmb3JlLFxuLmJ0bi1wcmltYXJ5OmFmdGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzFhNzNlODtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyLFxuLmJ0bi1wcmltYXJ5OmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogIzFhNzNlODtcbn1cblxuLmJ0bi1zZWNvbmRhcnk6YmVmb3JlLFxuLmJ0bi1zZWNvbmRhcnk6YWZ0ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xufVxuXG4uYnRuLXNlY29uZGFyeTpob3Zlcixcbi5idG4tc2Vjb25kYXJ5OmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogZ3JleTtcbn1cblxuaDQge1xuICB0b3A6IDV2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3VwcG9ydC1sb2dvIHtcbiAgcGFkZGluZzogMjBweCAwO1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMywgaDQge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmg0IHtcbiAgdG9wOiAxMHZoO1xufVxuXG4uc3VwcG9ydC1sb2dvIGltZyB7XG4gIG1heC13aWR0aDogMTUwcHg7XG59XG5cbmgzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI1dmg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uYnV0dG9uLWhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnL2JnLTUuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nLXRvcDogNXZoO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBoNCB7XG4gICAgbWFyZ2luLXRvcDogNXZoO1xuICB9XG59IiwiaDQge1xyXG4gICAgdG9wOiA1dmg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iLCJAaW1wb3J0IFwiX2J1dHRvblwiO1xyXG5AaW1wb3J0IFwiX3RpdGxlLXRleHRcIjtcclxuXHJcbi5zdXBwb3J0LWxvZ28ge1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaDMsIGg0IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuaDQge1xyXG4gIHRvcDogMTB2aDtcclxufSBcclxuLnN1cHBvcnQtbG9nbyBpbWcgeyBcclxuICBtYXgtd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjV2aDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLmJ1dHRvbi1ob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlOyBcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnL2JnLTUuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwYWRkaW5nLXRvcDogNXZoO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIGg0IHtcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxuICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/support/support.ts":
  /*!******************************************!*\
    !*** ./src/app/pages/support/support.ts ***!
    \******************************************/

  /*! exports provided: SupportPage */

  /***/
  function srcAppPagesSupportSupportTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportPage", function () {
      return SupportPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SupportPage = function SupportPage() {
      _classCallCheck(this, SupportPage);
    };

    SupportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-support',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./support.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./support.scss */
      "./src/app/pages/support/support.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SupportPage);
    /***/
  }
}]);
//# sourceMappingURL=support-support-module-es5.js.map