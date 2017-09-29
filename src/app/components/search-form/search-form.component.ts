import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { company, dayHours, UserQuery } from './data-search-form';
import { DatepickerComponent } from '../bootstrap/datepicker/datepicker.component';
import { GetCafesService } from '../../services/getcafes/getcafes.service';
import { FilterService } from '../../services/filter.service';
import { ICafe } from '../../models/cafe.interface';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})

export class SearchFormComponent implements OnInit {
  restaurants: ICafe[];
  company: Array<number>;
  dayHours: any;
  model: NgbDateStruct;
  searchform: FormGroup;
  userQuery = new UserQuery(7, 4, new Date().toISOString().slice(0, 10), ((new Date().getHours() + 2) + ':00'), 'Cosa Nostra');

  constructor(private _formBuilder: FormBuilder, private getCafesService: GetCafesService, private filterService: FilterService) {
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
    this.restaurants = this.getCafesService.getAllCafes();

    const result = this.restaurants.filter((restaurant) => {
      if (restaurant.bookings[option.date]) {
        let taken = 0;
        const freeTables = (restaurant.bookings.hasOwnProperty(option.date)
          && restaurant.bookings[option.date].tables.map((table) => taken += +table.tableType * +table.number));

        if (restaurant.bookings[option.date].capacity >= taken + option.persons) {
          return restaurant;
        }
      } else if (option.date === new Date().toISOString().slice(0, 10)) {
        const tables = (restaurant.time.hasOwnProperty(option.time)
          && restaurant.time[option.time].find((table) => table.tableType === +option.tableType));
        return tables && +tables.tableType * +tables.number >= +option.persons;
      } else {
        return restaurant;
      }
    });

    this.filterService.changeCafes(result);
  }
}
