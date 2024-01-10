import express from 'express';
import cors from 'cors';
import { connectDB } from './models/mongodb/dbConnection.js';
import { countryRouter } from './routes/countryRoutes.js';

const app = express();
app.disable('x-powered-by');

const { PORT = 3000, MONGODB_URI = 'mongodb://localhost:27017/w3-challenge' } =
  process.env;

app.use(cors());
app.use('/api/countries', countryRouter);

app.use((req, res) => {
  res.status(404).send('Not found');
});

const startServer = async () => {
  try {
    await connectDB(MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`Server running http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
