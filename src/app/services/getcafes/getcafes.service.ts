import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import { ICafe } from '../../models/cafe.interface';
import { Restaurant } from '../../models/restaurant.model';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Injectable()
export class GetCafesService {
  private restaurants: ICafe[] = [{
    tables: [
      { tableType: 2, free: true },
      { tableType: 2, free: false },
      { tableType: 4, free: false }
    ],
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
    tables: [
      { tableType: 2, free: true },
      { tableType: 2, free: false },
      { tableType: 4, free: false }
    ],
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
    tables: [
      { tableType: 2, free: true },
      { tableType: 2, free: false },
      { tableType: 4, free: false }
    ],
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
    tables: [
      { tableType: 2, free: true },
      { tableType: 2, free: false },
      { tableType: 4, free: false }
    ],
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
    tables: [
      { tableType: 2, free: true },
      { tableType: 2, free: false },
      { tableType: 4, free: false }
    ],
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
    tables: [
      { tableType: 2, free: true },
      { tableType: 2, free: false },
      { tableType: 4, free: false }
    ],
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
    tables: [
      { tableType: 2, free: true },
      { tableType: 2, free: false },
      { tableType: 4, free: false }
    ],
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
    tables: [
      { tableType: 2, free: true },
      { tableType: 2, free: false },
      { tableType: 4, free: false }
    ],
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
    tables: [
      { tableType: 2, free: true },
      { tableType: 2, free: false },
      { tableType: 4, free: false }
    ],
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
    tables: [
      { tableType: 2, free: true },
      { tableType: 2, free: false },
      { tableType: 4, free: false }
    ],
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

}
