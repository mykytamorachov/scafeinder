import { Pipe, PipeTransform } from '@angular/core';
import { ICafe } from '../models/cafe.interface';

@Pipe({
  name: 'shortcut',
  pure: false
})
export class ShortcutPipe implements PipeTransform {

  transform(items: ICafe[], cuisineFilter: String[] = []): ICafe[] {
    if (!items) { return []; }
    if (!items.length || !cuisineFilter.length) {
      return items;
    } else {
    const result = items.filter(obj => cuisineFilter.every(key => obj.cuisines.indexOf(key) > -1));
    return result;
    }
  }

}
