import { Seo } from './seo';
import { Image } from './image';
import { Term } from './term';
import { CustomProductSetting } from '@global/models/custom-product-setting';
import { CustomProductStyle } from '@global/models/custom-product-style';
import { CustomSetting } from '@global/models/custom-setting';
import { GraphicPriceSize } from '@global/models/graphic-price';

export interface CustomProduct {
  _id: string;
  title: string;
  description: string;
  code: string;
  category: Term;
  image: Image;
  template: Image;
  slug: string;
  price: number;
  sale_price: number;
  sale_amount: number;
  sale_percent: number;
  sale_start_date: Date;
  sale_end_date: Date;
  on_sale: boolean;
  published: boolean;
  weight: number;
  seo: Seo;
  styles: CustomProductStyle[];
  settings: CustomProductSetting[];
  muay_thai: CustomProductSetting[];
  custom_settings: CustomSetting;
  sizes: any[];
  flag_sizes: GraphicPriceSize[];
  logo_sizes: GraphicPriceSize[];
  upload_sizes: GraphicPriceSize[];
  upload_embroidery_sizes: GraphicPriceSize[];
  createdAt: Date;
  updatedAt: Date;
}
