import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantProfileComponent } from './restaurant-profile.component';
import { GetCafesService } from '../../services/getcafes/getcafes.service';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import { BookingComponent } from '../../components//booking/booking.component';
import { DatepickerComponent } from '../bootstrap/datepicker/datepicker.component';
import { BookingService } from '../../services/booking/booking.service';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { UniquePipe } from '../../pipes/unique.pipe';

import { UserService } from '../../services/user/user.service';
import { AuthService } from '../../services/auth/auth.service';

describe('RestaurantProfileComponent', () => {
  let component: RestaurantProfileComponent;
  let fixture: ComponentFixture<RestaurantProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantProfileComponent, BookingComponent, DatepickerComponent,  UniquePipe ],
      imports: [FormsModule, ReactiveFormsModule, HttpModule, RouterTestingModule, NgbModule.forRoot(), AngularOpenlayersModule,
         AngularFontAwesomeModule ],
      providers: [ GetCafesService, NgbTabsetConfig, BookingService,  UserService, AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
