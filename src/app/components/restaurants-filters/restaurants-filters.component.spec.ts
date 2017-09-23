import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GetCafesService } from '../../services/getcafes/getcafes.service';
import { HttpModule } from '@angular/http';
import { FilterService } from '../../services/filter.service';

import { RestaurantsFiltersComponent } from './restaurants-filters.component';

describe('RestaurantsFiltersComponent', () => {
  let component: RestaurantsFiltersComponent;
  let fixture: ComponentFixture<RestaurantsFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [RestaurantsFiltersComponent],
      providers: [GetCafesService, FilterService]
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
