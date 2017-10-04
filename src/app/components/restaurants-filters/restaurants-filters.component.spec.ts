import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GetCafesService } from '../../services/getcafes/getcafes.service';
import { HttpModule } from '@angular/http';
import { FilterService } from '../../services/filter.service';
import { cafesJson } from '../../services/getcafes/cafe.data';

import { RestaurantsFiltersComponent } from './restaurants-filters.component';

const getCafesServiceStub = {
  getAllCafes() {
    return cafesJson;
  },
  getCafeById(id) {
    return cafesJson.filter(cafe => cafe._id === id);
  }
};

describe('RestaurantsFiltersComponent', () => {
  let component: RestaurantsFiltersComponent,
      fixture: ComponentFixture<RestaurantsFiltersComponent>,
      de: DebugElement,
      el: HTMLElement,

      getCafesService: GetCafesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [RestaurantsFiltersComponent],
      providers: [{ provide: GetCafesService, useValue: getCafesServiceStub }, FilterService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsFiltersComponent);
    component = fixture.componentInstance;

    // Получаем реальный сервис из инжектора компонента
    getCafesService = fixture.debugElement.injector.get(GetCafesService);
    // Получаем input-ы c name="categories" по css селектору
    // de = fixture.debugElement.query(By.css('input[name="categories"]'));
    de = fixture.debugElement.query(By.css('.custom-control-description')[0]);

    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  // it('should return first category = alcohol-free', () => {
  //   // fixture.detectChanges();
  //   expect(el.textContent).toContain('alcohol-free');
  // });

});
