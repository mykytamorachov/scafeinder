import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../../models/restaurant.model';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.scss']
})
export class RestaurantItemComponent implements OnInit {
  restaurant: Restaurant;

  constructor() { }

  ngOnInit() {
  }

}
