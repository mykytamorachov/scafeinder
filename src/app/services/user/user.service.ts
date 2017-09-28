import { Injectable } from '@angular/core';
import { Http, Headers, Response, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUserData() {
    const userID = {id: localStorage.getItem('id_token')};
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('/profile', userID, { headers });
    // .map((response: Response) => {
    //   const data = response.json();
    //   console.log('data  is ', data);
    // });
  }
}
