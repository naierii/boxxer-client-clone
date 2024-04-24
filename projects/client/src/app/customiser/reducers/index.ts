import * as fromOptions from './options';
import * as fromDesign from './design';
import * as fromRoot from '@app/reducers';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

export interface CustomiserState {
  options: fromOptions.State;
  design: fromDesign.State;
}

export interface State extends fromRoot.State {
  customiser: CustomiserState;
}

export const reducers: ActionReducerMap<CustomiserState> = {
  options: fromOptions.reducer,
  design: fromDesign.reducer
};

export const getCustomiserState = createFeatureSelector<CustomiserState>(
  'customiser'
);
export const getOptionsEntitiesState = createSelector(
  getCustomiserState,
  state => state.options
);

export const getDesignEntitiesState = createSelector(
  getCustomiserState,
  state => state.design
);

export const getProduct = createSelector(
  getOptionsEntitiesState,
  fromOptions.getProduct
);

export const getCustomSettings = createSelector(
  getOptionsEntitiesState,
  fromOptions.getCustomSettings
);

export const getSettings = createSelector(
  getOptionsEntitiesState,
  fromOptions.getSettings
);

export const getMuayThai = createSelector(
  getOptionsEntitiesState,
  fromOptions.getMuayThai
);

export const getStyles = createSelector(
  getOptionsEntitiesState,
  fromOptions.getStyles
);

export const getPanels = createSelector(
  getOptionsEntitiesState,
  fromOptions.getPanels
);

export const getFlagSizes = createSelector(
  getOptionsEntitiesState,
  fromOptions.getFlagSizes
);

export const getLogoSizes = createSelector(
  getOptionsEntitiesState,
  fromOptions.getLogoSizes
);

export const getUploadSizes = createSelector(
  getOptionsEntitiesState,
  fromOptions.getUploadSizes
);

export const getSizes = createSelector(
  getOptionsEntitiesState,
  fromOptions.getSizes
);

export const isComplete = createSelector(
  getDesignEntitiesState,
  fromDesign.isComplete
);

export const getDesign = createSelector(
  getDesignEntitiesState,
  fromDesign.getDesign
);

export const getDragObject = (type: string, id: string) =>
  createSelector(
    getDesign,
    design => design[type].find(f => f._id === id)
  );

export const getDesignFlags = createSelector(
  getDesignEntitiesState,
  fromDesign.getFlags
);

export const getDesignFlagById = (id: string) =>
  createSelector(
    getDesignFlags,
    flags => flags.find(f => f._id === id)
  );

export const getDesignLogos = createSelector(
  getDesignEntitiesState,
  fromDesign.getLogos
);

export const getDesignLogoById = (id: string) =>
  createSelector(
    getDesignLogos,
    logos => logos.find(l => l._id === id)
  );

export const getDesignUploads = createSelector(
  getDesignEntitiesState,
  fromDesign.getUploads
);

export const getDesignUploadById = (id: string) =>
  createSelector(
    getDesignUploads,
    uploads => uploads.find(u => u._id === id)
  );

export const getDesignNames = createSelector(
  getDesignEntitiesState,
  fromDesign.getNames
);

export const getDesignNameById = (id: string) =>
  createSelector(
    getDesignNames,
    names => names.find(n => n._id === id)
  );

export const getDesignPanels = createSelector(
  getDesignEntitiesState,
  fromDesign.getPanels
);

export const getDesignPanelByPanel = (panel: string) =>
  createSelector(
    getDesignPanels,
    panels => panels.find(p => p.panel === panel)
  );

export const getDesignSize = createSelector(
  getDesignEntitiesState,
  fromDesign.getSize
);
export const getDesignMuayThai = createSelector(
  getDesignEntitiesState,
  fromDesign.getMuayThai
);
