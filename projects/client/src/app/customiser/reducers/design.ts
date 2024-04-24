import { LineItem } from '@global/models/line-item';
import {
  DesignActions,
  FETCH_DESIGN,
  UPDATE_DESIGN,
  CREATE_DESIGN,
  LOAD_DESIGN,
  UPDATE_OBJECT,
  CLEAR_DESIGN,
  RESET_DESIGN,
  DESIGN_COMPLETE
} from './../actions/design';
import { Image } from '@global/models/image';
import { CustomStyle } from '@global/models/custom-product-style';
import {
  CustomName,
  CustomDesignPanel,
  CustomDesignImage,
  CustomDesignLogo,
  CustomDesignFlag,
  CustomSizing,
  CustomProduction,
  CustomMuayThai,
  BoxxerLogo
} from '@global/models/custom-design';
import { CustomProduct } from '@global/models/custom-product';

export interface State {
  style: CustomStyle;
  cut: CustomStyle;
  names: CustomName[];
  panels: CustomDesignPanel[];
  flags: CustomDesignFlag[];
  logos: CustomDesignLogo[];
  uploads: CustomDesignImage[];
  total: number;
  sizing: CustomSizing;
  production: CustomProduction;
  product: CustomProduct | string;
  token: string;
  image: Image;
  svg: Image;
  muay_thai: CustomMuayThai;
  boxxer_logo: BoxxerLogo;
  original_price?: number;
  owner?: string;
  line_item?: LineItem;
  _id?: string;
  complete: boolean;
}

const initialState: State = {
  style: null,
  cut: null,
  names: [],
  panels: [],
  flags: [],
  logos: [],
  uploads: [],
  total: 0,
  sizing: null,
  production: null,
  product: null,
  token: null,
  image: null,
  svg: null,
  muay_thai: null,
  line_item: null,
  owner: null,
  boxxer_logo: {
    price: 0,
    remove_logo: false,
    position: null
  },
  complete: false
};

export function reducer(state = initialState, action: DesignActions): State {
  switch (action.type) {
    case FETCH_DESIGN:
      return {
        ...state
      };
    case CREATE_DESIGN:
    case UPDATE_DESIGN:
      return {
        ...state
      };
    case LOAD_DESIGN:
      return {
        ...state,
        ...action.payload
      };
    case UPDATE_OBJECT:
      return {
        ...state,
        [action.selector]: state[action.selector].map(i => {
          if (i._id === action.payload._id) {
            i = {
              ...i,
              ...action.payload
            };
          }
          return i;
        })
      };
    case DESIGN_COMPLETE:
      return {
        ...state,
        complete: action.complete
      };
    case CLEAR_DESIGN:
    case RESET_DESIGN:
      state = {
        ...initialState,
        boxxer_logo: {
          ...initialState.boxxer_logo,
          position: action.position
        }
      };
      return state;
    default: {
      return state;
    }
  }
}

export const getDesign = (state: State) => state;
export const getFlags = (state: State) => state.flags;
export const getLogos = (state: State) => state.logos;
export const getUploads = (state: State) => state.uploads;
export const getPanels = (state: State) => state.panels;
export const getNames = (state: State) => state.names;
export const getSize = (state: State) => state.sizing;
export const getMuayThai = (state: State) => state.muay_thai;
export const isComplete = (state: State) => state.complete;
