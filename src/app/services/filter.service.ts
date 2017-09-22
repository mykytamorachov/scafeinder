import { Injectable, EventEmitter } from '@angular/core';
import { GetCafesService } from './getcafes/getcafes.service';
import { ICafe } from '../models/cafe.interface';

@Injectable()
export class FilterService {
  updatedCategoryFilter = new EventEmitter<String[]>();
  updatedCuisineFilter = new EventEmitter<String[]>();
  updatedFeatureFilter = new EventEmitter<String[]>();

  constructor(private getCafesService: GetCafesService) { }

}
