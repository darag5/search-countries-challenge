import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const countries = require('../data/countries.json');

export const up = async (db, client) => {
  await db.collection('countries').insertMany(countries);
};

export const down = async (db, client) => {
  await db.collection('countries').drop();
};
