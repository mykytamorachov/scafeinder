import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BannerComponent } from './components/banner/banner.component';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

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
    RegistrationFormComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
