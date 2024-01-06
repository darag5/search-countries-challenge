import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

app.get('/', (_, res) => {
  res.send('Server running');
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
