import { Component, inject } from '@angular/core';

// models
import { Country } from 'src/app/models/country.model';

// services
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.component.html',
  styleUrls: ['./search-country.component.css'],
})
export class SearchCountryComponent {
  countries: Country[] = [];
  filteredCountries: Country[] = [];
  showPopulationTotalPercentage = false;
  countryService = inject(CountryService);

  constructor() {
    this.getAllCountries();
  }

  getAllCountries() {
    this.countryService.getAll().subscribe({
      next: (data) => {
        this.showPopulationTotalPercentage = false;
        this.countries = data;
        this.filteredCountries = data;
      },
      error: (error) => console.log(error),
    });
  }

  filterResults(filter: string) {
    if (!filter) {
      this.filteredCountries = this.countries;
      return;
    }

    this.countryService.getFilteredCountries(filter).subscribe({
      next: (data) => {
        this.filteredCountries = data;
        this.showPopulationTotalPercentage = true;
      },
      error: (error) => console.log(error),
    });
  }
}
