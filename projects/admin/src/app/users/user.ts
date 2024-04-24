export class User {
  constructor(
    public _id: string,
    public userid: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public roles: Array<string>
  ) {}
}
