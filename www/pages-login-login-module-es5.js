function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/@angular/cdk/esm2015/bidi.js":
  /*!***************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/bidi.js ***!
    \***************************************************/

  /*! exports provided: Directionality, DIR_DOCUMENT, Dir, BidiModule, ɵa */

  /***/
  function node_modulesAngularCdkEsm2015BidiJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Directionality", function () {
      return Directionality;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function () {
      return DIR_DOCUMENT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Dir", function () {
      return Dir;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BidiModule", function () {
      return BidiModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return DIR_DOCUMENT_FACTORY;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token used to inject the document into Directionality.
     * This is used so that the value can be faked in tests.
     *
     * We can't use the real document in tests because changing the real `dir` causes geometry-based
     * tests in Safari to fail.
     *
     * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
     * themselves use things like `querySelector` in test code.
     *
     * This token is defined in a separate file from Directionality as a workaround for
     * https://github.com/angular/angular/issues/22559
     *
     * \@docs-private
     * @type {?}
     */


    var DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-dir-doc', {
      providedIn: 'root',
      factory: DIR_DOCUMENT_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function DIR_DOCUMENT_FACTORY() {
      return Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The directionality (LTR / RTL) context for the application (or a subtree of it).
     * Exposes the current direction and a stream of direction changes.
     */


    var Directionality =
    /*#__PURE__*/
    function () {
      /**
       * @param {?=} _document
       */
      function Directionality(_document) {
        _classCallCheck(this, Directionality);

        /**
         * The current 'ltr' or 'rtl' value.
         */
        this.value = 'ltr';
        /**
         * Stream that emits whenever the 'ltr' / 'rtl' state changes.
         */

        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        if (_document) {
          // TODO: handle 'auto' value -
          // We still need to account for dir="auto".
          // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
          // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now

          /** @type {?} */
          var bodyDir = _document.body ? _document.body.dir : null;
          /** @type {?} */

          var htmlDir = _document.documentElement ? _document.documentElement.dir : null;
          /** @type {?} */

          var value = bodyDir || htmlDir;
          this.value = value === 'ltr' || value === 'rtl' ? value : 'ltr';
        }
      }
      /**
       * @return {?}
       */


      _createClass(Directionality, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.change.complete();
        }
      }]);

      return Directionality;
    }();

    Directionality.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    Directionality.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [DIR_DOCUMENT]
        }]
      }];
    };
    /** @nocollapse */


    Directionality.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function Directionality_Factory() {
        return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(DIR_DOCUMENT, 8));
      },
      token: Directionality,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Directive to listen for changes of direction of part of the DOM.
     *
     * Provides itself as Directionality such that descendant directives only need to ever inject
     * Directionality to get the closest direction.
     */

    var Dir =
    /*#__PURE__*/
    function () {
      function Dir() {
        _classCallCheck(this, Dir);

        /**
         * Normalized direction that accounts for invalid/unsupported values.
         */
        this._dir = 'ltr';
        /**
         * Whether the `value` has been set to its initial value.
         */

        this._isInitialized = false;
        /**
         * Event emitted when the direction changes.
         */

        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /**
       * \@docs-private
       * @return {?}
       */


      _createClass(Dir, [{
        key: "ngAfterContentInit",

        /**
         * Initialize once default value has been set.
         * @return {?}
         */
        value: function ngAfterContentInit() {
          this._isInitialized = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.change.complete();
        }
      }, {
        key: "dir",
        get: function get() {
          return this._dir;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var old = this._dir;
          /** @type {?} */

          var normalizedValue = value ? value.toLowerCase() : value;
          this._rawDir = value;
          this._dir = normalizedValue === 'ltr' || normalizedValue === 'rtl' ? normalizedValue : 'ltr';

          if (old !== this._dir && this._isInitialized) {
            this.change.emit(this._dir);
          }
        }
        /**
         * Current layout direction of the element.
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this.dir;
        }
      }]);

      return Dir;
    }();

    Dir.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[dir]',
        providers: [{
          provide: Directionality,
          useExisting: Dir
        }],
        host: {
          '[attr.dir]': '_rawDir'
        },
        exportAs: 'dir'
      }]
    }];
    Dir.propDecorators = {
      change: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
        args: ['dirChange']
      }],
      dir: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var BidiModule = function BidiModule() {
      _classCallCheck(this, BidiModule);
    };

    BidiModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        exports: [Dir],
        declarations: [Dir]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=bidi.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/cdk/esm2015/coercion.js":
  /*!*******************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/coercion.js ***!
    \*******************************************************/

  /*! exports provided: coerceBooleanProperty, coerceNumberProperty, _isNumberValue, coerceArray, coerceCssPixelValue, coerceElement */

  /***/
  function node_modulesAngularCdkEsm2015CoercionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function () {
      return coerceBooleanProperty;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function () {
      return coerceNumberProperty;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_isNumberValue", function () {
      return _isNumberValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceArray", function () {
      return coerceArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceCssPixelValue", function () {
      return coerceCssPixelValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceElement", function () {
      return coerceElement;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Coerces a data-bound value (typically a string) to a boolean.
     * @param {?} value
     * @return {?}
     */


    function coerceBooleanProperty(value) {
      return value != null && "".concat(value) !== 'false';
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} value
     * @param {?=} fallbackValue
     * @return {?}
     */


    function coerceNumberProperty(value) {
      var fallbackValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return _isNumberValue(value) ? Number(value) : fallbackValue;
    }
    /**
     * Whether the provided value is considered a number.
     * \@docs-private
     * @param {?} value
     * @return {?}
     */


    function _isNumberValue(value) {
      // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
      // and other non-number values as NaN, where Number just uses 0) but it considers the string
      // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
      return !isNaN(parseFloat(
      /** @type {?} */
      value)) && !isNaN(Number(value));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Wraps the provided value in an array, unless the provided value is an array.
     * @template T
     * @param {?} value
     * @return {?}
     */


    function coerceArray(value) {
      return Array.isArray(value) ? value : [value];
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Coerces a value to a CSS pixel value.
     * @param {?} value
     * @return {?}
     */


    function coerceCssPixelValue(value) {
      if (value == null) {
        return '';
      }

      return typeof value === 'string' ? value : "".concat(value, "px");
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Coerces an ElementRef or an Element into an element.
     * Useful for APIs that can accept either a ref or the native element itself.
     * @template T
     * @param {?} elementOrRef
     * @return {?}
     */


    function coerceElement(elementOrRef) {
      return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? elementOrRef.nativeElement : elementOrRef;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=coercion.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/flex-layout/esm2015/core.js":
  /*!***********************************************************!*\
    !*** ./node_modules/@angular/flex-layout/esm2015/core.js ***!
    \***********************************************************/

  /*! exports provided: ɵMatchMedia, ɵMockMatchMedia, ɵMockMatchMediaProvider, CoreModule, removeStyles, BROWSER_PROVIDER, CLASS_NAME, MediaChange, StylesheetMap, DEFAULT_CONFIG, LAYOUT_CONFIG, SERVER_TOKEN, BREAKPOINT, mergeAlias, BaseDirective2, DEFAULT_BREAKPOINTS, ScreenTypes, ORIENTATION_BREAKPOINTS, BreakPointRegistry, BREAKPOINTS, MediaObserver, MediaTrigger, sortDescendingPriority, sortAscendingPriority, StyleUtils, StyleBuilder, validateBasis, MediaMarshaller, BREAKPOINT_PRINT, PrintHook */

  /***/
  function node_modulesAngularFlexLayoutEsm2015CoreJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵMatchMedia", function () {
      return MatchMedia;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵMockMatchMedia", function () {
      return MockMatchMedia;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵMockMatchMediaProvider", function () {
      return MockMatchMediaProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "removeStyles", function () {
      return removeStyles;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BROWSER_PROVIDER", function () {
      return BROWSER_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CLASS_NAME", function () {
      return CLASS_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MediaChange", function () {
      return MediaChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StylesheetMap", function () {
      return StylesheetMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_CONFIG", function () {
      return DEFAULT_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LAYOUT_CONFIG", function () {
      return LAYOUT_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SERVER_TOKEN", function () {
      return SERVER_TOKEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BREAKPOINT", function () {
      return BREAKPOINT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mergeAlias", function () {
      return mergeAlias;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseDirective2", function () {
      return BaseDirective2;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_BREAKPOINTS", function () {
      return DEFAULT_BREAKPOINTS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScreenTypes", function () {
      return ScreenTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ORIENTATION_BREAKPOINTS", function () {
      return ORIENTATION_BREAKPOINTS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreakPointRegistry", function () {
      return BreakPointRegistry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BREAKPOINTS", function () {
      return BREAKPOINTS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MediaObserver", function () {
      return MediaObserver;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MediaTrigger", function () {
      return MediaTrigger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sortDescendingPriority", function () {
      return sortDescendingPriority;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sortAscendingPriority", function () {
      return sortAscendingPriority;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StyleUtils", function () {
      return StyleUtils;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StyleBuilder", function () {
      return StyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateBasis", function () {
      return validateBasis;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MediaMarshaller", function () {
      return MediaMarshaller;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BREAKPOINT_PRINT", function () {
      return BREAKPOINT_PRINT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrintHook", function () {
      return PrintHook;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * Find all of the server-generated stylings, if any, and remove them
     * This will be in the form of inline classes and the style block in the
     * head of the DOM
     * @param {?} _document
     * @param {?} platformId
     * @return {?}
     */


    function removeStyles(_document, platformId) {
      return function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
          /** @type {?} */
          var elements = Array.from(_document.querySelectorAll("[class*=".concat(CLASS_NAME, "]")));
          /** @type {?} */

          var classRegex = /\bflex-layout-.+?\b/g;
          elements.forEach(function (el) {
            el.classList.contains("".concat(CLASS_NAME, "ssr")) && el.parentNode ? el.parentNode.removeChild(el) : el.className.replace(classRegex, '');
          });
        }
      };
    }
    /** *
     *  Provider to remove SSR styles on the browser
      @type {?} */


    var BROWSER_PROVIDER = {
      provide:
      /** @type {?} */
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"],
      useFactory: removeStyles,
      deps: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]],
      multi: true
    };
    /** @type {?} */

    var CLASS_NAME = 'flex-layout-';
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * *****************************************************************
     * Define module for the MediaQuery API
     * *****************************************************************
     */

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        providers: [BROWSER_PROVIDER]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * Class instances emitted [to observers] for each mql notification
     */

    var MediaChange =
    /*#__PURE__*/
    function () {
      /**
       * @param {?=} matches whether the mediaQuery is currently activated
       * @param {?=} mediaQuery e.g. (min-width: 600px) and (max-width: 959px)
       * @param {?=} mqAlias e.g. gt-sm, md, gt-lg
       * @param {?=} suffix e.g. GtSM, Md, GtLg
       * @param {?=} priority the priority of activation for the given breakpoint
       */
      function MediaChange() {
        var matches = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var mediaQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';
        var mqAlias = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        var suffix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
        var priority = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

        _classCallCheck(this, MediaChange);

        this.matches = matches;
        this.mediaQuery = mediaQuery;
        this.mqAlias = mqAlias;
        this.suffix = suffix;
        this.priority = priority;
        this.property = '';
      }
      /**
       * Create an exact copy of the MediaChange
       * @return {?}
       */


      _createClass(MediaChange, [{
        key: "clone",
        value: function clone() {
          return new MediaChange(this.matches, this.mediaQuery, this.mqAlias, this.suffix);
        }
      }]);

      return MediaChange;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * Utility to emulate a CSS stylesheet
     *
     * This utility class stores all of the styles for a given HTML element
     * as a readonly `stylesheet` map.
     */


    var StylesheetMap =
    /*#__PURE__*/
    function () {
      function StylesheetMap() {
        _classCallCheck(this, StylesheetMap);

        this.stylesheet = new Map();
      }
      /**
       * Add an individual style to an HTML element
       * @param {?} element
       * @param {?} style
       * @param {?} value
       * @return {?}
       */


      _createClass(StylesheetMap, [{
        key: "addStyleToElement",
        value: function addStyleToElement(element, style, value) {
          /** @type {?} */
          var stylesheet = this.stylesheet.get(element);

          if (stylesheet) {
            stylesheet.set(style, value);
          } else {
            this.stylesheet.set(element, new Map([[style, value]]));
          }
        }
        /**
         * Clear the virtual stylesheet
         * @return {?}
         */

      }, {
        key: "clearStyles",
        value: function clearStyles() {
          this.stylesheet.clear();
        }
        /**
         * Retrieve a given style for an HTML element
         * @param {?} el
         * @param {?} styleName
         * @return {?}
         */

      }, {
        key: "getStyleForElement",
        value: function getStyleForElement(el, styleName) {
          /** @type {?} */
          var styles = this.stylesheet.get(el);
          /** @type {?} */

          var value = '';

          if (styles) {
            /** @type {?} */
            var style = styles.get(styleName);

            if (typeof style === 'number' || typeof style === 'string') {
              value = style + '';
            }
          }

          return value;
        }
      }]);

      return StylesheetMap;
    }();

    StylesheetMap.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    StylesheetMap.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function StylesheetMap_Factory() {
        return new StylesheetMap();
      },
      token: StylesheetMap,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** @type {?} */

    var DEFAULT_CONFIG = {
      addFlexToParent: true,
      addOrientationBps: false,
      disableDefaultBps: false,
      disableVendorPrefixes: false,
      serverLoaded: false,
      useColumnBasisZero: true,
      printWithBreakpoints: [],
      mediaTriggerAutoRestore: true,
      ssrObserveBreakpoints: []
    };
    /** @type {?} */

    var LAYOUT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Flex Layout token, config options for the library', {
      providedIn: 'root',
      factory: function factory() {
        return DEFAULT_CONFIG;
      }
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** *
     * Token that is provided to tell whether the FlexLayoutServerModule
     * has been included in the bundle
     *
     * NOTE: This can be manually provided to disable styles when using SSR
      @type {?} */

    var SERVER_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('FlexLayoutServerLoaded', {
      providedIn: 'root',
      factory: function factory() {
        return false;
      }
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** @type {?} */

    var BREAKPOINT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Flex Layout token, collect all breakpoints into one provider', {
      providedIn: 'root',
      factory: function factory() {
        return null;
      }
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * For the specified MediaChange, make sure it contains the breakpoint alias
     * and suffix (if available).
     * @param {?} dest
     * @param {?} source
     * @return {?}
     */

    function mergeAlias(dest, source) {
      dest = dest ? dest.clone() : new MediaChange();

      if (source) {
        dest.mqAlias = source.alias;
        dest.mediaQuery = source.mediaQuery;
        dest.suffix =
        /** @type {?} */
        source.suffix;
        dest.priority =
        /** @type {?} */
        source.priority;
      }

      return dest;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** *
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
      @type {?} */


    var INLINE = 'inline';
    /** @type {?} */

    var LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
    /**
     * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
     * @param {?} value
     * @return {?}
     */

    function buildLayoutCSS(value) {
      var _validateValue = validateValue(value),
          _validateValue2 = _slicedToArray(_validateValue, 3),
          direction = _validateValue2[0],
          wrap = _validateValue2[1],
          isInline = _validateValue2[2];

      return buildCSS(direction, wrap, isInline);
    }
    /**
     * Validate the value to be one of the acceptable value options
     * Use default fallback of 'row'
     * @param {?} value
     * @return {?}
     */


    function validateValue(value) {
      value = value ? value.toLowerCase() : '';

      var _value$split = value.split(' '),
          _value$split2 = _slicedToArray(_value$split, 3),
          direction = _value$split2[0],
          wrap = _value$split2[1],
          inline = _value$split2[2]; // First value must be the `flex-direction`


      if (!LAYOUT_VALUES.find(function (x) {
        return x === direction;
      })) {
        direction = LAYOUT_VALUES[0];
      }

      if (wrap === INLINE) {
        wrap = inline !== INLINE ? inline : '';
        inline = INLINE;
      }

      return [direction, validateWrapValue(wrap), !!inline];
    }
    /**
     * Convert layout-wrap='<value>' to expected flex-wrap style
     * @param {?} value
     * @return {?}
     */


    function validateWrapValue(value) {
      if (!!value) {
        switch (value.toLowerCase()) {
          case 'reverse':
          case 'wrap-reverse':
          case 'reverse-wrap':
            value = 'wrap-reverse';
            break;

          case 'no':
          case 'none':
          case 'nowrap':
            value = 'nowrap';
            break;
          // All other values fallback to 'wrap'

          default:
            value = 'wrap';
            break;
        }
      }

      return value;
    }
    /**
     * Build the CSS that should be assigned to the element instance
     * BUG:
     *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
     *      Use height instead if possible; height : <xxx>vh;
     *
     *  This way any padding or border specified on the child elements are
     *  laid out and drawn inside that element's specified width and height.
     * @param {?} direction
     * @param {?=} wrap
     * @param {?=} inline
     * @return {?}
     */


    function buildCSS(direction) {
      var wrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var inline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return {
        'display': inline ? 'inline-flex' : 'flex',
        'box-sizing': 'border-box',
        'flex-direction': direction,
        'flex-wrap': !!wrap ? wrap : null
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @abstract
     */


    var BaseDirective2 =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} elementRef
       * @param {?} styleBuilder
       * @param {?} styler
       * @param {?} marshal
       */
      function BaseDirective2(elementRef, styleBuilder, styler, marshal) {
        _classCallCheck(this, BaseDirective2);

        this.elementRef = elementRef;
        this.styleBuilder = styleBuilder;
        this.styler = styler;
        this.marshal = marshal;
        this.DIRECTIVE_KEY = '';
        this.inputs = [];
        /**
         * The most recently used styles for the builder
         */

        this.mru = {};
        this.destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Cache map for style computation
         */

        this.styleCache = new Map();
      }
      /**
       * Access to host element's parent DOM node
       * @return {?}
       */


      _createClass(BaseDirective2, [{
        key: "ngOnChanges",

        /**
         * For \@Input changes
         * @param {?} changes
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          var _this = this;

          Object.keys(changes).forEach(function (key) {
            if (_this.inputs.indexOf(key) !== -1) {
              /** @type {?} */
              var bp = key.split('.').slice(1).join('.');
              /** @type {?} */

              var val = changes[key].currentValue;

              _this.setValue(val, bp);
            }
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroySubject.next();
          this.destroySubject.complete();
          this.marshal.releaseElement(this.nativeElement);
        }
        /**
         * Register with central marshaller service
         * @param {?=} extraTriggers
         * @return {?}
         */

      }, {
        key: "init",
        value: function init() {
          var extraTriggers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          this.marshal.init(this.elementRef.nativeElement, this.DIRECTIVE_KEY, this.updateWithValue.bind(this), this.clearStyles.bind(this), extraTriggers);
        }
        /**
         * Add styles to the element using predefined style builder
         * @param {?} input
         * @param {?=} parent
         * @return {?}
         */

      }, {
        key: "addStyles",
        value: function addStyles(input, parent) {
          /** @type {?} */
          var builder = this.styleBuilder;
          /** @type {?} */

          var useCache = builder.shouldCache;
          /** @type {?} */

          var genStyles = this.styleCache.get(input);

          if (!genStyles || !useCache) {
            genStyles = builder.buildStyles(input, parent);

            if (useCache) {
              this.styleCache.set(input, genStyles);
            }
          }

          this.mru = Object.assign({}, genStyles);
          this.applyStyleToElement(genStyles);
          builder.sideEffect(input, genStyles, parent);
        }
        /**
         * Remove generated styles from an element using predefined style builder
         * @return {?}
         */

      }, {
        key: "clearStyles",
        value: function clearStyles() {
          var _this2 = this;

          Object.keys(this.mru).forEach(function (k) {
            _this2.mru[k] = '';
          });
          this.applyStyleToElement(this.mru);
          this.mru = {};
        }
        /**
         * Force trigger style updates on DOM element
         * @return {?}
         */

      }, {
        key: "triggerUpdate",
        value: function triggerUpdate() {
          this.marshal.triggerUpdate(this.nativeElement, this.DIRECTIVE_KEY);
        }
        /**
         * Determine the DOM element's Flexbox flow (flex-direction).
         *
         * Check inline style first then check computed (stylesheet) style.
         * And optionally add the flow value to element's inline style.
         * @param {?} target
         * @param {?=} addIfMissing
         * @return {?}
         */

      }, {
        key: "getFlexFlowDirection",
        value: function getFlexFlowDirection(target) {
          var addIfMissing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          if (target) {
            var _this$styler$getFlowD = this.styler.getFlowDirection(target),
                _this$styler$getFlowD2 = _slicedToArray(_this$styler$getFlowD, 2),
                value = _this$styler$getFlowD2[0],
                hasInlineValue = _this$styler$getFlowD2[1];

            if (!hasInlineValue && addIfMissing) {
              /** @type {?} */
              var style = buildLayoutCSS(value);
              /** @type {?} */

              var elements = [target];
              this.styler.applyStyleToElements(style, elements);
            }

            return value.trim();
          }

          return 'row';
        }
        /**
         * Applies styles given via string pair or object map to the directive element
         * @param {?} style
         * @param {?=} value
         * @param {?=} element
         * @return {?}
         */

      }, {
        key: "applyStyleToElement",
        value: function applyStyleToElement(style, value) {
          var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.nativeElement;
          this.styler.applyStyleToElement(element, style, value);
        }
        /**
         * @param {?} val
         * @param {?} bp
         * @return {?}
         */

      }, {
        key: "setValue",
        value: function setValue(val, bp) {
          this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, val, bp);
        }
        /**
         * @param {?} input
         * @return {?}
         */

      }, {
        key: "updateWithValue",
        value: function updateWithValue(input) {
          this.addStyles(input);
        }
      }, {
        key: "parentElement",
        get: function get() {
          return this.elementRef.nativeElement.parentElement;
        }
        /**
         * Access to the HTMLElement for the directive
         * @return {?}
         */

      }, {
        key: "nativeElement",
        get: function get() {
          return this.elementRef.nativeElement;
        }
        /**
         * Access to the activated value for the directive
         * @return {?}
         */

      }, {
        key: "activatedValue",
        get: function get() {
          return this.marshal.getValue(this.nativeElement, this.DIRECTIVE_KEY);
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, value, this.marshal.activatedAlias);
        }
      }]);

      return BaseDirective2;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** *
     * NOTE: Smaller ranges have HIGHER priority since the match is more specific
      @type {?} */


    var DEFAULT_BREAKPOINTS = [{
      alias: 'xs',
      mediaQuery: 'screen and (min-width: 0px) and (max-width: 599px)',
      priority: 1000
    }, {
      alias: 'sm',
      mediaQuery: 'screen and (min-width: 600px) and (max-width: 959px)',
      priority: 900
    }, {
      alias: 'md',
      mediaQuery: 'screen and (min-width: 960px) and (max-width: 1279px)',
      priority: 800
    }, {
      alias: 'lg',
      mediaQuery: 'screen and (min-width: 1280px) and (max-width: 1919px)',
      priority: 700
    }, {
      alias: 'xl',
      mediaQuery: 'screen and (min-width: 1920px) and (max-width: 5000px)',
      priority: 600
    }, {
      alias: 'lt-sm',
      overlapping: true,
      mediaQuery: 'screen and (max-width: 599px)',
      priority: 950
    }, {
      alias: 'lt-md',
      overlapping: true,
      mediaQuery: 'screen and (max-width: 959px)',
      priority: 850
    }, {
      alias: 'lt-lg',
      overlapping: true,
      mediaQuery: 'screen and (max-width: 1279px)',
      priority: 750
    }, {
      alias: 'lt-xl',
      overlapping: true,
      priority: 650,
      mediaQuery: 'screen and (max-width: 1919px)'
    }, {
      alias: 'gt-xs',
      overlapping: true,
      mediaQuery: 'screen and (min-width: 600px)',
      priority: -950
    }, {
      alias: 'gt-sm',
      overlapping: true,
      mediaQuery: 'screen and (min-width: 960px)',
      priority: -850
    }, {
      alias: 'gt-md',
      overlapping: true,
      mediaQuery: 'screen and (min-width: 1280px)',
      priority: -750
    }, {
      alias: 'gt-lg',
      overlapping: true,
      mediaQuery: 'screen and (min-width: 1920px)',
      priority: -650
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** @type {?} */

    var HANDSET_PORTRAIT = '(orientation: portrait) and (max-width: 599px)';
    /** @type {?} */

    var HANDSET_LANDSCAPE = '(orientation: landscape) and (max-width: 959px)';
    /** @type {?} */

    var TABLET_LANDSCAPE = '(orientation: landscape) and (min-width: 960px) and (max-width: 1279px)';
    /** @type {?} */

    var TABLET_PORTRAIT = '(orientation: portrait) and (min-width: 600px) and (max-width: 839px)';
    /** @type {?} */

    var WEB_PORTRAIT = '(orientation: portrait) and (min-width: 840px)';
    /** @type {?} */

    var WEB_LANDSCAPE = '(orientation: landscape) and (min-width: 1280px)';
    /** @type {?} */

    var ScreenTypes = {
      'HANDSET': "".concat(HANDSET_PORTRAIT, ", ").concat(HANDSET_LANDSCAPE),
      'TABLET': "".concat(TABLET_PORTRAIT, " , ").concat(TABLET_LANDSCAPE),
      'WEB': "".concat(WEB_PORTRAIT, ", ").concat(WEB_LANDSCAPE, " "),
      'HANDSET_PORTRAIT': "".concat(HANDSET_PORTRAIT),
      'TABLET_PORTRAIT': "".concat(TABLET_PORTRAIT, " "),
      'WEB_PORTRAIT': "".concat(WEB_PORTRAIT),
      'HANDSET_LANDSCAPE': "".concat(HANDSET_LANDSCAPE, "]"),
      'TABLET_LANDSCAPE': "".concat(TABLET_LANDSCAPE),
      'WEB_LANDSCAPE': "".concat(WEB_LANDSCAPE)
    };
    /** *
     * Extended Breakpoints for handset/tablets with landscape or portrait orientations
      @type {?} */

    var ORIENTATION_BREAKPOINTS = [{
      'alias': 'handset',
      priority: 2000,
      'mediaQuery': ScreenTypes.HANDSET
    }, {
      'alias': 'handset.landscape',
      priority: 2000,
      'mediaQuery': ScreenTypes.HANDSET_LANDSCAPE
    }, {
      'alias': 'handset.portrait',
      priority: 2000,
      'mediaQuery': ScreenTypes.HANDSET_PORTRAIT
    }, {
      'alias': 'tablet',
      priority: 2100,
      'mediaQuery': ScreenTypes.TABLET
    }, {
      'alias': 'tablet.landscape',
      priority: 2100,
      'mediaQuery': ScreenTypes.TABLET
    }, {
      'alias': 'tablet.portrait',
      priority: 2100,
      'mediaQuery': ScreenTypes.TABLET_PORTRAIT
    }, {
      'alias': 'web',
      priority: 2200,
      'mediaQuery': ScreenTypes.WEB,
      overlapping: true
    }, {
      'alias': 'web.landscape',
      priority: 2200,
      'mediaQuery': ScreenTypes.WEB_LANDSCAPE,
      overlapping: true
    }, {
      'alias': 'web.portrait',
      priority: 2200,
      'mediaQuery': ScreenTypes.WEB_PORTRAIT,
      overlapping: true
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * Extends an object with the *enumerable* and *own* properties of one or more source objects,
     * similar to Object.assign.
     *
     * @param {?} dest The object which will have properties copied to it.
     * @param {...?} sources The source objects from which properties will be copied.
     * @return {?}
     */

    function extendObject(dest) {
      if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
      }

      for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        sources[_key - 1] = arguments[_key];
      }

      for (var _i2 = 0, _sources = sources; _i2 < _sources.length; _i2++) {
        var source = _sources[_i2];

        if (source != null) {
          for (var key in source) {
            if (source.hasOwnProperty(key)) {
              dest[key] = source[key];
            }
          }
        }
      }

      return dest;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** @type {?} */


    var ALIAS_DELIMITERS = /(\.|-|_)/g;
    /**
     * @param {?} part
     * @return {?}
     */

    function firstUpperCase(part) {
      /** @type {?} */
      var first = part.length > 0 ? part.charAt(0) : '';
      /** @type {?} */

      var remainder = part.length > 1 ? part.slice(1) : '';
      return first.toUpperCase() + remainder;
    }
    /**
     * Converts snake-case to SnakeCase.
     * @param {?} name Text to UpperCamelCase
     * @return {?}
     */


    function camelCase(name) {
      return name.replace(ALIAS_DELIMITERS, '|').split('|').map(firstUpperCase).join('');
    }
    /**
     * For each breakpoint, ensure that a Suffix is defined;
     * fallback to UpperCamelCase the unique Alias value
     * @param {?} list
     * @return {?}
     */


    function validateSuffixes(list) {
      list.forEach(function (bp) {
        if (!bp.suffix) {
          bp.suffix = camelCase(bp.alias); // create Suffix value based on alias

          bp.overlapping = !!bp.overlapping; // ensure default value
        }
      });
      return list;
    }
    /**
     * Merge a custom breakpoint list with the default list based on unique alias values
     *  - Items are added if the alias is not in the default list
     *  - Items are merged with the custom override if the alias exists in the default list
     * @param {?} defaults
     * @param {?=} custom
     * @return {?}
     */


    function mergeByAlias(defaults) {
      var custom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      /** @type {?} */
      var dict = {};
      defaults.forEach(function (bp) {
        dict[bp.alias] = bp;
      }); // Merge custom breakpoints

      custom.forEach(function (bp) {
        if (dict[bp.alias]) {
          extendObject(dict[bp.alias], bp);
        } else {
          dict[bp.alias] = bp;
        }
      });
      return validateSuffixes(Object.keys(dict).map(function (k) {
        return dict[k];
      }));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** *
     *  Injection token unique to the flex-layout library.
     *  Use this token when build a custom provider (see below).
      @type {?} */


    var BREAKPOINTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Token (@angular/flex-layout) Breakpoints', {
      providedIn: 'root',
      factory: function factory() {
        /** @type {?} */
        var breakpoints = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(BREAKPOINT);
        /** @type {?} */

        var layoutConfig = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(LAYOUT_CONFIG);
        /** @type {?} */

        var bpFlattenArray = [].concat.apply([], (breakpoints || []).map(function (v) {
          return Array.isArray(v) ? v : [v];
        }));
        /** @type {?} */

        var builtIns = (layoutConfig.disableDefaultBps ? [] : DEFAULT_BREAKPOINTS).concat(layoutConfig.addOrientationBps ? ORIENTATION_BREAKPOINTS : []);
        return mergeByAlias(builtIns, bpFlattenArray);
      }
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * HOF to sort the breakpoints by descending priority
     * @template T
     * @param {?} a
     * @param {?} b
     * @return {?}
     */

    function sortDescendingPriority(a, b) {
      /** @type {?} */
      var priorityA = a ? a.priority || 0 : 0;
      /** @type {?} */

      var priorityB = b ? b.priority || 0 : 0;
      return priorityB - priorityA;
    }
    /**
     * HOF to sort the breakpoints by ascending priority
     * @template T
     * @param {?} a
     * @param {?} b
     * @return {?}
     */


    function sortAscendingPriority(a, b) {
      /** @type {?} */
      var pA = a.priority || 0;
      /** @type {?} */

      var pB = b.priority || 0;
      return pA - pB;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * Registry of 1..n MediaQuery breakpoint ranges
     * This is published as a provider and may be overridden from custom, application-specific ranges
     *
     */


    var BreakPointRegistry =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} list
       */
      function BreakPointRegistry(list) {
        _classCallCheck(this, BreakPointRegistry);

        /**
         * Memoized BreakPoint Lookups
         */
        this.findByMap = new Map();
        this.items = _toConsumableArray(list).sort(sortAscendingPriority);
      }
      /**
       * Search breakpoints by alias (e.g. gt-xs)
       * @param {?} alias
       * @return {?}
       */


      _createClass(BreakPointRegistry, [{
        key: "findByAlias",
        value: function findByAlias(alias) {
          return !alias ? null : this.findWithPredicate(alias, function (bp) {
            return bp.alias == alias;
          });
        }
        /**
         * @param {?} query
         * @return {?}
         */

      }, {
        key: "findByQuery",
        value: function findByQuery(query) {
          return this.findWithPredicate(query, function (bp) {
            return bp.mediaQuery == query;
          });
        }
        /**
         * Get all the breakpoints whose ranges could overlapping `normal` ranges;
         * e.g. gt-sm overlaps md, lg, and xl
         * @return {?}
         */

      }, {
        key: "findWithPredicate",

        /**
         * Memoized lookup using custom predicate function
         * @param {?} key
         * @param {?} searchFn
         * @return {?}
         */
        value: function findWithPredicate(key, searchFn) {
          /** @type {?} */
          var response = this.findByMap.get(key);

          if (!response) {
            response = this.items.find(searchFn) || null;
            this.findByMap.set(key, response);
          }

          return response || null;
        }
      }, {
        key: "overlappings",
        get: function get() {
          return this.items.filter(function (it) {
            return it.overlapping == true;
          });
        }
        /**
         * Get list of all registered (non-empty) breakpoint aliases
         * @return {?}
         */

      }, {
        key: "aliases",
        get: function get() {
          return this.items.map(function (it) {
            return it.alias;
          });
        }
        /**
         * Aliases are mapped to properties using suffixes
         * e.g.  'gt-sm' for property 'layout'  uses suffix 'GtSm'
         * for property layoutGtSM.
         * @return {?}
         */

      }, {
        key: "suffixes",
        get: function get() {
          return this.items.map(function (it) {
            return !!it.suffix ? it.suffix : '';
          });
        }
      }]);

      return BreakPointRegistry;
    }();

    BreakPointRegistry.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    BreakPointRegistry.ctorParameters = function () {
      return [{
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [BREAKPOINTS]
        }]
      }];
    };
    /** @nocollapse */


    BreakPointRegistry.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function BreakPointRegistry_Factory() {
        return new BreakPointRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(BREAKPOINTS));
      },
      token: BreakPointRegistry,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * MediaMonitor configures listeners to mediaQuery changes and publishes an Observable facade to
     * convert mediaQuery change callbacks to subscriber notifications. These notifications will be
     * performed within the ng Zone to trigger change detections and component updates.
     *
     * NOTE: both mediaQuery activations and de-activations are announced in notifications
     */

    var MatchMedia =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _zone
       * @param {?} _platformId
       * @param {?} _document
       */
      function MatchMedia(_zone, _platformId, _document) {
        _classCallCheck(this, MatchMedia);

        this._zone = _zone;
        this._platformId = _platformId;
        this._document = _document;
        /**
         * Initialize source with 'all' so all non-responsive APIs trigger style updates
         */

        this.source = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new MediaChange(true));
        this.registry = new Map();
        this._observable$ = this.source.asObservable();
      }
      /**
       * Publish list of all current activations
       * @return {?}
       */


      _createClass(MatchMedia, [{
        key: "isActive",

        /**
         * For the specified mediaQuery?
         * @param {?} mediaQuery
         * @return {?}
         */
        value: function isActive(mediaQuery) {
          /** @type {?} */
          var mql = this.registry.get(mediaQuery);
          return !!mql ? mql.matches : false;
        }
        /**
         * External observers can watch for all (or a specific) mql changes.
         * Typically used by the MediaQueryAdaptor; optionally available to components
         * who wish to use the MediaMonitor as mediaMonitor$ observable service.
         *
         * Use deferred registration process to register breakpoints only on subscription
         * This logic also enforces logic to register all mediaQueries BEFORE notify
         * subscribers of notifications.
         * @param {?=} mqList
         * @param {?=} filterOthers
         * @return {?}
         */

      }, {
        key: "observe",
        value: function observe(mqList) {
          var _this3 = this;

          var filterOthers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          if (mqList && mqList.length) {
            /** @type {?} */
            var matchMedia$ = this._observable$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (change) {
              return !filterOthers ? true : mqList.indexOf(change.mediaQuery) > -1;
            }));
            /** @type {?} */


            var registration$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              /** @type {?} */
              var matches = _this3.registerQuery(mqList);

              if (matches.length) {
                /** @type {?} */
                var lastChange =
                /** @type {?} */
                matches.pop();
                matches.forEach(function (e) {
                  observer.next(e);
                });

                _this3.source.next(lastChange); // last match is cached

              }

              observer.complete();
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(registration$, matchMedia$);
          }

          return this._observable$;
        }
        /**
         * Based on the BreakPointRegistry provider, register internal listeners for each unique
         * mediaQuery. Each listener emits specific MediaChange data to observers
         * @param {?} mediaQuery
         * @return {?}
         */

      }, {
        key: "registerQuery",
        value: function registerQuery(mediaQuery) {
          var _this4 = this;

          /** @type {?} */
          var list = Array.isArray(mediaQuery) ? mediaQuery : [mediaQuery];
          /** @type {?} */

          var matches = [];
          buildQueryCss(list, this._document);
          list.forEach(function (query) {
            /** @type {?} */
            var onMQLEvent = function onMQLEvent(e) {
              _this4._zone.run(function () {
                return _this4.source.next(new MediaChange(e.matches, query));
              });
            };
            /** @type {?} */


            var mql = _this4.registry.get(query);

            if (!mql) {
              mql = _this4.buildMQL(query);
              mql.addListener(onMQLEvent);

              _this4.registry.set(query, mql);
            }

            if (mql.matches) {
              matches.push(new MediaChange(true, query));
            }
          });
          return matches;
        }
        /**
         * Call window.matchMedia() to build a MediaQueryList; which
         * supports 0..n listeners for activation/deactivation
         * @param {?} query
         * @return {?}
         */

      }, {
        key: "buildMQL",
        value: function buildMQL(query) {
          return constructMql(query, Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId));
        }
      }, {
        key: "activations",
        get: function get() {
          /** @type {?} */
          var results = [];
          this.registry.forEach(function (mql, key) {
            if (mql.matches) {
              results.push(key);
            }
          });
          return results;
        }
      }]);

      return MatchMedia;
    }();

    MatchMedia.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    MatchMedia.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    MatchMedia.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function MatchMedia_Factory() {
        return new MatchMedia(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      },
      token: MatchMedia,
      providedIn: "root"
    });
    /** *
     * Private global registry for all dynamically-created, injected style tags
     * @see prepare(query)
      @type {?} */

    var ALL_STYLES = {};
    /**
     * For Webkit engines that only trigger the MediaQueryList Listener
     * when there is at least one CSS selector for the respective media query.
     *
     * @param {?} mediaQueries
     * @param {?} _document
     * @return {?}
     */

    function buildQueryCss(mediaQueries, _document) {
      /** @type {?} */
      var list = mediaQueries.filter(function (it) {
        return !ALL_STYLES[it];
      });

      if (list.length > 0) {
        /** @type {?} */
        var query = list.join(', ');

        try {
          /** @type {?} */
          var styleEl = _document.createElement('style');

          styleEl.setAttribute('type', 'text/css');

          if (!
          /** @type {?} */
          styleEl.styleSheet) {
            /** @type {?} */
            var cssText = "\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media ".concat(query, " {.fx-query-test{ }}\n");
            styleEl.appendChild(_document.createTextNode(cssText));
          }
          /** @type {?} */


          _document.head.appendChild(styleEl); // Store in private global registry


          list.forEach(function (mq) {
            return ALL_STYLES[mq] = styleEl;
          });
        } catch (e) {
          console.error(e);
        }
      }
    }
    /**
     * @param {?} query
     * @param {?} isBrowser
     * @return {?}
     */


    function constructMql(query, isBrowser) {
      /** @type {?} */
      var canListen = isBrowser && !!
      /** @type {?} */
      window.matchMedia('all').addListener;
      return canListen ?
      /** @type {?} */
      window.matchMedia(query) :
      /** @type {?} */
      {
        matches: query === 'all' || query === '',
        media: query,
        addListener: function addListener() {},
        removeListener: function removeListener() {}
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * MockMatchMedia mocks calls to the Window API matchMedia with a build of a simulated
     * MockMediaQueryListener. Methods are available to simulate an activation of a mediaQuery
     * range and to clearAll mediaQuery listeners.
     */


    var MockMatchMedia =
    /*#__PURE__*/
    function (_MatchMedia) {
      _inherits(MockMatchMedia, _MatchMedia);

      /**
       * @param {?} _zone
       * @param {?} _platformId
       * @param {?} _document
       * @param {?} _breakpoints
       */
      function MockMatchMedia(_zone, _platformId, _document, _breakpoints) {
        var _this5;

        _classCallCheck(this, MockMatchMedia);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(MockMatchMedia).call(this, _zone, _platformId, _document));
        _this5._breakpoints = _breakpoints;
        _this5.autoRegisterQueries = true; // Used for testing BreakPoint registrations

        _this5.useOverlaps = false;
        return _this5;
      }
      /**
       * Easy method to clear all listeners for all mediaQueries
       * @return {?}
       */


      _createClass(MockMatchMedia, [{
        key: "clearAll",
        value: function clearAll() {
          this.registry.forEach(function (mql) {
            /** @type {?} */
            mql.destroy();
          });
          this.registry.clear();
          this.useOverlaps = false;
        }
        /**
         * Feature to support manual, simulated activation of a mediaQuery.
         * @param {?} mediaQuery
         * @param {?=} useOverlaps
         * @return {?}
         */

      }, {
        key: "activate",
        value: function activate(mediaQuery) {
          var useOverlaps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          useOverlaps = useOverlaps || this.useOverlaps;
          mediaQuery = this._validateQuery(mediaQuery);

          if (useOverlaps || !this.isActive(mediaQuery)) {
            this._deactivateAll();

            this._registerMediaQuery(mediaQuery);

            this._activateWithOverlaps(mediaQuery, useOverlaps);
          }

          return this.hasActivated;
        }
        /**
         * Converts an optional mediaQuery alias to a specific, valid mediaQuery
         * @param {?} queryOrAlias
         * @return {?}
         */

      }, {
        key: "_validateQuery",
        value: function _validateQuery(queryOrAlias) {
          /** @type {?} */
          var bp = this._breakpoints.findByAlias(queryOrAlias);

          return bp && bp.mediaQuery || queryOrAlias;
        }
        /**
         * Manually onMediaChange any overlapping mediaQueries to simulate
         * similar functionality in the window.matchMedia()
         * @param {?} mediaQuery
         * @param {?} useOverlaps
         * @return {?}
         */

      }, {
        key: "_activateWithOverlaps",
        value: function _activateWithOverlaps(mediaQuery, useOverlaps) {
          if (useOverlaps) {
            /** @type {?} */
            var bp = this._breakpoints.findByQuery(mediaQuery);
            /** @type {?} */


            var alias = bp ? bp.alias : 'unknown'; // Simulate activation of overlapping lt-<XXX> ranges

            switch (alias) {
              case 'lg':
                this._activateByAlias('lt-xl');

                break;

              case 'md':
                this._activateByAlias('lt-xl, lt-lg');

                break;

              case 'sm':
                this._activateByAlias('lt-xl, lt-lg, lt-md');

                break;

              case 'xs':
                this._activateByAlias('lt-xl, lt-lg, lt-md, lt-sm');

                break;
            } // Simulate activation of overlapping gt-<xxxx> mediaQuery ranges


            switch (alias) {
              case 'xl':
                this._activateByAlias('gt-lg, gt-md, gt-sm, gt-xs');

                break;

              case 'lg':
                this._activateByAlias('gt-md, gt-sm, gt-xs');

                break;

              case 'md':
                this._activateByAlias('gt-sm, gt-xs');

                break;

              case 'sm':
                this._activateByAlias('gt-xs');

                break;
            }
          } // Activate last since the responsiveActivation is watching *this* mediaQuery


          return this._activateByQuery(mediaQuery);
        }
        /**
         *
         * @param {?} aliases
         * @return {?}
         */

      }, {
        key: "_activateByAlias",
        value: function _activateByAlias(aliases) {
          var _this6 = this;

          /** @type {?} */
          var activate = function activate(alias) {
            /** @type {?} */
            var bp = _this6._breakpoints.findByAlias(alias);

            _this6._activateByQuery(bp ? bp.mediaQuery : alias);
          };

          aliases.split(',').forEach(function (alias) {
            return activate(alias.trim());
          });
        }
        /**
         *
         * @param {?} mediaQuery
         * @return {?}
         */

      }, {
        key: "_activateByQuery",
        value: function _activateByQuery(mediaQuery) {
          /** @type {?} */
          var mql =
          /** @type {?} */
          this.registry.get(mediaQuery);

          if (mql && !this.isActive(mediaQuery)) {
            this.registry.set(mediaQuery, mql.activate());
          }

          return this.hasActivated;
        }
        /**
         * Deactivate all current MQLs and reset the buffer
         * @return {?}
         */

      }, {
        key: "_deactivateAll",
        value: function _deactivateAll() {
          this.registry.forEach(function (it) {
            /** @type {?} */
            it.deactivate();
          });
          return this;
        }
        /**
         * Insure the mediaQuery is registered with MatchMedia
         * @param {?} mediaQuery
         * @return {?}
         */

      }, {
        key: "_registerMediaQuery",
        value: function _registerMediaQuery(mediaQuery) {
          if (!this.registry.has(mediaQuery) && this.autoRegisterQueries) {
            this.registerQuery(mediaQuery);
          }
        }
        /**
         * Call window.matchMedia() to build a MediaQueryList; which
         * supports 0..n listeners for activation/deactivation
         * @param {?} query
         * @return {?}
         */

      }, {
        key: "buildMQL",
        value: function buildMQL(query) {
          return new MockMediaQueryList(query);
        }
        /**
         * @return {?}
         */

      }, {
        key: "hasActivated",
        get: function get() {
          return this.activations.length > 0;
        }
      }]);

      return MockMatchMedia;
    }(MatchMedia);

    MockMatchMedia.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    MockMatchMedia.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }, {
        type: BreakPointRegistry
      }];
    };
    /**
     * Special internal class to simulate a MediaQueryList and
     * - supports manual activation to simulate mediaQuery matching
     * - manages listeners
     */


    var MockMediaQueryList =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _mediaQuery
       */
      function MockMediaQueryList(_mediaQuery) {
        _classCallCheck(this, MockMediaQueryList);

        this._mediaQuery = _mediaQuery;
        this._isActive = false;
        this._listeners = [];
        this.onchange = null;
      }
      /**
       * @return {?}
       */


      _createClass(MockMediaQueryList, [{
        key: "destroy",

        /**
         * Destroy the current list by deactivating the
         * listeners and clearing the internal list
         * @return {?}
         */
        value: function destroy() {
          this.deactivate();
          this._listeners = [];
        }
        /**
         * Notify all listeners that 'matches === TRUE'
         * @return {?}
         */

      }, {
        key: "activate",
        value: function activate() {
          var _this7 = this;

          if (!this._isActive) {
            this._isActive = true;

            this._listeners.forEach(function (callback) {
              /** @type {?} */
              var cb =
              /** @type {?} */
              callback;
              cb.call(null, _this7);
            });
          }

          return this;
        }
        /**
         * Notify all listeners that 'matches === false'
         * @return {?}
         */

      }, {
        key: "deactivate",
        value: function deactivate() {
          var _this8 = this;

          if (this._isActive) {
            this._isActive = false;

            this._listeners.forEach(function (callback) {
              /** @type {?} */
              var cb =
              /** @type {?} */
              callback;
              cb.call(null, _this8);
            });
          }

          return this;
        }
        /**
         * Add a listener to our internal list to activate later
         * @param {?} listener
         * @return {?}
         */

      }, {
        key: "addListener",
        value: function addListener(listener) {
          if (this._listeners.indexOf(listener) === -1) {
            this._listeners.push(listener);
          }

          if (this._isActive) {
            /** @type {?} */
            var cb =
            /** @type {?} */
            listener;
            cb.call(null, this);
          }
        }
        /**
         * Don't need to remove listeners in the testing environment
         * @param {?} _
         * @return {?}
         */

      }, {
        key: "removeListener",
        value: function removeListener(_) {}
        /**
         * @param {?} _
         * @param {?} __
         * @param {?=} ___
         * @return {?}
         */

      }, {
        key: "addEventListener",
        value: function addEventListener(_, __, ___) {}
        /**
         * @param {?} _
         * @param {?} __
         * @param {?=} ___
         * @return {?}
         */

      }, {
        key: "removeEventListener",
        value: function removeEventListener(_, __, ___) {}
        /**
         * @param {?} _
         * @return {?}
         */

      }, {
        key: "dispatchEvent",
        value: function dispatchEvent(_) {
          return false;
        }
      }, {
        key: "matches",
        get: function get() {
          return this._isActive;
        }
        /**
         * @return {?}
         */

      }, {
        key: "media",
        get: function get() {
          return this._mediaQuery;
        }
      }]);

      return MockMediaQueryList;
    }();
    /** *
     * Pre-configured provider for MockMatchMedia
      @type {?} */


    var MockMatchMediaProvider = {
      // tslint:disable-line:variable-name
      provide: MatchMedia,
      useClass: MockMatchMedia
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** @type {?} */

    var PRINT = 'print';
    /** @type {?} */

    var BREAKPOINT_PRINT = {
      alias: PRINT,
      mediaQuery: PRINT,
      priority: 1000
    };
    /**
     * PrintHook - Use to intercept print MediaQuery activations and force
     *             layouts to render with the specified print alias/breakpoint
     *
     * Used in MediaMarshaller and MediaObserver
     */

    var PrintHook =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} breakpoints
       * @param {?} layoutConfig
       */
      function PrintHook(breakpoints, layoutConfig) {
        _classCallCheck(this, PrintHook);

        this.breakpoints = breakpoints;
        this.layoutConfig = layoutConfig;
        /**
         * Is this service currently in Print-mode ?
         */

        this.isPrinting = false;
        this.queue = new PrintQueue();
        this.deactivations = [];
      }
      /**
       * Add 'print' mediaQuery: to listen for matchMedia activations
       * @param {?} queries
       * @return {?}
       */


      _createClass(PrintHook, [{
        key: "withPrintQuery",
        value: function withPrintQuery(queries) {
          return [].concat(_toConsumableArray(queries), [PRINT]);
        }
        /**
         * Is the MediaChange event for any 'print' \@media
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "isPrintEvent",
        value: function isPrintEvent(e) {
          return e.mediaQuery.startsWith(PRINT);
        }
        /**
         * What is the desired mqAlias to use while printing?
         * @return {?}
         */

      }, {
        key: "getEventBreakpoints",

        /**
         * Lookup breakpoint associated with mediaQuery
         * @param {?} __0
         * @return {?}
         */
        value: function getEventBreakpoints(_ref) {
          var mediaQuery = _ref.mediaQuery;

          /** @type {?} */
          var bp = this.breakpoints.findByQuery(mediaQuery);
          /** @type {?} */

          var list = bp ? [].concat(_toConsumableArray(this.printBreakPoints), [bp]) : this.printBreakPoints;
          return list.sort(sortDescendingPriority);
        }
        /**
         * Update event with printAlias mediaQuery information
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "updateEvent",
        value: function updateEvent(event) {
          /** @type {?} */
          var bp = this.breakpoints.findByQuery(event.mediaQuery);

          if (this.isPrintEvent(event)) {
            // Reset from 'print' to first (highest priority) print breakpoint
            bp = this.getEventBreakpoints(event)[0];
            event.mediaQuery = bp ? bp.mediaQuery : '';
          }

          return mergeAlias(event, bp);
        }
        /**
         * Prepare RxJs filter operator with partial application
         * @param {?} target
         * @return {?} pipeable filter predicate
         */

      }, {
        key: "interceptEvents",
        value: function interceptEvents(target) {
          var _this9 = this;

          return function (event) {
            if (_this9.isPrintEvent(event)) {
              if (event.matches && !_this9.isPrinting) {
                _this9.startPrinting(target, _this9.getEventBreakpoints(event));

                target.updateStyles();
              } else if (!event.matches && _this9.isPrinting) {
                _this9.stopPrinting(target);

                target.updateStyles();
              }
            } else {
              _this9.collectActivations(event);
            }
          };
        }
        /**
         * Stop mediaChange event propagation in event streams
         * @return {?}
         */

      }, {
        key: "blockPropagation",
        value: function blockPropagation() {
          var _this10 = this;

          return function (event) {
            return !(_this10.isPrinting || _this10.isPrintEvent(event));
          };
        }
        /**
         * Save current activateBreakpoints (for later restore)
         * and substitute only the printAlias breakpoint
         * @param {?} target
         * @param {?} bpList
         * @return {?}
         */

      }, {
        key: "startPrinting",
        value: function startPrinting(target, bpList) {
          this.isPrinting = true;
          target.activatedBreakpoints = this.queue.addPrintBreakpoints(bpList);
        }
        /**
         * For any print de-activations, reset the entire print queue
         * @param {?} target
         * @return {?}
         */

      }, {
        key: "stopPrinting",
        value: function stopPrinting(target) {
          target.activatedBreakpoints = this.deactivations;
          this.deactivations = [];
          this.queue.clear();
          this.isPrinting = false;
        }
        /**
         * To restore pre-Print Activations, we must capture the proper
         * list of breakpoint activations BEFORE print starts. OnBeforePrint()
         * is not supported; so 'print' mediaQuery activations must be used.
         *
         * >  But activated breakpoints are deactivated BEFORE 'print' activation.
         *
         * Let's capture all de-activations using the following logic:
         *
         *  When not printing:
         *    - clear cache when activating non-print breakpoint
         *    - update cache (and sort) when deactivating
         *
         *  When printing:
         *    - sort and save when starting print
         *    - restore as activatedTargets and clear when stop printing
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "collectActivations",
        value: function collectActivations(event) {
          if (!this.isPrinting) {
            if (!event.matches) {
              /** @type {?} */
              var bp = this.breakpoints.findByQuery(event.mediaQuery);

              if (bp) {
                // Deactivating a breakpoint
                // Deactivating a breakpoint
                this.deactivations.push(bp);
                this.deactivations.sort(sortDescendingPriority);
              }
            } else {
              this.deactivations = [];
            }
          }
        }
      }, {
        key: "printAlias",
        get: function get() {
          return this.layoutConfig.printWithBreakpoints || [];
        }
        /**
         * Lookup breakpoints associated with print aliases.
         * @return {?}
         */

      }, {
        key: "printBreakPoints",
        get: function get() {
          var _this11 = this;

          return (
            /** @type {?} */
            this.printAlias.map(function (alias) {
              return _this11.breakpoints.findByAlias(alias);
            }).filter(function (bp) {
              return bp !== null;
            })
          );
        }
      }]);

      return PrintHook;
    }();

    PrintHook.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    PrintHook.ctorParameters = function () {
      return [{
        type: BreakPointRegistry
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [LAYOUT_CONFIG]
        }]
      }];
    };
    /** @nocollapse */


    PrintHook.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function PrintHook_Factory() {
        return new PrintHook(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(LAYOUT_CONFIG));
      },
      token: PrintHook,
      providedIn: "root"
    });
    /**
     * Utility class to manage print breakpoints + activatedBreakpoints
     * with correct sorting WHILE printing
     */

    var PrintQueue =
    /*#__PURE__*/
    function () {
      function PrintQueue() {
        _classCallCheck(this, PrintQueue);

        /**
         * Sorted queue with prioritized print breakpoints
         */
        this.printBreakpoints = [];
      }
      /**
       * @param {?} bpList
       * @return {?}
       */


      _createClass(PrintQueue, [{
        key: "addPrintBreakpoints",
        value: function addPrintBreakpoints(bpList) {
          var _this12 = this;

          bpList.push(BREAKPOINT_PRINT);
          bpList.sort(sortDescendingPriority);
          bpList.forEach(function (bp) {
            return _this12.addBreakpoint(bp);
          });
          return this.printBreakpoints;
        }
        /**
         * Add Print breakpoint to queue
         * @param {?} bp
         * @return {?}
         */

      }, {
        key: "addBreakpoint",
        value: function addBreakpoint(bp) {
          if (!!bp) {
            /** @type {?} */
            var bpInList = this.printBreakpoints.find(function (it) {
              return it.mediaQuery === bp.mediaQuery;
            });

            if (bpInList === undefined) {
              // If this is a `printAlias` breakpoint, then append. If a true 'print' breakpoint,
              // register as highest priority in the queue
              this.printBreakpoints = isPrintBreakPoint(bp) ? [bp].concat(_toConsumableArray(this.printBreakpoints)) : [].concat(_toConsumableArray(this.printBreakpoints), [bp]);
            }
          }
        }
        /**
         * Restore original activated breakpoints and clear internal caches
         * @return {?}
         */

      }, {
        key: "clear",
        value: function clear() {
          this.printBreakpoints = [];
        }
      }]);

      return PrintQueue;
    }();
    /**
     * Only support intercept queueing if the Breakpoint is a print \@media query
     * @param {?} bp
     * @return {?}
     */


    function isPrintBreakPoint(bp) {
      return bp ? bp.mediaQuery.startsWith(PRINT) : false;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * MediaObserver enables applications to listen for 1..n mediaQuery activations and to determine
     * if a mediaQuery is currently activated.
     *
     * Since a breakpoint change will first deactivate 1...n mediaQueries and then possibly activate
     * 1..n mediaQueries, the MediaObserver will debounce notifications and report ALL *activations*
     * in 1 event notification. The reported activations will be sorted in descending priority order.
     *
     * This class uses the BreakPoint Registry to inject alias information into the raw MediaChange
     * notification. For custom mediaQuery notifications, alias information will not be injected and
     * those fields will be ''.
     *
     * Note: Developers should note that only mediaChange activations (not de-activations)
     *       are announced by the MediaObserver.
     *
     * \@usage
     *
     *  // RxJS
     *  import { filter } from 'rxjs/operators';
     *  import { MediaObserver } from '\@angular/flex-layout';
     *
     * \@Component({ ... })
     *  export class AppComponent {
     *    status: string = '';
     *
     *    constructor(mediaObserver: MediaObserver) {
     *      const media$ = mediaObserver.asObservable().pipe(
     *        filter((changes: MediaChange[]) => true)   // silly noop filter
     *      );
     *
     *      media$.subscribe((changes: MediaChange[]) => {
     *        let status = '';
     *        changes.forEach( change => {
     *          status += `'${change.mqAlias}' = (${change.mediaQuery}) <br/>` ;
     *        });
     *        this.status = status;
     *     });
     *
     *    }
     *  }
     */


    var MediaObserver =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} breakpoints
       * @param {?} matchMedia
       * @param {?} hook
       */
      function MediaObserver(breakpoints, matchMedia, hook) {
        _classCallCheck(this, MediaObserver);

        this.breakpoints = breakpoints;
        this.matchMedia = matchMedia;
        this.hook = hook;
        /**
         * Filter MediaChange notifications for overlapping breakpoints
         */

        this.filterOverlaps = false;
        this._media$ = this.watchActivations();
        this.media$ = this._media$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (changes) {
          return changes.length > 0;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
          return changes[0];
        }));
      }
      /**
       * Observe changes to current activation 'list'
       * @return {?}
       */


      _createClass(MediaObserver, [{
        key: "asObservable",
        value: function asObservable() {
          return this._media$;
        }
        /**
         * Allow programmatic query to determine if specified query/alias is active.
         * @param {?} alias
         * @return {?}
         */

      }, {
        key: "isActive",
        value: function isActive(alias) {
          /** @type {?} */
          var query = toMediaQuery(alias, this.breakpoints);
          return this.matchMedia.isActive(query);
        }
        /**
         * Register all the mediaQueries registered in the BreakPointRegistry
         * This is needed so subscribers can be auto-notified of all standard, registered
         * mediaQuery activations
         * @return {?}
         */

      }, {
        key: "watchActivations",
        value: function watchActivations() {
          /** @type {?} */
          var queries = this.breakpoints.items.map(function (bp) {
            return bp.mediaQuery;
          });
          return this.buildObservable(queries);
        }
        /**
         * Only pass/announce activations (not de-activations)
         *
         * Since multiple-mediaQueries can be activation in a cycle,
         * gather all current activations into a single list of changes to observers
         *
         * Inject associated (if any) alias information into the MediaChange event
         * - Exclude mediaQuery activations for overlapping mQs. List bounded mQ ranges only
         * - Exclude print activations that do not have an associated mediaQuery
         *
         * NOTE: the raw MediaChange events [from MatchMedia] do not
         *       contain important alias information; as such this info
         *       must be injected into the MediaChange
         * @param {?} mqList
         * @return {?}
         */

      }, {
        key: "buildObservable",
        value: function buildObservable(mqList) {
          var _this13 = this;

          /** @type {?} */
          var hasChanges = function hasChanges(changes) {
            /** @type {?} */
            var isValidQuery = function isValidQuery(change) {
              return change.mediaQuery.length > 0;
            };

            return changes.filter(isValidQuery).length > 0;
          };
          /** @type {?} */


          var excludeOverlaps = function excludeOverlaps(changes) {
            return !_this13.filterOverlaps ? changes : changes.filter(function (change) {
              /** @type {?} */
              var bp = _this13.breakpoints.findByQuery(change.mediaQuery);

              return !bp ? true : !bp.overlapping;
            });
          };
          /**
               */


          return this.matchMedia.observe(this.hook.withPrintQuery(mqList)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (change) {
            return change.matches;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(10), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_this13.findAllActivations());
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(excludeOverlaps), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(hasChanges));
        }
        /**
         * Find all current activations and prepare single list of activations
         * sorted by descending priority.
         * @return {?}
         */

      }, {
        key: "findAllActivations",
        value: function findAllActivations() {
          var _this14 = this;

          /** @type {?} */
          var mergeMQAlias = function mergeMQAlias(change) {
            /** @type {?} */
            var bp = _this14.breakpoints.findByQuery(change.mediaQuery);

            return mergeAlias(change, bp);
          };
          /** @type {?} */


          var replaceWithPrintAlias = function replaceWithPrintAlias(change) {
            return _this14.hook.isPrintEvent(change) ? _this14.hook.updateEvent(change) : change;
          };

          return this.matchMedia.activations.map(function (query) {
            return new MediaChange(true, query);
          }).map(replaceWithPrintAlias).map(mergeMQAlias).sort(sortDescendingPriority);
        }
      }]);

      return MediaObserver;
    }();

    MediaObserver.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    MediaObserver.ctorParameters = function () {
      return [{
        type: BreakPointRegistry
      }, {
        type: MatchMedia
      }, {
        type: PrintHook
      }];
    };
    /** @nocollapse */


    MediaObserver.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function MediaObserver_Factory() {
        return new MediaObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(MatchMedia), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(PrintHook));
      },
      token: MediaObserver,
      providedIn: "root"
    });
    /**
     * Find associated breakpoint (if any)
     * @param {?} query
     * @param {?} locator
     * @return {?}
     */

    function toMediaQuery(query, locator) {
      /** @type {?} */
      var bp = locator.findByAlias(query) || locator.findByQuery(query);
      return bp ? bp.mediaQuery : query;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * Class
     */


    var MediaTrigger =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} breakpoints
       * @param {?} matchMedia
       * @param {?} layoutConfig
       * @param {?} _platformId
       * @param {?} _document
       */
      function MediaTrigger(breakpoints, matchMedia, layoutConfig, _platformId, _document) {
        _classCallCheck(this, MediaTrigger);

        this.breakpoints = breakpoints;
        this.matchMedia = matchMedia;
        this.layoutConfig = layoutConfig;
        this._platformId = _platformId;
        this._document = _document;
        this.hasCachedRegistryMatches = false;
        this.originalActivations = [];
        this.originalRegistry = new Map();
      }
      /**
       * Manually activate range of breakpoints
       * @param {?} list array of mediaQuery or alias strings
       * @return {?}
       */


      _createClass(MediaTrigger, [{
        key: "activate",
        value: function activate(list) {
          list = list.map(function (it) {
            return it.trim();
          }); // trim queries

          this.saveActivations();
          this.deactivateAll();
          this.setActivations(list);
          this.prepareAutoRestore();
        }
        /**
         * Restore original, 'real' breakpoints and emit events
         * to trigger stream notification
         * @return {?}
         */

      }, {
        key: "restore",
        value: function restore() {
          if (this.hasCachedRegistryMatches) {
            /** @type {?} */
            var extractQuery = function extractQuery(change) {
              return change.mediaQuery;
            };
            /** @type {?} */


            var list = this.originalActivations.map(extractQuery);

            try {
              this.deactivateAll();
              this.restoreRegistryMatches();
              this.setActivations(list);
            } finally {
              this.originalActivations = [];

              if (this.resizeSubscription) {
                this.resizeSubscription.unsubscribe();
              }
            }
          }
        }
        /**
         * Whenever window resizes, immediately auto-restore original
         * activations (if we are simulating activations)
         * @return {?}
         */

      }, {
        key: "prepareAutoRestore",
        value: function prepareAutoRestore() {
          /** @type {?} */
          var isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) && this._document;
          /** @type {?} */


          var enableAutoRestore = isBrowser && this.layoutConfig.mediaTriggerAutoRestore;

          if (enableAutoRestore) {
            /** @type {?} */
            var resize$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
            this.resizeSubscription = resize$.subscribe(this.restore.bind(this));
          }
        }
        /**
         * Notify all matchMedia subscribers of de-activations
         *
         * Note: we must force 'matches' updates for
         *       future matchMedia::activation lookups
         * @return {?}
         */

      }, {
        key: "deactivateAll",
        value: function deactivateAll() {
          /** @type {?} */
          var list = this.currentActivations;
          this.forceRegistryMatches(list, false);
          this.simulateMediaChanges(list, false);
        }
        /**
         * Cache current activations as sorted, prioritized list of MediaChanges
         * @return {?}
         */

      }, {
        key: "saveActivations",
        value: function saveActivations() {
          var _this15 = this;

          if (!this.hasCachedRegistryMatches) {
            /** @type {?} */
            var toMediaChange = function toMediaChange(query) {
              return new MediaChange(true, query);
            };
            /** @type {?} */


            var mergeMQAlias = function mergeMQAlias(change) {
              /** @type {?} */
              var bp = _this15.breakpoints.findByQuery(change.mediaQuery);

              return mergeAlias(change, bp);
            };

            this.originalActivations = this.currentActivations.map(toMediaChange).map(mergeMQAlias).sort(sortDescendingPriority);
            this.cacheRegistryMatches();
          }
        }
        /**
         * Force set manual activations for specified mediaQuery list
         * @param {?} list
         * @return {?}
         */

      }, {
        key: "setActivations",
        value: function setActivations(list) {
          if (!!this.originalRegistry) {
            this.forceRegistryMatches(list, true);
          }

          this.simulateMediaChanges(list);
        }
        /**
         * For specified mediaQuery list manually simulate activations or deactivations
         * @param {?} queries
         * @param {?=} matches
         * @return {?}
         */

      }, {
        key: "simulateMediaChanges",
        value: function simulateMediaChanges(queries) {
          var _this16 = this;

          var matches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          /** @type {?} */
          var toMediaQuery = function toMediaQuery(query) {
            /** @type {?} */
            var locator = _this16.breakpoints;
            /** @type {?} */

            var bp = locator.findByAlias(query) || locator.findByQuery(query);
            return bp ? bp.mediaQuery : query;
          };
          /** @type {?} */


          var emitChangeEvent = function emitChangeEvent(query) {
            return _this16.emitChangeEvent(matches, query);
          };

          queries.map(toMediaQuery).forEach(emitChangeEvent);
        }
        /**
         * Replace current registry with simulated registry...
         * Note: this is required since MediaQueryList::matches is 'readOnly'
         * @param {?} queries
         * @param {?} matches
         * @return {?}
         */

      }, {
        key: "forceRegistryMatches",
        value: function forceRegistryMatches(queries, matches) {
          /** @type {?} */
          var registry = new Map();
          queries.forEach(function (query) {
            registry.set(query,
            /** @type {?} */
            {
              matches: matches
            });
          });
          this.matchMedia.registry = registry;
        }
        /**
         * Save current MatchMedia::registry items.
         * @return {?}
         */

      }, {
        key: "cacheRegistryMatches",
        value: function cacheRegistryMatches() {
          /** @type {?} */
          var target = this.originalRegistry;
          target.clear();
          this.matchMedia.registry.forEach(function (value, key) {
            target.set(key, value);
          });
          this.hasCachedRegistryMatches = true;
        }
        /**
         * Restore original, 'true' registry
         * @return {?}
         */

      }, {
        key: "restoreRegistryMatches",
        value: function restoreRegistryMatches() {
          /** @type {?} */
          var target = this.matchMedia.registry;
          target.clear();
          this.originalRegistry.forEach(function (value, key) {
            target.set(key, value);
          });
          this.originalRegistry.clear();
          this.hasCachedRegistryMatches = false;
        }
        /**
         * Manually emit a MediaChange event via the MatchMedia to MediaMarshaller and MediaObserver
         * @param {?} matches
         * @param {?} query
         * @return {?}
         */

      }, {
        key: "emitChangeEvent",
        value: function emitChangeEvent(matches, query) {
          this.matchMedia.source.next(new MediaChange(matches, query));
        }
        /**
         * @return {?}
         */

      }, {
        key: "currentActivations",
        get: function get() {
          return this.matchMedia.activations;
        }
      }]);

      return MediaTrigger;
    }();

    MediaTrigger.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    MediaTrigger.ctorParameters = function () {
      return [{
        type: BreakPointRegistry
      }, {
        type: MatchMedia
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [LAYOUT_CONFIG]
        }]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    MediaTrigger.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function MediaTrigger_Factory() {
        return new MediaTrigger(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(MatchMedia), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(LAYOUT_CONFIG), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      },
      token: MediaTrigger,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * Applies CSS prefixes to appropriate style keys.
     *
     * Note: `-ms-`, `-moz` and `-webkit-box` are no longer supported. e.g.
     *    {
     *      display: -webkit-flex;     NEW - Safari 6.1+. iOS 7.1+, BB10
     *      display: flex;             NEW, Spec - Firefox, Chrome, Opera
     *      // display: -webkit-box;   OLD - iOS 6-, Safari 3.1-6, BB7
     *      // display: -ms-flexbox;   TWEENER - IE 10
     *      // display: -moz-flexbox;  OLD - Firefox
     *    }
     * @param {?} target
     * @return {?}
     */

    function applyCssPrefixes(target) {
      for (var key in target) {
        /** @type {?} */
        var value = target[key] || '';

        switch (key) {
          case 'display':
            if (value === 'flex') {
              target['display'] = ['-webkit-flex', 'flex'];
            } else if (value === 'inline-flex') {
              target['display'] = ['-webkit-inline-flex', 'inline-flex'];
            } else {
              target['display'] = value;
            }

            break;

          case 'align-items':
          case 'align-self':
          case 'align-content':
          case 'flex':
          case 'flex-basis':
          case 'flex-flow':
          case 'flex-grow':
          case 'flex-shrink':
          case 'flex-wrap':
          case 'justify-content':
            target['-webkit-' + key] = value;
            break;

          case 'flex-direction':
            value = value || 'row';
            target['-webkit-flex-direction'] = value;
            target['flex-direction'] = value;
            break;

          case 'order':
            target['order'] = target['-webkit-' + key] = isNaN(+value) ? '0' : value;
            break;
        }
      }

      return target;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */


    var StyleUtils =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _serverStylesheet
       * @param {?} _serverModuleLoaded
       * @param {?} _platformId
       * @param {?} layoutConfig
       */
      function StyleUtils(_serverStylesheet, _serverModuleLoaded, _platformId, layoutConfig) {
        _classCallCheck(this, StyleUtils);

        this._serverStylesheet = _serverStylesheet;
        this._serverModuleLoaded = _serverModuleLoaded;
        this._platformId = _platformId;
        this.layoutConfig = layoutConfig;
      }
      /**
       * Applies styles given via string pair or object map to the directive element
       * @param {?} element
       * @param {?} style
       * @param {?=} value
       * @return {?}
       */


      _createClass(StyleUtils, [{
        key: "applyStyleToElement",
        value: function applyStyleToElement(element, style) {
          var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

          /** @type {?} */
          var styles = {};

          if (typeof style === 'string') {
            styles[style] = value;
            style = styles;
          }

          styles = this.layoutConfig.disableVendorPrefixes ? style : applyCssPrefixes(style);

          this._applyMultiValueStyleToElement(styles, element);
        }
        /**
         * Applies styles given via string pair or object map to the directive's element
         * @param {?} style
         * @param {?=} elements
         * @return {?}
         */

      }, {
        key: "applyStyleToElements",
        value: function applyStyleToElements(style) {
          var _this17 = this;

          var elements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

          /** @type {?} */
          var styles = this.layoutConfig.disableVendorPrefixes ? style : applyCssPrefixes(style);
          elements.forEach(function (el) {
            _this17._applyMultiValueStyleToElement(styles, el);
          });
        }
        /**
         * Determine the DOM element's Flexbox flow (flex-direction)
         *
         * Check inline style first then check computed (stylesheet) style
         * @param {?} target
         * @return {?}
         */

      }, {
        key: "getFlowDirection",
        value: function getFlowDirection(target) {
          /** @type {?} */
          var query = 'flex-direction';
          /** @type {?} */

          var value = this.lookupStyle(target, query);
          /** @type {?} */

          var hasInlineValue = this.lookupInlineStyle(target, query) || Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this._platformId) && this._serverModuleLoaded ? value : '';
          return [value || 'row', hasInlineValue];
        }
        /**
         * Find the DOM element's raw attribute value (if any)
         * @param {?} element
         * @param {?} attribute
         * @return {?}
         */

      }, {
        key: "lookupAttributeValue",
        value: function lookupAttributeValue(element, attribute) {
          return element.getAttribute(attribute) || '';
        }
        /**
         * Find the DOM element's inline style value (if any)
         * @param {?} element
         * @param {?} styleName
         * @return {?}
         */

      }, {
        key: "lookupInlineStyle",
        value: function lookupInlineStyle(element, styleName) {
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) ? element.style.getPropertyValue(styleName) : this._getServerStyle(element, styleName);
        }
        /**
         * Determine the inline or inherited CSS style
         * NOTE: platform-server has no implementation for getComputedStyle
         * @param {?} element
         * @param {?} styleName
         * @param {?=} inlineOnly
         * @return {?}
         */

      }, {
        key: "lookupStyle",
        value: function lookupStyle(element, styleName) {
          var inlineOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          /** @type {?} */
          var value = '';

          if (element) {
            /** @type {?} */
            var immediateValue = value = this.lookupInlineStyle(element, styleName);

            if (!immediateValue) {
              if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId)) {
                if (!inlineOnly) {
                  value = getComputedStyle(element).getPropertyValue(styleName);
                }
              } else {
                if (this._serverModuleLoaded) {
                  value = this._serverStylesheet.getStyleForElement(element, styleName);
                }
              }
            }
          } // Note: 'inline' is the default of all elements, unless UA stylesheet overrides;
          //       in which case getComputedStyle() should determine a valid value.


          return value.trim();
        }
        /**
         * Applies the styles to the element. The styles object map may contain an array of values
         * Each value will be added as element style
         * Keys are sorted to add prefixed styles (like -webkit-x) first, before the standard ones
         * @param {?} styles
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_applyMultiValueStyleToElement",
        value: function _applyMultiValueStyleToElement(styles, element) {
          var _this18 = this;

          Object.keys(styles).sort().forEach(function (key) {
            /** @type {?} */
            var el = styles[key];
            /** @type {?} */

            var values = Array.isArray(el) ? el : [el];
            values.sort();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var value = _step.value;
                value = value ? value + '' : '';

                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(_this18._platformId) || !_this18._serverModuleLoaded) {
                  Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(_this18._platformId) ? element.style.setProperty(key, value) : _this18._setServerStyle(element, key, value);
                } else {
                  _this18._serverStylesheet.addStyleToElement(element, key, value);
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
          });
        }
        /**
         * @param {?} element
         * @param {?} styleName
         * @param {?=} styleValue
         * @return {?}
         */

      }, {
        key: "_setServerStyle",
        value: function _setServerStyle(element, styleName, styleValue) {
          styleName = styleName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
          /** @type {?} */

          var styleMap = this._readStyleAttribute(element);

          styleMap[styleName] = styleValue || '';

          this._writeStyleAttribute(element, styleMap);
        }
        /**
         * @param {?} element
         * @param {?} styleName
         * @return {?}
         */

      }, {
        key: "_getServerStyle",
        value: function _getServerStyle(element, styleName) {
          /** @type {?} */
          var styleMap = this._readStyleAttribute(element);

          return styleMap[styleName] || '';
        }
        /**
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_readStyleAttribute",
        value: function _readStyleAttribute(element) {
          /** @type {?} */
          var styleMap = {};
          /** @type {?} */

          var styleAttribute = element.getAttribute('style');

          if (styleAttribute) {
            /** @type {?} */
            var styleList = styleAttribute.split(/;+/g);

            for (var i = 0; i < styleList.length; i++) {
              /** @type {?} */
              var style = styleList[i].trim();

              if (style.length > 0) {
                /** @type {?} */
                var colonIndex = style.indexOf(':');

                if (colonIndex === -1) {
                  throw new Error("Invalid CSS style: ".concat(style));
                }
                /** @type {?} */


                var name = style.substr(0, colonIndex).trim();
                styleMap[name] = style.substr(colonIndex + 1).trim();
              }
            }
          }

          return styleMap;
        }
        /**
         * @param {?} element
         * @param {?} styleMap
         * @return {?}
         */

      }, {
        key: "_writeStyleAttribute",
        value: function _writeStyleAttribute(element, styleMap) {
          /** @type {?} */
          var styleAttrValue = '';

          for (var key in styleMap) {
            /** @type {?} */
            var newValue = styleMap[key];

            if (newValue) {
              styleAttrValue += key + ':' + styleMap[key] + ';';
            }
          }

          element.setAttribute('style', styleAttrValue);
        }
      }]);

      return StyleUtils;
    }();

    StyleUtils.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    StyleUtils.ctorParameters = function () {
      return [{
        type: StylesheetMap,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: Boolean,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [SERVER_TOKEN]
        }]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [LAYOUT_CONFIG]
        }]
      }];
    };
    /** @nocollapse */


    StyleUtils.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function StyleUtils_Factory() {
        return new StyleUtils(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(StylesheetMap, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVER_TOKEN, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(LAYOUT_CONFIG));
      },
      token: StyleUtils,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * A class that encapsulates CSS style generation for common directives
     * @abstract
     */

    var StyleBuilder =
    /*#__PURE__*/
    function () {
      function StyleBuilder() {
        _classCallCheck(this, StyleBuilder);

        /**
         * Whether to cache the generated output styles
         */
        this.shouldCache = true;
      }
      /**
       * Run a side effect computation given the input string and the computed styles
       * from the build task and the host configuration object
       * NOTE: This should be a no-op unless an algorithm is provided in a subclass
       * @param {?} _input
       * @param {?} _styles
       * @param {?=} _parent
       * @return {?}
       */


      _createClass(StyleBuilder, [{
        key: "sideEffect",
        value: function sideEffect(_input, _styles, _parent) {}
      }]);

      return StyleBuilder;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * The flex API permits 3 or 1 parts of the value:
     *    - `flex-grow flex-shrink flex-basis`, or
     *    - `flex-basis`
     * @param {?} basis
     * @param {?=} grow
     * @param {?=} shrink
     * @return {?}
     */


    function validateBasis(basis) {
      var grow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '1';
      var shrink = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '1';

      /** @type {?} */
      var parts = [grow, shrink, basis];
      /** @type {?} */

      var j = basis.indexOf('calc');

      if (j > 0) {
        parts[2] = _validateCalcValue(basis.substring(j).trim());
        /** @type {?} */

        var matches = basis.substr(0, j).trim().split(' ');

        if (matches.length == 2) {
          parts[0] = matches[0];
          parts[1] = matches[1];
        }
      } else if (j == 0) {
        parts[2] = _validateCalcValue(basis.trim());
      } else {
        /** @type {?} */
        var _matches = basis.split(' ');

        parts = _matches.length === 3 ? _matches : [grow, shrink, basis];
      }

      return parts;
    }
    /**
     * Calc expressions require whitespace before & after any expression operators
     * This is a simple, crude whitespace padding solution.
     *   - '3 3 calc(15em + 20px)'
     *   - calc(100% / 7 * 2)
     *   - 'calc(15em + 20px)'
     *   - 'calc(15em+20px)'
     *   - '37px'
     *   = '43%'
     * @param {?} calc
     * @return {?}
     */


    function _validateCalcValue(calc) {
      return calc.replace(/[\s]/g, '').replace(/[\/\*\+\-]/g, ' $& ');
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * MediaMarshaller - register responsive values from directives and
     *                   trigger them based on media query events
     */


    var MediaMarshaller =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} matchMedia
       * @param {?} breakpoints
       * @param {?} hook
       */
      function MediaMarshaller(matchMedia, breakpoints, hook) {
        _classCallCheck(this, MediaMarshaller);

        this.matchMedia = matchMedia;
        this.breakpoints = breakpoints;
        this.hook = hook;
        this.activatedBreakpoints = [];
        this.elementMap = new Map();
        this.elementKeyMap = new WeakMap();
        this.watcherMap = new WeakMap();
        this.updateMap = new WeakMap();
        this.clearMap = new WeakMap();
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.observeActivations();
      }
      /**
       * @return {?}
       */


      _createClass(MediaMarshaller, [{
        key: "onMediaChange",

        /**
         * Update styles on breakpoint activates or deactivates
         * @param {?} mc
         * @return {?}
         */
        value: function onMediaChange(mc) {
          /** @type {?} */
          var bp = this.findByQuery(mc.mediaQuery);

          if (bp) {
            mc = mergeAlias(mc, bp);

            if (mc.matches && this.activatedBreakpoints.indexOf(bp) === -1) {
              this.activatedBreakpoints.push(bp);
              this.activatedBreakpoints.sort(sortDescendingPriority);
              this.updateStyles();
            } else if (!mc.matches && this.activatedBreakpoints.indexOf(bp) !== -1) {
              // Remove the breakpoint when it's deactivated
              this.activatedBreakpoints.splice(this.activatedBreakpoints.indexOf(bp), 1);
              this.activatedBreakpoints.sort(sortDescendingPriority);
              this.updateStyles();
            }
          }
        }
        /**
         * initialize the marshaller with necessary elements for delegation on an element
         * @param {?} element
         * @param {?} key
         * @param {?=} updateFn optional callback so that custom bp directives don't have to re-provide this
         * @param {?=} clearFn optional callback so that custom bp directives don't have to re-provide this
         * @param {?=} extraTriggers other triggers to force style updates (e.g. layout, directionality, etc)
         * @return {?}
         */

      }, {
        key: "init",
        value: function init(element, key, updateFn, clearFn) {
          var extraTriggers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
          initBuilderMap(this.updateMap, element, key, updateFn);
          initBuilderMap(this.clearMap, element, key, clearFn);
          this.buildElementKeyMap(element, key);
          this.watchExtraTriggers(element, key, extraTriggers);
        }
        /**
         * get the value for an element and key and optionally a given breakpoint
         * @param {?} element
         * @param {?} key
         * @param {?=} bp
         * @return {?}
         */

      }, {
        key: "getValue",
        value: function getValue(element, key, bp) {
          /** @type {?} */
          var bpMap = this.elementMap.get(element);

          if (bpMap) {
            /** @type {?} */
            var values = bp !== undefined ? bpMap.get(bp) : this.getActivatedValues(bpMap, key);

            if (values) {
              return values.get(key);
            }
          }

          return undefined;
        }
        /**
         * whether the element has values for a given key
         * @param {?} element
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "hasValue",
        value: function hasValue(element, key) {
          /** @type {?} */
          var bpMap = this.elementMap.get(element);

          if (bpMap) {
            /** @type {?} */
            var values = this.getActivatedValues(bpMap, key);

            if (values) {
              return values.get(key) !== undefined || false;
            }
          }

          return false;
        }
        /**
         * Set the value for an input on a directive
         * @param {?} element the element in question
         * @param {?} key the type of the directive (e.g. flex, layout-gap, etc)
         * @param {?} val the value for the breakpoint
         * @param {?} bp the breakpoint suffix (empty string = default)
         * @return {?}
         */

      }, {
        key: "setValue",
        value: function setValue(element, key, val, bp) {
          /** @type {?} */
          var bpMap = this.elementMap.get(element);

          if (!bpMap) {
            bpMap = new Map().set(bp, new Map().set(key, val));
            this.elementMap.set(element, bpMap);
          } else {
            /** @type {?} */
            var values = (bpMap.get(bp) || new Map()).set(key, val);
            bpMap.set(bp, values);
            this.elementMap.set(element, bpMap);
          }
          /** @type {?} */


          var value = this.getValue(element, key);

          if (value !== undefined) {
            this.updateElement(element, key, value);
          }
        }
        /**
         * Track element value changes for a specific key
         * @param {?} element
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "trackValue",
        value: function trackValue(element, key) {
          return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (v) {
            return v.element === element && v.key === key;
          }));
        }
        /**
         * update all styles for all elements on the current breakpoint
         * @return {?}
         */

      }, {
        key: "updateStyles",
        value: function updateStyles() {
          var _this19 = this;

          this.elementMap.forEach(function (bpMap, el) {
            /** @type {?} */
            var keyMap = new Set(
            /** @type {?} */
            _this19.elementKeyMap.get(el));
            /** @type {?} */

            var valueMap = _this19.getActivatedValues(bpMap);

            if (valueMap) {
              valueMap.forEach(function (v, k) {
                _this19.updateElement(el, k, v);

                keyMap.delete(k);
              });
            }

            keyMap.forEach(function (k) {
              valueMap = _this19.getActivatedValues(bpMap, k);

              if (valueMap) {
                /** @type {?} */
                var value = valueMap.get(k);

                _this19.updateElement(el, k, value);
              } else {
                _this19.clearElement(el, k);
              }
            });
          });
        }
        /**
         * clear the styles for a given element
         * @param {?} element
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "clearElement",
        value: function clearElement(element, key) {
          /** @type {?} */
          var builders = this.clearMap.get(element);

          if (builders) {
            /** @type {?} */
            var clearFn =
            /** @type {?} */
            builders.get(key);

            if (!!clearFn) {
              clearFn();
              this.subject.next({
                element: element,
                key: key,
                value: ''
              });
            }
          }
        }
        /**
         * update a given element with the activated values for a given key
         * @param {?} element
         * @param {?} key
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "updateElement",
        value: function updateElement(element, key, value) {
          /** @type {?} */
          var builders = this.updateMap.get(element);

          if (builders) {
            /** @type {?} */
            var updateFn =
            /** @type {?} */
            builders.get(key);

            if (!!updateFn) {
              updateFn(value);
              this.subject.next({
                element: element,
                key: key,
                value: value
              });
            }
          }
        }
        /**
         * release all references to a given element
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "releaseElement",
        value: function releaseElement(element) {
          /** @type {?} */
          var watcherMap = this.watcherMap.get(element);

          if (watcherMap) {
            watcherMap.forEach(function (s) {
              return s.unsubscribe();
            });
            this.watcherMap.delete(element);
          }
          /** @type {?} */


          var elementMap = this.elementMap.get(element);

          if (elementMap) {
            elementMap.forEach(function (_, s) {
              return elementMap.delete(s);
            });
            this.elementMap.delete(element);
          }
        }
        /**
         * trigger an update for a given element and key (e.g. layout)
         * @param {?} element
         * @param {?=} key
         * @return {?}
         */

      }, {
        key: "triggerUpdate",
        value: function triggerUpdate(element, key) {
          var _this20 = this;

          /** @type {?} */
          var bpMap = this.elementMap.get(element);

          if (bpMap) {
            /** @type {?} */
            var valueMap = this.getActivatedValues(bpMap, key);

            if (valueMap) {
              if (key) {
                this.updateElement(element, key, valueMap.get(key));
              } else {
                valueMap.forEach(function (v, k) {
                  return _this20.updateElement(element, k, v);
                });
              }
            }
          }
        }
        /**
         * Cross-reference for HTMLElement with directive key
         * @param {?} element
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "buildElementKeyMap",
        value: function buildElementKeyMap(element, key) {
          /** @type {?} */
          var keyMap = this.elementKeyMap.get(element);

          if (!keyMap) {
            keyMap = new Set();
            this.elementKeyMap.set(element, keyMap);
          }

          keyMap.add(key);
        }
        /**
         * Other triggers that should force style updates:
         * - directionality
         * - layout changes
         * - mutationobserver updates
         * @param {?} element
         * @param {?} key
         * @param {?} triggers
         * @return {?}
         */

      }, {
        key: "watchExtraTriggers",
        value: function watchExtraTriggers(element, key, triggers) {
          var _this21 = this;

          if (triggers && triggers.length) {
            /** @type {?} */
            var watchers = this.watcherMap.get(element);

            if (!watchers) {
              watchers = new Map();
              this.watcherMap.set(element, watchers);
            }
            /** @type {?} */


            var subscription = watchers.get(key);

            if (!subscription) {
              /** @type {?} */
              var newSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"]).apply(void 0, _toConsumableArray(triggers)).subscribe(function () {
                /** @type {?} */
                var currentValue = _this21.getValue(element, key);

                _this21.updateElement(element, key, currentValue);
              });
              watchers.set(key, newSubscription);
            }
          }
        }
        /**
         * Breakpoint locator by mediaQuery
         * @param {?} query
         * @return {?}
         */

      }, {
        key: "findByQuery",
        value: function findByQuery(query) {
          return this.breakpoints.findByQuery(query);
        }
        /**
         * get the fallback breakpoint for a given element, starting with the current breakpoint
         * @param {?} bpMap
         * @param {?=} key
         * @return {?}
         */

      }, {
        key: "getActivatedValues",
        value: function getActivatedValues(bpMap, key) {
          for (var i = 0; i < this.activatedBreakpoints.length; i++) {
            /** @type {?} */
            var activatedBp = this.activatedBreakpoints[i];
            /** @type {?} */

            var valueMap = bpMap.get(activatedBp.alias);

            if (valueMap) {
              if (key === undefined || valueMap.has(key)) {
                return valueMap;
              }
            }
          }
          /** @type {?} */


          var lastHope = bpMap.get('');
          return key === undefined || lastHope && lastHope.has(key) ? lastHope : undefined;
        }
        /**
         * Watch for mediaQuery breakpoint activations
         * @return {?}
         */

      }, {
        key: "observeActivations",
        value: function observeActivations() {
          /** @type {?} */
          var target =
          /** @type {?} */
          this;
          /** @type {?} */

          var queries = this.breakpoints.items.map(function (bp) {
            return bp.mediaQuery;
          });
          this.matchMedia.observe(this.hook.withPrintQuery(queries)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(this.hook.interceptEvents(target)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(this.hook.blockPropagation())).subscribe(this.onMediaChange.bind(this));
        }
      }, {
        key: "activatedAlias",
        get: function get() {
          return this.activatedBreakpoints[0] ? this.activatedBreakpoints[0].alias : '';
        }
      }]);

      return MediaMarshaller;
    }();

    MediaMarshaller.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    MediaMarshaller.ctorParameters = function () {
      return [{
        type: MatchMedia
      }, {
        type: BreakPointRegistry
      }, {
        type: PrintHook
      }];
    };
    /** @nocollapse */


    MediaMarshaller.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function MediaMarshaller_Factory() {
        return new MediaMarshaller(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(MatchMedia), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(PrintHook));
      },
      token: MediaMarshaller,
      providedIn: "root"
    });
    /**
     * @param {?} map
     * @param {?} element
     * @param {?} key
     * @param {?=} input
     * @return {?}
     */

    function initBuilderMap(map$$1, element, key, input) {
      if (input !== undefined) {
        /** @type {?} */
        var oldMap = map$$1.get(element);

        if (!oldMap) {
          oldMap = new Map();
          map$$1.set(element, oldMap);
        }

        oldMap.set(key, input);
      }
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    //# sourceMappingURL=core.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/flex-layout/esm2015/extended.js":
  /*!***************************************************************!*\
    !*** ./node_modules/@angular/flex-layout/esm2015/extended.js ***!
    \***************************************************************/

  /*! exports provided: ExtendedModule, ClassDirective, DefaultClassDirective, ImgSrcStyleBuilder, ImgSrcDirective, DefaultImgSrcDirective, ShowHideStyleBuilder, ShowHideDirective, DefaultShowHideDirective, StyleDirective, DefaultStyleDirective */

  /***/
  function node_modulesAngularFlexLayoutEsm2015ExtendedJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExtendedModule", function () {
      return ExtendedModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassDirective", function () {
      return ClassDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultClassDirective", function () {
      return DefaultClassDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImgSrcStyleBuilder", function () {
      return ImgSrcStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImgSrcDirective", function () {
      return ImgSrcDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultImgSrcDirective", function () {
      return DefaultImgSrcDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowHideStyleBuilder", function () {
      return ShowHideStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowHideDirective", function () {
      return ShowHideDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultShowHideDirective", function () {
      return DefaultShowHideDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StyleDirective", function () {
      return StyleDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultStyleDirective", function () {
      return DefaultStyleDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */


    var ImgSrcStyleBuilder =
    /*#__PURE__*/
    function (_angular_flex_layout_) {
      _inherits(ImgSrcStyleBuilder, _angular_flex_layout_);

      function ImgSrcStyleBuilder() {
        _classCallCheck(this, ImgSrcStyleBuilder);

        return _possibleConstructorReturn(this, _getPrototypeOf(ImgSrcStyleBuilder).apply(this, arguments));
      }

      _createClass(ImgSrcStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} url
         * @return {?}
         */
        value: function buildStyles(url) {
          return {
            'content': url ? "url(".concat(url, ")") : ''
          };
        }
      }]);

      return ImgSrcStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]);

    ImgSrcStyleBuilder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    ImgSrcStyleBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function ImgSrcStyleBuilder_Factory() {
        return new ImgSrcStyleBuilder();
      },
      token: ImgSrcStyleBuilder,
      providedIn: "root"
    });

    var ImgSrcDirective =
    /*#__PURE__*/
    function (_angular_flex_layout_2) {
      _inherits(ImgSrcDirective, _angular_flex_layout_2);

      /**
       * @param {?} elementRef
       * @param {?} styleBuilder
       * @param {?} styler
       * @param {?} marshal
       * @param {?} platformId
       * @param {?} serverModuleLoaded
       */
      function ImgSrcDirective(elementRef, styleBuilder, styler, marshal, platformId, serverModuleLoaded) {
        var _this22;

        _classCallCheck(this, ImgSrcDirective);

        _this22 = _possibleConstructorReturn(this, _getPrototypeOf(ImgSrcDirective).call(this, elementRef, styleBuilder, styler, marshal));
        _this22.elementRef = elementRef;
        _this22.styleBuilder = styleBuilder;
        _this22.styler = styler;
        _this22.marshal = marshal;
        _this22.platformId = platformId;
        _this22.serverModuleLoaded = serverModuleLoaded;
        _this22.DIRECTIVE_KEY = 'img-src';
        _this22.defaultSrc = '';
        _this22.styleCache = imgSrcCache;

        _this22.init();

        _this22.setValue(_this22.nativeElement.getAttribute('src') || '', '');

        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(_this22.platformId) && _this22.serverModuleLoaded) {
          _this22.nativeElement.setAttribute('src', '');
        }

        return _this22;
      }
      /**
       * @param {?} val
       * @return {?}
       */


      _createClass(ImgSrcDirective, [{
        key: "updateWithValue",

        /**
         * Use the [responsively] activated input value to update
         * the host img src attribute or assign a default `img.src=''`
         * if the src has not been defined.
         *
         * Do nothing to standard `<img src="">` usages, only when responsive
         * keys are present do we actually call `setAttribute()`
         * @param {?=} value
         * @return {?}
         */
        value: function updateWithValue(value) {
          /** @type {?} */
          var url = value || this.defaultSrc;

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId) && this.serverModuleLoaded) {
            this.addStyles(url);
          } else {
            this.nativeElement.setAttribute('src', url);
          }
        }
      }, {
        key: "src",
        set: function set(val) {
          this.defaultSrc = val;
          this.setValue(this.defaultSrc, '');
        }
      }]);

      return ImgSrcDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]);
    /** @nocollapse */


    ImgSrcDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: ImgSrcStyleBuilder
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }, {
        type: Boolean,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]]
        }]
      }];
    };

    ImgSrcDirective.propDecorators = {
      src: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['src']
      }]
    };
    /** @type {?} */

    var imgSrcCache = new Map();
    /** @type {?} */

    var inputs = ['src.xs', 'src.sm', 'src.md', 'src.lg', 'src.xl', 'src.lt-sm', 'src.lt-md', 'src.lt-lg', 'src.lt-xl', 'src.gt-xs', 'src.gt-sm', 'src.gt-md', 'src.gt-lg'];
    /** @type {?} */

    var selector = "\n  img[src.xs],    img[src.sm],    img[src.md],    img[src.lg],   img[src.xl],\n  img[src.lt-sm], img[src.lt-md], img[src.lt-lg], img[src.lt-xl],\n  img[src.gt-xs], img[src.gt-sm], img[src.gt-md], img[src.gt-lg]\n";
    /**
     * This directive provides a responsive API for the HTML <img> 'src' attribute
     * and will update the img.src property upon each responsive activation.
     *
     * e.g.
     *      <img src="defaultScene.jpg" src.xs="mobileScene.jpg"></img>
     *
     * @see https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-src/
     */

    var DefaultImgSrcDirective =
    /*#__PURE__*/
    function (_ImgSrcDirective) {
      _inherits(DefaultImgSrcDirective, _ImgSrcDirective);

      function DefaultImgSrcDirective() {
        var _this23;

        _classCallCheck(this, DefaultImgSrcDirective);

        _this23 = _possibleConstructorReturn(this, _getPrototypeOf(DefaultImgSrcDirective).apply(this, arguments));
        _this23.inputs = inputs;
        return _this23;
      }

      return DefaultImgSrcDirective;
    }(ImgSrcDirective);

    DefaultImgSrcDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: selector,
        inputs: inputs
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    var ClassDirective =
    /*#__PURE__*/
    function (_angular_flex_layout_3) {
      _inherits(ClassDirective, _angular_flex_layout_3);

      /**
       * @param {?} elementRef
       * @param {?} styler
       * @param {?} marshal
       * @param {?} iterableDiffers
       * @param {?} keyValueDiffers
       * @param {?} renderer
       * @param {?} ngClassInstance
       */
      function ClassDirective(elementRef, styler, marshal, iterableDiffers, keyValueDiffers, renderer, ngClassInstance) {
        var _this24;

        _classCallCheck(this, ClassDirective);

        _this24 = _possibleConstructorReturn(this, _getPrototypeOf(ClassDirective).call(this, elementRef,
        /** @type {?} */
        null, styler, marshal));
        _this24.elementRef = elementRef;
        _this24.styler = styler;
        _this24.marshal = marshal;
        _this24.iterableDiffers = iterableDiffers;
        _this24.keyValueDiffers = keyValueDiffers;
        _this24.renderer = renderer;
        _this24.ngClassInstance = ngClassInstance;
        _this24.DIRECTIVE_KEY = 'ngClass';

        if (!_this24.ngClassInstance) {
          // Create an instance NgClass Directive instance only if `ngClass=""` has NOT been defined on
          // the same host element; since the responsive variations may be defined...
          _this24.ngClassInstance = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"](_this24.iterableDiffers, _this24.keyValueDiffers, _this24.elementRef, _this24.renderer);
        }

        _this24.init();

        _this24.setValue('', '');

        return _this24;
      }
      /**
       * Capture class assignments so we cache the default classes
       * which are merged with activated styles and used as fallbacks.
       * @param {?} val
       * @return {?}
       */


      _createClass(ClassDirective, [{
        key: "updateWithValue",

        /**
         * @param {?} value
         * @return {?}
         */
        value: function updateWithValue(value) {
          this.ngClassInstance.ngClass = value;
          this.ngClassInstance.ngDoCheck();
        }
        /**
         * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          this.ngClassInstance.ngDoCheck();
        }
      }, {
        key: "klass",
        set: function set(val) {
          this.ngClassInstance.klass = val;
          this.setValue(val, '');
        }
      }]);

      return ClassDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]);
    /** @nocollapse */


    ClassDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }]
      }];
    };

    ClassDirective.propDecorators = {
      klass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['class']
      }]
    };
    /** @type {?} */

    var inputs$1 = ['ngClass', 'ngClass.xs', 'ngClass.sm', 'ngClass.md', 'ngClass.lg', 'ngClass.xl', 'ngClass.lt-sm', 'ngClass.lt-md', 'ngClass.lt-lg', 'ngClass.lt-xl', 'ngClass.gt-xs', 'ngClass.gt-sm', 'ngClass.gt-md', 'ngClass.gt-lg'];
    /** @type {?} */

    var selector$1 = "\n  [ngClass], [ngClass.xs], [ngClass.sm], [ngClass.md], [ngClass.lg], [ngClass.xl],\n  [ngClass.lt-sm], [ngClass.lt-md], [ngClass.lt-lg], [ngClass.lt-xl],\n  [ngClass.gt-xs], [ngClass.gt-sm], [ngClass.gt-md], [ngClass.gt-lg]\n";
    /**
     * Directive to add responsive support for ngClass.
     * This maintains the core functionality of 'ngClass' and adds responsive API
     * Note: this class is a no-op when rendered on the server
     */

    var DefaultClassDirective =
    /*#__PURE__*/
    function (_ClassDirective) {
      _inherits(DefaultClassDirective, _ClassDirective);

      function DefaultClassDirective() {
        var _this25;

        _classCallCheck(this, DefaultClassDirective);

        _this25 = _possibleConstructorReturn(this, _getPrototypeOf(DefaultClassDirective).apply(this, arguments));
        _this25.inputs = inputs$1;
        return _this25;
      }

      return DefaultClassDirective;
    }(ClassDirective);

    DefaultClassDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: selector$1,
        inputs: inputs$1
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    var ShowHideStyleBuilder =
    /*#__PURE__*/
    function (_angular_flex_layout_4) {
      _inherits(ShowHideStyleBuilder, _angular_flex_layout_4);

      function ShowHideStyleBuilder() {
        _classCallCheck(this, ShowHideStyleBuilder);

        return _possibleConstructorReturn(this, _getPrototypeOf(ShowHideStyleBuilder).apply(this, arguments));
      }

      _createClass(ShowHideStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} show
         * @param {?} parent
         * @return {?}
         */
        value: function buildStyles(show, parent) {
          /** @type {?} */
          var shouldShow = show === 'true';
          return {
            'display': shouldShow ? parent.display : 'none'
          };
        }
      }]);

      return ShowHideStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]);

    ShowHideStyleBuilder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    ShowHideStyleBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function ShowHideStyleBuilder_Factory() {
        return new ShowHideStyleBuilder();
      },
      token: ShowHideStyleBuilder,
      providedIn: "root"
    });

    var ShowHideDirective =
    /*#__PURE__*/
    function (_angular_flex_layout_5) {
      _inherits(ShowHideDirective, _angular_flex_layout_5);

      /**
       * @param {?} elementRef
       * @param {?} styleBuilder
       * @param {?} styler
       * @param {?} marshal
       * @param {?} layoutConfig
       * @param {?} platformId
       * @param {?} serverModuleLoaded
       */
      function ShowHideDirective(elementRef, styleBuilder, styler, marshal, layoutConfig, platformId, serverModuleLoaded) {
        var _this26;

        _classCallCheck(this, ShowHideDirective);

        _this26 = _possibleConstructorReturn(this, _getPrototypeOf(ShowHideDirective).call(this, elementRef, styleBuilder, styler, marshal));
        _this26.elementRef = elementRef;
        _this26.styleBuilder = styleBuilder;
        _this26.styler = styler;
        _this26.marshal = marshal;
        _this26.layoutConfig = layoutConfig;
        _this26.platformId = platformId;
        _this26.serverModuleLoaded = serverModuleLoaded;
        _this26.DIRECTIVE_KEY = 'show-hide';
        /**
         * Original dom Elements CSS display style
         */

        _this26.display = '';
        _this26.hasLayout = false;
        _this26.hasFlexChild = false;
        return _this26;
      }
      /**
       * @return {?}
       */


      _createClass(ShowHideDirective, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.trackExtraTriggers();
          /** @type {?} */

          var children = Array.from(this.nativeElement.children);

          for (var i = 0; i < children.length; i++) {
            if (this.marshal.hasValue(
            /** @type {?} */
            children[i], 'flex')) {
              this.hasFlexChild = true;
              break;
            }
          }

          if (DISPLAY_MAP.has(this.nativeElement)) {
            this.display =
            /** @type {?} */
            DISPLAY_MAP.get(this.nativeElement);
          } else {
            this.display = this.getDisplayStyle();
            DISPLAY_MAP.set(this.nativeElement, this.display);
          }

          this.init();
          /** @type {?} */

          var defaultValue = this.marshal.getValue(this.nativeElement, this.DIRECTIVE_KEY, '');

          if (defaultValue === undefined || defaultValue === '') {
            this.setValue(true, '');
          } else {
            this.triggerUpdate();
          }
        }
        /**
         * On changes to any \@Input properties...
         * Default to use the non-responsive Input value ('fxShow')
         * Then conditionally override with the mq-activated Input's current value
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this27 = this;

          Object.keys(changes).forEach(function (key) {
            if (_this27.inputs.indexOf(key) !== -1) {
              /** @type {?} */
              var inputKey = key.split('.');
              /** @type {?} */

              var bp = inputKey.slice(1).join('.');
              /** @type {?} */

              var inputValue = changes[key].currentValue;
              /** @type {?} */

              var shouldShow = inputValue !== '' ? inputValue !== 0 ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(inputValue) : false : true;

              if (inputKey[0] === 'fxHide') {
                shouldShow = !shouldShow;
              }

              _this27.setValue(shouldShow, bp);
            }
          });
        }
        /**
         *  Watch for these extra triggers to update fxShow, fxHide stylings
         * @return {?}
         */

      }, {
        key: "trackExtraTriggers",
        value: function trackExtraTriggers() {
          var _this28 = this;

          this.hasLayout = this.marshal.hasValue(this.nativeElement, 'layout');
          ['layout', 'layout-align'].forEach(function (key) {
            _this28.marshal.trackValue(_this28.nativeElement, key).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this28.destroySubject)).subscribe(_this28.triggerUpdate.bind(_this28));
          });
        }
        /**
         * Override accessor to the current HTMLElement's `display` style
         * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
         * unless it was already explicitly specified inline or in a CSS stylesheet.
         * @return {?}
         */

      }, {
        key: "getDisplayStyle",
        value: function getDisplayStyle() {
          return this.hasLayout || this.hasFlexChild && this.layoutConfig.addFlexToParent ? 'flex' : this.styler.lookupStyle(this.nativeElement, 'display', true);
        }
        /**
         * Validate the visibility value and then update the host's inline display style
         * @param {?=} value
         * @return {?}
         */

      }, {
        key: "updateWithValue",
        value: function updateWithValue() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          if (value === '') {
            return;
          }

          this.addStyles(value ? 'true' : 'false', {
            display: this.display
          });

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId) && this.serverModuleLoaded) {
            this.nativeElement.style.setProperty('display', '');
          }

          this.marshal.triggerUpdate(
          /** @type {?} */
          this.parentElement, 'layout-gap');
        }
      }]);

      return ShowHideDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]);
    /** @nocollapse */


    ShowHideDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: ShowHideStyleBuilder
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"]]
        }]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }, {
        type: Boolean,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]]
        }]
      }];
    };
    /** @type {?} */


    var DISPLAY_MAP = new WeakMap();
    /** @type {?} */

    var inputs$2 = ['fxShow', 'fxShow.print', 'fxShow.xs', 'fxShow.sm', 'fxShow.md', 'fxShow.lg', 'fxShow.xl', 'fxShow.lt-sm', 'fxShow.lt-md', 'fxShow.lt-lg', 'fxShow.lt-xl', 'fxShow.gt-xs', 'fxShow.gt-sm', 'fxShow.gt-md', 'fxShow.gt-lg', 'fxHide', 'fxHide.print', 'fxHide.xs', 'fxHide.sm', 'fxHide.md', 'fxHide.lg', 'fxHide.xl', 'fxHide.lt-sm', 'fxHide.lt-md', 'fxHide.lt-lg', 'fxHide.lt-xl', 'fxHide.gt-xs', 'fxHide.gt-sm', 'fxHide.gt-md', 'fxHide.gt-lg'];
    /** @type {?} */

    var selector$2 = "\n  [fxShow], [fxShow.print],\n  [fxShow.xs], [fxShow.sm], [fxShow.md], [fxShow.lg], [fxShow.xl],\n  [fxShow.lt-sm], [fxShow.lt-md], [fxShow.lt-lg], [fxShow.lt-xl],\n  [fxShow.gt-xs], [fxShow.gt-sm], [fxShow.gt-md], [fxShow.gt-lg],\n  [fxHide], [fxHide.print],\n  [fxHide.xs], [fxHide.sm], [fxHide.md], [fxHide.lg], [fxHide.xl],\n  [fxHide.lt-sm], [fxHide.lt-md], [fxHide.lt-lg], [fxHide.lt-xl],\n  [fxHide.gt-xs], [fxHide.gt-sm], [fxHide.gt-md], [fxHide.gt-lg]\n";
    /**
     * 'show' Layout API directive
     */

    var DefaultShowHideDirective =
    /*#__PURE__*/
    function (_ShowHideDirective) {
      _inherits(DefaultShowHideDirective, _ShowHideDirective);

      function DefaultShowHideDirective() {
        var _this29;

        _classCallCheck(this, DefaultShowHideDirective);

        _this29 = _possibleConstructorReturn(this, _getPrototypeOf(DefaultShowHideDirective).apply(this, arguments));
        _this29.inputs = inputs$2;
        return _this29;
      }

      return DefaultShowHideDirective;
    }(ShowHideDirective);

    DefaultShowHideDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: selector$2,
        inputs: inputs$2
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * NgStyle allowed inputs
     */

    var NgStyleKeyValue =
    /**
     * @param {?} key
     * @param {?} value
     * @param {?=} noQuotes
     */
    function NgStyleKeyValue(key, value) {
      var noQuotes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      _classCallCheck(this, NgStyleKeyValue);

      this.key = key;
      this.value = value;
      this.key = noQuotes ? key.replace(/['"]/g, '').trim() : key.trim();
      this.value = noQuotes ? value.replace(/['"]/g, '').trim() : value.trim();
      this.value = this.value.replace(/;/, '');
    };
    /**
     * @param {?} target
     * @return {?}
     */


    function getType(target) {
      /** @type {?} */
      var what = typeof target;

      if (what === 'object') {
        return target.constructor === Array ? 'array' : target.constructor === Set ? 'set' : 'object';
      }

      return what;
    }
    /**
     * Split string of key:value pairs into Array of k-v pairs
     * e.g.  'key:value; key:value; key:value;' -> ['key:value',...]
     * @param {?} source
     * @param {?=} delimiter
     * @return {?}
     */


    function buildRawList(source) {
      var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ';';
      return String(source).trim().split(delimiter).map(function (val) {
        return val.trim();
      }).filter(function (val) {
        return val !== '';
      });
    }
    /**
     * Convert array of key:value strings to a iterable map object
     * @param {?} styles
     * @param {?=} sanitize
     * @return {?}
     */


    function buildMapFromList(styles, sanitize) {
      /** @type {?} */
      var sanitizeValue = function sanitizeValue(it) {
        if (sanitize) {
          it.value = sanitize(it.value);
        }

        return it;
      };

      return styles.map(stringToKeyValue).filter(function (entry) {
        return !!entry;
      }).map(sanitizeValue).reduce(keyValuesToMap,
      /** @type {?} */
      {});
    }
    /**
     * Convert Set<string> or raw Object to an iterable NgStyleMap
     * @param {?} source
     * @param {?=} sanitize
     * @return {?}
     */


    function buildMapFromSet(source, sanitize) {
      /** @type {?} */
      var list = [];

      if (getType(source) === 'set') {
        /** @type {?} */
        source.forEach(function (entry) {
          return list.push(entry);
        });
      } else {
        Object.keys(source).forEach(function (key) {
          list.push("".concat(key, ":").concat(
          /** @type {?} */
          source[key]));
        });
      }

      return buildMapFromList(list, sanitize);
    }
    /**
     * Convert 'key:value' -> [key, value]
     * @param {?} it
     * @return {?}
     */


    function stringToKeyValue(it) {
      var _it$split = it.split(':'),
          _it$split2 = _toArray(_it$split),
          key = _it$split2[0],
          vals = _it$split2.slice(1);

      return new NgStyleKeyValue(key, vals.join(':'));
    }
    /**
     * Convert [ [key,value] ] -> { key : value }
     * @param {?} map
     * @param {?} entry
     * @return {?}
     */


    function keyValuesToMap(map, entry) {
      if (!!entry.key) {
        map[entry.key] = entry.value;
      }

      return map;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */


    var StyleDirective =
    /*#__PURE__*/
    function (_angular_flex_layout_6) {
      _inherits(StyleDirective, _angular_flex_layout_6);

      /**
       * @param {?} elementRef
       * @param {?} styler
       * @param {?} marshal
       * @param {?} keyValueDiffers
       * @param {?} renderer
       * @param {?} sanitizer
       * @param {?} ngStyleInstance
       * @param {?} serverLoaded
       * @param {?} platformId
       */
      function StyleDirective(elementRef, styler, marshal, keyValueDiffers, renderer, sanitizer, ngStyleInstance, serverLoaded, platformId) {
        var _this30;

        _classCallCheck(this, StyleDirective);

        _this30 = _possibleConstructorReturn(this, _getPrototypeOf(StyleDirective).call(this, elementRef,
        /** @type {?} */
        null, styler, marshal));
        _this30.elementRef = elementRef;
        _this30.styler = styler;
        _this30.marshal = marshal;
        _this30.keyValueDiffers = keyValueDiffers;
        _this30.renderer = renderer;
        _this30.sanitizer = sanitizer;
        _this30.ngStyleInstance = ngStyleInstance;
        _this30.DIRECTIVE_KEY = 'ngStyle';

        if (!_this30.ngStyleInstance) {
          // Create an instance NgClass Directive instance only if `ngClass=""` has NOT been
          // defined on the same host element; since the responsive variations may be defined...
          _this30.ngStyleInstance = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"](_this30.keyValueDiffers, _this30.elementRef, _this30.renderer);
        }

        _this30.init();
        /** @type {?} */


        var styles = _this30.nativeElement.getAttribute('style') || '';
        _this30.fallbackStyles = _this30.buildStyleMap(styles);
        _this30.isServer = serverLoaded && Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(platformId);
        return _this30;
      }
      /**
       * Add generated styles
       * @param {?} value
       * @return {?}
       */


      _createClass(StyleDirective, [{
        key: "updateWithValue",
        value: function updateWithValue(value) {
          /** @type {?} */
          var styles = this.buildStyleMap(value);
          this.ngStyleInstance.ngStyle = Object.assign({}, this.fallbackStyles, styles);

          if (this.isServer) {
            this.applyStyleToElement(styles);
          }

          this.ngStyleInstance.ngDoCheck();
        }
        /**
         * Remove generated styles
         * @return {?}
         */

      }, {
        key: "clearStyles",
        value: function clearStyles() {
          this.ngStyleInstance.ngStyle = this.fallbackStyles;
          this.ngStyleInstance.ngDoCheck();
        }
        /**
         * Convert raw strings to ngStyleMap; which is required by ngStyle
         * NOTE: Raw string key-value pairs MUST be delimited by `;`
         *       Comma-delimiters are not supported due to complexities of
         *       possible style values such as `rgba(x,x,x,x)` and others
         * @param {?} styles
         * @return {?}
         */

      }, {
        key: "buildStyleMap",
        value: function buildStyleMap(styles) {
          var _this31 = this;

          /** @type {?} */
          var sanitizer = function sanitizer(val) {
            return _this31.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].STYLE, val) || '';
          };

          if (styles) {
            switch (getType(styles)) {
              case 'string':
                return buildMapFromList$1(buildRawList(styles), sanitizer);

              case 'array':
                return buildMapFromList$1(
                /** @type {?} */
                styles, sanitizer);

              case 'set':
                return buildMapFromSet(styles, sanitizer);

              default:
                return buildMapFromSet(styles, sanitizer);
            }
          }

          return {};
        }
        /**
         * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          this.ngStyleInstance.ngDoCheck();
        }
      }]);

      return StyleDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]);
    /** @nocollapse */


    StyleDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }]
      }, {
        type: Boolean,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]]
        }]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }];
    };
    /** @type {?} */


    var inputs$3 = ['ngStyle', 'ngStyle.xs', 'ngStyle.sm', 'ngStyle.md', 'ngStyle.lg', 'ngStyle.xl', 'ngStyle.lt-sm', 'ngStyle.lt-md', 'ngStyle.lt-lg', 'ngStyle.lt-xl', 'ngStyle.gt-xs', 'ngStyle.gt-sm', 'ngStyle.gt-md', 'ngStyle.gt-lg'];
    /** @type {?} */

    var selector$3 = "\n  [ngStyle],\n  [ngStyle.xs], [ngStyle.sm], [ngStyle.md], [ngStyle.lg], [ngStyle.xl],\n  [ngStyle.lt-sm], [ngStyle.lt-md], [ngStyle.lt-lg], [ngStyle.lt-xl],\n  [ngStyle.gt-xs], [ngStyle.gt-sm], [ngStyle.gt-md], [ngStyle.gt-lg]\n";
    /**
     * Directive to add responsive support for ngStyle.
     *
     */

    var DefaultStyleDirective =
    /*#__PURE__*/
    function (_StyleDirective) {
      _inherits(DefaultStyleDirective, _StyleDirective);

      function DefaultStyleDirective() {
        var _this32;

        _classCallCheck(this, DefaultStyleDirective);

        _this32 = _possibleConstructorReturn(this, _getPrototypeOf(DefaultStyleDirective).apply(this, arguments));
        _this32.inputs = inputs$3;
        return _this32;
      }

      return DefaultStyleDirective;
    }(StyleDirective);

    DefaultStyleDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: selector$3,
        inputs: inputs$3
      }]
    }];
    /**
     * Build a styles map from a list of styles, while sanitizing bad values first
     * @param {?} styles
     * @param {?=} sanitize
     * @return {?}
     */

    function buildMapFromList$1(styles, sanitize) {
      /** @type {?} */
      var sanitizeValue = function sanitizeValue(it) {
        if (sanitize) {
          it.value = sanitize(it.value);
        }

        return it;
      };

      return styles.map(stringToKeyValue).filter(function (entry) {
        return !!entry;
      }).map(sanitizeValue).reduce(keyValuesToMap,
      /** @type {?} */
      {});
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** @type {?} */


    var ALL_DIRECTIVES = [DefaultShowHideDirective, DefaultClassDirective, DefaultStyleDirective, DefaultImgSrcDirective];
    /**
     * *****************************************************************
     * Define module for the Extended API
     * *****************************************************************
     */

    var ExtendedModule = function ExtendedModule() {
      _classCallCheck(this, ExtendedModule);
    };

    ExtendedModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]],
        declarations: [].concat(ALL_DIRECTIVES),
        exports: [].concat(ALL_DIRECTIVES)
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    //# sourceMappingURL=extended.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/flex-layout/esm2015/flex-layout.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@angular/flex-layout/esm2015/flex-layout.js ***!
    \******************************************************************/

  /*! exports provided: ɵMatchMedia, ɵMockMatchMedia, ɵMockMatchMediaProvider, CoreModule, removeStyles, BROWSER_PROVIDER, CLASS_NAME, MediaChange, StylesheetMap, DEFAULT_CONFIG, LAYOUT_CONFIG, SERVER_TOKEN, BREAKPOINT, mergeAlias, BaseDirective2, DEFAULT_BREAKPOINTS, ScreenTypes, ORIENTATION_BREAKPOINTS, BreakPointRegistry, BREAKPOINTS, MediaObserver, MediaTrigger, sortDescendingPriority, sortAscendingPriority, StyleUtils, StyleBuilder, validateBasis, MediaMarshaller, BREAKPOINT_PRINT, PrintHook, ExtendedModule, ClassDirective, DefaultClassDirective, ImgSrcStyleBuilder, ImgSrcDirective, DefaultImgSrcDirective, ShowHideStyleBuilder, ShowHideDirective, DefaultShowHideDirective, StyleDirective, DefaultStyleDirective, FlexModule, FlexStyleBuilder, FlexDirective, DefaultFlexDirective, FlexAlignStyleBuilder, FlexAlignDirective, DefaultFlexAlignDirective, FlexFillStyleBuilder, FlexFillDirective, FlexOffsetStyleBuilder, FlexOffsetDirective, DefaultFlexOffsetDirective, FlexOrderStyleBuilder, FlexOrderDirective, DefaultFlexOrderDirective, LayoutStyleBuilder, LayoutDirective, DefaultLayoutDirective, LayoutAlignStyleBuilder, LayoutAlignDirective, DefaultLayoutAlignDirective, LayoutGapStyleBuilder, LayoutGapDirective, DefaultLayoutGapDirective, ɵf2, ɵe2, ɵd2, ɵi2, ɵh2, ɵg2, ɵl2, ɵk2, ɵj2, ɵo2, ɵn2, ɵm2, ɵr2, ɵq2, ɵp2, ɵu2, ɵt2, ɵs2, ɵx2, ɵw2, ɵv2, ɵba2, ɵz2, ɵy2, ɵc2, ɵb2, ɵa2, ɵbd2, ɵbc2, ɵbb2, ɵbg2, ɵbf2, ɵbe2, GridModule, VERSION, FlexLayoutModule */

  /***/
  function node_modulesAngularFlexLayoutEsm2015FlexLayoutJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VERSION", function () {
      return VERSION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexLayoutModule", function () {
      return FlexLayoutModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵMatchMedia", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ɵMatchMedia"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵMockMatchMedia", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ɵMockMatchMedia"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵMockMatchMediaProvider", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ɵMockMatchMediaProvider"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "removeStyles", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["removeStyles"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BROWSER_PROVIDER", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BROWSER_PROVIDER"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CLASS_NAME", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CLASS_NAME"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MediaChange", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaChange"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StylesheetMap", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StylesheetMap"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_CONFIG", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CONFIG"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LAYOUT_CONFIG", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SERVER_TOKEN", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BREAKPOINT", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "mergeAlias", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["mergeAlias"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BaseDirective2", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_BREAKPOINTS", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_BREAKPOINTS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ScreenTypes", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ScreenTypes"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ORIENTATION_BREAKPOINTS", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ORIENTATION_BREAKPOINTS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BreakPointRegistry", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BreakPointRegistry"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BREAKPOINTS", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINTS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MediaObserver", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MediaTrigger", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaTrigger"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "sortDescendingPriority", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["sortDescendingPriority"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "sortAscendingPriority", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["sortAscendingPriority"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StyleUtils", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StyleBuilder", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "validateBasis", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["validateBasis"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MediaMarshaller", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BREAKPOINT_PRINT", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT_PRINT"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PrintHook", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["PrintHook"];
    });
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ExtendedModule", function () {
      return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ClassDirective", function () {
      return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ClassDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DefaultClassDirective", function () {
      return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ImgSrcStyleBuilder", function () {
      return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ImgSrcStyleBuilder"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ImgSrcDirective", function () {
      return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ImgSrcDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DefaultImgSrcDirective", function () {
      return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultImgSrcDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShowHideStyleBuilder", function () {
      return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ShowHideStyleBuilder"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShowHideDirective", function () {
      return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ShowHideDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DefaultShowHideDirective", function () {
      return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultShowHideDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StyleDirective", function () {
      return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["StyleDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DefaultStyleDirective", function () {
      return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultStyleDirective"];
    });
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FlexModule", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FlexStyleBuilder", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexStyleBuilder"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FlexDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DefaultFlexDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FlexAlignStyleBuilder", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexAlignStyleBuilder"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FlexAlignDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexAlignDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DefaultFlexAlignDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexAlignDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FlexFillStyleBuilder", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexFillStyleBuilder"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FlexFillDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexFillDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FlexOffsetStyleBuilder", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexOffsetStyleBuilder"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FlexOffsetDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexOffsetDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DefaultFlexOffsetDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexOffsetDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FlexOrderStyleBuilder", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexOrderStyleBuilder"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FlexOrderDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexOrderDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DefaultFlexOrderDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexOrderDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LayoutStyleBuilder", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutStyleBuilder"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LayoutDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DefaultLayoutDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LayoutAlignStyleBuilder", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutAlignStyleBuilder"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LayoutAlignDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutAlignDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DefaultLayoutAlignDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LayoutGapStyleBuilder", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutGapStyleBuilder"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LayoutGapDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutGapDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DefaultLayoutGapDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"];
    });
    /* harmony import */


    var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/grid */
    "./node_modules/@angular/flex-layout/esm2015/grid.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵf2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵf2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵe2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵe2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵd2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵd2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵi2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵi2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵh2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵh2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵg2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵg2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵl2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵl2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵk2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵk2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵj2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵj2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵo2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵo2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵn2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵn2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵm2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵm2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵr2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵr2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵq2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵq2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵp2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵp2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵu2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵu2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵt2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵt2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵs2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵs2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵx2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵx2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵw2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵw2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵv2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵv2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵba2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵba2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵz2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵz2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵy2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵy2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵc2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵc2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵb2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵb2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵa2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵa2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵbd2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵbd2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵbc2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵbc2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵbb2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵbb2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵbg2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵbg2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵbf2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵbf2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵbe2", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵbe2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GridModule", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"];
    });
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** *
     * Current version of Angular Flex-Layout.
      @type {?} */


    var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('7.0.0-beta.23-1c136bc');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * FlexLayoutModule -- the main import for all utilities in the Angular Layout library
     * * Will automatically provide Flex, Grid, and Extended modules for use in the application
     * * Can be configured using the static withConfig method, options viewable on the Wiki's
     *   Configuration page
     */

    var FlexLayoutModule =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} serverModuleLoaded
       * @param {?} platformId
       */
      function FlexLayoutModule(serverModuleLoaded, platformId) {
        _classCallCheck(this, FlexLayoutModule);

        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(platformId) && !serverModuleLoaded) {
          console.warn('Warning: Flex Layout loaded on the server without FlexLayoutServerModule');
        }
      }
      /**
       * Initialize the FlexLayoutModule with a set of config options,
       * which sets the corresponding tokens accordingly
       * @param {?} configOptions
       * @param {?=} breakpoints
       * @return {?}
       */


      _createClass(FlexLayoutModule, null, [{
        key: "withConfig",
        value: function withConfig(configOptions) {
          var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
          return {
            ngModule: FlexLayoutModule,
            providers: configOptions.serverLoaded ? [{
              provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"],
              useValue: Object.assign({}, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CONFIG"], configOptions)
            }, {
              provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"],
              useValue: breakpoints,
              multi: true
            }, {
              provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"],
              useValue: true
            }] : [{
              provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"],
              useValue: Object.assign({}, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CONFIG"], configOptions)
            }, {
              provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"],
              useValue: breakpoints,
              multi: true
            }]
          };
        }
      }]);

      return FlexLayoutModule;
    }();

    FlexLayoutModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]],
        exports: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]]
      }]
    }];
    /** @nocollapse */

    FlexLayoutModule.ctorParameters = function () {
      return [{
        type: Boolean,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]]
        }]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    //# sourceMappingURL=flex-layout.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/flex-layout/esm2015/flex.js":
  /*!***********************************************************!*\
    !*** ./node_modules/@angular/flex-layout/esm2015/flex.js ***!
    \***********************************************************/

  /*! exports provided: FlexModule, FlexStyleBuilder, FlexDirective, DefaultFlexDirective, FlexAlignStyleBuilder, FlexAlignDirective, DefaultFlexAlignDirective, FlexFillStyleBuilder, FlexFillDirective, FlexOffsetStyleBuilder, FlexOffsetDirective, DefaultFlexOffsetDirective, FlexOrderStyleBuilder, FlexOrderDirective, DefaultFlexOrderDirective, LayoutStyleBuilder, LayoutDirective, DefaultLayoutDirective, LayoutAlignStyleBuilder, LayoutAlignDirective, DefaultLayoutAlignDirective, LayoutGapStyleBuilder, LayoutGapDirective, DefaultLayoutGapDirective */

  /***/
  function node_modulesAngularFlexLayoutEsm2015FlexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexModule", function () {
      return FlexModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexStyleBuilder", function () {
      return FlexStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexDirective", function () {
      return FlexDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultFlexDirective", function () {
      return DefaultFlexDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexAlignStyleBuilder", function () {
      return FlexAlignStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexAlignDirective", function () {
      return FlexAlignDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultFlexAlignDirective", function () {
      return DefaultFlexAlignDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexFillStyleBuilder", function () {
      return FlexFillStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexFillDirective", function () {
      return FlexFillDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexOffsetStyleBuilder", function () {
      return FlexOffsetStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexOffsetDirective", function () {
      return FlexOffsetDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultFlexOffsetDirective", function () {
      return DefaultFlexOffsetDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexOrderStyleBuilder", function () {
      return FlexOrderStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexOrderDirective", function () {
      return FlexOrderDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultFlexOrderDirective", function () {
      return DefaultFlexOrderDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutStyleBuilder", function () {
      return LayoutStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutDirective", function () {
      return LayoutDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultLayoutDirective", function () {
      return DefaultLayoutDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutAlignStyleBuilder", function () {
      return LayoutAlignStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutAlignDirective", function () {
      return LayoutAlignDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultLayoutAlignDirective", function () {
      return DefaultLayoutAlignDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutGapStyleBuilder", function () {
      return LayoutGapStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutGapDirective", function () {
      return LayoutGapDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultLayoutGapDirective", function () {
      return DefaultLayoutGapDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** *
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
      @type {?} */


    var INLINE = 'inline';
    /** @type {?} */

    var LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
    /**
     * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
     * @param {?} value
     * @return {?}
     */

    function buildLayoutCSS(value) {
      var _validateValue3 = validateValue(value),
          _validateValue4 = _slicedToArray(_validateValue3, 3),
          direction = _validateValue4[0],
          wrap = _validateValue4[1],
          isInline = _validateValue4[2];

      return buildCSS(direction, wrap, isInline);
    }
    /**
     * Validate the value to be one of the acceptable value options
     * Use default fallback of 'row'
     * @param {?} value
     * @return {?}
     */


    function validateValue(value) {
      value = value ? value.toLowerCase() : '';

      var _value$split3 = value.split(' '),
          _value$split4 = _slicedToArray(_value$split3, 3),
          direction = _value$split4[0],
          wrap = _value$split4[1],
          inline = _value$split4[2]; // First value must be the `flex-direction`


      if (!LAYOUT_VALUES.find(function (x) {
        return x === direction;
      })) {
        direction = LAYOUT_VALUES[0];
      }

      if (wrap === INLINE) {
        wrap = inline !== INLINE ? inline : '';
        inline = INLINE;
      }

      return [direction, validateWrapValue(wrap), !!inline];
    }
    /**
     * Determine if the validated, flex-direction value specifies
     * a horizontal/row flow.
     * @param {?} value
     * @return {?}
     */


    function isFlowHorizontal(value) {
      var _validateValue5 = validateValue(value),
          _validateValue6 = _slicedToArray(_validateValue5, 1),
          flow = _validateValue6[0];

      return flow.indexOf('row') > -1;
    }
    /**
     * Convert layout-wrap='<value>' to expected flex-wrap style
     * @param {?} value
     * @return {?}
     */


    function validateWrapValue(value) {
      if (!!value) {
        switch (value.toLowerCase()) {
          case 'reverse':
          case 'wrap-reverse':
          case 'reverse-wrap':
            value = 'wrap-reverse';
            break;

          case 'no':
          case 'none':
          case 'nowrap':
            value = 'nowrap';
            break;
          // All other values fallback to 'wrap'

          default:
            value = 'wrap';
            break;
        }
      }

      return value;
    }
    /**
     * Build the CSS that should be assigned to the element instance
     * BUG:
     *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
     *      Use height instead if possible; height : <xxx>vh;
     *
     *  This way any padding or border specified on the child elements are
     *  laid out and drawn inside that element's specified width and height.
     * @param {?} direction
     * @param {?=} wrap
     * @param {?=} inline
     * @return {?}
     */


    function buildCSS(direction) {
      var wrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var inline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return {
        'display': inline ? 'inline-flex' : 'flex',
        'box-sizing': 'border-box',
        'flex-direction': direction,
        'flex-wrap': !!wrap ? wrap : null
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */


    var LayoutStyleBuilder =
    /*#__PURE__*/
    function (_angular_flex_layout_7) {
      _inherits(LayoutStyleBuilder, _angular_flex_layout_7);

      function LayoutStyleBuilder() {
        _classCallCheck(this, LayoutStyleBuilder);

        return _possibleConstructorReturn(this, _getPrototypeOf(LayoutStyleBuilder).apply(this, arguments));
      }

      _createClass(LayoutStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} input
         * @return {?}
         */
        value: function buildStyles(input) {
          return buildLayoutCSS(input);
        }
      }]);

      return LayoutStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    LayoutStyleBuilder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    LayoutStyleBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function LayoutStyleBuilder_Factory() {
        return new LayoutStyleBuilder();
      },
      token: LayoutStyleBuilder,
      providedIn: "root"
    });
    /** @type {?} */

    var inputs = ['fxLayout', 'fxLayout.xs', 'fxLayout.sm', 'fxLayout.md', 'fxLayout.lg', 'fxLayout.xl', 'fxLayout.lt-sm', 'fxLayout.lt-md', 'fxLayout.lt-lg', 'fxLayout.lt-xl', 'fxLayout.gt-xs', 'fxLayout.gt-sm', 'fxLayout.gt-md', 'fxLayout.gt-lg'];
    /** @type {?} */

    var selector = "\n  [fxLayout], [fxLayout.xs], [fxLayout.sm], [fxLayout.md],\n  [fxLayout.lg], [fxLayout.xl], [fxLayout.lt-sm], [fxLayout.lt-md],\n  [fxLayout.lt-lg], [fxLayout.lt-xl], [fxLayout.gt-xs], [fxLayout.gt-sm],\n  [fxLayout.gt-md], [fxLayout.gt-lg]\n";
    /**
     * 'layout' flexbox styling directive
     * Defines the positioning flow direction for the child elements: row or column
     * Optional values: column or row (default)
     * @see https://css-tricks.com/almanac/properties/f/flex-direction/
     *
     */

    var LayoutDirective =
    /*#__PURE__*/
    function (_angular_flex_layout_8) {
      _inherits(LayoutDirective, _angular_flex_layout_8);

      /**
       * @param {?} elRef
       * @param {?} styleUtils
       * @param {?} styleBuilder
       * @param {?} marshal
       */
      function LayoutDirective(elRef, styleUtils, // NOTE: not actually optional, but we need to force DI without a
      // constructor call
      styleBuilder, marshal) {
        var _this33;

        _classCallCheck(this, LayoutDirective);

        _this33 = _possibleConstructorReturn(this, _getPrototypeOf(LayoutDirective).call(this, elRef, styleBuilder, styleUtils, marshal));
        _this33.elRef = elRef;
        _this33.styleUtils = styleUtils;
        _this33.styleBuilder = styleBuilder;
        _this33.marshal = marshal;
        _this33.DIRECTIVE_KEY = 'layout';
        _this33.styleCache = layoutCache;

        _this33.init();

        return _this33;
      }

      return LayoutDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);
    /** @nocollapse */


    LayoutDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: LayoutStyleBuilder,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };

    var DefaultLayoutDirective =
    /*#__PURE__*/
    function (_LayoutDirective) {
      _inherits(DefaultLayoutDirective, _LayoutDirective);

      function DefaultLayoutDirective() {
        var _this34;

        _classCallCheck(this, DefaultLayoutDirective);

        _this34 = _possibleConstructorReturn(this, _getPrototypeOf(DefaultLayoutDirective).apply(this, arguments));
        _this34.inputs = inputs;
        return _this34;
      }

      return DefaultLayoutDirective;
    }(LayoutDirective);

    DefaultLayoutDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: selector,
        inputs: inputs
      }]
    }];
    /** @type {?} */

    var layoutCache = new Map();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** @type {?} */

    var CLEAR_MARGIN_CSS = {
      'margin-left': null,
      'margin-right': null,
      'margin-top': null,
      'margin-bottom': null
    };

    var LayoutGapStyleBuilder =
    /*#__PURE__*/
    function (_angular_flex_layout_9) {
      _inherits(LayoutGapStyleBuilder, _angular_flex_layout_9);

      /**
       * @param {?} _styler
       */
      function LayoutGapStyleBuilder(_styler) {
        var _this35;

        _classCallCheck(this, LayoutGapStyleBuilder);

        _this35 = _possibleConstructorReturn(this, _getPrototypeOf(LayoutGapStyleBuilder).call(this));
        _this35._styler = _styler;
        return _this35;
      }
      /**
       * @param {?} gapValue
       * @param {?} parent
       * @return {?}
       */


      _createClass(LayoutGapStyleBuilder, [{
        key: "buildStyles",
        value: function buildStyles(gapValue, parent) {
          if (gapValue.endsWith(GRID_SPECIFIER)) {
            gapValue = gapValue.slice(0, gapValue.indexOf(GRID_SPECIFIER)); // Add the margin to the host element

            return buildGridMargin(gapValue, parent.directionality);
          } else {
            return {};
          }
        }
        /**
         * @param {?} gapValue
         * @param {?} _styles
         * @param {?} parent
         * @return {?}
         */

      }, {
        key: "sideEffect",
        value: function sideEffect(gapValue, _styles, parent) {
          /** @type {?} */
          var items = parent.items;

          if (gapValue.endsWith(GRID_SPECIFIER)) {
            gapValue = gapValue.slice(0, gapValue.indexOf(GRID_SPECIFIER));
            /** @type {?} */

            var paddingStyles = buildGridPadding(gapValue, parent.directionality);

            this._styler.applyStyleToElements(paddingStyles, parent.items);
          } else {
            /** @type {?} */
            var lastItem =
            /** @type {?} */
            items.pop();
            /** @type {?} */

            var gapCss = buildGapCSS(gapValue, parent);

            this._styler.applyStyleToElements(gapCss, items); // Clear all gaps for all visible elements


            this._styler.applyStyleToElements(CLEAR_MARGIN_CSS, [lastItem]);
          }
        }
      }]);

      return LayoutGapStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    LayoutGapStyleBuilder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    LayoutGapStyleBuilder.ctorParameters = function () {
      return [{
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }];
    };
    /** @nocollapse */


    LayoutGapStyleBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function LayoutGapStyleBuilder_Factory() {
        return new LayoutGapStyleBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]));
      },
      token: LayoutGapStyleBuilder,
      providedIn: "root"
    });
    /** @type {?} */

    var inputs$1 = ['fxLayoutGap', 'fxLayoutGap.xs', 'fxLayoutGap.sm', 'fxLayoutGap.md', 'fxLayoutGap.lg', 'fxLayoutGap.xl', 'fxLayoutGap.lt-sm', 'fxLayoutGap.lt-md', 'fxLayoutGap.lt-lg', 'fxLayoutGap.lt-xl', 'fxLayoutGap.gt-xs', 'fxLayoutGap.gt-sm', 'fxLayoutGap.gt-md', 'fxLayoutGap.gt-lg'];
    /** @type {?} */

    var selector$1 = "\n  [fxLayoutGap], [fxLayoutGap.xs], [fxLayoutGap.sm], [fxLayoutGap.md],\n  [fxLayoutGap.lg], [fxLayoutGap.xl], [fxLayoutGap.lt-sm], [fxLayoutGap.lt-md],\n  [fxLayoutGap.lt-lg], [fxLayoutGap.lt-xl], [fxLayoutGap.gt-xs], [fxLayoutGap.gt-sm],\n  [fxLayoutGap.gt-md], [fxLayoutGap.gt-lg]\n";
    /**
     * 'layout-padding' styling directive
     *  Defines padding of child elements in a layout container
     */

    var LayoutGapDirective =
    /*#__PURE__*/
    function (_angular_flex_layout_10) {
      _inherits(LayoutGapDirective, _angular_flex_layout_10);

      /**
       * @param {?} elRef
       * @param {?} zone
       * @param {?} directionality
       * @param {?} styleUtils
       * @param {?} styleBuilder
       * @param {?} marshal
       */
      function LayoutGapDirective(elRef, zone, directionality, styleUtils, // NOTE: not actually optional, but we need to force DI without a
      // constructor call
      styleBuilder, marshal) {
        var _this36;

        _classCallCheck(this, LayoutGapDirective);

        _this36 = _possibleConstructorReturn(this, _getPrototypeOf(LayoutGapDirective).call(this, elRef, styleBuilder, styleUtils, marshal));
        _this36.elRef = elRef;
        _this36.zone = zone;
        _this36.directionality = directionality;
        _this36.styleUtils = styleUtils;
        _this36.styleBuilder = styleBuilder;
        _this36.marshal = marshal;
        _this36.layout = 'row'; // default flex-direction

        _this36.DIRECTIVE_KEY = 'layout-gap';
        _this36.observerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /** @type {?} */

        var extraTriggers = [_this36.directionality.change, _this36.observerSubject.asObservable()];

        _this36.init(extraTriggers);

        _this36.marshal.trackValue(_this36.nativeElement, 'layout').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this36.destroySubject)).subscribe(_this36.onLayoutChange.bind(_assertThisInitialized(_this36)));

        return _this36;
      }
      /**
       * Special accessor to query for all child 'element' nodes regardless of type, class, etc
       * @return {?}
       */


      _createClass(LayoutGapDirective, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          this.buildChildObservable();
          this.triggerUpdate();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(LayoutGapDirective.prototype), "ngOnDestroy", this).call(this);

          if (this.observer) {
            this.observer.disconnect();
          }
        }
        /**
         * Cache the parent container 'flex-direction' and update the 'margin' styles
         * @param {?} matcher
         * @return {?}
         */

      }, {
        key: "onLayoutChange",
        value: function onLayoutChange(matcher) {
          var _this37 = this;

          /** @type {?} */
          var layout = matcher.value;
          /** @type {?} */

          var direction = layout.split(' ');
          this.layout = direction[0];

          if (!LAYOUT_VALUES.find(function (x) {
            return x === _this37.layout;
          })) {
            this.layout = 'row';
          }

          this.triggerUpdate();
        }
        /**
         *
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "updateWithValue",
        value: function updateWithValue(value) {
          var _this38 = this;

          /** @type {?} */
          var items = this.childrenNodes.filter(function (el) {
            return el.nodeType === 1 && _this38.willDisplay(el);
          }).sort(function (a, b) {
            /** @type {?} */
            var orderA = +_this38.styler.lookupStyle(a, 'order');
            /** @type {?} */

            var orderB = +_this38.styler.lookupStyle(b, 'order');

            if (isNaN(orderA) || isNaN(orderB) || orderA === orderB) {
              return 0;
            } else {
              return orderA > orderB ? 1 : -1;
            }
          });

          if (items.length > 0) {
            /** @type {?} */
            var directionality = this.directionality.value;
            /** @type {?} */

            var layout = this.layout;

            if (layout === 'row' && directionality === 'rtl') {
              this.styleCache = layoutGapCacheRowRtl;
            } else if (layout === 'row' && directionality !== 'rtl') {
              this.styleCache = layoutGapCacheRowLtr;
            } else if (layout === 'column' && directionality === 'rtl') {
              this.styleCache = layoutGapCacheColumnRtl;
            } else if (layout === 'column' && directionality !== 'rtl') {
              this.styleCache = layoutGapCacheColumnLtr;
            }

            this.addStyles(value, {
              directionality: directionality,
              items: items,
              layout: layout
            });
          }
        }
        /**
         * Determine if an element will show or hide based on current activation
         * @param {?} source
         * @return {?}
         */

      }, {
        key: "willDisplay",
        value: function willDisplay(source) {
          /** @type {?} */
          var value = this.marshal.getValue(source, 'show-hide');
          return value === true || value === undefined && this.styleUtils.lookupStyle(source, 'display') !== 'none';
        }
        /**
         * @return {?}
         */

      }, {
        key: "buildChildObservable",
        value: function buildChildObservable() {
          var _this39 = this;

          this.zone.runOutsideAngular(function () {
            if (typeof MutationObserver !== 'undefined') {
              _this39.observer = new MutationObserver(function (mutations) {
                /** @type {?} */
                var validatedChanges = function validatedChanges(it) {
                  return it.addedNodes && it.addedNodes.length > 0 || it.removedNodes && it.removedNodes.length > 0;
                }; // update gap styles only for child 'added' or 'removed' events


                if (mutations.some(validatedChanges)) {
                  _this39.observerSubject.next();
                }
              });

              _this39.observer.observe(_this39.nativeElement, {
                childList: true
              });
            }
          });
        }
      }, {
        key: "childrenNodes",
        get: function get() {
          /** @type {?} */
          var obj = this.nativeElement.children;
          /** @type {?} */

          var buffer = []; // iterate backwards ensuring that length is an UInt32

          for (var i = obj.length; i--;) {
            buffer[i] = obj[i];
          }

          return buffer;
        }
      }]);

      return LayoutGapDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);
    /** @nocollapse */


    LayoutGapDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: LayoutGapStyleBuilder,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };

    var DefaultLayoutGapDirective =
    /*#__PURE__*/
    function (_LayoutGapDirective) {
      _inherits(DefaultLayoutGapDirective, _LayoutGapDirective);

      function DefaultLayoutGapDirective() {
        var _this40;

        _classCallCheck(this, DefaultLayoutGapDirective);

        _this40 = _possibleConstructorReturn(this, _getPrototypeOf(DefaultLayoutGapDirective).apply(this, arguments));
        _this40.inputs = inputs$1;
        return _this40;
      }

      return DefaultLayoutGapDirective;
    }(LayoutGapDirective);

    DefaultLayoutGapDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: selector$1,
        inputs: inputs$1
      }]
    }];
    /** @type {?} */

    var layoutGapCacheRowRtl = new Map();
    /** @type {?} */

    var layoutGapCacheColumnRtl = new Map();
    /** @type {?} */

    var layoutGapCacheRowLtr = new Map();
    /** @type {?} */

    var layoutGapCacheColumnLtr = new Map();
    /** @type {?} */

    var GRID_SPECIFIER = ' grid';
    /**
     * @param {?} value
     * @param {?} directionality
     * @return {?}
     */

    function buildGridPadding(value, directionality) {
      /** @type {?} */
      var paddingTop = '0px';
      /** @type {?} */

      var paddingRight = '0px';
      /** @type {?} */

      var paddingBottom = value;
      /** @type {?} */

      var paddingLeft = '0px';

      if (directionality === 'rtl') {
        paddingLeft = value;
      } else {
        paddingRight = value;
      }

      return {
        'padding': "".concat(paddingTop, " ").concat(paddingRight, " ").concat(paddingBottom, " ").concat(paddingLeft)
      };
    }
    /**
     * @param {?} value
     * @param {?} directionality
     * @return {?}
     */


    function buildGridMargin(value, directionality) {
      /** @type {?} */
      var marginTop = '0px';
      /** @type {?} */

      var marginRight = '0px';
      /** @type {?} */

      var marginBottom = '-' + value;
      /** @type {?} */

      var marginLeft = '0px';

      if (directionality === 'rtl') {
        marginLeft = '-' + value;
      } else {
        marginRight = '-' + value;
      }

      return {
        'margin': "".concat(marginTop, " ").concat(marginRight, " ").concat(marginBottom, " ").concat(marginLeft)
      };
    }
    /**
     * @param {?} gapValue
     * @param {?} parent
     * @return {?}
     */


    function buildGapCSS(gapValue, parent) {
      /** @type {?} */
      var key;
      /** @type {?} */

      var margins = Object.assign({}, CLEAR_MARGIN_CSS);

      switch (parent.layout) {
        case 'column':
          key = 'margin-bottom';
          break;

        case 'column-reverse':
          key = 'margin-top';
          break;

        case 'row':
          key = parent.directionality === 'rtl' ? 'margin-left' : 'margin-right';
          break;

        case 'row-reverse':
          key = parent.directionality === 'rtl' ? 'margin-right' : 'margin-left';
          break;

        default:
          key = parent.directionality === 'rtl' ? 'margin-left' : 'margin-right';
          break;
      }

      margins[key] = gapValue;
      return margins;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * Extends an object with the *enumerable* and *own* properties of one or more source objects,
     * similar to Object.assign.
     *
     * @param {?} dest The object which will have properties copied to it.
     * @param {...?} sources The source objects from which properties will be copied.
     * @return {?}
     */


    function extendObject(dest) {
      if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
      }

      for (var _len2 = arguments.length, sources = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        sources[_key2 - 1] = arguments[_key2];
      }

      for (var _i3 = 0, _sources2 = sources; _i3 < _sources2.length; _i3++) {
        var source = _sources2[_i3];

        if (source != null) {
          for (var key in source) {
            if (source.hasOwnProperty(key)) {
              dest[key] = source[key];
            }
          }
        }
      }

      return dest;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */


    var FlexStyleBuilder =
    /*#__PURE__*/
    function (_angular_flex_layout_11) {
      _inherits(FlexStyleBuilder, _angular_flex_layout_11);

      /**
       * @param {?} layoutConfig
       */
      function FlexStyleBuilder(layoutConfig) {
        var _this41;

        _classCallCheck(this, FlexStyleBuilder);

        _this41 = _possibleConstructorReturn(this, _getPrototypeOf(FlexStyleBuilder).call(this));
        _this41.layoutConfig = layoutConfig;
        return _this41;
      }
      /**
       * @param {?} input
       * @param {?} parent
       * @return {?}
       */


      _createClass(FlexStyleBuilder, [{
        key: "buildStyles",
        value: function buildStyles(input, parent) {
          var _input$split = input.split(' '),
              _input$split2 = _toArray(_input$split),
              grow = _input$split2[0],
              shrink = _input$split2[1],
              basisParts = _input$split2.slice(2);
          /** @type {?} */


          var basis = basisParts.join(' ');
          /** @type {?} */

          var direction = parent.direction.indexOf('column') > -1 ? 'column' : 'row';
          /** @type {?} */

          var max = isFlowHorizontal(direction) ? 'max-width' : 'max-height';
          /** @type {?} */

          var min = isFlowHorizontal(direction) ? 'min-width' : 'min-height';
          /** @type {?} */

          var hasCalc = String(basis).indexOf('calc') > -1;
          /** @type {?} */

          var usingCalc = hasCalc || basis === 'auto';
          /** @type {?} */

          var isPercent = String(basis).indexOf('%') > -1 && !hasCalc;
          /** @type {?} */

          var hasUnits = String(basis).indexOf('px') > -1 || String(basis).indexOf('rem') > -1 || String(basis).indexOf('em') > -1 || String(basis).indexOf('vw') > -1 || String(basis).indexOf('vh') > -1;
          /** @type {?} */

          var isValue = hasCalc || hasUnits;
          grow = grow == '0' ? 0 : grow;
          shrink = shrink == '0' ? 0 : shrink;
          /** @type {?} */

          var isFixed = !grow && !shrink;
          /** @type {?} */

          var css = {};
          /** @type {?} */

          var clearStyles = {
            'max-width': null,
            'max-height': null,
            'min-width': null,
            'min-height': null
          };

          switch (basis || '') {
            case '':
              /** @type {?} */
              var useColumnBasisZero = this.layoutConfig.useColumnBasisZero !== false;
              basis = direction === 'row' ? '0%' : useColumnBasisZero ? '0.000000001px' : 'auto';
              break;

            case 'initial': // default

            case 'nogrow':
              grow = 0;
              basis = 'auto';
              break;

            case 'grow':
              basis = '100%';
              break;

            case 'noshrink':
              shrink = 0;
              basis = 'auto';
              break;

            case 'auto':
              break;

            case 'none':
              grow = 0;
              shrink = 0;
              basis = 'auto';
              break;

            default:
              // Defaults to percentage sizing unless `px` is explicitly set
              if (!isValue && !isPercent && !isNaN(
              /** @type {?} */
              basis)) {
                basis = basis + '%';
              } // Fix for issue 280


              if (basis === '0%') {
                isValue = true;
              }

              if (basis === '0px') {
                basis = '0%';
              } // fix issue #5345


              if (hasCalc) {
                css = extendObject(clearStyles, {
                  'flex-grow': grow,
                  'flex-shrink': shrink,
                  'flex-basis': isValue ? basis : '100%'
                });
              } else {
                css = extendObject(clearStyles, {
                  'flex': "".concat(grow, " ").concat(shrink, " ").concat(isValue ? basis : '100%')
                });
              }

              break;
          }

          if (!(css['flex'] || css['flex-grow'])) {
            if (hasCalc) {
              css = extendObject(clearStyles, {
                'flex-grow': grow,
                'flex-shrink': shrink,
                'flex-basis': basis
              });
            } else {
              css = extendObject(clearStyles, {
                'flex': "".concat(grow, " ").concat(shrink, " ").concat(basis)
              });
            }
          } // Fix for issues 277, 534, and 728


          if (basis !== '0%' && basis !== '0px' && basis !== '0.000000001px' && basis !== 'auto') {
            css[min] = isFixed || isValue && grow ? basis : null;
            css[max] = isFixed || !usingCalc && shrink ? basis : null;
          } // Fix for issue 528


          if (!css[min] && !css[max]) {
            if (hasCalc) {
              css = extendObject(clearStyles, {
                'flex-grow': grow,
                'flex-shrink': shrink,
                'flex-basis': basis
              });
            } else {
              css = extendObject(clearStyles, {
                'flex': "".concat(grow, " ").concat(shrink, " ").concat(basis)
              });
            }
          } else {
            // Fix for issue 660
            if (parent.hasWrap) {
              css[hasCalc ? 'flex-basis' : 'flex'] = css[max] ? hasCalc ? css[max] : "".concat(grow, " ").concat(shrink, " ").concat(css[max]) : hasCalc ? css[min] : "".concat(grow, " ").concat(shrink, " ").concat(css[min]);
            }
          }

          return (
            /** @type {?} */
            extendObject(css, {
              'box-sizing': 'border-box'
            })
          );
        }
      }]);

      return FlexStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    FlexStyleBuilder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    FlexStyleBuilder.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_CONFIG"]]
        }]
      }];
    };
    /** @nocollapse */


    FlexStyleBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function FlexStyleBuilder_Factory() {
        return new FlexStyleBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_CONFIG"]));
      },
      token: FlexStyleBuilder,
      providedIn: "root"
    });
    /** @type {?} */

    var inputs$2 = ['fxFlex', 'fxFlex.xs', 'fxFlex.sm', 'fxFlex.md', 'fxFlex.lg', 'fxFlex.xl', 'fxFlex.lt-sm', 'fxFlex.lt-md', 'fxFlex.lt-lg', 'fxFlex.lt-xl', 'fxFlex.gt-xs', 'fxFlex.gt-sm', 'fxFlex.gt-md', 'fxFlex.gt-lg'];
    /** @type {?} */

    var selector$2 = "\n  [fxFlex], [fxFlex.xs], [fxFlex.sm], [fxFlex.md],\n  [fxFlex.lg], [fxFlex.xl], [fxFlex.lt-sm], [fxFlex.lt-md],\n  [fxFlex.lt-lg], [fxFlex.lt-xl], [fxFlex.gt-xs], [fxFlex.gt-sm],\n  [fxFlex.gt-md], [fxFlex.gt-lg]\n";
    /**
     * Directive to control the size of a flex item using flex-basis, flex-grow, and flex-shrink.
     * Corresponds to the css `flex` shorthand property.
     *
     * @see https://css-tricks.com/snippets/css/a-guide-to-flexbox/
     */

    var FlexDirective =
    /*#__PURE__*/
    function (_angular_flex_layout_12) {
      _inherits(FlexDirective, _angular_flex_layout_12);

      /**
       * @param {?} elRef
       * @param {?} styleUtils
       * @param {?} layoutConfig
       * @param {?} styleBuilder
       * @param {?} marshal
       */
      function FlexDirective(elRef, styleUtils, layoutConfig, styleBuilder, marshal) {
        var _this42;

        _classCallCheck(this, FlexDirective);

        _this42 = _possibleConstructorReturn(this, _getPrototypeOf(FlexDirective).call(this, elRef, styleBuilder, styleUtils, marshal));
        _this42.elRef = elRef;
        _this42.styleUtils = styleUtils;
        _this42.layoutConfig = layoutConfig;
        _this42.styleBuilder = styleBuilder;
        _this42.marshal = marshal;
        _this42.DIRECTIVE_KEY = 'flex';
        _this42.direction = '';
        _this42.wrap = false;
        _this42.flexGrow = '1';
        _this42.flexShrink = '1';

        _this42.init();

        if (_this42.parentElement) {
          _this42.marshal.trackValue(_this42.parentElement, 'layout').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this42.destroySubject)).subscribe(_this42.onLayoutChange.bind(_assertThisInitialized(_this42)));
        }

        return _this42;
      }
      /**
       * @return {?}
       */


      _createClass(FlexDirective, [{
        key: "onLayoutChange",

        /**
         * Caches the parent container's 'flex-direction' and updates the element's style.
         * Used as a handler for layout change events from the parent flex container.
         * @param {?} matcher
         * @return {?}
         */
        value: function onLayoutChange(matcher) {
          /** @type {?} */
          var layout = matcher.value;
          /** @type {?} */

          var layoutParts = layout.split(' ');
          this.direction = layoutParts[0];
          this.wrap = layoutParts[1] !== undefined && layoutParts[1] === 'wrap';
          this.triggerUpdate();
        }
        /**
         * Input to this is exclusively the basis input value
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "updateWithValue",
        value: function updateWithValue(value) {
          /** @type {?} */
          var addFlexToParent = this.layoutConfig.addFlexToParent !== false;

          if (!this.direction) {
            this.direction = this.getFlexFlowDirection(
            /** @type {?} */
            this.parentElement, addFlexToParent);
          }
          /** @type {?} */


          var direction = this.direction;
          /** @type {?} */

          var isHorizontal = direction.startsWith('row');
          /** @type {?} */

          var hasWrap = this.wrap;

          if (isHorizontal && hasWrap) {
            this.styleCache = flexRowWrapCache;
          } else if (isHorizontal && !hasWrap) {
            this.styleCache = flexRowCache;
          } else if (!isHorizontal && hasWrap) {
            this.styleCache = flexColumnWrapCache;
          } else if (!isHorizontal && !hasWrap) {
            this.styleCache = flexColumnCache;
          }
          /** @type {?} */


          var basis = String(value).replace(';', '');
          /** @type {?} */

          var parts = Object(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["validateBasis"])(basis, this.flexGrow, this.flexShrink);
          this.addStyles(parts.join(' '), {
            direction: direction,
            hasWrap: hasWrap
          });
        }
        /**
         * Trigger a style reflow, usually based on a shrink/grow input event
         * @return {?}
         */

      }, {
        key: "triggerReflow",
        value: function triggerReflow() {
          /** @type {?} */
          var activatedValue = this.activatedValue;

          if (activatedValue !== undefined) {
            /** @type {?} */
            var parts = Object(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["validateBasis"])(activatedValue, this.flexGrow, this.flexShrink);
            this.marshal.updateElement(this.nativeElement, this.DIRECTIVE_KEY, parts.join(' '));
          }
        }
      }, {
        key: "shrink",
        get: function get() {
          return this.flexShrink;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.flexShrink = value || '1';
          this.triggerReflow();
        }
        /**
         * @return {?}
         */

      }, {
        key: "grow",
        get: function get() {
          return this.flexGrow;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.flexGrow = value || '1';
          this.triggerReflow();
        }
      }]);

      return FlexDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);
    /** @nocollapse */


    FlexDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_CONFIG"]]
        }]
      }, {
        type: FlexStyleBuilder
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };

    FlexDirective.propDecorators = {
      shrink: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['fxShrink']
      }],
      grow: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['fxGrow']
      }]
    };

    var DefaultFlexDirective =
    /*#__PURE__*/
    function (_FlexDirective) {
      _inherits(DefaultFlexDirective, _FlexDirective);

      function DefaultFlexDirective() {
        var _this43;

        _classCallCheck(this, DefaultFlexDirective);

        _this43 = _possibleConstructorReturn(this, _getPrototypeOf(DefaultFlexDirective).apply(this, arguments));
        _this43.inputs = inputs$2;
        return _this43;
      }

      return DefaultFlexDirective;
    }(FlexDirective);

    DefaultFlexDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        inputs: inputs$2,
        selector: selector$2
      }]
    }];
    /** @type {?} */

    var flexRowCache = new Map();
    /** @type {?} */

    var flexColumnCache = new Map();
    /** @type {?} */

    var flexRowWrapCache = new Map();
    /** @type {?} */

    var flexColumnWrapCache = new Map();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    var FlexOrderStyleBuilder =
    /*#__PURE__*/
    function (_angular_flex_layout_13) {
      _inherits(FlexOrderStyleBuilder, _angular_flex_layout_13);

      function FlexOrderStyleBuilder() {
        _classCallCheck(this, FlexOrderStyleBuilder);

        return _possibleConstructorReturn(this, _getPrototypeOf(FlexOrderStyleBuilder).apply(this, arguments));
      }

      _createClass(FlexOrderStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} value
         * @return {?}
         */
        value: function buildStyles(value) {
          return {
            order: value && parseInt(value, 10) || ''
          };
        }
      }]);

      return FlexOrderStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    FlexOrderStyleBuilder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    FlexOrderStyleBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function FlexOrderStyleBuilder_Factory() {
        return new FlexOrderStyleBuilder();
      },
      token: FlexOrderStyleBuilder,
      providedIn: "root"
    });
    /** @type {?} */

    var inputs$3 = ['fxFlexOrder', 'fxFlexOrder.xs', 'fxFlexOrder.sm', 'fxFlexOrder.md', 'fxFlexOrder.lg', 'fxFlexOrder.xl', 'fxFlexOrder.lt-sm', 'fxFlexOrder.lt-md', 'fxFlexOrder.lt-lg', 'fxFlexOrder.lt-xl', 'fxFlexOrder.gt-xs', 'fxFlexOrder.gt-sm', 'fxFlexOrder.gt-md', 'fxFlexOrder.gt-lg'];
    /** @type {?} */

    var selector$3 = "\n  [fxFlexOrder], [fxFlexOrder.xs], [fxFlexOrder.sm], [fxFlexOrder.md],\n  [fxFlexOrder.lg], [fxFlexOrder.xl], [fxFlexOrder.lt-sm], [fxFlexOrder.lt-md],\n  [fxFlexOrder.lt-lg], [fxFlexOrder.lt-xl], [fxFlexOrder.gt-xs], [fxFlexOrder.gt-sm],\n  [fxFlexOrder.gt-md], [fxFlexOrder.gt-lg]\n";
    /**
     * 'flex-order' flexbox styling directive
     * Configures the positional ordering of the element in a sorted layout container
     * @see https://css-tricks.com/almanac/properties/o/order/
     */

    var FlexOrderDirective =
    /*#__PURE__*/
    function (_angular_flex_layout_14) {
      _inherits(FlexOrderDirective, _angular_flex_layout_14);

      /**
       * @param {?} elRef
       * @param {?} styleUtils
       * @param {?} styleBuilder
       * @param {?} marshal
       */
      function FlexOrderDirective(elRef, styleUtils, // NOTE: not actually optional, but we need to force DI without a
      // constructor call
      styleBuilder, marshal) {
        var _this44;

        _classCallCheck(this, FlexOrderDirective);

        _this44 = _possibleConstructorReturn(this, _getPrototypeOf(FlexOrderDirective).call(this, elRef, styleBuilder, styleUtils, marshal));
        _this44.elRef = elRef;
        _this44.styleUtils = styleUtils;
        _this44.styleBuilder = styleBuilder;
        _this44.marshal = marshal;
        _this44.DIRECTIVE_KEY = 'flex-order';
        _this44.styleCache = flexOrderCache;

        _this44.init();

        return _this44;
      }

      return FlexOrderDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);
    /** @nocollapse */


    FlexOrderDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: FlexOrderStyleBuilder,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };
    /** @type {?} */


    var flexOrderCache = new Map();

    var DefaultFlexOrderDirective =
    /*#__PURE__*/
    function (_FlexOrderDirective) {
      _inherits(DefaultFlexOrderDirective, _FlexOrderDirective);

      function DefaultFlexOrderDirective() {
        var _this45;

        _classCallCheck(this, DefaultFlexOrderDirective);

        _this45 = _possibleConstructorReturn(this, _getPrototypeOf(DefaultFlexOrderDirective).apply(this, arguments));
        _this45.inputs = inputs$3;
        return _this45;
      }

      return DefaultFlexOrderDirective;
    }(FlexOrderDirective);

    DefaultFlexOrderDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: selector$3,
        inputs: inputs$3
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    var FlexOffsetStyleBuilder =
    /*#__PURE__*/
    function (_angular_flex_layout_15) {
      _inherits(FlexOffsetStyleBuilder, _angular_flex_layout_15);

      function FlexOffsetStyleBuilder() {
        _classCallCheck(this, FlexOffsetStyleBuilder);

        return _possibleConstructorReturn(this, _getPrototypeOf(FlexOffsetStyleBuilder).apply(this, arguments));
      }

      _createClass(FlexOffsetStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} offset
         * @param {?} parent
         * @return {?}
         */
        value: function buildStyles(offset, parent) {
          if (offset === '') {
            offset = '0';
          }
          /** @type {?} */


          var isPercent = String(offset).indexOf('%') > -1;
          /** @type {?} */

          var isPx = String(offset).indexOf('px') > -1;

          if (!isPx && !isPercent && !isNaN(+offset)) {
            offset = offset + '%';
          }
          /** @type {?} */


          var horizontalLayoutKey = parent.isRtl ? 'margin-right' : 'margin-left';
          /** @type {?} */

          var styles = isFlowHorizontal(parent.layout) ? _defineProperty({}, horizontalLayoutKey, "".concat(offset)) : {
            'margin-top': "".concat(offset)
          };
          return styles;
        }
      }]);

      return FlexOffsetStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    FlexOffsetStyleBuilder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    FlexOffsetStyleBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function FlexOffsetStyleBuilder_Factory() {
        return new FlexOffsetStyleBuilder();
      },
      token: FlexOffsetStyleBuilder,
      providedIn: "root"
    });
    /** @type {?} */

    var inputs$4 = ['fxFlexOffset', 'fxFlexOffset.xs', 'fxFlexOffset.sm', 'fxFlexOffset.md', 'fxFlexOffset.lg', 'fxFlexOffset.xl', 'fxFlexOffset.lt-sm', 'fxFlexOffset.lt-md', 'fxFlexOffset.lt-lg', 'fxFlexOffset.lt-xl', 'fxFlexOffset.gt-xs', 'fxFlexOffset.gt-sm', 'fxFlexOffset.gt-md', 'fxFlexOffset.gt-lg'];
    /** @type {?} */

    var selector$4 = "\n  [fxFlexOffset], [fxFlexOffset.xs], [fxFlexOffset.sm], [fxFlexOffset.md],\n  [fxFlexOffset.lg], [fxFlexOffset.xl], [fxFlexOffset.lt-sm], [fxFlexOffset.lt-md],\n  [fxFlexOffset.lt-lg], [fxFlexOffset.lt-xl], [fxFlexOffset.gt-xs], [fxFlexOffset.gt-sm],\n  [fxFlexOffset.gt-md], [fxFlexOffset.gt-lg]\n";
    /**
     * 'flex-offset' flexbox styling directive
     * Configures the 'margin-left' of the element in a layout container
     */

    var FlexOffsetDirective =
    /*#__PURE__*/
    function (_angular_flex_layout_16) {
      _inherits(FlexOffsetDirective, _angular_flex_layout_16);

      /**
       * @param {?} elRef
       * @param {?} directionality
       * @param {?} styleBuilder
       * @param {?} marshal
       * @param {?} styler
       */
      function FlexOffsetDirective(elRef, directionality, // NOTE: not actually optional, but we need to force DI without a
      // constructor call
      styleBuilder, marshal, styler) {
        var _this46;

        _classCallCheck(this, FlexOffsetDirective);

        _this46 = _possibleConstructorReturn(this, _getPrototypeOf(FlexOffsetDirective).call(this, elRef, styleBuilder, styler, marshal));
        _this46.elRef = elRef;
        _this46.directionality = directionality;
        _this46.styleBuilder = styleBuilder;
        _this46.marshal = marshal;
        _this46.styler = styler;
        _this46.DIRECTIVE_KEY = 'flex-offset';

        _this46.init([_this46.directionality.change]); // Parent DOM `layout-gap` with affect the nested child with `flex-offset`


        if (_this46.parentElement) {
          _this46.marshal.trackValue(_this46.parentElement, 'layout-gap').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this46.destroySubject)).subscribe(_this46.triggerUpdate.bind(_assertThisInitialized(_this46)));
        }

        return _this46;
      }
      /**
       * Using the current fxFlexOffset value, update the inline CSS
       * NOTE: this will assign `margin-left` if the parent flex-direction == 'row',
       *       otherwise `margin-top` is used for the offset.
       * @param {?=} value
       * @return {?}
       */


      _createClass(FlexOffsetDirective, [{
        key: "updateWithValue",
        value: function updateWithValue() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          /** @type {?} */
          var layout = this.getFlexFlowDirection(
          /** @type {?} */
          this.parentElement, true);
          /** @type {?} */

          var isRtl = this.directionality.value === 'rtl';

          if (layout === 'row' && isRtl) {
            this.styleCache = flexOffsetCacheRowRtl;
          } else if (layout === 'row' && !isRtl) {
            this.styleCache = flexOffsetCacheRowLtr;
          } else if (layout === 'column' && isRtl) {
            this.styleCache = flexOffsetCacheColumnRtl;
          } else if (layout === 'column' && !isRtl) {
            this.styleCache = flexOffsetCacheColumnLtr;
          }

          this.addStyles(value + '', {
            layout: layout,
            isRtl: isRtl
          });
        }
      }]);

      return FlexOffsetDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);
    /** @nocollapse */


    FlexOffsetDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"]
      }, {
        type: FlexOffsetStyleBuilder,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }];
    };

    var DefaultFlexOffsetDirective =
    /*#__PURE__*/
    function (_FlexOffsetDirective) {
      _inherits(DefaultFlexOffsetDirective, _FlexOffsetDirective);

      function DefaultFlexOffsetDirective() {
        var _this47;

        _classCallCheck(this, DefaultFlexOffsetDirective);

        _this47 = _possibleConstructorReturn(this, _getPrototypeOf(DefaultFlexOffsetDirective).apply(this, arguments));
        _this47.inputs = inputs$4;
        return _this47;
      }

      return DefaultFlexOffsetDirective;
    }(FlexOffsetDirective);

    DefaultFlexOffsetDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: selector$4,
        inputs: inputs$4
      }]
    }];
    /** @type {?} */

    var flexOffsetCacheRowRtl = new Map();
    /** @type {?} */

    var flexOffsetCacheColumnRtl = new Map();
    /** @type {?} */

    var flexOffsetCacheRowLtr = new Map();
    /** @type {?} */

    var flexOffsetCacheColumnLtr = new Map();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    var FlexAlignStyleBuilder =
    /*#__PURE__*/
    function (_angular_flex_layout_17) {
      _inherits(FlexAlignStyleBuilder, _angular_flex_layout_17);

      function FlexAlignStyleBuilder() {
        _classCallCheck(this, FlexAlignStyleBuilder);

        return _possibleConstructorReturn(this, _getPrototypeOf(FlexAlignStyleBuilder).apply(this, arguments));
      }

      _createClass(FlexAlignStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} input
         * @return {?}
         */
        value: function buildStyles(input) {
          input = input || 'stretch';
          /** @type {?} */

          var styles = {}; // Cross-axis

          switch (input) {
            case 'start':
              styles['align-self'] = 'flex-start';
              break;

            case 'end':
              styles['align-self'] = 'flex-end';
              break;

            default:
              styles['align-self'] = input;
              break;
          }

          return styles;
        }
      }]);

      return FlexAlignStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    FlexAlignStyleBuilder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    FlexAlignStyleBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function FlexAlignStyleBuilder_Factory() {
        return new FlexAlignStyleBuilder();
      },
      token: FlexAlignStyleBuilder,
      providedIn: "root"
    });
    /** @type {?} */

    var inputs$5 = ['fxFlexAlign', 'fxFlexAlign.xs', 'fxFlexAlign.sm', 'fxFlexAlign.md', 'fxFlexAlign.lg', 'fxFlexAlign.xl', 'fxFlexAlign.lt-sm', 'fxFlexAlign.lt-md', 'fxFlexAlign.lt-lg', 'fxFlexAlign.lt-xl', 'fxFlexAlign.gt-xs', 'fxFlexAlign.gt-sm', 'fxFlexAlign.gt-md', 'fxFlexAlign.gt-lg'];
    /** @type {?} */

    var selector$5 = "\n  [fxFlexAlign], [fxFlexAlign.xs], [fxFlexAlign.sm], [fxFlexAlign.md],\n  [fxFlexAlign.lg], [fxFlexAlign.xl], [fxFlexAlign.lt-sm], [fxFlexAlign.lt-md],\n  [fxFlexAlign.lt-lg], [fxFlexAlign.lt-xl], [fxFlexAlign.gt-xs], [fxFlexAlign.gt-sm],\n  [fxFlexAlign.gt-md], [fxFlexAlign.gt-lg]\n";
    /**
     * 'flex-align' flexbox styling directive
     * Allows element-specific overrides for cross-axis alignments in a layout container
     * @see https://css-tricks.com/almanac/properties/a/align-self/
     */

    var FlexAlignDirective =
    /*#__PURE__*/
    function (_angular_flex_layout_18) {
      _inherits(FlexAlignDirective, _angular_flex_layout_18);

      /**
       * @param {?} elRef
       * @param {?} styleUtils
       * @param {?} styleBuilder
       * @param {?} marshal
       */
      function FlexAlignDirective(elRef, styleUtils, // NOTE: not actually optional, but we need to force DI without a
      // constructor call
      styleBuilder, marshal) {
        var _this48;

        _classCallCheck(this, FlexAlignDirective);

        _this48 = _possibleConstructorReturn(this, _getPrototypeOf(FlexAlignDirective).call(this, elRef, styleBuilder, styleUtils, marshal));
        _this48.elRef = elRef;
        _this48.styleUtils = styleUtils;
        _this48.styleBuilder = styleBuilder;
        _this48.marshal = marshal;
        _this48.DIRECTIVE_KEY = 'flex-align';
        _this48.styleCache = flexAlignCache;

        _this48.init();

        return _this48;
      }

      return FlexAlignDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);
    /** @nocollapse */


    FlexAlignDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: FlexAlignStyleBuilder,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };
    /** @type {?} */


    var flexAlignCache = new Map();

    var DefaultFlexAlignDirective =
    /*#__PURE__*/
    function (_FlexAlignDirective) {
      _inherits(DefaultFlexAlignDirective, _FlexAlignDirective);

      function DefaultFlexAlignDirective() {
        var _this49;

        _classCallCheck(this, DefaultFlexAlignDirective);

        _this49 = _possibleConstructorReturn(this, _getPrototypeOf(DefaultFlexAlignDirective).apply(this, arguments));
        _this49.inputs = inputs$5;
        return _this49;
      }

      return DefaultFlexAlignDirective;
    }(FlexAlignDirective);

    DefaultFlexAlignDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: selector$5,
        inputs: inputs$5
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** @type {?} */

    var FLEX_FILL_CSS = {
      'margin': 0,
      'width': '100%',
      'height': '100%',
      'min-width': '100%',
      'min-height': '100%'
    };

    var FlexFillStyleBuilder =
    /*#__PURE__*/
    function (_angular_flex_layout_19) {
      _inherits(FlexFillStyleBuilder, _angular_flex_layout_19);

      function FlexFillStyleBuilder() {
        _classCallCheck(this, FlexFillStyleBuilder);

        return _possibleConstructorReturn(this, _getPrototypeOf(FlexFillStyleBuilder).apply(this, arguments));
      }

      _createClass(FlexFillStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} _input
         * @return {?}
         */
        value: function buildStyles(_input) {
          return FLEX_FILL_CSS;
        }
      }]);

      return FlexFillStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    FlexFillStyleBuilder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    FlexFillStyleBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function FlexFillStyleBuilder_Factory() {
        return new FlexFillStyleBuilder();
      },
      token: FlexFillStyleBuilder,
      providedIn: "root"
    });
    /**
     * 'fxFill' flexbox styling directive
     *  Maximizes width and height of element in a layout container
     *
     *  NOTE: fxFill is NOT responsive API!!
     */

    var FlexFillDirective =
    /*#__PURE__*/
    function (_angular_flex_layout_20) {
      _inherits(FlexFillDirective, _angular_flex_layout_20);

      /**
       * @param {?} elRef
       * @param {?} styleUtils
       * @param {?} styleBuilder
       * @param {?} marshal
       */
      function FlexFillDirective(elRef, styleUtils, styleBuilder, marshal) {
        var _this50;

        _classCallCheck(this, FlexFillDirective);

        _this50 = _possibleConstructorReturn(this, _getPrototypeOf(FlexFillDirective).call(this, elRef, styleBuilder, styleUtils, marshal));
        _this50.elRef = elRef;
        _this50.styleUtils = styleUtils;
        _this50.styleBuilder = styleBuilder;
        _this50.marshal = marshal;
        _this50.styleCache = flexFillCache;

        _this50.addStyles('');

        return _this50;
      }

      return FlexFillDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

    FlexFillDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: "[fxFill], [fxFlexFill]"
      }]
    }];
    /** @nocollapse */

    FlexFillDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: FlexFillStyleBuilder
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };
    /** @type {?} */


    var flexFillCache = new Map();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    var LayoutAlignStyleBuilder =
    /*#__PURE__*/
    function (_angular_flex_layout_21) {
      _inherits(LayoutAlignStyleBuilder, _angular_flex_layout_21);

      function LayoutAlignStyleBuilder() {
        _classCallCheck(this, LayoutAlignStyleBuilder);

        return _possibleConstructorReturn(this, _getPrototypeOf(LayoutAlignStyleBuilder).apply(this, arguments));
      }

      _createClass(LayoutAlignStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} align
         * @param {?} parent
         * @return {?}
         */
        value: function buildStyles(align, parent) {
          /** @type {?} */
          var css = {};

          var _align$split = align.split(' '),
              _align$split2 = _slicedToArray(_align$split, 2),
              mainAxis = _align$split2[0],
              crossAxis = _align$split2[1]; // Main axis


          switch (mainAxis) {
            case 'center':
              css['justify-content'] = 'center';
              break;

            case 'space-around':
              css['justify-content'] = 'space-around';
              break;

            case 'space-between':
              css['justify-content'] = 'space-between';
              break;

            case 'space-evenly':
              css['justify-content'] = 'space-evenly';
              break;

            case 'end':
            case 'flex-end':
              css['justify-content'] = 'flex-end';
              break;

            case 'start':
            case 'flex-start':
            default:
              css['justify-content'] = 'flex-start'; // default main axis

              break;
          } // Cross-axis


          switch (crossAxis) {
            case 'start':
            case 'flex-start':
              css['align-items'] = css['align-content'] = 'flex-start';
              break;

            case 'center':
              css['align-items'] = css['align-content'] = 'center';
              break;

            case 'end':
            case 'flex-end':
              css['align-items'] = css['align-content'] = 'flex-end';
              break;

            case 'space-between':
              css['align-content'] = 'space-between';
              css['align-items'] = 'stretch';
              break;

            case 'space-around':
              css['align-content'] = 'space-around';
              css['align-items'] = 'stretch';
              break;

            case 'baseline':
              css['align-content'] = 'stretch';
              css['align-items'] = 'baseline';
              break;

            case 'stretch':
            default:
              // 'stretch'
              // 'stretch'
              css['align-items'] = css['align-content'] = 'stretch'; // default cross axis

              break;
          }

          return (
            /** @type {?} */
            extendObject(css, {
              'display': 'flex',
              'flex-direction': parent.layout,
              'box-sizing': 'border-box',
              'max-width': crossAxis === 'stretch' ? !isFlowHorizontal(parent.layout) ? '100%' : null : null,
              'max-height': crossAxis === 'stretch' ? isFlowHorizontal(parent.layout) ? '100%' : null : null
            })
          );
        }
      }]);

      return LayoutAlignStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    LayoutAlignStyleBuilder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    LayoutAlignStyleBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function LayoutAlignStyleBuilder_Factory() {
        return new LayoutAlignStyleBuilder();
      },
      token: LayoutAlignStyleBuilder,
      providedIn: "root"
    });
    /** @type {?} */

    var inputs$6 = ['fxLayoutAlign', 'fxLayoutAlign.xs', 'fxLayoutAlign.sm', 'fxLayoutAlign.md', 'fxLayoutAlign.lg', 'fxLayoutAlign.xl', 'fxLayoutAlign.lt-sm', 'fxLayoutAlign.lt-md', 'fxLayoutAlign.lt-lg', 'fxLayoutAlign.lt-xl', 'fxLayoutAlign.gt-xs', 'fxLayoutAlign.gt-sm', 'fxLayoutAlign.gt-md', 'fxLayoutAlign.gt-lg'];
    /** @type {?} */

    var selector$6 = "\n  [fxLayoutAlign], [fxLayoutAlign.xs], [fxLayoutAlign.sm], [fxLayoutAlign.md],\n  [fxLayoutAlign.lg], [fxLayoutAlign.xl], [fxLayoutAlign.lt-sm], [fxLayoutAlign.lt-md],\n  [fxLayoutAlign.lt-lg], [fxLayoutAlign.lt-xl], [fxLayoutAlign.gt-xs], [fxLayoutAlign.gt-sm],\n  [fxLayoutAlign.gt-md], [fxLayoutAlign.gt-lg]\n";
    /**
     * 'layout-align' flexbox styling directive
     *  Defines positioning of child elements along main and cross axis in a layout container
     *  Optional values: {main-axis} values or {main-axis cross-axis} value pairs
     *
     * @see https://css-tricks.com/almanac/properties/j/justify-content/
     * @see https://css-tricks.com/almanac/properties/a/align-items/
     * @see https://css-tricks.com/almanac/properties/a/align-content/
     */

    var LayoutAlignDirective =
    /*#__PURE__*/
    function (_angular_flex_layout_22) {
      _inherits(LayoutAlignDirective, _angular_flex_layout_22);

      /**
       * @param {?} elRef
       * @param {?} styleUtils
       * @param {?} styleBuilder
       * @param {?} marshal
       */
      function LayoutAlignDirective(elRef, styleUtils, // NOTE: not actually optional, but we need to force DI without a
      // constructor call
      styleBuilder, marshal) {
        var _this51;

        _classCallCheck(this, LayoutAlignDirective);

        _this51 = _possibleConstructorReturn(this, _getPrototypeOf(LayoutAlignDirective).call(this, elRef, styleBuilder, styleUtils, marshal));
        _this51.elRef = elRef;
        _this51.styleUtils = styleUtils;
        _this51.styleBuilder = styleBuilder;
        _this51.marshal = marshal;
        _this51.DIRECTIVE_KEY = 'layout-align';
        _this51.layout = 'row';

        _this51.init();

        _this51.marshal.trackValue(_this51.nativeElement, 'layout').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this51.destroySubject)).subscribe(_this51.onLayoutChange.bind(_assertThisInitialized(_this51)));

        return _this51;
      }
      /**
       *
       * @param {?} value
       * @return {?}
       */


      _createClass(LayoutAlignDirective, [{
        key: "updateWithValue",
        value: function updateWithValue(value) {
          /** @type {?} */
          var layout = this.layout || 'row';

          if (layout === 'row') {
            this.styleCache = layoutAlignHorizontalCache;
          } else if (layout === 'row-reverse') {
            this.styleCache = layoutAlignHorizontalRevCache;
          } else if (layout === 'column') {
            this.styleCache = layoutAlignVerticalCache;
          } else if (layout === 'column-reverse') {
            this.styleCache = layoutAlignVerticalRevCache;
          }

          this.addStyles(value, {
            layout: layout
          });
        }
        /**
         * Cache the parent container 'flex-direction' and update the 'flex' styles
         * @param {?} matcher
         * @return {?}
         */

      }, {
        key: "onLayoutChange",
        value: function onLayoutChange(matcher) {
          var _this52 = this;

          /** @type {?} */
          var layout = matcher.value;
          this.layout = layout.split(' ')[0];

          if (!LAYOUT_VALUES.find(function (x) {
            return x === _this52.layout;
          })) {
            this.layout = 'row';
          }

          this.triggerUpdate();
        }
      }]);

      return LayoutAlignDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);
    /** @nocollapse */


    LayoutAlignDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: LayoutAlignStyleBuilder,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };

    var DefaultLayoutAlignDirective =
    /*#__PURE__*/
    function (_LayoutAlignDirective) {
      _inherits(DefaultLayoutAlignDirective, _LayoutAlignDirective);

      function DefaultLayoutAlignDirective() {
        var _this53;

        _classCallCheck(this, DefaultLayoutAlignDirective);

        _this53 = _possibleConstructorReturn(this, _getPrototypeOf(DefaultLayoutAlignDirective).apply(this, arguments));
        _this53.inputs = inputs$6;
        return _this53;
      }

      return DefaultLayoutAlignDirective;
    }(LayoutAlignDirective);

    DefaultLayoutAlignDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: selector$6,
        inputs: inputs$6
      }]
    }];
    /** @type {?} */

    var layoutAlignHorizontalCache = new Map();
    /** @type {?} */

    var layoutAlignVerticalCache = new Map();
    /** @type {?} */

    var layoutAlignHorizontalRevCache = new Map();
    /** @type {?} */

    var layoutAlignVerticalRevCache = new Map();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** @type {?} */

    var ALL_DIRECTIVES = [DefaultLayoutDirective, DefaultLayoutGapDirective, DefaultLayoutAlignDirective, DefaultFlexOrderDirective, DefaultFlexOffsetDirective, FlexFillDirective, DefaultFlexAlignDirective, DefaultFlexDirective];
    /**
     * *****************************************************************
     * Define module for the Flex API
     * *****************************************************************
     */

    var FlexModule = function FlexModule() {
      _classCallCheck(this, FlexModule);
    };

    FlexModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]],
        declarations: [].concat(ALL_DIRECTIVES),
        exports: [].concat(ALL_DIRECTIVES)
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    //# sourceMappingURL=flex.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/flex-layout/esm2015/grid.js":
  /*!***********************************************************!*\
    !*** ./node_modules/@angular/flex-layout/esm2015/grid.js ***!
    \***********************************************************/

  /*! exports provided: GridModule, ɵf2, ɵe2, ɵd2, ɵi2, ɵh2, ɵg2, ɵl2, ɵk2, ɵj2, ɵo2, ɵn2, ɵm2, ɵr2, ɵq2, ɵp2, ɵu2, ɵt2, ɵs2, ɵx2, ɵw2, ɵv2, ɵba2, ɵz2, ɵy2, ɵc2, ɵb2, ɵa2, ɵbd2, ɵbc2, ɵbb2, ɵbg2, ɵbf2, ɵbe2 */

  /***/
  function node_modulesAngularFlexLayoutEsm2015GridJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridModule", function () {
      return GridModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf2", function () {
      return DefaultGridAlignColumnsDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe2", function () {
      return GridAlignColumnsDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd2", function () {
      return GridAlignColumnsStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵi2", function () {
      return DefaultGridAlignRowsDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵh2", function () {
      return GridAlignRowsDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg2", function () {
      return GridAlignRowsStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵl2", function () {
      return DefaultGridAreaDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵk2", function () {
      return GridAreaDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵj2", function () {
      return GridAreaStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵo2", function () {
      return DefaultGridAreasDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵn2", function () {
      return GridAreasDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵm2", function () {
      return GridAreasStyleBuiler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵr2", function () {
      return DefaultGridAutoDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵq2", function () {
      return GridAutoDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵp2", function () {
      return GridAutoStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵu2", function () {
      return DefaultGridColumnDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵt2", function () {
      return GridColumnDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵs2", function () {
      return GridColumnStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵx2", function () {
      return DefaultGridColumnsDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵw2", function () {
      return GridColumnsDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵv2", function () {
      return GridColumnsStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵba2", function () {
      return DefaultGridGapDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵz2", function () {
      return GridGapDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵy2", function () {
      return GridGapStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc2", function () {
      return DefaultGridAlignDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb2", function () {
      return GridAlignDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa2", function () {
      return GridAlignStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbd2", function () {
      return DefaultGridRowDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbc2", function () {
      return GridRowDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbb2", function () {
      return GridRowStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbg2", function () {
      return DefaultGridRowsDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbf2", function () {
      return GridRowsDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbe2", function () {
      return GridRowsStyleBuilder;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** @type {?} */


    var ROW_DEFAULT = 'stretch';
    /** @type {?} */

    var COL_DEFAULT = 'stretch';

    var GridAlignStyleBuilder =
    /*#__PURE__*/
    function (_angular_flex_layout_23) {
      _inherits(GridAlignStyleBuilder, _angular_flex_layout_23);

      function GridAlignStyleBuilder() {
        _classCallCheck(this, GridAlignStyleBuilder);

        return _possibleConstructorReturn(this, _getPrototypeOf(GridAlignStyleBuilder).apply(this, arguments));
      }

      _createClass(GridAlignStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} input
         * @return {?}
         */
        value: function buildStyles(input) {
          return buildCss(input || ROW_DEFAULT);
        }
      }]);

      return GridAlignStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    GridAlignStyleBuilder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    GridAlignStyleBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function GridAlignStyleBuilder_Factory() {
        return new GridAlignStyleBuilder();
      },
      token: GridAlignStyleBuilder,
      providedIn: "root"
    });

    var GridAlignDirective =
    /*#__PURE__*/
    function (_angular_flex_layout_24) {
      _inherits(GridAlignDirective, _angular_flex_layout_24);

      /**
       * @param {?} elementRef
       * @param {?} styleBuilder
       * @param {?} styler
       * @param {?} marshal
       */
      function GridAlignDirective(elementRef, // NOTE: not actually optional, but we need to force DI without a
      // constructor call
      styleBuilder, styler, marshal) {
        var _this54;

        _classCallCheck(this, GridAlignDirective);

        _this54 = _possibleConstructorReturn(this, _getPrototypeOf(GridAlignDirective).call(this, elementRef, styleBuilder, styler, marshal));
        _this54.elementRef = elementRef;
        _this54.styleBuilder = styleBuilder;
        _this54.styler = styler;
        _this54.marshal = marshal;
        _this54.DIRECTIVE_KEY = 'grid-align';
        _this54.styleCache = alignCache;

        _this54.init();

        return _this54;
      }

      return GridAlignDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);
    /** @nocollapse */


    GridAlignDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: GridAlignStyleBuilder,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };
    /** @type {?} */


    var alignCache = new Map();
    /** @type {?} */

    var inputs = ['gdGridAlign', 'gdGridAlign.xs', 'gdGridAlign.sm', 'gdGridAlign.md', 'gdGridAlign.lg', 'gdGridAlign.xl', 'gdGridAlign.lt-sm', 'gdGridAlign.lt-md', 'gdGridAlign.lt-lg', 'gdGridAlign.lt-xl', 'gdGridAlign.gt-xs', 'gdGridAlign.gt-sm', 'gdGridAlign.gt-md', 'gdGridAlign.gt-lg'];
    /** @type {?} */

    var selector = "\n  [gdGridAlign],\n  [gdGridAlign.xs], [gdGridAlign.sm], [gdGridAlign.md], [gdGridAlign.lg],[gdGridAlign.xl],\n  [gdGridAlign.lt-sm], [gdGridAlign.lt-md], [gdGridAlign.lt-lg], [gdGridAlign.lt-xl],\n  [gdGridAlign.gt-xs], [gdGridAlign.gt-sm], [gdGridAlign.gt-md], [gdGridAlign.gt-lg]\n";
    /**
     * 'align' CSS Grid styling directive for grid children
     *  Defines positioning of child elements along row and column axis in a grid container
     *  Optional values: {row-axis} values or {row-axis column-axis} value pairs
     *
     * @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-self
     * @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-self
     */

    var DefaultGridAlignDirective =
    /*#__PURE__*/
    function (_GridAlignDirective) {
      _inherits(DefaultGridAlignDirective, _GridAlignDirective);

      function DefaultGridAlignDirective() {
        var _this55;

        _classCallCheck(this, DefaultGridAlignDirective);

        _this55 = _possibleConstructorReturn(this, _getPrototypeOf(DefaultGridAlignDirective).apply(this, arguments));
        _this55.inputs = inputs;
        return _this55;
      }

      return DefaultGridAlignDirective;
    }(GridAlignDirective);

    DefaultGridAlignDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: selector,
        inputs: inputs
      }]
    }];
    /**
     * @param {?=} align
     * @return {?}
     */

    function buildCss() {
      var align = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      /** @type {?} */
      var css = {};

      var _align$split3 = align.split(' '),
          _align$split4 = _slicedToArray(_align$split3, 2),
          rowAxis = _align$split4[0],
          columnAxis = _align$split4[1]; // Row axis


      switch (rowAxis) {
        case 'end':
          css['justify-self'] = 'end';
          break;

        case 'center':
          css['justify-self'] = 'center';
          break;

        case 'stretch':
          css['justify-self'] = 'stretch';
          break;

        case 'start':
          css['justify-self'] = 'start';
          break;

        default:
          css['justify-self'] = ROW_DEFAULT; // default row axis

          break;
      } // Column axis


      switch (columnAxis) {
        case 'end':
          css['align-self'] = 'end';
          break;

        case 'center':
          css['align-self'] = 'center';
          break;

        case 'stretch':
          css['align-self'] = 'stretch';
          break;

        case 'start':
          css['align-self'] = 'start';
          break;

        default:
          css['align-self'] = COL_DEFAULT; // default column axis

          break;
      }

      return css;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** @type {?} */


    var DEFAULT_MAIN = 'start';
    /** @type {?} */

    var DEFAULT_CROSS = 'stretch';

    var GridAlignColumnsStyleBuilder =
    /*#__PURE__*/
    function (_angular_flex_layout_25) {
      _inherits(GridAlignColumnsStyleBuilder, _angular_flex_layout_25);

      function GridAlignColumnsStyleBuilder() {
        _classCallCheck(this, GridAlignColumnsStyleBuilder);

        return _possibleConstructorReturn(this, _getPrototypeOf(GridAlignColumnsStyleBuilder).apply(this, arguments));
      }

      _createClass(GridAlignColumnsStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} input
         * @param {?} parent
         * @return {?}
         */
        value: function buildStyles(input, parent) {
          return buildCss$1(input || "".concat(DEFAULT_MAIN, " ").concat(DEFAULT_CROSS), parent.inline);
        }
      }]);

      return GridAlignColumnsStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    GridAlignColumnsStyleBuilder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    GridAlignColumnsStyleBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function GridAlignColumnsStyleBuilder_Factory() {
        return new GridAlignColumnsStyleBuilder();
      },
      token: GridAlignColumnsStyleBuilder,
      providedIn: "root"
    });

    var GridAlignColumnsDirective =
    /*#__PURE__*/
    function (_angular_flex_layout_26) {
      _inherits(GridAlignColumnsDirective, _angular_flex_layout_26);

      /**
       * @param {?} elementRef
       * @param {?} styleBuilder
       * @param {?} styler
       * @param {?} marshal
       */
      function GridAlignColumnsDirective(elementRef, // NOTE: not actually optional, but we need to force DI without a
      // constructor call
      styleBuilder, styler, marshal) {
        var _this56;

        _classCallCheck(this, GridAlignColumnsDirective);

        _this56 = _possibleConstructorReturn(this, _getPrototypeOf(GridAlignColumnsDirective).call(this, elementRef, styleBuilder, styler, marshal));
        _this56.elementRef = elementRef;
        _this56.styleBuilder = styleBuilder;
        _this56.styler = styler;
        _this56.marshal = marshal;
        _this56.DIRECTIVE_KEY = 'grid-align-columns';
        _this56._inline = false;

        _this56.init();

        return _this56;
      }
      /**
       * @return {?}
       */


      _createClass(GridAlignColumnsDirective, [{
        key: "updateWithValue",

        /**
         * @param {?} value
         * @return {?}
         */
        value: function updateWithValue(value) {
          this.styleCache = this.inline ? alignColumnsInlineCache : alignColumnsCache;
          this.addStyles(value, {
            inline: this.inline
          });
        }
      }, {
        key: "inline",
        get: function get() {
          return this._inline;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
        }
      }]);

      return GridAlignColumnsDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);
    /** @nocollapse */


    GridAlignColumnsDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: GridAlignColumnsStyleBuilder,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };

    GridAlignColumnsDirective.propDecorators = {
      inline: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['gdInline']
      }]
    };
    /** @type {?} */

    var alignColumnsCache = new Map();
    /** @type {?} */

    var alignColumnsInlineCache = new Map();
    /** @type {?} */

    var inputs$1 = ['gdAlignColumns', 'gdAlignColumns.xs', 'gdAlignColumns.sm', 'gdAlignColumns.md', 'gdAlignColumns.lg', 'gdAlignColumns.xl', 'gdAlignColumns.lt-sm', 'gdAlignColumns.lt-md', 'gdAlignColumns.lt-lg', 'gdAlignColumns.lt-xl', 'gdAlignColumns.gt-xs', 'gdAlignColumns.gt-sm', 'gdAlignColumns.gt-md', 'gdAlignColumns.gt-lg'];
    /** @type {?} */

    var selector$1 = "\n  [gdAlignColumns],\n  [gdAlignColumns.xs], [gdAlignColumns.sm], [gdAlignColumns.md],\n  [gdAlignColumns.lg], [gdAlignColumns.xl], [gdAlignColumns.lt-sm],\n  [gdAlignColumns.lt-md], [gdAlignColumns.lt-lg], [gdAlignColumns.lt-xl],\n  [gdAlignColumns.gt-xs], [gdAlignColumns.gt-sm], [gdAlignColumns.gt-md],\n  [gdAlignColumns.gt-lg]\n";
    /**
     * 'column alignment' CSS Grid styling directive
     * Configures the alignment in the column direction
     * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-19
     * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-21
     */

    var DefaultGridAlignColumnsDirective =
    /*#__PURE__*/
    function (_GridAlignColumnsDire) {
      _inherits(DefaultGridAlignColumnsDirective, _GridAlignColumnsDire);

      function DefaultGridAlignColumnsDirective() {
        var _this57;

        _classCallCheck(this, DefaultGridAlignColumnsDirective);

        _this57 = _possibleConstructorReturn(this, _getPrototypeOf(DefaultGridAlignColumnsDirective).apply(this, arguments));
        _this57.inputs = inputs$1;
        return _this57;
      }

      return DefaultGridAlignColumnsDirective;
    }(GridAlignColumnsDirective);

    DefaultGridAlignColumnsDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: selector$1,
        inputs: inputs$1
      }]
    }];
    /**
     * @param {?} align
     * @param {?} inline
     * @return {?}
     */

    function buildCss$1(align, inline) {
      /** @type {?} */
      var css = {};

      var _align$split5 = align.split(' '),
          _align$split6 = _slicedToArray(_align$split5, 2),
          mainAxis = _align$split6[0],
          crossAxis = _align$split6[1]; // Main axis


      switch (mainAxis) {
        case 'center':
          css['align-content'] = 'center';
          break;

        case 'space-around':
          css['align-content'] = 'space-around';
          break;

        case 'space-between':
          css['align-content'] = 'space-between';
          break;

        case 'space-evenly':
          css['align-content'] = 'space-evenly';
          break;

        case 'end':
          css['align-content'] = 'end';
          break;

        case 'start':
          css['align-content'] = 'start';
          break;

        case 'stretch':
          css['align-content'] = 'stretch';
          break;

        default:
          css['align-content'] = DEFAULT_MAIN; // default main axis

          break;
      } // Cross-axis


      switch (crossAxis) {
        case 'start':
          css['align-items'] = 'start';
          break;

        case 'center':
          css['align-items'] = 'center';
          break;

        case 'end':
          css['align-items'] = 'end';
          break;

        case 'stretch':
          css['align-items'] = 'stretch';
          break;

        default:
          // 'stretch'
          // 'stretch'
          css['align-items'] = DEFAULT_CROSS; // default cross axis

          break;
      }

      css['display'] = inline ? 'inline-grid' : 'grid';
      return css;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** @type {?} */


    var DEFAULT_MAIN$1 = 'start';
    /** @type {?} */

    var DEFAULT_CROSS$1 = 'stretch';

    var GridAlignRowsStyleBuilder =
    /*#__PURE__*/
    function (_angular_flex_layout_27) {
      _inherits(GridAlignRowsStyleBuilder, _angular_flex_layout_27);

      function GridAlignRowsStyleBuilder() {
        _classCallCheck(this, GridAlignRowsStyleBuilder);

        return _possibleConstructorReturn(this, _getPrototypeOf(GridAlignRowsStyleBuilder).apply(this, arguments));
      }

      _createClass(GridAlignRowsStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} input
         * @param {?} parent
         * @return {?}
         */
        value: function buildStyles(input, parent) {
          return buildCss$2(input || "".concat(DEFAULT_MAIN$1, " ").concat(DEFAULT_CROSS$1), parent.inline);
        }
      }]);

      return GridAlignRowsStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    GridAlignRowsStyleBuilder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    GridAlignRowsStyleBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function GridAlignRowsStyleBuilder_Factory() {
        return new GridAlignRowsStyleBuilder();
      },
      token: GridAlignRowsStyleBuilder,
      providedIn: "root"
    });

    var GridAlignRowsDirective =
    /*#__PURE__*/
    function (_angular_flex_layout_28) {
      _inherits(GridAlignRowsDirective, _angular_flex_layout_28);

      /**
       * @param {?} elementRef
       * @param {?} styleBuilder
       * @param {?} styler
       * @param {?} marshal
       */
      function GridAlignRowsDirective(elementRef, // NOTE: not actually optional, but we need to force DI without a
      // constructor call
      styleBuilder, styler, marshal) {
        var _this58;

        _classCallCheck(this, GridAlignRowsDirective);

        _this58 = _possibleConstructorReturn(this, _getPrototypeOf(GridAlignRowsDirective).call(this, elementRef, styleBuilder, styler, marshal));
        _this58.elementRef = elementRef;
        _this58.styleBuilder = styleBuilder;
        _this58.styler = styler;
        _this58.marshal = marshal;
        _this58.DIRECTIVE_KEY = 'grid-align-rows';
        _this58._inline = false;

        _this58.init();

        return _this58;
      }
      /**
       * @return {?}
       */


      _createClass(GridAlignRowsDirective, [{
        key: "updateWithValue",

        /**
         * @param {?} value
         * @return {?}
         */
        value: function updateWithValue(value) {
          this.styleCache = this.inline ? alignRowsInlineCache : alignRowsCache;
          this.addStyles(value, {
            inline: this.inline
          });
        }
      }, {
        key: "inline",
        get: function get() {
          return this._inline;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
        }
      }]);

      return GridAlignRowsDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);
    /** @nocollapse */


    GridAlignRowsDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: GridAlignRowsStyleBuilder,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };

    GridAlignRowsDirective.propDecorators = {
      inline: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['gdInline']
      }]
    };
    /** @type {?} */

    var alignRowsCache = new Map();
    /** @type {?} */

    var alignRowsInlineCache = new Map();
    /** @type {?} */

    var inputs$2 = ['gdAlignRows', 'gdAlignRows.xs', 'gdAlignRows.sm', 'gdAlignRows.md', 'gdAlignRows.lg', 'gdAlignRows.xl', 'gdAlignRows.lt-sm', 'gdAlignRows.lt-md', 'gdAlignRows.lt-lg', 'gdAlignRows.lt-xl', 'gdAlignRows.gt-xs', 'gdAlignRows.gt-sm', 'gdAlignRows.gt-md', 'gdAlignRows.gt-lg'];
    /** @type {?} */

    var selector$2 = "\n  [gdAlignRows],\n  [gdAlignRows.xs], [gdAlignRows.sm], [gdAlignRows.md],\n  [gdAlignRows.lg], [gdAlignRows.xl], [gdAlignRows.lt-sm],\n  [gdAlignRows.lt-md], [gdAlignRows.lt-lg], [gdAlignRows.lt-xl],\n  [gdAlignRows.gt-xs], [gdAlignRows.gt-sm], [gdAlignRows.gt-md],\n  [gdAlignRows.gt-lg]\n";
    /**
     * 'row alignment' CSS Grid styling directive
     * Configures the alignment in the row direction
     * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-18
     * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-20
     */

    var DefaultGridAlignRowsDirective =
    /*#__PURE__*/
    function (_GridAlignRowsDirecti) {
      _inherits(DefaultGridAlignRowsDirective, _GridAlignRowsDirecti);

      function DefaultGridAlignRowsDirective() {
        var _this59;

        _classCallCheck(this, DefaultGridAlignRowsDirective);

        _this59 = _possibleConstructorReturn(this, _getPrototypeOf(DefaultGridAlignRowsDirective).apply(this, arguments));
        _this59.inputs = inputs$2;
        return _this59;
      }

      return DefaultGridAlignRowsDirective;
    }(GridAlignRowsDirective);

    DefaultGridAlignRowsDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: selector$2,
        inputs: inputs$2
      }]
    }];
    /**
     * @param {?} align
     * @param {?} inline
     * @return {?}
     */

    function buildCss$2(align, inline) {
      /** @type {?} */
      var css = {};

      var _align$split7 = align.split(' '),
          _align$split8 = _slicedToArray(_align$split7, 2),
          mainAxis = _align$split8[0],
          crossAxis = _align$split8[1]; // Main axis


      switch (mainAxis) {
        case 'center':
        case 'space-around':
        case 'space-between':
        case 'space-evenly':
        case 'end':
        case 'start':
        case 'stretch':
          css['justify-content'] = mainAxis;
          break;

        default:
          css['justify-content'] = DEFAULT_MAIN$1; // default main axis

          break;
      } // Cross-axis


      switch (crossAxis) {
        case 'start':
        case 'center':
        case 'end':
        case 'stretch':
          css['justify-items'] = crossAxis;
          break;

        default:
          // 'stretch'
          // 'stretch'
          css['justify-items'] = DEFAULT_CROSS$1; // default cross axis

          break;
      }

      css['display'] = inline ? 'inline-grid' : 'grid';
      return css;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** @type {?} */


    var DEFAULT_VALUE = 'auto';

    var GridAreaStyleBuilder =
    /*#__PURE__*/
    function (_angular_flex_layout_29) {
      _inherits(GridAreaStyleBuilder, _angular_flex_layout_29);

      function GridAreaStyleBuilder() {
        _classCallCheck(this, GridAreaStyleBuilder);

        return _possibleConstructorReturn(this, _getPrototypeOf(GridAreaStyleBuilder).apply(this, arguments));
      }

      _createClass(GridAreaStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} input
         * @return {?}
         */
        value: function buildStyles(input) {
          return {
            'grid-area': input || DEFAULT_VALUE
          };
        }
      }]);

      return GridAreaStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    GridAreaStyleBuilder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    GridAreaStyleBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function GridAreaStyleBuilder_Factory() {
        return new GridAreaStyleBuilder();
      },
      token: GridAreaStyleBuilder,
      providedIn: "root"
    });

    var GridAreaDirective =
    /*#__PURE__*/
    function (_angular_flex_layout_30) {
      _inherits(GridAreaDirective, _angular_flex_layout_30);

      /**
       * @param {?} elRef
       * @param {?} styleUtils
       * @param {?} styleBuilder
       * @param {?} marshal
       */
      function GridAreaDirective(elRef, styleUtils, // NOTE: not actually optional, but we need to force DI without a
      // constructor call
      styleBuilder, marshal) {
        var _this60;

        _classCallCheck(this, GridAreaDirective);

        _this60 = _possibleConstructorReturn(this, _getPrototypeOf(GridAreaDirective).call(this, elRef, styleBuilder, styleUtils, marshal));
        _this60.elRef = elRef;
        _this60.styleUtils = styleUtils;
        _this60.styleBuilder = styleBuilder;
        _this60.marshal = marshal;
        _this60.DIRECTIVE_KEY = 'grid-area';
        _this60.styleCache = gridAreaCache;

        _this60.init();

        return _this60;
      }

      return GridAreaDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);
    /** @nocollapse */


    GridAreaDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: GridAreaStyleBuilder,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };
    /** @type {?} */


    var gridAreaCache = new Map();
    /** @type {?} */

    var inputs$3 = ['gdArea', 'gdArea.xs', 'gdArea.sm', 'gdArea.md', 'gdArea.lg', 'gdArea.xl', 'gdArea.lt-sm', 'gdArea.lt-md', 'gdArea.lt-lg', 'gdArea.lt-xl', 'gdArea.gt-xs', 'gdArea.gt-sm', 'gdArea.gt-md', 'gdArea.gt-lg'];
    /** @type {?} */

    var selector$3 = "\n  [gdArea],\n  [gdArea.xs], [gdArea.sm], [gdArea.md], [gdArea.lg], [gdArea.xl],\n  [gdArea.lt-sm], [gdArea.lt-md], [gdArea.lt-lg], [gdArea.lt-xl],\n  [gdArea.gt-xs], [gdArea.gt-sm], [gdArea.gt-md], [gdArea.gt-lg]\n";
    /**
     * 'grid-area' CSS Grid styling directive
     * Configures the name or position of an element within the grid
     * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-27
     */

    var DefaultGridAreaDirective =
    /*#__PURE__*/
    function (_GridAreaDirective) {
      _inherits(DefaultGridAreaDirective, _GridAreaDirective);

      function DefaultGridAreaDirective() {
        var _this61;

        _classCallCheck(this, DefaultGridAreaDirective);

        _this61 = _possibleConstructorReturn(this, _getPrototypeOf(DefaultGridAreaDirective).apply(this, arguments));
        _this61.inputs = inputs$3;
        return _this61;
      }

      return DefaultGridAreaDirective;
    }(GridAreaDirective);

    DefaultGridAreaDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: selector$3,
        inputs: inputs$3
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** @type {?} */

    var DEFAULT_VALUE$1 = 'none';
    /** @type {?} */

    var DELIMETER = '|';

    var GridAreasStyleBuiler =
    /*#__PURE__*/
    function (_angular_flex_layout_31) {
      _inherits(GridAreasStyleBuiler, _angular_flex_layout_31);

      function GridAreasStyleBuiler() {
        _classCallCheck(this, GridAreasStyleBuiler);

        return _possibleConstructorReturn(this, _getPrototypeOf(GridAreasStyleBuiler).apply(this, arguments));
      }

      _createClass(GridAreasStyleBuiler, [{
        key: "buildStyles",

        /**
         * @param {?} input
         * @param {?} parent
         * @return {?}
         */
        value: function buildStyles(input, parent) {
          /** @type {?} */
          var areas = (input || DEFAULT_VALUE$1).split(DELIMETER).map(function (v) {
            return "\"".concat(v.trim(), "\"");
          });
          return {
            'display': parent.inline ? 'inline-grid' : 'grid',
            'grid-template-areas': areas.join(' ')
          };
        }
      }]);

      return GridAreasStyleBuiler;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    GridAreasStyleBuiler.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    GridAreasStyleBuiler.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function GridAreasStyleBuiler_Factory() {
        return new GridAreasStyleBuiler();
      },
      token: GridAreasStyleBuiler,
      providedIn: "root"
    });

    var GridAreasDirective =
    /*#__PURE__*/
    function (_angular_flex_layout_32) {
      _inherits(GridAreasDirective, _angular_flex_layout_32);

      /**
       * @param {?} elRef
       * @param {?} styleUtils
       * @param {?} styleBuilder
       * @param {?} marshal
       */
      function GridAreasDirective(elRef, styleUtils, // NOTE: not actually optional, but we need to force DI without a
      // constructor call
      styleBuilder, marshal) {
        var _this62;

        _classCallCheck(this, GridAreasDirective);

        _this62 = _possibleConstructorReturn(this, _getPrototypeOf(GridAreasDirective).call(this, elRef, styleBuilder, styleUtils, marshal));
        _this62.elRef = elRef;
        _this62.styleUtils = styleUtils;
        _this62.styleBuilder = styleBuilder;
        _this62.marshal = marshal;
        _this62.DIRECTIVE_KEY = 'grid-areas';
        _this62._inline = false;

        _this62.init();

        return _this62;
      }
      /**
       * @return {?}
       */


      _createClass(GridAreasDirective, [{
        key: "updateWithValue",

        /**
         * @param {?} value
         * @return {?}
         */
        value: function updateWithValue(value) {
          this.styleCache = this.inline ? areasInlineCache : areasCache;
          this.addStyles(value, {
            inline: this.inline
          });
        }
      }, {
        key: "inline",
        get: function get() {
          return this._inline;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
        }
      }]);

      return GridAreasDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);
    /** @nocollapse */


    GridAreasDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: GridAreasStyleBuiler,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };

    GridAreasDirective.propDecorators = {
      inline: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['gdInline']
      }]
    };
    /** @type {?} */

    var areasCache = new Map();
    /** @type {?} */

    var areasInlineCache = new Map();
    /** @type {?} */

    var inputs$4 = ['gdAreas', 'gdAreas.xs', 'gdAreas.sm', 'gdAreas.md', 'gdAreas.lg', 'gdAreas.xl', 'gdAreas.lt-sm', 'gdAreas.lt-md', 'gdAreas.lt-lg', 'gdAreas.lt-xl', 'gdAreas.gt-xs', 'gdAreas.gt-sm', 'gdAreas.gt-md', 'gdAreas.gt-lg'];
    /** @type {?} */

    var selector$4 = "\n  [gdAreas],\n  [gdAreas.xs], [gdAreas.sm], [gdAreas.md], [gdAreas.lg], [gdAreas.xl],\n  [gdAreas.lt-sm], [gdAreas.lt-md], [gdAreas.lt-lg], [gdAreas.lt-xl],\n  [gdAreas.gt-xs], [gdAreas.gt-sm], [gdAreas.gt-md], [gdAreas.gt-lg]\n";
    /**
     * 'grid-template-areas' CSS Grid styling directive
     * Configures the names of elements within the grid
     * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-14
     */

    var DefaultGridAreasDirective =
    /*#__PURE__*/
    function (_GridAreasDirective) {
      _inherits(DefaultGridAreasDirective, _GridAreasDirective);

      function DefaultGridAreasDirective() {
        var _this63;

        _classCallCheck(this, DefaultGridAreasDirective);

        _this63 = _possibleConstructorReturn(this, _getPrototypeOf(DefaultGridAreasDirective).apply(this, arguments));
        _this63.inputs = inputs$4;
        return _this63;
      }

      return DefaultGridAreasDirective;
    }(GridAreasDirective);

    DefaultGridAreasDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: selector$4,
        inputs: inputs$4
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** @type {?} */

    var DEFAULT_VALUE$2 = 'initial';

    var GridAutoStyleBuilder =
    /*#__PURE__*/
    function (_angular_flex_layout_33) {
      _inherits(GridAutoStyleBuilder, _angular_flex_layout_33);

      function GridAutoStyleBuilder() {
        _classCallCheck(this, GridAutoStyleBuilder);

        return _possibleConstructorReturn(this, _getPrototypeOf(GridAutoStyleBuilder).apply(this, arguments));
      }

      _createClass(GridAutoStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} input
         * @param {?} parent
         * @return {?}
         */
        value: function buildStyles(input, parent) {
          var _split = (input || DEFAULT_VALUE$2).split(' '),
              _split2 = _slicedToArray(_split, 2),
              direction = _split2[0],
              dense = _split2[1];

          if (direction !== 'column' && direction !== 'row' && direction !== 'dense') {
            direction = 'row';
          }

          dense = dense === 'dense' && direction !== 'dense' ? ' dense' : '';
          return {
            'display': parent.inline ? 'inline-grid' : 'grid',
            'grid-auto-flow': direction + dense
          };
        }
      }]);

      return GridAutoStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    GridAutoStyleBuilder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    GridAutoStyleBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function GridAutoStyleBuilder_Factory() {
        return new GridAutoStyleBuilder();
      },
      token: GridAutoStyleBuilder,
      providedIn: "root"
    });

    var GridAutoDirective =
    /*#__PURE__*/
    function (_angular_flex_layout_34) {
      _inherits(GridAutoDirective, _angular_flex_layout_34);

      /**
       * @param {?} elementRef
       * @param {?} styleBuilder
       * @param {?} styler
       * @param {?} marshal
       */
      function GridAutoDirective(elementRef, // NOTE: not actually optional, but we need to force DI without a
      // constructor call
      styleBuilder, styler, marshal) {
        var _this64;

        _classCallCheck(this, GridAutoDirective);

        _this64 = _possibleConstructorReturn(this, _getPrototypeOf(GridAutoDirective).call(this, elementRef, styleBuilder, styler, marshal));
        _this64.elementRef = elementRef;
        _this64.styleBuilder = styleBuilder;
        _this64.styler = styler;
        _this64.marshal = marshal;
        _this64._inline = false;
        _this64.DIRECTIVE_KEY = 'grid-auto';

        _this64.init();

        return _this64;
      }
      /**
       * @return {?}
       */


      _createClass(GridAutoDirective, [{
        key: "updateWithValue",

        /**
         * @param {?} value
         * @return {?}
         */
        value: function updateWithValue(value) {
          this.styleCache = this.inline ? autoInlineCache : autoCache;
          this.addStyles(value, {
            inline: this.inline
          });
        }
      }, {
        key: "inline",
        get: function get() {
          return this._inline;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
        }
      }]);

      return GridAutoDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);
    /** @nocollapse */


    GridAutoDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: GridAutoStyleBuilder,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };

    GridAutoDirective.propDecorators = {
      inline: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['gdInline']
      }]
    };
    /** @type {?} */

    var autoCache = new Map();
    /** @type {?} */

    var autoInlineCache = new Map();
    /** @type {?} */

    var inputs$5 = ['gdAuto', 'gdAuto.xs', 'gdAuto.sm', 'gdAuto.md', 'gdAuto.lg', 'gdAuto.xl', 'gdAuto.lt-sm', 'gdAuto.lt-md', 'gdAuto.lt-lg', 'gdAuto.lt-xl', 'gdAuto.gt-xs', 'gdAuto.gt-sm', 'gdAuto.gt-md', 'gdAuto.gt-lg'];
    /** @type {?} */

    var selector$5 = "\n  [gdAuto],\n  [gdAuto.xs], [gdAuto.sm], [gdAuto.md], [gdAuto.lg], [gdAuto.xl],\n  [gdAuto.lt-sm], [gdAuto.lt-md], [gdAuto.lt-lg], [gdAuto.lt-xl],\n  [gdAuto.gt-xs], [gdAuto.gt-sm], [gdAuto.gt-md], [gdAuto.gt-lg]\n";
    /**
     * 'grid-auto-flow' CSS Grid styling directive
     * Configures the auto placement algorithm for the grid
     * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-23
     */

    var DefaultGridAutoDirective =
    /*#__PURE__*/
    function (_GridAutoDirective) {
      _inherits(DefaultGridAutoDirective, _GridAutoDirective);

      function DefaultGridAutoDirective() {
        var _this65;

        _classCallCheck(this, DefaultGridAutoDirective);

        _this65 = _possibleConstructorReturn(this, _getPrototypeOf(DefaultGridAutoDirective).apply(this, arguments));
        _this65.inputs = inputs$5;
        return _this65;
      }

      return DefaultGridAutoDirective;
    }(GridAutoDirective);

    DefaultGridAutoDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: selector$5,
        inputs: inputs$5
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** @type {?} */

    var DEFAULT_VALUE$3 = 'auto';

    var GridColumnStyleBuilder =
    /*#__PURE__*/
    function (_angular_flex_layout_35) {
      _inherits(GridColumnStyleBuilder, _angular_flex_layout_35);

      function GridColumnStyleBuilder() {
        _classCallCheck(this, GridColumnStyleBuilder);

        return _possibleConstructorReturn(this, _getPrototypeOf(GridColumnStyleBuilder).apply(this, arguments));
      }

      _createClass(GridColumnStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} input
         * @return {?}
         */
        value: function buildStyles(input) {
          return {
            'grid-column': input || DEFAULT_VALUE$3
          };
        }
      }]);

      return GridColumnStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    GridColumnStyleBuilder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    GridColumnStyleBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function GridColumnStyleBuilder_Factory() {
        return new GridColumnStyleBuilder();
      },
      token: GridColumnStyleBuilder,
      providedIn: "root"
    });

    var GridColumnDirective =
    /*#__PURE__*/
    function (_angular_flex_layout_36) {
      _inherits(GridColumnDirective, _angular_flex_layout_36);

      /**
       * @param {?} elementRef
       * @param {?} styleBuilder
       * @param {?} styler
       * @param {?} marshal
       */
      function GridColumnDirective(elementRef, // NOTE: not actually optional, but we need to force DI without a
      // constructor call
      styleBuilder, styler, marshal) {
        var _this66;

        _classCallCheck(this, GridColumnDirective);

        _this66 = _possibleConstructorReturn(this, _getPrototypeOf(GridColumnDirective).call(this, elementRef, styleBuilder, styler, marshal));
        _this66.elementRef = elementRef;
        _this66.styleBuilder = styleBuilder;
        _this66.styler = styler;
        _this66.marshal = marshal;
        _this66.DIRECTIVE_KEY = 'grid-column';
        _this66.styleCache = columnCache;

        _this66.init();

        return _this66;
      }

      return GridColumnDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);
    /** @nocollapse */


    GridColumnDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: GridColumnStyleBuilder,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };
    /** @type {?} */


    var columnCache = new Map();
    /** @type {?} */

    var inputs$6 = ['gdColumn', 'gdColumn.xs', 'gdColumn.sm', 'gdColumn.md', 'gdColumn.lg', 'gdColumn.xl', 'gdColumn.lt-sm', 'gdColumn.lt-md', 'gdColumn.lt-lg', 'gdColumn.lt-xl', 'gdColumn.gt-xs', 'gdColumn.gt-sm', 'gdColumn.gt-md', 'gdColumn.gt-lg'];
    /** @type {?} */

    var selector$6 = "\n  [gdColumn],\n  [gdColumn.xs], [gdColumn.sm], [gdColumn.md], [gdColumn.lg], [gdColumn.xl],\n  [gdColumn.lt-sm], [gdColumn.lt-md], [gdColumn.lt-lg], [gdColumn.lt-xl],\n  [gdColumn.gt-xs], [gdColumn.gt-sm], [gdColumn.gt-md], [gdColumn.gt-lg]\n";
    /**
     * 'grid-column' CSS Grid styling directive
     * Configures the name or position of an element within the grid
     * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
     */

    var DefaultGridColumnDirective =
    /*#__PURE__*/
    function (_GridColumnDirective) {
      _inherits(DefaultGridColumnDirective, _GridColumnDirective);

      function DefaultGridColumnDirective() {
        var _this67;

        _classCallCheck(this, DefaultGridColumnDirective);

        _this67 = _possibleConstructorReturn(this, _getPrototypeOf(DefaultGridColumnDirective).apply(this, arguments));
        _this67.inputs = inputs$6;
        return _this67;
      }

      return DefaultGridColumnDirective;
    }(GridColumnDirective);

    DefaultGridColumnDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: selector$6,
        inputs: inputs$6
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** @type {?} */

    var DEFAULT_VALUE$4 = 'none';
    /** @type {?} */

    var AUTO_SPECIFIER = '!';

    var GridColumnsStyleBuilder =
    /*#__PURE__*/
    function (_angular_flex_layout_37) {
      _inherits(GridColumnsStyleBuilder, _angular_flex_layout_37);

      function GridColumnsStyleBuilder() {
        _classCallCheck(this, GridColumnsStyleBuilder);

        return _possibleConstructorReturn(this, _getPrototypeOf(GridColumnsStyleBuilder).apply(this, arguments));
      }

      _createClass(GridColumnsStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} input
         * @param {?} parent
         * @return {?}
         */
        value: function buildStyles(input, parent) {
          input = input || DEFAULT_VALUE$4;
          /** @type {?} */

          var auto = false;

          if (input.endsWith(AUTO_SPECIFIER)) {
            input = input.substring(0, input.indexOf(AUTO_SPECIFIER));
            auto = true;
          }
          /** @type {?} */


          var css = {
            'display': parent.inline ? 'inline-grid' : 'grid',
            'grid-auto-columns': '',
            'grid-template-columns': ''
          };
          /** @type {?} */

          var key = auto ? 'grid-auto-columns' : 'grid-template-columns';
          css[key] = input;
          return css;
        }
      }]);

      return GridColumnsStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    GridColumnsStyleBuilder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    GridColumnsStyleBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function GridColumnsStyleBuilder_Factory() {
        return new GridColumnsStyleBuilder();
      },
      token: GridColumnsStyleBuilder,
      providedIn: "root"
    });

    var GridColumnsDirective =
    /*#__PURE__*/
    function (_angular_flex_layout_38) {
      _inherits(GridColumnsDirective, _angular_flex_layout_38);

      /**
       * @param {?} elementRef
       * @param {?} styleBuilder
       * @param {?} styler
       * @param {?} marshal
       */
      function GridColumnsDirective(elementRef, // NOTE: not actually optional, but we need to force DI without a
      // constructor call
      styleBuilder, styler, marshal) {
        var _this68;

        _classCallCheck(this, GridColumnsDirective);

        _this68 = _possibleConstructorReturn(this, _getPrototypeOf(GridColumnsDirective).call(this, elementRef, styleBuilder, styler, marshal));
        _this68.elementRef = elementRef;
        _this68.styleBuilder = styleBuilder;
        _this68.styler = styler;
        _this68.marshal = marshal;
        _this68.DIRECTIVE_KEY = 'grid-columns';
        _this68._inline = false;

        _this68.init();

        return _this68;
      }
      /**
       * @return {?}
       */


      _createClass(GridColumnsDirective, [{
        key: "updateWithValue",

        /**
         * @param {?} value
         * @return {?}
         */
        value: function updateWithValue(value) {
          this.styleCache = this.inline ? columnsInlineCache : columnsCache;
          this.addStyles(value, {
            inline: this.inline
          });
        }
      }, {
        key: "inline",
        get: function get() {
          return this._inline;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
        }
      }]);

      return GridColumnsDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);
    /** @nocollapse */


    GridColumnsDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: GridColumnsStyleBuilder,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };

    GridColumnsDirective.propDecorators = {
      inline: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['gdInline']
      }]
    };
    /** @type {?} */

    var columnsCache = new Map();
    /** @type {?} */

    var columnsInlineCache = new Map();
    /** @type {?} */

    var inputs$7 = ['gdColumns', 'gdColumns.xs', 'gdColumns.sm', 'gdColumns.md', 'gdColumns.lg', 'gdColumns.xl', 'gdColumns.lt-sm', 'gdColumns.lt-md', 'gdColumns.lt-lg', 'gdColumns.lt-xl', 'gdColumns.gt-xs', 'gdColumns.gt-sm', 'gdColumns.gt-md', 'gdColumns.gt-lg'];
    /** @type {?} */

    var selector$7 = "\n  [gdColumns],\n  [gdColumns.xs], [gdColumns.sm], [gdColumns.md], [gdColumns.lg], [gdColumns.xl],\n  [gdColumns.lt-sm], [gdColumns.lt-md], [gdColumns.lt-lg], [gdColumns.lt-xl],\n  [gdColumns.gt-xs], [gdColumns.gt-sm], [gdColumns.gt-md], [gdColumns.gt-lg]\n";
    /**
     * 'grid-template-columns' CSS Grid styling directive
     * Configures the sizing for the columns in the grid
     * Syntax: <column value> [auto]
     * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
     */

    var DefaultGridColumnsDirective =
    /*#__PURE__*/
    function (_GridColumnsDirective) {
      _inherits(DefaultGridColumnsDirective, _GridColumnsDirective);

      function DefaultGridColumnsDirective() {
        var _this69;

        _classCallCheck(this, DefaultGridColumnsDirective);

        _this69 = _possibleConstructorReturn(this, _getPrototypeOf(DefaultGridColumnsDirective).apply(this, arguments));
        _this69.inputs = inputs$7;
        return _this69;
      }

      return DefaultGridColumnsDirective;
    }(GridColumnsDirective);

    DefaultGridColumnsDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: selector$7,
        inputs: inputs$7
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** @type {?} */

    var DEFAULT_VALUE$5 = '0';

    var GridGapStyleBuilder =
    /*#__PURE__*/
    function (_angular_flex_layout_39) {
      _inherits(GridGapStyleBuilder, _angular_flex_layout_39);

      function GridGapStyleBuilder() {
        _classCallCheck(this, GridGapStyleBuilder);

        return _possibleConstructorReturn(this, _getPrototypeOf(GridGapStyleBuilder).apply(this, arguments));
      }

      _createClass(GridGapStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} input
         * @param {?} parent
         * @return {?}
         */
        value: function buildStyles(input, parent) {
          return {
            'display': parent.inline ? 'inline-grid' : 'grid',
            'grid-gap': input || DEFAULT_VALUE$5
          };
        }
      }]);

      return GridGapStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    GridGapStyleBuilder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    GridGapStyleBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function GridGapStyleBuilder_Factory() {
        return new GridGapStyleBuilder();
      },
      token: GridGapStyleBuilder,
      providedIn: "root"
    });

    var GridGapDirective =
    /*#__PURE__*/
    function (_angular_flex_layout_40) {
      _inherits(GridGapDirective, _angular_flex_layout_40);

      /**
       * @param {?} elRef
       * @param {?} styleUtils
       * @param {?} styleBuilder
       * @param {?} marshal
       */
      function GridGapDirective(elRef, styleUtils, // NOTE: not actually optional, but we need to force DI without a
      // constructor call
      styleBuilder, marshal) {
        var _this70;

        _classCallCheck(this, GridGapDirective);

        _this70 = _possibleConstructorReturn(this, _getPrototypeOf(GridGapDirective).call(this, elRef, styleBuilder, styleUtils, marshal));
        _this70.elRef = elRef;
        _this70.styleUtils = styleUtils;
        _this70.styleBuilder = styleBuilder;
        _this70.marshal = marshal;
        _this70.DIRECTIVE_KEY = 'grid-gap';
        _this70._inline = false;

        _this70.init();

        return _this70;
      }
      /**
       * @return {?}
       */


      _createClass(GridGapDirective, [{
        key: "updateWithValue",

        /**
         * @param {?} value
         * @return {?}
         */
        value: function updateWithValue(value) {
          this.styleCache = this.inline ? gapInlineCache : gapCache;
          this.addStyles(value, {
            inline: this.inline
          });
        }
      }, {
        key: "inline",
        get: function get() {
          return this._inline;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
        }
      }]);

      return GridGapDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);
    /** @nocollapse */


    GridGapDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: GridGapStyleBuilder,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };

    GridGapDirective.propDecorators = {
      inline: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['gdInline']
      }]
    };
    /** @type {?} */

    var gapCache = new Map();
    /** @type {?} */

    var gapInlineCache = new Map();
    /** @type {?} */

    var inputs$8 = ['gdGap', 'gdGap.xs', 'gdGap.sm', 'gdGap.md', 'gdGap.lg', 'gdGap.xl', 'gdGap.lt-sm', 'gdGap.lt-md', 'gdGap.lt-lg', 'gdGap.lt-xl', 'gdGap.gt-xs', 'gdGap.gt-sm', 'gdGap.gt-md', 'gdGap.gt-lg'];
    /** @type {?} */

    var selector$8 = "\n  [gdGap],\n  [gdGap.xs], [gdGap.sm], [gdGap.md], [gdGap.lg], [gdGap.xl],\n  [gdGap.lt-sm], [gdGap.lt-md], [gdGap.lt-lg], [gdGap.lt-xl],\n  [gdGap.gt-xs], [gdGap.gt-sm], [gdGap.gt-md], [gdGap.gt-lg]\n";
    /**
     * 'grid-gap' CSS Grid styling directive
     * Configures the gap between items in the grid
     * Syntax: <row gap> [<column-gap>]
     * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-17
     */

    var DefaultGridGapDirective =
    /*#__PURE__*/
    function (_GridGapDirective) {
      _inherits(DefaultGridGapDirective, _GridGapDirective);

      function DefaultGridGapDirective() {
        var _this71;

        _classCallCheck(this, DefaultGridGapDirective);

        _this71 = _possibleConstructorReturn(this, _getPrototypeOf(DefaultGridGapDirective).apply(this, arguments));
        _this71.inputs = inputs$8;
        return _this71;
      }

      return DefaultGridGapDirective;
    }(GridGapDirective);

    DefaultGridGapDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: selector$8,
        inputs: inputs$8
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** @type {?} */

    var DEFAULT_VALUE$6 = 'auto';

    var GridRowStyleBuilder =
    /*#__PURE__*/
    function (_angular_flex_layout_41) {
      _inherits(GridRowStyleBuilder, _angular_flex_layout_41);

      function GridRowStyleBuilder() {
        _classCallCheck(this, GridRowStyleBuilder);

        return _possibleConstructorReturn(this, _getPrototypeOf(GridRowStyleBuilder).apply(this, arguments));
      }

      _createClass(GridRowStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} input
         * @return {?}
         */
        value: function buildStyles(input) {
          return {
            'grid-row': input || DEFAULT_VALUE$6
          };
        }
      }]);

      return GridRowStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    GridRowStyleBuilder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    GridRowStyleBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function GridRowStyleBuilder_Factory() {
        return new GridRowStyleBuilder();
      },
      token: GridRowStyleBuilder,
      providedIn: "root"
    });

    var GridRowDirective =
    /*#__PURE__*/
    function (_angular_flex_layout_42) {
      _inherits(GridRowDirective, _angular_flex_layout_42);

      /**
       * @param {?} elementRef
       * @param {?} styleBuilder
       * @param {?} styler
       * @param {?} marshal
       */
      function GridRowDirective(elementRef, // NOTE: not actually optional, but we need to force DI without a
      // constructor call
      styleBuilder, styler, marshal) {
        var _this72;

        _classCallCheck(this, GridRowDirective);

        _this72 = _possibleConstructorReturn(this, _getPrototypeOf(GridRowDirective).call(this, elementRef, styleBuilder, styler, marshal));
        _this72.elementRef = elementRef;
        _this72.styleBuilder = styleBuilder;
        _this72.styler = styler;
        _this72.marshal = marshal;
        _this72.DIRECTIVE_KEY = 'grid-row';
        _this72.styleCache = rowCache;

        _this72.init();

        return _this72;
      }

      return GridRowDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);
    /** @nocollapse */


    GridRowDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: GridRowStyleBuilder,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };
    /** @type {?} */


    var rowCache = new Map();
    /** @type {?} */

    var inputs$9 = ['gdRow', 'gdRow.xs', 'gdRow.sm', 'gdRow.md', 'gdRow.lg', 'gdRow.xl', 'gdRow.lt-sm', 'gdRow.lt-md', 'gdRow.lt-lg', 'gdRow.lt-xl', 'gdRow.gt-xs', 'gdRow.gt-sm', 'gdRow.gt-md', 'gdRow.gt-lg'];
    /** @type {?} */

    var selector$9 = "\n  [gdRow],\n  [gdRow.xs], [gdRow.sm], [gdRow.md], [gdRow.lg], [gdRow.xl],\n  [gdRow.lt-sm], [gdRow.lt-md], [gdRow.lt-lg], [gdRow.lt-xl],\n  [gdRow.gt-xs], [gdRow.gt-sm], [gdRow.gt-md], [gdRow.gt-lg]\n";
    /**
     * 'grid-row' CSS Grid styling directive
     * Configures the name or position of an element within the grid
     * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
     */

    var DefaultGridRowDirective =
    /*#__PURE__*/
    function (_GridRowDirective) {
      _inherits(DefaultGridRowDirective, _GridRowDirective);

      function DefaultGridRowDirective() {
        var _this73;

        _classCallCheck(this, DefaultGridRowDirective);

        _this73 = _possibleConstructorReturn(this, _getPrototypeOf(DefaultGridRowDirective).apply(this, arguments));
        _this73.inputs = inputs$9;
        return _this73;
      }

      return DefaultGridRowDirective;
    }(GridRowDirective);

    DefaultGridRowDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: selector$9,
        inputs: inputs$9
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** @type {?} */

    var DEFAULT_VALUE$7 = 'none';
    /** @type {?} */

    var AUTO_SPECIFIER$1 = '!';

    var GridRowsStyleBuilder =
    /*#__PURE__*/
    function (_angular_flex_layout_43) {
      _inherits(GridRowsStyleBuilder, _angular_flex_layout_43);

      function GridRowsStyleBuilder() {
        _classCallCheck(this, GridRowsStyleBuilder);

        return _possibleConstructorReturn(this, _getPrototypeOf(GridRowsStyleBuilder).apply(this, arguments));
      }

      _createClass(GridRowsStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} input
         * @param {?} parent
         * @return {?}
         */
        value: function buildStyles(input, parent) {
          input = input || DEFAULT_VALUE$7;
          /** @type {?} */

          var auto = false;

          if (input.endsWith(AUTO_SPECIFIER$1)) {
            input = input.substring(0, input.indexOf(AUTO_SPECIFIER$1));
            auto = true;
          }
          /** @type {?} */


          var css = {
            'display': parent.inline ? 'inline-grid' : 'grid',
            'grid-auto-rows': '',
            'grid-template-rows': ''
          };
          /** @type {?} */

          var key = auto ? 'grid-auto-rows' : 'grid-template-rows';
          css[key] = input;
          return css;
        }
      }]);

      return GridRowsStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    GridRowsStyleBuilder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    GridRowsStyleBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function GridRowsStyleBuilder_Factory() {
        return new GridRowsStyleBuilder();
      },
      token: GridRowsStyleBuilder,
      providedIn: "root"
    });

    var GridRowsDirective =
    /*#__PURE__*/
    function (_angular_flex_layout_44) {
      _inherits(GridRowsDirective, _angular_flex_layout_44);

      /**
       * @param {?} elementRef
       * @param {?} styleBuilder
       * @param {?} styler
       * @param {?} marshal
       */
      function GridRowsDirective(elementRef, // NOTE: not actually optional, but we need to force DI without a
      // constructor call
      styleBuilder, styler, marshal) {
        var _this74;

        _classCallCheck(this, GridRowsDirective);

        _this74 = _possibleConstructorReturn(this, _getPrototypeOf(GridRowsDirective).call(this, elementRef, styleBuilder, styler, marshal));
        _this74.elementRef = elementRef;
        _this74.styleBuilder = styleBuilder;
        _this74.styler = styler;
        _this74.marshal = marshal;
        _this74.DIRECTIVE_KEY = 'grid-rows';
        _this74._inline = false;

        _this74.init();

        return _this74;
      }
      /**
       * @return {?}
       */


      _createClass(GridRowsDirective, [{
        key: "updateWithValue",

        /**
         * @param {?} value
         * @return {?}
         */
        value: function updateWithValue(value) {
          this.styleCache = this.inline ? rowsInlineCache : rowsCache;
          this.addStyles(value, {
            inline: this.inline
          });
        }
      }, {
        key: "inline",
        get: function get() {
          return this._inline;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
        }
      }]);

      return GridRowsDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);
    /** @nocollapse */


    GridRowsDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: GridRowsStyleBuilder,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };

    GridRowsDirective.propDecorators = {
      inline: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['gdInline']
      }]
    };
    /** @type {?} */

    var rowsCache = new Map();
    /** @type {?} */

    var rowsInlineCache = new Map();
    /** @type {?} */

    var inputs$10 = ['gdRows', 'gdRows.xs', 'gdRows.sm', 'gdRows.md', 'gdRows.lg', 'gdRows.xl', 'gdRows.lt-sm', 'gdRows.lt-md', 'gdRows.lt-lg', 'gdRows.lt-xl', 'gdRows.gt-xs', 'gdRows.gt-sm', 'gdRows.gt-md', 'gdRows.gt-lg'];
    /** @type {?} */

    var selector$10 = "\n  [gdRows],\n  [gdRows.xs], [gdRows.sm], [gdRows.md], [gdRows.lg], [gdRows.xl],\n  [gdRows.lt-sm], [gdRows.lt-md], [gdRows.lt-lg], [gdRows.lt-xl],\n  [gdRows.gt-xs], [gdRows.gt-sm], [gdRows.gt-md], [gdRows.gt-lg]\n";
    /**
     * 'grid-template-rows' CSS Grid styling directive
     * Configures the sizing for the rows in the grid
     * Syntax: <column value> [auto]
     * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
     */

    var DefaultGridRowsDirective =
    /*#__PURE__*/
    function (_GridRowsDirective) {
      _inherits(DefaultGridRowsDirective, _GridRowsDirective);

      function DefaultGridRowsDirective() {
        var _this75;

        _classCallCheck(this, DefaultGridRowsDirective);

        _this75 = _possibleConstructorReturn(this, _getPrototypeOf(DefaultGridRowsDirective).apply(this, arguments));
        _this75.inputs = inputs$10;
        return _this75;
      }

      return DefaultGridRowsDirective;
    }(GridRowsDirective);

    DefaultGridRowsDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: selector$10,
        inputs: inputs$10
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** @type {?} */

    var ALL_DIRECTIVES = [DefaultGridAlignDirective, DefaultGridAlignColumnsDirective, DefaultGridAlignRowsDirective, DefaultGridAreaDirective, DefaultGridAreasDirective, DefaultGridAutoDirective, DefaultGridColumnDirective, DefaultGridColumnsDirective, DefaultGridGapDirective, DefaultGridRowDirective, DefaultGridRowsDirective];
    /**
     * *****************************************************************
     * Define module for the CSS Grid API
     * *****************************************************************
     */

    var GridModule = function GridModule() {
      _classCallCheck(this, GridModule);
    };

    GridModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]],
        declarations: [].concat(ALL_DIRECTIVES),
        exports: [].concat(ALL_DIRECTIVES)
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    //# sourceMappingURL=grid.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Login</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"login-logo\">\r\n    <img src=\"assets/img/appicon.svg\" alt=\"Ionic logo\">\r\n  </div>\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n    <h4>Google Sign in</h4>\r\n    <img id=\"googleSignInImg\" src=\"../../../assets/img/icons/googleplus.png\" (click)=\"loginGoogle()\">\r\n  </div>\r\n  <form #loginForm=\"ngForm\" novalidate>\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\" color=\"primary\">Username</ion-label>\r\n        <ion-input [(ngModel)]=\"login.username\" name=\"username\" type=\"text\" #username=\"ngModel\" spellcheck=\"false\"\r\n          autocapitalize=\"off\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-text color=\"danger\">\r\n        <p [hidden]=\"username.valid || submitted == false\" class=\"ion-padding-start\">\r\n          Username is required\r\n        </p>\r\n      </ion-text>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\" color=\"primary\">Password</ion-label>\r\n        <ion-input [(ngModel)]=\"login.password\" name=\"password\" type=\"password\" #password=\"ngModel\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-text color=\"danger\">\r\n        <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\r\n          Password is required\r\n        </p>\r\n      </ion-text>\r\n    </ion-list>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button (click)=\"onLogin(loginForm)\" type=\"submit\" expand=\"block\">Login</ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button (click)=\"onSignup()\" color=\"light\" expand=\"block\">Signup</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login */
    "./src/app/pages/login/login.ts");

    var routes = [{
      path: '',
      component: _login__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return LoginModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login */
    "./src/app/pages/login/login.ts");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var LoginModule = function LoginModule() {
      _classCallCheck(this, LoginModule);
    };

    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login__WEBPACK_IMPORTED_MODULE_4__["LoginPage"]]
    })], LoginModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.scss":
  /*!****************************************!*\
    !*** ./src/app/pages/login/login.scss ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-logo {\n  padding: 20px 0;\n  min-height: 200px;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 150px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n\nimg {\n  max-width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXGdpdGh1YlxcbWVzc2FnaW5nLWFwcC9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1sb2dvIHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW4tbG9nbyBpbWcge1xyXG4gIG1heC13aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1heC13aWR0aDogNTBweDtcclxufVxyXG4iLCIubG9naW4tbG9nbyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbn1cblxuLmxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDUwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.ts":
  /*!**************************************!*\
    !*** ./src/app/pages/login/login.ts ***!
    \**************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _providers_user_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../providers/user-data */
    "./src/app/providers/user-data.ts");
    /* harmony import */


    var _core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../core/service/auth.service */
    "./src/app/core/service/auth.service.ts");

    var LoginPage =
    /*#__PURE__*/
    function () {
      function LoginPage(userData, router, authService) {
        _classCallCheck(this, LoginPage);

        this.userData = userData;
        this.router = router;
        this.authService = authService;
        this.login = {
          username: '',
          password: ''
        };
        this.submitted = false;
      }

      _createClass(LoginPage, [{
        key: "onLogin",
        value: function onLogin(form) {
          this.submitted = true;

          if (form.valid) {
            this.authService.signinEmail(this.login.username, this.login.password);
            this.userData.login(this.login.username);
            this.router.navigateByUrl('/app/tabs/friends');
          }
        }
      }, {
        key: "loginGoogle",
        value: function loginGoogle() {
          this.authService.signinGoogle();
        }
      }, {
        key: "onSignup",
        value: function onSignup() {
          this.router.navigateByUrl('/signup');
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.scss */
      "./src/app/pages/login/login.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])], LoginPage);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]]
    })], SharedModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map