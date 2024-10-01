import { LineItem } from '@global/models/line-item';
import { CustomProduct } from './custom-product';
import { CustomProductSetting } from './custom-product-setting';
import { NameFinish, NameType } from './custom-setting';
import { Flag } from './flag';
import { Image } from './image';
import { Logo } from './logo';
import { Material } from './material';

export interface CustomDesignPosition {
  x: number;
  y: number;
  width: number;
  height: number;
  rotate: number;
  scale: number;
  aspect_ratio: number;
}

export interface CustomDesignPanel {
  panel: string;
  title: string;
  price: number;
  material: Material;
  product_setting: CustomProductSetting;
  _id?: string;
}

export interface CustomDesignImage {
  image: Image;
  price: number;
  size: string;
  position: CustomDesignPosition;
  size_info?: string;
  remove_background?: boolean;
  instructions?: string;
  color?: string;
  print_type?: string;
  print_type_price?: number;
  type?: string;
  _id?: string;
}

export interface CustomDesignLogo {
  image: Logo;
  price: number;
  size: string;
  position: CustomDesignPosition;
  size_info?: string;
  instructions?: string;
  type?: string;
  color?: string;
  _id?: string;
}

export interface BoxxerLogo {
  price: number;
  remove_logo: boolean;
  position: CustomDesignPosition;
}

export interface CustomDesignFlag {
  flag: Flag;
  price: number;
  size: string;
  position: CustomDesignPosition;
  size_info?: string;
  type?: string;
  _id?: string;
}

export interface CustomName {
  text: string;
  font: string;
  price: number;
  name_type: NameType;
  position: CustomDesignPosition;
  font_size: number;
  patch: Material;
  fill: Material;
  outline: Material;
  finish: NameFinish;
  crystal: Material;
  cleanBase?: boolean;
  type?: string;
  _id?: string;
}

export interface CustomSizing {
  height: string;
  weight: number;
  unit: string;
  unit_height: string;
  size: string;
  price_adjust: number;
}

export interface CustomProduction {
  type: string;
  price: number;
  production_type: any;
  instructions?: string;
}

export interface CustomMuayThai {
  fill: Material;
  outline: Material;
  price: number;
}

export interface CustomDesign {
  style: any;
  cut: any;
  names: CustomName[];
  muay_thai: CustomMuayThai;
  panels: CustomDesignPanel[];
  flags: CustomDesignFlag[];
  logos: CustomDesignLogo[];
  uploads: CustomDesignImage[];
  total: number;
  product: CustomProduct | string;
  sizing: CustomSizing;
  production: CustomProduction;
  boxxer_logo: BoxxerLogo;
  image: Image;
  svg: Image;
  urgent?: boolean;
  original_price?: number;
  sale_price?: number;
  owner?: string;
  line_item?: LineItem;
  token?: string;
  _id?: string;
}
