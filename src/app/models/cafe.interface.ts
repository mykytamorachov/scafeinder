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
  tables?: Array<{tableType: Number, free: Boolean}>;
  img?: String;
  id?: Number;
}

