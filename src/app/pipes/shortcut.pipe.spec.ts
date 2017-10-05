import { ShortcutPipe } from './shortcut.pipe';
import { ICafe } from '../models/cafe.interface';

const cafes: ICafe[] = [
  {
    name: 'Baczewski',
    address: '8 Shevska Str., Lviv, Ukraine',
    cuisines: ['Galician', 'Jewish', 'Polish', 'Ukrainian', 'Vegetarian'],
    features: ['live music', 'movie screenings', 'pet-friendly', 'summer terrace', 'Wi-Fi'],
    categories: ['luxury restaurant']
  },
  {
    name: 'Kryva Lypa',
    address: '8 Kryva Lypa lane, Lviv, Ukraine',
    cuisines: ['European', 'Italian', 'Ukrainian', 'Vegetarian'],
    features: ['bicycle parking', 'live music', 'movie screenings', 'summer terrace', 'Wi-Fi'],
    categories: ['pub']
  },
  {
    name: 'Kumpel',
    address: '2B Chornovola Ave., Lviv, Ukraine',
    cuisines: ['Galician', 'Hungarian', 'Italian', 'Polish', 'Ukrainian'],
    features: ['live music', 'summer terrace', 'Wi-Fi'],
    categories: ['brewery', 'pub']
  }
];

const categoryFilter: String[] = ['brewery'];
const cuisineFilter: String[] = ['European'];
const featureFilter: String[] = ['pet-friendly'];

describe('ShortcutPipe', () => {

  const pipe = new ShortcutPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transform cafes to array of filtered cafes by category', () => {
    expect(pipe.transform(cafes, categoryFilter)[0].name).toBe('Kumpel');
  });

  it('transform cafes to array of filtered cafes by cuisine', () => {
    expect(pipe.transform(cafes, [], cuisineFilter)[0].name).toBe('Kryva Lypa');
  });

  it('transform cafes to array of filtered cafes by feature', () => {
    expect(pipe.transform(cafes, [], [], featureFilter)[0].name).toBe('Baczewski');
  });

});
