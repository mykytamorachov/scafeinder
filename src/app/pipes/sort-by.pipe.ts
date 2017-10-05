import { Pipe, PipeTransform } from '@angular/core';
import { ICafe } from '../models/cafe.interface';

@Pipe({
  name: 'sortBy',
  pure: false
})
export class SortByPipe implements PipeTransform {

  transform(items: ICafe[], key: string = ''): ICafe[] {
    if (!items || !items.length) {
      return [];
    }

    if (!key) {
      return items;
    }

    if (key === 'ratingAsc') {
      return items.sort(function(obj1, obj2) {
        return +obj1['rating'] - +obj2['rating'];
      });
    }

    if (key === 'ratingDesc') {
      return items.sort(function(obj1, obj2) {
        return +obj2['rating'] - +obj1['rating'];
      });
    }

  }
}
