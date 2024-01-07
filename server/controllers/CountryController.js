import data from '../data/countries.json' assert { type: 'json' };

export const getCountries = (req, res) => {
  res.status(200).json(data.countries);
};
