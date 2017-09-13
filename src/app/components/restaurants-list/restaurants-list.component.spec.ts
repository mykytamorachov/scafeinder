import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantItemComponent } from '../restaurant-item/restaurant-item.component';
import { RestaurantsListComponent } from './restaurants-list.component';

import { RouterTestingModule } from '@angular/router/testing';
import { ShortcutPipe } from '../../pipes/shortcut.pipe';

describe('RestaurantsListComponent', () => {
  let component: RestaurantsListComponent;
  let fixture: ComponentFixture<RestaurantsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
      RestaurantsListComponent,
      RestaurantItemComponent,
      ShortcutPipe
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
