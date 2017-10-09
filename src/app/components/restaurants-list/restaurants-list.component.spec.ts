import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantItemComponent } from '../restaurant-item/restaurant-item.component';
import { RestaurantsListComponent } from './restaurants-list.component';
import { RatingComponent } from '../rating/rating.component';

import { RouterTestingModule } from '@angular/router/testing';
import { ShortcutPipe } from '../../pipes/shortcut.pipe';
import { SortByPipe } from '../../pipes/sort-by.pipe';
import { GetCafesService } from '../../services/getcafes/getcafes.service';
import { FilterService } from '../../services/filter.service';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

describe('RestaurantsListComponent', () => {
  let component: RestaurantsListComponent;
  let fixture: ComponentFixture<RestaurantsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule,
        NgxPaginationModule,
        AngularFontAwesomeModule
      ],
      declarations: [
      RestaurantsListComponent,
      RestaurantItemComponent,
      ShortcutPipe,
      SortByPipe,
      RatingComponent
      ],
      providers: [GetCafesService, FilterService]
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

  it('setSortingKey method should change component key property value', async() => {
    component.key = 'distance';
    component.setSortingKey('ratingAsc');
    fixture.detectChanges();
    expect(component.key).toBe('ratingAsc');
  });

});
