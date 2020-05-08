function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"], {
  /***/
  "./node_modules/@angular/fire/storage/es2015/index.js":
  /*!************************************************************!*\
    !*** ./node_modules/@angular/fire/storage/es2015/index.js ***!
    \************************************************************/

  /*! exports provided: createStorageRef, StorageBucket, BUCKET, AngularFireStorage, createUploadTask, fromTask, AngularFireStorageModule */

  /***/
  function node_modulesAngularFireStorageEs2015IndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./public_api */
    "./node_modules/@angular/fire/storage/es2015/public_api.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "createStorageRef", function () {
      return _public_api__WEBPACK_IMPORTED_MODULE_0__["createStorageRef"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StorageBucket", function () {
      return _public_api__WEBPACK_IMPORTED_MODULE_0__["StorageBucket"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BUCKET", function () {
      return _public_api__WEBPACK_IMPORTED_MODULE_0__["BUCKET"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AngularFireStorage", function () {
      return _public_api__WEBPACK_IMPORTED_MODULE_0__["AngularFireStorage"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "createUploadTask", function () {
      return _public_api__WEBPACK_IMPORTED_MODULE_0__["createUploadTask"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "fromTask", function () {
      return _public_api__WEBPACK_IMPORTED_MODULE_0__["fromTask"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AngularFireStorageModule", function () {
      return _public_api__WEBPACK_IMPORTED_MODULE_0__["AngularFireStorageModule"];
    }); //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/fire/storage/es2015/observable/fromTask.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@angular/fire/storage/es2015/observable/fromTask.js ***!
    \**************************************************************************/

  /*! exports provided: fromTask */

  /***/
  function node_modulesAngularFireStorageEs2015ObservableFromTaskJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fromTask", function () {
      return fromTask;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    function fromTask(task) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var progress = function progress(snap) {
          return subscriber.next(snap);
        };

        var error = function error(e) {
          return subscriber.error(e);
        };

        var complete = function complete() {
          return subscriber.complete();
        };

        task.on('state_changed', progress, error, complete);
        return function () {
          return task.cancel();
        };
      });
    } //# sourceMappingURL=fromTask.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/fire/storage/es2015/public_api.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@angular/fire/storage/es2015/public_api.js ***!
    \*****************************************************************/

  /*! exports provided: createStorageRef, StorageBucket, BUCKET, AngularFireStorage, createUploadTask, fromTask, AngularFireStorageModule */

  /***/
  function node_modulesAngularFireStorageEs2015Public_apiJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _ref__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./ref */
    "./node_modules/@angular/fire/storage/es2015/ref.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "createStorageRef", function () {
      return _ref__WEBPACK_IMPORTED_MODULE_0__["createStorageRef"];
    });
    /* harmony import */


    var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./storage */
    "./node_modules/@angular/fire/storage/es2015/storage.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StorageBucket", function () {
      return _storage__WEBPACK_IMPORTED_MODULE_1__["StorageBucket"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BUCKET", function () {
      return _storage__WEBPACK_IMPORTED_MODULE_1__["BUCKET"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AngularFireStorage", function () {
      return _storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"];
    });
    /* harmony import */


    var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./task */
    "./node_modules/@angular/fire/storage/es2015/task.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "createUploadTask", function () {
      return _task__WEBPACK_IMPORTED_MODULE_2__["createUploadTask"];
    });
    /* harmony import */


    var _observable_fromTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./observable/fromTask */
    "./node_modules/@angular/fire/storage/es2015/observable/fromTask.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "fromTask", function () {
      return _observable_fromTask__WEBPACK_IMPORTED_MODULE_3__["fromTask"];
    });
    /* harmony import */


    var _storage_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./storage.module */
    "./node_modules/@angular/fire/storage/es2015/storage.module.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AngularFireStorageModule", function () {
      return _storage_module__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorageModule"];
    }); //# sourceMappingURL=public_api.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/fire/storage/es2015/ref.js":
  /*!**********************************************************!*\
    !*** ./node_modules/@angular/fire/storage/es2015/ref.js ***!
    \**********************************************************/

  /*! exports provided: createStorageRef */

  /***/
  function node_modulesAngularFireStorageEs2015RefJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createStorageRef", function () {
      return createStorageRef;
    });
    /* harmony import */


    var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./task */
    "./node_modules/@angular/fire/storage/es2015/task.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    function createStorageRef(ref, schedulers, keepUnstableUntilFirst) {
      return {
        getDownloadURL: function getDownloadURL() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(ref.getDownloadURL(), schedulers.outsideAngular).pipe(keepUnstableUntilFirst);
        },
        getMetadata: function getMetadata() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(ref.getMetadata()).pipe(keepUnstableUntilFirst);
        },
        delete: function _delete() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(ref.delete());
        },
        child: function child(path) {
          return createStorageRef(ref.child(path), schedulers, keepUnstableUntilFirst);
        },
        updateMetatdata: function updateMetatdata(meta) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(ref.updateMetadata(meta));
        },
        updateMetadata: function updateMetadata(meta) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(ref.updateMetadata(meta));
        },
        put: function put(data, metadata) {
          var task = ref.put(data, metadata);
          return Object(_task__WEBPACK_IMPORTED_MODULE_0__["createUploadTask"])(task);
        },
        putString: function putString(data, format, metadata) {
          var task = ref.putString(data, format, metadata);
          return Object(_task__WEBPACK_IMPORTED_MODULE_0__["createUploadTask"])(task);
        }
      };
    } //# sourceMappingURL=ref.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/fire/storage/es2015/storage.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@angular/fire/storage/es2015/storage.js ***!
    \**************************************************************/

  /*! exports provided: StorageBucket, BUCKET, AngularFireStorage */

  /***/
  function node_modulesAngularFireStorageEs2015StorageJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageBucket", function () {
      return StorageBucket;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BUCKET", function () {
      return BUCKET;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularFireStorage", function () {
      return AngularFireStorage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ref */
    "./node_modules/@angular/fire/storage/es2015/ref.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var StorageBucket = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.storageBucket');
    var BUCKET = StorageBucket;

    var AngularFireStorage =
    /*#__PURE__*/
    function () {
      function AngularFireStorage(options, nameOrConfig, storageBucket, platformId, zone) {
        _classCallCheck(this, AngularFireStorage);

        this.schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_2__["ɵAngularFireSchedulers"](zone);
        this.keepUnstableUntilFirst = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_2__["ɵkeepUnstableUntilFirstFactory"])(this.schedulers, platformId);
        this.storage = zone.runOutsideAngular(function () {
          var app = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_2__["_firebaseAppFactory"])(options, zone, nameOrConfig);
          return app.storage(storageBucket || undefined);
        });
      }

      _createClass(AngularFireStorage, [{
        key: "ref",
        value: function ref(path) {
          return Object(_ref__WEBPACK_IMPORTED_MODULE_1__["createStorageRef"])(this.storage.ref(path), this.schedulers, this.keepUnstableUntilFirst);
        }
      }, {
        key: "upload",
        value: function upload(path, data, metadata) {
          var storageRef = this.storage.ref(path);
          var ref = Object(_ref__WEBPACK_IMPORTED_MODULE_1__["createStorageRef"])(storageRef, this.schedulers, this.keepUnstableUntilFirst);
          return ref.put(data, metadata);
        }
      }]);

      return AngularFireStorage;
    }();

    AngularFireStorage = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_2__["FIREBASE_OPTIONS"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_2__["FIREBASE_APP_NAME"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(BUCKET)), __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])), __metadata("design:paramtypes", [Object, Object, Object, Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])], AngularFireStorage); //# sourceMappingURL=storage.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/fire/storage/es2015/storage.module.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@angular/fire/storage/es2015/storage.module.js ***!
    \*********************************************************************/

  /*! exports provided: AngularFireStorageModule */

  /***/
  function node_modulesAngularFireStorageEs2015StorageModuleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularFireStorageModule", function () {
      return AngularFireStorageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./storage */
    "./node_modules/@angular/fire/storage/es2015/storage.js");
    /* harmony import */


    var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/storage */
    "./node_modules/firebase/storage/dist/index.esm.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var AngularFireStorageModule = function AngularFireStorageModule() {
      _classCallCheck(this, AngularFireStorageModule);
    };

    AngularFireStorageModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      providers: [_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"]]
    })], AngularFireStorageModule); //# sourceMappingURL=storage.module.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/fire/storage/es2015/task.js":
  /*!***********************************************************!*\
    !*** ./node_modules/@angular/fire/storage/es2015/task.js ***!
    \***********************************************************/

  /*! exports provided: createUploadTask */

  /***/
  function node_modulesAngularFireStorageEs2015TaskJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createUploadTask", function () {
      return createUploadTask;
    });
    /* harmony import */


    var _observable_fromTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./observable/fromTask */
    "./node_modules/@angular/fire/storage/es2015/observable/fromTask.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    function createUploadTask(task) {
      var inner$ = Object(_observable_fromTask__WEBPACK_IMPORTED_MODULE_0__["fromTask"])(task);
      return {
        task: task,
        then: task.then.bind(task),
        catch: task.catch.bind(task),
        pause: task.pause.bind(task),
        cancel: task.cancel.bind(task),
        resume: task.resume.bind(task),
        snapshotChanges: function snapshotChanges() {
          return inner$;
        },
        percentageChanges: function percentageChanges() {
          return inner$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (s) {
            return s.bytesTransferred / s.totalBytes * 100;
          }));
        }
      };
    } //# sourceMappingURL=task.js.map

    /***/

  },

  /***/
  "./node_modules/firebase/storage/dist/index.esm.js":
  /*!*********************************************************!*\
    !*** ./node_modules/firebase/storage/dist/index.esm.js ***!
    \*********************************************************/

  /*! no exports provided */

  /***/
  function node_modulesFirebaseStorageDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _firebase_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @firebase/storage */
    "./node_modules/@firebase/storage/dist/index.esm.js"); //# sourceMappingURL=index.esm.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAccountAccountHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <mat-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button><i class=\"fas fa-bars\"></i></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"title-padding\">Dating Props</ion-title>\r\n  </mat-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"fxlayout-support\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n\r\n    <div class=\"mat-elevation-z7 ion-padding-top ion-text-center\">\r\n      <img [src]=\"this.user.photoURL\" alt=\"avatar\">\r\n      <h2>{{this.user.displayName}}</h2>\r\n      <h5>{{this.user.title}}</h5>\r\n      <p><span class=\"start-text\">Age:</span><span class=\"span-info\">{{this.user.age}}</span></p>\r\n      <p><span class=\"start-text\">Religion:</span><span class=\"span-info\">{{this.user.religion}}</span></p>\r\n      <p><span class=\"start-text\">Want Kids?</span><span class=\"span-info\">{{this.user.haveKids}}</span></p>\r\n      <p><span class=\"start-text\">Hobbies:</span><span class=\"span-info\">{{this.user.hobbies}}</span></p>\r\n      <div><span class=\"start-text\">Description:</span>\r\n        <div id=\"description-info\">{{this.user.description}}</div>\r\n      </div>\r\n      <br>\r\n      <br>\r\n      <h4>Edit Profile</h4>\r\n      <ion-list>\r\n        <ion-item (click)=\"updateAvatar()\">Profile Picture</ion-item>\r\n        <ion-item (click)=\"updateUsername()\">Username</ion-item>\r\n        <ion-item (click)=\"updateTitle()\">Title</ion-item>\r\n        <ion-item>\r\n          <ion-label class=\"start-text\">Age</ion-label>\r\n          <ion-select [(ngModel)]=\"selectedAge\" name=\"selectAge\" [interfaceOptions]=\"ageActionSheetOptions\"\r\n            (ionChange)=\"updateAge()\" interface=\"action-sheet\" multiple=\"false\"\r\n            [placeholder]=\"selectedAge?selectedAge:'Tap'\">\r\n            <ion-select-option *ngFor=\"let age of ages\" value=\"{{age}}\">{{age}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label class=\"start-text\">Religion</ion-label>\r\n          <ion-select [(ngModel)]=\"selectedReligion\" name=\"selectReligion\"\r\n            [interfaceOptions]=\"religionActionSheetOptions\" (ionChange)=\"updateReligion()\" interface=\"action-sheet\"\r\n            multiple=\"false\" [placeholder]=\"selectedReligion?selectedReligion:'Tap'\">\r\n            <ion-select-option *ngFor=\"let religion of religions\" value=\"{{religion}}\">{{religion}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label class=\"start-text\">Have Kids</ion-label>\r\n          <ion-select [(ngModel)]=\"selectedKids\" name=\"selectKids\" [interfaceOptions]=\"kidsActionSheetOptions\"\r\n            (ionChange)=\"updateHaveKids()\" interface=\"action-sheet\" multiple=\"false\"\r\n            [placeholder]=\"selectedKids?selectedKids:'Tap'\">\r\n            <ion-select-option *ngFor=\"let kidsOption of kidsOptions\" value=\"{{kidsOption}}\">{{kidsOption}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item (click)=\"updateHobbies()\">Hobbies</ion-item>\r\n        <ion-item (click)=\"updateDescription()\">Description</ion-item>\r\n\r\n      </ion-list>\r\n      <div class=\"buttons\">\r\n        <ion-row>\r\n          <h3>Add Photo</h3>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n            <a class=\"btn btn-primary button-hover\">\r\n              <label for=\"file-upload\" class=\"custom-file-upload\">\r\n                File\r\n              </label>\r\n              <input id=\"file-upload\" name='upload_cont_img' type=\"file\" style=\"display:none;\"\r\n                (change)=\"onFileChanged($event)\">\r\n            </a>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n      <h1> Photos </h1>\r\n      <br>\r\n      <section fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n        <a class=\"oval\" color=\"primary\" (click)=\"launchPicModal()\">\r\n          <i class=\"fas fa-camera fa-2x\"></i>\r\n        </a>\r\n      </section>\r\n      <br>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayout.xs=\"column\">\r\n        <div *ngFor=\"let image of imageUrls; index as i\">\r\n          <span>\r\n            <ion-icon class=\"cancel-icon\" name=\"close-outline\" (click)=\"deleteImage(i)\"></ion-icon>\r\n          </span>\r\n          <img class=\"all-images\" [src]=\"image\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/account/account-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/account/account-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: AccountPageRoutingModule */

  /***/
  function srcAppPagesAccountAccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function () {
      return AccountPageRoutingModule;
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


    var _account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./account */
    "./src/app/pages/account/account.ts");

    var routes = [{
      path: '',
      component: _account__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
    }];

    var AccountPageRoutingModule = function AccountPageRoutingModule() {
      _classCallCheck(this, AccountPageRoutingModule);
    };

    AccountPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AccountPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/account/account.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/account/account.module.ts ***!
    \*************************************************/

  /*! exports provided: AccountModule */

  /***/
  function srcAppPagesAccountAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountModule", function () {
      return AccountModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _account__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./account */
    "./src/app/pages/account/account.ts");
    /* harmony import */


    var _account_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./account-routing.module */
    "./src/app/pages/account/account-routing.module.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");

    var AccountModule = function AccountModule() {
      _classCallCheck(this, AccountModule);
    };

    AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_6__["AccountPageRoutingModule"]],
      declarations: [_account__WEBPACK_IMPORTED_MODULE_5__["AccountPage"]],
      providers: [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"]]
    })], AccountModule);
    /***/
  },

  /***/
  "./src/app/pages/account/account.scss":
  /*!********************************************!*\
    !*** ./src/app/pages/account/account.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAccountAccountScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".oval {\n  cursor: pointer;\n  border-radius: 75px;\n  border: 1px solid #cc3732;\n  background: #cc3732 !important;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 0;\n  letter-spacing: 1px;\n  width: 5rem;\n  height: 2.75rem;\n  text-transform: uppercase;\n  -webkit-transition: -webkit-transform 80ms ease-in;\n  transition: -webkit-transform 80ms ease-in;\n  transition: transform 80ms ease-in;\n  transition: transform 80ms ease-in, -webkit-transform 80ms ease-in;\n}\n.oval:active {\n  -webkit-transform: scale(0.95);\n          transform: scale(0.95);\n}\n.oval:focus {\n  outline: none;\n}\ni {\n  padding-left: 36%;\n  padding-top: 10%;\n}\n.oval {\n  cursor: pointer;\n  border-radius: 75px;\n  border: 1px solid #cc3732;\n  background: #cc3732 !important;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 0;\n  letter-spacing: 1px;\n  width: 5rem;\n  height: 2.75rem;\n  text-transform: uppercase;\n  -webkit-transition: -webkit-transform 80ms ease-in;\n  transition: -webkit-transform 80ms ease-in;\n  transition: transform 80ms ease-in;\n  transition: transform 80ms ease-in, -webkit-transform 80ms ease-in;\n}\n.oval:active {\n  -webkit-transform: scale(0.95);\n          transform: scale(0.95);\n}\n.oval:focus {\n  outline: none;\n}\ni {\n  padding-left: 36%;\n  padding-top: 10%;\n}\nspan {\n  margin-left: 1em;\n}\nspan.span-2em {\n  margin-left: 2em;\n}\nspan.span-4em {\n  margin-left: 4em;\n}\n* {\n  box-sizing: inherit;\n  -webkit-transition-property: all;\n  transition-property: all;\n  -webkit-transition-duration: 0.6s;\n  transition-duration: 0.6s;\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease;\n}\n.buttons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  height: 100%;\n  -webkit-box-pack: center;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n}\n.btn {\n  color: black;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 45px;\n  margin: 0 0 2em;\n  max-width: 160px;\n  position: relative;\n  text-decoration: none;\n  text-transform: uppercase;\n  width: 100%;\n}\n.button-hover {\n  letter-spacing: 0;\n}\n.button-hover:hover,\n.button-hover:active {\n  letter-spacing: 5px;\n}\n.button-hover:after,\n.button-hover:before {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  bottom: 0px;\n  content: \" \";\n  display: block;\n  margin: 0 auto;\n  position: relative;\n  -webkit-transition: all 280ms ease-in-out;\n  transition: all 280ms ease-in-out;\n  width: 0;\n}\n.button-hover:after,\n.button-hover:before {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  border-color: #1a73e8;\n  -webkit-transition: width 350ms ease-in-out;\n  transition: width 350ms ease-in-out;\n  width: 70%;\n}\n.button-hover:hover:before {\n  bottom: auto;\n  top: 0;\n  width: 70%;\n}\n.btn-primary:before,\n.btn-primary:after {\n  border: 1px solid #1a73e8;\n}\n.btn-primary:hover,\n.btn-primary:active {\n  border-color: #1a73e8;\n}\n.btn-secondary:before,\n.btn-secondary:after {\n  border: 1px solid grey;\n}\n.btn-secondary:hover,\n.btn-secondary:active {\n  border-color: grey;\n}\nimg {\n  max-width: 140px;\n  border-radius: 50%;\n}\nh3 {\n  margin: 0 auto;\n}\nion-content {\n  max-width: 100vw;\n}\ndiv.ion-padding-top {\n  background-color: white;\n  padding: 2rem 4rem 2rem;\n  width: 50vw;\n}\n.fxlayout-support {\n  width: 100vw;\n  height: 150vh;\n  background-size: cover;\n  background-image: url('bg-6.jpg');\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\nion-button {\n  max-width: 200px;\n  margin: 0 auto;\n}\nlabel {\n  border: none;\n}\n#description-info {\n  text-align: center;\n}\n.start-text {\n  font-style: italic;\n  font-style: underline;\n  text-align: left;\n}\ni.fa-camera {\n  padding-left: 6% !important;\n}\n.span-info {\n  float: right;\n}\nprogress::-webkit-progress-value {\n  -webkit-transition: width 0.1s ease;\n  transition: width 0.1s ease;\n}\np {\n  text-align: left;\n}\n.cancel-icon {\n  color: crimson;\n  cursor: pointer;\n}\n.custom-file-upload {\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer;\n}\nh3 {\n  margin: 5vh auto 5vh;\n}\na.btn {\n  font-size: 0.625rem;\n  width: 10rem;\n}\nh4 {\n  height: 10vh;\n}\n@media screen and (max-width: 812px) {\n  .ion-padding-top {\n    max-width: 94vw;\n  }\n}\n@media screen and (max-width: 600px) {\n  div.ion-padding-top {\n    width: 100vw;\n    position: absolute;\n    top: 5vh;\n  }\n\n  .fxlayout-support {\n    height: 200vh;\n    background-size: auto;\n    background-repeat: repeat-y;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9DOlxcZ2l0aHViXFxtZXNzYWdpbmctYXBwXFxtZXNzYWdpbmctYXBwXFxNZXNzYWdpbmctQXBwLUFuZ3VsYXItSW9uaWMvc3JjXFxhc3NldHNcXHN0eWxlc1xcX2FjdGlvbi1idXR0b24uc2NzcyIsInNyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FjY291bnQvQzpcXGdpdGh1YlxcbWVzc2FnaW5nLWFwcFxcbWVzc2FnaW5nLWFwcFxcTWVzc2FnaW5nLUFwcC1Bbmd1bGFyLUlvbmljL3NyY1xcYXNzZXRzXFxzdHlsZXNcXF90ZXh0LW1hcmdpbi5zY3NzIiwic3JjL2FwcC9wYWdlcy9hY2NvdW50L0M6XFxnaXRodWJcXG1lc3NhZ2luZy1hcHBcXG1lc3NhZ2luZy1hcHBcXE1lc3NhZ2luZy1BcHAtQW5ndWxhci1Jb25pYy9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfYnV0dG9uLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FjY291bnQvQzpcXGdpdGh1YlxcbWVzc2FnaW5nLWFwcFxcbWVzc2FnaW5nLWFwcFxcTWVzc2FnaW5nLUFwcC1Bbmd1bGFyLUlvbmljL3NyY1xcYXBwXFxwYWdlc1xcYWNjb3VudFxcYWNjb3VudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0RBQUE7RUFBQSwwQ0FBQTtFQUFBLGtDQUFBO0VBQUEsa0VBQUE7QUNDSjtBREFJO0VBQ0ksOEJBQUE7VUFBQSxzQkFBQTtBQ0VSO0FEQUk7RUFDSSxhQUFBO0FDRVI7QURDQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBRHpCQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtEQUFBO0VBQUEsMENBQUE7RUFBQSxrQ0FBQTtFQUFBLGtFQUFBO0FDNEJKO0FEM0JJO0VBQ0ksOEJBQUE7VUFBQSxzQkFBQTtBQzZCUjtBRDNCSTtFQUNJLGFBQUE7QUM2QlI7QUQxQkE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDNkJKO0FDcERBO0VBQ0UsZ0JBQUE7QUR1REY7QUNyREE7RUFDRSxnQkFBQTtBRHdERjtBQ3REQTtFQUNFLGdCQUFBO0FEeURGO0FFaEVBO0VBQ0ksbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0NBQUE7QUZtRUo7QUVqRUE7RUFDSSxvQkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBRm9FSjtBRWpFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FGb0VKO0FFakVBO0VBQ0ksaUJBQUE7QUZvRUo7QUVqRUE7O0VBRUksbUJBQUE7QUZvRUo7QUVqRUE7O0VBRUksbUNBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxRQUFBO0FGb0VKO0FFakVBOztFQUVJLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUNBQUE7RUFDQSxVQUFBO0FGb0VKO0FFakVBO0VBQ0ksWUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FGb0VKO0FFakVBOztFQUVJLHlCQUFBO0FGb0VKO0FFakVBOztFQUVJLHFCQUFBO0FGb0VKO0FFakVBOztFQUVJLHNCQUFBO0FGb0VKO0FFakVBOztFQUVJLGtCQUFBO0FGb0VKO0FHM0pBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBSDhKRjtBRzNKQTtFQUNFLGNBQUE7QUg4SkY7QUczSkE7RUFDRSxnQkFBQTtBSDhKRjtBRzNKQTtFQUNFLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FIOEpGO0FHM0pBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBSDhKRjtBRzVKQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBSCtKRjtBRzVKQTtFQUNFLFlBQUE7QUgrSkY7QUc3SkE7RUFDRSxrQkFBQTtBSGdLRjtBRzlKQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBSGlLRjtBRzlKQTtFQUNFLDJCQUFBO0FIaUtGO0FHOUpBO0VBQ0UsWUFBQTtBSGlLRjtBRzlKQTtFQUNFLG1DQUFBO0VBQUEsMkJBQUE7QUhpS0Y7QUc5SkE7RUFDRSxnQkFBQTtBSGlLRjtBRzlKQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FIaUtGO0FHOUpBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUhpS0Y7QUc5SkE7RUFDRSxvQkFBQTtBSGlLRjtBRzlKQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBSGlLRjtBRy9KQTtFQUNFLFlBQUE7QUhrS0Y7QUcvSkE7RUFDRTtJQUNFLGVBQUE7RUhrS0Y7QUFDRjtBR2hLQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtFSGtLRjs7RUdoS0E7SUFDRSxhQUFBO0lBQ0EscUJBQUE7SUFDQSwyQkFBQTtFSG1LRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZhbCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3NXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwNCwgNTUsIDUwKTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMDQsIDU1LCA1MCkgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuICAgIGhlaWdodDogMi43NXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODBtcyBlYXNlLWluO1xyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICB9XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG59XHJcbmkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNiU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG59XHJcbiIsIi5vdmFsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA3NXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2MzNzMyO1xuICBiYWNrZ3JvdW5kOiAjY2MzNzMyICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgd2lkdGg6IDVyZW07XG4gIGhlaWdodDogMi43NXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDgwbXMgZWFzZS1pbjtcbn1cbi5vdmFsOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG59XG4ub3ZhbDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmkge1xuICBwYWRkaW5nLWxlZnQ6IDM2JTtcbiAgcGFkZGluZy10b3A6IDEwJTtcbn1cblxuLm92YWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDc1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYzM3MzI7XG4gIGJhY2tncm91bmQ6ICNjYzM3MzIgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB3aWR0aDogNXJlbTtcbiAgaGVpZ2h0OiAyLjc1cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODBtcyBlYXNlLWluO1xufVxuLm92YWw6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbn1cbi5vdmFsOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaSB7XG4gIHBhZGRpbmctbGVmdDogMzYlO1xuICBwYWRkaW5nLXRvcDogMTAlO1xufVxuXG5zcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cblxuc3Bhbi5zcGFuLTJlbSB7XG4gIG1hcmdpbi1sZWZ0OiAyZW07XG59XG5cbnNwYW4uc3Bhbi00ZW0ge1xuICBtYXJnaW4tbGVmdDogNGVtO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbn1cblxuLmJ1dHRvbnMge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJ0biB7XG4gIGNvbG9yOiBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW46IDAgMCAyZW07XG4gIG1heC13aWR0aDogMTYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJ1dHRvbi1ob3ZlciB7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4uYnV0dG9uLWhvdmVyOmhvdmVyLFxuLmJ1dHRvbi1ob3ZlcjphY3RpdmUge1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xufVxuXG4uYnV0dG9uLWhvdmVyOmFmdGVyLFxuLmJ1dHRvbi1ob3ZlcjpiZWZvcmUge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBib3R0b206IDBweDtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyODBtcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDI4MG1zIGVhc2UtaW4tb3V0O1xuICB3aWR0aDogMDtcbn1cblxuLmJ1dHRvbi1ob3ZlcjphZnRlcixcbi5idXR0b24taG92ZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYm9yZGVyLWNvbG9yOiAjMWE3M2U4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDM1MG1zIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiB3aWR0aCAzNTBtcyBlYXNlLWluLW91dDtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLmJ1dHRvbi1ob3Zlcjpob3ZlcjpiZWZvcmUge1xuICBib3R0b206IGF1dG87XG4gIHRvcDogMDtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLmJ0bi1wcmltYXJ5OmJlZm9yZSxcbi5idG4tcHJpbWFyeTphZnRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxYTczZTg7XG59XG5cbi5idG4tcHJpbWFyeTpob3Zlcixcbi5idG4tcHJpbWFyeTphY3RpdmUge1xuICBib3JkZXItY29sb3I6ICMxYTczZTg7XG59XG5cbi5idG4tc2Vjb25kYXJ5OmJlZm9yZSxcbi5idG4tc2Vjb25kYXJ5OmFmdGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbn1cblxuLmJ0bi1zZWNvbmRhcnk6aG92ZXIsXG4uYnRuLXNlY29uZGFyeTphY3RpdmUge1xuICBib3JkZXItY29sb3I6IGdyZXk7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuaDMge1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuaW9uLWNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xufVxuXG5kaXYuaW9uLXBhZGRpbmctdG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDJyZW0gNHJlbSAycmVtO1xuICB3aWR0aDogNTB2dztcbn1cblxuLmZ4bGF5b3V0LXN1cHBvcnQge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTUwdmg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvYmctNi5qcGdcIik7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmxhYmVsIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4jZGVzY3JpcHRpb24taW5mbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN0YXJ0LXRleHQge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc3R5bGU6IHVuZGVybGluZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuaS5mYS1jYW1lcmEge1xuICBwYWRkaW5nLWxlZnQ6IDYlICFpbXBvcnRhbnQ7XG59XG5cbi5zcGFuLWluZm8ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbnByb2dyZXNzOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4xcyBlYXNlO1xufVxuXG5wIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNhbmNlbC1pY29uIHtcbiAgY29sb3I6IGNyaW1zb247XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmN1c3RvbS1maWxlLXVwbG9hZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaDMge1xuICBtYXJnaW46IDV2aCBhdXRvIDV2aDtcbn1cblxuYS5idG4ge1xuICBmb250LXNpemU6IDAuNjI1cmVtO1xuICB3aWR0aDogMTByZW07XG59XG5cbmg0IHtcbiAgaGVpZ2h0OiAxMHZoO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTJweCkge1xuICAuaW9uLXBhZGRpbmctdG9wIHtcbiAgICBtYXgtd2lkdGg6IDk0dnc7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGRpdi5pb24tcGFkZGluZy10b3Age1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1dmg7XG4gIH1cblxuICAuZnhsYXlvdXQtc3VwcG9ydCB7XG4gICAgaGVpZ2h0OiAyMDB2aDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICB9XG59Iiwic3BhbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcclxufVxyXG5zcGFuLnNwYW4tMmVtIHtcclxuICBtYXJnaW4tbGVmdDogMmVtO1xyXG59XHJcbnNwYW4uc3Bhbi00ZW0ge1xyXG4gIG1hcmdpbi1sZWZ0OiA0ZW07XHJcbn1cclxuIiwiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG59XHJcbi5idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgIG1hcmdpbjogMCAwIDJlbTtcclxuICAgIG1heC13aWR0aDogMTYwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idXR0b24taG92ZXIge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbi5idXR0b24taG92ZXI6aG92ZXIsXHJcbi5idXR0b24taG92ZXI6YWN0aXZlIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5idXR0b24taG92ZXI6YWZ0ZXIsXHJcbi5idXR0b24taG92ZXI6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyODBtcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyODBtcyBlYXNlLWluLW91dDtcclxuICAgIHdpZHRoOiAwO1xyXG59XHJcblxyXG4uYnV0dG9uLWhvdmVyOmFmdGVyLFxyXG4uYnV0dG9uLWhvdmVyOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJvcmRlci1jb2xvcjogIzFhNzNlODtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMzUwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAzNTBtcyBlYXNlLWluLW91dDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5idXR0b24taG92ZXI6aG92ZXI6YmVmb3JlIHtcclxuICAgIGJvdHRvbTogYXV0bztcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpiZWZvcmUsXHJcbi5idG4tcHJpbWFyeTphZnRlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMWE3M2U4O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXIsXHJcbi5idG4tcHJpbWFyeTphY3RpdmUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMWE3M2U4O1xyXG59XHJcblxyXG4uYnRuLXNlY29uZGFyeTpiZWZvcmUsXHJcbi5idG4tc2Vjb25kYXJ5OmFmdGVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbn1cclxuXHJcbi5idG4tc2Vjb25kYXJ5OmhvdmVyLFxyXG4uYnRuLXNlY29uZGFyeTphY3RpdmUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmV5O1xyXG59XHJcbiIsIkBpbXBvcnQgXCJfYWN0aW9uLWJ1dHRvblwiO1xyXG5AaW1wb3J0IFwiX2FjdGlvbi1idXR0b25cIjtcclxuQGltcG9ydCBcIl90ZXh0LW1hcmdpblwiO1xyXG5AaW1wb3J0IFwiX2J1dHRvblwiO1xyXG5cclxuaW1nIHtcclxuICBtYXgtd2lkdGg6IDE0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuaDMge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgbWF4LXdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuZGl2Lmlvbi1wYWRkaW5nLXRvcCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMnJlbSA0cmVtIDJyZW07XHJcbiAgd2lkdGg6IDUwdnc7XHJcbn1cclxuXHJcbi5meGxheW91dC1zdXBwb3J0IHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxNTB2aDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvYmctNi5qcGdcIik7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuaW9uLWJ1dHRvbiB7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4jZGVzY3JpcHRpb24taW5mbyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zdGFydC10ZXh0IHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC1zdHlsZTogdW5kZXJsaW5lO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmkuZmEtY2FtZXJhIHtcclxuICBwYWRkaW5nLWxlZnQ6IDYlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zcGFuLWluZm8ge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxucHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMXMgZWFzZTtcclxufVxyXG5cclxucCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmNhbmNlbC1pY29uIHtcclxuICBjb2xvcjogY3JpbXNvbjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jdXN0b20tZmlsZS11cGxvYWQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmgzIHtcclxuICBtYXJnaW46IDV2aCBhdXRvIDV2aDtcclxufVxyXG5cclxuYS5idG4ge1xyXG4gIGZvbnQtc2l6ZTogMC42MjVyZW07XHJcbiAgd2lkdGg6IDEwcmVtO1xyXG59XHJcbmg0IHtcclxuICBoZWlnaHQ6IDEwdmg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgxMnB4KSB7XHJcbiAgLmlvbi1wYWRkaW5nLXRvcCB7XHJcbiAgICBtYXgtd2lkdGg6IDk0dnc7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgZGl2Lmlvbi1wYWRkaW5nLXRvcCB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDV2aDtcclxuICB9XHJcbiAgLmZ4bGF5b3V0LXN1cHBvcnQge1xyXG4gICAgaGVpZ2h0OiAyMDB2aDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcclxuICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/account/account.ts":
  /*!******************************************!*\
    !*** ./src/app/pages/account/account.ts ***!
    \******************************************/

  /*! exports provided: AccountPage */

  /***/
  function srcAppPagesAccountAccountTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountPage", function () {
      return AccountPage;
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


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _core_service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../core/service/auth.service */
    "./src/app/core/service/auth.service.ts");
    /* harmony import */


    var _core_service_image_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../core/service/image.service */
    "./src/app/core/service/image.service.ts");
    /* harmony import */


    var _core_service_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../core/service/user.service */
    "./src/app/core/service/user.service.ts");
    /* harmony import */


    var _shared_component_profile_pic_modal_pic_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../../shared/component/profile/pic-modal/pic-modal.component */
    "./src/app/shared/component/profile/pic-modal/pic-modal.component.ts");

    var AccountPage =
    /*#__PURE__*/
    function () {
      function AccountPage(changeDetectorRefs, alertCtrl, authService, afStorage, imageService, alertController, router, userService, modalController) {
        _classCallCheck(this, AccountPage);

        this.changeDetectorRefs = changeDetectorRefs;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.afStorage = afStorage;
        this.imageService = imageService;
        this.alertController = alertController;
        this.router = router;
        this.userService = userService;
        this.modalController = modalController;
        this.ages = [];
        this.religions = ['Atheism', 'Buddhism', 'Christianity', 'Catholicism', 'Hinduism', 'Islam', 'Judaism', 'Other'];
        this.kidsOptions = ['Yes', 'No', 'Maybe', 'No opinion'];
        this.user = {};
        this.selectedFileName = 'Select File';
        this.thisImage = {};
        this.images = [];
        this.imageUrls = [];
        this.file = {};
        this._authState = null;
        this.ageActionSheetOptions = {
          header: 'Select your age'
        };
        this.religionActionSheetOptions = {
          header: 'Select your religion'
        };
        this.kidsActionSheetOptions = {
          header: 'Select your religion'
        };

        this.imagesTrackFn = function (i, image) {
          return image.photoName;
        };

        $('#file-upload').change(function () {
          var i = $(this).prev('label').clone();
          var file = $('#file-upload')[0].files[0].name;
          $(this).prev('label').text(file);
        });
      }

      _createClass(AccountPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          for (var i = 18; i < 99; i++) {
            this.ages.push(i);
          }

          this.userRef = this.userService.getUser(this.authService.authState.email);
          this.userRef.get().subscribe(function (doc) {
            if (!doc.exists) {
              console.log('No such document!');
            } else {
              console.log('Document data:', doc.data());
              _this.user = doc.data();
            }
          }, function (err) {// console.log('Error fetching document: ', err);
          });
          this.loadPhotos();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {// this.getUsername();
        }
      }, {
        key: "onFileChanged",
        value: function onFileChanged($event) {
          this.selectedFileName = $event.target.value.split('C:\\fakepath\\').pop();
          this.changeDetectorRefs.detectChanges();
          this.onUpload();
        }
      }, {
        key: "onUpload",
        value: function onUpload() {
          var _this2 = this;

          this.selectedFile = $('#file-upload')[0].files[0];

          if (this.images.find(function (image) {
            return image.photoName === _this2.selectedFile.name;
          })) {
            this.existsAlert();
            return;
          } else {
            this.tmpImages = [];
            var storageRef = firebase__WEBPACK_IMPORTED_MODULE_5__["storage"]().ref();
            console.log('AccountPage -> onUpload -> this.selectedFile.name', this.selectedFile.name);
            var uploadImagesRef = storageRef.child("images/".concat(this.user.email, "/").concat(this.selectedFile.name));
            uploadImagesRef.put(this.selectedFile).then(function (snapshot) {
              console.log('Uploaded a blob or file1 (snapshot): ', snapshot);
              _this2.imageRef = _this2.imageService.getTmpImages(_this2.authService.authState.email);

              _this2.imageRef.get().subscribe(function (imageData) {
                _this2.thisImage.photoName = _this2.selectedFile.name;

                if (!imageData.exists) {// this.tmpImages.push(this.thisImage);
                  // const tmpData: ImageList = {
                  //   images: this.tmpImages
                  // };
                  // this.imageService.CreateImageList(tmpData, this.authService.authState.email);
                } else {
                  // this.tmpImages = imageData.data().images;
                  // this.tmpImages.push(this.thage);
                  // const tmpData: ImageList = {
                  //   images: this.tmpImages
                  // };
                  // this.imageService.CreateImagisImeList(tmpData, this.authService.authState.email);
                  var storage = firebase__WEBPACK_IMPORTED_MODULE_5__["storage"]();
                  var pathReference = storage.ref("images/".concat(_this2.authService.authState.email, "/").concat(_this2.selectedFile.name));
                  pathReference.getDownloadURL().then(function (url) {}).catch(function (error) {
                    console.log('AccountPage -> loadPhotos -> error', error); // Handle any errors
                  });
                  var tmpImg = {
                    photoName: _this2.selectedFile.name
                  };

                  _this2.imageService.addImageList(tmpImg, _this2.authService.authState.email);

                  _this2.selectedFileName = 'Select File';

                  _this2.router.navigateByUrl('/account');
                }
              });
            });
          }
        }
      }, {
        key: "loadPhotos",
        value: function loadPhotos() {
          var _this3 = this;

          this.images = [];
          this.imageUrls = [];
          this.imageService.getUserImageList(this.authService.authState.email).subscribe(function (imagesData) {
            _this3.images = imagesData;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = _this3.images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var image = _step.value;
                var storage = firebase__WEBPACK_IMPORTED_MODULE_5__["storage"]();
                var pathReference = storage.ref("images/".concat(_this3.authService.authState.email, "/").concat(image.image.photoName));
                pathReference.getDownloadURL().then(function (url) {
                  if (_this3.imageUrls.find(function (image) {
                    return image === url;
                  })) {} else {
                    _this3.imageUrls.push(url);
                  }
                }).catch(function (error) {
                  console.log('AccountPage -> loadPhotos -> error', error); // Handle any errors
                });
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
          });
        }
      }, {
        key: "deleteImage",
        value: function deleteImage(index) {
          var _this4 = this;

          this.deletedPhoto = this.images[index].image.photoName;
          this.imageNameRef = this.imageService.getImages(this.authService.authState.email).subscribe(function (payload) {
            if (payload[index].payload.doc.data().image.photoName === _this4.deletedPhoto) {
              _this4.imageService.deleteImage(payload[index].payload.doc.id, _this4.authService.authState.email);

              var storageRef = firebase__WEBPACK_IMPORTED_MODULE_5__["storage"]().ref();
              var deleteRef = storageRef.child("images/".concat(_this4.user.email, "/").concat(_this4.images[index].image.photoName)); // Delete the file

              _this4.loadPhotos();

              deleteRef.delete().then(function () {// File deleted successfully
                // this.images.splice(index, 1);
              }).catch(function (error) {
                console.log('deleteImage -> error', error);
              });
            }
          });
        }
      }, {
        key: "deleteAllPhotos",
        value: function deleteAllPhotos() {
          var _this5 = this;

          this.imageUrls.forEach(function (image) {
            _this5.imageService.deleteImage(image, _this5.authService.authState.email);

            var storageRef = firebase__WEBPACK_IMPORTED_MODULE_5__["storage"]().ref();
            var deleteRef = storageRef.child("images/".concat(_this5.user.email, "/").concat(image)); // Delete the file

            deleteRef.delete().then(function () {// File deleted successfully
              // this.images.splice(index, 1);
            }).catch(function (error) {
              console.log('deleteImage -> error', error);
            });
          });
        }
      }, {
        key: "launchPicModal",
        value: function launchPicModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _shared_component_profile_pic_modal_pic_modal_component__WEBPACK_IMPORTED_MODULE_9__["PicModalPage"],
                      componentProps: {
                        email: this.authService.authState.email
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "updateUserData",
        value: function updateUserData(user) {
          // Sets user data to firestore on login
          var data = {
            uid: this.authService.authState.uid,
            email: this.authService.authState.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            title: user.title,
            age: user.age,
            religion: user.religion,
            haveKids: user.haveKids,
            hobbies: user.hobbies,
            description: user.description
          };
          return this.userRef.set(data, {
            merge: true
          });
        } // Present an alert with the current username populated
        // clicking OK will update the username and display it
        // clicking Cancel will close the alert and do nothing

      }, {
        key: "updateAvatar",
        value: function updateAvatar() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this6 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertCtrl.create({
                      header: 'Change Profile Picture',
                      cssClass: 'center-alert',
                      buttons: ['Cancel', {
                        text: 'Ok',
                        handler: function handler(data) {
                          _this6.user.photoURL = data.url;

                          _this6.updateUserData(_this6.user);
                        }
                      }],
                      inputs: [{
                        type: 'text',
                        name: 'url',
                        placeholder: this.user.photoURL
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "updateUsername",
        value: function updateUsername() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this7 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertCtrl.create({
                      header: 'Change Username',
                      cssClass: 'center-alert',
                      buttons: ['Cancel', {
                        text: 'Ok',
                        handler: function handler(data) {
                          _this7.user.displayName = data.username;

                          _this7.updateUserData(_this7.user);
                        }
                      }],
                      inputs: [{
                        type: 'text',
                        name: 'username',
                        placeholder: this.user.displayName
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "updateTitle",
        value: function updateTitle() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this8 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertCtrl.create({
                      header: 'Change Title',
                      cssClass: 'center-alert',
                      buttons: ['Cancel', {
                        text: 'Ok',
                        handler: function handler(data) {
                          _this8.user.title = data.title;

                          _this8.updateUserData(_this8.user);
                        }
                      }],
                      inputs: [{
                        type: 'text',
                        name: 'title',
                        placeholder: this.user.title
                      }]
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "updateAge",
        value: function updateAge() {
          this.user.age = this.selectedAge;
          this.updateUserData(this.user);
        }
      }, {
        key: "updateReligion",
        value: function updateReligion() {
          this.user.religion = this.selectedReligion;
          this.updateUserData(this.user);
        }
      }, {
        key: "updateHaveKids",
        value: function updateHaveKids() {
          this.user.haveKids = this.selectedKids;
          this.updateUserData(this.user);
        }
      }, {
        key: "updateHobbies",
        value: function updateHobbies() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this9 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertCtrl.create({
                      header: 'Change Hobbies',
                      cssClass: 'center-alert',
                      buttons: ['Cancel', {
                        text: 'Ok',
                        handler: function handler(data) {
                          _this9.user.hobbies = data.hobbies;

                          _this9.updateUserData(_this9.user);
                        }
                      }],
                      inputs: [{
                        type: 'textarea',
                        name: 'hobbies',
                        placeholder: this.user.hobbies
                      }]
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "updateDescription",
        value: function updateDescription() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var _this10 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.alertCtrl.create({
                      header: 'Update Description',
                      cssClass: 'center-alert',
                      buttons: ['Cancel', {
                        text: 'Ok',
                        handler: function handler(data) {
                          _this10.user.description = data.description;

                          _this10.updateUserData(_this10.user);
                        }
                      }],
                      inputs: [{
                        type: 'textarea',
                        name: 'description',
                        placeholder: this.user.description
                      }]
                    });

                  case 2:
                    alert = _context6.sent;
                    _context6.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        } // updatePassword() {
        //   console.log('Clicked to update password');
        // }

      }, {
        key: "existsAlert",
        value: function existsAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var alert;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.alertController.create({
                      header: 'Image Upload Error',
                      cssClass: 'center-alert',
                      message: 'Image already exists'
                    });

                  case 2:
                    alert = _context7.sent;
                    _context7.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "authState",
        get: function get() {
          return this._authState;
        },
        set: function set(value) {
          this._authState = value;
        }
      }]);

      return AccountPage;
    }();

    AccountPage.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _core_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]
      }, {
        type: _core_service_image_service__WEBPACK_IMPORTED_MODULE_7__["ImageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _core_service_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }];
    };

    AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-account',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./account.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./account.scss */
      "./src/app/pages/account/account.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _core_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"], _core_service_image_service__WEBPACK_IMPORTED_MODULE_7__["ImageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _core_service_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])], AccountPage);
    /***/
  }
}]);
//# sourceMappingURL=account-account-module-es5.js.map