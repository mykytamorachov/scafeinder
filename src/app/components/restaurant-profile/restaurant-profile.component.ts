import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ICafe } from '../../models/cafe.interface';
import { GetCafesService } from '../../services/getcafes/getcafes.service';
import { Response } from '@angular/http';


@Component({
  selector: 'app-restaurant-profile',
  templateUrl: './restaurant-profile.component.html',
  styleUrls: ['./restaurant-profile.component.scss']
})
export class RestaurantProfileComponent implements OnInit, OnDestroy {
  restaurant: ICafe;
  id: String;
  private sub: any;

  constructor(private getCafesService: GetCafesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.getCafesService.getCafeById(this.id)
      .subscribe(
        (restaurant: ICafe) => {
          this.restaurant = restaurant;
        },
        (error) => console.log(error)
      );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
