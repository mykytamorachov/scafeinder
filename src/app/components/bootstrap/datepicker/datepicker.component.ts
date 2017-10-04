import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbDateStruct, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  @Output() selectedDate: EventEmitter<any> = new EventEmitter();

  model: NgbDateStruct;
  d: any;
  valuedate = new Date();

  constructor(config: NgbDatepickerConfig) {
    const now = new Date();
    const plusHalfYear = (new Date(+now + 15768000000)).toISOString().slice(0, 10);
    config.minDate = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
    config.maxDate = { year: +plusHalfYear.slice(0, 4), month: +plusHalfYear.slice(5, 7), day: +plusHalfYear.slice(8, 10) };
   }

  ngOnInit() {
    this.onSelectDate(this.model);
  }

  onSelectDate(date: NgbDateStruct) {
    if (date !== null) {
      this.model = date;
      this.selectedDate.emit(this.model);
    }
  }
}
