import { Image } from './image';
import { Order } from './order';

export interface Production {
  _id?: string;
  description: string;
  images: Image[];
  type: string;
  order: Order;
  createdAt: Date;
}
