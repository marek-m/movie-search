import * as actions from '../actions/search-actions';
import { Action } from '@ngrx/store';

export interface State {
  loading: boolean;
  query: string;
}

const initialState: State = {
  loading: false,
  query: ''
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case actions.SEARCH: {
      return Object.assign({}, state, {
        loading: true,
        query: action.payload
      });
    }
    case actions.SEARCH_COMPLETE: {
      return Object.assign({}, state, {
        loading: false,
        query: state.query
      });
    }
    default: {
      return state;
    }
  }
}

export const getLoading = (state: State) => state.loading;
export const getQuery = (state: State) => state.query;
