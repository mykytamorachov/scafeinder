import { Component, OnInit, Input } from '@angular/core';
import { ICafe } from '../../models/cafe.interface';
import { ShortcutPipe } from '../../pipes/shortcut.pipe';
import { GetCafesService } from '../../services/getcafes/getcafes.service';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.scss']
})
export class RestaurantsListComponent implements OnInit {
  restaurants: ICafe[] = [];
  categoryFilter: String[] = [];
  cuisineFilter: String[] = [];
  featureFilter: String[] = [];
  p = 1;
  geolocationTurned: boolean;

  constructor(private getCafesService: GetCafesService, private filterService: FilterService) {

    this.filterService.updatedCategoryFilter
      .subscribe((filter: String[]) => {
        this.categoryFilter = filter;
      }
    );
    this.filterService.updatedCuisineFilter
      .subscribe((filter: String[]) => {
        this.cuisineFilter = filter;
      }
    );
    this.filterService.updatedFeatureFilter
      .subscribe((filter: String[]) => {
        this.featureFilter = filter;
      }
    );
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
      this.geolocationTurned = true;
      console.log('Geolocation is turned on!');
    } else {
      this.geolocationTurned = false;
      console.log('Geolocation is turned off!');
    }
  }

  showPosition(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
  }

  showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log('User denied the request for Geolocation.');
        break;
      case error.POSITION_UNAVAILABLE:
        console.log('Location information is unavailable.');
        break;
      case error.TIMEOUT:
        console.log('The request to get user location timed out.');
        break;
        case error.UNKNOWN_ERROR:
          console.log('An unknown error occurred.');
          break;
    }
  }

  ngOnInit() {
    this.getCafesService.getAllCafes()
      .subscribe(
        (restaurants: ICafe[]) => {
          this.restaurants = restaurants;
        },
        (error) => console.log(error)
      );
    this.filterService.currentCafes.subscribe(data => this.restaurants = data);

    this.getLocation();
  }

}
