import { Action } from '@ngrx/store';

export const SEARCH =           '[Movie] Search';
export const SEARCH_COMPLETE =  '[Movie] Search Complete';

export class SearchActions {
  search(query: string): Action {
    return {
      type: SEARCH,
      payload: query
    };
  }
  searchComplete(searchResult): Action {
    return {
      type: SEARCH_COMPLETE,
      payload: searchResult
    };
  }
}
