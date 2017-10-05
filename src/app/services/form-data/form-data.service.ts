import { Injectable } from '@angular/core';

@Injectable()
export class FormDataService {

  constructor() { }

  private range(start, end) {
    return Array.from(Array(1 + end - start).keys()).map((i) => i + start);
  }

  company(people) {
    return Array.from(Array(people + 1).keys()).slice(2);
  }

  getHours(start, end) {
    return this.range(start, end).reduce((prev, curr, index, array) => prev.concat([0, 0].fill(curr)), []);
  }

}
