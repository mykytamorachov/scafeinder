import { Injectable } from '@angular/core';
import { Http, Headers, Response, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private BASE_URL = 'http://localhost:3000';
  public token: string;

  constructor(private http: Http) {
   }

  login(user: any) {
    console.log('user in login is ', user);
    const url = `${this.BASE_URL}/login`;
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(url, user, { headers }).map((response: Response) => {
      const data = response.json();
      console.log('data in login is ', data);
      if (data.status === 'success' && data.token) {
        console.log('data.token in login is ', data.token);
        localStorage.setItem('currentUser', data.token);
      }
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
