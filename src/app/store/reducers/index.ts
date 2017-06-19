import * as fromSearch from './search';
import * as fromMovie from './movie';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { createSelector } from 'reselect';

export interface MovieSearchState {
  search: fromSearch.State;
  collection: fromMovie.State;
}

const reducers = {
  search: fromSearch.reducer,
  collection: fromMovie.reducer
};

export const getAppReducers: ActionReducer<MovieSearchState> = combineReducers(reducers);

export const getSearchState = (state: MovieSearchState) => state.search;
export const getCollectionState = (state: MovieSearchState) => state.collection;

export const getSearchQuery = createSelector(getSearchState, fromSearch.getQuery);
export const getSearchLoading = createSelector(getSearchState, fromSearch.getLoading);
