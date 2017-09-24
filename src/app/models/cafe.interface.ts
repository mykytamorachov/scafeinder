export interface ICafe {
  location?: {
      lat: Number,
      lng: Number
  };
  name: String;
  rating?: Number;
  address: String;
  categories?: String[];
  cuisines?: String[];
  features?: String[];
  time?: {[propName: string]: Array<{tableType: Number, number: Number}>};
  img?: String;
  id?: Number;
}
