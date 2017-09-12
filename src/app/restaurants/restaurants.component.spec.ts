import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsComponent } from './restaurants.component';
import { RestaurantsFiltersComponent } from './restaurants-filters/restaurants-filters.component';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { RestaurantItemComponent } from './restaurants-list/restaurant-item/restaurant-item.component';
import { RestaurantProfileComponent } from './restaurants-list/restaurant-profile/restaurant-profile.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RestaurantsComponent', () => {
  let component: RestaurantsComponent;
  let fixture: ComponentFixture<RestaurantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
      RestaurantsComponent,
      RestaurantsFiltersComponent,
      RestaurantsListComponent,
      RestaurantItemComponent,
      RestaurantProfileComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
