import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private httpClient: HttpClient) {}

  public getMovies(title: string): Observable<any> {
    const params = new URLSearchParams();
    params.append('apikey', environment.movieApiKey);
    params.append('type', 'movie');
    params.append('s', title);
    return this.httpClient.get<any[]>(`https://www.omdbapi.com/?${params}`);
  }

  public getMovieById(movieId: string): Observable<any>{
    const params = new URLSearchParams();
    params.append('apikey', environment.movieApiKey);
    params.append('type', 'movie');
    params.append('i', movieId);
    return this.httpClient.get<any[]>(`https://www.omdbapi.com/?${params}`);
  }
}
