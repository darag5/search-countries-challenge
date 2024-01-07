import countries from '../data/countries.json' assert { type: 'json' };

export const getAllCountries = (req, res) => {
  return res.json({ countries });
};

export const getFilteredCountries = (req, res) => {
  const { filter } = req.query;

  if (filter && filter.length > 2) {
    const filteredCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(filter.toLowerCase())
    );
    return res.json(filteredCountries);
  }

  res.status(204).end();
};
