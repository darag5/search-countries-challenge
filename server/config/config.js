import dotenv from 'dotenv';

dotenv.config();

export const appConfig = {
  port: process.env.PORT || 3000,
  dbUrl:
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/w3-challenge-prueba',
};
