import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RestaurantsFiltersComponent } from '../restaurants-filters/restaurants-filters.component';
import { RestaurantsListComponent } from '../restaurants-list/restaurants-list.component';
import { RestaurantItemComponent } from '../restaurant-item/restaurant-item.component';
import { DatepickerComponent } from '../bootstrap/datepicker/datepicker.component';
import { SearchFormComponent } from '../search-form/search-form.component';
import { ShortcutPipe } from '../../pipes/shortcut.pipe';
import { UniquePipe } from '../../pipes/unique.pipe';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from '../banner/banner.component';
import { GetCafesService } from '../../services/getcafes/getcafes.service';
import { FilterService } from '../../services/filter.service';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { RatingComponent } from '../rating/rating.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule, NgbModule.forRoot(), HttpModule, RouterTestingModule, NgxPaginationModule ],
      declarations: [
        HomeComponent,
        RestaurantsFiltersComponent,
        RestaurantsListComponent,
        RestaurantItemComponent,
        DatepickerComponent,
        SearchFormComponent,
        BannerComponent,
        ShortcutPipe,
        UniquePipe,
        RatingComponent
      ],
      providers: [GetCafesService, FilterService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
