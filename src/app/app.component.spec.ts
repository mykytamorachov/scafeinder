import { TestBed, async } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsFiltersComponent } from './restaurants/restaurants-filters/restaurants-filters.component';
import { RestaurantsListComponent } from './restaurants/restaurants-list/restaurants-list.component';
import { RestaurantItemComponent } from './restaurants/restaurants-list/restaurant-item/restaurant-item.component';
import { RestaurantProfileComponent } from './restaurants/restaurants-list/restaurant-profile/restaurant-profile.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ShortcutPipe } from './shortcut.pipe';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, NgbModule.forRoot(), ReactiveFormsModule, RouterTestingModule ],
      declarations: [
        AppComponent,
        HeaderComponent,
        SearchFormComponent,
        FooterComponent,
        RestaurantsComponent,
        RestaurantsFiltersComponent,
        RestaurantsListComponent,
        RestaurantItemComponent,
        RestaurantProfileComponent,
        ShortcutPipe,
        DatepickerComponent,
        RegistrationFormComponent
      ]
    }).compileComponents();
  }));

it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
