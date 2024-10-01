import {
  OptionsActions,
  OptionsActionTypes,
  LoadOptions
} from './../actions/options';
import { CustomProduct } from '@global/models/custom-product';
import { CustomProductStyle } from '@global/models/custom-product-style';
import { CustomProductSetting } from '@global/models/custom-product-setting';
import { CustomSetting } from '@global/models/custom-setting';
import { GraphicPriceSize } from '@global/models/graphic-price';

export interface State {
  product: CustomProduct;
  styles: CustomProductStyle[];
  settings: CustomProductSetting[];
  muay_thai: CustomProductSetting[];
  custom_settings: CustomSetting;
  flag_sizes: GraphicPriceSize[];
  logo_sizes: GraphicPriceSize[];
  upload_sizes: GraphicPriceSize[];
  upload_embroidery_sizes: GraphicPriceSize[];
  sizes: any[];
}

const initialState: State = {
  product: null,
  styles: [],
  settings: [],
  muay_thai: [],
  custom_settings: null,
  flag_sizes: [],
  logo_sizes: [],
  upload_sizes: [],
  upload_embroidery_sizes: [],
  sizes: []
};

export function reducer(state = initialState, action: OptionsActions): State {
  switch (action.type) {
    case OptionsActionTypes.Load:
      return {
        ...state
      };
    case OptionsActionTypes.LoadOptions:
      return {
        ...state,
        product: action.payload,
        styles: action.payload.styles,
        settings: action.payload.settings.filter(s => !s.muay_thai),
        muay_thai: action.payload.settings.filter(s => s.muay_thai),
        custom_settings: action.payload.custom_settings,
        flag_sizes: action.payload.flag_sizes,
        logo_sizes: action.payload.logo_sizes,
        upload_sizes: action.payload.upload_sizes,
        upload_embroidery_sizes: action.payload.upload_embroidery_sizes,
        sizes: action.payload.sizes ? action.payload.sizes : []
      };
    default: {
      return state;
    }
  }
}
export const getSettings = (state: State) => state.settings;
export const getMuayThai = (state: State) => state.muay_thai;
export const getCustomSettings = (state: State) => state.custom_settings;
export const getProduct = (state: State) => state.product;
export const getStyles = (state: State) => state.styles;
export const getPanels = (state: State) => state.settings;
export const getFlagSizes = (state: State) => state.flag_sizes;
export const getLogoSizes = (state: State) => state.logo_sizes;
export const getUploadSizes = (state: State) => state.upload_sizes;
export const getUploadEmbroiderySizes = (state: State) => state.upload_embroidery_sizes;
export const getSizes = (state: State) => state.sizes;
