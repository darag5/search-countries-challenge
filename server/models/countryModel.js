import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const countries = require('../data/countries.json');

export class CountryModel {
  static async getAll() {
    return countries;
  }

  static async getFiltered(filter) {
    let filteredCountries = [];

    if (filter && filter.length > 2) {
      filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(filter.toLowerCase())
      );
    }

    return filteredCountries;
  }
}
