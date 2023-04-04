import { Movie } from '../movies/movie.model';
import { User } from './user.model';

export class UserDisplay extends User {
  constructor(user: User, movie: Movie) {
    super(user);
    this.movie = movie;
  }
  movie: Movie;
}
