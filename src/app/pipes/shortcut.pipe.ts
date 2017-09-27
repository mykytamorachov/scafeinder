import { Pipe, PipeTransform } from '@angular/core';
import { ICafe } from '../models/cafe.interface';

@Pipe({
  name: 'shortcut',
  pure: false
})
export class ShortcutPipe implements PipeTransform {

  transform(items: ICafe[], categoryFilter: String[] = [], cuisineFilter: String[] = [], featureFilter: String[] = []): ICafe[] {
    if (!items || !items.length) {
      return [];
    } else {
      const result = items.filter(obj => categoryFilter.every(key => obj.categories.indexOf(key) > -1))
      .filter(obj => cuisineFilter.every(key => obj.cuisines.indexOf(key) > -1))
      .filter(obj => featureFilter.every(key => obj.features.indexOf(key) > -1));
      return result;
    }
  }

}
