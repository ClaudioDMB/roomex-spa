import { Component } from '@angular/core';
import { filter, forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { Movie } from 'src/app/core/models/movies/movie.model';
import { UserDisplay } from 'src/app/core/models/users/user-display.model';
import { MoviesService } from 'src/app/core/services/movies/movies.service';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent {
  userData$: Observable<UserDisplay>;
  movie$: Observable<Movie>;
  constructor(
    private userService: UsersService,
    private moviesService: MoviesService
  ) {
    this.userData$ = this.userService.getSavedUser().pipe(
      filter(res=> res != null),
      switchMap((res) =>
        forkJoin({
          user: of(res),
          movie: this.moviesService.getMovieById(res.movieId),
        })
      ),
      map((results) => {
        return new UserDisplay(results.user, results.movie);
      })
    );
  }


}
