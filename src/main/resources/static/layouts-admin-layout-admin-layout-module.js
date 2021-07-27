(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-admin-layout-admin-layout-module"],{

/***/ "0AbP":
/*!***********************************************!*\
  !*** ./src/app/services/dashboard.service.ts ***!
  \***********************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        this.http = http;
        this.backendUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl;
    }
    DashboardService.prototype.getLatestNews = function () {
        return this.http.get("https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fe85013235624481abbe65c9f37baf27");
    };
    DashboardService.prototype.getSectorWiseComparison = function () {
        return this.http.get(this.backendUrl + "/sectorStocks/showSectorWiseChange");
    };
    DashboardService.prototype.getTopPerformingStockDetails = function () {
        return this.http.get(this.backendUrl + "/userHistory/showTopPerformingStock/" + sessionStorage.getItem("loggedInUser"));
    };
    DashboardService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    DashboardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "IqXj":
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-layout.routing */ "qZ7x");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/dashboard/dashboard.component */ "Lquv");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/carousel */ "LwO5");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/progressspinner */ "vKg+");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");













var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_6__["AdminLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
                primeng_progressspinner__WEBPACK_IMPORTED_MODULE_10__["ProgressSpinnerModule"],
                primeng_carousel__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_11__["ToastModule"]
            ],
            declarations: [
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
            ]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());



/***/ }),

/***/ "Lquv":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "SFq8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dashboard.service */ "0AbP");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "7zfz");






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dashboardService, messageService) {
        this.dashboardService = dashboardService;
        this.messageService = messageService;
        this.listOfSectors = [];
        this.listOfAvgGrowth = [];
        this.sectorWiseDataFlag = false;
        this.newsDataFlag = false;
        this.topStockFlag = false;
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.getLatestNews().subscribe(function (data) {
            if (data != null && data.articles.length > 0) {
                _this.latestNews = data.articles;
                _this.newsDataFlag = true;
            }
            else {
                _this.messageService.add({ severity: 'error', summary: 'NetworkError', detail: 'Trouble getting latest news, try again' });
            }
        }, function (err) {
            _this.messageService.add({ severity: 'error', summary: 'ServerError', detail: 'Server Down. Trouble getting latest news, try again' });
        });
        this.dashboardService.getSectorWiseComparison().subscribe(function (data) {
            if (data != null && data.length > 0) {
                _this.listOfSectors = data.map(function (data) { return data.sector; });
                _this.listOfAvgGrowth = data.map(function (data) { return data.avgGrowth; });
                _this.sectorWiseDataFlag = true;
                _this.renderSectorsTable();
            }
            else {
                _this.messageService.add({ severity: 'error', summary: 'NetworkError', detail: 'Trouble getting Sector Wise Comparison, try again' });
            }
        }, function (err) {
            _this.messageService.add({ severity: 'error', summary: 'ServerError', detail: 'Server down. Trouble getting Sector Wise Comparison, try again' });
        });
        this.dashboardService.getTopPerformingStockDetails().subscribe(function (data) {
            if (data != null) {
                _this.topPerformingStock = data;
                _this.topStockFlag = true;
            }
            else {
                _this.messageService.add({ severity: 'error', summary: 'NetworkError', detail: 'Trouble getting Top Performing Stock, try again' });
            }
        }, function (err) {
            _this.messageService.add({ severity: 'error', summary: 'ServerError', detail: 'Server down. Trouble getting Top Performing Stock, try again' });
        });
    };
    DashboardComponent.prototype.renderSectorsTable = function () {
        var gradientBarChartConfiguration = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(29,140,248,0.1)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            suggestedMin: 60,
                            suggestedMax: 60,
                            padding: 20,
                            fontColor: "#9e9e9e"
                        }
                    }],
                xAxes: [{
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(29,140,248,0.1)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#9e9e9e"
                        }
                    }]
            }
        };
        this.canvas = document.getElementById("SectorChart");
        this.ctx = this.canvas.getContext("2d");
        var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
        gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
        gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
        gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors
        var myChart = new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(this.ctx, {
            type: 'bar',
            responsive: true,
            legend: {
                display: false
            },
            data: {
                labels: this.listOfSectors,
                datasets: [{
                        label: "Avg Growth",
                        fill: true,
                        backgroundColor: gradientStroke,
                        hoverBackgroundColor: gradientStroke,
                        borderColor: '#1f8ef1',
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        data: this.listOfAvgGrowth,
                    }]
            },
            options: gradientBarChartConfiguration
        });
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }
    ]; };
    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-dashboard",
            template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "SFq8":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-toast></p-toast>\r\n<div class=\"content\">\r\n  <div class=\" row\">\r\n    <div class=\" col-lg-12\">\r\n      <div class=\" card card-chart\">\r\n        <div class=\" card-header\">\r\n          <h4 class=\" card-category\">All Sectors</h4>\r\n          <h2 class=\" card-title\">\r\n            <i class=\" tim-icons icon-chart-bar-32 text-info\"> </i> SECTOR WISE COMPARISON\r\n          </h2>\r\n        </div>\r\n        <div class=\" card-body\">\r\n          <div *ngIf=\"!sectorWiseDataFlag\" style=\"text-align: center;\">\r\n            <p-progressSpinner></p-progressSpinner>\r\n          </div>\r\n          <div class=\" chart-area\">\r\n            <canvas id=\"SectorChart\"> </canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\" row\">\r\n    <div class=\" col-lg-6\">\r\n      <div class=\" card card-chart\">\r\n        <div class=\" card-header\">\r\n          <div class=\" row\">\r\n            <div class=\" col-sm-12 text-left\">\r\n              <h5 class=\" card-category\">Current News</h5>\r\n              <h4 class=\" card-title\">\r\n                <i class=\" tim-icons icon-bulb-63 text-success\"> </i> TOP BUSINESS HEADLINES\r\n              </h4>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\" card-body\">\r\n          <div *ngIf = \"!newsDataFlag\" style=\"text-align: center;\">\r\n            <p-progressSpinner></p-progressSpinner>\r\n          </div>\r\n          <p-carousel *ngIf=\"newsDataFlag\" [value]=\"latestNews\" styleClass=\"custom-carousel\" [numVisible]=\"1\" [numScroll]=\"1\"\r\n            [circular]=\"true\" [autoplayInterval]=\"4000\" [responsiveOptions]=\"responsiveOptions\">\r\n            <ng-template let-newsArticle pTemplate=\"item\">\r\n              <img src=\"{{newsArticle.urlToImage}}\" alt=\"{{newsArticle.urlToImage}}\" style=\"max-height: 300px;\"><br>\r\n              <a href=\"{{newsArticle.url}}\" style=\"color: white;\"><u>{{newsArticle.title}}</u></a>\r\n            </ng-template>\r\n          </p-carousel>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\" col-lg-6\">\r\n      <div class=\" card card-chart\">\r\n        <div class=\" card-header\">\r\n          <div class=\" row\">\r\n            <div class=\" col-sm-12 text-left\">\r\n              <h5 class=\" card-category\">User History Based</h5>\r\n\r\n              <h4 class=\" card-title\">\r\n                <i class=\" tim-icons icon-trophy text-success\" pTooltip=\"Enter your username\" tooltipPosition=\"left\">\r\n                </i> TOP PERFORMING STOCK\r\n              </h4>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\" card-body\">\r\n          <div *ngIf=\"!topStockFlag\" style=\"text-align: center;\">\r\n            <p-progressSpinner></p-progressSpinner>\r\n          </div>\r\n          <h4 *ngIf=\"topStockFlag\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\" style=\"text-align: center;\">\r\n                <h1 style=\"color: #1DCEF1;\">{{topPerformingStock.companySymbol}}</h1>\r\n                <h2 style=\"color: #25D4E6;\"> {{topPerformingStock.companyName}}</h2>\r\n                <h4 style=\"color: #2DDADB;\">Market Capital : {{topPerformingStock.marketCap | number}} INR</h4><br>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                    <h4 style=\"color: #35E0D1;\"><u>Volume</u><br>\r\n                      {{topPerformingStock.volume | number}}\r\n                    </h4>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <h4 style=\"color: #35E0D1;\"><u>Change %</u><br>\r\n                      {{topPerformingStock.change | number}}\r\n                    </h4>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <h4 style=\"color: #35E0D1;\"><u>PE Ratio</u><br>\r\n                      {{topPerformingStock.peRatio | number}}\r\n                    </h4>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <br><br>\r\n\r\n            <div class=\"row\" style=\"text-align: center;\">\r\n              <div class=\"col-lg-3\">\r\n                <h4 style=\"color: #3DE6C6;\">\r\n                  <u>Open</u><br>\r\n                  {{topPerformingStock.open | number}} INR\r\n                </h4>\r\n              </div>\r\n              <div class=\"col-lg-3\">\r\n                <h4 style=\"color: #3DE6C6;\">\r\n                  <u>Close</u><br>\r\n                  {{topPerformingStock.close | number}} INR\r\n                </h4>\r\n              </div>\r\n              <div class=\"col-lg-3\">\r\n                <h4 style=\"color: #3DE6C6;\">\r\n                  <u>High</u><br>\r\n                  {{topPerformingStock.high | number}} INR\r\n                </h4>\r\n              </div>\r\n              <div class=\"col-lg-3\">\r\n                <h4 style=\"color: #3DE6C6;\">\r\n                  <u>Low</u><br>\r\n                  {{topPerformingStock.low | number}} INR\r\n                </h4>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </h4>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "qZ7x":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function() { return AdminLayoutRoutes; });
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/dashboard/dashboard.component */ "Lquv");
/* harmony import */ var src_app_components_user_history_user_history_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/user-history/user-history.component */ "PK01");
/* harmony import */ var src_app_components_recommendations_recommendations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/recommendations/recommendations.component */ "UMwa");



var AdminLayoutRoutes = [
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"] },
    { path: 'userhistory', component: src_app_components_user_history_user_history_component__WEBPACK_IMPORTED_MODULE_1__["UserHistoryComponent"] },
    { path: 'recommendations', component: src_app_components_recommendations_recommendations_component__WEBPACK_IMPORTED_MODULE_2__["RecommendationsComponent"] },
];


/***/ })

}]);
//# sourceMappingURL=layouts-admin-layout-admin-layout-module.js.map