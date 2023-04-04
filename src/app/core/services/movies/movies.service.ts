import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { MovieSuggestionResponse } from '../../models/movies/movie-suggestion-response.model';
import { Movie } from '../../models/movies/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private httpClient: HttpClient) {}

  public getMovies(title: string): Observable<MovieSuggestionResponse> {
    const params = new URLSearchParams();
    params.append('apikey', environment.movieApiKey);
    params.append('type', 'movie');
    params.append('s', title);
    return this.httpClient.get<MovieSuggestionResponse>(`${environment.movieApiUrl}?${params}`)
  }

  public getMovieById(movieId: string): Observable<Movie>{
    const params = new URLSearchParams();
    params.append('apikey', environment.movieApiKey);
    params.append('type', 'movie');
    params.append('i', movieId);
    return this.httpClient.get<Movie>(`${environment.movieApiUrl}?${params}`);
  }
  
}
