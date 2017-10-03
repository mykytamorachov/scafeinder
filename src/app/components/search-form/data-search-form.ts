export class UserQuery {
    constructor(
      public persons?: number,
      public tableType?: number,
      public date?: string,
      public time?: string,
      public placeName?: string
    ) {  }
}

const range = (start, end) => Array.from(Array(1 + end - start).keys()).map((i) => i + start);

const getHours = (start, end) => {
  return range(start, end).reduce((prev, curr, index, array) => prev.concat([0, 0].fill(curr)), []);
};

export const dayHours = getHours(10, 23);

export const company = Array.from(Array(15).keys()).slice(2);
