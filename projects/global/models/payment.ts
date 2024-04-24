export class Payment {
  constructor(
    public _id: string,
    public amount: number,
    public type: string,
    public action: string,
    public data: any,
    public createdAt: Date
  ) {}
}
