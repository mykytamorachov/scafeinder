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
});
