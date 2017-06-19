import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Movie } from './model/movie.model';

@Injectable()
export class MovieService {
  private mock: Movie[] = [
    {id: '1', title: 'Lost in space'},
    {id: '2', title: 'Lost in translation'},
    {id: '3', title: 'Matrix'},
    {id: '4', title: 'Fast and Furious'},
    {id: '5', title: 'Guardians of the galaxy'}
  ];

  constructor() {}

  getMovies(query: string): Observable<Movie[]> {
    return Observable.of(this.mock.filter((item) => item.title.includes(query)));
  }

}
