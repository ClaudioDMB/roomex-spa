import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/core/models/movies/movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent {
  @Input() movie: Movie;
  collapseExpanded: string = '';




  onClickCollapse(collapseButtonName: string){
    this.collapseExpanded = collapseButtonName != this.collapseExpanded ? collapseButtonName : '';
  }
}
