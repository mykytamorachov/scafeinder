import { Pipe, PipeTransform } from '@angular/core';
import { ICafe } from '../models/cafe.interface';

@Pipe({
  name: 'categoryShortcut',
  pure: false
})
export class CategoryShortcutPipe implements PipeTransform {

  transform(items: ICafe[], categoryFilter: String[] = []): ICafe[] {
    if (!items) { return []; }
    if (!items.length || !categoryFilter.length) {
      return items;
    } else {
    const result = items.filter(obj => categoryFilter.every(key => obj.categories.indexOf(key) > -1));
    return result;
    }
  }

}
