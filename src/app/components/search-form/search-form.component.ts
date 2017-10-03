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
  userQuery = new UserQuery(2, 4, new Date().toISOString().slice(0, 10), ((new Date().getHours() + 1) + ':00'), '');

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
    this.getCafesService.getAllCafes()
      .subscribe(
        (restaurants: ICafe[]) => {
          this.restaurants = restaurants;
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
      return dayHours;
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

  findTables() {
    const option = this.userQuery;
    this.getCafesService.getAllCafes()
      .subscribe(
        (restaurants: ICafe[]) => {
          const result: ICafe[] = [];
          restaurants.filter((restaurant) => {
            const search = () => {
              if (restaurant.bookings.length === 0) {
                if (+option.tableType === 2 && +restaurant.tables.tableType2 * 2 >= +option.persons) {
                  result.push(restaurant);
                } else if (+option.tableType === 4 && +restaurant.tables.tableType4 * 4 >= +option.persons) {
                  result.push(restaurant);
                }
              } else {
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
              }
            };
            if (!this.userQuery.placeName) {
              search();
            } else if (this.userQuery.placeName === restaurant.name) {
              search();
            }
        });
        this.filterService.changeCafes(result);
        }
      );
  }
}
