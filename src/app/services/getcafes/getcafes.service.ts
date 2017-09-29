import { Injectable } from '@angular/core';
import { Http, Headers, Response, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ICafe } from '../../models/cafe.interface';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Injectable()
export class GetCafesService {
  private restaurants: ICafe[] = [{
    time: {
      '00:00': [{ tableType: 2, number: 2 }, { tableType: 4, number: 1 }],
      '01:00': [{ tableType: 2, number: 2 }, { tableType: 4, number: 3 }],
      '02:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '03:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '04:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '05:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '06:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '07:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '08:00': [{ tableType: 2, number: 8 }, { tableType: 4, number: 6 }],
      '09:00': [{ tableType: 2, number: 8 }, { tableType: 4, number: 6 }],
      '10:00': [{ tableType: 2, number: 8 }, { tableType: 4, number: 6 }],
      '11:00': [{ tableType: 2, number: 7 }, { tableType: 4, number: 6 }],
      '12:00': [{ tableType: 2, number: 7 }, { tableType: 4, number: 5 }],
      '13:00': [{ tableType: 2, number: 7 }, { tableType: 4, number: 2 }],
      '14:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 4 }],
      '15:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 4 }],
      '16:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 5 }],
      '17:00': [{ tableType: 2, number: 7 }, { tableType: 4, number: 3 }],
      '18:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 5 }],
      '19:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 3 }],
      '20:00': [{ tableType: 2, number: 3 }, { tableType: 4, number: 2 }],
      '21:00': [{ tableType: 2, number: 2 }, { tableType: 4, number: 1 }],
      '22:00': [{ tableType: 2, number: 1 }, { tableType: 4, number: 0 }],
      '23:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 3 }],
    },
    booked: {
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
    cuisines: ['Asian', 'Chinese', 'Georgian', 'Italian', 'Japanese', 'Mediterranean', 'Mexican', 'Vegetarian', 'Ukrainian'],
    features: ['hookah', 'karaoke', 'roof terrace', 'live music'],
    categories: ['alcohol-free', 'barbecue', 'cafe', 'coffee house' , 'fast food' , 'lounge bar', 'pizza', 'pub', 'sushi'],
    location: { lat: 49.8438986, lng: 24.0302972 },
    name: 'Львовский рудник кофе',
    rating: 4.7,
    address: 'площа Ринок, 10, Львів',
    img: 'http://www.justlviv.it/theme/photos/1359029728_b8e8ad22f3b4e8ebc07765ed7f3978f69221_b.jpg',
    id: 1
  },
  {
    time: {
      '00:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 6 }],
      '01:00': [{ tableType: 2, number: 2 }, { tableType: 4, number: 7 }],
      '02:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '03:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '04:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '05:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '06:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '07:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '08:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '09:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '10:00': [{ tableType: 2, number: 11 }, { tableType: 4, number: 7 }],
      '11:00': [{ tableType: 2, number: 10 }, { tableType: 4, number: 7 }],
      '12:00': [{ tableType: 2, number: 9 }, { tableType: 4, number: 5 }],
      '13:00': [{ tableType: 2, number: 9 }, { tableType: 4, number: 2 }],
      '14:00': [{ tableType: 2, number: 7 }, { tableType: 4, number: 4 }],
      '15:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 4 }],
      '16:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 6 }],
      '17:00': [{ tableType: 2, number: 7 }, { tableType: 4, number: 5 }],
      '18:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 5 }],
      '19:00': [{ tableType: 2, number: 7 }, { tableType: 4, number: 5 }],
      '20:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 2 }],
      '21:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 1 }],
      '22:00': [{ tableType: 2, number: 1 }, { tableType: 4, number: 2 }],
      '23:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 4 }],
    },
    booked: {
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
    cuisines: ['Asian', 'Chinese', 'Georgian',  'Mexican', 'Vegetarian', 'Ukrainian'],
    features: ['hookah', 'roof terrace', 'live music'],
    categories: ['alcohol-free', 'fast food' , 'lounge bar', 'pizza', 'pub', 'sushi'],
    location: { lat: 49.84168709999999, lng: 24.0324152 },
    name: 'Возле Дианы на Рынке',
    rating: 4.2,
    address: 'площа Ринок, 1, Львів',
    img: 'http://woman-project.com/uploads/1341867600/64eb832d5481fe.jpg',
    id: 2
  },
  {
    time: {
      '00:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 6 }],
      '01:00': [{ tableType: 2, number: 1 }, { tableType: 4, number: 2 }],
      '02:00': [{ tableType: 2, number: 1 }, { tableType: 4, number: 3 }],
      '03:00': [{ tableType: 2, number: 1 }, { tableType: 4, number: 3 }],
      '04:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '05:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '06:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '07:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '08:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '09:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '10:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '11:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '12:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '13:00': [{ tableType: 2, number: 7 }, { tableType: 4, number: 6 }],
      '14:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 4 }],
      '15:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 4 }],
      '16:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 6 }],
      '17:00': [{ tableType: 2, number: 6 }, { tableType: 4, number: 5 }],
      '18:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 5 }],
      '19:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 5 }],
      '20:00': [{ tableType: 2, number: 1 }, { tableType: 4, number: 2 }],
      '21:00': [{ tableType: 2, number: 2 }, { tableType: 4, number: 1 }],
      '22:00': [{ tableType: 2, number: 1 }, { tableType: 4, number: 2 }],
      '23:00': [{ tableType: 2, number: 2 }, { tableType: 4, number: 2 }],
    },
    booked: {
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
    cuisines: ['Asian', 'Chinese',  'Mexican', 'Vegetarian', 'Ukrainian'],
    features: ['roof terrace', 'live music'],
    categories: ['fast food' , 'lounge bar', 'pizza', 'pub', 'sushi'],
    location: { lat: 49.843132, lng: 24.03222199999999 },
    name: 'Рыжий Кот',
    rating: 4.1,
    address: 'Друкарська, 4 (Вірменська, 24), Львів',
    img: 'http://v.lviv.ua/files/catalog/4444pos.jpg',
    id: 3
  },
  {
    time: {
      '00:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 6 }],
      '01:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '02:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '03:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '04:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '05:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '06:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '07:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '08:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '09:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '10:00': [{ tableType: 2, number: 8 }, { tableType: 4, number: 7 }],
      '11:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 7 }],
      '12:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 5 }],
      '13:00': [{ tableType: 2, number: 3 }, { tableType: 4, number: 2 }],
      '14:00': [{ tableType: 2, number: 2 }, { tableType: 4, number: 4 }],
      '15:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 4 }],
      '16:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 6 }],
      '17:00': [{ tableType: 2, number: 7 }, { tableType: 4, number: 5 }],
      '18:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 5 }],
      '19:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 5 }],
      '20:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 2 }],
      '21:00': [{ tableType: 2, number: 3 }, { tableType: 4, number: 1 }],
      '22:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 2 }],
      '23:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 4 }],
    },
    booked: {
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
    cuisines: [ 'Mexican', 'Vegetarian', 'Ukrainian'],
    features: ['hookah',  'live music'],
    categories: ['alcohol-free', 'sushi'],
    location: { lat: 49.841797, lng: 24.031115 },
    name: 'Кафе «Ратуша»',
    rating: 4.8,
    address: 'Ратуша, площа Ринок, 1, Львів',
    img: 'https://girko.net/uploadedMedia/service/lviv.cityhall.restaurant/2760/reduce_quality/Nadia_Koshel_Ratusha.JPG',
    id: 4
  },
  {
    time: {
      '00:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 6 }],
      '01:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '02:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '03:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '04:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '05:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '06:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '07:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '08:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '09:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '10:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 7 }],
      '11:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 7 }],
      '12:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 5 }],
      '13:00': [{ tableType: 2, number: 3 }, { tableType: 4, number: 2 }],
      '14:00': [{ tableType: 2, number: 2 }, { tableType: 4, number: 4 }],
      '15:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 4 }],
      '16:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 6 }],
      '17:00': [{ tableType: 2, number: 7 }, { tableType: 4, number: 5 }],
      '18:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 6 }],
      '19:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 5 }],
      '20:00': [{ tableType: 2, number: 2 }, { tableType: 4, number: 2 }],
      '21:00': [{ tableType: 2, number: 2 }, { tableType: 4, number: 1 }],
      '22:00': [{ tableType: 2, number: 1 }, { tableType: 4, number: 2 }],
      '23:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 4 }],
    },
    booked: {
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
    cuisines: ['Asian', 'Chinese', 'Mexican', 'Vegetarian', 'Ukrainian'],
    features: ['hookah', 'karaoke',  'live music'],
    categories: ['alcohol-free', 'lounge bar', 'pizza', 'pub', 'sushi'],
    location: { lat: 49.843106, lng: 24.031629 },
    name: 'Гасова лямпа',
    rating: 4.6,
    address: 'вулиця Вірменська, 20, Львів',
    img: 'http://gid.travel/sites/default/files/gallery/naw_luidgry4vdniboqzca.jpg',
    id: 5
  },
  {
    time: {
      '00:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 6 }],
      '01:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 7 }],
      '02:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 7 }],
      '03:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 7 }],
      '04:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 7 }],
      '05:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 7 }],
      '06:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 7 }],
      '07:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 7 }],
      '08:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 6 }],
      '09:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 6 }],
      '10:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 7 }],
      '11:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 7 }],
      '12:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 5 }],
      '13:00': [{ tableType: 2, number: 3 }, { tableType: 4, number: 2 }],
      '14:00': [{ tableType: 2, number: 2 }, { tableType: 4, number: 4 }],
      '15:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 4 }],
      '16:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 6 }],
      '17:00': [{ tableType: 2, number: 7 }, { tableType: 4, number: 5 }],
      '18:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 5 }],
      '19:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 5 }],
      '20:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 2 }],
      '21:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 1 }],
      '22:00': [{ tableType: 2, number: 2 }, { tableType: 4, number: 2 }],
      '23:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 4 }],
    },
    booked: {
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
    cuisines: ['Asian',  'Mexican', 'Vegetarian', 'Ukrainian'],
    features: ['hookah', 'karaoke', 'roof terrace', 'live music'],
    categories: [ 'lounge bar',  'pub', 'sushi'],
    location: { lat: 49.84097800000001, lng: 24.033188 },
    name: 'Мазох-cafe',
    rating: 4.4,
    address: 'вулиця Сербська, 7, Львів',
    img: 'http://www.fest.lviv.ua/image.php?portfolioid=7&fileno=5&maxx=900&maxy=800',
    id: 6
  },
  {
    time: {
      '00:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 6 }],
      '01:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '02:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '03:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 7 }],
      '04:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '05:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '06:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '07:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '08:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '09:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '10:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 7 }],
      '11:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 7 }],
      '12:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 5 }],
      '13:00': [{ tableType: 2, number: 3 }, { tableType: 4, number: 2 }],
      '14:00': [{ tableType: 2, number: 2 }, { tableType: 4, number: 4 }],
      '15:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 4 }],
      '16:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 6 }],
      '17:00': [{ tableType: 2, number: 7 }, { tableType: 4, number: 5 }],
      '18:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 5 }],
      '19:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 4 }],
      '20:00': [{ tableType: 2, number: 3 }, { tableType: 4, number: 2 }],
      '21:00': [{ tableType: 2, number: 2 }, { tableType: 4, number: 1 }],
      '22:00': [{ tableType: 2, number: 1 }, { tableType: 4, number: 2 }],
      '23:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 4 }],
    },
    booked: {
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
    cuisines: [ 'Italian', 'Japanese', 'Mediterranean', 'Mexican', 'Ukrainian'],
    features: ['hookah', 'karaoke', 'roof terrace', 'live music'],
    categories: ['alcohol-free', 'barbecue', 'cafe', 'coffee house' ,  'lounge bar', 'sushi'],
    location: { lat: 49.8422743, lng: 24.0306861 },
    name: 'Кентавр',
    rating: 4.3,
    address: 'Кам\'яниця Авенштоківська, площа Ринок, 34, Львів',
    img: 'http://poglyad.com/Content/posts/146/6fd54b91492417e44dabee6a1d2ecc69.jpg',
    id: 7
  },
  {
    time: {
      '00:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 6 }],
      '01:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 7 }],
      '02:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 7 }],
      '03:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 7 }],
      '04:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 7 }],
      '05:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 7 }],
      '06:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 7 }],
      '07:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 7 }],
      '08:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 7 }],
      '09:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 6 }],
      '10:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 7 }],
      '11:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 7 }],
      '12:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 5 }],
      '13:00': [{ tableType: 2, number: 3 }, { tableType: 4, number: 2 }],
      '14:00': [{ tableType: 2, number: 2 }, { tableType: 4, number: 4 }],
      '15:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 4 }],
      '16:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 6 }],
      '17:00': [{ tableType: 2, number: 7 }, { tableType: 4, number: 5 }],
      '18:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 5 }],
      '19:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 5 }],
      '20:00': [{ tableType: 2, number: 1 }, { tableType: 4, number: 2 }],
      '21:00': [{ tableType: 2, number: 2 }, { tableType: 4, number: 1 }],
      '22:00': [{ tableType: 2, number: 1 }, { tableType: 4, number: 2 }],
      '23:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 4 }],
    },
    booked: {
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
    cuisines: ['Asian', 'Chinese', 'Ukrainian'],
    features: ['hookah', 'karaoke', 'roof terrace', 'live music'],
    categories: ['alcohol-free', 'barbecue', 'cafe', 'pizza', 'pub', 'sushi'],
    location: { lat: 49.8408402, lng: 24.0337756 },
    name: 'Сова',
    rating: 4.5,
    address: 'вулиця Староєврейська, 40, Львів',
    img: 'http://lasoon.com.ua/photo/id_122865.png',
    id: 8
  },
  {
    time: {
      '00:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 6 }],
      '01:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '02:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '03:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 7 }],
      '04:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '05:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '06:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '07:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '08:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '09:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '10:00': [{ tableType: 2, number: 6 }, { tableType: 4, number: 7 }],
      '11:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 6 }],
      '12:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 5 }],
      '13:00': [{ tableType: 2, number: 3 }, { tableType: 4, number: 2 }],
      '14:00': [{ tableType: 2, number: 2 }, { tableType: 4, number: 4 }],
      '15:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 4 }],
      '16:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 6 }],
      '17:00': [{ tableType: 2, number: 7 }, { tableType: 4, number: 5 }],
      '18:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 5 }],
      '19:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 5 }],
      '20:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 2 }],
      '21:00': [{ tableType: 2, number: 6 }, { tableType: 4, number: 1 }],
      '22:00': [{ tableType: 2, number: 2 }, { tableType: 4, number: 2 }],
      '23:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 4 }],
    },
    booked: {
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
    cuisines: ['Vegetarian', 'Ukrainian'],
    features: ['hookah', 'karaoke', 'roof terrace', 'live music'],
    categories: ['alcohol-free', 'barbecue', 'cafe', 'coffee house' , 'fast food' , 'lounge bar', 'pizza', 'pub', 'sushi'],
    location: { lat: 49.84184750000001, lng: 24.0305664 },
    name: 'Мир Кофе',
    rating: 4.6,
    address: 'площа Ринок, 30, Львів',
    img: 'http://www.ukraine-is.com/wp-content/uploads/2016/08/history2.jpg',
    id: 9
  },
  {
    time: {
      '00:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 6 }],
      '01:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '02:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '03:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 7 }],
      '04:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '05:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '06:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '07:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '08:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '09:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '10:00': [{ tableType: 2, number: 9 }, { tableType: 4, number: 4 }],
      '11:00': [{ tableType: 2, number: 8 }, { tableType: 4, number: 4 }],
      '12:00': [{ tableType: 2, number: 8 }, { tableType: 4, number: 3 }],
      '13:00': [{ tableType: 2, number: 6 }, { tableType: 4, number: 4 }],
      '14:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 4 }],
      '15:00': [{ tableType: 2, number: 4 }, { tableType: 4, number: 3 }],
      '16:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 4 }],
      '17:00': [{ tableType: 2, number: 7 }, { tableType: 4, number: 4 }],
      '18:00': [{ tableType: 2, number: 5 }, { tableType: 4, number: 2 }],
      '19:00': [{ tableType: 2, number: 2 }, { tableType: 4, number: 3 }],
      '20:00': [{ tableType: 2, number: 1 }, { tableType: 4, number: 1 }],
      '21:00': [{ tableType: 2, number: 1 }, { tableType: 4, number: 1 }],
      '22:00': [{ tableType: 2, number: 3 }, { tableType: 4, number: 2 }],
      '23:00': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
    },
    booked: {
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
    cuisines: ['Asian', 'Mexican', 'Vegetarian', 'Ukrainian'],
    features: ['hookah', 'karaoke', 'roof terrace', 'live music'],
    categories: ['alcohol-free', 'lounge bar', 'pizza', 'pub', 'sushi'],
    location: { lat: 49.841673, lng: 24.030309 },
    name: 'Соус',
    rating: 4.4,
    address: 'Кам\'яниця Коритовського, площа Ринок, 29, Львів',
    img: 'http://lviv.virtual.ua/images/376005/',
    id: 10
  }];

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
