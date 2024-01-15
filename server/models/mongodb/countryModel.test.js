import { expect, jest, beforeEach } from '@jest/globals';
import { CountryModel } from './countryModel';
import { Country } from './schemas/Country';

describe('Country Model', () => {
  beforeEach(() => jest.restoreAllMocks());

  it('getAll', async () => {
    jest.spyOn(Country, Country.find.name).mockResolvedValue([
      {
        _id: '65a0ab9655926def19649a2c',
        keyName: 'IND',
        name: 'India',
        population: 1409902000,
      },
    ]);

    const expected = [
      {
        _id: '65a0ab9655926def19649a2c',
        keyName: 'IND',
        name: 'India',
        population: 1409902000,
      },
    ];

    const result = await Country.find();

    expect(Country.find).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected);
  });

  it('getPopulationTotal', () => {
    const populationReducer = (testArray) => {
      return testArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue.population,
        0
      );
    };

    const emptyCountries = populationReducer([]);
    const countriesWithPopulation = populationReducer([{ population: 10 }]);

    expect(emptyCountries).toEqual(0);
    expect(countriesWithPopulation).toEqual(10);
  });

  it('add population percentage to each countries', () => {
    const populationTotal = 1000;

    const calculatePopulationPercentage = (countryPopulation) =>
      (countryPopulation * 100) / populationTotal;

    const transform = (testArray) => {
      return testArray.map(({ name, population }) => ({
        name,
        population,
        populationTotalPercentage: calculatePopulationPercentage(population),
      }));
    };

    const transformed = transform([{ name: 'Argentina', population: 1000 }]);
    const percentageCalculated = calculatePopulationPercentage(1000);

    expect(transformed[0]).toHaveProperty('name');
    expect(transformed[0]).toHaveProperty('population');
    expect(transformed[0]).toHaveProperty('populationTotalPercentage');
    expect(percentageCalculated).toEqual(100);
  });
});
