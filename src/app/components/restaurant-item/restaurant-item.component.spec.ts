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
    cuisines: ['European', 'Galician', 'Jewish', 'Polish', 'Ukrainian', 'Vegetarian'],
    features: ['live music', 'movie screenings', 'pet-friendly', 'summer terrace', 'Wi-Fi'],
    categories: ['luxury restaurant'],
    bookings: [{
      date: '2017-10-08',
      tables: [{
        userId: '59cf80eb2debdcdd4f659abb',
        time: '17:00',
        people: 7,
        tableType: 4,
        tableAmount: 2
      }, {
        userId: '79cf80eb2debdcdd4f659abe',
        time: '21:00',
        people: 5,
        tableType: 2,
        tableAmount: 3
      }]
    }],
    tables: { tableType2: 8, tableType4: 6 },
    location: { lat: 49.8422154, lng: 24.0299315 },
    name: 'Baczewski Restaurant',
    rating: 4.6,
    address: '8 Shevska Str., Lviv, Ukraine',
    phones: ['+38 (098) 224-44-44', '+38 (032) 235-71-81'],
    web: 'http://kumpelgroup.com/restaurants/baczewski',
    img: 'https://afisha.lviv.ua/sites/image.life/company624/logo-624-fileffp-name-only-original-3662-kb.jpg',
    };
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
