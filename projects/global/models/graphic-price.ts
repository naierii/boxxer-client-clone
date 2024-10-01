import { Term } from './term';

export interface GraphicPriceSize {
  title: string;
  description: string;
  price: number;
}

export interface GraphicPrice {
  _id: string;
  title: string;
  description: string;
  type: string;
  categories: Term[];
  sizes: GraphicPriceSize[];
  weight: number
}
