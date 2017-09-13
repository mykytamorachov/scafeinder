import { Pipe, PipeTransform } from '@angular/core';
import { Restaurant } from './restaurants/restaurant.model';

@Pipe({
  name: 'shortcut'
})
export class ShortcutPipe implements PipeTransform {

  transform(items: Restaurant[], cuisineFilter: string[] = []): Restaurant[] {
    if (!items.length || !cuisineFilter.length) {
      return items;
    } else {
    const result = items.filter(obj => obj.cuisine.some(key => cuisineFilter.indexOf(key) > -1));
    return result;
    }
  }

}
