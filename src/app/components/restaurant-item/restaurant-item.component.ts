import { Component, OnInit, Input } from '@angular/core';
import { ICafe } from '../../models/cafe.interface';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.scss']
})
export class RestaurantItemComponent implements OnInit {
  @Input() restaurant: ICafe;

  constructor() { }

  ngOnInit() {
  }

}
