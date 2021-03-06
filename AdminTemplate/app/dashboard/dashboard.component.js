"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var dashboard_service_1 = require('../shared/dashboard.service');
var DashboardComponent = (function () {
    function DashboardComponent(dashboardService) {
        this.dashboardService = dashboardService;
    }
    DashboardComponent.prototype.sendName = function (name) {
        var _this = this;
        if (name) {
            this.dashboardService.getIntroduction(name)
                .subscribe(function (hi) { return _this.hello = hi.Result; }, function (error) { return _this.errorMessage = error; });
        }
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            templateUrl: "app/dashboard/dashboard.component.html",
            styleUrls: ['app/dashboard/dashboard.component.css'],
            providers: [dashboard_service_1.DashboardService]
        }), 
        __metadata('design:paramtypes', [dashboard_service_1.DashboardService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map