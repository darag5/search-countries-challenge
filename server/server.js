import express from 'express';

const app = express();

app.get('/', (_, res) => {
  res.send('Server running');
});

app.listen(8000, () => {
  console.log('Server running');
});
