import { Injectable } from '@angular/core';
import { Http, Headers, Response, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUserData() {
    const userID = localStorage.getItem('id_token');
    return this.http.get('/profile/' + userID);
  }

  updateUserData(user) {
    const userID = localStorage.getItem('id_token');
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('/profile/' + userID, user, {headers});
  }

  deleteUserData() {
    const userID = localStorage.getItem('id_token');
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.delete('/profile/' + userID, {headers});
  }
}
