import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { RestaurantsFiltersComponent } from './components/restaurants-filters/restaurants-filters.component';
import { RestaurantsListComponent } from './components/restaurants-list/restaurants-list.component';
import { RestaurantItemComponent } from './components/restaurant-item/restaurant-item.component';
import { RestaurantProfileComponent } from './components/restaurant-profile/restaurant-profile.component';
import { ShortcutPipe } from './pipes/shortcut.pipe';
import { DatepickerComponent } from './components/bootstrap/datepicker/datepicker.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BannerComponent } from './components/banner/banner.component';
import { Page404Component } from './components/page404/page404.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth/auth.service';
import { GetCafesService } from './services/getcafes/getcafes.service';
import { FilterService } from './services/filter.service';
import { FormDataService } from './services/form-data/form-data.service';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserService } from './services/user/user.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { RatingComponent } from './components/rating/rating.component';
import { BookingComponent } from './components/booking/booking.component';
import { BookingService } from './services/booking/booking.service';
import { UniquePipe } from './pipes/unique.pipe';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { UserOptionsComponent } from './components/user-options/user-options.component';

@NgModule({
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
    DatepickerComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BannerComponent,
    Page404Component,
    UserProfileComponent,
    RatingComponent,
    BookingComponent,
    UniquePipe,
    UserOptionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
    AngularOpenlayersModule,
    NgxPaginationModule,
    AngularFontAwesomeModule
  ],
  providers: [AuthService, GetCafesService, FilterService, UserService, BookingService, FormDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
