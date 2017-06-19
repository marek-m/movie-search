import { Actions, Effect, toPayload } from '@ngrx/effects';
import * as actions from '../actions/search-actions';
import { Injectable } from '@angular/core';
import { SearchActions } from '../actions/search-actions';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { empty } from 'rxjs/observable/empty';
import { MovieService } from '../../movie.service';

@Injectable()
export class SearchEffects {

  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType(actions.SEARCH)
    .debounceTime(400)
    .map(toPayload)
    .switchMap((query) => {
      if (query === '') {
        return empty();
      }
      // const nextSearch$ = this.actions$.ofType(actions.SEARCH).skip(1);
      return this.service.getMovies(query)
        // .takeUntil(nextSearch$)
        .map(items => this.searchActions.searchComplete(items))
        .catch((error) => Observable.of(error));
    });
  constructor(private actions$: Actions,
              private searchActions: SearchActions,
              private service: MovieService) {}
}
