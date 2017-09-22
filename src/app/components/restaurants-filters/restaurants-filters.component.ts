import { Component, OnInit } from '@angular/core';
import { GetCafesService } from '../../services/getcafes/getcafes.service';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-restaurants-filters',
  templateUrl: './restaurants-filters.component.html',
  styleUrls: ['./restaurants-filters.component.scss']
})
export class RestaurantsFiltersComponent implements OnInit {
  categories: String[];
  cuisines: String[];
  features: String[];
  categoryFilter: String[] = [];
  cuisineFilter: String[] = [];
  featureFilter: String[] = [];

  constructor(private getCafesService: GetCafesService, private filterService: FilterService) { }

  ngOnInit() {
    this.categories = this.getCafesService.getCategories();
    this.cuisines = this.getCafesService.getCuisines();
    this.features = this.getCafesService.getFeatures();
  }

  updateCategoryFilter(option, event) {
    if (event.target.checked) {
      this.categoryFilter.push(option);
    } else {
      const index = this.categoryFilter.indexOf(option);
      if (index > -1) {
        this.categoryFilter.splice(index, 1);
      }
    }
    this.filterService.updatedCategoryFilter.next(this.categoryFilter);
  }

  updateCuisineFilter(option, event) {
    if (event.target.checked) {
      this.cuisineFilter.push(option);
    } else {
      const index = this.cuisineFilter.indexOf(option);
      if (index > -1) {
        this.cuisineFilter.splice(index, 1);
      }
    }
    this.filterService.updatedCuisineFilter.next(this.cuisineFilter);
  }

  updateFeatureFilter(option, event) {
    if (event.target.checked) {
      this.featureFilter.push(option);
    } else {
      const index = this.featureFilter.indexOf(option);
      if (index > -1) {
        this.featureFilter.splice(index, 1);
      }
    }
    this.filterService.updatedFeatureFilter.next(this.featureFilter);
  }
}
