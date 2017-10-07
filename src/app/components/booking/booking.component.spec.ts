import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookingService } from '../../services/booking/booking.service';
import { BookingComponent } from './booking.component';
import { DatepickerComponent } from '../bootstrap/datepicker/datepicker.component';
import { GetCafesService } from '../../services/getcafes/getcafes.service';
import { FormDataService } from '../../services/form-data/form-data.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { UniquePipe } from '../../pipes/unique.pipe';
import { UserService } from '../../services/user/user.service';
import { ICafe } from '../../models/cafe.interface';

const cafeBoking: ICafe = {
  _id: '1',
  cuisines: ['European', 'Galician', 'Jewish', 'Polish', 'Ukrainian', 'Vegetarian'],
  features: ['live music', 'movie screenings', 'pet-friendly', 'summer terrace', 'Wi-Fi'],
  categories: ['luxury restaurant'],
  bookings: [{
    date: '2017-10-11',
    tables: [{
      userId: '59cf80eb2debdcdd4f659abb',
      time: '17:00',
      people: 8,
      tableType: 4,
      tableAmount: 2
    }, {
      userId: '79cf80eb2debdcdd4f659abe',
      time: '21:00',
      people: 7,
      tableType: 2,
      tableAmount: 4
    }]
  }],
  tables: { tableType2: 3, tableType4: 4 },
  location: { lat: 49.8422154, lng: 24.0299315 },
  name: 'Baczewski Restaurant',
  rating: 4.6,
  address: '8 Shevska Str., Lviv, Ukraine',
  phones: ['+38 (098) 224-44-44', '+38 (032) 235-71-81'],
  web: 'http://kumpelgroup.com/restaurants/baczewski',
  logoImg: 'assets/img/logo/1.jpg',
  profileImg: 'assets/img/profile/1.jpg'
};

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule, NgbModule.forRoot(), HttpModule, RouterTestingModule, AngularFontAwesomeModule ],
      providers: [BookingService, GetCafesService, FormDataService, UserService],
      declarations: [ BookingComponent, DatepickerComponent,  UniquePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('showLeftHours method should show correct left hours', async() => {
    const hoursNow = new Date().getHours();
    const res = (hoursNow > 23 || hoursNow < 10) ? 10 : (hoursNow + 1);
    component.showLeftHours();
    fixture.detectChanges();
    expect(component.dayHours.sort()[0]).toEqual(res);
  });

  // it('checkSelectedDate method should return correct left hours', async() => {
  //   const date = new Date();
  //   const ngbDateStruct = { day: date.getUTCDay(), month: date.getUTCMonth(), year: date.getUTCFullYear()};
  //   component.checkSelectedDate(ngbDateStruct);
  //   fixture.detectChanges();
  //   expect(component.dayHours.sort()[0]).toEqual(date.getHours() + 1);
  //   // expect(component.dayHours.sort()[0]).toBeTruthy();
  // });

  it('checkSelectedDate method should be checked with the future date', async() => {
    component.checkSelectedDate({year: 2037, month: 11, day: 14});
    fixture.detectChanges();
    expect(component.model).toEqual({year: 2037, month: 11, day: 14});
    expect(component.userQuery.date).toEqual('2037-11-14');
    expect(component.dayHours).toEqual(component.showLeftHours('future'));
  });

  it('checkSelectedDate method should be checked with the current date', async() => {
    const now = {year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate()};
    component.checkSelectedDate(now);
    const tzoffset = (new Date()).getTimezoneOffset() * 60000;
    const localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, 10);
    fixture.detectChanges();
    expect(component.userQuery.date).toEqual(localISOTime);
  });

  it('getBookedTables method should return booked tables for mocked cafe', async() => {
    const bookedTables = component.getBookedTables(cafeBoking, '2017-10-11');
    fixture.detectChanges();
    expect(bookedTables).toEqual({
      bookedTablesType2: 4,
      bookedTablesType4: 2
    });
  });

  it('bookTables method should book tables for mocked user', async() => {
    const bookedTables = component.getBookedTables(cafeBoking, '2017-10-11');
    component.isAuth = true;
    component.bookTables();
    fixture.detectChanges();
    expect(bookedTables).toEqual({
      bookedTablesType2: 4,
      bookedTablesType4: 2
    });
  });

});
