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
      time: { '0': [{ tableType: 2, number: 2 }, { tableType: 4, number: 1 }],
      '1': [{ tableType: 2, number: 2 }, { tableType: 4, number: 3 }],
      '2': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '4': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '5': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '6': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '7': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '8': [{ tableType: 2, number: 0 }, { tableType: 4, number: 0 }],
      '9': [{ tableType: 2, number: 8 }, { tableType: 4, number: 6 }],
      '10': [{ tableType: 2, number: 8 }, { tableType: 4, number: 6 }],
      '11': [{ tableType: 2, number: 7 }, { tableType: 4, number: 6 }],
      '12': [{ tableType: 2, number: 7 }, { tableType: 4, number: 5 }],
      '13': [{ tableType: 2, number: 7 }, { tableType: 4, number: 2 }],
      '14': [{ tableType: 2, number: 5 }, { tableType: 4, number: 4 }],
      '15': [{ tableType: 2, number: 4 }, { tableType: 4, number: 4 }],
      '16': [{ tableType: 2, number: 5 }, { tableType: 4, number: 5 }],
      '17': [{ tableType: 2, number: 7 }, { tableType: 4, number: 3 }],
      '18': [{ tableType: 2, number: 5 }, { tableType: 4, number: 5 }],
      '19': [{ tableType: 2, number: 5 }, { tableType: 4, number: 3 }],
      '20': [{ tableType: 2, number: 3 }, { tableType: 4, number: 2 }],
      '21': [{ tableType: 2, number: 2 }, { tableType: 4, number: 1 }],
      '22': [{ tableType: 2, number: 1 }, { tableType: 4, number: 0 }],
      '23': [{ tableType: 2, number: 4 }, { tableType: 4, number: 3 }],
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
    };
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
