import { Term } from './term';
import { DesignArea, MaterialGroup } from '@global/models/custom-setting';
import { Material } from './material';
export interface CustomProductSetting {
  _id?: string;
  panel: string;
  name?: string;
  thai_name?: string;
  product?: string;
  price?: number;
  muay_thai?: boolean;
  expensive?: boolean;
  weight?: number;
  material_types?: Term[];
  material_group?: MaterialGroup;
  material_groups?: MaterialGroup[];
  area_size?: DesignArea;
  default_material?: Material;
}
