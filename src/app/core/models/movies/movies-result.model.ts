import { MovieSuggestion } from "./movie-suggestion.model";

export class MoviesResult {
  Response: string;
  Search: MovieSuggestion[];
  totalResults: number;
}
