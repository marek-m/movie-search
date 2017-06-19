import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { getSearchLoading, getSearchQuery, MovieSearchState } from '../store/reducers';
import { Movie } from '../model/movie.model';
@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() public search: EventEmitter<string> = new EventEmitter();
  public value: string;
  public result$: Observable<Movie[]>;
  public searchQuery$: Observable<string>;
  public loading$: Observable<boolean>;
  constructor(private store: Store<MovieSearchState>) {
    // Do stuff
  }

  ngOnInit() {
    this.value = '';
    this.result$ = this.store.select(state => state.collection.entities);
    this.searchQuery$ = this.store.select(getSearchQuery);
    this.loading$ = this.store.select(getSearchLoading);
  }
}
