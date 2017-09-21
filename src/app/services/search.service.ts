import { Injectable } from '@angular/core';
import { ISearchModel } from '../models/search.interface';

@Injectable()
export class SearchService {
  public SearchPredicates: ISearchModel = {};

  constructor() { }

  setFilter(name): Number {
    return this.SearchPredicates.filters.push(name);
  }
  setQuery(name, item) {
    return this.SearchPredicates.query[name] = item;
  }

}
