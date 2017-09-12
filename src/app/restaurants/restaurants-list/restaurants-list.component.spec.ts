import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsListComponent } from './restaurants-list.component';
import { RestaurantItemComponent } from './restaurant-item/restaurant-item.component';
import { RestaurantProfileComponent } from './restaurant-profile/restaurant-profile.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RestaurantsListComponent', () => {
  let component: RestaurantsListComponent;
  let fixture: ComponentFixture<RestaurantsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
      RestaurantsListComponent,
      RestaurantItemComponent,
      RestaurantProfileComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
