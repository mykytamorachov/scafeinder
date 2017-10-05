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
import { IUser } from '../../models/user.model';
import { AuthService } from '../../services/auth/auth.service';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';

// import { getCafesServiceStub } from '../../services/stub/stub.getcafes.service';


describe('RestaurantProfileComponent', () => {
  let component: RestaurantProfileComponent;
  let fixture: ComponentFixture<RestaurantProfileComponent>;
  // let spy: jasmine.Spy;
  // let userService: UserService;

  // const testUser: IUser = {
  //   name: 'Test',
  //   email: 'test@test.com',
  //   favorites: ['Kumpel', 'Gasova Lampa', 'PRAVDA Beer Theater', 'Mazoh-Cafe']
  // };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantProfileComponent, BookingComponent, DatepickerComponent,  UniquePipe ],
      imports: [FormsModule, ReactiveFormsModule, HttpModule, RouterTestingModule, NgbModule.forRoot(), AngularOpenlayersModule,
         AngularFontAwesomeModule ],
      providers: [GetCafesService, NgbTabsetConfig, BookingService, UserService, AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantProfileComponent);
    component = fixture.componentInstance;

    // userService = fixture.debugElement.injector.get(UserService);

    // spy = spyOn(userService, 'getUserData').and.returnValue(Observable.of(testUser));

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  // it('getUser method should get user data', (done: any) => {
  //   fixture.detectChanges();
  //   // component.getUser();
  //   spy.calls.mostRecent().returnValue.then(() => {
  //     fixture.detectChanges();
  //     expect(component.user.name).toBe('Test');
  //     done();
  //   });
  // });

});
