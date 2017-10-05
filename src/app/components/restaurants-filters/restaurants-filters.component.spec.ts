import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GetCafesService } from '../../services/getcafes/getcafes.service';
import { HttpModule } from '@angular/http';
import { FilterService } from '../../services/filter.service';
import { cafesJson } from '../../services/getcafes/cafe.data';

import { RestaurantsFiltersComponent } from './restaurants-filters.component';

// const getCafesServiceStub = {
//   getAllCafes() {
//     return cafesJson;
//   },
//   getCafeById(id) {
//     return cafesJson.filter(cafe => cafe._id === id);
//   }
// };

describe('RestaurantsFiltersComponent', () => {
  let component: RestaurantsFiltersComponent,
      fixture: ComponentFixture<RestaurantsFiltersComponent>,
      de: DebugElement,
      el: HTMLInputElement,

      getCafesService: GetCafesService,
      filterService: FilterService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [RestaurantsFiltersComponent],
      providers: [ GetCafesService, FilterService ],
      // providers: [{ provide: GetCafesService, useValue: getCafesServiceStub }, FilterService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsFiltersComponent);
    component = fixture.componentInstance;

    getCafesService = fixture.debugElement.injector.get(GetCafesService);
    filterService = fixture.debugElement.injector.get(FilterService);

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('updateCategoryFilter method should be updated with new Category', async() => {
    component.updateCategoryFilter('alcohol-free', {event: {target: {checked: true}}});
    fixture.detectChanges();
    expect(component.categoryFilter.sort()[0]).toEqual('alcohol-free');
  });

  it('updateCuisineFilter method should be updated with new Cuisine', async() => {
    component.updateCuisineFilter('American', {event: {target: {checked: true}}});
    fixture.detectChanges();
    expect(component.cuisineFilter.sort()[0]).toEqual('American');
  });

  it('updateFeatureFilter method should be updated with new Feature', async() => {
    component.updateFeatureFilter('24h', {event: {target: {checked: true}}});
    fixture.detectChanges();
    expect(component.featureFilter.sort()[0]).toEqual('24h');
  });

  it('getCuisines method should get all Cuisines', async() => {
    const cuisines = component.getCuisines(cafesJson);
    fixture.detectChanges();
    expect(cuisines.length).toEqual(23);
  });

  it('getFeatures method should get all Features', async() => {
    const features = component.getFeatures(cafesJson);
    fixture.detectChanges();
    expect(features.length).toEqual(24);
  });

  it('getCategories method should get all Categories', async() => {
    const categories = component.getCategories(cafesJson);
    fixture.detectChanges();
    expect(categories.length).toEqual(16);
  });

  // describe('when checked filters on template', () => {
  //   beforeEach(() => {
  //     fixture = TestBed.createComponent(RestaurantsFiltersComponent);
  //     component = fixture.componentInstance;
  //     de = fixture.debugElement.queryAll(By.css('.custom-control-input'))[0];
  //     el = de.nativeElement;
  //     // el = fixture.debugElement.queryAll(By.css('.custom-control-input'))[0].nativeElement;
  //   });

  //   it('should add first category = alcohol-free', () => {
  //     el.checked = true;
  //     fixture.detectChanges();
  //     expect(component.categoryFilter.sort()[0]).toEqual('alcohol-free');
  //   });
  // });

});
