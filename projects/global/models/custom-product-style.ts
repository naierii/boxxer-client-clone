import { Image } from './image';
import { Term } from './term';

export interface CustomStyle {
  _id: string;
  title: string;
  subtitle: string;
  price: number;
  image: Image;
  weight: number;
}

export class CustomProductStyle {
  constructor(
    public _id: string,
    public title: string,
    public description: string,
    public type: string,
    public category: Term,
    public options: CustomStyle[]
  ) {}
}
