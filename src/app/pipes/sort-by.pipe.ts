import { Pipe, PipeTransform } from '@angular/core';
import { ICafe } from '../models/cafe.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(items: ICafe[], key: string = ''): ICafe[] {
    if (!items || !items.length) {
      return [];
    }

    if (!key) {
      return items;
    } else if (key === 'ratingAsc') {
      return items.sort(function(obj1, obj2) {
        return +obj1['rating'] - +obj2['rating'];
      });
    } else if (key === 'ratingDesc') {
      return items.sort(function(obj1, obj2) {
        return +obj2['rating'] - +obj1['rating'];
      });
    } else if (key === 'distance') {
      console.log('Sorting By Distance');
      return items;
    } else {
      return items;
    }

  }
}
