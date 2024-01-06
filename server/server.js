import express from 'express';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

app.get('/', (_, res) => {
  res.send('Server running');
});

const PORT = process.env.PORT;
app.listen(() => {
  console.log(`Server running http://localhost:${PORT}`);
});
