import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { TypeaheadMatch } from "ngx-bootstrap/typeahead";
import { map, mergeMap, Observable, of, Subscriber, tap } from "rxjs";
import { Country } from "src/app/core/models/countries/country.model";
import { MovieSuggestion } from "src/app/core/models/movies/movie-suggestion.model";
import { CountriesService } from "src/app/core/services/countries/countries.service";
import { MoviesService } from "src/app/core/services/movies/movies.service";
import { UsersService } from "src/app/core/services/users/users.service";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"],
})
export class UserFormComponent implements OnInit {
  form: FormGroup;
  formSubmitted: boolean = false;
  dataSource$: Observable<MovieSuggestion[]> = of([]);
  countries$: Observable<Country[]>;
  isTypeaheadSelected = false;
  selectedMovieTitle: string = "";
  typeaheadErrorMessage: string = "";

  get name() {
    return this.form.get("name");
  }

  get username() {
    return this.form.get("username");
  }

  get country() {
    return this.form.get("country");
  }

  get postalCode() {
    return this.form.get("postalCode");
  }

  get movieId() {
    return this.form.get("movieId");
  }

  constructor(
    private moviesService: MoviesService,
    private countriesService: CountriesService,
    private userService: UsersService,
    private router: Router
  ) {
    this.form = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.pattern("[ a-zA-Z]*"),
      ]),
      username: new FormControl("", Validators.email),
      country: new FormControl("", Validators.required),
      postalCode: new FormControl(""),
      movieId: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.dataSource$ = new Observable((observer: Subscriber<string>) => {
      this.isTypeaheadSelected = false;
      this.movieId.patchValue(null);
      observer.next(this.selectedMovieTitle);
    }).pipe(
      mergeMap((text: string) => {
        return this.moviesService.getMovies(text).pipe(
          tap((res) => {
            this.typeaheadErrorMessage = res.Error;
          }),
          map((res) => res.Search)
        );
      })
    );
    this.countries$ = this.countriesService.getCountries();
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.form.valid) {
      this.userService.createUser(this.form.value);
      this.router.navigate(["user", "thankyou"]);
    }
  }

  getValidationClass(formControl: AbstractControl) {
    if (this.formSubmitted && formControl.invalid) return "is-invalid";
    if (this.formSubmitted && formControl.valid) return "is-valid";
    return "";
  }

  /**
   * Triggered when the country select change
   * Check the value and change the postal code validator
   * @param event
   */
  onChangeCountry(event) {
    this.isTypeaheadSelected = true;
    if (event.target.value === "Ireland") {
      this.postalCode.clearValidators();
      this.postalCode.setValidators(Validators.pattern("[0-9]{6,10}"));
    } else {
      this.postalCode.clearValidators();
      this.postalCode.setValidators([
        Validators.required,
        Validators.pattern(
          "([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) [0-9][A-Za-z]{2})"
        ),
      ]);
    }
    this.postalCode.updateValueAndValidity();
  }

  onBlurMovieTypeahead() {
    if (this.movieId.value != "" && !this.isTypeaheadSelected)
      this.movieId.setValue(null);
    this.selectedMovieTitle = "";
    this.typeaheadErrorMessage = "";
  }

  onSelectMovie(event: TypeaheadMatch) {
    this.movieId.patchValue(event.item.imdbID);
    this.typeaheadErrorMessage = "";
  }
}
