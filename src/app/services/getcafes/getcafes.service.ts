import { Injectable } from '@angular/core';
import { Http, Headers, Response, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ICafe } from '../../models/cafe.interface';

@Injectable()
export class GetCafesService {
  private restaurants: ICafe[];

  constructor(private http: Http) { }

  getAllCafes(): Observable<ICafe[]> {
    return this.http.get('/cafes')
      .map(
        (response: Response) => {
          return response.json();
      });
  }

  getCafeById(id): Observable<ICafe[]> {
    return this.http.get('/cafe/' + id)
      .map(
        (response: Response) => {
          return response.json();
      });
  }
}
