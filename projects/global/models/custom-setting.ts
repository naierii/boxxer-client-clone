import { Term } from './term';
import { Material } from './material';

export interface DesignArea {
  _id: string;
  title: string;
  price: number;
  price_adjust: number;
  optional: boolean;
}

export interface TermMaterial {
  _id: string;
  title: string;
  materials: Material[];
}

export interface NameType {
  _id: string;
  title: string;
  internal_description: string;
  description: string;
  base_price: number;
  price: number;
  outline_price: number;
  limit: number;
  outline: boolean;
  patch: boolean;
  patch_material: TermMaterial;
  patch_price: number;
  crystals: boolean;
  crystal_material: TermMaterial;
  crystal_price: number;
  restrict: boolean;
  fixed: boolean;
  special_finishes: boolean;
  name_fill_materials: TermMaterial[];
  name_outline_material: TermMaterial;
  product_types: Term[];
}

export interface NameFinish {
  _id: string;
  title: string;
  price: number;
  material_type: TermMaterial;
  text3d: boolean;
  crystal: boolean;
}

export interface NameCrystals {
  _id: string;
  description: string;
  price: number;
  material_type: TermMaterial;
}

export class MaterialGroup {
  constructor(
    public _id: string,
    public title: string,
    public material_types: Term[],
    public materials: Material[]
  ) {}
}

export class NameOptions {
  constructor(
    public _id: string,
    public name_fill_materials: TermMaterial[],
    public name_outline_material: TermMaterial,
    public name_finishes: NameFinish[],
    public name_types: NameType[]
  ) {}
}

export interface ProductionType {
  _id: string;
  title: string;
  description: string;
  price: string;
  days: number;
  email_title: string;
  admin_title: string;
  express_shipping: boolean;
}

export interface CustomSetting {
  _id: string;
  flag_price: number;
  logo_price: number;
  upload_price: number;
  remove_logo_price: number;
  muay_thai_price: number;
  design_areas: DesignArea[];
  material_groups: MaterialGroup[];
  name_fill_materials: TermMaterial[];
  name_outline_material: TermMaterial;
  name_finishes: NameFinish[];
  name_crystals: NameCrystals;
  name_types: NameType[];
  production_types: ProductionType[];
  production_info: string;
  goods_percentage: number;
}
