import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants-filters',
  templateUrl: './restaurants-filters.component.html',
  styleUrls: ['./restaurants-filters.component.scss']
})
export class RestaurantsFiltersComponent implements OnInit {
  categories: string[] = ['alcohol-free', 'barbecue', 'cafe', 'coffee house', 'fast food', 'lounge bar', 'pizza', 'pub', 'sushi'];
  cuisines: string[] = ['Asian', 'Chinese', 'Georgian',
  'Italian', 'Japanese', 'Mediterranean', 'Mexican', 'Ukrainian', 'Vegetarian'];
  features: string[] = ['hookah', 'karaoke', 'live music', 'roof terrace'];
  cuisineFilter: string[] = [];
  constructor() { }

  ngOnInit() {
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
