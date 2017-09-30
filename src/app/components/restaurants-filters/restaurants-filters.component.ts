import { Component, OnInit } from '@angular/core';
import { GetCafesService } from '../../services/getcafes/getcafes.service';
import { FilterService } from '../../services/filter.service';
import { ICafe } from '../../models/cafe.interface';

@Component({
  selector: 'app-restaurants-filters',
  templateUrl: './restaurants-filters.component.html',
  styleUrls: ['./restaurants-filters.component.scss']
})
export class RestaurantsFiltersComponent implements OnInit {
  categories: String[] = [];
  cuisines: String[] = [];
  features: String[] = [];
  categoryFilter: String[] = [];
  cuisineFilter: String[] = [];
  featureFilter: String[] = [];

  constructor(private getCafesService: GetCafesService, private filterService: FilterService) { }

  ngOnInit() {
    this.getCafesService.getAllCafes()
      .subscribe(
        (restaurants: ICafe[]) => {
          const data = restaurants;
          this.categories = this.getCategories(data);
          this.cuisines = this.getCuisines(data);
          this.features = this.getFeatures(data);
        },
        (error) => console.log(error)
      );
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

  getCuisines(restaurants): String[] {
    const cuisines = [];
    restaurants.forEach((restaurant) => restaurant.cuisines.
      forEach((cuisine) => {if (cuisines.indexOf(cuisine) === -1) {
        cuisines.push(cuisine);
      }}));
    return cuisines.sort();
  }

  getFeatures(restaurants): String[] {
    const features = [];
    restaurants.forEach((restaurant) => restaurant.features.
      forEach((feature) => {if (features.indexOf(feature) === -1) {
        features.push(feature);
      }}));
    return features.sort();
  }

  getCategories(restaurants): String[] {
    const categories = [];
    restaurants.forEach((restaurant) => restaurant.categories.
      forEach((category) => {if (categories.indexOf(category) === -1) {
        categories.push(category);
      }}));
    return categories.sort();
  }

}
