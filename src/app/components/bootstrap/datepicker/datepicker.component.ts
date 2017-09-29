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
    config.minDate = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
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
