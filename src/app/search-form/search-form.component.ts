import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { UserQuery, placeTypes } from './data-search-form';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})

export class SearchFormComponent implements OnInit {
  searchform: FormGroup;
  placeTypes: any;
  userQuery = new UserQuery(2, '13:00', 'Cosa Nostra');

  constructor(private _formBuilder: FormBuilder) {
    this._buildForm();
  }

  private _buildForm() {
    this.searchform = this._formBuilder.group({
      tables: this._formBuilder,
      time: this._formBuilder,
      placeName: this._formBuilder,
      placeType: this._formBuilder.group({
        vegeterian: this._formBuilder,
        fastFood: this._formBuilder,
        cafe: this._formBuilder,
        pub: this._formBuilder,
        coffeeAndTea: this._formBuilder,
        sushi: this._formBuilder,
        loungeBar: this._formBuilder,
        liveMusic: this._formBuilder
      }),
    });
  }

  ngOnInit() {
    this.placeTypes = placeTypes;
  }

  get diagnostic() {
    this.userQuery.placeType = this.selectedOptions;
    return JSON.stringify(this.userQuery);
  }

  get selectedOptions() {
    return this.placeTypes
      .filter(place => place.checked)
      .map(place => place.name);
  }
}
