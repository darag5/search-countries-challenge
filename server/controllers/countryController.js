import { CountryModel } from '../models/local-file/countryModel.js';

export const getAll = async (req, res) => {
  const result = await CountryModel.getAll();
  return res.json(result);
};

export const getFiltered = async (req, res) => {
  const { filter } = req.query;

  if (filter && filter.length > 2) {
    const filteredCountries = await CountryModel.getFiltered(filter);
    return res.json(filteredCountries);
  }

  res.status(204).end();
};
