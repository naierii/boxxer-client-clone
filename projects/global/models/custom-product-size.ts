import { Term } from './term';

export class CustomSize {
  constructor(public title: string, public price_adjust: number) {}
}

export class CustomProductSize {
  constructor(
    public _id: string,
    public title: string,
    public categories: Term[],
    public sizes: CustomSize[]
  ) {}
}
