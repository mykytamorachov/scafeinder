import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ICafe } from '../../models/cafe.interface';
import { GetCafesService } from '../../services/getcafes/getcafes.service';

@Component({
  selector: 'app-restaurant-profile',
  templateUrl: './restaurant-profile.component.html',
  styleUrls: ['./restaurant-profile.component.scss']
})
export class RestaurantProfileComponent implements OnInit {
  restaurant: ICafe;

  constructor(private getCafesService: GetCafesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.restaurant = this.getCafesService.getAllCafes().find((obj) => obj.id === +params['id']);
        }
      );
  }

}
