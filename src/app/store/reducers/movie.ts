import { Movie } from '../../model/movie.model';
import { Action } from '@ngrx/store';
import * as actions from '../actions/search-actions';

export interface State {
  entities: Movie[];
};

const initialState: State = {
  entities: []
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case actions.SEARCH_COMPLETE: {
      return Object.assign({}, state, {
        entities: action.payload
      });
    }
    default: {
      return state;
    }
  }
}

export const getEntities = (state: State) => state.entities;
