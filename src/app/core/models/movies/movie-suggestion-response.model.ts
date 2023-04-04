import { MovieSuggestion } from "./movie-suggestion.model";

export class MovieSuggestionResponse {
  Response?: string;
  Search?: MovieSuggestion[];
  totalResults?: string;
  Error?: string;
}
