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
      img: 'http://www.ukraine-is.com/wp-content/uploads/2016/08/history2.jpg'
    };
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
