import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Country } from "../../models/countries/country.model";

@Injectable({
  providedIn: "root",
})
export class CountriesService {
  getCountries(): Observable<Country[]> {
    return of([{ name: "Ireland" }, { name: "United Kingdom" }]);
  }
}
