import { Component } from '@angular/core';

import { ApiService } from './shared';

import '../style/app.scss';
import { Store } from '@ngrx/store';
import { SearchActions } from './store/actions/search-actions';
import { MovieSearchState } from './store/reducers';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string;

  constructor(private api: ApiService, private store: Store<MovieSearchState>,
              private actions: SearchActions) {
    this.title = this.api.title;
  }

  public handleSearch(query) {
    this.store.dispatch( this.actions.search(query));
  }
}
