import { CustomDesign } from './custom-design';
import { CustomProduct } from './custom-product';
import { ProductDisplay } from './product-display';
import { Product } from './product';
import { Order } from '@global/models/order';

export interface LineItem {
  _id?: string;
  qty?: number;
  custom_price?: number;
  product_price?: number;
  price?: number;
  original_price?: number;
  sale_price?: number;
  normal_product?: ProductDisplay;
  product_variation?: Product;
  total?: number;
  product_customisation?: any;
  custom_product?: CustomProduct;
  custom_design?: CustomDesign;
  order?: Order;
  svg_data?: string;
  code?: string;
  title?: string;
  gift_voucher_product?: boolean;
}
