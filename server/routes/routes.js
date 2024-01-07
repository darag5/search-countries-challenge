import express from 'express';
import {
  getAllCountries,
  getFilteredCountries,
} from '../controllers/country.js';

const router = express.Router();

router.get('/', getAllCountries);
router.get('/search', getFilteredCountries);

export default router;
