import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { UserQuery } from '../../models/query.model';
import { DatepickerComponent } from '../bootstrap/datepicker/datepicker.component';
import { GetCafesService } from '../../services/getcafes/getcafes.service';
import { FormDataService } from '../../services/form-data/form-data.service';
import { ICafe } from '../../models/cafe.interface';
import { ActivatedRoute, Params } from '@angular/router';
import { BookingService } from '../../services/booking/booking.service';
import { UserService } from '../../services/user/user.service';
import { IUser } from '../../models/user.model';
import { Response } from '@angular/http';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})

export class BookingComponent implements OnInit {
  @Input() user: IUser;
  restaurants: ICafe[];
  company: Array<number>;
  dayHours: any;
  model: NgbDateStruct;
  searchform: FormGroup;
  userQuery = new UserQuery(7, 4, new Date().toISOString().slice(0, 10), ((new Date().getHours() + 2) + ':00'), '');
  restaurant: ICafe;
  id: String;
  private sub: any;
  @Input() isAuth;
  alert: boolean;
  alertMessage: string;
  constructor(private _formBuilder: FormBuilder, private getCafesService: GetCafesService,
    private route: ActivatedRoute, private book: BookingService, private formDataService: FormDataService, public router: Router,
    private userService: UserService) {
    this._buildForm();
  }

  private _buildForm() {
    this.searchform = this._formBuilder.group({
      persons: this._formBuilder,
      date: this._formBuilder,
      time: this._formBuilder,
      placeName: this._formBuilder,
    });
  }

  ngOnInit() {
    this.company = this.formDataService.company(15);
    this.dayHours = this.formDataService.getHours(10, 23);
    this.dayHours = this.showLeftHours();
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.getCafesService.getCafeById(this.id)
      .subscribe(
      (restaurant: ICafe[]) => {
        this.restaurant = restaurant[0];
        // console.log(JSON.stringify(restaurant, null, 2));
        this.userQuery.placeName = String(restaurant[0].name);
      },
      (error) => console.log(error)
      );
  }

  showLeftHours(day = 'today') {
    let hoursStr;
    const currentDate = new Date();
    const currentHours = currentDate.getHours();

    if (currentHours < 10) {
      hoursStr = `0${currentHours}`;
    } else {
      hoursStr = currentHours.toString();
    }

    if (day === 'future') {
      return this.formDataService.getHours(10, 23);
    }

    return (this.dayHours.filter((item) => {
      if (item > hoursStr) {
        return item;
      }
    }));
  }

  public checkSelectedDate(date: NgbDateStruct) {
    if (date) {
      const now = new Date();
      this.model = date;
      if (now.getFullYear() < this.model.year || (now.getMonth() + 1) < this.model.month || now.getDate() <= this.model.day) {
        this.userQuery.date = `${this.model.year}-` +
          `${this.model.month < 10 ? ('0' + this.model.month) : this.model.month}-` +
          `${this.model.day < 10 ? ('0' + this.model.day) : this.model.day}`;
        return this.dayHours = this.showLeftHours('future');
      }
      return this.dayHours = this.showLeftHours();
    }
  }

  getBookedTables(restaurant: ICafe, date: String) {
    let bookedTablesType2 = 0;
    let bookedTablesType4 = 0;
    let isBookedOnThisDay = false;
    // check is someone book on this date
    for (let i = 0; i < restaurant.bookings.length; i++) {
      if (restaurant.bookings[i].date === date) {
        isBookedOnThisDay = true;
      }
    }
    // return amount of free tables
    if (!isBookedOnThisDay) {
      return {
        bookedTablesType2: 0,
        bookedTablesType4: 0
      };
    } else {
      // console.log('Someone booked');
      restaurant.bookings.find((item) => item.date === date)
        .tables.forEach((value) => {
          if (value.tableType === 2) {
            bookedTablesType2 += (+value.tableAmount);
          } else {
            bookedTablesType4 += (+value.tableAmount);
          }
        }
        );
      console.log(`booked ${bookedTablesType2} ${bookedTablesType4}`);
      return {
        bookedTablesType2: bookedTablesType2,
        bookedTablesType4: bookedTablesType4
      };
    }
  }

  bookTables(): void {
    const bookedTables = this.getBookedTables(this.restaurant, this.userQuery.date);
    const allTablesType2: number = +this.restaurant.tables.tableType2;
    const allTablesType4: number = +this.restaurant.tables.tableType4;
    const freeTablesType2 = allTablesType2 - bookedTables.bookedTablesType2;
    const freeTablesType4 = allTablesType4 - bookedTables.bookedTablesType4;
    const bookingData = {
      resId: '',
      userId: '',
      date: '',
      time: '',
      people: 0,
      tableType: 0,
      tableAmount: 0
    };
    const userBooking = {
      date: '',
      time: '',
      people: 0,
      resName: '',
      resId: '',
    };
    bookingData.resId = String(this.restaurant._id);
    userBooking.resId = String(this.restaurant._id);
    bookingData.userId = localStorage.getItem('id_token');
    bookingData.date = this.userQuery.date;
    userBooking.date = this.userQuery.date;
    bookingData.time = this.userQuery.time;
    userBooking.time = this.userQuery.time;
    bookingData.people = this.userQuery.persons;
    userBooking.people = this.userQuery.persons;
    userBooking.resName = this.restaurant.name;
    bookingData.tableType = this.userQuery.tableType;
    bookingData.tableAmount = (Math.round(this.userQuery.persons / this.userQuery.tableType) === 0) ? 1 :
      Math.round(this.userQuery.persons / this.userQuery.tableType);
    console.log(`free tables 4: ${freeTablesType4} 2 : ${freeTablesType2}`);
    // console.log(this.restaurant.bookings);
    if (this.isAuth) {
      switch (+this.userQuery.tableType) {
        case 2:
          console.log('2');
          if (bookingData.tableAmount > freeTablesType2) {
            this.alertMessage = `Can't book, Left only ${freeTablesType2} TYPE2-tables, and you want ${bookingData.tableAmount}`;
          } else {
            console.log(`Booked ${JSON.stringify(bookingData, null, 2)} in ${this.restaurant.name}`);
            this.book.booking(bookingData);
            this.user.bookings.push(userBooking);
            this.userService.updateUserData({bookings: this.user.bookings}).subscribe(
              (response: Response) => {
               console.log('response', response.json());
               this.alert = true;
              },
              (err) => console.log('err ', err)
           );
          }
          break;
        case 4:
          if (bookingData.tableAmount > freeTablesType4) {
            this.alertMessage = `Can't book, Left only ${freeTablesType4} TYPE4-tables, and you want ${bookingData.tableAmount}`;
          } else {
            console.log(`Booked ${JSON.stringify(bookingData, null, 2)} in ${this.restaurant.name}`);
            this.book.booking(bookingData);
            this.user.bookings.push(userBooking);
            this.userService.updateUserData({bookings: this.user.bookings}).subscribe(
              (response: Response) => {
               console.log('response', response.json());
               this.alert = true;
              },
              (err) => console.log('err ', err)
           );
          }
          break;
        default:
          console.log('Wtf?');
      }
    } else {
      this.alertMessage = 'Please. Login for booking';
    }
  }
}

