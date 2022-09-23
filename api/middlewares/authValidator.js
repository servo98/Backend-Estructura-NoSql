import jwt from 'jwt-simple';
import config from '../../config/index.js';

const authValidator = (req, res, next) => {
  /**
   * 1.- Validar si nos manda token  🟢
   *  si no, responder que hace falta token 🟢
   *  si si hay que ver que sea un token válido 🟢
   * si sí es válido, next()
   * si no es válido responder que el token no es válido
   */

  /**
   * req.body
   * req.params
   * req.query
   * req.headers
   */

  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      msg: 'La cabecera Authorization no se encontró',
    });
  }

  try {
    jwt.decode(token, config.token.secret);
    next();
  } catch (error) {
    res.status(401).json({
      msg: 'Invalid token',
    });
  }
};

export default authValidator;
