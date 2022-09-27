import bcrypt from 'bcrypt';
import jwt from 'jwt-simple';
import { User } from '../models/index.js';
import config from '../../config/index.js';

const register = async (req, res) => {
  try {
    //Encripto contraseña
    const encrypted = await bcrypt.hash(req.body.password, 10);

    //Modifico el body para remplazar la pass con una encriptada
    req.body.password = encrypted;

    //Creamos un usuario
    const user = await User.create(req.body);

    //Borramos la pass para no mandarla en la respuesta
    user.password = undefined;

    return res.json({
      msg: 'Usuario registrao exitosamente',
      user,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Error al registrar usuario',
      error,
    });
  }
};

const login = async (req, res) => {
  /**
   * 1.- Buscar usuario con ese correo
   * 2.- Si no, respondemos con 401 credenciales inválidas
   * 3.- Si encuentra usuario, comparar contraseñas (bcrypt.compare)
   * 4.- Si no coinciden las pass 401 credenciales inválidas
   * 5.- Si sí coinciden generemos un token y se lo mandamos
   */

  /**
   * req.body = {
   *  password:
   *  email:
   * }
   */

  try {
    //Buscar usuario por correo
    const user = await User.findOne({
      email: req.body.email,
    });

    //VAlidar que existas usuario
    if (!user) {
      return res.status(401).json({
        msg: 'Credenciales inválidas',
      });
    }

    //Comparamos contraseñas
    const passwordMatched = await bcrypt.compare(
      req.body.password,
      user.password
    );

    //Si no coinciden retornamos 401
    if (!passwordMatched) {
      return res.status(401).json({
        msg: 'Credenciales inválidas',
      });
    }

    //ACÁ GENERAR TOKEN Y RETORNARLO

    //objeto a guardar en el token
    const payload = {
      userId: user.id,
    };

    const token = jwt.encode(payload, config.token.secret);

    return res.json({
      msg: 'Login satisfactorio',
      token,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al hacer login',
      error,
    });
  }
};

export { register, login };
