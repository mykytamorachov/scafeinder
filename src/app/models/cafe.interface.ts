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
  bookings?: {[propName: string]: {capacity: Number, tables:
    Array<{userId: Number, time: String, people: Number, tableType: Number, number: Number}>}};
  time?: {[propName: string]: Array<{tableType: Number, number: Number}>};
  phones?: String[];
  web?: String;
  img?: String;
  id?: Number;
  _id?: String;
}
