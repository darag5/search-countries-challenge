import express from 'express';
import dotenv from 'dotenv';
// import { connectDB } from './config/db.js';
import router from './routes/routes.js';

const app = express();
app.disable('x-powered-by');

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use('/countries', router);

app.use((req, res) => {
  res.status(404).send('<h1>Not found</h1>');
});

const startServer = async () => {
  try {
    // await connectDB(MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`Server running http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
