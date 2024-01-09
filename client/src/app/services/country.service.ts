import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private url = 'http://localhost:3000/api/countries';
  http = inject(HttpClient);

  getAll(): Observable<Country[]> {
    return this.http.get<Country[]>(this.url);
  }

  getFilteredCountries(filter: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.url}/search?filter=${filter}`);
  }
}
