import { Component, OnInit } from '@angular/core';
import { GetCafesService } from '../../services/getcafes/getcafes.service';

@Component({
  selector: 'app-restaurants-filters',
  templateUrl: './restaurants-filters.component.html',
  styleUrls: ['./restaurants-filters.component.scss']
})
export class RestaurantsFiltersComponent implements OnInit {
  categories: string[];
  cuisines: string[];
  features: string[];
  cuisineFilter: string[] = [];

  constructor(private getCafesService: GetCafesService) { }

  ngOnInit() {
    this.categories = this.getCafesService.getCategories();
    this.cuisines = this.getCafesService.getCuisines();
    this.features = this.getCafesService.getFeatures();
  }

  updateCategoryFilter(option, event) {
    console.log('Category:' + option);
    console.log(event.target.checked);
  }

  updateCuisineFilter(option, event) {
    console.log('Cuisine:' + option);
    console.log(event.target.checked);
    if (event.target.checked) {
      this.cuisineFilter.push(option);
    } else {
      const index = this.cuisineFilter.indexOf(option);
      if (index > -1) {
        this.cuisineFilter.splice(index, 1);
      }
    }
  }

  updateFeatureFilter(option, event) {
    console.log('Feature:' + option);
    console.log(event.target.checked);
  }
}
