import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  searchForm!: FormGroup;
  submitted = false;
  countries: Country[] = [];
  filteredCountries: Country[] = [];
  showPopulationTotalPercentage = false;
  countryService = inject(CountryService);

  constructor() {
    this.searchForm = new FormGroup({
      filterText: new FormControl('', Validators.minLength(3)),
    });
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

  get f() {
    return this.searchForm.controls;
  }

  filterResults() {
    this.submitted = true;
    if (
      this.searchForm.invalid ||
      !this.f['filterText'].value ||
      this.f['filterText'].value.length < 3
    ) {
      this.filteredCountries = this.countries;
      this.showPopulationTotalPercentage = false;
      return;
    }

    this.countryService
      .getFilteredCountries(this.f['filterText'].value)
      .subscribe({
        next: (data) => {
          this.filteredCountries = data;
          this.showPopulationTotalPercentage = true;
        },
        error: (error) => console.log(error),
      });
  }
}
