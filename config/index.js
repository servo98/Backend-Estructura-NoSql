import dotenv from 'dotenv';

dotenv.config();

const config = {
  server: {
    port: 3000,
  },
  database: {
    uri: process.env.DB_URI,
  },
  token: {
    secret: process.env.TOKEN_SECRET,
  },
};

export default config;
