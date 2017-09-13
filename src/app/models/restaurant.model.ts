export class Restaurant {
  public name: string;
  public type: string;
  public address: string;
  public phone: string;
  public imgPath: string;
  public cuisine: string[];
  public additional: string[];

  constructor(name: string, type: string, address: string, phone: string, imgPath: string, cuisine: string[], additional: string[]) {
  this.name = name;
  this.type = type;
  this.address = address;
  this.phone = phone;
  this.imgPath = imgPath;
  this.cuisine = cuisine;
  this.additional = additional;
  }
}
