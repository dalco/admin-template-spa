import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';


@Injectable()
export class DashboardService {
    authHeader = new Headers();
    private _apiUrl = 'http://localhost:3704/';

    constructor(private _http: Http) {
        this.authHeader.append('Content-Type', 'application/json');
    }

    getIntroduction(name: string): Observable<any> {
        return this._http.get(this._apiUrl + `hello/${name}`, {
            headers: this.authHeader
        })
            .map((response: Response) => response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}