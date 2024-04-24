import { Image } from './image';
import { ProductColour } from './product-colour';
import { ProductDisplay } from './product-display';
import { Product } from './product';
export class CustomVariation {
  constructor(
    public _id: string,
    public title: string,
    public part: string,
    public custom_id: string,
    public product_display: ProductDisplay,
    public products: Product[],
    public colours: ProductColour[],
    public image: Image,
    public has_size: boolean
  ) {}
}
