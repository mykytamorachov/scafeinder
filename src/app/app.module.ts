import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { FooterComponent } from './footer/footer.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsFiltersComponent } from './restaurants/restaurants-filters/restaurants-filters.component';
import { RestaurantsListComponent } from './restaurants/restaurants-list/restaurants-list.component';
import { RestaurantItemComponent } from './restaurants/restaurants-list/restaurant-item/restaurant-item.component';
import { RestaurantProfileComponent } from './restaurants/restaurants-list/restaurant-profile/restaurant-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchFormComponent,
    FooterComponent,
    RestaurantsComponent,
    RestaurantsFiltersComponent,
    RestaurantsListComponent,
    RestaurantItemComponent,
    RestaurantProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot([
    {
      path: 'restaurants/:restaurant',
      component: RestaurantProfileComponent
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
