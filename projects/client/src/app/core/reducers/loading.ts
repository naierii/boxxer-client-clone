import { LoadingActions, LoadingActionTypes } from './../actions/loading';
export interface State {
  loading: boolean;
  message: string;
  subMessage: string;
  offset: string;
}

const initialState: State = {
  loading: false,
  message: null,
  subMessage: null,
  offset: null
};

export function reducer(state = initialState, action: LoadingActions): State {
  switch (action.type) {
    case LoadingActionTypes.Show: {
      return {
        ...state,
        loading: true,
        message: action.message ? action.message : 'Loading...',
        subMessage: action.subMessage,
        offset: action.offset ? action.offset : '85px'
      };
    }
    case LoadingActionTypes.Hide: {
      return {
        ...state,
        loading: false,
        message: null,
        subMessage: null,
        offset: null
      };
    }
    default: {
      return state;
    }
  }
}

export const isLoading = (state: State) => state.loading;
export const loadingMessage = (state: State) => state.message;
export const loadingSubMessage = (state: State) => state.subMessage;
export const loadingOffset = (state: State) => state.offset;
