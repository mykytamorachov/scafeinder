import { Injectable } from '@angular/core';
import { Http, Headers, Response, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BookingService {
  constructor(private http: Http) {
  }
  booking(data: any) {
    const url = `/cafes/${data.resId}`;
    const headers = new Headers({'Content-Type': 'application/json'});
    console.log(url);
    console.log(data);
    return this.http.put(url, JSON.stringify(data), { headers }).subscribe(( info ) =>
      console.log(info)
    );
  }
}
