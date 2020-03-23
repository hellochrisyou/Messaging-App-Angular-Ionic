function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-page-tabs-page-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.html":
    /*!******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.html ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAboutAboutHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <ion-header class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button (click)=\"presentPopover($event)\">\r\n          <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <div class=\"about-header\">\r\n    <!-- Instead of loading an image each time the select changes, use opacity to transition them -->\r\n    <div class=\"about-image madison\" [ngStyle]=\"location === 'madison' && {'opacity': '1'}\"></div>\r\n    <div class=\"about-image austin\" [ngStyle]=\"location === 'austin' && {'opacity': '1'}\"></div>\r\n    <div class=\"about-image chicago\" [ngStyle]=\"location === 'chicago' && {'opacity': '1'}\"></div>\r\n    <div class=\"about-image seattle\" [ngStyle]=\"location === 'seattle' && {'opacity': '1'}\"></div>\r\n  </div>\r\n\r\n  <div class=\"about-info\">\r\n    <h3 class=\"ion-padding-top ion-padding-start\">About</h3>\r\n\r\n    <p class=\"ion-padding-start ion-padding-end\">\r\n      The Ionic Conference is a one-day conference on {{ conferenceDate | date: 'mediumDate' }} featuring talks from the Ionic team. It is focused on Ionic applications being built with Ionic Framework. This includes migrating apps to the latest version of the framework, Angular concepts, Webpack, Sass, and many other technologies used in Ionic 2. Tickets are completely sold out, and we’re expecting more than 1000 developers – making this the largest Ionic conference ever!\r\n    </p>\r\n\r\n    <h3 class=\"ion-padding-top ion-padding-start\">Details</h3>\r\n\r\n    <ion-list lines=\"none\">\r\n      <ion-item>\r\n        <ion-label>\r\n          Location\r\n        </ion-label>\r\n        <ion-select [(ngModel)]=\"location\" [interfaceOptions]=\"selectOptions\">\r\n          <ion-select-option value=\"madison\">Madison, WI</ion-select-option>\r\n          <ion-select-option value=\"austin\">Austin, TX</ion-select-option>\r\n          <ion-select-option value=\"chicago\">Chicago, IL</ion-select-option>\r\n          <ion-select-option value=\"seattle\">Seattle, WA</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>\r\n          Date\r\n        </ion-label>\r\n        <ion-datetime\r\n          displayFormat=\"MMM DD, YYYY\"\r\n          max=\"2056\"\r\n          [(ngModel)]=\"conferenceDate\">\r\n        </ion-datetime>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <h3 class=\"ion-padding-top ion-padding-start\">Internet</h3>\r\n\r\n    <ion-list lines=\"none\">\r\n      <ion-item>\r\n        <ion-label>\r\n          Wifi network\r\n        </ion-label>\r\n        <ion-label class=\"ion-text-end\">\r\n          ica{{conferenceDate | date: 'y'}}\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>\r\n          Password\r\n        </ion-label>\r\n        <ion-label class=\"ion-text-end\">\r\n          makegoodthings\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesMapMapHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Map</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div #mapCanvas class=\"map-canvas\"></div>\r\n</ion-content>\r\n";
      /***/
    },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-detail/session-detail.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-detail/session-detail.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSessionDetailSessionDetailHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button [defaultHref]=\"defaultHref\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"toggleFavorite()\">\r\n        <ion-icon *ngIf=\"!isFavorite\" slot=\"icon-only\" name=\"star-outline\"></ion-icon>\r\n        <ion-icon *ngIf=\"isFavorite\" slot=\"icon-only\" name=\"star\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button (click)=\"shareSession()\">\r\n        <ion-icon slot=\"icon-only\" name=\"share\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"session\" class=\"ion-padding\">\r\n    <h1>{{session.name}}</h1>\r\n    <span *ngFor=\"let track of session?.tracks\" [class]=\"'session-track-'+track.toLowerCase()\">{{track}}</span>\r\n    <p>{{session.description}}</p>\r\n    <ion-text color=\"medium\">\r\n      {{session.timeStart}} &ndash; {{session.timeEnd}}\r\n      <br /> {{session.location}}\r\n    </ion-text>\r\n  </div>\r\n\r\n  <ion-list>\r\n    <ion-item (click)=\"sessionClick('watch')\" button>\r\n      <ion-label color=\"primary\">Watch</ion-label>\r\n    </ion-item>\r\n    <ion-item (click)=\"sessionClick('add to calendar')\" button>\r\n      <ion-label color=\"primary\">Add to Calendar</ion-label>\r\n    </ion-item>\r\n    <ion-item (click)=\"sessionClick('mark as unwatched')\" button>\r\n      <ion-label color=\"primary\">Mark as Unwatched</ion-label>\r\n    </ion-item>\r\n    <ion-item (click)=\"sessionClick('download video')\" button>\r\n      <ion-label color=\"primary\">Download Video</ion-label>\r\n      <ion-icon slot=\"end\" color=\"primary\" size=\"small\" name=\"cloud-download\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item (click)=\"sessionClick('leave feedback')\" button>\r\n      <ion-label color=\"primary\">Leave Feedback</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";
      /***/
    },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-detail/speaker-detail.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-detail/speaker-detail.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSpeakerDetailSpeakerDetailHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"speaker-detail\">\r\n  <ion-header class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/app/tabs/friends\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-buttons *ngIf=\"speaker\" slot=\"end\">\r\n        <ion-button (click)=\"openContact(speaker)\">\r\n          <ion-icon slot=\"icon-only\" ios=\"call-outline\" md=\"call-sharp\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button (click)=\"openSpeakerShare(speaker)\">\r\n          <ion-icon slot=\"icon-only\" ios=\"share-outline\" md=\"share-sharp\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <div class=\"speaker-background\">\r\n    <img [src]=\"speaker?.profilePic\" [alt]=\"speaker?.name\">\r\n    <h2>{{speaker?.name}}</h2>\r\n  </div>\r\n\r\n  <div class=\"ion-padding speaker-detail\">\r\n    <p>{{speaker?.about}} Say hello on social media!</p>\r\n\r\n    <hr>\r\n\r\n    <ion-chip color=\"twitter\" button (click)=\"openExternalUrl('https://twitter.com/' + speaker.twitter)\">\r\n      <ion-icon name=\"logo-twitter\"></ion-icon>\r\n      <ion-label>Twitter</ion-label>\r\n    </ion-chip>\r\n\r\n    <ion-chip color=\"dark\" button (click)=\"openExternalUrl('https://github.com/ionic-team/ionic')\">\r\n      <ion-icon name=\"logo-github\"></ion-icon>\r\n      <ion-label>GitHub</ion-label>\r\n    </ion-chip>\r\n\r\n    <ion-chip color=\"instagram\" button (click)=\"openExternalUrl('https://instagram.com/ionicframework')\">\r\n      <ion-icon name=\"logo-instagram\"></ion-icon>\r\n      <ion-label>Instagram</ion-label>\r\n    </ion-chip>\r\n  </div>\r\n</ion-content>";
      /***/
    },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-list/speaker-list.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-list/speaker-list.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesFriendsListFriendsListHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Speakers</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Speakers</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-md=\"6\" *ngFor=\"let speaker of speakers\">\r\n        <ion-card class=\"speaker-card\">\r\n          <ion-card-header>\r\n            <ion-item detail=\"false\" lines=\"none\" class=\"speaker-item\"\r\n              routerLink=\"/app/tabs/friends/friends-details/{{speaker.id}}\">\r\n              <ion-avatar slot=\"start\">\r\n                <img [src]=\"speaker.profilePic\" [alt]=\"speaker.name + ' profile picture'\">\r\n              </ion-avatar>\r\n              <ion-label>\r\n                <h2>{{speaker.name}}</h2>\r\n                <p>{{speaker.title}}</p>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-card-header>\r\n\r\n          <ion-card-content>\r\n            <ion-list lines=\"none\">\r\n              <ion-item *ngFor=\"let session of speaker.sessions\" detail=\"false\"\r\n                routerLink=\"/app/tabs/friends/session/{{session.id}}\">\r\n                <ion-label>\r\n                  <h3>{{session.name}}</h3>\r\n                </ion-label>\r\n              </ion-item>\r\n\r\n              <ion-item detail=\"false\" routerLink=\"/app/tabs/friends/friends-details/{{speaker.id}}\">\r\n                <ion-label>\r\n                  <h3>About {{speaker.name}}</h3>\r\n                </ion-label>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>";
      /***/
    },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-page/tabs-page.html":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-page/tabs-page.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesTabsPageTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n\r\n    <ion-tab-button tab=\"speakers\">\r\n      <ion-icon name=\"people\"></ion-icon>\r\n      <ion-label>Speakers</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"map\">\r\n      <ion-icon name=\"location\"></ion-icon>\r\n      <ion-label>Map</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"about\">\r\n      <ion-icon name=\"information-circle\"></ion-icon>\r\n      <ion-label>About</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>";
      /***/
    },

  /***/
  "./src/app/pages/about-popover/about-popover.ts":
    /*!******************************************************!*\
      !*** ./src/app/pages/about-popover/about-popover.ts ***!
      \******************************************************/

    /*! exports provided: PopoverPage */

    /***/
    function srcAppPagesAboutPopoverAboutPopoverTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverPage", function () {
        return PopoverPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! @ionic/angular */
        "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

      var PopoverPage =
        /*#__PURE__*/
        function () {
          function PopoverPage(popoverCtrl) {
            _classCallCheck(this, PopoverPage);

            this.popoverCtrl = popoverCtrl;
          }

          _createClass(PopoverPage, [{
            key: "support",
            value: function support() {
              // this.app.getRootNavs()[0].push('/support');
              this.popoverCtrl.dismiss();
            }
          }, {
            key: "close",
            value: function close(url) {
              window.open(url, '_blank');
              this.popoverCtrl.dismiss();
            }
          }]);

          return PopoverPage;
        }();

      PopoverPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
        }];
      };

      PopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: "\n    <ion-list>\n      <ion-item button (click)=\"close('https://ionicframework.com/getting-started')\">\n        <ion-label>Learn Ionic</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"close('https://ionicframework.com/docs/')\">\n        <ion-label>Documentation</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"close('https://showcase.ionicframework.com')\">\n        <ion-label>Showcase</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"close('https://github.com/ionic-team/ionic')\">\n        <ion-label>GitHub Repo</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"support()\">\n        <ion-label>Support</ion-label>\n      </ion-item>\n    </ion-list>\n  "
      }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], PopoverPage);
      /***/
    },

  /***/
  "./src/app/pages/about/about-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/about/about-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: AboutPageRoutingModule */

    /***/
    function srcAppPagesAboutAboutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function () {
        return AboutPageRoutingModule;
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


      var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./about */
        "./src/app/pages/about/about.ts");

      var routes = [{
        path: '',
        component: _about__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
      }];

      var AboutPageRoutingModule = function AboutPageRoutingModule() {
        _classCallCheck(this, AboutPageRoutingModule);
      };

      AboutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AboutPageRoutingModule);
      /***/
    },

  /***/
  "./src/app/pages/about/about.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/about/about.module.ts ***!
      \*********************************************/

    /*! exports provided: AboutModule */

    /***/
    function srcAppPagesAboutAboutModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutModule", function () {
        return AboutModule;
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


      var _about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./about */
        "./src/app/pages/about/about.ts");
      /* harmony import */


      var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ../about-popover/about-popover */
        "./src/app/pages/about-popover/about-popover.ts");
      /* harmony import */


      var _about_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ./about-routing.module */
        "./src/app/pages/about/about-routing.module.ts");

      var AboutModule = function AboutModule() {
        _classCallCheck(this, AboutModule);
      };

      AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_7__["AboutPageRoutingModule"]],
        declarations: [_about__WEBPACK_IMPORTED_MODULE_5__["AboutPage"], _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]],
        entryComponents: [_about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]],
        bootstrap: [_about__WEBPACK_IMPORTED_MODULE_5__["AboutPage"]]
      })], AboutModule);
      /***/
    },

  /***/
  "./src/app/pages/about/about.scss":
    /*!****************************************!*\
      !*** ./src/app/pages/about/about.scss ***!
      \****************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAboutAboutScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  --background: transparent;\n  --color: white;\n}\n\nion-toolbar ion-button,\nion-toolbar ion-back-button,\nion-toolbar ion-menu-button {\n  --color: white;\n}\n\n.about-header {\n  position: relative;\n  width: 100%;\n  height: 30%;\n}\n\n.about-header .about-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  opacity: 0;\n  -webkit-transition: opacity 500ms ease-in-out;\n  transition: opacity 500ms ease-in-out;\n}\n\n.about-header .madison {\n  background-image: url(/assets/img/about/madison.jpg);\n}\n\n.about-header .austin {\n  background-image: url(/assets/img/about/austin.jpg);\n}\n\n.about-header .chicago {\n  background-image: url(/assets/img/about/chicago.jpg);\n}\n\n.about-header .seattle {\n  background-image: url(/assets/img/about/seattle.jpg);\n}\n\n.about-info {\n  position: absolute;\n  margin-top: -10px;\n  border-radius: 10px;\n  background: var(--ion-background-color, #fff);\n}\n\n.about-info h3 {\n  margin-top: 0;\n}\n\n.about-info ion-list {\n  padding-top: 0;\n}\n\n.about-info p {\n  line-height: 130%;\n  color: var(--ion-color-dark);\n}\n\n.about-info ion-icon {\n  -webkit-margin-end: 32px;\n          margin-inline-end: 32px;\n}\n\n/*\n * iOS Only\n */\n\n.ios .about-info {\n  --ion-padding: 19px;\n}\n\n.ios .about-info h3 {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvQzpcXGdpdGh1YlxcbWVzc2FnaW5nLWFwcC9zcmNcXGFwcFxccGFnZXNcXGFib3V0XFxhYm91dC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFFQSx5QkFBQTtFQUNBLGNBQUE7QUNERjs7QURJQTs7O0VBR0UsY0FBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFFQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBRUEsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBRUEsVUFBQTtFQUVBLDZDQUFBO0VBQUEscUNBQUE7QUNORjs7QURTQTtFQUNFLG9EQUFBO0FDTkY7O0FEUUE7RUFDRSxtREFBQTtBQ0xGOztBRE9BO0VBQ0Usb0RBQUE7QUNKRjs7QURNQTtFQUNFLG9EQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtBQ0hGOztBRE1BO0VBQ0UsYUFBQTtBQ0hGOztBRE1BO0VBQ0UsY0FBQTtBQ0hGOztBRE1BO0VBQ0UsaUJBQUE7RUFFQSw0QkFBQTtBQ0pGOztBRE9BO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBQ0pGOztBRE9BOztFQUFBOztBQUlBO0VBQ0UsbUJBQUE7QUNMRjs7QURRQTtFQUNFLGdCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcblxyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIGlvbi1idXR0b24sXHJcbmlvbi10b29sYmFyIGlvbi1iYWNrLWJ1dHRvbixcclxuaW9uLXRvb2xiYXIgaW9uLW1lbnUtYnV0dG9uIHtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmFib3V0LWhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwJTtcclxufVxyXG5cclxuLmFib3V0LWhlYWRlciAuYWJvdXQtaW1hZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG5cclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICBvcGFjaXR5OiAwO1xyXG5cclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uYWJvdXQtaGVhZGVyIC5tYWRpc29uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYWJvdXQvbWFkaXNvbi5qcGcpO1xyXG59XHJcbi5hYm91dC1oZWFkZXIgLmF1c3RpbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L2F1c3Rpbi5qcGcpO1xyXG59XHJcbi5hYm91dC1oZWFkZXIgLmNoaWNhZ28ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9jaGljYWdvLmpwZyk7XHJcbn1cclxuLmFib3V0LWhlYWRlciAuc2VhdHRsZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L3NlYXR0bGUuanBnKTtcclxufVxyXG5cclxuLmFib3V0LWluZm8ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKTtcclxufVxyXG5cclxuLmFib3V0LWluZm8gaDMge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5hYm91dC1pbmZvIGlvbi1saXN0IHtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG5cclxuLmFib3V0LWluZm8gcCB7XHJcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XHJcblxyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbn1cclxuXHJcbi5hYm91dC1pbmZvIGlvbi1pY29uIHtcclxuICBtYXJnaW4taW5saW5lLWVuZDogMzJweDtcclxufVxyXG5cclxuLypcclxuICogaU9TIE9ubHlcclxuICovXHJcblxyXG4uaW9zIC5hYm91dC1pbmZvIHtcclxuICAtLWlvbi1wYWRkaW5nOiAxOXB4O1xyXG59XHJcblxyXG4uaW9zIC5hYm91dC1pbmZvIGgzIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbiIsImlvbi10b29sYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbixcbmlvbi10b29sYmFyIGlvbi1iYWNrLWJ1dHRvbixcbmlvbi10b29sYmFyIGlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4uYWJvdXQtaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMCU7XG59XG5cbi5hYm91dC1oZWFkZXIgLmFib3V0LWltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlLWluLW91dDtcbn1cblxuLmFib3V0LWhlYWRlciAubWFkaXNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9tYWRpc29uLmpwZyk7XG59XG5cbi5hYm91dC1oZWFkZXIgLmF1c3RpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9hdXN0aW4uanBnKTtcbn1cblxuLmFib3V0LWhlYWRlciAuY2hpY2FnbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9jaGljYWdvLmpwZyk7XG59XG5cbi5hYm91dC1oZWFkZXIgLnNlYXR0bGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYWJvdXQvc2VhdHRsZS5qcGcpO1xufVxuXG4uYWJvdXQtaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKTtcbn1cblxuLmFib3V0LWluZm8gaDMge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uYWJvdXQtaW5mbyBpb24tbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uYWJvdXQtaW5mbyBwIHtcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbi5hYm91dC1pbmZvIGlvbi1pY29uIHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDMycHg7XG59XG5cbi8qXG4gKiBpT1MgT25seVxuICovXG4uaW9zIC5hYm91dC1pbmZvIHtcbiAgLS1pb24tcGFkZGluZzogMTlweDtcbn1cblxuLmlvcyAuYWJvdXQtaW5mbyBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59Il19 */";
      /***/
    },

  /***/
  "./src/app/pages/about/about.ts":
    /*!**************************************!*\
      !*** ./src/app/pages/about/about.ts ***!
      \**************************************/

    /*! exports provided: AboutPage */

    /***/
    function srcAppPagesAboutAboutTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPage", function () {
        return AboutPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! @ionic/angular */
        "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../about-popover/about-popover */
        "./src/app/pages/about-popover/about-popover.ts");

      var AboutPage =
        /*#__PURE__*/
        function () {
          function AboutPage(popoverCtrl) {
            _classCallCheck(this, AboutPage);

            this.popoverCtrl = popoverCtrl;
            this.location = 'madison';
            this.conferenceDate = '2047-05-17';
            this.selectOptions = {
              header: 'Select a Location'
            };
          }

          _createClass(AboutPage, [{
            key: "presentPopover",
            value: function presentPopover(event) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee() {
                  var popover;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return this.popoverCtrl.create({
                            component: _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_3__["PopoverPage"],
                            event: event
                          });

                        case 2:
                          popover = _context.sent;
                          _context.next = 5;
                          return popover.present();

                        case 5:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
            }
          }]);

          return AboutPage;
        }();

      AboutPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
        }];
      };

      AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
          /*! raw-loader!./about.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
          /*! ./about.scss */
          "./src/app/pages/about/about.scss")).default]
      }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], AboutPage);
      /***/
    },

  /***/
  "./src/app/pages/map/map-dark-style.js":
    /*!*********************************************!*\
      !*** ./src/app/pages/map/map-dark-style.js ***!
      \*********************************************/

    /*! exports provided: darkStyle */

    /***/
    function srcAppPagesMapMapDarkStyleJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "darkStyle", function () {
        return darkStyle;
      });

      var darkStyle = [{
        "elementType": "geometry",
        "stylers": [{
          "color": "#242f3e"
        }]
      }, {
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#746855"
        }]
      }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#242f3e"
        }]
      }, {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#d59563"
        }]
      }, {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#d59563"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#263c3f"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#6b9a76"
        }]
      }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
          "color": "#38414e"
        }]
      }, {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#212a37"
        }]
      }, {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9ca5b3"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#746855"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#1f2835"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#f3d19c"
        }]
      }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
          "color": "#2f3948"
        }]
      }, {
        "featureType": "transit.station",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#d59563"
        }]
      }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#17263c"
        }]
      }, {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#515c6d"
        }]
      }, {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#17263c"
        }]
      }];
      /***/
    },

  /***/
  "./src/app/pages/map/map-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/map/map-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: MapPageRoutingModule */

    /***/
    function srcAppPagesMapMapRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapPageRoutingModule", function () {
        return MapPageRoutingModule;
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


      var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./map */
        "./src/app/pages/map/map.ts");

      var routes = [{
        path: '',
        component: _map__WEBPACK_IMPORTED_MODULE_3__["MapPage"]
      }];

      var MapPageRoutingModule = function MapPageRoutingModule() {
        _classCallCheck(this, MapPageRoutingModule);
      };

      MapPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MapPageRoutingModule);
      /***/
    },

  /***/
  "./src/app/pages/map/map.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/pages/map/map.module.ts ***!
      \*****************************************/

    /*! exports provided: MapModule */

    /***/
    function srcAppPagesMapMapModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapModule", function () {
        return MapModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! @ionic/angular */
        "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./map */
        "./src/app/pages/map/map.ts");
      /* harmony import */


      var _map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./map-routing.module */
        "./src/app/pages/map/map-routing.module.ts");

      var MapModule = function MapModule() {
        _classCallCheck(this, MapModule);
      };

      MapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _map_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapPageRoutingModule"]],
        declarations: [_map__WEBPACK_IMPORTED_MODULE_4__["MapPage"]]
      })], MapModule);
      /***/
    },

  /***/
  "./src/app/pages/map/map.scss":
    /*!************************************!*\
      !*** ./src/app/pages/map/map.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesMapMapScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".map-canvas {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 0;\n  -webkit-transition: opacity 150ms ease-in;\n  transition: opacity 150ms ease-in;\n}\n\n.show-map {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFwL0M6XFxnaXRodWJcXG1lc3NhZ2luZy1hcHAvc3JjXFxhcHBcXHBhZ2VzXFxtYXBcXG1hcC5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYXAvbWFwLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0VBRUEsNkJBQUE7RUFFQSxVQUFBO0VBQ0EseUNBQUE7RUFBQSxpQ0FBQTtBQ0ZGOztBREtBO0VBQ0UsVUFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFwL21hcC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcC1jYW52YXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW47XHJcbn1cclxuXHJcbi5zaG93LW1hcCB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4iLCIubWFwLWNhbnZhcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbjtcbn1cblxuLnNob3ctbWFwIHtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */";
      /***/
    },

  /***/
  "./src/app/pages/map/map.ts":
    /*!**********************************!*\
      !*** ./src/app/pages/map/map.ts ***!
      \**********************************/

    /*! exports provided: MapPage */

    /***/
    function srcAppPagesMapMapTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapPage", function () {
        return MapPage;
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


      var _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../../providers/conference-data */
        "./src/app/providers/conference-data.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! @ionic/angular */
        "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! @angular/common */
        "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _map_dark_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./map-dark-style */
        "./src/app/pages/map/map-dark-style.js");

      var MapPage =
        /*#__PURE__*/
        function () {
          function MapPage(doc, confData, platform) {
            _classCallCheck(this, MapPage);

            this.doc = doc;
            this.confData = confData;
            this.platform = platform;
          }

          _createClass(MapPage, [{
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee2() {
                  var _this = this;

                  var appEl, isDark, style, googleMaps, map, observer;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          appEl = this.doc.querySelector('ion-app');
                          isDark = false;
                          style = [];

                          if (appEl.classList.contains('dark-theme')) {
                            style = _map_dark_style__WEBPACK_IMPORTED_MODULE_5__["darkStyle"];
                          }

                          _context2.next = 6;
                          return getGoogleMaps('AIzaSyB8pf6ZdFQj5qw7rc_HSGrhUwQKfIe9ICw');

                        case 6:
                          googleMaps = _context2.sent;
                          this.confData.getMap().subscribe(function (mapData) {
                            var mapEle = _this.mapElement.nativeElement;
                            map = new googleMaps.Map(mapEle, {
                              center: mapData.find(function (d) {
                                return d.center;
                              }),
                              zoom: 16,
                              styles: style
                            });
                            mapData.forEach(function (markerData) {
                              var infoWindow = new googleMaps.InfoWindow({
                                content: "<h5>".concat(markerData.name, "</h5>")
                              });
                              var marker = new googleMaps.Marker({
                                position: markerData,
                                map: map,
                                title: markerData.name
                              });
                              marker.addListener('click', function () {
                                infoWindow.open(map, marker);
                              });
                            });
                            googleMaps.event.addListenerOnce(map, 'idle', function () {
                              mapEle.classList.add('show-map');
                            });
                          });
                          observer = new MutationObserver(function (mutations) {
                            mutations.forEach(function (mutation) {
                              if (mutation.attributeName === 'class') {
                                var el = mutation.target;
                                isDark = el.classList.contains('dark-theme');

                                if (map && isDark) {
                                  map.setOptions({
                                    styles: _map_dark_style__WEBPACK_IMPORTED_MODULE_5__["darkStyle"]
                                  });
                                } else if (map) {
                                  map.setOptions({
                                    styles: []
                                  });
                                }
                              }
                            });
                          });
                          observer.observe(appEl, {
                            attributes: true
                          });

                        case 10:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));
            }
          }]);

          return MapPage;
        }();

      MapPage.ctorParameters = function () {
        return [{
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }];
      };

      tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapCanvas', {
        static: true
      }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], MapPage.prototype, "mapElement", void 0);
      MapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
          /*! raw-loader!./map.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
          /*! ./map.scss */
          "./src/app/pages/map/map.scss")).default]
      }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Document, _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])], MapPage);

      function getGoogleMaps(apiKey) {
        var win = window;
        var googleModule = win.google;

        if (googleModule && googleModule.maps) {
          return Promise.resolve(googleModule.maps);
        }

        return new Promise(function (resolve, reject) {
          var script = document.createElement('script');
          script.src = "https://maps.googleapis.com/maps/api/js?key=".concat(apiKey, "&v=3.31");
          script.async = true;
          script.defer = true;
          document.body.appendChild(script);

          script.onload = function () {
            var googleModule2 = win.google;

            if (googleModule2 && googleModule2.maps) {
              resolve(googleModule2.maps);
            } else {
              reject('google maps not available');
            }
          };
        });
      }
      /***/

    },

  /***/
  "./src/app/pages/session-detail/session-detail-routing.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/session-detail/session-detail-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: SessionDetailPageRoutingModule */

    /***/
    function srcAppPagesSessionDetailSessionDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionDetailPageRoutingModule", function () {
        return SessionDetailPageRoutingModule;
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


      var _session_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./session-detail */
        "./src/app/pages/session-detail/session-detail.ts");

      var routes = [{
        path: '',
        component: _session_detail__WEBPACK_IMPORTED_MODULE_3__["SessionDetailPage"]
      }];

      var SessionDetailPageRoutingModule = function SessionDetailPageRoutingModule() {
        _classCallCheck(this, SessionDetailPageRoutingModule);
      };

      SessionDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SessionDetailPageRoutingModule);
      /***/
    },

  /***/
  "./src/app/pages/session-detail/session-detail.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/session-detail/session-detail.module.ts ***!
      \***************************************************************/

    /*! exports provided: SessionDetailModule */

    /***/
    function srcAppPagesSessionDetailSessionDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionDetailModule", function () {
        return SessionDetailModule;
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


      var _session_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./session-detail */
        "./src/app/pages/session-detail/session-detail.ts");
      /* harmony import */


      var _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./session-detail-routing.module */
        "./src/app/pages/session-detail/session-detail-routing.module.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! @ionic/angular */
        "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

      var SessionDetailModule = function SessionDetailModule() {
        _classCallCheck(this, SessionDetailModule);
      };

      SessionDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["SessionDetailPageRoutingModule"]],
        declarations: [_session_detail__WEBPACK_IMPORTED_MODULE_3__["SessionDetailPage"]]
      })], SessionDetailModule);
      /***/
    },

  /***/
  "./src/app/pages/session-detail/session-detail.scss":
    /*!**********************************************************!*\
      !*** ./src/app/pages/session-detail/session-detail.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSessionDetailSessionDetailScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".session-track-ionic {\n  color: var(--ion-color-primary);\n}\n\n.session-track-angular {\n  color: var(--ion-color-angular);\n}\n\n.session-track-communication {\n  color: var(--ion-color-communication);\n}\n\n.session-track-tooling {\n  color: var(--ion-color-tooling);\n}\n\n.session-track-services {\n  color: var(--ion-color-services);\n}\n\n.session-track-design {\n  color: var(--ion-color-design);\n}\n\n.session-track-workshop {\n  color: var(--ion-color-workshop);\n}\n\n.session-track-food {\n  color: var(--ion-color-food);\n}\n\n.session-track-documentation {\n  color: var(--ion-color-documentation);\n}\n\n.session-track-navigation {\n  color: var(--ion-color-navigation);\n}\n\n/* Favorite Icon\n * --------------------------------------------------------\n */\n\n.show-favorite {\n  position: relative;\n}\n\n.icon-heart-empty,\n.icon-heart {\n  --border-radius: 50%;\n  --padding-start: 0;\n  --padding-end: 0;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  width: 48px;\n  height: 48px;\n  font-size: 16px;\n  -webkit-transition: -webkit-transform 300ms ease;\n  transition: -webkit-transform 300ms ease;\n  transition: transform 300ms ease;\n  transition: transform 300ms ease, -webkit-transform 300ms ease;\n}\n\n.icon-heart-empty {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n.icon-heart {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\n.show-favorite .icon-heart {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n.show-favorite .icon-heart-empty {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\nh1 {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1kZXRhaWwvQzpcXGdpdGh1YlxcbWVzc2FnaW5nLWFwcC9zcmNcXGFwcFxccGFnZXNcXHNlc3Npb24tZGV0YWlsXFxzZXNzaW9uLWRldGFpbC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZXNzaW9uLWRldGFpbC9zZXNzaW9uLWRldGFpbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUNDRjs7QURFQTtFQUNFLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQ0FBQTtBQ0NGOztBREVBO0VBQ0UsK0JBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQ0FBQTtBQ0NGOztBREVBO0VBQ0Usa0NBQUE7QUNDRjs7QURFQTs7RUFBQTs7QUFJQTtFQUNFLGtCQUFBO0FDQUY7O0FER0E7O0VBRUUsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7RUFFQSxRQUFBO0VBQ0EsVUFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtFQUVBLGdEQUFBO0VBQUEsd0NBQUE7RUFBQSxnQ0FBQTtFQUFBLDhEQUFBO0FDTEY7O0FEUUE7RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0FDTEY7O0FEUUE7RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0FDTEY7O0FEUUE7RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0FDTEY7O0FEUUE7RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0FDTEY7O0FEUUE7RUFDRSxTQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXNzaW9uLWRldGFpbC9zZXNzaW9uLWRldGFpbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlc3Npb24tdHJhY2staW9uaWMge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5zZXNzaW9uLXRyYWNrLWFuZ3VsYXIge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYW5ndWxhcik7XHJcbn1cclxuXHJcbi5zZXNzaW9uLXRyYWNrLWNvbW11bmljYXRpb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29tbXVuaWNhdGlvbik7XHJcbn1cclxuXHJcbi5zZXNzaW9uLXRyYWNrLXRvb2xpbmcge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdG9vbGluZyk7XHJcbn1cclxuXHJcbi5zZXNzaW9uLXRyYWNrLXNlcnZpY2VzIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlcnZpY2VzKTtcclxufVxyXG5cclxuLnNlc3Npb24tdHJhY2stZGVzaWduIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRlc2lnbik7XHJcbn1cclxuXHJcbi5zZXNzaW9uLXRyYWNrLXdvcmtzaG9wIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdvcmtzaG9wKTtcclxufVxyXG5cclxuLnNlc3Npb24tdHJhY2stZm9vZCB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1mb29kKTtcclxufVxyXG5cclxuLnNlc3Npb24tdHJhY2stZG9jdW1lbnRhdGlvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kb2N1bWVudGF0aW9uKTtcclxufVxyXG5cclxuLnNlc3Npb24tdHJhY2stbmF2aWdhdGlvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1uYXZpZ2F0aW9uKTtcclxufVxyXG5cclxuLyogRmF2b3JpdGUgSWNvblxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbi5zaG93LWZhdm9yaXRlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pY29uLWhlYXJ0LWVtcHR5LFxyXG4uaWNvbi1oZWFydCB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gIC0tcGFkZGluZy1lbmQ6IDA7XHJcblxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgdG9wOiA1cHg7XHJcbiAgcmlnaHQ6IDVweDtcclxuXHJcbiAgd2lkdGg6IDQ4cHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG5cclxuICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlO1xyXG59XHJcblxyXG4uaWNvbi1oZWFydC1lbXB0eSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG5cclxuLmljb24taGVhcnQge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbn1cclxuXHJcbi5zaG93LWZhdm9yaXRlIC5pY29uLWhlYXJ0IHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcblxyXG4uc2hvdy1mYXZvcml0ZSAuaWNvbi1oZWFydC1lbXB0eSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxufVxyXG5cclxuaDEge1xyXG4gIG1hcmdpbjogMDtcclxufSIsIi5zZXNzaW9uLXRyYWNrLWlvbmljIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLnNlc3Npb24tdHJhY2stYW5ndWxhciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYW5ndWxhcik7XG59XG5cbi5zZXNzaW9uLXRyYWNrLWNvbW11bmljYXRpb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbW11bmljYXRpb24pO1xufVxuXG4uc2Vzc2lvbi10cmFjay10b29saW5nIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10b29saW5nKTtcbn1cblxuLnNlc3Npb24tdHJhY2stc2VydmljZXMge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlcnZpY2VzKTtcbn1cblxuLnNlc3Npb24tdHJhY2stZGVzaWduIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kZXNpZ24pO1xufVxuXG4uc2Vzc2lvbi10cmFjay13b3Jrc2hvcCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd29ya3Nob3ApO1xufVxuXG4uc2Vzc2lvbi10cmFjay1mb29kIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1mb29kKTtcbn1cblxuLnNlc3Npb24tdHJhY2stZG9jdW1lbnRhdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZG9jdW1lbnRhdGlvbik7XG59XG5cbi5zZXNzaW9uLXRyYWNrLW5hdmlnYXRpb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW5hdmlnYXRpb24pO1xufVxuXG4vKiBGYXZvcml0ZSBJY29uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4uc2hvdy1mYXZvcml0ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmljb24taGVhcnQtZW1wdHksXG4uaWNvbi1oZWFydCB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2U7XG59XG5cbi5pY29uLWhlYXJ0LWVtcHR5IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLmljb24taGVhcnQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuXG4uc2hvdy1mYXZvcml0ZSAuaWNvbi1oZWFydCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5zaG93LWZhdm9yaXRlIC5pY29uLWhlYXJ0LWVtcHR5IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cblxuaDEge1xuICBtYXJnaW46IDA7XG59Il19 */";
      /***/
    },

  /***/
  "./src/app/pages/session-detail/session-detail.ts":
    /*!********************************************************!*\
      !*** ./src/app/pages/session-detail/session-detail.ts ***!
      \********************************************************/

    /*! exports provided: SessionDetailPage */

    /***/
    function srcAppPagesSessionDetailSessionDetailTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionDetailPage", function () {
        return SessionDetailPage;
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


      var _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../../providers/conference-data */
        "./src/app/providers/conference-data.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! @angular/router */
        "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _providers_user_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../../providers/user-data */
        "./src/app/providers/user-data.ts");

      var SessionDetailPage =
        /*#__PURE__*/
        function () {
          function SessionDetailPage(dataProvider, userProvider, route) {
            _classCallCheck(this, SessionDetailPage);

            this.dataProvider = dataProvider;
            this.userProvider = userProvider;
            this.route = route;
            this.isFavorite = false;
            this.defaultHref = '';
          }

          _createClass(SessionDetailPage, [{
            key: "ionViewWillEnter",
            value: function ionViewWillEnter() {
              var _this2 = this;

              this.dataProvider.load().subscribe(function (data) {
                if (data && data.schedule && data.schedule[0] && data.schedule[0].groups) {
                  var sessionId = _this2.route.snapshot.paramMap.get('sessionId');

                  var _iteratorNormalCompletion = true;
                  var _didIteratorError = false;
                  var _iteratorError = undefined;

                  try {
                    for (var _iterator = data.schedule[0].groups[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var group = _step.value;

                      if (group && group.sessions) {
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                          for (var _iterator2 = group.sessions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var session = _step2.value;

                            if (session && session.id === sessionId) {
                              _this2.session = session;
                              _this2.isFavorite = _this2.userProvider.hasFavorite(_this2.session.name);
                              break;
                            }
                          }
                        } catch (err) {
                          _didIteratorError2 = true;
                          _iteratorError2 = err;
                        } finally {
                          try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                              _iterator2.return();
                            }
                          } finally {
                            if (_didIteratorError2) {
                              throw _iteratorError2;
                            }
                          }
                        }
                      }
                    }
                  } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                      }
                    } finally {
                      if (_didIteratorError) {
                        throw _iteratorError;
                      }
                    }
                  }
                }
              });
            }
          }, {
            key: "ionViewDidEnter",
            value: function ionViewDidEnter() {
              this.defaultHref = "/app/tabs/schedule";
            }
          }, {
            key: "sessionClick",
            value: function sessionClick(item) {
              console.log('Clicked', item);
            }
          }, {
            key: "toggleFavorite",
            value: function toggleFavorite() {
              if (this.userProvider.hasFavorite(this.session.name)) {
                this.userProvider.removeFavorite(this.session.name);
                this.isFavorite = false;
              } else {
                this.userProvider.addFavorite(this.session.name);
                this.isFavorite = true;
              }
            }
          }, {
            key: "shareSession",
            value: function shareSession() {
              console.log('Clicked share session');
            }
          }]);

          return SessionDetailPage;
        }();

      SessionDetailPage.ctorParameters = function () {
        return [{
          type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"]
        }, {
          type: _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      SessionDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-session-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
          /*! raw-loader!./session-detail.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-detail/session-detail.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
          /*! ./session-detail.scss */
          "./src/app/pages/session-detail/session-detail.scss")).default]
      }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"], _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], SessionDetailPage);
      /***/
    },

  /***/
  "./src/app/pages/speaker-detail/speaker-detail-routing.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/speaker-detail/speaker-detail-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: SpeakerDetailPageRoutingModule */

    /***/
    function srcAppPagesSpeakerDetailSpeakerDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpeakerDetailPageRoutingModule", function () {
        return SpeakerDetailPageRoutingModule;
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


      var _speaker_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./speaker-detail */
        "./src/app/pages/speaker-detail/speaker-detail.ts");

      var routes = [{
        path: '',
        component: _speaker_detail__WEBPACK_IMPORTED_MODULE_3__["SpeakerDetailPage"]
      }];

      var SpeakerDetailPageRoutingModule = function SpeakerDetailPageRoutingModule() {
        _classCallCheck(this, SpeakerDetailPageRoutingModule);
      };

      SpeakerDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SpeakerDetailPageRoutingModule);
      /***/
    },

  /***/
  "./src/app/pages/speaker-detail/speaker-detail.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/speaker-detail/speaker-detail.module.ts ***!
      \***************************************************************/

    /*! exports provided: SpeakerDetailModule */

    /***/
    function srcAppPagesSpeakerDetailSpeakerDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpeakerDetailModule", function () {
        return SpeakerDetailModule;
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


      var _speaker_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./speaker-detail */
        "./src/app/pages/speaker-detail/speaker-detail.ts");
      /* harmony import */


      var _speaker_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./speaker-detail-routing.module */
        "./src/app/pages/speaker-detail/speaker-detail-routing.module.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! @ionic/angular */
        "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

      var SpeakerDetailModule = function SpeakerDetailModule() {
        _classCallCheck(this, SpeakerDetailModule);
      };

      SpeakerDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _speaker_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["SpeakerDetailPageRoutingModule"]],
        declarations: [_speaker_detail__WEBPACK_IMPORTED_MODULE_3__["SpeakerDetailPage"]]
      })], SpeakerDetailModule);
      /***/
    },

  /***/
  "./src/app/pages/speaker-detail/speaker-detail.scss":
    /*!**********************************************************!*\
      !*** ./src/app/pages/speaker-detail/speaker-detail.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSpeakerDetailSpeakerDetailScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/*\n * Speaker Background\n */\nion-toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  --background: transparent;\n  --color: white;\n}\nion-toolbar ion-button,\nion-toolbar ion-back-button,\nion-toolbar ion-menu-button {\n  --color: white;\n}\n.speaker-background {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  padding-top: var(--ion-safe-area-top);\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: calc(250px + var(--ion-safe-area-top));\n  background: center/cover url(/assets/img/speaker-background.png) no-repeat;\n}\n.speaker-background img {\n  width: 70px;\n  border-radius: 50%;\n  margin-top: calc(-1 * var(--ion-safe-area-top));\n}\n.speaker-background h2 {\n  position: absolute;\n  bottom: 10px;\n  color: white;\n}\n.md .speaker-background {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n}\n.ios .speaker-background {\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;\n}\n/*\n * Speaker Details\n */\n.speaker-detail p {\n  margin-left: 6px;\n  margin-right: 6px;\n}\n.speaker-detail hr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  background: var(--ion-color-step-150, #d7d8da);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3BlYWtlci1kZXRhaWwvQzpcXGdpdGh1YlxcbWVzc2FnaW5nLWFwcC9zcmNcXGFwcFxccGFnZXNcXHNwZWFrZXItZGV0YWlsXFxzcGVha2VyLWRldGFpbC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zcGVha2VyLWRldGFpbC9zcGVha2VyLWRldGFpbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUFBO0FBSUE7RUFDRSxrQkFBQTtFQUVBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUVBLHlCQUFBO0VBQ0EsY0FBQTtBQ0ZGO0FES0E7OztFQUdFLGNBQUE7QUNGRjtBREtBO0VBQ0Usa0JBQUE7RUFFQSxvQkFBQTtFQUFBLGFBQUE7RUFFQSxxQ0FBQTtFQUVBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBRUEsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBRUEsOENBQUE7RUFFQSwwRUFBQTtBQ1JGO0FEV0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtBQ1JGO0FEV0E7RUFDRSxrQkFBQTtFQUVBLFlBQUE7RUFFQSxZQUFBO0FDVkY7QURhQTtFQUNFLHlIQUFBO0FDVkY7QURhQTtFQUNFLDRDQUFBO0FDVkY7QURhQTs7RUFBQTtBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ1hGO0FEY0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBRUEsOENBQUE7QUNaRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NwZWFrZXItZGV0YWlsL3NwZWFrZXItZGV0YWlsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBTcGVha2VyIEJhY2tncm91bmRcclxuICovXHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuXHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbixcclxuaW9uLXRvb2xiYXIgaW9uLWJhY2stYnV0dG9uLFxyXG5pb24tdG9vbGJhciBpb24tbWVudS1idXR0b24ge1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc3BlYWtlci1iYWNrZ3JvdW5kIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCk7XHJcblxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIGhlaWdodDogY2FsYygyNTBweCArIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSk7XHJcblxyXG4gIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvdmVyIHVybCgvYXNzZXRzL2ltZy9zcGVha2VyLWJhY2tncm91bmQucG5nKSBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5zcGVha2VyLWJhY2tncm91bmQgaW1nIHtcclxuICB3aWR0aDogNzBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogY2FsYygtMSAqIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSk7XHJcbn1cclxuXHJcbi5zcGVha2VyLWJhY2tncm91bmQgaDIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgYm90dG9tOiAxMHB4O1xyXG5cclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tZCAuc3BlYWtlci1iYWNrZ3JvdW5kIHtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDNweCAxcHggLTJweCwgcmdiYSgwLCAwLCAwLCAwLjE0KSAwcHggMnB4IDJweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDFweCA1cHggMHB4O1xyXG59XHJcblxyXG4uaW9zIC5zcGVha2VyLWJhY2tncm91bmQge1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCAxNnB4O1xyXG59XHJcblxyXG4vKlxyXG4gKiBTcGVha2VyIERldGFpbHNcclxuICovXHJcblxyXG4uc3BlYWtlci1kZXRhaWwgcCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICBtYXJnaW4tcmlnaHQ6IDZweDtcclxufVxyXG5cclxuLnNwZWFrZXItZGV0YWlsIGhyIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XHJcbn1cclxuIiwiLypcbiAqIFNwZWFrZXIgQmFja2dyb3VuZFxuICovXG5pb24tdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi10b29sYmFyIGlvbi1idXR0b24sXG5pb24tdG9vbGJhciBpb24tYmFjay1idXR0b24sXG5pb24tdG9vbGJhciBpb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnNwZWFrZXItYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy10b3A6IHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogY2FsYygyNTBweCArIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSk7XG4gIGJhY2tncm91bmQ6IGNlbnRlci9jb3ZlciB1cmwoL2Fzc2V0cy9pbWcvc3BlYWtlci1iYWNrZ3JvdW5kLnBuZykgbm8tcmVwZWF0O1xufVxuXG4uc3BlYWtlci1iYWNrZ3JvdW5kIGltZyB7XG4gIHdpZHRoOiA3MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi10b3A6IGNhbGMoLTEgKiB2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCkpO1xufVxuXG4uc3BlYWtlci1iYWNrZ3JvdW5kIGgyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1kIC5zcGVha2VyLWJhY2tncm91bmQge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDNweCAxcHggLTJweCwgcmdiYSgwLCAwLCAwLCAwLjE0KSAwcHggMnB4IDJweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDFweCA1cHggMHB4O1xufVxuXG4uaW9zIC5zcGVha2VyLWJhY2tncm91bmQge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCA0cHggMTZweDtcbn1cblxuLypcbiAqIFNwZWFrZXIgRGV0YWlsc1xuICovXG4uc3BlYWtlci1kZXRhaWwgcCB7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuXG4uc3BlYWtlci1kZXRhaWwgaHIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufSJdfQ== */";
      /***/
    },

  /***/
  "./src/app/pages/speaker-detail/speaker-detail.ts":
    /*!********************************************************!*\
      !*** ./src/app/pages/speaker-detail/speaker-detail.ts ***!
      \********************************************************/

    /*! exports provided: SpeakerDetailPage */

    /***/
    function srcAppPagesSpeakerDetailSpeakerDetailTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpeakerDetailPage", function () {
        return SpeakerDetailPage;
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


      var _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../../providers/conference-data */
        "./src/app/providers/conference-data.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! @ionic/angular */
        "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! @ionic-native/in-app-browser/ngx */
        "./node_modules/@ionic-native/in-app-browser/ngx/index.js");

      var SpeakerDetailPage =
        /*#__PURE__*/
        function () {
          function SpeakerDetailPage(dataProvider, route, actionSheetCtrl, confData, inAppBrowser) {
            _classCallCheck(this, SpeakerDetailPage);

            this.dataProvider = dataProvider;
            this.route = route;
            this.actionSheetCtrl = actionSheetCtrl;
            this.confData = confData;
            this.inAppBrowser = inAppBrowser;
          }

          _createClass(SpeakerDetailPage, [{
            key: "ionViewWillEnter",
            value: function ionViewWillEnter() {
              var _this3 = this;

              this.dataProvider.load().subscribe(function (data) {
                var speakerId = _this3.route.snapshot.paramMap.get('speakerId');

                if (data && data.speakers) {
                  var _iteratorNormalCompletion3 = true;
                  var _didIteratorError3 = false;
                  var _iteratorError3 = undefined;

                  try {
                    for (var _iterator3 = data.speakers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                      var speaker = _step3.value;

                      if (speaker && speaker.id === speakerId) {
                        _this3.speaker = speaker;
                        break;
                      }
                    }
                  } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                        _iterator3.return();
                      }
                    } finally {
                      if (_didIteratorError3) {
                        throw _iteratorError3;
                      }
                    }
                  }
                }
              });
            }
          }, {
            key: "openExternalUrl",
            value: function openExternalUrl(url) {
              this.inAppBrowser.create(url, '_blank');
            }
          }, {
            key: "openSpeakerShare",
            value: function openSpeakerShare(speaker) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee3() {
                  var actionSheet;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return this.actionSheetCtrl.create({
                            header: 'Share ' + speaker.name,
                            buttons: [{
                              text: 'Copy Link',
                              handler: function handler() {
                                console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);

                                if (window.cordova && window.cordova.plugins.clipboard) {
                                  window.cordova.plugins.clipboard.copy('https://twitter.com/' + speaker.twitter);
                                }
                              }
                            }, {
                              text: 'Share via ...'
                            }, {
                              text: 'Cancel',
                              role: 'cancel'
                            }]
                          });

                        case 2:
                          actionSheet = _context3.sent;
                          _context3.next = 5;
                          return actionSheet.present();

                        case 5:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3, this);
                }));
            }
          }, {
            key: "openContact",
            value: function openContact(speaker) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee4() {
                  var mode, actionSheet;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          mode = 'ios'; // this.config.get('mode');

                          _context4.next = 3;
                          return this.actionSheetCtrl.create({
                            header: 'Contact ' + speaker.name,
                            buttons: [{
                              text: "Email ( ".concat(speaker.email, " )"),
                              icon: mode !== 'ios' ? 'mail' : null,
                              handler: function handler() {
                                window.open('mailto:' + speaker.email);
                              }
                            }, {
                              text: "Call ( ".concat(speaker.phone, " )"),
                              icon: mode !== 'ios' ? 'call' : null,
                              handler: function handler() {
                                window.open('tel:' + speaker.phone);
                              }
                            }, {
                              text: 'Cancel',
                              role: 'cancel'
                            }]
                          });

                        case 3:
                          actionSheet = _context4.sent;
                          _context4.next = 6;
                          return actionSheet.present();

                        case 6:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4, this);
                }));
            }
          }]);

          return SpeakerDetailPage;
        }();

      SpeakerDetailPage.ctorParameters = function () {
        return [{
          type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
        }, {
          type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"]
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"]
        }];
      };

      SpeakerDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-speaker-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
          /*! raw-loader!./speaker-detail.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-detail/speaker-detail.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
          /*! ./speaker-detail.scss */
          "./src/app/pages/speaker-detail/speaker-detail.scss")).default]
      }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"]])], SpeakerDetailPage);
      /***/
    },

  /***/
  "./src/app/pages/speaker-list/speaker-list-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/speaker-list/speaker-list-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: FriendsListPageRoutingModule */

    /***/
    function srcAppPagesFriendsListFriendsListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FriendsListPageRoutingModule", function () {
        return FriendsListPageRoutingModule;
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


      var _speaker_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./speaker-list */
        "./src/app/pages/speaker-list/speaker-list.ts");

      var routes = [{
        path: '',
        component: _speaker_list__WEBPACK_IMPORTED_MODULE_3__["FriendsListPage"]
      }];

      var FriendsListPageRoutingModule = function FriendsListPageRoutingModule() {
        _classCallCheck(this, FriendsListPageRoutingModule);
      };

      FriendsListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FriendsListPageRoutingModule);
      /***/
    },

  /***/
  "./src/app/pages/speaker-list/speaker-list.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/speaker-list/speaker-list.module.ts ***!
      \***********************************************************/

    /*! exports provided: FriendsListModule */

    /***/
    function srcAppPagesFriendsListFriendsListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FriendsListModule", function () {
        return FriendsListModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! @ionic/angular */
        "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _speaker_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./speaker-list */
        "./src/app/pages/speaker-list/speaker-list.ts");
      /* harmony import */


      var _speaker_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./speaker-list-routing.module */
        "./src/app/pages/speaker-list/speaker-list-routing.module.ts");

      var FriendsListModule = function FriendsListModule() {
        _classCallCheck(this, FriendsListModule);
      };

      FriendsListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _speaker_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["FriendsListPageRoutingModule"]],
        declarations: [_speaker_list__WEBPACK_IMPORTED_MODULE_4__["FriendsListPage"]]
      })], FriendsListModule);
      /***/
    },

  /***/
  "./src/app/pages/speaker-list/speaker-list.scss":
    /*!******************************************************!*\
      !*** ./src/app/pages/speaker-list/speaker-list.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesFriendsListFriendsListScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".speaker-card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n/* Due to the fact the cards are inside of columns the margins don't overlap\n * properly so we want to remove the extra margin between cards\n */\n\nion-col:not(:last-of-type) .speaker-card {\n  margin-bottom: 0;\n}\n\n.speaker-card .speaker-item {\n  --min-height: 85px;\n}\n\n.speaker-card .speaker-item h2 {\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n}\n\n.speaker-card .speaker-item p {\n  font-size: 13px;\n  letter-spacing: 0.02em;\n}\n\n.speaker-card ion-card-header {\n  padding: 0;\n}\n\n.speaker-card ion-card-content {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  padding: 0;\n}\n\n.ios ion-list {\n  margin-bottom: 10px;\n}\n\n.md ion-list {\n  border-top: 1px solid var(--ion-color-step-150, #d7d8da);\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3BlYWtlci1saXN0L0M6XFxnaXRodWJcXG1lc3NhZ2luZy1hcHAvc3JjXFxhcHBcXHBhZ2VzXFxzcGVha2VyLWxpc3RcXHNwZWFrZXItbGlzdC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zcGVha2VyLWxpc3Qvc3BlYWtlci1saXN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNDRjs7QURFQTs7RUFBQTs7QUFHQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7VUFBQSxjQUFBO0VBRUEsVUFBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7QUNBRjs7QURHQTtFQUNFLHdEQUFBO0VBRUEsVUFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3BlYWtlci1saXN0L3NwZWFrZXItbGlzdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwZWFrZXItY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4vKiBEdWUgdG8gdGhlIGZhY3QgdGhlIGNhcmRzIGFyZSBpbnNpZGUgb2YgY29sdW1ucyB0aGUgbWFyZ2lucyBkb24ndCBvdmVybGFwXHJcbiAqIHByb3Blcmx5IHNvIHdlIHdhbnQgdG8gcmVtb3ZlIHRoZSBleHRyYSBtYXJnaW4gYmV0d2VlbiBjYXJkc1xyXG4gKi9cclxuaW9uLWNvbDpub3QoOmxhc3Qtb2YtdHlwZSkgLnNwZWFrZXItY2FyZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnNwZWFrZXItY2FyZCAuc3BlYWtlci1pdGVtIHtcclxuICAtLW1pbi1oZWlnaHQ6IDg1cHg7XHJcbn1cclxuXHJcbi5zcGVha2VyLWNhcmQgLnNwZWFrZXItaXRlbSBoMiB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxufVxyXG5cclxuLnNwZWFrZXItY2FyZCAuc3BlYWtlci1pdGVtIHAge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG59XHJcblxyXG4uc3BlYWtlci1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnNwZWFrZXItY2FyZCBpb24tY2FyZC1jb250ZW50IHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxuXHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmlvcyBpb24tbGlzdCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm1kIGlvbi1saXN0IHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcclxuXHJcbiAgcGFkZGluZzogMDtcclxufSIsIi5zcGVha2VyLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vKiBEdWUgdG8gdGhlIGZhY3QgdGhlIGNhcmRzIGFyZSBpbnNpZGUgb2YgY29sdW1ucyB0aGUgbWFyZ2lucyBkb24ndCBvdmVybGFwXG4gKiBwcm9wZXJseSBzbyB3ZSB3YW50IHRvIHJlbW92ZSB0aGUgZXh0cmEgbWFyZ2luIGJldHdlZW4gY2FyZHNcbiAqL1xuaW9uLWNvbDpub3QoOmxhc3Qtb2YtdHlwZSkgLnNwZWFrZXItY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5zcGVha2VyLWNhcmQgLnNwZWFrZXItaXRlbSB7XG4gIC0tbWluLWhlaWdodDogODVweDtcbn1cblxuLnNwZWFrZXItY2FyZCAuc3BlYWtlci1pdGVtIGgyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xufVxuXG4uc3BlYWtlci1jYXJkIC5zcGVha2VyLWl0ZW0gcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbn1cblxuLnNwZWFrZXItY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc3BlYWtlci1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgcGFkZGluZzogMDtcbn1cblxuLmlvcyBpb24tbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tZCBpb24tbGlzdCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xuICBwYWRkaW5nOiAwO1xufSJdfQ== */";
      /***/
    },

  /***/
  "./src/app/pages/speaker-list/speaker-list.ts":
    /*!****************************************************!*\
      !*** ./src/app/pages/speaker-list/speaker-list.ts ***!
      \****************************************************/

    /*! exports provided: FriendsListPage */

    /***/
    function srcAppPagesFriendsListFriendsListTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FriendsListPage", function () {
        return FriendsListPage;
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


      var _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../../providers/conference-data */
        "./src/app/providers/conference-data.ts");

      var FriendsListPage =
        /*#__PURE__*/
        function () {
          function FriendsListPage(confData) {
            _classCallCheck(this, FriendsListPage);

            this.confData = confData;
            this.speakers = [];
          }

          _createClass(FriendsListPage, [{
            key: "ionViewDidEnter",
            value: function ionViewDidEnter() {
              var _this4 = this;

              this.confData.getSpeakers().subscribe(function (speakers) {
                _this4.speakers = speakers;
              });
            }
          }]);

          return FriendsListPage;
        }();

      FriendsListPage.ctorParameters = function () {
        return [{
          type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"]
        }];
      };

      FriendsListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-speaker-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
          /*! raw-loader!./speaker-list.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-list/speaker-list.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
          /*! ./speaker-list.scss */
          "./src/app/pages/speaker-list/speaker-list.scss")).default]
      }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"]])], FriendsListPage);
      /***/
    },

  /***/
  "./src/app/pages/tabs-page/tabs-page-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/tabs-page/tabs-page-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: TabsPageRoutingModule */

    /***/
    function srcAppPagesTabsPageTabsPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
        return TabsPageRoutingModule;
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


      var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./tabs-page */
        "./src/app/pages/tabs-page/tabs-page.ts");

      var routes = [{
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [{
          path: 'friends',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.resolve().then(__webpack_require__.bind(null,
                /*! ../speaker-list/speaker-list.module */
                "./src/app/pages/speaker-list/speaker-list.module.ts")).then(function (m) {
                  return m.FriendsListModule;
                });
            }
          }, {
            path: 'session/:sessionId',
            loadChildren: function loadChildren() {
              return Promise.resolve().then(__webpack_require__.bind(null,
                /*! ../session-detail/session-detail.module */
                "./src/app/pages/session-detail/session-detail.module.ts")).then(function (m) {
                  return m.SessionDetailModule;
                });
            }
          }, {
            path: 'speaker-details/:speakerId',
            loadChildren: function loadChildren() {
              return Promise.resolve().then(__webpack_require__.bind(null,
                /*! ../speaker-detail/speaker-detail.module */
                "./src/app/pages/speaker-detail/speaker-detail.module.ts")).then(function (m) {
                  return m.SpeakerDetailModule;
                });
            }
          }]
        }, {
          path: 'map',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.resolve().then(__webpack_require__.bind(null,
                /*! ../map/map.module */
                "./src/app/pages/map/map.module.ts")).then(function (m) {
                  return m.MapModule;
                });
            }
          }]
        }, {
          path: 'about',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.resolve().then(__webpack_require__.bind(null,
                /*! ../about/about.module */
                "./src/app/pages/about/about.module.ts")).then(function (m) {
                  return m.AboutModule;
                });
            }
          }]
        }, {
          path: '',
          redirectTo: '/app/tabs/friends',
          pathMatch: 'full'
        }]
      }];

      var TabsPageRoutingModule = function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      };

      TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TabsPageRoutingModule);
      /***/
    },

  /***/
  "./src/app/pages/tabs-page/tabs-page.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/tabs-page/tabs-page.module.ts ***!
      \*****************************************************/

    /*! exports provided: TabsModule */

    /***/
    function srcAppPagesTabsPageTabsPageModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsModule", function () {
        return TabsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! tslib */
        "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @angular/common */
        "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! @angular/core */
        "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! @ionic/angular */
        "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _about_about_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../about/about.module */
        "./src/app/pages/about/about.module.ts");
      /* harmony import */


      var _map_map_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ../map/map.module */
        "./src/app/pages/map/map.module.ts");
      /* harmony import */


      var _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ../session-detail/session-detail.module */
        "./src/app/pages/session-detail/session-detail.module.ts");
      /* harmony import */


      var _speaker_detail_speaker_detail_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ../speaker-detail/speaker-detail.module */
        "./src/app/pages/speaker-detail/speaker-detail.module.ts");
      /* harmony import */


      var _speaker_list_speaker_list_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ../speaker-list/speaker-list.module */
        "./src/app/pages/speaker-list/speaker-list.module.ts");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! ./tabs-page */
        "./src/app/pages/tabs-page/tabs-page.ts");
      /* harmony import */


      var _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! ./tabs-page-routing.module */
        "./src/app/pages/tabs-page/tabs-page-routing.module.ts");

      var TabsModule = function TabsModule() {
        _classCallCheck(this, TabsModule);
      };

      TabsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_about_about_module__WEBPACK_IMPORTED_MODULE_4__["AboutModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _map_map_module__WEBPACK_IMPORTED_MODULE_5__["MapModule"], _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_6__["SessionDetailModule"], _speaker_detail_speaker_detail_module__WEBPACK_IMPORTED_MODULE_7__["SpeakerDetailModule"], _speaker_list_speaker_list_module__WEBPACK_IMPORTED_MODULE_8__["FriendsListModule"], _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_10__["TabsPageRoutingModule"]],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_9__["TabsPage"]]
      })], TabsModule);
      /***/
    },

  /***/
  "./src/app/pages/tabs-page/tabs-page.ts":
    /*!**********************************************!*\
      !*** ./src/app/pages/tabs-page/tabs-page.ts ***!
      \**********************************************/

    /*! exports provided: TabsPage */

    /***/
    function srcAppPagesTabsPageTabsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
        return TabsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! tslib */
        "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @angular/core */
        "./node_modules/@angular/core/fesm2015/core.js");

      var TabsPage = function TabsPage() {
        _classCallCheck(this, TabsPage);
      };

      TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
          /*! raw-loader!./tabs-page.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-page/tabs-page.html")).default
      })], TabsPage);
      /***/
    },

  /***/
  "./src/app/providers/conference-data.ts":
    /*!**********************************************!*\
      !*** ./src/app/providers/conference-data.ts ***!
      \**********************************************/

    /*! exports provided: ConferenceData */

    /***/
    function srcAppProvidersConferenceDataTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConferenceData", function () {
        return ConferenceData;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! tslib */
        "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @angular/common/http */
        "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! @angular/core */
        "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! rxjs */
        "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! rxjs/operators */
        "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _user_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./user-data */
        "./src/app/providers/user-data.ts");

      var ConferenceData =
        /*#__PURE__*/
        function () {
          function ConferenceData(http, user) {
            _classCallCheck(this, ConferenceData);

            this.http = http;
            this.user = user;
          }

          _createClass(ConferenceData, [{
            key: "load",
            value: function load() {
              if (this.data) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data);
              } else {
                return this.http.get('assets/data/data.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.processData, this));
              }
            }
          }, {
            key: "processData",
            value: function processData(data) {
              var _this5 = this;

              // just some good 'ol JS fun with objects and arrays
              // build up the data by linking speakers to sessions
              this.data = data; // loop through each day in the schedule

              this.data.schedule.forEach(function (day) {
                // loop through each timeline group in the day
                day.groups.forEach(function (group) {
                  // loop through each session in the timeline group
                  group.sessions.forEach(function (session) {
                    session.speakers = [];

                    if (session.speakerNames) {
                      session.speakerNames.forEach(function (speakerName) {
                        var speaker = _this5.data.speakers.find(function (s) {
                          return s.name === speakerName;
                        });

                        if (speaker) {
                          session.speakers.push(speaker);
                          speaker.sessions = speaker.sessions || [];
                          speaker.sessions.push(session);
                        }
                      });
                    }
                  });
                });
              });
              return this.data;
            }
          }, {
            key: "getTimeline",
            value: function getTimeline(dayIndex) {
              var _this6 = this;

              var queryText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
              var excludeTracks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
              var segment = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'all';
              return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                var day = data.schedule[dayIndex];
                day.shownSessions = 0;
                queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
                var queryWords = queryText.split(' ').filter(function (w) {
                  return !!w.trim().length;
                });
                day.groups.forEach(function (group) {
                  group.hide = true;
                  group.sessions.forEach(function (session) {
                    // check if this session should show or not
                    _this6.filterSession(session, queryWords, excludeTracks, segment);

                    if (!session.hide) {
                      // if this session is not hidden then this group should show
                      group.hide = false;
                      day.shownSessions++;
                    }
                  });
                });
                return day;
              }));
            }
          }, {
            key: "filterSession",
            value: function filterSession(session, queryWords, excludeTracks, segment) {
              var matchesQueryText = false;

              if (queryWords.length) {
                // of any query word is in the session name than it passes the query test
                queryWords.forEach(function (queryWord) {
                  if (session.name.toLowerCase().indexOf(queryWord) > -1) {
                    matchesQueryText = true;
                  }
                });
              } else {
                // if there are no query words then this session passes the query test
                matchesQueryText = true;
              } // if any of the sessions tracks are not in the
              // exclude tracks then this session passes the track test


              var matchesTracks = false;
              session.tracks.forEach(function (trackName) {
                if (excludeTracks.indexOf(trackName) === -1) {
                  matchesTracks = true;
                }
              }); // if the segment is 'favorites', but session is not a user favorite
              // then this session does not pass the segment test

              var matchesSegment = false;

              if (segment === 'favorites') {
                if (this.user.hasFavorite(session.name)) {
                  matchesSegment = true;
                }
              } else {
                matchesSegment = true;
              } // all tests must be true if it should not be hidden


              session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
            }
          }, {
            key: "getSpeakers",
            value: function getSpeakers() {
              return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                return data.speakers.sort(function (a, b) {
                  var aName = a.name.split(' ').pop();
                  var bName = b.name.split(' ').pop();
                  return aName.localeCompare(bName);
                });
              }));
            }
          }, {
            key: "getTracks",
            value: function getTracks() {
              return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                return data.tracks.sort();
              }));
            }
          }, {
            key: "getMap",
            value: function getMap() {
              return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                return data.map;
              }));
            }
          }]);

          return ConferenceData;
        }();

      ConferenceData.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"]
        }];
      };

      ConferenceData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"]])], ConferenceData);
      /***/
    }
}]);
//# sourceMappingURL=pages-tabs-page-tabs-page-module-es5.js.map