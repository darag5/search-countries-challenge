import express from 'express';
import { getCountries } from '../controllers/CountryController.js';

const router = express.Router();

router.get('/', getCountries);

export default router;
