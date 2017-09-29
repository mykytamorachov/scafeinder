import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantItemComponent } from './restaurant-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RestaurantItemComponent', () => {
  let component: RestaurantItemComponent;
  let fixture: ComponentFixture<RestaurantItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ RestaurantItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantItemComponent);
    component = fixture.componentInstance;
    component.restaurant = {
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
    };
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
