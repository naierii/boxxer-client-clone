import { ProductDisplay } from './product-display';
export class Engraving {
  constructor(
    public _id: string,
    public title: string,
    public max_letters: number,
    public price: number,
    public offer_price: number,
    public offer_start_date: Date,
    public offer_end_date: Date,
    public products: ProductDisplay[],
    public weight: number
  ) {}
}
