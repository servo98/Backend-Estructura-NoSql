import mongoose from 'mongoose';
import config from './index.js';

const db = mongoose.connection;

db.on('connecting', () => {
  console.info('Intentando conectar a la base de datos 🟨');
});

db.on('connected', () => {
  console.log('Se ha conectado a la base de datos 🟩');
});

db.on('disconnected', () => {
  console.error('Se ha desconectado de la base de datos 🟥');
});

const init = () => {
  mongoose.connect(config.database.uri);
};

export default init;

/**
 * Eventos:
 * Si se conectó
 * Si se desconectó
 * Si hay error
 * Si se reiniciioó
 */
