import { Pipe, PipeTransform } from '@angular/core';
import { ICafe } from '../models/cafe.interface';

@Pipe({
  name: 'featureShortcut',
  pure: false
})
export class FeatureShortcutPipe implements PipeTransform {

  transform(items: ICafe[], featureFilter: String[] = []): ICafe[] {
    if (!items) { return []; }
    if (!items.length || !featureFilter.length) {
      return items;
    } else {
    const result = items.filter(obj => featureFilter.every(key => obj.features.indexOf(key) > -1));
    return result;
    }
  }

}
