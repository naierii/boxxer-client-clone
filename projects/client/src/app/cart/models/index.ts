import { LineItem } from '@global/models/line-item';
import { Order } from '@global/models/order';

export interface CartReadyMade {
  product_variation: string;
  normal_custom: any;
  qty?: number;
}

export interface CartCustom {
  custom_design: string;
  custom_product: any;
  svg_data: string;
}

export interface CartResponse {
  item: LineItem;
  order: Order;
  token: string;
}
