import { Injectable } from '@angular/core';
import { Http, Headers, Response, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ICafe } from '../../models/cafe.interface';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Injectable()
export class GetCafesService {
  private restaurants: ICafe[] = [
    {
      time: {
        '08:00': [{tableType: 2, number: 3}, {tableType: 4, number: 0}],
        '09:00': [{tableType: 2, number: 3}, {tableType: 4, number: 0}],
        '10:00': [{tableType: 2, number: 3}, {tableType: 4, number: 0}],
        '11:00': [{tableType: 2, number: 4}, {tableType: 4, number: 1}],
        '12:00': [{tableType: 2, number: 3}, {tableType: 4, number: 1}],
        '13:00': [{tableType: 2, number: 3}, {tableType: 4, number: 1}],
        '14:00': [{tableType: 2, number: 4}, {tableType: 4, number: 1}],
        '15:00': [{tableType: 2, number: 3}, {tableType: 4, number: 1}],
        '16:00': [{tableType: 2, number: 1}, {tableType: 4, number: 1}],
        '17:00': [{tableType: 2, number: 3}, {tableType: 4, number: 2}],
        '18:00': [{tableType: 2, number: 4}, {tableType: 4, number: 2}],
        '19:00': [{tableType: 2, number: 3}, {tableType: 4, number: 2}],
        '20:00': [{tableType: 2, number: 3}, {tableType: 4, number: 2}],
        '21:00': [{tableType: 2, number: 2}, {tableType: 4, number: 3}],
        '22:00': [{tableType: 2, number: 1}, {tableType: 4, number: 3}],
        '23:00': [{tableType: 2, number: 3}, {tableType: 4, number: 3}],
        '00:00': [{tableType: 2, number: 0}, {tableType: 4, number: 0}],
        '01:00': [{tableType: 2, number: 0}, {tableType: 4, number: 0}]
    },
    cuisines: ['European', 'Galician', 'Jewish', 'Polish', 'Ukrainian', 'Vegetarian'],
    features: ['live music', 'movie screenings', 'pet-friendly', 'summer terrace', 'Wi-Fi'],
    categories: ['luxury restaurant'],
    bookings: {
      '2017-10-02': {
        capacity: 26,
        tables: [{
          userId: 12356878,
          time: '17:00',
          people: 7,
          tableType: 4,
          number: 2
        }, {
          userId: 82556178,
          time: '21:00',
          people: 5,
          tableType: 2,
          number: 3
        }]
      }
    },
    location: { lat: 49.8422154, lng: 24.0299315 },
    name: 'Baczewski Restaurant',
    rating: 4.6,
    address: '8 Shevska Str., Lviv, Ukraine',
    phones: ['+38 (098) 224-44-44', '+38 (032) 235-71-81'],
    web: 'http://kumpelgroup.com/restaurants/baczewski',
    img: 'https://afisha.lviv.ua/sites/image.life/company624/logo-624-fileffp-name-only-original-3662-kb.jpg',
    id: 1
    },
    {
      time: {
        '10:00': [{tableType: 2, number: 0}, {tableType: 4, number: 4}],
        '11:00': [{tableType: 2, number: 1}, {tableType: 4, number: 3}],
        '12:00': [{tableType: 2, number: 2}, {tableType: 4, number: 2}],
        '13:00': [{tableType: 2, number: 3}, {tableType: 4, number: 1}],
        '14:00': [{tableType: 2, number: 4}, {tableType: 4, number: 0}],
        '15:00': [{tableType: 2, number: 0}, {tableType: 4, number: 0}],
        '16:00': [{tableType: 2, number: 1}, {tableType: 4, number: 0}],
        '17:00': [{tableType: 2, number: 2}, {tableType: 4, number: 1}],
        '18:00': [{tableType: 2, number: 3}, {tableType: 4, number: 2}],
        '19:00': [{tableType: 2, number: 4}, {tableType: 4, number: 3}],
        '20:00': [{tableType: 2, number: 0}, {tableType: 4, number: 4}],
        '21:00': [{tableType: 2, number: 2}, {tableType: 4, number: 3}],
        '22:00': [{tableType: 2, number: 1}, {tableType: 4, number: 2}]
    },
    cuisines: ['European', 'Italian', 'Ukrainian', 'Vegetarian'],
    features: ['bicycle parking', 'live music', 'movie screenings', 'summer terrace', 'Wi-Fi'],
    categories: ['pub'],
    bookings: {
      '2017-10-02': {
        capacity: 28,
        tables: [{
          userId: 12356878,
          time: '17:00',
          people: 7,
          tableType: 4,
          number: 2
        }, {
          userId: 82556178,
          time: '21:00',
          people: 5,
          tableType: 2,
          number: 3
        }]
      }
    },
    location: { lat: 49.8406424, lng: 24.0259706 },
    name: 'Kryva Lypa',
    rating: 4.6,
    address: '8 Kryva Lypa lane, Lviv, Ukraine',
    phones: ['+38 (032) 255-31-00', '+38 (098) 094-81-01'],
    web: 'http://kryva-lypa.com',
    img: 'https://center.lviv.ua/attachment.php?attachmentid=30068&d=1291503633',
    id: 2
    },
    {
      time: {
        '11:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '12:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '13:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '14:00': [{tableType: 2, number: 4}, {tableType: 4, number: 2}],
        '15:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '16:00': [{tableType: 2, number: 1}, {tableType: 4, number: 1}],
        '17:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '18:00': [{tableType: 2, number: 4}, {tableType: 4, number: 4}],
        '19:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '20:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '21:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '22:00': [{tableType: 2, number: 1}, {tableType: 4, number: 2}],
        '23:00': [{tableType: 2, number: 1}, {tableType: 4, number: 2}]
    },
    cuisines: ['Galician', 'Hungarian', 'Italian', 'Polish', 'Ukrainian'],
    features: ['live music', 'summer terrace', 'Wi-Fi'],
    categories: ['brewery', 'pub'],
    bookings: {
      '2017-10-02': {
        capacity: 22,
        tables: [{
          userId: 12356878,
          time: '17:00',
          people: 7,
          tableType: 4,
          number: 2
        }, {
          userId: 82556178,
          time: '21:00',
          people: 5,
          tableType: 2,
          number: 3
        }]
      }
    },
    location: { lat: 49.8466037, lng: 24.0258222 },
    name: 'Kumpel',
    rating: 4.6,
    address: '2B Chornovola Ave., Lviv, Ukraine',
    phones: ['+38 (032) 229-51-77', '+38 (068) 998-99-95'],
    web: 'http://kumpelgroup.com/restaurants/new-kumpel',
    img: 'https://afisha.lviv.ua/sites/image.life/company669/logo-669-fileffp-name-only-original-81485-kb.png',
    id: 3
    },
    {
      time: {
        '10:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '11:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '12:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '13:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '14:00': [{tableType: 2, number: 4}, {tableType: 4, number: 2}],
        '15:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '16:00': [{tableType: 2, number: 1}, {tableType: 4, number: 1}],
        '17:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '18:00': [{tableType: 2, number: 4}, {tableType: 4, number: 4}],
        '19:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '20:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '21:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '22:00': [{tableType: 2, number: 1}, {tableType: 4, number: 2}],
        '23:00': [{tableType: 2, number: 1}, {tableType: 4, number: 2}],
        '00:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '01:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}]
    },
    cuisines: ['European', 'Ukrainian'],
    features: ['museum', 'roof terrace', 'summer terrace', 'Wi-Fi'],
    categories: ['pub', 'thematic restaurant'],
    bookings: {
      '2017-10-02': {
        capacity: 28,
        tables: [{
          userId: 12356878,
          time: '17:00',
          people: 7,
          tableType: 4,
          number: 2
        }, {
          userId: 82556178,
          time: '21:00',
          people: 5,
          tableType: 2,
          number: 3
        }]
      }
    },
    location: { lat: 49.8431720, lng: 24.0316031 },
    name: 'Gasova Lampa',
    rating: 4.6,
    address: '20 Virmenska Str., Lviv, Ukraine',
    phones: ['+38 (050) 430-14-51'],
    web: 'http://www.fest.lviv.ua/uk/restaurants/gasovalampa',
    img: 'http://www.lvov.ws/wp-content/sabai/File/files/l_374cc81c114cb7e45cbdf723252e040e.jpg',
    id: 4
    },
    {
      time: {
        '12:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '13:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '14:00': [{tableType: 2, number: 4}, {tableType: 4, number: 2}],
        '15:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '16:00': [{tableType: 2, number: 1}, {tableType: 4, number: 1}],
        '17:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '18:00': [{tableType: 2, number: 4}, {tableType: 4, number: 4}],
        '19:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '20:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '21:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '22:00': [{tableType: 2, number: 1}, {tableType: 4, number: 2}],
        '23:00': [{tableType: 2, number: 1}, {tableType: 4, number: 2}],
        '00:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '01:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}]
    },
    cuisines: ['Polish', 'Ukrainian'],
    features: ['summer terrace', 'Wi-Fi'],
    categories: ['pub'],
    bookings: {
      '2017-10-04': {
        capacity: 24,
        tables: [{
          userId: 32526871,
          time: '14:00',
          people: 13,
          tableType: 2,
          number: 7
        }, {
          userId: 82556178,
          time: '21:00',
          people: 5,
          tableType: 4,
          number: 2
        }]
      }
    },
    location: { lat: 49.8438986, lng: 24.0302972 },
    name: 'White Lion',
    rating: 4.7,
    address: '15 Lesya Ukrainka Str., Lviv, Ukraine',
    phones: ['+38 (032) 235-46-25', '+38 (067) 675-51-23'],
    web: 'http://www.white-lion.com.ua',
    img: 'http://lviv-online.com/ua/wp-content/uploads/2013/01/pub_bilyj_lev.jpg',
    id: 5
    },
    {
      time: {
        '11:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '12:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '13:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '14:00': [{tableType: 2, number: 4}, {tableType: 4, number: 2}],
        '15:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '16:00': [{tableType: 2, number: 1}, {tableType: 4, number: 1}],
        '17:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '18:00': [{tableType: 2, number: 4}, {tableType: 4, number: 4}],
        '19:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '20:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '21:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '22:00': [{tableType: 2, number: 1}, {tableType: 4, number: 2}],
        '23:00': [{tableType: 2, number: 1}, {tableType: 4, number: 2}],
        '00:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '01:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}]
    },
    cuisines: ['European', 'Ukrainian', 'Vegetarian'],
    features: ['live music', 'summer terrace', 'Wi-Fi'],
    categories: ['brewery', 'pub'],
    bookings: {
      '2017-10-02': {
        capacity: 18,
        tables: [{
          userId: 12356878,
          time: '17:00',
          people: 11,
          tableType: 4,
          number: 3
        }, {
          userId: 82556178,
          time: '21:00',
          people: 5,
          tableType: 2,
          number: 3
        }]
      }
    },
    location: { lat: 49.8421389, lng: 24.0304114 },
    name: 'PRAVDA Beer Theater',
    rating: 4.5,
    address: '32 Rynok Sqr., Lviv, Ukraine',
    phones: ['+38 (067) 310-83-23', '+38 (050) 374-49-86'],
    web: 'http://www.pravda.beer',
    img: 'http://beerplace.com.ua/wp-content/uploads/pravda-beer-theatre-lviv-logo.png',
    id: 6
    },
    {
      time: {
        '09:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '10:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '11:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '12:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '13:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '14:00': [{tableType: 2, number: 4}, {tableType: 4, number: 2}],
        '15:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '16:00': [{tableType: 2, number: 1}, {tableType: 4, number: 1}],
        '17:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '18:00': [{tableType: 2, number: 4}, {tableType: 4, number: 4}],
        '19:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '20:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '21:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '22:00': [{tableType: 2, number: 1}, {tableType: 4, number: 2}],
        '23:00': [{tableType: 2, number: 1}, {tableType: 4, number: 2}]
    },
    cuisines: ['European', 'Galician', 'Hungarian', 'Ukrainian'],
    features: ['billiards', 'live music', 'summer terrace', 'Wi-Fi'],
    categories: ['coffee house'],
    bookings: {
      '2017-10-04': {
        capacity: 20,
        tables: [{
          userId: 12356878,
          time: '18:00',
          people: 4,
          tableType: 4,
          number: 1
        }, {
          userId: 82556178,
          time: '19:00',
          people: 14,
          tableType: 2,
          number: 7
        }]
      }
    },
    location: { lat: 49.8409210, lng: 24.0287660 },
    name: 'Vienna Coffee House',
    rating: 4.8,
    address: '12 Svobody Ave., Lviv, Ukraine',
    phones: ['+38 (032) 235-87-21', '+38 (050) 391-22-40'],
    web: 'http://www.wienkaffe.com.ua',
    img: 'http://www.turystycni-marky.com.ua/images/9500004_wiener_kaffeehaus-2.jpg',
    id: 7
    },
    {
      time: {
        '10:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '11:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '12:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '13:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '14:00': [{tableType: 2, number: 4}, {tableType: 4, number: 2}],
        '15:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '16:00': [{tableType: 2, number: 1}, {tableType: 4, number: 1}],
        '17:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '18:00': [{tableType: 2, number: 4}, {tableType: 4, number: 4}],
        '19:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '20:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '21:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}]
    },
    cuisines: ['European', 'Galician'],
    features: ['non-smoking area', 'summer terrace', 'Wi-Fi'],
    categories: ['coffee house'],
    bookings: {
      '2017-10-02': {
        capacity: 28,
        tables: [{
          userId: 12356878,
          time: '17:00',
          people: 7,
          tableType: 4,
          number: 2
        }, {
          userId: 82556178,
          time: '21:00',
          people: 5,
          tableType: 2,
          number: 3
        }]
      }
    },
    location: { lat: 49.8416410, lng: 24.0300720 },
    name: 'Na Bambetli',
    rating: 4.6,
    address: '29 Rynok Sqr., Lviv, Ukraine',
    phones: ['+38 (032) 235-45-44'],
    web: 'http://nabambetli.com',
    img: 'http://guide-cafe.in.ua/wp-content/uploads//logo-na-bambetli-bb941ae7a78e8f2fe51e9db9bef8e8fe.jpg',
    id: 8
    },
    {
      time: {
        '07:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '08:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '09:00': [{tableType: 2, number: 4}, {tableType: 4, number: 2}],
        '10:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '11:00': [{tableType: 2, number: 1}, {tableType: 4, number: 1}],
        '12:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '13:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '14:00': [{tableType: 2, number: 4}, {tableType: 4, number: 2}],
        '15:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '16:00': [{tableType: 2, number: 1}, {tableType: 4, number: 1}],
        '17:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '18:00': [{tableType: 2, number: 4}, {tableType: 4, number: 4}],
        '19:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '20:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '21:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}]
    },
    cuisines: ['European'],
    features: ['summer terrace', 'Wi-Fi'],
    categories: ['coffee house'],
    bookings: {
      '2017-10-02': {
        capacity: 26,
        tables: [{
          userId: 12356878,
          time: '17:00',
          people: 7,
          tableType: 4,
          number: 2
        }, {
          userId: 82556178,
          time: '21:00',
          people: 5,
          tableType: 2,
          number: 3
        }]
      }
    },
    location: { lat: 49.8434696, lng: 24.0297379 },
    name: 'Brown Tea & Coffee Shop',
    rating: 4.3,
    address: '1 Kornyakta Str., Lviv, Ukraine',
    phones: ['+38 (067) 737-88-98'],
    web: 'http://brown.com.ua',
    img: 'http://afishalviv.net/wp-content/uploads/2016/03/bro.jpg',
    id: 9
    },
    {
      time: {
        '16:00': [{tableType: 2, number: 1}, {tableType: 4, number: 1}],
        '17:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '18:00': [{tableType: 2, number: 4}, {tableType: 4, number: 4}],
        '19:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '20:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '21:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '22:00': [{tableType: 2, number: 1}, {tableType: 4, number: 1}],
        '23:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '00:00': [{tableType: 2, number: 4}, {tableType: 4, number: 4}],
        '01:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '02:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}],
        '03:00': [{tableType: 2, number: 3}, {tableType: 4, number: 4}]
    },
    cuisines: ['European', 'Ukrainian'],
    features: ['aphrodisiacs', 'show program', 'Wi-Fi'],
    categories: ['pub', 'thematic restaurant'],
    bookings: {
      '2017-10-02': {
        capacity: 28,
        tables: [{
          userId: 12356878,
          time: '17:00',
          people: 7,
          tableType: 4,
          number: 2
        }, {
          userId: 82556178,
          time: '21:00',
          people: 5,
          tableType: 2,
          number: 3
        }]
      }
    },
    location: { lat: 49.8410608, lng: 24.0331564 },
    name: 'Mazoh-Cafe',
    rating: 4.4,
    address: '7 Serbska Str., Lviv, Ukraine',
    phones: ['+38 (032) 272-18-72', '+38 (050) 371-04-40'],
    web: 'https://www.facebook.com/MasochCafe',
    img: 'http://lviv-online.com/ua/wp-content/uploads/2013/09/Mazoh.png',
    id: 10
  }
];

  constructor(private http: Http) { }

  getAllCafes(): ICafe[] {
    // const url = 'http://localhost:3000/cafes';
    // return this.http.get(url);
    return this.restaurants.slice();
  }

  getCafesById(id) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('/cafes', {favorites: id}, { headers });
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

  getCuisines(): String[] {
    const cuisines = [];
    this.restaurants.forEach((restaurant) => restaurant.cuisines.
      forEach((cuisine) => {if (cuisines.indexOf(cuisine) === -1) {
        cuisines.push(cuisine);
      }}));
    return cuisines;
  }

  getFeatures(): String[] {
    const features = [];
    this.restaurants.forEach((restaurant) => restaurant.features.
      forEach((feature) => {if (features.indexOf(feature) === -1) {
        features.push(feature);
      }}));
    return features;
  }

  getCategories(): String[] {
    const categories = [];
    this.restaurants.forEach((restaurant) => restaurant.categories.
      forEach((category) => {if (categories.indexOf(category) === -1) {
        categories.push(category);
      }}));
    return categories;
  }

}
