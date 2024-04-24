import { ProfileActions, ProfileActionTypes } from './../actions/profile';
import { Profile } from '@global/models/profile';

export interface State {
  loaded: boolean;
  loading: boolean;
  selectedProfile: Profile;
  profiles: Profile[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  selectedProfile: null,
  profiles: []
};

export function reducer(state = initialState, action: ProfileActions): State {
  switch (action.type) {
    case ProfileActionTypes.AddProfile:
    case ProfileActionTypes.UpdateProfile:
    case ProfileActionTypes.RemoveProfile:
    case ProfileActionTypes.Load: {
      return {
        ...state,
        loading: true
      };
    }
    case ProfileActionTypes.LoadSuccess: {
      return {
        ...state,
        loaded: true,
        loading: false,
        profiles: action.payload
      };
    }
    case ProfileActionTypes.AddProfileSuccess: {
      return {
        ...state,
        loading: false,
        profiles: [...state.profiles, action.payload]
      };
    }
    case ProfileActionTypes.UpdateProfileSuccess: {
      return {
        ...state,
        loading: false,
        profiles: state.profiles.map(p => {
          if (p._id === action.payload._id) {
            p = action.payload;
          }
          return p;
        })
      };
    }
    case ProfileActionTypes.RemoveProfileSuccess: {
      return {
        ...state,
        loading: false,
        profiles: state.profiles.filter(p => p._id !== action.payload._id)
      };
    }
    case ProfileActionTypes.Selected: {
      return {
        ...state,
        selectedProfile: state.profiles.find(p => p._id === action.payload)
      };
    }
    default: {
      return state;
    }
  }
}

export const getProfiles = (state: State) => state.profiles;
export const getSelected = (state: State) => state.selectedProfile;
export const loaded = (state: State) => state.loaded;
export const loading = (state: State) => state.loading;
