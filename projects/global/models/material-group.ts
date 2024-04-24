import { Image } from './image';
export interface MaterialGroup {
  _id?: string;
  title?: string;
  hex?: string;
  weight?: number;
  image?: Image;
  published?: boolean;
}
