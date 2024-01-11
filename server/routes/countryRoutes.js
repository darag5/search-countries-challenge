import { Router } from 'express';
import * as CountryController from '../controllers/countryController.js';

export const countryRouter = Router();

countryRouter.get('/', CountryController.getAll);
countryRouter.get('/search', CountryController.getFiltered);
