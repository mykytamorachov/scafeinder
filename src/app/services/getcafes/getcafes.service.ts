import { Injectable } from '@angular/core';
import { Http, Headers, Response, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ICafe } from '../../models/cafe.interface';

@Injectable()
export class GetCafesService {
  private restaurants: ICafe[];

  constructor(private http: Http) { }

  getAllCafes(): Observable<ICafe[]> {
    return this.http.get('http://localhost:3000/cafes')
      .map(
        (response: Response) => {
          return response.json();
      });
  }

  getCafeById(id): Observable<ICafe> {
    return this.http.get('http://localhost:3000/cafes/' + id)
      .map(
        (response: Response) => {
          return response.json();
      });
  }

  getCafesById(id) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/cafes', {favorites: id}, { headers });
    // const restaurants = [];
    // for (let i = 0; i < this.restaurants.length; i++) {
    //   for (let j = 0; j < id.length; j++) {
    //     if (this.restaurants[i].id === id[j]) {
    //       restaurants.push(this.restaurants[i]);
    //     }
    //   }
    // }
    // return restaurants;
  }

}
