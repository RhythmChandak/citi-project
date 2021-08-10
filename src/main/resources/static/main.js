(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yogpr\tmp\CitiBridgeProject\src\main.ts */"zUnb");


/***/ }),

/***/ "2DHQ":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "2hxB":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.userId = "";
        this.password = "";
    }
    return User;
}());



/***/ }),

/***/ "AK6u":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\" style=\"margin-top:-50px\">\r\n  <div class=\"sidebar\" style=\"margin-top:30px; height: 100%;\">\r\n    <app-sidebar></app-sidebar>\r\n  </div>\r\n  <div class=\"main-panel\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true,
    backendUrl: "https://www.citiproj.ml"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EFyh":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.loggedInStatus = false;
        this.isValidUser = false;
        this.backendUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl;
    }
    LoginService.prototype.checkLogin = function (user) {
        return this.http.post(this.backendUrl + "/user/login", user);
    };
    Object.defineProperty(LoginService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedInStatus;
        },
        enumerable: false,
        configurable: true
    });
    LoginService.prototype.setLoggedIn = function (value) {
        this.loggedInStatus = value;
    };
    LoginService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "EqOz":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/recommendations/recommendations.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p-messages ></p-messages> -->\r\n<p-toast></p-toast>\r\n<div class=\" content\">\r\n\t<div class=\" row\">\r\n\t\t<div class=\" col-12\">\r\n\t\t\t<h2>STOCK RECOMMENDATIONS</h2><br>\r\n\r\n\t\t\t<p-dropdown [options]=\"sector\" name=\"selectedSector\" [(ngModel)]=\"selectedSector\" placeholder=\"Sectors\"\r\n\t\t\t\toptionLabel=\"nameS\" [showClear]=\"true\"></p-dropdown>\r\n\r\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;\r\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;\r\n\r\n\t\t\t<p-dropdown [options]=\"parameter\" name=\"selectedParameter\" [(ngModel)]=\"selectedParameter\"\r\n\t\t\t\tplaceholder=\"Parameters\" optionLabel=\"nameP\" [showClear]=\"true\"></p-dropdown>\r\n\r\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;\r\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;\r\n\r\n\t\t\t<button *ngIf=\"selectedSector!=null && selectedParameter!=null\" type=\"submit\" class=\"btn btn-success\"\r\n\t\t\t\tstyle=\"color: darkslateblue; font-size: medium;\" (click)=\"getRecommendations()\">RECOMMENDATIONS</button>\r\n\r\n\t\t\t<br><br><br><br>\r\n\r\n\t\t\t<div class=\"card\" *ngIf=\"renderData\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-4\"></div>\r\n\t\t\t\t\t<div class=\"col-sm-5\"></div>\r\n\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t<label for=\"ToggleChart\" style=\"font-size: large; color: white;\">Toggle Chart.</label>\r\n\t\t\t\t\t\t<p-inputSwitch name=\"ToggleChart\" [(ngModel)]=\"!showChart\" (click)=\"showChart=!showChart\">\r\n\t\t\t\t\t\t</p-inputSwitch>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<br>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<p-table [columns]=\"cols\" [value]=\"listOfRecommendationsForUser\" *ngIf=\"showChart\">\r\n\t\t\t\t\t\t<ng-template pTemplate=\"header\" let-columns>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th *ngFor=\"let col of columns\" style=\"text-align: center;\">\r\n\t\t\t\t\t\t\t\t\t{{col.header}}\r\n\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t<th>Save Stock</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t<ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let col of columns\">\r\n\t\t\t\t\t\t\t\t\t<td *ngIf=\"col.field == 'companySymbol'\" style=\"text-align: center;\">\r\n\t\t\t\t\t\t\t\t\t\t{{rowData[col.field]}}\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td *ngIf=\"col.field == 'companyName'\" style=\"text-align: center;\">\r\n\t\t\t\t\t\t\t\t\t\t{{rowData[col.field]}}\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td *ngIf=\"col.field != 'companySymbol' && col.field != 'companyName'\"\r\n\t\t\t\t\t\t\t\t\t\tstyle=\"text-align: center;\">\r\n\t\t\t\t\t\t\t\t\t\t{{rowData[col.field] | number}}\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<p-button icon=\"pi pi-plus\" (onClick)=\"showPositionDialog(rowData)\">\r\n\t\t\t\t\t\t\t\t\t</p-button>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</p-table>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\" *ngIf=\"!showChart\">\r\n\t\t\t\t\t<p-chart type=\"line\" [data]=\"chartData\" [options]=\"chartConfigOptions\">\r\n\t\t\t\t\t</p-chart>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<p-confirmDialog [style]=\"{width: '30vw'}\" key=\"positionDialog\" [position]=\"position\" [baseZIndex]=\"10000\">\r\n</p-confirmDialog>\r\n\r\n<p-dialog header=\"Save Stock\" [(visible)]=\"displayPosition\" [position]=\"position\" [modal]=\"true\"\r\n\t[style]=\"{width: '30vw'}\" [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\r\n\r\n\tEnter Volume :\r\n\t<input type=\"text\" pInputText [(ngModel)]=\"volume\">\r\n\t<ng-template pTemplate=\"footer\">\r\n\t\t<p-button icon=\"pi pi-times\" (click)=\"displayPosition=false\" label=\"No\"></p-button>\r\n\t\t<p-button icon=\"pi pi-check\" (click)=\"confirmSaveStock('right')\" label=\"Yes\" class=\"p-button-text\">\r\n\t\t</p-button>\r\n\t</ng-template>\r\n</p-dialog>");

/***/ }),

/***/ "KKA+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo\">\r\n  <a class=\"simple-text logo-normal\"\r\n    style=\"text-align: center; font-weight: 700; font-size: 2.7vh; color: darkslateblue;\">\r\n    Welcome,<br>{{userName}}\r\n  </a>\r\n</div>\r\n<div class=\"sidebar-wrapper\">\r\n  <ul class=\"nav\">\r\n    <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{ menuItem.class }} nav-item\">\r\n      <a [routerLink]=\"[menuItem.path]\">\r\n        <i class=\"tim-icons  {{ menuItem.icon }}\" style=\"color: darkslateblue;\"></i>\r\n        <p style=\"font-weight: bolder; font-size: large; word-wrap: break-word; color: darkslateblue;\">{{ menuItem.title\r\n          }}</p>\r\n      </a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a (click)=\"logout()\">\r\n        <p style=\"font-weight: bolder; font-size: large; word-wrap: break-word; color: darkslateblue;\">\r\n          <i class=\" tim-icons icon-button-power\" style=\"color: darkslateblue;\"></i> Log Out\r\n        </p>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>");

/***/ }),

/***/ "NCD8":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-history/user-history.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-toast></p-toast>\r\n<div class=\" content\">\r\n  <div class=\" row\">\r\n    <div class=\" col-lg-6\">\r\n      <p-table [columns]=\"cols\" [value]=\"listOfUserHistory\" paginator=\"true\" rows=\"9\" [alwaysShowPaginator]=\"false\"\r\n        [(selection)]=\"selectedStocks\" [rowHover]=\"true\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n          <tr>\r\n\r\n            <th style=\"width: 3rem\">\r\n              <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\r\n            </th>\r\n\r\n            <th *ngFor=\"let col of columns\" style=\"text-align: center;\" [pSortableColumn]=\"col.field\"\r\n              colspan=\"col.colspan\">\r\n              {{col.header}}\r\n              <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n          <tr>\r\n            <td>\r\n              <p-tableCheckbox [value]=\"rowData\"></p-tableCheckbox>\r\n            </td>\r\n            <ng-container *ngFor=\"let col of columns\">\r\n\r\n              <td *ngIf=\"col.field == 'companySymbol'\" style=\"text-align: center;\">\r\n                <a class=\"hyperlink\" (click)=\"getSelectedStockDetails(rowData)\"\r\n                  style=\"color: blue;\"><u>{{rowData[col.field]}}</u></a>\r\n              </td>\r\n              <td *ngIf=\"col.field == 'sector'\" style=\"text-align: center;\">\r\n                {{rowData[col.field]}}\r\n              </td>\r\n              <td *ngIf=\"col.field != 'companySymbol' && col.field != 'sector'\" style=\"text-align: center;\">\r\n                {{rowData[col.field] | number}}\r\n              </td>\r\n            </ng-container>\r\n          </tr>\r\n        </ng-template>\r\n      </p-table>\r\n\r\n      <br><br>\r\n      <button [disabled]=\"selectedStocks == null\" type=\"submit\" class=\"btn btn-success\" style=\"color: darkslateblue; font-size: medium;\" (click)=\"deleteSelectedStocks()\">DELETE SELECTED STOCKS</button>\r\n    </div>\r\n\r\n    <div class=\" col-lg-6\">\r\n      <div class=\" card card-chart\">\r\n        <div class=\" card-header\">\r\n          <h5 class=\" card-category\">Over 52 weeks</h5>\r\n          <h4 class=\" card-title\">\r\n            <i class=\" tim-icons icon-calendar-60 text-info\"> </i> PERFORMANCE CHART - {{selectedStockSymbol}}\r\n          </h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div *ngIf=\"!stockSelectedFlag\" style=\"text-align: center;\">\r\n            <p-progressSpinner></p-progressSpinner>\r\n          </div>\r\n          <div *ngIf=\"stockSelectedFlag\">\r\n            <p-chart type=\"line\" [data]=\"chartData\" [options]=\"chartConfigOptions\"></p-chart>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card card-chart\">\r\n        <div class=\"card-header\">\r\n          <h5 class=\"card-category\">Current Statistics</h5>\r\n          <h4 class=\"card-title\">\r\n            <i class=\" tim-icons icon-notes text-info\"> </i> META DATA - {{selectedStockSymbol}}\r\n          </h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div *ngIf=\"!stockSelectedFlag\" style=\"text-align: center;\">\r\n            <p-progressSpinner></p-progressSpinner>\r\n          </div>\r\n          <div *ngIf=\"stockSelectedFlag\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\" style=\"text-align: center;\">\r\n                <h2 style=\"color: #1DCEF1;\">{{selectedStock.companySymbol}}</h2>\r\n                <h3 style=\"color: #25D4E6;\"> {{selectedStock.companyName}}</h3>\r\n                <h4 style=\"color: #2DDADB;\">Market Capital : {{selectedStock.marketCap | number}} INR</h4><br>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                    <h4 style=\"color: #35E0D1;\"><u>Volume</u><br>\r\n                      {{selectedStock.volume | number}}</h4>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <h4 style=\"color: #35E0D1;\"><u>Change %</u><br>\r\n                      {{selectedStock.change | number}}</h4>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <h4 style=\"color: #35E0D1;\"><u>PE Ratio</u><br>\r\n                      {{selectedStock.peRatio | number}}</h4>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <br>\r\n\r\n            <div class=\"row\" style=\"text-align: center;\">\r\n              <div class=\"col-md-3\">\r\n                <h4 style=\"color: #3DE6C6;\">\r\n                  <u>Open</u><br>\r\n                  {{selectedStock.open | number}} INR\r\n                </h4>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <h4 style=\"color: #3DE6C6;\">\r\n                  <u>Close</u><br>\r\n                  {{selectedStock.close | number}} INR\r\n                </h4>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <h4 style=\"color: #3DE6C6;\">\r\n                  <u>High</u><br>\r\n                  {{selectedStock.high | number}} INR\r\n                </h4>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <h4 style=\"color: #3DE6C6;\">\r\n                  <u>Low</u><br>\r\n                  {{selectedStock.low | number}} INR\r\n                </h4>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "O5bD":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body class=\"renderBg\">\r\n  <br><br><br><br><br><br>\r\n  <br><br>\r\n  <div id=\"loginBox\" class=\"container\" align=\"vertical-center\"\r\n    style=\"max-width: 350px; background: black; opacity: 0.7; border: 2px solid gray; border-radius: 15px;\">\r\n    <form #loginform=\"ngForm\" (ngSubmit)=\"loginUser()\">\r\n      <br>\r\n      <h1 align=\"center\" style=\"color: white\">Log In</h1>\r\n      <small class=\"text-danger\" align=\"center\">{{message}}</small>\r\n      <h3>\r\n        <div class=\"form-group\">\r\n          <label style=\"color: white\" for=\"userId\">Username</label>\r\n          <input style=\"color: white\" type=\"text\" class=\"form-control\" placeholder=\"Username\" name=\"userId\"\r\n            [(ngModel)]=\"user.userId\" required #userId=\"ngModel\" [class.is-invalid]=\"userId.invalid && userId.touched\"\r\n            pTooltip=\"Enter your Username\" tooltipPosition=\"right\">\r\n          <small class=\"text-danger\" [class.d-none]=\"userId.valid || userId.untouched\">Username is required</small>\r\n        </div>\r\n      </h3>\r\n\r\n      <h3>\r\n        <div class=\"form-group\">\r\n          <label style=\"color: white\" for=\"pwd\">Password</label>\r\n          <input style=\"color: white\" type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\"\r\n            [(ngModel)]=\"user.password\" required #password=\"ngModel\"\r\n            [class.is-invalid]=\"password.invalid && password.touched\" pTooltip=\"Enter your Password\"\r\n            tooltipPosition=\"right\">\r\n          <small class=\"text-danger\" [class.d-none]=\"password.valid || password.untouched\">Password is required</small>\r\n        </div>\r\n      </h3>\r\n\r\n      <br><br>\r\n      <div align=\"center\">\r\n        <button [disabled]=\"loginform.form.invalid\" type=\"submit\" class=\"btn btn-success\" style=\"color: darkslateblue; font-size: medium;\">LOGIN</button>\r\n      </div>\r\n\r\n      <br>\r\n    </form>\r\n  </div>\r\n  <br><br><br><br><br><br><br><br><br><br><br><br>\r\n</body>");

/***/ }),

/***/ "OFyP":
/*!**************************************************!*\
  !*** ./src/app/services/user-history.service.ts ***!
  \**************************************************/
/*! exports provided: UserHistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHistoryService", function() { return UserHistoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




var UserHistoryService = /** @class */ (function () {
    function UserHistoryService(http) {
        this.http = http;
        this.backendUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl;
    }
    UserHistoryService.prototype.getUserHistoryByUsername = function () {
        return this.http.get(this.backendUrl + "/userHistory/showStocks/" + sessionStorage.getItem("loggedInUser"));
    };
    UserHistoryService.prototype.getCurrentStatisticsOfSelectedStock = function (companySymbol) {
        return this.http.get(this.backendUrl + "/stockDetails/showStockDetails/" + companySymbol);
    };
    UserHistoryService.prototype.deleteStocksFromUserHistory = function (ids) {
        return this.http.post(this.backendUrl + "/userHistory/deleteSavedStocksByUserId", ids);
    };
    UserHistoryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    UserHistoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserHistoryService);
    return UserHistoryService;
}());



/***/ }),

/***/ "P6kD":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "AK6u");
/* harmony import */ var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-layout.component.scss */ "vtrx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent() {
        this.sidebarColor = "green";
    }
    AdminLayoutComponent.prototype.changeSidebarColor = function (color) {
        var sidebar = document.getElementsByClassName('sidebar')[0];
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        this.sidebarColor = color;
        if (sidebar != undefined) {
            sidebar.setAttribute('data', color);
        }
        if (mainPanel != undefined) {
            mainPanel.setAttribute('data', color);
        }
    };
    AdminLayoutComponent.prototype.changeDashboardColor = function (color) {
        var body = document.getElementsByTagName('body')[0];
        if (body && color === 'white-content') {
            body.classList.add(color);
        }
        else if (body.classList.contains('white-content')) {
            body.classList.remove('white-content');
        }
    };
    AdminLayoutComponent.prototype.ngOnInit = function () {
        this.changeSidebarColor("green");
    };
    AdminLayoutComponent.ctorParameters = function () { return []; };
    AdminLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-admin-layout",
            template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "PBsn":
/*!*****************************************************!*\
  !*** ./src/app/services/recommendations.service.ts ***!
  \*****************************************************/
/*! exports provided: RecommendationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationsService", function() { return RecommendationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




var RecommendationsService = /** @class */ (function () {
    function RecommendationsService(http) {
        this.http = http;
        this.backendUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl;
    }
    RecommendationsService.prototype.getUserRecommendationsByParamaters = function (sector, parameter) {
        return this.http.get(this.backendUrl + "/stockDetails/showRecommendedStocks/" + sector + "/" + parameter);
    };
    RecommendationsService.prototype.saveStockSelectedByUser = function (stockToSave) {
        return this.http.post(this.backendUrl + "/userHistory/saveStocks", stockToSave);
    };
    RecommendationsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    RecommendationsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RecommendationsService);
    return RecommendationsService;
}());



/***/ }),

/***/ "PK01":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-history/user-history.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHistoryComponent", function() { return UserHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_history_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-history.component.html */ "NCD8");
/* harmony import */ var _user_history_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-history.component.scss */ "Z7I3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_history_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user-history.service */ "OFyP");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "7zfz");






var UserHistoryComponent = /** @class */ (function () {
    function UserHistoryComponent(userHistoryService, messageService) {
        this.userHistoryService = userHistoryService;
        this.messageService = messageService;
        this.stockSelectedFlag = false;
    }
    UserHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.stockSelectedFlag == false) {
            this.userHistoryService.getUserHistoryByUsername().subscribe(function (data) {
                if (data != null && data.length > 0) {
                    _this.listOfUserHistory = data;
                    _this.getSelectedStockDetails(_this.listOfUserHistory[0]);
                }
                else {
                    _this.messageService.add({ severity: 'error', summary: 'NetworkError', detail: 'Trouble getting History of Saved Stocks, try again' });
                }
            }, function (err) {
                _this.messageService.add({ severity: 'error', summary: 'ServerError', detail: 'Trouble getting History of Saved Stocks, try again' });
            });
        }
        this.cols = [
            { field: 'companySymbol', header: 'Stock' },
            { field: 'sector', header: 'Sector' },
            { field: 'volume', header: 'Volume' },
            { field: 'price', header: 'Saved Price (INR)' }
        ];
    };
    UserHistoryComponent.prototype.getSelectedStockDetails = function (companyData) {
        var _this = this;
        this.stockSelectedFlag = false;
        var companySymbol = companyData.companySymbol;
        this.selectedStockSymbol = companySymbol;
        this.userHistoryService.getCurrentStatisticsOfSelectedStock(companySymbol).subscribe(function (data) {
            if (data != null) {
                _this.selectedStock = data;
                _this.listOfselectedStockHistory = _this.selectedStock.history;
                _this.listOfDates = _this.listOfselectedStockHistory.map(function (data) { return new Date(data.date).toDateString().split(" ")[1]; });
                _this.listOfAdjCloseValues = _this.listOfselectedStockHistory.map(function (data) { return data.adjClose; });
                _this.renderSelectedStockChart();
                _this.stockSelectedFlag = true;
            }
            else {
                _this.messageService.add({ severity: 'error', summary: 'ServerError', detail: 'Trouble fetching current Statistics of Selected Stock, try again' });
            }
        }, function (err) {
            _this.messageService.add({ severity: 'error', summary: 'NetworkError', detail: 'Server down. Trouble fetching current Statistics of Selected Stock, try again' });
        });
    };
    UserHistoryComponent.prototype.deleteSelectedStocks = function () {
        var _this = this;
        this.ids = this.selectedStocks.map(function (data) { return data.id; });
        this.userHistoryService.deleteStocksFromUserHistory(this.ids).subscribe(function (data) {
            if (data == true) {
                location.reload();
            }
            else {
                _this.messageService.add({ severity: 'warn', summary: 'No Stocks Selected', detail: 'Please select stocks to delete.' });
                _this.selectedStocks = null;
            }
        }, function (err) {
            _this.messageService.add({ severity: 'error', summary: 'ServerError', detail: 'Trouble deleting selected Stocks, try again' });
        });
    };
    UserHistoryComponent.prototype.applyDarkTheme = function () {
        this.chartConfigOptions = {
            legend: {
                labels: {
                    fontColor: '#ebedef'
                }
            },
            scales: {
                xAxes: [{
                        ticks: {
                            fontColor: '#ebedef'
                        },
                        gridLines: {
                            color: 'rgba(255,255,255,0.2)'
                        }
                    }],
                yAxes: [{
                        ticks: {
                            fontColor: '#ebedef'
                        },
                        gridLines: {
                            color: 'rgba(255,255,255,0.2)'
                        }
                    }]
            }
        };
    };
    UserHistoryComponent.prototype.renderSelectedStockChart = function () {
        this.chartData = {
            labels: this.listOfDates,
            datasets: [
                {
                    type: 'line',
                    label: 'AdjClose',
                    borderColor: '#42A5F5',
                    borderWidth: 2,
                    fill: false,
                    data: this.listOfAdjCloseValues
                }
            ]
        };
        this.applyDarkTheme();
    };
    UserHistoryComponent.ctorParameters = function () { return [
        { type: src_app_services_user_history_service__WEBPACK_IMPORTED_MODULE_4__["UserHistoryService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }
    ]; };
    UserHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-user-history',
            template: _raw_loader_user_history_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]],
            styles: [_user_history_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_user_history_service__WEBPACK_IMPORTED_MODULE_4__["UserHistoryService"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], UserHistoryComponent);
    return UserHistoryComponent;
}());



/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "black-dashboard-angular";
    }
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-root",
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "UMwa":
/*!*************************************************************************!*\
  !*** ./src/app/components/recommendations/recommendations.component.ts ***!
  \*************************************************************************/
/*! exports provided: RecommendationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationsComponent", function() { return RecommendationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_recommendations_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./recommendations.component.html */ "EqOz");
/* harmony import */ var _recommendations_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recommendations.component.scss */ "mH0w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var src_app_services_recommendations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/recommendations.service */ "PBsn");
/* harmony import */ var src_app_models_user_history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/user-history */ "Zxxk");








var RecommendationsComponent = /** @class */ (function () {
    function RecommendationsComponent(recommendationsService, confirmationService, messageService) {
        this.recommendationsService = recommendationsService;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.renderData = false;
        this.showChart = false;
        this.flag = false;
        this.sector = [
            { nameS: 'Automobile', codeS: 'AUTOMOBILE' },
            { nameS: 'Chemicals', codeS: 'CHEMICALS' },
            { nameS: 'Commodities', codeS: 'COMMODITIES' },
            { nameS: 'Consumer Goods', codeS: 'CONSUMER GOODS' },
            { nameS: 'Energy', codeS: 'ENERGY' },
            { nameS: 'Financial Services', codeS: 'FINANCIAL SERVICES' },
            { nameS: 'Infrastructure', codeS: 'INFRASTRUCTURE' },
            { nameS: 'IT', codeS: 'IT' },
            { nameS: 'Metal', codeS: 'METAL' },
            { nameS: 'Pharma', codeS: 'PHARMA' },
            { nameS: 'Telecom', codeS: 'TELECOM' }
        ];
        this.parameter = [
            { nameP: 'Change', codeP: 'CHANGE' },
            { nameP: 'PE Ratio', codeP: 'PE_RATIO' },
            { nameP: 'Market Capital', codeP: 'MARKET_CAP' }
        ];
    }
    RecommendationsComponent.prototype.ngOnInit = function () { };
    RecommendationsComponent.prototype.applyDarkTheme = function () {
        this.chartConfigOptions = {
            legend: {
                labels: {
                    fontColor: '#ebedef'
                }
            },
            scales: {
                xAxes: [{
                        ticks: {
                            fontColor: '#ebedef'
                        },
                        gridLines: {
                            color: 'rgba(255,255,255,0.2)'
                        }
                    }],
                yAxes: [{
                        ticks: {
                            fontColor: '#ebedef'
                        },
                        gridLines: {
                            color: 'rgba(255,255,255,0.2)'
                        }
                    }]
            }
        };
    };
    RecommendationsComponent.prototype.getRecommendations = function () {
        var _this = this;
        this.recommendationsService.getUserRecommendationsByParamaters(this.selectedSector.codeS, this.selectedParameter.codeP).subscribe(function (data) {
            if (data != null && data.length > 0) {
                _this.cols = [
                    { field: 'companySymbol', header: 'Stock' },
                    { field: 'companyName', header: 'Company' },
                    { field: 'open', header: 'Open' },
                    { field: 'close', header: 'Close' },
                    { field: 'high', header: 'High' },
                    { field: 'low', header: 'Low' }
                ];
                _this.listOfRecommendationsForUser = data;
                _this.listOfXaxisCompanySymbols = data.map(function (data) { return data.companySymbol; });
                _this.listOfOpenValues = data.map(function (data) { return data.open; });
                _this.listOfCloseValues = data.map(function (data) { return data.close; });
                _this.listOfHighValues = data.map(function (data) { return data.high; });
                _this.listOfLowValues = data.map(function (data) { return data.low; });
                if (_this.selectedParameter.codeP == "CHANGE") {
                    _this.cols.push({ field: 'change', header: 'Change' });
                }
                if (_this.selectedParameter.codeP == "PE_RATIO") {
                    _this.cols.push({ field: 'peRatio', header: 'PE Ratio' });
                }
                if (_this.selectedParameter.codeP == "MARKET_CAP") {
                    _this.cols.push({ field: 'marketCap', header: 'Market Capital' });
                }
                _this.renderComparisonChart();
                _this.renderData = true;
                _this.showChart = true;
            }
            else {
                _this.messageService.add({ severity: 'error', summary: 'NetworkError', detail: 'Trouble getting User recommendations, try again' });
            }
        }, function (err) {
            _this.messageService.add({ severity: 'error', summary: 'ServerError', detail: 'Server down. Trouble getting User recommendations, try again' });
        });
    };
    RecommendationsComponent.prototype.showPositionDialog = function (companyData) {
        this.position = "right";
        this.selectedStock = companyData;
        this.displayPosition = true;
    };
    RecommendationsComponent.prototype.confirmSaveStock = function (pos) {
        var _this = this;
        this.displayPosition = false;
        this.position = pos;
        this.confirmationService.confirm({
            message: 'Do you want to save this stock?',
            header: 'Save Stock Confirmation',
            icon: 'pi pi-info-circle',
            accept: function () {
                _this.flag = true;
                _this.saveStockSelectedByUser();
            },
            reject: function () {
                _this.flag = false;
                _this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Stock not Saved' });
            },
            key: "positionDialog"
        });
    };
    RecommendationsComponent.prototype.saveStockSelectedByUser = function () {
        var _this = this;
        var stockToSave = new src_app_models_user_history__WEBPACK_IMPORTED_MODULE_6__["UserHistory"]();
        stockToSave.companySymbol = this.selectedStock.companySymbol;
        stockToSave.userId = sessionStorage.getItem("loggedInUser");
        stockToSave.sector = this.selectedSector.codeS;
        stockToSave.volume = Number(this.volume);
        stockToSave.price = this.selectedStock.close;
        this.recommendationsService.saveStockSelectedByUser(stockToSave).subscribe(function (data) {
            if (data != null) {
                _this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Stock saved successfully' });
            }
            else {
                _this.messageService.add({ severity: 'warn', summary: 'NetworkError', detail: 'Stock could not be saved, try again' });
            }
        }, function (err) {
            _this.messageService.add({ severity: 'error', summary: 'ServerError', detail: 'Server down. Stock could not be saved, try again' });
        });
    };
    RecommendationsComponent.prototype.renderComparisonChart = function () {
        this.chartData = {
            labels: this.listOfXaxisCompanySymbols,
            datasets: [
                {
                    type: 'line',
                    label: 'Open',
                    borderColor: '#FFFF6C',
                    borderWidth: 2,
                    fill: false,
                    data: this.listOfOpenValues
                },
                {
                    type: 'bar',
                    label: 'Close',
                    backgroundColor: '#98FE8D',
                    borderWidth: 2,
                    fill: false,
                    data: this.listOfCloseValues
                },
                {
                    type: 'bar',
                    label: 'High',
                    backgroundColor: '#eb3349',
                    borderWidth: 2,
                    fill: true,
                    data: this.listOfHighValues
                },
                {
                    type: 'bar',
                    label: 'Low',
                    backgroundColor: '#9e768f',
                    borderWidth: 2,
                    fill: true,
                    data: this.listOfLowValues
                },
            ]
        };
        this.applyDarkTheme();
    };
    RecommendationsComponent.ctorParameters = function () { return [
        { type: src_app_services_recommendations_service__WEBPACK_IMPORTED_MODULE_5__["RecommendationsService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
    ]; };
    RecommendationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-recommendations',
            template: _raw_loader_recommendations_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]],
            styles: [_recommendations_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_recommendations_service__WEBPACK_IMPORTED_MODULE_5__["RecommendationsService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], RecommendationsComponent);
    return RecommendationsComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "O5bD");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.css */ "mDuy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user */ "2hxB");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(service, router) {
        this.service = service;
        this.router = router;
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"];
        this.message = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        var temp = { userId: this.user.userId, password: btoa(this.user.password.split('').reverse().join('')) };
        this.service.checkLogin(temp).subscribe(function (data) {
            if (data != true) {
                _this.service.isValidUser = false;
                _this.message = "Bad credentials. Please enter valid Username and Password.";
                _this.service.setLoggedIn(false);
            }
            else {
                _this.service.isValidUser = true;
                sessionStorage.setItem("loggedInUser", temp.userId);
                _this.service.setLoggedIn(true);
                sessionStorage.setItem("isLoggedIn", "true");
                _this.router.navigateByUrl("/admin/dashboard");
            }
        }, function (err) {
            _this.message = "Unable to fetch data, Server is down.";
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "Z7I3":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-history/user-history.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hyperlink {\n  cursor: pointer;\n}\n\n.card-body {\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoidXNlci1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmh5cGVybGluayB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59Il19 */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth.guard */ "tIkO");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/chart */ "I5S5");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/tabview */ "dPl2");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/confirmdialog */ "Nf9I");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/dialog */ "/RsI");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/messages */ "dts7");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/carousel */ "LwO5");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/inputswitch */ "rLzU");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/tooltip */ "xlun");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/progressspinner */ "vKg+");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/toast */ "Gxio");




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                primeng_table__WEBPACK_IMPORTED_MODULE_14__["TableModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__["DropdownModule"],
                primeng_chart__WEBPACK_IMPORTED_MODULE_16__["ChartModule"],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_17__["TabViewModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_18__["ButtonModule"],
                primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_19__["ConfirmDialogModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_20__["DialogModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_21__["InputTextModule"],
                primeng_messages__WEBPACK_IMPORTED_MODULE_22__["MessagesModule"],
                primeng_carousel__WEBPACK_IMPORTED_MODULE_23__["CarouselModule"],
                primeng_inputswitch__WEBPACK_IMPORTED_MODULE_24__["InputSwitchModule"],
                primeng_tooltip__WEBPACK_IMPORTED_MODULE_25__["TooltipModule"],
                primeng_progressspinner__WEBPACK_IMPORTED_MODULE_26__["ProgressSpinnerModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_27__["ToastModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_11__["ComponentsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot()
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_8__["AdminLayoutComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"]
            ],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "Zxxk":
/*!****************************************!*\
  !*** ./src/app/models/user-history.ts ***!
  \****************************************/
/*! exports provided: UserHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHistory", function() { return UserHistory; });
var UserHistory = /** @class */ (function () {
    function UserHistory() {
    }
    return UserHistory;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"IqXj",
		"layouts-admin-layout-admin-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "crnd";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _user_history_user_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-history/user-history.component */ "PK01");
/* harmony import */ var _recommendations_recommendations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recommendations/recommendations.component */ "UMwa");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/chart */ "I5S5");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/confirmdialog */ "Nf9I");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dialog */ "/RsI");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/messages */ "dts7");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputswitch */ "rLzU");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/tooltip */ "xlun");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/progressspinner */ "vKg+");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/toast */ "Gxio");





















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__["DropdownModule"], primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"], primeng_chart__WEBPACK_IMPORTED_MODULE_11__["ChartModule"], primeng_button__WEBPACK_IMPORTED_MODULE_12__["ButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__["ConfirmDialogModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_14__["DialogModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__["InputTextModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_16__["MessagesModule"], primeng_inputswitch__WEBPACK_IMPORTED_MODULE_17__["InputSwitchModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_19__["ProgressSpinnerModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_20__["ToastModule"]],
            declarations: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _user_history_user_history_component__WEBPACK_IMPORTED_MODULE_6__["UserHistoryComponent"], _recommendations_recommendations_component__WEBPACK_IMPORTED_MODULE_7__["RecommendationsComponent"]],
            exports: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "mDuy":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".renderBg {\r\n    background-image: url(https://wallpapercave.com/wp/wp2128270.jpg);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    /* background-size: 1550px 871px; */\r\n    font-size: 16;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\nform {\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpRUFBaUU7SUFDakUsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLDZFQUE2RTtBQUNqRjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7O0FBRXRCIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVuZGVyQmcge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vd2FsbHBhcGVyY2F2ZS5jb20vd3Avd3AyMTI4MjcwLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC8qIGJhY2tncm91bmQtc2l6ZTogMTU1MHB4IDg3MXB4OyAqL1xyXG4gICAgZm9udC1zaXplOiAxNjtcclxuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG5cclxufSJdfQ== */");

/***/ }),

/***/ "mH0w":
/*!***************************************************************************!*\
  !*** ./src/app/components/recommendations/recommendations.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNvbW1lbmRhdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "tIkO":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/login.service */ "EFyh");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true" ? true : false;
        if (!isLoggedIn) {
            this.router.navigate(["/login"]);
        }
        return isLoggedIn;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.guard */ "tIkO");








var routes = [
    // { path:'', redirectTo:'/login', pathMatch:'full' },
    // { path:'', component:LoginComponent },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path: "admin",
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        children: [
            {
                path: "",
                loadChildren: "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "vtrx":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "KKA+");
/* harmony import */ var _sidebar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.component.css */ "2DHQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





var ROUTES = [
    {
        path: "dashboard",
        title: "Dashboard",
        icon: "icon-chart-pie-36",
        class: ""
    },
    {
        path: "userhistory",
        title: "User History",
        icon: "icon-book-bookmark",
        class: ""
    },
    {
        path: "recommendations",
        title: "Propositions",
        icon: "icon-tap-02",
        class: ""
    }
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router) {
        this.router = router;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        this.userName = sessionStorage.getItem("loggedInUser");
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if (window.innerWidth > 991) {
            return false;
        }
        return true;
    };
    SidebarComponent.prototype.logout = function () {
        sessionStorage.clear();
        this.router.navigate(["/login"]);
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-sidebar",
            template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_sidebar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*
 =========================================================
 * Black Dashboard Angular - v1.2.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/black-dashboard-angular
 * Copyright 2020 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map