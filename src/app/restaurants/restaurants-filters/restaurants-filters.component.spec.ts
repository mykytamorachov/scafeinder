import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsFiltersComponent } from './restaurants-filters.component';

describe('RestaurantsFiltersComponent', () => {
  let component: RestaurantsFiltersComponent;
  let fixture: ComponentFixture<RestaurantsFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
      RestaurantsFiltersComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
