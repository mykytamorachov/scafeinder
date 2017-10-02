import { Pipe, PipeTransform } from '@angular/core';
import { ICafe } from '../models/cafe.interface';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  transform(items: ICafe[]): String[] {
    if (!items || !items.length) {
      return [];
    }
    const unique = items.map(item => item.name)
      .filter((item, index, arr) => arr.indexOf(item) === index);
    return unique;
  }

}
