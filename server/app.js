import express from 'express';
import cors from 'cors';
import { appConfig } from './config/config.js';
import { connectDB } from './models/mongodb/dbConnection.js';
import { countryRouter } from './routes/countryRoutes.js';

const app = express();
app.disable('x-powered-by');

const { port, dbUrl } = appConfig;

app.use(cors());
app.use('/api/countries', countryRouter);

app.use((req, res) => {
  res.status(404).send('Not found');
});

const startServer = async () => {
  try {
    await connectDB(dbUrl);
    app.listen(port, () => {
      console.log(`Server running http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
