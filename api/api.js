import express from 'express';
import { bookRoutes, authorRoutes } from './routes/index.js';

const api = express();

//TODO: condigurar express para que acepte json
api.use(express.json());

api.get('/status', (_, res) => {
  res.json({
    msg: 'API en linea y funcionando',
  });
});

//TODO: Registrar todas las rutas acá
api.use(bookRoutes);
api.use(authorRoutes);

export default api;
