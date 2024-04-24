import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromState from './../core/reducers/state';
import * as fromProfiles from './../core/reducers/profile';
import * as fromLoading from './../core/reducers/loading';

export interface State {
  state: fromState.State;
  profiles: fromProfiles.State;
  loading: fromLoading.State;
}

export const reducers: ActionReducerMap<State> = {
  state: fromState.reducer,
  profiles: fromProfiles.reducer,
  loading: fromLoading.reducer
};

// App State
export const getStateState = createFeatureSelector<fromState.State>('state');
export const getCartOpen = createSelector(
  getStateState,
  fromState.getCartOpen
);
export const getMenuOpen = createSelector(
  getStateState,
  fromState.getMenuOpen
);
export const getCurrency = createSelector(
  getStateState,
  fromState.getCurrency
);
export const getRates = createSelector(
  getStateState,
  fromState.getRates
);
export const getShipping = createSelector(
  getStateState,
  fromState.getShipping
);
export const getMessages = createSelector(
  getStateState,
  fromState.getMessages
);

// Boxxer Profiles
export const getProfilesState = createFeatureSelector<fromProfiles.State>(
  'profiles'
);
export const getProfiles = createSelector(
  getProfilesState,
  fromProfiles.getProfiles
);

export const getProfileById = id =>
  createSelector(
    getProfiles,
    allItems => {
      if (allItems) {
        return allItems.find(item => {
          return item._id === id;
        });
      } else {
        return {};
      }
    }
  );

export const getSelected = createSelector(
  getProfilesState,
  fromProfiles.getSelected
);

export const profileLoaded = createSelector(
  getProfilesState,
  fromProfiles.loaded
);

export const profileLoading = createSelector(
  getProfilesState,
  fromProfiles.loading
);

// Loading

export const getLoadingState = createFeatureSelector<fromLoading.State>(
  'loading'
);

export const isLoading = createSelector(
  getLoadingState,
  fromLoading.isLoading
);
export const loadingMessage = createSelector(
  getLoadingState,
  fromLoading.loadingMessage
);
export const loadingSubMessage = createSelector(
  getLoadingState,
  fromLoading.loadingSubMessage
);
export const loadingOffset = createSelector(
  getLoadingState,
  fromLoading.loadingOffset
);
