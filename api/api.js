import express from 'express';

const api = express();

api.get('/status', (_, res) => {
  res.json({
    msg: 'API en linea y funcionando',
  });
});

export default api;
