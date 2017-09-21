import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import { Restaurant } from '../../models/restaurant.model';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Injectable()
export class GetCafesService {
  private restaurants: Restaurant[] = [
    new Restaurant('White Lion',
    'pub',
    '15 Lesya Ukrainka Str.',
    '(067) 675 51 23',
    'http://mylviv.com/wp-content/uploads/2012/05/DSCN6650-800x600.jpg',
    ['Ukrainian', 'Polish'],
    ['live music', 'Wi-Fi']),
    new Restaurant('VARKA',
    'pub',
    '1 Kornyakta Str.',
    '(098) 918 45 91',
    'http://lviv.carpediem.cd/data/afisha/o/b7/83/b7839fb400.jpg',
    ['Ukrainian', 'European'],
    ['summer terrace', 'Wi-Fi']),
    new Restaurant('PRAVDA',
    'pub',
    '32 Rynok Sqr.',
    '(050) 374 49 86',
    'http://beerplace.com.ua/wp-content/uploads/pravda-beer-theatre-lviv-logo.png',
    ['Vegetarian', 'European', 'Ukrainian'],
    ['live music', 'Wi-Fi', 'summer terrace']),
    new Restaurant('Vienna Coffee House',
    'coffee house',
    '12 Svobody Ave.',
    '(050) 391 22 40',
    'https://ua.igotoworld.com/frontend/webcontent/websites/1/images/gallery/24908_800x600_4.jpg',
    ['European'],
    ['live music', 'Wi-Fi']),
    new Restaurant('Na Bambetli',
    'coffee house',
    '29 Rynok Sqr.',
    '(032) 235 45 44',
    'http://guide-cafe.in.ua/wp-content/uploads/Lviv-na-bambetli-radio.jpg',
    ['European'],
    ['summer terrace']),
    new Restaurant('Red Pepper',
    'sushi',
    '5 Sichovykh Striltsiv Str.',
    '(068) 320 37 39',
    'https://igx.4sqi.net/img/general/200x200/53288981_xwE-cyeDxN98RmpsnDXRAGnfFn815ttHMSbPahqRo-o.jpg',
    ['European', 'Japanese', 'Chinese', 'Thai', 'Italian'],
    ['summer terrace', 'Wi-Fi'])
  ];

  constructor(private http: Http) { }

  getAllCafes() {
    // const url = 'http://localhost:3000/cafes';
    // return this.http.get(url);
    return this.restaurants;
  }
}
