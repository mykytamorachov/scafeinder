export class UserQuery {
  constructor(
    public persons?: number,
    public tableType?: number,
    public date?: string,
    public time?: string,
    public placeName?: string
  ) {  }
}
