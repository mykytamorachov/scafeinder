import { Injectable } from '@angular/core';
import { Http, Headers, Response, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private BASE_URL = '';
  public token: string;

  constructor(public router: Router, private http: Http) {
   }

  login(user: any) {
    const url = `/login`;
    const headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
    return this.http.post(url, user, { headers }).map((response: Response) => {
      const data = response.json();
      if (data.status === 'success' && data.token) {
        const expiresAt = JSON.stringify((2.88e+7) + new Date().getTime());
        localStorage.setItem('access_token', data.token);
        localStorage.setItem('id_token', data.id);
        localStorage.setItem('expires_at', expiresAt);
        this.router.navigate(['/']);
        return response.json();
      }
      return response.json();
    });
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.router.navigate(['/']);
  }

  register(user: any) {
    const url = `/register`;
    const headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
    return this.http.post(url, user, { headers }).map((response: Response) => {
      return response.json();
    });
  }

  public isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}
