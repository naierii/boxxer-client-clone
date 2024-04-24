import { Product } from './product';
import { LineItem } from './line-item';
import { Order } from './order';
export class ProductSerial {
  constructor(
    public _id: string,
    public order: Order,
    public line_item: LineItem,
    public serial_number: string,
    public token: string,
    public claimed: boolean,
    public kickstarter: boolean,
    public kickstarter_name: string,
    public kickstarter_email: string,
    public kickstarter_orderid: string,
    public kickstarter_email_sent: string,
    public kickstarter_shipped_date: Date,
    public product: Product,
    public products: Product[]
  ) {}
}
