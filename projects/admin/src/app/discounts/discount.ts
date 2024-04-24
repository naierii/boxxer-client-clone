export class Discount {
  constructor(
    public _id: string,
    public title: string,
    public code: string,
    public expiry: Date,
    public percent: number,
    public amount: number,
    public qty: number,
    public type: string
  ) {}
}
