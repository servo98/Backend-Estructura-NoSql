import express from 'express';
import { bookRoutes } from './routes/index.js';

const api = express();

api.get('/status', (_, res) => {
  res.json({
    msg: 'API en linea y funcionando',
  });
});

//TODO: Registrar todas las rutas acá
api.use(bookRoutes);

export default api;
