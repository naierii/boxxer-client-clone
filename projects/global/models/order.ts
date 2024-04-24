import { Payment } from './payment';
import { LineItem } from './line-item';
import { User } from './user';
import { Address } from './address';

export interface OrderVoucher {
  code: string;
  amount: number;
}

export interface Order {
  _id: string;
  order_type: string;
  orderid: number;
  shipping: Address;
  saved_shipping: string;
  billing: Address;
  saved_billing: string;
  items: LineItem[];
  email: string;
  phone: string;
  status: string;
  type: string;
  subtotal: number;
  discountCode: string;
  discountPercent: number;
  discountAmount: number;
  voucher_amount: number;
  voucher_code: string;
  shippingprice: number;
  shippingmethod: string;
  tracking: string;
  courier: string;
  shippedDate: Date;
  dueDate: Date;
  sendByDate: Date;
  dueDateConfirmed: boolean;
  jobCardIssuedDate: Date;
  comments: string;
  goods_total: number;
  design_total: number;
  total: number;
  balance: number;
  checkoutDate: Date;
  owner: User;
  payments: Payment[];
  links: any;
  vouchers: OrderVoucher[];
  survey?: string;
}
