import { UniquePipe } from './unique.pipe';
import { ICafe } from '../models/cafe.interface';

const cafes: ICafe[] = [
  {
  name: 'Baczewski',
  address: '8 Shevska Str., Lviv, Ukraine'
  },
  {
    name: 'Baczewski',
    address: '8 Kryva Lypa lane, Lviv, Ukraine'
  },
  {
    name: 'Baczewski',
    address: '2B Chornovola Ave., Lviv, Ukraine'
  }
];


describe('UniquePipe', () => {

  const pipe = new UniquePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "cafes" to array of Uniques names', () => {
    expect(pipe.transform(cafes)[0]).toBe('Baczewski');
  });

  it('transforms "cafes" to array with one unique name', () => {
    expect(pipe.transform(cafes).length).toBe(1);
  });

});
