import dotenv from 'dotenv';

dotenv.config();

const config = {
  server: {
    port: 3000,
  },
  database: {
    uri: process.env.DB_URI,
  },
  security: {
    attempts: 5,
  },
};

export default config;
