import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../model/movie.model';

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input() public movies: Movie[];
  @Input() public searchQuery: string;
  @Input() public loading: boolean;

  constructor() {
    // Do stuff
  }

  ngOnInit() {
  }

}
