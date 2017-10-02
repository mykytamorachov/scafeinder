import { TestBed, async } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { DatepickerComponent } from './components/bootstrap/datepicker/datepicker.component';
import { AppComponent } from './app.component';
import { RestaurantsFiltersComponent } from './components/restaurants-filters/restaurants-filters.component';
import { RestaurantsListComponent } from './components/restaurants-list/restaurants-list.component';
import { RestaurantItemComponent } from './components/restaurant-item/restaurant-item.component';
import { RestaurantProfileComponent } from './components/restaurant-profile/restaurant-profile.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ShortcutPipe } from './pipes/shortcut.pipe';
import { UniquePipe } from './pipes/unique.pipe';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BannerComponent } from './components/banner/banner.component';
import { Page404Component } from './components/page404/page404.component';
import { AuthService } from './services/auth/auth.service';
import { HttpModule } from '@angular/http';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import { NgxPaginationModule } from 'ngx-pagination';
import { RatingComponent } from './components/rating/rating.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, NgbModule.forRoot(), ReactiveFormsModule, RouterTestingModule, HttpModule, AngularOpenlayersModule,
        NgxPaginationModule ],
      declarations: [
        AppComponent,
        HeaderComponent,
        SearchFormComponent,
        FooterComponent,
        RestaurantsFiltersComponent,
        RestaurantsListComponent,
        RestaurantItemComponent,
        RestaurantProfileComponent,
        ShortcutPipe,
        UniquePipe,
        DatepickerComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        BannerComponent,
        Page404Component,
        RatingComponent
      ],
      providers: [ AuthService ]
    }).compileComponents();
  }));

it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
