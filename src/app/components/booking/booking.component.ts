import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { company, dayHours, UserQuery } from '../../components/search-form/data-search-form';
import { DatepickerComponent } from '../bootstrap/datepicker/datepicker.component';
import { GetCafesService } from '../../services/getcafes/getcafes.service';
import { FilterService } from '../../services/filter.service';
import { ICafe } from '../../models/cafe.interface';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})

export class BookingComponent implements OnInit {
  restaurants: ICafe[];
  company: Array<number>;
  dayHours: any;
  model: NgbDateStruct;
  searchform: FormGroup;
  userQuery = new UserQuery(7, 4, new Date().toISOString().slice(0, 10), ((new Date().getHours() + 2) + ':00'), '');
  restaurant: ICafe;
  id: String;
  private sub: any;
  constructor(private _formBuilder: FormBuilder, private getCafesService: GetCafesService, private filterService: FilterService,
    private route: ActivatedRoute) {
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
    this.company = company;
    this.dayHours = dayHours;
    this.dayHours = this.showLeftHours();
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.getCafesService.getCafeById(this.id)
      .subscribe(
        (restaurant: ICafe) => {
          this.restaurant = restaurant;
          this.userQuery.placeName = String(restaurant.name);
        },
        (error) => console.log(error)
      );
    }

  get diagnostic() {
    return JSON.stringify(this.userQuery);
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
      return dayHours;
    }

    return (this.dayHours.map((item) => {
      if (item.hour > hoursStr) {
        return {hour: item.hour, minute: item.minute};
      }
    })).slice((currentHours + 1) * 2);
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

  findTables() {
    const option = this.userQuery;
    this.getCafesService.getAllCafes()
      .subscribe(
        (restaurants: ICafe[]) => {
          const result: ICafe[] = [];
          restaurants.filter((restaurant) => {
            restaurant.bookings.map((day) => {
              if (day.date === option.date) {
                let taken = 0;
                day.tables.map((table) => taken += +table.tableType * +table.tableAmount);
                if (+option.tableType === 2 && +restaurant.tables.tableType2 * 2 >= +taken + +option.persons) {
                  result.push(restaurant);
                } else if (+option.tableType === 4 && +restaurant.tables.tableType4 * 4 >= taken + option.persons) {
                  result.push(restaurant);
                }
              } else {
                if (+option.tableType === 2 && +restaurant.tables.tableType2 * 2 >= +option.persons) {
                  result.push(restaurant);
                } else if (+option.tableType === 4 && +restaurant.tables.tableType4 * 4 >= +option.persons) {
                  result.push(restaurant);
                }
              }
            });
        });
        this.filterService.changeCafes(result);
        }
      );
  }

  bookTables() {
    const bookTables = Math.round(this.userQuery.persons / this.userQuery.tableType);
    console.log(`I have book ${bookTables} in ${this.restaurant.name}`);
  }
}
