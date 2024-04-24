import { Seo } from './seo';
import { Image } from './image';
import { Product } from './product';
import { Term } from './term';
export interface ProductDisplay {
  _id: string;
  title: string;
  description: string;
  colours: string;
  fabrics: string;
  parent_sku: string;
  type: string;
  category: string;
  variations: Product[];
  image: Image;
  images: Image[];
  product_type: Term;
  slug: string;
  published: boolean;
  weight: number;
  seo: Seo;
  recommended_products: ProductDisplay[];
  custom: any;
  price: number;
  attributes: any[];
  createdAt: Date;
  updatedAt: Date;
  club_kit?: boolean;
}
