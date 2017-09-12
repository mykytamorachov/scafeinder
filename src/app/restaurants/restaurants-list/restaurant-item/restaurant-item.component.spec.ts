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
    component.restaurant = {name: 'White Lion',
    type: 'pub',
    address: '15 Lesya Ukrainka Str.',
    phone: '(067) 675 51 23',
    imgPath: 'http://mylviv.com/wp-content/uploads/2012/05/DSCN6650-800x600.jpg',
    cuisine: ['Ukrainian', 'Polish'],
    additional: ['live music', 'Wi-Fi']};
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
