function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-page-tabs-page-module"], {
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


    __webpack_exports__["default"] = "<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n\r\n    <ion-tab-button tab=\"inbox\">\r\n      <i class=\"fas fa-envelope\"></i>\r\n      <ion-label>Inbox</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"people\">\r\n      <i class=\"fas fa-user-friends\"></i>\r\n      <ion-label>People</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"proposal\">\r\n      <i class=\"fas fa-lightbulb\"></i>\r\n      <ion-label>Proposal</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"account\">\r\n      <i class=\"fas fa-user\"></i>\r\n      <ion-label>Account</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"support\">\r\n      <i class=\"fas fa-question\"></i>\r\n      <ion-label>Support</ion-label>\r\n    </ion-tab-button>\r\n\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>";
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
    /* harmony import */


    var _inbox_inbox_details_inbox_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../inbox/inbox-details/inbox-details.component */
    "./src/app/pages/inbox/inbox-details/inbox-details.component.ts");

    var routes = [{
      path: 'tabs',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'inbox',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../inbox/inbox.module */
            "./src/app/pages/inbox/inbox.module.ts")).then(function (m) {
              return m.InboxModule;
            });
          }
        }, {
          path: 'inbox-details',
          component: _inbox_inbox_details_inbox_details_component__WEBPACK_IMPORTED_MODULE_4__["InboxDetailsComponent"]
        }]
      }, {
        path: 'proposal',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | proposal-proposal-module */
            "proposal-proposal-module").then(__webpack_require__.bind(null,
            /*! ../proposal/proposal.module */
            "./src/app/pages/proposal/proposal.module.ts")).then(function (m) {
              return m.ProposalModule;
            });
          }
        }]
      }, {
        path: 'people',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | people-people-module */
            "people-people-module").then(__webpack_require__.bind(null,
            /*! ../people/people.module */
            "./src/app/pages/people/people.module.ts")).then(function (m) {
              return m.PeopleModule;
            });
          }
        }]
      }, {
        path: 'account',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | account-account-module */
            "account-account-module").then(__webpack_require__.bind(null,
            /*! ../account/account.module */
            "./src/app/pages/account/account.module.ts")).then(function (m) {
              return m.AccountModule;
            });
          }
        }]
      }, {
        path: 'support',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | support-support-module */
            "support-support-module").then(__webpack_require__.bind(null,
            /*! ../support/support.module */
            "./src/app/pages/support/support.module.ts")).then(function (m) {
              return m.SupportModule;
            });
          }
        }]
      }, {
        path: '',
        redirectTo: '/app/tabs/inbox',
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


    var _inbox_inbox_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../inbox/inbox.module */
    "./src/app/pages/inbox/inbox.module.ts");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs-page */
    "./src/app/pages/tabs-page/tabs-page.ts");
    /* harmony import */


    var _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs-page-routing.module */
    "./src/app/pages/tabs-page/tabs-page-routing.module.ts");

    var TabsModule = function TabsModule() {
      _classCallCheck(this, TabsModule);
    };

    TabsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _inbox_inbox_module__WEBPACK_IMPORTED_MODULE_4__["InboxModule"], _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_6__["TabsPageRoutingModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_5__["TabsPage"]]
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
  }
}]);
//# sourceMappingURL=pages-tabs-page-tabs-page-module-es5.js.map