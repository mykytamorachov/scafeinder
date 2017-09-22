import { Injectable } from '@angular/core';
import { GetCafesService } from './getcafes/getcafes.service';
import { ICafe } from '../models/cafe.interface';

@Injectable()
export class FilterService {

  constructor(private getCafesService: GetCafesService) { }

}
