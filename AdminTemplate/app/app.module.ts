import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './shared/dashboard.service';
import { AppRoutingModule, routedComponents } from './app-routing.module';

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        routedComponents
    ],
    providers: [DashboardService],
    bootstrap: [AppComponent]
})
export class AppModule { }
