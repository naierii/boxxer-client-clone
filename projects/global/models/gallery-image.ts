import { Image } from '@global/models/image';
import { CustomProduct } from './custom-product';
export interface GalleryImage {
  _id: string;
  title: string;
  alt_text: string;
  gallery: string;
  image: Image;
  weight: number;
  product: CustomProduct;
}
