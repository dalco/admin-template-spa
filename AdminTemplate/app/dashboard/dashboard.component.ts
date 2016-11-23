import { Component } from '@angular/core';

import { DashboardService } from '../shared/dashboard.service';

import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'dashboard',
    templateUrl: "app/dashboard/dashboard.component.html",
    styleUrls: ['app/dashboard/dashboard.component.css'],
    providers: [DashboardService]
})
export class DashboardComponent {

    errorMessage: string;
    name: string;
    hello: any;

    constructor(private dashboardService: DashboardService) { }

    sendName(name: string) {
        if (name) {
            this.dashboardService.getIntroduction(name)
                .subscribe(
                (hi: any) => this.hello = hi.Result,
                error => this.errorMessage = <any>error);
        }
    }

}
