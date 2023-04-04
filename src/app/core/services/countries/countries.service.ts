import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../../models/countries/country.model';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  getCountries() {
    return of([{ name: 'Ireland' }, { name: 'United Kingdom' }]);
  }
}
