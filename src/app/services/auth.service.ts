import { Injectable } from '@angular/core';
import { Http, Headers, Response, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private BASE_URL = 'http://localhost:3000';
  public token: string;

  constructor(private http: Http) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
   }

  login(user: any) {
    console.log('user in login is ', user);
    const url = `${this.BASE_URL}/login`;
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(url, user, { headers }).map((response: Response) => {
      // Login success, if token received
      console.log('response in login is ', response);
      const data = response.text();
      console.log('data in login is ', data);
      // if (data && data.access_token) {
      //   localStorage.setItem('currentUser', JSON.stringify(data));
      // }
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  register(user: any) {
    const url = `${this.BASE_URL}/register`;
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(url, user, { headers });
  }
}
