import { Image } from '@global/models/image';
import { Term } from '@global/models/term';

export interface Size {
  _id: string;
  category: Term;
  style: string[];
  size: string;
  jean_size: string;
  child_size: string;
  image: Image;
  weight: number;
}
