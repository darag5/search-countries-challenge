import { Country } from './schemas/Country.js';

export class CountryModel {
  static async getAll() {
    const countries = await Country.find({});
    return countries;
  }

  static async getPopulationTotal() {
    let populationTotal = 0;
    const countries = await this.getAll();

    if (countries.length) {
      populationTotal = countries.reduce(
        (accumulator, currentValue) => accumulator + currentValue.population,
        0
      );
    }

    return populationTotal;
  }

  static async getFiltered(filter) {
    let filteredCountries = [];

    if (filter && filter.length > 2) {
      filteredCountries = await Country.find(
        { name: { $regex: filter, $options: 'i' } },
        null,
        { limit: 5 }
      );

      if (filteredCountries.length) {
        filteredCountries = await this.calculatePopulationPercentage(
          filteredCountries
        );
      }
    }

    return filteredCountries;
  }

  static async calculatePopulationPercentage(countries) {
    const populationTotal = await this.getPopulationTotal();

    if (populationTotal) {
      return countries.map(({ name, population }) => ({
        name,
        population,
        populationTotalPercentage: (population * 100) / populationTotal,
      }));
    }

    return countries;
  }
}
