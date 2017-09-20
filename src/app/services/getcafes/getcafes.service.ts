import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Injectable()
export class GetCafesService {
    constructor(private http: Http) { }
    public getAllCafes() {
        const url = 'http://localhost:3000/cafes';
        return this.http.get(url);
    }
}
