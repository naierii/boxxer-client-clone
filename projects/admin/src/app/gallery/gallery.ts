import { LineItem } from '@global/models/line-item';
import { Material } from '@global/models/material';
import { Term } from '@global/models/term';
import { CustomProduct } from '@global/models/custom-product';
import { Seo } from '@global/models/seo';
import { Image } from '@global/models/image';

export interface Gallery {
  _id: string;
  title: string;
  description: string;
  images: Image[];
  product: CustomProduct;
  category: Term;
  slug: string;
  published: boolean;
  seo: Seo;
  design: LineItem;
  materials: Material[];
}
