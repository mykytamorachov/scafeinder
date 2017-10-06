import { SortByPipe } from './sort-by.pipe';
import { ICafe } from '../models/cafe.interface';

const cafes: ICafe[] = [
  {
    name: 'Fashion Club',
    rating: 3.8,
    address: '1 Ivan Pidkova Sqr., Lviv, Ukraine'
  },
  {
    name: 'Club Split Lviv',
    rating: 4.3,
    address: '6/7 Adam Mitskevich Str., Lviv, Ukraine'
  },
  {
    name: 'ALLin lounge',
    rating: 4.7,
    address: '20/8 General Chuprynka`s Str., Lviv, Ukraine'
  }
];

describe('SortByPipe', () => {
  let pipe: SortByPipe;

  beforeEach(() => {
    pipe = new SortByPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns empty array if it is initially empty', () => {
    expect(pipe.transform([])).toEqual([]);
  });

  it('returns empty array if data is falsy', () => {
    expect(pipe.transform(undefined)).toEqual([]);
  });

  it('returns the same array if no key is specified', () => {
    expect(pipe.transform(cafes)).toBe(cafes);
  });

  it('returns the array sorted ascending by rating if key is ratingAsc', () => {
    expect(pipe.transform(cafes, 'ratingAsc')).toEqual([
      {name: 'Fashion Club', rating: 3.8, address: '1 Ivan Pidkova Sqr., Lviv, Ukraine'},
      {name: 'Club Split Lviv', rating: 4.3, address: '6/7 Adam Mitskevich Str., Lviv, Ukraine'},
      {name: 'ALLin lounge', rating: 4.7, address: '20/8 General Chuprynka`s Str., Lviv, Ukraine'}
    ]);
  });

  it('returns the array sorted descending by rating if key is ratingDesc', () => {
    expect(pipe.transform(cafes, 'ratingDesc')).toEqual([
      {name: 'ALLin lounge', rating: 4.7, address: '20/8 General Chuprynka`s Str., Lviv, Ukraine'},
      {name: 'Club Split Lviv', rating: 4.3, address: '6/7 Adam Mitskevich Str., Lviv, Ukraine'},
      {name: 'Fashion Club', rating: 3.8, address: '1 Ivan Pidkova Sqr., Lviv, Ukraine'}
    ]);
  });

  it('returns the same non-sorted array if key is unknown', () => {
    expect(pipe.transform(cafes, 'address')).toEqual(cafes);
  });

});
