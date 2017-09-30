import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { GetCafesService } from './getcafes/getcafes.service';
import { ICafe } from '../models/cafe.interface';

@Injectable()
export class FilterService {
  cafeSource = new Subject<ICafe[]>();
  currentCafes = this.cafeSource.asObservable();

  updatedCategoryFilter = new Subject<String[]>();
  updatedCuisineFilter = new Subject<String[]>();
  updatedFeatureFilter = new Subject<String[]>();

  constructor(private getCafesService: GetCafesService) { }

  changeCafes(data: ICafe[]) {
    this.cafeSource.next(data);
  }
}
