export interface ICafe {
  location?: {
      lat: Number,
      lng: Number
  };
  name: string;
  rating?: Number;
  address: String;
  categories?: String[];
  cuisines?: String[];
  features?: String[];
  bookings?: [{date: String, tables: Array<{userId: String, time: String, people: Number, tableType: Number, tableAmount: Number}>}];
  tables?: {tableType2: Number, tableType4: Number};
  phones?: String[];
  web?: String;
  img?: String;
  profileImg?: String;
  logoImg?: String;
  _id?: String;
}
