import { Image } from './image';
import { Term } from './term';
import { MaterialGroup } from './material-group';
export interface Material {
  _id?: string;
  title?: string;
  thai_name?: string;
  hex?: string;
  data_uri?: string;
  weight?: number;
  image?: Image;
  materialType?: Term;
  groups?: MaterialGroup[];
  published?: boolean;
  price?: number;
}
