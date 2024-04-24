import { ProductDisplay } from './product-display';
import { Image } from './image';
import { Term } from '@global/models/term';

export interface AtributeTerm {
  term: Term;
}

export interface Product {
  _id: string;
  sku: string;
  title: string;
  price: number;
  sale_price: number;
  option_name: string;
  weight: number;
  published: boolean;
  product_display: ProductDisplay;
  image: Image;
  attribute_terms: AtributeTerm[];
}
