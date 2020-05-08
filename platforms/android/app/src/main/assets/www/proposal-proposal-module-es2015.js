(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["proposal-proposal-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/proposal/proposal.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/proposal/proposal.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <mat-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button>\r\n        <ion-menu-button><i class=\"fas fa-bars\"></i></ion-menu-button>\r\n      </ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"title-padding\">Dating Props</ion-title>\r\n  </mat-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n  <div id=\"proposal-flex-container\" fxLayout=\"row wrap\" fxLayoutAlign.gt-xs=\"center\" fxLayoutAlign.lt-sm=\"center\">\r\n    <h4>Proposal</h4>\r\n    <mat-tab-group mat-align-tabs=\"center\">\r\n      <mat-tab label=\"Your Proposals\">\r\n        <div class=\"flex-container\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n          <ng-container *ngIf=\"theirProposals.length === 0\">\r\n            <h3>None</h3>\r\n          </ng-container>\r\n          <div class=\"table-wrapper mat-elevation-z8\">\r\n            <table mat-table [dataSource]=\"theirProposalDataSource\" matSort [hidden]=\"theirProposals.length === 0\">\r\n\r\n              <ng-container matColumnDef=\"proposalDate\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.proposalDate| date: 'short'}} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"sender\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.sender}} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"status\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\r\n                <td mat-cell *matCellDef=\"let row\">\r\n                  {{row.status | proposalStatus}}\r\n                </td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"option\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Accept/Deny </th>\r\n                <td mat-cell *matCellDef=\"let row; let i=index\">\r\n                  <mat-slide-toggle (change)=\"options(i)\" class=\"toggle-slider\" [checked]=\"row.status\">\r\n                  </mat-slide-toggle>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr class=\"table-header\" mat-header-row *matHeaderRowDef=\"theirDisplayedColumns\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: theirDisplayedColumns\"></tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n      <mat-tab label=\"Your Accepted Proposals\">\r\n        <div class=\"flex-container\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n          <ng-container *ngIf=\"myProposals.length === 0\">\r\n            <h3>None</h3>\r\n          </ng-container>\r\n          <mat-form-field [hidden]=\"myProposals.length === 0\">\r\n            <mat-label>Filter</mat-label>\r\n            <input matInput (keyup)=\"applyMyFilter($event)\" placeholder=\"Search\">\r\n          </mat-form-field>\r\n          <div class=\"table-wrapper mat-elevation-z8\">\r\n            <table mat-table [dataSource]=\"myProposalDataSource\" matSort [hidden]=\"myProposals.length === 0\">\r\n\r\n              <ng-container matColumnDef=\"proposalDate\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.proposalDate| date: 'short'}} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"sender\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.sender}} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"address\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Address </th>\r\n                <td mat-cell *matCellDef=\"let row; let i=index\">\r\n                  <mat-icon id=\"home-icon\" matTooltip=\"View Address\" class=\"icon-house\" (click)=\"showAddress(i)\">home\r\n                  </mat-icon>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr class=\"table-header\" mat-header-row *matHeaderRowDef=\"myDisplayedColumns\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: myDisplayedColumns\"></tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/proposal/proposal-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/proposal/proposal-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProposalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalRoutingModule", function() { return ProposalRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _proposal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proposal.component */ "./src/app/pages/proposal/proposal.component.ts");




const routes = [
    {
        path: '',
        component: _proposal_component__WEBPACK_IMPORTED_MODULE_3__["ProposalComponent"],
    }
];
let ProposalRoutingModule = class ProposalRoutingModule {
};
ProposalRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProposalRoutingModule);



/***/ }),

/***/ "./src/app/pages/proposal/proposal.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/proposal/proposal.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".oval {\n  cursor: pointer;\n  border-radius: 75px;\n  border: 1px solid #cc3732;\n  background: #cc3732 !important;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 0;\n  letter-spacing: 1px;\n  width: 5rem;\n  height: 2.75rem;\n  text-transform: uppercase;\n  -webkit-transition: -webkit-transform 80ms ease-in;\n  transition: -webkit-transform 80ms ease-in;\n  transition: transform 80ms ease-in;\n  transition: transform 80ms ease-in, -webkit-transform 80ms ease-in;\n}\n.oval:active {\n  -webkit-transform: scale(0.95);\n          transform: scale(0.95);\n}\n.oval:focus {\n  outline: none;\n}\ni {\n  padding-left: 36%;\n  padding-top: 10%;\n}\nh4 {\n  top: 5vh;\n  position: absolute;\n  text-align: center;\n}\nh3 {\n  text-align: center;\n}\ntable,\nmat-paginator {\n  position: relative;\n  width: 100%;\n  border-radius: 0.125em;\n}\nmat-form-field {\n  margin-left: 1rem;\n}\ntr td.mat-cell {\n  font-size: 1rem;\n}\n.icon-accepted {\n  color: crimson;\n}\n.icon-pending {\n  color: black;\n}\ntable {\n  width: 30vw;\n}\nmat-icon {\n  cursor: pointer;\n}\nmat-icon#home-icon {\n  padding-left: 1rem;\n}\ntr td.mat-cell {\n  font-size: 0.8rem;\n}\ntr td.mat-cell:nth-child(3),\ntr th.mat-header-cell:nth-child(3),\ntr td.mat-cell:nth-child(4),\ntr th.mat-header-cell:nth-child(4) {\n  padding-left: 1rem;\n}\n.mat-row:nth-child(odd) {\n  background-color: whitesmoke;\n}\ntr.mat-header-row th {\n  color: black;\n}\n.icon-house {\n  color: green;\n}\nmat-form-field {\n  width: 125px;\n}\n.mat-tab-group {\n  position: absolute;\n  top: 15vh;\n}\n.table-wrapper {\n  margin-top: 1vh;\n}\nh4 {\n  margin-top: 5vh;\n}\nh4,\nh3 {\n  color: white;\n}\n#proposal-flex-container {\n  width: 100vw;\n  height: 90vh;\n  background-size: cover;\n  background-image: url('bg-4.jpg');\n}\n@media screen and (max-width: 1024px) {\n  table {\n    max-width: 100%;\n    left: 1vw;\n    color: black;\n  }\n\n  #search-field {\n    left: 1vw;\n    top: 8vh;\n  }\n}\nion-title {\n  color: white;\n}\nmat-label,\ninput {\n  color: white;\n}\n.mat-tab-label-content {\n  color: white;\n}\n@media screen and (max-width: 600px) {\n  tr td.mat-cell {\n    font-size: 0.55rem;\n  }\n\n  .mat-table {\n    width: 85vw;\n    left: 0;\n  }\n\n  .paginator--centered {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n  }\n\n  h4 {\n    margin: 5vh auto 0;\n  }\n\n  #proposal-flex-container {\n    height: 200vh;\n    background-size: auto;\n    background-repeat: repeat-y;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvcG9zYWwvQzpcXGdpdGh1YlxcbWVzc2FnaW5nLWFwcFxcbWVzc2FnaW5nLWFwcFxcTWVzc2FnaW5nLUFwcC1Bbmd1bGFyLUlvbmljL3NyY1xcYXNzZXRzXFxzdHlsZXNcXF9hY3Rpb24tYnV0dG9uLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb3Bvc2FsL3Byb3Bvc2FsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9wb3NhbC9DOlxcZ2l0aHViXFxtZXNzYWdpbmctYXBwXFxtZXNzYWdpbmctYXBwXFxNZXNzYWdpbmctQXBwLUFuZ3VsYXItSW9uaWMvc3JjXFxhc3NldHNcXHN0eWxlc1xcX3RpdGxlLXRleHQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvcG9zYWwvQzpcXGdpdGh1YlxcbWVzc2FnaW5nLWFwcFxcbWVzc2FnaW5nLWFwcFxcTWVzc2FnaW5nLUFwcC1Bbmd1bGFyLUlvbmljL3NyY1xcYXNzZXRzXFxzdHlsZXNcXF90YWJsZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9wb3NhbC9DOlxcZ2l0aHViXFxtZXNzYWdpbmctYXBwXFxtZXNzYWdpbmctYXBwXFxNZXNzYWdpbmctQXBwLUFuZ3VsYXItSW9uaWMvc3JjXFxhcHBcXHBhZ2VzXFxwcm9wb3NhbFxccHJvcG9zYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrREFBQTtFQUFBLDBDQUFBO0VBQUEsa0NBQUE7RUFBQSxrRUFBQTtBQ0NKO0FEQUk7RUFDSSw4QkFBQTtVQUFBLHNCQUFBO0FDRVI7QURBSTtFQUNJLGFBQUE7QUNFUjtBRENBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0VKO0FDekJBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUQ0Qko7QUN6QkE7RUFDSSxrQkFBQTtBRDRCSjtBRW5CQTs7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBRnNCRjtBRW5CQTtFQUNFLGlCQUFBO0FGc0JGO0FHekNBO0VBQ0ksZUFBQTtBSDRDSjtBR3pDQTtFQUNJLGNBQUE7QUg0Q0o7QUd6Q0E7RUFDSSxZQUFBO0FINENKO0FHekNBO0VBQ0ksV0FBQTtBSDRDSjtBR3pDQTtFQUNJLGVBQUE7QUg0Q0o7QUd6Q0E7RUFDSSxrQkFBQTtBSDRDSjtBR3pDQTtFQUNJLGlCQUFBO0FINENKO0FHekNBOzs7O0VBSUksa0JBQUE7QUg0Q0o7QUd6Q0E7RUFDSSw0QkFBQTtBSDRDSjtBR3pDQTtFQUNJLFlBQUE7QUg0Q0o7QUd6Q0E7RUFDSSxZQUFBO0FINENKO0FHekNBO0VBQ0ksWUFBQTtBSDRDSjtBR3pDQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBSDRDSjtBR3pDQTtFQUNJLGVBQUE7QUg0Q0o7QUd6Q0E7RUFDSSxlQUFBO0FINENKO0FHekNBOztFQUVJLFlBQUE7QUg0Q0o7QUd6Q0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7QUg0Q0o7QUd6Q0E7RUFDSTtJQUNJLGVBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtFSDRDTjs7RUd6Q0U7SUFDSSxTQUFBO0lBQ0EsUUFBQTtFSDRDTjtBQUNGO0FHekNBO0VBQ0ksWUFBQTtBSDJDSjtBR3hDQTs7RUFFSSxZQUFBO0FIMkNKO0FHeENBO0VBQ0ksWUFBQTtBSDJDSjtBR3hDQTtFQUNJO0lBQ0ksa0JBQUE7RUgyQ047O0VHekNFO0lBQ0ksV0FBQTtJQUNBLE9BQUE7RUg0Q047O0VHMUNFO0lBQ0ksb0JBQUE7SUFBQSxhQUFBO0lBQ0Esd0JBQUE7WUFBQSx1QkFBQTtFSDZDTjs7RUczQ0U7SUFDSSxrQkFBQTtFSDhDTjs7RUc1Q0U7SUFDSSxhQUFBO0lBQ0EscUJBQUE7SUFDQSwyQkFBQTtFSCtDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvcG9zYWwvcHJvcG9zYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZhbCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3NXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwNCwgNTUsIDUwKTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMDQsIDU1LCA1MCkgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuICAgIGhlaWdodDogMi43NXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODBtcyBlYXNlLWluO1xyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICB9XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG59XHJcbmkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNiU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG59XHJcbiIsIi5vdmFsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA3NXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2MzNzMyO1xuICBiYWNrZ3JvdW5kOiAjY2MzNzMyICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgd2lkdGg6IDVyZW07XG4gIGhlaWdodDogMi43NXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDgwbXMgZWFzZS1pbjtcbn1cbi5vdmFsOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG59XG4ub3ZhbDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmkge1xuICBwYWRkaW5nLWxlZnQ6IDM2JTtcbiAgcGFkZGluZy10b3A6IDEwJTtcbn1cblxuaDQge1xuICB0b3A6IDV2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50YWJsZSxcbm1hdC1wYWdpbmF0b3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwLjEyNWVtO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG50ciB0ZC5tYXQtY2VsbCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmljb24tYWNjZXB0ZWQge1xuICBjb2xvcjogY3JpbXNvbjtcbn1cblxuLmljb24tcGVuZGluZyB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxudGFibGUge1xuICB3aWR0aDogMzB2dztcbn1cblxubWF0LWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbm1hdC1pY29uI2hvbWUtaWNvbiB7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbn1cblxudHIgdGQubWF0LWNlbGwge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxudHIgdGQubWF0LWNlbGw6bnRoLWNoaWxkKDMpLFxudHIgdGgubWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgzKSxcbnRyIHRkLm1hdC1jZWxsOm50aC1jaGlsZCg0KSxcbnRyIHRoLm1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoNCkge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG5cbi5tYXQtcm93Om50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxudHIubWF0LWhlYWRlci1yb3cgdGgge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5pY29uLWhvdXNlIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMjVweDtcbn1cblxuLm1hdC10YWItZ3JvdXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTV2aDtcbn1cblxuLnRhYmxlLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAxdmg7XG59XG5cbmg0IHtcbiAgbWFyZ2luLXRvcDogNXZoO1xufVxuXG5oNCxcbmgzIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jcHJvcG9zYWwtZmxleC1jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogOTB2aDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iZy9iZy00LmpwZ1wiKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIHRhYmxlIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMXZ3O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gICNzZWFyY2gtZmllbGQge1xuICAgIGxlZnQ6IDF2dztcbiAgICB0b3A6IDh2aDtcbiAgfVxufVxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5tYXQtbGFiZWwsXG5pbnB1dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1hdC10YWItbGFiZWwtY29udGVudCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgdHIgdGQubWF0LWNlbGwge1xuICAgIGZvbnQtc2l6ZTogMC41NXJlbTtcbiAgfVxuXG4gIC5tYXQtdGFibGUge1xuICAgIHdpZHRoOiA4NXZ3O1xuICAgIGxlZnQ6IDA7XG4gIH1cblxuICAucGFnaW5hdG9yLS1jZW50ZXJlZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIGg0IHtcbiAgICBtYXJnaW46IDV2aCBhdXRvIDA7XG4gIH1cblxuICAjcHJvcG9zYWwtZmxleC1jb250YWluZXIge1xuICAgIGhlaWdodDogMjAwdmg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgfVxufSIsImg0IHtcclxuICAgIHRvcDogNXZoO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIiwiQG1peGluIG1hdC10YWJsZS1jb2xzKCRjb2x1bW5zKSB7XHJcbiAgLm1hdC1jb2x1bW4tIHtcclxuICAgIEBlYWNoICRjb2xOYW1lLCAkcHJvcHMgaW4gJGNvbHVtbnMge1xyXG4gICAgICAkd2lkdGg6IG1hcC1nZXQoJHByb3BzLCBcIndpZHRoXCIpO1xyXG4gICAgICAmI3skY29sTmFtZX0ge1xyXG4gICAgICAgIGZsZXg6ICR3aWR0aDtcclxuICAgICAgICBtaW4td2lkdGg6ICR3aWR0aDtcclxuXHJcbiAgICAgICAgQGlmIG1hcC1oYXMta2V5KCRwcm9wcywgXCJjb2xvclwiKSB7XHJcbiAgICAgICAgICBjb2xvcjogbWFwLWdldCgkcHJvcHMsIFwiY29sb3JcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG50YWJsZSxcclxubWF0LXBhZ2luYXRvciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMTI1ZW07XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG4iLCJAaW1wb3J0IFwiX2FjdGlvbi1idXR0b25cIjtcclxuQGltcG9ydCBcIl90aXRsZS10ZXh0XCI7XHJcbkBpbXBvcnQgXCJfdGFibGVcIjtcclxuQGltcG9ydCBcIl9jb2xvclwiO1xyXG5cclxudHIgdGQubWF0LWNlbGwge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uaWNvbi1hY2NlcHRlZCB7XHJcbiAgICBjb2xvcjogY3JpbXNvbjtcclxufVxyXG5cclxuLmljb24tcGVuZGluZyB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAzMHZ3O1xyXG59XHJcblxyXG5tYXQtaWNvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbm1hdC1pY29uI2hvbWUtaWNvbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbnRyIHRkLm1hdC1jZWxsIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcblxyXG50ciB0ZC5tYXQtY2VsbDpudGgtY2hpbGQoMyksXHJcbnRyIHRoLm1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMyksXHJcbnRyIHRkLm1hdC1jZWxsOm50aC1jaGlsZCg0KSxcclxudHIgdGgubWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCg0KSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5tYXQtcm93Om50aC1jaGlsZChvZGQpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbnRyLm1hdC1oZWFkZXItcm93IHRoIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmljb24taG91c2Uge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTI1cHg7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWdyb3VwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTV2aDtcclxufVxyXG5cclxuLnRhYmxlLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMXZoO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1dmg7XHJcbn1cclxuXHJcbmg0LFxyXG5oMyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNwcm9wb3NhbC1mbGV4LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iZy9iZy00LmpwZ1wiKTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICB0YWJsZSB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDF2dztcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgI3NlYXJjaC1maWVsZCB7XHJcbiAgICAgICAgbGVmdDogMXZ3O1xyXG4gICAgICAgIHRvcDogOHZoO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5tYXQtbGFiZWwsXHJcbmlucHV0IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1hdC10YWItbGFiZWwtY29udGVudCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICB0ciB0ZC5tYXQtY2VsbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjU1cmVtO1xyXG4gICAgfVxyXG4gICAgLm1hdC10YWJsZSB7XHJcbiAgICAgICAgd2lkdGg6IDg1dnc7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuICAgIC5wYWdpbmF0b3ItLWNlbnRlcmVkIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgaDQge1xyXG4gICAgICAgIG1hcmdpbjogNXZoIGF1dG8gMDtcclxuICAgIH1cclxuICAgICNwcm9wb3NhbC1mbGV4LWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDB2aDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/proposal/proposal.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/proposal/proposal.component.ts ***!
  \******************************************************/
/*! exports provided: ProposalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalComponent", function() { return ProposalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_service_proposal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/service/proposal.service */ "./src/app/core/service/proposal.service.ts");
/* harmony import */ var _core_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/service/auth.service */ "./src/app/core/service/auth.service.ts");
/* harmony import */ var _shared_const_columns_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/const/columns.const */ "./src/app/shared/const/columns.const.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");









let ProposalComponent = class ProposalComponent {
    constructor(proposalService, alertCtrl, toastController, authService, alertController, changeDetectorRefs) {
        this.proposalService = proposalService;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.authService = authService;
        this.alertController = alertController;
        this.changeDetectorRefs = changeDetectorRefs;
        this.today = new Date();
        this.theirDisplayedColumns = ['proposalDate', 'sender', 'status', 'option'];
        this.myDisplayedColumns = ['proposalDate', 'sender', 'address'];
        this.theirProposals = [];
        this.myProposals = [];
        this.PEND_PROPOSAL_COL_OBJ = _shared_const_columns_const__WEBPACK_IMPORTED_MODULE_4__["PEND_PROPOSAL_COL_OBJ"];
        this.PEND_PROPOSAL_DISPLAY = _shared_const_columns_const__WEBPACK_IMPORTED_MODULE_4__["PEND_PROPOSAL_DISPLAY"];
    }
    ionViewDidEnter() {
    }
    ngOnInit() {
        $('.menu-collapsed').click(function () {
            $(this).toggleClass('menu-expanded');
        });
        this.getUserProposal();
        this.getUserAcceptedProposals();
    }
    getUserProposal() {
        this.proposalService.getUserProposals(this.authService.authState.email).subscribe((proposalsData) => {
            this.theirProposals = proposalsData;
            for (let i = 0; i < this.theirProposals.length; i++) {
                if (this.theirProposals[i] && this.theirProposals[i].proposalDate > this.today) {
                    this.theirProposals.splice(i, 1);
                }
            }
            this.refreshTheirProposals(this.theirProposals);
        });
    }
    getUserAcceptedProposals() {
        this.proposalService.getUserAcceptedProposals(this.authService.authState.email).subscribe((proposalsData) => {
            this.myProposals = proposalsData;
            for (let i = 0; i < this.myProposals.length; i++) {
                if (this.myProposals[i] && this.myProposals[i].proposalDate > this.today) {
                    this.myProposals.splice(i, 1);
                }
            }
            this.refreshMyProposals(this.myProposals);
        });
    }
    toast(messageArg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: '',
                message: messageArg,
                position: 'bottom',
                duration: 2000,
                buttons: [
                    {
                        side: 'start',
                        icon: 'star',
                        text: messageArg,
                        handler: () => {
                        }
                    }
                ]
            });
            toast.present();
        });
    }
    refreshTheirProposals(dataArray) {
        this.theirProposalDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](dataArray);
        this.theirProposalDataSource.paginator = this.theirPaginator;
        this.theirProposalDataSource.sort = this.theirSort;
        this.changeDetectorRefs.detectChanges();
    }
    refreshMyProposals(dataArray) {
        this.myProposalDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](dataArray);
        this.myProposalDataSource.paginator = this.myPaginator;
        this.myProposalDataSource.sort = this.mySort;
        this.changeDetectorRefs.detectChanges();
    }
    changeStatus(statusValue, index) {
        const tmpSnapshot = this.proposalService.getUserProposalsSnapshot(this.authService.authState.email).subscribe((proposalsData) => {
            this.proposalService.updateProposal(statusValue, this.authService.authState.email, proposalsData[index].payload.doc.id);
            if (statusValue) {
                this.proposalService.acceptProposal(this.theirProposals[index], this.theirProposals[index].email);
            }
            this.theirProposals[index].status = statusValue;
            tmpSnapshot.unsubscribe();
        });
    }
    options(index) {
        const statusVal = this.returnStatus(index);
        this.changeStatus(statusVal, index);
    }
    returnStatus(index) {
        return this.theirProposals[index].status ? false : true;
    }
    showAddress(index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Address',
                cssClass: 'center-alert',
                message: this.myProposals[index].street + ', ' + this.myProposals[index].city + this.myProposals[index].state + ', ' + this.myProposals[index].zipcode,
                buttons: [
                    {
                        text: 'Okay',
                        handler: () => {
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // SORTING
    applyTheirFilter(event) {
        const filterValue = event.target.value;
        this.theirProposalDataSource.filter = filterValue.trim().toLowerCase();
        if (this.theirProposalDataSource.paginator) {
            this.theirProposalDataSource.paginator.firstPage();
        }
    }
    applyMyFilter(event) {
        const filterValue = event.target.value;
        this.myProposalDataSource.filter = filterValue.trim().toLowerCase();
        if (this.myProposalDataSource.paginator) {
            this.myProposalDataSource.paginator.firstPage();
        }
    }
};
ProposalComponent.ctorParameters = () => [
    { type: _core_service_proposal_service__WEBPACK_IMPORTED_MODULE_2__["ProposalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _core_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])
], ProposalComponent.prototype, "theirPaginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"])
], ProposalComponent.prototype, "theirSort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])
], ProposalComponent.prototype, "myPaginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"])
], ProposalComponent.prototype, "mySort", void 0);
ProposalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'proposal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./proposal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/proposal/proposal.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./proposal.component.scss */ "./src/app/pages/proposal/proposal.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_service_proposal_service__WEBPACK_IMPORTED_MODULE_2__["ProposalService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _core_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], ProposalComponent);



/***/ }),

/***/ "./src/app/pages/proposal/proposal.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/proposal/proposal.module.ts ***!
  \***************************************************/
/*! exports provided: ProposalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalModule", function() { return ProposalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _proposal_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proposal-routing.module */ "./src/app/pages/proposal/proposal-routing.module.ts");
/* harmony import */ var _proposal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proposal.component */ "./src/app/pages/proposal/proposal.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _proposal_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./proposal.pipe */ "./src/app/pages/proposal/proposal.pipe.ts");








let ProposalModule = class ProposalModule {
};
ProposalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_proposal_component__WEBPACK_IMPORTED_MODULE_5__["ProposalComponent"], _proposal_pipe__WEBPACK_IMPORTED_MODULE_7__["ProposalStatusPipe"]],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _proposal_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProposalRoutingModule"]
        ]
    })
], ProposalModule);



/***/ }),

/***/ "./src/app/pages/proposal/proposal.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/proposal/proposal.pipe.ts ***!
  \*************************************************/
/*! exports provided: ProposalStatusPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalStatusPipe", function() { return ProposalStatusPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProposalStatusPipe = class ProposalStatusPipe {
    transform(value) {
        return (value ? 'Accepted' : 'Rejected');
    }
};
ProposalStatusPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'proposalStatus' })
], ProposalStatusPipe);



/***/ }),

/***/ "./src/app/shared/const/columns.const.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/const/columns.const.ts ***!
  \***********************************************/
/*! exports provided: PEND_PROPOSAL_COL_OBJ, PEND_PROPOSAL_DISPLAY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PEND_PROPOSAL_COL_OBJ", function() { return PEND_PROPOSAL_COL_OBJ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PEND_PROPOSAL_DISPLAY", function() { return PEND_PROPOSAL_DISPLAY; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const PEND_PROPOSAL_COL_OBJ = [
    { columnId: 'Date', propertyName: 'proposalDate' },
    { columnId: 'Name', propertyName: 'sender' },
    // { columnId: 'Street', propertyName: 'street' },
    // { columnId: 'City', propertyName: 'city' },
    // { columnId: 'State', propertyName: 'state' },
    // { columnId: 'Zipcode', propertyName: 'zipcode' },
    { columnId: 'Status', propertyName: 'status' }
];
// export const PEND_PROPOSAL_DISPLAY = [
//     'Select', 'Date', 'Name', 'Street', 'City', 'State', 'Zipcode', 'Status'
// ];
const PEND_PROPOSAL_DISPLAY = [
    'Date', 'Name', 'Status'
];


/***/ })

}]);
//# sourceMappingURL=proposal-proposal-module-es2015.js.map