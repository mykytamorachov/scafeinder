import { Injectable } from '@angular/core';
import { Http, Headers, Response, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private BASE_URL = 'http://localhost:3000';
  public token: string;


  constructor(public router: Router, private http: Http) {
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
        // localStorage.setItem('currentUser', data.token);
        const expiresAt = JSON.stringify(100000 + new Date().getTime());
        localStorage.setItem('access_token', data.token);
        localStorage.setItem('id_token', data.id);
        localStorage.setItem('expires_at', expiresAt);
      }
    });
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.router.navigate(['/']);
  }

  register(user: any) {
    const url = `${this.BASE_URL}/register`;
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(url, user, { headers });
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}
