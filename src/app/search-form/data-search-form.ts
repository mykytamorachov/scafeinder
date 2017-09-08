export class UserQuery {
    constructor(
      public persons?: number,
      public time?: string,
      public placeName?: string,
      public placeType?: string[],
    ) {  }
}

export const placeTypes = [
  {name: 'vegeterian', checked: false},
  {name: 'fast food', checked: false},
  {name: 'cafe', checked: false},
  {name: 'pub', checked: false},
  {name: 'coffee & tea', checked: false},
  {name: 'sushi', checked: false},
  {name: 'lounge bar', checked: false},
  {name: 'live music', checked: false}
];
