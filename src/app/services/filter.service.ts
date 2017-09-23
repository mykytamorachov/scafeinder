import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { GetCafesService } from './getcafes/getcafes.service';
import { ICafe } from '../models/cafe.interface';


@Injectable()
export class FilterService {
  private cafeSource = new BehaviorSubject(this.getCafesService.getAllCafes());
  currentCafes = this.cafeSource.asObservable();

  updatedCategoryFilter = new Subject<String[]>();
  updatedCuisineFilter = new Subject<String[]>();
  updatedFeatureFilter = new Subject<String[]>();

  constructor(private getCafesService: GetCafesService) { }

  changeCafes(data: ICafe[]) {
    this.cafeSource.next(data);
  }
}
