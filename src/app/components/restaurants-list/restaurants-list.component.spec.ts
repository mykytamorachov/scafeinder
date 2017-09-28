import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantItemComponent } from '../restaurant-item/restaurant-item.component';
import { RestaurantsListComponent } from './restaurants-list.component';

import { RouterTestingModule } from '@angular/router/testing';
import { ShortcutPipe } from '../../pipes/shortcut.pipe';
import { GetCafesService } from '../../services/getcafes/getcafes.service';
import { FilterService } from '../../services/filter.service';
import { HttpModule } from '@angular/http';

describe('RestaurantsListComponent', () => {
  let component: RestaurantsListComponent;
  let fixture: ComponentFixture<RestaurantsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule],
      declarations: [
      RestaurantsListComponent,
      RestaurantItemComponent,
      ShortcutPipe
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
});
